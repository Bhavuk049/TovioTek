import React, {ReactNode} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {back, logo} from '../../utils/image';
import {useNavigation} from '@react-navigation/native';
import {hp, wp} from '../../utils/responsive';
import {shadow} from '../../utils/shadow';

interface ChildInfo {
  name?: string;
  age?: string;
  image?: ImageSourcePropType;
}

interface DashboardLayoutProps {
  backButton?: boolean;
  personName?: string;
  personImage?: ImageSourcePropType;
  childInfo?: ChildInfo;
  children: ReactNode;
}

const DashboardLayout = ({
  backButton = false,
  personName = 'Alaina Preston',
  personImage,
  childInfo,
  children,
}: DashboardLayoutProps) => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          {backButton && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={back} style={styles.backIcon} />
            </TouchableOpacity>
          )}
          <Image source={logo} style={styles.logo} />
        </View>

        {childInfo && (childInfo.name || childInfo.age || childInfo.image) ? (
          <View style={styles.childInfoWrapper}>
            {childInfo.image && (
              <Image source={childInfo.image} style={styles.childImage} />
            )}
            {childInfo.name && (
              <Text style={styles.childName}>{childInfo.name}</Text>
            )}
            {childInfo.age && (
              <Text style={styles.childAge}>{childInfo.age}</Text>
            )}
          </View>
        ) : (
          <View style={{width: wp(20)}} /> // empty placeholder space
        )}

        <View style={styles.profileWrapper}>
          {personImage ? (
            <Image source={personImage} style={styles.profileAvatar} />
          ) : (
            <View style={[styles.profileAvatar, styles.placeholderAvatar]} />
          )}
          <Text style={styles.profileName}>{personName}</Text>
        </View>
      </View>

      <View style={styles.bodyWrapper}>
        <View style={styles.body}>{children}</View>
      </View>
    </View>
  );
};

export default DashboardLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#FBCF9B',
    paddingTop: hp(1),
    paddingBottom: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    resizeMode: 'contain',
    height: hp(4),
    width: wp(8),
  },
  logo: {
    resizeMode: 'contain',
    height: hp(7),
    width: wp(20),
    marginLeft: wp(2),
  },
  childInfoWrapper: {
    alignItems: 'center',
  },
  childImage: {
    resizeMode: 'contain',
    height: hp(2.5),
    width: hp(2.5),
  },
  childName: {
    color: '#353535',
    fontWeight: 'bold',
    fontSize: hp(1.8),
    marginTop: hp(0.25),
  },
  childAge: {
    color: '#686868',
    fontSize: hp(1.5),
    marginTop: hp(-0.3),
  },
  profileWrapper: {
    alignItems: 'flex-end',
  },
  profileAvatar: {
    height: hp(4),
    width: hp(4),
    borderRadius: hp(2),
  },
  placeholderAvatar: {
    backgroundColor: 'lightblue',
  },
  profileName: {
    color: '#353535',
    fontSize: hp(1.5),
    marginTop: hp(0.5),
  },
  bodyWrapper: {
    flex: 1,
    backgroundColor: '#FBCF9B',
  },
  body: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    borderTopLeftRadius: hp(3),
    borderTopRightRadius: hp(3),
    overflow: 'hidden',
    ...shadow,
  },
});
