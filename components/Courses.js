import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
export default function Courses() {
  return (
    <View style={styles.Container}>
      <Text style={styles.text}>Courses</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
  },
});
