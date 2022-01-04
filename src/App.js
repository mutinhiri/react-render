import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeContainer from './components/cakeContainer';
import HooksCakeContainer from './components/hooksCakeContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
     </div>
    </Provider>
  );
}

export default App;
