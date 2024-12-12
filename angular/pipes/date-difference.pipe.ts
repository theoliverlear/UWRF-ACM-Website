import {Pipe, PipeTransform} from '@angular/core';
import {
    DateInterval
} from "../components/elements/event-countdown-timer/models/DateInterval";
@Pipe({
    name: 'dateDifference'
})
export class DateDifferencePipe implements PipeTransform {
    transform(dateValue: number, interval: DateInterval): number {
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
    getDays(dateValue: number) {
        return Math.floor(dateValue / (60 * 60 * 24));
    }
    getHours(dateValue: number) {
        return Math.floor((dateValue % (60 * 60 * 24)) / (60 * 60));
    }
    getMinutes(dateValue: number) {
        return Math.floor((dateValue % (60 * 60)) / 60);
    }
    getSeconds(dateValue: number) {
        return Math.floor(dateValue % 60);
    }
}