import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text>BOOBS</Text>
      <Button
        title="Track Detail"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
