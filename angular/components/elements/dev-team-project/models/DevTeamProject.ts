import {ElementLink} from "../../../../models/link/ElementLink";

export class DevTeamProject {
    public name: string;
    public description: string;
    public readonly projectLink: ElementLink;
    public constructor(name: string,
                       description: string,
                       projectLink: ElementLink) {
        this.name = name;
        this.description = description;
        this.projectLink = projectLink;
    }
}