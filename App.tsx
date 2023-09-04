// import { View, Text } from 'react-native'
// import React from 'react'
// import 'react-native-gesture-handler';

// import DataDisplay from './src/screens/splash/intro0/Intro0';

// const App = () => {
//   return (
//     <View>
//       <DataDisplay />
//     </View>
//   )
// }

// export default App

import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import DataDisplay from './src/screens/splash/intro0/Intro0';

const App = () => {
  return (
    <Provider store={store}>
      <DataDisplay />
    </Provider>
  );
};

export default App;