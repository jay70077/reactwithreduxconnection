import React, { Component } from "react";
import AppContainer from "./app/containers/AppContainer";
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from "./app/redux/Reducer/reducer";
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <AppContainer />;
        </Provider>
    )


  }
}
