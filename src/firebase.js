import * as firebase from 'firebase';

const config = {
  apiKey: 'IzaSyCS-IvAqv_5NBq4QBfrYaAvgAYDQKET1y4',
  authDomain: 'reactprofile-d65fd.firebaseapp.com',
  databaseURL: 'https://reactprofile-d65fd.firebaseio.com',
  storageBucket: 'reactprofile-d65fd.appspot.com'
};
firebase.initializeApp(config);

export default firebase;