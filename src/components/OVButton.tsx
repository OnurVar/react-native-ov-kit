import React, { useCallback } from 'react';
import { StyleProp, StyleSheet, Text, TextProps, TextStyle, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from 'react-native';

import { Margin, StylePalette } from '../styles';
import { OVLoader, OVLoaderProps } from './OVLoader';

export interface OVButtonProps {
  title?: string;

  enabledTheme?: StateTheme;
  selectedTheme?: StateTheme;
  disabledTheme?: StateTheme;

  isLoading?: boolean;
  isSelected?: boolean;
  isDisabled?: boolean;

  height?: number;
  width?: number;

  borderRadius?: number;
  borderWidth?: number;
  showBorder?: boolean;

  textStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;

  LeadingImageComponent?: (tintColor: string, size: number) => React.FC | React.JSX.Element;
  TrailingImageComponent?: (tintColor: string, size: number) => React.FC | React.JSX.Element;
  imageSize?: number;

  loaderProps?: OVLoaderProps;
  buttonProps?: TouchableOpacityProps;
  textProps?: TextProps;

  onPress?: () => void;
  onDisabledPress?: () => void;
}

interface StateTheme {
  tintColor?: string;
  backgroundColor?: string;
  borderColor?: string;
}
export const OVButton = (props: OVButtonProps) => {
  //MARK: Props
  const {
    title,

    enabledTheme,
    selectedTheme,
    disabledTheme,

    isLoading,
    isSelected,
    isDisabled,

    height: propHeight,
    width: propWidth,

    borderRadius: propBorderRadius,
    borderWidth: propBorderWidth,
    showBorder: propShowBorder,

    textStyle,
    buttonStyle,

    LeadingImageComponent,
    TrailingImageComponent,
    imageSize,

    loaderProps,
    buttonProps,
    textProps,

    onPress,
    onDisabledPress,
  } = props;

  //MARK: Calculations
  const height = propHeight || 50;
  const borderRadius = propBorderRadius || 25;
  const width = typeof propWidth === 'number' ? propWidth : undefined;
  const minWidth = typeof width === 'number' ? undefined : 50;
  const borderWidth = propBorderWidth || 0;
  const showBorder = propShowBorder || false;

  let tintColor: string;
  let borderColor: string;
  let backgroundColor: string;

  const isLeadingOrTrailingImageAvailable = typeof LeadingImageComponent !== 'undefined' || typeof TrailingImageComponent !== 'undefined';

  if (isDisabled) {
    tintColor = disabledTheme?.tintColor || enabledTheme?.tintColor || 'black';
    borderColor = disabledTheme?.borderColor || enabledTheme?.borderColor || tintColor;
    backgroundColor = disabledTheme?.backgroundColor || enabledTheme?.backgroundColor || 'transparent';
  } else if (isSelected) {
    tintColor = selectedTheme?.tintColor || enabledTheme?.tintColor || 'black';
    borderColor = selectedTheme?.borderColor || enabledTheme?.borderColor || tintColor;
    backgroundColor = selectedTheme?.backgroundColor || enabledTheme?.backgroundColor || 'transparent';
  } else {
    tintColor = enabledTheme?.tintColor || 'black';
    borderColor = enabledTheme?.borderColor || tintColor;
    backgroundColor = enabledTheme?.backgroundColor || 'transparent';
  }

  //MARK: Action Methods
  const onButtonPress = useCallback(() => {
    if (isDisabled) {
      onDisabledPress && onDisabledPress();
    } else if (!isLoading) {
      onPress && onPress();
    }
  }, [isDisabled, isLoading, onPress, onDisabledPress]);

  //MARK: Render
  const renderTitle = useCallback(() => {
    if (typeof title === 'string') {
      return (
        <Text style={[isLeadingOrTrailingImageAvailable ? styles.titleMargin : undefined, { color: tintColor }, textStyle]} {...textProps}>
          {title}
        </Text>
      );
    }
    return undefined;
  }, [title, textStyle, textProps, isLeadingOrTrailingImageAvailable, tintColor]);
  const renderLeadingImage = useCallback(() => {
    return LeadingImageComponent ? LeadingImageComponent(tintColor, imageSize || 24) : undefined;
  }, [LeadingImageComponent, tintColor, imageSize]);
  const renderTrailingImage = useCallback(() => {
    return TrailingImageComponent ? TrailingImageComponent(tintColor, imageSize || 24) : undefined;
  }, [TrailingImageComponent, tintColor, imageSize]);
  const renderLoader = useCallback(() => {
    return <OVLoader tintColor={tintColor} {...loaderProps} />;
  }, [tintColor, loaderProps]);
  return (
    <TouchableOpacity
      onPress={onButtonPress}
      style={[
        {
          height,
          width,
          minWidth,
          borderRadius,
          backgroundColor,
        },
        showBorder ? { borderColor, borderWidth } : undefined,
        buttonStyle,
      ]}
      {...buttonProps}
    >
      <View style={styles.container}>
        {isLoading ? (
          renderLoader()
        ) : (
          <>
            {renderLeadingImage()}
            {renderTitle()}
            {renderTrailingImage()}
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StylePalette.size.expandToParent,
    ...StylePalette.alignment.centerRow,
  },
  titleMargin: {
    ...Margin(6).left,
    ...Margin(6).right,
  },
  title: {
    fontSize: 12,
  },
});
