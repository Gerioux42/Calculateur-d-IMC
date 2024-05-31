import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WelcomePage = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('BMICalculator');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
        <Image source={require('../assets/IMC Logo.png')} style={styles.logo} />
      <Text style={styles.welcomeText}>Bienvenue dans notre application</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default WelcomePage;
