// acm-action.component.ts 
import {
    AfterViewInit,
    Component,
    ElementRef,
    HostBinding,
    Input,
    ViewChild
} from "@angular/core";
import {TagType} from "../../../models/html/TagType";
import {slideLeftAnimation} from "../../animations/animations";
import {
    acmActionListSlideInAnimationProperties
} from "../../animations/animationProperties";
import {
    SlideInContentComponent
} from "../slide-in-content/slide-in-content.component";
import {SsTitleComponent} from "../ss-title/ss-title.component";

@Component({
    selector: 'acm-action',
    templateUrl: './acm-action.component.html',
    styleUrls: ['./acm-action-style.component.css'],
    animations: [
        slideLeftAnimation
    ]
})
export class AcmActionComponent {
    @Input() protected actionText: string;
    @ViewChild(SsTitleComponent) titleComponent: SsTitleComponent;
    constructor() {
        
    }
    protected readonly TagType = TagType;
}
