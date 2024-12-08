import { Environment } from "../app/Models/environment.model";

export const environment: Environment = {
  production: true,
  firebaseConfig: {
    apiKey: process.env['FIREBASE_API_KEY'] as string,
    authDomain: process.env['FIREBASE_AUTH_DOMAIN'] as string,
    databaseURL: process.env['FIREBASE_DATABASE_URL'] as string,
    projectId: process.env['FIREBASE_PROJECT_ID'] as string,
    storageBucket: process.env['FIREBASE_STORAGE_BUCKET'] as string,
    messagingSenderId: process.env['FIREBASE_MESSAGING_SENDER_ID'] as string,
    appId: process.env['FIREBASE_APP_ID'] as string,
    measurementId: process.env['FIREBASE_MEASUREMENT_ID'] as string
  },
  entertaiment: {
    movieApiUrl: process.env['MOVIE_API_URL'] as string,
    showApiUrl: process.env['SHOW_API_URL'] as string,
    feedBApiUrl: process.env['FEED_API_URL'] as string,
    userApiUrl: process.env['USER_API_URL'] as string
  }
};
