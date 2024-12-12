// this-week-title-container.component.ts 
import {Component, Input} from "@angular/core";

@Component({
    selector: 'this-week-title-container',
    templateUrl: './this-week-title-container.component.html',
    styleUrls: ['./this-week-title-container-style.component.css']
})
export class ThisWeekTitleContainerComponent {
    @Input() topicTitle: string;
    constructor() {
        
    }
}
