import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}   

// if (localStorage.getItem('locale') === null) {
//   localStorage.setItem('locale', 'fr');
// }

// const locale = localStorage.getItem('locale');
// declare const require;

// const translations = require(`raw-loader!./locale/messages.${locale}.xlf`);

// platformBrowserDynamic().bootstrapModule(AppModule, {
//   providers: [
//     { provide: TRANSLATIONS, useValue: translations },
//     { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' }
//   ]
// });

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));