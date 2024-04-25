import { StyleSheet } from 'react-native';

export const Margin = (value: number) =>
  StyleSheet.create({
    left: {
      marginLeft: value,
    },
    right: {
      marginRight: value,
    },
    horizontal: {
      marginHorizontal: value,
    },
    top: {
      marginTop: value,
    },
    bottom: {
      marginBottom: value,
    },
    vertical: {
      marginVertical: value,
    },
    all: {
      margin: value,
    },
  });
