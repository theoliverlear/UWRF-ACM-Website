import {DateTime} from "luxon";

export class MeetingEvent {
    title: string;
    eventDate: DateTime;
    location: string;
    constructor(title: string,
                eventData: DateTime,
                location: string) {
        this.title = title;
        this.eventDate = eventData;
        this.location = location;
    }
}