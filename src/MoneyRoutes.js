import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Money from './pages/Money/Money';
import CreditCard from './pages/CreditCard/CreditCard';

const Stack = createNativeStackNavigator();

export default function MoneyRoutes() {
 return (
      <Stack.Navigator 
      initialRouteName='Money'
      >
        <Stack.Screen name='Money' 
        component={Money} 
        options={{
          title:'Inicio Money',
          headerStyle: {
            backgroundColor: '#dadada',
          },
          headerRight: () => (
            <TouchableHighlight style={styles.button}
              onPress={() => alert('This is a button!')}
            >
            <Text style={{color: '#fff'}}>Info</Text>
            </TouchableHighlight>
          ),
        }}
      />
        <Stack.Screen name='CreditCard' component={CreditCard}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>

  );
}

const styles = StyleSheet.create({
  button:{
    borderRadius: 99,
    backgroundColor: '#787878',
    padding: 10,
  }
})