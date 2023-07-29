import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
const CustomButton = ({
  title,
  onPress,
  mode = 'contained',
  style = {},
  ...props
}) => {
  return (
    <Button
      onPress={onPress}
      mode={mode}
      style={{ ...styles.btn, ...style }}
      {...props}
    >
      {title}
    </Button>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
});
