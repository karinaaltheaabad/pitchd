import { StyleSheet } from 'react-native';
import { DARK_THEME, LIGHT_THEME } from '../utils/theme';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK_THEME.mirage,
  },
  
  screenContainer: {
    flex: 1,
    width: '100%',
  },

  button: {
    margin: 5,
    backgroundColor: DARK_THEME.dark_blue,
    width: '80%',
    alignSelf: 'center',
  },

  titleText: {
    fontFamily: 'PlayfairDisplay_400Regular',
    marginHorizontal: 20,
    fontSize: 24,
    color: 'white',
    marginTop: 100,
    marginBottom: 30,
  },

  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: 'white',
    marginTop: -25,
    marginBottom: 30,
    opacity: 0.6,
    marginLeft: 20,
  },

  cardsContainer: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    gap: 10,
  },

  card: {
    backgroundColor: DARK_THEME.black_blue,
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
  },
  selectedCard: {
    backgroundColor: DARK_THEME.heather_gray,
    transform: [{ scale: 1.02 }],
  },
  cardEmoji: {
    fontSize: 20,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    color: LIGHT_THEME.dirty_white,
    textAlign: 'center',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: LIGHT_THEME.dirty_white,
    textAlign: 'center',
    opacity: 0.6,
  },
  nextButton: {
    marginBottom: 20,
  },
}); 