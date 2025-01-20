export class MeetingEvent {
    title: string;
    eventDate: Date;
    location: string;
    constructor(title: string,
                eventData: Date,
                location: string) {
        this.title = title;
        this.eventDate = eventData;
        this.location = location;
    }
}