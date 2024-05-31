import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './screens/WelcomePage';
import BMICalculator from './screens/BMICalculator';
import BMIResult from './screens/BMIResult';
import BMICounsel from './screens/BMICounsel';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomePage} options={{ headerShown: false }} />
        <Stack.Screen name="BMICalculator" component={BMICalculator} options={{ title: 'Calculateur de BMI' }} />
        <Stack.Screen name="BMIResult" component={BMIResult} options={{ title: 'Résultat de BMI' }} />
        <Stack.Screen name="BMICounsel" component={BMICounsel} options={{ title: 'Conseils de BMI' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
