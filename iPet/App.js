/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  Button,
  Text,
  FlatList,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function SplashScreen() {
  return (
    <View
      style={[
        styles.container,
        {justifyContent: 'center', alignItems: 'center'},
      ]}>
      <Text>SplashScreen</Text>
    </View>
  );
}

function LoginScreen({setAppState}) {
  const login = () => {
    setAppState();
  };
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
          <Button title="Login" color="#841584" onPress={login} />
        </View>
      </View>
    </View>
  );
}

function Item({title, description}) {
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
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    description: 'description 1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    description: 'description 2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    description: 'description 3',
  },
];

function HomeScreen() {
  const renderItem = ({item}) => (
    <Item title={item.title} description={item.description} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  const [appState, setAppState] = useState('loading');

  useEffect(() => {
    setTimeout(() => setAppState(''), 5000);
  }, []);

  if (appState == 'loading') {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {appState == '' ? (
          <>
            <Stack.Screen
              name="Login"
              component={() => (
                <LoginScreen setAppState={() => setAppState('abc')} />
              )}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
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
