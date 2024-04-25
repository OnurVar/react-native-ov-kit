import type { TextPaletteConfig } from './TextPaletteConfig';

export class TextPaletteStorage {
  private static instance: TextPaletteStorage;

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

  constructor() {
    this.defaultFamilyName = undefined;
    this.thinFamilyName = undefined;
    this.ultralightFamilyName = undefined;
    this.lightFamilyName = undefined;
    this.regularFamilyName = undefined;
    this.mediumFamilyName = undefined;
    this.semiboldFamilyName = undefined;
    this.boldFamilyName = undefined;
    this.heavyFamilyName = undefined;
    this.blackFamilyName = undefined;
  }

  public static getInstance(): TextPaletteStorage {
    if (!TextPaletteStorage.instance) {
      TextPaletteStorage.instance = new TextPaletteStorage();
    }

    return TextPaletteStorage.instance;
  }

  public setup(config: TextPaletteConfig) {
    this.defaultFamilyName = config.defaultFamilyName;
    this.thinFamilyName = config.thinFamilyName;
    this.ultralightFamilyName = config.ultralightFamilyName;
    this.lightFamilyName = config.lightFamilyName;
    this.regularFamilyName = config.regularFamilyName;
    this.mediumFamilyName = config.mediumFamilyName;
    this.semiboldFamilyName = config.semiboldFamilyName;
    this.boldFamilyName = config.boldFamilyName;
    this.heavyFamilyName = config.heavyFamilyName;
    this.blackFamilyName = config.blackFamilyName;
  }
}
