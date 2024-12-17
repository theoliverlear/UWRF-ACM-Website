// event-countdown-timer.component.ts 
import {Component, Input, OnInit} from "@angular/core";
import {DateInterval} from "./models/DateInterval";

@Component({
    selector: 'event-countdown-timer',
    templateUrl: './event-countdown-timer.component.html',
    styleUrls: ['./event-countdown-timer-style.component.css']
})
export class EventCountdownTimerComponent implements OnInit {
    @Input() eventDate: Date;
    remainingTime: number;
    constructor() {
        
    }
    ngOnInit() {
        this.updateTime();
        setInterval(() => this.updateTime(), 1000);
    }
    updateTime() {
        const currentTime: number = new Date().getTime();
        const targetTime: number = this.eventDate.getTime();
        const remainingTime: number = (targetTime - currentTime) / 1000;
        this.remainingTime = remainingTime;
    }
    isNow() {
        return this.remainingTime <= 0;
    }
    protected readonly DateInterval = DateInterval;
}
