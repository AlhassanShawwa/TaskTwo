import React from 'react';
import { StatusBar, View } from 'react-native';
import Screens from './navigation';

const index = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <Screens />
    </View>
  );
};

export default index;