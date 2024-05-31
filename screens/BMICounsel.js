import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BMICounsel = ({ route }) => {
  const { bmi } = route.params;

  let advice = '';
  if (bmi < 18.5) {
    advice = 'Essayez de manger plus et de consommer des aliments riches en nutriments.';
  } else if (bmi < 24.9) {
    advice = 'Continuez à maintenir un mode de vie sain avec une alimentation équilibrée et de l\'exercice régulier.';
  } else if (bmi < 29.9) {
    advice = 'Envisagez d\'augmenter votre activité physique et de surveiller votre alimentation.';
  } else {
    advice = 'Consultez un professionnel de la santé pour obtenir des conseils adaptés à votre situation.';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Conseils basés sur votre BMI: {bmi}</Text>
      <Text style={styles.adviceText}>{advice}</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  adviceText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default BMICounsel;
