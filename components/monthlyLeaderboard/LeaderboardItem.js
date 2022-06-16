import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RankSVG from './icon/rank';
import RankOneBorderSVG from './images/rankOneBorder.svg';
import RankTwoBorderSVG from './images/rankTwoBorder.svg';
import RankThreeBorderSVG from './images/rankThreeBorder.svg';
import RankBorderSVG from './images/rankBorder';

export default function LeaderboardItem({index: rank, item: data}) {
  const styles = getStyles(rank);
  const rankImg = () => {
    switch (rank) {
      case 0:
        return (
          <Image
            style={styles.rankImage}
            source={require('./images/rankOne.png')}
          />
        );
      case 1:
        return (
          <Image
            style={styles.rankImage}
            source={require('./images/rankTwo.png')}
          />
        );
      case 2:
        return (
          <Image
            style={styles.rankImage}
            source={require('./images/rankThree.png')}
          />
        );
      default:
        return (
          <View style={styles.rankImage}>
            <RankSVG />
            <Text style={styles.rankText}>{rank + 1}</Text>
          </View>
        );
    }
  };
  const getGradientColor = () => {
    if (rank === 0) {
      return ['#FDF4E2', '#FFFFFF'];
    } else if (rank === 1) {
      return ['#EFF6FA', '#FFFFFF'];
    } else if (rank === 2) {
      return ['#FBF6F4', '#FFFFFF'];
    } else {
      return ['#FFFFFF', '#FFFFFF'];
    }
  };
  const getBorderSVG = () => {
    if (rank === 0) {
      return <RankOneBorderSVG />;
    } else if (rank === 1) {
      return <RankTwoBorderSVG />;
    } else if (rank === 2) {
      return <RankThreeBorderSVG />;
    } else {
      return <RankBorderSVG />;
    }
  };
  const getGoodies = () => {
    if (rank === 0) {
      return 'Won Macbook Pro';
    } else if (rank === 1) {
      return 'Won iphone 13';
    } else if (rank === 2) {
      return 'Won Apple Watch';
    } else {
      return false;
    }
  };
  const goodies = getGoodies();

  return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={getGradientColor()}
        locations={[0.04, 0.35]}
        style={styles.parentContainer}>
        <View style={styles.profilePicCotainer}>
          <Image
            style={styles.profilePic}
            source={{uri: data?.profile_pic?.url}}
          />
          {rankImg()}
        </View>
        <View style={{alignItems: 'flex-start'}}>
          <Text style={styles.nameText}>{data?.full_name}</Text>
          <View style={styles.iconTextContainer}>
            <Image
              style={styles.iconImage}
              source={require('./images/Path.png')}
            />
            <Text style={styles.detailText}>{data?.remarks}</Text>
          </View>
          {goodies && (
            <View style={styles.iconTextContainer}>
              <Image
                style={styles.iconImage}
                source={require('./images/party.png')}
              />
              <Text style={styles.detailText}>{goodies}</Text>
            </View>
          )}
        </View>
        <View style={styles.companyContainer}>
          <View style={styles.companyTextWrapper}>
            <Text style={styles.companyText}>{data?.final_score}</Text>
            <View style={{position: 'absolute', bottom: 0}}>
              {getBorderSVG()}
            </View>
          </View>
          <Image
            style={styles.companyLogo}
            source={{uri: data?.company_logo}}
          />
        </View>
      </LinearGradient>
    </View>
  );
}

const getStyles = rank =>
  StyleSheet.create({
    parentContainer: {
      flexDirection: 'row',
      paddingTop: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 20,
    },
    profilePic: {
      width: 48,
      height: 48,
      borderRadius: 24,
    },
    nameText: {
      fontWeight: '600',
      fontSize: 14,
      lineHeight: 20,
      color: '#3C4852',
    },
    detailText: {
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 18,
      color: '#627984',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 4,
    },
    iconImage: {
      marginRight: 7,
      width: 15,
      height: 15,
    },
    iconTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rankImage: {
      width: 24,
      height: 24,
      position: 'absolute',
      bottom: '-25%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    rankText: {
      position: 'absolute',
      fontWeight: '700',
      fontSize: 10.0033,
      lineHeight: 12,
      color: '#3C4852',
    },
    profilePicCotainer: {
      position: 'relative',
      width: 48,
      height: 48,
      marginRight: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    companyContainer: {
      width: 74,
      height: 64,
      marginLeft: 'auto',
    },
    companyLogo: {
      flex: 1,
      resizeMode: 'contain',
    },
    companyTextWrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderTopLeftRadius: 8,
      borderTopEndRadius: 8,
      borderBottomLeftRadius: 0,
      borderBottomEndRadius: 0,
      backgroundColor:
        rank === 0
          ? '#FFFAF2'
          : rank === 1
          ? '#F8FCFE'
          : rank === 2
          ? '#FEF8F4'
          : '#F8F7FE',
    },
    companyText: {
      fontWeight: '600',
      fontSize: 14,
      lineHeight: 20,
      color:
        rank === 0
          ? '#F09619'
          : rank === 1
          ? '#759AB8'
          : rank === 2
          ? '#B98165'
          : '#4F44E0',
    },
  });
