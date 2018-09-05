import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Shape } from './shape';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { PLAYABLESHAPES } from './playableShapes';
import RPS from '@lucadv/rock-paper-scissors';
import { MatchResults } from './matchResults';
import { environment, serverUrl, serverlessUrl } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  private opponentType: string;

  private playerSelectedShape: string;

  private remoteUrl: string;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`Play service: ${message}`);
  }

  private getErrorResults(errorMessage: string): MatchResults {
    const errorResult: MatchResults = {
      winner: 'none',
      tie: true,
      message: errorMessage,
      moves: {
        player1: this.playerSelectedShape,
        player2: '' 
      }
    };
    return errorResult;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<MatchResults> (operation = 'operation') {
    return (error: any): Observable<any> => {
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Return an error result that the app can actually understand
      return of(this.getErrorResults(error.message));
    };
  }

  local() {
    this.opponentType = 'local';
    return this;
  }

  server() {
    this.opponentType = 'remote';
    this.remoteUrl = serverUrl;
    return this;
  }

  serverless() {
    this.opponentType = 'remote';
    this.remoteUrl = serverlessUrl;
    return this;
  }

  play(playerSelectedShape: string): Observable<MatchResults> {
    this.playerSelectedShape = playerSelectedShape;
    if(this.opponentType === 'local') {
      return this.playLocal(playerSelectedShape);
    }
    return this.playRemote(playerSelectedShape);
  }

  private playLocal(playerSelectedShape: string): Observable<MatchResults> {
    const playResults = RPS<MatchResults>(playerSelectedShape);
    return of(playResults);
  }

  private playRemote(playerSelectedShape: string): Observable<MatchResults> {
    const options = { params: { withPlayerMove: playerSelectedShape } }
    return this.http.get<MatchResults>(this.remoteUrl, options).pipe(
      catchError(this.handleError('GET'))
    );
  }
}
