import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
export default function Courses() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Courses</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: '700',
  },
});
