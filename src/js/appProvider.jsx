/*-----------------------------------------------------*/

import React            from 'react';
import { createStore }  from 'redux';
import { Provider }     from 'react-redux';
import App              from './App.jsx';
import appReducer       from './AppReducer.jsx';

/*-----------------------------------------------------*/


let store       = createStore(appReducer);
let htmlElement = document.getElementById('appdiv');

React.render(
    <Provider store={store}>
        {() => <App  />}
    </Provider>,
    htmlElement
);

