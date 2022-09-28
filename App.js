import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native-web';
import Task from './components/Task';
import GlobalStyle from './GlobalStyle';


export default function App() {


  const [task,setTask]=useState();
  const [taskItems,setTaskItems]=useState([]);

  const handleAddTask= () =>{
    setTaskItems([...taskItems,task]);
    setTask(null);
  }

  const completeTask=()=>{
    let itemsCopy= [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={GlobalStyle.container}>
        <view style={GlobalStyle.wrapper}>
          <text style={GlobalStyle.sectionTitle}> Today's task </text>

          <view style={GlobalStyle.task}>
            {
              taskItems.map((item,index)=>{
               return(
                <TouchableOpacity onPress={()=> completeTask()}>
                  <Task key={index} text={item}/>
                </TouchableOpacity>
               )
              })
            }
          </view>
        </view>

        <KeyboardAvoidingView 
        behavior={platform.OS==="ios"? "padding":"height"}
        style={GlobalStyle.writeTaskWrapper}>
          <TextInput style={GlobalStyle.input} placeholder={'write a task'}  value={task} onChangeText={ text=> setTask(text)} />
        </KeyboardAvoidingView>
        <TouchableOpacity onPress={()=> handleAddTask()} >
          <View style={GlobalStyle.addWrapper} > + </View>
        </TouchableOpacity>
    </View>
  );
}
