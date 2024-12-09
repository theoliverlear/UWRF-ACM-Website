import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import '@angular/compiler';
import { UwrfAcmWebsiteModule } from './modules/uwrf-acm-website.module';

console.log('main.ts loaded');

platformBrowserDynamic().bootstrapModule(UwrfAcmWebsiteModule)
    .catch(err => console.error(err));
