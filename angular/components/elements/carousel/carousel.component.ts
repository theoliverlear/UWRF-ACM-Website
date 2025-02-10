// carousel.component.ts 
import {
    Component,
    Input,
} from "@angular/core";
import {ImageAsset} from "../../../assets/imageAssets";

@Component({
    selector: 'carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
    @Input() protected imageAssets: ImageAsset[];
    constructor() {
        
    }
}
