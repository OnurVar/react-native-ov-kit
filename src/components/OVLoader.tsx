// import React from 'react';
// import { ActivityIndicator, StyleSheet, View } from 'react-native';

// export interface OVLoaderProps {
//   isBigLoader?: boolean;
//   height?: number;
//   expandToParent?: boolean;
//   tintColor?: string;
//   enableTopBottomPadding?: boolean;
// }

// export const OVLoader = (props: OVLoaderProps) => {
//   //MARK: Props
//   const {
//     height,
//     isBigLoader,
//     expandToParent,
//     tintColor,
//     enableTopBottomPadding,
//   } = props;

//   //MARK: Render
//   return (
//     <View
//       style={[
//         styles.default,
//         { height: height || undefined },
//         expandToParent ? { flex: 1 } : null,
//         enableTopBottomPadding ? styles.topBottomPadding : null,
//       ]}
//     >
//       <ActivityIndicator
//         style={styles.indicator}
//         size={isBigLoader ? 'large' : 'small'}
//         color={tintColor || colors.text}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   default: {
//     ...StylePalette.alignment.center,
//   },
//   indicator: {
//     width: NormalSpace,
//     height: NormalSpace,
//   },
//   topBottomPadding: {
//     ...Padding(14).topBottom,
//   },
// });
