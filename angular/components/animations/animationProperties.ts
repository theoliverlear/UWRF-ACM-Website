import {FadeInOutProperties} from "./models/FadeInOutProperties";
import {ScaleProperties} from "./models/ScaleProperties";
import {FadeInProperties} from "./models/FadeInProperties";

export const acmTitleFadeInOutAnimationProperties: FadeInOutProperties = {
    fadeInDuration: '600ms',
    waitDuration: '1500ms',
    fadeOutDuration: '600ms'
};
export const acmTitleScaleAnimationProperties: ScaleProperties = {
    scaleUpDuration: '600ms',
    waitDuration: '1500ms',
    scaleAmount: 'scale(1.5)'
};
export const defaultFadeInAnimationProperties: FadeInProperties = {
    duration: '300ms',
    delay: '0ms'
};
export const thisWeekTitleFadeInAnimationProperties: FadeInProperties = {
    duration: '600ms',
    delay: '250ms'
};
export const thisWeekSubtitleFadeInAnimationProperties: FadeInProperties = {
    duration: '600ms',
    delay: '1500ms'
};
export const homeEventPopupFadeInAnimationProperties: FadeInProperties = {
    duration: '200ms',
    delay: '50ms'
};