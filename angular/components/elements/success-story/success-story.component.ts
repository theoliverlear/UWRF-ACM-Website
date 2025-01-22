// success-story.component.ts 
import {Component, Input} from "@angular/core";
import {SuccessStory} from "./models/SuccessStory";
import {TagType} from "../../../models/html/TagType";
import {randyFranzmeierImageAsset} from "../../../assets/imageAssets";
import {SuccessStoryMessage} from "./models/SuccessStoryMessage";

@Component({
    selector: 'success-story',
    templateUrl: './success-story.component.html',
    styleUrls: ['./success-story-style.component.css']
})
export class SuccessStoryComponent {
    @Input() protected successStory: SuccessStory | SuccessStoryMessage;
    constructor() {
        
    }
    protected hasMessage(): boolean {
        return this.successStory instanceof SuccessStoryMessage;
    }
    protected readonly TagType = TagType;
    protected readonly randyFranzmeierImageAsset = randyFranzmeierImageAsset;
}
