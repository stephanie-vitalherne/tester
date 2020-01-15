import React from 'react';
import { withNavigation } from 'react-navigation';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

// COMPONENTS
import Spacer from './Spacer';

const NavLink = ({ navigation, linkText, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.loginLink}>{linkText}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginLink: {
    color: 'blue'
  }
});

export default withNavigation(NavLink);
