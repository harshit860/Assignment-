import React from 'react';
import { render } from 'react-dom';
import Main from './Components/Main';
import { Provider } from 'react-redux'
import ReduxState from './Redux/reducer'
import { createStore } from 'redux'

const RStore = createStore(ReduxState)
const rootElement = document.getElementById('react-app');

render(
    <div>
        <Provider store={RStore}>
            <Main />
        </Provider>

    </div>, rootElement);
