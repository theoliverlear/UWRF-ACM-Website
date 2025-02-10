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
    styleUrls: ['./home.component.css']
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
    private async promoSequenceLoop(): Promise<void> {
        while (true) {
            await this.promoSequence();
            await this.delayService.delay(5000);
            await this.reset();
            await this.delayService.delay(2500);
        }
    }
    async promoSequence(): Promise<void> {
        await this.typeIntroText();
        await this.replaceIntroText();
        await this.writeNameText();
        await this.delayService.delay(7000);
        this.showAcronym = false;
        this.setBlinkingCursor(true, true);
        await this.topTypingText.deleteText();
        await this.delayService.delay(500);
        await this.delayService.delay(1000);
        this.topTypingText.textToType = promoTextWhatAcmDoesPrompt;
        await this.topTypingText.typeText();
        await this.delayService.delay(2000);
        this.showWhatAcmDoes = true;
        this.showAcmActionsList = true;
        await this.delayService.delay(2400);
        this.showLearnSoftware = true;
        await this.delayService.delay(2750);
        this.showBuildTech = true;
        await this.delayService.delay(2750);
        this.showFormFriendships = true;
    }
    protected async reset(): Promise<void> {
        await this.topTypingText.deleteText();
        this.topTypingText.textToType = promoTextFullTitle
        this.showAcronym = false;
        this.showWhatAcmDoes = false;
        this.showAcmActionsList = false;
        this.showLearnSoftware = false;
        this.showBuildTech = false;
        this.showFormFriendships = false;
    }
    protected async typeIntroText(): Promise<void> {
        await this.topTypingText.typeText();
        this.setBlinkingCursor(true, true);
        await this.delayService.delay(2000);
    }
    protected async replaceIntroText(): Promise<void> {
        await this.topTypingText.deleteText();
        this.topTypingText.textToType = promoTextCallUs;
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
