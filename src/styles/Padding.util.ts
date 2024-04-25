import { StyleSheet } from 'react-native';

export const Padding = (value: number) =>
  StyleSheet.create({
    left: {
      paddingLeft: value,
    },
    right: {
      paddingRight: value,
    },
    horizontal: {
      paddingHorizontal: value,
    },
    top: {
      paddingTop: value,
    },
    bottom: {
      paddingBottom: value,
    },
    vertical: {
      paddingVertical: value,
    },
    all: {
      padding: value,
    },
  });
