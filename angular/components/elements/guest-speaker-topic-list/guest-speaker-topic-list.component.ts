// guest-speaker-topic-list.component.ts 
import {Component, Input} from "@angular/core";
import {TagType} from "../../../models/html/TagType";

@Component({
    selector: 'guest-speaker-topic-list',
    templateUrl: './guest-speaker-topic-list.component.html',
    styleUrls: ['./guest-speaker-topic-list.component.css']
})
export class GuestSpeakerTopicListComponent {
    @Input() topics: string[];
    constructor() {
        
    }

    protected readonly TagType = TagType;
}
