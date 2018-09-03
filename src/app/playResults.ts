export class Moves { player1: string; player2: string; }
export class PlayResults {
  winner: string;
  tie: boolean;
  message: string;
  moves: Moves;
}