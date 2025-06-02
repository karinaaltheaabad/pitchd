import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppLayout } from '../../../components/common/AppLayout';
import { AppButton } from '../../../components/common/AppButton';
import { useAppFonts } from '../../../hooks/useAppFonts';
import { NavigationProp } from '../../../types/navigation';
import { commonStyles } from '../../../styles/common';

export const UploadScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleUpload = () => {
    // Handle upload logic here
  };

  const handleNext = () => {
    navigation.navigate('QuirksScreen');
  };

  return (
    <AppLayout>
      <Text style={commonStyles.titleText}>Let them see you</Text>
      <Text style={[commonStyles.subtitle, styles.subtitle]}>Upload a video or audio intro and atleast 3 photos. You got this.</Text>
      <TouchableOpacity 
        style={[commonStyles.card, styles.container]} 
        onPress={handleUpload}
        activeOpacity={0.7}
      >
        <View style={styles.uploadContainer}>
          <Text style={commonStyles.cardTitle}>Upload either:</Text>
          <Text style={commonStyles.cardDescription}>🎤 Voice intro (30 sec)</Text>
          <Text style={commonStyles.cardDescription}>🎥 Video intro (30 sec)</Text>
          <Text style={commonStyles.cardDescription}>(optional, but boosts responses!)</Text>
        </View>
      </TouchableOpacity>
      <AppButton
        label="Next"
        onPress={handleNext}
      />
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 125,
    width: '90%',
    alignSelf: 'center',
  },

  uploadContainer: {
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },

  subtitle: {
    marginBottom: 30,
    width: '90%',
  },
});