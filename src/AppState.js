import {observable} from 'mobx';
import _ from 'lodash';
import fbApi from './fbApi';

class AppState {
    @observable trigger = 0;
    feed = [];

    constructor() {
        const updateTrigger = _.debounce(() => this.trigger++, 10);

        const addItem = (item) => {
            while(this.feed.length > 100) this.feed.shift();
            this.feed.push(item);
            updateTrigger();
            // this.feed[0] = item;
            console.log(this.feed.length);
        };

        fbApi.getOnce().then(feed => {
            _.forEach(feed, addItem);
            this.trigger++;
            fbApi.getOn(addItem);
        });
    }
}

export default AppState;
