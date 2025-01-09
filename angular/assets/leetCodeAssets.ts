import {LeetCodeProblem} from "../models/leetcode/LeetCodeProblem";
import {ProblemDifficulty} from "../models/leetcode/ProblemDifficulty";

export const fizzBuzzLeetCodeProblem: LeetCodeProblem = new LeetCodeProblem(
    'Fizz Buzz',
    ProblemDifficulty.EASY, 'Write a program that outputs the game of Fizz Buzz.',
    'https://leetcode.com/problems/fizz-buzz/',
    'A special kind of division is used in this problem.');
export const weekOneLeetCodeProblems: LeetCodeProblem[] = [
    fizzBuzzLeetCodeProblem
];