import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useFonts } from '@expo-google-fonts/playfair-display/useFonts';
import { PlayfairDisplay_400Regular } from '@expo-google-fonts/playfair-display/400Regular';
import { Inter_400Regular } from '@expo-google-fonts/inter/400Regular';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { DARK_THEME } from '../../utils/theme';

type RootStackParamList = {
  Welcome: undefined;
  BasicInfoScreen: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

export const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
    Inter_400Regular,
  });

  const handleGetStarted = () => {
    navigation.navigate('BasicInfoScreen');
  };

  if (!fontsLoaded) {
    return null;
  } 
  
  return (
      <View>
        <Text style={styles.title}>Pitchd</Text>
        <Text style={styles.subtitle}>We're here for awkward, honest, high-effort connections—romantic or friendly.</Text>
        <Text style={styles.disclaimer}>By signing up, you agree to our Terms of Service and Privacy Policy.</Text>
        <Button style={styles.button} mode="contained" onPress={handleGetStarted}>
          <Text>Sign in with Facebook</Text>
        </Button>
        <Button style={styles.button} mode="contained" onPress={handleGetStarted}>
          <Text>Sign in with Apple</Text>
        </Button>
      </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 68,
    fontFamily: 'PlayfairDisplay_400Regular',
    alignSelf: 'center',
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
  },

  subtitle: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
  },

  disclaimer: {
    paddingTop: 400,
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    textAlign: 'center',
    margin: 10,
  },
  
  button: {
    margin: 5,
    backgroundColor: DARK_THEME.dark_blue,
    width:'90%',
    alignSelf: 'center',
  },
});