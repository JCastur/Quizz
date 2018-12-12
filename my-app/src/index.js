import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReduxProvider from './redux/ReduxProvider';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ReduxProvider />, document.getElementById('root'));

serviceWorker.unregister();
