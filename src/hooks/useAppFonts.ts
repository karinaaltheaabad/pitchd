import { useFonts } from '@expo-google-fonts/playfair-display/useFonts';
import { PlayfairDisplay_600SemiBold } from '@expo-google-fonts/playfair-display/600SemiBold';
import { PlayfairDisplay_400Regular } from '@expo-google-fonts/playfair-display/400Regular';
import { Inter_400Regular } from '@expo-google-fonts/inter/400Regular';

export const useAppFonts = () => {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_600SemiBold,
    PlayfairDisplay_400Regular,
    Inter_400Regular,
  });

  return { fontsLoaded };
}; 