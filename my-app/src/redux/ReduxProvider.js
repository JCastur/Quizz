import { questions } from "../assets/mock-data";
import { Provider } from 'react-redux';
import GlobalState from "./reducers";
import { createStore } from 'redux';

import React from 'react';
import App from '../App';

export default class ReduxProvider extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            score: 0,
            finished: false,
            currentQuestion: 0,
            questions: [ ...questions]
        };
        this.store = this.configureStore();
    }

    render() {
        return (
            <Provider store={ this.store }>
                <div>
                    <App store={ this.store } />
                </div>
            </Provider>
        );
    }

    configureStore() {
        return createStore(GlobalState, this.initialState);
    }
}
