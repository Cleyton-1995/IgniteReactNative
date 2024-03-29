import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

type Props ={
  name: string;
  onRemove: () => void;
}

export function Participant({name, onRemove}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity
          onPress={onRemove}
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

    </View>
  );
}