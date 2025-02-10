// leetcode-problem-hint.component.ts 
import {Component, Input} from "@angular/core";

@Component({
    selector: 'leetcode-problem-hint',
    templateUrl: './leetcode-problem-hint.component.html',
    styleUrls: ['./leetcode-problem-hint.component.css']
})
export class LeetCodeProblemHintComponent {
    @Input() hint: string;
    constructor() {
        
    }
}
