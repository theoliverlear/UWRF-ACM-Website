// dev-team-project-list.component.ts 
import {Component, Input} from "@angular/core";
import {DevTeamProject} from "../dev-team-project/models/DevTeamProject";

@Component({
    selector: 'dev-team-project-list',
    templateUrl: './dev-team-project-list.component.html',
    styleUrls: ['./dev-team-project-list-style.component.css']
})
export class DevTeamProjectListComponent {
    @Input() protected projects: DevTeamProject[];
    constructor() {
        
    }
}
