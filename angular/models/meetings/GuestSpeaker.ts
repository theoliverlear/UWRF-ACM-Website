import {ImageAsset} from "../../assets/imageAssets";

export class GuestSpeaker {
    public firstName: string;
    public lastName: string;
    public topics: string[];
    public description: string;
    public imageAsset?: ImageAsset;
    public constructor(firstName: string,
                       lastName: string,
                       topics: string[],
                       imageAsset?: ImageAsset) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.topics = topics;
        this.imageAsset = imageAsset;
    }
    public getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}