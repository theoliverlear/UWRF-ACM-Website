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

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home-style.component.css']
})
export class HomeComponent implements AfterViewInit{
    @ViewChild('topTypingText') topTypingText: TypingTextComponent;
    showFadeInOut: boolean = false;
    constructor() {
        
    }

    ngAfterViewInit(): void {
        this.promoSequence();
    }
    promoSequence(): Promise<void> {
        this.topTypingText.typeText().then(() => {
            this.topTypingText.booleanBlinkingCursor = true;
            this.topTypingText.toggleBlinkingClass();

            this.topTypingText.delay(2000).then(() => {
                this.topTypingText.booleanBlinkingCursor = false;
                this.topTypingText.deleteText().then(() => {
                    this.topTypingText.textToType = promoTextCallUs;
                    this.topTypingText.typeText().then(() => {
                        this.topTypingText.booleanBlinkingCursor = true;
                            this.showFadeInOut = true;
                    });
                });
            });
        });
        return Promise.resolve();
    }

    protected readonly TypeSpeed = TypeSpeed;
    protected readonly promoTextFullTitle = promoTextFullTitle;
    protected readonly TagType = TagType;
    protected readonly promoTextAcronym = promoTextAcronym;
    protected readonly acmTitleFadeInOutAnimationProperties = acmTitleFadeInOutAnimationProperties;
    protected readonly homeEventPopupFadeInAnimationProperties = homeEventPopupFadeInAnimationProperties;
}
