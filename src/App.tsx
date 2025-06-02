import { StyleSheet, View } from 'react-native';
import OnboardingNavigator from './navigation/OnboardingNavigator';
import { PaperProvider } from 'react-native-paper';
import { FeedScreen } from './features/feed/FeedScreen';

export default function App() {
  const isOnboardingCompleted = false;

  return (
    <View style={styles.container}>
        <PaperProvider>
        {isOnboardingCompleted ? <FeedScreen /> : <OnboardingNavigator />}
      </PaperProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
