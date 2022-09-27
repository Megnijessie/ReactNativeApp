import React from 'react';
import { Text, View } from 'react-native';
import Task from './components/Task';
import GlobalStyle from './GlobalStyle';


export default function App() {
  return (
    <View style={GlobalStyle.container}>
        <view style={GlobalStyle.wrapper}>
          <text style={GlobalStyle.sectionTitle}> Today's task </text>

          <view style={GlobalStyle.task}>
            <Task text={'task 1'}/>
            <Task text={'task 2'}/>
          </view>
        </view>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
