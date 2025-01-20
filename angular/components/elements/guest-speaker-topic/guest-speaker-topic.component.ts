// guest-speaker-topic.component.ts 
import {Component, Input} from "@angular/core";

@Component({
    selector: 'guest-speaker-topic',
    templateUrl: './guest-speaker-topic.component.html',
    styleUrls: ['./guest-speaker-topic-style.component.css']
})
export class GuestSpeakerTopicComponent {
    @Input() topicTitle: string;
    constructor() {
        
    }
}
