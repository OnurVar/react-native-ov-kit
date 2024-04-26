import React from 'react';
import { ActivityIndicator, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { StylePalette } from '../styles';

export interface OVLoaderProps {
  largeIndicator?: boolean;
  expandToParent?: boolean;
  tintColor?: string;

  containerStyle?: StyleProp<ViewStyle>;
  activityIndicatorStyle?: StyleProp<ViewStyle>;
}

export const OVLoader = (props: OVLoaderProps) => {
  //MARK: Props
  const { largeIndicator, expandToParent, tintColor, containerStyle, activityIndicatorStyle } = props;

  //MARK: Render
  return (
    <View style={[styles.default, expandToParent ? styles.expandToParent : null, containerStyle]}>
      <ActivityIndicator style={activityIndicatorStyle} size={largeIndicator ? 'large' : 'small'} color={tintColor || 'black'} />
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    ...StylePalette.alignment.center,
  },
  expandToParent: {
    ...StylePalette.size.expandToParent,
  },
});
