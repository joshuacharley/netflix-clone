import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCrZht-dhx325WyDw7rUKGbfLdwcp0qr2Q",
  authDomain: "my-netflix-clone.firebaseapp.com",
  databaseURL: "https://my-netflix-clone.firebaseio.com",
  projectId: "my-netflix-clone",
  storageBucket: "my-netflix-clone.appspot.com",
  messagingSenderId: "48948046459",
  appId: "1:48948046459:web:2bdfa140963974aba350de"
};

const firebase = Firebase.initializeApp(config);

export { firebase };
