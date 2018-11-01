import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentDidMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyCRRNZoSYZdtkfd9carZqtCV88Npp75O8I",
      authDomain: "management-83ea9.firebaseapp.com",
      databaseURL: "https://management-83ea9.firebaseio.com",
      projectId: "management-83ea9",
      storageBucket: "management-83ea9.appspot.com",
      messagingSenderId: "641295390815"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

export default App;