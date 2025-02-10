// dev-team-project.component.ts 
import {Component, Input} from "@angular/core";
import {DevTeamProject} from "./models/DevTeamProject";
import {TagType} from "../../../models/html/TagType";

@Component({
    selector: 'dev-team-project',
    templateUrl: './dev-team-project.component.html',
    styleUrls: ['./dev-team-project.component.css']
})
export class DevTeamProjectComponent {
    @Input() protected project: DevTeamProject;
    constructor() {
        
    }

    protected readonly TagType = TagType;
}
