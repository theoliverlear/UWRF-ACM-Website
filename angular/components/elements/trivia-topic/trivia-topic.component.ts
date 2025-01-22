// trivia-topic.component.ts
import {Component, Input} from "@angular/core";
import {TagType} from "../../../models/html/TagType";
import {TriviaTopic} from "../../../models/meetings/trivia/TriviaTopic";

@Component({
    selector: 'trivia-topic',
    templateUrl: './trivia-topic.component.html',
    styleUrls: ['./trivia-topic-style.component.css']
})
export class TriviaTopicComponent {
    @Input() protected triviaTopic: TriviaTopic;
    constructor() {
        
    }
    protected getTriviaTopic(): string {
        return `${this.triviaTopic} Trivia`;
    }
    protected readonly TagType = TagType;
}
