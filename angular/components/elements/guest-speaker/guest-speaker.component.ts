// guest-speaker.component.ts 
import {Component, Input} from "@angular/core";
import {GuestSpeaker} from "../../../models/meetings/GuestSpeaker";
import {TagType} from "../../../models/html/TagType";

@Component({
    selector: 'guest-speaker',
    templateUrl: './guest-speaker.component.html',
    styleUrls: ['./guest-speaker-style.component.css']
})
export class GuestSpeakerComponent {
    @Input() speaker: GuestSpeaker;
    constructor() {
        
    }

    protected readonly TagType = TagType;
}
