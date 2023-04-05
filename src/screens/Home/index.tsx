import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const participants = [
    "Cleyton",
    "Bernardo",
    "Olívia",
    "Gabriela",
    "Francisco",
    "Raimunda",
    "Rosangela",
    "José",
  ];

  function handlePaticipantAdd() {
    console.log("Você clicou no botão de Adicionar!");
  }

  function handlePaticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Terça-feira, 04 de abril de 2023.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handlePaticipantAdd}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {participants.map((participant) => (
          <Participant
            name={participant}
            key={participant}
            onRemove={() => handlePaticipantRemove("Cleyton Costa")}
          />
        ))}
      </ScrollView>
    </View>
  );
}
