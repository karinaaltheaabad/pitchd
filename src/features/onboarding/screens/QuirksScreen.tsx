import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppLayout } from '../../../components/common/AppLayout';
import { AppButton } from '../../../components/common/AppButton';
import { NavigationProp } from '../../../types/navigation';
import { TextInput } from 'react-native-paper';
import { DARK_THEME, LIGHT_THEME } from '../../../utils/theme';
import { commonStyles } from '../../../styles/common';

type Prompt = {
  id: string;
  text: string;
  category: 'fun' | 'vulnerable' | 'thoughtful';
  emoji: string;
};

const PROMPTS: Prompt[] = [
    // ───────── FUN PROMPTS ─────────
    {
      id: 'toxicTrait',
      text: "My toxic trait is…",
      category: 'fun',
      emoji: '😅'
    },
    {
      id: 'quirkyHabit',
      text: "A quirky habit I'll never change…",
      category: 'fun',
      emoji: '🤪'
    },
    {
      id: 'adventure',
      text: "My idea of a perfect adventure is…",
      category: 'fun',
      emoji: '🗺'
    },
    {
      id: 'guiltyPleasure',
      text: "My guilty pleasure TV show is…",
      category: 'fun',
      emoji: '📺'
    },
    {
      id: 'showerSong',
      text: "The song I belt out in the shower…",
      category: 'fun',
      emoji: '🎶'
    },
    {
      id: 'weirdFoodCombo',
      text: "A weird food combo I secretly love…",
      category: 'fun',
      emoji: '🍕'
    },
  
    // ───────── THOUGHTFUL PROMPTS ─────────
    {
      id: 'messageMeIf',
      text: "You should message me if…",
      category: 'thoughtful',
      emoji: '💭'
    },
    {
      id: 'valueNonnegotiable',
      text: "A value I won't compromise on…",
      category: 'thoughtful',
      emoji: '⭐️'
    },
    {
      id: 'favoriteMemory',
      text: "My favorite childhood memory is…",
      category: 'thoughtful',
      emoji: '🥺'
    },
    {
      id: 'bookThatChangedMe',
      text: "A book that changed how I see life…",
      category: 'thoughtful',
      emoji: '📚'
    },
    {
      id: 'proudMoment',
      text: "I'm most proud of…",
      category: 'thoughtful',
      emoji: '🏆'
    },
    {
      id: 'unlikelyPassion',
      text: "An unlikely passion I have is…",
      category: 'thoughtful',
      emoji: '🧐'
    },
    {
      id: 'perfectDay',
      text: "My perfect weekend would involve…",
      category: 'thoughtful',
      emoji: '🌞'
    },
  
    // ───────── VULNERABLE PROMPTS ─────────
    {
      id: 'fearWorkingOn',
      text: "A fear I'm working on…",
      category: 'vulnerable',
      emoji: '😰'
    },
    {
      id: 'growthMindset',
      text: "Something I'm trying to improve…",
      category: 'vulnerable',
      emoji: '🌱'
    },
    {
      id: 'hardLesson',
      text: "A hard lesson I've learned…",
      category: 'vulnerable',
      emoji: '💔'
    },
    {
      id: 'pastMistake',
      text: "A mistake I'll never make again…",
      category: 'vulnerable',
      emoji: '⚠️'
    },
    {
      id: 'loveLanguage',
      text: "My love language is…",
      category: 'vulnerable',
      emoji: '❤️'
    },
    {
      id: 'supportNeeded',
      text: "When I'm stressed, I need…",
      category: 'vulnerable',
      emoji: '🤗'
    },
    {
      id: 'childhoodImpact',
      text: "Something from my childhood that shaped me…",
      category: 'vulnerable',
      emoji: '👶'
    },
    {
      id: 'futureHope',
      text: "What I hope to be doing in 5 years…",
      category: 'vulnerable',
      emoji: '⏳'
    }
];

export const QuirksScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedPrompts, setSelectedPrompts] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const isNextDisabled = () => {
    if (selectedPrompts.length < 1) return true;
    return selectedPrompts.some(promptId => !answers[promptId]?.trim());
  };

  const handlePromptSelect = (promptId: string) => {
    if (selectedPrompts.includes(promptId)) {
      setSelectedPrompts(prev => prev.filter(id => id !== promptId));
      const newAnswers = { ...answers };
      delete newAnswers[promptId];
      setAnswers(newAnswers);
    } else if (selectedPrompts.length < 3) {
      setSelectedPrompts(prev => [...prev, promptId]);
    }
  };

  const handleNext = () => {
    if (!isNextDisabled()) {
      console.log('Selected prompts and answers:', answers);
      navigation.navigate('InterestsScreen');
    }
  };

  return (
    <AppLayout>
      <Text style={commonStyles.titleText}>
        Show your personality
      </Text>
      
      <Text style={commonStyles.subtitle}>
        Choose at least 1 prompt
      </Text>

      <ScrollView style={styles.container}>
        {(['fun', 'vulnerable', 'thoughtful'] as const).map(category => (
          <View key={category} style={styles.section}>
            <View style={styles.categoryHeader}>
              <Text style={styles.categoryTitle}>
                {category === 'fun' ? '💡 Fun' :
                 category === 'vulnerable' ? '❤️ Vulnerable' :
                 '🧠 Thoughtful'}
              </Text>
            </View>
            
            <View style={styles.promptsContainer}>
              {PROMPTS.filter(prompt => prompt.category === category).map(prompt => (
                <View key={prompt.id} style={styles.promptWrapper}>
                  <TouchableOpacity
                    style={commonStyles.card}
                    onPress={() => handlePromptSelect(prompt.id)}
                  >
                    <Text style={commonStyles.cardEmoji}>{prompt.emoji}</Text>
                    <Text style={commonStyles.cardTitle}>{prompt.text}</Text>
                  </TouchableOpacity>
                  {selectedPrompts.includes(prompt.id) && (
                    <TextInput
                      value={answers[prompt.id] || ''}
                      onChangeText={(text) => setAnswers(prev => ({ ...prev, [prompt.id]: text }))}
                      style={styles.input}
                      mode="outlined"
                      outlineColor={DARK_THEME.regent_gray}
                      activeOutlineColor={DARK_THEME.dark_blue}
                      textColor={LIGHT_THEME.dirty_white}
                      placeholder="Your answer..."
                      multiline
                      numberOfLines={2}
                    />
                  )}
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <AppButton
          label="Skip"
          onPress={() => navigation.navigate('InterestsScreen')}
          style={styles.skipButton}
          mode="outlined"
        />
        <AppButton
          label="Next"
          onPress={handleNext}
          style={styles.nextButton}
          disabled={isNextDisabled()}
        />
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    marginTop: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: LIGHT_THEME.dirty_white,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    width: '100%',
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: '5%',
  },
  categoryHeader: {
    marginBottom: 12,
  },
  categoryTitle: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    color: LIGHT_THEME.dirty_white,
  },
  promptsContainer: {
    gap: 16,
  },
  promptWrapper: {
    gap: 8,
  },
  input: {
    backgroundColor: 'transparent',
    fontSize: 16,
    marginTop: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
    paddingBottom: 20,
    gap: 5,
    paddingTop: 20,
  },
  skipButton: {
    flex: 1,
    borderColor: LIGHT_THEME.dirty_white,
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  nextButton: {
    flex: 1,
  },
});