import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Load config.json at runtime (if required)
fetch('./assets/config.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch config.json: ${response.statusText}`);
    }
    return response.json();
  })
  .then((config) => {
    // Set Firebase and other configurations dynamically from config.json
    environment.firebaseConfig = {
      apiKey: process.env['FIREBASE_API_KEY'] as string,
      authDomain: process.env['FIREBASE_AUTH_DOMAIN'] as string,
      databaseURL: process.env['FIREBASE_DATABASE_URL'] as string,
      projectId: process.env['FIREBASE_PROJECT_ID'] as string,
      storageBucket: process.env['FIREBASE_STORAGE_BUCKET'] as string,
      messagingSenderId: process.env['FIREBASE_MESSAGING_SENDER_ID'] as string,
      appId: process.env['FIREBASE_APP_ID'] as string,
      measurementId: process.env['FIREBASE_MEASUREMENT_ID'] as string
    };

    // Set entertainment API URLs dynamically
    environment.entertaiment = config.entertaiment;

    // Bootstrap Angular app
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch((err) => console.error(err));
  })
  .catch((err) => {
    console.error('Error loading config.json:', err);
  });
