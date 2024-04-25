// import { DynamicText, DynamicTouchableOpacity, Loader } from '@components';
// import { Margin, StylePalette, TextPalette, useCustomTheme } from '@styles';
// import React from 'react';
// import {
//   StyleProp,
//   StyleSheet,
//   TextStyle,
//   View,
//   ViewStyle,
// } from 'react-native';

// export interface OVButtonProps {
//   title?: string;

//   tintColor?: string;
//   selectedTintColor?: string;
//   disabledTintColor?: string;
//   backgroundColor?: string;
//   selectedBackgroundColor?: string;
//   disabledBackgroundColor?: string;
//   borderColor?: string;
//   isSelected?: boolean;
//   isDisabled?: boolean;
//   isLoading?: boolean;
//   height?: number;
//   width?: number;
//   dynamicTextStyle?: StyleProp<TextStyle>;
//   borderRadius?: number;
//   borderWidth?: number;
//   isImageOnRightSide?: boolean;
//   imageSize?: number;
//   showBorder?: boolean;
//   style?: StyleProp<ViewStyle>;
//   ImageComponent?: (tintColor: string, size: number) => JSX.Element;
//   onPress?: () => void;
//   onDisabledPress?: () => void;
// }

// export const OVButton = (props: OVButtonProps) => {
//   //MARK: Props
//   const {
//     title,
//     tintColor,
//     selectedTintColor,
//     disabledTintColor,
//     backgroundColor,
//     selectedBackgroundColor,
//     disabledBackgroundColor,
//     borderColor,
//     isSelected,
//     isDisabled,
//     isLoading,
//     height,
//     width,
//     dynamicTextStyle,
//     borderRadius,
//     borderWidth,
//     isImageOnRightSide,
//     imageSize,
//     showBorder,
//     style,
//     ImageComponent,
//     onPress,
//     onDisabledPress,
//   } = props;

//   //MARK: Hooks
//   const { colors } = useCustomTheme();

//   //MARK: Calculations
//   let calculatedHeight = height || 50;
//   let calculatedBorderRadius = borderRadius || 25;
//   let calculateedWidth = typeof width === 'number' ? width : undefined;
//   let calculatedMinWidth = typeof width === 'number' ? undefined : 50;
//   let calculatedBackgroundColor: string;
//   let calculatedTintColor: string;
//   let calculatedBorderColor = borderColor;

//   if (isDisabled) {
//     calculatedBackgroundColor =
//       disabledBackgroundColor ||
//       colors.Component.Button.Primary.DisabledBackground;
//     calculatedTintColor =
//       disabledTintColor || colors.Component.Button.Primary.DisabledTint;
//   } else if (isSelected) {
//     calculatedBackgroundColor =
//       selectedBackgroundColor ||
//       colors.Component.Button.Primary.SelectedBackground;
//     calculatedTintColor =
//       selectedTintColor || colors.Component.Button.Primary.SelectedTint;
//   } else {
//     calculatedBackgroundColor =
//       backgroundColor || colors.Component.Button.Primary.Background;
//     calculatedTintColor = tintColor || colors.Component.Button.Primary.Tint;
//   }

//   //MARK: Action Methods
//   const onButtonPress = () => {
//     if (isDisabled) {
//       onDisabledPress && onDisabledPress();
//     } else if (!isLoading) {
//       onPress && onPress();
//     }
//   };

//   //MARK: Render
//   return (
//     <DynamicTouchableOpacity
//       onPress={onButtonPress}
//       style={[
//         {
//           height: calculatedHeight,
//           width: calculateedWidth,
//           minWidth: calculatedMinWidth,
//           borderRadius: calculatedBorderRadius,
//           backgroundColor: calculatedBackgroundColor,
//         },
//         showBorder
//           ? { borderColor: calculatedBorderColor, borderWidth }
//           : undefined,
//         style,
//       ]}
//     >
//       <View style={styles.container}>
//         {isLoading ? (
//           <Loader tintColor={calculatedTintColor} />
//         ) : (
//           <>
//             {!isImageOnRightSide &&
//               ImageComponent &&
//               ImageComponent(calculatedTintColor, imageSize || 24)}
//             {typeof title === 'string' && (
//               <DynamicText
//                 style={[
//                   typeof ImageComponent !== 'undefined'
//                     ? styles.titleMargin
//                     : undefined,
//                   TextPalette.gotham_medium(12),
//                   { color: calculatedTintColor },
//                   dynamicTextStyle,
//                 ]}
//               >
//                 {title}
//               </DynamicText>
//             )}
//             {isImageOnRightSide &&
//               ImageComponent &&
//               ImageComponent(calculatedTintColor, imageSize || 24)}
//           </>
//         )}
//       </View>
//     </DynamicTouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     ...StylePalette.size.expandToParent,
//     ...StylePalette.alignment.centerRow,
//   },
//   titleMargin: {
//     ...Margin(6).left,
//     ...Margin(6).right,
//   },
// });
