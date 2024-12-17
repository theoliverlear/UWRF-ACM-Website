// join.component.ts 
import { Component } from "@angular/core";
import {TagType} from "../../../models/html/TagType";
import {discordLinkImageAsset} from "../../../assets/imageAssets";
import {
    discordJoinLinkText,
    discordTitleText, inPersonDetailsText, inPersonTitleText
} from "../../../assets/joinAssets";
import {discordElementLink} from "../../../assets/elementLinkAssets";

@Component({
    selector: 'join',
    templateUrl: './join.component.html',
    styleUrls: ['./join-style.component.css']
})
export class JoinComponent {
    constructor() {
        
    }

    protected readonly TagType = TagType;
    protected readonly discordLinkImageAsset = discordLinkImageAsset;
    protected readonly discordTitleText = discordTitleText;
    protected readonly discordJoinLinkText = discordJoinLinkText;
    protected readonly inPersonTitleText = inPersonTitleText;
    protected readonly inPersonDetailsText = inPersonDetailsText;
    protected readonly discordElementLink = discordElementLink;
}
