import { useTheme } from '@/hooks/use-theme';
import React from 'react';
import { View, ViewProps } from 'react-native';

export interface BoxProps extends ViewProps {
  backgroundColor?: string;
  padding?: number;
  margin?: number;
  borderRadius?: number;
}

export const Box: React.FC<BoxProps> = ({ 
  style, 
  backgroundColor, 
  padding, 
  margin, 
  borderRadius, 
  ...rest 
}) => {
  const theme = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: backgroundColor || theme.background,
          padding,
          margin,
          borderRadius,
        },
        style,
      ]}
      {...rest}
    />
  );
};
