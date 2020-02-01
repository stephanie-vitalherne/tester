import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

// COMPONENTS
import Map from '../components/Map';

const TrackCreateScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create A Track</Text>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
