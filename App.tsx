/*
 * @Author: dushuai
 * @Date: 2023-11-09 14:05:55
 * @LastEditors: dushuai
 * @LastEditTime: 2023-11-09 17:07:40
 * @description: App
 */
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>我是父组件props<Text>{count}</Text></Text>
      <Component title='我是props' c={count} f={setCount} />
      <StatusBar style="auto" />
    </View>
  );
}

type Props = {
  title: string;
  c: number;
  f: Function;
}

function Component(props: Props) {
  const [count, setCount] = useState(0);
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={_ => props.f(props.c + 1)}>
        <Text>{props.title}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={_ => props.f(0)}>
        <Text>clear</Text>
      </TouchableOpacity>
      <Text>{props.c}</Text>
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
  button: {
    width: 200,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
  }
});
