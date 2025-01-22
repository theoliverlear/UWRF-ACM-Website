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
    'Dev Team helped me become a better developer and team player. I learned a lot ' +
    'about how to work with a team and how to develop software. I am ' +
    'grateful for the opportunity to work with such a great team.',
    randyFranzmeierImageAsset
);
export const successStories: SuccessStory[] = [
    randyFranzmeierSuccessStory
];