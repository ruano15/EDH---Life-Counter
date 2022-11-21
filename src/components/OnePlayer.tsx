import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from '../styles/Styles';
import { useState } from 'react';

export function OnePlayer() {

  const [life, setLife] = useState(40)

    function addOne(){
        setLife(life + 1)
    }
    function redOne(){
        setLife(life - 1)
    }
    function addFIve(){
        setLife(life + 5)
    }
    function redFive(){
        setLife(life - 5)
    }

  return (
    <View style={styles.container}>
      <View style={styles.viewAlter}>
        <TouchableOpacity onPress={addOne}><AntDesign name="upcircle" size={24} color="white" /></TouchableOpacity>
        <Text style={styles.txtButton}>1</Text>
        <TouchableOpacity onPress={redOne}><AntDesign name="downcircle" size={24} color="white" /></TouchableOpacity>
      </View>
      <View style={styles.lifePlayer}>
        <TextInput style={styles.playerName} placeholder='Player Name'/>
        <Text style={styles.txtLife}>{life}</Text>
      </View>
      <View style={styles.viewAlter}>
        <TouchableOpacity onPress={addFIve}><AntDesign name="upcircle" size={24} color="white" /></TouchableOpacity>
        <Text style={styles.txtButton}>5</Text>
        <TouchableOpacity onPress={redFive}><AntDesign name="downcircle" size={24} color="white" /></TouchableOpacity>
      </View>
    </View>
  );
}