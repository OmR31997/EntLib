import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FireConfigService {
  constructor() {
    // Set the environment variables from window['env'] dynamically in the constructor
    if (window['env']) {
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
        feedApiUrl: window['env'].feedApiUrl,
        userApiUrl: window['env'].userApiUrl,
      };
    }
  }

  // A method to access the Firebase configuration
  getFirebaseConfig() {
    return environment.firebaseConfig;
  }

  // A method to access API URLs for entertainment
  getApiUrls() {
    return environment.entertaiment;
  }
}
