import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { FontAwesome5, Entypo, MaterialIcons } from '@expo/vector-icons';

export default function TelaContato() {
  return (
    <ScrollView style={styles.container}>
     
      {/* Texto de topo */}
      <Text style={styles.textoTopo}>
        Entre em contato conosco para comprar nossos produtos
      </Text>

      {/* Telefone */}
      <View style={styles.card}>
        <FontAwesome5 name="phone-alt" size={26} color="#400303" style={styles.icone} />
        <View style={styles.textos}>
          <Text style={styles.tituloCard}>Telefone:</Text>
          <Text style={styles.descricao}>+55 21 000000000</Text>
        </View>
      </View>

      {/* Endereço */}
      <View style={styles.card}>
        <Entypo name="location-pin" size={30} color="#400303" style={styles.icone} />
        <View style={styles.textos}>
          <Text style={styles.tituloCard}>Endereço:</Text>
          <Text style={styles.descricao}>Av. 123, 222 - Rio de Janeiro RJ</Text>
        </View>
      </View>

      {/* Email */}
      <View style={styles.card}>
        <MaterialIcons name="email" size={28} color="#400303" style={styles.icone} />
        <View style={styles.textos}>
          <Text style={styles.tituloCard}>Email:</Text>
          <Text style={styles.descricao}>preferida@adega.com.br</Text>
        </View>
      </View>

      {/* Instagram */}
      <View style={styles.card}>
        <FontAwesome5 name="instagram" size={28} color="#400303" style={styles.icone} />
        <View style={styles.textos}>
          <Text style={styles.tituloCard}>Instagram:</Text>
          <Text style={styles.descricao}>@adegapreferida</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#400303',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textoTopo: {
    fontSize: 17,
    color: '#222',
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 25,
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#e6d0ca',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  icone: {
    marginRight: 15,
  },
  textos: {
    flex: 1,
  },
  tituloCard: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#400303',
    marginBottom: 4,
  },
  descricao: {
    fontSize: 14,
    color: '#333',
  },
});
