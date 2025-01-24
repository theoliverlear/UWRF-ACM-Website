import {ParticipationModeType} from "./ParticipationModeType";

export class ParticipationMode {
    public modeType: ParticipationModeType;
    public description: string;
    public constructor(modeType: ParticipationModeType, description: string) {
        this.modeType = modeType;
        this.description = description;
    }
}