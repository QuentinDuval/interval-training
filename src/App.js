import './App.css';
import React from "react";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {initState, reducer} from './reducers/Reducer.js';
import {Panel} from './Panel.js'
import {ClockTick} from './Clock.js'


class App extends React.Component {

  render() {
    let state = initState();
    const store = createStore(reducer, state);

    return (
      <Provider store={store}>
        <div className="App">
          <ClockTick/>
          <Panel/>
        </div>
      </Provider>
    );
  }
}


export default App;
