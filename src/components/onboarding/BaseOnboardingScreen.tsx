import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { AppLayout } from '../common/AppLayout';
import { AppButton } from '../common/AppButton';
import { NavigationProp, OnboardingQuestion, TOTAL_ONBOARDING_STEPS, RootStackParamList } from '../../types/navigation';
import { DARK_THEME, LIGHT_THEME } from '../../utils/theme';
import { commonStyles } from '../../styles/common';

interface BaseOnboardingScreenProps {
  question: OnboardingQuestion;
  onNext: (selectedOptions: string[]) => void;
  nextScreen: keyof RootStackParamList;
}

export const BaseOnboardingScreen: React.FC<BaseOnboardingScreenProps> = ({
  question,
  onNext,
  nextScreen,
}) => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionPress = (optionId: string) => {
    if (question.allowMultipleSelection) {
      setSelectedOptions(prev => 
        prev.includes(optionId)
          ? prev.filter(id => id !== optionId)
          : [...prev, optionId]
      );
    } else {
      setSelectedOptions([optionId]);
    }
  };

  const handleNext = () => {
    if (selectedOptions.length > 0) {
      onNext(selectedOptions);
      navigation.navigate(nextScreen as keyof RootStackParamList);
    }
  };

  return (
    <AppLayout>
      <ProgressBar
        progress={question.progress / TOTAL_ONBOARDING_STEPS}
        style={styles.progressBar}
        theme={{ colors: { primary: DARK_THEME.dark_blue } }}
      />
      <Text style={[commonStyles.titleText, styles.question]}>
        {question.question}
      </Text>
      <View style={styles.optionsContainer}>
        {question.options.map(option => (
          <TouchableOpacity
            key={option.id}
            style={commonStyles.card}
            onPress={() => handleOptionPress(option.id)}
          >
            <Text style={commonStyles.cardEmoji}>{option.emoji}</Text>
            <Text style={commonStyles.cardTitle}>{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <AppButton
        label="Next"
        onPress={handleNext}
        style={styles.nextButton}
      />
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    marginTop: 20,
    borderRadius: 10,
    height: 5,
    backgroundColor: DARK_THEME.regent_gray,
    width: '80%',
    alignSelf: 'center',
  },
  question: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 30,
  },
  optionsContainer: {
    flex: 1,
    width: '100%',
    paddingTop: 20,
  },
  nextButton: {
    marginBottom: 20,
  },
}); 