export const environment = {
    production: true,
    firebaseConfig: {
      apiKey: "${{ secrets.FIREBASE_API_KEY }}",
      authDomain: "${{ secrets.FIREBASE_AUTH_DOMAIN }}",
      databaseURL: "${{ secrets.FIREBASE_DATABASE_URL }}",
      projectId: "${{ secrets.FIREBASE_PROJECT_ID }}",
      storageBucket: "${{ secrets.FIREBASE_STORAGE_BUCKET }}",
      messagingSenderId: "${{ secrets.FIREBASE_MESSAGING_SENDER_ID }}",
      appId: "${{ secrets.FIREBASE_APP_ID }}",
      measurementId: "${{ secrets.FIREBASE_MEASUREMENT_ID }}"
    },
    entertaiment: {
      movieApiUrl: "${{ secrets.MOVIE_API_URL }}",
      showApiUrl: "${{ secrets.SHOW_API_URL }}",
      feedBApiUrl: "${{ secrets.FEED_API_URL }}",
      userApiUrl: "${{ secrets.USER_API_URL }}"
    }
  };
  