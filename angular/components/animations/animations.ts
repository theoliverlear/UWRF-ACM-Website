import {
    animate,
    AnimationTriggerMetadata,
    style,
    transition,
    trigger
} from "@angular/animations";

export const fadeInOut: AnimationTriggerMetadata = trigger('fadeInOut', [
    transition(':enter', [
        style({opacity: 0}),
        animate('{{ fadeInDuration }} {{ waitDuration }}', style({opacity: 1}))
    ]),
    transition(':leave', [
        animate('{{ fadeOutDuration }} {{ waitDuration }}', style({opacity: 0}))
    ])
]);
