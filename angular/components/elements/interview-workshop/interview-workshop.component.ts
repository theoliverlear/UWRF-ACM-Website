// interview-workshop.component.ts 
import { Component } from "@angular/core";
import {TagType} from "../../../models/html/TagType";
import {
    codingQuestions,
    interviewQuestions
} from "../../../assets/interviewQuestionAssets";

@Component({
    selector: 'interview-workshop',
    templateUrl: './interview-workshop.component.html',
    styleUrls: ['./interview-workshop.component.css']
})
export class InterviewWorkshopComponent {
    constructor() {
        
    }

    protected readonly TagType = TagType;
    protected readonly interviewQuestions = interviewQuestions;
    protected readonly codingQuestions = codingQuestions;
}
