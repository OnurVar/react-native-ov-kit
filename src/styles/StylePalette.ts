import { StyleSheet } from 'react-native';

export const StylePalette = {
  size: StyleSheet.create({
    absoluteExpandToParent: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    },
    expandToParent: {
      flex: 1,
    },
    square: {
      aspectRatio: 1,
    },
  }),
  alignment: StyleSheet.create({
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    centerRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    verticalCenter: {
      justifyContent: 'center',
    },
    verticalCenterRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    horizontalCenter: {
      alignItems: 'center',
    },
    horizontalCenterRow: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    spaceBetween: {
      justifyContent: 'space-between',
    },
    flexEnd: {
      justifyContent: 'flex-end',
    },
    row: {
      flexDirection: 'row',
    },
  }),
};
