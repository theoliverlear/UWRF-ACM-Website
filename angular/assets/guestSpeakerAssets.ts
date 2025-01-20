import {GuestSpeaker} from "../models/meetings/GuestSpeaker";
import {shaneOMalleyPottingImageAsset} from "./imageAssets";

const shaneOMalleyPottingBio: string = "Shane O'Malley-Potting has come to share his inspirational journey from " +
    "student worker at UWRF to the backbone of UWRF's infrastructure. He has" +
    " come to share his story and wisdom in computer science and life.";
const shaneOMalleyPottingTopics: string[] = [
    "Career Advice",
    "Infrastructure",
    "Student Success",
    "Migrating Legacy Systems"
];
export let shaneOMalleyPottingGuestSpeaker: GuestSpeaker = new GuestSpeaker(
    "Shane",
    "O'Malley-Potting",
    shaneOMalleyPottingTopics,
    shaneOMalleyPottingBio,
    shaneOMalleyPottingImageAsset,
    "Information Technology Architect at UW-River Falls"
)
export let samChapinGuestSpeaker: GuestSpeaker;
export let ethanPriceGuestSpeaker: GuestSpeaker;