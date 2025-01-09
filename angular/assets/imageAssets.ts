export interface ImageAsset {
    src: string;
    alt: string;
}

export function getImagePath(fileName: string): string {
    return imageAssetPath + fileName;
}
export function getLogoImagePath(fileName: string): string {
    return logoImageAssetPath + fileName;
}
export function getIconImagePath(fileName: string): string {
    return iconImageAssetPath + fileName;
}

const imageAssetPath: string = 'assets/images/';
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