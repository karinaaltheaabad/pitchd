import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { commonStyles } from '../../styles/common';

interface AppLayoutProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children, style }) => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={[commonStyles.screenContainer, style]}>
        {children}
      </View>
    </SafeAreaView>
  );
}; 