import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

fetch('./assets/config.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch config.json: ${response.statusText}`);
    }
    return response.json();
  })
  .then((config) => {
    // Assign values from config.json to the environment
    environment.firebaseConfig = config.firebaseConfig;
    environment.entertaiment = config.entertaiment;

    // Log once to verify environment values
    console.log('Environment Config:', environment);

    // Bootstrap the Angular application only once
    return platformBrowserDynamic().bootstrapModule(AppModule);
  })
  .catch((err) => {
    console.error('Error loading config.json or bootstrapping app:', err);
  });
