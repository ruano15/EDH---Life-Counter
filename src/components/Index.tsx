import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/Styles';

export function Index() {

    const navigation = useNavigation()

    function handleToOnePlayer(){
        navigation.navigate('OnePlayer')
    }
    function handleToTwoPlayers(){
        navigation.navigate('TwoPlayers')
    }
    function handleToFourPlayers(){
        navigation.navigate('FourPlayers')
    }
    function handleToSixPlayers(){
        navigation.navigate('SixPlayers')
    }

  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.containerTwo}>
        <Image style={styles.img} source={require('../images/finalizado.png')}/>
        <Text style={styles.OpenTxt}>EDH - Life Counter</Text>
      </View>
      <Text style={styles.presentationTxt}>Number of Players</Text>
      <View style={styles.buttonView}>
        <TouchableOpacity onPress={handleToOnePlayer} style={styles.selectButton}>1</TouchableOpacity>
        <TouchableOpacity onPress={handleToTwoPlayers} style={styles.selectButton}>2</TouchableOpacity>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity onPress={handleToFourPlayers} style={styles.selectButton}>4</TouchableOpacity>
        <TouchableOpacity onPress={handleToSixPlayers} style={styles.selectButton}>6</TouchableOpacity>
      </View>
    </View>
  );
}