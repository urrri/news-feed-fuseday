/**
 * Created by chertkovalex on 07.12.16.
 */

import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {RaisedButton} from 'material-ui';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import _ from 'lodash';

@observer
class Aggregation extends Component {
    constructor() {
        super();
        this.authors = {};
        this.languages = {};
        this.countries = {};
        this.sites = {};
        this.categories = {};
    }


    componentWillReceiveProps(nextProps) {
        const {appState} = nextProps;
        const feed = appState.feed;
        this.authors = {};
        this.languages = {};
        this.countries = {};
        this.sites = {};
        this.categories = {};
        if (typeof feed != 'undefined') {
            feed.forEach(item => {
                if (typeof item.author != 'undefined') this.authors[item.author] = true;
                if (typeof item.language != 'undefined') this.languages[item.language] = true;
                if (typeof item.thread.country != 'undefined') this.countries[item.thread.country] = true;
                if (typeof item.thread.site != 'undefined') this.sites[item.thread.site] = true;
                if (typeof item.site_categories != 'undefined') {
                    item.site_categories.forEach(category => {
                        this.categories[category] = true;
                    });
                } else {
                    console.log('site_categories UNDEFINED!');
                }
            });
        } else {
            console.log('feed UNDEFINED!');
        }

    }

    getAuthorsTemplate() {
        return (
            <List>
                <Subheader inset={true}>Authors</Subheader>
                {_.map(this.authors, (v, author) => ( <ListItem>{author}</ListItem> )) }

            </List>
        );
    }

    getAggrTemplate() {
        return (
            <Card>
                <List>
                    <ListItem primaryText="Articles:" secondaryText={this.props.appState.feed.length}></ListItem>
                    <Divider inset={true}/>
                    <ListItem primaryText="Authors:" secondaryText={Object.keys(this.authors).length}></ListItem>
                    <Divider inset={true}/>
                    <ListItem primaryText="Languages:" secondaryText={Object.keys(this.languages).length}></ListItem>
                    <Divider inset={true}/>
                    <ListItem primaryText="Countries:" secondaryText={Object.keys(this.countries).length}></ListItem>
                    <Divider inset={true}/>
                    <ListItem primaryText="Sites:" secondaryText={Object.keys(this.sites).length}></ListItem>
                </List>
            </Card>
        );
    }

    render() {
        const {appState} = this.props;
        const feed = appState.feed;
        this.authors = {};
        this.languages = {};
        this.countries = {};
        this.sites = {};
        this.categories = {};
        if (typeof feed != 'undefined') {
            feed.forEach(item => {
                if (typeof item.author != 'undefined') this.authors[item.author] = true;
                if (typeof item.language != 'undefined') this.languages[item.language] = true;
                if (typeof item.thread.country != 'undefined') this.countries[item.thread.country] = true;
                if (typeof item.thread.site != 'undefined') this.sites[item.thread.site] = true;
                if (typeof item.site_categories != 'undefined') {
                    item.site_categories.forEach(category => {
                        this.categories[category] = true;
                    });
                } else {
                    console.log('site_categories UNDEFINED!');
                }
            });
        } else {
            console.log('feed UNDEFINED!');
        }
        const authorsTemplate = this.getAuthorsTemplate();
        const aggrTemplate = this.getAggrTemplate();
        return (
            <div>
                <div style={{display: 'none'}}>{appState.trigger}</div>
                {aggrTemplate}
            </div>
        );
    }
}
export default Aggregation;
