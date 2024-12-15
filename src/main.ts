import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (window['env']) {
  // Make sure the firebaseConfig is set correctly
  if (window['env'].firebaseApiKey) {
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
  }

  // Make sure entertaiment API URLs are set correctly
  if (window['env'].movieApiUrl) {
    environment.entertaiment = {
      movieApiUrl: window['env'].movieApiUrl,
      showApiUrl: window['env'].showApiUrl,
      feedApiUrl: window['env'].feedApiUrl,
      userApiUrl: window['env'].userApiUrl,
    };
  }
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
