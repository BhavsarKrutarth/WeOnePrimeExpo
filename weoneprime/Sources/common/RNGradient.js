import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

const RNGradient = ({ children, colors, style }) => {
  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={style}>
      {children}
    </LinearGradient>
  );
};

export default RNGradient;
