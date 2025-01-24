// participation-mode.component.ts 
import {Component, Input} from "@angular/core";
import {ParticipationMode} from "./models/ParticipationMode";
import {TagType} from "../../../models/html/TagType";

@Component({
    selector: 'participation-mode',
    templateUrl: './participation-mode.component.html',
    styleUrls: ['./participation-mode-style.component.css']
})
export class ParticipationModeComponent {
    @Input() protected participationMode: ParticipationMode;
    constructor() {
        
    }

    protected readonly TagType = TagType;
}
