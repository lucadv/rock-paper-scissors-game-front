import { MatchResultsService } from './matchResults.service';
import { MatchResults } from './matchResults';

describe('MatchResultsService', () =>{
  
  let service: MatchResultsService;

  describe('Player winning', () => {

    let matchResults: MatchResults = {
      winner: 'player 1',
      tie: false,
      message: 'rock beats scissors',
      moves: {
        player1: 'rock',
        player2: 'scissors'
      }
    };

    beforeEach(() => { 
      service = new MatchResultsService();
    });

    it('#setMatchResults should increment player wins counter', (done: DoneFn) => {
      service.setMatchResults(matchResults);
      expect(service.playerWinsCounter).toBe(1);
      expect(service.opponentWinsCounter).toBe(0);
      done();
    });

    it('#setMatchResults multiple calls with same result should increment same player wins counter', (done: DoneFn) => {
      service.setMatchResults(matchResults);
      service.setMatchResults(matchResults);
      expect(service.playerWinsCounter).toBe(2);
      expect(service.opponentWinsCounter).toBe(0);
      done();
    });
  });

  describe('Opponent winning', () => {

    let matchResults: MatchResults = {
      winner: 'player 2',
      tie: false,
      message: 'paper beats rock',
      moves: {
        player1: 'rock',
        player2: 'paper'
      }
    };

    beforeEach(() => { 
      service = new MatchResultsService();
    });

    it('#setMatchResults should increment opponent wins counter', (done: DoneFn) => {
      service.setMatchResults(matchResults);
      expect(service.playerWinsCounter).toBe(0);
      expect(service.opponentWinsCounter).toBe(1);
      done();
    });

    it('#setMatchResults multiple calls with same result should increment same opponent wins counter', (done: DoneFn) => {
      service.setMatchResults(matchResults);
      service.setMatchResults(matchResults);
      expect(service.playerWinsCounter).toBe(0);
      expect(service.opponentWinsCounter).toBe(2);
      done();
    });
  });

  describe('Tie', () => {

    let matchResults: MatchResults = {
      winner: 'Tie',
      tie: true,
      message: 'Tie!',
      moves: {
        player1: 'rock',
        player2: 'rock'
      }
    };

    beforeEach(() => { 
      service = new MatchResultsService();
    });

    it('#setMatchResults should NOT increment any counter', (done: DoneFn) => {
      service.setMatchResults(matchResults);
      expect(service.playerWinsCounter).toBe(0);
      expect(service.opponentWinsCounter).toBe(0);
      done();
    });

    it('#setMatchResults multiple calls with same result should NOT increment any counter', (done: DoneFn) => {
      service.setMatchResults(matchResults);
      service.setMatchResults(matchResults);
      expect(service.playerWinsCounter).toBe(0);
      expect(service.opponentWinsCounter).toBe(0);
      done();
    });
  });

  describe('Mixed tie/wins player/opopnent', () => {

    const player1Win: MatchResults = {
      winner: 'player 1',
      tie: false,
      message: 'rock beats scissors',
      moves: {
        player1: 'rock',
        player2: 'scissors'
      }
    };

    const player2Win: MatchResults = {
      winner: 'player 2',
      tie: false,
      message: 'paper beats rock',
      moves: {
        player1: 'rock',
        player2: 'paper'
      }
    };

    const tie: MatchResults = {
      winner: 'Tie',
      tie: true,
      message: 'Tie!',
      moves: {
        player1: 'rock',
        player2: 'rock'
      }
    };

    beforeEach(() => { 
      service = new MatchResultsService();
    });

    it('#setMatchResults winning player 1, winning player 2, tie should increment counters correctly', (done: DoneFn) => {
      service.setMatchResults(player1Win);
      service.setMatchResults(player2Win);
      service.setMatchResults(tie);
      expect(service.playerWinsCounter).toBe(1);
      expect(service.opponentWinsCounter).toBe(1);
      done();
    });

  });

  describe('With an error result', () => {

    const errorResult: MatchResults = {
      winner: 'none',
      tie: true,
      message: 'an error message',
      moves: {
        player1: 'rock',
        player2: '' 
      }
    };


    beforeEach(() => { 
      service = new MatchResultsService();
    });

    it('#setMatchResults winning player 1, winning player 2, tie should increment counters correctly', (done: DoneFn) => {
      service.setMatchResults(errorResult);
      expect(service.playerWinsCounter).toBe(0);
      expect(service.opponentWinsCounter).toBe(0);
      done();
    });

  });
  
});
