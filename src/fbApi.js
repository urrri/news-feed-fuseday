import { config } from './fb-config';

class FbApi {
  constructor(){
    firebase.initializeApp(config);
  }

getOnce() {
   return firebase.database().ref('/stream').once('value')
     .then(function(snapshot) {
       console.log("once",snapshot.val());
       return snapshot;
     });
 }

getOn() {
   var count = 0;
   return firebase.database().ref('/stream')
     .on('child_added', function(snapshot) {
       console.log(++count,snapshot.val());
       return snapshot;
     });
 }

}

export default new FbApi();
