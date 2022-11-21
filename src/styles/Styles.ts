import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
      },
      viewAlter:{
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      lifePlayer:{
        flexDirection: 'column',
        alignItems: 'center',
      },
      txtButton: {
        color: "#fff",
        fontSize: 24,
        paddingBottom: 10,
        paddingTop: 10,
      },
      txtLife:{
        color: 'white',
        fontSize: 50,
      },
      playerName:{
        color: 'white',
        width: 100,
        textAlign: 'center',
      },
      containerPrincipal: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      },
      img:{
        width: 100,
        height: 100,
      },
      OpenTxt:{
        fontSize: 30,
        color: 'white',
        paddingBottom: 50,
      },
      selectButton:{
        margin: 10,
        width: 75,
        height: 75,
        backgroundColor: '#454545',
        borderRadius: 15,
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 25,
        fontFamily: 'arial',
      },
      buttonView:{
        flexDirection: 'row'
      },
      containerTwo:{
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      },
      presentationTxt:{
        fontSize: 20,
        color: 'white',
      }
})

export default styles