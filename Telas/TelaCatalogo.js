import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export default function TelaCatalogo() {
  return (
    <ScrollView style={styles.container}>
    
      <Text style={styles.titulo}>Nossos vinhos</Text>

      <Text style={styles.subtitulo}>
        Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.
      </Text>

      <View style={styles.card}>
        <Image
          source={{ uri: 'https://res.cloudinary.com/evino/image/upload/t_bottle_large,f_auto/v1/products/1000002611-standing-front.jpg' }}
          style={styles.imagem}
        />
        <View style={styles.textos}>
          <View style={styles.nomeBox}>
            <FontAwesome5 name="wine-bottle" size={16} color="#400303" />
            <Text style={styles.nome}> Chatigny Chardonnay</Text>
          </View>
          <Text style={styles.descricao}>
            Vinho leve, refrescante e levemente cítrico da uva chardonnay. Perfeito com carnes brancas e massas leves.
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={{ uri: 'https://res.cloudinary.com/evino/image/upload/t_bottle_large,f_auto/v1/products/1000002864-standing-front.jpg' }}
          style={styles.imagem}
        />
        <View style={styles.textos}>
          <View style={styles.nomeBox}>
            <FontAwesome5 name="wine-bottle" size={16} color="#400303" />
            <Text style={styles.nome}> Concha y Toro Exportacion</Text>
          </View>
          <Text style={styles.descricao}>
            Vinho rosé intenso, macio e com cor rosé pálido. Perfeito com saladas e frutos do mar.
          </Text>
        </View>
      </View>

      {/* 3° Vinho */}
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://res.cloudinary.com/evino/image/upload/t_bottle_large,f_auto/v1/products/1000022579-standing-front.jpg' }}
          style={styles.imagem}
        />
        <View style={styles.textos}>
          <View style={styles.nomeBox}>
            <FontAwesome5 name="wine-bottle" size={16} color="#400303" />
            <Text style={styles.nome}> Portada Winemaker’s</Text>
          </View>
          <Text style={styles.descricao}>
            Vinho encorpado, saboroso e frutado, com final aveludado. Ideal para ser servido com carnes assadas ou grelhadas.
          </Text>
        </View>
      </View>

      {/* 4° Vinho */}
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://res.cloudinary.com/evino/image/upload/t_bottle_large,f_auto/v1/products/1000004253-standing-front.jpg' }}
          style={styles.imagem}
        />
        <View style={styles.textos}>
          <View style={styles.nomeBox}>
            <FontAwesome5 name="wine-bottle" size={16} color="#400303" />
            <Text style={styles.nome}> Elvio Cogno Ravera Barolo</Text>
          </View>
          <Text style={styles.descricao}>
            Vinho estruturado, com notas de cereja e frutas maduras, ideal para ocasiões especiais e pratos mais chiques.
          </Text>
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#400303',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
    marginHorizontal: 15,
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#e6d0ca',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  imagem: {
    width: 70,
    height: 130,
    resizeMode: 'contain',
    marginRight: 15,
  },
  textos: {
    flex: 1,
  },
  nomeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#400303',
  },
  descricao: {
    fontSize: 14,
    color: '#333',
  },
});
