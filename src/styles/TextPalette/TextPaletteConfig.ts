export interface TextPaletteConfig {
  defaultFamilyName?: string;
  thinFamilyName?: string;
  ultralightFamilyName?: string;
  lightFamilyName?: string;
  regularFamilyName?: string;
  mediumFamilyName?: string;
  semiboldFamilyName?: string;
  boldFamilyName?: string;
  heavyFamilyName?: string;
  blackFamilyName?: string;
  getLineHeight?: (fontSize: number) => number;
}
