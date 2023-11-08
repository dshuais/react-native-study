/*
 * @Author: dushuai
 * @Date: 2023-11-08 12:31:32
 * @LastEditors: dushuai
 * @LastEditTime: 2023-11-08 18:41:06
 * @description: App
 */
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <StatusBar backgroundColor="blue" />
      <Component title="我是App传递title" />
    </View>
  );
}

/**
 * 组件
 * @param {*} props 
 * @returns 
 */
function Component(props) {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <View>
        <StatusBar backgroundColor="red" />
        <Text style={styles.text}>{props.title}</Text>
        <Text style={styles.box}>我是p</Text>
        <Button TouchableOpacity="backgroundColor:red;" title='BUTTON' color='red' onPress={handleClick} />
        <Button title='clear' color='#000' onPress={_ => setCount(0)} />
      </View>
      <View style={styles.box}>
        <Text style={styles.count}>{count}</Text>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
  },
  box: {
    backgroundColor: 'red',
    width: 200,
    height: 100,
    borderRadius: 10,
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    width: 200,
    height: 100,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: 'red',
    display: 'block',
  }
});
