import {MeetingEventPrompt} from "../models/meetings/MeetingEventPrompt";
import {
    firstMeetingOfSemester,
    readabilityMeeting,
    shaneMeeting
} from "./eventAssets";
import {TimeConversion} from "../models/TimeConversion";

export const firstMeetingPrompt: MeetingEventPrompt = new MeetingEventPrompt(firstMeetingOfSemester,
                                                                             "Say hey, hi, hello, welcome! Win a prize in trivia!");
export const secondMeetingPrompt: MeetingEventPrompt = new MeetingEventPrompt(readabilityMeeting,
                                                                              "Code quality, readability, and maintainability.");
export const thirdMeetingPrompt: MeetingEventPrompt = new MeetingEventPrompt(shaneMeeting,
                                                                             "Shane O'Malley-Potting talks to ACM");
export const noMeetingPrompt: MeetingEventPrompt = new MeetingEventPrompt(null,
                                                                          "Nothing, we are not meeting this week.");
export const meetingEventPrompts: MeetingEventPrompt[] = [
    firstMeetingPrompt,
    secondMeetingPrompt,
    thirdMeetingPrompt,
    noMeetingPrompt
]
function getNextMeetingTitle(): MeetingEventPrompt {
    if (!hasMeetingThisWeek()) {
        return noMeetingPrompt;
    }
    const currentDate: Date = new Date();
    for (const event of meetingEventPrompts) {
        if (!event.meetingEvent) {
            continue;
        }
        if (event.meetingEvent.eventDate.getTime() > currentDate.getTime()) {
            return event;
        }
    }
}
function getOneWeekInMilliseconds(): number {
    return TimeConversion.DAYS_IN_WEEK *
           TimeConversion.HOURS_IN_DAY *
           TimeConversion.MINUTES_IN_HOUR *
           TimeConversion.SECONDS_IN_MINUTE *
           TimeConversion.MILLIS_IN_SECOND;
}
function hasMeetingThisWeek(): boolean {
    const oneWeekInMilliseconds: number = getOneWeekInMilliseconds();
    const today: number = new Date().getTime();
    for (const event of meetingEventPrompts) {
        if (!event.meetingEvent) {
            continue;
        }
        const eventDate: number = event.meetingEvent.eventDate.getTime();
        const isFutureEvent: boolean = eventDate > today;
        const isWithinOneWeek: boolean = eventDate <= today + oneWeekInMilliseconds;
        if (isFutureEvent && isWithinOneWeek) {
            return true;
        }
    }
    return false;
}
export const nextMeetingPrompt: MeetingEventPrompt = getNextMeetingTitle();
