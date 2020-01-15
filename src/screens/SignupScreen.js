import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

// COMPONENTS
import NavLink from '../components/NavLink';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign up for Tracker"
        errorMessage={state.errorMessage}
        buttonText="Sign up"
        onSubmit={signup}
      />
      {/* Login Link */}
      <NavLink
        routeName="Login"
        linkText="Already have an account? Sign in instead"
      />
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
  }
});

export default SignupScreen;
