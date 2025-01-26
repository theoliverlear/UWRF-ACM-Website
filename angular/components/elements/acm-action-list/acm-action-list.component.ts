// acm-action-list.component.ts 
import {Component, ViewChild, ViewChildren} from "@angular/core";
import {
    promoTextBuildTech, promoTextFormFriendships,
    promoTextMeetProfessions,
    promoTextSoftwareDevelopment, whatAcmDoesAnswers
} from "../../../assets/textAssets";
import {AcmActionComponent} from "../acm-action/acm-action.component";
import {DelayService} from "../../../services/delay.service";
import {slideLeftAnimation} from "../../animations/animations";
import {
    acmActionListSlideInAnimationProperties
} from "../../animations/animationProperties";
import {
    SlideInContentComponent
} from "../slide-in-content/slide-in-content.component";

@Component({
    selector: 'acm-action-list',
    templateUrl: './acm-action-list.component.html',
    styleUrls: ['./acm-action-list-style.component.css'],
    animations: [
        slideLeftAnimation
    ]
})
export class AcmActionListComponent {
    @ViewChildren(SlideInContentComponent) protected acmActionComponents: SlideInContentComponent[];
    constructor(private delayService: DelayService) {
        
    }
    public async cascadeSlideIn(): Promise<void> {
        const componentArray = Array.from(this.acmActionComponents);
        if (window.innerWidth > 1000) {
            componentArray.reverse();
        }
        for (let component of componentArray) {
            component.slideIn();
            await this.delayService.delay(1500);
        }
    }
    protected readonly acmActionListSlideInAnimationProperties = acmActionListSlideInAnimationProperties;
    protected readonly whatAcmDoesAnswers = whatAcmDoesAnswers;
}
