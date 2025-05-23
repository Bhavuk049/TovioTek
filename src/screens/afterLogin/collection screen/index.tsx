import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import DashboardLayout from '../../../components/Wrapper/Wrapper';
import {hp, wp} from '../../../utils/responsive';
import {child, clock, plus, profile} from '../../../utils/image';
import {shadow} from '../../../utils/shadow';

const Collection = () => {
  return (
    <DashboardLayout
      personImage={profile}
      backButton
      childInfo={{
        name: 'AS',
        age: '9 year, 8 Month',
        image: child,
      }}>
      <View style={styles.container}>
        <TouchableOpacity style={[styles.card, styles.newSampleCard]}>
          <Image source={plus} style={styles.icon} />
          <Text style={styles.newSampleText}>New Sample</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, styles.pendingSampleCard]}>
          <Image source={clock} style={styles.icon} />
          <Text style={styles.pendingSampleText}>New Sample</Text>
        </TouchableOpacity>
      </View>
    </DashboardLayout>
  );
};

export default Collection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    paddingTop: hp(6),
  },
  card: {
    marginHorizontal: wp(5),
    flexDirection: 'row',
    alignItems: 'center',
    padding: hp(1.5),
    borderRadius: hp(5),
    ...shadow,
  },
  newSampleCard: {
    backgroundColor: '#F8E2C8',
    marginBottom: hp(2),
  },
  pendingSampleCard: {
    backgroundColor: '#F6F6F6',
    borderWidth: wp(0.2),
    borderColor: '#F3824D',
  },
  icon: {
    resizeMode: 'contain',
    height: hp(6),
    width: hp(6),
    marginRight: wp(4),
  },
  newSampleText: {
    fontSize: hp(2.4),
    color: '#353535',
    fontWeight: 'bold',
  },
  pendingSampleText: {
    fontSize: hp(2.4),
    color: '#F3824D',
    fontWeight: 'bold',
  },
});
