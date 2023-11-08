/*
 * @Author: dushuai
 * @Date: 2023-11-08 12:31:32
 * @LastEditors: dushuai
 * @LastEditTime: 2023-11-08 16:13:04
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
  }
});

function Component(props) {

  const [count, setCount] = useState(0);

  function handleClick() {
    console.log(props.title);
    setCount(count + 1);
  }

  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
      <Button title='BUTTON' color='red' onPress={handleClick} />
      <Text>{count}</Text>
      <Button title='clear' color='#000' onPress={_ => setCount(0)} />
    </View>
  )
}
