export interface ImageAsset {
    src: string;
    alt: string;
}

export function getImagePath(fileName: string): string {
    return imageAssetPath + fileName;
}
export function getGuestSpeakerImagePath(fileName: string): string {
    return guestSpeakersImageAssetPath + fileName;
}
export function getSuccessStoryImagePath(fileName: string): string {
    return successStoryImageAssetPath + fileName;
}
export function getAcmMemberImagePath(fileName: string): string {
    return acmMemberImageAssetPath + fileName;
}
export function getLogoImagePath(fileName: string): string {
    return logoImageAssetPath + fileName;
}
export function getIconImagePath(fileName: string): string {
    return iconImageAssetPath + fileName;
}
const imageAssetPath: string = 'assets/images/';
const guestSpeakersImageAssetPath: string = imageAssetPath + 'guest_speakers/';
const successStoryImageAssetPath: string = imageAssetPath + 'success_stories/';
const acmMemberImageAssetPath: string = imageAssetPath + 'acm_members/';
const logoImageAssetPath: string = imageAssetPath + 'logo/';
const iconImageAssetPath: string = imageAssetPath + 'icon/';

export const logoImageAsset: ImageAsset = {
    src: getLogoImagePath('logo.png'),
    alt: 'logo'
};
export const discordLinkImageAsset: ImageAsset = {
    src: getImagePath('discord_link.png'),
    alt: 'Discord Link'
};
export const plusIconImageAsset: ImageAsset = {
    src: getIconImagePath('plus_icon.svg'),
    alt: 'Plus Icon'
};
export const whitePlusIconImageAsset: ImageAsset = {
    src: getIconImagePath('white_plus_icon.svg'),
    alt: 'White Plus Icon'
};
export const shaneOMalleyPottingImageAsset: ImageAsset = {
    src: getGuestSpeakerImagePath('shane_o_malley_potting.jpg'),
    alt: 'Shane O Malley-Potting'
};
export const ethanPriceImageAsset: ImageAsset = {
    src: getGuestSpeakerImagePath('ethan_price.jpg'),
    alt: 'Ethan Price'
};
export const samChapinImageAsset: ImageAsset = {
    src: getGuestSpeakerImagePath('sam_chapin.jpg'),
    alt: 'Sam Chapin'
};
export const candyIcon: ImageAsset = {
    src: getIconImagePath('candy_icon.svg'),
    alt: 'Candy Icon'
};
export const bookIcon: ImageAsset = {
    src: getIconImagePath('book_icon.png'),
    alt: 'Book Icon'
};
export const giftIcon: ImageAsset = {
    src: getIconImagePath('gift_icon.png'),
    alt: 'Gift Icon'
};
export const randyFranzmeierImageAsset: ImageAsset = {
    src: getSuccessStoryImagePath('randy_franzmeier.jpg'),
    alt: 'Randy Franzmeier'
};
export const coltonWilliamsImageAsset: ImageAsset = {
    src: getSuccessStoryImagePath('colton_williams.png'),
    alt: 'Colton Williams'
}
export const devTeamLogoImageAsset: ImageAsset = {
    src: getLogoImagePath('dev_team_logo.jpg'),
    alt: 'Dev Team Logo'
};
export const randyBeeScooterImageAsset: ImageAsset = {
    src: getAcmMemberImagePath('randy_bee_scooter.JPEG'),
    alt: 'Randy and Bee on Scooter'
}
export const micsGroupImageAsset: ImageAsset = {
    src: getAcmMemberImagePath('mics_group.JPG'),
    alt: 'MICS Group'
}
export const oldMicsGroupFirstHalfImageAsset: ImageAsset = {
    src: getAcmMemberImagePath('old_mics_group_first_half.jpg'),
    alt: 'Old MICS Group First Half'
};
export const oldMicsGroupSecondHalfImageAsset: ImageAsset = {
    src: getAcmMemberImagePath('old_mics_group_second_half.jpg'),
    alt: 'Old MICS Group Second Half'
};
export const acmNvidiaImageAsset: ImageAsset = {
    src: getAcmMemberImagePath('acm_nvidia.jpg'),
    alt: 'ACM Nvidia'
};
export const acmSelfieImageAsset: ImageAsset = {
    src: getAcmMemberImagePath('acm_selfie.jpg'),
    alt: 'ACM Selfie'
};
export const acmTriviaNightImageAsset: ImageAsset = {
    src: getAcmMemberImagePath('acm_trivia_night.jpg'),
    alt: 'ACM Trivia Night'
};
export const acmTalkImageAsset: ImageAsset = {
    src: getAcmMemberImagePath('acm_talk.jpg'),
    alt: 'ACM Talk'
};
export const acmGamingNightImageAsset: ImageAsset = {
    src: getAcmMemberImagePath('acm_gaming_night.jpg'),
    alt: 'ACM Gaming Night'
}
export const micsCompetitionImageAsset: ImageAsset = {
    src: getAcmMemberImagePath('mics_competition.jpg'),
    alt: 'MICS Competition'
}
export const acmMemberImageAssets: ImageAsset[] = [
    randyBeeScooterImageAsset,
    micsGroupImageAsset,
    oldMicsGroupFirstHalfImageAsset,
    oldMicsGroupSecondHalfImageAsset,
    acmNvidiaImageAsset,
    acmSelfieImageAsset,
    acmTriviaNightImageAsset,
    acmTalkImageAsset,
    acmGamingNightImageAsset,
    micsCompetitionImageAsset
];