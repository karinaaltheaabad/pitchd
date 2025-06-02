import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppLayout } from '../../../components/common/AppLayout';
import { AppButton } from '../../../components/common/AppButton';
import { NavigationProp } from '../../../types/navigation';
import { LIGHT_THEME } from '../../../utils/theme';
import { commonStyles } from '../../../styles/common';

type Interest = {
  id: string;
  text: string;
  emoji: string;
};

const INTERESTS: Interest[] = [
    // Social + Fun
    { id: 'music', text: 'Music lover', emoji: '🎧' },
    { id: 'concerts', text: 'Live music fan', emoji: '🎤' },
    { id: 'foodie', text: 'Foodie', emoji: '🍣' },
    { id: 'brunch', text: 'Brunch buddy', emoji: '🥞' },
    { id: 'wine', text: 'Wine lover', emoji: '🍷' },
    { id: 'coffee', text: 'Coffee snob', emoji: '☕' },
    { id: 'dancing', text: 'Dancer', emoji: '💃' },
    { id: 'barcrawl', text: 'Bar crawler', emoji: '🍻' },
  
    // Lifestyle
    { id: 'books', text: 'Bookworm', emoji: '📚' },
    { id: 'podcasts', text: 'Podcast junkie', emoji: '🎙' },
    { id: 'yoga', text: 'Yogi', emoji: '🧘' },
    { id: 'gym', text: 'Gym rat', emoji: '💪' },
    { id: 'spiritual', text: 'Spiritual', emoji: '🌙' },
    { id: 'mindfulness', text: 'Into mindfulness', emoji: '🧠' },
    { id: 'runner', text: 'Runner', emoji: '🏃' },
    { id: 'hiking', text: 'Hiker', emoji: '🥾' },
    { id: 'outdoors', text: 'Outdoorsy', emoji: '🏔' },
    { id: 'travel', text: 'Traveler', emoji: '🌍' },
    { id: 'backpacking', text: 'Backpacker', emoji: '🎒' },
  
    // Animals
    { id: 'cats', text: 'Cat parent', emoji: '🐱' },
    { id: 'dogs', text: 'Dog lover', emoji: '🐶' },
    { id: 'animals', text: 'Animal lover', emoji: '🦁' },
    { id: 'farm', text: 'Farm vibes', emoji: '🐓' },
  
    // Creative
    { id: 'art', text: 'Art enthusiast', emoji: '🎨' },
    { id: 'photography', text: 'Photographer', emoji: '📸' },
    { id: 'film', text: 'Film buff', emoji: '🎬' },
    { id: 'design', text: 'Designer', emoji: '🎭' },
    { id: 'writing', text: 'Writer', emoji: '✍️' },
    { id: 'fashion', text: 'Fashion lover', emoji: '👗' },
    { id: 'diy', text: 'DIYer', emoji: '🛠' },
  
    // Digital
    { id: 'tech', text: 'Tech geek', emoji: '💻' },
    { id: 'coding', text: 'Coder', emoji: '👨‍💻' },
    { id: 'gaming', text: 'Gamer', emoji: '🎮' },
    { id: 'anime', text: 'Anime fan', emoji: '🧝' },
    { id: 'memes', text: 'Meme lover', emoji: '🤣' },
  
    // Culture
    { id: 'languages', text: 'Language nerd', emoji: '🗣️' },
    { id: 'culture', text: 'Cultural explorer', emoji: '🕌' },
    { id: 'history', text: 'History buff', emoji: '🏺' },
  
    // Values
    { id: 'activism', text: 'Activist', emoji: '✊' },
    { id: 'sustainability', text: 'Eco-conscious', emoji: '🌱' },
    { id: 'volunteering', text: 'Volunteer', emoji: '🤝' },
    { id: 'family', text: 'Family-oriented', emoji: '👨‍👩‍👧‍👦' },
    { id: 'ambition', text: 'Ambitious', emoji: '🚀' },
    { id: 'career', text: 'Career-driven', emoji: '📈' },
  
    // Chill & Quirky
    { id: 'napping', text: 'Nap king/queen', emoji: '🛌' },
    { id: 'stoner', text: '420 friendly', emoji: '🌿' },
    { id: 'zodiac', text: 'Zodiac nerd', emoji: '♓' },
    { id: 'binge', text: 'Netflix binger', emoji: '📺' },
    { id: 'boardgames', text: 'Board gamer', emoji: '♟️' },
    { id: 'plants', text: 'Plant parent', emoji: '🪴' },
  ];

export const InterestsScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleInterestPress = (interestId: string) => {
    if (selectedInterests.includes(interestId)) {
      setSelectedInterests(prev => prev.filter(id => id !== interestId));
    } else if (selectedInterests.length < 5) {
      setSelectedInterests(prev => [...prev, interestId]);
    }
  };

  const handleNext = () => {
    if (selectedInterests.length > 0) {
      console.log('Selected interests:', selectedInterests);
      navigation.navigate('ProfilePreview');
    }
  };

  return (
    <AppLayout>
      <Text style={commonStyles.titleText}>
        What interests you?
      </Text>
      
      <Text style={commonStyles.subtitle}>
        Choose up to 5 interests that define you
      </Text>

      <ScrollView style={commonStyles.cardsContainer}>
        <View style={styles.interestsGrid}>
          {INTERESTS.map(interest => (
            <View key={interest.id} style={styles.interestWrapper}>
              <TouchableOpacity
                style={[
                  commonStyles.card,
                  selectedInterests.includes(interest.id) && commonStyles.selectedCard
                ]}
                onPress={() => handleInterestPress(interest.id)}
              >
                <Text style={commonStyles.cardEmoji}>{interest.emoji}</Text>
                <Text style={commonStyles.cardTitle}>{interest.text}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.selectionCount}>
          {selectedInterests.length}/5 selected
        </Text>
        <AppButton
          label="Next"
          onPress={handleNext}
          style={commonStyles.nextButton}
          disabled={selectedInterests.length === 0}
        />
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  interestsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    gap: 12,
  },
  interestWrapper: {
    width: '48%',
  },
  footer: {
    paddingHorizontal: '5%',
    paddingTop: 15,
  },
  selectionCount: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: LIGHT_THEME.dirty_white,
    textAlign: 'center',
    marginBottom: 12,
  },
}); 