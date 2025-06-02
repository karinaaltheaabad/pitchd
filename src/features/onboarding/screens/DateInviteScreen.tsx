import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppLayout } from '../../../components/common/AppLayout';
import { AppButton } from '../../../components/common/AppButton';
import { NavigationProp } from '../../../types/navigation';
import { DARK_THEME, LIGHT_THEME } from '../../../utils/theme';
import { commonStyles } from '../../../styles/common';

type Option = {
  id: string;
  text: string;
  description: string;
  emoji: string;
};

const OPTIONS: Option[] = [
  {
    id: 'yes',
    text: "Yes, I love a little adventure",
    description: "You're spontaneous and enjoy outdoor activities",
    emoji: '🏃‍♂️'
  },
  {
    id: 'maybe',
    text: "Maybe. Depends on the vibe",
    description: "You like to get to know someone before big commitments",
    emoji: '🤔'
  },
  {
    id: 'coffee',
    text: "Honestly... I'd rather get coffee first",
    description: "You prefer starting with casual, low-key meetups",
    emoji: '☕️'
  }
];

export const DateInviteScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleNext = () => {
    if (selectedOption) {
      console.log('Selected option:', selectedOption);
      navigation.navigate('CommunicationScreen');
    }
  };

  return (
    <AppLayout>
      <Text style={commonStyles.titleText}>
        Your match invites you on a day-long hike. Would you RSVP?
      </Text>

      <View style={commonStyles.cardsContainer}>
        {OPTIONS.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[commonStyles.card, selectedOption === option.id && commonStyles.selectedCard]}
            onPress={() => setSelectedOption(option.id)}
          >
            <Text style={commonStyles.cardEmoji}>{option.emoji}</Text>
            <Text style={commonStyles.cardTitle}>{option.text}</Text>
            <Text style={commonStyles.cardDescription}>{option.description}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <AppButton
        label="Next"
        onPress={handleNext}
        style={commonStyles.nextButton}
        disabled={!selectedOption}
      />
    </AppLayout>
  );
};