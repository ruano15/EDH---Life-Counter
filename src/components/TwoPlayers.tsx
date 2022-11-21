import React from 'react';
import { View } from 'react-native';
import styles from '../styles/Styles';
import { OnePlayer } from './OnePlayer';

export function TwoPlayers() {

  return (
    <View style={styles.containerPrincipal}>
      <View style={[styles.container, {transform: [{rotate: '180deg'}]}]}>
        <OnePlayer/>
      </View>
      <View style={styles.container}>
        <OnePlayer/>
      </View>
    </View>
  );
}