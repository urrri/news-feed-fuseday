import {observable, computed} from 'mobx';
import _ from 'lodash';
import fbApi from './fbApi';

class AppState {
    @observable trigger = 0;
    feed = [];

    @observable view = 'summary';

    toFeed(){
        this.view = 'feed';
    }

    toArticle(){
        this.view = 'article';
    }
    toSummary(){
        this.view = 'summary';
    }

    @computed get selectedViewIndex(){
        switch(this.view){
            case 'summary': return 0;
            case 'feed': return 1;
            case 'article': return 2;

        }
    }

    @observable article = {};

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
