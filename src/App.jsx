import React, {Component} from 'react';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RaisedButton} from 'material-ui';
import Feed from './components/Feed'
import Article from './components/ArticlePage'
import Summary from './components/aggregation'
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import {Card} from 'material-ui/Card';

import injectTapEventPlugin from 'react-tap-event-plugin';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;


@observer
class App extends Component {
    constructor(){
        super();
        injectTapEventPlugin();
    }

    render() {
        const {appState} = this.props;
        return (
            <MuiThemeProvider>
                <div>

                    <Paper zDepth={1}>
                        <BottomNavigation selectedIndex={appState.selectedViewIndex}>
                            <BottomNavigationItem
                                label="Summary"
                                icon={favoritesIcon}
                                onTouchTap={() => appState.toSummary()}
                            />
                            <BottomNavigationItem
                                label="Feed"
                                icon={recentsIcon}
                                onTouchTap={() => appState.toFeed()}
                            />
{/*
                            <BottomNavigationItem
                                label="Favorites"
                                icon={favoritesIcon}
                                onTouchTap={() => appState.toArticle()}
                            />
                            <BottomNavigationItem
                                label="Nearby"
                                icon={nearbyIcon}
                                onTouchTap={() => appState.view = 'article'}
                            />
*/}
                        </BottomNavigation>
                    </Paper>
                    {appState.view}
                    {appState.view === 'summary' && <Summary appState={appState}/>}
                    {appState.view === 'feed' && <Feed appState={appState}/>}
                    {appState.view === 'article' && <Article appState={appState}/>}



                    <DevTools />
                </div>
            </MuiThemeProvider>
        );
    }

}


export default App;
