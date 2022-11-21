import React from 'react';
import { View } from 'react-native';
import styles from '../styles/Styles';
import { TwoPlayers } from './TwoPlayers';

export default function App() {

  return (
    <View style={styles.containerPrincipal}>
      <View style={[styles.container, {transform: [{rotate: '90deg'}]}]}>
        <TwoPlayers/>
      </View>
      <View style={[styles.container, {transform: [{rotate: '90deg'}]}]}>
        <TwoPlayers/>
      </View>
      <View style={[styles.container, {transform: [{rotate: '90deg'}]}]}>
        <TwoPlayers/>
      </View>
    </View>
  );
}