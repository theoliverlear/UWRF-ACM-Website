// trivia-prize.component.ts 
import {Component, Input} from "@angular/core";
import {TriviaPrize} from "../../../models/meetings/trivia/TriviaPrize";
import {
    bookIcon,
    candyIcon,
    giftIcon,
    ImageAsset
} from "../../../assets/imageAssets";

@Component({
    selector: 'trivia-prize',
    templateUrl: './trivia-prize.component.html',
    styleUrls: ['./trivia-prize-style.component.css']
})
export class TriviaPrizeComponent {
    @Input() protected triviaPrize: TriviaPrize;
    constructor() {
        
    }
    protected getImageAsset(): ImageAsset {
        switch (this.triviaPrize) {
            case TriviaPrize.BOOK:
                return bookIcon;
            case TriviaPrize.CANDY:
                return candyIcon;
            default:
                return giftIcon;
        }
    }
}
