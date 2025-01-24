import {DateTime} from "luxon";

export class MeetingEvent {
    public title: string;
    public eventDate: DateTime;
    public location: string;
    public constructor(title: string,
                eventData: DateTime,
                location: string) {
        this.title = title;
        this.eventDate = eventData;
        this.location = location;
    }
}