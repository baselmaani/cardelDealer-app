import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import CustomButton from '../../shared/button/CustomButton';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate, isError, isLoading, isSuccess } = useLogin();

  console.log(isError);
  return (
    <View style={styles.container}>
      {isError && <Text>Something went wrong</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Email'
          onChangeText={(e) => setEmail(e)}
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Password'
          onChangeText={(e) => setPassword(e)}
          value={password}
          secureTextEntry={true}
        />
      </View>
      <View>
        <CustomButton
          title='Login'
          onPress={() => {
            mutate({ email, password });
            isSuccess && navigation.navigate('Home');
          }}
          disabled={isLoading}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,

    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: 'light',
    gap: 10,
  },
  inputContainer: {
    width: '80%',
    marginHorizontal: 20,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,

    marginVertical: 10,
    height: 50,
  },
});
