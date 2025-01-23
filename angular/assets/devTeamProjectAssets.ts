import {
    DevTeamProject
} from "../components/elements/dev-team-project/models/DevTeamProject";
import {
    chessElementLink,
    currencyConverterElementLink,
    dadJokeApiElementLink,
    devTeamWebsiteElementLink,
    gamesWebsiteElementLink, geoflagElementLink, taskManagerElementLink
} from "./elementLinkAssets";

const currencyConverterProject: DevTeamProject = new DevTeamProject(
    'Currency Converter',
    'A Java Spring Boot application that converts currency from one to' +
    ' another using API data sources.',
    currencyConverterElementLink
);
const gamesWebsiteProject: DevTeamProject = new DevTeamProject(
    'Games Website',
    'A server-side rendered application that hosts various games like ' +
    'Tic-Tac-Toe and Chess.',
    gamesWebsiteElementLink
);
export const dadJokeApiProject: DevTeamProject = new DevTeamProject(
    'Dad Joke API',
    'An API application that generates dad jokes using artificial intelligence.',
    dadJokeApiElementLink
);
export const devTeamWebsiteProject: DevTeamProject = new DevTeamProject(
    'Dev Team Website',
    'A Django website that showcases The UWRF Development Team\'s projects ' +
    'and meeting information.',
    devTeamWebsiteElementLink
);
export const chessProject: DevTeamProject = new DevTeamProject(
    'Chess',
    'A Java application that allows users to play chess against each other.',
    chessElementLink
);
export const taskManagerProject: DevTeamProject = new DevTeamProject(
    'Task Manager',
    'A mobile app that is a window into the processes of your phone using Kotlin.',
    taskManagerElementLink
);
export const geoflagProject: DevTeamProject = new DevTeamProject(
    'GeoFlag',
    'A game where you identify locations using identifiers like flags and' +
    ' monuments.',
    geoflagElementLink
);
export const devTeamProjects: DevTeamProject[] = [
    currencyConverterProject,
    gamesWebsiteProject,
    dadJokeApiProject,
    devTeamWebsiteProject,
    chessProject,
    taskManagerProject,
    geoflagProject
];