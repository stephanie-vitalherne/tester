import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context } from '../context/AuthContext';

// COMPONENTS
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const LoginScreen = () => {
  const { state, login, clearErrorMessage } = useContext(Context);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Log Into Your Account"
        errorMessage={state.errorMessage}
        onSubmit={login}
        buttonText="Log In"
      />
      <NavLink
        routeName="Signup"
        linkText="Don't have an account? Sign up instead"
      />
    </View>
  );
};

LoginScreen.navigationOptions = () => {
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
export default LoginScreen;
