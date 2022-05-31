import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { Spacing } from './src/components/NavBar/styles';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <View>
      <Home/>
    </View>
  );
}

