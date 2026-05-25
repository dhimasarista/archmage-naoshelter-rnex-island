import { Fonts } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';

export interface TextProps extends RNTextProps {
  color?: string;
  variant?: 'body' | 'title' | 'small' | 'code';
  weight?: 'normal' | 'bold' | '600';
}

export const Text: React.FC<TextProps> = ({ 
  style, 
  color, 
  variant = 'body',
  weight = 'normal',
  ...rest 
}) => {
  const theme = useTheme();

  return (
    <RNText
      style={[
        styles[variant],
        {
          color: color || theme.text,
          fontWeight: weight,
        },
        style,
      ]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  body: {
    fontFamily: Fonts.sans,
    fontSize: 16,
    lineHeight: 24,
  },
  title: {
    fontFamily: Fonts.sans,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  small: {
    fontFamily: Fonts.sans,
    fontSize: 14,
    lineHeight: 20,
  },
  code: {
    fontFamily: Fonts.mono,
    fontSize: 14,
  }
});