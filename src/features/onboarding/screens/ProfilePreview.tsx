import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { AppLayout } from '../../../components/common/AppLayout';
import { AppButton } from '../../../components/common/AppButton';
import { DARK_THEME, LIGHT_THEME } from '../../../utils/theme';
import { commonStyles } from '../../../styles/common';

const WINDOW_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = WINDOW_WIDTH * 0.8;

type SampleProfile = {
  id: string;
  name: string;
  age: number;
  interests: string[];
};

const SAMPLE_PROFILES: SampleProfile[] = [
  {
    id: '1',
    name: 'Alex',
    age: 28,
    interests: ['Music lover', 'Outdoorsy', 'Dog lover'],
  },
  {
    id: '2',
    name: 'Jordan',
    age: 26,
    interests: ['Art enthusiast', 'Foodie', 'Traveler'],
  },
  {
    id: '3',
    name: 'Sam',
    age: 29,
    interests: ['Tech geek', 'Gym rat', 'Bookworm'],
  },
];

export const ProfilePreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / CARD_WIDTH);
    setActiveIndex(index);
  };

  const renderProfile = (profile: SampleProfile) => (
    <View key={profile.id} style={styles.profileCard}>
      <View style={styles.placeholderImage}>
        <Text style={styles.placeholderText}>Profile Photo</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
        <View style={styles.interestsContainer}>
          {profile.interests.map((interest, index) => (
            <Text key={index} style={styles.interestTag}>
              {interest}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );

  const renderPaginationDots = () => (
    <View style={styles.paginationDots}>
      {SAMPLE_PROFILES.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === activeIndex && styles.activeDot
          ]}
        />
      ))}
    </View>
  );

  return (
    <AppLayout>
      <Text style={[commonStyles.titleText, styles.title]}>
        You're all set! 🎉
      </Text>
      
      <Text style={styles.subtitle}>
        Based on your profile, here are people you might be interested to meet
      </Text>

      <View style={styles.carouselContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          contentContainerStyle={styles.scrollContent}
        >
          {SAMPLE_PROFILES.map(renderProfile)}
        </ScrollView>
        {renderPaginationDots()}
      </View>

      <View style={styles.footer}>
        <AppButton
          label="Let's Go →"
          onPress={() => {/* Navigate to main app */}}
          style={styles.startButton}
        />
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    marginTop: 30,
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: LIGHT_THEME.dirty_white,
    textAlign: 'center',
    marginBottom: 10,
    width: '75%',
    alignSelf: 'center',
  },
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
  },
  scrollContent: {
    paddingHorizontal: WINDOW_WIDTH * 0.05,
  },
  profileCard: {
    width: CARD_WIDTH,
    backgroundColor: DARK_THEME.regent_gray,
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 10,
    marginTop: 20,
  },
  placeholderImage: {
    width: CARD_WIDTH,
    height: CARD_WIDTH * 1.2,
    backgroundColor: DARK_THEME.regent_gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: LIGHT_THEME.dirty_white,
    fontSize: 16,
    opacity: 0.5,
    fontFamily: 'Inter_400Regular',
  },
  profileInfo: {
    padding: 16,
  },
  profileName: {
    fontSize: 24,
    fontFamily: 'Inter_400Regular',
    color: LIGHT_THEME.dirty_white,
    marginBottom: 8,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  interestTag: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: LIGHT_THEME.dirty_white,
    backgroundColor: DARK_THEME.dark_blue,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: DARK_THEME.regent_gray,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: DARK_THEME.dark_blue,
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  startButton: {
    width: '100%',
  },
});