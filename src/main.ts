import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Load config.json at runtime
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

    // Check environment variables before bootstrapping
    console.log('Environment Config:', environment);

    // Bootstrap the Angular application
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch((err) => console.error(err));
  })
  .catch((err) => {
    console.error('Error loading config.json:', err);
  });