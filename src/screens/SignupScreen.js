import React, { useState, useContext } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';

import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* Login Link */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Spacer>
          <Text style={styles.loginLink}>
            Already have an account? Sign in instead
          </Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  },
  errorMessage: {
    color: 'red',
    fontSize: 16,
    marginLeft: 15,
    marginTop: 15
  },
  loginLink: {
    color: 'blue'
  }
});

export default SignupScreen;
