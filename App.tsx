import React from 'react';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store,{persistor} from './src/redux/store';

import DataDisplay from './src/screens/splash/intro0/Intro0';
import RootStack from './src/routes/Rootstack';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/* <NavigationContainer> */}
          <RootStack />
        {/* </NavigationContainer> */}
      </PersistGate>
    </Provider>
  );
};

export default App;