import {
    SuccessStoryMessage
} from "../components/elements/success-story/models/SuccessStoryMessage";
import {
    coltonWilliamsImageAsset,
    randyFranzmeierImageAsset
} from "./imageAssets";
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
export const coltonWilliamsSuccessStory = new SuccessStoryMessage(
    'Colton Williams',
    'Support Engineer',
    'SkyTide Group',
    'As an information systems leader, Colton helped Dev Team build its ' +
    'infrastructure. He helped set up various servers and desktops with the' +
    ' necessary content needed to allow Dev Team to flourish. He is also' +
    ' noted for his ability to research and quickly find useful information ' +
    'to guide the team.',
    'The UWRF Development Team provided me with invaluable hands-on ' +
    'experience that helped me grow both technically and professionally. ' +
    'The skills I gained while working on mock real-world projects were' +
    ' crucial in boosting my confidence and capabilities, allowing me to' +
    ' confidently pursue job opportunities after graduation.',
    coltonWilliamsImageAsset
);
export const successStories: SuccessStory[] = [
    randyFranzmeierSuccessStory,
    coltonWilliamsSuccessStory
];