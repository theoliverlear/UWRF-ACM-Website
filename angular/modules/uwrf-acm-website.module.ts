import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { AppComponent } from '../components/app/app.component';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { AppRouting } from './routing/app-routing.module';
import {RouterOutlet} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
    HttpClientModule,
    provideHttpClient,
    withFetch
} from "@angular/common/http";
import {directives} from "../directives/directives";
import {elements} from "../components/elements/elements";
import {pages} from "../components/pages/pages";
import {services} from "../services/services";
import {pipes} from "../pipes/pipes";
import {MonacoEditorModule} from "ngx-monaco-editor-v2";
import {
    NgbCarouselModule,
} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [
        AppComponent,
        ...elements,
        ...directives,
        ...pipes,
        ...pages,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRouting,
        RouterOutlet,
        NgOptimizedImage,
        MonacoEditorModule.forRoot({
            baseUrl: 'assets/monaco-editor/min/vs'
        }),
        HttpClientModule,
        NgbCarouselModule
    ],
    providers: [
        ...services,
        provideHttpClient(withFetch()),
    ],
    bootstrap: [AppComponent],
    exports: [],
    schemas: []
})
export class UwrfAcmWebsiteModule {
    constructor() {
        console.log('ScriptSocialAppModule loaded');
    }
}
