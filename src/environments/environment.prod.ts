import { Environment } from '../app/Models/environment.model';

export const environment: Partial<Environment> = {
  production: true,
  firebaseConfig: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: ''
  },
  entertaiment: {
    movieApiUrl: '',
    showApiUrl: '',
    feedApiUrl: '',
    userApiUrl: ''
  }
};
