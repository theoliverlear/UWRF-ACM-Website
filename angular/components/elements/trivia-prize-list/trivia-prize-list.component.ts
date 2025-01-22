// trivia-prize-list.component.ts 
import {Component, Input} from "@angular/core";
import {TriviaPrize} from "../../../models/meetings/trivia/TriviaPrize";

@Component({
    selector: 'trivia-prize-list',
    templateUrl: './trivia-prize-list.component.html',
    styleUrls: ['./trivia-prize-list-style.component.css']
})
export class TriviaPrizeListComponent {
    @Input() protected triviaPrizes: TriviaPrize[];
    constructor() {
        
    }
}
