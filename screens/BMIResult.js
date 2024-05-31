import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BMIResult = ({ route, navigation }) => {
  const { bmi } = route.params;

  let description = '';
  if (bmi < 18.5) {
    description = 'Sous-poids';
  } else if (bmi < 24.9) {
    description = 'Poids normal';
  } else if (bmi < 29.9) {
    description = 'Surpoids';
  } else {
    description = 'Obésité';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Votre BMI: {bmi}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        title="Voir les conseils"
        onPress={() => navigation.navigate('BMICounsel', { bmi })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  resultText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default BMIResult;
