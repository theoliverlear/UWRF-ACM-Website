import {ImageAsset} from "../../assets/imageAssets";

export class GuestSpeaker {
    public firstName: string;
    public lastName: string;
    public topics: string[];
    public description: string;
    public jobTitle?: string;
    public imageAsset?: ImageAsset;
    public constructor(firstName: string,
                       lastName: string,
                       topics: string[],
                       description: string,
                       imageAsset?: ImageAsset,
                       jobTitle?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.topics = topics;
        this.description = description;
        this.imageAsset = imageAsset;
        this.jobTitle = jobTitle;
    }
    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}