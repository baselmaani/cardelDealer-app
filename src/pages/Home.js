import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import CustomButton from '../shared/button/CustomButton';
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomButton
        style={styles.btn}
        title='Login'
        onPress={() => navigation.navigate('Login')}
      />

      <CustomButton
        style={styles.btn}
        title='Add Device'
        onPress={() => navigation.navigate('Brand And Model')}
      />
      <CustomButton
        style={styles.btn}
        title='Search Device'
        onPress={() => navigation.navigate('Get Devices')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'light',
    gap: 10,
  },
  btn: {
    fontWeight: 'bold',
  },
});

export default Home;
