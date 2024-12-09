import {Route} from "@angular/router";
import {HomeComponent} from "../../components/pages/home/home.component";

export const homeRoute: Route = {
    path: '',
    component: HomeComponent,
    data: {
        meta: {
            title: 'UWRF Association of Computing Machinery',
        },
    }
}

export const routes: Route[] = [
    homeRoute
];