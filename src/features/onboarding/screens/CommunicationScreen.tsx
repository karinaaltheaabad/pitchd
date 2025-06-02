import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppLayout } from '../../../components/common/AppLayout';
import { AppButton } from '../../../components/common/AppButton';
import { NavigationProp } from '../../../types/navigation';
import { DARK_THEME, LIGHT_THEME } from '../../../utils/theme';
import { commonStyles } from '../../../styles/common';
import { TOTAL_ONBOARDING_STEPS } from '../../../types/navigation';

type CommunicationStyle = {
  id: string;
  text: string;
  description: string;
  emoji: string;
};

const COMMUNICATION_STYLES: CommunicationStyle[] = [
  {
    id: 'text',
    text: 'Text-first',
    description: 'You prefer to gather thoughts before responding and express yourself clearly in writing',
    emoji: '💬'
  },
  {
    id: 'voice',
    text: 'Voice/video',
    description: 'You value tone, facial expressions, and real-time emotional connection',
    emoji: '🎥'
  },
  {
    id: 'mixed',
    text: 'Mix of both',
    description: 'You adapt your communication style based on the situation and comfort level',
    emoji: '🔄'
  },
];

export const CommunicationScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedStyle, setSelectedStyle] = useState<string>('');

  const handleNext = () => {
    if (selectedStyle) {
      console.log('Communication style:', selectedStyle);
      navigation.navigate('ConflictStyleScreen');
    }
  };

  return (
    <AppLayout>  
      <Text style={commonStyles.titleText}>
        How do you connect?
      </Text>

      <Text style={commonStyles.subtitle}>
        Choose your preferred way of communicating
      </Text>

        <View style={commonStyles.cardsContainer}>
            {COMMUNICATION_STYLES.map((style) => (
            <TouchableOpacity
                key={style.id}
                style={[
                commonStyles.card,
                selectedStyle === style.id && commonStyles.selectedCard
                ]}
                onPress={() => setSelectedStyle(style.id)}
            >
                <Text style={commonStyles.cardEmoji}>{style.emoji}</Text>
                <View>
                    <Text style={commonStyles.cardTitle}>{style.text}</Text>
                    <Text style={commonStyles.cardDescription}>{style.description}</Text>
                </View>
            </TouchableOpacity>
            ))}
        </View>

      <View>
        <AppButton
          label="Next"
          onPress={handleNext}
          style={commonStyles.nextButton}
          disabled={!selectedStyle}
        />
      </View>
    </AppLayout>
  );
};
