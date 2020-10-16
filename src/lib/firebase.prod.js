import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// config here

const config = {
    apiKey: "AIzaSyC_YNlvBNh567L02fcPbOq4RGvfF0DvOFU",
    authDomain: "netflix-df45a.firebaseapp.com",
    databaseURL: "https://netflix-df45a.firebaseio.com",
    projectId: "netflix-df45a",
    storageBucket: "netflix-df45a.appspot.com",
    messagingSenderId: "5299253732",
    appId: "1:5299253732:web:93eec4192d922df5d857f1"
}

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase)

export { firebase };

