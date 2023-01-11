/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  Button,
  Text,
} from 'react-native';

function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarView}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.input} placeholder="User Name" />
        <TextInput style={styles.input} placeholder="Password" />
        <View style={styles.loginButtonView}>
          <Button title="Login" color="#841584" />
        </View>
      </View>
    </View>
  );
}

function Item() {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemView}>
        <Image
          style={styles.imageItem}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      <View style={styles.itemView}>
        <Text>Title</Text>
        <Text>Description</Text>
      </View>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Item />
      <Item />
      <Item />
    </View>
  );
}

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#a6a6a6',
    borderRadius: 5,
  },
  inputView: {
    flex: 1,
  },
  avatarView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonView: {
    alignItems: 'flex-end',
    marginRight: 12,
  },
  itemContainer: {
    flexDirection: 'row',
  },
  itemView: {
    flex: 1,
  },
  imageItem: {
    height: 200,
    margin: 12,
  },
});

export default App;
