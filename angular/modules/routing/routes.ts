import {Route} from "@angular/router";
import {HomeComponent} from "../../components/pages/home/home.component";
import {
    NotFoundComponent
} from "../../components/pages/not-found/not-found.component";
import {JoinComponent} from "../../components/pages/join/join.component";
import {
    DevTeamComponent
} from "../../components/pages/dev-team/dev-team.component";
import {
    ThisWeekComponent
} from "../../components/pages/this-week/this-week.component";
import {AboutComponent} from "../../components/pages/about/about.component";
export const aboutRoute: Route = {
    path: 'about',
    component: AboutComponent,
    data: {
        meta: {
            title: 'About | UWRF ACM'
        }
    }
};
export const devTeamRoute: Route = {
    path: 'dev-team',
    component: DevTeamComponent,
    data: {
        meta: {
            title: 'Dev Team | UWRF ACM'
        }
    }
};
export const homeRoute: Route = {
    path: '',
    component: HomeComponent,
    data: {
        meta: {
            title: 'UWRF Association of Computing Machinery',
        },
    }
};
export const joinRoute: Route = {
    path: 'join',
    component: JoinComponent,
    data: {
        meta: {
            title: 'Join | UWRF ACM'
        }
    }
};
export const thisWeekRoute: Route = {
    path: 'this-week',
    component: ThisWeekComponent,
    data: {
        meta: {
            title: 'This Week | UWRF ACM'
        }
    }
};
export const notFoundRoute: Route = {
    path: '**',
    component: NotFoundComponent,
    data: {
        meta: {
            title: 'Page Not Found'
        }
    }
};
export const routes: Route[] = [
    aboutRoute,
    devTeamRoute,
    homeRoute,
    joinRoute,
    thisWeekRoute,
    notFoundRoute
];