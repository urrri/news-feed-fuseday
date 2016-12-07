import React, {Component} from 'react';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RaisedButton} from 'material-ui';

import injectTapEventPlugin from 'react-tap-event-plugin';

@observer
class App extends Component {
    constructor(){
        super();
        injectTapEventPlugin();
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <RaisedButton onClick={this.onReset}>
                        Seconds passed: {this.props.appState.timer}
                    </RaisedButton>
                    <DevTools />
                </div>
            </MuiThemeProvider>
        );
    }

    onReset = () => {
        this.props.appState.resetTimer();
    }
}
;

export default App;
