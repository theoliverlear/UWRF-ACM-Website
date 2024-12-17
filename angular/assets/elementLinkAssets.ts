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
