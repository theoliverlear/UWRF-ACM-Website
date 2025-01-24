import {
    ParticipationMode
} from "../components/elements/participation-mode/models/ParticipationMode";
import {
    ParticipationModeType
} from "../components/elements/participation-mode/models/ParticipationModeType";
import {
    devTeamAsynchronous,
    devTeamInPerson,
    devTeamVirtually
} from "./textAssets";

export const devTeamAsynchronousMode = new ParticipationMode(
    ParticipationModeType.ASYNCHRONOUS,
    devTeamAsynchronous
);
export const devTeamVirtuallyMode = new ParticipationMode(
    ParticipationModeType.VIRTUALLY,
    devTeamVirtually
);
export const devTeamInPersonMode = new ParticipationMode(
    ParticipationModeType.IN_PERSON,
    devTeamInPerson
);
export const devTeamParticipationModes: ParticipationMode[] = [
    devTeamAsynchronousMode,
    devTeamVirtuallyMode,
    devTeamInPersonMode
];