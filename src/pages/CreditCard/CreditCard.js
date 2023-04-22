import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

const statusHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 64;

export default function CreditCard( {route}) {
 return (
   <View style={styles.header}>
        <Text> Cartão de Crédito do(a) {route.params?.nome}</Text>
        <Text>Eu ocultei o header</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    header:{
        marginTop: statusHeight,
    }
})