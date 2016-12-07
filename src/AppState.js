import { observable } from 'mobx';
import fbApi from './fbApi';

class AppState {
  @observable timer = 0;

  constructor() {
    // const res = fbApi.getOnce();
    const res = fbApi.getOn();
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  resetTimer() {
    this.timer = 0;
  }
}

export default AppState;
