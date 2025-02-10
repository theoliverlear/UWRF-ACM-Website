// this-week-title-container.component.ts 
import {Component, Input} from "@angular/core";
import {
    thisWeekSubtitleFadeInAnimationProperties,
    thisWeekTitleFadeInAnimationProperties
} from "../../animations/animationProperties";

@Component({
    selector: 'this-week-title-container',
    templateUrl: './this-week-title-container.component.html',
    styleUrls: ['./this-week-title-container.component.css']
})
export class ThisWeekTitleContainerComponent {
    @Input() topicTitle: string;
    constructor() {
        
    }

    protected readonly thisWeekTitleFadeInAnimationProperties = thisWeekTitleFadeInAnimationProperties;
    protected readonly thisWeekSubtitleFadeInAnimationProperties = thisWeekSubtitleFadeInAnimationProperties;
}
