// event-countdown-timer.component.ts 
import {ChangeDetectorRef, Component, Input, OnInit} from "@angular/core";
import {DateInterval} from "./models/DateInterval";

@Component({
    selector: 'event-countdown-timer',
    templateUrl: './event-countdown-timer.component.html',
    styleUrls: ['./event-countdown-timer-style.component.css']
})
export class EventCountdownTimerComponent implements OnInit {
    @Input() eventDate: Date;
    readonly meetingDurationInMinutes: number = 120;
    isDuringEvent: boolean = false;
    remainingTime: number;
    constructor(private changeDetector: ChangeDetectorRef) {
        
    }
    ngOnInit() {
        this.updateTime();
        setInterval(() => this.updateTime(), 1000);
    }
    updateTime() {
        const currentTime: number = new Date().getTime();
        const eventStartTime: number = this.eventDate.getTime();
        const eventEndTime: number = eventStartTime + this.meetingDurationInMinutes * 60 * 1000;
        this.remainingTime = (eventEndTime - currentTime) / 1000;
        this.setEventIsNow(currentTime, eventStartTime, eventEndTime);
        this.changeDetector.detectChanges();
    }
    setEventIsNow(currentTime: number,
                  eventStartTime: number,
                  eventEndTime: number): void {
        this.isDuringEvent = currentTime >= eventStartTime && currentTime <= eventEndTime;
    }
    isNow() {
        return this.isDuringEvent;
    }
    protected readonly DateInterval = DateInterval;
}
