import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    Renderer2
} from "@angular/core";
import gsap from "gsap";

@Directive({
    selector: '[rumble]'
})
export class RumbleDirective {
    @Input() rumbleIntensity: number = 5;
    @Input() rumbleDuration: number = 0.5;
    constructor(private element: ElementRef, private renderer: Renderer2) {

    }
    @HostListener('mouseenter') onMouseEnter() {
        this.rumble();
    }

    private rumble() {
        const element = this.element.nativeElement;
        gsap.to(element, {
            x: `+=${this.rumbleIntensity}`,
            y: `+=${this.rumbleIntensity}`,
            repeat: -1,
            repeatRefresh: true,
            duration: 0.05,
            yoyo: true,
        });
        setTimeout(() => {
            gsap.killTweensOf(element);
            gsap.to(element, {x: 0, y: 0, duration: 0.2});
        }, this.rumbleDuration * 1000);
    }
}