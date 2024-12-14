export interface EntertainmentConfig {
  movieApiUrl: string;
  showApiUrl: string;
  feedApiUrl: string;
  userApiUrl: string;
}

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

export interface Environment {
  production: boolean;
  firebaseConfig: FirebaseConfig;
  entertaiment: EntertainmentConfig;
}
