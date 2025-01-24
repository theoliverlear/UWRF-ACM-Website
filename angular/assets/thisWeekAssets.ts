import {MeetingEventPrompt} from "../models/meetings/MeetingEventPrompt";
import {
    firstMeetingOfSemester,
    readabilityMeeting,
    shaneMeeting
} from "./eventAssets";
import {TimeConversion} from "../models/TimeConversion";
import {DateTime} from "luxon";

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
    const currentDateValue: number = DateTime.now().setZone('America/Chicago').toMillis();
    for (const event of meetingEventPrompts) {
        if (!event.meetingEvent) {
            continue;
        }
        if (event.meetingEvent.eventDate.toMillis() > currentDateValue) {
            return event;
        }
    }
}
function hasMeetingThisWeek(): boolean {
    const today: number = DateTime.now().setZone('America/Chicago').toMillis();
    for (const event of meetingEventPrompts) {
        if (!event.meetingEvent) {
            continue;
        }
        const eventDate: number = event.meetingEvent.eventDate.toMillis();
        const isFutureEvent: boolean = eventDate > today;
        const isWithinOneWeek: boolean = eventDate <= today + TimeConversion.MILLISECONDS_IN_WEEK;
        if (isFutureEvent && isWithinOneWeek) {
            return true;
        }
    }
    return false;
}
export const nextMeetingPrompt: MeetingEventPrompt = getNextMeetingTitle();
