/**
 * Created by ygoltsma on 12/7/2016.
 */
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {List, ListItem} from 'material-ui/List';


@observer
export default class Feed extends Component {

    render() {
        const {appState} = this.props;
        return (
            <div>
                <div className="feed">{appState.trigger}</div>
                <List>
                    {appState.feed.map(item => {
                        return (
                            <div key={item.uuid} className="item">
                                <ListItem
                                    primaryText={item.title}
                                    secondaryText={`by ${item.author}`}
                                    leftAvatar={item.thread.main_image}
                                >
                                </ListItem>

                            </div>
                        )
                    })}
                </List>
            </div>
        );
    }
}
