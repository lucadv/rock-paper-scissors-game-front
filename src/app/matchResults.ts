export class Moves { player1: string; player2: string; }
export class MatchResults {
  winner: string;
  tie: boolean;
  message: string;
  moves: Moves;
}