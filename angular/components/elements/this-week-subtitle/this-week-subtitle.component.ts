// this-week-subtitle.component.ts 
import {Component, Input} from "@angular/core";
import {TagType} from "../../../models/html/TagType";

@Component({
    selector: 'this-week-subtitle',
    templateUrl: './this-week-subtitle.component.html',
    styleUrls: ['./this-week-subtitle.component.css']
})
export class ThisWeekSubtitleComponent {
    @Input() topicTitle: string;
    constructor() {
        
    }

    protected readonly TagType = TagType;
}
