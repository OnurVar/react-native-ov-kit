import React from 'react';
import { Image, ImageSourcePropType, ImageStyle, StyleProp } from 'react-native';

export interface OVSquareImageProps {
  source?: ImageSourcePropType;
  tintColor?: string;
  size?: number;
  style?: StyleProp<ImageStyle>;
}

export const OVSquareImage = (props: OVSquareImageProps) => (
  <Image source={props.source} style={[{ tintColor: props.tintColor, width: props.size, height: props.size }, props.style]} />
);
