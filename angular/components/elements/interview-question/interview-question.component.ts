// interview-question.component.ts 
import {Component, Input} from "@angular/core";
import {
    InterviewQuestionAsset
} from "../../../assets/interviewQuestionAssets";

@Component({
    selector: 'interview-question',
    templateUrl: './interview-question.component.html',
    styleUrls: ['./interview-question.component.css']
})
export class InterviewQuestionComponent {
    @Input() interviewQuestion: InterviewQuestionAsset;
    constructor() {
        
    }
}
