export enum TimeConversion {
    // 1 level of precision
    MILLIS_IN_SECOND = 1000,
    SECONDS_IN_MINUTE = 60,
    MINUTES_IN_HOUR = 60,
    HOURS_IN_DAY = 24,
    DAYS_IN_WEEK = 7,
    // 2+ levels of precision
    SECONDS_IN_HOUR = TimeConversion.SECONDS_IN_MINUTE * TimeConversion.MINUTES_IN_HOUR,
    SECONDS_IN_DAY = TimeConversion.SECONDS_IN_HOUR * TimeConversion.HOURS_IN_DAY,
    MILLISECONDS_IN_WEEK = TimeConversion.DAYS_IN_WEEK *
                           TimeConversion.HOURS_IN_DAY *
                           TimeConversion.MINUTES_IN_HOUR *
                           TimeConversion.SECONDS_IN_MINUTE *
                           TimeConversion.MILLIS_IN_SECOND,
}