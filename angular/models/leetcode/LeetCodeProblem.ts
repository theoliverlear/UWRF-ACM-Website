import {ProblemDifficulty} from "./ProblemDifficulty";

export class LeetCodeProblem {
    public title: string;
    public difficulty: ProblemDifficulty;
    public description: string;
    public link: string;
    public hint?: string;
    public constructor(title: string,
                       difficulty: ProblemDifficulty,
                       description: string,
                       link: string,
                       hint?: string) {
        this.title = title;
        this.difficulty = difficulty;
        this.description = description;
        this.link = link;
        this.hint = hint;
    }
}