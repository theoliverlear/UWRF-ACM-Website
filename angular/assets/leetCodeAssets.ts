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

export const fibonacciLeetCodeProblem: LeetCodeProblem = new LeetCodeProblem(
    'Fibonacci Number',
    ProblemDifficulty.EASY,
    'The Fibonacci numbers, commonly denoted F(n) form a sequence, called' +
    ' the Fibonacci sequence, such that each number is the sum of the two ' +
    'preceding ones.',
    'https://leetcode.com/problems/fibonacci-number/',
    'This problem is based on recursion of the two values previous.'
);
export const sortAnArrayLeetCodeProblem: LeetCodeProblem = new LeetCodeProblem(
    'Sort an Array',
    ProblemDifficulty.MEDIUM,
    'Given an array of integers nums, sort the array in ascending order.',
    'https://leetcode.com/problems/sort-an-array/',
    'Look into efficient algorithms like Quick Sort and Merge Sort.'
);
export const binaryTreeInorderTraversalLeetCodeProblem: LeetCodeProblem = new LeetCodeProblem(
    'Binary Tree Traversal',
    ProblemDifficulty.EASY,
    'Given the root of a binary tree, return the inorder traversal of its nodes\' values.',
    'https://leetcode.com/problems/binary-tree-inorder-traversal/',
    'Tackle the left side, move up, then tackle the right side.'
);

export const micsPreparationLeetCodeProblems: LeetCodeProblem[] = [
    fibonacciLeetCodeProblem,
    sortAnArrayLeetCodeProblem,
    binaryTreeInorderTraversalLeetCodeProblem
];