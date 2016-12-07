/**
 * Created by ygoltsma on 12/7/2016.
 */
import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';


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
                                <ListItem key={item.uuid}
                                    primaryText={item.title}
                                    secondaryText={`by ${item.author}`}
                                    leftAvatar={<Avatar src={item.thread.main_image} />}
                                >
                                </ListItem>
                        )
                    })}
                </List>
            </div>
        );
    }
}
