import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MotiView, MotiText} from 'moti'

export default function Balance({saldo, gasto}) {
 return (
   <MotiView style={styles.container}
   
   from={{
        rotateX: '-100deg',
        opacity: 0 
      }}

      animate={{
        rotateX: '-0deg',
        opacity: 1 
      }}

      transition={{
        type: 'timing',
        duration: 800,
        delay:300
      }}
   
   >

    <View style={styles.Item}>
        <Text style={styles.ItemTitle}>Saldo</Text>
        <View style={styles.ItemContent}>
          <Text style={styles.currentSymbol}>R$</Text>  
          <Text style={styles.balance}>{saldo}</Text>  
        </View>
    </View>

    <View style={styles.Item}>
        <Text style={styles.ItemTitle}>Gastos</Text>
        <View style={styles.ItemContent}>
          <Text style={styles.currentSymbol}>R$</Text>  
          <Text style={styles.balanceGasto}>{gasto}</Text>  
        </View>
    </View>

   </MotiView>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop:-24,
        marginStart: 14,
        marginEnd: 14,
        paddingTop: 14,
        paddingBottom: 14,
        borderRadius:6,
        zIndex: 99,
        elevation:10,
        shadowColor:'#000',
        shadowOffset: {width:0, height:4},
        shadowOpacity:'0.2',
        shadowRadius:2,
    },
    ItemTitle: {
        fontSize:20,
        color:'#d9d9d9',
    },
    ItemContent:{
        flexDirection: 'row',
    },
    currentSymbol:{
        color:'#d9d9d9',
        marginRight: 6,
    },
    balance:{
        fontSize:22,
        color: '#2ECC71'
    },
    balanceGasto:{
        fontSize:22,
        color: '#E74C3C'
    }
})