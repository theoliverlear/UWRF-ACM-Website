import {
    MeetingEvent
} from "../models/meetings/MeetingEvent";
import {DateTime} from "luxon";
/*
Spring 2025 Schedule:
- Meeting One: Trivia and Celebration
- Meeting Two: Code Quality and Readability Seminar
- Meeting Three: Expert's Talk: Shane O'Malley-Potting
- Meeting Four: Interview Workshop
- Meeting Five: Expert's Talk: Ethan Price
- Meeting Six: Expert's Talk: Sam Chapin
- Meeting Seven: Debugging Exercise
- Meeting Eight: MICS Preparation
- Meeting Nine: Java Jump-Start Workshop
- Meeting Ten: Python Unleashed: Powerful Data Science
- Meeting Eleven: Website Style Exercise
- Meeting Twelve: Final Exams Study Group
- Meeting Thirteen: Semester Closing Party
 */
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
export const interviewWorkshop: MeetingEvent = new MeetingEvent('Interview Workshop',
                                                                getMeetingDateTime('2025-02-27'),
                                                                defaultAcmMeetingPlace);
export const ethanPriceMeeting: MeetingEvent = new MeetingEvent('Expert\'s Talk: Ethan Price',
                                                                getMeetingDateTime('2025-03-06'),
                                                                defaultAcmMeetingPlace);
export const samChapinMeeting: MeetingEvent = new MeetingEvent('Expert\'s Talk: Sam Chapin',
                                                                getMeetingDateTime('2025-03-13'),
                                                                defaultAcmMeetingPlace);
export const debuggingExercise: MeetingEvent = new MeetingEvent('Debugging Exercise',
                                                                getMeetingDateTime('2025-03-27'),
                                                                defaultAcmMeetingPlace);
export const micsPreparation: MeetingEvent = new MeetingEvent('MICS Preparation',
                                                                getMeetingDateTime('2025-04-03'),
                                                                defaultAcmMeetingPlace);
export const javaJumpStartWorkshop: MeetingEvent = new MeetingEvent('Java Jump-Start Workshop',
                                                                    getMeetingDateTime('2025-04-10'),
                                                                    defaultAcmMeetingPlace);
export const pythonUnleashed: MeetingEvent = new MeetingEvent('Python Unleashed: Powerful Data Science',
                                                                    getMeetingDateTime('2025-04-17'),
                                                                    defaultAcmMeetingPlace);
export const websiteStyleExercise: MeetingEvent = new MeetingEvent('Website Style Exercise',
                                                                    getMeetingDateTime('2025-04-24'),
                                                                    defaultAcmMeetingPlace);
export const finalExamsStudyGroup: MeetingEvent = new MeetingEvent('Final Exams Study Group',
                                                                    getMeetingDateTime('2025-05-01'),
                                                                    defaultAcmMeetingPlace);
export const lastMeetingOfSemester: MeetingEvent = new MeetingEvent('Last Meeting of Semester',
                                                                    getMeetingDateTime('2025-05-08'),
                                                                    defaultAcmMeetingPlace);
const meetingEventList: MeetingEvent[] = [
    firstMeetingOfSemester,
    readabilityMeeting,
    shaneMeeting,
    interviewWorkshop,
    ethanPriceMeeting,
    samChapinMeeting,
    debuggingExercise,
    micsPreparation,
    javaJumpStartWorkshop,
    pythonUnleashed,
    websiteStyleExercise,
    finalExamsStudyGroup,
    lastMeetingOfSemester
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

