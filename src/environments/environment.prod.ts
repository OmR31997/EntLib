import { Environment } from "../app/Models/environment.model";

export const environment:Environment = {
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
  }, // Placeholder, fetched during runtime
  entertaiment: {
    movieApiUrl: '',
    showApiUrl: '',
    feedApiUrl: '',
    userApiUrl: ''
  }    // Placeholder, fetched during runtime
};
