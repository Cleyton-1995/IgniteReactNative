import React from "react";
import { Text, TextInput, View } from "react-native";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Terça-feira, 04 de abril de 2023.</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"
      />
    </View>
  );
}