import { ImportFormData } from "./import-ui"

export const colorThemes = [
    'lightBase',
    'darkBase',
    'darkElevated'
]

export const colorThemeNames = [
    'Light Base',
    'Dark Base',
    'Dark Elevated'
]

export const radiiSizeName = [
    "compact",
    "base",
    "large",
]

export const radiiSizeValues = [
    4,
    6,
    8,
]

export const spacingSizeName = [
    "compact",
    "base",
    "large",
    "touch",
]

export const typographySizeName = [
    "compact",
    "base",
    "large",
]

export const typographySizeValues = [
    "13/16",
    "15/20",
    "17/24",
]

export const iconSizeName = [
    "base",
    "touch"
]

export const iconSizeValues = [
    "16",
    "24",
]


export const systemAccentList = [
    "red",
    "amber",
    "brown",
    "green",
    "teal",
    "blue",
    "indigo",
    "violet",
    "purple",
    "pink"
]

export const defaultAccentHUEs = {
    "red": 4,
    "amber": 25,
    "brown": 33,
    "green": 150,
    "teal": 180,
    "blue": 210,
    "indigo": 240,
    "violet": 260,
    "purple": 280,
    "pink": 340
}

export const defaultSettings: ImportFormData = {
    type: 'IMPORT',
    theme: 'light',
    hue: 190,
    saturation: 0.2,
    distance: 0.02,
    primary: 'blue',
    info: 'teal',
    success: 'green',
    warning: 'amber',
    danger: 'red',
    red: 4,
    amber: 25,
    brown: 33,
    green: 150,
    teal: 185,
    blue: 210,
    indigo: 240,
    violet: 260,
    purple: 280,
    pink: 340,
    baseFontSize: 'base',
    typeScale: 'minorThird',
    createStyles: true,
    accentSaturation: 0.9,
    accentMaxLuminance: 0.45,
    accentMidLuminance: 0.18,
    accentMinLuminance: 0.10,
    radii: 'base',
    spacing: 'base',
    verticalSpacing: 'uneven',
    singleCollection: false,

    createColorTokens: true,
    createComponentTokens: true,
    createTypographyTokens: true,
    createSpacingTokens: true,
    createElevationTokens: true,
    createRadiiTokens: true,
    createGlobalSizeTokens: true,
    createOpacityTokens: true,    
}

export interface SemanticAccentColors {
    primary: string;
    info: string;
    success: string;
    warning: string;
    danger: string;
}

export const defaultSemanticAccents: SemanticAccentColors = {
    primary: 'blue',
    info: 'teal',
    success: 'green',
    warning: 'amber',
    danger: 'red'
};

export const collectionNames = new Map<string, string>([
    ["brandColors", "Color Theme"],
    ["typeScale", "Type Scale"],
    ["typeFace", "Type Face"],
    ["themeColors", "Color Theme"],
    ["componentColors", "Component Tokens"],
    ["spacing", "Spacing"],
    ["opacity", "Opacity"],
    ["radii", "Radii"],
    ["iconScale", "Icon Scale"],
    ["globalSizing", "Global Sizing"],
]);
