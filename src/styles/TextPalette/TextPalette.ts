import { Platform } from 'react-native';

import type { TextPaletteConfig } from './TextPaletteConfig';
import type { TextPaletteStyle } from './TextPaletteStyle';

export class TextPalette {
  public defaultFamilyName?: string;
  public thinFamilyName?: string;
  public ultralightFamilyName?: string;
  public lightFamilyName?: string;
  public regularFamilyName?: string;
  public mediumFamilyName?: string;
  public semiboldFamilyName?: string;
  public boldFamilyName?: string;
  public heavyFamilyName?: string;
  public blackFamilyName?: string;
  public getLineHeight?: (fontSize: number) => number;

  constructor(config?: TextPaletteConfig) {
    this.defaultFamilyName = config?.defaultFamilyName;
    this.thinFamilyName = config?.thinFamilyName;
    this.ultralightFamilyName = config?.ultralightFamilyName;
    this.lightFamilyName = config?.lightFamilyName;
    this.regularFamilyName = config?.regularFamilyName;
    this.mediumFamilyName = config?.mediumFamilyName;
    this.semiboldFamilyName = config?.semiboldFamilyName;
    this.boldFamilyName = config?.boldFamilyName;
    this.heavyFamilyName = config?.heavyFamilyName;
    this.blackFamilyName = config?.blackFamilyName;
    this.getLineHeight = config?.getLineHeight;
  }

  private _getLineHeight = (fontSize: number): number | undefined => {
    if (typeof this.getLineHeight !== 'function') {
      return undefined;
    }
    return this.getLineHeight(fontSize);
  };

  public ultralight_100 = (fontSize: number): TextPaletteStyle => {
    const isiOS = Platform.OS === 'ios';
    return {
      fontSize,
      lineHeight: this._getLineHeight(fontSize),
      fontFamily: isiOS ? this.defaultFamilyName : this.ultralightFamilyName,
      fontWeight: isiOS ? '100' : undefined,
    };
  };

  public thin_200 = (fontSize: number): TextPaletteStyle => {
    const isiOS = Platform.OS === 'ios';
    return {
      fontSize,
      lineHeight: this._getLineHeight(fontSize),
      fontFamily: isiOS ? this.defaultFamilyName : this.thinFamilyName,
      fontWeight: isiOS ? '200' : undefined,
    };
  };

  public light_300 = (fontSize: number): TextPaletteStyle => {
    const isiOS = Platform.OS === 'ios';
    return {
      fontSize,
      lineHeight: this._getLineHeight(fontSize),
      fontFamily: isiOS ? this.defaultFamilyName : this.lightFamilyName,
      fontWeight: isiOS ? '300' : undefined,
    };
  };

  public regular_400 = (fontSize: number): TextPaletteStyle => {
    const isiOS = Platform.OS === 'ios';
    return {
      fontSize,
      lineHeight: this._getLineHeight(fontSize),
      fontFamily: isiOS ? this.defaultFamilyName : this.regularFamilyName,
      fontWeight: isiOS ? '400' : undefined,
    };
  };

  public medium_500 = (fontSize: number): TextPaletteStyle => {
    const isiOS = Platform.OS === 'ios';
    return {
      fontSize,
      lineHeight: this._getLineHeight(fontSize),
      fontFamily: isiOS ? this.defaultFamilyName : this.mediumFamilyName,
      fontWeight: isiOS ? '500' : undefined,
    };
  };

  public semibold_600 = (fontSize: number): TextPaletteStyle => {
    const isiOS = Platform.OS === 'ios';
    return {
      fontSize,
      lineHeight: this._getLineHeight(fontSize),
      fontFamily: isiOS ? this.defaultFamilyName : this.semiboldFamilyName,
      fontWeight: isiOS ? '600' : undefined,
    };
  };

  public bold_700 = (fontSize: number): TextPaletteStyle => {
    const isiOS = Platform.OS === 'ios';
    return {
      fontSize,
      lineHeight: this._getLineHeight(fontSize),
      fontFamily: isiOS ? this.defaultFamilyName : this.boldFamilyName,
      fontWeight: isiOS ? '700' : undefined,
    };
  };

  public heavy_800 = (fontSize: number): TextPaletteStyle => {
    const isiOS = Platform.OS === 'ios';
    return {
      fontSize,
      lineHeight: this._getLineHeight(fontSize),
      fontFamily: isiOS ? this.defaultFamilyName : this.heavyFamilyName,
      fontWeight: isiOS ? '800' : undefined,
    };
  };

  public black_900 = (fontSize: number): TextPaletteStyle => {
    const isiOS = Platform.OS === 'ios';
    return {
      fontSize,
      lineHeight: this._getLineHeight(fontSize),
      fontFamily: isiOS ? this.defaultFamilyName : this.blackFamilyName,
      fontWeight: isiOS ? '900' : undefined,
    };
  };
}
