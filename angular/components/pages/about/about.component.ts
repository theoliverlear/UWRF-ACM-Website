// about.component.ts 
import {AfterViewInit, Component, ViewChild} from "@angular/core";
import {
    acmMemberImageAssets,
    logoImageAsset
} from "../../../assets/imageAssets";
import {TagType} from "../../../models/html/TagType";
import {
    acmFinalMessage,
    acmMeetingInfo,
    acmSummary,
    whatAcmDoesAnswers
} from "../../../assets/textAssets";
import {DelayService} from "../../../services/delay.service";
import {
    AcmActionListComponent
} from "../../elements/acm-action-list/acm-action-list.component";
import {slideLeftAnimation} from "../../animations/animations";
import {
    nineSecondDelayMediumFadeInAnimationProperties
} from "../../animations/animationProperties";

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about-style.component.css'],
    animations: [
        slideLeftAnimation
    ]
})
export class AboutComponent implements AfterViewInit {
    @ViewChild(AcmActionListComponent) protected acmActionListComponent: AcmActionListComponent;
    constructor(private delayService: DelayService) {
        
    }
    public async ngAfterViewInit(): Promise<void> {
        await this.delayService.delay(1000);
        console.log('sliding in');
        await this.acmActionListComponent.cascadeSlideIn();
    }
    protected readonly logoImageAsset = logoImageAsset;
    protected readonly TagType = TagType;
    protected readonly acmMeetingInfo = acmMeetingInfo;
    protected readonly acmSummary = acmSummary;
    protected readonly whatAcmDoesAnswers = whatAcmDoesAnswers;
    protected readonly acmFinalMessage = acmFinalMessage;
    protected readonly nineSecondDelayMediumFadeInAnimationProperties = nineSecondDelayMediumFadeInAnimationProperties;
    protected readonly acmMemberImageAssets = acmMemberImageAssets;
}
