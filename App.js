/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, View, 
  Image, 
  Button,
  ProgressViewIOS} from 'react-native';
import Logo from './assets/Logo.jpeg'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.h1}>Health App</Text>
          <Text style={styles.h2}>Visually see how your health is in sync.</Text>
        </View>
        <View style={styles.middleContainer}>  
          <Image 
            source={Logo}
            style={styles.image}
            />
        </View>
        <ProgressViewIOS number={1} />
          <View style={styles.bottomContainer}>
            <View style={styles.buttonContainer}>
              <Button
                title="Get Started"
                style={styles.button}
                onPress={() => this.onPress()}
                color="#fff"
              />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#000',
    alignItems: 'center',
    width: '100%',
  },
  h1: {
    color: '#008F68',
    fontSize: 30,
    marginTop: 30,
  },
  h2: {
    color: '#FAE042',
    fontSize: 18,
  },
  image: {
    width: 300,
    height: 260,
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#008F68',
    borderRadius: 5,
    padding: 5,
    margin: 15
  },
  topContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    width: '90%',
    margin: 20,
    padding: 10,
  },
});
