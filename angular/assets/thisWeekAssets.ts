export const firstMeetingTitle: [string, Date] = ["Say hey, hi, hello, welcome!",
                                                  new Date('2025-02-07')];
export const eventTitles: [string, Date][] = [
    firstMeetingTitle
];
function getNextMeetingTitle(): [string, Date] {
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
export const nextMeetingTitle: [string, Date] = getNextMeetingTitle();