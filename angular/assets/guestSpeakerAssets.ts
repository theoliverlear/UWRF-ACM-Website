import {GuestSpeaker} from "../models/meetings/GuestSpeaker";
import {
    ethanPriceImageAsset, samChapinImageAsset,
    shaneOMalleyPottingImageAsset
} from "./imageAssets";

const shaneOMalleyPottingBio: string = "Shane O'Malley-Potting has come to share his inspirational journey from " +
    "student worker at UWRF to the backbone of UWRF's infrastructure. He has" +
    " come to share his story and wisdom in computer science and life.";
const shaneOMalleyPottingTopics: string[] = [
    "Career Advice",
    "Infrastructure",
    "Student Success",
    "Migrating Systems"
];
export let shaneOMalleyPottingGuestSpeaker: GuestSpeaker = new GuestSpeaker(
    "Shane",
    "O'Malley-Potting",
    shaneOMalleyPottingTopics,
    shaneOMalleyPottingBio,
    shaneOMalleyPottingImageAsset,
    "Information Technology Architect at UW-River Falls"
)
export const ethanPriceBio: string = "Ethan Price is a former ACM officer and a current employee at Epic Healthcare Systems. " +
    "He has come to talk about resumes, interviews, and technical knowledge. Being part of these rigorous procedures himself, " +
    "Ethan knows the do's and don'ts in job applications and interviews. ACM will also serve our signature Dominos pizza and drinks. " +
    "Come join us for knowledge, fun, and tasty pizza!";
export const ethanPriceTopics: string[] = [
    "Resumes",
    "Interviews",
    "Technical Knowledge",
    "Job Applications"
];
export let ethanPriceGuestSpeaker: GuestSpeaker = new GuestSpeaker(
    "Ethan",
    "Price",
    ethanPriceTopics,
    ethanPriceBio,
    ethanPriceImageAsset,
    "Employee at Epic Healthcare Systems"
)
export const samChapinBio: string = "Sam Chapin is a community contributor as an alumni and the donator of the ACM Chapin Server. " +
    "He works at the prestigious Thomson Reuters as a Senior Software Engineer. He has come to speak about the computer science industry. " +
    "He will provide his wide-ranging knowledge in a Q and A, as well as talk to us about vitally important topics like: intern and entry-level expectations, " +
    "modern software development methodology, and the responsibilities expected of different roles in the industry.";
export const samChapinTopics: string[] = [
    "Job Expectations",
    "Methodology",
    "Role Duties",
    "CI/CD"
];
export let samChapinGuestSpeaker: GuestSpeaker = new GuestSpeaker(
    "Sam",
    "Chapin",
    samChapinTopics,
    samChapinBio,
    samChapinImageAsset,
    "Senior Software Engineer at Thomson Reuters"
)
