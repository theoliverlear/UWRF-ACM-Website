import {ImageAsset} from "../../../../assets/imageAssets";

export class SuccessStory {
    public name: string;
    public title: string;
    public company: string;
    public successStoryText: string;
    public imageAsset?: ImageAsset;
    public constructor(name: string,
                       title: string,
                       company: string,
                       successStoryText: string,
                       imageAsset?: ImageAsset) {
        this.name = name;
        this.title = title;
        this.company = company;
        this.successStoryText = successStoryText;
        this.imageAsset = imageAsset;
    }
}