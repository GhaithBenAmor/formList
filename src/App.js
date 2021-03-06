import React from "react"
import Users from "./App/Users/Users.js"
import { Provider } from 'react-redux';
import configureStore, { history } from './store';
import Image from"./image"

export const store = configureStore();

class App extends React.Component {


  render() {

    
    return (
      
      <Provider store={store}>
        <Image className="image"/>
        <Users />
      </Provider>
    );


  }
}

export default App;