import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Check if the 'env' object is available in the window (from the injected script)
if (window['env']) {
  console.log('Environment Variables:', window['env']); // Debug log
  
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

  environment.entertaiment = {
    movieApiUrl: window['env'].movieApiUrl,
    showApiUrl: window['env'].showApiUrl,
    userApiUrl: window['env'].userApiUrl,
    feedApiUrl: window['env'].feedApiUrl
  };
} else {
  console.error('Environment variables not found!');
}
// Bootstrap the Angular app
platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
