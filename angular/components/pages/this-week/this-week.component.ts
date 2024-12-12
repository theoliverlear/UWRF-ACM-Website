// this-week.component.ts 
import {Component, Input} from "@angular/core";

@Component({
    selector: 'this-week',
    templateUrl: './this-week.component.html',
    styleUrls: ['./this-week-style.component.css']
})
export class ThisWeekComponent {
    @Input() topicTitle: string = 'Hey, hi, hello, welcome!';
    constructor() {
        
    }
}
