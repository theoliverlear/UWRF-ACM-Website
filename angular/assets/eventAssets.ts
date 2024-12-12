import {
    MeetingEvent
} from "../components/elements/event-popup/models/MeetingEvent";

export const firstMeetingOfSemester: MeetingEvent = new MeetingEvent('First Meeting of Semester', new Date('2025-02-09'), 'South Hall 21 and Virtually In Discord');

export const lastMeetingOfSemester: MeetingEvent = new MeetingEvent('Last Meeting of Semester', new Date('2025-05-15'), 'South Hall 21 and Virtually In Discord');
const meetingEventList: MeetingEvent[] = [
    firstMeetingOfSemester,
    lastMeetingOfSemester,
];
function getNextMeetingEvent(): MeetingEvent {
    const now = new Date();
    const upcomingEvents: MeetingEvent[] = meetingEventList.filter((event: MeetingEvent): boolean => {
        return event.eventDate > now;
    });
    if (upcomingEvents.length > 0) {
        upcomingEvents.sort((currentMeeting: MeetingEvent, nextMeeting: MeetingEvent): number => {
            return currentMeeting.eventDate.getTime() - nextMeeting.eventDate.getTime();
        });
        return upcomingEvents[0];
    } else {
        return null;
    }
}
export const nextEvent: MeetingEvent = getNextMeetingEvent();

