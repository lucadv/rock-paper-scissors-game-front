
import { PlayService } from './play.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatchResults } from './matchResults';
import { serverlessUrl } from '../environments/environment';

describe('PlayService', () =>{
  
  let playService: PlayService;
  let httpMock: HttpTestingController;
  const matchResults: MatchResults = {
    winner: 'player 1',
    tie: false,
    message: 'rock beats scissors',
    moves: {
      player1: 'rock',
      player2: 'scissors'
    }
  };

  describe('Player winning', () => {

    beforeEach(() => { 
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule
        ],
        providers: [
          PlayService
        ]
      });
      playService = TestBed.get(PlayService);
      httpMock = TestBed.get(HttpTestingController);
    });

    describe('Local opponent', () => {

      it('should return a matchResult', (done: DoneFn) => {
        playService.local().play('rock')
          .subscribe((res: MatchResults) => {
            done();
          });
      });
    });

    describe('Remote opponent', () => {

      describe('(with successfull request)', () => {

        it('should return a matchResult', (done: DoneFn) => {
          playService.remote().play('rock')
            .subscribe((res: MatchResults) => {
              done();
            });
  
          const req = httpMock.expectOne(`${serverlessUrl}?withPlayerMove=rock`);
          req.flush(matchResults);
        });
      });

      describe('(with error)', () => {

        it('should return a MatchResult error that the app can understand', (done: DoneFn) => {
          playService.remote().play('rock')
            .subscribe((res: MatchResults) => {
              expect(res.winner).toBe('none');
              expect(res.tie).toBe(true);
              expect(res.message).toContain('Http failure response');
              expect(res.moves.player1).toBe('rock');
              expect(res.moves.player2).toBe('');
              done();
            });
  
          const req = httpMock.expectOne(`${serverlessUrl}?withPlayerMove=rock`);
          req.error(new ErrorEvent('BOOM'));
        });
      });

      
    });

  });

});
