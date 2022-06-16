import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Card from './card';

const cardData = [
  {
    title: 'Jobs delivered',
    subTitle: '400+',
    imageNo: 0,
    bgColor: '#EFECFF',
    marginLeft: false,
    marginRight: true,
  },
  {
    title: 'Companies hiring',
    subTitle: '250+',
    imageNo: 1,
    bgColor: '#FFF6E9',
    marginLeft: true,
    marginRight: false,
  },
  {
    title: 'Highest Salary',
    subTitle: '54L',
    imageNo: 2,
    bgColor: '#FFE9F1',
    marginLeft: false,
    marginRight: true,
  },
  {
    title: 'Worth of jobs',
    subTitle: '15cr+',
    imageNo: 3,
    bgColor: '#DCF9FD',
    marginLeft: true,
    marginRight: false,
  },
];

export default function HeroSection() {
  return (
    <View>
      <Text style={styles.title}>
        15cr+ worth of jobs delivered, super fast!
      </Text>
      <Text style={styles.subTitle}>
        India's finest companies trust Relevel to hire
      </Text>
      <View style={styles.parentContainer}>
        <View style={[styles.imageContainer, {marginBottom: 16}]}>
          <Card {...cardData[0]} />
          <Card {...cardData[1]} />
        </View>
        <View style={styles.imageContainer}>
          <Card {...cardData[2]} />
          <Card {...cardData[3]} />
        </View>
      </View>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        style={styles.button}>
        <Text style={styles.buttonText}>Book a test</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    marginTop: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
    width: 240,
    color: '#3C4852',
  },
  subTitle: {
    color: '#3C4852',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 12,
  },
  imageContainer: {
    flexDirection: 'row',
  },
  imageWrapper: {
    flex: 1,
    height: 112,
    position: 'relative',
    paddingTop: 12,
    paddingLeft: 12,
  },
  personImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 54,
    width: 54,
  },
  waveImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 86,
    width: 52,
  },
  heading: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 18,
    color: '#3C4852',
  },
  subHeading: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 28,
    marginTop: 4,
    color: '#3C4852',
  },
  button: {
    width: '100%',
    backgroundColor: '#3C4852',
    height: 48,
    marginTop: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
  },
});
