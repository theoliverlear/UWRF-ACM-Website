import {Pipe, PipeTransform} from '@angular/core';
import {
    DateInterval
} from "../components/elements/event-countdown-timer/models/DateInterval";
import {TimeConversion} from "../models/TimeConversion";
@Pipe({
    name: 'dateDifference'
})
export class DateDifferencePipe implements PipeTransform {
    public transform(dateValue: number, interval: DateInterval): number {
        dateValue = this.normalizeDateValue(dateValue);
        switch (interval) {
            case DateInterval.DAYS:
                return this.getDays(dateValue);
            case DateInterval.HOURS:
                return this.getHours(dateValue);
            case DateInterval.MINUTES:
                return this.getMinutes(dateValue);
            case DateInterval.SECONDS:
                return this.getSeconds(dateValue);
            default:
                return 0;
        }
    }
    private normalizeDateValue(dateValue: number): number {
        return Math.max(0, Math.floor(dateValue));
    }
    private getDays(dateValue: number): number {
        const remainingDays: number = dateValue / TimeConversion.SECONDS_IN_DAY;
        return Math.floor(remainingDays);
    }
    private getHours(dateValue: number): number {
        const remainingSeconds: number = dateValue % TimeConversion.SECONDS_IN_DAY;
        const remainingHours: number = remainingSeconds / TimeConversion.SECONDS_IN_HOUR;
        return Math.floor(remainingHours);
    }
    private getMinutes(dateValue: number): number {
        const remainingSeconds: number = dateValue % TimeConversion.SECONDS_IN_HOUR;
        const remainingMinutes: number = remainingSeconds / TimeConversion.SECONDS_IN_MINUTE;
        return Math.floor(remainingMinutes);
    }
    private getSeconds(dateValue: number): number {
        const remainingSeconds: number = dateValue % TimeConversion.SECONDS_IN_MINUTE;
        return Math.floor(remainingSeconds);
    }
}