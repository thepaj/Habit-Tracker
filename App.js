import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
//import Dashboard from './components/Dashboard';
import NewHabit from './components/NewHabit';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { background, blueGreen } from './utils/colors';


function MyStatusBar({ backgroundColor, ...props }) {
  return (
    <View>
      <StatusBar translucent backgroundColor={blueGreen} {...props} />
    </View>
  )
}

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <MyStatusBar />
      <View style={styles.container}>
        <NewHabit />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
