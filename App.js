import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo, FontAwesome5, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';

import TelaInicio from './Telas/TelaInicio.js';
import TelaContato from './Telas/TelaContato.js';
import TelaCatalogo from './Telas/TelaCatalogo.js';

const Abas = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Abas.Navigator screenOptions={{
        headerStyle:{
          backgroundColor: '#400303'
        },
        headerTitleStyle: {
          color: '#fff',
          fontWeight: 'bold'
        },
        headerTitleAlign: 'center',

        tabBarStyle: {
          backgroundColor: "#fff"
        },
        tabBarLabelStyle:{
          fontSize: 14,
          fontWeight: "bold"
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: "#ab887c",
        tabBarActiveBackgroundColor: "#400303",
      }}>
        <Abas.Screen
          name="Início"
          component = { TelaInicio }
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" color={ color } size={ 20 } />
            ),
          }}
        />

        <Abas.Screen
          name="Catálogo"
          component = { TelaCatalogo }
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="wine-bottle"  color={ color } size={ 20 }/>
            ),
          }}
        />

        <Abas.Screen
          name="Contato"
          component = { TelaContato }
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="contacts" color={ color } size={ 20 }/>
            ),
          }}
        />
      </Abas.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
