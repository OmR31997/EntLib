export const environment = {
    production: true,
  
    firebaseConfig: {
      apiKey: '${FIREBASE_API_KEY}',
      authDomain: '${FIREBASE_AUTH_DOMAIN}',
      databaseURL: '${FIREBASE_DATABASE_URL}',
      projectId: '${FIREBASE_PROJECT_ID}',
      storageBucket: '${FIREBASE_STORAGE_BUCKET}',
      messagingSenderId: '${FIREBASE_MESSAGING_SENDER_ID}',
      appId: '${FIREBASE_APP_ID}',
      measurementId: '${FIREBASE_MEASUREMENT_ID}',
    },
    entertaiment: {
      movieApiUrl: '${MOVIE_API_URL}',
      showApiUrl: '${SHOW_API_URL}',
      userApiUrl: '${USER_API_URL}',
      feedApiUrl: '${FEED_API_URL}',
    },
  };
  