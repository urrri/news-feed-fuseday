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

getOn(cb) {
   var count = 0;
   firebase.database().ref('/stream')
     .on('child_added', function(snapshot) {
       console.log(++count,snapshot.val());
       cb(snapshot.val());
     })
 }

}

export default new FbApi();
