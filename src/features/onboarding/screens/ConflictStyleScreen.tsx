import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppLayout } from '../../../components/common/AppLayout';
import { AppButton } from '../../../components/common/AppButton';
import { NavigationProp } from '../../../types/navigation';
import { commonStyles } from '../../../styles/common';

type ConflictStyle = {
  id: string;
  text: string;
  description: string;
  emoji: string;
};

const CONFLICT_STYLES: ConflictStyle[] = [
  {
    id: 'immediate',
    text: 'Talk immediately',
    description: 'You prefer to address issues head-on and find quick resolutions together',
    emoji: '🗣'
  },
  {
    id: 'cooloff',
    text: 'Cool off, then discuss',
    description: 'You need time to process emotions and gather thoughts before talking',
    emoji: '🧊'
  },
  {
    id: 'write',
    text: 'Write it out',
    description: 'You express yourself best in writing, helping avoid misunderstandings',
    emoji: '✍️'
  },
  {
    id: 'mediate',
    text: 'Seek perspective',
    description: 'You value getting advice or a neutral perspective before discussing',
    emoji: '🤝'
  }
];

export const ConflictStyleScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedStyle, setSelectedStyle] = useState<string>('');

  const handleNext = () => {
    if (selectedStyle) {
      console.log('Conflict resolution style:', selectedStyle);
      navigation.navigate('WeekendScreen');
    }
  };

  return (
    <AppLayout>      
      <Text style={commonStyles.titleText}>
        When there's conflict...
      </Text>

      <Text style={commonStyles.subtitle}>
        How do you prefer to handle disagreements?
      </Text>

    <View style={commonStyles.cardsContainer}>
        {CONFLICT_STYLES.map((style) => (
        <TouchableOpacity
            key={style.id}
            style={[
            commonStyles.card,
            selectedStyle === style.id && commonStyles.selectedCard,
            styles.card
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

const styles = StyleSheet.create({
    container: {
        gap: 10,
    },
    card: {
        padding: 10,
    },
});