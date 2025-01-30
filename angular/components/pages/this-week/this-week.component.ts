// this-week.component.ts 
import {Component, Input} from "@angular/core";
import {nextMeetingPrompt} from "../../../assets/thisWeekAssets";
import {weekOneLeetCodeProblems} from "../../../assets/leetCodeAssets";
import {
    thisWeekMeetingContentFadeInAnimationProperties
} from "../../animations/animationProperties";
import {shaneOMalleyPottingGuestSpeaker} from "../../../assets/guestSpeakerAssets";
import {weekOneTriviaGames} from "../../../assets/triviaAssets";
import {
    codeQualityExerciseOne,
    codeQualityExercises
} from "../../../assets/codeExerciseAssets";
import {
    isFirstMeeting, isSecondMeeting, isThirdMeeting
} from "../../../assets/eventAssets";

@Component({
    selector: 'this-week',
    templateUrl: './this-week.component.html',
    styleUrls: ['./this-week-style.component.css']
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
}
