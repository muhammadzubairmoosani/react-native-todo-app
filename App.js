import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import Textbox from './components/textbox'

class App extends React.Component {
  render() {
    return (
      <Textbox />
    );
  }
};

// const styles = StyleSheet.create({
//   input: {
//     marginTop: '5px',
//   }
// });

export default App;
