// leetcode-problem.component.ts
import {Component, Input, OnInit} from "@angular/core";
import {LeetCodeProblem} from "../../../models/leetcode/LeetCodeProblem";
import {TextElementLink} from "../../../models/link/TextElementLink";
import {TargetType} from "../../../models/html/TargetType";
import {TagType} from "../../../models/html/TagType";
import {ProblemDifficulty} from "../../../models/leetcode/ProblemDifficulty";

@Component({
    selector: 'leetcode-problem',
    templateUrl: './leetcode-problem.component.html',
    styleUrls: ['./leetcode-problem.component.css']
})
export class LeetCodeProblemComponent implements OnInit {
    @Input() problem: LeetCodeProblem;
    public elementLink: TextElementLink;
    constructor() {

    }
    ngOnInit() {
        this.elementLink = new TextElementLink(this.problem.link,
                                               TargetType.BLANK,
                                               false,
                                               this.problem.title,
                                               TagType.H3);
    }
    public hasHint(): boolean {
        const isUndefined: boolean = this.problem.hint === undefined;
        const isEmpty: boolean = this.problem.hint === "";
        const isNull: boolean = this.problem.hint === null;
        const hasHint: boolean = !(isUndefined || isEmpty || isNull);
        return hasHint;
    }
    public getDifficultyClass() {
        let difficultyClass: string;
        switch (this.problem.difficulty) {
            case ProblemDifficulty.EASY:
                difficultyClass = "easy";
                break;
            case ProblemDifficulty.MEDIUM:
                difficultyClass = "medium";
                break;
            case ProblemDifficulty.HARD:
                difficultyClass = "hard";
                break;
            default:
                difficultyClass = "easy";
        }
        return difficultyClass;
    }
}
