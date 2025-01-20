// home.component.ts 
import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ViewChild
} from "@angular/core";
import {TypeSpeed} from "../../elements/typing-text/models/TypeSpeed";
import {
    promoTextAcronym, promoTextBuildTech,
    promoTextCallUs, promoTextFormFriendships,
    promoTextFullTitle,
    promoTextMeetProfessions,
    promoTextSoftwareDevelopment,
    promoTextWhatAcmDoesPrompt
} from "../../../assets/textAssets";
import {TagType} from "../../../models/html/TagType";
import {
    TypingTextComponent
} from "../../elements/typing-text/typing-text.component";
import {
    acmTitleFadeInOutAnimationProperties,
    homeEventPopupFadeInAnimationProperties, quickFadeInAnimationProperties,
    whatAcmDoesContentFadeInOutAnimationProperties
} from "../../animations/animationProperties";
import {DelayService} from "../../../services/delay.service";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home-style.component.css']
})
export class HomeComponent implements AfterViewInit{
    @ViewChild('topTypingText') topTypingText: TypingTextComponent;
    @ViewChild('learnSoftwareTypingText') learnSoftwareTypingText: TypingTextComponent;
    showAcronym: boolean = false;
    showWhatAcmDoes: boolean = false;
    showAcmActionsList: boolean = false;
    showLearnSoftware: boolean = false;
    showBuildTech: boolean = false;
    showFormFriendships: boolean = false;
    constructor(private delayService: DelayService) {

    }

    ngAfterViewInit(): void {
        this.promoSequenceLoop();
    }
    promoSequenceLoop() {
        this.promoSequence().then(() => {

        });
    }
    promoSequence(): Promise<void> {
        return this.typeIntroText().then(() => {
            this.setBlinkingCursor(true, true);
            this.delayService.delay(2000).then(() => {
                this.replaceIntroText().then(() => {
                    this.writeNameText().then(() => {
                        this.delayService.delay(6000).then(() => {
                            this.showAcronym = false;
                            this.setBlinkingCursor(true, true);
                            this.topTypingText.deleteText().then(() => {
                                this.delayService.delay(500).then(() => {
                                    this.topTypingText.textToType = promoTextWhatAcmDoesPrompt;
                                    this.topTypingText.typeText().then(() => {
                                        console.log('what acm does');
                                        this.showWhatAcmDoes = true;
                                        this.showAcmActionsList = true;
                                        this.delayService.delay(2500).then(() => {
                                            this.showLearnSoftware = true;
                                            this.delayService.delay(2750).then(() => {
                                                this.showBuildTech = true;
                                                this.delayService.delay(2750).then(() => {
                                                    this.showFormFriendships = true;
                                                });
                                            });
                                        });
                                    });
                                });
                            })
                        });
                    });
                });
            });
        });
    }
    protected typeIntroText(): Promise<void> {
        return this.topTypingText.typeText();
    }
    protected replaceIntroText() {
        return this.topTypingText.deleteText().then(() => {
            this.topTypingText.textToType = promoTextCallUs;
        });
    }
    protected writeNameText(): Promise<void> {
        return this.topTypingText.typeText().then(() => {
            this.setBlinkingCursor(true);
            this.showAcronym = true;
        });
    }
    protected replaceWriteNameText() {
        return this.topTypingText.deleteText().then(() => {
            // this.topTypingText.textToType = promoTextFullTitle;
        });
    }
    protected setBlinkingCursor(cursorBlinking: boolean,
                                toggleBlinkingClass: boolean = false): void {
        this.topTypingText.useBlinkingCursor = cursorBlinking;
        if (toggleBlinkingClass) {
            this.topTypingText.toggleBlinkingClass();
        }
    }
    protected resetSequence() {
        this.topTypingText.textToType = promoTextFullTitle;
        this.showAcronym = false;
    }
    protected readonly TypeSpeed = TypeSpeed;
    protected readonly promoTextFullTitle = promoTextFullTitle;
    protected readonly TagType = TagType;
    protected readonly promoTextAcronym = promoTextAcronym;
    protected readonly acmTitleFadeInOutAnimationProperties = acmTitleFadeInOutAnimationProperties;
    protected readonly promoTextMeetProfessions = promoTextMeetProfessions;
    protected readonly whatAcmDoesContentFadeInOutAnimationProperties = whatAcmDoesContentFadeInOutAnimationProperties;
    protected readonly quickFadeInAnimationProperties = quickFadeInAnimationProperties;
    protected readonly promoTextSoftwareDevelopment = promoTextSoftwareDevelopment;
    protected readonly promoTextBuildTech = promoTextBuildTech;
    protected readonly promoTextFormFriendships = promoTextFormFriendships;
}
