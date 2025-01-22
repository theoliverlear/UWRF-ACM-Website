import {TriviaPrize} from "../models/meetings/trivia/TriviaPrize";
import {TriviaTopic} from "../models/meetings/trivia/TriviaTopic";
import {TriviaGame} from "../models/meetings/trivia/TriviaGame";

const bookAndCandyPrizes: TriviaPrize[] = [TriviaPrize.BOOK, TriviaPrize.CANDY];
export const musicTrivia: TriviaGame = new TriviaGame(
    TriviaTopic.MUSIC,
    bookAndCandyPrizes,
    'Battle in culture with music trivia! Put your creative knowledge to ' +
    'use and win some prizes!'
);
export const acmTrivia = new TriviaGame(
    TriviaTopic.ACM,
    bookAndCandyPrizes,
    'Test your knowledge of local and national ACM trivia and win some prizes!'
);
export const programmingTrivia = new TriviaGame(
    TriviaTopic.PROGRAMMING,
    bookAndCandyPrizes,
    'Use the knowledge of the core ACM topics like computer science, data' +
    ' science, and information technology to win some prizes!'
);
export const weekOneTriviaGames: TriviaGame[] = [musicTrivia, acmTrivia, programmingTrivia];