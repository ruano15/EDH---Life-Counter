import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import FourPlayers from './FourPlayers';
import { Index } from './Index';
import { OnePlayer } from './OnePlayer';
import SixPlayers from './SixPlayers';
import { TwoPlayers } from './TwoPlayers';

const Stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={Index}/>
        <Stack.Screen name="OnePlayer" component={OnePlayer}/>
        <Stack.Screen name="TwoPlayers" component={TwoPlayers}/>
        <Stack.Screen name="FourPlayers" component={FourPlayers}/>
        <Stack.Screen name="SixPlayers" component={SixPlayers}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}