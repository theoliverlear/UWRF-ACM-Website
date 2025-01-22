import {SuccessStory} from "./SuccessStory";
import {ImageAsset} from "../../../../assets/imageAssets";

export class SuccessStoryMessage extends SuccessStory {
    public message: string;
    public constructor(name: string,
                       title: string,
                       company: string,
                       successStoryText: string,
                       message: string,
                       imageAsset?: ImageAsset) {
        super(name, title, company, successStoryText, imageAsset);
        this.message = message;
    }
}