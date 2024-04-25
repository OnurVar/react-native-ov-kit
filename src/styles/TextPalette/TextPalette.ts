import { Platform } from 'react-native';

import { TextPaletteStorage } from './TextPaletteStorage';

import type { TextPaletteStyle } from './TextPaletteStyle';
import type { TextPaletteConfig } from './TextPaletteConfig';

const GetLineHeight = (fontSize: number): number => fontSize * 1.35;

export const TextPalette = {
  /**
   * Setup the TextPalette
   * @param config
   */
  setup: (config: TextPaletteConfig) => {
    TextPaletteStorage.getInstance().setup(config);
  },

  /**
   * @FONT_WEIGHT 100
   */
  ultra_light_100: (fontSize: number): TextPaletteStyle => {
    const isiOS = Platform.OS === 'ios';
    return {
      lineHeight: GetLineHeight(fontSize),
      fontSize,
      fontFamily: isiOS
        ? TextPaletteStorage.getInstance().defaultFamilyName
        : TextPaletteStorage.getInstance().ultralightFamilyName,
      fontWeight: isiOS ? '100' : undefined,
    };
  },
  /**
   * @FONT_WEIGHT 200
   */
  thin_200: (fontSize: number): TextPaletteStyle => {
    const isiOS = Platform.OS === 'ios';
    return {
      lineHeight: GetLineHeight(fontSize),
      fontSize,
      fontFamily: isiOS
        ? TextPaletteStorage.getInstance().defaultFamilyName
        : TextPaletteStorage.getInstance().thinFamilyName,
      fontWeight: isiOS ? '200' : undefined,
    };
  },
  /**
   * @FONT_WEIGHT 300
   */
  light_300: (fontSize: number): TextPaletteStyle => {
    const isiOS = Platform.OS === 'ios';
    return {
      lineHeight: GetLineHeight(fontSize),
      fontSize,
      fontFamily: isiOS
        ? TextPaletteStorage.getInstance().defaultFamilyName
        : TextPaletteStorage.getInstance().lightFamilyName,
      fontWeight: isiOS ? '300' : undefined,
    };
  },
  /**
   * @FONT_WEIGHT 400
   */
  regular_400: (fontSize: number): TextPaletteStyle => {
    const isiOS = Platform.OS === 'ios';
    return {
      lineHeight: GetLineHeight(fontSize),
      fontSize,
      fontFamily: isiOS
        ? TextPaletteStorage.getInstance().defaultFamilyName
        : TextPaletteStorage.getInstance().regularFamilyName,
      fontWeight: isiOS ? '400' : undefined,
    };
  },
  /**
   * @FONT_WEIGHT 500
   */
  medium_500: (fontSize: number): TextPaletteStyle => {
    const isiOS = Platform.OS === 'ios';
    return {
      lineHeight: GetLineHeight(fontSize),
      fontSize,
      fontFamily: isiOS
        ? TextPaletteStorage.getInstance().defaultFamilyName
        : TextPaletteStorage.getInstance().mediumFamilyName,
      fontWeight: isiOS ? '500' : undefined,
    };
  },
  /**
  /**
   * @FONT_WEIGHT 600
   */
  semibold_600: (fontSize: number): TextPaletteStyle => {
    const isiOS = Platform.OS === 'ios';
    return {
      lineHeight: GetLineHeight(fontSize),
      fontSize,
      fontFamily: isiOS
        ? TextPaletteStorage.getInstance().defaultFamilyName
        : TextPaletteStorage.getInstance().semiboldFamilyName,
      fontWeight: isiOS ? '600' : undefined,
    };
  },
  /**
   * @FONT_WEIGHT 700
   */
  bold_700: (fontSize: number): TextPaletteStyle => {
    const isiOS = Platform.OS === 'ios';
    return {
      lineHeight: GetLineHeight(fontSize),
      fontSize,
      fontFamily: isiOS
        ? TextPaletteStorage.getInstance().defaultFamilyName
        : TextPaletteStorage.getInstance().boldFamilyName,
      fontWeight: isiOS ? '700' : undefined,
    };
  },
  /**
   * @FONT_WEIGHT 800
   */
  heavy_800: (fontSize: number): TextPaletteStyle => {
    const isiOS = Platform.OS === 'ios';
    return {
      lineHeight: GetLineHeight(fontSize),
      fontSize,
      fontFamily: isiOS
        ? TextPaletteStorage.getInstance().defaultFamilyName
        : TextPaletteStorage.getInstance().heavyFamilyName,
      fontWeight: isiOS ? '800' : undefined,
    };
  },
  /**
   * @FONT_WEIGHT 900
   */
  black_900: (fontSize: number): TextPaletteStyle => {
    const isiOS = Platform.OS === 'ios';
    return {
      lineHeight: GetLineHeight(fontSize),
      fontSize,
      fontFamily: isiOS
        ? TextPaletteStorage.getInstance().defaultFamilyName
        : TextPaletteStorage.getInstance().blackFamilyName,
      fontWeight: isiOS ? '900' : undefined,
    };
  },
};
