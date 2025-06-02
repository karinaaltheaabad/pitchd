import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppLayout } from '../../../components/common/AppLayout';
import { AppButton } from '../../../components/common/AppButton';
import { NavigationProp } from '../../../types/navigation';
import { commonStyles } from '../../../styles/common';

type WeekendOption = {
  id: string;
  text: string;
  emoji: string;
};

const WEEKEND_OPTIONS: WeekendOption[] = [
  {
    id: 'chill',
    text: 'Chill at home',
    emoji: '🏠'
  },
  {
    id: 'explore',
    text: 'Explore new places',
    emoji: '🗺'
  },
  {
    id: 'social',
    text: 'Social gatherings',
    emoji: '👥'
  },
  {
    id: 'creative',
    text: 'Creative projects',
    emoji: '🎨'
  }
];

export const WeekendScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleNext = () => {
    if (selectedOption) {
      console.log('Weekend preferences:', selectedOption);
      navigation.navigate('UploadScreen');
    }
  };

  return (
    <AppLayout>
      <Text style={commonStyles.titleText}>
        What's your vibe?
      </Text>

      <View style={commonStyles.cardsContainer}>
        {WEEKEND_OPTIONS.map(option => (
          <TouchableOpacity 
            style={[
              commonStyles.card,
              selectedOption === option.id && commonStyles.selectedCard
            ]}
            key={option.id}
            onPress={() => setSelectedOption(option.id)}
            >
            <Text style={commonStyles.cardEmoji}>{option.emoji}</Text>
            <Text style={commonStyles.cardTitle}>{option.text}</Text>
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