import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Check if the 'env' object is available in the window (from the injected script)
if (window['env']) {
  // Set the Firebase configuration from Render's environment variables
  environment.firebaseConfig = {
    apiKey: window['env'].firebaseApiKey,
    authDomain: window['env'].fireauthDomain,
    databaseURL: window['env'].firedatabaseURL,
    projectId: window['env'].fireprojectId,
    storageBucket: window['env'].firestorageBucket,
    messagingSenderId: window['env'].firemessagingSenderId,
    appId: window['env'].fireappId,
    measurementId: window['env'].firemeasurementId,
  };

  // Set other API URLs or configuration values from Render's environment variables
  environment.entertaiment = {
    movieApiUrl: window['env'].movieApiUrl,
    showApiUrl: window['env'].showApiUrl,  // Replace with dynamic value if needed
    feedApiUrl: window['env'].feedApiUrl,  // Replace with dynamic value if needed
    userApiUrl: window['env'].userApiUrl,  // Replace with dynamic value if needed
  };
}

// Bootstrap the Angular app
platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
