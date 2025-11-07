import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import estilos from "../estilos";
export default function TelaInicio() {
    return (
        <ImageBackground
        blurRadius={ 10 }
        style= {estilos.container}
        source={{uri: 'https://vinomundi.com.br/wp-content/uploads/2023/04/vinhos-varietais-com-duas-ou-mais-uvas.jpg'}}
        >
        <Text style={ estilos.titulo }>Adega Preferida</Text>
        <Text style={estilos.subtitulo}>Aqui você encontra os melhores e mais saborosos vinhos.</Text>
        </ImageBackground>
    )
}