import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'


import Header  from '../../components/Header'; 
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
  {
  id:1,
  label:'Boleto Luz',
  value:'-300,90',
  date:'17/09/2023',
  type: 0 // dispesa
  },
  {
    id:2,
    label:'Pix Cliente Joaquim',
    value:'2.500,90',
    date:'17/09/2023',
    type: 1 // receita
  },
  {
    id:3,
    label:'Salário',
    value:'-3889,90',
    date:'14/09/2023',
    type: 0 // receita
  },
  {
    id:4,
    label:'Habbibs',
    value:'-89,90',
    date:'13/09/2023',
    type: 0 // despesa
  },
  {
    id:5,
    label:'Posto São Joao',
    value:'-99,90',
    date:'13/09/2023',
    type: 0 // despesa
  },
  {
    id:6,
    label:'Pix do Cidinho',
    value:'203,90',
    date:'11/09/2023',
    type: 1 // receita
  },
  {
    id:7,
    label:'Farmácia',
    value:'-40,90',
    date:'14/09/2023',
    type: 0 // despesa
  },
  {
    id:8,
    label:'UberX',
    value:'-19,90',
    date:'14/09/2023',
    type: 0 // despesa
  },
]

export default function Home() {
  
  const [showValue, SetShowValue] = useState(false);
  const changeShow = () => {SetShowValue(!showValue)}

  return (
    <View style={styles.container}>
      <Header name='Joao da Silva'/>
      <Balance saldo='15.000,00' gasto='-300,00'></Balance>

      <Actions/>

      <View style={styles.movContainer}>
        <Text style={styles.title}>Ultimas Movimentações</Text>
        <TouchableOpacity style={styles.touch}
          onPress={changeShow}>
          { showValue === true ?
            <Ionicons name='eye-off-outline' size={27} color='#000'></Ionicons>:
            <Ionicons name='eye-outline' size={27} color='#000'></Ionicons>            
          }
        </TouchableOpacity>
      </View>

      <FlatList style={styles.lista}
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({item}) => <Moviments data={item} isShow={showValue}/>}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  title:{
    fontSize:18,
    fontWeight: 'bold',
    marginLeft:14,
    marginRight:14,
    marginTop:14,
    marginBottom:14
  },
  movContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft:14,
    paddingRight:14,
  },
  touch:{
    paddingTop:14
  },
  lista: {
    marginStart: 14,
    marginEnd: 14
  }
});
