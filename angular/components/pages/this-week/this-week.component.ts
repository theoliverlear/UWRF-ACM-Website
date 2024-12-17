// this-week.component.ts 
import {Component, Input} from "@angular/core";
import {nextMeetingTitle} from "../../../assets/thisWeekAssets";

@Component({
    selector: 'this-week',
    templateUrl: './this-week.component.html',
    styleUrls: ['./this-week-style.component.css']
})
export class ThisWeekComponent {
    @Input() topicTitle: string;
    constructor() {
        
    }

    protected readonly nextMeetingTitle = nextMeetingTitle;
}
