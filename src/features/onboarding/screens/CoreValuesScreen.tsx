import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { DarkTheme, useNavigation } from '@react-navigation/native';
import { AppLayout } from '../../../components/common/AppLayout';
import { AppButton } from '../../../components/common/AppButton';
import { NavigationProp } from '../../../types/navigation';
import { DARK_THEME, LIGHT_THEME } from '../../../utils/theme';
import { commonStyles } from '../../../styles/common';
import { Tooltip } from 'react-native-paper';

type CoreValue = {
  id: string;
  label: string;
  description: string;
  emoji: string;
};

const CORE_VALUES: CoreValue[] = [
  {
    id: 'stability',
    label: 'Stability & Trust',
    description: 'You value reliability and deep, lasting connections',
    emoji: '🤝'
  },
  {
    id: 'growth',
    label: 'Growth & Adventure',
    description: 'You thrive on new experiences and personal development',
    emoji: '🌱'
  },
  {
    id: 'family',
    label: 'Family & Future',
    description: 'You prioritize building meaningful, long-term relationships',
    emoji: '👨‍👩‍👧‍👦'
  },
  {
    id: 'emotional',
    label: 'Emotional Connection',
    description: 'You seek deep understanding and authentic bonds',
    emoji: '❤️'
  },
  {
    id: 'independence',
    label: 'Independence',
    description: 'You value personal space and individual growth',
    emoji: '🦋'
  },
  {
    id: 'creativity',
    label: 'Creativity & Expression',
    description: 'You appreciate artistic expression and unique perspectives',
    emoji: '🎨'
  }
];

export const CoreValuesScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleValuePress = (valueId: string) => {
    if (selectedValues.includes(valueId)) {
      setSelectedValues(prev => prev.filter(id => id !== valueId));
    } else if (selectedValues.length < 2) {
      setSelectedValues(prev => [...prev, valueId]);
    }
  };

  const handleNext = () => {
    if (selectedValues.length > 0) {
      console.log('Selected core values:', selectedValues);
      navigation.navigate('DateInviteScreen');
    }
  };

  return (
    <AppLayout>
      <Text style={[commonStyles.titleText, styles.title]}>
        What do you value most?
      </Text>

      <View style={styles.titleContainer}>
        <Text style={styles.subtitle}>Choose up to 2 core values</Text>
        <Tooltip title="We use this to understand your priorities in connection">
          <Text style={styles.infoIcon}>ℹ️</Text>
        </Tooltip>
      </View>

      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.valuesContainer}>
          {CORE_VALUES.map((value) => (
            <TouchableOpacity
              key={value.id}
              style={[
                styles.valueOption,
                selectedValues.includes(value.id) && styles.selectedOption
              ]}
              onPress={() => handleValuePress(value.id)}
            >
              <Text style={styles.valueEmoji}>{value.emoji}</Text>
              <View style={styles.valueContent}>
                <Text style={styles.valueLabel}>{value.label}</Text>
                <Text style={styles.valueDescription}>{value.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.selectionCount}>
          {selectedValues.length}/2 selected
        </Text>
        <AppButton
          label="Next"
          onPress={handleNext}
          style={styles.nextButton}
          disabled={selectedValues.length === 0}
        />
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: DARK_THEME.blue_gray,
    opacity: 0.8,
  },
  infoIcon: {
    fontSize: 16,
    marginLeft: 8,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  valuesContainer: {
    width: '90%',
    alignSelf: 'center',
    gap: 12,
  },
  valueOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: DARK_THEME.regent_gray,
    padding: 16,
    borderRadius: 16,
  },
  selectedOption: {
    backgroundColor: DARK_THEME.dark_blue,
    transform: [{ scale: 1.02 }],
  },
  valueEmoji: {
    fontSize: 24,
    marginRight: 16,
  },
  valueContent: {
    flex: 1,
  },
  valueLabel: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    color: LIGHT_THEME.dirty_white,
    marginBottom: 4,
  },
  valueDescription: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: LIGHT_THEME.dirty_white,
    opacity: 0.8,
  },
  footer: {
    paddingHorizontal: '5%',
    paddingTop: 10,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: DARK_THEME.regent_gray,
  },
  selectionCount: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: DARK_THEME.blue_gray,
    textAlign: 'center',
    marginBottom: 12,
    opacity: 0.8,
  },
  nextButton: {
    marginBottom: 0,
  },
}); 