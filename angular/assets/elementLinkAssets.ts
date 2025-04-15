import {TextElementLink} from "../models/link/TextElementLink";
import {TargetType} from "../models/html/TargetType";
import {ElementLink} from "../models/link/ElementLink";
import {TagType} from "../models/html/TagType";

export const navBarHomeElementLink = new ElementLink('/',
    TargetType.SELF);
export const navBarJoinElementLink = new TextElementLink('/join',
    TargetType.SELF,
    false,
    'Join',
    TagType.H4);
export const navBarAboutElementLink = new TextElementLink('/about',
    TargetType.SELF,
    false,
    'About',
    TagType.H4);
export const navBarThisWeekElementLink = new TextElementLink('/this-week',
    TargetType.SELF,
    false,
    'This Week',
    TagType.H4);
export const navBarDevTeamElementLink = new TextElementLink('/dev-team',
    TargetType.SELF,
    false,
    'Dev Team',
    TagType.H4);
export const discordElementLink = new ElementLink('https://discord.gg/EJUJEBKgHJ',
    TargetType.BLANK)

export const replitElementLink = new TextElementLink("https://replit.com/join/hhnwrlizyo-theoliverlear",
                                                    TargetType.BLANK,
                                                    false,
                                                    "Debug on Replit",
                                                    TagType.H3);
export const javaJumpStartElementLink: TextElementLink = new TextElementLink("https://github.com/theoliverlear/Java-Jump-Start",
                                                                             TargetType.BLANK,
                                                                             false,
                                                                             "Get Started with Java",
                                                                             TagType.H3);

export const pythonUnleashedElementLink: TextElementLink = new TextElementLink("https://github.com/theoliverlear/Python-Unleashed",
    TargetType.BLANK,
    false,
    "Get Started with Python",
    TagType.H3);


export const currencyConverterElementLink = new TextElementLink('https://github.com/UWRF-Development-Team/Currency-Converter',
    TargetType.BLANK,
    false,
    'View Source Code',
    TagType.H6);
export const gamesWebsiteElementLink = new TextElementLink('https://github.com/UWRF-Development-Team/Games-Website/tree/SpringV3',
    TargetType.BLANK,
    false,
    'View Source Code',
    TagType.H6);
export const dadJokeApiElementLink = new TextElementLink('https://github.com/UWRF-Development-Team/Dad-Joke-API/tree/SpringAPI',
    TargetType.BLANK,
    false,
    'View Source Code',
    TagType.H6);
export const devTeamWebsiteElementLink = new TextElementLink('https://github.com/UWRF-Development-Team/Dev-Team-Website',
    TargetType.BLANK,
    false,
    'View Source Code',
    TagType.H6);
export const chessElementLink = new TextElementLink('https://github.com/UWRF-Development-Team/Chess/tree/main',
    TargetType.BLANK,
    false,
    'View Source Code',
    TagType.H6);
export const taskManagerElementLink = new TextElementLink('https://github.com/UWRF-Development-Team/Task-Manager',
    TargetType.BLANK,
    false,
    'View Source Code',
    TagType.H6);
export const geoflagElementLink = new TextElementLink('https://github.com/UWRF-Development-Team/GeoFlag',
    TargetType.BLANK,
    false,
    'View Source Code',
    TagType.H6);