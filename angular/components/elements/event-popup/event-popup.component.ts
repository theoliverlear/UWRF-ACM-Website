// event-popup.component.ts 
import {Component, Input} from "@angular/core";
import {MeetingEvent} from "../../../models/meetings/MeetingEvent";
import {nextEvent} from "../../../assets/eventAssets";

@Component({
    selector: 'event-popup',
    templateUrl: './event-popup.component.html',
    styleUrls: ['./event-popup-style.component.css']
})
export class EventPopupComponent {
    @Input() meetingEvent: MeetingEvent = nextEvent;
    constructor() {
        
    }
}
