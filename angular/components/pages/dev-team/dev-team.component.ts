// dev-team.component.ts 
import { Component } from "@angular/core";
import {
    successStories
} from "../../../assets/successStoryAssets";
import {TagType} from "../../../models/html/TagType";
import {devTeamProjects} from "../../../assets/devTeamProjectAssets";
import {
    devTeamFinalMessage,
    devTeamMeetingInfo,
    devTeamSummary,
    devTeamVersatile
} from "../../../assets/textAssets";
import {devTeamLogoImageAsset} from "../../../assets/imageAssets";
import {
    devTeamParticipationModes
} from "../../../assets/participationModeAssets";

@Component({
    selector: 'dev-team',
    templateUrl: './dev-team.component.html',
    styleUrls: ['./dev-team.component.css']
})
export class DevTeamComponent {
    constructor() {
        
    }

    protected readonly TagType = TagType;
    protected readonly successStories = successStories;
    protected readonly devTeamProjects = devTeamProjects;
    protected readonly devTeamMeetingInfo = devTeamMeetingInfo;
    protected readonly devTeamSummary = devTeamSummary;
    protected readonly devTeamLogoImageAsset = devTeamLogoImageAsset;
    protected readonly devTeamParticipationModes = devTeamParticipationModes;
    protected readonly devTeamVersatile = devTeamVersatile;
    protected readonly devTeamFinalMessage = devTeamFinalMessage;
}
