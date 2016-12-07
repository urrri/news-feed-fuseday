import { observable } from 'mobx';
import fbApi from './fbApi';

class AppState {
  @observable timer = 0;
  @observable feed = [];
  constructor() {
    // const res = fbApi.getOnce();
    fbApi.getOn(item => this. feed.push(item));
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  resetTimer() {
    this.timer = 0;
  }
}

export default AppState;
