import {MeetingEventPrompt} from "../models/meetings/MeetingEventPrompt";
import {
    debuggingExercise,
    ethanPriceMeeting, finalExamsStudyGroup,
    firstMeetingOfSemester,
    interviewWorkshop,
    javaJumpStartWorkshop, lastMeetingOfSemester,
    micsPreparation, pythonUnleashed,
    readabilityMeeting,
    samChapinMeeting,
    shaneMeeting, websiteStyleExercise
} from "./eventAssets";
import {TimeConversion} from "../models/TimeConversion";
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
export const firstMeetingPrompt: MeetingEventPrompt = new MeetingEventPrompt(firstMeetingOfSemester,
                                                                             "Say hey, hi, hello, welcome! Win a prize in trivia!");
export const secondMeetingPrompt: MeetingEventPrompt = new MeetingEventPrompt(readabilityMeeting,
                                                                              "Code quality, readability, and maintainability.");
export const thirdMeetingPrompt: MeetingEventPrompt = new MeetingEventPrompt(shaneMeeting,
                                                                             "Shane O'Malley-Potting talks to ACM.");
export const fourthMeetingPrompt: MeetingEventPrompt = new MeetingEventPrompt(interviewWorkshop,
                                                                                "Get ready for the job market with interview practice.");
export const fifthMeetingPrompt: MeetingEventPrompt = new MeetingEventPrompt(ethanPriceMeeting,
                                                                                 "Ethan Price talks to ACM.");
export const sixthMeetingPrompt: MeetingEventPrompt = new MeetingEventPrompt(samChapinMeeting,
                                                                                "Sam Chapin talks to ACM.");
export const seventhMeetingPrompt: MeetingEventPrompt = new MeetingEventPrompt(debuggingExercise,
                                                                                    "Find and fix all the bugs to get working code.");
export const eighthMeetingPrompt: MeetingEventPrompt = new MeetingEventPrompt(micsPreparation,
                                                                                "Learn all the algorithms used at the MICS coding competition.");
export const ninthMeetingPrompt: MeetingEventPrompt = new MeetingEventPrompt(javaJumpStartWorkshop,
                                                                                 "Learn the powers of the Java programming language.");
export const tenthMeetingPrompt: MeetingEventPrompt = new MeetingEventPrompt(pythonUnleashed,
                                                                                    "See all of Python's powerful data science tools.");
export const eleventhMeetingPrompt: MeetingEventPrompt = new MeetingEventPrompt(websiteStyleExercise,
                                                                                      "Style a website to go from ugly to professional.");
export const twelfthMeetingPrompt: MeetingEventPrompt = new MeetingEventPrompt(finalExamsStudyGroup,
                                                                                        "Study with friends for final exams.");
export const thirteenthMeetingPrompt: MeetingEventPrompt = new MeetingEventPrompt(lastMeetingOfSemester,
    "Celebrate the end of the semester with food, games, and friends at ACM.");
export const noMeetingPrompt: MeetingEventPrompt = new MeetingEventPrompt(null,
                                                                          "Nothing, we are not meeting this week.");
export const meetingEventPrompts: MeetingEventPrompt[] = [
    firstMeetingPrompt,
    secondMeetingPrompt,
    thirdMeetingPrompt,
    fourthMeetingPrompt,
    fifthMeetingPrompt,
    sixthMeetingPrompt,
    seventhMeetingPrompt,
    eighthMeetingPrompt,
    ninthMeetingPrompt,
    tenthMeetingPrompt,
    eleventhMeetingPrompt,
    twelfthMeetingPrompt,
    thirteenthMeetingPrompt,
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
