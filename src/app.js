import React from 'react';
import { render } from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from 'reducers';
import Routes from 'router/router';
import { AppContainer } from 'react-hot-loader';

require('normalize.css');
require('style/app.less');
const middleware = [thunk,createLogger];
const store = createStore(reducer,applyMiddleware(...middleware));
const App = {
  run:function(){   
   	render(
    <AppContainer>
      <Provider store={store}>
        <Routes/>
      </Provider>
    </AppContainer>, 
      document.getElementById('root')
    )
  }
}
App.run();
if (module.hot) {
    module.hot.accept('router/router', () => {
      App.run();
    })
}
