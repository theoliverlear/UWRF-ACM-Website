// fade-in-out-content.component.ts 
import {Component, HostBinding, Input} from "@angular/core";
import {fadeInOutAnimation} from "../../animations/animations";
import {
    FadeInOutProperties
} from "../../animations/models/FadeInOutProperties";

@Component({
    selector: 'fade-in-out-content',
    templateUrl: './fade-in-out-content.component.html',
    styleUrls: ['./fade-in-out-content-style.component.css'],
    animations: [
        fadeInOutAnimation
    ]
})
export class FadeInOutContentComponent {
    @Input() fadeInOutAnimationProperties: FadeInOutProperties;
    @HostBinding('@fadeInOut') get fadeInOut() {
        return {
            value: '',
            params: {
                fadeInDuration: this.fadeInOutAnimationProperties.fadeInDuration,
                waitDuration: this.fadeInOutAnimationProperties.waitDuration,
                fadeOutDuration: this.fadeInOutAnimationProperties.fadeOutDuration
            }
        }
    }
    constructor() {
        
    }
}
