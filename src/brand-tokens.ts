import { SystemAccentList } from "./color-generators/accent-palette-generator";
import { DesignToken, DesignTokensRaw } from "./import-tokens";

export interface BrandCollection {
    theme?: BrandColors;
    brand?: BrandTokens; 
    component?: DesignTokensRaw; 
}

interface BrandTokens {
    "spacing": SpacingScale;
    "radii": TShirtSizeScale;
    "font-size": TShirtSizeScale;
    "line-height": TShirtSizeScale;
    "letter-spacing": LetterSpacingList;
    "paragraph-spacing": ParagraphSpacingList;
    "font-family": DesignToken;
    "text-style": TextStyleList;
}

interface ParagraphSpacingList {
    label: DesignToken;
    paragraph: DesignToken;
    display: DesignToken;
}

interface LetterSpacingList {
    [key: string]: DesignToken;
}

interface TextStyleList {
    light: DesignToken;
    regular: DesignToken;
    semibold: DesignToken;
    bold: DesignToken;
    italic: DesignToken;
}
interface TShirtSizeScale {
    'none'?: DesignToken
    'xs5'?: DesignToken
    'xs4'?: DesignToken
    'xs3'?: DesignToken
    'xs2'?: DesignToken
    'xs'?: DesignToken
    'sm'?: DesignToken
    'base'?: DesignToken
    'md'?: DesignToken
    'lg'?: DesignToken
    'xl'?: DesignToken
    'xl2'?: DesignToken
    'xl3'?: DesignToken
    'xl4'?: DesignToken
    'xl5'?: DesignToken
    'xl6'?: DesignToken
    'xl7'?: DesignToken
    'round'?: DesignToken
}

interface SpacingScale extends TShirtSizeScale {
    minor: TShirtSizeScale;
}

interface BrandColors {
    lightBase: SystemColorPalette;
    darkBase: SystemColorPalette;
    darkElevated: SystemColorPalette;
}

interface SystemColorPalette {
    primary: SystemShadeRamp;
    fill: StandardColor;
    text: TextColor;
    stroke: StandardColor;
    info: SystemShadeRamp;
    success: SystemShadeRamp;
    warning: SystemShadeRamp;
    danger: SystemShadeRamp;
    alt: StandardColor;
    utility: UtilityColor;
    accent: AccentPalette;
}

interface AccentPalette {
    red: SystemShadeRamp;
    amber: SystemShadeRamp;
    brown: SystemShadeRamp;
    green: SystemShadeRamp;
    teal: SystemShadeRamp;
    blue: SystemShadeRamp;
    indigo: SystemShadeRamp;
    violet: SystemShadeRamp;
    purple: SystemShadeRamp;
    pink: SystemShadeRamp;
}
interface StandardColor {
    base: SystemShadeRamp;
    contrast: SystemShadeRamp;
}

interface TextColor {
    base: TextColorRamp;
    contrast: TextColorRamp;
}

interface UtilityColor {
    white: DesignToken;
    black: DesignToken;
    transparent: DesignToken;
    tint: SystemShadeRamp;
    shade: SystemShadeRamp;
    accent: SystemAccentList;
}

interface SystemShadeRamp {
    "100": DesignToken;
    "200": DesignToken;
    "300": DesignToken;
    "400": DesignToken;
    "500": DesignToken;
    "600": DesignToken;
}

interface TextColorRamp {
    "600": DesignToken;
    "400": DesignToken;
    "500": DesignToken;
    "warning": DesignToken;
    "succes": DesignToken;
    "info": DesignToken;
    "danger": DesignToken;
    "action": DesignToken;
}