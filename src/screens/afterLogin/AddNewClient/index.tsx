import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import DashboardLayout from '../../../components/Wrapper/Wrapper';
import {child, profile} from '../../../utils/image';
import {hp, wp} from '../../../utils/responsive';
import {shadow} from '../../../utils/shadow';

const AddNewClient = () => {
  return (
    <DashboardLayout personImage={profile} backButton>
      <View style={styles.container}>
        <Text style={styles.headerText}>Add New Client</Text>

        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            <Image source={child} style={styles.image} />
          </View>
        </View>

        <View style={styles.inputContainer}>
          {[
            'Name',
            'Display Name',
            'DOB',
            'Caregiver 1',
            'Caregiver 2',
            'Diagnosis',
          ].map((placeholder, index) => (
            <View key={index} style={styles.inputWrapper}>
              <TextInput
                placeholder={placeholder}
                placeholderTextColor="gray"
                style={styles.input}
              />
            </View>
          ))}

          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DashboardLayout>
  );
};

export default AddNewClient;

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
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(15),
  },
  imageWrapper: {
    backgroundColor: '#fff',
    padding: hp(2),
    borderRadius: hp(5),
    height: hp(10),
    width: hp(10),
    ...shadow,
  },
  image: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  inputContainer: {
    paddingHorizontal: wp(5),
  },
  inputWrapper: {
    backgroundColor: '#fff',
    height: hp(5),
    justifyContent: 'center',
    borderRadius: hp(3),
    marginBottom: hp(1.7),
    ...shadow,
  },
  input: {
    fontSize: hp(2),
    paddingHorizontal: wp(5),
    color: '#000',
  },
  saveButton: {
    backgroundColor: '#F3763B',
    justifyContent: 'center',
    alignItems: 'center',
    padding: hp(1.2),
    borderRadius: hp(4),
    marginTop: hp(2),
  },
  saveButtonText: {
    fontSize: hp(2.2),
    color: '#fff',
    fontWeight: 'bold',
  },
});
