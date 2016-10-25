

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store'
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {IntlProvider} from 'react-intl';
import {register} from './socket'

const store = configureStore();
register(store.dispatch)

ReactDOM.render(<Provider store={store}>
        <IntlProvider>
            <Router routes={routes} history={browserHistory}/>
        </IntlProvider>
    </Provider>
    , document.getElementById('app'));
