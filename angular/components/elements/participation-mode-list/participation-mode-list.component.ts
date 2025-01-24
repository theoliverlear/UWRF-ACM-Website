// participation-mode-list.component.ts 
import {Component, Input} from "@angular/core";
import {
    ParticipationMode
} from "../participation-mode/models/ParticipationMode";

@Component({
    selector: 'participation-mode-list',
    templateUrl: './participation-mode-list.component.html',
    styleUrls: ['./participation-mode-list-style.component.css']
})
export class ParticipationModeListComponent {
    @Input() protected participationModes: ParticipationMode[];
    constructor() {
        
    }
}
