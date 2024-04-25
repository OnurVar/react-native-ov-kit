import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

interface OVButtonProps {}

export const OVButton = (props: OVButtonProps) => {
  //MARK: Props
  const {} = props;

  //MARK: Hooks
  useEffect(() => {}, []);

  //MARK: Render
  return <View style={styles.default}></View>;
};

const styles = StyleSheet.create({
  default: {
    backgroundColor: 'red',
    width: 100,
    height: 50,
  },
});
