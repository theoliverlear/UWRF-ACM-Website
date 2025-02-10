// success-story-list.component.ts 
import {Component, Input} from "@angular/core";
import {SuccessStory} from "../success-story/models/SuccessStory";

@Component({
    selector: 'success-story-list',
    templateUrl: './success-story-list.component.html',
    styleUrls: ['./success-story-list.component.css']
})
export class SuccessStoryListComponent {
    @Input() protected successStories: SuccessStory[];
    constructor() {
        
    }
}
