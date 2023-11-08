/*
 * @Author: dushuai
 * @Date: 2023-11-08 12:31:32
 * @LastEditors: dushuai
 * @LastEditTime: 2023-11-08 18:41:06
 * @description: App
 */
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

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
      {/* onStartShouldSetPanResponderCapture 捕获询问
          onStartShouldSetPanResponder 冒泡询问 */}
      {/* view内设置onStartShouldSetResponder方法返回一个ture代表可出发touchstart事件
       设置onStartShouldSetResponderCapture方法返回true可阻止内层冒泡 */}
      <View>
        <StatusBar backgroundColor="red" />
        <Text style={styles.text}>{props.title}</Text>
        <Text style={styles.box}>我是</Text>
        <Button title='BUTTON' color='red' onPress={handleClick} />
        <Button title='clear' color='#000' onPress={_ => setCount(0)} />

        <TouchableHighlight style={styles.touchBox} onPress={handleClick}>
          <TouchableHighlight style={{ borderRadius: '10px' }} onPress={handleClick} underlayColor='#fff' activeOpacity={0.5}>
            <View style={styles.touchButton}>
              <Text>++</Text>
            </View>
          </TouchableHighlight>
        </TouchableHighlight>

        {/* 新按钮替代方案 但是点击效果需要自己实现 */}
        <Pressable style={({ pressed }) => [styles.button, { backgroundColor: pressed ? 'rgba(255, 0, 0, 0.5)' : 'red' }]} onPress={handleClick}>
          <Text>新按钮替代方案</Text>
        </Pressable>

        {/* 一个可点击盒子 */}
        <TouchableOpacity style={styles.button} onPress={e => setCount(count + 1)} activeOpacity={0.3}>
          <Text>我是按钮</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <Text style={styles.count}>{count}</Text>
      </View>

      <TouchableHighlight onPress={handleClick}>
        <View style={styles.touchButton}>
          <Text>++</Text>
        </View>
      </TouchableHighlight>
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
    marginBottom: 20,
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
  },
  touchButton: {
    width: 200,
    height: 100,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
  },
  touchBox: {
    width: '100%',
    height: 200,
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
    paddingTop: 20,
  }
});
