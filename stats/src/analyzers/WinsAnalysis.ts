import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    matches.forEach((match: MatchData): void => {
      if (match[1] === this.team && match[5] === MatchResult.homeWin) {
        wins++;
      } else if (match[2] === this.team && match[5] === MatchResult.awayWin) {
        wins++;
      }
    });

    return `${this.team} won ${wins} games.`;
  }
}
