// nav-bar.component.ts 
import { Component } from "@angular/core";
import {
    navBarAboutElementLink, navBarDevTeamElementLink,
    navBarJoinElementLink, navBarThisWeekElementLink
} from "../../../assets/elementLinkAssets";

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar-style.component.css']
})
export class NavBarComponent {
    constructor() {
        
    }

    protected readonly navBarJoinElementLink = navBarJoinElementLink;
    protected readonly navBarAboutElementLink = navBarAboutElementLink;
    protected readonly navBarThisWeekElementLink = navBarThisWeekElementLink;
    protected readonly navBarDevTeamElementLink = navBarDevTeamElementLink;
}
