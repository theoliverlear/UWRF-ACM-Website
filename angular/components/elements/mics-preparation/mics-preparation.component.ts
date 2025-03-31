// mics-preparation.component.ts 
import { Component } from "@angular/core";
import {TagType} from "../../../models/html/TagType";
import {
    binaryTreeInorderTraversalLeetCodeProblem,
    fibonacciLeetCodeProblem,
    sortAnArrayLeetCodeProblem
} from "../../../assets/leetCodeAssets";

@Component({
    selector: 'mics-preparation',
    templateUrl: './mics-preparation.component.html',
    styleUrls: ['./mics-preparation.component.css']
})
export class MicsPreparationComponent {
    constructor() {
        
    }

    protected readonly TagType = TagType;
    protected readonly fibonacciLeetCodeProblem = fibonacciLeetCodeProblem;
    protected readonly sortAnArrayLeetCodeProblem = sortAnArrayLeetCodeProblem;
    protected readonly binaryTreeInorderTraversalLeetCodeProblem = binaryTreeInorderTraversalLeetCodeProblem;
}
