// fade-in-content.component.ts 
import {Component, HostBinding, Input} from "@angular/core";
import {FadeInProperties} from "../../animations/models/FadeInProperties";
import {
    defaultFadeInAnimationProperties
} from "../../animations/animationProperties";
import {fadeInAnimation} from "../../animations/animations";

@Component({
    selector: 'fade-in-content',
    templateUrl: './fade-in-content.component.html',
    styleUrls: ['./fade-in-content.component.css'],
    animations: [
        fadeInAnimation
    ]
})
export class FadeInContentComponent {
    @Input() animationProperties: FadeInProperties = defaultFadeInAnimationProperties;
    @HostBinding('@fadeIn') get fadeIn() {
        return {
            value: '',
            params: {
                duration: this.animationProperties.duration,
                delay: this.animationProperties.delay
            }
        }
    }
    constructor() {
        
    }
}
