import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {logoutRequest} from '../../../src/redux/action';

const Profile = () => {
  const dispatch = useDispatch();

  const handelLogout = () => {
    dispatch(logoutRequest());
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: '#000'}}>Profile</Text>
      <TouchableOpacity style={{padding: 20}} onPress={handelLogout}>
        <Text style={{color: '#000', fontSize: 20}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
