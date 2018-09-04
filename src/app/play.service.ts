import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Shape } from './shape';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { PLAYABLESHAPES } from './playableShapes';
import RPS from '@lucadv/rock-paper-scissors';
import { MatchResults, Moves } from './matchResults';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  private opponentType: string;

  private remoteUrl = 'https://4s9wed9e65.execute-api.eu-west-1.amazonaws.com/mvp/play'; // @todo HARDCODED, CHANGE IT

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string) {
    console.log(message);
    this.messageService.add(`Play service: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  local() {
    this.opponentType = 'local';
    return this;
  }

  remote() {
    this.opponentType = 'remote';
    return this;
  }

  play(playerSelectedShape: string): Observable<MatchResults> {
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
    return this.http.get<MatchResults>(this.remoteUrl, options); //@todo pipe error handling
  }
}
