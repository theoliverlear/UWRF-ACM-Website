// trivia.component.ts
import {Component, Input} from "@angular/core";
import {TriviaGame} from "../../../models/meetings/trivia/TriviaGame";
import {TagType} from "../../../models/html/TagType";

@Component({
    selector: 'trivia',
    templateUrl: './trivia.component.html',
    styleUrls: ['./trivia-style.component.css']
})
export class TriviaComponent {
    @Input() protected triviaGame: TriviaGame;
    constructor() {
        
    }
    protected readonly TagType = TagType;
}
