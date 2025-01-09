// accordion.component.ts 
import {Component, Input} from "@angular/core";
import {plusIconImageAsset} from "../../../assets/imageAssets";
import {accordionPopAnimation} from "../../animations/animations";

@Component({
    selector: 'accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion-style.component.css'],
    animations: [
        accordionPopAnimation
    ]
})
export class AccordionComponent {
    @Input() title: string;
    protected isExpanded = false;
    constructor() {
        
    }
    toggleExpansion() {
        this.isExpanded = !this.isExpanded
    }
    protected readonly plusIconImageAsset = plusIconImageAsset;
}
