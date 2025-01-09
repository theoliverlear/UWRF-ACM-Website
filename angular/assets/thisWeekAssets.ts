export const firstMeetingTitle: [string, Date] = ["Say hey, hi, hello, welcome!",
                                                  new Date('2025-02-06')];
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
    let hasUpcomingEvents: boolean = upcomingEvents.length > 0;
    if (hasUpcomingEvents) {
        upcomingEvents.sort((currentMeeting: [string, Date], nextMeeting: [string, Date]): number => {
            let meetingTimeDifference: number = currentMeeting[1].getTime() - nextMeeting[1].getTime();
            return meetingTimeDifference;
        });
        return upcomingEvents[0];
    } else {
        return null;
    }
}
function hasMeetingThisWeek(): boolean {
    const oneWeekInMilliseconds: number = 7 * 24 * 60 * 60 * 1000;
    const today: number = new Date().getTime();
    for (const event of eventTitles) {
        const eventDate: number = event[1].getTime();
        const isFutureEvent: boolean = eventDate > today;
        const isWithinOneWeek: boolean = eventDate <= today + oneWeekInMilliseconds;
        if (isFutureEvent && isWithinOneWeek) {
            return true;
        }
    }
    return false;
}
export const nextMeetingTitle: [string, Date] = getNextMeetingTitle();
