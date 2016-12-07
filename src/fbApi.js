import { config } from './fb-config';
import * as firebase from 'firebase';

class FbApi {
  constructor(){
    firebase.initializeApp(config);
  }

getOnce() {
   return firebase.database()
       .ref('/stream_2').orderByChild('page')
       .limitToLast(100)
       .once('value')
     .then(function(snapshot) {
       // console.log("once",snapshot.val());
       return snapshot.val();
     });
 }

getOn(cb) {
   var count = 0;
    firebase.database().ref('/stream_2').orderByChild('page').limitToLast(100)
     .on('child_added', function(snapshot) {
       console.log(++count/*,snapshot.val()*/);
       cb(snapshot.val());
     })
 }

}

export default new FbApi();
