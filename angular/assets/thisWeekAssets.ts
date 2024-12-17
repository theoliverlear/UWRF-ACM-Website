export const firstMeetingTitle: [string, Date] = ["Say hey, hi, hello, welcome!",
                                                  new Date('2025-02-07')];
export const noMeetingTitle: [string, Date] = ["Nothing, we are not meeting this week.",
                                                  new Date()];
export const eventTitles: [string, Date][] = [
    firstMeetingTitle
];
function getNextMeetingTitle(): [string, Date] {
    if (!hasMeetingThisWeek()) {
        return noMeetingTitle;
    }
    const now = new Date();
    const upcomingEvents: [string, Date][] = eventTitles.filter((event: [string, Date]): boolean => {
        return event[1] > now;
    });
    if (upcomingEvents.length > 0) {
        upcomingEvents.sort((currentMeeting: [string, Date], nextMeeting: [string, Date]): number => {
            return currentMeeting[1].getTime() - nextMeeting[1].getTime();
        });
        return upcomingEvents[0];
    } else {
        return null;
    }
}
function hasMeetingThisWeek(): boolean {
    const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
    const today = new Date().getTime();
    for (const event of eventTitles) {
        const eventDate = event[1].getTime();
        if (eventDate > today && eventDate <= today + oneWeekInMilliseconds) {
            return true;
        }
    }
    return false;
}
export const nextMeetingTitle: [string, Date] = getNextMeetingTitle();
