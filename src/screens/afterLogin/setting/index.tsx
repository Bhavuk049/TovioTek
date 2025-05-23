import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageSourcePropType,
} from 'react-native';
import DashboardLayout from '../../../components/Wrapper/Wrapper';
import {back, logout, Privacy, profile, rate, TC} from '../../../utils/image';
import {hp, wp} from '../../../utils/responsive';
import {shadow} from '../../../utils/shadow';

type SettingItemProps = {
  icon: ImageSourcePropType;
  label: string;
  onPress: () => void;
};

const SettingItem: React.FC<SettingItemProps> = ({icon, label, onPress}) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={styles.profileRow}>
      <Image source={icon} style={styles.profileImage} />
      <Text style={styles.profileName}>{label}</Text>
    </View>
    <Image source={back} style={styles.arrowIcon} />
  </TouchableOpacity>
);

const settingsData: SettingItemProps[] = [
  {icon: profile, label: 'Profile Settings', onPress: () => {}},
  {icon: Privacy, label: 'Privacy Policy', onPress: () => {}},
  {icon: TC, label: 'Terms & Conditions', onPress: () => {}},
  {icon: rate, label: 'Rate Us', onPress: () => {}},
  {icon: logout, label: 'Log Out', onPress: () => {}},
];

const Setting: React.FC = () => {
  return (
    <DashboardLayout personImage={profile}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Settings</Text>

        <View style={styles.sectionWrapper}>
          {settingsData.map((item, index) => (
            <SettingItem
              key={index}
              icon={item.icon}
              label={item.label}
              onPress={item.onPress}
            />
          ))}
        </View>
      </View>
    </DashboardLayout>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(2),
  },
  headerText: {
    alignSelf: 'center',
    color: '#353535',
    fontSize: hp(2.3),
    fontWeight: 'bold',
    marginTop: hp(1),
  },
  sectionWrapper: {
    marginHorizontal: wp(5),
    marginTop: hp(4),
  },
  card: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: hp(1.25),
    borderRadius: hp(1.5),
    marginBottom: hp(1.7),
    ...shadow,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    resizeMode: 'contain',
    height: hp(3.5),
    width: hp(3.5),
  },
  profileName: {
    fontSize: hp(2),
    marginLeft: wp(3),
    fontWeight: 'bold',
    color: '#353535',
  },
  arrowIcon: {
    resizeMode: 'contain',
    height: hp(3),
    width: hp(3),
    transform: [{rotate: '180deg'}],
  },
});
