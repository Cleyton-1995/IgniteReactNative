import React, { useState } from "react";
import {
  Alert,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState("")
    

  function handlePaticipantAdd() {
   if(participants.includes(participantName)) {
    return Alert.alert(" Participante existe", "Já existe um participante na lista com esse nome.")
   }
   setParticipants(prevState => [...prevState , participantName]);
   setParticipantName("")
  }


  function handlePaticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>     setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: "Não",
        style: "cancel"
      }
    ]);
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
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handlePaticipantAdd}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            key={item}
            onRemove={() => handlePaticipantRemove(item)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText} >
            Ninguém chegou no evento ainda? Adicione participantes à sua lista de presença.
          </Text>
        )}
      />
    </View>
  );
}