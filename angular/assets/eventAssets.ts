import {
    MeetingEvent
} from "../models/meetings/MeetingEvent";
import {DateTime} from "luxon";
import {TimeConversion} from "../models/TimeConversion";
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
const defaultAcmMeetingPlace = 'South Hall 21 and Virtually In Discord, Thursdays 4:30 PM';
export const firstMeetingOfSemester: MeetingEvent = new MeetingEvent('First Meeting of Semester',
                                                                     getMeetingDateTime('2025-09-11'),
                                                                     defaultAcmMeetingPlace);
export const readabilityMeeting: MeetingEvent = new MeetingEvent("Code Quality and Readability Workshop",
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
export function getNextMeetingEvent(): MeetingEvent {
    let closestEvent: MeetingEvent = meetingEventList[0];
    const now: DateTime = DateTime.now().setZone(riverFallsTimeZone, { keepLocalTime: true });
    for (const event of meetingEventList) {
        if (addTwoHours(event.eventDate) > now) {
            closestEvent = event;
            break;
        }
    }
    return closestEvent;
}
export function hasMeetingThisWeek() {
    const today: number = DateTime.now().setZone('America/Chicago').toMillis();
    const nextMeeting: number = getNextMeetingEvent().eventDate.toMillis();
    // const isFutureEvent: boolean = nextMeeting > today;
    const isWithinOneWeek: boolean = nextMeeting <= today + TimeConversion.MILLISECONDS_IN_WEEK;
    return isWithinOneWeek;
}
export function addTwoHours(dateTime: DateTime): DateTime {
    return dateTime.plus({hours: 2});
}
export const nextEvent: MeetingEvent = getNextMeetingEvent();

export function isFirstMeeting(): boolean {
    const isFirstMeetingNext: boolean = getNextMeetingEvent() === firstMeetingOfSemester;
    return isFirstMeetingNext && hasMeetingThisWeek();
}
export function isSecondMeeting(): boolean {
    const isReadabilityMeetingNext: boolean = getNextMeetingEvent() === readabilityMeeting;
    return isReadabilityMeetingNext && hasMeetingThisWeek();
}
export function isThirdMeeting(): boolean {
    const isShaneMeetingNext: boolean = getNextMeetingEvent() === shaneMeeting;
    return isShaneMeetingNext && hasMeetingThisWeek();
}
export function isFourthMeeting(): boolean {
    const isInterviewWorkshopNext: boolean = getNextMeetingEvent() === interviewWorkshop;
    return isInterviewWorkshopNext  && hasMeetingThisWeek();
}
export function isFifthMeeting(): boolean {
    const isEthanPriceMeetingNext: boolean = getNextMeetingEvent() === ethanPriceMeeting;
    return isEthanPriceMeetingNext && hasMeetingThisWeek();
}
export function isSixthMeeting(): boolean {
    const isSamChapinMeetingNext: boolean = getNextMeetingEvent() === samChapinMeeting;
    return isSamChapinMeetingNext && hasMeetingThisWeek();
}
export function isSeventhMeeting(): boolean {
    const isDebuggingExerciseNext: boolean = getNextMeetingEvent() === debuggingExercise;
    return isDebuggingExerciseNext && hasMeetingThisWeek();
}
export function isEighthMeeting(): boolean {
    const isMicsPreparationNext: boolean = getNextMeetingEvent() === micsPreparation;
    return isMicsPreparationNext && hasMeetingThisWeek();
}
export function isNinthMeeting(): boolean {
    const isJavaJumpStartWorkshopNext: boolean = getNextMeetingEvent() === javaJumpStartWorkshop;
    return isJavaJumpStartWorkshopNext && hasMeetingThisWeek();
}
export function isTenthMeeting(): boolean {
    const isPythonUnleashedNext: boolean = getNextMeetingEvent() === pythonUnleashed;
    return pythonUnleashed && hasMeetingThisWeek();
}
export function isEleventhMeeting(): boolean {
    const isWebsiteStyleExerciseNext: boolean = getNextMeetingEvent() === websiteStyleExercise;
    return isWebsiteStyleExerciseNext && hasMeetingThisWeek();
}
export function isTwelfthMeeting(): boolean {
    const isFinalExamsStudyGroupNext: boolean = getNextMeetingEvent() === finalExamsStudyGroup;
    return isFinalExamsStudyGroupNext && hasMeetingThisWeek();
}
export function isLastMeeting(): boolean {
    const isLastMeetingNext: boolean = getNextMeetingEvent() === lastMeetingOfSemester;
    return isLastMeetingNext && hasMeetingThisWeek();
}
