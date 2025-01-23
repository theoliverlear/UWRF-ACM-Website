import {
    SuccessStoryMessage
} from "../components/elements/success-story/models/SuccessStoryMessage";
import {randyFranzmeierImageAsset} from "./imageAssets";
import {
    SuccessStory
} from "../components/elements/success-story/models/SuccessStory";

export const randyFranzmeierSuccessStory = new SuccessStoryMessage(
    'Randy Franzmeier',
    'Junior Software Engineer',
    'Tanduo Technical Patterns Inc.',
    'In Dev Team, Randy worked on the full-stack development of our websites. ' +
    'He learned about various technologies and tools like Angular and SCSS' +
    ' to bring success to our projects.',
    'Dev Team has opened my eyes to what’s possible with the power of' +
    ' teamwork. We’ve built everything from games to an AI dad joke' +
    ' generator. Through it I gained experience that helped me land an ' +
    'internship and a full time job as a software engineer!',
    randyFranzmeierImageAsset
);
export const successStories: SuccessStory[] = [
    randyFranzmeierSuccessStory
];