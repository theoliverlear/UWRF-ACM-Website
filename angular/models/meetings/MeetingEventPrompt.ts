import {MeetingEvent} from "./MeetingEvent";

export class MeetingEventPrompt {
    private _meetingEvent: MeetingEvent;
    public prompt: string;
    public constructor(meetingEvent: MeetingEvent,
                       prompt: string) {
        this._meetingEvent = meetingEvent;
        this.prompt = prompt;
    }
    get meetingEvent(): MeetingEvent {
        return this._meetingEvent;
    }
}