import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default CardSemanal = (props) => {
    return (
      <View style={[styles.containerCard, { backgroundColor: props.backgroundColor }]}>
        <Image source={props.imagemSemanal} style={styles.imagemSemanal}></Image>
        <View style={styles.containerTexto}>
          <Text style={styles.textosCard}>{props.descricao}</Text>
          <Text style={styles.textosCard}>{props.horas}</Text>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    containerCard:{
      flex:1,
      width:'90%',
      height: 250,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 50,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 10,
    },
    imagemSemanal:{
      flex: 1,
      height: 250,
      width: 80,
      borderWidth: 2, 
      borderRadius: 10,
    },
    containerTexto:{
       flex: 1,
       gap:5,
    },
    textosCard:{
      fontSize: 20,
      color: 'white',
    },
  
  });




  