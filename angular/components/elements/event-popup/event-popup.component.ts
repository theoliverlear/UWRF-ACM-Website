// event-popup.component.ts 
import {AfterViewInit, Component, Input} from "@angular/core";
import {MeetingEvent} from "../../../models/meetings/MeetingEvent";
import {getNextMeetingEvent, nextEvent} from "../../../assets/eventAssets";

@Component({
    selector: 'event-popup',
    templateUrl: './event-popup.component.html',
    styleUrls: ['./event-popup.component.css']
})
export class EventPopupComponent implements AfterViewInit {
    @Input() meetingEvent: MeetingEvent = nextEvent;
    constructor() {
        
    }
    ngAfterViewInit() {
        this.continuouslyUpdateEvent();
    }
    continuouslyUpdateEvent() {
        setInterval(() => {
            this.meetingEvent = getNextMeetingEvent();
        }, 1000);
    }
}
