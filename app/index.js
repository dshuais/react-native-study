/*
 * @Author: dushuai
 * @Date: 2023-11-10 11:52:21
 * @LastEditors: dushuai
 * @LastEditTime: 2023-11-10 17:38:43
 * @description: Home
 */
import { Stack, useRouter } from 'expo-router'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const Home = () => {

  const router = useRouter()

  // console.log('router:>> ', router)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>

      <Stack.Screen options={{
        headerStyle: { backgroundColor: '#eee' },
        headerShadowVisible: false
      }} />

      <Text>Home</Text>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  lightWhite: {
    backgroundColor: '#fff',
  }
})
