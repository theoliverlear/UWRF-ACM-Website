// slide-in-content.component.ts 
import {Component, HostBinding, Input} from "@angular/core";
import {slideLeftAnimation} from "../../animations/animations";
import {SlideInProperties} from "../../animations/models/SlideInProperties";

@Component({
    selector: 'slide-in-content',
    templateUrl: './slide-in-content.component.html',
    styleUrls: ['./slide-in-content-style.component.css'],
    animations: [
        slideLeftAnimation
    ]
})
export class SlideInContentComponent {
    slideState: 'hidden' | 'visible' = 'hidden';
    @Input() protected slideInProperties: SlideInProperties;
    @HostBinding('@slideLeft') get slideLeft() {

        return {
            value: this.slideState,
            params: {
                duration: this.slideInProperties.duration,
                delay: this.slideInProperties.delay
            }
        }
    }
    slideIn(): void {
        this.slideState = 'visible';
    }
    constructor() {
        
    }
}
