/* eslint-disable prettier/prettier */
import React, { FC, useMemo } from 'react';
import { View, Text } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import createStyles from './styles';

interface IProps{
  navigation: NavigationProp<ParamListBase>
}

const DateScreen: FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);

  return (
  <View style={styles.body}>
    <Text style={styles.text}>Date Screen</Text>
  </View>
  );
};

export default DateScreen;
