import {
    AfterViewInit,
    Component,
    ElementRef,
    Input, Renderer2,
    ViewChild
} from "@angular/core";
import {TagType} from "../../../models/html/TagType";
import {TypeSpeed} from "./models/TypeSpeed";
import {DelayService} from "../../../services/delay.service";

@Component({
    selector: 'typing-text',
    templateUrl: './typing-text.component.html',
    styleUrls: ['./typing-text.component.css']
})
export class TypingTextComponent implements AfterViewInit {
    @Input() tagType: TagType;
    @Input() textToType: string;
    typedTextContent: string = '';
    @Input() typeSpeed: TypeSpeed = TypeSpeed.NORMAL;
    @Input() applyBeingTypedStyle: boolean = false;
    @Input() typeOnLoad: boolean = true;
    @ViewChild('typedText', {static: false}) typedText: ElementRef;
    @Input() enableBlinkingCursor: boolean = true;
    @Input() hideBeingTypedClass: boolean = false;
    useBlinkingCursor: boolean = false;
    finishedTyping: boolean = false;
    constructor(private renderer: Renderer2, private delayService: DelayService) {

    }

    shouldBlink() {
        return this.useBlinkingCursor && this.enableBlinkingCursor;
    }

    async toggleBlinkingClass(): Promise<void> {
        if (this.shouldBlink()) {
            this.renderer.removeClass(this.typedText.nativeElement, 'being-typed');
            this.renderer.addClass(this.typedText.nativeElement, 'blinking-cursor');
        } else {
            this.renderer.removeClass(this.typedText.nativeElement, 'blinking-cursor');
            this.renderer.addClass(this.typedText.nativeElement, 'being-typed');
        }
        if (this.hideBeingTypedClass) {
            this.renderer.removeClass(this.typedText.nativeElement, 'being-typed');
        }
    }
    ngAfterViewInit() {
        if (this.typeOnLoad) {
            this.typeText().then(()=> {
                this.finishedTyping = true;
                this.useBlinkingCursor = true;
                this.toggleBlinkingClass();
            })
        }
    }
    async typeText(): Promise<void> {
        let element = this.typedText.nativeElement;
        if (this.applyBeingTypedStyle) {
            this.renderer.addClass(element, 'being-typed');
        }
        let currentCharIndex = 0;
        return new Promise((resolve) => {
            const typeChar = (): void => {
                if (currentCharIndex < this.textToType.length) {
                    element.textContent += this.textToType.charAt(currentCharIndex);
                    currentCharIndex++;
                    setTimeout(typeChar, this.typeSpeed);
                } else {
                    if (this.applyBeingTypedStyle) {
                        this.renderer.removeClass(element, 'being-typed');
                    }
                    resolve();
                }
            };
            typeChar();
        });
    }
    async typeTextWithDelay(delay: number): Promise<void> {
        // await new Promise<void>((resolve) => {
        //     setTimeout(() => {
        //         this.typeText().then(() => {
        //             resolve();
        //         });
        //     }, delay);
        // });
        await this.delayService.delay(delay);
        await this.typeText();
    }
    //--------------------------------Delete-Text---------------------------------
    async deleteText(): Promise<void> {
        let typeSpeed = this.typeSpeed;
        let element = this.typedText.nativeElement;
        if (this.applyBeingTypedStyle) {
            element.classList.add('being-typed');
            element.classList.remove('blinking-cursor');
        }
        return new Promise((resolve): void => {
            function deleteChar(): void {
                if (element.textContent.length > 0) {
                    element.textContent = element.textContent.slice(0, -1);
                    setTimeout(deleteChar, typeSpeed);
                } else {
                    if (this.applyBeingTypedStyle) {
                        element.removeClass('being-typed');
                    }
                    resolve();
                }
            }
            deleteChar();
        });
    }
    protected readonly TagType = TagType;
}