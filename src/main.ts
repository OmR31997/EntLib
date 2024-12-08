import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { initializeApp, getApp, FirebaseApp } from 'firebase/app';

// Check if Firebase is already initialized
let firebaseApp: FirebaseApp;

try {
  firebaseApp = getApp(); // Try to get the default app
} catch (e) {
  firebaseApp = initializeApp(environment.firebaseConfig); // Initialize Firebase only if not already initialized
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
