import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from 'react-native-paper';

import {loginRequest} from '../../../src/redux/action';

const SignInScreen = (props: any) => {
  const isLogin = useSelector((state: any) => state.login.isLogin);
  // const loading = useSelector((state: any) => state.apiData.loading);
  const dispatch = useDispatch();

  const [Emailerror, setEmailError] = useState('');
  const [Passerror, setPassError] = useState('');
  const [validUser, setValidUser] = useState(false);

  const isEmailValid = (email: string) => {
    let Pattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    Pattern.test(String(email).toLowerCase())
      ? setEmailError('')
      : setEmailError('Invalid Email Address');
  };

  const isPasswordValid = (password: string) => {
    let Pattern = /^[a-zA-Z].{7,10}$/;
    Pattern.test(String(password).toLowerCase())
      ? setPassError('')
      : setPassError('Invalid Password Address');
  };

  const {navigation} = props;

  const [data, setData] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const {colors} = useTheme();

  const textInputChange = (val: string) => {
    isEmailValid(val);
    // isPasswordValid(val);
    if (Passerror == '' || Emailerror == '') {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val: string) => {
    isPasswordValid(val);
    if (Passerror == '') {
      setValidUser(true);
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setValidUser(false);
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidEmail = (val: string) => {
    isEmailValid(val);
    if (Emailerror == '') {
      setValidUser(true);
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setValidUser(false);
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = async () => {
    dispatch(loginRequest());

    // if (Emailerror == '') {
    //   if (Passerror == '' || Passerror == 'Invalid Password Address') {
    //     const details = {
    //       email: data.email,
    //       password: data.password,
    //     };
    //     if (details.email != '' && details.password != '') {
    //       console.log('Login');
    //     } else {
    //       Alert.alert(
    //         'Login Failed',
    //         'Invalid Credentials',
    //         [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    //         {cancelable: false},
    //       );
    //     }
    //   } else {
    //     Alert.alert('Invalid Password');
    //   }
    // } else {
    //   Alert.alert('Invalid Email');
    // }
  };

  const ForgetPass = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}>
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
            },
          ]}>
          Email
        </Text>
        <View style={styles.action}>
          <FontAwesome5 name="user" color={colors.text} size={20} />
          <TextInput
            placeholder="Your Email"
            placeholderTextColor={'grey'}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
            onEndEditing={e => handleValidEmail(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>{Emailerror}</Text>
          </Animatable.View>
        )}
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
              marginTop: 35,
            },
          ]}>
          Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color={colors.text} size={20} />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor={'grey'}
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>{Passerror}</Text>
          </Animatable.View>
        )}
        <TouchableOpacity onPress={ForgetPass}>
          <Text style={{color: '#009387', marginTop: 15, marginHorizontal: 20}}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={() => loginHandle()}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Sign In
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={[
              styles.signIn,
              {
                borderColor: '#009387',
                borderWidth: 1,
                marginTop: 15,
              },
            ]}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#009387',
                },
              ]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 1.6,
    backgroundColor: '#fff',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    marginHorizontal: 20,
    marginBottom: 5,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    marginHorizontal: 20,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal: 20,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
