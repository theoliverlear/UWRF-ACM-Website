// this-week.component.ts 
import {Component, Input} from "@angular/core";
import {
    getNextMeetingTitle,
    nextMeetingPrompt
} from "../../../assets/thisWeekAssets";
import {weekOneLeetCodeProblems} from "../../../assets/leetCodeAssets";
import {
    thisWeekMeetingContentFadeInAnimationProperties
} from "../../animations/animationProperties";
import {
    ethanPriceGuestSpeaker, samChapinGuestSpeaker,
    shaneOMalleyPottingGuestSpeaker
} from "../../../assets/guestSpeakerAssets";
import {weekOneTriviaGames} from "../../../assets/triviaAssets";
import {
    codeQualityExerciseOne,
    codeQualityExercises
} from "../../../assets/codeExerciseAssets";
import {
    isEighthMeeting,
    isFifthMeeting,
    isFirstMeeting,
    isFourthMeeting,
    isSecondMeeting, isSeventhMeeting,
    isSixthMeeting,
    isThirdMeeting
} from "../../../assets/eventAssets";
import {replitElementLink} from "../../../assets/elementLinkAssets";

@Component({
    selector: 'this-week',
    templateUrl: './this-week.component.html',
    styleUrls: ['./this-week.component.css']
})
export class ThisWeekComponent {
    @Input() topicTitle: string;
    constructor() {
        
    }
    protected readonly nextMeetingPrompt = nextMeetingPrompt;
    protected readonly weekOneLeetCodeProblems = weekOneLeetCodeProblems;
    protected readonly thisWeekMeetingContentFadeInAnimationProperties = thisWeekMeetingContentFadeInAnimationProperties;
    protected readonly shaneOMalleyPottingGuestSpeaker = shaneOMalleyPottingGuestSpeaker;
    protected readonly weekOneTriviaGames = weekOneTriviaGames;
    protected readonly codeQualityExerciseOne = codeQualityExerciseOne;
    protected readonly codeQualityExercises = codeQualityExercises;
    protected readonly isSecondMeeting = isSecondMeeting;
    protected readonly isFirstMeeting = isFirstMeeting;
    protected readonly isThirdMeeting = isThirdMeeting;
    protected readonly getNextMeetingTitle = getNextMeetingTitle;
    protected readonly isFifthMeeting = isFifthMeeting;
    protected readonly ethanPriceGuestSpeaker = ethanPriceGuestSpeaker;
    protected readonly isSixthMeeting = isSixthMeeting;
    protected readonly samChapinGuestSpeaker = samChapinGuestSpeaker;
    protected readonly isFourthMeeting = isFourthMeeting;
    protected readonly isSeventhMeeting = isSeventhMeeting;
    protected readonly replitElementLink = replitElementLink;
    protected readonly isEighthMeeting = isEighthMeeting;
}
