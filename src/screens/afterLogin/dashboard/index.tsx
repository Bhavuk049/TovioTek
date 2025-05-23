import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {hp, wp} from '../../../utils/responsive';
import {shadow} from '../../../utils/shadow';
import {add, child, profile} from '../../../utils/image';
import DashboardLayout from '../../../components/Wrapper/Wrapper';
import {useNavigation} from '@react-navigation/native';
import {Route} from '../../../navigation/Routs';

const Dashboard = () => {
  const navigation = useNavigation<any>();
  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        style={[styles.itemContainer, shadow]}
        onPress={() => {
          navigation.navigate(Route.Collection);
        }}>
        <Image source={child} style={styles.itemImage} />
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTitle}>BD</Text>
          <Text style={styles.itemSubtitle}>9 year, 8 Month</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <DashboardLayout personImage={profile}>
      <View style={styles.container}>
        <View style={[styles.searchBox, shadow]}>
          <TextInput
            placeholder="Search here..."
            placeholderTextColor="gray"
            style={styles.searchInput}
          />
        </View>
        <FlatList
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={renderItem}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(Route.AddNewClient);
          }}
          style={[styles.addButton, shadow]}
          activeOpacity={0.5}>
          <Image source={add} style={styles.addIcon} />
          <Text style={styles.addText}>Add New Client</Text>
        </TouchableOpacity>
      </View>
    </DashboardLayout>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    backgroundColor: '#fff',
    paddingHorizontal: wp(3),
    height: hp(5),
    borderRadius: hp(3),
    justifyContent: 'center',
    marginVertical: hp(2),
    marginHorizontal: wp(5),
  },
  searchInput: {
    fontSize: hp(2),
  },
  listContent: {
    paddingBottom: hp(10),
  },
  itemContainer: {
    backgroundColor: '#fff',
    marginBottom: hp(2),
    padding: hp(1.5),
    borderRadius: hp(2.5),
    marginHorizontal: wp(5),
    flexDirection: 'row',
  },
  itemImage: {
    resizeMode: 'contain',
    height: hp(7),
    width: wp(14),
    marginLeft: wp(2),
  },
  itemTextContainer: {
    marginLeft: wp(5),
    justifyContent: 'space-around',
  },
  itemTitle: {
    fontSize: hp(2),
    color: '#353535',
    fontWeight: 'bold',
  },
  itemSubtitle: {
    fontSize: hp(1.8),
    color: '#353535',
  },
  addButton: {
    position: 'absolute',
    height: hp(6),
    borderRadius: hp(3),
    backgroundColor: '#F8E2C8',
    bottom: hp(2),
    right: wp(5),
    flexDirection: 'row',
    alignItems: 'center',
    padding: hp(1),
  },
  addIcon: {
    resizeMode: 'contain',
    height: hp(4),
    width: hp(4),
  },
  addText: {
    marginHorizontal: wp(3),
    color: '#353535',
    fontWeight: 'bold',
  },
});
