// checkbox.component.ts 
import {Component, HostBinding, HostListener} from "@angular/core";
import {confirmIconImageAsset} from "../../../assets/imageAssets";

@Component({
    selector: 'checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
    @HostBinding('class.checked') checked = false;
    constructor() {
        
    }

    @HostListener('click')
    onClick() {
        this.checked = !this.checked;
    }

    protected readonly confirmIconImageAsset = confirmIconImageAsset;
}
