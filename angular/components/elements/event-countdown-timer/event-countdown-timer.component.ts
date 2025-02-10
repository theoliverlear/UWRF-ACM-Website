// event-countdown-timer.component.ts 
import {ChangeDetectorRef, Component, Input, OnInit} from "@angular/core";
import {DateInterval} from "./models/DateInterval";
import {DateTime} from "luxon";

@Component({
    selector: 'event-countdown-timer',
    templateUrl: './event-countdown-timer.component.html',
    styleUrls: ['./event-countdown-timer.component.css']
})
export class EventCountdownTimerComponent implements OnInit {
    @Input() protected eventDate: DateTime;
    protected readonly meetingDurationInMinutes: number = 120;
    protected isDuringEvent: boolean = false;
    protected remainingTime: number;
    constructor(private changeDetector: ChangeDetectorRef) {
        
    }
    ngOnInit(): void {
        this.updateTime();
        this.continuouslyUpdateTime();
    }
    private continuouslyUpdateTime(): void {
        setInterval((): void => this.updateTime(), 1000);
    }
    private updateTime(): void {
        const currentTime: number = DateTime.now().setZone('America/Chicago').toMillis();
        const eventStartTime: number = this.eventDate.toMillis();
        const eventEndTime: number = eventStartTime + this.meetingDurationInMinutes * 60 * 1000;
        this.remainingTime = (eventStartTime - currentTime) / 1000;
        this.setEventIsNow(currentTime, eventStartTime, eventEndTime);
        this.changeDetector.detectChanges();
    }
    private setEventIsNow(currentTime: number,
                  eventStartTime: number,
                  eventEndTime: number): void {
        const hasEventStarted: boolean = currentTime >= eventStartTime;
        const hasEventEnded: boolean = eventEndTime <= currentTime;
        this.isDuringEvent = hasEventStarted && !hasEventEnded;
    }
    protected readonly DateInterval = DateInterval;
}
