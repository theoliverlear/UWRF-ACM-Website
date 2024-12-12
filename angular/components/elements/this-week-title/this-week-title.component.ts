// this-week-title.component.ts 
import { Component } from "@angular/core";
import {TagType} from "../../../models/html/TagType";

@Component({
    selector: 'this-week-title',
    templateUrl: './this-week-title.component.html',
    styleUrls: ['./this-week-title-style.component.css']
})
export class ThisWeekTitleComponent {
    constructor() {
        
    }

    protected readonly TagType = TagType;
}
