// leetcode-exercise.component.ts 
import {Component, Input} from "@angular/core";
import {LeetCodeProblem} from "../../../models/leetcode/LeetCodeProblem";

@Component({
    selector: 'leetcode-exercise',
    templateUrl: './leetcode-exercise.component.html',
    styleUrls: ['./leetcode-exercise-style.component.css']
})
export class LeetCodeExerciseComponent {
    @Input() problems: LeetCodeProblem[];
    constructor() {
        
    }
}
