import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppLayout } from '../../../components/common/AppLayout';
import { AppButton } from '../../../components/common/AppButton';
import { NavigationProp } from '../../../types/navigation';
import { commonStyles } from '../../../styles/common';
import { TextInput } from 'react-native-paper';
import { DARK_THEME, LIGHT_THEME } from '../../../utils/theme';

export const BasicInfoScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [formData, setFormData] = useState({
    firstName: '',
    birthday: '',
    city: '',
  });

  const handleNext = () => {
    if (formData.firstName) {
      console.log('Form data:', formData);
      navigation.navigate('DateInviteScreen');
    }
  };

  return (
    <AppLayout>
      <Text style={[commonStyles.titleText, styles.title]}>
        Let's get to know you
      </Text>
      
      <View style={styles.form}>
        <Text style={styles.formTitle}>First name</Text>
        <TextInput
          value={formData.firstName}
          onChangeText={(text) => setFormData(prev => ({ ...prev, firstName: text }))}
          style={styles.input}
          mode="outlined"
          outlineColor={DARK_THEME.regent_gray}
          activeOutlineColor={DARK_THEME.dark_blue}
          textColor={LIGHT_THEME.dirty_white}
        />
        <Text style={styles.formTitle}>Birthday</Text>
        <TextInput
          value={formData.birthday}
          onChangeText={(text) => setFormData(prev => ({ ...prev, birthday: text }))}
          style={styles.input}
          mode="outlined"
          outlineColor={DARK_THEME.regent_gray}
          activeOutlineColor={DARK_THEME.dark_blue}
          textColor={LIGHT_THEME.dirty_white}
        />
        <Text style={styles.formTitle}>City</Text>
        <TextInput
          value={formData.city}
          onChangeText={(text) => setFormData(prev => ({ ...prev, city: text }))}
          style={styles.input}
          mode="outlined"
          outlineColor={DARK_THEME.regent_gray}
          activeOutlineColor={DARK_THEME.dark_blue}
          textColor={LIGHT_THEME.dirty_white}
        />
      </View>

      <AppButton
        label="Next"
        onPress={handleNext}
        style={styles.nextButton}
        disabled={!formData.firstName || !formData.birthday || !formData.city}
      />
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    marginTop: 60,
  },
  form: {
    width: '80%',
    alignSelf: 'center',
    flex: 1,
  },
  formTitle: {
    fontSize: 16,
    marginBottom: 10,
    color: LIGHT_THEME.dirty_white,
  },
  input: {
    marginBottom: 20,
    backgroundColor: DARK_THEME.black_blue,
    borderRadius: 40,
  },
  nextButton: {
    marginBottom: 20,
  },
}); 