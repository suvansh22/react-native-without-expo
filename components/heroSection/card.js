import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

export default function Card({
  title,
  subTitle,
  imageNo,
  bgColor,
  marginLeft,
  marginRight,
}) {
  const styles = getStyles(marginLeft, marginRight, bgColor);
  const getImageComponent = () => {
    if (imageNo === 0) {
      return (
        <Image
          style={styles.personImage}
          source={require('./images/person1.png')}
        />
      );
    } else if (imageNo === 1) {
      return (
        <Image
          style={styles.personImage}
          source={require('./images/person2.png')}
        />
      );
    } else if (imageNo === 2) {
      return (
        <Image
          style={styles.personImage}
          source={require('./images/person3.png')}
        />
      );
    } else {
      return (
        <Image
          style={styles.personImage}
          source={require('./images/person4.png')}
        />
      );
    }
  };
  return (
    <View style={styles.imageWrapper}>
      <Image style={styles.waveImage} source={require('./images/wave.png')} />
      {getImageComponent()}
      <Text style={styles.heading}>{title}</Text>
      <Text style={styles.subHeading}>{subTitle}</Text>
    </View>
  );
}

const getStyles = (marginLeft, marginRight, bgColor) =>
  StyleSheet.create({
    imageWrapper: {
      backgroundColor: bgColor,
      flex: 1,
      height: 112,
      position: 'relative',
      paddingTop: 12,
      paddingLeft: 12,
      borderRadius: 8,
      marginLeft: marginLeft ? 8 : 0,
      marginRight: marginRight ? 8 : 0,
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
  });
