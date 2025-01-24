import {
    MeetingEvent
} from "../models/meetings/MeetingEvent";
import {DateTime} from "luxon";

const riverFallsTimeZone: string = 'America/Chicago';
const defaultAcmMeetingPlace = 'South Hall 21 and Virtually In Discord 4:30 PM';
export const firstMeetingOfSemester: MeetingEvent = new MeetingEvent('First Meeting of Semester',
                                                                     getMeetingDateTime('2025-02-06'),
                                                                     defaultAcmMeetingPlace);
export const readabilityMeeting: MeetingEvent = new MeetingEvent("Code Quality and Readability Seminar",
                                                                 getMeetingDateTime('2025-02-13'),
                                                                defaultAcmMeetingPlace);
export const shaneMeeting: MeetingEvent = new MeetingEvent('Shane O\'Malley Potting Talks to ACM',
                                                                    getMeetingDateTime('2025-02-20'),
                                                                    defaultAcmMeetingPlace);
export const lastMeetingOfSemester: MeetingEvent = new MeetingEvent('Last Meeting of Semester',
                                                                    getMeetingDateTime('2025-05-08'),
                                                                    defaultAcmMeetingPlace);
const meetingEventList: MeetingEvent[] = [
    firstMeetingOfSemester,
    readabilityMeeting,
    lastMeetingOfSemester,
];
function getMeetingDateTime(dateString: string): DateTime {
    const timeZone: { zone: string } = { zone: riverFallsTimeZone };
    return DateTime.fromISO(`${dateString}T16:30:00`, timeZone).setZone(riverFallsTimeZone, { keepLocalTime: true });
}
function getNextMeetingEvent(): MeetingEvent {
    let closestEvent: MeetingEvent = meetingEventList[0];
    for (const event of meetingEventList) {
        if (event.eventDate.toMillis() < closestEvent.eventDate.toMillis()) {
            closestEvent = event;
        }
    }
    return closestEvent;
}
export const nextEvent: MeetingEvent = getNextMeetingEvent();

