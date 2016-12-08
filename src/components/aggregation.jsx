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
    constructor(){
        super();
        this.authors = {}; 
        this.locations = {}; 
        this.languages = {};
        this.countries = {};
        this.sites = {};
        this.categories = {};

    }
    

    componentWillReceiveProps(nextProps){
        console.log('nextProps');
        const {appState} = nextProps;
        console.log(appState);
        const feed = appState.feed;

        this.authors = {}; 
        this.locations = {}; 
        this.languages = {};
        this.countries = {};
        this.sites = {};
        this.categories = {};
        if(typeof feed != 'undefined'){
            feed.forEach(item => {
                this.authors[item.author] = true;
                //locations[item] = {}
                if (item.language) this.languages[item.language] = true;
                this.countries[item.thread.country] = true;
                this.sites[item.thread.site] = true;
                if(typeof item.site_categories != 'undefined'){
                    item.site_categories.forEach(category => {
                        this.categories[category] = true;
                    }); 
                }else{
                    console.log('site_categories UNDEFINED!');
                }
            });
        }else{
            console.log('feed UNDEFINED!');
        }
        
    }

    
    getAuthorsTemplate(){
        return(
            <List>
                <Subheader inset={true}>Authors</Subheader>
                {_.map(this.authors, (v, author) => ( <ListItem>{author}</ListItem> )) }
                       
            </List>
        );
    }

    getAggrTemplate(){

        const authorsLength = Object.keys(this.authors).length;

        return(
            <Card>
                <List>
                    <ListItem primaryText="Articles:" secondaryText={this.props.appState.feed.length} ></ListItem>
                    <Divider inset={true} />
                    <ListItem primaryText="Authors:" secondaryText={Object.keys(this.authors).length} ></ListItem>
                    <Divider inset={true} />
                    <ListItem primaryText="Languages:" secondaryText={Object.keys(this.languages).length} ></ListItem> 
                    <Divider inset={true} />
                    <ListItem primaryText="Countries:" secondaryText={Object.keys(this.countries).length} ></ListItem> 
                    <Divider inset={true} />
                    <ListItem primaryText="Sites:" secondaryText={Object.keys(this.sites).length} ></ListItem> 
                </List>
            </Card>
        );
    }
    render() {
        console.log('nextProps');
        const {appState} = this.props;
        console.log(appState);
        const feed = appState.feed;
        this.authors = {}; 
        this.locations = {}; 
        this.languages = {};
        this.countries = {};
        this.sites = {};
        this.categories = {};
        if(typeof feed != 'undefined'){
            feed.forEach(item => {
                this.authors[item.author] = true;
                //locations[item] = {}
                if (item.language) this.languages[item.language] = true;
                this.countries[item.thread.country] = true;
                this.sites[item.thread.site] = true;
                if(typeof item.site_categories != 'undefined'){
                    item.site_categories.forEach(category => {
                        this.categories[category] = true;
                    }); 
                }else{
                    console.log('site_categories UNDEFINED!');
                }
            });
        }else{
            console.log('feed UNDEFINED!');
        }
        const authorsTemplate = this.getAuthorsTemplate();
        const aggrTemplate = this.getAggrTemplate();
        const authors = this.authors;
        return (
        <div>
            <div style={{display:'none'}}>{appState.trigger}</div>
 
            {aggrTemplate}

         </div>
        );
    }   

}


export default Aggregation;
