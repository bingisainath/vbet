import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDataRequest} from '../../../redux/action';

const DataDisplay = () => {
  const data = useSelector((state: any) =>  state.apiData.data);
  const loading = useSelector((state: any) => state.apiData.loading);
  const dispatch = useDispatch();

  const handleFetchData = async () => {
    console.log('clicked');
    dispatch(fetchDataRequest());
  };

  const handlePrint = async () => {
    console.log(data);
    console.log(loading);
  };


  return (
    <View>
      <Button title="Fetch Data" onPress={handleFetchData} />
      <View style={{marginTop: 40,}}>
        <Button title="Print Data" onPress={handlePrint} />
      </View>
    </View>
  );
};

export default DataDisplay;
