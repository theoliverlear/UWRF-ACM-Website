import {
    animate,
    AnimationTriggerMetadata,
    style,
    transition,
    trigger
} from "@angular/animations";

export const fadeInOutAnimation: AnimationTriggerMetadata = trigger('fadeInOut', [
    transition(':enter', [
        style({opacity: 0}),
        animate('{{ fadeInDuration }} {{ waitDuration }}', style({opacity: 1}))
    ]),
    transition(':leave', [
        animate('{{ fadeOutDuration }} {{ waitDuration }}', style({opacity: 0}))
    ])
]);
export const fadeInAnimation: AnimationTriggerMetadata = trigger('fadeIn', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('{{ duration }} {{ delay }}', style({ opacity: 1 }))
    ])
]);
