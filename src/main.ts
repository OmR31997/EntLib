import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

fetch('/assets/config.json')
  .then((response) => response.json())
  .then((config) => {
    console.log('Fetched config:', config);
    environment.firebaseConfig = config.firebaseConfig;
    environment.entertaiment = config.entertaiment;

    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch((err) => console.error(err));
  })
  .catch((err) => console.error('Error loading config.json:', err));
