import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  UploadScreen: undefined;
  IntentionsScreen: undefined;
  DateInviteScreen: undefined;
  CommunicationScreen: undefined;
  WeekendScreen: undefined;
  QuirksScreen: undefined;
  InterestsScreen: undefined;
  BasicInfoScreen: undefined;
  ProfilePreview: undefined;
  CoreValuesScreen: undefined;
  ConflictStyleScreen: undefined;
  PersonalityScreen: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

export type OnboardingQuestion = {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    emoji?: string;
  }[];
  allowMultipleSelection?: boolean;
  progress: number;
};

export const TOTAL_ONBOARDING_STEPS = 9; 