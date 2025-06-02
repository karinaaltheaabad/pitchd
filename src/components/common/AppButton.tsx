import React from 'react';
import { Button } from 'react-native-paper';
import { StyleProp, ViewStyle, Text, StyleSheet } from 'react-native';
import { commonStyles } from '../../styles/common';
import { DARK_THEME, LIGHT_THEME } from '../../utils/theme';

interface AppButtonProps {
  onPress: () => void;
  label: string;
  style?: StyleProp<ViewStyle>;
  mode?: 'text' | 'outlined' | 'contained';
  disabled?: boolean;
}

export const AppButton: React.FC<AppButtonProps> = ({
  onPress,
  label,
  style,
  mode = 'contained',
  disabled = false
}) => {
  return (
    <Button
      style={[commonStyles.button, style, disabled && styles.disabled]}
      mode={mode}
      onPress={onPress}
      disabled={disabled}
      textColor={mode === 'outlined' ? LIGHT_THEME.dirty_white : undefined}
    >
      {label}
    </Button>
  );
};

const styles = StyleSheet.create({
  disabled: {
    backgroundColor: DARK_THEME.heather_gray,
    opacity: 0.6,
  }
}); 