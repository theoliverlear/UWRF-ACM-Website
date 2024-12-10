// home-anchor.component.ts 
import { Component } from "@angular/core";
import {navBarHomeElementLink} from "../../../assets/elementLinkAssets";
import {logoImageAsset} from "../../../assets/imageAssets";

@Component({
    selector: 'home-anchor',
    templateUrl: './home-anchor.component.html',
    styleUrls: ['./home-anchor-style.component.css']
})
export class HomeAnchorComponent {
    constructor() {
        
    }

    protected readonly navBarHomeElementLink = navBarHomeElementLink;
    protected readonly logoImageAsset = logoImageAsset;
}
