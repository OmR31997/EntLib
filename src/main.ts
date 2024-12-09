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
    // Ensure config contains the necessary fields
    if (!config.firebaseConfig || !config.entertaiment) {
      throw new Error('Invalid configuration file.');
    }

    // Assign values from config.json to environment
    environment.firebaseConfig = config.firebaseConfig;
    environment.entertaiment = config.entertaiment;

    // Log the environment values
    console.log('Environment Config:', environment);

    // Bootstrap Angular app
    return platformBrowserDynamic().bootstrapModule(AppModule);
  })
  .catch((err) => {
    console.error('Error loading config.json or bootstrapping app:', err);
  });
