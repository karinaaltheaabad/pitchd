import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppLayout } from '../../../components/common/AppLayout';
import { AppButton } from '../../../components/common/AppButton';
import { NavigationProp } from '../../../types/navigation';
import { DARK_THEME, LIGHT_THEME } from '../../../utils/theme';
import { commonStyles } from '../../../styles/common';

export const IntentionsScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedIntention, setSelectedIntention] = useState<string>('');

  const handleNext = () => {
    if (selectedIntention) {
      console.log('Selected intention:', selectedIntention);
      navigation.navigate('CoreValuesScreen');
    }
  };

  return (
    <AppLayout>
      <Text style={[commonStyles.titleText, styles.title]}>
        What brings you here?
      </Text>

      <Text style={styles.subtitle}>
        Choose what you're looking for on Pitchd
      </Text>

      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[styles.option, selectedIntention === 'dating' && styles.selectedOption]}
          onPress={() => setSelectedIntention('dating')}
        >
          <Text style={styles.optionEmoji}>❤️</Text>
          <View style={styles.optionContent}>
            <Text style={styles.optionTitle}>Dating</Text>
            <Text style={styles.optionDescription}>Find meaningful romantic connections</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.option, selectedIntention === 'friends' && styles.selectedOption]}
          onPress={() => setSelectedIntention('friends')}
        >
          <Text style={styles.optionEmoji}>👋</Text>
          <View style={styles.optionContent}>
            <Text style={styles.optionTitle}>Friends</Text>
            <Text style={styles.optionDescription}>Meet like-minded people for friendship</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.option, selectedIntention === 'both' && styles.selectedOption]}
          onPress={() => setSelectedIntention('both')}
        >
          <Text style={styles.optionEmoji}>✨</Text>
          <View style={styles.optionContent}>
            <Text style={styles.optionTitle}>Both</Text>
            <Text style={styles.optionDescription}>Open to both dating and friendship</Text>
          </View>
        </TouchableOpacity>
      </View>

      <AppButton
        label="Next"
        onPress={handleNext}
        style={styles.nextButton}
        disabled={!selectedIntention}
      />
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    marginTop: 20,
    borderRadius: 10,
    height: 12,
    backgroundColor: DARK_THEME.regent_gray,
    width: '80%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 28,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: LIGHT_THEME.dirty_white,
    textAlign: 'center',
    marginBottom: 40,
    opacity: 0.8,
  },
  optionsContainer: {
    width: '90%',
    alignSelf: 'center',
    gap: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: DARK_THEME.regent_gray,
    padding: 20,
    borderRadius: 16,
  },
  selectedOption: {
    backgroundColor: DARK_THEME.dark_blue,
    transform: [{ scale: 1.02 }],
  },
  optionEmoji: {
    fontSize: 24,
    marginRight: 16,
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    color: LIGHT_THEME.dirty_white,
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: LIGHT_THEME.dirty_white,
    opacity: 0.8,
  },
  nextButton: {
    marginTop: 'auto',
    marginBottom: 20,
  },
}); 
