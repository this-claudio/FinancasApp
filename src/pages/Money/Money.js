import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Money({ navigation}) {
 return (
   <View>
        <Text>Money</Text>
        <TouchableOpacity style={{backgroundColor:'#dadada'}}
        onPress={ () => {navigation.navigate('CreditCard', {nome: 'Joao da Silva'})}}
        >
          <Text>Proxima pagina</Text>
        </TouchableOpacity>

   </View>
  );
}