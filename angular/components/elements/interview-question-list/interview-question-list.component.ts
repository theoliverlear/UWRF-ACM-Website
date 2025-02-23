// interview-question-list.component.ts 
import {Component, Input} from "@angular/core";
import {
    InterviewQuestionAsset
} from "../../../assets/interviewQuestionAssets";
import {TagType} from "../../../models/html/TagType";

@Component({
    selector: 'interview-question-list',
    templateUrl: './interview-question-list.component.html',
    styleUrls: ['./interview-question-list.component.css']
})
export class InterviewQuestionListComponent {
    @Input() titleText: string;
    @Input() interviewQuestionList: InterviewQuestionAsset[];
    constructor() {
        
    }

    protected readonly TagType = TagType;
}
