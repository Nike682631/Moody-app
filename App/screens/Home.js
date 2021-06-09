import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity ,Alert, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

const Separator = () => (
    <View style={styles.separator} />
  );

  export default function Home({navigation}) {     
    return (
        <View style = {styles.background}>            
        <TouchableOpacity
          style={styles.HomeButtonStyle}
          activeOpacity = { .5 }
          onPress={ () => navigation.navigate("Mood") }
       >
        <Text style={styles.TextStyle}> <Icon name="plus" size={16} color="#000" />  Add a Record </Text>    
      </TouchableOpacity>
        <Separator/>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        paddingTop: 45,
    },
    HomeButtonStyle: {
        marginTop:10,
        height: 40,
        width: 308,
        backgroundColor:'#FFE687',
        borderRadius:50,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: "center",
        alignSelf: 'center'
      },
     
    separator: {
        marginTop: 30,
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    TextStyle:{
        color:'#000',
        textAlign:'center',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 15,
        lineHeight: 23,
    }
})
