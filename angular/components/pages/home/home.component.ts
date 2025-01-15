// home.component.ts 
import {AfterViewInit, Component, ViewChild} from "@angular/core";
import {TypeSpeed} from "../../elements/typing-text/models/TypeSpeed";
import {
    promoTextAcronym,
    promoTextCallUs,
    promoTextFullTitle
} from "../../../assets/textAssets";
import {TagType} from "../../../models/html/TagType";
import {
    TypingTextComponent
} from "../../elements/typing-text/typing-text.component";
import {
    acmTitleFadeInOutAnimationProperties,
    homeEventPopupFadeInAnimationProperties
} from "../../animations/animationProperties";
import {DelayService} from "../../../services/delay.service";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home-style.component.css']
})
export class HomeComponent implements AfterViewInit{
    @ViewChild('topTypingText') topTypingText: TypingTextComponent;
    showFadeInOut: boolean = false;
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
            this.showFadeInOut = true;
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
        this.showFadeInOut = false;
    }
    protected readonly TypeSpeed = TypeSpeed;
    protected readonly promoTextFullTitle = promoTextFullTitle;
    protected readonly TagType = TagType;
    protected readonly promoTextAcronym = promoTextAcronym;
    protected readonly acmTitleFadeInOutAnimationProperties = acmTitleFadeInOutAnimationProperties;
    protected readonly homeEventPopupFadeInAnimationProperties = homeEventPopupFadeInAnimationProperties;
}
