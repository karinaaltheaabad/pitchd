import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from '../features/onboarding/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { IntentionsScreen } from '../features/onboarding/screens/IntentionsScreen';
import { DateInviteScreen } from '../features/onboarding/screens/DateInviteScreen';
import { CommunicationScreen } from '../features/onboarding/screens/CommunicationScreen';
import { WeekendScreen } from '../features/onboarding/screens/WeekendScreen';
import { QuirksScreen } from '../features/onboarding/screens/QuirksScreen';
import { InterestsScreen } from '../features/onboarding/screens/InterestsScreen';
import { BasicInfoScreen } from '../features/onboarding/screens/BasicInfoScreen';
import { ProfilePreview } from '../features/onboarding/screens/ProfilePreview';
import { CoreValuesScreen } from '../features/onboarding/screens/CoreValuesScreen';
import { ConflictStyleScreen } from '../features/onboarding/screens/ConflictStyleScreen';
import { UploadScreen } from '../features/onboarding/screens/UploadScreen';

const Stack = createNativeStackNavigator();

const OnboardingNavigator = () => {
    return (
        <GestureHandlerRootView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        gestureEnabled: true,
                        gestureDirection: 'horizontal',
                    }}
                >
                    <Stack.Screen 
                        name="Welcome" 
                        component={WelcomeScreen}
                    />
                    <Stack.Screen 
                        name="UploadScreen" 
                        component={UploadScreen}
                    />
                    <Stack.Screen 
                        name="IntentionsScreen" 
                        component={IntentionsScreen}
                    />
                    <Stack.Screen 
                        name="DateInviteScreen" 
                        component={DateInviteScreen}
                    />
                    <Stack.Screen 
                        name="CommunicationScreen" 
                        component={CommunicationScreen}
                    />
                    <Stack.Screen 
                        name="WeekendScreen" 
                        component={WeekendScreen}
                    />
                    <Stack.Screen 
                        name="QuirksScreen" 
                        component={QuirksScreen}
                    />
                    <Stack.Screen 
                        name="InterestsScreen" 
                        component={InterestsScreen}
                    />
                    <Stack.Screen 
                        name="BasicInfoScreen" 
                        component={BasicInfoScreen}
                    />
                    <Stack.Screen 
                        name="ProfilePreview" 
                        component={ProfilePreview}
                    />
                    <Stack.Screen 
                        name="CoreValuesScreen" 
                        component={CoreValuesScreen}
                    />
                    <Stack.Screen 
                        name="ConflictStyleScreen" 
                        component={ConflictStyleScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default OnboardingNavigator;