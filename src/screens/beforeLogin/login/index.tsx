import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Animated, {
  FadeInDown,
  FadeOutDown,
  FadeOutUp,
  Layout,
  LinearTransition,
} from 'react-native-reanimated';

import {google, hide, logo, microsoft, view} from '../../../utils/image';
import {hp, wp} from '../../../utils/responsive';
import {shadow} from '../../../utils/shadow';

const Login = () => {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isCnfPassVisible, setIsCnfPassVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const OR = () => (
    <View style={styles.dividerContainer}>
      <View style={styles.dividerLine} />
      <Text style={styles.orText}>OR</Text>
      <View style={styles.dividerLine} />
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>

      <View style={styles.bodyWrapper}>
        <View style={{flex: 1, ...shadow}}>
          <ScrollView
            style={styles.body}
            contentContainerStyle={{paddingBottom: hp(5)}}
            showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>
              {isLogin ? 'Create New Account' : 'Login'}
            </Text>

            <View style={styles.inputWrapper}>
              <View style={[styles.inputContainer, shadow]}>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#686868"
                  keyboardType="email-address"
                />
              </View>

              <View
                style={[
                  styles.inputContainer,
                  styles.passwordContainer,
                  shadow,
                ]}>
                <TextInput
                  style={[styles.input, styles.flexInput]}
                  placeholder="Password"
                  placeholderTextColor="#686868"
                  secureTextEntry={!isPassVisible}
                />
                <TouchableOpacity
                  onPress={() => setIsPassVisible(prev => !prev)}
                  activeOpacity={0.5}>
                  <Image
                    source={isPassVisible ? view : hide}
                    style={styles.eyeIcon}
                  />
                </TouchableOpacity>
              </View>
              {isLogin && (
                <Animated.View
                  entering={FadeInDown.duration(500)}
                  exiting={FadeOutDown.duration(500)}>
                  <View
                    style={[
                      styles.inputContainer,
                      styles.passwordContainer,
                      shadow,
                    ]}>
                    <TextInput
                      style={[styles.input, styles.flexInput]}
                      placeholder="Confirm Password"
                      placeholderTextColor="#686868"
                      secureTextEntry={!isCnfPassVisible}
                    />
                    <TouchableOpacity
                      onPress={() => setIsCnfPassVisible(prev => !prev)}
                      activeOpacity={0.5}>
                      <Image
                        source={isCnfPassVisible ? view : hide}
                        style={styles.eyeIcon}
                      />
                    </TouchableOpacity>
                  </View>
                </Animated.View>
              )}

              <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.loginButton, shadow]}>
                <Text style={styles.loginButtonText}>
                  {isLogin ? 'Signup' : 'Login'}
                </Text>
              </TouchableOpacity>

              <OR />

              <TouchableOpacity style={[styles.thirdPartyButton, shadow]}>
                <Image source={microsoft} style={styles.authIcon} />
                <Text style={styles.thirdPartyText}>With Microsoft</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.thirdPartyButton,
                  styles.googleBtnMargin,
                  shadow,
                ]}>
                <Image source={google} style={styles.authIcon} />
                <Text style={styles.thirdPartyText}>With Google</Text>
              </TouchableOpacity>

              <OR />

              <TouchableOpacity
                style={[styles.createAccountBtn, shadow]}
                onPress={() => {
                  setIsLogin(prev => !prev);
                }}>
                <Text style={styles.createAccountText}>
                  {isLogin ? 'Login' : 'Create Account'}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBCF9B',
    paddingVertical: hp(3),
  },
  logo: {
    resizeMode: 'contain',
    height: hp(10),
    width: wp(50),
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
    ...shadow,
  },
  title: {
    alignSelf: 'center',
    marginTop: hp(5),
    fontSize: hp(3),
    fontWeight: 'bold',
    color: '#000',
  },
  inputWrapper: {
    paddingHorizontal: wp(10),
    marginTop: hp(4),
  },
  inputContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: hp(2),
    borderRadius: hp(4),
    height: hp(5.5),
    justifyContent: 'center',
  },
  passwordContainer: {
    marginTop: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    fontSize: hp(2),
    color: '#000',
  },
  flexInput: {
    flex: 1,
  },
  eyeIcon: {
    resizeMode: 'contain',
    height: hp(2.5),
    width: wp(8),
    marginLeft: wp(2),
  },
  forgotPassword: {
    color: '#F3763B',
    marginTop: hp(1.5),
    alignSelf: 'flex-end',
    fontSize: hp(1.8),
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#F3763B',
    height: hp(5.5),
    borderRadius: hp(3),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(2),
  },
  loginButtonText: {
    fontSize: hp(2),
    color: '#fff',
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: hp(2.5),
  },
  dividerLine: {
    height: hp(0.2),
    flex: 1,
    backgroundColor: '#D9D9D9',
    marginHorizontal: wp(3),
  },
  orText: {
    fontSize: hp(2),
    color: '#353535',
  },
  thirdPartyButton: {
    backgroundColor: '#fff',
    paddingHorizontal: hp(2),
    borderRadius: hp(4),
    height: hp(5.5),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  googleBtnMargin: {
    marginTop: hp(2),
  },
  authIcon: {
    resizeMode: 'contain',
    height: hp(3),
    width: wp(6),
  },
  thirdPartyText: {
    fontSize: hp(2),
    color: '#686868',
    marginLeft: wp(3),
  },
  createAccountBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: hp(2),
    borderRadius: hp(4),
    height: hp(5.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccountText: {
    fontSize: hp(2),
    color: '#F3763B',
    fontWeight: 'bold',
  },
});
