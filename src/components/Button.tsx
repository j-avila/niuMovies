import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

type ButtonProps = {
  color?: string;
  children: React.ReactNode;
  action: () => void;
};

const Button = ({ children, action, color = 'transparent' }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={action}
      style={{ ...styles.layout, backgroundColor: color }}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#d1d14f',
    marginVertical: 10,
  },
});
