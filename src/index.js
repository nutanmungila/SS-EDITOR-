import React from 'react'
import {render} from 'react-dom'
import { default as RootView } from './containers/Root';
import configureStore from './store/configureNutan';

const model = configureStore();

render(<RootView store={model}/>, document.querySelector('#app'))
