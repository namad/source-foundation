/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/color-generators/accent-palette-generator.ts":
/*!**********************************************************!*\
  !*** ./src/color-generators/accent-palette-generator.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultAccentColors: () => (/* reexport safe */ _defaults__WEBPACK_IMPORTED_MODULE_2__.defaultAccentHUEs),
/* harmony export */   generateGlobalAccentPalette: () => (/* binding */ generateGlobalAccentPalette),
/* harmony export */   generateSystemAccentPalette: () => (/* binding */ generateSystemAccentPalette),
/* harmony export */   getGlobalAccent: () => (/* binding */ getGlobalAccent),
/* harmony export */   getShadesTemplate: () => (/* binding */ getShadesTemplate)
/* harmony export */ });
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_token_references__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/token-references */ "./src/utils/token-references.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaults */ "./src/defaults.ts");



function getShadesTemplate(theme, colorName) {
    if (theme == 'light') {
        return {
            "100": {
                "$value": "rgba({200}, 0.125)",
                "$type": "color",
                "description": `Subtle semitransparent accent`
            },
            "200": {
                "$value": "rgba({200}, 0.33)",
                "$type": "color",
                "description": `Light semitransparent accent`
            },
            "300": {
                "$value": "{300}",
                "$type": "color",
                "description": `Non textual elements`
            },
            "400": {
                "$value": "{400}",
                "$type": "color",
                "description": `Base background color`
            },
            "500": {
                "$value": "{500}",
                "$type": "color",
                "description": `Text on light surface`
            },
            "600": {
                "$value": "{100}",
                "$type": "color",
                "description": `Text on dark surface`
            }
        };
    }
    if (theme == 'dark') {
        return {
            "100": {
                "$value": "rgba({200}, 0.20)",
                "$type": "color",
                "description": `Subtle semitransparent accent`
            },
            "200": {
                "$value": "rgba({200}, 0.45)",
                "$type": "color",
                "description": `Light semitransparent accent`
            },
            "300": {
                "$value": "{300}",
                "$type": "color",
                "description": `Non textual elements`
            },
            "400": {
                "$value": "{400}",
                "$type": "color",
                "description": `Base background color`
            },
            "500": {
                "$value": "{100}",
                "$type": "color",
                "description": `Text on light surface`
            },
            "600": {
                "$value": "{100}",
                "$type": "color",
                "description": `Text on dark surface`
            }
        };
    }
    throw new Error(`Theme: ${theme} is invalid`);
}
function getColorParams(theme, params) {
    let colorParams = {
        saturation: params.accentSaturation, //0.9 is default value
        minLuminance: params.accentMinLuminance,
        midLuminance: params.accentMidLuminance,
        maxLuminance: params.accentMaxLuminance,
    };
    if (theme == 'dark') {
        colorParams.saturation = params.accentSaturation * 0.85;
        // colorParams.maxLuminance = params.accentMaxLuminance * 0.85;
    }
    return colorParams;
}
function generateSystemAccentPalette(theme, params) {
    const { saturation, minLuminance, midLuminance, maxLuminance } = getColorParams(theme, params);
    let accents = {
        red: getShadesTemplate(theme, 'red'),
        amber: getShadesTemplate(theme, 'amber'),
        brown: getShadesTemplate(theme, 'brown'),
        green: getShadesTemplate(theme, 'green'),
        teal: getShadesTemplate(theme, 'teal'),
        blue: getShadesTemplate(theme, 'blue'),
        indigo: getShadesTemplate(theme, 'indigo'),
        violet: getShadesTemplate(theme, 'violet'),
        purple: getShadesTemplate(theme, 'purple'),
        pink: getShadesTemplate(theme, 'pink')
    };
    for (const [name, scale] of Object.entries(accents)) {
        const hue = params[name];
        const shades = getGlobalAccent(hue, saturation, minLuminance, midLuminance, maxLuminance);
        accents[name] = getThemeScale(scale, shades);
    }
    return accents;
}
function generateGlobalAccentPalette(theme, params) {
    const { saturation, minLuminance, midLuminance, maxLuminance } = getColorParams(theme, params);
    let accents = {};
    _defaults__WEBPACK_IMPORTED_MODULE_2__.systemAccentList.forEach(name => {
        const hue = params[name];
        accents[name] = getGlobalAccent(hue, saturation, minLuminance, midLuminance, maxLuminance);
    });
    return accents;
}
function getGlobalAccent(hue, saturation, minLuminance, midLiminance, maxLuminance, steps = 7) {
    const range = getRangeOfThree({
        hue,
        saturation,
        minLuminance,
        midLiminance,
        maxLuminance
    });
    const shades = getScale(range, steps);
    return shades;
}
function getThemeScale(input, dictionary) {
    let output = {};
    Object.entries(input).forEach(([shadeNumber, token]) => {
        token.$value = (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_1__.parseReferenceGlobal)(token.$value, dictionary);
        output[shadeNumber] = token;
    });
    return output;
}
/*
    colors: getRangeOfThree()
*/
function getScale(colors, count = 9) {
    let tokens = {};
    // chroma scale returns array of hex values
    const scale = chroma_js__WEBPACK_IMPORTED_MODULE_0___default().scale(colors).colors(count, 'hex');
    scale.forEach((color, index) => {
        tokens[`${index + 1}00`] = {
            $value: color,
            $type: 'color',
            private: true
        };
    });
    return tokens;
}
function getRangeOfThree({ hue, saturation, minLuminance = 0.1, midLiminance = 0.18, maxLuminance = 0.29 }) {
    let color1 = chroma_js__WEBPACK_IMPORTED_MODULE_0___default().hsl([hue * 0.96, saturation * 0.95, 0.5])
        .luminance(maxLuminance);
    // this one always 4.5 : 1 contrast ratio
    let color2 = chroma_js__WEBPACK_IMPORTED_MODULE_0___default().hsl([hue, saturation * 1, 0.5])
        .luminance(midLiminance);
    let color3 = chroma_js__WEBPACK_IMPORTED_MODULE_0___default().hsl([hue * 1.04, saturation * 0.95, 0.5])
        .luminance(minLuminance);
    return [color1, color2, color3];
}



/***/ }),

/***/ "./src/color-generators/neutrals-palette-generator.ts":
/*!************************************************************!*\
  !*** ./src/color-generators/neutrals-palette-generator.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateNeutrals: () => (/* binding */ generateNeutrals),
/* harmony export */   renderNeutrals: () => (/* binding */ renderNeutrals)
/* harmony export */ });
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _swatches_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swatches-generator */ "./src/color-generators/swatches-generator.ts");


function getSaturationModifier(lightness) {
    // visual representation
    // https://www.desmos.com/calculator/02ufrfsuzy
    const offset = 50; // ligthness range is [0, 100], for saturation we need to offset the curve to make [-50, 50] range 
    const magnitude = 70; // sets how much to modify, higher values outputs smaller modifier
    const saturationModifier = 1 + (Math.pow(lightness - offset, 2) / magnitude - Math.pow(offset, 2) / magnitude) / 100;
    return saturationModifier;
}
function generateNeutrals(params) {
    const { hue = 200, saturation = 0.1, min = 4, max = 100, distance } = params || {};
    let tokens = {};
    let value = min;
    while (value <= max) {
        const sMod = 1 / Math.pow(1.3, (max - value) / 100);
        const color = chroma_js__WEBPACK_IMPORTED_MODULE_0___default().hsl(hue, saturation * getSaturationModifier(value), value / 100);
        tokens[`grey-${value}`] = {
            '$value': color.hex(),
            '$type': 'color',
            'private': true
        };
        value++;
    }
    tokens["grey-100"] = {
        "$value": "#FFFFFF",
        '$type': 'color',
        'private': true
    };
    return tokens;
}
function renderNeutrals(colors, name) {
    const existingNode = figma.currentPage.findChild((node) => node.name.startsWith('Global Neutrals'));
    existingNode === null || existingNode === void 0 ? void 0 : existingNode.remove();
    let frame = figma.createFrame();
    frame.layoutMode = 'HORIZONTAL';
    frame.counterAxisSizingMode = "AUTO";
    frame.primaryAxisSizingMode = "AUTO";
    frame.itemSpacing = 0;
    frame.name = name || 'Global Neutrals';
    frame.x = 0;
    frame.y = -156;
    for (const [name, color] of Object.entries(colors)) {
        (0,_swatches_generator__WEBPACK_IMPORTED_MODULE_1__.renderColor)(frame, name, color, colors);
    }
    return frame;
}


/***/ }),

/***/ "./src/color-generators/render-accents.ts":
/*!************************************************!*\
  !*** ./src/color-generators/render-accents.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderAccents: () => (/* binding */ renderAccents)
/* harmony export */ });
/* harmony import */ var _swatches_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swatches-generator */ "./src/color-generators/swatches-generator.ts");

function renderAccents(colors, name) {
    const existingNode = figma.currentPage.findChild((node) => node.name == (name || 'Accent Colours'));
    existingNode === null || existingNode === void 0 ? void 0 : existingNode.remove();
    let frame = figma.createFrame();
    frame.layoutMode = 'HORIZONTAL';
    frame.counterAxisSizingMode = "AUTO";
    frame.primaryAxisSizingMode = "AUTO";
    frame.itemSpacing = 16;
    frame.fills = [];
    frame.name = name || 'Accent Colours';
    frame.x = 0;
    frame.y = 0;
    for (const [name, shades] of Object.entries(colors)) {
        (0,_swatches_generator__WEBPACK_IMPORTED_MODULE_0__.renderShades)(frame, name, shades, colors);
    }
    return frame;
}


/***/ }),

/***/ "./src/color-generators/swatches-generator.ts":
/*!****************************************************!*\
  !*** ./src/color-generators/swatches-generator.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   outputHSL: () => (/* binding */ outputHSL),
/* harmony export */   renderColor: () => (/* binding */ renderColor),
/* harmony export */   renderShades: () => (/* binding */ renderShades)
/* harmony export */ });
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_round_two_digits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/round-two-digits */ "./src/utils/round-two-digits.ts");
/* harmony import */ var _utils_figma_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/figma-colors */ "./src/utils/figma-colors.ts");



function getBoundVariables(node) {
    const boundVariables = Object.entries(node.boundVariables);
    for (const [propName, propValue] of boundVariables) {
        const isArray = Array.isArray(propValue);
        if (isArray) {
            propValue.forEach((alias, i) => {
                processBoundVariable(figma.variables.getVariableById(alias.id));
            });
        }
        else {
            let varId = propValue.id;
            if (typeof varId != 'string') { // it is 
                varId = varId.id;
            }
            processBoundVariable(figma.variables.getVariableById(varId));
        }
    }
}
function processBoundVariable(variable) {
}
function renderShades(parentNode, name, shades, colors) {
    let frame = figma.createFrame();
    frame.resizeWithoutConstraints(320, frame.height);
    frame.layoutMode = "VERTICAL";
    frame.counterAxisSizingMode = "AUTO";
    frame.primaryAxisSizingMode = "AUTO";
    frame.name = name;
    frame.fills = [];
    getBoundVariables(frame);
    for (const [shadeName, color] of Object.entries(shades)) {
        renderColor(frame, `accent/${name}/${shadeName}`, color, colors);
    }
    parentNode.appendChild(frame);
    return parentNode;
}
function renderColor(parentNode, name, color, colors) {
    let frame = figma.createFrame();
    frame.layoutMode = "VERTICAL";
    frame.layoutAlign = 'STRETCH';
    frame.itemSpacing = 4;
    frame.name = name;
    frame.verticalPadding = 16;
    frame.horizontalPadding = 20;
    const { r, g, b, a } = (0,_utils_figma_colors__WEBPACK_IMPORTED_MODULE_2__.parseColorToken)(color, colors);
    const chromaColor = chroma_js__WEBPACK_IMPORTED_MODULE_0___default().gl(r, g, b, a);
    frame.fills = [{ type: 'SOLID', color: { r, g, b }, opacity: a }];
    const opaqueColor = chroma_js__WEBPACK_IMPORTED_MODULE_0___default().gl(r, g, b, 1);
    const mixedColor = chroma_js__WEBPACK_IMPORTED_MODULE_0___default().mix(opaqueColor, "white", 1 - a);
    console.log(name, mixedColor.rgba());
    let contrast = [
        chroma_js__WEBPACK_IMPORTED_MODULE_0___default().contrast("white", mixedColor),
        chroma_js__WEBPACK_IMPORTED_MODULE_0___default().contrast(chroma_js__WEBPACK_IMPORTED_MODULE_0___default().hsl([0, 0, 0.22]), mixedColor)
    ];
    let nameRow = getRow(frame, contrast[0] > 2.5);
    let contrastWhiteRow = getRow(frame, contrast[0] > 2.5);
    let contrastBlackRow = getRow(frame, contrast[0] > 2.5);
    let hslRow = getRow(frame, contrast[0] > 2.5);
    let luminanceRow = getRow(frame, contrast[0] > 2.5);
    // await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    nameRow.root.name = "nameRow";
    contrastWhiteRow.root.name = "contrastWhiteRow";
    contrastBlackRow.root.name = "contrastBlackRow";
    hslRow.root.name = "hslRow";
    luminanceRow.root.name = "luminanceRow";
    contrastWhiteRow.labelNode.characters = "vs white";
    contrastWhiteRow.valueNode.characters = `${(0,_utils_round_two_digits__WEBPACK_IMPORTED_MODULE_1__.roundTwoDigits)(contrast[0])}`;
    contrastBlackRow.labelNode.characters = "vs black";
    contrastBlackRow.valueNode.characters = `${(0,_utils_round_two_digits__WEBPACK_IMPORTED_MODULE_1__.roundTwoDigits)(contrast[1])}`;
    nameRow.labelNode.characters = `{global.${name.replace(/\//g, ".")}}`;
    nameRow.valueNode.characters = ` `;
    hslRow.labelNode.characters = "hsl";
    hslRow.valueNode.characters = `${outputHSL(chromaColor).join(" ")}`;
    luminanceRow.labelNode.characters = "luminance";
    luminanceRow.valueNode.characters = `${Math.round((0,_utils_round_two_digits__WEBPACK_IMPORTED_MODULE_1__.roundTwoDigits)(chromaColor.luminance()) * 100)}%`;
    parentNode.appendChild(frame);
    frame.resize(240, frame.height);
    return parentNode;
}
function getRow(parentNode, isWhite) {
    const textNode = figma.createText();
    const frame = figma.createFrame();
    frame.name = "row";
    frame.layoutMode = "HORIZONTAL";
    frame.layoutAlign = "STRETCH";
    frame.primaryAxisSizingMode = "FIXED";
    frame.primaryAxisAlignItems = "SPACE_BETWEEN";
    frame.counterAxisSizingMode = "AUTO";
    frame.fills = [];
    textNode.name = "label";
    const valueLabel = textNode.clone();
    valueLabel.name = "value-label";
    frame.appendChild(textNode);
    frame.appendChild(valueLabel);
    const color = isWhite ? {
        r: 1, g: 1, b: 1
    } : {
        r: 0, g: 0, b: 0
    };
    textNode.fills = [{ type: 'SOLID', color, opacity: 0.8 }];
    valueLabel.fills = [{ type: 'SOLID', color }];
    parentNode.appendChild(frame);
    return {
        labelNode: textNode, valueNode: valueLabel, root: frame
    };
}
function outputHSL(chromaColor) {
    const [h, s, l] = chromaColor.hsl();
    return [`${Math.round(h) || 0}deg`, `${Math.round((0,_utils_round_two_digits__WEBPACK_IMPORTED_MODULE_1__.roundTwoDigits)(s) * 100)}%`, `${Math.round((0,_utils_round_two_digits__WEBPACK_IMPORTED_MODULE_1__.roundTwoDigits)(l) * 100)}%`];
}


/***/ }),

/***/ "./src/color-tokens.ts":
/*!*****************************!*\
  !*** ./src/color-tokens.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBrandColors: () => (/* binding */ getBrandColors),
/* harmony export */   getComponentColors: () => (/* binding */ getComponentColors),
/* harmony export */   getGlobalNeutrals: () => (/* binding */ getGlobalNeutrals),
/* harmony export */   getSemanticAccentSettings: () => (/* binding */ getSemanticAccentSettings),
/* harmony export */   getThemeColors: () => (/* binding */ getThemeColors)
/* harmony export */ });
/* harmony import */ var _tokens_colors_components_component_tokens_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens/colors/components/component-tokens.json */ "./src/tokens/colors/components/component-tokens.json");
/* harmony import */ var _tokens_colors_system_light_common_tokens_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokens/colors/system/light-common.tokens.json */ "./src/tokens/colors/system/light-common.tokens.json");
/* harmony import */ var _tokens_colors_system_light_2_tokens_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokens/colors/system/light-2.tokens.json */ "./src/tokens/colors/system/light-2.tokens.json");
/* harmony import */ var _tokens_colors_system_light_3_tokens_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tokens/colors/system/light-3.tokens.json */ "./src/tokens/colors/system/light-3.tokens.json");
/* harmony import */ var _tokens_colors_system_light_4_tokens_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tokens/colors/system/light-4.tokens.json */ "./src/tokens/colors/system/light-4.tokens.json");
/* harmony import */ var _tokens_colors_system_dark_common_tokens_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tokens/colors/system/dark-common.tokens.json */ "./src/tokens/colors/system/dark-common.tokens.json");
/* harmony import */ var _tokens_colors_system_dark_elevated_2_tokens_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tokens/colors/system/dark-elevated-2.tokens.json */ "./src/tokens/colors/system/dark-elevated-2.tokens.json");
/* harmony import */ var _tokens_colors_system_dark_elevated_3_tokens_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tokens/colors/system/dark-elevated-3.tokens.json */ "./src/tokens/colors/system/dark-elevated-3.tokens.json");
/* harmony import */ var _tokens_colors_system_dark_elevated_4_tokens_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tokens/colors/system/dark-elevated-4.tokens.json */ "./src/tokens/colors/system/dark-elevated-4.tokens.json");
/* harmony import */ var _tokens_colors_system_dark_base_2_tokens_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tokens/colors/system/dark-base-2.tokens.json */ "./src/tokens/colors/system/dark-base-2.tokens.json");
/* harmony import */ var _tokens_colors_system_dark_base_3_tokens_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tokens/colors/system/dark-base-3.tokens.json */ "./src/tokens/colors/system/dark-base-3.tokens.json");
/* harmony import */ var _tokens_colors_system_dark_base_4_tokens_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tokens/colors/system/dark-base-4.tokens.json */ "./src/tokens/colors/system/dark-base-4.tokens.json");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/flatten-object */ "./src/utils/flatten-object.ts");
/* harmony import */ var _color_generators_accent_palette_generator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./color-generators/accent-palette-generator */ "./src/color-generators/accent-palette-generator.ts");
/* harmony import */ var _color_generators_neutrals_palette_generator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./color-generators/neutrals-palette-generator */ "./src/color-generators/neutrals-palette-generator.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./defaults */ "./src/defaults.ts");
/* harmony import */ var _utils_clone__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/clone */ "./src/utils/clone.ts");

















let GlobalNeutrals;
function getSemanticAccentSettings() {
    return _defaults__WEBPACK_IMPORTED_MODULE_15__.defaultSemanticAccents;
}
function getGlobalNeutrals() {
    return GlobalNeutrals;
}
function getComponentColors() {
    return (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(_tokens_colors_components_component_tokens_json__WEBPACK_IMPORTED_MODULE_0__);
}
function getBrandColors(name, accentShades, flat) {
    const palette = {
        primary: generateSemanticShades(name, accentShades)
    };
    return flat ? (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(palette) : palette;
}
function getThemeColors(theme, formData) {
    let params = Object.assign({}, normalizeFormData(formData));
    GlobalNeutrals = (0,_color_generators_neutrals_palette_generator__WEBPACK_IMPORTED_MODULE_14__.generateNeutrals)({
        hue: params.hue,
        saturation: params.saturation,
        distance: params.distance
    });
    const semanticAccents = {
        primary: params.primary,
        info: params.info,
        success: params.success,
        warning: params.warning,
        danger: params.danger,
    };
    let lightAccentTokens = (0,_color_generators_accent_palette_generator__WEBPACK_IMPORTED_MODULE_13__.generateSystemAccentPalette)('light', params);
    let darkAccentTokens = (0,_color_generators_accent_palette_generator__WEBPACK_IMPORTED_MODULE_13__.generateSystemAccentPalette)('dark', params);
    const lightSemanticTokens = generateSemanticPalette(semanticAccents, lightAccentTokens);
    const darkSemanticTokens = generateSemanticPalette(semanticAccents, darkAccentTokens);
    const lightCommonTokens = Object.assign(Object.assign({ accent: lightAccentTokens }, _tokens_colors_system_light_common_tokens_json__WEBPACK_IMPORTED_MODULE_1__), lightSemanticTokens);
    const darkCommonTokens = Object.assign(Object.assign({ accent: darkAccentTokens }, _tokens_colors_system_dark_common_tokens_json__WEBPACK_IMPORTED_MODULE_5__), darkSemanticTokens);
    let commonColors = {};
    let themeColors = {};
    if (theme === "lightBase") {
        commonColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(lightCommonTokens);
        if (params.distance === 0.02) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(_tokens_colors_system_light_2_tokens_json__WEBPACK_IMPORTED_MODULE_2__);
        }
        if (params.distance === 0.03) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(_tokens_colors_system_light_3_tokens_json__WEBPACK_IMPORTED_MODULE_3__);
        }
        if (params.distance === 0.04) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(_tokens_colors_system_light_4_tokens_json__WEBPACK_IMPORTED_MODULE_4__);
        }
    }
    if (theme === "darkElevated") {
        commonColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(darkCommonTokens);
        if (params.distance === 0.02) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(_tokens_colors_system_dark_elevated_2_tokens_json__WEBPACK_IMPORTED_MODULE_6__);
        }
        if (params.distance === 0.03) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(_tokens_colors_system_dark_elevated_3_tokens_json__WEBPACK_IMPORTED_MODULE_7__);
        }
        if (params.distance === 0.04) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(_tokens_colors_system_dark_elevated_4_tokens_json__WEBPACK_IMPORTED_MODULE_8__);
        }
    }
    if (theme === "darkBase") {
        commonColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(darkCommonTokens);
        if (params.distance === 0.02) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(_tokens_colors_system_dark_base_2_tokens_json__WEBPACK_IMPORTED_MODULE_9__);
        }
        if (params.distance === 0.03) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(_tokens_colors_system_dark_base_3_tokens_json__WEBPACK_IMPORTED_MODULE_10__);
        }
        if (params.distance === 0.04) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_12__.flattenObject)(_tokens_colors_system_dark_base_4_tokens_json__WEBPACK_IMPORTED_MODULE_11__);
        }
    }
    return Object.assign(Object.assign({}, commonColors), themeColors);
}
function generateSemanticShades(aliasName, accentShades) {
    let output = {};
    for (var a = 1, b = 7; a < b; a++) {
        output[`${a}00`] = {
            "$value": `{accent.${aliasName}.${a}00}`,
            "$type": "color",
            "description": accentShades[`${a}00`].description
        };
    }
    return output;
}
function generateSemanticPalette(accents, palette) {
    let result = {};
    Object.entries(accents).forEach(([name, alias]) => {
        result[name] = generateSemanticShades(alias, palette[alias]);
    });
    return result;
}
function normalizeFormData(formData) {
    let normalizedData = (0,_utils_clone__WEBPACK_IMPORTED_MODULE_16__._clone)(formData);
    const numberTypes = [
        'hue',
        'saturation',
        'distance',
        'red',
        'amber',
        'brown',
        'green',
        'teal',
        'blue',
        'indigo',
        'violet',
        'purple',
        'pink',
        'accentSaturation',
        'accentMaxLuminance',
        'accentMidLuminance',
        'accentMinLuminance'
    ];
    numberTypes.forEach(p => {
        if (typeof formData[p] == 'string') {
            normalizedData[p] = parseFloat(formData[p]);
        }
    });
    return normalizedData;
}


/***/ }),

/***/ "./src/defaults.ts":
/*!*************************!*\
  !*** ./src/defaults.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultAccentHUEs: () => (/* binding */ defaultAccentHUEs),
/* harmony export */   defaultSemanticAccents: () => (/* binding */ defaultSemanticAccents),
/* harmony export */   defaultSettings: () => (/* binding */ defaultSettings),
/* harmony export */   iconSizeName: () => (/* binding */ iconSizeName),
/* harmony export */   iconSizeValues: () => (/* binding */ iconSizeValues),
/* harmony export */   radiiSizeName: () => (/* binding */ radiiSizeName),
/* harmony export */   radiiSizeValues: () => (/* binding */ radiiSizeValues),
/* harmony export */   spacingSizeName: () => (/* binding */ spacingSizeName),
/* harmony export */   systemAccentList: () => (/* binding */ systemAccentList),
/* harmony export */   themes: () => (/* binding */ themes),
/* harmony export */   typographySizeName: () => (/* binding */ typographySizeName),
/* harmony export */   typographySizeValues: () => (/* binding */ typographySizeValues)
/* harmony export */ });
const themes = [
    'lightBase',
    'darkBase',
    'darkElevated'
];
const radiiSizeName = [
    "compact",
    "base",
    "large",
];
const radiiSizeValues = [
    4,
    6,
    8,
];
const spacingSizeName = [
    "compact",
    "base",
    "large",
    "touch",
];
const typographySizeName = [
    "compact",
    "base",
    "large",
];
const typographySizeValues = [
    "13/16",
    "15/20",
    "17/24",
];
const iconSizeName = [
    "base",
    "touch"
];
const iconSizeValues = [
    "16",
    "24",
];
const systemAccentList = [
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
];
const defaultAccentHUEs = {
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
};
const defaultSettings = {
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
    singleCollection: false
};
const defaultSemanticAccents = {
    primary: 'blue',
    info: 'teal',
    success: 'green',
    warning: 'amber',
    danger: 'red'
};


/***/ }),

/***/ "./src/effect-tokens.ts":
/*!******************************!*\
  !*** ./src/effect-tokens.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elevation: () => (/* binding */ elevation),
/* harmony export */   getElevationTokens: () => (/* binding */ getElevationTokens)
/* harmony export */ });
/* harmony import */ var _tokens_effects_elevation_tokens_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens/effects/elevation.tokens.json */ "./src/tokens/effects/elevation.tokens.json");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/flatten-object */ "./src/utils/flatten-object.ts");


const elevation = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_1__.flattenObject)(_tokens_effects_elevation_tokens_json__WEBPACK_IMPORTED_MODULE_0__);
function getElevationTokens() {
    return _tokens_effects_elevation_tokens_json__WEBPACK_IMPORTED_MODULE_0__;
}


/***/ }),

/***/ "./src/fix-layers.ts":
/*!***************************!*\
  !*** ./src/fix-layers.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processComponents: () => (/* binding */ processComponents)
/* harmony export */ });
/* harmony import */ var _utils_delay_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/delay-async */ "./src/utils/delay-async.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function processComponents() {
    return __awaiter(this, void 0, void 0, function* () {
        figma.skipInvisibleInstanceChildren = true;
        let pageComponents = [];
        if (figma.currentPage.selection.length) {
            figma.currentPage.selection.forEach((node) => {
                if (node.type == 'COMPONENT') {
                    pageComponents = pageComponents.concat(node);
                }
                else if (node.findAllWithCriteria) {
                    const components = node.findAllWithCriteria({ types: ['COMPONENT'] });
                    pageComponents = pageComponents.concat(components);
                }
            });
        }
        else {
            pageComponents = figma.currentPage.findAllWithCriteria({ types: ['COMPONENT'] });
        }
        const size = pageComponents.length;
        let count = 0;
        while (pageComponents.length) {
            const componentFrame = pageComponents.shift();
            figma.skipInvisibleInstanceChildren = false;
            const children = componentFrame.findAll((n) => {
                return n.layoutPositioning == 'ABSOLUTE'
                    && n.width > 0
                    && n.height > 0
                    && n.constraints.horizontal === 'STRETCH'
                    && n.constraints.vertical === 'STRETCH';
            });
            yield fixLayers(children, componentFrame);
            console.log(`%cComponent ${count++} / ${size}`, `color: #0773DF; font-weight: bold;`);
        }
    });
}
function fixLayers(nodes, component) {
    return __awaiter(this, void 0, void 0, function* () {
        let node, parent, offsetX, offsetY, height, width;
        let updated = 0, skipped = 0, failed = 0;
        console.log(`Working on ${component.name}`);
        try {
            while (nodes.length) {
                console.log(`Remaining nodes: ${nodes.length}`);
                node = nodes.shift();
                if (checkInstance(node, component)) {
                    skipped++;
                    continue;
                }
                parent = node.parent;
                offsetX = node.x;
                offsetY = node.y;
                height = parent.height - 2 * offsetY;
                width = parent.width - 2 * offsetX;
                node.resize(width * 0.8, height * 0.8);
                yield (0,_utils_delay_async__WEBPACK_IMPORTED_MODULE_0__.delayAsync)(10);
                node.resize(width, height);
                updated++;
                yield (0,_utils_delay_async__WEBPACK_IMPORTED_MODULE_0__.delayAsync)(10);
            }
            console.log(`Resized: ${updated}, Skipped: ${skipped}`);
        }
        catch (e) {
            failed++;
        }
    });
}
function checkInstance(targetFrame, parentFrame) {
    let node = targetFrame.parent;
    while (node != parentFrame) {
        if (node.type == 'INSTANCE') {
            return true;
        }
        node = node.parent;
    }
    return false;
}


/***/ }),

/***/ "./src/opacity-tokens.ts":
/*!*******************************!*\
  !*** ./src/opacity-tokens.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   opacity: () => (/* binding */ opacity)
/* harmony export */ });
/* harmony import */ var _tokens_opacity_opacity_tokens_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens/opacity/opacity.tokens.json */ "./src/tokens/opacity/opacity.tokens.json");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/flatten-object */ "./src/utils/flatten-object.ts");


const opacity = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_1__.flattenObject)(_tokens_opacity_opacity_tokens_json__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/radii-tokens.ts":
/*!*****************************!*\
  !*** ./src/radii-tokens.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base: () => (/* binding */ base),
/* harmony export */   compact: () => (/* binding */ compact),
/* harmony export */   large: () => (/* binding */ large)
/* harmony export */ });
/* harmony import */ var _tokens_radii_base_tokens_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens/radii/base.tokens.json */ "./src/tokens/radii/base.tokens.json");
/* harmony import */ var _tokens_radii_compact_tokens_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokens/radii/compact.tokens.json */ "./src/tokens/radii/compact.tokens.json");
/* harmony import */ var _tokens_radii_large_tokens_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokens/radii/large.tokens.json */ "./src/tokens/radii/large.tokens.json");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/flatten-object */ "./src/utils/flatten-object.ts");




const base = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_3__.flattenObject)(_tokens_radii_base_tokens_json__WEBPACK_IMPORTED_MODULE_0__);
const compact = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_3__.flattenObject)(_tokens_radii_compact_tokens_json__WEBPACK_IMPORTED_MODULE_1__);
const large = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_3__.flattenObject)(_tokens_radii_large_tokens_json__WEBPACK_IMPORTED_MODULE_2__);


/***/ }),

/***/ "./src/sizing-tokens.ts":
/*!******************************!*\
  !*** ./src/sizing-tokens.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base: () => (/* binding */ base),
/* harmony export */   global: () => (/* binding */ global),
/* harmony export */   touch: () => (/* binding */ touch)
/* harmony export */ });
/* harmony import */ var _tokens_sizing_global_tokens_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens/sizing/global.tokens.json */ "./src/tokens/sizing/global.tokens.json");
/* harmony import */ var _tokens_sizing_base_tokens_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokens/sizing/base.tokens.json */ "./src/tokens/sizing/base.tokens.json");
/* harmony import */ var _tokens_sizing_touch_tokens_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokens/sizing/touch.tokens.json */ "./src/tokens/sizing/touch.tokens.json");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/flatten-object */ "./src/utils/flatten-object.ts");




const base = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_3__.flattenObject)(_tokens_sizing_base_tokens_json__WEBPACK_IMPORTED_MODULE_1__);
const touch = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_3__.flattenObject)(_tokens_sizing_touch_tokens_json__WEBPACK_IMPORTED_MODULE_2__);
const global = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_3__.flattenObject)(_tokens_sizing_global_tokens_json__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/spacing-tokens.ts":
/*!*******************************!*\
  !*** ./src/spacing-tokens.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base: () => (/* binding */ base),
/* harmony export */   compact: () => (/* binding */ compact),
/* harmony export */   large: () => (/* binding */ large),
/* harmony export */   touch: () => (/* binding */ touch)
/* harmony export */ });
/* harmony import */ var _tokens_spacing_base_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens/spacing/base.json */ "./src/tokens/spacing/base.json");
/* harmony import */ var _tokens_spacing_compact_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokens/spacing/compact.json */ "./src/tokens/spacing/compact.json");
/* harmony import */ var _tokens_spacing_large_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokens/spacing/large.json */ "./src/tokens/spacing/large.json");
/* harmony import */ var _tokens_spacing_touch_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tokens/spacing/touch.json */ "./src/tokens/spacing/touch.json");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/flatten-object */ "./src/utils/flatten-object.ts");





const base = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_4__.flattenObject)(_tokens_spacing_base_json__WEBPACK_IMPORTED_MODULE_0__);
const compact = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_4__.flattenObject)(_tokens_spacing_compact_json__WEBPACK_IMPORTED_MODULE_1__);
const large = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_4__.flattenObject)(_tokens_spacing_large_json__WEBPACK_IMPORTED_MODULE_2__);
const touch = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_4__.flattenObject)(_tokens_spacing_touch_json__WEBPACK_IMPORTED_MODULE_3__);


/***/ }),

/***/ "./src/typescale-tokens.ts":
/*!*********************************!*\
  !*** ./src/typescale-tokens.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base: () => (/* binding */ base),
/* harmony export */   compact: () => (/* binding */ compact),
/* harmony export */   getFontDetails: () => (/* binding */ getFontDetails),
/* harmony export */   getTypograohyTokens: () => (/* binding */ getTypograohyTokens),
/* harmony export */   large: () => (/* binding */ large)
/* harmony export */ });
/* harmony import */ var _tokens_typography_styles_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens/typography/styles.json */ "./src/tokens/typography/styles.json");
/* harmony import */ var _tokens_typography_typeface_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokens/typography/typeface.json */ "./src/tokens/typography/typeface.json");
/* harmony import */ var _tokens_typography_major_third_typescale_base_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokens/typography/major-third/typescale-base.json */ "./src/tokens/typography/major-third/typescale-base.json");
/* harmony import */ var _tokens_typography_major_third_typescale_compact_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tokens/typography/major-third/typescale-compact.json */ "./src/tokens/typography/major-third/typescale-compact.json");
/* harmony import */ var _tokens_typography_major_third_typescale_large_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tokens/typography/major-third/typescale-large.json */ "./src/tokens/typography/major-third/typescale-large.json");
/* harmony import */ var _tokens_typography_minor_third_typescale_base_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tokens/typography/minor-third/typescale-base.json */ "./src/tokens/typography/minor-third/typescale-base.json");
/* harmony import */ var _tokens_typography_minor_third_typescale_compact_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tokens/typography/minor-third/typescale-compact.json */ "./src/tokens/typography/minor-third/typescale-compact.json");
/* harmony import */ var _tokens_typography_minor_third_typescale_large_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tokens/typography/minor-third/typescale-large.json */ "./src/tokens/typography/minor-third/typescale-large.json");
/* harmony import */ var _tokens_typography_major_second_typescale_base_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tokens/typography/major-second/typescale-base.json */ "./src/tokens/typography/major-second/typescale-base.json");
/* harmony import */ var _tokens_typography_major_second_typescale_compact_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tokens/typography/major-second/typescale-compact.json */ "./src/tokens/typography/major-second/typescale-compact.json");
/* harmony import */ var _tokens_typography_major_second_typescale_large_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tokens/typography/major-second/typescale-large.json */ "./src/tokens/typography/major-second/typescale-large.json");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/flatten-object */ "./src/utils/flatten-object.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};












const base = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_minor_third_typescale_base_json__WEBPACK_IMPORTED_MODULE_5__);
const compact = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_minor_third_typescale_compact_json__WEBPACK_IMPORTED_MODULE_6__);
const large = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_minor_third_typescale_large_json__WEBPACK_IMPORTED_MODULE_7__);
const styles = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_styles_json__WEBPACK_IMPORTED_MODULE_0__);
const tokens = {
    majorThird: {
        base: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_major_third_typescale_base_json__WEBPACK_IMPORTED_MODULE_2__),
        compact: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_major_third_typescale_compact_json__WEBPACK_IMPORTED_MODULE_3__),
        large: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_major_third_typescale_large_json__WEBPACK_IMPORTED_MODULE_4__),
    },
    minorThird: {
        base: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_minor_third_typescale_base_json__WEBPACK_IMPORTED_MODULE_5__),
        compact: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_minor_third_typescale_compact_json__WEBPACK_IMPORTED_MODULE_6__),
        large: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_minor_third_typescale_large_json__WEBPACK_IMPORTED_MODULE_7__),
    },
    majorSecond: {
        base: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_major_second_typescale_base_json__WEBPACK_IMPORTED_MODULE_8__),
        compact: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_major_second_typescale_compact_json__WEBPACK_IMPORTED_MODULE_9__),
        large: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_major_second_typescale_large_json__WEBPACK_IMPORTED_MODULE_10__),
    },
};
function getTypograohyTokens(size, scale = "minorThird") {
    let scaleTokens = tokens[scale][size];
    return Object.assign(Object.assign(Object.assign({}, (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_typeface_json__WEBPACK_IMPORTED_MODULE_1__)), scaleTokens), styles);
}
function getFontDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const styles = yield figma.getLocalTextStylesAsync();
        if (styles.length) {
            return getFontDetailsLocal(styles);
        }
        else {
            return getFontDetailsTokens();
        }
    });
}
function getFontDetailsTokens() {
    let names = [];
    const tokens = _tokens_typography_typeface_json__WEBPACK_IMPORTED_MODULE_1__;
    const family = _tokens_typography_typeface_json__WEBPACK_IMPORTED_MODULE_1__["font-family"].primary.$value;
    for (let [name, fontWeight] of Object.entries(_tokens_typography_typeface_json__WEBPACK_IMPORTED_MODULE_1__["font-weight"])) {
        names.push({ family, style: fontWeight.$value });
    }
    return names;
}
function getFontDetailsLocal(styles) {
    const fontFamilies = [];
    const fontStyles = [];
    for (const style of styles) {
        const fontFamily = style.fontName.family;
        const fontStyle = style.fontName.style;
        if (fontFamilies.includes(fontFamily) == false) {
            fontFamilies.push(fontFamily);
        }
        if (fontStyles.includes(fontStyle) == false) {
            fontStyles.push(fontStyle);
        }
    }
    let names = [];
    fontFamilies.forEach(family => {
        fontStyles.forEach(style => {
            names.push({ family, style });
        });
    });
    return names;
}


/***/ }),

/***/ "./src/utils/clone.ts":
/*!****************************!*\
  !*** ./src/utils/clone.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _clone: () => (/* binding */ _clone)
/* harmony export */ });
function _clone(val) {
    const type = typeof val;
    if (val === null) {
        return null;
    }
    else if (type === 'undefined' || type === 'number' ||
        type === 'string' || type === 'boolean') {
        return val;
    }
    else if (type === 'object') {
        if (val instanceof Array) {
            return val.map(x => _clone(x));
        }
        else if (val instanceof Uint8Array) {
            return new Uint8Array(val);
        }
        else {
            let o = {};
            for (const key in val) {
                o[key] = _clone(val[key]);
            }
            return o;
        }
    }
    throw 'unknown';
}


/***/ }),

/***/ "./src/utils/delay-async.ts":
/*!**********************************!*\
  !*** ./src/utils/delay-async.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   delayAsync: () => (/* binding */ delayAsync)
/* harmony export */ });
function delayAsync(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


/***/ }),

/***/ "./src/utils/export-style-templates.ts":
/*!*********************************************!*\
  !*** ./src/utils/export-style-templates.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exportStyleTemplates: () => (/* binding */ exportStyleTemplates)
/* harmony export */ });
/* harmony import */ var _delay_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delay-async */ "./src/utils/delay-async.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

let totalLayersCount = 0;
let reboundLayersCount = 0;
let skippedLayersCount = 0;
let missingLayersCount = 0;
function exportStyleTemplates() {
    return __awaiter(this, void 0, void 0, function* () {
        totalLayersCount = 0;
        reboundLayersCount = 0;
        skippedLayersCount = 0;
        let _nodes = [];
        figma.skipInvisibleInstanceChildren = false;
        if (figma.currentPage.selection.length == 0) {
            figma.notify("Select at least one layer and try again");
            return false;
        }
        figma.currentPage.selection.forEach((node) => {
            if (node.type == "COMPONENT") {
                _nodes.push(node);
                return;
            }
            if ('findAllWithCriteria' in node) {
                const componentNodes = node.findAllWithCriteria({ types: ["COMPONENT"] });
                _nodes = _nodes.concat(componentNodes);
            }
        });
        const containerFrame = yield createFrameNode();
        const localVariables = yield figma.variables.getLocalVariablesAsync();
        containerFrame.fills = [
            figma.variables.setBoundVariableForPaint({ type: "SOLID", color: { r: 1, g: 1, b: 1 } }, "color", localVariables.find(n => n.name == 'fill/base/300'))
        ];
        containerFrame.layoutMode = 'VERTICAL';
        containerFrame.layoutSizingHorizontal = 'HUG';
        containerFrame.layoutSizingVertical = 'HUG';
        containerFrame.paddingBottom = 80;
        containerFrame.paddingLeft = 96;
        containerFrame.paddingRight = 96;
        containerFrame.paddingTop = 0;
        containerFrame.setBoundVariable('topLeftRadius', localVariables.find(n => n.name == 'radii/xl2'));
        containerFrame.setBoundVariable('topRightRadius', localVariables.find(n => n.name == 'radii/xl2'));
        containerFrame.setBoundVariable('bottomLeftRadius', localVariables.find(n => n.name == 'radii/xl2'));
        containerFrame.setBoundVariable('bottomRightRadius', localVariables.find(n => n.name == 'radii/xl2'));
        console.log(_nodes);
        const total = _nodes.length;
        totalLayersCount = total;
        while (_nodes.length) {
            const componentNode = _nodes.shift();
            // (70 - 44) / 70
            const percent = Math.round(((total - _nodes.length) / total) * 100);
            const msg = `${percent}% done. Working on layer ${total - _nodes.length} out of ${total}`;
            console.log(msg);
            containerFrame.appendChild(yield checkNode(componentNode));
            yield (0,_delay_async__WEBPACK_IMPORTED_MODULE_0__.delayAsync)(10);
        }
        figma.currentPage.selection = [containerFrame];
        return total;
    });
}
function checkNode(node) {
    return __awaiter(this, void 0, void 0, function* () {
        let parent;
        if (node.parent.type == 'COMPONENT_SET') {
            parent = yield getFrame(node.parent);
        }
        const frame = processComponentNode(node);
        if (parent) {
            parent.appendChild(frame);
            frame.x = node.x;
            frame.y = node.y;
            return parent;
        }
        return frame;
    });
}
function processComponentNode(node) {
    const instance = node.createInstance();
    const frame = instance.detachInstance();
    frame.name = node.name;
    return frame;
}
const componentSetFramesCache = new Map();
function getFrame(cmpSet) {
    return __awaiter(this, void 0, void 0, function* () {
        const chachedFrame = componentSetFramesCache.get(cmpSet.name);
        if (chachedFrame) {
            return chachedFrame;
        }
        const frame = yield createFrameNode();
        frame.name = cmpSet.name;
        frame.resize(cmpSet.width, cmpSet.height);
        componentSetFramesCache.set(cmpSet.name, frame);
        figma.currentPage.selection = [frame];
        return frame;
    });
}
function createFrameNode() {
    return __awaiter(this, void 0, void 0, function* () {
        const frame = figma.createFrame();
        const localVariables = yield figma.variables.getLocalVariablesAsync();
        frame.fills = [
            figma.variables.setBoundVariableForPaint({ type: "SOLID", color: { r: 1, g: 1, b: 1 } }, "color", localVariables.find(n => n.name == 'card/bg/primary'))
        ];
        frame.strokes = [
            figma.variables.setBoundVariableForPaint({ type: "SOLID", color: { r: 1, g: 1, b: 1 } }, "color", localVariables.find(n => n.name == 'card/border/outer'))
        ];
        frame.setBoundVariable('topLeftRadius', localVariables.find(n => n.name == 'radii/xl'));
        frame.setBoundVariable('topRightRadius', localVariables.find(n => n.name == 'radii/xl'));
        frame.setBoundVariable('bottomLeftRadius', localVariables.find(n => n.name == 'radii/xl'));
        frame.setBoundVariable('bottomRightRadius', localVariables.find(n => n.name == 'radii/xl'));
        frame.x = -10000;
        frame.y = -10000;
        return frame;
    });
}


/***/ }),

/***/ "./src/utils/figma-colors.ts":
/*!***********************************!*\
  !*** ./src/utils/figma-colors.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertFigmaColorToRgb: () => (/* binding */ convertFigmaColorToRgb),
/* harmony export */   parseColorToken: () => (/* binding */ parseColorToken),
/* harmony export */   parseColorValue: () => (/* binding */ parseColorValue)
/* harmony export */ });
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _token_references__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-references */ "./src/utils/token-references.ts");


const hexColorRegex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
function convertFigmaColorToRgb(input, format) {
    const { r, g, b, a } = input;
    //figma uses float 0...1 vs standard 0...255
    const figmaColorTransformed = {
        r: input.r * 255,
        g: input.g * 255,
        b: input.b * 255,
        a: input.a
    };
    let color = chroma_js__WEBPACK_IMPORTED_MODULE_0___default().gl(r, g, b, a);
    switch (format) {
        case 'hex': {
            return color.hex();
        }
        case 'hsl': {
            return color.css('hsl');
        }
        default: {
            return color.css();
        }
    }
}
function parseColorValue(input, adjustments) {
    let color;
    try {
        if (input.startsWith('rgb')) {
            const rgbValues = input.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
            if (hexColorRegex.test(rgbValues[0])) {
                color = chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(rgbValues[0]); // hexToFigmaRGB(rgbValues[0]);
                const alpha = parseFloat(rgbValues[1]);
                color = color.alpha(alpha);
            }
            else {
                color = chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(input);
            }
        }
        else {
            color = chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(input);
        }
    }
    catch (e) {
        console.error(e);
        debugger;
        return null;
    }
    if (adjustments) {
        if (adjustments.h) {
            color = color.set('hsl.h', `${adjustments.h}`);
        }
        if (adjustments.s) {
            color = color.set('hsl.s', `${adjustments.s}`);
        }
        if (adjustments.l) {
            color = color.set('hsl.l', `${adjustments.l}`);
        }
        if (adjustments.a) {
            color = color.set('hsl.a', `${adjustments.a}`);
        }
    }
    const [r, g, b, a] = color.gl();
    return {
        gl: { r, g, b, a },
        rgb: color.css(),
        hsl: color.css('hsl'),
        hex: color.hex()
    };
}
function parseColorToken(token, dictionary, output = 'gl') {
    let color = token.$value;
    color = (0,_token_references__WEBPACK_IMPORTED_MODULE_1__.parseReferenceGlobal)(color.trim(), dictionary);
    const result = parseColorValue(color, token.adjustments);
    if (result) {
        return result[output];
    }
    else {
        debugger;
        throw new Error("Invalid color format");
    }
}


/***/ }),

/***/ "./src/utils/figma-effect-styles.ts":
/*!******************************************!*\
  !*** ./src/utils/figma-effect-styles.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   importEffectStyles: () => (/* binding */ importEffectStyles)
/* harmony export */ });
/* harmony import */ var _token_references__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-references */ "./src/utils/token-references.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/*
    This method reads shadow color values directly from Figma Variables
*/
function importEffectStyles(tokens) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const [name, tokenData] of Object.entries(tokens)) {
            let token = tokenData;
            if (token.$type == 'boxShadow') {
                let figmaStyle = yield getStyleByName(name);
                if (!figmaStyle) {
                    figmaStyle = figma.createEffectStyle();
                }
                const values = token.$value;
                const effects = [];
                for (const value of values) {
                    const figmaVariable = yield (0,_token_references__WEBPACK_IMPORTED_MODULE_0__.findVariableByReferences)(value.color);
                    if (!figmaVariable) {
                        debugger;
                    }
                    const collectionID = figmaVariable.variableCollectionId;
                    const collection = yield figma.variables.getVariableCollectionByIdAsync(collectionID);
                    const defaultMode = collection.modes[0].modeId;
                    const figmaEffect = Object.assign({}, value, {
                        color: figmaVariable.valuesByMode[defaultMode]
                    });
                    const effect = convertEffectStyleToFigma(figmaEffect);
                    const effectVar = figma.variables.setBoundVariableForEffect(effect, 'color', figmaVariable);
                    effectVar.spread = effect.spread;
                    effects.push(effectVar);
                }
                figmaStyle.name = name;
                figmaStyle.effects = effects;
                figmaStyle.description = token.description || figmaStyle.description;
                // figmaStyle.documentationLinks = token.documentationLink ? [token.documentationLink] : figmaStyle.documentationLinks;
            }
        }
    });
}
function getLocalStyles() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield figma.getLocalEffectStylesAsync();
    });
}
;
function getStyleByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const stylesByType = yield getLocalStyles();
        const match = stylesByType.find((style) => style.name === name);
        if (match) {
            return match;
        }
        else {
            return null;
        }
    });
}
;
function parseBoolean(val) {
    return val !== "false";
}
function convertEffectStyleToFigma(value) {
    return {
        type: "DROP_SHADOW",
        color: value.color,
        offset: {
            x: parseFloat(value.x),
            y: parseFloat(value.y)
        },
        radius: parseFloat(value.blur),
        spread: parseFloat(value.spread),
        visible: true,
        blendMode: "NORMAL",
        showShadowBehindNode: parseBoolean(value.showShadowBehindNode)
    };
}


/***/ }),

/***/ "./src/utils/figma-text-styles.ts":
/*!****************************************!*\
  !*** ./src/utils/figma-text-styles.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertTextStyleToFigma: () => (/* binding */ convertTextStyleToFigma),
/* harmony export */   importTextStyles: () => (/* binding */ importTextStyles)
/* harmony export */ });
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone */ "./src/utils/clone.ts");
/* harmony import */ var _token_references__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-references */ "./src/utils/token-references.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function importTextStyles(tokens) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const [name, token] of Object.entries(tokens)) {
            if (token.$type == 'typography') {
                let textStyle = yield getStyleByName(name);
                let newStyle = false;
                if (!textStyle) {
                    textStyle = figma.createTextStyle();
                    newStyle = true;
                }
                const resolved = parseValues(token.$value, tokens);
                const normalized = convertTextStyleToFigma(name, resolved);
                if (!newStyle) {
                    normalized.fontName = (0,_clone__WEBPACK_IMPORTED_MODULE_0__._clone)(textStyle.fontName);
                }
                Object.keys(normalized).forEach(key => {
                    textStyle[key] = normalized[key];
                });
            }
        }
    });
}
function parseValues(value, dictionary) {
    let output = {};
    Object.entries(value).forEach(([key, value]) => {
        const resolvedValue = (0,_token_references__WEBPACK_IMPORTED_MODULE_1__.parseReferenceGlobal)(value, dictionary);
        output[key] = resolvedValue;
    });
    return output;
}
function getLocalStyles() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield figma.getLocalTextStylesAsync();
    });
}
;
function getStyleByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const stylesByType = yield getLocalStyles();
        const match = stylesByType.find((style) => style.name === name);
        if (match) {
            return match;
        }
        else {
            return null;
        }
    });
}
;
function convertTextCaseToFigma(value) {
    switch (value.toLowerCase()) {
        case 'uppercase':
        case 'upper':
            return 'UPPER';
        case 'lowercase':
        case 'lower':
            return 'LOWER';
        case 'capitalize':
        case 'title':
            return 'TITLE';
        case 'small-caps':
        case 'small_caps':
            return 'SMALL_CAPS';
        case 'all-small-caps':
        case 'small_caps_forced':
            return 'SMALL_CAPS_FORCED';
        default:
            return 'ORIGINAL';
    }
}
function convertTextDecorationToFigma(value) {
    switch (value.toLowerCase()) {
        case 'underline':
            return 'UNDERLINE';
        case 'line-through':
        case 'strikethrough':
            return 'STRIKETHROUGH';
        default:
            return 'NONE';
    }
}
function convertTextStyleToFigma(name, values) {
    let textStyle = {
        'name': name,
        'fontSize': parseFloat(values.fontSize),
        'textDecoration': convertTextDecorationToFigma(values.textDecoration),
        'fontName': {
            family: values.fontFamily,
            style: values.fontWeight
        },
        'letterSpacing': {
            unit: values.letterSpacing.includes('%') ? "PERCENT" : "PIXELS",
            value: parseInt(values.letterSpacing)
        },
        'lineHeight': {
            unit: values.lineHeight.includes('%') ? "PERCENT" : "PIXELS",
            value: parseFloat(values.lineHeight)
        },
        leadingTrim: "NONE",
        paragraphIndent: 0,
        'paragraphSpacing': parseInt(values.paragraphSpacing),
        listSpacing: 0,
        hangingPunctuation: false,
        hangingList: false,
        'textCase': convertTextCaseToFigma(values.textCase)
    };
    return textStyle;
}


/***/ }),

/***/ "./src/utils/figma-variables.ts":
/*!**************************************!*\
  !*** ./src/utils/figma-variables.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findFigmaVariableByName: () => (/* binding */ findFigmaVariableByName),
/* harmony export */   getFigmaCollection: () => (/* binding */ getFigmaCollection),
/* harmony export */   resolveVariableType: () => (/* binding */ resolveVariableType),
/* harmony export */   setFigmaVariable: () => (/* binding */ setFigmaVariable)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function findVariableInCollection(variableName, collectionName) {
    return __awaiter(this, void 0, void 0, function* () {
        const figmaCollections = yield figma.variables.getLocalVariableCollectionsAsync();
        const collection = figmaCollections.find(collection => collection.name === collectionName);
        let figmaVirable;
        if (collection) {
            for (const id of collection.variableIds) {
                const figmaVariableInColleciton = yield figma.variables.getVariableByIdAsync(id);
                const match = (figmaVariableInColleciton === null || figmaVariableInColleciton === void 0 ? void 0 : figmaVariableInColleciton.name) === variableName;
                if (match) {
                    figmaVirable = figmaVariableInColleciton;
                    break;
                }
            }
            ;
        }
        return figmaVirable;
    });
}
function findFigmaVariableByName(variableName, collectionName) {
    return __awaiter(this, void 0, void 0, function* () {
        if (collectionName) {
            return yield findVariableInCollection(variableName, collectionName);
        }
        else {
            const figmaVariables = yield figma.variables.getLocalVariablesAsync();
            return figmaVariables.find(variable => variable.name === variableName);
        }
    });
}
function getFigmaCollection(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const figmaCollections = yield figma.variables.getLocalVariableCollectionsAsync();
        let isNew = false;
        let collection = figmaCollections.find(collection => collection.name === name);
        if (!collection) {
            isNew = true;
            collection = figma.variables.createVariableCollection(name);
        }
        return { collection, isNew };
    });
}
function resolveVariableType(typeName) {
    switch (typeName) {
        case 'color': return 'COLOR';
        case 'boolean': return 'BOOLEAN';
        case 'number': return 'FLOAT';
        default: return 'STRING';
    }
}
function setFigmaVariable(collection, modeId, type, variableName, value = null, scopes = ['ALL_SCOPES'], description = null) {
    return __awaiter(this, void 0, void 0, function* () {
        let figmaVariable = yield findFigmaVariableByName(variableName, collection.name);
        if (!figmaVariable) {
            try {
                figmaVariable = figma.variables.createVariable(variableName, collection, type);
            }
            catch (e) {
                debugger;
            }
        }
        if (value) {
            figmaVariable.setValueForMode(modeId, value);
        }
        figmaVariable.scopes = scopes;
        if (description != null) {
            figmaVariable.description = description;
        }
        return figmaVariable;
    });
}


/***/ }),

/***/ "./src/utils/flatten-object.ts":
/*!*************************************!*\
  !*** ./src/utils/flatten-object.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   flattenObject: () => (/* binding */ flattenObject)
/* harmony export */ });
function flattenObject(data) {
    const tokens = {};
    Object.entries(data).forEach(([key, object]) => {
        traverseToken({
            key,
            object,
            tokens,
        });
    });
    return tokens;
}
function traverseToken({ key, object, tokens, }) {
    if (!object)
        debugger;
    // if key is a meta field, move on
    if (key.charAt(0) === "$") {
        return;
    }
    if (object.$value !== undefined) {
        tokens[key] = Object.assign({}, object);
    }
    else {
        Object.entries(object).forEach(([key2, object2]) => {
            if (key2.charAt(0) !== "$") {
                traverseToken({
                    key: `${key}/${key2}`,
                    object: object2,
                    tokens
                });
            }
        });
    }
}


/***/ }),

/***/ "./src/utils/import-style-templates.ts":
/*!*********************************************!*\
  !*** ./src/utils/import-style-templates.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   importStyleTemplates: () => (/* binding */ importStyleTemplates)
/* harmony export */ });
/* harmony import */ var _delay_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delay-async */ "./src/utils/delay-async.ts");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clone */ "./src/utils/clone.ts");
/* harmony import */ var _swap_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swap-variables */ "./src/utils/swap-variables.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let totalLayersCount = 0;
let reboundLayersCount = 0;
let skippedLayersCount = 0;
let missingLayersCount = 0;
//cache all component sets to speed up the process
let componentSets;
function getComponentSets() {
    if (!componentSets) {
        console.log(`First time look up, running slow...`);
        figma.skipInvisibleInstanceChildren = true;
        componentSets = figma.currentPage.findAllWithCriteria({
            types: ['COMPONENT', 'COMPONENT_SET']
        });
    }
    return componentSets;
}
function findComponent(cmpName) {
    let masterComponent = getComponentSets().find(item => item.name === cmpName);
    return masterComponent || null;
}
function importStyleTemplates() {
    return __awaiter(this, void 0, void 0, function* () {
        totalLayersCount = 0;
        reboundLayersCount = 0;
        skippedLayersCount = 0;
        let _nodes = [];
        if (figma.currentPage.selection.length == 0) {
            figma.notify("Select at least one layer and try again");
            return false;
        }
        figma.currentPage.selection.forEach((node) => {
            if ('children' in node) {
                _nodes = _nodes.concat(node.children);
            }
        });
        console.log(_nodes);
        let matches = [];
        _nodes.forEach(node => {
            if (node.type != 'FRAME' || node.visible != true) {
                return; // skip everyting that is not a regular frame
            }
            const componentNode = findComponent(node.name);
            if (componentNode) {
                matches.push({
                    source: node,
                    target: componentNode
                });
            }
        });
        const total = matches.length;
        totalLayersCount = total;
        while (matches.length) {
            const matchData = matches.shift();
            const percent = Math.round(((total - matches.length) / total) * 100);
            const msg = `${percent}% done. Working on layer ${total - matches.length} out of ${total}`;
            console.log(msg);
            if (matchData.target.type == 'COMPONENT_SET') {
                for (const sourceFrame of matchData.source.children) {
                    const target = matchData.target.findChild(n => n.name === sourceFrame.name);
                    if ((target === null || target === void 0 ? void 0 : target.type) == 'COMPONENT' && sourceFrame.type == 'FRAME') {
                        yield processNode(sourceFrame, target);
                    }
                }
            }
            else {
                yield processNode(matchData.source, matchData.target);
            }
        }
        return total;
    });
}
function processNode(sourceFrame, targetComponent) {
    return __awaiter(this, void 0, void 0, function* () {
        yield copyStyles(sourceFrame, targetComponent);
        yield bindVairables(sourceFrame, targetComponent);
        let index = 0;
        for (const sourceNode of sourceFrame.children) {
            figma.skipInvisibleInstanceChildren = false;
            let targetNode = targetComponent.findOne(n => n.name === sourceNode.name);
            if (!targetNode) {
                // copy a component and insert it into the same position as it is in sourceFrame
                const clone = sourceNode.clone();
                targetComponent.insertChild(index++, clone);
                return;
            }
            resizeAndReposition(sourceNode, targetNode);
            if (sourceNode.type == 'INSTANCE' && targetNode.type == 'INSTANCE') {
                yield copyOverrides(sourceNode, targetNode, targetComponent);
            }
            if (sourceNode.type == 'FRAME' && targetNode.type == 'FRAME' ||
                sourceNode.type == 'INSTANCE' && targetNode.type == 'INSTANCE' ||
                sourceNode.type == 'BOOLEAN_OPERATION' && targetNode.type == 'BOOLEAN_OPERATION') {
                yield copyNodeProps(sourceNode, targetNode);
            }
        }
        yield (0,_delay_async__WEBPACK_IMPORTED_MODULE_0__.delayAsync)(10);
    });
}
function copyNodeProps(sourceNode, targetNode) {
    return __awaiter(this, void 0, void 0, function* () {
        targetNode.fills = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.fills);
        targetNode.effects = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.effects);
        targetNode.strokes = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.strokes);
        targetNode.opacity = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.opacity);
        targetNode.visible = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.visible);
        targetNode.isMask = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.isMask);
        targetNode.strokeAlign = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.strokeAlign);
        targetNode.strokeAlign = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.strokeAlign);
        targetNode.strokeCap = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.strokeCap);
        targetNode.strokeJoin = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.strokeJoin);
        targetNode.strokeMiterLimit = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.strokeMiterLimit);
        targetNode.strokeWeight = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.strokeWeight);
        if (sourceNode.type == 'FRAME' && targetNode.type == 'FRAME') {
            targetNode.constraints = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.constraints);
            targetNode.layoutGrids = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.layoutGrids);
            targetNode.strokeBottomWeight = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.strokeBottomWeight);
            targetNode.strokeLeftWeight = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.strokeLeftWeight);
            targetNode.strokeRightWeight = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.strokeRightWeight);
            targetNode.strokeTopWeight = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(sourceNode.strokeTopWeight);
        }
        yield copyStyles(sourceNode, targetNode);
        yield bindVairables(sourceNode, targetNode);
    });
}
function bindVairables(sourceFrame, targetComponent) {
    return __awaiter(this, void 0, void 0, function* () {
        const boundVairables = Object.entries(sourceFrame.boundVariables);
        return yield Promise.all(boundVairables.map(([propName, varBinding]) => __awaiter(this, void 0, void 0, function* () {
            return yield bindVariable(sourceFrame, targetComponent, propName, varBinding).catch((err) => {
                return err + `${propName}`;
            });
        }))).catch(function (err) {
            console.log(err.message); // some coding error in handling happened
        });
    });
}
function resizeAndReposition(sourceNode, targetNode) {
    if (targetNode == null) {
        return;
    }
    if (sourceNode.type == 'BOOLEAN_OPERATION') {
        sourceNode.children.forEach(source => {
            if ('findOne' in targetNode) {
                const target = targetNode.findOne(n => n.name === source.name);
                resizeAndReposition(source, target);
            }
        });
    }
    else {
        targetNode.x = sourceNode.x;
        targetNode.y = sourceNode.y;
        if ('resize' in targetNode) {
            targetNode.resize(sourceNode.width, sourceNode.height);
        }
    }
}
function copyComponentProps(source, target) {
    // COPY COMPONENT PROPS ----------------
    const sourceComponentProps = source.componentProperties;
    const propsCopy = {};
    Object.keys(sourceComponentProps).forEach(key => {
        propsCopy[key] = sourceComponentProps[key].value;
    });
    target.setProperties(propsCopy);
}
function copyOverrides(sourceNode, targetNode, targetComponent) {
    return __awaiter(this, void 0, void 0, function* () {
        if (targetNode.type == 'INSTANCE') {
            // SWAP INSTANCES ---------------------
            const sourceMainComp = yield sourceNode.getMainComponentAsync();
            const targetMainComp = yield targetNode.getMainComponentAsync();
            const doSwap = sourceMainComp.id !== targetMainComp.id;
            if (doSwap) {
                targetNode.swapComponent(sourceMainComp);
            }
            copyComponentProps(sourceNode, targetNode);
        }
        for (const prop of sourceNode.overrides) {
            const type = targetNode.type;
            if (type != 'FRAME' &&
                type != 'BOOLEAN_OPERATION' &&
                type != 'COMPONENT_SET' &&
                type != 'COMPONENT' &&
                type != 'INSTANCE' &&
                type != 'GROUP' &&
                type != 'SECTION') {
                return;
            }
            const source = yield figma.getNodeByIdAsync(prop.id);
            if (!source)
                debugger;
            const fields = prop.overriddenFields;
            const target = /*source.name == targetNode.name ? targetNode :*/ targetNode.findOne(n => n.name === source.name);
            if (target != null) {
                fields.forEach(field => {
                    let propName = field;
                    if (field == 'stokeTopWeight') {
                        propName = 'strokeTopWeight';
                    }
                    if (field == 'componentProperties' && source.type == 'INSTANCE' && target.type == 'INSTANCE') {
                        copyComponentProps(source, target);
                    }
                    else if (propName != 'componentPropertyDefinitions' &&
                        propName != 'height' &&
                        propName != 'overlayBackground' &&
                        propName != 'overlayBackgroundInteraction' &&
                        propName != 'overlayPositionType' &&
                        propName != 'parent' &&
                        propName != 'type' &&
                        propName != 'width' &&
                        propName != 'boundVariables') {
                        if (target[propName] != source[propName]) {
                            console.log(`applying ${propName}:${source[propName]} to ${source.name}`);
                            target[propName] = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(source[propName]);
                        }
                    }
                });
                yield bindVairables(source, target);
            }
        }
    });
}
function copyStyles(sourceFrame, targetComponent) {
    return __awaiter(this, void 0, void 0, function* () {
        if ('effectStyleId' in sourceFrame && 'effectStyleId' in targetComponent) {
            yield targetComponent.setEffectStyleIdAsync(sourceFrame.effectStyleId);
        }
        if ('gridStyleId' in sourceFrame && 'gridStyleId' in targetComponent) {
            yield targetComponent.setGridStyleIdAsync(sourceFrame.gridStyleId);
        }
        if ('fillStyleId' in sourceFrame && 'fillStyleId' in targetComponent) {
            yield targetComponent.setFillStyleIdAsync(sourceFrame.fillStyleId);
        }
        if ('strokeStyleId' in sourceFrame && 'strokeStyleId' in targetComponent) {
            yield targetComponent.setStrokeStyleIdAsync(sourceFrame.strokeStyleId);
        }
    });
}
function bindVariable(sourceFrame, targetComponent, propName, variableBinding) {
    return __awaiter(this, void 0, void 0, function* () {
        if (propName == 'fills' && 'fills' in sourceFrame && 'fills' in targetComponent && !targetComponent['fillStyleId']) {
            targetComponent.fills = yield (0,_swap_variables__WEBPACK_IMPORTED_MODULE_2__.bindPropertyVariables)(sourceFrame.fills, figma.variables.setBoundVariableForPaint);
        }
        else if (propName == 'strokes' && 'strokes' in sourceFrame && 'strokes' in targetComponent && !targetComponent['strokeStyleId']) {
            targetComponent.strokes = yield (0,_swap_variables__WEBPACK_IMPORTED_MODULE_2__.bindPropertyVariables)(sourceFrame.strokes, figma.variables.setBoundVariableForPaint);
        }
        else if (propName == 'effects' && 'effects' in sourceFrame && 'effects' in targetComponent && !targetComponent['effectStyleId']) {
            targetComponent.effects = yield (0,_swap_variables__WEBPACK_IMPORTED_MODULE_2__.bindPropertyVariables)(sourceFrame.effects, figma.variables.setBoundVariableForEffect);
        }
        else if (propName == 'layoutGrids' && 'layoutGrids' in sourceFrame && 'layoutGrids' in targetComponent) {
            targetComponent.layoutGrids = yield (0,_swap_variables__WEBPACK_IMPORTED_MODULE_2__.bindPropertyVariables)(sourceFrame.layoutGrids, figma.variables.setBoundVariableForLayoutGrid);
        }
        else if (propName == 'componentProperties' || propName == 'textRangeFills') {
            console.warn(`Swap does not work for ${propName}, skipping node`);
        }
        else {
            const variable = yield (0,_swap_variables__WEBPACK_IMPORTED_MODULE_2__.findVariableMatch)(variableBinding.id);
            if (variable) {
                var alias = targetComponent.boundVariables[propName];
                if (variable.id != alias.id) {
                    targetComponent.setBoundVariable(propName, null);
                    targetComponent.setBoundVariable(propName, variable.id);
                }
            }
        }
        return targetComponent;
    });
}


/***/ }),

/***/ "./src/utils/round-two-digits.ts":
/*!***************************************!*\
  !*** ./src/utils/round-two-digits.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   roundTwoDigits: () => (/* binding */ roundTwoDigits)
/* harmony export */ });
function roundTwoDigits(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}


/***/ }),

/***/ "./src/utils/sort-tokens.ts":
/*!**********************************!*\
  !*** ./src/utils/sort-tokens.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAlphaNumTokensSortFn: () => (/* binding */ getAlphaNumTokensSortFn),
/* harmony export */   getColorTokensSortFn: () => (/* binding */ getColorTokensSortFn),
/* harmony export */   getSizeTokensSortFn: () => (/* binding */ getSizeTokensSortFn)
/* harmony export */ });
const sizeValuesOrder = [
    'none',
    'xs5',
    'xs5',
    'xs3',
    'xs2',
    'xs',
    'sm',
    'base',
    'md',
    'lg',
    'xl',
    'xl2',
    'xl3',
    'xl4',
    'xl5',
    'xl6',
    'xl7',
    'round'
];
const opacityValuesOrder = [
    "opacity-0",
    "opacity-5",
    "opacity-10",
    "opacity-15",
    "opacity-20",
    "opacity-25",
    "opacity-30",
    "opacity-35",
    "opacity-40",
    "opacity-45",
    "opacity-50",
    "opacity-55",
    "opacity-60",
    "opacity-65",
    "opacity-70",
    "opacity-75",
    "opacity-80",
    "opacity-85",
    "opacity-90",
    "opacity-95",
    "opacity-100",
];
const colorNamesOrder = [
    'primary',
    'brand',
    'fill/base',
    'fill/contrast',
    'text/base/600',
    'text/base/500',
    'text/base/400',
    'text/base/action',
    'text/base/info',
    'text/base/success',
    'text/base/warning',
    'text/base/danger',
    'text/contrast/600',
    'text/contrast/500',
    'text/contrast/400',
    'text/contrast/action',
    'text/contrast/info',
    'text/contrast/success',
    'text/contrast/warning',
    'text/contrast/danger',
    'stroke/base',
    'stroke/contrast',
    'info',
    'success',
    'warning',
    'danger',
    'alt/base',
    'alt/contrast',
    'utility',
    'accent/red',
    'accent/amber',
    'accent/brown',
    'accent/green',
    'accent/teal',
    'accent/cyan',
    'accent/blue',
    'accent/indigo',
    'accent/violet',
    'accent/purple',
    'accent/pink',
    'ui-element/bg/rest',
    'ui-element/bg/hover',
    'ui-element/bg/active',
    'ui-element/bg/selected',
    'ui-element/bg/disabled',
    'ui-element/border/rest',
    'ui-element/border/hover',
    'ui-element/border/active',
    'ui-element/border/selected',
    'ui-element/border/disabled',
    'ui-element/text',
    'button/bg/rest',
    'button/bg/hover',
    'button/bg/active',
    'button/primary',
    'button/success',
    'button/danger',
    'button/border/rest',
    'button/border/hover',
    'button/border/active',
    'form-element/bg/rest',
    'form-element/bg/readonly',
    'form-element/bg/hover',
    'form-element/border/rest',
    'form-element/border/readonly',
    'form-element/border/hover',
    'card/bg/primary',
    'card/bg/secondary',
    'card/border/inner',
    'card/border/outer',
    'overlay/bg',
    'overlay/border',
];
function getColorTokensSortFn() {
    return getSortFn(colorNamesOrder);
}
function getSizeTokensSortFn() {
    return getSortFn(sizeValuesOrder);
}
function getAlphaNumTokensSortFn() {
    var collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
    return collator.compare;
}
function getSortFn(dataSet) {
    return function (firstEl, secondEl) {
        var resultFirst = dataSet.findIndex(item => {
            return firstEl.name.endsWith(item);
        });
        var resultSecond = dataSet.findIndex(item => {
            return secondEl.name.endsWith(item);
        });
        if (resultFirst < resultSecond) {
            return -1; // firstEl goes first
        }
        if (resultFirst > resultSecond) {
            return 1; // secondEl goes first
        }
        if (resultFirst === resultSecond) {
            let name1 = firstEl.name;
            let name2 = secondEl.name;
            if (name1 < name2) {
                return -1; // firstEl goes first
            }
            if (name1 > name2) {
                return 1; // secondEl goes first
            }
            return 0;
        }
        return 0; // keep original order    
    };
}


/***/ }),

/***/ "./src/utils/swap-variables.ts":
/*!*************************************!*\
  !*** ./src/utils/swap-variables.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindPropertyVariables: () => (/* binding */ bindPropertyVariables),
/* harmony export */   findVariableMatch: () => (/* binding */ findVariableMatch)
/* harmony export */ });
/* harmony import */ var _delay_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delay-async */ "./src/utils/delay-async.ts");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clone */ "./src/utils/clone.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let totalLayersCount = 0;
let reboundLayersCount = 0;
let skippedLayersCount = 0;
let missingLayersCount = 0;
let importadVariablesLibrary;
function getVariableName(variable) {
    const name = variable.name;
    return name.replaceAll('sx', 'spacing').replaceAll('sy', 'spacing/minor');
}
function findVariableMatch(varId) {
    return __awaiter(this, void 0, void 0, function* () {
        const variable = yield figma.variables.getVariableByIdAsync(varId);
        if (!variable) {
            return null;
        }
        const name = getVariableName(variable);
        const targetVariable = importadVariablesLibrary.find(variable => {
            return variable.name == name;
        });
        if (!targetVariable) {
            console.warn(`Cannot find ${variable.name}`);
            return null;
        }
        ;
        if (targetVariable.id == variable.id) {
            console.warn(`${variable.name} is a local variable`);
            skippedLayersCount++;
            return null;
        }
        return targetVariable;
    });
}
function processLayer(node, count) {
    return __awaiter(this, void 0, void 0, function* () {
        const boundVairables = Object.entries(node.boundVariables);
        yield Promise.all(boundVairables.map(([propName, boundVar]) => __awaiter(this, void 0, void 0, function* () {
            return yield bindVariable(node, propName, boundVar).catch((err) => {
                return err + `${propName}`;
            });
        }))).catch(function (err) {
            console.log(err.message); // some coding error in handling happened
        });
        if (count % 50 == 0) {
            yield (0,_delay_async__WEBPACK_IMPORTED_MODULE_0__.delayAsync)(1);
        }
    });
}
function bindPropertyVariables(props, figmaFn) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = [];
        const propsCopy = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(props);
        for (let prop of propsCopy) {
            for (const field in prop.boundVariables) {
                const alias = prop.boundVariables[field];
                const variable = yield findVariableMatch(alias.id);
                const spread = prop['spread']; //workaround Figma bug. It resets spread after calling figma.variables.setBoundVariableForEffect
                if (variable) {
                    // prop.boundVariables = {};
                    prop = figmaFn(prop, field, null);
                    prop = figmaFn(prop, field, variable);
                }
                if (typeof spread != 'undefined') {
                    prop['spread'] = spread;
                }
            }
            result.push(prop);
        }
        return result;
    });
}
function bindVariable(node, propName, variableBinding) {
    return __awaiter(this, void 0, void 0, function* () {
        if (propName == 'fills' && 'fills' in node) {
            node.fills = yield bindPropertyVariables(node.fills, figma.variables.setBoundVariableForPaint);
        }
        else if (propName == 'strokes' && 'strokes' in node) {
            node.strokes = yield bindPropertyVariables(node.strokes, figma.variables.setBoundVariableForPaint);
        }
        else if (propName == 'effects' && 'effects' in node) {
            node.effects = yield bindPropertyVariables(node.effects, figma.variables.setBoundVariableForEffect);
        }
        else if (propName == 'layoutGrids' && 'layoutGrids' in node) {
            node.layoutGrids = yield bindPropertyVariables(node.layoutGrids, figma.variables.setBoundVariableForLayoutGrid);
        }
        else if (propName == 'componentProperties' || propName == 'textRangeFills') {
            console.warn(`Swap does not work for ${propName}, skipping node`);
        }
        else {
            const variable = yield findVariableMatch(variableBinding.id);
            if (variable) {
                node.setBoundVariable(propName, null);
                node.setBoundVariable(propName, variable);
            }
        }
        return node;
    });
}


/***/ }),

/***/ "./src/utils/text-to-title-case.ts":
/*!*****************************************!*\
  !*** ./src/utils/text-to-title-case.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelToTitle: () => (/* binding */ camelToTitle),
/* harmony export */   toTitleCase: () => (/* binding */ toTitleCase)
/* harmony export */ });
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
function camelToTitle(camelCase) {
    // no side-effects
    return camelCase
        // inject space before the upper case letters
        .replace(/([A-Z])/g, function (match) {
        return " " + match;
    })
        // replace first char with upper case
        .replace(/^./, function (match) {
        return match.toUpperCase();
    });
}


/***/ }),

/***/ "./src/utils/token-references.ts":
/*!***************************************!*\
  !*** ./src/utils/token-references.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findTokenReferences: () => (/* binding */ findTokenReferences),
/* harmony export */   findVariableByReferences: () => (/* binding */ findVariableByReferences),
/* harmony export */   getReferenceName: () => (/* binding */ getReferenceName),
/* harmony export */   parseReferenceGlobal: () => (/* binding */ parseReferenceGlobal)
/* harmony export */ });
/* harmony import */ var _figma_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./figma-variables */ "./src/utils/figma-variables.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const aliasRegex = /\{(.+?)(.+?)\}/g;
function findTokenReferences(tokenValue) {
    return tokenValue === null || tokenValue === void 0 ? void 0 : tokenValue.toString().match(aliasRegex);
}
;
function getReferenceName(reference) {
    let name = reference.replace(/{/g, "");
    name = name.replace(/}/g, "");
    return name;
}
function findVariableByReferences(value) {
    return __awaiter(this, void 0, void 0, function* () {
        let references = findTokenReferences(value);
        let results = [];
        for (const reference of references || []) {
            let name = getReferenceName(reference);
            name = name.replace(/\./g, "/");
            const figmaVariable = yield (0,_figma_variables__WEBPACK_IMPORTED_MODULE_0__.findFigmaVariableByName)(name);
            if (figmaVariable) {
                results.push(figmaVariable);
            }
            else {
                console.warn(`findVariableByReferences() call failed -> cannot find value for ${reference}`);
            }
        }
        return results[0];
    });
}
function findGlobalTokenByName(name, dictionary) {
    name = name.replace(/\./g, "/");
    const token = dictionary[name];
    if (!token)
        debugger;
    return token;
}
function parseReferenceGlobal(value, dictionary) {
    let references = findTokenReferences(value);
    let result = value;
    references === null || references === void 0 ? void 0 : references.forEach(reference => {
        let name = getReferenceName(reference);
        const globalToken = findGlobalTokenByName(name, dictionary);
        if (globalToken) {
            result = result.replace(reference, globalToken.$value);
        }
        else {
            console.warn(`parseReferenceGlobal() call failed -> cannot find reference for ${value}`);
        }
    });
    const check = findTokenReferences(result);
    if (check != null) {
        return parseReferenceGlobal(result, dictionary);
    }
    else {
        return result;
    }
}


/***/ }),

/***/ "./src/utils/update-elevation-components.ts":
/*!**************************************************!*\
  !*** ./src/utils/update-elevation-components.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateElevationComponents: () => (/* binding */ updateElevationComponents)
/* harmony export */ });
function updateElevationComponents(tokens) {
    figma.skipInvisibleInstanceChildren = true;
    const pageComponents = figma.currentPage.findAllWithCriteria({ types: ['COMPONENT'] });
    const elevationComponents = pageComponents.filter(node => {
        const name = node.name.toLocaleLowerCase();
        return name.startsWith('shadow');
    });
    if (elevationComponents.length == 0) {
        return console.warn('No elevation components has been found');
    }
    Object.keys(tokens).forEach(name => {
        const variants = tokens[name];
        const [shade, token] = Object.entries(variants)[0];
        const settings = token['$value'];
        const elevationComponent = elevationComponents.find(node => {
            const nameNormalized = name.toLocaleLowerCase().replace(/-/g, " ");
            const nodeNameNormalized = node.name.toLocaleLowerCase().replace(/-/g, " ");
            console.log(nameNormalized, nodeNameNormalized);
            return nodeNameNormalized.indexOf(nameNormalized) > -1;
        });
        processComponent(settings, elevationComponent);
    });
}
function clone(val) {
    const type = typeof val;
    if (val === null) {
        return null;
    }
    else if (type === 'undefined' || type === 'number' ||
        type === 'string' || type === 'boolean') {
        return val;
    }
    else if (type === 'object') {
        if (val instanceof Array) {
            return val.map(x => clone(x));
        }
        else if (val instanceof Uint8Array) {
            return new Uint8Array(val);
        }
        else {
            let o = {};
            for (const key in val) {
                o[key] = clone(val[key]);
            }
            return o;
        }
    }
    throw 'unknown';
}
function processComponent(effects, component) {
    if (!component) {
        throw ('Elevation component was not found');
    }
    const shadowLayers = component.findChildren(node => {
        const name = node.name.toLocaleLowerCase();
        return name.startsWith('shadow');
    });
    const maskLayer = component.findChild(node => {
        return node.name.toLocaleLowerCase() === 'mask';
    });
    maskLayer.visible = false;
    debugger;
    effects.forEach((shadowSettings, index) => {
        const shadowLayer = shadowLayers[index];
        const x = parseFloat(shadowSettings.x);
        const y = parseFloat(shadowSettings.y);
        const radius = parseFloat(shadowSettings.blur);
        const spread = parseFloat(shadowSettings.spread);
        const width = component.width + (2 * spread);
        const height = component.height + (2 * spread);
        const left = x - spread;
        const top = y - spread;
        const blur = {
            type: "LAYER_BLUR",
            radius: radius,
            visible: true
        };
        shadowLayer.effects = [blur];
        shadowLayer.resize(width, height);
        shadowLayer.x = left;
        shadowLayer.y = top;
    });
    const absoluteBoundingBox = component.absoluteBoundingBox;
    const absoluteRenderBounds = component.absoluteRenderBounds;
    const maskWidth = absoluteRenderBounds.width;
    const maskHeight = absoluteRenderBounds.height;
    const maskLeft = (absoluteRenderBounds.x - absoluteBoundingBox.x);
    const maskTop = (absoluteRenderBounds.y - absoluteBoundingBox.y);
    const innerLayer = maskLayer.findChild(node => node.name === 'inner');
    const outerLayer = maskLayer.findChild(node => node.name === 'outer');
    outerLayer.resize(maskWidth, maskHeight);
    outerLayer.x = maskLeft;
    outerLayer.y = maskTop;
    innerLayer.resize(component.width, component.height);
    innerLayer.x = 0;
    innerLayer.y = 0;
    maskLayer.visible = true;
}


/***/ }),

/***/ "./src/utils/variables-to-styles.ts":
/*!******************************************!*\
  !*** ./src/utils/variables-to-styles.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindVariablesAndStyles: () => (/* binding */ bindVariablesAndStyles)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.clear();
function getStyleByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const styles = yield figma.getLocalPaintStylesAsync();
        return styles.find((style) => style.name === name);
    });
}
;
function getFigmaColor() {
    return {
        type: "SOLID",
        visible: true,
        blendMode: "NORMAL",
        color: {
            r: 1,
            g: 1,
            b: 1
        },
        opacity: 1
    };
}
;
function bindVariablesAndStyles() {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = yield figma.variables.getLocalVariablesAsync();
        let count = 0;
        variables.forEach((variable) => __awaiter(this, void 0, void 0, function* () {
            const name = variable.name;
            let style = yield getStyleByName(name);
            if (variable.resolvedType !== 'COLOR') {
                return;
            }
            if (!style) {
                count++;
                style = figma.createPaintStyle();
                style.name = name;
                style.paints = [
                    getFigmaColor()
                ];
            }
            let newPaints = style.paints.map((paint) => {
                return figma.variables.setBoundVariableForPaint(paint, 'color', variable);
            });
            style.paints = newPaints;
        }));
        figma.notify(`✅ Variables and styles are now connected. ${count} styles created`);
    });
}


/***/ }),

/***/ "./node_modules/chroma-js/chroma.js":
/*!******************************************!*\
  !*** ./node_modules/chroma-js/chroma.js ***!
  \******************************************/
/***/ (function(module) {

/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */

(function (global, factory) {
     true ? module.exports = factory() :
    0;
})(this, (function () { 'use strict';

    var limit$2 = function (x, min, max) {
        if ( min === void 0 ) min=0;
        if ( max === void 0 ) max=1;

        return x < min ? min : x > max ? max : x;
    };

    var limit$1 = limit$2;

    var clip_rgb$3 = function (rgb) {
        rgb._clipped = false;
        rgb._unclipped = rgb.slice(0);
        for (var i=0; i<=3; i++) {
            if (i < 3) {
                if (rgb[i] < 0 || rgb[i] > 255) { rgb._clipped = true; }
                rgb[i] = limit$1(rgb[i], 0, 255);
            } else if (i === 3) {
                rgb[i] = limit$1(rgb[i], 0, 1);
            }
        }
        return rgb;
    };

    // ported from jQuery's $.type
    var classToType = {};
    for (var i$1 = 0, list$1 = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Undefined', 'Null']; i$1 < list$1.length; i$1 += 1) {
        var name = list$1[i$1];

        classToType[("[object " + name + "]")] = name.toLowerCase();
    }
    var type$p = function(obj) {
        return classToType[Object.prototype.toString.call(obj)] || "object";
    };

    var type$o = type$p;

    var unpack$B = function (args, keyOrder) {
        if ( keyOrder === void 0 ) keyOrder=null;

    	// if called with more than 3 arguments, we return the arguments
        if (args.length >= 3) { return Array.prototype.slice.call(args); }
        // with less than 3 args we check if first arg is object
        // and use the keyOrder string to extract and sort properties
    	if (type$o(args[0]) == 'object' && keyOrder) {
    		return keyOrder.split('')
    			.filter(function (k) { return args[0][k] !== undefined; })
    			.map(function (k) { return args[0][k]; });
    	}
    	// otherwise we just return the first argument
    	// (which we suppose is an array of args)
        return args[0];
    };

    var type$n = type$p;

    var last$4 = function (args) {
        if (args.length < 2) { return null; }
        var l = args.length-1;
        if (type$n(args[l]) == 'string') { return args[l].toLowerCase(); }
        return null;
    };

    var PI$2 = Math.PI;

    var utils = {
    	clip_rgb: clip_rgb$3,
    	limit: limit$2,
    	type: type$p,
    	unpack: unpack$B,
    	last: last$4,
    	PI: PI$2,
    	TWOPI: PI$2*2,
    	PITHIRD: PI$2/3,
    	DEG2RAD: PI$2 / 180,
    	RAD2DEG: 180 / PI$2
    };

    var input$h = {
    	format: {},
    	autodetect: []
    };

    var last$3 = utils.last;
    var clip_rgb$2 = utils.clip_rgb;
    var type$m = utils.type;
    var _input = input$h;

    var Color$D = function Color() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var me = this;
        if (type$m(args[0]) === 'object' &&
            args[0].constructor &&
            args[0].constructor === this.constructor) {
            // the argument is already a Color instance
            return args[0];
        }

        // last argument could be the mode
        var mode = last$3(args);
        var autodetect = false;

        if (!mode) {
            autodetect = true;
            if (!_input.sorted) {
                _input.autodetect = _input.autodetect.sort(function (a,b) { return b.p - a.p; });
                _input.sorted = true;
            }
            // auto-detect format
            for (var i = 0, list = _input.autodetect; i < list.length; i += 1) {
                var chk = list[i];

                mode = chk.test.apply(chk, args);
                if (mode) { break; }
            }
        }

        if (_input.format[mode]) {
            var rgb = _input.format[mode].apply(null, autodetect ? args : args.slice(0,-1));
            me._rgb = clip_rgb$2(rgb);
        } else {
            throw new Error('unknown format: '+args);
        }

        // add alpha channel
        if (me._rgb.length === 3) { me._rgb.push(1); }
    };

    Color$D.prototype.toString = function toString () {
        if (type$m(this.hex) == 'function') { return this.hex(); }
        return ("[" + (this._rgb.join(',')) + "]");
    };

    var Color_1 = Color$D;

    var chroma$k = function () {
    	var args = [], len = arguments.length;
    	while ( len-- ) args[ len ] = arguments[ len ];

    	return new (Function.prototype.bind.apply( chroma$k.Color, [ null ].concat( args) ));
    };

    chroma$k.Color = Color_1;
    chroma$k.version = '2.4.2';

    var chroma_1 = chroma$k;

    var unpack$A = utils.unpack;
    var max$2 = Math.max;

    var rgb2cmyk$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$A(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        r = r / 255;
        g = g / 255;
        b = b / 255;
        var k = 1 - max$2(r,max$2(g,b));
        var f = k < 1 ? 1 / (1-k) : 0;
        var c = (1-r-k) * f;
        var m = (1-g-k) * f;
        var y = (1-b-k) * f;
        return [c,m,y,k];
    };

    var rgb2cmyk_1 = rgb2cmyk$1;

    var unpack$z = utils.unpack;

    var cmyk2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$z(args, 'cmyk');
        var c = args[0];
        var m = args[1];
        var y = args[2];
        var k = args[3];
        var alpha = args.length > 4 ? args[4] : 1;
        if (k === 1) { return [0,0,0,alpha]; }
        return [
            c >= 1 ? 0 : 255 * (1-c) * (1-k), // r
            m >= 1 ? 0 : 255 * (1-m) * (1-k), // g
            y >= 1 ? 0 : 255 * (1-y) * (1-k), // b
            alpha
        ];
    };

    var cmyk2rgb_1 = cmyk2rgb;

    var chroma$j = chroma_1;
    var Color$C = Color_1;
    var input$g = input$h;
    var unpack$y = utils.unpack;
    var type$l = utils.type;

    var rgb2cmyk = rgb2cmyk_1;

    Color$C.prototype.cmyk = function() {
        return rgb2cmyk(this._rgb);
    };

    chroma$j.cmyk = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$C, [ null ].concat( args, ['cmyk']) ));
    };

    input$g.format.cmyk = cmyk2rgb_1;

    input$g.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$y(args, 'cmyk');
            if (type$l(args) === 'array' && args.length === 4) {
                return 'cmyk';
            }
        }
    });

    var unpack$x = utils.unpack;
    var last$2 = utils.last;
    var rnd = function (a) { return Math.round(a*100)/100; };

    /*
     * supported arguments:
     * - hsl2css(h,s,l)
     * - hsl2css(h,s,l,a)
     * - hsl2css([h,s,l], mode)
     * - hsl2css([h,s,l,a], mode)
     * - hsl2css({h,s,l,a}, mode)
     */
    var hsl2css$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var hsla = unpack$x(args, 'hsla');
        var mode = last$2(args) || 'lsa';
        hsla[0] = rnd(hsla[0] || 0);
        hsla[1] = rnd(hsla[1]*100) + '%';
        hsla[2] = rnd(hsla[2]*100) + '%';
        if (mode === 'hsla' || (hsla.length > 3 && hsla[3]<1)) {
            hsla[3] = hsla.length > 3 ? hsla[3] : 1;
            mode = 'hsla';
        } else {
            hsla.length = 3;
        }
        return (mode + "(" + (hsla.join(',')) + ")");
    };

    var hsl2css_1 = hsl2css$1;

    var unpack$w = utils.unpack;

    /*
     * supported arguments:
     * - rgb2hsl(r,g,b)
     * - rgb2hsl(r,g,b,a)
     * - rgb2hsl([r,g,b])
     * - rgb2hsl([r,g,b,a])
     * - rgb2hsl({r,g,b,a})
     */
    var rgb2hsl$3 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$w(args, 'rgba');
        var r = args[0];
        var g = args[1];
        var b = args[2];

        r /= 255;
        g /= 255;
        b /= 255;

        var min = Math.min(r, g, b);
        var max = Math.max(r, g, b);

        var l = (max + min) / 2;
        var s, h;

        if (max === min){
            s = 0;
            h = Number.NaN;
        } else {
            s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
        }

        if (r == max) { h = (g - b) / (max - min); }
        else if (g == max) { h = 2 + (b - r) / (max - min); }
        else if (b == max) { h = 4 + (r - g) / (max - min); }

        h *= 60;
        if (h < 0) { h += 360; }
        if (args.length>3 && args[3]!==undefined) { return [h,s,l,args[3]]; }
        return [h,s,l];
    };

    var rgb2hsl_1 = rgb2hsl$3;

    var unpack$v = utils.unpack;
    var last$1 = utils.last;
    var hsl2css = hsl2css_1;
    var rgb2hsl$2 = rgb2hsl_1;
    var round$6 = Math.round;

    /*
     * supported arguments:
     * - rgb2css(r,g,b)
     * - rgb2css(r,g,b,a)
     * - rgb2css([r,g,b], mode)
     * - rgb2css([r,g,b,a], mode)
     * - rgb2css({r,g,b,a}, mode)
     */
    var rgb2css$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgba = unpack$v(args, 'rgba');
        var mode = last$1(args) || 'rgb';
        if (mode.substr(0,3) == 'hsl') {
            return hsl2css(rgb2hsl$2(rgba), mode);
        }
        rgba[0] = round$6(rgba[0]);
        rgba[1] = round$6(rgba[1]);
        rgba[2] = round$6(rgba[2]);
        if (mode === 'rgba' || (rgba.length > 3 && rgba[3]<1)) {
            rgba[3] = rgba.length > 3 ? rgba[3] : 1;
            mode = 'rgba';
        }
        return (mode + "(" + (rgba.slice(0,mode==='rgb'?3:4).join(',')) + ")");
    };

    var rgb2css_1 = rgb2css$1;

    var unpack$u = utils.unpack;
    var round$5 = Math.round;

    var hsl2rgb$1 = function () {
        var assign;

        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        args = unpack$u(args, 'hsl');
        var h = args[0];
        var s = args[1];
        var l = args[2];
        var r,g,b;
        if (s === 0) {
            r = g = b = l*255;
        } else {
            var t3 = [0,0,0];
            var c = [0,0,0];
            var t2 = l < 0.5 ? l * (1+s) : l+s-l*s;
            var t1 = 2 * l - t2;
            var h_ = h / 360;
            t3[0] = h_ + 1/3;
            t3[1] = h_;
            t3[2] = h_ - 1/3;
            for (var i=0; i<3; i++) {
                if (t3[i] < 0) { t3[i] += 1; }
                if (t3[i] > 1) { t3[i] -= 1; }
                if (6 * t3[i] < 1)
                    { c[i] = t1 + (t2 - t1) * 6 * t3[i]; }
                else if (2 * t3[i] < 1)
                    { c[i] = t2; }
                else if (3 * t3[i] < 2)
                    { c[i] = t1 + (t2 - t1) * ((2 / 3) - t3[i]) * 6; }
                else
                    { c[i] = t1; }
            }
            (assign = [round$5(c[0]*255),round$5(c[1]*255),round$5(c[2]*255)], r = assign[0], g = assign[1], b = assign[2]);
        }
        if (args.length > 3) {
            // keep alpha channel
            return [r,g,b,args[3]];
        }
        return [r,g,b,1];
    };

    var hsl2rgb_1 = hsl2rgb$1;

    var hsl2rgb = hsl2rgb_1;
    var input$f = input$h;

    var RE_RGB = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
    var RE_RGBA = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
    var RE_RGB_PCT = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
    var RE_RGBA_PCT = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
    var RE_HSL = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
    var RE_HSLA = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;

    var round$4 = Math.round;

    var css2rgb$1 = function (css) {
        css = css.toLowerCase().trim();
        var m;

        if (input$f.format.named) {
            try {
                return input$f.format.named(css);
            } catch (e) {
                // eslint-disable-next-line
            }
        }

        // rgb(250,20,0)
        if ((m = css.match(RE_RGB))) {
            var rgb = m.slice(1,4);
            for (var i=0; i<3; i++) {
                rgb[i] = +rgb[i];
            }
            rgb[3] = 1;  // default alpha
            return rgb;
        }

        // rgba(250,20,0,0.4)
        if ((m = css.match(RE_RGBA))) {
            var rgb$1 = m.slice(1,5);
            for (var i$1=0; i$1<4; i$1++) {
                rgb$1[i$1] = +rgb$1[i$1];
            }
            return rgb$1;
        }

        // rgb(100%,0%,0%)
        if ((m = css.match(RE_RGB_PCT))) {
            var rgb$2 = m.slice(1,4);
            for (var i$2=0; i$2<3; i$2++) {
                rgb$2[i$2] = round$4(rgb$2[i$2] * 2.55);
            }
            rgb$2[3] = 1;  // default alpha
            return rgb$2;
        }

        // rgba(100%,0%,0%,0.4)
        if ((m = css.match(RE_RGBA_PCT))) {
            var rgb$3 = m.slice(1,5);
            for (var i$3=0; i$3<3; i$3++) {
                rgb$3[i$3] = round$4(rgb$3[i$3] * 2.55);
            }
            rgb$3[3] = +rgb$3[3];
            return rgb$3;
        }

        // hsl(0,100%,50%)
        if ((m = css.match(RE_HSL))) {
            var hsl = m.slice(1,4);
            hsl[1] *= 0.01;
            hsl[2] *= 0.01;
            var rgb$4 = hsl2rgb(hsl);
            rgb$4[3] = 1;
            return rgb$4;
        }

        // hsla(0,100%,50%,0.5)
        if ((m = css.match(RE_HSLA))) {
            var hsl$1 = m.slice(1,4);
            hsl$1[1] *= 0.01;
            hsl$1[2] *= 0.01;
            var rgb$5 = hsl2rgb(hsl$1);
            rgb$5[3] = +m[4];  // default alpha = 1
            return rgb$5;
        }
    };

    css2rgb$1.test = function (s) {
        return RE_RGB.test(s) ||
            RE_RGBA.test(s) ||
            RE_RGB_PCT.test(s) ||
            RE_RGBA_PCT.test(s) ||
            RE_HSL.test(s) ||
            RE_HSLA.test(s);
    };

    var css2rgb_1 = css2rgb$1;

    var chroma$i = chroma_1;
    var Color$B = Color_1;
    var input$e = input$h;
    var type$k = utils.type;

    var rgb2css = rgb2css_1;
    var css2rgb = css2rgb_1;

    Color$B.prototype.css = function(mode) {
        return rgb2css(this._rgb, mode);
    };

    chroma$i.css = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$B, [ null ].concat( args, ['css']) ));
    };

    input$e.format.css = css2rgb;

    input$e.autodetect.push({
        p: 5,
        test: function (h) {
            var rest = [], len = arguments.length - 1;
            while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

            if (!rest.length && type$k(h) === 'string' && css2rgb.test(h)) {
                return 'css';
            }
        }
    });

    var Color$A = Color_1;
    var chroma$h = chroma_1;
    var input$d = input$h;
    var unpack$t = utils.unpack;

    input$d.format.gl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgb = unpack$t(args, 'rgba');
        rgb[0] *= 255;
        rgb[1] *= 255;
        rgb[2] *= 255;
        return rgb;
    };

    chroma$h.gl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$A, [ null ].concat( args, ['gl']) ));
    };

    Color$A.prototype.gl = function() {
        var rgb = this._rgb;
        return [rgb[0]/255, rgb[1]/255, rgb[2]/255, rgb[3]];
    };

    var unpack$s = utils.unpack;

    var rgb2hcg$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$s(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var min = Math.min(r, g, b);
        var max = Math.max(r, g, b);
        var delta = max - min;
        var c = delta * 100 / 255;
        var _g = min / (255 - delta) * 100;
        var h;
        if (delta === 0) {
            h = Number.NaN;
        } else {
            if (r === max) { h = (g - b) / delta; }
            if (g === max) { h = 2+(b - r) / delta; }
            if (b === max) { h = 4+(r - g) / delta; }
            h *= 60;
            if (h < 0) { h += 360; }
        }
        return [h, c, _g];
    };

    var rgb2hcg_1 = rgb2hcg$1;

    var unpack$r = utils.unpack;
    var floor$3 = Math.floor;

    /*
     * this is basically just HSV with some minor tweaks
     *
     * hue.. [0..360]
     * chroma .. [0..1]
     * grayness .. [0..1]
     */

    var hcg2rgb = function () {
        var assign, assign$1, assign$2, assign$3, assign$4, assign$5;

        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        args = unpack$r(args, 'hcg');
        var h = args[0];
        var c = args[1];
        var _g = args[2];
        var r,g,b;
        _g = _g * 255;
        var _c = c * 255;
        if (c === 0) {
            r = g = b = _g;
        } else {
            if (h === 360) { h = 0; }
            if (h > 360) { h -= 360; }
            if (h < 0) { h += 360; }
            h /= 60;
            var i = floor$3(h);
            var f = h - i;
            var p = _g * (1 - c);
            var q = p + _c * (1 - f);
            var t = p + _c * f;
            var v = p + _c;
            switch (i) {
                case 0: (assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2]); break
                case 1: (assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2]); break
                case 2: (assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2]); break
                case 3: (assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2]); break
                case 4: (assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2]); break
                case 5: (assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2]); break
            }
        }
        return [r, g, b, args.length > 3 ? args[3] : 1];
    };

    var hcg2rgb_1 = hcg2rgb;

    var unpack$q = utils.unpack;
    var type$j = utils.type;
    var chroma$g = chroma_1;
    var Color$z = Color_1;
    var input$c = input$h;

    var rgb2hcg = rgb2hcg_1;

    Color$z.prototype.hcg = function() {
        return rgb2hcg(this._rgb);
    };

    chroma$g.hcg = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$z, [ null ].concat( args, ['hcg']) ));
    };

    input$c.format.hcg = hcg2rgb_1;

    input$c.autodetect.push({
        p: 1,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$q(args, 'hcg');
            if (type$j(args) === 'array' && args.length === 3) {
                return 'hcg';
            }
        }
    });

    var unpack$p = utils.unpack;
    var last = utils.last;
    var round$3 = Math.round;

    var rgb2hex$2 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$p(args, 'rgba');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var a = ref[3];
        var mode = last(args) || 'auto';
        if (a === undefined) { a = 1; }
        if (mode === 'auto') {
            mode = a < 1 ? 'rgba' : 'rgb';
        }
        r = round$3(r);
        g = round$3(g);
        b = round$3(b);
        var u = r << 16 | g << 8 | b;
        var str = "000000" + u.toString(16); //#.toUpperCase();
        str = str.substr(str.length - 6);
        var hxa = '0' + round$3(a * 255).toString(16);
        hxa = hxa.substr(hxa.length - 2);
        switch (mode.toLowerCase()) {
            case 'rgba': return ("#" + str + hxa);
            case 'argb': return ("#" + hxa + str);
            default: return ("#" + str);
        }
    };

    var rgb2hex_1 = rgb2hex$2;

    var RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    var RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;

    var hex2rgb$1 = function (hex) {
        if (hex.match(RE_HEX)) {
            // remove optional leading #
            if (hex.length === 4 || hex.length === 7) {
                hex = hex.substr(1);
            }
            // expand short-notation to full six-digit
            if (hex.length === 3) {
                hex = hex.split('');
                hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
            }
            var u = parseInt(hex, 16);
            var r = u >> 16;
            var g = u >> 8 & 0xFF;
            var b = u & 0xFF;
            return [r,g,b,1];
        }

        // match rgba hex format, eg #FF000077
        if (hex.match(RE_HEXA)) {
            if (hex.length === 5 || hex.length === 9) {
                // remove optional leading #
                hex = hex.substr(1);
            }
            // expand short-notation to full eight-digit
            if (hex.length === 4) {
                hex = hex.split('');
                hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2]+hex[3]+hex[3];
            }
            var u$1 = parseInt(hex, 16);
            var r$1 = u$1 >> 24 & 0xFF;
            var g$1 = u$1 >> 16 & 0xFF;
            var b$1 = u$1 >> 8 & 0xFF;
            var a = Math.round((u$1 & 0xFF) / 0xFF * 100) / 100;
            return [r$1,g$1,b$1,a];
        }

        // we used to check for css colors here
        // if _input.css? and rgb = _input.css hex
        //     return rgb

        throw new Error(("unknown hex color: " + hex));
    };

    var hex2rgb_1 = hex2rgb$1;

    var chroma$f = chroma_1;
    var Color$y = Color_1;
    var type$i = utils.type;
    var input$b = input$h;

    var rgb2hex$1 = rgb2hex_1;

    Color$y.prototype.hex = function(mode) {
        return rgb2hex$1(this._rgb, mode);
    };

    chroma$f.hex = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$y, [ null ].concat( args, ['hex']) ));
    };

    input$b.format.hex = hex2rgb_1;
    input$b.autodetect.push({
        p: 4,
        test: function (h) {
            var rest = [], len = arguments.length - 1;
            while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

            if (!rest.length && type$i(h) === 'string' && [3,4,5,6,7,8,9].indexOf(h.length) >= 0) {
                return 'hex';
            }
        }
    });

    var unpack$o = utils.unpack;
    var TWOPI$2 = utils.TWOPI;
    var min$2 = Math.min;
    var sqrt$4 = Math.sqrt;
    var acos = Math.acos;

    var rgb2hsi$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        /*
        borrowed from here:
        http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/rgb2hsi.cpp
        */
        var ref = unpack$o(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        r /= 255;
        g /= 255;
        b /= 255;
        var h;
        var min_ = min$2(r,g,b);
        var i = (r+g+b) / 3;
        var s = i > 0 ? 1 - min_/i : 0;
        if (s === 0) {
            h = NaN;
        } else {
            h = ((r-g)+(r-b)) / 2;
            h /= sqrt$4((r-g)*(r-g) + (r-b)*(g-b));
            h = acos(h);
            if (b > g) {
                h = TWOPI$2 - h;
            }
            h /= TWOPI$2;
        }
        return [h*360,s,i];
    };

    var rgb2hsi_1 = rgb2hsi$1;

    var unpack$n = utils.unpack;
    var limit = utils.limit;
    var TWOPI$1 = utils.TWOPI;
    var PITHIRD = utils.PITHIRD;
    var cos$4 = Math.cos;

    /*
     * hue [0..360]
     * saturation [0..1]
     * intensity [0..1]
     */
    var hsi2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        /*
        borrowed from here:
        http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
        */
        args = unpack$n(args, 'hsi');
        var h = args[0];
        var s = args[1];
        var i = args[2];
        var r,g,b;

        if (isNaN(h)) { h = 0; }
        if (isNaN(s)) { s = 0; }
        // normalize hue
        if (h > 360) { h -= 360; }
        if (h < 0) { h += 360; }
        h /= 360;
        if (h < 1/3) {
            b = (1-s)/3;
            r = (1+s*cos$4(TWOPI$1*h)/cos$4(PITHIRD-TWOPI$1*h))/3;
            g = 1 - (b+r);
        } else if (h < 2/3) {
            h -= 1/3;
            r = (1-s)/3;
            g = (1+s*cos$4(TWOPI$1*h)/cos$4(PITHIRD-TWOPI$1*h))/3;
            b = 1 - (r+g);
        } else {
            h -= 2/3;
            g = (1-s)/3;
            b = (1+s*cos$4(TWOPI$1*h)/cos$4(PITHIRD-TWOPI$1*h))/3;
            r = 1 - (g+b);
        }
        r = limit(i*r*3);
        g = limit(i*g*3);
        b = limit(i*b*3);
        return [r*255, g*255, b*255, args.length > 3 ? args[3] : 1];
    };

    var hsi2rgb_1 = hsi2rgb;

    var unpack$m = utils.unpack;
    var type$h = utils.type;
    var chroma$e = chroma_1;
    var Color$x = Color_1;
    var input$a = input$h;

    var rgb2hsi = rgb2hsi_1;

    Color$x.prototype.hsi = function() {
        return rgb2hsi(this._rgb);
    };

    chroma$e.hsi = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$x, [ null ].concat( args, ['hsi']) ));
    };

    input$a.format.hsi = hsi2rgb_1;

    input$a.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$m(args, 'hsi');
            if (type$h(args) === 'array' && args.length === 3) {
                return 'hsi';
            }
        }
    });

    var unpack$l = utils.unpack;
    var type$g = utils.type;
    var chroma$d = chroma_1;
    var Color$w = Color_1;
    var input$9 = input$h;

    var rgb2hsl$1 = rgb2hsl_1;

    Color$w.prototype.hsl = function() {
        return rgb2hsl$1(this._rgb);
    };

    chroma$d.hsl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$w, [ null ].concat( args, ['hsl']) ));
    };

    input$9.format.hsl = hsl2rgb_1;

    input$9.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$l(args, 'hsl');
            if (type$g(args) === 'array' && args.length === 3) {
                return 'hsl';
            }
        }
    });

    var unpack$k = utils.unpack;
    var min$1 = Math.min;
    var max$1 = Math.max;

    /*
     * supported arguments:
     * - rgb2hsv(r,g,b)
     * - rgb2hsv([r,g,b])
     * - rgb2hsv({r,g,b})
     */
    var rgb2hsl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$k(args, 'rgb');
        var r = args[0];
        var g = args[1];
        var b = args[2];
        var min_ = min$1(r, g, b);
        var max_ = max$1(r, g, b);
        var delta = max_ - min_;
        var h,s,v;
        v = max_ / 255.0;
        if (max_ === 0) {
            h = Number.NaN;
            s = 0;
        } else {
            s = delta / max_;
            if (r === max_) { h = (g - b) / delta; }
            if (g === max_) { h = 2+(b - r) / delta; }
            if (b === max_) { h = 4+(r - g) / delta; }
            h *= 60;
            if (h < 0) { h += 360; }
        }
        return [h, s, v]
    };

    var rgb2hsv$1 = rgb2hsl;

    var unpack$j = utils.unpack;
    var floor$2 = Math.floor;

    var hsv2rgb = function () {
        var assign, assign$1, assign$2, assign$3, assign$4, assign$5;

        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        args = unpack$j(args, 'hsv');
        var h = args[0];
        var s = args[1];
        var v = args[2];
        var r,g,b;
        v *= 255;
        if (s === 0) {
            r = g = b = v;
        } else {
            if (h === 360) { h = 0; }
            if (h > 360) { h -= 360; }
            if (h < 0) { h += 360; }
            h /= 60;

            var i = floor$2(h);
            var f = h - i;
            var p = v * (1 - s);
            var q = v * (1 - s * f);
            var t = v * (1 - s * (1 - f));

            switch (i) {
                case 0: (assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2]); break
                case 1: (assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2]); break
                case 2: (assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2]); break
                case 3: (assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2]); break
                case 4: (assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2]); break
                case 5: (assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2]); break
            }
        }
        return [r,g,b,args.length > 3?args[3]:1];
    };

    var hsv2rgb_1 = hsv2rgb;

    var unpack$i = utils.unpack;
    var type$f = utils.type;
    var chroma$c = chroma_1;
    var Color$v = Color_1;
    var input$8 = input$h;

    var rgb2hsv = rgb2hsv$1;

    Color$v.prototype.hsv = function() {
        return rgb2hsv(this._rgb);
    };

    chroma$c.hsv = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$v, [ null ].concat( args, ['hsv']) ));
    };

    input$8.format.hsv = hsv2rgb_1;

    input$8.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$i(args, 'hsv');
            if (type$f(args) === 'array' && args.length === 3) {
                return 'hsv';
            }
        }
    });

    var labConstants = {
        // Corresponds roughly to RGB brighter/darker
        Kn: 18,

        // D65 standard referent
        Xn: 0.950470,
        Yn: 1,
        Zn: 1.088830,

        t0: 0.137931034,  // 4 / 29
        t1: 0.206896552,  // 6 / 29
        t2: 0.12841855,   // 3 * t1 * t1
        t3: 0.008856452,  // t1 * t1 * t1
    };

    var LAB_CONSTANTS$3 = labConstants;
    var unpack$h = utils.unpack;
    var pow$a = Math.pow;

    var rgb2lab$2 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$h(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2xyz(r,g,b);
        var x = ref$1[0];
        var y = ref$1[1];
        var z = ref$1[2];
        var l = 116 * y - 16;
        return [l < 0 ? 0 : l, 500 * (x - y), 200 * (y - z)];
    };

    var rgb_xyz = function (r) {
        if ((r /= 255) <= 0.04045) { return r / 12.92; }
        return pow$a((r + 0.055) / 1.055, 2.4);
    };

    var xyz_lab = function (t) {
        if (t > LAB_CONSTANTS$3.t3) { return pow$a(t, 1 / 3); }
        return t / LAB_CONSTANTS$3.t2 + LAB_CONSTANTS$3.t0;
    };

    var rgb2xyz = function (r,g,b) {
        r = rgb_xyz(r);
        g = rgb_xyz(g);
        b = rgb_xyz(b);
        var x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / LAB_CONSTANTS$3.Xn);
        var y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / LAB_CONSTANTS$3.Yn);
        var z = xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / LAB_CONSTANTS$3.Zn);
        return [x,y,z];
    };

    var rgb2lab_1 = rgb2lab$2;

    var LAB_CONSTANTS$2 = labConstants;
    var unpack$g = utils.unpack;
    var pow$9 = Math.pow;

    /*
     * L* [0..100]
     * a [-100..100]
     * b [-100..100]
     */
    var lab2rgb$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$g(args, 'lab');
        var l = args[0];
        var a = args[1];
        var b = args[2];
        var x,y,z, r,g,b_;

        y = (l + 16) / 116;
        x = isNaN(a) ? y : y + a / 500;
        z = isNaN(b) ? y : y - b / 200;

        y = LAB_CONSTANTS$2.Yn * lab_xyz(y);
        x = LAB_CONSTANTS$2.Xn * lab_xyz(x);
        z = LAB_CONSTANTS$2.Zn * lab_xyz(z);

        r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);  // D65 -> sRGB
        g = xyz_rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z);
        b_ = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);

        return [r,g,b_,args.length > 3 ? args[3] : 1];
    };

    var xyz_rgb = function (r) {
        return 255 * (r <= 0.00304 ? 12.92 * r : 1.055 * pow$9(r, 1 / 2.4) - 0.055)
    };

    var lab_xyz = function (t) {
        return t > LAB_CONSTANTS$2.t1 ? t * t * t : LAB_CONSTANTS$2.t2 * (t - LAB_CONSTANTS$2.t0)
    };

    var lab2rgb_1 = lab2rgb$1;

    var unpack$f = utils.unpack;
    var type$e = utils.type;
    var chroma$b = chroma_1;
    var Color$u = Color_1;
    var input$7 = input$h;

    var rgb2lab$1 = rgb2lab_1;

    Color$u.prototype.lab = function() {
        return rgb2lab$1(this._rgb);
    };

    chroma$b.lab = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$u, [ null ].concat( args, ['lab']) ));
    };

    input$7.format.lab = lab2rgb_1;

    input$7.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$f(args, 'lab');
            if (type$e(args) === 'array' && args.length === 3) {
                return 'lab';
            }
        }
    });

    var unpack$e = utils.unpack;
    var RAD2DEG = utils.RAD2DEG;
    var sqrt$3 = Math.sqrt;
    var atan2$2 = Math.atan2;
    var round$2 = Math.round;

    var lab2lch$2 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$e(args, 'lab');
        var l = ref[0];
        var a = ref[1];
        var b = ref[2];
        var c = sqrt$3(a * a + b * b);
        var h = (atan2$2(b, a) * RAD2DEG + 360) % 360;
        if (round$2(c*10000) === 0) { h = Number.NaN; }
        return [l, c, h];
    };

    var lab2lch_1 = lab2lch$2;

    var unpack$d = utils.unpack;
    var rgb2lab = rgb2lab_1;
    var lab2lch$1 = lab2lch_1;

    var rgb2lch$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$d(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2lab(r,g,b);
        var l = ref$1[0];
        var a = ref$1[1];
        var b_ = ref$1[2];
        return lab2lch$1(l,a,b_);
    };

    var rgb2lch_1 = rgb2lch$1;

    var unpack$c = utils.unpack;
    var DEG2RAD = utils.DEG2RAD;
    var sin$3 = Math.sin;
    var cos$3 = Math.cos;

    var lch2lab$2 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        /*
        Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel.
        These formulas were invented by David Dalrymple to obtain maximum contrast without going
        out of gamut if the parameters are in the range 0-1.

        A saturation multiplier was added by Gregor Aisch
        */
        var ref = unpack$c(args, 'lch');
        var l = ref[0];
        var c = ref[1];
        var h = ref[2];
        if (isNaN(h)) { h = 0; }
        h = h * DEG2RAD;
        return [l, cos$3(h) * c, sin$3(h) * c]
    };

    var lch2lab_1 = lch2lab$2;

    var unpack$b = utils.unpack;
    var lch2lab$1 = lch2lab_1;
    var lab2rgb = lab2rgb_1;

    var lch2rgb$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$b(args, 'lch');
        var l = args[0];
        var c = args[1];
        var h = args[2];
        var ref = lch2lab$1 (l,c,h);
        var L = ref[0];
        var a = ref[1];
        var b_ = ref[2];
        var ref$1 = lab2rgb (L,a,b_);
        var r = ref$1[0];
        var g = ref$1[1];
        var b = ref$1[2];
        return [r, g, b, args.length > 3 ? args[3] : 1];
    };

    var lch2rgb_1 = lch2rgb$1;

    var unpack$a = utils.unpack;
    var lch2rgb = lch2rgb_1;

    var hcl2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var hcl = unpack$a(args, 'hcl').reverse();
        return lch2rgb.apply(void 0, hcl);
    };

    var hcl2rgb_1 = hcl2rgb;

    var unpack$9 = utils.unpack;
    var type$d = utils.type;
    var chroma$a = chroma_1;
    var Color$t = Color_1;
    var input$6 = input$h;

    var rgb2lch = rgb2lch_1;

    Color$t.prototype.lch = function() { return rgb2lch(this._rgb); };
    Color$t.prototype.hcl = function() { return rgb2lch(this._rgb).reverse(); };

    chroma$a.lch = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$t, [ null ].concat( args, ['lch']) ));
    };
    chroma$a.hcl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$t, [ null ].concat( args, ['hcl']) ));
    };

    input$6.format.lch = lch2rgb_1;
    input$6.format.hcl = hcl2rgb_1;

    ['lch','hcl'].forEach(function (m) { return input$6.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$9(args, m);
            if (type$d(args) === 'array' && args.length === 3) {
                return m;
            }
        }
    }); });

    /**
    	X11 color names

    	http://www.w3.org/TR/css3-color/#svg-color
    */

    var w3cx11$1 = {
        aliceblue: '#f0f8ff',
        antiquewhite: '#faebd7',
        aqua: '#00ffff',
        aquamarine: '#7fffd4',
        azure: '#f0ffff',
        beige: '#f5f5dc',
        bisque: '#ffe4c4',
        black: '#000000',
        blanchedalmond: '#ffebcd',
        blue: '#0000ff',
        blueviolet: '#8a2be2',
        brown: '#a52a2a',
        burlywood: '#deb887',
        cadetblue: '#5f9ea0',
        chartreuse: '#7fff00',
        chocolate: '#d2691e',
        coral: '#ff7f50',
        cornflower: '#6495ed',
        cornflowerblue: '#6495ed',
        cornsilk: '#fff8dc',
        crimson: '#dc143c',
        cyan: '#00ffff',
        darkblue: '#00008b',
        darkcyan: '#008b8b',
        darkgoldenrod: '#b8860b',
        darkgray: '#a9a9a9',
        darkgreen: '#006400',
        darkgrey: '#a9a9a9',
        darkkhaki: '#bdb76b',
        darkmagenta: '#8b008b',
        darkolivegreen: '#556b2f',
        darkorange: '#ff8c00',
        darkorchid: '#9932cc',
        darkred: '#8b0000',
        darksalmon: '#e9967a',
        darkseagreen: '#8fbc8f',
        darkslateblue: '#483d8b',
        darkslategray: '#2f4f4f',
        darkslategrey: '#2f4f4f',
        darkturquoise: '#00ced1',
        darkviolet: '#9400d3',
        deeppink: '#ff1493',
        deepskyblue: '#00bfff',
        dimgray: '#696969',
        dimgrey: '#696969',
        dodgerblue: '#1e90ff',
        firebrick: '#b22222',
        floralwhite: '#fffaf0',
        forestgreen: '#228b22',
        fuchsia: '#ff00ff',
        gainsboro: '#dcdcdc',
        ghostwhite: '#f8f8ff',
        gold: '#ffd700',
        goldenrod: '#daa520',
        gray: '#808080',
        green: '#008000',
        greenyellow: '#adff2f',
        grey: '#808080',
        honeydew: '#f0fff0',
        hotpink: '#ff69b4',
        indianred: '#cd5c5c',
        indigo: '#4b0082',
        ivory: '#fffff0',
        khaki: '#f0e68c',
        laserlemon: '#ffff54',
        lavender: '#e6e6fa',
        lavenderblush: '#fff0f5',
        lawngreen: '#7cfc00',
        lemonchiffon: '#fffacd',
        lightblue: '#add8e6',
        lightcoral: '#f08080',
        lightcyan: '#e0ffff',
        lightgoldenrod: '#fafad2',
        lightgoldenrodyellow: '#fafad2',
        lightgray: '#d3d3d3',
        lightgreen: '#90ee90',
        lightgrey: '#d3d3d3',
        lightpink: '#ffb6c1',
        lightsalmon: '#ffa07a',
        lightseagreen: '#20b2aa',
        lightskyblue: '#87cefa',
        lightslategray: '#778899',
        lightslategrey: '#778899',
        lightsteelblue: '#b0c4de',
        lightyellow: '#ffffe0',
        lime: '#00ff00',
        limegreen: '#32cd32',
        linen: '#faf0e6',
        magenta: '#ff00ff',
        maroon: '#800000',
        maroon2: '#7f0000',
        maroon3: '#b03060',
        mediumaquamarine: '#66cdaa',
        mediumblue: '#0000cd',
        mediumorchid: '#ba55d3',
        mediumpurple: '#9370db',
        mediumseagreen: '#3cb371',
        mediumslateblue: '#7b68ee',
        mediumspringgreen: '#00fa9a',
        mediumturquoise: '#48d1cc',
        mediumvioletred: '#c71585',
        midnightblue: '#191970',
        mintcream: '#f5fffa',
        mistyrose: '#ffe4e1',
        moccasin: '#ffe4b5',
        navajowhite: '#ffdead',
        navy: '#000080',
        oldlace: '#fdf5e6',
        olive: '#808000',
        olivedrab: '#6b8e23',
        orange: '#ffa500',
        orangered: '#ff4500',
        orchid: '#da70d6',
        palegoldenrod: '#eee8aa',
        palegreen: '#98fb98',
        paleturquoise: '#afeeee',
        palevioletred: '#db7093',
        papayawhip: '#ffefd5',
        peachpuff: '#ffdab9',
        peru: '#cd853f',
        pink: '#ffc0cb',
        plum: '#dda0dd',
        powderblue: '#b0e0e6',
        purple: '#800080',
        purple2: '#7f007f',
        purple3: '#a020f0',
        rebeccapurple: '#663399',
        red: '#ff0000',
        rosybrown: '#bc8f8f',
        royalblue: '#4169e1',
        saddlebrown: '#8b4513',
        salmon: '#fa8072',
        sandybrown: '#f4a460',
        seagreen: '#2e8b57',
        seashell: '#fff5ee',
        sienna: '#a0522d',
        silver: '#c0c0c0',
        skyblue: '#87ceeb',
        slateblue: '#6a5acd',
        slategray: '#708090',
        slategrey: '#708090',
        snow: '#fffafa',
        springgreen: '#00ff7f',
        steelblue: '#4682b4',
        tan: '#d2b48c',
        teal: '#008080',
        thistle: '#d8bfd8',
        tomato: '#ff6347',
        turquoise: '#40e0d0',
        violet: '#ee82ee',
        wheat: '#f5deb3',
        white: '#ffffff',
        whitesmoke: '#f5f5f5',
        yellow: '#ffff00',
        yellowgreen: '#9acd32'
    };

    var w3cx11_1 = w3cx11$1;

    var Color$s = Color_1;
    var input$5 = input$h;
    var type$c = utils.type;

    var w3cx11 = w3cx11_1;
    var hex2rgb = hex2rgb_1;
    var rgb2hex = rgb2hex_1;

    Color$s.prototype.name = function() {
        var hex = rgb2hex(this._rgb, 'rgb');
        for (var i = 0, list = Object.keys(w3cx11); i < list.length; i += 1) {
            var n = list[i];

            if (w3cx11[n] === hex) { return n.toLowerCase(); }
        }
        return hex;
    };

    input$5.format.named = function (name) {
        name = name.toLowerCase();
        if (w3cx11[name]) { return hex2rgb(w3cx11[name]); }
        throw new Error('unknown color name: '+name);
    };

    input$5.autodetect.push({
        p: 5,
        test: function (h) {
            var rest = [], len = arguments.length - 1;
            while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

            if (!rest.length && type$c(h) === 'string' && w3cx11[h.toLowerCase()]) {
                return 'named';
            }
        }
    });

    var unpack$8 = utils.unpack;

    var rgb2num$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$8(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        return (r << 16) + (g << 8) + b;
    };

    var rgb2num_1 = rgb2num$1;

    var type$b = utils.type;

    var num2rgb = function (num) {
        if (type$b(num) == "number" && num >= 0 && num <= 0xFFFFFF) {
            var r = num >> 16;
            var g = (num >> 8) & 0xFF;
            var b = num & 0xFF;
            return [r,g,b,1];
        }
        throw new Error("unknown num color: "+num);
    };

    var num2rgb_1 = num2rgb;

    var chroma$9 = chroma_1;
    var Color$r = Color_1;
    var input$4 = input$h;
    var type$a = utils.type;

    var rgb2num = rgb2num_1;

    Color$r.prototype.num = function() {
        return rgb2num(this._rgb);
    };

    chroma$9.num = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$r, [ null ].concat( args, ['num']) ));
    };

    input$4.format.num = num2rgb_1;

    input$4.autodetect.push({
        p: 5,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            if (args.length === 1 && type$a(args[0]) === 'number' && args[0] >= 0 && args[0] <= 0xFFFFFF) {
                return 'num';
            }
        }
    });

    var chroma$8 = chroma_1;
    var Color$q = Color_1;
    var input$3 = input$h;
    var unpack$7 = utils.unpack;
    var type$9 = utils.type;
    var round$1 = Math.round;

    Color$q.prototype.rgb = function(rnd) {
        if ( rnd === void 0 ) rnd=true;

        if (rnd === false) { return this._rgb.slice(0,3); }
        return this._rgb.slice(0,3).map(round$1);
    };

    Color$q.prototype.rgba = function(rnd) {
        if ( rnd === void 0 ) rnd=true;

        return this._rgb.slice(0,4).map(function (v,i) {
            return i<3 ? (rnd === false ? v : round$1(v)) : v;
        });
    };

    chroma$8.rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$q, [ null ].concat( args, ['rgb']) ));
    };

    input$3.format.rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgba = unpack$7(args, 'rgba');
        if (rgba[3] === undefined) { rgba[3] = 1; }
        return rgba;
    };

    input$3.autodetect.push({
        p: 3,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$7(args, 'rgba');
            if (type$9(args) === 'array' && (args.length === 3 ||
                args.length === 4 && type$9(args[3]) == 'number' && args[3] >= 0 && args[3] <= 1)) {
                return 'rgb';
            }
        }
    });

    /*
     * Based on implementation by Neil Bartlett
     * https://github.com/neilbartlett/color-temperature
     */

    var log$1 = Math.log;

    var temperature2rgb$1 = function (kelvin) {
        var temp = kelvin / 100;
        var r,g,b;
        if (temp < 66) {
            r = 255;
            g = temp < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (g = temp-2) + 104.49216199393888 * log$1(g);
            b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp-10) + 115.67994401066147 * log$1(b);
        } else {
            r = 351.97690566805693 + 0.114206453784165 * (r = temp-55) - 40.25366309332127 * log$1(r);
            g = 325.4494125711974 + 0.07943456536662342 * (g = temp-50) - 28.0852963507957 * log$1(g);
            b = 255;
        }
        return [r,g,b,1];
    };

    var temperature2rgb_1 = temperature2rgb$1;

    /*
     * Based on implementation by Neil Bartlett
     * https://github.com/neilbartlett/color-temperature
     **/

    var temperature2rgb = temperature2rgb_1;
    var unpack$6 = utils.unpack;
    var round = Math.round;

    var rgb2temperature$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgb = unpack$6(args, 'rgb');
        var r = rgb[0], b = rgb[2];
        var minTemp = 1000;
        var maxTemp = 40000;
        var eps = 0.4;
        var temp;
        while (maxTemp - minTemp > eps) {
            temp = (maxTemp + minTemp) * 0.5;
            var rgb$1 = temperature2rgb(temp);
            if ((rgb$1[2] / rgb$1[0]) >= (b / r)) {
                maxTemp = temp;
            } else {
                minTemp = temp;
            }
        }
        return round(temp);
    };

    var rgb2temperature_1 = rgb2temperature$1;

    var chroma$7 = chroma_1;
    var Color$p = Color_1;
    var input$2 = input$h;

    var rgb2temperature = rgb2temperature_1;

    Color$p.prototype.temp =
    Color$p.prototype.kelvin =
    Color$p.prototype.temperature = function() {
        return rgb2temperature(this._rgb);
    };

    chroma$7.temp =
    chroma$7.kelvin =
    chroma$7.temperature = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$p, [ null ].concat( args, ['temp']) ));
    };

    input$2.format.temp =
    input$2.format.kelvin =
    input$2.format.temperature = temperature2rgb_1;

    var unpack$5 = utils.unpack;
    var cbrt = Math.cbrt;
    var pow$8 = Math.pow;
    var sign$1 = Math.sign;

    var rgb2oklab$2 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        // OKLab color space implementation taken from
        // https://bottosson.github.io/posts/oklab/
        var ref = unpack$5(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = [rgb2lrgb(r / 255), rgb2lrgb(g / 255), rgb2lrgb(b / 255)];
        var lr = ref$1[0];
        var lg = ref$1[1];
        var lb = ref$1[2];
        var l = cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
        var m = cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
        var s = cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);

        return [
            0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
            1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
            0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s
        ];
    };

    var rgb2oklab_1 = rgb2oklab$2;

    function rgb2lrgb(c) {
        var abs = Math.abs(c);
        if (abs < 0.04045) {
            return c / 12.92;
        }
        return (sign$1(c) || 1) * pow$8((abs + 0.055) / 1.055, 2.4);
    }

    var unpack$4 = utils.unpack;
    var pow$7 = Math.pow;
    var sign = Math.sign;

    /*
     * L* [0..100]
     * a [-100..100]
     * b [-100..100]
     */
    var oklab2rgb$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$4(args, 'lab');
        var L = args[0];
        var a = args[1];
        var b = args[2];

        var l = pow$7(L + 0.3963377774 * a + 0.2158037573 * b, 3);
        var m = pow$7(L - 0.1055613458 * a - 0.0638541728 * b, 3);
        var s = pow$7(L - 0.0894841775 * a - 1.291485548 * b, 3);

        return [
            255 * lrgb2rgb(+4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
            255 * lrgb2rgb(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
            255 * lrgb2rgb(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s),
            args.length > 3 ? args[3] : 1
        ];
    };

    var oklab2rgb_1 = oklab2rgb$1;

    function lrgb2rgb(c) {
        var abs = Math.abs(c);
        if (abs > 0.0031308) {
            return (sign(c) || 1) * (1.055 * pow$7(abs, 1 / 2.4) - 0.055);
        }
        return c * 12.92;
    }

    var unpack$3 = utils.unpack;
    var type$8 = utils.type;
    var chroma$6 = chroma_1;
    var Color$o = Color_1;
    var input$1 = input$h;

    var rgb2oklab$1 = rgb2oklab_1;

    Color$o.prototype.oklab = function () {
        return rgb2oklab$1(this._rgb);
    };

    chroma$6.oklab = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$o, [ null ].concat( args, ['oklab']) ));
    };

    input$1.format.oklab = oklab2rgb_1;

    input$1.autodetect.push({
        p: 3,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$3(args, 'oklab');
            if (type$8(args) === 'array' && args.length === 3) {
                return 'oklab';
            }
        }
    });

    var unpack$2 = utils.unpack;
    var rgb2oklab = rgb2oklab_1;
    var lab2lch = lab2lch_1;

    var rgb2oklch$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$2(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2oklab(r, g, b);
        var l = ref$1[0];
        var a = ref$1[1];
        var b_ = ref$1[2];
        return lab2lch(l, a, b_);
    };

    var rgb2oklch_1 = rgb2oklch$1;

    var unpack$1 = utils.unpack;
    var lch2lab = lch2lab_1;
    var oklab2rgb = oklab2rgb_1;

    var oklch2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$1(args, 'lch');
        var l = args[0];
        var c = args[1];
        var h = args[2];
        var ref = lch2lab(l, c, h);
        var L = ref[0];
        var a = ref[1];
        var b_ = ref[2];
        var ref$1 = oklab2rgb(L, a, b_);
        var r = ref$1[0];
        var g = ref$1[1];
        var b = ref$1[2];
        return [r, g, b, args.length > 3 ? args[3] : 1];
    };

    var oklch2rgb_1 = oklch2rgb;

    var unpack = utils.unpack;
    var type$7 = utils.type;
    var chroma$5 = chroma_1;
    var Color$n = Color_1;
    var input = input$h;

    var rgb2oklch = rgb2oklch_1;

    Color$n.prototype.oklch = function () {
        return rgb2oklch(this._rgb);
    };

    chroma$5.oklch = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color$n, [ null ].concat( args, ['oklch']) ));
    };

    input.format.oklch = oklch2rgb_1;

    input.autodetect.push({
        p: 3,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack(args, 'oklch');
            if (type$7(args) === 'array' && args.length === 3) {
                return 'oklch';
            }
        }
    });

    var Color$m = Color_1;
    var type$6 = utils.type;

    Color$m.prototype.alpha = function(a, mutate) {
        if ( mutate === void 0 ) mutate=false;

        if (a !== undefined && type$6(a) === 'number') {
            if (mutate) {
                this._rgb[3] = a;
                return this;
            }
            return new Color$m([this._rgb[0], this._rgb[1], this._rgb[2], a], 'rgb');
        }
        return this._rgb[3];
    };

    var Color$l = Color_1;

    Color$l.prototype.clipped = function() {
        return this._rgb._clipped || false;
    };

    var Color$k = Color_1;
    var LAB_CONSTANTS$1 = labConstants;

    Color$k.prototype.darken = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	var me = this;
    	var lab = me.lab();
    	lab[0] -= LAB_CONSTANTS$1.Kn * amount;
    	return new Color$k(lab, 'lab').alpha(me.alpha(), true);
    };

    Color$k.prototype.brighten = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	return this.darken(-amount);
    };

    Color$k.prototype.darker = Color$k.prototype.darken;
    Color$k.prototype.brighter = Color$k.prototype.brighten;

    var Color$j = Color_1;

    Color$j.prototype.get = function (mc) {
        var ref = mc.split('.');
        var mode = ref[0];
        var channel = ref[1];
        var src = this[mode]();
        if (channel) {
            var i = mode.indexOf(channel) - (mode.substr(0, 2) === 'ok' ? 2 : 0);
            if (i > -1) { return src[i]; }
            throw new Error(("unknown channel " + channel + " in mode " + mode));
        } else {
            return src;
        }
    };

    var Color$i = Color_1;
    var type$5 = utils.type;
    var pow$6 = Math.pow;

    var EPS = 1e-7;
    var MAX_ITER = 20;

    Color$i.prototype.luminance = function(lum) {
        if (lum !== undefined && type$5(lum) === 'number') {
            if (lum === 0) {
                // return pure black
                return new Color$i([0,0,0,this._rgb[3]], 'rgb');
            }
            if (lum === 1) {
                // return pure white
                return new Color$i([255,255,255,this._rgb[3]], 'rgb');
            }
            // compute new color using...
            var cur_lum = this.luminance();
            var mode = 'rgb';
            var max_iter = MAX_ITER;

            var test = function (low, high) {
                var mid = low.interpolate(high, 0.5, mode);
                var lm = mid.luminance();
                if (Math.abs(lum - lm) < EPS || !max_iter--) {
                    // close enough
                    return mid;
                }
                return lm > lum ? test(low, mid) : test(mid, high);
            };

            var rgb = (cur_lum > lum ? test(new Color$i([0,0,0]), this) : test(this, new Color$i([255,255,255]))).rgb();
            return new Color$i(rgb.concat( [this._rgb[3]]));
        }
        return rgb2luminance.apply(void 0, (this._rgb).slice(0,3));
    };


    var rgb2luminance = function (r,g,b) {
        // relative luminance
        // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        r = luminance_x(r);
        g = luminance_x(g);
        b = luminance_x(b);
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    var luminance_x = function (x) {
        x /= 255;
        return x <= 0.03928 ? x/12.92 : pow$6((x+0.055)/1.055, 2.4);
    };

    var interpolator$1 = {};

    var Color$h = Color_1;
    var type$4 = utils.type;
    var interpolator = interpolator$1;

    var mix$1 = function (col1, col2, f) {
        if ( f === void 0 ) f=0.5;
        var rest = [], len = arguments.length - 3;
        while ( len-- > 0 ) rest[ len ] = arguments[ len + 3 ];

        var mode = rest[0] || 'lrgb';
        if (!interpolator[mode] && !rest.length) {
            // fall back to the first supported mode
            mode = Object.keys(interpolator)[0];
        }
        if (!interpolator[mode]) {
            throw new Error(("interpolation mode " + mode + " is not defined"));
        }
        if (type$4(col1) !== 'object') { col1 = new Color$h(col1); }
        if (type$4(col2) !== 'object') { col2 = new Color$h(col2); }
        return interpolator[mode](col1, col2, f)
            .alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
    };

    var Color$g = Color_1;
    var mix = mix$1;

    Color$g.prototype.mix =
    Color$g.prototype.interpolate = function(col2, f) {
    	if ( f === void 0 ) f=0.5;
    	var rest = [], len = arguments.length - 2;
    	while ( len-- > 0 ) rest[ len ] = arguments[ len + 2 ];

    	return mix.apply(void 0, [ this, col2, f ].concat( rest ));
    };

    var Color$f = Color_1;

    Color$f.prototype.premultiply = function(mutate) {
    	if ( mutate === void 0 ) mutate=false;

    	var rgb = this._rgb;
    	var a = rgb[3];
    	if (mutate) {
    		this._rgb = [rgb[0]*a, rgb[1]*a, rgb[2]*a, a];
    		return this;
    	} else {
    		return new Color$f([rgb[0]*a, rgb[1]*a, rgb[2]*a, a], 'rgb');
    	}
    };

    var Color$e = Color_1;
    var LAB_CONSTANTS = labConstants;

    Color$e.prototype.saturate = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	var me = this;
    	var lch = me.lch();
    	lch[1] += LAB_CONSTANTS.Kn * amount;
    	if (lch[1] < 0) { lch[1] = 0; }
    	return new Color$e(lch, 'lch').alpha(me.alpha(), true);
    };

    Color$e.prototype.desaturate = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	return this.saturate(-amount);
    };

    var Color$d = Color_1;
    var type$3 = utils.type;

    Color$d.prototype.set = function (mc, value, mutate) {
        if ( mutate === void 0 ) mutate = false;

        var ref = mc.split('.');
        var mode = ref[0];
        var channel = ref[1];
        var src = this[mode]();
        if (channel) {
            var i = mode.indexOf(channel) - (mode.substr(0, 2) === 'ok' ? 2 : 0);
            if (i > -1) {
                if (type$3(value) == 'string') {
                    switch (value.charAt(0)) {
                        case '+':
                            src[i] += +value;
                            break;
                        case '-':
                            src[i] += +value;
                            break;
                        case '*':
                            src[i] *= +value.substr(1);
                            break;
                        case '/':
                            src[i] /= +value.substr(1);
                            break;
                        default:
                            src[i] = +value;
                    }
                } else if (type$3(value) === 'number') {
                    src[i] = value;
                } else {
                    throw new Error("unsupported value for Color.set");
                }
                var out = new Color$d(src, mode);
                if (mutate) {
                    this._rgb = out._rgb;
                    return this;
                }
                return out;
            }
            throw new Error(("unknown channel " + channel + " in mode " + mode));
        } else {
            return src;
        }
    };

    var Color$c = Color_1;

    var rgb = function (col1, col2, f) {
        var xyz0 = col1._rgb;
        var xyz1 = col2._rgb;
        return new Color$c(
            xyz0[0] + f * (xyz1[0]-xyz0[0]),
            xyz0[1] + f * (xyz1[1]-xyz0[1]),
            xyz0[2] + f * (xyz1[2]-xyz0[2]),
            'rgb'
        )
    };

    // register interpolator
    interpolator$1.rgb = rgb;

    var Color$b = Color_1;
    var sqrt$2 = Math.sqrt;
    var pow$5 = Math.pow;

    var lrgb = function (col1, col2, f) {
        var ref = col1._rgb;
        var x1 = ref[0];
        var y1 = ref[1];
        var z1 = ref[2];
        var ref$1 = col2._rgb;
        var x2 = ref$1[0];
        var y2 = ref$1[1];
        var z2 = ref$1[2];
        return new Color$b(
            sqrt$2(pow$5(x1,2) * (1-f) + pow$5(x2,2) * f),
            sqrt$2(pow$5(y1,2) * (1-f) + pow$5(y2,2) * f),
            sqrt$2(pow$5(z1,2) * (1-f) + pow$5(z2,2) * f),
            'rgb'
        )
    };

    // register interpolator
    interpolator$1.lrgb = lrgb;

    var Color$a = Color_1;

    var lab = function (col1, col2, f) {
        var xyz0 = col1.lab();
        var xyz1 = col2.lab();
        return new Color$a(
            xyz0[0] + f * (xyz1[0]-xyz0[0]),
            xyz0[1] + f * (xyz1[1]-xyz0[1]),
            xyz0[2] + f * (xyz1[2]-xyz0[2]),
            'lab'
        )
    };

    // register interpolator
    interpolator$1.lab = lab;

    var Color$9 = Color_1;

    var _hsx = function (col1, col2, f, m) {
        var assign, assign$1;

        var xyz0, xyz1;
        if (m === 'hsl') {
            xyz0 = col1.hsl();
            xyz1 = col2.hsl();
        } else if (m === 'hsv') {
            xyz0 = col1.hsv();
            xyz1 = col2.hsv();
        } else if (m === 'hcg') {
            xyz0 = col1.hcg();
            xyz1 = col2.hcg();
        } else if (m === 'hsi') {
            xyz0 = col1.hsi();
            xyz1 = col2.hsi();
        } else if (m === 'lch' || m === 'hcl') {
            m = 'hcl';
            xyz0 = col1.hcl();
            xyz1 = col2.hcl();
        } else if (m === 'oklch') {
            xyz0 = col1.oklch().reverse();
            xyz1 = col2.oklch().reverse();
        }

        var hue0, hue1, sat0, sat1, lbv0, lbv1;
        if (m.substr(0, 1) === 'h' || m === 'oklch') {
            (assign = xyz0, hue0 = assign[0], sat0 = assign[1], lbv0 = assign[2]);
            (assign$1 = xyz1, hue1 = assign$1[0], sat1 = assign$1[1], lbv1 = assign$1[2]);
        }

        var sat, hue, lbv, dh;

        if (!isNaN(hue0) && !isNaN(hue1)) {
            // both colors have hue
            if (hue1 > hue0 && hue1 - hue0 > 180) {
                dh = hue1 - (hue0 + 360);
            } else if (hue1 < hue0 && hue0 - hue1 > 180) {
                dh = hue1 + 360 - hue0;
            } else {
                dh = hue1 - hue0;
            }
            hue = hue0 + f * dh;
        } else if (!isNaN(hue0)) {
            hue = hue0;
            if ((lbv1 == 1 || lbv1 == 0) && m != 'hsv') { sat = sat0; }
        } else if (!isNaN(hue1)) {
            hue = hue1;
            if ((lbv0 == 1 || lbv0 == 0) && m != 'hsv') { sat = sat1; }
        } else {
            hue = Number.NaN;
        }

        if (sat === undefined) { sat = sat0 + f * (sat1 - sat0); }
        lbv = lbv0 + f * (lbv1 - lbv0);
        return m === 'oklch' ? new Color$9([lbv, sat, hue], m) : new Color$9([hue, sat, lbv], m);
    };

    var interpolate_hsx$5 = _hsx;

    var lch = function (col1, col2, f) {
    	return interpolate_hsx$5(col1, col2, f, 'lch');
    };

    // register interpolator
    interpolator$1.lch = lch;
    interpolator$1.hcl = lch;

    var Color$8 = Color_1;

    var num = function (col1, col2, f) {
        var c1 = col1.num();
        var c2 = col2.num();
        return new Color$8(c1 + f * (c2-c1), 'num')
    };

    // register interpolator
    interpolator$1.num = num;

    var interpolate_hsx$4 = _hsx;

    var hcg = function (col1, col2, f) {
    	return interpolate_hsx$4(col1, col2, f, 'hcg');
    };

    // register interpolator
    interpolator$1.hcg = hcg;

    var interpolate_hsx$3 = _hsx;

    var hsi = function (col1, col2, f) {
    	return interpolate_hsx$3(col1, col2, f, 'hsi');
    };

    // register interpolator
    interpolator$1.hsi = hsi;

    var interpolate_hsx$2 = _hsx;

    var hsl = function (col1, col2, f) {
    	return interpolate_hsx$2(col1, col2, f, 'hsl');
    };

    // register interpolator
    interpolator$1.hsl = hsl;

    var interpolate_hsx$1 = _hsx;

    var hsv = function (col1, col2, f) {
    	return interpolate_hsx$1(col1, col2, f, 'hsv');
    };

    // register interpolator
    interpolator$1.hsv = hsv;

    var Color$7 = Color_1;

    var oklab = function (col1, col2, f) {
        var xyz0 = col1.oklab();
        var xyz1 = col2.oklab();
        return new Color$7(
            xyz0[0] + f * (xyz1[0] - xyz0[0]),
            xyz0[1] + f * (xyz1[1] - xyz0[1]),
            xyz0[2] + f * (xyz1[2] - xyz0[2]),
            'oklab'
        );
    };

    // register interpolator
    interpolator$1.oklab = oklab;

    var interpolate_hsx = _hsx;

    var oklch = function (col1, col2, f) {
        return interpolate_hsx(col1, col2, f, 'oklch');
    };

    // register interpolator
    interpolator$1.oklch = oklch;

    var Color$6 = Color_1;
    var clip_rgb$1 = utils.clip_rgb;
    var pow$4 = Math.pow;
    var sqrt$1 = Math.sqrt;
    var PI$1 = Math.PI;
    var cos$2 = Math.cos;
    var sin$2 = Math.sin;
    var atan2$1 = Math.atan2;

    var average = function (colors, mode, weights) {
        if ( mode === void 0 ) mode='lrgb';
        if ( weights === void 0 ) weights=null;

        var l = colors.length;
        if (!weights) { weights = Array.from(new Array(l)).map(function () { return 1; }); }
        // normalize weights
        var k = l / weights.reduce(function(a, b) { return a + b; });
        weights.forEach(function (w,i) { weights[i] *= k; });
        // convert colors to Color objects
        colors = colors.map(function (c) { return new Color$6(c); });
        if (mode === 'lrgb') {
            return _average_lrgb(colors, weights)
        }
        var first = colors.shift();
        var xyz = first.get(mode);
        var cnt = [];
        var dx = 0;
        var dy = 0;
        // initial color
        for (var i=0; i<xyz.length; i++) {
            xyz[i] = (xyz[i] || 0) * weights[0];
            cnt.push(isNaN(xyz[i]) ? 0 : weights[0]);
            if (mode.charAt(i) === 'h' && !isNaN(xyz[i])) {
                var A = xyz[i] / 180 * PI$1;
                dx += cos$2(A) * weights[0];
                dy += sin$2(A) * weights[0];
            }
        }

        var alpha = first.alpha() * weights[0];
        colors.forEach(function (c,ci) {
            var xyz2 = c.get(mode);
            alpha += c.alpha() * weights[ci+1];
            for (var i=0; i<xyz.length; i++) {
                if (!isNaN(xyz2[i])) {
                    cnt[i] += weights[ci+1];
                    if (mode.charAt(i) === 'h') {
                        var A = xyz2[i] / 180 * PI$1;
                        dx += cos$2(A) * weights[ci+1];
                        dy += sin$2(A) * weights[ci+1];
                    } else {
                        xyz[i] += xyz2[i] * weights[ci+1];
                    }
                }
            }
        });

        for (var i$1=0; i$1<xyz.length; i$1++) {
            if (mode.charAt(i$1) === 'h') {
                var A$1 = atan2$1(dy / cnt[i$1], dx / cnt[i$1]) / PI$1 * 180;
                while (A$1 < 0) { A$1 += 360; }
                while (A$1 >= 360) { A$1 -= 360; }
                xyz[i$1] = A$1;
            } else {
                xyz[i$1] = xyz[i$1]/cnt[i$1];
            }
        }
        alpha /= l;
        return (new Color$6(xyz, mode)).alpha(alpha > 0.99999 ? 1 : alpha, true);
    };


    var _average_lrgb = function (colors, weights) {
        var l = colors.length;
        var xyz = [0,0,0,0];
        for (var i=0; i < colors.length; i++) {
            var col = colors[i];
            var f = weights[i] / l;
            var rgb = col._rgb;
            xyz[0] += pow$4(rgb[0],2) * f;
            xyz[1] += pow$4(rgb[1],2) * f;
            xyz[2] += pow$4(rgb[2],2) * f;
            xyz[3] += rgb[3] * f;
        }
        xyz[0] = sqrt$1(xyz[0]);
        xyz[1] = sqrt$1(xyz[1]);
        xyz[2] = sqrt$1(xyz[2]);
        if (xyz[3] > 0.9999999) { xyz[3] = 1; }
        return new Color$6(clip_rgb$1(xyz));
    };

    // minimal multi-purpose interface

    // @requires utils color analyze

    var chroma$4 = chroma_1;
    var type$2 = utils.type;

    var pow$3 = Math.pow;

    var scale$2 = function(colors) {

        // constructor
        var _mode = 'rgb';
        var _nacol = chroma$4('#ccc');
        var _spread = 0;
        // const _fixed = false;
        var _domain = [0, 1];
        var _pos = [];
        var _padding = [0,0];
        var _classes = false;
        var _colors = [];
        var _out = false;
        var _min = 0;
        var _max = 1;
        var _correctLightness = false;
        var _colorCache = {};
        var _useCache = true;
        var _gamma = 1;

        // private methods

        var setColors = function(colors) {
            colors = colors || ['#fff', '#000'];
            if (colors && type$2(colors) === 'string' && chroma$4.brewer &&
                chroma$4.brewer[colors.toLowerCase()]) {
                colors = chroma$4.brewer[colors.toLowerCase()];
            }
            if (type$2(colors) === 'array') {
                // handle single color
                if (colors.length === 1) {
                    colors = [colors[0], colors[0]];
                }
                // make a copy of the colors
                colors = colors.slice(0);
                // convert to chroma classes
                for (var c=0; c<colors.length; c++) {
                    colors[c] = chroma$4(colors[c]);
                }
                // auto-fill color position
                _pos.length = 0;
                for (var c$1=0; c$1<colors.length; c$1++) {
                    _pos.push(c$1/(colors.length-1));
                }
            }
            resetCache();
            return _colors = colors;
        };

        var getClass = function(value) {
            if (_classes != null) {
                var n = _classes.length-1;
                var i = 0;
                while (i < n && value >= _classes[i]) {
                    i++;
                }
                return i-1;
            }
            return 0;
        };

        var tMapLightness = function (t) { return t; };
        var tMapDomain = function (t) { return t; };

        // const classifyValue = function(value) {
        //     let val = value;
        //     if (_classes.length > 2) {
        //         const n = _classes.length-1;
        //         const i = getClass(value);
        //         const minc = _classes[0] + ((_classes[1]-_classes[0]) * (0 + (_spread * 0.5)));  // center of 1st class
        //         const maxc = _classes[n-1] + ((_classes[n]-_classes[n-1]) * (1 - (_spread * 0.5)));  // center of last class
        //         val = _min + ((((_classes[i] + ((_classes[i+1] - _classes[i]) * 0.5)) - minc) / (maxc-minc)) * (_max - _min));
        //     }
        //     return val;
        // };

        var getColor = function(val, bypassMap) {
            var col, t;
            if (bypassMap == null) { bypassMap = false; }
            if (isNaN(val) || (val === null)) { return _nacol; }
            if (!bypassMap) {
                if (_classes && (_classes.length > 2)) {
                    // find the class
                    var c = getClass(val);
                    t = c / (_classes.length-2);
                } else if (_max !== _min) {
                    // just interpolate between min/max
                    t = (val - _min) / (_max - _min);
                } else {
                    t = 1;
                }
            } else {
                t = val;
            }

            // domain map
            t = tMapDomain(t);

            if (!bypassMap) {
                t = tMapLightness(t);  // lightness correction
            }

            if (_gamma !== 1) { t = pow$3(t, _gamma); }

            t = _padding[0] + (t * (1 - _padding[0] - _padding[1]));

            t = Math.min(1, Math.max(0, t));

            var k = Math.floor(t * 10000);

            if (_useCache && _colorCache[k]) {
                col = _colorCache[k];
            } else {
                if (type$2(_colors) === 'array') {
                    //for i in [0.._pos.length-1]
                    for (var i=0; i<_pos.length; i++) {
                        var p = _pos[i];
                        if (t <= p) {
                            col = _colors[i];
                            break;
                        }
                        if ((t >= p) && (i === (_pos.length-1))) {
                            col = _colors[i];
                            break;
                        }
                        if (t > p && t < _pos[i+1]) {
                            t = (t-p)/(_pos[i+1]-p);
                            col = chroma$4.interpolate(_colors[i], _colors[i+1], t, _mode);
                            break;
                        }
                    }
                } else if (type$2(_colors) === 'function') {
                    col = _colors(t);
                }
                if (_useCache) { _colorCache[k] = col; }
            }
            return col;
        };

        var resetCache = function () { return _colorCache = {}; };

        setColors(colors);

        // public interface

        var f = function(v) {
            var c = chroma$4(getColor(v));
            if (_out && c[_out]) { return c[_out](); } else { return c; }
        };

        f.classes = function(classes) {
            if (classes != null) {
                if (type$2(classes) === 'array') {
                    _classes = classes;
                    _domain = [classes[0], classes[classes.length-1]];
                } else {
                    var d = chroma$4.analyze(_domain);
                    if (classes === 0) {
                        _classes = [d.min, d.max];
                    } else {
                        _classes = chroma$4.limits(d, 'e', classes);
                    }
                }
                return f;
            }
            return _classes;
        };


        f.domain = function(domain) {
            if (!arguments.length) {
                return _domain;
            }
            _min = domain[0];
            _max = domain[domain.length-1];
            _pos = [];
            var k = _colors.length;
            if ((domain.length === k) && (_min !== _max)) {
                // update positions
                for (var i = 0, list = Array.from(domain); i < list.length; i += 1) {
                    var d = list[i];

                  _pos.push((d-_min) / (_max-_min));
                }
            } else {
                for (var c=0; c<k; c++) {
                    _pos.push(c/(k-1));
                }
                if (domain.length > 2) {
                    // set domain map
                    var tOut = domain.map(function (d,i) { return i/(domain.length-1); });
                    var tBreaks = domain.map(function (d) { return (d - _min) / (_max - _min); });
                    if (!tBreaks.every(function (val, i) { return tOut[i] === val; })) {
                        tMapDomain = function (t) {
                            if (t <= 0 || t >= 1) { return t; }
                            var i = 0;
                            while (t >= tBreaks[i+1]) { i++; }
                            var f = (t - tBreaks[i]) / (tBreaks[i+1] - tBreaks[i]);
                            var out = tOut[i] + f * (tOut[i+1] - tOut[i]);
                            return out;
                        };
                    }

                }
            }
            _domain = [_min, _max];
            return f;
        };

        f.mode = function(_m) {
            if (!arguments.length) {
                return _mode;
            }
            _mode = _m;
            resetCache();
            return f;
        };

        f.range = function(colors, _pos) {
            setColors(colors);
            return f;
        };

        f.out = function(_o) {
            _out = _o;
            return f;
        };

        f.spread = function(val) {
            if (!arguments.length) {
                return _spread;
            }
            _spread = val;
            return f;
        };

        f.correctLightness = function(v) {
            if (v == null) { v = true; }
            _correctLightness = v;
            resetCache();
            if (_correctLightness) {
                tMapLightness = function(t) {
                    var L0 = getColor(0, true).lab()[0];
                    var L1 = getColor(1, true).lab()[0];
                    var pol = L0 > L1;
                    var L_actual = getColor(t, true).lab()[0];
                    var L_ideal = L0 + ((L1 - L0) * t);
                    var L_diff = L_actual - L_ideal;
                    var t0 = 0;
                    var t1 = 1;
                    var max_iter = 20;
                    while ((Math.abs(L_diff) > 1e-2) && (max_iter-- > 0)) {
                        (function() {
                            if (pol) { L_diff *= -1; }
                            if (L_diff < 0) {
                                t0 = t;
                                t += (t1 - t) * 0.5;
                            } else {
                                t1 = t;
                                t += (t0 - t) * 0.5;
                            }
                            L_actual = getColor(t, true).lab()[0];
                            return L_diff = L_actual - L_ideal;
                        })();
                    }
                    return t;
                };
            } else {
                tMapLightness = function (t) { return t; };
            }
            return f;
        };

        f.padding = function(p) {
            if (p != null) {
                if (type$2(p) === 'number') {
                    p = [p,p];
                }
                _padding = p;
                return f;
            } else {
                return _padding;
            }
        };

        f.colors = function(numColors, out) {
            // If no arguments are given, return the original colors that were provided
            if (arguments.length < 2) { out = 'hex'; }
            var result = [];

            if (arguments.length === 0) {
                result = _colors.slice(0);

            } else if (numColors === 1) {
                result = [f(0.5)];

            } else if (numColors > 1) {
                var dm = _domain[0];
                var dd = _domain[1] - dm;
                result = __range__(0, numColors, false).map(function (i) { return f( dm + ((i/(numColors-1)) * dd) ); });

            } else { // returns all colors based on the defined classes
                colors = [];
                var samples = [];
                if (_classes && (_classes.length > 2)) {
                    for (var i = 1, end = _classes.length, asc = 1 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
                        samples.push((_classes[i-1]+_classes[i])*0.5);
                    }
                } else {
                    samples = _domain;
                }
                result = samples.map(function (v) { return f(v); });
            }

            if (chroma$4[out]) {
                result = result.map(function (c) { return c[out](); });
            }
            return result;
        };

        f.cache = function(c) {
            if (c != null) {
                _useCache = c;
                return f;
            } else {
                return _useCache;
            }
        };

        f.gamma = function(g) {
            if (g != null) {
                _gamma = g;
                return f;
            } else {
                return _gamma;
            }
        };

        f.nodata = function(d) {
            if (d != null) {
                _nacol = chroma$4(d);
                return f;
            } else {
                return _nacol;
            }
        };

        return f;
    };

    function __range__(left, right, inclusive) {
      var range = [];
      var ascending = left < right;
      var end = !inclusive ? right : ascending ? right + 1 : right - 1;
      for (var i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
        range.push(i);
      }
      return range;
    }

    //
    // interpolates between a set of colors uzing a bezier spline
    //

    // @requires utils lab
    var Color$5 = Color_1;

    var scale$1 = scale$2;

    // nth row of the pascal triangle
    var binom_row = function(n) {
        var row = [1, 1];
        for (var i = 1; i < n; i++) {
            var newrow = [1];
            for (var j = 1; j <= row.length; j++) {
                newrow[j] = (row[j] || 0) + row[j - 1];
            }
            row = newrow;
        }
        return row;
    };

    var bezier = function(colors) {
        var assign, assign$1, assign$2;

        var I, lab0, lab1, lab2;
        colors = colors.map(function (c) { return new Color$5(c); });
        if (colors.length === 2) {
            // linear interpolation
            (assign = colors.map(function (c) { return c.lab(); }), lab0 = assign[0], lab1 = assign[1]);
            I = function(t) {
                var lab = ([0, 1, 2].map(function (i) { return lab0[i] + (t * (lab1[i] - lab0[i])); }));
                return new Color$5(lab, 'lab');
            };
        } else if (colors.length === 3) {
            // quadratic bezier interpolation
            (assign$1 = colors.map(function (c) { return c.lab(); }), lab0 = assign$1[0], lab1 = assign$1[1], lab2 = assign$1[2]);
            I = function(t) {
                var lab = ([0, 1, 2].map(function (i) { return ((1-t)*(1-t) * lab0[i]) + (2 * (1-t) * t * lab1[i]) + (t * t * lab2[i]); }));
                return new Color$5(lab, 'lab');
            };
        } else if (colors.length === 4) {
            // cubic bezier interpolation
            var lab3;
            (assign$2 = colors.map(function (c) { return c.lab(); }), lab0 = assign$2[0], lab1 = assign$2[1], lab2 = assign$2[2], lab3 = assign$2[3]);
            I = function(t) {
                var lab = ([0, 1, 2].map(function (i) { return ((1-t)*(1-t)*(1-t) * lab0[i]) + (3 * (1-t) * (1-t) * t * lab1[i]) + (3 * (1-t) * t * t * lab2[i]) + (t*t*t * lab3[i]); }));
                return new Color$5(lab, 'lab');
            };
        } else if (colors.length >= 5) {
            // general case (degree n bezier)
            var labs, row, n;
            labs = colors.map(function (c) { return c.lab(); });
            n = colors.length - 1;
            row = binom_row(n);
            I = function (t) {
                var u = 1 - t;
                var lab = ([0, 1, 2].map(function (i) { return labs.reduce(function (sum, el, j) { return (sum + row[j] * Math.pow( u, (n - j) ) * Math.pow( t, j ) * el[i]); }, 0); }));
                return new Color$5(lab, 'lab');
            };
        } else {
            throw new RangeError("No point in running bezier with only one color.")
        }
        return I;
    };

    var bezier_1 = function (colors) {
        var f = bezier(colors);
        f.scale = function () { return scale$1(f); };
        return f;
    };

    /*
     * interpolates between a set of colors uzing a bezier spline
     * blend mode formulas taken from http://www.venture-ware.com/kevin/coding/lets-learn-math-photoshop-blend-modes/
     */

    var chroma$3 = chroma_1;

    var blend = function (bottom, top, mode) {
        if (!blend[mode]) {
            throw new Error('unknown blend mode ' + mode);
        }
        return blend[mode](bottom, top);
    };

    var blend_f = function (f) { return function (bottom,top) {
            var c0 = chroma$3(top).rgb();
            var c1 = chroma$3(bottom).rgb();
            return chroma$3.rgb(f(c0, c1));
        }; };

    var each = function (f) { return function (c0, c1) {
            var out = [];
            out[0] = f(c0[0], c1[0]);
            out[1] = f(c0[1], c1[1]);
            out[2] = f(c0[2], c1[2]);
            return out;
        }; };

    var normal = function (a) { return a; };
    var multiply = function (a,b) { return a * b / 255; };
    var darken = function (a,b) { return a > b ? b : a; };
    var lighten = function (a,b) { return a > b ? a : b; };
    var screen = function (a,b) { return 255 * (1 - (1-a/255) * (1-b/255)); };
    var overlay = function (a,b) { return b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255 ) * ( 1 - b / 255 )); };
    var burn = function (a,b) { return 255 * (1 - (1 - b / 255) / (a/255)); };
    var dodge = function (a,b) {
        if (a === 255) { return 255; }
        a = 255 * (b / 255) / (1 - a / 255);
        return a > 255 ? 255 : a
    };

    // # add = (a,b) ->
    // #     if (a + b > 255) then 255 else a + b

    blend.normal = blend_f(each(normal));
    blend.multiply = blend_f(each(multiply));
    blend.screen = blend_f(each(screen));
    blend.overlay = blend_f(each(overlay));
    blend.darken = blend_f(each(darken));
    blend.lighten = blend_f(each(lighten));
    blend.dodge = blend_f(each(dodge));
    blend.burn = blend_f(each(burn));
    // blend.add = blend_f(each(add));

    var blend_1 = blend;

    // cubehelix interpolation
    // based on D.A. Green "A colour scheme for the display of astronomical intensity images"
    // http://astron-soc.in/bulletin/11June/289392011.pdf

    var type$1 = utils.type;
    var clip_rgb = utils.clip_rgb;
    var TWOPI = utils.TWOPI;
    var pow$2 = Math.pow;
    var sin$1 = Math.sin;
    var cos$1 = Math.cos;
    var chroma$2 = chroma_1;

    var cubehelix = function(start, rotations, hue, gamma, lightness) {
        if ( start === void 0 ) start=300;
        if ( rotations === void 0 ) rotations=-1.5;
        if ( hue === void 0 ) hue=1;
        if ( gamma === void 0 ) gamma=1;
        if ( lightness === void 0 ) lightness=[0,1];

        var dh = 0, dl;
        if (type$1(lightness) === 'array') {
            dl = lightness[1] - lightness[0];
        } else {
            dl = 0;
            lightness = [lightness, lightness];
        }

        var f = function(fract) {
            var a = TWOPI * (((start+120)/360) + (rotations * fract));
            var l = pow$2(lightness[0] + (dl * fract), gamma);
            var h = dh !== 0 ? hue[0] + (fract * dh) : hue;
            var amp = (h * l * (1-l)) / 2;
            var cos_a = cos$1(a);
            var sin_a = sin$1(a);
            var r = l + (amp * ((-0.14861 * cos_a) + (1.78277* sin_a)));
            var g = l + (amp * ((-0.29227 * cos_a) - (0.90649* sin_a)));
            var b = l + (amp * (+1.97294 * cos_a));
            return chroma$2(clip_rgb([r*255,g*255,b*255,1]));
        };

        f.start = function(s) {
            if ((s == null)) { return start; }
            start = s;
            return f;
        };

        f.rotations = function(r) {
            if ((r == null)) { return rotations; }
            rotations = r;
            return f;
        };

        f.gamma = function(g) {
            if ((g == null)) { return gamma; }
            gamma = g;
            return f;
        };

        f.hue = function(h) {
            if ((h == null)) { return hue; }
            hue = h;
            if (type$1(hue) === 'array') {
                dh = hue[1] - hue[0];
                if (dh === 0) { hue = hue[1]; }
            } else {
                dh = 0;
            }
            return f;
        };

        f.lightness = function(h) {
            if ((h == null)) { return lightness; }
            if (type$1(h) === 'array') {
                lightness = h;
                dl = h[1] - h[0];
            } else {
                lightness = [h,h];
                dl = 0;
            }
            return f;
        };

        f.scale = function () { return chroma$2.scale(f); };

        f.hue(hue);

        return f;
    };

    var Color$4 = Color_1;
    var digits = '0123456789abcdef';

    var floor$1 = Math.floor;
    var random = Math.random;

    var random_1 = function () {
        var code = '#';
        for (var i=0; i<6; i++) {
            code += digits.charAt(floor$1(random() * 16));
        }
        return new Color$4(code, 'hex');
    };

    var type = type$p;
    var log = Math.log;
    var pow$1 = Math.pow;
    var floor = Math.floor;
    var abs$1 = Math.abs;


    var analyze = function (data, key) {
        if ( key === void 0 ) key=null;

        var r = {
            min: Number.MAX_VALUE,
            max: Number.MAX_VALUE*-1,
            sum: 0,
            values: [],
            count: 0
        };
        if (type(data) === 'object') {
            data = Object.values(data);
        }
        data.forEach(function (val) {
            if (key && type(val) === 'object') { val = val[key]; }
            if (val !== undefined && val !== null && !isNaN(val)) {
                r.values.push(val);
                r.sum += val;
                if (val < r.min) { r.min = val; }
                if (val > r.max) { r.max = val; }
                r.count += 1;
            }
        });

        r.domain = [r.min, r.max];

        r.limits = function (mode, num) { return limits(r, mode, num); };

        return r;
    };


    var limits = function (data, mode, num) {
        if ( mode === void 0 ) mode='equal';
        if ( num === void 0 ) num=7;

        if (type(data) == 'array') {
            data = analyze(data);
        }
        var min = data.min;
        var max = data.max;
        var values = data.values.sort(function (a,b) { return a-b; });

        if (num === 1) { return [min,max]; }

        var limits = [];

        if (mode.substr(0,1) === 'c') { // continuous
            limits.push(min);
            limits.push(max);
        }

        if (mode.substr(0,1) === 'e') { // equal interval
            limits.push(min);
            for (var i=1; i<num; i++) {
                limits.push(min+((i/num)*(max-min)));
            }
            limits.push(max);
        }

        else if (mode.substr(0,1) === 'l') { // log scale
            if (min <= 0) {
                throw new Error('Logarithmic scales are only possible for values > 0');
            }
            var min_log = Math.LOG10E * log(min);
            var max_log = Math.LOG10E * log(max);
            limits.push(min);
            for (var i$1=1; i$1<num; i$1++) {
                limits.push(pow$1(10, min_log + ((i$1/num) * (max_log - min_log))));
            }
            limits.push(max);
        }

        else if (mode.substr(0,1) === 'q') { // quantile scale
            limits.push(min);
            for (var i$2=1; i$2<num; i$2++) {
                var p = ((values.length-1) * i$2)/num;
                var pb = floor(p);
                if (pb === p) {
                    limits.push(values[pb]);
                } else { // p > pb
                    var pr = p - pb;
                    limits.push((values[pb]*(1-pr)) + (values[pb+1]*pr));
                }
            }
            limits.push(max);

        }

        else if (mode.substr(0,1) === 'k') { // k-means clustering
            /*
            implementation based on
            http://code.google.com/p/figue/source/browse/trunk/figue.js#336
            simplified for 1-d input values
            */
            var cluster;
            var n = values.length;
            var assignments = new Array(n);
            var clusterSizes = new Array(num);
            var repeat = true;
            var nb_iters = 0;
            var centroids = null;

            // get seed values
            centroids = [];
            centroids.push(min);
            for (var i$3=1; i$3<num; i$3++) {
                centroids.push(min + ((i$3/num) * (max-min)));
            }
            centroids.push(max);

            while (repeat) {
                // assignment step
                for (var j=0; j<num; j++) {
                    clusterSizes[j] = 0;
                }
                for (var i$4=0; i$4<n; i$4++) {
                    var value = values[i$4];
                    var mindist = Number.MAX_VALUE;
                    var best = (void 0);
                    for (var j$1=0; j$1<num; j$1++) {
                        var dist = abs$1(centroids[j$1]-value);
                        if (dist < mindist) {
                            mindist = dist;
                            best = j$1;
                        }
                        clusterSizes[best]++;
                        assignments[i$4] = best;
                    }
                }

                // update centroids step
                var newCentroids = new Array(num);
                for (var j$2=0; j$2<num; j$2++) {
                    newCentroids[j$2] = null;
                }
                for (var i$5=0; i$5<n; i$5++) {
                    cluster = assignments[i$5];
                    if (newCentroids[cluster] === null) {
                        newCentroids[cluster] = values[i$5];
                    } else {
                        newCentroids[cluster] += values[i$5];
                    }
                }
                for (var j$3=0; j$3<num; j$3++) {
                    newCentroids[j$3] *= 1/clusterSizes[j$3];
                }

                // check convergence
                repeat = false;
                for (var j$4=0; j$4<num; j$4++) {
                    if (newCentroids[j$4] !== centroids[j$4]) {
                        repeat = true;
                        break;
                    }
                }

                centroids = newCentroids;
                nb_iters++;

                if (nb_iters > 200) {
                    repeat = false;
                }
            }

            // finished k-means clustering
            // the next part is borrowed from gabrielflor.it
            var kClusters = {};
            for (var j$5=0; j$5<num; j$5++) {
                kClusters[j$5] = [];
            }
            for (var i$6=0; i$6<n; i$6++) {
                cluster = assignments[i$6];
                kClusters[cluster].push(values[i$6]);
            }
            var tmpKMeansBreaks = [];
            for (var j$6=0; j$6<num; j$6++) {
                tmpKMeansBreaks.push(kClusters[j$6][0]);
                tmpKMeansBreaks.push(kClusters[j$6][kClusters[j$6].length-1]);
            }
            tmpKMeansBreaks = tmpKMeansBreaks.sort(function (a,b){ return a-b; });
            limits.push(tmpKMeansBreaks[0]);
            for (var i$7=1; i$7 < tmpKMeansBreaks.length; i$7+= 2) {
                var v = tmpKMeansBreaks[i$7];
                if (!isNaN(v) && (limits.indexOf(v) === -1)) {
                    limits.push(v);
                }
            }
        }
        return limits;
    };

    var analyze_1 = {analyze: analyze, limits: limits};

    var Color$3 = Color_1;


    var contrast = function (a, b) {
        // WCAG contrast ratio
        // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
        a = new Color$3(a);
        b = new Color$3(b);
        var l1 = a.luminance();
        var l2 = b.luminance();
        return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
    };

    var Color$2 = Color_1;
    var sqrt = Math.sqrt;
    var pow = Math.pow;
    var min = Math.min;
    var max = Math.max;
    var atan2 = Math.atan2;
    var abs = Math.abs;
    var cos = Math.cos;
    var sin = Math.sin;
    var exp = Math.exp;
    var PI = Math.PI;

    var deltaE = function(a, b, Kl, Kc, Kh) {
        if ( Kl === void 0 ) Kl=1;
        if ( Kc === void 0 ) Kc=1;
        if ( Kh === void 0 ) Kh=1;

        // Delta E (CIE 2000)
        // see http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CIE2000.html
        var rad2deg = function(rad) {
            return 360 * rad / (2 * PI);
        };
        var deg2rad = function(deg) {
            return (2 * PI * deg) / 360;
        };
        a = new Color$2(a);
        b = new Color$2(b);
        var ref = Array.from(a.lab());
        var L1 = ref[0];
        var a1 = ref[1];
        var b1 = ref[2];
        var ref$1 = Array.from(b.lab());
        var L2 = ref$1[0];
        var a2 = ref$1[1];
        var b2 = ref$1[2];
        var avgL = (L1 + L2)/2;
        var C1 = sqrt(pow(a1, 2) + pow(b1, 2));
        var C2 = sqrt(pow(a2, 2) + pow(b2, 2));
        var avgC = (C1 + C2)/2;
        var G = 0.5*(1-sqrt(pow(avgC, 7)/(pow(avgC, 7) + pow(25, 7))));
        var a1p = a1*(1+G);
        var a2p = a2*(1+G);
        var C1p = sqrt(pow(a1p, 2) + pow(b1, 2));
        var C2p = sqrt(pow(a2p, 2) + pow(b2, 2));
        var avgCp = (C1p + C2p)/2;
        var arctan1 = rad2deg(atan2(b1, a1p));
        var arctan2 = rad2deg(atan2(b2, a2p));
        var h1p = arctan1 >= 0 ? arctan1 : arctan1 + 360;
        var h2p = arctan2 >= 0 ? arctan2 : arctan2 + 360;
        var avgHp = abs(h1p - h2p) > 180 ? (h1p + h2p + 360)/2 : (h1p + h2p)/2;
        var T = 1 - 0.17*cos(deg2rad(avgHp - 30)) + 0.24*cos(deg2rad(2*avgHp)) + 0.32*cos(deg2rad(3*avgHp + 6)) - 0.2*cos(deg2rad(4*avgHp - 63));
        var deltaHp = h2p - h1p;
        deltaHp = abs(deltaHp) <= 180 ? deltaHp : h2p <= h1p ? deltaHp + 360 : deltaHp - 360;
        deltaHp = 2*sqrt(C1p*C2p)*sin(deg2rad(deltaHp)/2);
        var deltaL = L2 - L1;
        var deltaCp = C2p - C1p;    
        var sl = 1 + (0.015*pow(avgL - 50, 2))/sqrt(20 + pow(avgL - 50, 2));
        var sc = 1 + 0.045*avgCp;
        var sh = 1 + 0.015*avgCp*T;
        var deltaTheta = 30*exp(-pow((avgHp - 275)/25, 2));
        var Rc = 2*sqrt(pow(avgCp, 7)/(pow(avgCp, 7) + pow(25, 7)));
        var Rt = -Rc*sin(2*deg2rad(deltaTheta));
        var result = sqrt(pow(deltaL/(Kl*sl), 2) + pow(deltaCp/(Kc*sc), 2) + pow(deltaHp/(Kh*sh), 2) + Rt*(deltaCp/(Kc*sc))*(deltaHp/(Kh*sh)));
        return max(0, min(100, result));
    };

    var Color$1 = Color_1;

    // simple Euclidean distance
    var distance = function(a, b, mode) {
        if ( mode === void 0 ) mode='lab';

        // Delta E (CIE 1976)
        // see http://www.brucelindbloom.com/index.html?Equations.html
        a = new Color$1(a);
        b = new Color$1(b);
        var l1 = a.get(mode);
        var l2 = b.get(mode);
        var sum_sq = 0;
        for (var i in l1) {
            var d = (l1[i] || 0) - (l2[i] || 0);
            sum_sq += d*d;
        }
        return Math.sqrt(sum_sq);
    };

    var Color = Color_1;

    var valid = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        try {
            new (Function.prototype.bind.apply( Color, [ null ].concat( args) ));
            return true;
        } catch (e) {
            return false;
        }
    };

    // some pre-defined color scales:
    var chroma$1 = chroma_1;

    var scale = scale$2;

    var scales = {
    	cool: function cool() { return scale([chroma$1.hsl(180,1,.9), chroma$1.hsl(250,.7,.4)]) },
    	hot: function hot() { return scale(['#000','#f00','#ff0','#fff']).mode('rgb') }
    };

    /**
        ColorBrewer colors for chroma.js

        Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The
        Pennsylvania State University.

        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0

        Unless required by applicable law or agreed to in writing, software distributed
        under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
        CONDITIONS OF ANY KIND, either express or implied. See the License for the
        specific language governing permissions and limitations under the License.
    */

    var colorbrewer = {
        // sequential
        OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
        PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
        BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
        Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
        BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
        YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
        YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
        Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
        RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
        Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
        YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
        Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
        GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
        Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
        YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
        PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
        Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
        PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
        Viridis: ['#440154', '#482777', '#3f4a8a', '#31678e', '#26838f', '#1f9d8a', '#6cce5a', '#b6de2b', '#fee825'],

        // diverging

        Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
        RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
        RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
        PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
        PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
        RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
        BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
        RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
        PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],

        // qualitative

        Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
        Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
        Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
        Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
        Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
        Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
        Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
        Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2'],
    };

    // add lowercase aliases for case-insensitive matches
    for (var i = 0, list = Object.keys(colorbrewer); i < list.length; i += 1) {
        var key = list[i];

        colorbrewer[key.toLowerCase()] = colorbrewer[key];
    }

    var colorbrewer_1 = colorbrewer;

    var chroma = chroma_1;

    // feel free to comment out anything to rollup
    // a smaller chroma.js built

    // io --> convert colors

















    // operators --> modify existing Colors










    // interpolators












    // generators -- > create new colors
    chroma.average = average;
    chroma.bezier = bezier_1;
    chroma.blend = blend_1;
    chroma.cubehelix = cubehelix;
    chroma.mix = chroma.interpolate = mix$1;
    chroma.random = random_1;
    chroma.scale = scale$2;

    // other utility methods
    chroma.analyze = analyze_1.analyze;
    chroma.contrast = contrast;
    chroma.deltaE = deltaE;
    chroma.distance = distance;
    chroma.limits = analyze_1.limits;
    chroma.valid = valid;

    // scale
    chroma.scales = scales;

    // colors
    chroma.colors = w3cx11_1;
    chroma.brewer = colorbrewer_1;

    var chroma_js = chroma;

    return chroma_js;

}));


/***/ }),

/***/ "./src/tokens/colors/components/component-tokens.json":
/*!************************************************************!*\
  !*** ./src/tokens/colors/components/component-tokens.json ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"button":{"bg":{"rest":{"$value":"{utility.tint.300}","$type":"color"},"hover":{"$value":"{alt.base.100}","$type":"color"},"active":{"$value":"{utility.tint.200}","$type":"color"}},"border":{"rest":{"$value":"{stroke.base.400}","$type":"color"},"hover":{"$value":"{stroke.base.500}","$type":"color"},"active":{"$value":"{stroke.base.400}","$type":"color"}}},"ui-element":{"bg":{"rest":{"$value":"{utility.transparent}","$type":"color"},"hover":{"$value":"{alt.base.100}","$type":"color"},"active":{"$value":"{alt.base.200}","$type":"color"},"selected":{"$value":"{primary.400}","$type":"color"},"disabled":{"$value":"{alt.base.600}","$type":"color"}},"border":{"rest":{"$value":"{alt.base.100}","$type":"color"},"hover":{"$value":"{alt.base.200}","$type":"color"},"active":{"$value":"{alt.base.300}","$type":"color"},"selected":{"$value":"{primary.500}","$type":"color"},"disabled":{"$value":"{alt.base.600}","$type":"color"}}},"form-element":{"bg":{"rest":{"$value":"{fill.base.100}","$type":"color"},"hover":{"$value":"{fill.base.100}","$type":"color"},"readonly":{"$value":"{fill.base.200}","$type":"color"}},"border":{"rest":{"$value":"{stroke.base.400}","$type":"color"},"hover":{"$value":"{primary.300}","$type":"color"},"readonly":{"$value":"{stroke.base.400}","$type":"color"}}},"card":{"bg":{"primary":{"$value":"{fill.base.100}","$type":"color"},"secondary":{"$value":"{fill.base.200}","$type":"color"}},"border":{"inner":{"$value":"{stroke.base.100}","$type":"color"},"outer":{"$value":"{stroke.base.200}","$type":"color"}}},"overlay":{"bg":{"$value":"{card.bg.primary}","$type":"color"},"border":{"$value":"{alt.base.400}","$type":"color"}}}');

/***/ }),

/***/ "./src/tokens/colors/system/dark-base-2.tokens.json":
/*!**********************************************************!*\
  !*** ./src/tokens/colors/system/dark-base-2.tokens.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-6}","$type":"color"},"200":{"$value":"{grey-8}","$type":"color"},"300":{"$value":"{grey-10}","$type":"color"},"400":{"$value":"{grey-12}","$type":"color"},"500":{"$value":"{grey-14}","$type":"color"},"600":{"$value":"{grey-16}","$type":"color"}},"contrast":{"100":{"$value":"{grey-16}","$type":"color"},"200":{"$value":"{grey-18}","$type":"color"},"300":{"$value":"{grey-20}","$type":"color"},"400":{"$value":"{grey-22}","$type":"color"},"500":{"$value":"{grey-24}","$type":"color"},"600":{"$value":"{grey-26}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-16}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-20}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-24}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-28}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-34}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-40}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-26}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-30}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-34}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-38}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-44}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-50}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/dark-base-3.tokens.json":
/*!**********************************************************!*\
  !*** ./src/tokens/colors/system/dark-base-3.tokens.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-6}","$type":"color"},"200":{"$value":"{grey-9}","$type":"color"},"300":{"$value":"{grey-12}","$type":"color"},"400":{"$value":"{grey-15}","$type":"color"},"500":{"$value":"{grey-18}","$type":"color"},"600":{"$value":"{grey-21}","$type":"color"}},"contrast":{"100":{"$value":"{grey-16}","$type":"color"},"200":{"$value":"{grey-19}","$type":"color"},"300":{"$value":"{grey-22}","$type":"color"},"400":{"$value":"{grey-25}","$type":"color"},"500":{"$value":"{grey-28}","$type":"color"},"600":{"$value":"{grey-31}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-16}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-21}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-26}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-31}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-37}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-43}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-26}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-31}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-36}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-41}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-47}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-53}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/dark-base-4.tokens.json":
/*!**********************************************************!*\
  !*** ./src/tokens/colors/system/dark-base-4.tokens.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-6}","$type":"color"},"200":{"$value":"{grey-10}","$type":"color"},"300":{"$value":"{grey-14}","$type":"color"},"400":{"$value":"{grey-18}","$type":"color"},"500":{"$value":"{grey-22}","$type":"color"},"600":{"$value":"{grey-26}","$type":"color"}},"contrast":{"100":{"$value":"{grey-16}","$type":"color"},"200":{"$value":"{grey-20}","$type":"color"},"300":{"$value":"{grey-24}","$type":"color"},"400":{"$value":"{grey-28}","$type":"color"},"500":{"$value":"{grey-32}","$type":"color"},"600":{"$value":"{grey-36}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-16}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-22}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-28}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-34}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-40}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-46}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-28}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-32}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-36}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-40}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-48}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-56}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/dark-common.tokens.json":
/*!**********************************************************!*\
  !*** ./src/tokens/colors/system/dark-common.tokens.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"text":{"base":{"400":{"$value":"rgba(#FFFFFF, 0.45)","$type":"color"},"500":{"$value":"rgba(#FFFFFF, 0.70)","$type":"color"},"600":{"$value":"#FFFFFF","$type":"color"},"action":{"$value":"{primary.500}","$type":"color"},"info":{"$value":"{info.500}","$type":"color"},"success":{"$value":"{success.500}","$type":"color"},"warning":{"$value":"{warning.500}","$type":"color"},"danger":{"$value":"{danger.500}","$type":"color"}},"contrast":{"400":{"$value":"rgba(#FFFFFF, 0.45)","$type":"color"},"500":{"$value":"rgba(#FFFFFF, 0.70)","$type":"color"},"600":{"$value":"#FFFFFF","$type":"color"},"action":{"$value":"{primary.600}","$type":"color"},"info":{"$value":"{info.600}","$type":"color"},"success":{"$value":"{success.600}","$type":"color"},"warning":{"$value":"{warning.600}","$type":"color"},"danger":{"$value":"{danger.600}","$type":"color"}}},"alt":{"base":{"100":{"$value":"rgba({grey-78}, 0.08)","$type":"color","adjustments":{"s":"*2"}},"200":{"$value":"rgba({grey-78}, 0.12)","$type":"color","adjustments":{"s":"*2"}},"300":{"$value":"rgba({grey-78}, 0.16)","$type":"color","adjustments":{"s":"*2"}},"400":{"$value":"rgba({grey-78}, 0.24)","$type":"color","adjustments":{"s":"*2"}},"500":{"$value":"rgba({grey-78}, 0.32)","$type":"color","adjustments":{"s":"*2"}},"600":{"$value":"rgba({grey-78}, 0.44)","$type":"color","adjustments":{"s":"*2"}}},"contrast":{"100":{"$value":"rgba({grey-78}, 0.08)","$type":"color","adjustments":{"s":"*2"}},"200":{"$value":"rgba({grey-78}, 0.12)","$type":"color","adjustments":{"s":"*2"}},"300":{"$value":"rgba({grey-78}, 0.16)","$type":"color","adjustments":{"s":"*2"}},"400":{"$value":"rgba({grey-78}, 0.24)","$type":"color","adjustments":{"s":"*2"}},"500":{"$value":"rgba({grey-78}, 0.32)","$type":"color","adjustments":{"s":"*2"}},"600":{"$value":"rgba({grey-78}, 0.44)","$type":"color","adjustments":{"s":"*2"}}}},"utility":{"white":{"$value":"{grey-100}","$type":"color"},"black":{"$value":"{grey-4}","$type":"color"},"transparent":{"$value":"rgba(0, 0, 0, 0)","$type":"color"},"shade":{"100":{"$value":"rgba(#000000, 0.10)","$type":"color"},"200":{"$value":"rgba(#000000, 0.20)","$type":"color"},"300":{"$value":"rgba(#000000, 0.30)","$type":"color"},"400":{"$value":"rgba(#000000, 0.40)","$type":"color"},"500":{"$value":"rgba(#000000, 0.50)","$type":"color"},"600":{"$value":"rgba(#000000, 0.60)","$type":"color"}},"tint":{"100":{"$value":"rgba({grey-78}, 0.08)","$type":"color","adjustments":{"s":"*2"}},"200":{"$value":"rgba({grey-78}, 0.12)","$type":"color","adjustments":{"s":"*2"}},"300":{"$value":"rgba({grey-78}, 0.16)","$type":"color","adjustments":{"s":"*2"}},"400":{"$value":"rgba({grey-78}, 0.24)","$type":"color","adjustments":{"s":"*2"}},"500":{"$value":"rgba({grey-78}, 0.32)","$type":"color","adjustments":{"s":"*2"}},"600":{"$value":"rgba({grey-78}, 0.44)","$type":"color","adjustments":{"s":"*2"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/dark-elevated-2.tokens.json":
/*!**************************************************************!*\
  !*** ./src/tokens/colors/system/dark-elevated-2.tokens.json ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-14}","$type":"color"},"200":{"$value":"{grey-12}","$type":"color"},"300":{"$value":"{grey-10}","$type":"color"},"400":{"$value":"{grey-8}","$type":"color"},"500":{"$value":"{grey-6}","$type":"color"},"600":{"$value":"{grey-4}","$type":"color"}},"contrast":{"100":{"$value":"{grey-24}","$type":"color"},"200":{"$value":"{grey-22}","$type":"color"},"300":{"$value":"{grey-20}","$type":"color"},"400":{"$value":"{grey-18}","$type":"color"},"500":{"$value":"{grey-16}","$type":"color"},"600":{"$value":"{grey-14}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-22}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-25}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-29}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-34}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-40}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-47}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-28}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-30}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-33}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-36}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-39}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-45}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/dark-elevated-3.tokens.json":
/*!**************************************************************!*\
  !*** ./src/tokens/colors/system/dark-elevated-3.tokens.json ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-19}","$type":"color"},"200":{"$value":"{grey-16}","$type":"color"},"300":{"$value":"{grey-13}","$type":"color"},"400":{"$value":"{grey-10}","$type":"color"},"500":{"$value":"{grey-7}","$type":"color"},"600":{"$value":"{grey-4}","$type":"color"}},"contrast":{"100":{"$value":"{grey-29}","$type":"color"},"200":{"$value":"{grey-26}","$type":"color"},"300":{"$value":"{grey-23}","$type":"color"},"400":{"$value":"{grey-20}","$type":"color"},"500":{"$value":"{grey-17}","$type":"color"},"600":{"$value":"{grey-14}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-29}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-30}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-32}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-36}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-41}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-49}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-39}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-40}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-42}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-46}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-51}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-61}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/dark-elevated-4.tokens.json":
/*!**************************************************************!*\
  !*** ./src/tokens/colors/system/dark-elevated-4.tokens.json ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-24}","$type":"color"},"200":{"$value":"{grey-20}","$type":"color"},"300":{"$value":"{grey-16}","$type":"color"},"400":{"$value":"{grey-12}","$type":"color"},"500":{"$value":"{grey-8}","$type":"color"},"600":{"$value":"{grey-4}","$type":"color"}},"contrast":{"100":{"$value":"{grey-34}","$type":"color"},"200":{"$value":"{grey-30}","$type":"color"},"300":{"$value":"{grey-26}","$type":"color"},"400":{"$value":"{grey-22}","$type":"color"},"500":{"$value":"{grey-18}","$type":"color"},"600":{"$value":"{grey-14}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-34}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-35}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-38}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-42}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-47}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-55}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-44}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-45}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-48}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-52}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-57}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-65}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/light-2.tokens.json":
/*!******************************************************!*\
  !*** ./src/tokens/colors/system/light-2.tokens.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-100}","$type":"color"},"200":{"$value":"{grey-98}","$type":"color"},"300":{"$value":"{grey-96}","$type":"color"},"400":{"$value":"{grey-94}","$type":"color"},"500":{"$value":"{grey-92}","$type":"color"},"600":{"$value":"{grey-88}","$type":"color"}},"contrast":{"100":{"$value":"{grey-24}","$type":"color"},"200":{"$value":"{grey-22}","$type":"color"},"300":{"$value":"{grey-20}","$type":"color"},"400":{"$value":"{grey-18}","$type":"color"},"500":{"$value":"{grey-16}","$type":"color"},"600":{"$value":"{grey-14}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-93}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-88}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-85}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-80}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-70}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-54}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-28}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-30}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-33}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-36}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-39}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-45}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/light-3.tokens.json":
/*!******************************************************!*\
  !*** ./src/tokens/colors/system/light-3.tokens.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-100}","$type":"color"},"200":{"$value":"{grey-97}","$type":"color"},"300":{"$value":"{grey-94}","$type":"color"},"400":{"$value":"{grey-91}","$type":"color"},"500":{"$value":"{grey-88}","$type":"color"},"600":{"$value":"{grey-84}","$type":"color"}},"contrast":{"100":{"$value":"{grey-29}","$type":"color"},"200":{"$value":"{grey-26}","$type":"color"},"300":{"$value":"{grey-23}","$type":"color"},"400":{"$value":"{grey-20}","$type":"color"},"500":{"$value":"{grey-17}","$type":"color"},"600":{"$value":"{grey-14}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-92}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-87}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-83}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-79}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-67}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-55}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-39}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-40}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-42}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-46}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-51}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-61}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/light-4.tokens.json":
/*!******************************************************!*\
  !*** ./src/tokens/colors/system/light-4.tokens.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-100}","$type":"color"},"200":{"$value":"{grey-96}","$type":"color"},"300":{"$value":"{grey-92}","$type":"color"},"400":{"$value":"{grey-88}","$type":"color"},"500":{"$value":"{grey-84}","$type":"color"},"600":{"$value":"{grey-80}","$type":"color"}},"contrast":{"100":{"$value":"{grey-34}","$type":"color"},"200":{"$value":"{grey-30}","$type":"color"},"300":{"$value":"{grey-26}","$type":"color"},"400":{"$value":"{grey-22}","$type":"color"},"500":{"$value":"{grey-18}","$type":"color"},"600":{"$value":"{grey-14}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-91}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-86}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-81}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-76}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-64}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-54}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-44}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-45}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-48}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-52}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-57}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-65}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/light-common.tokens.json":
/*!***********************************************************!*\
  !*** ./src/tokens/colors/system/light-common.tokens.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"text":{"base":{"400":{"$value":"rgba({grey-6}, 0.45)","$type":"color"},"500":{"$value":"rgba({grey-6}, 0.65)","$type":"color"},"600":{"$value":"{grey-6}","$type":"color"},"action":{"$value":"{primary.500}","$type":"color"},"info":{"$value":"{info.500}","$type":"color"},"success":{"$value":"{success.500}","$type":"color"},"warning":{"$value":"{warning.500}","$type":"color"},"danger":{"$value":"{danger.500}","$type":"color"}},"contrast":{"400":{"$value":"rgba(#FFFFFF, 0.45)","$type":"color"},"500":{"$value":"rgba(255, 255, 255, 0.70)","$type":"color"},"600":{"$value":"#ffffff","$type":"color"},"action":{"$value":"{primary.600}","$type":"color"},"info":{"$value":"{info.600}","$type":"color"},"success":{"$value":"{success.600}","$type":"color"},"warning":{"$value":"{warning.600}","$type":"color"},"danger":{"$value":"{danger.600}","$type":"color"}}},"alt":{"base":{"100":{"$value":"rgba({grey-14}, 0.04)","$type":"color","adjustments":{"s":"1"}},"200":{"$value":"rgba({grey-14}, 0.08)","$type":"color","adjustments":{"s":"1"}},"300":{"$value":"rgba({grey-14}, 0.16)","$type":"color","adjustments":{"s":"1"}},"400":{"$value":"rgba({grey-14}, 0.24)","$type":"color","adjustments":{"s":"1"}},"500":{"$value":"rgba({grey-14}, 0.32)","$type":"color","adjustments":{"s":"1"}},"600":{"$value":"rgba({grey-14}, 0.44)","$type":"color","adjustments":{"s":"1"}}},"contrast":{"100":{"$value":"rgba(#FFFFFF, 0.04)","$type":"color"},"200":{"$value":"rgba(#FFFFFF, 0.08)","$type":"color"},"300":{"$value":"rgba(#FFFFFF, 0.12)","$type":"color"},"400":{"$value":"rgba(#FFFFFF, 0.16)","$type":"color"},"500":{"$value":"rgba(#FFFFFF, 0.24)","$type":"color"},"600":{"$value":"rgba(#FFFFFF, 0.32)","$type":"color"}}},"utility":{"white":{"$value":"{grey-100}","$type":"color"},"black":{"$value":"{grey-4}","$type":"color"},"transparent":{"$value":"rgba(255, 255, 255, 0)","$type":"color"},"shade":{"100":{"$value":"rgba({grey-8}, 0.04)","$type":"color","adjustments":{"s":"1"}},"200":{"$value":"rgba({grey-8}, 0.08)","$type":"color","adjustments":{"s":"1"}},"300":{"$value":"rgba({grey-8}, 0.16)","$type":"color","adjustments":{"s":"1"}},"400":{"$value":"rgba({grey-8}, 0.24)","$type":"color","adjustments":{"s":"1"}},"500":{"$value":"rgba({grey-8}, 0.32)","$type":"color","adjustments":{"s":"1"}},"600":{"$value":"rgba({grey-8}, 0.44)","$type":"color","adjustments":{"s":"1"}}},"tint":{"100":{"$value":"rgba({grey-100}, 0.5)","$type":"color"},"200":{"$value":"rgba({grey-100}, 0.6)","$type":"color"},"300":{"$value":"rgba({grey-100}, 0.7)","$type":"color"},"400":{"$value":"rgba({grey-100}, 0.8)","$type":"color"},"500":{"$value":"rgba({grey-100}, 0.9)","$type":"color"},"600":{"$value":"{grey-100}","$type":"color"}}}}');

/***/ }),

/***/ "./src/tokens/effects/elevation.tokens.json":
/*!**************************************************!*\
  !*** ./src/tokens/effects/elevation.tokens.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"shadow-1":{"100":{"$value":[{"color":"{utility.shade.100}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"0.75","blur":"0.5","spread":"0"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-1 shadow-utility-shade-100"},"200":{"$value":[{"color":"{utility.shade.200}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"0.75","blur":"0.5","spread":"0"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-1 shadow-utility-shade-200"},"300":{"$value":[{"color":"{utility.shade.300}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"0.75","blur":"0.5","spread":"0"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-1 shadow-utility-shade-300"},"400":{"$value":[{"color":"{utility.shade.400}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"0.75","blur":"0.5","spread":"0"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow- shadow-utility-shade-400"},"500":{"$value":[{"color":"{utility.shade.500}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"0.75","blur":"0.5","spread":"0"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-1 shadow-utility-shade-500"}},"shadow-2":{"100":{"$value":[{"color":"{utility.shade.100}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"1","blur":"2","spread":"-1"},{"color":"{utility.shade.100}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"2","blur":"4","spread":"-1"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-2 shadow-utility-shade-100"},"200":{"$value":[{"color":"{utility.shade.200}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"1","blur":"2","spread":"-1"},{"color":"{utility.shade.200}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"1","blur":"4","spread":"-1"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-2 shadow-utility-shade-200"},"300":{"$value":[{"color":"{utility.shade.300}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"1","blur":"2","spread":"-1"},{"color":"{utility.shade.300}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"1","blur":"4","spread":"-1"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-2 shadow-utility-shade-300"},"400":{"$value":[{"color":"{utility.shade.400}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"1","blur":"2","spread":"-1"},{"color":"{utility.shade.400}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"1","blur":"4","spread":"-1"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-2 shadow-utility-shade-400"},"500":{"$value":[{"color":"{utility.shade.500}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"1","blur":"2","spread":"-1"},{"color":"{utility.shade.500}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"1","blur":"4","spread":"-1"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-2 shadow-utility-shade-500"}},"shadow-3":{"100":{"$value":[{"color":"{utility.shade.100}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"2","blur":"4","spread":"-2"},{"color":"{utility.shade.100}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"4","blur":"6","spread":"-2"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-3 shadow-utility-shade-100"},"200":{"$value":[{"color":"{utility.shade.200}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"2","blur":"4","spread":"-2"},{"color":"{utility.shade.200}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"4","blur":"6","spread":"-2"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-3 shadow-utility-shade-200"},"300":{"$value":[{"color":"{utility.shade.300}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"2","blur":"4","spread":"-2"},{"color":"{utility.shade.300}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"4","blur":"6","spread":"-2"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-3 shadow-utility-shade-300"},"400":{"$value":[{"color":"{utility.shade.400}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"2","blur":"4","spread":"-2"},{"color":"{utility.shade.400}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"4","blur":"6","spread":"-2"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-3 shadow-utility-shade-400"},"500":{"$value":[{"color":"{utility.shade.500}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"2","blur":"4","spread":"-2"},{"color":"{utility.shade.500}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"4","blur":"6","spread":"-2"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-3 shadow-utility-shade-500"}},"shadow-4":{"100":{"$value":[{"color":"{utility.shade.100}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"4","blur":"6","spread":"-4"},{"color":"{utility.shade.100}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"10","blur":"15","spread":"-3"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-4 shadow-utility-shade-100"},"200":{"$value":[{"color":"{utility.shade.200}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"4","blur":"6","spread":"-4"},{"color":"{utility.shade.200}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"10","blur":"15","spread":"-3"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-4 shadow-utility-shade-200"},"300":{"$value":[{"color":"{utility.shade.300}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"4","blur":"6","spread":"-4"},{"color":"{utility.shade.300}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"10","blur":"15","spread":"-3"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-4 shadow-utility-shade-300"},"400":{"$value":[{"color":"{utility.shade.400}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"4","blur":"6","spread":"-4"},{"color":"{utility.shade.400}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"10","blur":"15","spread":"-3"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-4 shadow-utility-shade-400"},"500":{"$value":[{"color":"{utility.shade.500}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"4","blur":"6","spread":"-4"},{"color":"{utility.shade.500}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"10","blur":"15","spread":"-3"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-4 shadow-utility-shade-500"}},"shadow-5":{"100":{"$value":[{"color":"{utility.shade.100}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"12","blur":"10","spread":"-6"},{"color":"{utility.shade.100}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"20","blur":"25","spread":"-5"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-5 shadow-utility-shade-100"},"200":{"$value":[{"color":"{utility.shade.200}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"12","blur":"10","spread":"-6"},{"color":"{utility.shade.200}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"20","blur":"25","spread":"-5"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-5 shadow-utility-shade-200"},"300":{"$value":[{"color":"{utility.shade.300}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"12","blur":"10","spread":"-6"},{"color":"{utility.shade.300}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"20","blur":"25","spread":"-5"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-5 shadow-utility-shade-300"},"400":{"$value":[{"color":"{utility.shade.400}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"12","blur":"10","spread":"-6"},{"color":"{utility.shade.400}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"20","blur":"25","spread":"-5"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-5 shadow-utility-shade-400"},"500":{"$value":[{"color":"{utility.shade.500}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"12","blur":"10","spread":"-6"},{"color":"{utility.shade.500}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"20","blur":"25","spread":"-5"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-5 shadow-utility-shade-500"}},"shadow-6":{"100":{"$value":[{"color":"{utility.shade.100}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"23","blur":"28","spread":"-7"},{"color":"{utility.shade.100}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"16","blur":"10","spread":"-7"},{"color":"{utility.shade.100}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"24","blur":"48","spread":"-10"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-5 shadow-utility-shade-100"},"200":{"$value":[{"color":"{utility.shade.200}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"23","blur":"28","spread":"-7"},{"color":"{utility.shade.200}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"16","blur":"10","spread":"-7"},{"color":"{utility.shade.200}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"24","blur":"48","spread":"-10"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-5 shadow-utility-shade-200"},"300":{"$value":[{"color":"{utility.shade.300}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"23","blur":"28","spread":"-7"},{"color":"{utility.shade.300}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"16","blur":"10","spread":"-7"},{"color":"{utility.shade.300}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"24","blur":"48","spread":"-10"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-5 shadow-utility-shade-300"},"400":{"$value":[{"color":"{utility.shade.400}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"23","blur":"28","spread":"-7"},{"color":"{utility.shade.400}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"16","blur":"10","spread":"-7"},{"color":"{utility.shade.400}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"24","blur":"48","spread":"-10"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-5 shadow-utility-shade-400"},"500":{"$value":[{"color":"{utility.shade.500}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"23","blur":"28","spread":"-7"},{"color":"{utility.shade.500}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"16","blur":"10","spread":"-7"},{"color":"{utility.shade.500}","showShadowBehindNode":"false","type":"dropShadow","x":"0","y":"24","blur":"48","spread":"-10"}],"$type":"boxShadow","documentationLink":"https://namad.github.io/source-foundation-docs/#drop-shadows","description":"shadow-5 shadow-utility-shade-500"}}}');

/***/ }),

/***/ "./src/tokens/opacity/opacity.tokens.json":
/*!************************************************!*\
  !*** ./src/tokens/opacity/opacity.tokens.json ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"opacity-0":{"$value":0,"$type":"number","scopes":["OPACITY"]},"opacity-5":{"$value":0.5,"$type":"number","scopes":["OPACITY"]},"opacity-10":{"$value":0.1,"$type":"number","scopes":["OPACITY"]},"opacity-15":{"$value":0.15,"$type":"number","scopes":["OPACITY"]},"opacity-20":{"$value":0.2,"$type":"number","scopes":["OPACITY"]},"opacity-25":{"$value":0.25,"$type":"number","scopes":["OPACITY"]},"opacity-30":{"$value":0.3,"$type":"number","scopes":["OPACITY"]},"opacity-35":{"$value":0.35,"$type":"number","scopes":["OPACITY"]},"opacity-40":{"$value":0.4,"$type":"number","scopes":["OPACITY"]},"opacity-45":{"$value":0.45,"$type":"number","scopes":["OPACITY"]},"opacity-50":{"$value":0.5,"$type":"number","scopes":["OPACITY"]},"opacity-55":{"$value":0.55,"$type":"number","scopes":["OPACITY"]},"opacity-60":{"$value":0.6,"$type":"number","scopes":["OPACITY"]},"opacity-65":{"$value":0.65,"$type":"number","scopes":["OPACITY"]},"opacity-70":{"$value":0.7,"$type":"number","scopes":["OPACITY"]},"opacity-75":{"$value":0.75,"$type":"number","scopes":["OPACITY"]},"opacity-80":{"$value":0.8,"$type":"number","scopes":["OPACITY"]},"opacity-85":{"$value":0.85,"$type":"number","scopes":["OPACITY"]},"opacity-90":{"$value":0.9,"$type":"number","scopes":["OPACITY"]},"opacity-95":{"$value":0.95,"$type":"number","scopes":["OPACITY"]},"opacity-100":{"$value":1,"$type":"number","scopes":["OPACITY"]}}');

/***/ }),

/***/ "./src/tokens/radii/base.tokens.json":
/*!*******************************************!*\
  !*** ./src/tokens/radii/base.tokens.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"radii":{"none":{"$value":"0","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"sm":{"$value":"4.5","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"base":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"md":{"$value":"9","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"lg":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"xl":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"xl2":{"$value":"22","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"round":{"$value":"999","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]}}}');

/***/ }),

/***/ "./src/tokens/radii/compact.tokens.json":
/*!**********************************************!*\
  !*** ./src/tokens/radii/compact.tokens.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"radii":{"none":{"$value":"0","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"sm":{"$value":"3","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"base":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"md":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"lg":{"$value":"9","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"xl":{"$value":"13","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"xl2":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"round":{"$value":"999","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]}}}');

/***/ }),

/***/ "./src/tokens/radii/large.tokens.json":
/*!********************************************!*\
  !*** ./src/tokens/radii/large.tokens.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"radii":{"none":{"$value":"0","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"sm":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"base":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"md":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"lg":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"xl":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"xl2":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"round":{"$value":"999","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]}}}');

/***/ }),

/***/ "./src/tokens/sizing/base.tokens.json":
/*!********************************************!*\
  !*** ./src/tokens/sizing/base.tokens.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"icon-size":{"sm":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"64","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"96","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"128","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"256","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}}}');

/***/ }),

/***/ "./src/tokens/sizing/global.tokens.json":
/*!**********************************************!*\
  !*** ./src/tokens/sizing/global.tokens.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"size-0":{"$value":"0","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-2":{"$value":"2","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-4":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-6":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-8":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-10":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-12":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-14":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-16":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-20":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-24":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-28":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-32":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-36":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-40":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-44":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-48":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-56":{"$value":"56","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-64":{"$value":"64","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-80":{"$value":"80","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-96":{"$value":"96","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-112":{"$value":"112","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-128":{"$value":"128","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-144":{"$value":"144","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-160":{"$value":"160","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-192":{"$value":"192","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-224":{"$value":"224","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-256":{"$value":"256","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-288":{"$value":"288","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-320":{"$value":"320","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-352":{"$value":"352","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-384":{"$value":"384","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"size-416":{"$value":"416","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}}');

/***/ }),

/***/ "./src/tokens/sizing/touch.tokens.json":
/*!*********************************************!*\
  !*** ./src/tokens/sizing/touch.tokens.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"icon-size":{"sm":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"64","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"96","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"128","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"256","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"512","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}}}');

/***/ }),

/***/ "./src/tokens/spacing/base.json":
/*!**************************************!*\
  !*** ./src/tokens/spacing/base.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"spacing":{"xs4":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs3":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs2":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"sm":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"base":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"md":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"lg":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl2":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl3":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl4":{"$value":"60","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl5":{"$value":"72","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"minor":{"xs4":{"$value":"2","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs3":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs2":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"sm":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"base":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"md":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"lg":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl2":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl3":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl4":{"$value":"56","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl5":{"$value":"68","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]}}}}');

/***/ }),

/***/ "./src/tokens/spacing/compact.json":
/*!*****************************************!*\
  !*** ./src/tokens/spacing/compact.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"spacing":{"xs4":{"$value":"2","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs3":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs2":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"sm":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"base":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"md":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"lg":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl2":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl3":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl4":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl5":{"$value":"60","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"minor":{"xs4":{"$value":"1","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs3":{"$value":"2","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs2":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"sm":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"base":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"md":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"lg":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl2":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl3":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl4":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl5":{"$value":"56","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]}}}}');

/***/ }),

/***/ "./src/tokens/spacing/large.json":
/*!***************************************!*\
  !*** ./src/tokens/spacing/large.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"spacing":{"xs4":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs3":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs2":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"sm":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"base":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"md":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"lg":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl2":{"$value":"52","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl3":{"$value":"64","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"minor":{"xs4":{"$value":"2","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs3":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs2":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"sm":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"base":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"md":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"lg":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl2":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl3":{"$value":"60","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]}}}}');

/***/ }),

/***/ "./src/tokens/spacing/touch.json":
/*!***************************************!*\
  !*** ./src/tokens/spacing/touch.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"spacing":{"xs4":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs3":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs2":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"sm":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"base":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"md":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"lg":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"minor":{"xs4":{"$value":"2","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs3":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs2":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"sm":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"base":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"md":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"lg":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]}}}}');

/***/ }),

/***/ "./src/tokens/typography/major-second/typescale-base.json":
/*!****************************************************************!*\
  !*** ./src/tokens/typography/major-second/typescale-base.json ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"11","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"13","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"15","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"17","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"19","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"21","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"27","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"30","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"34","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"38","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"43","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"34","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"38","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"42","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"52","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"60","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT"]}}}');

/***/ }),

/***/ "./src/tokens/typography/major-second/typescale-compact.json":
/*!*******************************************************************!*\
  !*** ./src/tokens/typography/major-second/typescale-compact.json ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"9","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"11","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"13","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"15","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"19","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"21","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"27","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"30","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"33","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"38","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"26","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"46","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]}}}');

/***/ }),

/***/ "./src/tokens/typography/major-second/typescale-large.json":
/*!*****************************************************************!*\
  !*** ./src/tokens/typography/major-second/typescale-large.json ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"13","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"15","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"17","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"19","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"22","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"27","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"31","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"34","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"39","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"49","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"34","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"38","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"56","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"62","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"68","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT"]}}}');

/***/ }),

/***/ "./src/tokens/typography/major-third/typescale-base.json":
/*!***************************************************************!*\
  !*** ./src/tokens/typography/major-third/typescale-base.json ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"9","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"11","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"13","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"15","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"19","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"23","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"29","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"37","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"46","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"57","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"72","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"89","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"112","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"56","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"64","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"80","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"100","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"124","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT"]}}}');

/***/ }),

/***/ "./src/tokens/typography/major-third/typescale-compact.json":
/*!******************************************************************!*\
  !*** ./src/tokens/typography/major-third/typescale-compact.json ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"9","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"11","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"13","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"25","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"50","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"62","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"77","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"97","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"56","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"64","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"84","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"106","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]}}}');

/***/ }),

/***/ "./src/tokens/typography/major-third/typescale-large.json":
/*!****************************************************************!*\
  !*** ./src/tokens/typography/major-third/typescale-large.json ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"9","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"11","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"17","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"21","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"27","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"33","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"42","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"52","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"65","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"81","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"101","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"127","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"60","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"72","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"88","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"112","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"140","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT"]}}}');

/***/ }),

/***/ "./src/tokens/typography/minor-third/typescale-base.json":
/*!***************************************************************!*\
  !*** ./src/tokens/typography/minor-third/typescale-base.json ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"11","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"13","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"15","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"18","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"22","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"26","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"31","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"37","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"45","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"54","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"64","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"77","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"60","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"72","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"86","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT"]}}}');

/***/ }),

/***/ "./src/tokens/typography/minor-third/typescale-compact.json":
/*!******************************************************************!*\
  !*** ./src/tokens/typography/minor-third/typescale-compact.json ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"11","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"13","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"19","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"22","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"27","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"39","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"47","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"56","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"67","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"52","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"60","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"78","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]}}}');

/***/ }),

/***/ "./src/tokens/typography/minor-third/typescale-large.json":
/*!****************************************************************!*\
  !*** ./src/tokens/typography/minor-third/typescale-large.json ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-size":{"xs2":{"$value":"11","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"17","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"29","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"35","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"42","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"51","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"61","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"73","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"88","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"line-height":{"xs2":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xs":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"sm":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"34","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"52","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"56","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"68","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl6":{"$value":"80","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl7":{"$value":"96","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}},"letter-spacing":{"0":{"$value":"0%","$type":"letterSpacing","scopes":["TEXT_CONTENT"]}},"paragraph-spacing":{"label":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT"]},"paragraph":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT"]},"display":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT"]}}}');

/***/ }),

/***/ "./src/tokens/typography/styles.json":
/*!*******************************************!*\
  !*** ./src/tokens/typography/styles.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"body":{"base":{"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"semi-bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.semibold}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.italic}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"},"uppercase":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.uppercase}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"uppercase-bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.uppercase}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"medium":{"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"semi-bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.semibold}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.italic}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"},"uppercase":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.uppercase}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"uppercase-bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.uppercase}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"small":{"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"semi-bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.semibold}","lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.italic}","lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"},"uppercase":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.uppercase}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"uppercase-bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.uppercase}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"x-small":{"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"semi-bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.semibold}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.italic}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"},"uppercase":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.uppercase}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"uppercase-bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.uppercase}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"x-small2":{"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"semi-bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.semibold}","lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.italic}","lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"},"uppercase":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.uppercase}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"uppercase-bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.uppercase}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"large":{"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"semi-bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.semibold}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family.primary}","base":"[object Object]","fontWeight":"{font-weight.italic}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"},"uppercase":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.uppercase}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"uppercase-bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.uppercase}","textDecoration":"{text-decoration.none}"},"$type":"typography"}}},"paragraph":{"base":{"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.md}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.md}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.italic}","lineHeight":"{line-height.md}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.md}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"}},"medium":{"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.lg}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.lg}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.italic}","lineHeight":"{line-height.lg}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.lg}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"}},"small":{"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.base}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.base}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.italic}","lineHeight":"{line-height.base}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.base}","fontSize":"{font-size.sm}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"}},"x-small":{"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.sm}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.sm}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.italic}","lineHeight":"{line-height.sm}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.sm}","fontSize":"{font-size.xs}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"}},"x-small2":{"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.italic}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xs}","fontSize":"{font-size.xs2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"}},"large":{"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xl}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.xl}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.italic}","lineHeight":"{line-height.xl}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xl}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.paragraph}","textCase":"{text-case.none}","textDecoration":"{text-decoration.underline}"},"$type":"typography"}}},"heading":{"h1":{"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.xl3}","fontSize":"{font-size.xl3}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xl3}","fontSize":"{font-size.xl3}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"h2":{"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.xl2}","fontSize":"{font-size.xl2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xl2}","fontSize":"{font-size.xl2}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"h3":{"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.xl}","fontSize":"{font-size.xl}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xl}","fontSize":"{font-size.xl}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"h4":{"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"h5":{"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"h6":{"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.bold}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.label}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}}},"display":{"d4":{"light":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.light}","lineHeight":"{line-height.xl4}","fontSize":"{font-size.xl4}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xl4}","fontSize":"{font-size.xl4}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.semibold}","lineHeight":"{line-height.xl4}","fontSize":"{font-size.xl4}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"d3":{"light":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.light}","lineHeight":"{line-height.xl5}","fontSize":"{font-size.xl5}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xl5}","fontSize":"{font-size.xl5}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.semibold}","lineHeight":"{line-height.xl5}","fontSize":"{font-size.xl5}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"d2":{"light":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.light}","lineHeight":"{line-height.xl6}","fontSize":"{font-size.xl6}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xl6}","fontSize":"{font-size.xl6}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.semibold}","lineHeight":"{line-height.xl6}","fontSize":"{font-size.xl6}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}},"d1":{"light":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.light}","lineHeight":"{line-height.xl7}","fontSize":"{font-size.xl7}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.regular}","lineHeight":"{line-height.xl7}","fontSize":"{font-size.xl7}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family.primary}","fontWeight":"{font-weight.semibold}","lineHeight":"{line-height.xl7}","fontSize":"{font-size.xl7}","letterSpacing":"{letter-spacing.0}","paragraphSpacing":"{paragraph-spacing.display}","textCase":"{text-case.none}","textDecoration":"{text-decoration.none}"},"$type":"typography"}}}}');

/***/ }),

/***/ "./src/tokens/typography/typeface.json":
/*!*********************************************!*\
  !*** ./src/tokens/typography/typeface.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"font-family":{"primary":{"$value":"Inter","$type":"fontFamilies"}},"font-weight":{"regular":{"$value":"Regular","$type":"fontWeights"},"bold":{"$value":"Bold","$type":"fontWeights"},"semibold":{"$value":"Semi Bold","$type":"fontWeights"},"light":{"$value":"Light","$type":"fontWeights"},"italic":{"$value":"Italic","$type":"fontWeights"}},"text-case":{"none":{"$value":"none","$type":"textCase"},"uppercase":{"$value":"uppercase","$type":"textCase"}},"text-decoration":{"none":{"$value":"none","$type":"textDecoration"},"underline":{"$value":"underline","$type":"textDecoration"}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_figma_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/figma-colors */ "./src/utils/figma-colors.ts");
/* harmony import */ var _color_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-tokens */ "./src/color-tokens.ts");
/* harmony import */ var _utils_figma_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/figma-variables */ "./src/utils/figma-variables.ts");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _spacing_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spacing-tokens */ "./src/spacing-tokens.ts");
/* harmony import */ var _radii_tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radii-tokens */ "./src/radii-tokens.ts");
/* harmony import */ var _typescale_tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typescale-tokens */ "./src/typescale-tokens.ts");
/* harmony import */ var _sizing_tokens__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sizing-tokens */ "./src/sizing-tokens.ts");
/* harmony import */ var _effect_tokens__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./effect-tokens */ "./src/effect-tokens.ts");
/* harmony import */ var _opacity_tokens__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./opacity-tokens */ "./src/opacity-tokens.ts");
/* harmony import */ var _utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/sort-tokens */ "./src/utils/sort-tokens.ts");
/* harmony import */ var _utils_figma_text_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/figma-text-styles */ "./src/utils/figma-text-styles.ts");
/* harmony import */ var _color_generators_render_accents__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./color-generators/render-accents */ "./src/color-generators/render-accents.ts");
/* harmony import */ var _color_generators_accent_palette_generator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./color-generators/accent-palette-generator */ "./src/color-generators/accent-palette-generator.ts");
/* harmony import */ var _color_generators_neutrals_palette_generator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./color-generators/neutrals-palette-generator */ "./src/color-generators/neutrals-palette-generator.ts");
/* harmony import */ var _utils_variables_to_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/variables-to-styles */ "./src/utils/variables-to-styles.ts");
/* harmony import */ var _utils_token_references__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/token-references */ "./src/utils/token-references.ts");
/* harmony import */ var _utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/text-to-title-case */ "./src/utils/text-to-title-case.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./defaults */ "./src/defaults.ts");
/* harmony import */ var _fix_layers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./fix-layers */ "./src/fix-layers.ts");
/* harmony import */ var _utils_figma_effect_styles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utils/figma-effect-styles */ "./src/utils/figma-effect-styles.ts");
/* harmony import */ var _utils_update_elevation_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./utils/update-elevation-components */ "./src/utils/update-elevation-components.ts");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./utils/flatten-object */ "./src/utils/flatten-object.ts");
/* harmony import */ var _utils_round_two_digits__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./utils/round-two-digits */ "./src/utils/round-two-digits.ts");
/* harmony import */ var _utils_export_style_templates__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./utils/export-style-templates */ "./src/utils/export-style-templates.ts");
/* harmony import */ var _utils_import_style_templates__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./utils/import-style-templates */ "./src/utils/import-style-templates.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


























console.clear();
let globalTokens;
const collectionNames = new Map([
    ["brandColors", "Color Theme" /*"Brand Color"*/],
    ["themeColors", "Color Theme"],
    ["componentColors", "Component Tokens"],
    ["spacing", "Spacing"],
    ["opacity", "Opacity"],
    ["radii", "Radii"],
    ["iconScale", "Icon Scale"],
    ["globalSizing", "Global Sizing"],
]);
(() => __awaiter(void 0, void 0, void 0, function* () {
    const fontDetails = yield _typescale_tokens__WEBPACK_IMPORTED_MODULE_6__.getFontDetails();
    yield Promise.all(fontDetails.map((item) => __awaiter(void 0, void 0, void 0, function* () { return yield figma.loadFontAsync(item); })));
    if (figma.command === "import") {
        figma.showUI(__uiFiles__["import"], {
            width: 560,
            height: 720,
            themeColors: true,
        });
    }
    if (figma.command === "export") {
        figma.showUI(__uiFiles__["export"], {
            width: 500,
            height: 500,
            themeColors: true,
        });
    }
    if (figma.command == "bindToStyles") {
        (0,_utils_variables_to_styles__WEBPACK_IMPORTED_MODULE_15__.bindVariablesAndStyles)();
        figma.closePlugin();
    }
    if (figma.command == "updateElevationComponents") {
        (0,_utils_update_elevation_components__WEBPACK_IMPORTED_MODULE_21__.updateElevationComponents)(_effect_tokens__WEBPACK_IMPORTED_MODULE_8__.getElevationTokens());
        figma.closePlugin();
    }
    if (figma.command == "setPlayground") {
        const isPlayground = figma.root.getPluginData('SDSPlayground') !== '';
        figma.root.setPluginData('SDSPlayground', isPlayground ? '' : 'true');
        figma.notify(`${isPlayground ? '❎' : '✅'} Playground is ${isPlayground ? 'disabled' : 'enabled'}`);
        figma.closePlugin();
    }
    if (figma.command == "fixLayers") {
        yield (0,_fix_layers__WEBPACK_IMPORTED_MODULE_19__.processComponents)();
        figma.closePlugin();
    }
    if (figma.command == "exportStyleTemplates") {
        yield (0,_utils_export_style_templates__WEBPACK_IMPORTED_MODULE_24__.exportStyleTemplates)();
        figma.closePlugin('Style templates exported');
    }
    if (figma.command == "importStyleTemplates") {
        yield (0,_utils_import_style_templates__WEBPACK_IMPORTED_MODULE_25__.importStyleTemplates)();
        figma.closePlugin('Style templates imported');
    }
}))();
figma.ui.onmessage = (eventData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("code received message", eventData);
    const params = eventData.params;
    if (eventData.type === "IMPORT") {
        yield initiateImport(params);
        yield importAllTokens(params);
    }
    else if (eventData.type === "EXPORT") {
        yield exportToJSON(eventData.format);
    }
    else if (eventData.type === "ALERT") {
        figma.notify(`${eventData.params}`);
    }
    else if (eventData.type === "RENDER_ACCENTS") {
        const lightAccentTokens = (0,_color_generators_accent_palette_generator__WEBPACK_IMPORTED_MODULE_13__.generateGlobalAccentPalette)('light', params);
        const darkAccentTokens = (0,_color_generators_accent_palette_generator__WEBPACK_IMPORTED_MODULE_13__.generateGlobalAccentPalette)('dark', params);
        const frameLightPalette = (0,_color_generators_render_accents__WEBPACK_IMPORTED_MODULE_12__.renderAccents)(lightAccentTokens, 'Light Mode Accents');
        const frameDarkPalette = (0,_color_generators_render_accents__WEBPACK_IMPORTED_MODULE_12__.renderAccents)(darkAccentTokens, 'Dark Mode Accents');
        frameDarkPalette.y = frameLightPalette.height + 64;
    }
    else if (eventData.type === "RENDER_NEUTRALS") {
        const neutralTokens = (0,_color_generators_neutrals_palette_generator__WEBPACK_IMPORTED_MODULE_14__.generateNeutrals)(params);
        (0,_color_generators_neutrals_palette_generator__WEBPACK_IMPORTED_MODULE_14__.renderNeutrals)(neutralTokens, `Global Neutrals`);
    }
    else if (eventData.type === "LOADED") {
        try {
            const pluginData = figma.root.getPluginData('SDS');
            const data = JSON.parse(pluginData);
            figma.ui.postMessage(data);
        }
        catch (e) {
            console.warn('failed to read plugin data', e);
        }
    }
    else if (eventData.type == 'RESIZE') {
        switch (params.baseFontSize) {
            default: {
                figma.ui.resize(500, 800);
                break;
            }
            case 'large': {
                figma.ui.resize(560, 800);
                break;
            }
        }
    }
});
function initiateImport(params) {
    return __awaiter(this, void 0, void 0, function* () {
        yield getCollectionAndPrepareTokens({
            collectionName: collectionNames.get('componentColors'),
            modeName: "Default",
            data: (0,_color_tokens__WEBPACK_IMPORTED_MODULE_1__.getComponentColors)(),
            sortFn: (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__.getColorTokensSortFn)()
        });
        yield getCollectionAndPrepareTokens({
            collectionName: collectionNames.get('themeColors'),
            modeName: "Light Base",
            data: (0,_color_tokens__WEBPACK_IMPORTED_MODULE_1__.getThemeColors)('lightBase', params),
            sortFn: (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__.getColorTokensSortFn)()
        });
        yield getCollectionAndPrepareTokens({
            collectionName: collectionNames.get('spacing'),
            modeName: (0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_17__.toTitleCase)(params.spacing),
            data: _spacing_tokens__WEBPACK_IMPORTED_MODULE_4__[params.spacing],
            sortFn: (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__.getSizeTokensSortFn)(),
        });
        yield getCollectionAndPrepareTokens({
            collectionName: collectionNames.get('radii'),
            modeName: (0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_17__.toTitleCase)(params.radii),
            data: _radii_tokens__WEBPACK_IMPORTED_MODULE_5__[params.radii],
            sortFn: (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__.getSizeTokensSortFn)(),
        });
        yield getCollectionAndPrepareTokens({
            collectionName: collectionNames.get('iconScale'),
            modeName: (0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_17__.toTitleCase)("base"),
            data: _sizing_tokens__WEBPACK_IMPORTED_MODULE_7__.base,
            sortFn: (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__.getSizeTokensSortFn)(),
        });
        yield getCollectionAndPrepareTokens({
            collectionName: collectionNames.get('opacity'),
            modeName: (0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_17__.toTitleCase)("default"),
            data: _opacity_tokens__WEBPACK_IMPORTED_MODULE_9__.opacity,
            sortFn: (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__.getAlphaNumTokensSortFn)(),
        });
        yield getCollectionAndPrepareTokens({
            collectionName: collectionNames.get('globalSizing'),
            modeName: (0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_17__.toTitleCase)("default"),
            data: _sizing_tokens__WEBPACK_IMPORTED_MODULE_7__.global,
            sortFn: (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__.getAlphaNumTokensSortFn)(),
        });
    });
}
function generateVariablesForPlayground(data, isPlayground = false) {
    if (isPlayground === false) {
        return;
    }
    ;
    const contrastRatios = {};
    const primaryColorHUE = data.primary;
    const shades = (0,_color_generators_accent_palette_generator__WEBPACK_IMPORTED_MODULE_13__.getGlobalAccent)(data[primaryColorHUE], data.accentSaturation, data.accentMinLuminance, data.accentMidLuminance, data.accentMaxLuminance);
    Object.entries(shades).forEach(([name, token]) => {
        token.scopes = [];
        let chromaColor = chroma_js__WEBPACK_IMPORTED_MODULE_3___default()(token.$value);
        const contrast1 = (0,_utils_round_two_digits__WEBPACK_IMPORTED_MODULE_23__.roundTwoDigits)(chroma_js__WEBPACK_IMPORTED_MODULE_3___default().contrast(chroma_js__WEBPACK_IMPORTED_MODULE_3___default().hsl([0, 0, 1]), chromaColor));
        const contrast2 = (0,_utils_round_two_digits__WEBPACK_IMPORTED_MODULE_23__.roundTwoDigits)(chroma_js__WEBPACK_IMPORTED_MODULE_3___default().contrast(chroma_js__WEBPACK_IMPORTED_MODULE_3___default().hsl([0, 0, 0.22]), chromaColor));
        contrastRatios[`_accent_${name}_vs_light`] = {
            "$value": contrast1.toString(),
            "$type": "string",
            "scopes": []
        };
        contrastRatios[`_accent_${name}_vs_dark`] = {
            "$value": contrast2.toString(),
            "$type": "string",
            "scopes": []
        };
    });
    importVariables({
        collectionName: "_Playground",
        modeName: "Default",
        data: Object.assign(Object.assign(Object.assign({}, (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_22__.flattenObject)({ '_global-accent': shades })), contrastRatios), { '_primary-color-hue': {
                "$value": data[data.primary].toString(),
                "$type": "string",
                "scopes": []
            }, '_primary-color': {
                "$value": data.primary,
                "$type": "string",
                "scopes": []
            }, '_success-color': {
                "$value": data.success,
                "$type": "string",
                "scopes": []
            }, '_warning-color': {
                "$value": data.warning,
                "$type": "string",
                "scopes": []
            }, '_danger-color': {
                "$value": data.danger,
                "$type": "string",
                "scopes": []
            }, '_info-color': {
                "$value": data.info,
                "$type": "string",
                "scopes": []
            } })
    });
}
function importAllTokens(params) {
    return __awaiter(this, void 0, void 0, function* () {
        figma.root.setPluginData('SDS', JSON.stringify(params));
        const isPlayground = figma.root.getPluginData('SDSPlayground') !== '';
        generateVariablesForPlayground(params, isPlayground);
        yield importColorTheme(params);
        yield importVariables({
            collectionName: collectionNames.get('componentColors'),
            modeName: "Default",
            data: (0,_color_tokens__WEBPACK_IMPORTED_MODULE_1__.getComponentColors)()
        });
        yield importSizeTokens({
            type: 'spacing',
            collectionName: collectionNames.get('spacing'),
            params: params,
            defaultMode: params.spacing,
            defaultOrder: _defaults__WEBPACK_IMPORTED_MODULE_18__.spacingSizeName,
            tokens: _spacing_tokens__WEBPACK_IMPORTED_MODULE_4__
        });
        yield importSizeTokens({
            type: 'radii',
            collectionName: collectionNames.get('radii'),
            params: params,
            defaultMode: params.radii,
            defaultOrder: _defaults__WEBPACK_IMPORTED_MODULE_18__.radiiSizeName,
            tokens: _radii_tokens__WEBPACK_IMPORTED_MODULE_5__
        });
        yield importSizeTokens({
            type: 'typeScale',
            collectionName: 'Type Scale',
            params: params,
            defaultMode: params.baseFontSize,
            defaultOrder: _defaults__WEBPACK_IMPORTED_MODULE_18__.typographySizeName,
            tokens: _typescale_tokens__WEBPACK_IMPORTED_MODULE_6__,
            isSingleMode: true
        });
        // ICONS SCALE
        yield importSizeTokens({
            type: 'iconScale',
            collectionName: collectionNames.get('iconScale'),
            params: params,
            defaultMode: 'base',
            defaultOrder: _defaults__WEBPACK_IMPORTED_MODULE_18__.iconSizeName,
            tokens: _sizing_tokens__WEBPACK_IMPORTED_MODULE_7__
        });
        yield importVariables({
            collectionName: collectionNames.get('opacity'),
            modeName: "Default",
            data: _opacity_tokens__WEBPACK_IMPORTED_MODULE_9__.opacity
        });
        yield importVariables({
            collectionName: collectionNames.get('globalSizing'),
            modeName: "Default",
            data: _sizing_tokens__WEBPACK_IMPORTED_MODULE_7__.global
        });
        globalTokens = Object.assign(Object.assign({}, globalTokens), _typescale_tokens__WEBPACK_IMPORTED_MODULE_6__.getTypograohyTokens(params.baseFontSize, params.typeScale));
        yield (0,_utils_figma_text_styles__WEBPACK_IMPORTED_MODULE_11__.importTextStyles)(_typescale_tokens__WEBPACK_IMPORTED_MODULE_6__.getTypograohyTokens(params.baseFontSize, params.typeScale));
        yield importEffects();
        figma.notify("Figma variables has been imported");
        figma.ui.postMessage("importCompleted");
    });
}
function importEffects() {
    return __awaiter(this, void 0, void 0, function* () {
        // import effects for default theme which is light one
        yield (0,_utils_figma_effect_styles__WEBPACK_IMPORTED_MODULE_20__.importEffectStyles)(_effect_tokens__WEBPACK_IMPORTED_MODULE_8__.elevation);
        (0,_utils_update_elevation_components__WEBPACK_IMPORTED_MODULE_21__.updateElevationComponents)(_effect_tokens__WEBPACK_IMPORTED_MODULE_8__.getElevationTokens());
    });
}
function importColorTheme(params) {
    let themeColors = (0,_color_tokens__WEBPACK_IMPORTED_MODULE_1__.getThemeColors)('lightBase', params);
    globalTokens = Object.assign(Object.assign(Object.assign({}, (0,_color_tokens__WEBPACK_IMPORTED_MODULE_1__.getGlobalNeutrals)()), (0,_color_tokens__WEBPACK_IMPORTED_MODULE_1__.getComponentColors)()), themeColors);
    console.log('Importing Light Base', themeColors);
    importVariables({
        collectionName: collectionNames.get('themeColors'),
        modeName: "Light Base",
        data: themeColors,
        sortFn: _utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__.getColorTokensSortFn
    });
    themeColors = (0,_color_tokens__WEBPACK_IMPORTED_MODULE_1__.getThemeColors)('darkBase', params);
    globalTokens = Object.assign(globalTokens, themeColors);
    console.log('Importing Dark Base', themeColors);
    importVariables({
        collectionName: collectionNames.get('themeColors'),
        modeName: "Dark Base",
        data: themeColors
    });
    themeColors = (0,_color_tokens__WEBPACK_IMPORTED_MODULE_1__.getThemeColors)('darkElevated', params);
    globalTokens = Object.assign(globalTokens, themeColors);
    console.log('Importing Dark Elevated', themeColors);
    importVariables({
        collectionName: collectionNames.get('themeColors'),
        modeName: "Dark Elevated",
        data: themeColors
    });
}
function importSizeTokens(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const tokens = data.tokens;
        const isSingleMode = data.isSingleMode || false;
        const singleCollection = data.params.singleCollection;
        const defaultMode = data.defaultMode;
        const defaultOrder = data.defaultOrder.filter(item => item != defaultMode);
        defaultOrder.splice(0, 0, defaultMode);
        defaultOrder.length = isSingleMode ? 1 : defaultOrder.length;
        let index = 0;
        for (const modeName of defaultOrder) {
            yield importVariables({
                collectionName: singleCollection ? "UI Scale" : data.collectionName,
                modeName: (0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_17__.toTitleCase)(modeName),
                modeIndex: index++,
                data: tokens[modeName],
                isSingleMode: isSingleMode
            });
        }
    });
}
function getCollectionAndPrepareTokens({ collectionName, modeName, modeIndex = -1, data, sortFn = null, isSingleMode = false }) {
    return __awaiter(this, void 0, void 0, function* () {
        let modeId;
        const { collection, isNew } = yield (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_2__.getFigmaCollection)(collectionName);
        if (isNew || isSingleMode) {
            modeId = collection.modes[0].modeId;
            collection.renameMode(modeId, modeName);
        }
        else {
            const mode = modeIndex < 0 ? collection.modes.find(mode => mode.name === modeName) : collection.modes[modeIndex];
            if (!mode) {
                try {
                    modeId = collection.addMode(modeName);
                }
                catch (e) {
                    figma.notify("Cannot create more than one mode. Is your file under Pro team or org plan?", { error: true });
                    console.error(e);
                    figma.closePlugin();
                }
            }
            else {
                modeId = mode.modeId;
                collection.renameMode(modeId, modeName);
            }
        }
        let transformedTokens = Object.entries(data).map(([key, object]) => {
            return Object.assign({ name: key }, object);
        });
        let sortedTokens = transformedTokens;
        if (sortFn != null) {
            sortedTokens = transformedTokens.sort(sortFn);
        }
        if (isNew) {
            // create variables straight away so there is a way to make 
            // references / aliases without additional pass
            for (const token of sortedTokens) {
                const type = (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_2__.resolveVariableType)(token.$type);
                yield (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_2__.setFigmaVariable)(collection, modeId, type, token.name);
            }
        }
        return {
            tokens: sortedTokens,
            collection,
            modeId,
            type: data.$type
        };
    });
}
function importVariables({ collectionName, modeName, modeIndex = -1, data, sortFn = null, isSingleMode = false }) {
    return __awaiter(this, void 0, void 0, function* () {
        const { tokens, collection, modeId, type } = yield getCollectionAndPrepareTokens({ collectionName, modeName, modeIndex, data, sortFn, isSingleMode });
        // await Promise.all(tokens.map(async (token: DesignToken) => {
        // }));
        for (const token of tokens) {
            yield processToken({
                collection,
                modeId,
                type: token.$type,
                variableName: token.name,
                token: token
            });
        }
    });
}
function processToken({ collection, modeId, type, variableName, token }) {
    return __awaiter(this, void 0, void 0, function* () {
        type = type || token.$type;
        // if key is a meta field, move on
        if (variableName.charAt(0) === "$") {
            return;
        }
        if (token.$value !== undefined) {
            if (type === "color") {
                let colorValue = (0,_utils_figma_colors__WEBPACK_IMPORTED_MODULE_0__.parseColorToken)(token, globalTokens);
                let referenceVar = yield (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_16__.findVariableByReferences)(token.$value.trim());
                if (referenceVar) {
                    colorValue = {
                        type: "VARIABLE_ALIAS",
                        id: referenceVar.id,
                    };
                }
                return yield (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_2__.setFigmaVariable)(collection, modeId, "COLOR", variableName, colorValue, token.scopes || ['ALL_SCOPES'], token.description || null);
            }
            if (type === "number") {
                return yield (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_2__.setFigmaVariable)(collection, modeId, "FLOAT", variableName, parseFloat(token.$value), token.scopes, token.description || null);
            }
            try {
                return yield (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_2__.setFigmaVariable)(collection, modeId, "STRING", variableName, (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_16__.parseReferenceGlobal)(token.$value, globalTokens), token.scopes, token.description || null);
            }
            catch (e) {
                console.error("unsupported type", type, token);
            }
        }
        else {
            console.warn('recursion in ', token);
        }
    });
}
function exportToJSON(colorFormat) {
    return __awaiter(this, void 0, void 0, function* () {
        const collections = yield figma.variables.getLocalVariableCollectionsAsync();
        const files = [];
        for (const collection of collections) {
            const exportedData = yield exportCollection(collection, colorFormat);
            files.push(...exportedData);
        }
        figma.ui.postMessage({ type: "EXPORT_RESULT", files });
    });
}
function exportCollection({ name, modes, variableIds }, colorFormat) {
    return __awaiter(this, void 0, void 0, function* () {
        const collections = [];
        const variableReferences = variableIds.sort();
        for (const mode of modes) {
            const collection = { collection: name, mode: mode.name, tokens: {} };
            for (const variableId of variableReferences) {
                const { name, resolvedType, valuesByMode } = yield figma.variables.getVariableByIdAsync(variableId);
                console.log(name);
                const value = valuesByMode[mode.modeId];
                if (value !== undefined && ["COLOR", "FLOAT"].includes(resolvedType)) {
                    let obj = collection.tokens;
                    name.split("/").forEach((groupName) => {
                        obj[groupName] = obj[groupName] || {};
                        obj = obj[groupName];
                    });
                    obj.$type = resolvedType === "COLOR" ? "color" : "number";
                    if (value.type === "VARIABLE_ALIAS") {
                        const variable = yield figma.variables.getVariableByIdAsync(value.id);
                        obj.$value = `{${variable.name.replace(/\//g, ".")}}`;
                    }
                    else {
                        obj.$value = resolvedType === "COLOR" ? (0,_utils_figma_colors__WEBPACK_IMPORTED_MODULE_0__.convertFigmaColorToRgb)(value, colorFormat) : value;
                    }
                }
            }
            ;
            collections.push(collection);
        }
        ;
        return collections;
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtDQUFrQyxFQUFFLGFBQWEsRUFBRTtBQUNuRCxtQ0FBbUMsRUFBRSxhQUFhLEVBQUU7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCO0FBQ0EsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsTUFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5QjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDZCQUE2QjtBQUM3QiwyQkFBMkI7QUFDM0IseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyRkFBMkY7QUFDM0YsbUdBQW1HO0FBQ25HLG1HQUFtRztBQUNuRyxtR0FBbUc7QUFDbkcsbUdBQW1HO0FBQ25HLG1HQUFtRztBQUNuRztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxRUFBcUU7QUFDckU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx5Q0FBeUM7QUFDekMseUNBQXlDOztBQUV6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUk7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRCxpQkFBaUI7QUFDckU7O0FBRUEscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSwwREFBMEQ7QUFDMUQsVUFBVTtBQUNWO0FBQ0EsMERBQTBEO0FBQzFELFVBQVU7QUFDVjtBQUNBOztBQUVBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixxREFBcUQsV0FBVztBQUN4RjtBQUNBLG9EQUFvRCxlQUFlO0FBQ25FLHlDQUF5QyxrQkFBa0I7QUFDM0Q7QUFDQSwyQ0FBMkMsd0JBQXdCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixjQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsY0FBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyxxQ0FBcUM7QUFDckM7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUJBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixpQkFBaUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsbUJBQW1CO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUEyQztBQUMzQyx3Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvR0FBb0c7QUFDcEcsd0dBQXdHO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QztBQUN2Qzs7QUFFQSxnQ0FBZ0M7O0FBRWhDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGtDQUFrQyxlQUFlO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUM7O0FBRXZDOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsb0JBQW9CLE9BQU87QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGlCQUFpQjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkLDhCQUE4QixLQUFLO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELDZCQUE2QjtBQUN4Riw0REFBNEQsb0NBQW9DO0FBQ2hHLDJEQUEyRCx5QkFBeUI7QUFDcEY7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDOztBQUVBO0FBQ0E7O0FBRUEsY0FBYztBQUNkOztBQUVBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsMkVBQTJFLDRDQUE0Qzs7QUFFdkgsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSx5QkFBeUI7QUFDcEc7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7QUFDbEU7O0FBRUE7QUFDQSxtREFBbUQsa0JBQWtCO0FBQ3JFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLCtCQUErQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBLDRCQUE0QixpQkFBaUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkMsd0JBQXdCO0FBQ25FO0FBQ0E7QUFDQSxnREFBZ0QsaUJBQWlCO0FBQ2pFO0FBQ0Esd0RBQXdELDZDQUE2QztBQUNyRztBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0Esa0RBQWtELGlCQUFpQjtBQUNuRTtBQUNBLHdEQUF3RCxpRkFBaUY7QUFDekk7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0Esa0RBQWtELGlCQUFpQjtBQUNuRTtBQUNBLHdEQUF3RCwrSEFBK0g7QUFDdkw7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsNkNBQTZDLGlCQUFpQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCwyQ0FBMkMsNEVBQTRFLE9BQU87QUFDdEw7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQztBQUNoQyxvQ0FBb0M7QUFDcEMsa0NBQWtDO0FBQ2xDLG1DQUFtQztBQUNuQyxrQ0FBa0M7QUFDbEMsbUNBQW1DO0FBQ25DLGdDQUFnQztBQUNoQztBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQzs7QUFFaEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixLQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBLDBDQUEwQzs7QUFFMUM7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsYUFBYTs7QUFFcEUseUJBQXlCOztBQUV6Qjs7QUFFQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBOztBQUVBLHdDQUF3QztBQUN4QztBQUNBLDBCQUEwQixPQUFPO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsU0FBUztBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNkM7QUFDN0M7QUFDQSw0QkFBNEIsU0FBUztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsU0FBUztBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixPQUFPO0FBQ3JDO0FBQ0E7QUFDQSxnQ0FBZ0MsT0FBTztBQUN2QztBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxTQUFTO0FBQ3pDO0FBQ0E7QUFDQSxnQ0FBZ0MsT0FBTztBQUN2QztBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFNBQVM7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLFNBQVM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixTQUFTO0FBQ3JDO0FBQ0E7QUFDQSw0QkFBNEIsT0FBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixTQUFTO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxhQUFhO0FBQ2hGO0FBQ0EsNEJBQTRCLDhCQUE4QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQjs7QUFFckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDZCQUE2QixpRUFBaUU7QUFDOUYsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFELGlCQUFpQjtBQUN0RTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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QUNBO0FBQ0EsNkJBQTZCLHdFQUFnQjtBQUM3QztBQUNBO0FBQ0EsNkJBQTZCLHdFQUFnQiw2Q0FBNkMsOEVBQW9CO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDhCQUE4QjtBQUM3RCxLQUFLO0FBQ0w7QUFDQSw0QkFBNEIsMEJBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0Esd0JBQXdCLG1DQUFtQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsRUFBRSxtQ0FBbUM7QUFDNUU7QUFDQTtBQUNBLGdFQUFnRSwyRUFBc0I7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvY29sb3ItZ2VuZXJhdG9ycy9hY2NlbnQtcGFsZXR0ZS1nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy9jb2xvci1nZW5lcmF0b3JzL25ldXRyYWxzLXBhbGV0dGUtZ2VuZXJhdG9yLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvY29sb3ItZ2VuZXJhdG9ycy9yZW5kZXItYWNjZW50cy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL2NvbG9yLWdlbmVyYXRvcnMvc3dhdGNoZXMtZ2VuZXJhdG9yLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvY29sb3ItdG9rZW5zLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvZGVmYXVsdHMudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy9lZmZlY3QtdG9rZW5zLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvZml4LWxheWVycy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL29wYWNpdHktdG9rZW5zLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvcmFkaWktdG9rZW5zLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvc2l6aW5nLXRva2Vucy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3NwYWNpbmctdG9rZW5zLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdHlwZXNjYWxlLXRva2Vucy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3V0aWxzL2Nsb25lLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvZGVsYXktYXN5bmMudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy9leHBvcnQtc3R5bGUtdGVtcGxhdGVzLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvZmlnbWEtY29sb3JzLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvZmlnbWEtZWZmZWN0LXN0eWxlcy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3V0aWxzL2ZpZ21hLXRleHQtc3R5bGVzLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvZmlnbWEtdmFyaWFibGVzLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvZmxhdHRlbi1vYmplY3QudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy9pbXBvcnQtc3R5bGUtdGVtcGxhdGVzLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvcm91bmQtdHdvLWRpZ2l0cy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3V0aWxzL3NvcnQtdG9rZW5zLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvc3dhcC12YXJpYWJsZXMudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy90ZXh0LXRvLXRpdGxlLWNhc2UudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy90b2tlbi1yZWZlcmVuY2VzLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvdXBkYXRlLWVsZXZhdGlvbi1jb21wb25lbnRzLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvdmFyaWFibGVzLXRvLXN0eWxlcy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9jaHJvbWEuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaHJvbWEgZnJvbSBcImNocm9tYS1qc1wiO1xuaW1wb3J0IHsgcGFyc2VSZWZlcmVuY2VHbG9iYWwgfSBmcm9tIFwiLi4vdXRpbHMvdG9rZW4tcmVmZXJlbmNlc1wiO1xuaW1wb3J0IHsgZGVmYXVsdEFjY2VudEhVRXMsIHN5c3RlbUFjY2VudExpc3QgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcbmV4cG9ydCBmdW5jdGlvbiBnZXRTaGFkZXNUZW1wbGF0ZSh0aGVtZSwgY29sb3JOYW1lKSB7XG4gICAgaWYgKHRoZW1lID09ICdsaWdodCcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFwiMTAwXCI6IHtcbiAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBcInJnYmEoezIwMH0sIDAuMTI1KVwiLFxuICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogYFN1YnRsZSBzZW1pdHJhbnNwYXJlbnQgYWNjZW50YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiMjAwXCI6IHtcbiAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBcInJnYmEoezIwMH0sIDAuMzMpXCIsXG4gICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBgTGlnaHQgc2VtaXRyYW5zcGFyZW50IGFjY2VudGBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIjMwMFwiOiB7XG4gICAgICAgICAgICAgICAgXCIkdmFsdWVcIjogXCJ7MzAwfVwiLFxuICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogYE5vbiB0ZXh0dWFsIGVsZW1lbnRzYFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiNDAwXCI6IHtcbiAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBcIns0MDB9XCIsXG4gICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBgQmFzZSBiYWNrZ3JvdW5kIGNvbG9yYFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiNTAwXCI6IHtcbiAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBcIns1MDB9XCIsXG4gICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBgVGV4dCBvbiBsaWdodCBzdXJmYWNlYFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiNjAwXCI6IHtcbiAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBcInsxMDB9XCIsXG4gICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBgVGV4dCBvbiBkYXJrIHN1cmZhY2VgXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0aGVtZSA9PSAnZGFyaycpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFwiMTAwXCI6IHtcbiAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBcInJnYmEoezIwMH0sIDAuMjApXCIsXG4gICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBgU3VidGxlIHNlbWl0cmFuc3BhcmVudCBhY2NlbnRgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCIyMDBcIjoge1xuICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IFwicmdiYSh7MjAwfSwgMC40NSlcIixcbiAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwiY29sb3JcIixcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGBMaWdodCBzZW1pdHJhbnNwYXJlbnQgYWNjZW50YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiMzAwXCI6IHtcbiAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBcInszMDB9XCIsXG4gICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBgTm9uIHRleHR1YWwgZWxlbWVudHNgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCI0MDBcIjoge1xuICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IFwiezQwMH1cIixcbiAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwiY29sb3JcIixcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGBCYXNlIGJhY2tncm91bmQgY29sb3JgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCI1MDBcIjoge1xuICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IFwiezEwMH1cIixcbiAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwiY29sb3JcIixcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGBUZXh0IG9uIGxpZ2h0IHN1cmZhY2VgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCI2MDBcIjoge1xuICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IFwiezEwMH1cIixcbiAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwiY29sb3JcIixcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGBUZXh0IG9uIGRhcmsgc3VyZmFjZWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBUaGVtZTogJHt0aGVtZX0gaXMgaW52YWxpZGApO1xufVxuZnVuY3Rpb24gZ2V0Q29sb3JQYXJhbXModGhlbWUsIHBhcmFtcykge1xuICAgIGxldCBjb2xvclBhcmFtcyA9IHtcbiAgICAgICAgc2F0dXJhdGlvbjogcGFyYW1zLmFjY2VudFNhdHVyYXRpb24sIC8vMC45IGlzIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgbWluTHVtaW5hbmNlOiBwYXJhbXMuYWNjZW50TWluTHVtaW5hbmNlLFxuICAgICAgICBtaWRMdW1pbmFuY2U6IHBhcmFtcy5hY2NlbnRNaWRMdW1pbmFuY2UsXG4gICAgICAgIG1heEx1bWluYW5jZTogcGFyYW1zLmFjY2VudE1heEx1bWluYW5jZSxcbiAgICB9O1xuICAgIGlmICh0aGVtZSA9PSAnZGFyaycpIHtcbiAgICAgICAgY29sb3JQYXJhbXMuc2F0dXJhdGlvbiA9IHBhcmFtcy5hY2NlbnRTYXR1cmF0aW9uICogMC44NTtcbiAgICAgICAgLy8gY29sb3JQYXJhbXMubWF4THVtaW5hbmNlID0gcGFyYW1zLmFjY2VudE1heEx1bWluYW5jZSAqIDAuODU7XG4gICAgfVxuICAgIHJldHVybiBjb2xvclBhcmFtcztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVN5c3RlbUFjY2VudFBhbGV0dGUodGhlbWUsIHBhcmFtcykge1xuICAgIGNvbnN0IHsgc2F0dXJhdGlvbiwgbWluTHVtaW5hbmNlLCBtaWRMdW1pbmFuY2UsIG1heEx1bWluYW5jZSB9ID0gZ2V0Q29sb3JQYXJhbXModGhlbWUsIHBhcmFtcyk7XG4gICAgbGV0IGFjY2VudHMgPSB7XG4gICAgICAgIHJlZDogZ2V0U2hhZGVzVGVtcGxhdGUodGhlbWUsICdyZWQnKSxcbiAgICAgICAgYW1iZXI6IGdldFNoYWRlc1RlbXBsYXRlKHRoZW1lLCAnYW1iZXInKSxcbiAgICAgICAgYnJvd246IGdldFNoYWRlc1RlbXBsYXRlKHRoZW1lLCAnYnJvd24nKSxcbiAgICAgICAgZ3JlZW46IGdldFNoYWRlc1RlbXBsYXRlKHRoZW1lLCAnZ3JlZW4nKSxcbiAgICAgICAgdGVhbDogZ2V0U2hhZGVzVGVtcGxhdGUodGhlbWUsICd0ZWFsJyksXG4gICAgICAgIGJsdWU6IGdldFNoYWRlc1RlbXBsYXRlKHRoZW1lLCAnYmx1ZScpLFxuICAgICAgICBpbmRpZ286IGdldFNoYWRlc1RlbXBsYXRlKHRoZW1lLCAnaW5kaWdvJyksXG4gICAgICAgIHZpb2xldDogZ2V0U2hhZGVzVGVtcGxhdGUodGhlbWUsICd2aW9sZXQnKSxcbiAgICAgICAgcHVycGxlOiBnZXRTaGFkZXNUZW1wbGF0ZSh0aGVtZSwgJ3B1cnBsZScpLFxuICAgICAgICBwaW5rOiBnZXRTaGFkZXNUZW1wbGF0ZSh0aGVtZSwgJ3BpbmsnKVxuICAgIH07XG4gICAgZm9yIChjb25zdCBbbmFtZSwgc2NhbGVdIG9mIE9iamVjdC5lbnRyaWVzKGFjY2VudHMpKSB7XG4gICAgICAgIGNvbnN0IGh1ZSA9IHBhcmFtc1tuYW1lXTtcbiAgICAgICAgY29uc3Qgc2hhZGVzID0gZ2V0R2xvYmFsQWNjZW50KGh1ZSwgc2F0dXJhdGlvbiwgbWluTHVtaW5hbmNlLCBtaWRMdW1pbmFuY2UsIG1heEx1bWluYW5jZSk7XG4gICAgICAgIGFjY2VudHNbbmFtZV0gPSBnZXRUaGVtZVNjYWxlKHNjYWxlLCBzaGFkZXMpO1xuICAgIH1cbiAgICByZXR1cm4gYWNjZW50cztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUdsb2JhbEFjY2VudFBhbGV0dGUodGhlbWUsIHBhcmFtcykge1xuICAgIGNvbnN0IHsgc2F0dXJhdGlvbiwgbWluTHVtaW5hbmNlLCBtaWRMdW1pbmFuY2UsIG1heEx1bWluYW5jZSB9ID0gZ2V0Q29sb3JQYXJhbXModGhlbWUsIHBhcmFtcyk7XG4gICAgbGV0IGFjY2VudHMgPSB7fTtcbiAgICBzeXN0ZW1BY2NlbnRMaXN0LmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGNvbnN0IGh1ZSA9IHBhcmFtc1tuYW1lXTtcbiAgICAgICAgYWNjZW50c1tuYW1lXSA9IGdldEdsb2JhbEFjY2VudChodWUsIHNhdHVyYXRpb24sIG1pbkx1bWluYW5jZSwgbWlkTHVtaW5hbmNlLCBtYXhMdW1pbmFuY2UpO1xuICAgIH0pO1xuICAgIHJldHVybiBhY2NlbnRzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEdsb2JhbEFjY2VudChodWUsIHNhdHVyYXRpb24sIG1pbkx1bWluYW5jZSwgbWlkTGltaW5hbmNlLCBtYXhMdW1pbmFuY2UsIHN0ZXBzID0gNykge1xuICAgIGNvbnN0IHJhbmdlID0gZ2V0UmFuZ2VPZlRocmVlKHtcbiAgICAgICAgaHVlLFxuICAgICAgICBzYXR1cmF0aW9uLFxuICAgICAgICBtaW5MdW1pbmFuY2UsXG4gICAgICAgIG1pZExpbWluYW5jZSxcbiAgICAgICAgbWF4THVtaW5hbmNlXG4gICAgfSk7XG4gICAgY29uc3Qgc2hhZGVzID0gZ2V0U2NhbGUocmFuZ2UsIHN0ZXBzKTtcbiAgICByZXR1cm4gc2hhZGVzO1xufVxuZnVuY3Rpb24gZ2V0VGhlbWVTY2FsZShpbnB1dCwgZGljdGlvbmFyeSkge1xuICAgIGxldCBvdXRwdXQgPSB7fTtcbiAgICBPYmplY3QuZW50cmllcyhpbnB1dCkuZm9yRWFjaCgoW3NoYWRlTnVtYmVyLCB0b2tlbl0pID0+IHtcbiAgICAgICAgdG9rZW4uJHZhbHVlID0gcGFyc2VSZWZlcmVuY2VHbG9iYWwodG9rZW4uJHZhbHVlLCBkaWN0aW9uYXJ5KTtcbiAgICAgICAgb3V0cHV0W3NoYWRlTnVtYmVyXSA9IHRva2VuO1xuICAgIH0pO1xuICAgIHJldHVybiBvdXRwdXQ7XG59XG4vKlxuICAgIGNvbG9yczogZ2V0UmFuZ2VPZlRocmVlKClcbiovXG5mdW5jdGlvbiBnZXRTY2FsZShjb2xvcnMsIGNvdW50ID0gOSkge1xuICAgIGxldCB0b2tlbnMgPSB7fTtcbiAgICAvLyBjaHJvbWEgc2NhbGUgcmV0dXJucyBhcnJheSBvZiBoZXggdmFsdWVzXG4gICAgY29uc3Qgc2NhbGUgPSBjaHJvbWEuc2NhbGUoY29sb3JzKS5jb2xvcnMoY291bnQsICdoZXgnKTtcbiAgICBzY2FsZS5mb3JFYWNoKChjb2xvciwgaW5kZXgpID0+IHtcbiAgICAgICAgdG9rZW5zW2Ake2luZGV4ICsgMX0wMGBdID0ge1xuICAgICAgICAgICAgJHZhbHVlOiBjb2xvcixcbiAgICAgICAgICAgICR0eXBlOiAnY29sb3InLFxuICAgICAgICAgICAgcHJpdmF0ZTogdHJ1ZVxuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG5mdW5jdGlvbiBnZXRSYW5nZU9mVGhyZWUoeyBodWUsIHNhdHVyYXRpb24sIG1pbkx1bWluYW5jZSA9IDAuMSwgbWlkTGltaW5hbmNlID0gMC4xOCwgbWF4THVtaW5hbmNlID0gMC4yOSB9KSB7XG4gICAgbGV0IGNvbG9yMSA9IGNocm9tYS5oc2woW2h1ZSAqIDAuOTYsIHNhdHVyYXRpb24gKiAwLjk1LCAwLjVdKVxuICAgICAgICAubHVtaW5hbmNlKG1heEx1bWluYW5jZSk7XG4gICAgLy8gdGhpcyBvbmUgYWx3YXlzIDQuNSA6IDEgY29udHJhc3QgcmF0aW9cbiAgICBsZXQgY29sb3IyID0gY2hyb21hLmhzbChbaHVlLCBzYXR1cmF0aW9uICogMSwgMC41XSlcbiAgICAgICAgLmx1bWluYW5jZShtaWRMaW1pbmFuY2UpO1xuICAgIGxldCBjb2xvcjMgPSBjaHJvbWEuaHNsKFtodWUgKiAxLjA0LCBzYXR1cmF0aW9uICogMC45NSwgMC41XSlcbiAgICAgICAgLmx1bWluYW5jZShtaW5MdW1pbmFuY2UpO1xuICAgIHJldHVybiBbY29sb3IxLCBjb2xvcjIsIGNvbG9yM107XG59XG5leHBvcnQgeyBkZWZhdWx0QWNjZW50SFVFcyBhcyBkZWZhdWx0QWNjZW50Q29sb3JzIH07XG4iLCJpbXBvcnQgY2hyb21hIGZyb20gXCJjaHJvbWEtanNcIjtcbmltcG9ydCB7IHJlbmRlckNvbG9yIH0gZnJvbSBcIi4vc3dhdGNoZXMtZ2VuZXJhdG9yXCI7XG5mdW5jdGlvbiBnZXRTYXR1cmF0aW9uTW9kaWZpZXIobGlnaHRuZXNzKSB7XG4gICAgLy8gdmlzdWFsIHJlcHJlc2VudGF0aW9uXG4gICAgLy8gaHR0cHM6Ly93d3cuZGVzbW9zLmNvbS9jYWxjdWxhdG9yLzAydWZyZnN1enlcbiAgICBjb25zdCBvZmZzZXQgPSA1MDsgLy8gbGlndGhuZXNzIHJhbmdlIGlzIFswLCAxMDBdLCBmb3Igc2F0dXJhdGlvbiB3ZSBuZWVkIHRvIG9mZnNldCB0aGUgY3VydmUgdG8gbWFrZSBbLTUwLCA1MF0gcmFuZ2UgXG4gICAgY29uc3QgbWFnbml0dWRlID0gNzA7IC8vIHNldHMgaG93IG11Y2ggdG8gbW9kaWZ5LCBoaWdoZXIgdmFsdWVzIG91dHB1dHMgc21hbGxlciBtb2RpZmllclxuICAgIGNvbnN0IHNhdHVyYXRpb25Nb2RpZmllciA9IDEgKyAoTWF0aC5wb3cobGlnaHRuZXNzIC0gb2Zmc2V0LCAyKSAvIG1hZ25pdHVkZSAtIE1hdGgucG93KG9mZnNldCwgMikgLyBtYWduaXR1ZGUpIC8gMTAwO1xuICAgIHJldHVybiBzYXR1cmF0aW9uTW9kaWZpZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOZXV0cmFscyhwYXJhbXMpIHtcbiAgICBjb25zdCB7IGh1ZSA9IDIwMCwgc2F0dXJhdGlvbiA9IDAuMSwgbWluID0gNCwgbWF4ID0gMTAwLCBkaXN0YW5jZSB9ID0gcGFyYW1zIHx8IHt9O1xuICAgIGxldCB0b2tlbnMgPSB7fTtcbiAgICBsZXQgdmFsdWUgPSBtaW47XG4gICAgd2hpbGUgKHZhbHVlIDw9IG1heCkge1xuICAgICAgICBjb25zdCBzTW9kID0gMSAvIE1hdGgucG93KDEuMywgKG1heCAtIHZhbHVlKSAvIDEwMCk7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gY2hyb21hLmhzbChodWUsIHNhdHVyYXRpb24gKiBnZXRTYXR1cmF0aW9uTW9kaWZpZXIodmFsdWUpLCB2YWx1ZSAvIDEwMCk7XG4gICAgICAgIHRva2Vuc1tgZ3JleS0ke3ZhbHVlfWBdID0ge1xuICAgICAgICAgICAgJyR2YWx1ZSc6IGNvbG9yLmhleCgpLFxuICAgICAgICAgICAgJyR0eXBlJzogJ2NvbG9yJyxcbiAgICAgICAgICAgICdwcml2YXRlJzogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICB2YWx1ZSsrO1xuICAgIH1cbiAgICB0b2tlbnNbXCJncmV5LTEwMFwiXSA9IHtcbiAgICAgICAgXCIkdmFsdWVcIjogXCIjRkZGRkZGXCIsXG4gICAgICAgICckdHlwZSc6ICdjb2xvcicsXG4gICAgICAgICdwcml2YXRlJzogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJOZXV0cmFscyhjb2xvcnMsIG5hbWUpIHtcbiAgICBjb25zdCBleGlzdGluZ05vZGUgPSBmaWdtYS5jdXJyZW50UGFnZS5maW5kQ2hpbGQoKG5vZGUpID0+IG5vZGUubmFtZS5zdGFydHNXaXRoKCdHbG9iYWwgTmV1dHJhbHMnKSk7XG4gICAgZXhpc3RpbmdOb2RlID09PSBudWxsIHx8IGV4aXN0aW5nTm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXhpc3RpbmdOb2RlLnJlbW92ZSgpO1xuICAgIGxldCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgZnJhbWUubGF5b3V0TW9kZSA9ICdIT1JJWk9OVEFMJztcbiAgICBmcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICBmcmFtZS5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICBmcmFtZS5pdGVtU3BhY2luZyA9IDA7XG4gICAgZnJhbWUubmFtZSA9IG5hbWUgfHwgJ0dsb2JhbCBOZXV0cmFscyc7XG4gICAgZnJhbWUueCA9IDA7XG4gICAgZnJhbWUueSA9IC0xNTY7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgY29sb3JdIG9mIE9iamVjdC5lbnRyaWVzKGNvbG9ycykpIHtcbiAgICAgICAgcmVuZGVyQ29sb3IoZnJhbWUsIG5hbWUsIGNvbG9yLCBjb2xvcnMpO1xuICAgIH1cbiAgICByZXR1cm4gZnJhbWU7XG59XG4iLCJpbXBvcnQgeyByZW5kZXJTaGFkZXMgfSBmcm9tIFwiLi9zd2F0Y2hlcy1nZW5lcmF0b3JcIjtcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJBY2NlbnRzKGNvbG9ycywgbmFtZSkge1xuICAgIGNvbnN0IGV4aXN0aW5nTm9kZSA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRDaGlsZCgobm9kZSkgPT4gbm9kZS5uYW1lID09IChuYW1lIHx8ICdBY2NlbnQgQ29sb3VycycpKTtcbiAgICBleGlzdGluZ05vZGUgPT09IG51bGwgfHwgZXhpc3RpbmdOb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBleGlzdGluZ05vZGUucmVtb3ZlKCk7XG4gICAgbGV0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBmcmFtZS5sYXlvdXRNb2RlID0gJ0hPUklaT05UQUwnO1xuICAgIGZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgIGZyYW1lLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgIGZyYW1lLml0ZW1TcGFjaW5nID0gMTY7XG4gICAgZnJhbWUuZmlsbHMgPSBbXTtcbiAgICBmcmFtZS5uYW1lID0gbmFtZSB8fCAnQWNjZW50IENvbG91cnMnO1xuICAgIGZyYW1lLnggPSAwO1xuICAgIGZyYW1lLnkgPSAwO1xuICAgIGZvciAoY29uc3QgW25hbWUsIHNoYWRlc10gb2YgT2JqZWN0LmVudHJpZXMoY29sb3JzKSkge1xuICAgICAgICByZW5kZXJTaGFkZXMoZnJhbWUsIG5hbWUsIHNoYWRlcywgY29sb3JzKTtcbiAgICB9XG4gICAgcmV0dXJuIGZyYW1lO1xufVxuIiwiaW1wb3J0IGNocm9tYSBmcm9tIFwiY2hyb21hLWpzXCI7XG5pbXBvcnQgeyByb3VuZFR3b0RpZ2l0cyB9IGZyb20gXCIuLi91dGlscy9yb3VuZC10d28tZGlnaXRzXCI7XG5pbXBvcnQgeyBwYXJzZUNvbG9yVG9rZW4gfSBmcm9tIFwiLi4vdXRpbHMvZmlnbWEtY29sb3JzXCI7XG5mdW5jdGlvbiBnZXRCb3VuZFZhcmlhYmxlcyhub2RlKSB7XG4gICAgY29uc3QgYm91bmRWYXJpYWJsZXMgPSBPYmplY3QuZW50cmllcyhub2RlLmJvdW5kVmFyaWFibGVzKTtcbiAgICBmb3IgKGNvbnN0IFtwcm9wTmFtZSwgcHJvcFZhbHVlXSBvZiBib3VuZFZhcmlhYmxlcykge1xuICAgICAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXNBcnJheSkge1xuICAgICAgICAgICAgcHJvcFZhbHVlLmZvckVhY2goKGFsaWFzLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc0JvdW5kVmFyaWFibGUoZmlnbWEudmFyaWFibGVzLmdldFZhcmlhYmxlQnlJZChhbGlhcy5pZCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdmFySWQgPSBwcm9wVmFsdWUuaWQ7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhcklkICE9ICdzdHJpbmcnKSB7IC8vIGl0IGlzIFxuICAgICAgICAgICAgICAgIHZhcklkID0gdmFySWQuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9jZXNzQm91bmRWYXJpYWJsZShmaWdtYS52YXJpYWJsZXMuZ2V0VmFyaWFibGVCeUlkKHZhcklkKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBwcm9jZXNzQm91bmRWYXJpYWJsZSh2YXJpYWJsZSkge1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNoYWRlcyhwYXJlbnROb2RlLCBuYW1lLCBzaGFkZXMsIGNvbG9ycykge1xuICAgIGxldCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgZnJhbWUucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKDMyMCwgZnJhbWUuaGVpZ2h0KTtcbiAgICBmcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIGZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgIGZyYW1lLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgIGZyYW1lLm5hbWUgPSBuYW1lO1xuICAgIGZyYW1lLmZpbGxzID0gW107XG4gICAgZ2V0Qm91bmRWYXJpYWJsZXMoZnJhbWUpO1xuICAgIGZvciAoY29uc3QgW3NoYWRlTmFtZSwgY29sb3JdIG9mIE9iamVjdC5lbnRyaWVzKHNoYWRlcykpIHtcbiAgICAgICAgcmVuZGVyQ29sb3IoZnJhbWUsIGBhY2NlbnQvJHtuYW1lfS8ke3NoYWRlTmFtZX1gLCBjb2xvciwgY29sb3JzKTtcbiAgICB9XG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChmcmFtZSk7XG4gICAgcmV0dXJuIHBhcmVudE5vZGU7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ29sb3IocGFyZW50Tm9kZSwgbmFtZSwgY29sb3IsIGNvbG9ycykge1xuICAgIGxldCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgZnJhbWUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICBmcmFtZS5sYXlvdXRBbGlnbiA9ICdTVFJFVENIJztcbiAgICBmcmFtZS5pdGVtU3BhY2luZyA9IDQ7XG4gICAgZnJhbWUubmFtZSA9IG5hbWU7XG4gICAgZnJhbWUudmVydGljYWxQYWRkaW5nID0gMTY7XG4gICAgZnJhbWUuaG9yaXpvbnRhbFBhZGRpbmcgPSAyMDtcbiAgICBjb25zdCB7IHIsIGcsIGIsIGEgfSA9IHBhcnNlQ29sb3JUb2tlbihjb2xvciwgY29sb3JzKTtcbiAgICBjb25zdCBjaHJvbWFDb2xvciA9IGNocm9tYS5nbChyLCBnLCBiLCBhKTtcbiAgICBmcmFtZS5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHIsIGcsIGIgfSwgb3BhY2l0eTogYSB9XTtcbiAgICBjb25zdCBvcGFxdWVDb2xvciA9IGNocm9tYS5nbChyLCBnLCBiLCAxKTtcbiAgICBjb25zdCBtaXhlZENvbG9yID0gY2hyb21hLm1peChvcGFxdWVDb2xvciwgXCJ3aGl0ZVwiLCAxIC0gYSk7XG4gICAgY29uc29sZS5sb2cobmFtZSwgbWl4ZWRDb2xvci5yZ2JhKCkpO1xuICAgIGxldCBjb250cmFzdCA9IFtcbiAgICAgICAgY2hyb21hLmNvbnRyYXN0KFwid2hpdGVcIiwgbWl4ZWRDb2xvciksXG4gICAgICAgIGNocm9tYS5jb250cmFzdChjaHJvbWEuaHNsKFswLCAwLCAwLjIyXSksIG1peGVkQ29sb3IpXG4gICAgXTtcbiAgICBsZXQgbmFtZVJvdyA9IGdldFJvdyhmcmFtZSwgY29udHJhc3RbMF0gPiAyLjUpO1xuICAgIGxldCBjb250cmFzdFdoaXRlUm93ID0gZ2V0Um93KGZyYW1lLCBjb250cmFzdFswXSA+IDIuNSk7XG4gICAgbGV0IGNvbnRyYXN0QmxhY2tSb3cgPSBnZXRSb3coZnJhbWUsIGNvbnRyYXN0WzBdID4gMi41KTtcbiAgICBsZXQgaHNsUm93ID0gZ2V0Um93KGZyYW1lLCBjb250cmFzdFswXSA+IDIuNSk7XG4gICAgbGV0IGx1bWluYW5jZVJvdyA9IGdldFJvdyhmcmFtZSwgY29udHJhc3RbMF0gPiAyLjUpO1xuICAgIC8vIGF3YWl0IGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgIG5hbWVSb3cucm9vdC5uYW1lID0gXCJuYW1lUm93XCI7XG4gICAgY29udHJhc3RXaGl0ZVJvdy5yb290Lm5hbWUgPSBcImNvbnRyYXN0V2hpdGVSb3dcIjtcbiAgICBjb250cmFzdEJsYWNrUm93LnJvb3QubmFtZSA9IFwiY29udHJhc3RCbGFja1Jvd1wiO1xuICAgIGhzbFJvdy5yb290Lm5hbWUgPSBcImhzbFJvd1wiO1xuICAgIGx1bWluYW5jZVJvdy5yb290Lm5hbWUgPSBcImx1bWluYW5jZVJvd1wiO1xuICAgIGNvbnRyYXN0V2hpdGVSb3cubGFiZWxOb2RlLmNoYXJhY3RlcnMgPSBcInZzIHdoaXRlXCI7XG4gICAgY29udHJhc3RXaGl0ZVJvdy52YWx1ZU5vZGUuY2hhcmFjdGVycyA9IGAke3JvdW5kVHdvRGlnaXRzKGNvbnRyYXN0WzBdKX1gO1xuICAgIGNvbnRyYXN0QmxhY2tSb3cubGFiZWxOb2RlLmNoYXJhY3RlcnMgPSBcInZzIGJsYWNrXCI7XG4gICAgY29udHJhc3RCbGFja1Jvdy52YWx1ZU5vZGUuY2hhcmFjdGVycyA9IGAke3JvdW5kVHdvRGlnaXRzKGNvbnRyYXN0WzFdKX1gO1xuICAgIG5hbWVSb3cubGFiZWxOb2RlLmNoYXJhY3RlcnMgPSBge2dsb2JhbC4ke25hbWUucmVwbGFjZSgvXFwvL2csIFwiLlwiKX19YDtcbiAgICBuYW1lUm93LnZhbHVlTm9kZS5jaGFyYWN0ZXJzID0gYCBgO1xuICAgIGhzbFJvdy5sYWJlbE5vZGUuY2hhcmFjdGVycyA9IFwiaHNsXCI7XG4gICAgaHNsUm93LnZhbHVlTm9kZS5jaGFyYWN0ZXJzID0gYCR7b3V0cHV0SFNMKGNocm9tYUNvbG9yKS5qb2luKFwiIFwiKX1gO1xuICAgIGx1bWluYW5jZVJvdy5sYWJlbE5vZGUuY2hhcmFjdGVycyA9IFwibHVtaW5hbmNlXCI7XG4gICAgbHVtaW5hbmNlUm93LnZhbHVlTm9kZS5jaGFyYWN0ZXJzID0gYCR7TWF0aC5yb3VuZChyb3VuZFR3b0RpZ2l0cyhjaHJvbWFDb2xvci5sdW1pbmFuY2UoKSkgKiAxMDApfSVgO1xuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuICAgIGZyYW1lLnJlc2l6ZSgyNDAsIGZyYW1lLmhlaWdodCk7XG4gICAgcmV0dXJuIHBhcmVudE5vZGU7XG59XG5mdW5jdGlvbiBnZXRSb3cocGFyZW50Tm9kZSwgaXNXaGl0ZSkge1xuICAgIGNvbnN0IHRleHROb2RlID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBmcmFtZS5uYW1lID0gXCJyb3dcIjtcbiAgICBmcmFtZS5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgZnJhbWUubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICBmcmFtZS5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkZJWEVEXCI7XG4gICAgZnJhbWUucHJpbWFyeUF4aXNBbGlnbkl0ZW1zID0gXCJTUEFDRV9CRVRXRUVOXCI7XG4gICAgZnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgZnJhbWUuZmlsbHMgPSBbXTtcbiAgICB0ZXh0Tm9kZS5uYW1lID0gXCJsYWJlbFwiO1xuICAgIGNvbnN0IHZhbHVlTGFiZWwgPSB0ZXh0Tm9kZS5jbG9uZSgpO1xuICAgIHZhbHVlTGFiZWwubmFtZSA9IFwidmFsdWUtbGFiZWxcIjtcbiAgICBmcmFtZS5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgZnJhbWUuYXBwZW5kQ2hpbGQodmFsdWVMYWJlbCk7XG4gICAgY29uc3QgY29sb3IgPSBpc1doaXRlID8ge1xuICAgICAgICByOiAxLCBnOiAxLCBiOiAxXG4gICAgfSA6IHtcbiAgICAgICAgcjogMCwgZzogMCwgYjogMFxuICAgIH07XG4gICAgdGV4dE5vZGUuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvciwgb3BhY2l0eTogMC44IH1dO1xuICAgIHZhbHVlTGFiZWwuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvciB9XTtcbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBsYWJlbE5vZGU6IHRleHROb2RlLCB2YWx1ZU5vZGU6IHZhbHVlTGFiZWwsIHJvb3Q6IGZyYW1lXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvdXRwdXRIU0woY2hyb21hQ29sb3IpIHtcbiAgICBjb25zdCBbaCwgcywgbF0gPSBjaHJvbWFDb2xvci5oc2woKTtcbiAgICByZXR1cm4gW2Ake01hdGgucm91bmQoaCkgfHwgMH1kZWdgLCBgJHtNYXRoLnJvdW5kKHJvdW5kVHdvRGlnaXRzKHMpICogMTAwKX0lYCwgYCR7TWF0aC5yb3VuZChyb3VuZFR3b0RpZ2l0cyhsKSAqIDEwMCl9JWBdO1xufVxuIiwiaW1wb3J0IGNvbXBvbmVudFRva2VucyBmcm9tICcuL3Rva2Vucy9jb2xvcnMvY29tcG9uZW50cy9jb21wb25lbnQtdG9rZW5zLmpzb24nO1xuaW1wb3J0IHBhbGV0dGVMaWdodENvbW1vbiBmcm9tICcuL3Rva2Vucy9jb2xvcnMvc3lzdGVtL2xpZ2h0LWNvbW1vbi50b2tlbnMuanNvbic7XG5pbXBvcnQgcGFsZXR0ZUxpZ2h0MiBmcm9tICcuL3Rva2Vucy9jb2xvcnMvc3lzdGVtL2xpZ2h0LTIudG9rZW5zLmpzb24nO1xuaW1wb3J0IHBhbGV0dGVMaWdodDMgZnJvbSAnLi90b2tlbnMvY29sb3JzL3N5c3RlbS9saWdodC0zLnRva2Vucy5qc29uJztcbmltcG9ydCBwYWxldHRlTGlnaHQ0IGZyb20gJy4vdG9rZW5zL2NvbG9ycy9zeXN0ZW0vbGlnaHQtNC50b2tlbnMuanNvbic7XG5pbXBvcnQgcGFsZXR0ZURhcmtDb21tb24gZnJvbSAnLi90b2tlbnMvY29sb3JzL3N5c3RlbS9kYXJrLWNvbW1vbi50b2tlbnMuanNvbic7XG5pbXBvcnQgcGFsZXR0ZURhcmtFbGV2YXRlZDIgZnJvbSAnLi90b2tlbnMvY29sb3JzL3N5c3RlbS9kYXJrLWVsZXZhdGVkLTIudG9rZW5zLmpzb24nO1xuaW1wb3J0IHBhbGV0dGVEYXJrRWxldmF0ZWQzIGZyb20gJy4vdG9rZW5zL2NvbG9ycy9zeXN0ZW0vZGFyay1lbGV2YXRlZC0zLnRva2Vucy5qc29uJztcbmltcG9ydCBwYWxldHRlRGFya0VsZXZhdGVkNCBmcm9tICcuL3Rva2Vucy9jb2xvcnMvc3lzdGVtL2RhcmstZWxldmF0ZWQtNC50b2tlbnMuanNvbic7XG5pbXBvcnQgcGFsZXR0ZURhcmtCYXNlMiBmcm9tICcuL3Rva2Vucy9jb2xvcnMvc3lzdGVtL2RhcmstYmFzZS0yLnRva2Vucy5qc29uJztcbmltcG9ydCBwYWxldHRlRGFya0Jhc2UzIGZyb20gJy4vdG9rZW5zL2NvbG9ycy9zeXN0ZW0vZGFyay1iYXNlLTMudG9rZW5zLmpzb24nO1xuaW1wb3J0IHBhbGV0dGVEYXJrQmFzZTQgZnJvbSAnLi90b2tlbnMvY29sb3JzL3N5c3RlbS9kYXJrLWJhc2UtNC50b2tlbnMuanNvbic7XG5pbXBvcnQgeyBmbGF0dGVuT2JqZWN0IH0gZnJvbSAnLi91dGlscy9mbGF0dGVuLW9iamVjdCc7XG5pbXBvcnQgeyBnZW5lcmF0ZVN5c3RlbUFjY2VudFBhbGV0dGUgfSBmcm9tICcuL2NvbG9yLWdlbmVyYXRvcnMvYWNjZW50LXBhbGV0dGUtZ2VuZXJhdG9yJztcbmltcG9ydCB7IGdlbmVyYXRlTmV1dHJhbHMgfSBmcm9tICcuL2NvbG9yLWdlbmVyYXRvcnMvbmV1dHJhbHMtcGFsZXR0ZS1nZW5lcmF0b3InO1xuaW1wb3J0IHsgZGVmYXVsdFNlbWFudGljQWNjZW50cyB9IGZyb20gJy4vZGVmYXVsdHMnO1xuaW1wb3J0IHsgX2Nsb25lIH0gZnJvbSAnLi91dGlscy9jbG9uZSc7XG5sZXQgR2xvYmFsTmV1dHJhbHM7XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VtYW50aWNBY2NlbnRTZXR0aW5ncygpIHtcbiAgICByZXR1cm4gZGVmYXVsdFNlbWFudGljQWNjZW50cztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRHbG9iYWxOZXV0cmFscygpIHtcbiAgICByZXR1cm4gR2xvYmFsTmV1dHJhbHM7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcG9uZW50Q29sb3JzKCkge1xuICAgIHJldHVybiBmbGF0dGVuT2JqZWN0KGNvbXBvbmVudFRva2Vucyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0QnJhbmRDb2xvcnMobmFtZSwgYWNjZW50U2hhZGVzLCBmbGF0KSB7XG4gICAgY29uc3QgcGFsZXR0ZSA9IHtcbiAgICAgICAgcHJpbWFyeTogZ2VuZXJhdGVTZW1hbnRpY1NoYWRlcyhuYW1lLCBhY2NlbnRTaGFkZXMpXG4gICAgfTtcbiAgICByZXR1cm4gZmxhdCA/IGZsYXR0ZW5PYmplY3QocGFsZXR0ZSkgOiBwYWxldHRlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFRoZW1lQ29sb3JzKHRoZW1lLCBmb3JtRGF0YSkge1xuICAgIGxldCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBub3JtYWxpemVGb3JtRGF0YShmb3JtRGF0YSkpO1xuICAgIEdsb2JhbE5ldXRyYWxzID0gZ2VuZXJhdGVOZXV0cmFscyh7XG4gICAgICAgIGh1ZTogcGFyYW1zLmh1ZSxcbiAgICAgICAgc2F0dXJhdGlvbjogcGFyYW1zLnNhdHVyYXRpb24sXG4gICAgICAgIGRpc3RhbmNlOiBwYXJhbXMuZGlzdGFuY2VcbiAgICB9KTtcbiAgICBjb25zdCBzZW1hbnRpY0FjY2VudHMgPSB7XG4gICAgICAgIHByaW1hcnk6IHBhcmFtcy5wcmltYXJ5LFxuICAgICAgICBpbmZvOiBwYXJhbXMuaW5mbyxcbiAgICAgICAgc3VjY2VzczogcGFyYW1zLnN1Y2Nlc3MsXG4gICAgICAgIHdhcm5pbmc6IHBhcmFtcy53YXJuaW5nLFxuICAgICAgICBkYW5nZXI6IHBhcmFtcy5kYW5nZXIsXG4gICAgfTtcbiAgICBsZXQgbGlnaHRBY2NlbnRUb2tlbnMgPSBnZW5lcmF0ZVN5c3RlbUFjY2VudFBhbGV0dGUoJ2xpZ2h0JywgcGFyYW1zKTtcbiAgICBsZXQgZGFya0FjY2VudFRva2VucyA9IGdlbmVyYXRlU3lzdGVtQWNjZW50UGFsZXR0ZSgnZGFyaycsIHBhcmFtcyk7XG4gICAgY29uc3QgbGlnaHRTZW1hbnRpY1Rva2VucyA9IGdlbmVyYXRlU2VtYW50aWNQYWxldHRlKHNlbWFudGljQWNjZW50cywgbGlnaHRBY2NlbnRUb2tlbnMpO1xuICAgIGNvbnN0IGRhcmtTZW1hbnRpY1Rva2VucyA9IGdlbmVyYXRlU2VtYW50aWNQYWxldHRlKHNlbWFudGljQWNjZW50cywgZGFya0FjY2VudFRva2Vucyk7XG4gICAgY29uc3QgbGlnaHRDb21tb25Ub2tlbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBhY2NlbnQ6IGxpZ2h0QWNjZW50VG9rZW5zIH0sIHBhbGV0dGVMaWdodENvbW1vbiksIGxpZ2h0U2VtYW50aWNUb2tlbnMpO1xuICAgIGNvbnN0IGRhcmtDb21tb25Ub2tlbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBhY2NlbnQ6IGRhcmtBY2NlbnRUb2tlbnMgfSwgcGFsZXR0ZURhcmtDb21tb24pLCBkYXJrU2VtYW50aWNUb2tlbnMpO1xuICAgIGxldCBjb21tb25Db2xvcnMgPSB7fTtcbiAgICBsZXQgdGhlbWVDb2xvcnMgPSB7fTtcbiAgICBpZiAodGhlbWUgPT09IFwibGlnaHRCYXNlXCIpIHtcbiAgICAgICAgY29tbW9uQ29sb3JzID0gZmxhdHRlbk9iamVjdChsaWdodENvbW1vblRva2Vucyk7XG4gICAgICAgIGlmIChwYXJhbXMuZGlzdGFuY2UgPT09IDAuMDIpIHtcbiAgICAgICAgICAgIHRoZW1lQ29sb3JzID0gZmxhdHRlbk9iamVjdChwYWxldHRlTGlnaHQyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLmRpc3RhbmNlID09PSAwLjAzKSB7XG4gICAgICAgICAgICB0aGVtZUNvbG9ycyA9IGZsYXR0ZW5PYmplY3QocGFsZXR0ZUxpZ2h0Myk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5kaXN0YW5jZSA9PT0gMC4wNCkge1xuICAgICAgICAgICAgdGhlbWVDb2xvcnMgPSBmbGF0dGVuT2JqZWN0KHBhbGV0dGVMaWdodDQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0aGVtZSA9PT0gXCJkYXJrRWxldmF0ZWRcIikge1xuICAgICAgICBjb21tb25Db2xvcnMgPSBmbGF0dGVuT2JqZWN0KGRhcmtDb21tb25Ub2tlbnMpO1xuICAgICAgICBpZiAocGFyYW1zLmRpc3RhbmNlID09PSAwLjAyKSB7XG4gICAgICAgICAgICB0aGVtZUNvbG9ycyA9IGZsYXR0ZW5PYmplY3QocGFsZXR0ZURhcmtFbGV2YXRlZDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMuZGlzdGFuY2UgPT09IDAuMDMpIHtcbiAgICAgICAgICAgIHRoZW1lQ29sb3JzID0gZmxhdHRlbk9iamVjdChwYWxldHRlRGFya0VsZXZhdGVkMyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5kaXN0YW5jZSA9PT0gMC4wNCkge1xuICAgICAgICAgICAgdGhlbWVDb2xvcnMgPSBmbGF0dGVuT2JqZWN0KHBhbGV0dGVEYXJrRWxldmF0ZWQ0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhlbWUgPT09IFwiZGFya0Jhc2VcIikge1xuICAgICAgICBjb21tb25Db2xvcnMgPSBmbGF0dGVuT2JqZWN0KGRhcmtDb21tb25Ub2tlbnMpO1xuICAgICAgICBpZiAocGFyYW1zLmRpc3RhbmNlID09PSAwLjAyKSB7XG4gICAgICAgICAgICB0aGVtZUNvbG9ycyA9IGZsYXR0ZW5PYmplY3QocGFsZXR0ZURhcmtCYXNlMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5kaXN0YW5jZSA9PT0gMC4wMykge1xuICAgICAgICAgICAgdGhlbWVDb2xvcnMgPSBmbGF0dGVuT2JqZWN0KHBhbGV0dGVEYXJrQmFzZTMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMuZGlzdGFuY2UgPT09IDAuMDQpIHtcbiAgICAgICAgICAgIHRoZW1lQ29sb3JzID0gZmxhdHRlbk9iamVjdChwYWxldHRlRGFya0Jhc2U0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb21tb25Db2xvcnMpLCB0aGVtZUNvbG9ycyk7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZVNlbWFudGljU2hhZGVzKGFsaWFzTmFtZSwgYWNjZW50U2hhZGVzKSB7XG4gICAgbGV0IG91dHB1dCA9IHt9O1xuICAgIGZvciAodmFyIGEgPSAxLCBiID0gNzsgYSA8IGI7IGErKykge1xuICAgICAgICBvdXRwdXRbYCR7YX0wMGBdID0ge1xuICAgICAgICAgICAgXCIkdmFsdWVcIjogYHthY2NlbnQuJHthbGlhc05hbWV9LiR7YX0wMH1gLFxuICAgICAgICAgICAgXCIkdHlwZVwiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGFjY2VudFNoYWRlc1tgJHthfTAwYF0uZGVzY3JpcHRpb25cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlU2VtYW50aWNQYWxldHRlKGFjY2VudHMsIHBhbGV0dGUpIHtcbiAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmVudHJpZXMoYWNjZW50cykuZm9yRWFjaCgoW25hbWUsIGFsaWFzXSkgPT4ge1xuICAgICAgICByZXN1bHRbbmFtZV0gPSBnZW5lcmF0ZVNlbWFudGljU2hhZGVzKGFsaWFzLCBwYWxldHRlW2FsaWFzXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUZvcm1EYXRhKGZvcm1EYXRhKSB7XG4gICAgbGV0IG5vcm1hbGl6ZWREYXRhID0gX2Nsb25lKGZvcm1EYXRhKTtcbiAgICBjb25zdCBudW1iZXJUeXBlcyA9IFtcbiAgICAgICAgJ2h1ZScsXG4gICAgICAgICdzYXR1cmF0aW9uJyxcbiAgICAgICAgJ2Rpc3RhbmNlJyxcbiAgICAgICAgJ3JlZCcsXG4gICAgICAgICdhbWJlcicsXG4gICAgICAgICdicm93bicsXG4gICAgICAgICdncmVlbicsXG4gICAgICAgICd0ZWFsJyxcbiAgICAgICAgJ2JsdWUnLFxuICAgICAgICAnaW5kaWdvJyxcbiAgICAgICAgJ3Zpb2xldCcsXG4gICAgICAgICdwdXJwbGUnLFxuICAgICAgICAncGluaycsXG4gICAgICAgICdhY2NlbnRTYXR1cmF0aW9uJyxcbiAgICAgICAgJ2FjY2VudE1heEx1bWluYW5jZScsXG4gICAgICAgICdhY2NlbnRNaWRMdW1pbmFuY2UnLFxuICAgICAgICAnYWNjZW50TWluTHVtaW5hbmNlJ1xuICAgIF07XG4gICAgbnVtYmVyVHlwZXMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBmb3JtRGF0YVtwXSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbm9ybWFsaXplZERhdGFbcF0gPSBwYXJzZUZsb2F0KGZvcm1EYXRhW3BdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBub3JtYWxpemVkRGF0YTtcbn1cbiIsImV4cG9ydCBjb25zdCB0aGVtZXMgPSBbXG4gICAgJ2xpZ2h0QmFzZScsXG4gICAgJ2RhcmtCYXNlJyxcbiAgICAnZGFya0VsZXZhdGVkJ1xuXTtcbmV4cG9ydCBjb25zdCByYWRpaVNpemVOYW1lID0gW1xuICAgIFwiY29tcGFjdFwiLFxuICAgIFwiYmFzZVwiLFxuICAgIFwibGFyZ2VcIixcbl07XG5leHBvcnQgY29uc3QgcmFkaWlTaXplVmFsdWVzID0gW1xuICAgIDQsXG4gICAgNixcbiAgICA4LFxuXTtcbmV4cG9ydCBjb25zdCBzcGFjaW5nU2l6ZU5hbWUgPSBbXG4gICAgXCJjb21wYWN0XCIsXG4gICAgXCJiYXNlXCIsXG4gICAgXCJsYXJnZVwiLFxuICAgIFwidG91Y2hcIixcbl07XG5leHBvcnQgY29uc3QgdHlwb2dyYXBoeVNpemVOYW1lID0gW1xuICAgIFwiY29tcGFjdFwiLFxuICAgIFwiYmFzZVwiLFxuICAgIFwibGFyZ2VcIixcbl07XG5leHBvcnQgY29uc3QgdHlwb2dyYXBoeVNpemVWYWx1ZXMgPSBbXG4gICAgXCIxMy8xNlwiLFxuICAgIFwiMTUvMjBcIixcbiAgICBcIjE3LzI0XCIsXG5dO1xuZXhwb3J0IGNvbnN0IGljb25TaXplTmFtZSA9IFtcbiAgICBcImJhc2VcIixcbiAgICBcInRvdWNoXCJcbl07XG5leHBvcnQgY29uc3QgaWNvblNpemVWYWx1ZXMgPSBbXG4gICAgXCIxNlwiLFxuICAgIFwiMjRcIixcbl07XG5leHBvcnQgY29uc3Qgc3lzdGVtQWNjZW50TGlzdCA9IFtcbiAgICBcInJlZFwiLFxuICAgIFwiYW1iZXJcIixcbiAgICBcImJyb3duXCIsXG4gICAgXCJncmVlblwiLFxuICAgIFwidGVhbFwiLFxuICAgIFwiYmx1ZVwiLFxuICAgIFwiaW5kaWdvXCIsXG4gICAgXCJ2aW9sZXRcIixcbiAgICBcInB1cnBsZVwiLFxuICAgIFwicGlua1wiXG5dO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRBY2NlbnRIVUVzID0ge1xuICAgIFwicmVkXCI6IDQsXG4gICAgXCJhbWJlclwiOiAyNSxcbiAgICBcImJyb3duXCI6IDMzLFxuICAgIFwiZ3JlZW5cIjogMTUwLFxuICAgIFwidGVhbFwiOiAxODAsXG4gICAgXCJibHVlXCI6IDIxMCxcbiAgICBcImluZGlnb1wiOiAyNDAsXG4gICAgXCJ2aW9sZXRcIjogMjYwLFxuICAgIFwicHVycGxlXCI6IDI4MCxcbiAgICBcInBpbmtcIjogMzQwXG59O1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IHtcbiAgICB0eXBlOiAnSU1QT1JUJyxcbiAgICB0aGVtZTogJ2xpZ2h0JyxcbiAgICBodWU6IDE5MCxcbiAgICBzYXR1cmF0aW9uOiAwLjIsXG4gICAgZGlzdGFuY2U6IDAuMDIsXG4gICAgcHJpbWFyeTogJ2JsdWUnLFxuICAgIGluZm86ICd0ZWFsJyxcbiAgICBzdWNjZXNzOiAnZ3JlZW4nLFxuICAgIHdhcm5pbmc6ICdhbWJlcicsXG4gICAgZGFuZ2VyOiAncmVkJyxcbiAgICByZWQ6IDQsXG4gICAgYW1iZXI6IDI1LFxuICAgIGJyb3duOiAzMyxcbiAgICBncmVlbjogMTUwLFxuICAgIHRlYWw6IDE4NSxcbiAgICBibHVlOiAyMTAsXG4gICAgaW5kaWdvOiAyNDAsXG4gICAgdmlvbGV0OiAyNjAsXG4gICAgcHVycGxlOiAyODAsXG4gICAgcGluazogMzQwLFxuICAgIGJhc2VGb250U2l6ZTogJ2Jhc2UnLFxuICAgIHR5cGVTY2FsZTogJ21pbm9yVGhpcmQnLFxuICAgIGNyZWF0ZVN0eWxlczogdHJ1ZSxcbiAgICBhY2NlbnRTYXR1cmF0aW9uOiAwLjksXG4gICAgYWNjZW50TWF4THVtaW5hbmNlOiAwLjQ1LFxuICAgIGFjY2VudE1pZEx1bWluYW5jZTogMC4xOCxcbiAgICBhY2NlbnRNaW5MdW1pbmFuY2U6IDAuMTAsXG4gICAgcmFkaWk6ICdiYXNlJyxcbiAgICBzcGFjaW5nOiAnYmFzZScsXG4gICAgc2luZ2xlQ29sbGVjdGlvbjogZmFsc2Vcbn07XG5leHBvcnQgY29uc3QgZGVmYXVsdFNlbWFudGljQWNjZW50cyA9IHtcbiAgICBwcmltYXJ5OiAnYmx1ZScsXG4gICAgaW5mbzogJ3RlYWwnLFxuICAgIHN1Y2Nlc3M6ICdncmVlbicsXG4gICAgd2FybmluZzogJ2FtYmVyJyxcbiAgICBkYW5nZXI6ICdyZWQnXG59O1xuIiwiaW1wb3J0IGVsZXZhdGlvblRva2VucyBmcm9tICcuL3Rva2Vucy9lZmZlY3RzL2VsZXZhdGlvbi50b2tlbnMuanNvbic7XG5pbXBvcnQgeyBmbGF0dGVuT2JqZWN0IH0gZnJvbSBcIi4vdXRpbHMvZmxhdHRlbi1vYmplY3RcIjtcbmV4cG9ydCBjb25zdCBlbGV2YXRpb24gPSBmbGF0dGVuT2JqZWN0KGVsZXZhdGlvblRva2Vucyk7XG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxldmF0aW9uVG9rZW5zKCkge1xuICAgIHJldHVybiBlbGV2YXRpb25Ub2tlbnM7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGRlbGF5QXN5bmMgfSBmcm9tIFwiLi91dGlscy9kZWxheS1hc3luY1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NDb21wb25lbnRzKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGZpZ21hLnNraXBJbnZpc2libGVJbnN0YW5jZUNoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgbGV0IHBhZ2VDb21wb25lbnRzID0gW107XG4gICAgICAgIGlmIChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24uZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT0gJ0NPTVBPTkVOVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZUNvbXBvbmVudHMgPSBwYWdlQ29tcG9uZW50cy5jb25jYXQobm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUuZmluZEFsbFdpdGhDcml0ZXJpYSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnRzID0gbm9kZS5maW5kQWxsV2l0aENyaXRlcmlhKHsgdHlwZXM6IFsnQ09NUE9ORU5UJ10gfSk7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VDb21wb25lbnRzID0gcGFnZUNvbXBvbmVudHMuY29uY2F0KGNvbXBvbmVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFnZUNvbXBvbmVudHMgPSBmaWdtYS5jdXJyZW50UGFnZS5maW5kQWxsV2l0aENyaXRlcmlhKHsgdHlwZXM6IFsnQ09NUE9ORU5UJ10gfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2l6ZSA9IHBhZ2VDb21wb25lbnRzLmxlbmd0aDtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgd2hpbGUgKHBhZ2VDb21wb25lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50RnJhbWUgPSBwYWdlQ29tcG9uZW50cy5zaGlmdCgpO1xuICAgICAgICAgICAgZmlnbWEuc2tpcEludmlzaWJsZUluc3RhbmNlQ2hpbGRyZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gY29tcG9uZW50RnJhbWUuZmluZEFsbCgobikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBuLmxheW91dFBvc2l0aW9uaW5nID09ICdBQlNPTFVURSdcbiAgICAgICAgICAgICAgICAgICAgJiYgbi53aWR0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgJiYgbi5oZWlnaHQgPiAwXG4gICAgICAgICAgICAgICAgICAgICYmIG4uY29uc3RyYWludHMuaG9yaXpvbnRhbCA9PT0gJ1NUUkVUQ0gnXG4gICAgICAgICAgICAgICAgICAgICYmIG4uY29uc3RyYWludHMudmVydGljYWwgPT09ICdTVFJFVENIJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgeWllbGQgZml4TGF5ZXJzKGNoaWxkcmVuLCBjb21wb25lbnRGcmFtZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNDb21wb25lbnQgJHtjb3VudCsrfSAvICR7c2l6ZX1gLCBgY29sb3I6ICMwNzczREY7IGZvbnQtd2VpZ2h0OiBib2xkO2ApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmaXhMYXllcnMobm9kZXMsIGNvbXBvbmVudCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCBub2RlLCBwYXJlbnQsIG9mZnNldFgsIG9mZnNldFksIGhlaWdodCwgd2lkdGg7XG4gICAgICAgIGxldCB1cGRhdGVkID0gMCwgc2tpcHBlZCA9IDAsIGZhaWxlZCA9IDA7XG4gICAgICAgIGNvbnNvbGUubG9nKGBXb3JraW5nIG9uICR7Y29tcG9uZW50Lm5hbWV9YCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB3aGlsZSAobm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlbWFpbmluZyBub2RlczogJHtub2Rlcy5sZW5ndGh9YCk7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGVzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrSW5zdGFuY2Uobm9kZSwgY29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBza2lwcGVkKys7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBub2RlLnBhcmVudDtcbiAgICAgICAgICAgICAgICBvZmZzZXRYID0gbm9kZS54O1xuICAgICAgICAgICAgICAgIG9mZnNldFkgPSBub2RlLnk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gcGFyZW50LmhlaWdodCAtIDIgKiBvZmZzZXRZO1xuICAgICAgICAgICAgICAgIHdpZHRoID0gcGFyZW50LndpZHRoIC0gMiAqIG9mZnNldFg7XG4gICAgICAgICAgICAgICAgbm9kZS5yZXNpemUod2lkdGggKiAwLjgsIGhlaWdodCAqIDAuOCk7XG4gICAgICAgICAgICAgICAgeWllbGQgZGVsYXlBc3luYygxMCk7XG4gICAgICAgICAgICAgICAgbm9kZS5yZXNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlZCsrO1xuICAgICAgICAgICAgICAgIHlpZWxkIGRlbGF5QXN5bmMoMTApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coYFJlc2l6ZWQ6ICR7dXBkYXRlZH0sIFNraXBwZWQ6ICR7c2tpcHBlZH1gKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZmFpbGVkKys7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNoZWNrSW5zdGFuY2UodGFyZ2V0RnJhbWUsIHBhcmVudEZyYW1lKSB7XG4gICAgbGV0IG5vZGUgPSB0YXJnZXRGcmFtZS5wYXJlbnQ7XG4gICAgd2hpbGUgKG5vZGUgIT0gcGFyZW50RnJhbWUpIHtcbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PSAnSU5TVEFOQ0UnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBvcGFjaXR5VG9rZW5zIGZyb20gXCIuL3Rva2Vucy9vcGFjaXR5L29wYWNpdHkudG9rZW5zLmpzb25cIjtcbmltcG9ydCB7IGZsYXR0ZW5PYmplY3QgfSBmcm9tIFwiLi91dGlscy9mbGF0dGVuLW9iamVjdFwiO1xuZXhwb3J0IGNvbnN0IG9wYWNpdHkgPSBmbGF0dGVuT2JqZWN0KG9wYWNpdHlUb2tlbnMpO1xuIiwiaW1wb3J0IGJhc2VSYWRpaVRva2VucyBmcm9tIFwiLi90b2tlbnMvcmFkaWkvYmFzZS50b2tlbnMuanNvblwiO1xuaW1wb3J0IGNvbXBhY3RSYWRpaVRva2VucyBmcm9tIFwiLi90b2tlbnMvcmFkaWkvY29tcGFjdC50b2tlbnMuanNvblwiO1xuaW1wb3J0IGxhcmdlUmFkaWlUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3JhZGlpL2xhcmdlLnRva2Vucy5qc29uXCI7XG5pbXBvcnQgeyBmbGF0dGVuT2JqZWN0IH0gZnJvbSBcIi4vdXRpbHMvZmxhdHRlbi1vYmplY3RcIjtcbmV4cG9ydCBjb25zdCBiYXNlID0gZmxhdHRlbk9iamVjdChiYXNlUmFkaWlUb2tlbnMpO1xuZXhwb3J0IGNvbnN0IGNvbXBhY3QgPSBmbGF0dGVuT2JqZWN0KGNvbXBhY3RSYWRpaVRva2Vucyk7XG5leHBvcnQgY29uc3QgbGFyZ2UgPSBmbGF0dGVuT2JqZWN0KGxhcmdlUmFkaWlUb2tlbnMpO1xuIiwiaW1wb3J0IGdsb2JhbFNpemluZ1Rva2VucyBmcm9tIFwiLi90b2tlbnMvc2l6aW5nL2dsb2JhbC50b2tlbnMuanNvblwiO1xuaW1wb3J0IGJhc2VTaXppbmdUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3NpemluZy9iYXNlLnRva2Vucy5qc29uXCI7XG5pbXBvcnQgdG91Y2hTaXppbmdUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3NpemluZy90b3VjaC50b2tlbnMuanNvblwiO1xuaW1wb3J0IHsgZmxhdHRlbk9iamVjdCB9IGZyb20gXCIuL3V0aWxzL2ZsYXR0ZW4tb2JqZWN0XCI7XG5leHBvcnQgY29uc3QgYmFzZSA9IGZsYXR0ZW5PYmplY3QoYmFzZVNpemluZ1Rva2Vucyk7XG5leHBvcnQgY29uc3QgdG91Y2ggPSBmbGF0dGVuT2JqZWN0KHRvdWNoU2l6aW5nVG9rZW5zKTtcbmV4cG9ydCBjb25zdCBnbG9iYWwgPSBmbGF0dGVuT2JqZWN0KGdsb2JhbFNpemluZ1Rva2Vucyk7XG4iLCJpbXBvcnQgYmFzZVNwYWNpbmdUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3NwYWNpbmcvYmFzZS5qc29uXCI7XG5pbXBvcnQgY29tcGFjdFNwYWNpbmdUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3NwYWNpbmcvY29tcGFjdC5qc29uXCI7XG5pbXBvcnQgbGFyZ2VTcGFjaW5nVG9rZW5zIGZyb20gXCIuL3Rva2Vucy9zcGFjaW5nL2xhcmdlLmpzb25cIjtcbmltcG9ydCB0b3VjaFNwYWNpbmdUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3NwYWNpbmcvdG91Y2guanNvblwiO1xuaW1wb3J0IHsgZmxhdHRlbk9iamVjdCB9IGZyb20gXCIuL3V0aWxzL2ZsYXR0ZW4tb2JqZWN0XCI7XG5leHBvcnQgY29uc3QgYmFzZSA9IGZsYXR0ZW5PYmplY3QoYmFzZVNwYWNpbmdUb2tlbnMpO1xuZXhwb3J0IGNvbnN0IGNvbXBhY3QgPSBmbGF0dGVuT2JqZWN0KGNvbXBhY3RTcGFjaW5nVG9rZW5zKTtcbmV4cG9ydCBjb25zdCBsYXJnZSA9IGZsYXR0ZW5PYmplY3QobGFyZ2VTcGFjaW5nVG9rZW5zKTtcbmV4cG9ydCBjb25zdCB0b3VjaCA9IGZsYXR0ZW5PYmplY3QodG91Y2hTcGFjaW5nVG9rZW5zKTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHRleHRTdHlsZVRva2VucyBmcm9tIFwiLi90b2tlbnMvdHlwb2dyYXBoeS9zdHlsZXMuanNvblwiO1xuaW1wb3J0IHR5cGVGYWNlVG9rZW5zIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L3R5cGVmYWNlLmpzb25cIjtcbmltcG9ydCBiYXNlTWFqb3JUaGlyZCBmcm9tIFwiLi90b2tlbnMvdHlwb2dyYXBoeS9tYWpvci10aGlyZC90eXBlc2NhbGUtYmFzZS5qc29uXCI7XG5pbXBvcnQgY29tcGFjdE1ham9yVGhpcmQgZnJvbSBcIi4vdG9rZW5zL3R5cG9ncmFwaHkvbWFqb3ItdGhpcmQvdHlwZXNjYWxlLWNvbXBhY3QuanNvblwiO1xuaW1wb3J0IGxhcmdlTWFqb3JUaGlyZCBmcm9tIFwiLi90b2tlbnMvdHlwb2dyYXBoeS9tYWpvci10aGlyZC90eXBlc2NhbGUtbGFyZ2UuanNvblwiO1xuaW1wb3J0IGJhc2VNaW5vclRoaXJkIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L21pbm9yLXRoaXJkL3R5cGVzY2FsZS1iYXNlLmpzb25cIjtcbmltcG9ydCBjb21wYWN0TWlub3JUaGlyZCBmcm9tIFwiLi90b2tlbnMvdHlwb2dyYXBoeS9taW5vci10aGlyZC90eXBlc2NhbGUtY29tcGFjdC5qc29uXCI7XG5pbXBvcnQgbGFyZ2VNaW5vclRoaXJkIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L21pbm9yLXRoaXJkL3R5cGVzY2FsZS1sYXJnZS5qc29uXCI7XG5pbXBvcnQgYmFzZU1ham9yU2Vjb25kIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L21ham9yLXNlY29uZC90eXBlc2NhbGUtYmFzZS5qc29uXCI7XG5pbXBvcnQgY29tcGFjdE1ham9yU2Vjb25kIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L21ham9yLXNlY29uZC90eXBlc2NhbGUtY29tcGFjdC5qc29uXCI7XG5pbXBvcnQgbGFyZ2VNYWpvclNlY29uZCBmcm9tIFwiLi90b2tlbnMvdHlwb2dyYXBoeS9tYWpvci1zZWNvbmQvdHlwZXNjYWxlLWxhcmdlLmpzb25cIjtcbmltcG9ydCB7IGZsYXR0ZW5PYmplY3QgfSBmcm9tIFwiLi91dGlscy9mbGF0dGVuLW9iamVjdFwiO1xuZXhwb3J0IGNvbnN0IGJhc2UgPSBmbGF0dGVuT2JqZWN0KGJhc2VNaW5vclRoaXJkKTtcbmV4cG9ydCBjb25zdCBjb21wYWN0ID0gZmxhdHRlbk9iamVjdChjb21wYWN0TWlub3JUaGlyZCk7XG5leHBvcnQgY29uc3QgbGFyZ2UgPSBmbGF0dGVuT2JqZWN0KGxhcmdlTWlub3JUaGlyZCk7XG5jb25zdCBzdHlsZXMgPSBmbGF0dGVuT2JqZWN0KHRleHRTdHlsZVRva2Vucyk7XG5jb25zdCB0b2tlbnMgPSB7XG4gICAgbWFqb3JUaGlyZDoge1xuICAgICAgICBiYXNlOiBmbGF0dGVuT2JqZWN0KGJhc2VNYWpvclRoaXJkKSxcbiAgICAgICAgY29tcGFjdDogZmxhdHRlbk9iamVjdChjb21wYWN0TWFqb3JUaGlyZCksXG4gICAgICAgIGxhcmdlOiBmbGF0dGVuT2JqZWN0KGxhcmdlTWFqb3JUaGlyZCksXG4gICAgfSxcbiAgICBtaW5vclRoaXJkOiB7XG4gICAgICAgIGJhc2U6IGZsYXR0ZW5PYmplY3QoYmFzZU1pbm9yVGhpcmQpLFxuICAgICAgICBjb21wYWN0OiBmbGF0dGVuT2JqZWN0KGNvbXBhY3RNaW5vclRoaXJkKSxcbiAgICAgICAgbGFyZ2U6IGZsYXR0ZW5PYmplY3QobGFyZ2VNaW5vclRoaXJkKSxcbiAgICB9LFxuICAgIG1ham9yU2Vjb25kOiB7XG4gICAgICAgIGJhc2U6IGZsYXR0ZW5PYmplY3QoYmFzZU1ham9yU2Vjb25kKSxcbiAgICAgICAgY29tcGFjdDogZmxhdHRlbk9iamVjdChjb21wYWN0TWFqb3JTZWNvbmQpLFxuICAgICAgICBsYXJnZTogZmxhdHRlbk9iamVjdChsYXJnZU1ham9yU2Vjb25kKSxcbiAgICB9LFxufTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBvZ3Jhb2h5VG9rZW5zKHNpemUsIHNjYWxlID0gXCJtaW5vclRoaXJkXCIpIHtcbiAgICBsZXQgc2NhbGVUb2tlbnMgPSB0b2tlbnNbc2NhbGVdW3NpemVdO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZmxhdHRlbk9iamVjdCh0eXBlRmFjZVRva2VucykpLCBzY2FsZVRva2VucyksIHN0eWxlcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9udERldGFpbHMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVzID0geWllbGQgZmlnbWEuZ2V0TG9jYWxUZXh0U3R5bGVzQXN5bmMoKTtcbiAgICAgICAgaWYgKHN0eWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRGb250RGV0YWlsc0xvY2FsKHN0eWxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Rm9udERldGFpbHNUb2tlbnMoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Rm9udERldGFpbHNUb2tlbnMoKSB7XG4gICAgbGV0IG5hbWVzID0gW107XG4gICAgY29uc3QgdG9rZW5zID0gdHlwZUZhY2VUb2tlbnM7XG4gICAgY29uc3QgZmFtaWx5ID0gdHlwZUZhY2VUb2tlbnNbXCJmb250LWZhbWlseVwiXS5wcmltYXJ5LiR2YWx1ZTtcbiAgICBmb3IgKGxldCBbbmFtZSwgZm9udFdlaWdodF0gb2YgT2JqZWN0LmVudHJpZXModHlwZUZhY2VUb2tlbnNbXCJmb250LXdlaWdodFwiXSkpIHtcbiAgICAgICAgbmFtZXMucHVzaCh7IGZhbWlseSwgc3R5bGU6IGZvbnRXZWlnaHQuJHZhbHVlIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZXM7XG59XG5mdW5jdGlvbiBnZXRGb250RGV0YWlsc0xvY2FsKHN0eWxlcykge1xuICAgIGNvbnN0IGZvbnRGYW1pbGllcyA9IFtdO1xuICAgIGNvbnN0IGZvbnRTdHlsZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHN0eWxlIG9mIHN0eWxlcykge1xuICAgICAgICBjb25zdCBmb250RmFtaWx5ID0gc3R5bGUuZm9udE5hbWUuZmFtaWx5O1xuICAgICAgICBjb25zdCBmb250U3R5bGUgPSBzdHlsZS5mb250TmFtZS5zdHlsZTtcbiAgICAgICAgaWYgKGZvbnRGYW1pbGllcy5pbmNsdWRlcyhmb250RmFtaWx5KSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgZm9udEZhbWlsaWVzLnB1c2goZm9udEZhbWlseSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvbnRTdHlsZXMuaW5jbHVkZXMoZm9udFN0eWxlKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgZm9udFN0eWxlcy5wdXNoKGZvbnRTdHlsZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IG5hbWVzID0gW107XG4gICAgZm9udEZhbWlsaWVzLmZvckVhY2goZmFtaWx5ID0+IHtcbiAgICAgICAgZm9udFN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IHtcbiAgICAgICAgICAgIG5hbWVzLnB1c2goeyBmYW1pbHksIHN0eWxlIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmFtZXM7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gX2Nsb25lKHZhbCkge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsO1xuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdudW1iZXInIHx8XG4gICAgICAgIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWwubWFwKHggPT4gX2Nsb25lKHgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkodmFsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBvID0ge307XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWwpIHtcbiAgICAgICAgICAgICAgICBvW2tleV0gPSBfY2xvbmUodmFsW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgJ3Vua25vd24nO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRlbGF5QXN5bmModGltZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGRlbGF5QXN5bmMgfSBmcm9tIFwiLi9kZWxheS1hc3luY1wiO1xubGV0IHRvdGFsTGF5ZXJzQ291bnQgPSAwO1xubGV0IHJlYm91bmRMYXllcnNDb3VudCA9IDA7XG5sZXQgc2tpcHBlZExheWVyc0NvdW50ID0gMDtcbmxldCBtaXNzaW5nTGF5ZXJzQ291bnQgPSAwO1xuZXhwb3J0IGZ1bmN0aW9uIGV4cG9ydFN0eWxlVGVtcGxhdGVzKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRvdGFsTGF5ZXJzQ291bnQgPSAwO1xuICAgICAgICByZWJvdW5kTGF5ZXJzQ291bnQgPSAwO1xuICAgICAgICBza2lwcGVkTGF5ZXJzQ291bnQgPSAwO1xuICAgICAgICBsZXQgX25vZGVzID0gW107XG4gICAgICAgIGZpZ21hLnNraXBJbnZpc2libGVJbnN0YW5jZUNoaWxkcmVuID0gZmFsc2U7XG4gICAgICAgIGlmIChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGZpZ21hLm5vdGlmeShcIlNlbGVjdCBhdCBsZWFzdCBvbmUgbGF5ZXIgYW5kIHRyeSBhZ2FpblwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24uZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PSBcIkNPTVBPTkVOVFwiKSB7XG4gICAgICAgICAgICAgICAgX25vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdmaW5kQWxsV2l0aENyaXRlcmlhJyBpbiBub2RlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Tm9kZXMgPSBub2RlLmZpbmRBbGxXaXRoQ3JpdGVyaWEoeyB0eXBlczogW1wiQ09NUE9ORU5UXCJdIH0pO1xuICAgICAgICAgICAgICAgIF9ub2RlcyA9IF9ub2Rlcy5jb25jYXQoY29tcG9uZW50Tm9kZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyRnJhbWUgPSB5aWVsZCBjcmVhdGVGcmFtZU5vZGUoKTtcbiAgICAgICAgY29uc3QgbG9jYWxWYXJpYWJsZXMgPSB5aWVsZCBmaWdtYS52YXJpYWJsZXMuZ2V0TG9jYWxWYXJpYWJsZXNBc3luYygpO1xuICAgICAgICBjb250YWluZXJGcmFtZS5maWxscyA9IFtcbiAgICAgICAgICAgIGZpZ21hLnZhcmlhYmxlcy5zZXRCb3VuZFZhcmlhYmxlRm9yUGFpbnQoeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDEsIGc6IDEsIGI6IDEgfSB9LCBcImNvbG9yXCIsIGxvY2FsVmFyaWFibGVzLmZpbmQobiA9PiBuLm5hbWUgPT0gJ2ZpbGwvYmFzZS8zMDAnKSlcbiAgICAgICAgXTtcbiAgICAgICAgY29udGFpbmVyRnJhbWUubGF5b3V0TW9kZSA9ICdWRVJUSUNBTCc7XG4gICAgICAgIGNvbnRhaW5lckZyYW1lLmxheW91dFNpemluZ0hvcml6b250YWwgPSAnSFVHJztcbiAgICAgICAgY29udGFpbmVyRnJhbWUubGF5b3V0U2l6aW5nVmVydGljYWwgPSAnSFVHJztcbiAgICAgICAgY29udGFpbmVyRnJhbWUucGFkZGluZ0JvdHRvbSA9IDgwO1xuICAgICAgICBjb250YWluZXJGcmFtZS5wYWRkaW5nTGVmdCA9IDk2O1xuICAgICAgICBjb250YWluZXJGcmFtZS5wYWRkaW5nUmlnaHQgPSA5NjtcbiAgICAgICAgY29udGFpbmVyRnJhbWUucGFkZGluZ1RvcCA9IDA7XG4gICAgICAgIGNvbnRhaW5lckZyYW1lLnNldEJvdW5kVmFyaWFibGUoJ3RvcExlZnRSYWRpdXMnLCBsb2NhbFZhcmlhYmxlcy5maW5kKG4gPT4gbi5uYW1lID09ICdyYWRpaS94bDInKSk7XG4gICAgICAgIGNvbnRhaW5lckZyYW1lLnNldEJvdW5kVmFyaWFibGUoJ3RvcFJpZ2h0UmFkaXVzJywgbG9jYWxWYXJpYWJsZXMuZmluZChuID0+IG4ubmFtZSA9PSAncmFkaWkveGwyJykpO1xuICAgICAgICBjb250YWluZXJGcmFtZS5zZXRCb3VuZFZhcmlhYmxlKCdib3R0b21MZWZ0UmFkaXVzJywgbG9jYWxWYXJpYWJsZXMuZmluZChuID0+IG4ubmFtZSA9PSAncmFkaWkveGwyJykpO1xuICAgICAgICBjb250YWluZXJGcmFtZS5zZXRCb3VuZFZhcmlhYmxlKCdib3R0b21SaWdodFJhZGl1cycsIGxvY2FsVmFyaWFibGVzLmZpbmQobiA9PiBuLm5hbWUgPT0gJ3JhZGlpL3hsMicpKTtcbiAgICAgICAgY29uc29sZS5sb2coX25vZGVzKTtcbiAgICAgICAgY29uc3QgdG90YWwgPSBfbm9kZXMubGVuZ3RoO1xuICAgICAgICB0b3RhbExheWVyc0NvdW50ID0gdG90YWw7XG4gICAgICAgIHdoaWxlIChfbm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnROb2RlID0gX25vZGVzLnNoaWZ0KCk7XG4gICAgICAgICAgICAvLyAoNzAgLSA0NCkgLyA3MFxuICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IE1hdGgucm91bmQoKCh0b3RhbCAtIF9ub2Rlcy5sZW5ndGgpIC8gdG90YWwpICogMTAwKTtcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IGAke3BlcmNlbnR9JSBkb25lLiBXb3JraW5nIG9uIGxheWVyICR7dG90YWwgLSBfbm9kZXMubGVuZ3RofSBvdXQgb2YgJHt0b3RhbH1gO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcbiAgICAgICAgICAgIGNvbnRhaW5lckZyYW1lLmFwcGVuZENoaWxkKHlpZWxkIGNoZWNrTm9kZShjb21wb25lbnROb2RlKSk7XG4gICAgICAgICAgICB5aWVsZCBkZWxheUFzeW5jKDEwKTtcbiAgICAgICAgfVxuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBbY29udGFpbmVyRnJhbWVdO1xuICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjaGVja05vZGUobm9kZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCBwYXJlbnQ7XG4gICAgICAgIGlmIChub2RlLnBhcmVudC50eXBlID09ICdDT01QT05FTlRfU0VUJykge1xuICAgICAgICAgICAgcGFyZW50ID0geWllbGQgZ2V0RnJhbWUobm9kZS5wYXJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZyYW1lID0gcHJvY2Vzc0NvbXBvbmVudE5vZGUobm9kZSk7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChmcmFtZSk7XG4gICAgICAgICAgICBmcmFtZS54ID0gbm9kZS54O1xuICAgICAgICAgICAgZnJhbWUueSA9IG5vZGUueTtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcHJvY2Vzc0NvbXBvbmVudE5vZGUobm9kZSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbm9kZS5jcmVhdGVJbnN0YW5jZSgpO1xuICAgIGNvbnN0IGZyYW1lID0gaW5zdGFuY2UuZGV0YWNoSW5zdGFuY2UoKTtcbiAgICBmcmFtZS5uYW1lID0gbm9kZS5uYW1lO1xuICAgIHJldHVybiBmcmFtZTtcbn1cbmNvbnN0IGNvbXBvbmVudFNldEZyYW1lc0NhY2hlID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gZ2V0RnJhbWUoY21wU2V0KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgY2hhY2hlZEZyYW1lID0gY29tcG9uZW50U2V0RnJhbWVzQ2FjaGUuZ2V0KGNtcFNldC5uYW1lKTtcbiAgICAgICAgaWYgKGNoYWNoZWRGcmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNoYWNoZWRGcmFtZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmcmFtZSA9IHlpZWxkIGNyZWF0ZUZyYW1lTm9kZSgpO1xuICAgICAgICBmcmFtZS5uYW1lID0gY21wU2V0Lm5hbWU7XG4gICAgICAgIGZyYW1lLnJlc2l6ZShjbXBTZXQud2lkdGgsIGNtcFNldC5oZWlnaHQpO1xuICAgICAgICBjb21wb25lbnRTZXRGcmFtZXNDYWNoZS5zZXQoY21wU2V0Lm5hbWUsIGZyYW1lKTtcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW2ZyYW1lXTtcbiAgICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlRnJhbWVOb2RlKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgY29uc3QgbG9jYWxWYXJpYWJsZXMgPSB5aWVsZCBmaWdtYS52YXJpYWJsZXMuZ2V0TG9jYWxWYXJpYWJsZXNBc3luYygpO1xuICAgICAgICBmcmFtZS5maWxscyA9IFtcbiAgICAgICAgICAgIGZpZ21hLnZhcmlhYmxlcy5zZXRCb3VuZFZhcmlhYmxlRm9yUGFpbnQoeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDEsIGc6IDEsIGI6IDEgfSB9LCBcImNvbG9yXCIsIGxvY2FsVmFyaWFibGVzLmZpbmQobiA9PiBuLm5hbWUgPT0gJ2NhcmQvYmcvcHJpbWFyeScpKVxuICAgICAgICBdO1xuICAgICAgICBmcmFtZS5zdHJva2VzID0gW1xuICAgICAgICAgICAgZmlnbWEudmFyaWFibGVzLnNldEJvdW5kVmFyaWFibGVGb3JQYWludCh7IHR5cGU6IFwiU09MSURcIiwgY29sb3I6IHsgcjogMSwgZzogMSwgYjogMSB9IH0sIFwiY29sb3JcIiwgbG9jYWxWYXJpYWJsZXMuZmluZChuID0+IG4ubmFtZSA9PSAnY2FyZC9ib3JkZXIvb3V0ZXInKSlcbiAgICAgICAgXTtcbiAgICAgICAgZnJhbWUuc2V0Qm91bmRWYXJpYWJsZSgndG9wTGVmdFJhZGl1cycsIGxvY2FsVmFyaWFibGVzLmZpbmQobiA9PiBuLm5hbWUgPT0gJ3JhZGlpL3hsJykpO1xuICAgICAgICBmcmFtZS5zZXRCb3VuZFZhcmlhYmxlKCd0b3BSaWdodFJhZGl1cycsIGxvY2FsVmFyaWFibGVzLmZpbmQobiA9PiBuLm5hbWUgPT0gJ3JhZGlpL3hsJykpO1xuICAgICAgICBmcmFtZS5zZXRCb3VuZFZhcmlhYmxlKCdib3R0b21MZWZ0UmFkaXVzJywgbG9jYWxWYXJpYWJsZXMuZmluZChuID0+IG4ubmFtZSA9PSAncmFkaWkveGwnKSk7XG4gICAgICAgIGZyYW1lLnNldEJvdW5kVmFyaWFibGUoJ2JvdHRvbVJpZ2h0UmFkaXVzJywgbG9jYWxWYXJpYWJsZXMuZmluZChuID0+IG4ubmFtZSA9PSAncmFkaWkveGwnKSk7XG4gICAgICAgIGZyYW1lLnggPSAtMTAwMDA7XG4gICAgICAgIGZyYW1lLnkgPSAtMTAwMDA7XG4gICAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBjaHJvbWEgZnJvbSAnY2hyb21hLWpzJztcbmltcG9ydCB7IHBhcnNlUmVmZXJlbmNlR2xvYmFsIH0gZnJvbSAnLi90b2tlbi1yZWZlcmVuY2VzJztcbmNvbnN0IGhleENvbG9yUmVnZXggPSAvXiMoWzAtOWEtZl17M318WzAtOWEtZl17Nn0pJC9pO1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRGaWdtYUNvbG9yVG9SZ2IoaW5wdXQsIGZvcm1hdCkge1xuICAgIGNvbnN0IHsgciwgZywgYiwgYSB9ID0gaW5wdXQ7XG4gICAgLy9maWdtYSB1c2VzIGZsb2F0IDAuLi4xIHZzIHN0YW5kYXJkIDAuLi4yNTVcbiAgICBjb25zdCBmaWdtYUNvbG9yVHJhbnNmb3JtZWQgPSB7XG4gICAgICAgIHI6IGlucHV0LnIgKiAyNTUsXG4gICAgICAgIGc6IGlucHV0LmcgKiAyNTUsXG4gICAgICAgIGI6IGlucHV0LmIgKiAyNTUsXG4gICAgICAgIGE6IGlucHV0LmFcbiAgICB9O1xuICAgIGxldCBjb2xvciA9IGNocm9tYS5nbChyLCBnLCBiLCBhKTtcbiAgICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgICAgICBjYXNlICdoZXgnOiB7XG4gICAgICAgICAgICByZXR1cm4gY29sb3IuaGV4KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnaHNsJzoge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmNzcygnaHNsJyk7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmNzcygpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29sb3JWYWx1ZShpbnB1dCwgYWRqdXN0bWVudHMpIHtcbiAgICBsZXQgY29sb3I7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKGlucHV0LnN0YXJ0c1dpdGgoJ3JnYicpKSB7XG4gICAgICAgICAgICBjb25zdCByZ2JWYWx1ZXMgPSBpbnB1dC5yZXBsYWNlKC9ecmdiYT9cXCh8XFxzK3xcXCkkL2csICcnKS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgaWYgKGhleENvbG9yUmVnZXgudGVzdChyZ2JWYWx1ZXNbMF0pKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBjaHJvbWEocmdiVmFsdWVzWzBdKTsgLy8gaGV4VG9GaWdtYVJHQihyZ2JWYWx1ZXNbMF0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFscGhhID0gcGFyc2VGbG9hdChyZ2JWYWx1ZXNbMV0pO1xuICAgICAgICAgICAgICAgIGNvbG9yID0gY29sb3IuYWxwaGEoYWxwaGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBjaHJvbWEoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29sb3IgPSBjaHJvbWEoaW5wdXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGFkanVzdG1lbnRzKSB7XG4gICAgICAgIGlmIChhZGp1c3RtZW50cy5oKSB7XG4gICAgICAgICAgICBjb2xvciA9IGNvbG9yLnNldCgnaHNsLmgnLCBgJHthZGp1c3RtZW50cy5ofWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhZGp1c3RtZW50cy5zKSB7XG4gICAgICAgICAgICBjb2xvciA9IGNvbG9yLnNldCgnaHNsLnMnLCBgJHthZGp1c3RtZW50cy5zfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhZGp1c3RtZW50cy5sKSB7XG4gICAgICAgICAgICBjb2xvciA9IGNvbG9yLnNldCgnaHNsLmwnLCBgJHthZGp1c3RtZW50cy5sfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhZGp1c3RtZW50cy5hKSB7XG4gICAgICAgICAgICBjb2xvciA9IGNvbG9yLnNldCgnaHNsLmEnLCBgJHthZGp1c3RtZW50cy5hfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFtyLCBnLCBiLCBhXSA9IGNvbG9yLmdsKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2w6IHsgciwgZywgYiwgYSB9LFxuICAgICAgICByZ2I6IGNvbG9yLmNzcygpLFxuICAgICAgICBoc2w6IGNvbG9yLmNzcygnaHNsJyksXG4gICAgICAgIGhleDogY29sb3IuaGV4KClcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29sb3JUb2tlbih0b2tlbiwgZGljdGlvbmFyeSwgb3V0cHV0ID0gJ2dsJykge1xuICAgIGxldCBjb2xvciA9IHRva2VuLiR2YWx1ZTtcbiAgICBjb2xvciA9IHBhcnNlUmVmZXJlbmNlR2xvYmFsKGNvbG9yLnRyaW0oKSwgZGljdGlvbmFyeSk7XG4gICAgY29uc3QgcmVzdWx0ID0gcGFyc2VDb2xvclZhbHVlKGNvbG9yLCB0b2tlbi5hZGp1c3RtZW50cyk7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0W291dHB1dF07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciBmb3JtYXRcIik7XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBmaW5kVmFyaWFibGVCeVJlZmVyZW5jZXMgfSBmcm9tIFwiLi90b2tlbi1yZWZlcmVuY2VzXCI7XG4vKlxuICAgIFRoaXMgbWV0aG9kIHJlYWRzIHNoYWRvdyBjb2xvciB2YWx1ZXMgZGlyZWN0bHkgZnJvbSBGaWdtYSBWYXJpYWJsZXNcbiovXG5leHBvcnQgZnVuY3Rpb24gaW1wb3J0RWZmZWN0U3R5bGVzKHRva2Vucykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGZvciAoY29uc3QgW25hbWUsIHRva2VuRGF0YV0gb2YgT2JqZWN0LmVudHJpZXModG9rZW5zKSkge1xuICAgICAgICAgICAgbGV0IHRva2VuID0gdG9rZW5EYXRhO1xuICAgICAgICAgICAgaWYgKHRva2VuLiR0eXBlID09ICdib3hTaGFkb3cnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpZ21hU3R5bGUgPSB5aWVsZCBnZXRTdHlsZUJ5TmFtZShuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIWZpZ21hU3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlnbWFTdHlsZSA9IGZpZ21hLmNyZWF0ZUVmZmVjdFN0eWxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHRva2VuLiR2YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBlZmZlY3RzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlnbWFWYXJpYWJsZSA9IHlpZWxkIGZpbmRWYXJpYWJsZUJ5UmVmZXJlbmNlcyh2YWx1ZS5jb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZmlnbWFWYXJpYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sbGVjdGlvbklEID0gZmlnbWFWYXJpYWJsZS52YXJpYWJsZUNvbGxlY3Rpb25JZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IHlpZWxkIGZpZ21hLnZhcmlhYmxlcy5nZXRWYXJpYWJsZUNvbGxlY3Rpb25CeUlkQXN5bmMoY29sbGVjdGlvbklEKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdE1vZGUgPSBjb2xsZWN0aW9uLm1vZGVzWzBdLm1vZGVJZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlnbWFFZmZlY3QgPSBPYmplY3QuYXNzaWduKHt9LCB2YWx1ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGZpZ21hVmFyaWFibGUudmFsdWVzQnlNb2RlW2RlZmF1bHRNb2RlXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWZmZWN0ID0gY29udmVydEVmZmVjdFN0eWxlVG9GaWdtYShmaWdtYUVmZmVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVmZmVjdFZhciA9IGZpZ21hLnZhcmlhYmxlcy5zZXRCb3VuZFZhcmlhYmxlRm9yRWZmZWN0KGVmZmVjdCwgJ2NvbG9yJywgZmlnbWFWYXJpYWJsZSk7XG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdFZhci5zcHJlYWQgPSBlZmZlY3Quc3ByZWFkO1xuICAgICAgICAgICAgICAgICAgICBlZmZlY3RzLnB1c2goZWZmZWN0VmFyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmlnbWFTdHlsZS5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgICAgICBmaWdtYVN0eWxlLmVmZmVjdHMgPSBlZmZlY3RzO1xuICAgICAgICAgICAgICAgIGZpZ21hU3R5bGUuZGVzY3JpcHRpb24gPSB0b2tlbi5kZXNjcmlwdGlvbiB8fCBmaWdtYVN0eWxlLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIC8vIGZpZ21hU3R5bGUuZG9jdW1lbnRhdGlvbkxpbmtzID0gdG9rZW4uZG9jdW1lbnRhdGlvbkxpbmsgPyBbdG9rZW4uZG9jdW1lbnRhdGlvbkxpbmtdIDogZmlnbWFTdHlsZS5kb2N1bWVudGF0aW9uTGlua3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldExvY2FsU3R5bGVzKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHJldHVybiB5aWVsZCBmaWdtYS5nZXRMb2NhbEVmZmVjdFN0eWxlc0FzeW5jKCk7XG4gICAgfSk7XG59XG47XG5mdW5jdGlvbiBnZXRTdHlsZUJ5TmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVzQnlUeXBlID0geWllbGQgZ2V0TG9jYWxTdHlsZXMoKTtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBzdHlsZXNCeVR5cGUuZmluZCgoc3R5bGUpID0+IHN0eWxlLm5hbWUgPT09IG5hbWUpO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfSk7XG59XG47XG5mdW5jdGlvbiBwYXJzZUJvb2xlYW4odmFsKSB7XG4gICAgcmV0dXJuIHZhbCAhPT0gXCJmYWxzZVwiO1xufVxuZnVuY3Rpb24gY29udmVydEVmZmVjdFN0eWxlVG9GaWdtYSh2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwiRFJPUF9TSEFET1dcIixcbiAgICAgICAgY29sb3I6IHZhbHVlLmNvbG9yLFxuICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgIHg6IHBhcnNlRmxvYXQodmFsdWUueCksXG4gICAgICAgICAgICB5OiBwYXJzZUZsb2F0KHZhbHVlLnkpXG4gICAgICAgIH0sXG4gICAgICAgIHJhZGl1czogcGFyc2VGbG9hdCh2YWx1ZS5ibHVyKSxcbiAgICAgICAgc3ByZWFkOiBwYXJzZUZsb2F0KHZhbHVlLnNwcmVhZCksXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgICAgc2hvd1NoYWRvd0JlaGluZE5vZGU6IHBhcnNlQm9vbGVhbih2YWx1ZS5zaG93U2hhZG93QmVoaW5kTm9kZSlcbiAgICB9O1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBfY2xvbmUgfSBmcm9tIFwiLi9jbG9uZVwiO1xuaW1wb3J0IHsgcGFyc2VSZWZlcmVuY2VHbG9iYWwgfSBmcm9tIFwiLi90b2tlbi1yZWZlcmVuY2VzXCI7XG5leHBvcnQgZnVuY3Rpb24gaW1wb3J0VGV4dFN0eWxlcyh0b2tlbnMpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBmb3IgKGNvbnN0IFtuYW1lLCB0b2tlbl0gb2YgT2JqZWN0LmVudHJpZXModG9rZW5zKSkge1xuICAgICAgICAgICAgaWYgKHRva2VuLiR0eXBlID09ICd0eXBvZ3JhcGh5Jykge1xuICAgICAgICAgICAgICAgIGxldCB0ZXh0U3R5bGUgPSB5aWVsZCBnZXRTdHlsZUJ5TmFtZShuYW1lKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3U3R5bGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoIXRleHRTdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGUgPSBmaWdtYS5jcmVhdGVUZXh0U3R5bGUoKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3U3R5bGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXNvbHZlZCA9IHBhcnNlVmFsdWVzKHRva2VuLiR2YWx1ZSwgdG9rZW5zKTtcbiAgICAgICAgICAgICAgICBjb25zdCBub3JtYWxpemVkID0gY29udmVydFRleHRTdHlsZVRvRmlnbWEobmFtZSwgcmVzb2x2ZWQpO1xuICAgICAgICAgICAgICAgIGlmICghbmV3U3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZC5mb250TmFtZSA9IF9jbG9uZSh0ZXh0U3R5bGUuZm9udE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhub3JtYWxpemVkKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHRTdHlsZVtrZXldID0gbm9ybWFsaXplZFtrZXldO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBwYXJzZVZhbHVlcyh2YWx1ZSwgZGljdGlvbmFyeSkge1xuICAgIGxldCBvdXRwdXQgPSB7fTtcbiAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkVmFsdWUgPSBwYXJzZVJlZmVyZW5jZUdsb2JhbCh2YWx1ZSwgZGljdGlvbmFyeSk7XG4gICAgICAgIG91dHB1dFtrZXldID0gcmVzb2x2ZWRWYWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gb3V0cHV0O1xufVxuZnVuY3Rpb24gZ2V0TG9jYWxTdHlsZXMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgcmV0dXJuIHlpZWxkIGZpZ21hLmdldExvY2FsVGV4dFN0eWxlc0FzeW5jKCk7XG4gICAgfSk7XG59XG47XG5mdW5jdGlvbiBnZXRTdHlsZUJ5TmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVzQnlUeXBlID0geWllbGQgZ2V0TG9jYWxTdHlsZXMoKTtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBzdHlsZXNCeVR5cGUuZmluZCgoc3R5bGUpID0+IHN0eWxlLm5hbWUgPT09IG5hbWUpO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfSk7XG59XG47XG5mdW5jdGlvbiBjb252ZXJ0VGV4dENhc2VUb0ZpZ21hKHZhbHVlKSB7XG4gICAgc3dpdGNoICh2YWx1ZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgJ3VwcGVyY2FzZSc6XG4gICAgICAgIGNhc2UgJ3VwcGVyJzpcbiAgICAgICAgICAgIHJldHVybiAnVVBQRVInO1xuICAgICAgICBjYXNlICdsb3dlcmNhc2UnOlxuICAgICAgICBjYXNlICdsb3dlcic6XG4gICAgICAgICAgICByZXR1cm4gJ0xPV0VSJztcbiAgICAgICAgY2FzZSAnY2FwaXRhbGl6ZSc6XG4gICAgICAgIGNhc2UgJ3RpdGxlJzpcbiAgICAgICAgICAgIHJldHVybiAnVElUTEUnO1xuICAgICAgICBjYXNlICdzbWFsbC1jYXBzJzpcbiAgICAgICAgY2FzZSAnc21hbGxfY2Fwcyc6XG4gICAgICAgICAgICByZXR1cm4gJ1NNQUxMX0NBUFMnO1xuICAgICAgICBjYXNlICdhbGwtc21hbGwtY2Fwcyc6XG4gICAgICAgIGNhc2UgJ3NtYWxsX2NhcHNfZm9yY2VkJzpcbiAgICAgICAgICAgIHJldHVybiAnU01BTExfQ0FQU19GT1JDRUQnO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICdPUklHSU5BTCc7XG4gICAgfVxufVxuZnVuY3Rpb24gY29udmVydFRleHREZWNvcmF0aW9uVG9GaWdtYSh2YWx1ZSkge1xuICAgIHN3aXRjaCAodmFsdWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjYXNlICd1bmRlcmxpbmUnOlxuICAgICAgICAgICAgcmV0dXJuICdVTkRFUkxJTkUnO1xuICAgICAgICBjYXNlICdsaW5lLXRocm91Z2gnOlxuICAgICAgICBjYXNlICdzdHJpa2V0aHJvdWdoJzpcbiAgICAgICAgICAgIHJldHVybiAnU1RSSUtFVEhST1VHSCc7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJ05PTkUnO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VGV4dFN0eWxlVG9GaWdtYShuYW1lLCB2YWx1ZXMpIHtcbiAgICBsZXQgdGV4dFN0eWxlID0ge1xuICAgICAgICAnbmFtZSc6IG5hbWUsXG4gICAgICAgICdmb250U2l6ZSc6IHBhcnNlRmxvYXQodmFsdWVzLmZvbnRTaXplKSxcbiAgICAgICAgJ3RleHREZWNvcmF0aW9uJzogY29udmVydFRleHREZWNvcmF0aW9uVG9GaWdtYSh2YWx1ZXMudGV4dERlY29yYXRpb24pLFxuICAgICAgICAnZm9udE5hbWUnOiB7XG4gICAgICAgICAgICBmYW1pbHk6IHZhbHVlcy5mb250RmFtaWx5LFxuICAgICAgICAgICAgc3R5bGU6IHZhbHVlcy5mb250V2VpZ2h0XG4gICAgICAgIH0sXG4gICAgICAgICdsZXR0ZXJTcGFjaW5nJzoge1xuICAgICAgICAgICAgdW5pdDogdmFsdWVzLmxldHRlclNwYWNpbmcuaW5jbHVkZXMoJyUnKSA/IFwiUEVSQ0VOVFwiIDogXCJQSVhFTFNcIixcbiAgICAgICAgICAgIHZhbHVlOiBwYXJzZUludCh2YWx1ZXMubGV0dGVyU3BhY2luZylcbiAgICAgICAgfSxcbiAgICAgICAgJ2xpbmVIZWlnaHQnOiB7XG4gICAgICAgICAgICB1bml0OiB2YWx1ZXMubGluZUhlaWdodC5pbmNsdWRlcygnJScpID8gXCJQRVJDRU5UXCIgOiBcIlBJWEVMU1wiLFxuICAgICAgICAgICAgdmFsdWU6IHBhcnNlRmxvYXQodmFsdWVzLmxpbmVIZWlnaHQpXG4gICAgICAgIH0sXG4gICAgICAgIGxlYWRpbmdUcmltOiBcIk5PTkVcIixcbiAgICAgICAgcGFyYWdyYXBoSW5kZW50OiAwLFxuICAgICAgICAncGFyYWdyYXBoU3BhY2luZyc6IHBhcnNlSW50KHZhbHVlcy5wYXJhZ3JhcGhTcGFjaW5nKSxcbiAgICAgICAgbGlzdFNwYWNpbmc6IDAsXG4gICAgICAgIGhhbmdpbmdQdW5jdHVhdGlvbjogZmFsc2UsXG4gICAgICAgIGhhbmdpbmdMaXN0OiBmYWxzZSxcbiAgICAgICAgJ3RleHRDYXNlJzogY29udmVydFRleHRDYXNlVG9GaWdtYSh2YWx1ZXMudGV4dENhc2UpXG4gICAgfTtcbiAgICByZXR1cm4gdGV4dFN0eWxlO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5mdW5jdGlvbiBmaW5kVmFyaWFibGVJbkNvbGxlY3Rpb24odmFyaWFibGVOYW1lLCBjb2xsZWN0aW9uTmFtZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGZpZ21hQ29sbGVjdGlvbnMgPSB5aWVsZCBmaWdtYS52YXJpYWJsZXMuZ2V0TG9jYWxWYXJpYWJsZUNvbGxlY3Rpb25zQXN5bmMoKTtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IGZpZ21hQ29sbGVjdGlvbnMuZmluZChjb2xsZWN0aW9uID0+IGNvbGxlY3Rpb24ubmFtZSA9PT0gY29sbGVjdGlvbk5hbWUpO1xuICAgICAgICBsZXQgZmlnbWFWaXJhYmxlO1xuICAgICAgICBpZiAoY29sbGVjdGlvbikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpZCBvZiBjb2xsZWN0aW9uLnZhcmlhYmxlSWRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlnbWFWYXJpYWJsZUluQ29sbGVjaXRvbiA9IHlpZWxkIGZpZ21hLnZhcmlhYmxlcy5nZXRWYXJpYWJsZUJ5SWRBc3luYyhpZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSAoZmlnbWFWYXJpYWJsZUluQ29sbGVjaXRvbiA9PT0gbnVsbCB8fCBmaWdtYVZhcmlhYmxlSW5Db2xsZWNpdG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmaWdtYVZhcmlhYmxlSW5Db2xsZWNpdG9uLm5hbWUpID09PSB2YXJpYWJsZU5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZ21hVmlyYWJsZSA9IGZpZ21hVmFyaWFibGVJbkNvbGxlY2l0b247XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlnbWFWaXJhYmxlO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGaWdtYVZhcmlhYmxlQnlOYW1lKHZhcmlhYmxlTmFtZSwgY29sbGVjdGlvbk5hbWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoY29sbGVjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCBmaW5kVmFyaWFibGVJbkNvbGxlY3Rpb24odmFyaWFibGVOYW1lLCBjb2xsZWN0aW9uTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBmaWdtYVZhcmlhYmxlcyA9IHlpZWxkIGZpZ21hLnZhcmlhYmxlcy5nZXRMb2NhbFZhcmlhYmxlc0FzeW5jKCk7XG4gICAgICAgICAgICByZXR1cm4gZmlnbWFWYXJpYWJsZXMuZmluZCh2YXJpYWJsZSA9PiB2YXJpYWJsZS5uYW1lID09PSB2YXJpYWJsZU5hbWUpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlnbWFDb2xsZWN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBmaWdtYUNvbGxlY3Rpb25zID0geWllbGQgZmlnbWEudmFyaWFibGVzLmdldExvY2FsVmFyaWFibGVDb2xsZWN0aW9uc0FzeW5jKCk7XG4gICAgICAgIGxldCBpc05ldyA9IGZhbHNlO1xuICAgICAgICBsZXQgY29sbGVjdGlvbiA9IGZpZ21hQ29sbGVjdGlvbnMuZmluZChjb2xsZWN0aW9uID0+IGNvbGxlY3Rpb24ubmFtZSA9PT0gbmFtZSk7XG4gICAgICAgIGlmICghY29sbGVjdGlvbikge1xuICAgICAgICAgICAgaXNOZXcgPSB0cnVlO1xuICAgICAgICAgICAgY29sbGVjdGlvbiA9IGZpZ21hLnZhcmlhYmxlcy5jcmVhdGVWYXJpYWJsZUNvbGxlY3Rpb24obmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY29sbGVjdGlvbiwgaXNOZXcgfTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlVmFyaWFibGVUeXBlKHR5cGVOYW1lKSB7XG4gICAgc3dpdGNoICh0eXBlTmFtZSkge1xuICAgICAgICBjYXNlICdjb2xvcic6IHJldHVybiAnQ09MT1InO1xuICAgICAgICBjYXNlICdib29sZWFuJzogcmV0dXJuICdCT09MRUFOJztcbiAgICAgICAgY2FzZSAnbnVtYmVyJzogcmV0dXJuICdGTE9BVCc7XG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiAnU1RSSU5HJztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RmlnbWFWYXJpYWJsZShjb2xsZWN0aW9uLCBtb2RlSWQsIHR5cGUsIHZhcmlhYmxlTmFtZSwgdmFsdWUgPSBudWxsLCBzY29wZXMgPSBbJ0FMTF9TQ09QRVMnXSwgZGVzY3JpcHRpb24gPSBudWxsKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IGZpZ21hVmFyaWFibGUgPSB5aWVsZCBmaW5kRmlnbWFWYXJpYWJsZUJ5TmFtZSh2YXJpYWJsZU5hbWUsIGNvbGxlY3Rpb24ubmFtZSk7XG4gICAgICAgIGlmICghZmlnbWFWYXJpYWJsZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmaWdtYVZhcmlhYmxlID0gZmlnbWEudmFyaWFibGVzLmNyZWF0ZVZhcmlhYmxlKHZhcmlhYmxlTmFtZSwgY29sbGVjdGlvbiwgdHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgZmlnbWFWYXJpYWJsZS5zZXRWYWx1ZUZvck1vZGUobW9kZUlkLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWFWYXJpYWJsZS5zY29wZXMgPSBzY29wZXM7XG4gICAgICAgIGlmIChkZXNjcmlwdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICBmaWdtYVZhcmlhYmxlLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpZ21hVmFyaWFibGU7XG4gICAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZmxhdHRlbk9iamVjdChkYXRhKSB7XG4gICAgY29uc3QgdG9rZW5zID0ge307XG4gICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoW2tleSwgb2JqZWN0XSkgPT4ge1xuICAgICAgICB0cmF2ZXJzZVRva2VuKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIG9iamVjdCxcbiAgICAgICAgICAgIHRva2VucyxcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbmZ1bmN0aW9uIHRyYXZlcnNlVG9rZW4oeyBrZXksIG9iamVjdCwgdG9rZW5zLCB9KSB7XG4gICAgaWYgKCFvYmplY3QpXG4gICAgICAgIGRlYnVnZ2VyO1xuICAgIC8vIGlmIGtleSBpcyBhIG1ldGEgZmllbGQsIG1vdmUgb25cbiAgICBpZiAoa2V5LmNoYXJBdCgwKSA9PT0gXCIkXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LiR2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRva2Vuc1trZXldID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqZWN0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKG9iamVjdCkuZm9yRWFjaCgoW2tleTIsIG9iamVjdDJdKSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5Mi5jaGFyQXQoMCkgIT09IFwiJFwiKSB7XG4gICAgICAgICAgICAgICAgdHJhdmVyc2VUb2tlbih7XG4gICAgICAgICAgICAgICAgICAgIGtleTogYCR7a2V5fS8ke2tleTJ9YCxcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiBvYmplY3QyLFxuICAgICAgICAgICAgICAgICAgICB0b2tlbnNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBkZWxheUFzeW5jIH0gZnJvbSBcIi4vZGVsYXktYXN5bmNcIjtcbmltcG9ydCB7IF9jbG9uZSB9IGZyb20gXCIuL2Nsb25lXCI7XG5pbXBvcnQgeyBiaW5kUHJvcGVydHlWYXJpYWJsZXMsIGZpbmRWYXJpYWJsZU1hdGNoIH0gZnJvbSBcIi4vc3dhcC12YXJpYWJsZXNcIjtcbmxldCB0b3RhbExheWVyc0NvdW50ID0gMDtcbmxldCByZWJvdW5kTGF5ZXJzQ291bnQgPSAwO1xubGV0IHNraXBwZWRMYXllcnNDb3VudCA9IDA7XG5sZXQgbWlzc2luZ0xheWVyc0NvdW50ID0gMDtcbi8vY2FjaGUgYWxsIGNvbXBvbmVudCBzZXRzIHRvIHNwZWVkIHVwIHRoZSBwcm9jZXNzXG5sZXQgY29tcG9uZW50U2V0cztcbmZ1bmN0aW9uIGdldENvbXBvbmVudFNldHMoKSB7XG4gICAgaWYgKCFjb21wb25lbnRTZXRzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBGaXJzdCB0aW1lIGxvb2sgdXAsIHJ1bm5pbmcgc2xvdy4uLmApO1xuICAgICAgICBmaWdtYS5za2lwSW52aXNpYmxlSW5zdGFuY2VDaGlsZHJlbiA9IHRydWU7XG4gICAgICAgIGNvbXBvbmVudFNldHMgPSBmaWdtYS5jdXJyZW50UGFnZS5maW5kQWxsV2l0aENyaXRlcmlhKHtcbiAgICAgICAgICAgIHR5cGVzOiBbJ0NPTVBPTkVOVCcsICdDT01QT05FTlRfU0VUJ11cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnRTZXRzO1xufVxuZnVuY3Rpb24gZmluZENvbXBvbmVudChjbXBOYW1lKSB7XG4gICAgbGV0IG1hc3RlckNvbXBvbmVudCA9IGdldENvbXBvbmVudFNldHMoKS5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSBjbXBOYW1lKTtcbiAgICByZXR1cm4gbWFzdGVyQ29tcG9uZW50IHx8IG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gaW1wb3J0U3R5bGVUZW1wbGF0ZXMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdG90YWxMYXllcnNDb3VudCA9IDA7XG4gICAgICAgIHJlYm91bmRMYXllcnNDb3VudCA9IDA7XG4gICAgICAgIHNraXBwZWRMYXllcnNDb3VudCA9IDA7XG4gICAgICAgIGxldCBfbm9kZXMgPSBbXTtcbiAgICAgICAgaWYgKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KFwiU2VsZWN0IGF0IGxlYXN0IG9uZSBsYXllciBhbmQgdHJ5IGFnYWluXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoJ2NoaWxkcmVuJyBpbiBub2RlKSB7XG4gICAgICAgICAgICAgICAgX25vZGVzID0gX25vZGVzLmNvbmNhdChub2RlLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKF9ub2Rlcyk7XG4gICAgICAgIGxldCBtYXRjaGVzID0gW107XG4gICAgICAgIF9ub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSAhPSAnRlJBTUUnIHx8IG5vZGUudmlzaWJsZSAhPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBza2lwIGV2ZXJ5dGluZyB0aGF0IGlzIG5vdCBhIHJlZ3VsYXIgZnJhbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudE5vZGUgPSBmaW5kQ29tcG9uZW50KG5vZGUubmFtZSk7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIG1hdGNoZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBjb21wb25lbnROb2RlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0b3RhbCA9IG1hdGNoZXMubGVuZ3RoO1xuICAgICAgICB0b3RhbExheWVyc0NvdW50ID0gdG90YWw7XG4gICAgICAgIHdoaWxlIChtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hEYXRhID0gbWF0Y2hlcy5zaGlmdCgpO1xuICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IE1hdGgucm91bmQoKCh0b3RhbCAtIG1hdGNoZXMubGVuZ3RoKSAvIHRvdGFsKSAqIDEwMCk7XG4gICAgICAgICAgICBjb25zdCBtc2cgPSBgJHtwZXJjZW50fSUgZG9uZS4gV29ya2luZyBvbiBsYXllciAke3RvdGFsIC0gbWF0Y2hlcy5sZW5ndGh9IG91dCBvZiAke3RvdGFsfWA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgICAgICAgICAgaWYgKG1hdGNoRGF0YS50YXJnZXQudHlwZSA9PSAnQ09NUE9ORU5UX1NFVCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNvdXJjZUZyYW1lIG9mIG1hdGNoRGF0YS5zb3VyY2UuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbWF0Y2hEYXRhLnRhcmdldC5maW5kQ2hpbGQobiA9PiBuLm5hbWUgPT09IHNvdXJjZUZyYW1lLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHRhcmdldCA9PT0gbnVsbCB8fCB0YXJnZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhcmdldC50eXBlKSA9PSAnQ09NUE9ORU5UJyAmJiBzb3VyY2VGcmFtZS50eXBlID09ICdGUkFNRScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHByb2Nlc3NOb2RlKHNvdXJjZUZyYW1lLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgeWllbGQgcHJvY2Vzc05vZGUobWF0Y2hEYXRhLnNvdXJjZSwgbWF0Y2hEYXRhLnRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcHJvY2Vzc05vZGUoc291cmNlRnJhbWUsIHRhcmdldENvbXBvbmVudCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHlpZWxkIGNvcHlTdHlsZXMoc291cmNlRnJhbWUsIHRhcmdldENvbXBvbmVudCk7XG4gICAgICAgIHlpZWxkIGJpbmRWYWlyYWJsZXMoc291cmNlRnJhbWUsIHRhcmdldENvbXBvbmVudCk7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGZvciAoY29uc3Qgc291cmNlTm9kZSBvZiBzb3VyY2VGcmFtZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgZmlnbWEuc2tpcEludmlzaWJsZUluc3RhbmNlQ2hpbGRyZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCB0YXJnZXROb2RlID0gdGFyZ2V0Q29tcG9uZW50LmZpbmRPbmUobiA9PiBuLm5hbWUgPT09IHNvdXJjZU5vZGUubmFtZSk7XG4gICAgICAgICAgICBpZiAoIXRhcmdldE5vZGUpIHtcbiAgICAgICAgICAgICAgICAvLyBjb3B5IGEgY29tcG9uZW50IGFuZCBpbnNlcnQgaXQgaW50byB0aGUgc2FtZSBwb3NpdGlvbiBhcyBpdCBpcyBpbiBzb3VyY2VGcmFtZVxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb25lID0gc291cmNlTm9kZS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIHRhcmdldENvbXBvbmVudC5pbnNlcnRDaGlsZChpbmRleCsrLCBjbG9uZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzaXplQW5kUmVwb3NpdGlvbihzb3VyY2VOb2RlLCB0YXJnZXROb2RlKTtcbiAgICAgICAgICAgIGlmIChzb3VyY2VOb2RlLnR5cGUgPT0gJ0lOU1RBTkNFJyAmJiB0YXJnZXROb2RlLnR5cGUgPT0gJ0lOU1RBTkNFJykge1xuICAgICAgICAgICAgICAgIHlpZWxkIGNvcHlPdmVycmlkZXMoc291cmNlTm9kZSwgdGFyZ2V0Tm9kZSwgdGFyZ2V0Q29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzb3VyY2VOb2RlLnR5cGUgPT0gJ0ZSQU1FJyAmJiB0YXJnZXROb2RlLnR5cGUgPT0gJ0ZSQU1FJyB8fFxuICAgICAgICAgICAgICAgIHNvdXJjZU5vZGUudHlwZSA9PSAnSU5TVEFOQ0UnICYmIHRhcmdldE5vZGUudHlwZSA9PSAnSU5TVEFOQ0UnIHx8XG4gICAgICAgICAgICAgICAgc291cmNlTm9kZS50eXBlID09ICdCT09MRUFOX09QRVJBVElPTicgJiYgdGFyZ2V0Tm9kZS50eXBlID09ICdCT09MRUFOX09QRVJBVElPTicpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBjb3B5Tm9kZVByb3BzKHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHlpZWxkIGRlbGF5QXN5bmMoMTApO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY29weU5vZGVQcm9wcyhzb3VyY2VOb2RlLCB0YXJnZXROb2RlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdGFyZ2V0Tm9kZS5maWxscyA9IF9jbG9uZShzb3VyY2VOb2RlLmZpbGxzKTtcbiAgICAgICAgdGFyZ2V0Tm9kZS5lZmZlY3RzID0gX2Nsb25lKHNvdXJjZU5vZGUuZWZmZWN0cyk7XG4gICAgICAgIHRhcmdldE5vZGUuc3Ryb2tlcyA9IF9jbG9uZShzb3VyY2VOb2RlLnN0cm9rZXMpO1xuICAgICAgICB0YXJnZXROb2RlLm9wYWNpdHkgPSBfY2xvbmUoc291cmNlTm9kZS5vcGFjaXR5KTtcbiAgICAgICAgdGFyZ2V0Tm9kZS52aXNpYmxlID0gX2Nsb25lKHNvdXJjZU5vZGUudmlzaWJsZSk7XG4gICAgICAgIHRhcmdldE5vZGUuaXNNYXNrID0gX2Nsb25lKHNvdXJjZU5vZGUuaXNNYXNrKTtcbiAgICAgICAgdGFyZ2V0Tm9kZS5zdHJva2VBbGlnbiA9IF9jbG9uZShzb3VyY2VOb2RlLnN0cm9rZUFsaWduKTtcbiAgICAgICAgdGFyZ2V0Tm9kZS5zdHJva2VBbGlnbiA9IF9jbG9uZShzb3VyY2VOb2RlLnN0cm9rZUFsaWduKTtcbiAgICAgICAgdGFyZ2V0Tm9kZS5zdHJva2VDYXAgPSBfY2xvbmUoc291cmNlTm9kZS5zdHJva2VDYXApO1xuICAgICAgICB0YXJnZXROb2RlLnN0cm9rZUpvaW4gPSBfY2xvbmUoc291cmNlTm9kZS5zdHJva2VKb2luKTtcbiAgICAgICAgdGFyZ2V0Tm9kZS5zdHJva2VNaXRlckxpbWl0ID0gX2Nsb25lKHNvdXJjZU5vZGUuc3Ryb2tlTWl0ZXJMaW1pdCk7XG4gICAgICAgIHRhcmdldE5vZGUuc3Ryb2tlV2VpZ2h0ID0gX2Nsb25lKHNvdXJjZU5vZGUuc3Ryb2tlV2VpZ2h0KTtcbiAgICAgICAgaWYgKHNvdXJjZU5vZGUudHlwZSA9PSAnRlJBTUUnICYmIHRhcmdldE5vZGUudHlwZSA9PSAnRlJBTUUnKSB7XG4gICAgICAgICAgICB0YXJnZXROb2RlLmNvbnN0cmFpbnRzID0gX2Nsb25lKHNvdXJjZU5vZGUuY29uc3RyYWludHMpO1xuICAgICAgICAgICAgdGFyZ2V0Tm9kZS5sYXlvdXRHcmlkcyA9IF9jbG9uZShzb3VyY2VOb2RlLmxheW91dEdyaWRzKTtcbiAgICAgICAgICAgIHRhcmdldE5vZGUuc3Ryb2tlQm90dG9tV2VpZ2h0ID0gX2Nsb25lKHNvdXJjZU5vZGUuc3Ryb2tlQm90dG9tV2VpZ2h0KTtcbiAgICAgICAgICAgIHRhcmdldE5vZGUuc3Ryb2tlTGVmdFdlaWdodCA9IF9jbG9uZShzb3VyY2VOb2RlLnN0cm9rZUxlZnRXZWlnaHQpO1xuICAgICAgICAgICAgdGFyZ2V0Tm9kZS5zdHJva2VSaWdodFdlaWdodCA9IF9jbG9uZShzb3VyY2VOb2RlLnN0cm9rZVJpZ2h0V2VpZ2h0KTtcbiAgICAgICAgICAgIHRhcmdldE5vZGUuc3Ryb2tlVG9wV2VpZ2h0ID0gX2Nsb25lKHNvdXJjZU5vZGUuc3Ryb2tlVG9wV2VpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICB5aWVsZCBjb3B5U3R5bGVzKHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpO1xuICAgICAgICB5aWVsZCBiaW5kVmFpcmFibGVzKHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gYmluZFZhaXJhYmxlcyhzb3VyY2VGcmFtZSwgdGFyZ2V0Q29tcG9uZW50KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgYm91bmRWYWlyYWJsZXMgPSBPYmplY3QuZW50cmllcyhzb3VyY2VGcmFtZS5ib3VuZFZhcmlhYmxlcyk7XG4gICAgICAgIHJldHVybiB5aWVsZCBQcm9taXNlLmFsbChib3VuZFZhaXJhYmxlcy5tYXAoKFtwcm9wTmFtZSwgdmFyQmluZGluZ10pID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCBiaW5kVmFyaWFibGUoc291cmNlRnJhbWUsIHRhcmdldENvbXBvbmVudCwgcHJvcE5hbWUsIHZhckJpbmRpbmcpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyICsgYCR7cHJvcE5hbWV9YDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSkpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTsgLy8gc29tZSBjb2RpbmcgZXJyb3IgaW4gaGFuZGxpbmcgaGFwcGVuZWRcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiByZXNpemVBbmRSZXBvc2l0aW9uKHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpIHtcbiAgICBpZiAodGFyZ2V0Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNvdXJjZU5vZGUudHlwZSA9PSAnQk9PTEVBTl9PUEVSQVRJT04nKSB7XG4gICAgICAgIHNvdXJjZU5vZGUuY2hpbGRyZW4uZm9yRWFjaChzb3VyY2UgPT4ge1xuICAgICAgICAgICAgaWYgKCdmaW5kT25lJyBpbiB0YXJnZXROb2RlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGFyZ2V0Tm9kZS5maW5kT25lKG4gPT4gbi5uYW1lID09PSBzb3VyY2UubmFtZSk7XG4gICAgICAgICAgICAgICAgcmVzaXplQW5kUmVwb3NpdGlvbihzb3VyY2UsIHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGFyZ2V0Tm9kZS54ID0gc291cmNlTm9kZS54O1xuICAgICAgICB0YXJnZXROb2RlLnkgPSBzb3VyY2VOb2RlLnk7XG4gICAgICAgIGlmICgncmVzaXplJyBpbiB0YXJnZXROb2RlKSB7XG4gICAgICAgICAgICB0YXJnZXROb2RlLnJlc2l6ZShzb3VyY2VOb2RlLndpZHRoLCBzb3VyY2VOb2RlLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBjb3B5Q29tcG9uZW50UHJvcHMoc291cmNlLCB0YXJnZXQpIHtcbiAgICAvLyBDT1BZIENPTVBPTkVOVCBQUk9QUyAtLS0tLS0tLS0tLS0tLS0tXG4gICAgY29uc3Qgc291cmNlQ29tcG9uZW50UHJvcHMgPSBzb3VyY2UuY29tcG9uZW50UHJvcGVydGllcztcbiAgICBjb25zdCBwcm9wc0NvcHkgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhzb3VyY2VDb21wb25lbnRQcm9wcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBwcm9wc0NvcHlba2V5XSA9IHNvdXJjZUNvbXBvbmVudFByb3BzW2tleV0udmFsdWU7XG4gICAgfSk7XG4gICAgdGFyZ2V0LnNldFByb3BlcnRpZXMocHJvcHNDb3B5KTtcbn1cbmZ1bmN0aW9uIGNvcHlPdmVycmlkZXMoc291cmNlTm9kZSwgdGFyZ2V0Tm9kZSwgdGFyZ2V0Q29tcG9uZW50KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKHRhcmdldE5vZGUudHlwZSA9PSAnSU5TVEFOQ0UnKSB7XG4gICAgICAgICAgICAvLyBTV0FQIElOU1RBTkNFUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZU1haW5Db21wID0geWllbGQgc291cmNlTm9kZS5nZXRNYWluQ29tcG9uZW50QXN5bmMoKTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldE1haW5Db21wID0geWllbGQgdGFyZ2V0Tm9kZS5nZXRNYWluQ29tcG9uZW50QXN5bmMoKTtcbiAgICAgICAgICAgIGNvbnN0IGRvU3dhcCA9IHNvdXJjZU1haW5Db21wLmlkICE9PSB0YXJnZXRNYWluQ29tcC5pZDtcbiAgICAgICAgICAgIGlmIChkb1N3YXApIHtcbiAgICAgICAgICAgICAgICB0YXJnZXROb2RlLnN3YXBDb21wb25lbnQoc291cmNlTWFpbkNvbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29weUNvbXBvbmVudFByb3BzKHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBvZiBzb3VyY2VOb2RlLm92ZXJyaWRlcykge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHRhcmdldE5vZGUudHlwZTtcbiAgICAgICAgICAgIGlmICh0eXBlICE9ICdGUkFNRScgJiZcbiAgICAgICAgICAgICAgICB0eXBlICE9ICdCT09MRUFOX09QRVJBVElPTicgJiZcbiAgICAgICAgICAgICAgICB0eXBlICE9ICdDT01QT05FTlRfU0VUJyAmJlxuICAgICAgICAgICAgICAgIHR5cGUgIT0gJ0NPTVBPTkVOVCcgJiZcbiAgICAgICAgICAgICAgICB0eXBlICE9ICdJTlNUQU5DRScgJiZcbiAgICAgICAgICAgICAgICB0eXBlICE9ICdHUk9VUCcgJiZcbiAgICAgICAgICAgICAgICB0eXBlICE9ICdTRUNUSU9OJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IHlpZWxkIGZpZ21hLmdldE5vZGVCeUlkQXN5bmMocHJvcC5pZCk7XG4gICAgICAgICAgICBpZiAoIXNvdXJjZSlcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkcyA9IHByb3Aub3ZlcnJpZGRlbkZpZWxkcztcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IC8qc291cmNlLm5hbWUgPT0gdGFyZ2V0Tm9kZS5uYW1lID8gdGFyZ2V0Tm9kZSA6Ki8gdGFyZ2V0Tm9kZS5maW5kT25lKG4gPT4gbi5uYW1lID09PSBzb3VyY2UubmFtZSk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9wTmFtZSA9IGZpZWxkO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQgPT0gJ3N0b2tlVG9wV2VpZ2h0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcE5hbWUgPSAnc3Ryb2tlVG9wV2VpZ2h0JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQgPT0gJ2NvbXBvbmVudFByb3BlcnRpZXMnICYmIHNvdXJjZS50eXBlID09ICdJTlNUQU5DRScgJiYgdGFyZ2V0LnR5cGUgPT0gJ0lOU1RBTkNFJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29weUNvbXBvbmVudFByb3BzKHNvdXJjZSwgdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9wTmFtZSAhPSAnY29tcG9uZW50UHJvcGVydHlEZWZpbml0aW9ucycgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BOYW1lICE9ICdoZWlnaHQnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wTmFtZSAhPSAnb3ZlcmxheUJhY2tncm91bmQnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wTmFtZSAhPSAnb3ZlcmxheUJhY2tncm91bmRJbnRlcmFjdGlvbicgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BOYW1lICE9ICdvdmVybGF5UG9zaXRpb25UeXBlJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcE5hbWUgIT0gJ3BhcmVudCcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BOYW1lICE9ICd0eXBlJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcE5hbWUgIT0gJ3dpZHRoJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcE5hbWUgIT0gJ2JvdW5kVmFyaWFibGVzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFtwcm9wTmFtZV0gIT0gc291cmNlW3Byb3BOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBhcHBseWluZyAke3Byb3BOYW1lfToke3NvdXJjZVtwcm9wTmFtZV19IHRvICR7c291cmNlLm5hbWV9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BOYW1lXSA9IF9jbG9uZShzb3VyY2VbcHJvcE5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHlpZWxkIGJpbmRWYWlyYWJsZXMoc291cmNlLCB0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjb3B5U3R5bGVzKHNvdXJjZUZyYW1lLCB0YXJnZXRDb21wb25lbnQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoJ2VmZmVjdFN0eWxlSWQnIGluIHNvdXJjZUZyYW1lICYmICdlZmZlY3RTdHlsZUlkJyBpbiB0YXJnZXRDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHlpZWxkIHRhcmdldENvbXBvbmVudC5zZXRFZmZlY3RTdHlsZUlkQXN5bmMoc291cmNlRnJhbWUuZWZmZWN0U3R5bGVJZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdncmlkU3R5bGVJZCcgaW4gc291cmNlRnJhbWUgJiYgJ2dyaWRTdHlsZUlkJyBpbiB0YXJnZXRDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHlpZWxkIHRhcmdldENvbXBvbmVudC5zZXRHcmlkU3R5bGVJZEFzeW5jKHNvdXJjZUZyYW1lLmdyaWRTdHlsZUlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ2ZpbGxTdHlsZUlkJyBpbiBzb3VyY2VGcmFtZSAmJiAnZmlsbFN0eWxlSWQnIGluIHRhcmdldENvbXBvbmVudCkge1xuICAgICAgICAgICAgeWllbGQgdGFyZ2V0Q29tcG9uZW50LnNldEZpbGxTdHlsZUlkQXN5bmMoc291cmNlRnJhbWUuZmlsbFN0eWxlSWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnc3Ryb2tlU3R5bGVJZCcgaW4gc291cmNlRnJhbWUgJiYgJ3N0cm9rZVN0eWxlSWQnIGluIHRhcmdldENvbXBvbmVudCkge1xuICAgICAgICAgICAgeWllbGQgdGFyZ2V0Q29tcG9uZW50LnNldFN0cm9rZVN0eWxlSWRBc3luYyhzb3VyY2VGcmFtZS5zdHJva2VTdHlsZUlkKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYmluZFZhcmlhYmxlKHNvdXJjZUZyYW1lLCB0YXJnZXRDb21wb25lbnQsIHByb3BOYW1lLCB2YXJpYWJsZUJpbmRpbmcpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAocHJvcE5hbWUgPT0gJ2ZpbGxzJyAmJiAnZmlsbHMnIGluIHNvdXJjZUZyYW1lICYmICdmaWxscycgaW4gdGFyZ2V0Q29tcG9uZW50ICYmICF0YXJnZXRDb21wb25lbnRbJ2ZpbGxTdHlsZUlkJ10pIHtcbiAgICAgICAgICAgIHRhcmdldENvbXBvbmVudC5maWxscyA9IHlpZWxkIGJpbmRQcm9wZXJ0eVZhcmlhYmxlcyhzb3VyY2VGcmFtZS5maWxscywgZmlnbWEudmFyaWFibGVzLnNldEJvdW5kVmFyaWFibGVGb3JQYWludCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT0gJ3N0cm9rZXMnICYmICdzdHJva2VzJyBpbiBzb3VyY2VGcmFtZSAmJiAnc3Ryb2tlcycgaW4gdGFyZ2V0Q29tcG9uZW50ICYmICF0YXJnZXRDb21wb25lbnRbJ3N0cm9rZVN0eWxlSWQnXSkge1xuICAgICAgICAgICAgdGFyZ2V0Q29tcG9uZW50LnN0cm9rZXMgPSB5aWVsZCBiaW5kUHJvcGVydHlWYXJpYWJsZXMoc291cmNlRnJhbWUuc3Ryb2tlcywgZmlnbWEudmFyaWFibGVzLnNldEJvdW5kVmFyaWFibGVGb3JQYWludCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT0gJ2VmZmVjdHMnICYmICdlZmZlY3RzJyBpbiBzb3VyY2VGcmFtZSAmJiAnZWZmZWN0cycgaW4gdGFyZ2V0Q29tcG9uZW50ICYmICF0YXJnZXRDb21wb25lbnRbJ2VmZmVjdFN0eWxlSWQnXSkge1xuICAgICAgICAgICAgdGFyZ2V0Q29tcG9uZW50LmVmZmVjdHMgPSB5aWVsZCBiaW5kUHJvcGVydHlWYXJpYWJsZXMoc291cmNlRnJhbWUuZWZmZWN0cywgZmlnbWEudmFyaWFibGVzLnNldEJvdW5kVmFyaWFibGVGb3JFZmZlY3QpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3BOYW1lID09ICdsYXlvdXRHcmlkcycgJiYgJ2xheW91dEdyaWRzJyBpbiBzb3VyY2VGcmFtZSAmJiAnbGF5b3V0R3JpZHMnIGluIHRhcmdldENvbXBvbmVudCkge1xuICAgICAgICAgICAgdGFyZ2V0Q29tcG9uZW50LmxheW91dEdyaWRzID0geWllbGQgYmluZFByb3BlcnR5VmFyaWFibGVzKHNvdXJjZUZyYW1lLmxheW91dEdyaWRzLCBmaWdtYS52YXJpYWJsZXMuc2V0Qm91bmRWYXJpYWJsZUZvckxheW91dEdyaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3BOYW1lID09ICdjb21wb25lbnRQcm9wZXJ0aWVzJyB8fCBwcm9wTmFtZSA9PSAndGV4dFJhbmdlRmlsbHMnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFN3YXAgZG9lcyBub3Qgd29yayBmb3IgJHtwcm9wTmFtZX0sIHNraXBwaW5nIG5vZGVgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlID0geWllbGQgZmluZFZhcmlhYmxlTWF0Y2godmFyaWFibGVCaW5kaW5nLmlkKTtcbiAgICAgICAgICAgIGlmICh2YXJpYWJsZSkge1xuICAgICAgICAgICAgICAgIHZhciBhbGlhcyA9IHRhcmdldENvbXBvbmVudC5ib3VuZFZhcmlhYmxlc1twcm9wTmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlLmlkICE9IGFsaWFzLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldENvbXBvbmVudC5zZXRCb3VuZFZhcmlhYmxlKHByb3BOYW1lLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q29tcG9uZW50LnNldEJvdW5kVmFyaWFibGUocHJvcE5hbWUsIHZhcmlhYmxlLmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbiAgICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiByb3VuZFR3b0RpZ2l0cyhudW0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgobnVtICsgTnVtYmVyLkVQU0lMT04pICogMTAwKSAvIDEwMDtcbn1cbiIsImNvbnN0IHNpemVWYWx1ZXNPcmRlciA9IFtcbiAgICAnbm9uZScsXG4gICAgJ3hzNScsXG4gICAgJ3hzNScsXG4gICAgJ3hzMycsXG4gICAgJ3hzMicsXG4gICAgJ3hzJyxcbiAgICAnc20nLFxuICAgICdiYXNlJyxcbiAgICAnbWQnLFxuICAgICdsZycsXG4gICAgJ3hsJyxcbiAgICAneGwyJyxcbiAgICAneGwzJyxcbiAgICAneGw0JyxcbiAgICAneGw1JyxcbiAgICAneGw2JyxcbiAgICAneGw3JyxcbiAgICAncm91bmQnXG5dO1xuY29uc3Qgb3BhY2l0eVZhbHVlc09yZGVyID0gW1xuICAgIFwib3BhY2l0eS0wXCIsXG4gICAgXCJvcGFjaXR5LTVcIixcbiAgICBcIm9wYWNpdHktMTBcIixcbiAgICBcIm9wYWNpdHktMTVcIixcbiAgICBcIm9wYWNpdHktMjBcIixcbiAgICBcIm9wYWNpdHktMjVcIixcbiAgICBcIm9wYWNpdHktMzBcIixcbiAgICBcIm9wYWNpdHktMzVcIixcbiAgICBcIm9wYWNpdHktNDBcIixcbiAgICBcIm9wYWNpdHktNDVcIixcbiAgICBcIm9wYWNpdHktNTBcIixcbiAgICBcIm9wYWNpdHktNTVcIixcbiAgICBcIm9wYWNpdHktNjBcIixcbiAgICBcIm9wYWNpdHktNjVcIixcbiAgICBcIm9wYWNpdHktNzBcIixcbiAgICBcIm9wYWNpdHktNzVcIixcbiAgICBcIm9wYWNpdHktODBcIixcbiAgICBcIm9wYWNpdHktODVcIixcbiAgICBcIm9wYWNpdHktOTBcIixcbiAgICBcIm9wYWNpdHktOTVcIixcbiAgICBcIm9wYWNpdHktMTAwXCIsXG5dO1xuY29uc3QgY29sb3JOYW1lc09yZGVyID0gW1xuICAgICdwcmltYXJ5JyxcbiAgICAnYnJhbmQnLFxuICAgICdmaWxsL2Jhc2UnLFxuICAgICdmaWxsL2NvbnRyYXN0JyxcbiAgICAndGV4dC9iYXNlLzYwMCcsXG4gICAgJ3RleHQvYmFzZS81MDAnLFxuICAgICd0ZXh0L2Jhc2UvNDAwJyxcbiAgICAndGV4dC9iYXNlL2FjdGlvbicsXG4gICAgJ3RleHQvYmFzZS9pbmZvJyxcbiAgICAndGV4dC9iYXNlL3N1Y2Nlc3MnLFxuICAgICd0ZXh0L2Jhc2Uvd2FybmluZycsXG4gICAgJ3RleHQvYmFzZS9kYW5nZXInLFxuICAgICd0ZXh0L2NvbnRyYXN0LzYwMCcsXG4gICAgJ3RleHQvY29udHJhc3QvNTAwJyxcbiAgICAndGV4dC9jb250cmFzdC80MDAnLFxuICAgICd0ZXh0L2NvbnRyYXN0L2FjdGlvbicsXG4gICAgJ3RleHQvY29udHJhc3QvaW5mbycsXG4gICAgJ3RleHQvY29udHJhc3Qvc3VjY2VzcycsXG4gICAgJ3RleHQvY29udHJhc3Qvd2FybmluZycsXG4gICAgJ3RleHQvY29udHJhc3QvZGFuZ2VyJyxcbiAgICAnc3Ryb2tlL2Jhc2UnLFxuICAgICdzdHJva2UvY29udHJhc3QnLFxuICAgICdpbmZvJyxcbiAgICAnc3VjY2VzcycsXG4gICAgJ3dhcm5pbmcnLFxuICAgICdkYW5nZXInLFxuICAgICdhbHQvYmFzZScsXG4gICAgJ2FsdC9jb250cmFzdCcsXG4gICAgJ3V0aWxpdHknLFxuICAgICdhY2NlbnQvcmVkJyxcbiAgICAnYWNjZW50L2FtYmVyJyxcbiAgICAnYWNjZW50L2Jyb3duJyxcbiAgICAnYWNjZW50L2dyZWVuJyxcbiAgICAnYWNjZW50L3RlYWwnLFxuICAgICdhY2NlbnQvY3lhbicsXG4gICAgJ2FjY2VudC9ibHVlJyxcbiAgICAnYWNjZW50L2luZGlnbycsXG4gICAgJ2FjY2VudC92aW9sZXQnLFxuICAgICdhY2NlbnQvcHVycGxlJyxcbiAgICAnYWNjZW50L3BpbmsnLFxuICAgICd1aS1lbGVtZW50L2JnL3Jlc3QnLFxuICAgICd1aS1lbGVtZW50L2JnL2hvdmVyJyxcbiAgICAndWktZWxlbWVudC9iZy9hY3RpdmUnLFxuICAgICd1aS1lbGVtZW50L2JnL3NlbGVjdGVkJyxcbiAgICAndWktZWxlbWVudC9iZy9kaXNhYmxlZCcsXG4gICAgJ3VpLWVsZW1lbnQvYm9yZGVyL3Jlc3QnLFxuICAgICd1aS1lbGVtZW50L2JvcmRlci9ob3ZlcicsXG4gICAgJ3VpLWVsZW1lbnQvYm9yZGVyL2FjdGl2ZScsXG4gICAgJ3VpLWVsZW1lbnQvYm9yZGVyL3NlbGVjdGVkJyxcbiAgICAndWktZWxlbWVudC9ib3JkZXIvZGlzYWJsZWQnLFxuICAgICd1aS1lbGVtZW50L3RleHQnLFxuICAgICdidXR0b24vYmcvcmVzdCcsXG4gICAgJ2J1dHRvbi9iZy9ob3ZlcicsXG4gICAgJ2J1dHRvbi9iZy9hY3RpdmUnLFxuICAgICdidXR0b24vcHJpbWFyeScsXG4gICAgJ2J1dHRvbi9zdWNjZXNzJyxcbiAgICAnYnV0dG9uL2RhbmdlcicsXG4gICAgJ2J1dHRvbi9ib3JkZXIvcmVzdCcsXG4gICAgJ2J1dHRvbi9ib3JkZXIvaG92ZXInLFxuICAgICdidXR0b24vYm9yZGVyL2FjdGl2ZScsXG4gICAgJ2Zvcm0tZWxlbWVudC9iZy9yZXN0JyxcbiAgICAnZm9ybS1lbGVtZW50L2JnL3JlYWRvbmx5JyxcbiAgICAnZm9ybS1lbGVtZW50L2JnL2hvdmVyJyxcbiAgICAnZm9ybS1lbGVtZW50L2JvcmRlci9yZXN0JyxcbiAgICAnZm9ybS1lbGVtZW50L2JvcmRlci9yZWFkb25seScsXG4gICAgJ2Zvcm0tZWxlbWVudC9ib3JkZXIvaG92ZXInLFxuICAgICdjYXJkL2JnL3ByaW1hcnknLFxuICAgICdjYXJkL2JnL3NlY29uZGFyeScsXG4gICAgJ2NhcmQvYm9yZGVyL2lubmVyJyxcbiAgICAnY2FyZC9ib3JkZXIvb3V0ZXInLFxuICAgICdvdmVybGF5L2JnJyxcbiAgICAnb3ZlcmxheS9ib3JkZXInLFxuXTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb2xvclRva2Vuc1NvcnRGbigpIHtcbiAgICByZXR1cm4gZ2V0U29ydEZuKGNvbG9yTmFtZXNPcmRlcik7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2l6ZVRva2Vuc1NvcnRGbigpIHtcbiAgICByZXR1cm4gZ2V0U29ydEZuKHNpemVWYWx1ZXNPcmRlcik7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxwaGFOdW1Ub2tlbnNTb3J0Rm4oKSB7XG4gICAgdmFyIGNvbGxhdG9yID0gbmV3IEludGwuQ29sbGF0b3IodW5kZWZpbmVkLCB7IG51bWVyaWM6IHRydWUsIHNlbnNpdGl2aXR5OiAnYmFzZScgfSk7XG4gICAgcmV0dXJuIGNvbGxhdG9yLmNvbXBhcmU7XG59XG5mdW5jdGlvbiBnZXRTb3J0Rm4oZGF0YVNldCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZmlyc3RFbCwgc2Vjb25kRWwpIHtcbiAgICAgICAgdmFyIHJlc3VsdEZpcnN0ID0gZGF0YVNldC5maW5kSW5kZXgoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3RFbC5uYW1lLmVuZHNXaXRoKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHJlc3VsdFNlY29uZCA9IGRhdGFTZXQuZmluZEluZGV4KGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHNlY29uZEVsLm5hbWUuZW5kc1dpdGgoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzdWx0Rmlyc3QgPCByZXN1bHRTZWNvbmQpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTsgLy8gZmlyc3RFbCBnb2VzIGZpcnN0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdEZpcnN0ID4gcmVzdWx0U2Vjb25kKSB7XG4gICAgICAgICAgICByZXR1cm4gMTsgLy8gc2Vjb25kRWwgZ29lcyBmaXJzdFxuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHRGaXJzdCA9PT0gcmVzdWx0U2Vjb25kKSB7XG4gICAgICAgICAgICBsZXQgbmFtZTEgPSBmaXJzdEVsLm5hbWU7XG4gICAgICAgICAgICBsZXQgbmFtZTIgPSBzZWNvbmRFbC5uYW1lO1xuICAgICAgICAgICAgaWYgKG5hbWUxIDwgbmFtZTIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7IC8vIGZpcnN0RWwgZ29lcyBmaXJzdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5hbWUxID4gbmFtZTIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTsgLy8gc2Vjb25kRWwgZ29lcyBmaXJzdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7IC8vIGtlZXAgb3JpZ2luYWwgb3JkZXIgICAgXG4gICAgfTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZGVsYXlBc3luYyB9IGZyb20gXCIuL2RlbGF5LWFzeW5jXCI7XG5pbXBvcnQgeyBfY2xvbmUgfSBmcm9tIFwiLi9jbG9uZVwiO1xubGV0IHRvdGFsTGF5ZXJzQ291bnQgPSAwO1xubGV0IHJlYm91bmRMYXllcnNDb3VudCA9IDA7XG5sZXQgc2tpcHBlZExheWVyc0NvdW50ID0gMDtcbmxldCBtaXNzaW5nTGF5ZXJzQ291bnQgPSAwO1xubGV0IGltcG9ydGFkVmFyaWFibGVzTGlicmFyeTtcbmZ1bmN0aW9uIGdldFZhcmlhYmxlTmFtZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZS5uYW1lO1xuICAgIHJldHVybiBuYW1lLnJlcGxhY2VBbGwoJ3N4JywgJ3NwYWNpbmcnKS5yZXBsYWNlQWxsKCdzeScsICdzcGFjaW5nL21pbm9yJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmluZFZhcmlhYmxlTWF0Y2godmFySWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IHlpZWxkIGZpZ21hLnZhcmlhYmxlcy5nZXRWYXJpYWJsZUJ5SWRBc3luYyh2YXJJZCk7XG4gICAgICAgIGlmICghdmFyaWFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5hbWUgPSBnZXRWYXJpYWJsZU5hbWUodmFyaWFibGUpO1xuICAgICAgICBjb25zdCB0YXJnZXRWYXJpYWJsZSA9IGltcG9ydGFkVmFyaWFibGVzTGlicmFyeS5maW5kKHZhcmlhYmxlID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2YXJpYWJsZS5uYW1lID09IG5hbWU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXRhcmdldFZhcmlhYmxlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYENhbm5vdCBmaW5kICR7dmFyaWFibGUubmFtZX1gKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgaWYgKHRhcmdldFZhcmlhYmxlLmlkID09IHZhcmlhYmxlLmlkKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7dmFyaWFibGUubmFtZX0gaXMgYSBsb2NhbCB2YXJpYWJsZWApO1xuICAgICAgICAgICAgc2tpcHBlZExheWVyc0NvdW50Kys7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0VmFyaWFibGU7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBwcm9jZXNzTGF5ZXIobm9kZSwgY291bnQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBib3VuZFZhaXJhYmxlcyA9IE9iamVjdC5lbnRyaWVzKG5vZGUuYm91bmRWYXJpYWJsZXMpO1xuICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChib3VuZFZhaXJhYmxlcy5tYXAoKFtwcm9wTmFtZSwgYm91bmRWYXJdKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4geWllbGQgYmluZFZhcmlhYmxlKG5vZGUsIHByb3BOYW1lLCBib3VuZFZhcikuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnIgKyBgJHtwcm9wTmFtZX1gO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpOyAvLyBzb21lIGNvZGluZyBlcnJvciBpbiBoYW5kbGluZyBoYXBwZW5lZFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNvdW50ICUgNTAgPT0gMCkge1xuICAgICAgICAgICAgeWllbGQgZGVsYXlBc3luYygxKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRQcm9wZXJ0eVZhcmlhYmxlcyhwcm9wcywgZmlnbWFGbikge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBjb25zdCBwcm9wc0NvcHkgPSBfY2xvbmUocHJvcHMpO1xuICAgICAgICBmb3IgKGxldCBwcm9wIG9mIHByb3BzQ29weSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBmaWVsZCBpbiBwcm9wLmJvdW5kVmFyaWFibGVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxpYXMgPSBwcm9wLmJvdW5kVmFyaWFibGVzW2ZpZWxkXTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZSA9IHlpZWxkIGZpbmRWYXJpYWJsZU1hdGNoKGFsaWFzLmlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJlYWQgPSBwcm9wWydzcHJlYWQnXTsgLy93b3JrYXJvdW5kIEZpZ21hIGJ1Zy4gSXQgcmVzZXRzIHNwcmVhZCBhZnRlciBjYWxsaW5nIGZpZ21hLnZhcmlhYmxlcy5zZXRCb3VuZFZhcmlhYmxlRm9yRWZmZWN0XG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHByb3AuYm91bmRWYXJpYWJsZXMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcCA9IGZpZ21hRm4ocHJvcCwgZmllbGQsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wID0gZmlnbWFGbihwcm9wLCBmaWVsZCwgdmFyaWFibGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNwcmVhZCAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBwcm9wWydzcHJlYWQnXSA9IHNwcmVhZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChwcm9wKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gYmluZFZhcmlhYmxlKG5vZGUsIHByb3BOYW1lLCB2YXJpYWJsZUJpbmRpbmcpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAocHJvcE5hbWUgPT0gJ2ZpbGxzJyAmJiAnZmlsbHMnIGluIG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUuZmlsbHMgPSB5aWVsZCBiaW5kUHJvcGVydHlWYXJpYWJsZXMobm9kZS5maWxscywgZmlnbWEudmFyaWFibGVzLnNldEJvdW5kVmFyaWFibGVGb3JQYWludCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT0gJ3N0cm9rZXMnICYmICdzdHJva2VzJyBpbiBub2RlKSB7XG4gICAgICAgICAgICBub2RlLnN0cm9rZXMgPSB5aWVsZCBiaW5kUHJvcGVydHlWYXJpYWJsZXMobm9kZS5zdHJva2VzLCBmaWdtYS52YXJpYWJsZXMuc2V0Qm91bmRWYXJpYWJsZUZvclBhaW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wTmFtZSA9PSAnZWZmZWN0cycgJiYgJ2VmZmVjdHMnIGluIG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUuZWZmZWN0cyA9IHlpZWxkIGJpbmRQcm9wZXJ0eVZhcmlhYmxlcyhub2RlLmVmZmVjdHMsIGZpZ21hLnZhcmlhYmxlcy5zZXRCb3VuZFZhcmlhYmxlRm9yRWZmZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wTmFtZSA9PSAnbGF5b3V0R3JpZHMnICYmICdsYXlvdXRHcmlkcycgaW4gbm9kZSkge1xuICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IHlpZWxkIGJpbmRQcm9wZXJ0eVZhcmlhYmxlcyhub2RlLmxheW91dEdyaWRzLCBmaWdtYS52YXJpYWJsZXMuc2V0Qm91bmRWYXJpYWJsZUZvckxheW91dEdyaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3BOYW1lID09ICdjb21wb25lbnRQcm9wZXJ0aWVzJyB8fCBwcm9wTmFtZSA9PSAndGV4dFJhbmdlRmlsbHMnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFN3YXAgZG9lcyBub3Qgd29yayBmb3IgJHtwcm9wTmFtZX0sIHNraXBwaW5nIG5vZGVgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlID0geWllbGQgZmluZFZhcmlhYmxlTWF0Y2godmFyaWFibGVCaW5kaW5nLmlkKTtcbiAgICAgICAgICAgIGlmICh2YXJpYWJsZSkge1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0Qm91bmRWYXJpYWJsZShwcm9wTmFtZSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKHByb3BOYW1lLCB2YXJpYWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdG9UaXRsZUNhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHdcXFMqL2csIGZ1bmN0aW9uICh0eHQpIHtcbiAgICAgICAgcmV0dXJuIHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYW1lbFRvVGl0bGUoY2FtZWxDYXNlKSB7XG4gICAgLy8gbm8gc2lkZS1lZmZlY3RzXG4gICAgcmV0dXJuIGNhbWVsQ2FzZVxuICAgICAgICAvLyBpbmplY3Qgc3BhY2UgYmVmb3JlIHRoZSB1cHBlciBjYXNlIGxldHRlcnNcbiAgICAgICAgLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBcIiBcIiArIG1hdGNoO1xuICAgIH0pXG4gICAgICAgIC8vIHJlcGxhY2UgZmlyc3QgY2hhciB3aXRoIHVwcGVyIGNhc2VcbiAgICAgICAgLnJlcGxhY2UoL14uLywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBtYXRjaC50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBmaW5kRmlnbWFWYXJpYWJsZUJ5TmFtZSB9IGZyb20gXCIuL2ZpZ21hLXZhcmlhYmxlc1wiO1xuY29uc3QgYWxpYXNSZWdleCA9IC9cXHsoLis/KSguKz8pXFx9L2c7XG5leHBvcnQgZnVuY3Rpb24gZmluZFRva2VuUmVmZXJlbmNlcyh0b2tlblZhbHVlKSB7XG4gICAgcmV0dXJuIHRva2VuVmFsdWUgPT09IG51bGwgfHwgdG9rZW5WYWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdG9rZW5WYWx1ZS50b1N0cmluZygpLm1hdGNoKGFsaWFzUmVnZXgpO1xufVxuO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZmVyZW5jZU5hbWUocmVmZXJlbmNlKSB7XG4gICAgbGV0IG5hbWUgPSByZWZlcmVuY2UucmVwbGFjZSgvey9nLCBcIlwiKTtcbiAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC99L2csIFwiXCIpO1xuICAgIHJldHVybiBuYW1lO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRWYXJpYWJsZUJ5UmVmZXJlbmNlcyh2YWx1ZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCByZWZlcmVuY2VzID0gZmluZFRva2VuUmVmZXJlbmNlcyh2YWx1ZSk7XG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgcmVmZXJlbmNlIG9mIHJlZmVyZW5jZXMgfHwgW10pIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gZ2V0UmVmZXJlbmNlTmFtZShyZWZlcmVuY2UpO1xuICAgICAgICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvXFwuL2csIFwiL1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGZpZ21hVmFyaWFibGUgPSB5aWVsZCBmaW5kRmlnbWFWYXJpYWJsZUJ5TmFtZShuYW1lKTtcbiAgICAgICAgICAgIGlmIChmaWdtYVZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGZpZ21hVmFyaWFibGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBmaW5kVmFyaWFibGVCeVJlZmVyZW5jZXMoKSBjYWxsIGZhaWxlZCAtPiBjYW5ub3QgZmluZCB2YWx1ZSBmb3IgJHtyZWZlcmVuY2V9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHNbMF07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmaW5kR2xvYmFsVG9rZW5CeU5hbWUobmFtZSwgZGljdGlvbmFyeSkge1xuICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1xcLi9nLCBcIi9cIik7XG4gICAgY29uc3QgdG9rZW4gPSBkaWN0aW9uYXJ5W25hbWVdO1xuICAgIGlmICghdG9rZW4pXG4gICAgICAgIGRlYnVnZ2VyO1xuICAgIHJldHVybiB0b2tlbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlZmVyZW5jZUdsb2JhbCh2YWx1ZSwgZGljdGlvbmFyeSkge1xuICAgIGxldCByZWZlcmVuY2VzID0gZmluZFRva2VuUmVmZXJlbmNlcyh2YWx1ZSk7XG4gICAgbGV0IHJlc3VsdCA9IHZhbHVlO1xuICAgIHJlZmVyZW5jZXMgPT09IG51bGwgfHwgcmVmZXJlbmNlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmZXJlbmNlcy5mb3JFYWNoKHJlZmVyZW5jZSA9PiB7XG4gICAgICAgIGxldCBuYW1lID0gZ2V0UmVmZXJlbmNlTmFtZShyZWZlcmVuY2UpO1xuICAgICAgICBjb25zdCBnbG9iYWxUb2tlbiA9IGZpbmRHbG9iYWxUb2tlbkJ5TmFtZShuYW1lLCBkaWN0aW9uYXJ5KTtcbiAgICAgICAgaWYgKGdsb2JhbFRva2VuKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShyZWZlcmVuY2UsIGdsb2JhbFRva2VuLiR2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYHBhcnNlUmVmZXJlbmNlR2xvYmFsKCkgY2FsbCBmYWlsZWQgLT4gY2Fubm90IGZpbmQgcmVmZXJlbmNlIGZvciAke3ZhbHVlfWApO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY2hlY2sgPSBmaW5kVG9rZW5SZWZlcmVuY2VzKHJlc3VsdCk7XG4gICAgaWYgKGNoZWNrICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlUmVmZXJlbmNlR2xvYmFsKHJlc3VsdCwgZGljdGlvbmFyeSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB1cGRhdGVFbGV2YXRpb25Db21wb25lbnRzKHRva2Vucykge1xuICAgIGZpZ21hLnNraXBJbnZpc2libGVJbnN0YW5jZUNoaWxkcmVuID0gdHJ1ZTtcbiAgICBjb25zdCBwYWdlQ29tcG9uZW50cyA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRBbGxXaXRoQ3JpdGVyaWEoeyB0eXBlczogWydDT01QT05FTlQnXSB9KTtcbiAgICBjb25zdCBlbGV2YXRpb25Db21wb25lbnRzID0gcGFnZUNvbXBvbmVudHMuZmlsdGVyKG5vZGUgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gbm9kZS5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBuYW1lLnN0YXJ0c1dpdGgoJ3NoYWRvdycpO1xuICAgIH0pO1xuICAgIGlmIChlbGV2YXRpb25Db21wb25lbnRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oJ05vIGVsZXZhdGlvbiBjb21wb25lbnRzIGhhcyBiZWVuIGZvdW5kJyk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHRva2VucykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgY29uc3QgdmFyaWFudHMgPSB0b2tlbnNbbmFtZV07XG4gICAgICAgIGNvbnN0IFtzaGFkZSwgdG9rZW5dID0gT2JqZWN0LmVudHJpZXModmFyaWFudHMpWzBdO1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRva2VuWyckdmFsdWUnXTtcbiAgICAgICAgY29uc3QgZWxldmF0aW9uQ29tcG9uZW50ID0gZWxldmF0aW9uQ29tcG9uZW50cy5maW5kKG5vZGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZU5vcm1hbGl6ZWQgPSBuYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkucmVwbGFjZSgvLS9nLCBcIiBcIik7XG4gICAgICAgICAgICBjb25zdCBub2RlTmFtZU5vcm1hbGl6ZWQgPSBub2RlLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKS5yZXBsYWNlKC8tL2csIFwiIFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5hbWVOb3JtYWxpemVkLCBub2RlTmFtZU5vcm1hbGl6ZWQpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVOYW1lTm9ybWFsaXplZC5pbmRleE9mKG5hbWVOb3JtYWxpemVkKSA+IC0xO1xuICAgICAgICB9KTtcbiAgICAgICAgcHJvY2Vzc0NvbXBvbmVudChzZXR0aW5ncywgZWxldmF0aW9uQ29tcG9uZW50KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNsb25lKHZhbCkge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsO1xuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdudW1iZXInIHx8XG4gICAgICAgIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWwubWFwKHggPT4gY2xvbmUoeCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSh2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IG8gPSB7fTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbCkge1xuICAgICAgICAgICAgICAgIG9ba2V5XSA9IGNsb25lKHZhbFtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93ICd1bmtub3duJztcbn1cbmZ1bmN0aW9uIHByb2Nlc3NDb21wb25lbnQoZWZmZWN0cywgY29tcG9uZW50KSB7XG4gICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgICAgdGhyb3cgKCdFbGV2YXRpb24gY29tcG9uZW50IHdhcyBub3QgZm91bmQnKTtcbiAgICB9XG4gICAgY29uc3Qgc2hhZG93TGF5ZXJzID0gY29tcG9uZW50LmZpbmRDaGlsZHJlbihub2RlID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IG5vZGUubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbmFtZS5zdGFydHNXaXRoKCdzaGFkb3cnKTtcbiAgICB9KTtcbiAgICBjb25zdCBtYXNrTGF5ZXIgPSBjb21wb25lbnQuZmluZENoaWxkKG5vZGUgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZS5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09ICdtYXNrJztcbiAgICB9KTtcbiAgICBtYXNrTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xuICAgIGRlYnVnZ2VyO1xuICAgIGVmZmVjdHMuZm9yRWFjaCgoc2hhZG93U2V0dGluZ3MsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNoYWRvd0xheWVyID0gc2hhZG93TGF5ZXJzW2luZGV4XTtcbiAgICAgICAgY29uc3QgeCA9IHBhcnNlRmxvYXQoc2hhZG93U2V0dGluZ3MueCk7XG4gICAgICAgIGNvbnN0IHkgPSBwYXJzZUZsb2F0KHNoYWRvd1NldHRpbmdzLnkpO1xuICAgICAgICBjb25zdCByYWRpdXMgPSBwYXJzZUZsb2F0KHNoYWRvd1NldHRpbmdzLmJsdXIpO1xuICAgICAgICBjb25zdCBzcHJlYWQgPSBwYXJzZUZsb2F0KHNoYWRvd1NldHRpbmdzLnNwcmVhZCk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gY29tcG9uZW50LndpZHRoICsgKDIgKiBzcHJlYWQpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBjb21wb25lbnQuaGVpZ2h0ICsgKDIgKiBzcHJlYWQpO1xuICAgICAgICBjb25zdCBsZWZ0ID0geCAtIHNwcmVhZDtcbiAgICAgICAgY29uc3QgdG9wID0geSAtIHNwcmVhZDtcbiAgICAgICAgY29uc3QgYmx1ciA9IHtcbiAgICAgICAgICAgIHR5cGU6IFwiTEFZRVJfQkxVUlwiLFxuICAgICAgICAgICAgcmFkaXVzOiByYWRpdXMsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIHNoYWRvd0xheWVyLmVmZmVjdHMgPSBbYmx1cl07XG4gICAgICAgIHNoYWRvd0xheWVyLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgc2hhZG93TGF5ZXIueCA9IGxlZnQ7XG4gICAgICAgIHNoYWRvd0xheWVyLnkgPSB0b3A7XG4gICAgfSk7XG4gICAgY29uc3QgYWJzb2x1dGVCb3VuZGluZ0JveCA9IGNvbXBvbmVudC5hYnNvbHV0ZUJvdW5kaW5nQm94O1xuICAgIGNvbnN0IGFic29sdXRlUmVuZGVyQm91bmRzID0gY29tcG9uZW50LmFic29sdXRlUmVuZGVyQm91bmRzO1xuICAgIGNvbnN0IG1hc2tXaWR0aCA9IGFic29sdXRlUmVuZGVyQm91bmRzLndpZHRoO1xuICAgIGNvbnN0IG1hc2tIZWlnaHQgPSBhYnNvbHV0ZVJlbmRlckJvdW5kcy5oZWlnaHQ7XG4gICAgY29uc3QgbWFza0xlZnQgPSAoYWJzb2x1dGVSZW5kZXJCb3VuZHMueCAtIGFic29sdXRlQm91bmRpbmdCb3gueCk7XG4gICAgY29uc3QgbWFza1RvcCA9IChhYnNvbHV0ZVJlbmRlckJvdW5kcy55IC0gYWJzb2x1dGVCb3VuZGluZ0JveC55KTtcbiAgICBjb25zdCBpbm5lckxheWVyID0gbWFza0xheWVyLmZpbmRDaGlsZChub2RlID0+IG5vZGUubmFtZSA9PT0gJ2lubmVyJyk7XG4gICAgY29uc3Qgb3V0ZXJMYXllciA9IG1hc2tMYXllci5maW5kQ2hpbGQobm9kZSA9PiBub2RlLm5hbWUgPT09ICdvdXRlcicpO1xuICAgIG91dGVyTGF5ZXIucmVzaXplKG1hc2tXaWR0aCwgbWFza0hlaWdodCk7XG4gICAgb3V0ZXJMYXllci54ID0gbWFza0xlZnQ7XG4gICAgb3V0ZXJMYXllci55ID0gbWFza1RvcDtcbiAgICBpbm5lckxheWVyLnJlc2l6ZShjb21wb25lbnQud2lkdGgsIGNvbXBvbmVudC5oZWlnaHQpO1xuICAgIGlubmVyTGF5ZXIueCA9IDA7XG4gICAgaW5uZXJMYXllci55ID0gMDtcbiAgICBtYXNrTGF5ZXIudmlzaWJsZSA9IHRydWU7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmNvbnNvbGUuY2xlYXIoKTtcbmZ1bmN0aW9uIGdldFN0eWxlQnlOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBzdHlsZXMgPSB5aWVsZCBmaWdtYS5nZXRMb2NhbFBhaW50U3R5bGVzQXN5bmMoKTtcbiAgICAgICAgcmV0dXJuIHN0eWxlcy5maW5kKChzdHlsZSkgPT4gc3R5bGUubmFtZSA9PT0gbmFtZSk7XG4gICAgfSk7XG59XG47XG5mdW5jdGlvbiBnZXRGaWdtYUNvbG9yKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgcjogMSxcbiAgICAgICAgICAgIGc6IDEsXG4gICAgICAgICAgICBiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICB9O1xufVxuO1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmRWYXJpYWJsZXNBbmRTdHlsZXMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVzID0geWllbGQgZmlnbWEudmFyaWFibGVzLmdldExvY2FsVmFyaWFibGVzQXN5bmMoKTtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgdmFyaWFibGVzLmZvckVhY2goKHZhcmlhYmxlKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdmFyaWFibGUubmFtZTtcbiAgICAgICAgICAgIGxldCBzdHlsZSA9IHlpZWxkIGdldFN0eWxlQnlOYW1lKG5hbWUpO1xuICAgICAgICAgICAgaWYgKHZhcmlhYmxlLnJlc29sdmVkVHlwZSAhPT0gJ0NPTE9SJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3R5bGUpIHtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgIHN0eWxlID0gZmlnbWEuY3JlYXRlUGFpbnRTdHlsZSgpO1xuICAgICAgICAgICAgICAgIHN0eWxlLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgICAgIHN0eWxlLnBhaW50cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgZ2V0RmlnbWFDb2xvcigpXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBuZXdQYWludHMgPSBzdHlsZS5wYWludHMubWFwKChwYWludCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaWdtYS52YXJpYWJsZXMuc2V0Qm91bmRWYXJpYWJsZUZvclBhaW50KHBhaW50LCAnY29sb3InLCB2YXJpYWJsZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN0eWxlLnBhaW50cyA9IG5ld1BhaW50cztcbiAgICAgICAgfSkpO1xuICAgICAgICBmaWdtYS5ub3RpZnkoYOKchSBWYXJpYWJsZXMgYW5kIHN0eWxlcyBhcmUgbm93IGNvbm5lY3RlZC4gJHtjb3VudH0gc3R5bGVzIGNyZWF0ZWRgKTtcbiAgICB9KTtcbn1cbiIsIi8qKlxuICogY2hyb21hLmpzIC0gSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBjb2xvciBjb252ZXJzaW9uc1xuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMS0yMDE5LCBHcmVnb3IgQWlzY2hcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4gKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAxLiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAqIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICpcbiAqIDIuIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiAqIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb25cbiAqIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICpcbiAqIDMuIFRoZSBuYW1lIEdyZWdvciBBaXNjaCBtYXkgbm90IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzXG4gKiBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuICogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuICogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFXG4gKiBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBHUkVHT1IgQUlTQ0ggT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcbiAqIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLFxuICogQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUllcbiAqIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HXG4gKiBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsXG4gKiBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqXG4gKiBjaHJvbWEuanMgaW5jbHVkZXMgY29sb3JzIGZyb20gY29sb3JicmV3ZXIyLm9yZywgd2hpY2ggYXJlIHJlbGVhc2VkIHVuZGVyXG4gKiB0aGUgZm9sbG93aW5nIGxpY2Vuc2U6XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDAyIEN5bnRoaWEgQnJld2VyLCBNYXJrIEhhcnJvd2VyLFxuICogYW5kIFRoZSBQZW5uc3lsdmFuaWEgU3RhdGUgVW5pdmVyc2l0eS5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiAqIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljXG4gKiBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICpcbiAqIE5hbWVkIGNvbG9ycyBhcmUgdGFrZW4gZnJvbSBYMTEgQ29sb3IgTmFtZXMuXG4gKiBodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWNvbG9yLyNzdmctY29sb3JcbiAqXG4gKiBAcHJlc2VydmVcbiAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAgIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5jaHJvbWEgPSBmYWN0b3J5KCkpO1xufSkodGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGxpbWl0JDIgPSBmdW5jdGlvbiAoeCwgbWluLCBtYXgpIHtcbiAgICAgICAgaWYgKCBtaW4gPT09IHZvaWQgMCApIG1pbj0wO1xuICAgICAgICBpZiAoIG1heCA9PT0gdm9pZCAwICkgbWF4PTE7XG5cbiAgICAgICAgcmV0dXJuIHggPCBtaW4gPyBtaW4gOiB4ID4gbWF4ID8gbWF4IDogeDtcbiAgICB9O1xuXG4gICAgdmFyIGxpbWl0JDEgPSBsaW1pdCQyO1xuXG4gICAgdmFyIGNsaXBfcmdiJDMgPSBmdW5jdGlvbiAocmdiKSB7XG4gICAgICAgIHJnYi5fY2xpcHBlZCA9IGZhbHNlO1xuICAgICAgICByZ2IuX3VuY2xpcHBlZCA9IHJnYi5zbGljZSgwKTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPD0zOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIDwgMykge1xuICAgICAgICAgICAgICAgIGlmIChyZ2JbaV0gPCAwIHx8IHJnYltpXSA+IDI1NSkgeyByZ2IuX2NsaXBwZWQgPSB0cnVlOyB9XG4gICAgICAgICAgICAgICAgcmdiW2ldID0gbGltaXQkMShyZ2JbaV0sIDAsIDI1NSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZ2JbaV0gPSBsaW1pdCQxKHJnYltpXSwgMCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJnYjtcbiAgICB9O1xuXG4gICAgLy8gcG9ydGVkIGZyb20galF1ZXJ5J3MgJC50eXBlXG4gICAgdmFyIGNsYXNzVG9UeXBlID0ge307XG4gICAgZm9yICh2YXIgaSQxID0gMCwgbGlzdCQxID0gWydCb29sZWFuJywgJ051bWJlcicsICdTdHJpbmcnLCAnRnVuY3Rpb24nLCAnQXJyYXknLCAnRGF0ZScsICdSZWdFeHAnLCAnVW5kZWZpbmVkJywgJ051bGwnXTsgaSQxIDwgbGlzdCQxLmxlbmd0aDsgaSQxICs9IDEpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBsaXN0JDFbaSQxXTtcblxuICAgICAgICBjbGFzc1RvVHlwZVsoXCJbb2JqZWN0IFwiICsgbmFtZSArIFwiXVwiKV0gPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIHZhciB0eXBlJHAgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIGNsYXNzVG9UeXBlW09iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopXSB8fCBcIm9iamVjdFwiO1xuICAgIH07XG5cbiAgICB2YXIgdHlwZSRvID0gdHlwZSRwO1xuXG4gICAgdmFyIHVucGFjayRCID0gZnVuY3Rpb24gKGFyZ3MsIGtleU9yZGVyKSB7XG4gICAgICAgIGlmICgga2V5T3JkZXIgPT09IHZvaWQgMCApIGtleU9yZGVyPW51bGw7XG5cbiAgICBcdC8vIGlmIGNhbGxlZCB3aXRoIG1vcmUgdGhhbiAzIGFyZ3VtZW50cywgd2UgcmV0dXJuIHRoZSBhcmd1bWVudHNcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID49IDMpIHsgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpOyB9XG4gICAgICAgIC8vIHdpdGggbGVzcyB0aGFuIDMgYXJncyB3ZSBjaGVjayBpZiBmaXJzdCBhcmcgaXMgb2JqZWN0XG4gICAgICAgIC8vIGFuZCB1c2UgdGhlIGtleU9yZGVyIHN0cmluZyB0byBleHRyYWN0IGFuZCBzb3J0IHByb3BlcnRpZXNcbiAgICBcdGlmICh0eXBlJG8oYXJnc1swXSkgPT0gJ29iamVjdCcgJiYga2V5T3JkZXIpIHtcbiAgICBcdFx0cmV0dXJuIGtleU9yZGVyLnNwbGl0KCcnKVxuICAgIFx0XHRcdC5maWx0ZXIoZnVuY3Rpb24gKGspIHsgcmV0dXJuIGFyZ3NbMF1ba10gIT09IHVuZGVmaW5lZDsgfSlcbiAgICBcdFx0XHQubWFwKGZ1bmN0aW9uIChrKSB7IHJldHVybiBhcmdzWzBdW2tdOyB9KTtcbiAgICBcdH1cbiAgICBcdC8vIG90aGVyd2lzZSB3ZSBqdXN0IHJldHVybiB0aGUgZmlyc3QgYXJndW1lbnRcbiAgICBcdC8vICh3aGljaCB3ZSBzdXBwb3NlIGlzIGFuIGFycmF5IG9mIGFyZ3MpXG4gICAgICAgIHJldHVybiBhcmdzWzBdO1xuICAgIH07XG5cbiAgICB2YXIgdHlwZSRuID0gdHlwZSRwO1xuXG4gICAgdmFyIGxhc3QkNCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IDIpIHsgcmV0dXJuIG51bGw7IH1cbiAgICAgICAgdmFyIGwgPSBhcmdzLmxlbmd0aC0xO1xuICAgICAgICBpZiAodHlwZSRuKGFyZ3NbbF0pID09ICdzdHJpbmcnKSB7IHJldHVybiBhcmdzW2xdLnRvTG93ZXJDYXNlKCk7IH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIHZhciBQSSQyID0gTWF0aC5QSTtcblxuICAgIHZhciB1dGlscyA9IHtcbiAgICBcdGNsaXBfcmdiOiBjbGlwX3JnYiQzLFxuICAgIFx0bGltaXQ6IGxpbWl0JDIsXG4gICAgXHR0eXBlOiB0eXBlJHAsXG4gICAgXHR1bnBhY2s6IHVucGFjayRCLFxuICAgIFx0bGFzdDogbGFzdCQ0LFxuICAgIFx0UEk6IFBJJDIsXG4gICAgXHRUV09QSTogUEkkMioyLFxuICAgIFx0UElUSElSRDogUEkkMi8zLFxuICAgIFx0REVHMlJBRDogUEkkMiAvIDE4MCxcbiAgICBcdFJBRDJERUc6IDE4MCAvIFBJJDJcbiAgICB9O1xuXG4gICAgdmFyIGlucHV0JGggPSB7XG4gICAgXHRmb3JtYXQ6IHt9LFxuICAgIFx0YXV0b2RldGVjdDogW11cbiAgICB9O1xuXG4gICAgdmFyIGxhc3QkMyA9IHV0aWxzLmxhc3Q7XG4gICAgdmFyIGNsaXBfcmdiJDIgPSB1dGlscy5jbGlwX3JnYjtcbiAgICB2YXIgdHlwZSRtID0gdXRpbHMudHlwZTtcbiAgICB2YXIgX2lucHV0ID0gaW5wdXQkaDtcblxuICAgIHZhciBDb2xvciREID0gZnVuY3Rpb24gQ29sb3IoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgaWYgKHR5cGUkbShhcmdzWzBdKSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgIGFyZ3NbMF0uY29uc3RydWN0b3IgJiZcbiAgICAgICAgICAgIGFyZ3NbMF0uY29uc3RydWN0b3IgPT09IHRoaXMuY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIC8vIHRoZSBhcmd1bWVudCBpcyBhbHJlYWR5IGEgQ29sb3IgaW5zdGFuY2VcbiAgICAgICAgICAgIHJldHVybiBhcmdzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGFzdCBhcmd1bWVudCBjb3VsZCBiZSB0aGUgbW9kZVxuICAgICAgICB2YXIgbW9kZSA9IGxhc3QkMyhhcmdzKTtcbiAgICAgICAgdmFyIGF1dG9kZXRlY3QgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIW1vZGUpIHtcbiAgICAgICAgICAgIGF1dG9kZXRlY3QgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCFfaW5wdXQuc29ydGVkKSB7XG4gICAgICAgICAgICAgICAgX2lucHV0LmF1dG9kZXRlY3QgPSBfaW5wdXQuYXV0b2RldGVjdC5zb3J0KGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIGIucCAtIGEucDsgfSk7XG4gICAgICAgICAgICAgICAgX2lucHV0LnNvcnRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhdXRvLWRldGVjdCBmb3JtYXRcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gX2lucHV0LmF1dG9kZXRlY3Q7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoayA9IGxpc3RbaV07XG5cbiAgICAgICAgICAgICAgICBtb2RlID0gY2hrLnRlc3QuYXBwbHkoY2hrLCBhcmdzKTtcbiAgICAgICAgICAgICAgICBpZiAobW9kZSkgeyBicmVhazsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9pbnB1dC5mb3JtYXRbbW9kZV0pIHtcbiAgICAgICAgICAgIHZhciByZ2IgPSBfaW5wdXQuZm9ybWF0W21vZGVdLmFwcGx5KG51bGwsIGF1dG9kZXRlY3QgPyBhcmdzIDogYXJncy5zbGljZSgwLC0xKSk7XG4gICAgICAgICAgICBtZS5fcmdiID0gY2xpcF9yZ2IkMihyZ2IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIGZvcm1hdDogJythcmdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBhbHBoYSBjaGFubmVsXG4gICAgICAgIGlmIChtZS5fcmdiLmxlbmd0aCA9PT0gMykgeyBtZS5fcmdiLnB1c2goMSk7IH1cbiAgICB9O1xuXG4gICAgQ29sb3IkRC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gICAgICAgIGlmICh0eXBlJG0odGhpcy5oZXgpID09ICdmdW5jdGlvbicpIHsgcmV0dXJuIHRoaXMuaGV4KCk7IH1cbiAgICAgICAgcmV0dXJuIChcIltcIiArICh0aGlzLl9yZ2Iuam9pbignLCcpKSArIFwiXVwiKTtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yXzEgPSBDb2xvciREO1xuXG4gICAgdmFyIGNocm9tYSRrID0gZnVuY3Rpb24gKCkge1xuICAgIFx0dmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBcdHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICBcdHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBjaHJvbWEkay5Db2xvciwgWyBudWxsIF0uY29uY2F0KCBhcmdzKSApKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJGsuQ29sb3IgPSBDb2xvcl8xO1xuICAgIGNocm9tYSRrLnZlcnNpb24gPSAnMi40LjInO1xuXG4gICAgdmFyIGNocm9tYV8xID0gY2hyb21hJGs7XG5cbiAgICB2YXIgdW5wYWNrJEEgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIG1heCQyID0gTWF0aC5tYXg7XG5cbiAgICB2YXIgcmdiMmNteWskMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJEEoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICByID0gciAvIDI1NTtcbiAgICAgICAgZyA9IGcgLyAyNTU7XG4gICAgICAgIGIgPSBiIC8gMjU1O1xuICAgICAgICB2YXIgayA9IDEgLSBtYXgkMihyLG1heCQyKGcsYikpO1xuICAgICAgICB2YXIgZiA9IGsgPCAxID8gMSAvICgxLWspIDogMDtcbiAgICAgICAgdmFyIGMgPSAoMS1yLWspICogZjtcbiAgICAgICAgdmFyIG0gPSAoMS1nLWspICogZjtcbiAgICAgICAgdmFyIHkgPSAoMS1iLWspICogZjtcbiAgICAgICAgcmV0dXJuIFtjLG0seSxrXTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJjbXlrXzEgPSByZ2IyY215ayQxO1xuXG4gICAgdmFyIHVucGFjayR6ID0gdXRpbHMudW5wYWNrO1xuXG4gICAgdmFyIGNteWsycmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIGFyZ3MgPSB1bnBhY2skeihhcmdzLCAnY215aycpO1xuICAgICAgICB2YXIgYyA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBtID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIHkgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgayA9IGFyZ3NbM107XG4gICAgICAgIHZhciBhbHBoYSA9IGFyZ3MubGVuZ3RoID4gNCA/IGFyZ3NbNF0gOiAxO1xuICAgICAgICBpZiAoayA9PT0gMSkgeyByZXR1cm4gWzAsMCwwLGFscGhhXTsgfVxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgYyA+PSAxID8gMCA6IDI1NSAqICgxLWMpICogKDEtayksIC8vIHJcbiAgICAgICAgICAgIG0gPj0gMSA/IDAgOiAyNTUgKiAoMS1tKSAqICgxLWspLCAvLyBnXG4gICAgICAgICAgICB5ID49IDEgPyAwIDogMjU1ICogKDEteSkgKiAoMS1rKSwgLy8gYlxuICAgICAgICAgICAgYWxwaGFcbiAgICAgICAgXTtcbiAgICB9O1xuXG4gICAgdmFyIGNteWsycmdiXzEgPSBjbXlrMnJnYjtcblxuICAgIHZhciBjaHJvbWEkaiA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciRDID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkZyA9IGlucHV0JGg7XG4gICAgdmFyIHVucGFjayR5ID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJGwgPSB1dGlscy50eXBlO1xuXG4gICAgdmFyIHJnYjJjbXlrID0gcmdiMmNteWtfMTtcblxuICAgIENvbG9yJEMucHJvdG90eXBlLmNteWsgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJjbXlrKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSRqLmNteWsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJEMsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydjbXlrJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCRnLmZvcm1hdC5jbXlrID0gY215azJyZ2JfMTtcblxuICAgIGlucHV0JGcuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMixcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skeShhcmdzLCAnY215aycpO1xuICAgICAgICAgICAgaWYgKHR5cGUkbChhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnY215ayc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skeCA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbGFzdCQyID0gdXRpbHMubGFzdDtcbiAgICB2YXIgcm5kID0gZnVuY3Rpb24gKGEpIHsgcmV0dXJuIE1hdGgucm91bmQoYSoxMDApLzEwMDsgfTtcblxuICAgIC8qXG4gICAgICogc3VwcG9ydGVkIGFyZ3VtZW50czpcbiAgICAgKiAtIGhzbDJjc3MoaCxzLGwpXG4gICAgICogLSBoc2wyY3NzKGgscyxsLGEpXG4gICAgICogLSBoc2wyY3NzKFtoLHMsbF0sIG1vZGUpXG4gICAgICogLSBoc2wyY3NzKFtoLHMsbCxhXSwgbW9kZSlcbiAgICAgKiAtIGhzbDJjc3Moe2gscyxsLGF9LCBtb2RlKVxuICAgICAqL1xuICAgIHZhciBoc2wyY3NzJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIGhzbGEgPSB1bnBhY2skeChhcmdzLCAnaHNsYScpO1xuICAgICAgICB2YXIgbW9kZSA9IGxhc3QkMihhcmdzKSB8fCAnbHNhJztcbiAgICAgICAgaHNsYVswXSA9IHJuZChoc2xhWzBdIHx8IDApO1xuICAgICAgICBoc2xhWzFdID0gcm5kKGhzbGFbMV0qMTAwKSArICclJztcbiAgICAgICAgaHNsYVsyXSA9IHJuZChoc2xhWzJdKjEwMCkgKyAnJSc7XG4gICAgICAgIGlmIChtb2RlID09PSAnaHNsYScgfHwgKGhzbGEubGVuZ3RoID4gMyAmJiBoc2xhWzNdPDEpKSB7XG4gICAgICAgICAgICBoc2xhWzNdID0gaHNsYS5sZW5ndGggPiAzID8gaHNsYVszXSA6IDE7XG4gICAgICAgICAgICBtb2RlID0gJ2hzbGEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHNsYS5sZW5ndGggPSAzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAobW9kZSArIFwiKFwiICsgKGhzbGEuam9pbignLCcpKSArIFwiKVwiKTtcbiAgICB9O1xuXG4gICAgdmFyIGhzbDJjc3NfMSA9IGhzbDJjc3MkMTtcblxuICAgIHZhciB1bnBhY2skdyA9IHV0aWxzLnVucGFjaztcblxuICAgIC8qXG4gICAgICogc3VwcG9ydGVkIGFyZ3VtZW50czpcbiAgICAgKiAtIHJnYjJoc2wocixnLGIpXG4gICAgICogLSByZ2IyaHNsKHIsZyxiLGEpXG4gICAgICogLSByZ2IyaHNsKFtyLGcsYl0pXG4gICAgICogLSByZ2IyaHNsKFtyLGcsYixhXSlcbiAgICAgKiAtIHJnYjJoc2woe3IsZyxiLGF9KVxuICAgICAqL1xuICAgIHZhciByZ2IyaHNsJDMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgYXJncyA9IHVucGFjayR3KGFyZ3MsICdyZ2JhJyk7XG4gICAgICAgIHZhciByID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGcgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgYiA9IGFyZ3NbMl07XG5cbiAgICAgICAgciAvPSAyNTU7XG4gICAgICAgIGcgLz0gMjU1O1xuICAgICAgICBiIC89IDI1NTtcblxuICAgICAgICB2YXIgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcblxuICAgICAgICB2YXIgbCA9IChtYXggKyBtaW4pIC8gMjtcbiAgICAgICAgdmFyIHMsIGg7XG5cbiAgICAgICAgaWYgKG1heCA9PT0gbWluKXtcbiAgICAgICAgICAgIHMgPSAwO1xuICAgICAgICAgICAgaCA9IE51bWJlci5OYU47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzID0gbCA8IDAuNSA/IChtYXggLSBtaW4pIC8gKG1heCArIG1pbikgOiAobWF4IC0gbWluKSAvICgyIC0gbWF4IC0gbWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyID09IG1heCkgeyBoID0gKGcgLSBiKSAvIChtYXggLSBtaW4pOyB9XG4gICAgICAgIGVsc2UgaWYgKGcgPT0gbWF4KSB7IGggPSAyICsgKGIgLSByKSAvIChtYXggLSBtaW4pOyB9XG4gICAgICAgIGVsc2UgaWYgKGIgPT0gbWF4KSB7IGggPSA0ICsgKHIgLSBnKSAvIChtYXggLSBtaW4pOyB9XG5cbiAgICAgICAgaCAqPSA2MDtcbiAgICAgICAgaWYgKGggPCAwKSB7IGggKz0gMzYwOyB9XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aD4zICYmIGFyZ3NbM10hPT11bmRlZmluZWQpIHsgcmV0dXJuIFtoLHMsbCxhcmdzWzNdXTsgfVxuICAgICAgICByZXR1cm4gW2gscyxsXTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJoc2xfMSA9IHJnYjJoc2wkMztcblxuICAgIHZhciB1bnBhY2skdiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbGFzdCQxID0gdXRpbHMubGFzdDtcbiAgICB2YXIgaHNsMmNzcyA9IGhzbDJjc3NfMTtcbiAgICB2YXIgcmdiMmhzbCQyID0gcmdiMmhzbF8xO1xuICAgIHZhciByb3VuZCQ2ID0gTWF0aC5yb3VuZDtcblxuICAgIC8qXG4gICAgICogc3VwcG9ydGVkIGFyZ3VtZW50czpcbiAgICAgKiAtIHJnYjJjc3MocixnLGIpXG4gICAgICogLSByZ2IyY3NzKHIsZyxiLGEpXG4gICAgICogLSByZ2IyY3NzKFtyLGcsYl0sIG1vZGUpXG4gICAgICogLSByZ2IyY3NzKFtyLGcsYixhXSwgbW9kZSlcbiAgICAgKiAtIHJnYjJjc3Moe3IsZyxiLGF9LCBtb2RlKVxuICAgICAqL1xuICAgIHZhciByZ2IyY3NzJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJnYmEgPSB1bnBhY2skdihhcmdzLCAncmdiYScpO1xuICAgICAgICB2YXIgbW9kZSA9IGxhc3QkMShhcmdzKSB8fCAncmdiJztcbiAgICAgICAgaWYgKG1vZGUuc3Vic3RyKDAsMykgPT0gJ2hzbCcpIHtcbiAgICAgICAgICAgIHJldHVybiBoc2wyY3NzKHJnYjJoc2wkMihyZ2JhKSwgbW9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmdiYVswXSA9IHJvdW5kJDYocmdiYVswXSk7XG4gICAgICAgIHJnYmFbMV0gPSByb3VuZCQ2KHJnYmFbMV0pO1xuICAgICAgICByZ2JhWzJdID0gcm91bmQkNihyZ2JhWzJdKTtcbiAgICAgICAgaWYgKG1vZGUgPT09ICdyZ2JhJyB8fCAocmdiYS5sZW5ndGggPiAzICYmIHJnYmFbM108MSkpIHtcbiAgICAgICAgICAgIHJnYmFbM10gPSByZ2JhLmxlbmd0aCA+IDMgPyByZ2JhWzNdIDogMTtcbiAgICAgICAgICAgIG1vZGUgPSAncmdiYSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChtb2RlICsgXCIoXCIgKyAocmdiYS5zbGljZSgwLG1vZGU9PT0ncmdiJz8zOjQpLmpvaW4oJywnKSkgKyBcIilcIik7XG4gICAgfTtcblxuICAgIHZhciByZ2IyY3NzXzEgPSByZ2IyY3NzJDE7XG5cbiAgICB2YXIgdW5wYWNrJHUgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHJvdW5kJDUgPSBNYXRoLnJvdW5kO1xuXG4gICAgdmFyIGhzbDJyZ2IkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFzc2lnbjtcblxuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuICAgICAgICBhcmdzID0gdW5wYWNrJHUoYXJncywgJ2hzbCcpO1xuICAgICAgICB2YXIgaCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBzID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGwgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgcixnLGI7XG4gICAgICAgIGlmIChzID09PSAwKSB7XG4gICAgICAgICAgICByID0gZyA9IGIgPSBsKjI1NTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0MyA9IFswLDAsMF07XG4gICAgICAgICAgICB2YXIgYyA9IFswLDAsMF07XG4gICAgICAgICAgICB2YXIgdDIgPSBsIDwgMC41ID8gbCAqICgxK3MpIDogbCtzLWwqcztcbiAgICAgICAgICAgIHZhciB0MSA9IDIgKiBsIC0gdDI7XG4gICAgICAgICAgICB2YXIgaF8gPSBoIC8gMzYwO1xuICAgICAgICAgICAgdDNbMF0gPSBoXyArIDEvMztcbiAgICAgICAgICAgIHQzWzFdID0gaF87XG4gICAgICAgICAgICB0M1syXSA9IGhfIC0gMS8zO1xuICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPDM7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0M1tpXSA8IDApIHsgdDNbaV0gKz0gMTsgfVxuICAgICAgICAgICAgICAgIGlmICh0M1tpXSA+IDEpIHsgdDNbaV0gLT0gMTsgfVxuICAgICAgICAgICAgICAgIGlmICg2ICogdDNbaV0gPCAxKVxuICAgICAgICAgICAgICAgICAgICB7IGNbaV0gPSB0MSArICh0MiAtIHQxKSAqIDYgKiB0M1tpXTsgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKDIgKiB0M1tpXSA8IDEpXG4gICAgICAgICAgICAgICAgICAgIHsgY1tpXSA9IHQyOyB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoMyAqIHQzW2ldIDwgMilcbiAgICAgICAgICAgICAgICAgICAgeyBjW2ldID0gdDEgKyAodDIgLSB0MSkgKiAoKDIgLyAzKSAtIHQzW2ldKSAqIDY7IH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHsgY1tpXSA9IHQxOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoYXNzaWduID0gW3JvdW5kJDUoY1swXSoyNTUpLHJvdW5kJDUoY1sxXSoyNTUpLHJvdW5kJDUoY1syXSoyNTUpXSwgciA9IGFzc2lnblswXSwgZyA9IGFzc2lnblsxXSwgYiA9IGFzc2lnblsyXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgLy8ga2VlcCBhbHBoYSBjaGFubmVsXG4gICAgICAgICAgICByZXR1cm4gW3IsZyxiLGFyZ3NbM11dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbcixnLGIsMV07XG4gICAgfTtcblxuICAgIHZhciBoc2wycmdiXzEgPSBoc2wycmdiJDE7XG5cbiAgICB2YXIgaHNsMnJnYiA9IGhzbDJyZ2JfMTtcbiAgICB2YXIgaW5wdXQkZiA9IGlucHV0JGg7XG5cbiAgICB2YXIgUkVfUkdCID0gL15yZ2JcXChcXHMqKC0/XFxkKyksXFxzKigtP1xcZCspXFxzKixcXHMqKC0/XFxkKylcXHMqXFwpJC87XG4gICAgdmFyIFJFX1JHQkEgPSAvXnJnYmFcXChcXHMqKC0/XFxkKyksXFxzKigtP1xcZCspXFxzKixcXHMqKC0/XFxkKylcXHMqLFxccyooWzAxXXxbMDFdP1xcLlxcZCspXFwpJC87XG4gICAgdmFyIFJFX1JHQl9QQ1QgPSAvXnJnYlxcKFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSUsXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccypcXCkkLztcbiAgICB2YXIgUkVfUkdCQV9QQ1QgPSAvXnJnYmFcXChcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqLFxccyooWzAxXXxbMDFdP1xcLlxcZCspXFwpJC87XG4gICAgdmFyIFJFX0hTTCA9IC9eaHNsXFwoXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqXFwpJC87XG4gICAgdmFyIFJFX0hTTEEgPSAvXmhzbGFcXChcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyksXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKihbMDFdfFswMV0/XFwuXFxkKylcXCkkLztcblxuICAgIHZhciByb3VuZCQ0ID0gTWF0aC5yb3VuZDtcblxuICAgIHZhciBjc3MycmdiJDEgPSBmdW5jdGlvbiAoY3NzKSB7XG4gICAgICAgIGNzcyA9IGNzcy50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICAgICAgdmFyIG07XG5cbiAgICAgICAgaWYgKGlucHV0JGYuZm9ybWF0Lm5hbWVkKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dCRmLmZvcm1hdC5uYW1lZChjc3MpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmdiKDI1MCwyMCwwKVxuICAgICAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfUkdCKSkpIHtcbiAgICAgICAgICAgIHZhciByZ2IgPSBtLnNsaWNlKDEsNCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8MzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmdiW2ldID0gK3JnYltpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJnYlszXSA9IDE7ICAvLyBkZWZhdWx0IGFscGhhXG4gICAgICAgICAgICByZXR1cm4gcmdiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmdiYSgyNTAsMjAsMCwwLjQpXG4gICAgICAgIGlmICgobSA9IGNzcy5tYXRjaChSRV9SR0JBKSkpIHtcbiAgICAgICAgICAgIHZhciByZ2IkMSA9IG0uc2xpY2UoMSw1KTtcbiAgICAgICAgICAgIGZvciAodmFyIGkkMT0wOyBpJDE8NDsgaSQxKyspIHtcbiAgICAgICAgICAgICAgICByZ2IkMVtpJDFdID0gK3JnYiQxW2kkMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmdiJDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZ2IoMTAwJSwwJSwwJSlcbiAgICAgICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX1JHQl9QQ1QpKSkge1xuICAgICAgICAgICAgdmFyIHJnYiQyID0gbS5zbGljZSgxLDQpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQyPTA7IGkkMjwzOyBpJDIrKykge1xuICAgICAgICAgICAgICAgIHJnYiQyW2kkMl0gPSByb3VuZCQ0KHJnYiQyW2kkMl0gKiAyLjU1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJnYiQyWzNdID0gMTsgIC8vIGRlZmF1bHQgYWxwaGFcbiAgICAgICAgICAgIHJldHVybiByZ2IkMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJnYmEoMTAwJSwwJSwwJSwwLjQpXG4gICAgICAgIGlmICgobSA9IGNzcy5tYXRjaChSRV9SR0JBX1BDVCkpKSB7XG4gICAgICAgICAgICB2YXIgcmdiJDMgPSBtLnNsaWNlKDEsNSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDM9MDsgaSQzPDM7IGkkMysrKSB7XG4gICAgICAgICAgICAgICAgcmdiJDNbaSQzXSA9IHJvdW5kJDQocmdiJDNbaSQzXSAqIDIuNTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmdiJDNbM10gPSArcmdiJDNbM107XG4gICAgICAgICAgICByZXR1cm4gcmdiJDM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoc2woMCwxMDAlLDUwJSlcbiAgICAgICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX0hTTCkpKSB7XG4gICAgICAgICAgICB2YXIgaHNsID0gbS5zbGljZSgxLDQpO1xuICAgICAgICAgICAgaHNsWzFdICo9IDAuMDE7XG4gICAgICAgICAgICBoc2xbMl0gKj0gMC4wMTtcbiAgICAgICAgICAgIHZhciByZ2IkNCA9IGhzbDJyZ2IoaHNsKTtcbiAgICAgICAgICAgIHJnYiQ0WzNdID0gMTtcbiAgICAgICAgICAgIHJldHVybiByZ2IkNDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhzbGEoMCwxMDAlLDUwJSwwLjUpXG4gICAgICAgIGlmICgobSA9IGNzcy5tYXRjaChSRV9IU0xBKSkpIHtcbiAgICAgICAgICAgIHZhciBoc2wkMSA9IG0uc2xpY2UoMSw0KTtcbiAgICAgICAgICAgIGhzbCQxWzFdICo9IDAuMDE7XG4gICAgICAgICAgICBoc2wkMVsyXSAqPSAwLjAxO1xuICAgICAgICAgICAgdmFyIHJnYiQ1ID0gaHNsMnJnYihoc2wkMSk7XG4gICAgICAgICAgICByZ2IkNVszXSA9ICttWzRdOyAgLy8gZGVmYXVsdCBhbHBoYSA9IDFcbiAgICAgICAgICAgIHJldHVybiByZ2IkNTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjc3MycmdiJDEudGVzdCA9IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHJldHVybiBSRV9SR0IudGVzdChzKSB8fFxuICAgICAgICAgICAgUkVfUkdCQS50ZXN0KHMpIHx8XG4gICAgICAgICAgICBSRV9SR0JfUENULnRlc3QocykgfHxcbiAgICAgICAgICAgIFJFX1JHQkFfUENULnRlc3QocykgfHxcbiAgICAgICAgICAgIFJFX0hTTC50ZXN0KHMpIHx8XG4gICAgICAgICAgICBSRV9IU0xBLnRlc3Qocyk7XG4gICAgfTtcblxuICAgIHZhciBjc3MycmdiXzEgPSBjc3MycmdiJDE7XG5cbiAgICB2YXIgY2hyb21hJGkgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkQiA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JGUgPSBpbnB1dCRoO1xuICAgIHZhciB0eXBlJGsgPSB1dGlscy50eXBlO1xuXG4gICAgdmFyIHJnYjJjc3MgPSByZ2IyY3NzXzE7XG4gICAgdmFyIGNzczJyZ2IgPSBjc3MycmdiXzE7XG5cbiAgICBDb2xvciRCLnByb3RvdHlwZS5jc3MgPSBmdW5jdGlvbihtb2RlKSB7XG4gICAgICAgIHJldHVybiByZ2IyY3NzKHRoaXMuX3JnYiwgbW9kZSk7XG4gICAgfTtcblxuICAgIGNocm9tYSRpLmNzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkQiwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2NzcyddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkZS5mb3JtYXQuY3NzID0gY3NzMnJnYjtcblxuICAgIGlucHV0JGUuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogNSxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgICAgIHZhciByZXN0ID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSA+IDAgKSByZXN0WyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG4gICAgICAgICAgICBpZiAoIXJlc3QubGVuZ3RoICYmIHR5cGUkayhoKSA9PT0gJ3N0cmluZycgJiYgY3NzMnJnYi50ZXN0KGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdjc3MnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgQ29sb3IkQSA9IENvbG9yXzE7XG4gICAgdmFyIGNocm9tYSRoID0gY2hyb21hXzE7XG4gICAgdmFyIGlucHV0JGQgPSBpbnB1dCRoO1xuICAgIHZhciB1bnBhY2skdCA9IHV0aWxzLnVucGFjaztcblxuICAgIGlucHV0JGQuZm9ybWF0LmdsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZ2IgPSB1bnBhY2skdChhcmdzLCAncmdiYScpO1xuICAgICAgICByZ2JbMF0gKj0gMjU1O1xuICAgICAgICByZ2JbMV0gKj0gMjU1O1xuICAgICAgICByZ2JbMl0gKj0gMjU1O1xuICAgICAgICByZXR1cm4gcmdiO1xuICAgIH07XG5cbiAgICBjaHJvbWEkaC5nbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkQSwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2dsJ10pICkpO1xuICAgIH07XG5cbiAgICBDb2xvciRBLnByb3RvdHlwZS5nbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmdiID0gdGhpcy5fcmdiO1xuICAgICAgICByZXR1cm4gW3JnYlswXS8yNTUsIHJnYlsxXS8yNTUsIHJnYlsyXS8yNTUsIHJnYlszXV07XG4gICAgfTtcblxuICAgIHZhciB1bnBhY2skcyA9IHV0aWxzLnVucGFjaztcblxuICAgIHZhciByZ2IyaGNnJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRzKGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgICAgIHZhciBkZWx0YSA9IG1heCAtIG1pbjtcbiAgICAgICAgdmFyIGMgPSBkZWx0YSAqIDEwMCAvIDI1NTtcbiAgICAgICAgdmFyIF9nID0gbWluIC8gKDI1NSAtIGRlbHRhKSAqIDEwMDtcbiAgICAgICAgdmFyIGg7XG4gICAgICAgIGlmIChkZWx0YSA9PT0gMCkge1xuICAgICAgICAgICAgaCA9IE51bWJlci5OYU47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAociA9PT0gbWF4KSB7IGggPSAoZyAtIGIpIC8gZGVsdGE7IH1cbiAgICAgICAgICAgIGlmIChnID09PSBtYXgpIHsgaCA9IDIrKGIgLSByKSAvIGRlbHRhOyB9XG4gICAgICAgICAgICBpZiAoYiA9PT0gbWF4KSB7IGggPSA0KyhyIC0gZykgLyBkZWx0YTsgfVxuICAgICAgICAgICAgaCAqPSA2MDtcbiAgICAgICAgICAgIGlmIChoIDwgMCkgeyBoICs9IDM2MDsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbaCwgYywgX2ddO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMmhjZ18xID0gcmdiMmhjZyQxO1xuXG4gICAgdmFyIHVucGFjayRyID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBmbG9vciQzID0gTWF0aC5mbG9vcjtcblxuICAgIC8qXG4gICAgICogdGhpcyBpcyBiYXNpY2FsbHkganVzdCBIU1Ygd2l0aCBzb21lIG1pbm9yIHR3ZWFrc1xuICAgICAqXG4gICAgICogaHVlLi4gWzAuLjM2MF1cbiAgICAgKiBjaHJvbWEgLi4gWzAuLjFdXG4gICAgICogZ3JheW5lc3MgLi4gWzAuLjFdXG4gICAgICovXG5cbiAgICB2YXIgaGNnMnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFzc2lnbiwgYXNzaWduJDEsIGFzc2lnbiQyLCBhc3NpZ24kMywgYXNzaWduJDQsIGFzc2lnbiQ1O1xuXG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG4gICAgICAgIGFyZ3MgPSB1bnBhY2skcihhcmdzLCAnaGNnJyk7XG4gICAgICAgIHZhciBoID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGMgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgX2cgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgcixnLGI7XG4gICAgICAgIF9nID0gX2cgKiAyNTU7XG4gICAgICAgIHZhciBfYyA9IGMgKiAyNTU7XG4gICAgICAgIGlmIChjID09PSAwKSB7XG4gICAgICAgICAgICByID0gZyA9IGIgPSBfZztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChoID09PSAzNjApIHsgaCA9IDA7IH1cbiAgICAgICAgICAgIGlmIChoID4gMzYwKSB7IGggLT0gMzYwOyB9XG4gICAgICAgICAgICBpZiAoaCA8IDApIHsgaCArPSAzNjA7IH1cbiAgICAgICAgICAgIGggLz0gNjA7XG4gICAgICAgICAgICB2YXIgaSA9IGZsb29yJDMoaCk7XG4gICAgICAgICAgICB2YXIgZiA9IGggLSBpO1xuICAgICAgICAgICAgdmFyIHAgPSBfZyAqICgxIC0gYyk7XG4gICAgICAgICAgICB2YXIgcSA9IHAgKyBfYyAqICgxIC0gZik7XG4gICAgICAgICAgICB2YXIgdCA9IHAgKyBfYyAqIGY7XG4gICAgICAgICAgICB2YXIgdiA9IHAgKyBfYztcbiAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogKGFzc2lnbiA9IFt2LCB0LCBwXSwgciA9IGFzc2lnblswXSwgZyA9IGFzc2lnblsxXSwgYiA9IGFzc2lnblsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAxOiAoYXNzaWduJDEgPSBbcSwgdiwgcF0sIHIgPSBhc3NpZ24kMVswXSwgZyA9IGFzc2lnbiQxWzFdLCBiID0gYXNzaWduJDFbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMjogKGFzc2lnbiQyID0gW3AsIHYsIHRdLCByID0gYXNzaWduJDJbMF0sIGcgPSBhc3NpZ24kMlsxXSwgYiA9IGFzc2lnbiQyWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDM6IChhc3NpZ24kMyA9IFtwLCBxLCB2XSwgciA9IGFzc2lnbiQzWzBdLCBnID0gYXNzaWduJDNbMV0sIGIgPSBhc3NpZ24kM1syXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSA0OiAoYXNzaWduJDQgPSBbdCwgcCwgdl0sIHIgPSBhc3NpZ24kNFswXSwgZyA9IGFzc2lnbiQ0WzFdLCBiID0gYXNzaWduJDRbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgNTogKGFzc2lnbiQ1ID0gW3YsIHAsIHFdLCByID0gYXNzaWduJDVbMF0sIGcgPSBhc3NpZ24kNVsxXSwgYiA9IGFzc2lnbiQ1WzJdKTsgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3IsIGcsIGIsIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXTtcbiAgICB9O1xuXG4gICAgdmFyIGhjZzJyZ2JfMSA9IGhjZzJyZ2I7XG5cbiAgICB2YXIgdW5wYWNrJHEgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkaiA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGNocm9tYSRnID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJHogPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCRjID0gaW5wdXQkaDtcblxuICAgIHZhciByZ2IyaGNnID0gcmdiMmhjZ18xO1xuXG4gICAgQ29sb3Ikei5wcm90b3R5cGUuaGNnID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IyaGNnKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSRnLmhjZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkeiwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2hjZyddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkYy5mb3JtYXQuaGNnID0gaGNnMnJnYl8xO1xuXG4gICAgaW5wdXQkYy5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAxLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayRxKGFyZ3MsICdoY2cnKTtcbiAgICAgICAgICAgIGlmICh0eXBlJGooYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hjZyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skcCA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbGFzdCA9IHV0aWxzLmxhc3Q7XG4gICAgdmFyIHJvdW5kJDMgPSBNYXRoLnJvdW5kO1xuXG4gICAgdmFyIHJnYjJoZXgkMiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJHAoYXJncywgJ3JnYmEnKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgdmFyIGEgPSByZWZbM107XG4gICAgICAgIHZhciBtb2RlID0gbGFzdChhcmdzKSB8fCAnYXV0byc7XG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHsgYSA9IDE7IH1cbiAgICAgICAgaWYgKG1vZGUgPT09ICdhdXRvJykge1xuICAgICAgICAgICAgbW9kZSA9IGEgPCAxID8gJ3JnYmEnIDogJ3JnYic7XG4gICAgICAgIH1cbiAgICAgICAgciA9IHJvdW5kJDMocik7XG4gICAgICAgIGcgPSByb3VuZCQzKGcpO1xuICAgICAgICBiID0gcm91bmQkMyhiKTtcbiAgICAgICAgdmFyIHUgPSByIDw8IDE2IHwgZyA8PCA4IHwgYjtcbiAgICAgICAgdmFyIHN0ciA9IFwiMDAwMDAwXCIgKyB1LnRvU3RyaW5nKDE2KTsgLy8jLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIHN0ciA9IHN0ci5zdWJzdHIoc3RyLmxlbmd0aCAtIDYpO1xuICAgICAgICB2YXIgaHhhID0gJzAnICsgcm91bmQkMyhhICogMjU1KS50b1N0cmluZygxNik7XG4gICAgICAgIGh4YSA9IGh4YS5zdWJzdHIoaHhhLmxlbmd0aCAtIDIpO1xuICAgICAgICBzd2l0Y2ggKG1vZGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSAncmdiYSc6IHJldHVybiAoXCIjXCIgKyBzdHIgKyBoeGEpO1xuICAgICAgICAgICAgY2FzZSAnYXJnYic6IHJldHVybiAoXCIjXCIgKyBoeGEgKyBzdHIpO1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIChcIiNcIiArIHN0cik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJnYjJoZXhfMSA9IHJnYjJoZXgkMjtcblxuICAgIHZhciBSRV9IRVggPSAvXiM/KFtBLUZhLWYwLTldezZ9fFtBLUZhLWYwLTldezN9KSQvO1xuICAgIHZhciBSRV9IRVhBID0gL14jPyhbQS1GYS1mMC05XXs4fXxbQS1GYS1mMC05XXs0fSkkLztcblxuICAgIHZhciBoZXgycmdiJDEgPSBmdW5jdGlvbiAoaGV4KSB7XG4gICAgICAgIGlmIChoZXgubWF0Y2goUkVfSEVYKSkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIG9wdGlvbmFsIGxlYWRpbmcgI1xuICAgICAgICAgICAgaWYgKGhleC5sZW5ndGggPT09IDQgfHwgaGV4Lmxlbmd0aCA9PT0gNykge1xuICAgICAgICAgICAgICAgIGhleCA9IGhleC5zdWJzdHIoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBleHBhbmQgc2hvcnQtbm90YXRpb24gdG8gZnVsbCBzaXgtZGlnaXRcbiAgICAgICAgICAgIGlmIChoZXgubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgaGV4ID0gaGV4LnNwbGl0KCcnKTtcbiAgICAgICAgICAgICAgICBoZXggPSBoZXhbMF0raGV4WzBdK2hleFsxXStoZXhbMV0raGV4WzJdK2hleFsyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1ID0gcGFyc2VJbnQoaGV4LCAxNik7XG4gICAgICAgICAgICB2YXIgciA9IHUgPj4gMTY7XG4gICAgICAgICAgICB2YXIgZyA9IHUgPj4gOCAmIDB4RkY7XG4gICAgICAgICAgICB2YXIgYiA9IHUgJiAweEZGO1xuICAgICAgICAgICAgcmV0dXJuIFtyLGcsYiwxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1hdGNoIHJnYmEgaGV4IGZvcm1hdCwgZWcgI0ZGMDAwMDc3XG4gICAgICAgIGlmIChoZXgubWF0Y2goUkVfSEVYQSkpIHtcbiAgICAgICAgICAgIGlmIChoZXgubGVuZ3RoID09PSA1IHx8IGhleC5sZW5ndGggPT09IDkpIHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgb3B0aW9uYWwgbGVhZGluZyAjXG4gICAgICAgICAgICAgICAgaGV4ID0gaGV4LnN1YnN0cigxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGV4cGFuZCBzaG9ydC1ub3RhdGlvbiB0byBmdWxsIGVpZ2h0LWRpZ2l0XG4gICAgICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGhleCA9IGhleC5zcGxpdCgnJyk7XG4gICAgICAgICAgICAgICAgaGV4ID0gaGV4WzBdK2hleFswXStoZXhbMV0raGV4WzFdK2hleFsyXStoZXhbMl0raGV4WzNdK2hleFszXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1JDEgPSBwYXJzZUludChoZXgsIDE2KTtcbiAgICAgICAgICAgIHZhciByJDEgPSB1JDEgPj4gMjQgJiAweEZGO1xuICAgICAgICAgICAgdmFyIGckMSA9IHUkMSA+PiAxNiAmIDB4RkY7XG4gICAgICAgICAgICB2YXIgYiQxID0gdSQxID4+IDggJiAweEZGO1xuICAgICAgICAgICAgdmFyIGEgPSBNYXRoLnJvdW5kKCh1JDEgJiAweEZGKSAvIDB4RkYgKiAxMDApIC8gMTAwO1xuICAgICAgICAgICAgcmV0dXJuIFtyJDEsZyQxLGIkMSxhXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHdlIHVzZWQgdG8gY2hlY2sgZm9yIGNzcyBjb2xvcnMgaGVyZVxuICAgICAgICAvLyBpZiBfaW5wdXQuY3NzPyBhbmQgcmdiID0gX2lucHV0LmNzcyBoZXhcbiAgICAgICAgLy8gICAgIHJldHVybiByZ2JcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKFwidW5rbm93biBoZXggY29sb3I6IFwiICsgaGV4KSk7XG4gICAgfTtcblxuICAgIHZhciBoZXgycmdiXzEgPSBoZXgycmdiJDE7XG5cbiAgICB2YXIgY2hyb21hJGYgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkeSA9IENvbG9yXzE7XG4gICAgdmFyIHR5cGUkaSA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGlucHV0JGIgPSBpbnB1dCRoO1xuXG4gICAgdmFyIHJnYjJoZXgkMSA9IHJnYjJoZXhfMTtcblxuICAgIENvbG9yJHkucHJvdG90eXBlLmhleCA9IGZ1bmN0aW9uKG1vZGUpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJoZXgkMSh0aGlzLl9yZ2IsIG1vZGUpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkZi5oZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHksIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydoZXgnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JGIuZm9ybWF0LmhleCA9IGhleDJyZ2JfMTtcbiAgICBpbnB1dCRiLmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDQsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uIChoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdCA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gPiAwICkgcmVzdFsgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDEgXTtcblxuICAgICAgICAgICAgaWYgKCFyZXN0Lmxlbmd0aCAmJiB0eXBlJGkoaCkgPT09ICdzdHJpbmcnICYmIFszLDQsNSw2LDcsOCw5XS5pbmRleE9mKGgubGVuZ3RoKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdoZXgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJG8gPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIFRXT1BJJDIgPSB1dGlscy5UV09QSTtcbiAgICB2YXIgbWluJDIgPSBNYXRoLm1pbjtcbiAgICB2YXIgc3FydCQ0ID0gTWF0aC5zcXJ0O1xuICAgIHZhciBhY29zID0gTWF0aC5hY29zO1xuXG4gICAgdmFyIHJnYjJoc2kkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAvKlxuICAgICAgICBib3Jyb3dlZCBmcm9tIGhlcmU6XG4gICAgICAgIGh0dHA6Ly9odW1tZXIuc3RhbmZvcmQuZWR1L211c2VpbmZvL2RvYy9leGFtcGxlcy9odW1kcnVtL2tleXNjYXBlMi9yZ2IyaHNpLmNwcFxuICAgICAgICAqL1xuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJG8oYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICByIC89IDI1NTtcbiAgICAgICAgZyAvPSAyNTU7XG4gICAgICAgIGIgLz0gMjU1O1xuICAgICAgICB2YXIgaDtcbiAgICAgICAgdmFyIG1pbl8gPSBtaW4kMihyLGcsYik7XG4gICAgICAgIHZhciBpID0gKHIrZytiKSAvIDM7XG4gICAgICAgIHZhciBzID0gaSA+IDAgPyAxIC0gbWluXy9pIDogMDtcbiAgICAgICAgaWYgKHMgPT09IDApIHtcbiAgICAgICAgICAgIGggPSBOYU47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoID0gKChyLWcpKyhyLWIpKSAvIDI7XG4gICAgICAgICAgICBoIC89IHNxcnQkNCgoci1nKSooci1nKSArIChyLWIpKihnLWIpKTtcbiAgICAgICAgICAgIGggPSBhY29zKGgpO1xuICAgICAgICAgICAgaWYgKGIgPiBnKSB7XG4gICAgICAgICAgICAgICAgaCA9IFRXT1BJJDIgLSBoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaCAvPSBUV09QSSQyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbaCozNjAscyxpXTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJoc2lfMSA9IHJnYjJoc2kkMTtcblxuICAgIHZhciB1bnBhY2skbiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbGltaXQgPSB1dGlscy5saW1pdDtcbiAgICB2YXIgVFdPUEkkMSA9IHV0aWxzLlRXT1BJO1xuICAgIHZhciBQSVRISVJEID0gdXRpbHMuUElUSElSRDtcbiAgICB2YXIgY29zJDQgPSBNYXRoLmNvcztcblxuICAgIC8qXG4gICAgICogaHVlIFswLi4zNjBdXG4gICAgICogc2F0dXJhdGlvbiBbMC4uMV1cbiAgICAgKiBpbnRlbnNpdHkgWzAuLjFdXG4gICAgICovXG4gICAgdmFyIGhzaTJyZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgLypcbiAgICAgICAgYm9ycm93ZWQgZnJvbSBoZXJlOlxuICAgICAgICBodHRwOi8vaHVtbWVyLnN0YW5mb3JkLmVkdS9tdXNlaW5mby9kb2MvZXhhbXBsZXMvaHVtZHJ1bS9rZXlzY2FwZTIvaHNpMnJnYi5jcHBcbiAgICAgICAgKi9cbiAgICAgICAgYXJncyA9IHVucGFjayRuKGFyZ3MsICdoc2knKTtcbiAgICAgICAgdmFyIGggPSBhcmdzWzBdO1xuICAgICAgICB2YXIgcyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBpID0gYXJnc1syXTtcbiAgICAgICAgdmFyIHIsZyxiO1xuXG4gICAgICAgIGlmIChpc05hTihoKSkgeyBoID0gMDsgfVxuICAgICAgICBpZiAoaXNOYU4ocykpIHsgcyA9IDA7IH1cbiAgICAgICAgLy8gbm9ybWFsaXplIGh1ZVxuICAgICAgICBpZiAoaCA+IDM2MCkgeyBoIC09IDM2MDsgfVxuICAgICAgICBpZiAoaCA8IDApIHsgaCArPSAzNjA7IH1cbiAgICAgICAgaCAvPSAzNjA7XG4gICAgICAgIGlmIChoIDwgMS8zKSB7XG4gICAgICAgICAgICBiID0gKDEtcykvMztcbiAgICAgICAgICAgIHIgPSAoMStzKmNvcyQ0KFRXT1BJJDEqaCkvY29zJDQoUElUSElSRC1UV09QSSQxKmgpKS8zO1xuICAgICAgICAgICAgZyA9IDEgLSAoYityKTtcbiAgICAgICAgfSBlbHNlIGlmIChoIDwgMi8zKSB7XG4gICAgICAgICAgICBoIC09IDEvMztcbiAgICAgICAgICAgIHIgPSAoMS1zKS8zO1xuICAgICAgICAgICAgZyA9ICgxK3MqY29zJDQoVFdPUEkkMSpoKS9jb3MkNChQSVRISVJELVRXT1BJJDEqaCkpLzM7XG4gICAgICAgICAgICBiID0gMSAtIChyK2cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaCAtPSAyLzM7XG4gICAgICAgICAgICBnID0gKDEtcykvMztcbiAgICAgICAgICAgIGIgPSAoMStzKmNvcyQ0KFRXT1BJJDEqaCkvY29zJDQoUElUSElSRC1UV09QSSQxKmgpKS8zO1xuICAgICAgICAgICAgciA9IDEgLSAoZytiKTtcbiAgICAgICAgfVxuICAgICAgICByID0gbGltaXQoaSpyKjMpO1xuICAgICAgICBnID0gbGltaXQoaSpnKjMpO1xuICAgICAgICBiID0gbGltaXQoaSpiKjMpO1xuICAgICAgICByZXR1cm4gW3IqMjU1LCBnKjI1NSwgYioyNTUsIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXTtcbiAgICB9O1xuXG4gICAgdmFyIGhzaTJyZ2JfMSA9IGhzaTJyZ2I7XG5cbiAgICB2YXIgdW5wYWNrJG0gPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkaCA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGNocm9tYSRlID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJHggPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCRhID0gaW5wdXQkaDtcblxuICAgIHZhciByZ2IyaHNpID0gcmdiMmhzaV8xO1xuXG4gICAgQ29sb3IkeC5wcm90b3R5cGUuaHNpID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IyaHNpKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSRlLmhzaSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkeCwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2hzaSddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkYS5mb3JtYXQuaHNpID0gaHNpMnJnYl8xO1xuXG4gICAgaW5wdXQkYS5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayRtKGFyZ3MsICdoc2knKTtcbiAgICAgICAgICAgIGlmICh0eXBlJGgoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hzaSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skbCA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSRnID0gdXRpbHMudHlwZTtcbiAgICB2YXIgY2hyb21hJGQgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkdyA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JDkgPSBpbnB1dCRoO1xuXG4gICAgdmFyIHJnYjJoc2wkMSA9IHJnYjJoc2xfMTtcblxuICAgIENvbG9yJHcucHJvdG90eXBlLmhzbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmdiMmhzbCQxKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSRkLmhzbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkdywgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2hzbCddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkOS5mb3JtYXQuaHNsID0gaHNsMnJnYl8xO1xuXG4gICAgaW5wdXQkOS5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayRsKGFyZ3MsICdoc2wnKTtcbiAgICAgICAgICAgIGlmICh0eXBlJGcoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hzbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skayA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbWluJDEgPSBNYXRoLm1pbjtcbiAgICB2YXIgbWF4JDEgPSBNYXRoLm1heDtcblxuICAgIC8qXG4gICAgICogc3VwcG9ydGVkIGFyZ3VtZW50czpcbiAgICAgKiAtIHJnYjJoc3YocixnLGIpXG4gICAgICogLSByZ2IyaHN2KFtyLGcsYl0pXG4gICAgICogLSByZ2IyaHN2KHtyLGcsYn0pXG4gICAgICovXG4gICAgdmFyIHJnYjJoc2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgYXJncyA9IHVucGFjayRrKGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSBhcmdzWzBdO1xuICAgICAgICB2YXIgZyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBiID0gYXJnc1syXTtcbiAgICAgICAgdmFyIG1pbl8gPSBtaW4kMShyLCBnLCBiKTtcbiAgICAgICAgdmFyIG1heF8gPSBtYXgkMShyLCBnLCBiKTtcbiAgICAgICAgdmFyIGRlbHRhID0gbWF4XyAtIG1pbl87XG4gICAgICAgIHZhciBoLHMsdjtcbiAgICAgICAgdiA9IG1heF8gLyAyNTUuMDtcbiAgICAgICAgaWYgKG1heF8gPT09IDApIHtcbiAgICAgICAgICAgIGggPSBOdW1iZXIuTmFOO1xuICAgICAgICAgICAgcyA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzID0gZGVsdGEgLyBtYXhfO1xuICAgICAgICAgICAgaWYgKHIgPT09IG1heF8pIHsgaCA9IChnIC0gYikgLyBkZWx0YTsgfVxuICAgICAgICAgICAgaWYgKGcgPT09IG1heF8pIHsgaCA9IDIrKGIgLSByKSAvIGRlbHRhOyB9XG4gICAgICAgICAgICBpZiAoYiA9PT0gbWF4XykgeyBoID0gNCsociAtIGcpIC8gZGVsdGE7IH1cbiAgICAgICAgICAgIGggKj0gNjA7XG4gICAgICAgICAgICBpZiAoaCA8IDApIHsgaCArPSAzNjA7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2gsIHMsIHZdXG4gICAgfTtcblxuICAgIHZhciByZ2IyaHN2JDEgPSByZ2IyaHNsO1xuXG4gICAgdmFyIHVucGFjayRqID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBmbG9vciQyID0gTWF0aC5mbG9vcjtcblxuICAgIHZhciBoc3YycmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXNzaWduLCBhc3NpZ24kMSwgYXNzaWduJDIsIGFzc2lnbiQzLCBhc3NpZ24kNCwgYXNzaWduJDU7XG5cbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcbiAgICAgICAgYXJncyA9IHVucGFjayRqKGFyZ3MsICdoc3YnKTtcbiAgICAgICAgdmFyIGggPSBhcmdzWzBdO1xuICAgICAgICB2YXIgcyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciB2ID0gYXJnc1syXTtcbiAgICAgICAgdmFyIHIsZyxiO1xuICAgICAgICB2ICo9IDI1NTtcbiAgICAgICAgaWYgKHMgPT09IDApIHtcbiAgICAgICAgICAgIHIgPSBnID0gYiA9IHY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaCA9PT0gMzYwKSB7IGggPSAwOyB9XG4gICAgICAgICAgICBpZiAoaCA+IDM2MCkgeyBoIC09IDM2MDsgfVxuICAgICAgICAgICAgaWYgKGggPCAwKSB7IGggKz0gMzYwOyB9XG4gICAgICAgICAgICBoIC89IDYwO1xuXG4gICAgICAgICAgICB2YXIgaSA9IGZsb29yJDIoaCk7XG4gICAgICAgICAgICB2YXIgZiA9IGggLSBpO1xuICAgICAgICAgICAgdmFyIHAgPSB2ICogKDEgLSBzKTtcbiAgICAgICAgICAgIHZhciBxID0gdiAqICgxIC0gcyAqIGYpO1xuICAgICAgICAgICAgdmFyIHQgPSB2ICogKDEgLSBzICogKDEgLSBmKSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogKGFzc2lnbiA9IFt2LCB0LCBwXSwgciA9IGFzc2lnblswXSwgZyA9IGFzc2lnblsxXSwgYiA9IGFzc2lnblsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAxOiAoYXNzaWduJDEgPSBbcSwgdiwgcF0sIHIgPSBhc3NpZ24kMVswXSwgZyA9IGFzc2lnbiQxWzFdLCBiID0gYXNzaWduJDFbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMjogKGFzc2lnbiQyID0gW3AsIHYsIHRdLCByID0gYXNzaWduJDJbMF0sIGcgPSBhc3NpZ24kMlsxXSwgYiA9IGFzc2lnbiQyWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDM6IChhc3NpZ24kMyA9IFtwLCBxLCB2XSwgciA9IGFzc2lnbiQzWzBdLCBnID0gYXNzaWduJDNbMV0sIGIgPSBhc3NpZ24kM1syXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSA0OiAoYXNzaWduJDQgPSBbdCwgcCwgdl0sIHIgPSBhc3NpZ24kNFswXSwgZyA9IGFzc2lnbiQ0WzFdLCBiID0gYXNzaWduJDRbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgNTogKGFzc2lnbiQ1ID0gW3YsIHAsIHFdLCByID0gYXNzaWduJDVbMF0sIGcgPSBhc3NpZ24kNVsxXSwgYiA9IGFzc2lnbiQ1WzJdKTsgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3IsZyxiLGFyZ3MubGVuZ3RoID4gMz9hcmdzWzNdOjFdO1xuICAgIH07XG5cbiAgICB2YXIgaHN2MnJnYl8xID0gaHN2MnJnYjtcblxuICAgIHZhciB1bnBhY2skaSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSRmID0gdXRpbHMudHlwZTtcbiAgICB2YXIgY2hyb21hJGMgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkdiA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JDggPSBpbnB1dCRoO1xuXG4gICAgdmFyIHJnYjJoc3YgPSByZ2IyaHN2JDE7XG5cbiAgICBDb2xvciR2LnByb3RvdHlwZS5oc3YgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJoc3YodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJGMuaHN2ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciR2LCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnaHN2J10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCQ4LmZvcm1hdC5oc3YgPSBoc3YycmdiXzE7XG5cbiAgICBpbnB1dCQ4LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDIsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJGkoYXJncywgJ2hzdicpO1xuICAgICAgICAgICAgaWYgKHR5cGUkZihhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnaHN2JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGxhYkNvbnN0YW50cyA9IHtcbiAgICAgICAgLy8gQ29ycmVzcG9uZHMgcm91Z2hseSB0byBSR0IgYnJpZ2h0ZXIvZGFya2VyXG4gICAgICAgIEtuOiAxOCxcblxuICAgICAgICAvLyBENjUgc3RhbmRhcmQgcmVmZXJlbnRcbiAgICAgICAgWG46IDAuOTUwNDcwLFxuICAgICAgICBZbjogMSxcbiAgICAgICAgWm46IDEuMDg4ODMwLFxuXG4gICAgICAgIHQwOiAwLjEzNzkzMTAzNCwgIC8vIDQgLyAyOVxuICAgICAgICB0MTogMC4yMDY4OTY1NTIsICAvLyA2IC8gMjlcbiAgICAgICAgdDI6IDAuMTI4NDE4NTUsICAgLy8gMyAqIHQxICogdDFcbiAgICAgICAgdDM6IDAuMDA4ODU2NDUyLCAgLy8gdDEgKiB0MSAqIHQxXG4gICAgfTtcblxuICAgIHZhciBMQUJfQ09OU1RBTlRTJDMgPSBsYWJDb25zdGFudHM7XG4gICAgdmFyIHVucGFjayRoID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBwb3ckYSA9IE1hdGgucG93O1xuXG4gICAgdmFyIHJnYjJsYWIkMiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJGgoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSByZ2IyeHl6KHIsZyxiKTtcbiAgICAgICAgdmFyIHggPSByZWYkMVswXTtcbiAgICAgICAgdmFyIHkgPSByZWYkMVsxXTtcbiAgICAgICAgdmFyIHogPSByZWYkMVsyXTtcbiAgICAgICAgdmFyIGwgPSAxMTYgKiB5IC0gMTY7XG4gICAgICAgIHJldHVybiBbbCA8IDAgPyAwIDogbCwgNTAwICogKHggLSB5KSwgMjAwICogKHkgLSB6KV07XG4gICAgfTtcblxuICAgIHZhciByZ2JfeHl6ID0gZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgaWYgKChyIC89IDI1NSkgPD0gMC4wNDA0NSkgeyByZXR1cm4gciAvIDEyLjkyOyB9XG4gICAgICAgIHJldHVybiBwb3ckYSgociArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICAgIH07XG5cbiAgICB2YXIgeHl6X2xhYiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh0ID4gTEFCX0NPTlNUQU5UUyQzLnQzKSB7IHJldHVybiBwb3ckYSh0LCAxIC8gMyk7IH1cbiAgICAgICAgcmV0dXJuIHQgLyBMQUJfQ09OU1RBTlRTJDMudDIgKyBMQUJfQ09OU1RBTlRTJDMudDA7XG4gICAgfTtcblxuICAgIHZhciByZ2IyeHl6ID0gZnVuY3Rpb24gKHIsZyxiKSB7XG4gICAgICAgIHIgPSByZ2JfeHl6KHIpO1xuICAgICAgICBnID0gcmdiX3h5eihnKTtcbiAgICAgICAgYiA9IHJnYl94eXooYik7XG4gICAgICAgIHZhciB4ID0geHl6X2xhYigoMC40MTI0NTY0ICogciArIDAuMzU3NTc2MSAqIGcgKyAwLjE4MDQzNzUgKiBiKSAvIExBQl9DT05TVEFOVFMkMy5Ybik7XG4gICAgICAgIHZhciB5ID0geHl6X2xhYigoMC4yMTI2NzI5ICogciArIDAuNzE1MTUyMiAqIGcgKyAwLjA3MjE3NTAgKiBiKSAvIExBQl9DT05TVEFOVFMkMy5Zbik7XG4gICAgICAgIHZhciB6ID0geHl6X2xhYigoMC4wMTkzMzM5ICogciArIDAuMTE5MTkyMCAqIGcgKyAwLjk1MDMwNDEgKiBiKSAvIExBQl9DT05TVEFOVFMkMy5abik7XG4gICAgICAgIHJldHVybiBbeCx5LHpdO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMmxhYl8xID0gcmdiMmxhYiQyO1xuXG4gICAgdmFyIExBQl9DT05TVEFOVFMkMiA9IGxhYkNvbnN0YW50cztcbiAgICB2YXIgdW5wYWNrJGcgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHBvdyQ5ID0gTWF0aC5wb3c7XG5cbiAgICAvKlxuICAgICAqIEwqIFswLi4xMDBdXG4gICAgICogYSBbLTEwMC4uMTAwXVxuICAgICAqIGIgWy0xMDAuLjEwMF1cbiAgICAgKi9cbiAgICB2YXIgbGFiMnJnYiQxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIGFyZ3MgPSB1bnBhY2skZyhhcmdzLCAnbGFiJyk7XG4gICAgICAgIHZhciBsID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGEgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgYiA9IGFyZ3NbMl07XG4gICAgICAgIHZhciB4LHkseiwgcixnLGJfO1xuXG4gICAgICAgIHkgPSAobCArIDE2KSAvIDExNjtcbiAgICAgICAgeCA9IGlzTmFOKGEpID8geSA6IHkgKyBhIC8gNTAwO1xuICAgICAgICB6ID0gaXNOYU4oYikgPyB5IDogeSAtIGIgLyAyMDA7XG5cbiAgICAgICAgeSA9IExBQl9DT05TVEFOVFMkMi5ZbiAqIGxhYl94eXooeSk7XG4gICAgICAgIHggPSBMQUJfQ09OU1RBTlRTJDIuWG4gKiBsYWJfeHl6KHgpO1xuICAgICAgICB6ID0gTEFCX0NPTlNUQU5UUyQyLlpuICogbGFiX3h5eih6KTtcblxuICAgICAgICByID0geHl6X3JnYigzLjI0MDQ1NDIgKiB4IC0gMS41MzcxMzg1ICogeSAtIDAuNDk4NTMxNCAqIHopOyAgLy8gRDY1IC0+IHNSR0JcbiAgICAgICAgZyA9IHh5el9yZ2IoLTAuOTY5MjY2MCAqIHggKyAxLjg3NjAxMDggKiB5ICsgMC4wNDE1NTYwICogeik7XG4gICAgICAgIGJfID0geHl6X3JnYigwLjA1NTY0MzQgKiB4IC0gMC4yMDQwMjU5ICogeSArIDEuMDU3MjI1MiAqIHopO1xuXG4gICAgICAgIHJldHVybiBbcixnLGJfLGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXTtcbiAgICB9O1xuXG4gICAgdmFyIHh5el9yZ2IgPSBmdW5jdGlvbiAocikge1xuICAgICAgICByZXR1cm4gMjU1ICogKHIgPD0gMC4wMDMwNCA/IDEyLjkyICogciA6IDEuMDU1ICogcG93JDkociwgMSAvIDIuNCkgLSAwLjA1NSlcbiAgICB9O1xuXG4gICAgdmFyIGxhYl94eXogPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdCA+IExBQl9DT05TVEFOVFMkMi50MSA/IHQgKiB0ICogdCA6IExBQl9DT05TVEFOVFMkMi50MiAqICh0IC0gTEFCX0NPTlNUQU5UUyQyLnQwKVxuICAgIH07XG5cbiAgICB2YXIgbGFiMnJnYl8xID0gbGFiMnJnYiQxO1xuXG4gICAgdmFyIHVucGFjayRmID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJGUgPSB1dGlscy50eXBlO1xuICAgIHZhciBjaHJvbWEkYiA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciR1ID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkNyA9IGlucHV0JGg7XG5cbiAgICB2YXIgcmdiMmxhYiQxID0gcmdiMmxhYl8xO1xuXG4gICAgQ29sb3IkdS5wcm90b3R5cGUubGFiID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IybGFiJDEodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJGIubGFiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciR1LCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnbGFiJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dCQ3LmZvcm1hdC5sYWIgPSBsYWIycmdiXzE7XG5cbiAgICBpbnB1dCQ3LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDIsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJGYoYXJncywgJ2xhYicpO1xuICAgICAgICAgICAgaWYgKHR5cGUkZShhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbGFiJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHVucGFjayRlID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBSQUQyREVHID0gdXRpbHMuUkFEMkRFRztcbiAgICB2YXIgc3FydCQzID0gTWF0aC5zcXJ0O1xuICAgIHZhciBhdGFuMiQyID0gTWF0aC5hdGFuMjtcbiAgICB2YXIgcm91bmQkMiA9IE1hdGgucm91bmQ7XG5cbiAgICB2YXIgbGFiMmxjaCQyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skZShhcmdzLCAnbGFiJyk7XG4gICAgICAgIHZhciBsID0gcmVmWzBdO1xuICAgICAgICB2YXIgYSA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHZhciBjID0gc3FydCQzKGEgKiBhICsgYiAqIGIpO1xuICAgICAgICB2YXIgaCA9IChhdGFuMiQyKGIsIGEpICogUkFEMkRFRyArIDM2MCkgJSAzNjA7XG4gICAgICAgIGlmIChyb3VuZCQyKGMqMTAwMDApID09PSAwKSB7IGggPSBOdW1iZXIuTmFOOyB9XG4gICAgICAgIHJldHVybiBbbCwgYywgaF07XG4gICAgfTtcblxuICAgIHZhciBsYWIybGNoXzEgPSBsYWIybGNoJDI7XG5cbiAgICB2YXIgdW5wYWNrJGQgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHJnYjJsYWIgPSByZ2IybGFiXzE7XG4gICAgdmFyIGxhYjJsY2gkMSA9IGxhYjJsY2hfMTtcblxuICAgIHZhciByZ2IybGNoJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRkKGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gcmdiMmxhYihyLGcsYik7XG4gICAgICAgIHZhciBsID0gcmVmJDFbMF07XG4gICAgICAgIHZhciBhID0gcmVmJDFbMV07XG4gICAgICAgIHZhciBiXyA9IHJlZiQxWzJdO1xuICAgICAgICByZXR1cm4gbGFiMmxjaCQxKGwsYSxiXyk7XG4gICAgfTtcblxuICAgIHZhciByZ2IybGNoXzEgPSByZ2IybGNoJDE7XG5cbiAgICB2YXIgdW5wYWNrJGMgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIERFRzJSQUQgPSB1dGlscy5ERUcyUkFEO1xuICAgIHZhciBzaW4kMyA9IE1hdGguc2luO1xuICAgIHZhciBjb3MkMyA9IE1hdGguY29zO1xuXG4gICAgdmFyIGxjaDJsYWIkMiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAvKlxuICAgICAgICBDb252ZXJ0IGZyb20gYSBxdWFsaXRhdGl2ZSBwYXJhbWV0ZXIgaCBhbmQgYSBxdWFudGl0YXRpdmUgcGFyYW1ldGVyIGwgdG8gYSAyNC1iaXQgcGl4ZWwuXG4gICAgICAgIFRoZXNlIGZvcm11bGFzIHdlcmUgaW52ZW50ZWQgYnkgRGF2aWQgRGFscnltcGxlIHRvIG9idGFpbiBtYXhpbXVtIGNvbnRyYXN0IHdpdGhvdXQgZ29pbmdcbiAgICAgICAgb3V0IG9mIGdhbXV0IGlmIHRoZSBwYXJhbWV0ZXJzIGFyZSBpbiB0aGUgcmFuZ2UgMC0xLlxuXG4gICAgICAgIEEgc2F0dXJhdGlvbiBtdWx0aXBsaWVyIHdhcyBhZGRlZCBieSBHcmVnb3IgQWlzY2hcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRjKGFyZ3MsICdsY2gnKTtcbiAgICAgICAgdmFyIGwgPSByZWZbMF07XG4gICAgICAgIHZhciBjID0gcmVmWzFdO1xuICAgICAgICB2YXIgaCA9IHJlZlsyXTtcbiAgICAgICAgaWYgKGlzTmFOKGgpKSB7IGggPSAwOyB9XG4gICAgICAgIGggPSBoICogREVHMlJBRDtcbiAgICAgICAgcmV0dXJuIFtsLCBjb3MkMyhoKSAqIGMsIHNpbiQzKGgpICogY11cbiAgICB9O1xuXG4gICAgdmFyIGxjaDJsYWJfMSA9IGxjaDJsYWIkMjtcblxuICAgIHZhciB1bnBhY2skYiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbGNoMmxhYiQxID0gbGNoMmxhYl8xO1xuICAgIHZhciBsYWIycmdiID0gbGFiMnJnYl8xO1xuXG4gICAgdmFyIGxjaDJyZ2IkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICBhcmdzID0gdW5wYWNrJGIoYXJncywgJ2xjaCcpO1xuICAgICAgICB2YXIgbCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBjID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGggPSBhcmdzWzJdO1xuICAgICAgICB2YXIgcmVmID0gbGNoMmxhYiQxIChsLGMsaCk7XG4gICAgICAgIHZhciBMID0gcmVmWzBdO1xuICAgICAgICB2YXIgYSA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGJfID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSBsYWIycmdiIChMLGEsYl8pO1xuICAgICAgICB2YXIgciA9IHJlZiQxWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZiQxWzJdO1xuICAgICAgICByZXR1cm4gW3IsIGcsIGIsIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXTtcbiAgICB9O1xuXG4gICAgdmFyIGxjaDJyZ2JfMSA9IGxjaDJyZ2IkMTtcblxuICAgIHZhciB1bnBhY2skYSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbGNoMnJnYiA9IGxjaDJyZ2JfMTtcblxuICAgIHZhciBoY2wycmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciBoY2wgPSB1bnBhY2skYShhcmdzLCAnaGNsJykucmV2ZXJzZSgpO1xuICAgICAgICByZXR1cm4gbGNoMnJnYi5hcHBseSh2b2lkIDAsIGhjbCk7XG4gICAgfTtcblxuICAgIHZhciBoY2wycmdiXzEgPSBoY2wycmdiO1xuXG4gICAgdmFyIHVucGFjayQ5ID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJGQgPSB1dGlscy50eXBlO1xuICAgIHZhciBjaHJvbWEkYSA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciR0ID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkNiA9IGlucHV0JGg7XG5cbiAgICB2YXIgcmdiMmxjaCA9IHJnYjJsY2hfMTtcblxuICAgIENvbG9yJHQucHJvdG90eXBlLmxjaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gcmdiMmxjaCh0aGlzLl9yZ2IpOyB9O1xuICAgIENvbG9yJHQucHJvdG90eXBlLmhjbCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gcmdiMmxjaCh0aGlzLl9yZ2IpLnJldmVyc2UoKTsgfTtcblxuICAgIGNocm9tYSRhLmxjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkdCwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2xjaCddKSApKTtcbiAgICB9O1xuICAgIGNocm9tYSRhLmhjbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkdCwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2hjbCddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQkNi5mb3JtYXQubGNoID0gbGNoMnJnYl8xO1xuICAgIGlucHV0JDYuZm9ybWF0LmhjbCA9IGhjbDJyZ2JfMTtcblxuICAgIFsnbGNoJywnaGNsJ10uZm9yRWFjaChmdW5jdGlvbiAobSkgeyByZXR1cm4gaW5wdXQkNi5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayQ5KGFyZ3MsIG0pO1xuICAgICAgICAgICAgaWYgKHR5cGUkZChhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7IH0pO1xuXG4gICAgLyoqXG4gICAgXHRYMTEgY29sb3IgbmFtZXNcblxuICAgIFx0aHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1jb2xvci8jc3ZnLWNvbG9yXG4gICAgKi9cblxuICAgIHZhciB3M2N4MTEkMSA9IHtcbiAgICAgICAgYWxpY2VibHVlOiAnI2YwZjhmZicsXG4gICAgICAgIGFudGlxdWV3aGl0ZTogJyNmYWViZDcnLFxuICAgICAgICBhcXVhOiAnIzAwZmZmZicsXG4gICAgICAgIGFxdWFtYXJpbmU6ICcjN2ZmZmQ0JyxcbiAgICAgICAgYXp1cmU6ICcjZjBmZmZmJyxcbiAgICAgICAgYmVpZ2U6ICcjZjVmNWRjJyxcbiAgICAgICAgYmlzcXVlOiAnI2ZmZTRjNCcsXG4gICAgICAgIGJsYWNrOiAnIzAwMDAwMCcsXG4gICAgICAgIGJsYW5jaGVkYWxtb25kOiAnI2ZmZWJjZCcsXG4gICAgICAgIGJsdWU6ICcjMDAwMGZmJyxcbiAgICAgICAgYmx1ZXZpb2xldDogJyM4YTJiZTInLFxuICAgICAgICBicm93bjogJyNhNTJhMmEnLFxuICAgICAgICBidXJseXdvb2Q6ICcjZGViODg3JyxcbiAgICAgICAgY2FkZXRibHVlOiAnIzVmOWVhMCcsXG4gICAgICAgIGNoYXJ0cmV1c2U6ICcjN2ZmZjAwJyxcbiAgICAgICAgY2hvY29sYXRlOiAnI2QyNjkxZScsXG4gICAgICAgIGNvcmFsOiAnI2ZmN2Y1MCcsXG4gICAgICAgIGNvcm5mbG93ZXI6ICcjNjQ5NWVkJyxcbiAgICAgICAgY29ybmZsb3dlcmJsdWU6ICcjNjQ5NWVkJyxcbiAgICAgICAgY29ybnNpbGs6ICcjZmZmOGRjJyxcbiAgICAgICAgY3JpbXNvbjogJyNkYzE0M2MnLFxuICAgICAgICBjeWFuOiAnIzAwZmZmZicsXG4gICAgICAgIGRhcmtibHVlOiAnIzAwMDA4YicsXG4gICAgICAgIGRhcmtjeWFuOiAnIzAwOGI4YicsXG4gICAgICAgIGRhcmtnb2xkZW5yb2Q6ICcjYjg4NjBiJyxcbiAgICAgICAgZGFya2dyYXk6ICcjYTlhOWE5JyxcbiAgICAgICAgZGFya2dyZWVuOiAnIzAwNjQwMCcsXG4gICAgICAgIGRhcmtncmV5OiAnI2E5YTlhOScsXG4gICAgICAgIGRhcmtraGFraTogJyNiZGI3NmInLFxuICAgICAgICBkYXJrbWFnZW50YTogJyM4YjAwOGInLFxuICAgICAgICBkYXJrb2xpdmVncmVlbjogJyM1NTZiMmYnLFxuICAgICAgICBkYXJrb3JhbmdlOiAnI2ZmOGMwMCcsXG4gICAgICAgIGRhcmtvcmNoaWQ6ICcjOTkzMmNjJyxcbiAgICAgICAgZGFya3JlZDogJyM4YjAwMDAnLFxuICAgICAgICBkYXJrc2FsbW9uOiAnI2U5OTY3YScsXG4gICAgICAgIGRhcmtzZWFncmVlbjogJyM4ZmJjOGYnLFxuICAgICAgICBkYXJrc2xhdGVibHVlOiAnIzQ4M2Q4YicsXG4gICAgICAgIGRhcmtzbGF0ZWdyYXk6ICcjMmY0ZjRmJyxcbiAgICAgICAgZGFya3NsYXRlZ3JleTogJyMyZjRmNGYnLFxuICAgICAgICBkYXJrdHVycXVvaXNlOiAnIzAwY2VkMScsXG4gICAgICAgIGRhcmt2aW9sZXQ6ICcjOTQwMGQzJyxcbiAgICAgICAgZGVlcHBpbms6ICcjZmYxNDkzJyxcbiAgICAgICAgZGVlcHNreWJsdWU6ICcjMDBiZmZmJyxcbiAgICAgICAgZGltZ3JheTogJyM2OTY5NjknLFxuICAgICAgICBkaW1ncmV5OiAnIzY5Njk2OScsXG4gICAgICAgIGRvZGdlcmJsdWU6ICcjMWU5MGZmJyxcbiAgICAgICAgZmlyZWJyaWNrOiAnI2IyMjIyMicsXG4gICAgICAgIGZsb3JhbHdoaXRlOiAnI2ZmZmFmMCcsXG4gICAgICAgIGZvcmVzdGdyZWVuOiAnIzIyOGIyMicsXG4gICAgICAgIGZ1Y2hzaWE6ICcjZmYwMGZmJyxcbiAgICAgICAgZ2FpbnNib3JvOiAnI2RjZGNkYycsXG4gICAgICAgIGdob3N0d2hpdGU6ICcjZjhmOGZmJyxcbiAgICAgICAgZ29sZDogJyNmZmQ3MDAnLFxuICAgICAgICBnb2xkZW5yb2Q6ICcjZGFhNTIwJyxcbiAgICAgICAgZ3JheTogJyM4MDgwODAnLFxuICAgICAgICBncmVlbjogJyMwMDgwMDAnLFxuICAgICAgICBncmVlbnllbGxvdzogJyNhZGZmMmYnLFxuICAgICAgICBncmV5OiAnIzgwODA4MCcsXG4gICAgICAgIGhvbmV5ZGV3OiAnI2YwZmZmMCcsXG4gICAgICAgIGhvdHBpbms6ICcjZmY2OWI0JyxcbiAgICAgICAgaW5kaWFucmVkOiAnI2NkNWM1YycsXG4gICAgICAgIGluZGlnbzogJyM0YjAwODInLFxuICAgICAgICBpdm9yeTogJyNmZmZmZjAnLFxuICAgICAgICBraGFraTogJyNmMGU2OGMnLFxuICAgICAgICBsYXNlcmxlbW9uOiAnI2ZmZmY1NCcsXG4gICAgICAgIGxhdmVuZGVyOiAnI2U2ZTZmYScsXG4gICAgICAgIGxhdmVuZGVyYmx1c2g6ICcjZmZmMGY1JyxcbiAgICAgICAgbGF3bmdyZWVuOiAnIzdjZmMwMCcsXG4gICAgICAgIGxlbW9uY2hpZmZvbjogJyNmZmZhY2QnLFxuICAgICAgICBsaWdodGJsdWU6ICcjYWRkOGU2JyxcbiAgICAgICAgbGlnaHRjb3JhbDogJyNmMDgwODAnLFxuICAgICAgICBsaWdodGN5YW46ICcjZTBmZmZmJyxcbiAgICAgICAgbGlnaHRnb2xkZW5yb2Q6ICcjZmFmYWQyJyxcbiAgICAgICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICcjZmFmYWQyJyxcbiAgICAgICAgbGlnaHRncmF5OiAnI2QzZDNkMycsXG4gICAgICAgIGxpZ2h0Z3JlZW46ICcjOTBlZTkwJyxcbiAgICAgICAgbGlnaHRncmV5OiAnI2QzZDNkMycsXG4gICAgICAgIGxpZ2h0cGluazogJyNmZmI2YzEnLFxuICAgICAgICBsaWdodHNhbG1vbjogJyNmZmEwN2EnLFxuICAgICAgICBsaWdodHNlYWdyZWVuOiAnIzIwYjJhYScsXG4gICAgICAgIGxpZ2h0c2t5Ymx1ZTogJyM4N2NlZmEnLFxuICAgICAgICBsaWdodHNsYXRlZ3JheTogJyM3Nzg4OTknLFxuICAgICAgICBsaWdodHNsYXRlZ3JleTogJyM3Nzg4OTknLFxuICAgICAgICBsaWdodHN0ZWVsYmx1ZTogJyNiMGM0ZGUnLFxuICAgICAgICBsaWdodHllbGxvdzogJyNmZmZmZTAnLFxuICAgICAgICBsaW1lOiAnIzAwZmYwMCcsXG4gICAgICAgIGxpbWVncmVlbjogJyMzMmNkMzInLFxuICAgICAgICBsaW5lbjogJyNmYWYwZTYnLFxuICAgICAgICBtYWdlbnRhOiAnI2ZmMDBmZicsXG4gICAgICAgIG1hcm9vbjogJyM4MDAwMDAnLFxuICAgICAgICBtYXJvb24yOiAnIzdmMDAwMCcsXG4gICAgICAgIG1hcm9vbjM6ICcjYjAzMDYwJyxcbiAgICAgICAgbWVkaXVtYXF1YW1hcmluZTogJyM2NmNkYWEnLFxuICAgICAgICBtZWRpdW1ibHVlOiAnIzAwMDBjZCcsXG4gICAgICAgIG1lZGl1bW9yY2hpZDogJyNiYTU1ZDMnLFxuICAgICAgICBtZWRpdW1wdXJwbGU6ICcjOTM3MGRiJyxcbiAgICAgICAgbWVkaXVtc2VhZ3JlZW46ICcjM2NiMzcxJyxcbiAgICAgICAgbWVkaXVtc2xhdGVibHVlOiAnIzdiNjhlZScsXG4gICAgICAgIG1lZGl1bXNwcmluZ2dyZWVuOiAnIzAwZmE5YScsXG4gICAgICAgIG1lZGl1bXR1cnF1b2lzZTogJyM0OGQxY2MnLFxuICAgICAgICBtZWRpdW12aW9sZXRyZWQ6ICcjYzcxNTg1JyxcbiAgICAgICAgbWlkbmlnaHRibHVlOiAnIzE5MTk3MCcsXG4gICAgICAgIG1pbnRjcmVhbTogJyNmNWZmZmEnLFxuICAgICAgICBtaXN0eXJvc2U6ICcjZmZlNGUxJyxcbiAgICAgICAgbW9jY2FzaW46ICcjZmZlNGI1JyxcbiAgICAgICAgbmF2YWpvd2hpdGU6ICcjZmZkZWFkJyxcbiAgICAgICAgbmF2eTogJyMwMDAwODAnLFxuICAgICAgICBvbGRsYWNlOiAnI2ZkZjVlNicsXG4gICAgICAgIG9saXZlOiAnIzgwODAwMCcsXG4gICAgICAgIG9saXZlZHJhYjogJyM2YjhlMjMnLFxuICAgICAgICBvcmFuZ2U6ICcjZmZhNTAwJyxcbiAgICAgICAgb3JhbmdlcmVkOiAnI2ZmNDUwMCcsXG4gICAgICAgIG9yY2hpZDogJyNkYTcwZDYnLFxuICAgICAgICBwYWxlZ29sZGVucm9kOiAnI2VlZThhYScsXG4gICAgICAgIHBhbGVncmVlbjogJyM5OGZiOTgnLFxuICAgICAgICBwYWxldHVycXVvaXNlOiAnI2FmZWVlZScsXG4gICAgICAgIHBhbGV2aW9sZXRyZWQ6ICcjZGI3MDkzJyxcbiAgICAgICAgcGFwYXlhd2hpcDogJyNmZmVmZDUnLFxuICAgICAgICBwZWFjaHB1ZmY6ICcjZmZkYWI5JyxcbiAgICAgICAgcGVydTogJyNjZDg1M2YnLFxuICAgICAgICBwaW5rOiAnI2ZmYzBjYicsXG4gICAgICAgIHBsdW06ICcjZGRhMGRkJyxcbiAgICAgICAgcG93ZGVyYmx1ZTogJyNiMGUwZTYnLFxuICAgICAgICBwdXJwbGU6ICcjODAwMDgwJyxcbiAgICAgICAgcHVycGxlMjogJyM3ZjAwN2YnLFxuICAgICAgICBwdXJwbGUzOiAnI2EwMjBmMCcsXG4gICAgICAgIHJlYmVjY2FwdXJwbGU6ICcjNjYzMzk5JyxcbiAgICAgICAgcmVkOiAnI2ZmMDAwMCcsXG4gICAgICAgIHJvc3licm93bjogJyNiYzhmOGYnLFxuICAgICAgICByb3lhbGJsdWU6ICcjNDE2OWUxJyxcbiAgICAgICAgc2FkZGxlYnJvd246ICcjOGI0NTEzJyxcbiAgICAgICAgc2FsbW9uOiAnI2ZhODA3MicsXG4gICAgICAgIHNhbmR5YnJvd246ICcjZjRhNDYwJyxcbiAgICAgICAgc2VhZ3JlZW46ICcjMmU4YjU3JyxcbiAgICAgICAgc2Vhc2hlbGw6ICcjZmZmNWVlJyxcbiAgICAgICAgc2llbm5hOiAnI2EwNTIyZCcsXG4gICAgICAgIHNpbHZlcjogJyNjMGMwYzAnLFxuICAgICAgICBza3libHVlOiAnIzg3Y2VlYicsXG4gICAgICAgIHNsYXRlYmx1ZTogJyM2YTVhY2QnLFxuICAgICAgICBzbGF0ZWdyYXk6ICcjNzA4MDkwJyxcbiAgICAgICAgc2xhdGVncmV5OiAnIzcwODA5MCcsXG4gICAgICAgIHNub3c6ICcjZmZmYWZhJyxcbiAgICAgICAgc3ByaW5nZ3JlZW46ICcjMDBmZjdmJyxcbiAgICAgICAgc3RlZWxibHVlOiAnIzQ2ODJiNCcsXG4gICAgICAgIHRhbjogJyNkMmI0OGMnLFxuICAgICAgICB0ZWFsOiAnIzAwODA4MCcsXG4gICAgICAgIHRoaXN0bGU6ICcjZDhiZmQ4JyxcbiAgICAgICAgdG9tYXRvOiAnI2ZmNjM0NycsXG4gICAgICAgIHR1cnF1b2lzZTogJyM0MGUwZDAnLFxuICAgICAgICB2aW9sZXQ6ICcjZWU4MmVlJyxcbiAgICAgICAgd2hlYXQ6ICcjZjVkZWIzJyxcbiAgICAgICAgd2hpdGU6ICcjZmZmZmZmJyxcbiAgICAgICAgd2hpdGVzbW9rZTogJyNmNWY1ZjUnLFxuICAgICAgICB5ZWxsb3c6ICcjZmZmZjAwJyxcbiAgICAgICAgeWVsbG93Z3JlZW46ICcjOWFjZDMyJ1xuICAgIH07XG5cbiAgICB2YXIgdzNjeDExXzEgPSB3M2N4MTEkMTtcblxuICAgIHZhciBDb2xvciRzID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkNSA9IGlucHV0JGg7XG4gICAgdmFyIHR5cGUkYyA9IHV0aWxzLnR5cGU7XG5cbiAgICB2YXIgdzNjeDExID0gdzNjeDExXzE7XG4gICAgdmFyIGhleDJyZ2IgPSBoZXgycmdiXzE7XG4gICAgdmFyIHJnYjJoZXggPSByZ2IyaGV4XzE7XG5cbiAgICBDb2xvciRzLnByb3RvdHlwZS5uYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBoZXggPSByZ2IyaGV4KHRoaXMuX3JnYiwgJ3JnYicpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IE9iamVjdC5rZXlzKHczY3gxMSk7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgbiA9IGxpc3RbaV07XG5cbiAgICAgICAgICAgIGlmICh3M2N4MTFbbl0gPT09IGhleCkgeyByZXR1cm4gbi50b0xvd2VyQ2FzZSgpOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhleDtcbiAgICB9O1xuXG4gICAgaW5wdXQkNS5mb3JtYXQubmFtZWQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAodzNjeDExW25hbWVdKSB7IHJldHVybiBoZXgycmdiKHczY3gxMVtuYW1lXSk7IH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIGNvbG9yIG5hbWU6ICcrbmFtZSk7XG4gICAgfTtcblxuICAgIGlucHV0JDUuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogNSxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgICAgIHZhciByZXN0ID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSA+IDAgKSByZXN0WyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG4gICAgICAgICAgICBpZiAoIXJlc3QubGVuZ3RoICYmIHR5cGUkYyhoKSA9PT0gJ3N0cmluZycgJiYgdzNjeDExW2gudG9Mb3dlckNhc2UoKV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ25hbWVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHVucGFjayQ4ID0gdXRpbHMudW5wYWNrO1xuXG4gICAgdmFyIHJnYjJudW0kMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJDgoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICByZXR1cm4gKHIgPDwgMTYpICsgKGcgPDwgOCkgKyBiO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMm51bV8xID0gcmdiMm51bSQxO1xuXG4gICAgdmFyIHR5cGUkYiA9IHV0aWxzLnR5cGU7XG5cbiAgICB2YXIgbnVtMnJnYiA9IGZ1bmN0aW9uIChudW0pIHtcbiAgICAgICAgaWYgKHR5cGUkYihudW0pID09IFwibnVtYmVyXCIgJiYgbnVtID49IDAgJiYgbnVtIDw9IDB4RkZGRkZGKSB7XG4gICAgICAgICAgICB2YXIgciA9IG51bSA+PiAxNjtcbiAgICAgICAgICAgIHZhciBnID0gKG51bSA+PiA4KSAmIDB4RkY7XG4gICAgICAgICAgICB2YXIgYiA9IG51bSAmIDB4RkY7XG4gICAgICAgICAgICByZXR1cm4gW3IsZyxiLDFdO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVua25vd24gbnVtIGNvbG9yOiBcIitudW0pO1xuICAgIH07XG5cbiAgICB2YXIgbnVtMnJnYl8xID0gbnVtMnJnYjtcblxuICAgIHZhciBjaHJvbWEkOSA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciRyID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkNCA9IGlucHV0JGg7XG4gICAgdmFyIHR5cGUkYSA9IHV0aWxzLnR5cGU7XG5cbiAgICB2YXIgcmdiMm51bSA9IHJnYjJudW1fMTtcblxuICAgIENvbG9yJHIucHJvdG90eXBlLm51bSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmdiMm51bSh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkOS5udW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHIsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydudW0nXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JDQuZm9ybWF0Lm51bSA9IG51bTJyZ2JfMTtcblxuICAgIGlucHV0JDQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogNSxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiB0eXBlJGEoYXJnc1swXSkgPT09ICdudW1iZXInICYmIGFyZ3NbMF0gPj0gMCAmJiBhcmdzWzBdIDw9IDB4RkZGRkZGKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdudW0nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgY2hyb21hJDggPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkcSA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JDMgPSBpbnB1dCRoO1xuICAgIHZhciB1bnBhY2skNyA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSQ5ID0gdXRpbHMudHlwZTtcbiAgICB2YXIgcm91bmQkMSA9IE1hdGgucm91bmQ7XG5cbiAgICBDb2xvciRxLnByb3RvdHlwZS5yZ2IgPSBmdW5jdGlvbihybmQpIHtcbiAgICAgICAgaWYgKCBybmQgPT09IHZvaWQgMCApIHJuZD10cnVlO1xuXG4gICAgICAgIGlmIChybmQgPT09IGZhbHNlKSB7IHJldHVybiB0aGlzLl9yZ2Iuc2xpY2UoMCwzKTsgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcmdiLnNsaWNlKDAsMykubWFwKHJvdW5kJDEpO1xuICAgIH07XG5cbiAgICBDb2xvciRxLnByb3RvdHlwZS5yZ2JhID0gZnVuY3Rpb24ocm5kKSB7XG4gICAgICAgIGlmICggcm5kID09PSB2b2lkIDAgKSBybmQ9dHJ1ZTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fcmdiLnNsaWNlKDAsNCkubWFwKGZ1bmN0aW9uICh2LGkpIHtcbiAgICAgICAgICAgIHJldHVybiBpPDMgPyAocm5kID09PSBmYWxzZSA/IHYgOiByb3VuZCQxKHYpKSA6IHY7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjaHJvbWEkOC5yZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yJHEsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydyZ2InXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JDMuZm9ybWF0LnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmdiYSA9IHVucGFjayQ3KGFyZ3MsICdyZ2JhJyk7XG4gICAgICAgIGlmIChyZ2JhWzNdID09PSB1bmRlZmluZWQpIHsgcmdiYVszXSA9IDE7IH1cbiAgICAgICAgcmV0dXJuIHJnYmE7XG4gICAgfTtcblxuICAgIGlucHV0JDMuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMyxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skNyhhcmdzLCAncmdiYScpO1xuICAgICAgICAgICAgaWYgKHR5cGUkOShhcmdzKSA9PT0gJ2FycmF5JyAmJiAoYXJncy5sZW5ndGggPT09IDMgfHxcbiAgICAgICAgICAgICAgICBhcmdzLmxlbmd0aCA9PT0gNCAmJiB0eXBlJDkoYXJnc1szXSkgPT0gJ251bWJlcicgJiYgYXJnc1szXSA+PSAwICYmIGFyZ3NbM10gPD0gMSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3JnYic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qXG4gICAgICogQmFzZWQgb24gaW1wbGVtZW50YXRpb24gYnkgTmVpbCBCYXJ0bGV0dFxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uZWlsYmFydGxldHQvY29sb3ItdGVtcGVyYXR1cmVcbiAgICAgKi9cblxuICAgIHZhciBsb2ckMSA9IE1hdGgubG9nO1xuXG4gICAgdmFyIHRlbXBlcmF0dXJlMnJnYiQxID0gZnVuY3Rpb24gKGtlbHZpbikge1xuICAgICAgICB2YXIgdGVtcCA9IGtlbHZpbiAvIDEwMDtcbiAgICAgICAgdmFyIHIsZyxiO1xuICAgICAgICBpZiAodGVtcCA8IDY2KSB7XG4gICAgICAgICAgICByID0gMjU1O1xuICAgICAgICAgICAgZyA9IHRlbXAgPCA2ID8gMCA6IC0xNTUuMjU0ODU1NjI3MDkxNzkgLSAwLjQ0NTk2OTUwNDY5NTc5MTMzICogKGcgPSB0ZW1wLTIpICsgMTA0LjQ5MjE2MTk5MzkzODg4ICogbG9nJDEoZyk7XG4gICAgICAgICAgICBiID0gdGVtcCA8IDIwID8gMCA6IC0yNTQuNzY5MzUxODQxMjA5MDIgKyAwLjgyNzQwOTYwNjQwMDczOTUgKiAoYiA9IHRlbXAtMTApICsgMTE1LjY3OTk0NDAxMDY2MTQ3ICogbG9nJDEoYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByID0gMzUxLjk3NjkwNTY2ODA1NjkzICsgMC4xMTQyMDY0NTM3ODQxNjUgKiAociA9IHRlbXAtNTUpIC0gNDAuMjUzNjYzMDkzMzIxMjcgKiBsb2ckMShyKTtcbiAgICAgICAgICAgIGcgPSAzMjUuNDQ5NDEyNTcxMTk3NCArIDAuMDc5NDM0NTY1MzY2NjIzNDIgKiAoZyA9IHRlbXAtNTApIC0gMjguMDg1Mjk2MzUwNzk1NyAqIGxvZyQxKGcpO1xuICAgICAgICAgICAgYiA9IDI1NTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3IsZyxiLDFdO1xuICAgIH07XG5cbiAgICB2YXIgdGVtcGVyYXR1cmUycmdiXzEgPSB0ZW1wZXJhdHVyZTJyZ2IkMTtcblxuICAgIC8qXG4gICAgICogQmFzZWQgb24gaW1wbGVtZW50YXRpb24gYnkgTmVpbCBCYXJ0bGV0dFxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uZWlsYmFydGxldHQvY29sb3ItdGVtcGVyYXR1cmVcbiAgICAgKiovXG5cbiAgICB2YXIgdGVtcGVyYXR1cmUycmdiID0gdGVtcGVyYXR1cmUycmdiXzE7XG4gICAgdmFyIHVucGFjayQ2ID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciByb3VuZCA9IE1hdGgucm91bmQ7XG5cbiAgICB2YXIgcmdiMnRlbXBlcmF0dXJlJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJnYiA9IHVucGFjayQ2KGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZ2JbMF0sIGIgPSByZ2JbMl07XG4gICAgICAgIHZhciBtaW5UZW1wID0gMTAwMDtcbiAgICAgICAgdmFyIG1heFRlbXAgPSA0MDAwMDtcbiAgICAgICAgdmFyIGVwcyA9IDAuNDtcbiAgICAgICAgdmFyIHRlbXA7XG4gICAgICAgIHdoaWxlIChtYXhUZW1wIC0gbWluVGVtcCA+IGVwcykge1xuICAgICAgICAgICAgdGVtcCA9IChtYXhUZW1wICsgbWluVGVtcCkgKiAwLjU7XG4gICAgICAgICAgICB2YXIgcmdiJDEgPSB0ZW1wZXJhdHVyZTJyZ2IodGVtcCk7XG4gICAgICAgICAgICBpZiAoKHJnYiQxWzJdIC8gcmdiJDFbMF0pID49IChiIC8gcikpIHtcbiAgICAgICAgICAgICAgICBtYXhUZW1wID0gdGVtcDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWluVGVtcCA9IHRlbXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvdW5kKHRlbXApO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMnRlbXBlcmF0dXJlXzEgPSByZ2IydGVtcGVyYXR1cmUkMTtcblxuICAgIHZhciBjaHJvbWEkNyA9IGNocm9tYV8xO1xuICAgIHZhciBDb2xvciRwID0gQ29sb3JfMTtcbiAgICB2YXIgaW5wdXQkMiA9IGlucHV0JGg7XG5cbiAgICB2YXIgcmdiMnRlbXBlcmF0dXJlID0gcmdiMnRlbXBlcmF0dXJlXzE7XG5cbiAgICBDb2xvciRwLnByb3RvdHlwZS50ZW1wID1cbiAgICBDb2xvciRwLnByb3RvdHlwZS5rZWx2aW4gPVxuICAgIENvbG9yJHAucHJvdG90eXBlLnRlbXBlcmF0dXJlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IydGVtcGVyYXR1cmUodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hJDcudGVtcCA9XG4gICAgY2hyb21hJDcua2VsdmluID1cbiAgICBjaHJvbWEkNy50ZW1wZXJhdHVyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkcCwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ3RlbXAnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JDIuZm9ybWF0LnRlbXAgPVxuICAgIGlucHV0JDIuZm9ybWF0LmtlbHZpbiA9XG4gICAgaW5wdXQkMi5mb3JtYXQudGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZTJyZ2JfMTtcblxuICAgIHZhciB1bnBhY2skNSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgY2JydCA9IE1hdGguY2JydDtcbiAgICB2YXIgcG93JDggPSBNYXRoLnBvdztcbiAgICB2YXIgc2lnbiQxID0gTWF0aC5zaWduO1xuXG4gICAgdmFyIHJnYjJva2xhYiQyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIC8vIE9LTGFiIGNvbG9yIHNwYWNlIGltcGxlbWVudGF0aW9uIHRha2VuIGZyb21cbiAgICAgICAgLy8gaHR0cHM6Ly9ib3R0b3Nzb24uZ2l0aHViLmlvL3Bvc3RzL29rbGFiL1xuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJDUoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSBbcmdiMmxyZ2IociAvIDI1NSksIHJnYjJscmdiKGcgLyAyNTUpLCByZ2IybHJnYihiIC8gMjU1KV07XG4gICAgICAgIHZhciBsciA9IHJlZiQxWzBdO1xuICAgICAgICB2YXIgbGcgPSByZWYkMVsxXTtcbiAgICAgICAgdmFyIGxiID0gcmVmJDFbMl07XG4gICAgICAgIHZhciBsID0gY2JydCgwLjQxMjIyMTQ3MDggKiBsciArIDAuNTM2MzMyNTM2MyAqIGxnICsgMC4wNTE0NDU5OTI5ICogbGIpO1xuICAgICAgICB2YXIgbSA9IGNicnQoMC4yMTE5MDM0OTgyICogbHIgKyAwLjY4MDY5OTU0NTEgKiBsZyArIDAuMTA3Mzk2OTU2NiAqIGxiKTtcbiAgICAgICAgdmFyIHMgPSBjYnJ0KDAuMDg4MzAyNDYxOSAqIGxyICsgMC4yODE3MTg4Mzc2ICogbGcgKyAwLjYyOTk3ODcwMDUgKiBsYik7XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIDAuMjEwNDU0MjU1MyAqIGwgKyAwLjc5MzYxNzc4NSAqIG0gLSAwLjAwNDA3MjA0NjggKiBzLFxuICAgICAgICAgICAgMS45Nzc5OTg0OTUxICogbCAtIDIuNDI4NTkyMjA1ICogbSArIDAuNDUwNTkzNzA5OSAqIHMsXG4gICAgICAgICAgICAwLjAyNTkwNDAzNzEgKiBsICsgMC43ODI3NzE3NjYyICogbSAtIDAuODA4Njc1NzY2ICogc1xuICAgICAgICBdO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMm9rbGFiXzEgPSByZ2Iyb2tsYWIkMjtcblxuICAgIGZ1bmN0aW9uIHJnYjJscmdiKGMpIHtcbiAgICAgICAgdmFyIGFicyA9IE1hdGguYWJzKGMpO1xuICAgICAgICBpZiAoYWJzIDwgMC4wNDA0NSkge1xuICAgICAgICAgICAgcmV0dXJuIGMgLyAxMi45MjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHNpZ24kMShjKSB8fCAxKSAqIHBvdyQ4KChhYnMgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbiAgICB9XG5cbiAgICB2YXIgdW5wYWNrJDQgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHBvdyQ3ID0gTWF0aC5wb3c7XG4gICAgdmFyIHNpZ24gPSBNYXRoLnNpZ247XG5cbiAgICAvKlxuICAgICAqIEwqIFswLi4xMDBdXG4gICAgICogYSBbLTEwMC4uMTAwXVxuICAgICAqIGIgWy0xMDAuLjEwMF1cbiAgICAgKi9cbiAgICB2YXIgb2tsYWIycmdiJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgYXJncyA9IHVucGFjayQ0KGFyZ3MsICdsYWInKTtcbiAgICAgICAgdmFyIEwgPSBhcmdzWzBdO1xuICAgICAgICB2YXIgYSA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBiID0gYXJnc1syXTtcblxuICAgICAgICB2YXIgbCA9IHBvdyQ3KEwgKyAwLjM5NjMzNzc3NzQgKiBhICsgMC4yMTU4MDM3NTczICogYiwgMyk7XG4gICAgICAgIHZhciBtID0gcG93JDcoTCAtIDAuMTA1NTYxMzQ1OCAqIGEgLSAwLjA2Mzg1NDE3MjggKiBiLCAzKTtcbiAgICAgICAgdmFyIHMgPSBwb3ckNyhMIC0gMC4wODk0ODQxNzc1ICogYSAtIDEuMjkxNDg1NTQ4ICogYiwgMyk7XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIDI1NSAqIGxyZ2IycmdiKCs0LjA3Njc0MTY2MjEgKiBsIC0gMy4zMDc3MTE1OTEzICogbSArIDAuMjMwOTY5OTI5MiAqIHMpLFxuICAgICAgICAgICAgMjU1ICogbHJnYjJyZ2IoLTEuMjY4NDM4MDA0NiAqIGwgKyAyLjYwOTc1NzQwMTEgKiBtIC0gMC4zNDEzMTkzOTY1ICogcyksXG4gICAgICAgICAgICAyNTUgKiBscmdiMnJnYigtMC4wMDQxOTYwODYzICogbCAtIDAuNzAzNDE4NjE0NyAqIG0gKyAxLjcwNzYxNDcwMSAqIHMpLFxuICAgICAgICAgICAgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IDFcbiAgICAgICAgXTtcbiAgICB9O1xuXG4gICAgdmFyIG9rbGFiMnJnYl8xID0gb2tsYWIycmdiJDE7XG5cbiAgICBmdW5jdGlvbiBscmdiMnJnYihjKSB7XG4gICAgICAgIHZhciBhYnMgPSBNYXRoLmFicyhjKTtcbiAgICAgICAgaWYgKGFicyA+IDAuMDAzMTMwOCkge1xuICAgICAgICAgICAgcmV0dXJuIChzaWduKGMpIHx8IDEpICogKDEuMDU1ICogcG93JDcoYWJzLCAxIC8gMi40KSAtIDAuMDU1KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYyAqIDEyLjkyO1xuICAgIH1cblxuICAgIHZhciB1bnBhY2skMyA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSQ4ID0gdXRpbHMudHlwZTtcbiAgICB2YXIgY2hyb21hJDYgPSBjaHJvbWFfMTtcbiAgICB2YXIgQ29sb3IkbyA9IENvbG9yXzE7XG4gICAgdmFyIGlucHV0JDEgPSBpbnB1dCRoO1xuXG4gICAgdmFyIHJnYjJva2xhYiQxID0gcmdiMm9rbGFiXzE7XG5cbiAgICBDb2xvciRvLnByb3RvdHlwZS5va2xhYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJva2xhYiQxKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYSQ2Lm9rbGFiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvciRvLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnb2tsYWInXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0JDEuZm9ybWF0Lm9rbGFiID0gb2tsYWIycmdiXzE7XG5cbiAgICBpbnB1dCQxLmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDMsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJDMoYXJncywgJ29rbGFiJyk7XG4gICAgICAgICAgICBpZiAodHlwZSQ4KGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdva2xhYic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skMiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgcmdiMm9rbGFiID0gcmdiMm9rbGFiXzE7XG4gICAgdmFyIGxhYjJsY2ggPSBsYWIybGNoXzE7XG5cbiAgICB2YXIgcmdiMm9rbGNoJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayQyKGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gcmdiMm9rbGFiKHIsIGcsIGIpO1xuICAgICAgICB2YXIgbCA9IHJlZiQxWzBdO1xuICAgICAgICB2YXIgYSA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgYl8gPSByZWYkMVsyXTtcbiAgICAgICAgcmV0dXJuIGxhYjJsY2gobCwgYSwgYl8pO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMm9rbGNoXzEgPSByZ2Iyb2tsY2gkMTtcblxuICAgIHZhciB1bnBhY2skMSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbGNoMmxhYiA9IGxjaDJsYWJfMTtcbiAgICB2YXIgb2tsYWIycmdiID0gb2tsYWIycmdiXzE7XG5cbiAgICB2YXIgb2tsY2gycmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIGFyZ3MgPSB1bnBhY2skMShhcmdzLCAnbGNoJyk7XG4gICAgICAgIHZhciBsID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGMgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgaCA9IGFyZ3NbMl07XG4gICAgICAgIHZhciByZWYgPSBsY2gybGFiKGwsIGMsIGgpO1xuICAgICAgICB2YXIgTCA9IHJlZlswXTtcbiAgICAgICAgdmFyIGEgPSByZWZbMV07XG4gICAgICAgIHZhciBiXyA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gb2tsYWIycmdiKEwsIGEsIGJfKTtcbiAgICAgICAgdmFyIHIgPSByZWYkMVswXTtcbiAgICAgICAgdmFyIGcgPSByZWYkMVsxXTtcbiAgICAgICAgdmFyIGIgPSByZWYkMVsyXTtcbiAgICAgICAgcmV0dXJuIFtyLCBnLCBiLCBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogMV07XG4gICAgfTtcblxuICAgIHZhciBva2xjaDJyZ2JfMSA9IG9rbGNoMnJnYjtcblxuICAgIHZhciB1bnBhY2sgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkNyA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGNocm9tYSQ1ID0gY2hyb21hXzE7XG4gICAgdmFyIENvbG9yJG4gPSBDb2xvcl8xO1xuICAgIHZhciBpbnB1dCA9IGlucHV0JGg7XG5cbiAgICB2YXIgcmdiMm9rbGNoID0gcmdiMm9rbGNoXzE7XG5cbiAgICBDb2xvciRuLnByb3RvdHlwZS5va2xjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJva2xjaCh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWEkNS5va2xjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3IkbiwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ29rbGNoJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dC5mb3JtYXQub2tsY2ggPSBva2xjaDJyZ2JfMTtcblxuICAgIGlucHV0LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDMsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrKGFyZ3MsICdva2xjaCcpO1xuICAgICAgICAgICAgaWYgKHR5cGUkNyhhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnb2tsY2gnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgQ29sb3IkbSA9IENvbG9yXzE7XG4gICAgdmFyIHR5cGUkNiA9IHV0aWxzLnR5cGU7XG5cbiAgICBDb2xvciRtLnByb3RvdHlwZS5hbHBoYSA9IGZ1bmN0aW9uKGEsIG11dGF0ZSkge1xuICAgICAgICBpZiAoIG11dGF0ZSA9PT0gdm9pZCAwICkgbXV0YXRlPWZhbHNlO1xuXG4gICAgICAgIGlmIChhICE9PSB1bmRlZmluZWQgJiYgdHlwZSQ2KGEpID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKG11dGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JnYlszXSA9IGE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yJG0oW3RoaXMuX3JnYlswXSwgdGhpcy5fcmdiWzFdLCB0aGlzLl9yZ2JbMl0sIGFdLCAncmdiJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3JnYlszXTtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJGwgPSBDb2xvcl8xO1xuXG4gICAgQ29sb3IkbC5wcm90b3R5cGUuY2xpcHBlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmdiLl9jbGlwcGVkIHx8IGZhbHNlO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkayA9IENvbG9yXzE7XG4gICAgdmFyIExBQl9DT05TVEFOVFMkMSA9IGxhYkNvbnN0YW50cztcblxuICAgIENvbG9yJGsucHJvdG90eXBlLmRhcmtlbiA9IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgIFx0aWYgKCBhbW91bnQgPT09IHZvaWQgMCApIGFtb3VudD0xO1xuXG4gICAgXHR2YXIgbWUgPSB0aGlzO1xuICAgIFx0dmFyIGxhYiA9IG1lLmxhYigpO1xuICAgIFx0bGFiWzBdIC09IExBQl9DT05TVEFOVFMkMS5LbiAqIGFtb3VudDtcbiAgICBcdHJldHVybiBuZXcgQ29sb3IkayhsYWIsICdsYWInKS5hbHBoYShtZS5hbHBoYSgpLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgQ29sb3Ikay5wcm90b3R5cGUuYnJpZ2h0ZW4gPSBmdW5jdGlvbihhbW91bnQpIHtcbiAgICBcdGlmICggYW1vdW50ID09PSB2b2lkIDAgKSBhbW91bnQ9MTtcblxuICAgIFx0cmV0dXJuIHRoaXMuZGFya2VuKC1hbW91bnQpO1xuICAgIH07XG5cbiAgICBDb2xvciRrLnByb3RvdHlwZS5kYXJrZXIgPSBDb2xvciRrLnByb3RvdHlwZS5kYXJrZW47XG4gICAgQ29sb3Ikay5wcm90b3R5cGUuYnJpZ2h0ZXIgPSBDb2xvciRrLnByb3RvdHlwZS5icmlnaHRlbjtcblxuICAgIHZhciBDb2xvciRqID0gQ29sb3JfMTtcblxuICAgIENvbG9yJGoucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChtYykge1xuICAgICAgICB2YXIgcmVmID0gbWMuc3BsaXQoJy4nKTtcbiAgICAgICAgdmFyIG1vZGUgPSByZWZbMF07XG4gICAgICAgIHZhciBjaGFubmVsID0gcmVmWzFdO1xuICAgICAgICB2YXIgc3JjID0gdGhpc1ttb2RlXSgpO1xuICAgICAgICBpZiAoY2hhbm5lbCkge1xuICAgICAgICAgICAgdmFyIGkgPSBtb2RlLmluZGV4T2YoY2hhbm5lbCkgLSAobW9kZS5zdWJzdHIoMCwgMikgPT09ICdvaycgPyAyIDogMCk7XG4gICAgICAgICAgICBpZiAoaSA+IC0xKSB7IHJldHVybiBzcmNbaV07IH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoXCJ1bmtub3duIGNoYW5uZWwgXCIgKyBjaGFubmVsICsgXCIgaW4gbW9kZSBcIiArIG1vZGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzcmM7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJGkgPSBDb2xvcl8xO1xuICAgIHZhciB0eXBlJDUgPSB1dGlscy50eXBlO1xuICAgIHZhciBwb3ckNiA9IE1hdGgucG93O1xuXG4gICAgdmFyIEVQUyA9IDFlLTc7XG4gICAgdmFyIE1BWF9JVEVSID0gMjA7XG5cbiAgICBDb2xvciRpLnByb3RvdHlwZS5sdW1pbmFuY2UgPSBmdW5jdGlvbihsdW0pIHtcbiAgICAgICAgaWYgKGx1bSAhPT0gdW5kZWZpbmVkICYmIHR5cGUkNShsdW0pID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKGx1bSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiBwdXJlIGJsYWNrXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvciRpKFswLDAsMCx0aGlzLl9yZ2JbM11dLCAncmdiJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobHVtID09PSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHB1cmUgd2hpdGVcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yJGkoWzI1NSwyNTUsMjU1LHRoaXMuX3JnYlszXV0sICdyZ2InKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbXB1dGUgbmV3IGNvbG9yIHVzaW5nLi4uXG4gICAgICAgICAgICB2YXIgY3VyX2x1bSA9IHRoaXMubHVtaW5hbmNlKCk7XG4gICAgICAgICAgICB2YXIgbW9kZSA9ICdyZ2InO1xuICAgICAgICAgICAgdmFyIG1heF9pdGVyID0gTUFYX0lURVI7XG5cbiAgICAgICAgICAgIHZhciB0ZXN0ID0gZnVuY3Rpb24gKGxvdywgaGlnaCkge1xuICAgICAgICAgICAgICAgIHZhciBtaWQgPSBsb3cuaW50ZXJwb2xhdGUoaGlnaCwgMC41LCBtb2RlKTtcbiAgICAgICAgICAgICAgICB2YXIgbG0gPSBtaWQubHVtaW5hbmNlKCk7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGx1bSAtIGxtKSA8IEVQUyB8fCAhbWF4X2l0ZXItLSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjbG9zZSBlbm91Z2hcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxtID4gbHVtID8gdGVzdChsb3csIG1pZCkgOiB0ZXN0KG1pZCwgaGlnaCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgcmdiID0gKGN1cl9sdW0gPiBsdW0gPyB0ZXN0KG5ldyBDb2xvciRpKFswLDAsMF0pLCB0aGlzKSA6IHRlc3QodGhpcywgbmV3IENvbG9yJGkoWzI1NSwyNTUsMjU1XSkpKS5yZ2IoKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IkaShyZ2IuY29uY2F0KCBbdGhpcy5fcmdiWzNdXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZ2IybHVtaW5hbmNlLmFwcGx5KHZvaWQgMCwgKHRoaXMuX3JnYikuc2xpY2UoMCwzKSk7XG4gICAgfTtcblxuXG4gICAgdmFyIHJnYjJsdW1pbmFuY2UgPSBmdW5jdGlvbiAocixnLGIpIHtcbiAgICAgICAgLy8gcmVsYXRpdmUgbHVtaW5hbmNlXG4gICAgICAgIC8vIHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDA4L1JFQy1XQ0FHMjAtMjAwODEyMTEvI3JlbGF0aXZlbHVtaW5hbmNlZGVmXG4gICAgICAgIHIgPSBsdW1pbmFuY2VfeChyKTtcbiAgICAgICAgZyA9IGx1bWluYW5jZV94KGcpO1xuICAgICAgICBiID0gbHVtaW5hbmNlX3goYik7XG4gICAgICAgIHJldHVybiAwLjIxMjYgKiByICsgMC43MTUyICogZyArIDAuMDcyMiAqIGI7XG4gICAgfTtcblxuICAgIHZhciBsdW1pbmFuY2VfeCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHggLz0gMjU1O1xuICAgICAgICByZXR1cm4geCA8PSAwLjAzOTI4ID8geC8xMi45MiA6IHBvdyQ2KCh4KzAuMDU1KS8xLjA1NSwgMi40KTtcbiAgICB9O1xuXG4gICAgdmFyIGludGVycG9sYXRvciQxID0ge307XG5cbiAgICB2YXIgQ29sb3IkaCA9IENvbG9yXzE7XG4gICAgdmFyIHR5cGUkNCA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGludGVycG9sYXRvciA9IGludGVycG9sYXRvciQxO1xuXG4gICAgdmFyIG1peCQxID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICAgICAgaWYgKCBmID09PSB2b2lkIDAgKSBmPTAuNTtcbiAgICAgICAgdmFyIHJlc3QgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDM7XG4gICAgICAgIHdoaWxlICggbGVuLS0gPiAwICkgcmVzdFsgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDMgXTtcblxuICAgICAgICB2YXIgbW9kZSA9IHJlc3RbMF0gfHwgJ2xyZ2InO1xuICAgICAgICBpZiAoIWludGVycG9sYXRvclttb2RlXSAmJiAhcmVzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGZhbGwgYmFjayB0byB0aGUgZmlyc3Qgc3VwcG9ydGVkIG1vZGVcbiAgICAgICAgICAgIG1vZGUgPSBPYmplY3Qua2V5cyhpbnRlcnBvbGF0b3IpWzBdO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaW50ZXJwb2xhdG9yW21vZGVdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKFwiaW50ZXJwb2xhdGlvbiBtb2RlIFwiICsgbW9kZSArIFwiIGlzIG5vdCBkZWZpbmVkXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSQ0KGNvbDEpICE9PSAnb2JqZWN0JykgeyBjb2wxID0gbmV3IENvbG9yJGgoY29sMSk7IH1cbiAgICAgICAgaWYgKHR5cGUkNChjb2wyKSAhPT0gJ29iamVjdCcpIHsgY29sMiA9IG5ldyBDb2xvciRoKGNvbDIpOyB9XG4gICAgICAgIHJldHVybiBpbnRlcnBvbGF0b3JbbW9kZV0oY29sMSwgY29sMiwgZilcbiAgICAgICAgICAgIC5hbHBoYShjb2wxLmFscGhhKCkgKyBmICogKGNvbDIuYWxwaGEoKSAtIGNvbDEuYWxwaGEoKSkpO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkZyA9IENvbG9yXzE7XG4gICAgdmFyIG1peCA9IG1peCQxO1xuXG4gICAgQ29sb3IkZy5wcm90b3R5cGUubWl4ID1cbiAgICBDb2xvciRnLnByb3RvdHlwZS5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uKGNvbDIsIGYpIHtcbiAgICBcdGlmICggZiA9PT0gdm9pZCAwICkgZj0wLjU7XG4gICAgXHR2YXIgcmVzdCA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgICBcdHdoaWxlICggbGVuLS0gPiAwICkgcmVzdFsgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDIgXTtcblxuICAgIFx0cmV0dXJuIG1peC5hcHBseSh2b2lkIDAsIFsgdGhpcywgY29sMiwgZiBdLmNvbmNhdCggcmVzdCApKTtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJGYgPSBDb2xvcl8xO1xuXG4gICAgQ29sb3IkZi5wcm90b3R5cGUucHJlbXVsdGlwbHkgPSBmdW5jdGlvbihtdXRhdGUpIHtcbiAgICBcdGlmICggbXV0YXRlID09PSB2b2lkIDAgKSBtdXRhdGU9ZmFsc2U7XG5cbiAgICBcdHZhciByZ2IgPSB0aGlzLl9yZ2I7XG4gICAgXHR2YXIgYSA9IHJnYlszXTtcbiAgICBcdGlmIChtdXRhdGUpIHtcbiAgICBcdFx0dGhpcy5fcmdiID0gW3JnYlswXSphLCByZ2JbMV0qYSwgcmdiWzJdKmEsIGFdO1xuICAgIFx0XHRyZXR1cm4gdGhpcztcbiAgICBcdH0gZWxzZSB7XG4gICAgXHRcdHJldHVybiBuZXcgQ29sb3IkZihbcmdiWzBdKmEsIHJnYlsxXSphLCByZ2JbMl0qYSwgYV0sICdyZ2InKTtcbiAgICBcdH1cbiAgICB9O1xuXG4gICAgdmFyIENvbG9yJGUgPSBDb2xvcl8xO1xuICAgIHZhciBMQUJfQ09OU1RBTlRTID0gbGFiQ29uc3RhbnRzO1xuXG4gICAgQ29sb3IkZS5wcm90b3R5cGUuc2F0dXJhdGUgPSBmdW5jdGlvbihhbW91bnQpIHtcbiAgICBcdGlmICggYW1vdW50ID09PSB2b2lkIDAgKSBhbW91bnQ9MTtcblxuICAgIFx0dmFyIG1lID0gdGhpcztcbiAgICBcdHZhciBsY2ggPSBtZS5sY2goKTtcbiAgICBcdGxjaFsxXSArPSBMQUJfQ09OU1RBTlRTLktuICogYW1vdW50O1xuICAgIFx0aWYgKGxjaFsxXSA8IDApIHsgbGNoWzFdID0gMDsgfVxuICAgIFx0cmV0dXJuIG5ldyBDb2xvciRlKGxjaCwgJ2xjaCcpLmFscGhhKG1lLmFscGhhKCksIHRydWUpO1xuICAgIH07XG5cbiAgICBDb2xvciRlLnByb3RvdHlwZS5kZXNhdHVyYXRlID0gZnVuY3Rpb24oYW1vdW50KSB7XG4gICAgXHRpZiAoIGFtb3VudCA9PT0gdm9pZCAwICkgYW1vdW50PTE7XG5cbiAgICBcdHJldHVybiB0aGlzLnNhdHVyYXRlKC1hbW91bnQpO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkZCA9IENvbG9yXzE7XG4gICAgdmFyIHR5cGUkMyA9IHV0aWxzLnR5cGU7XG5cbiAgICBDb2xvciRkLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAobWMsIHZhbHVlLCBtdXRhdGUpIHtcbiAgICAgICAgaWYgKCBtdXRhdGUgPT09IHZvaWQgMCApIG11dGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIHZhciByZWYgPSBtYy5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgbW9kZSA9IHJlZlswXTtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSByZWZbMV07XG4gICAgICAgIHZhciBzcmMgPSB0aGlzW21vZGVdKCk7XG4gICAgICAgIGlmIChjaGFubmVsKSB7XG4gICAgICAgICAgICB2YXIgaSA9IG1vZGUuaW5kZXhPZihjaGFubmVsKSAtIChtb2RlLnN1YnN0cigwLCAyKSA9PT0gJ29rJyA/IDIgOiAwKTtcbiAgICAgICAgICAgIGlmIChpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSQzKHZhbHVlKSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlLmNoYXJBdCgwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjW2ldICs9ICt2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tpXSArPSArdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNbaV0gKj0gK3ZhbHVlLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tpXSAvPSArdmFsdWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNbaV0gPSArdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUkMyh2YWx1ZSkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHNyY1tpXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVuc3VwcG9ydGVkIHZhbHVlIGZvciBDb2xvci5zZXRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBvdXQgPSBuZXcgQ29sb3IkZChzcmMsIG1vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChtdXRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmdiID0gb3V0Ll9yZ2I7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChcInVua25vd24gY2hhbm5lbCBcIiArIGNoYW5uZWwgKyBcIiBpbiBtb2RlIFwiICsgbW9kZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNyYztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkYyA9IENvbG9yXzE7XG5cbiAgICB2YXIgcmdiID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICAgICAgdmFyIHh5ejAgPSBjb2wxLl9yZ2I7XG4gICAgICAgIHZhciB4eXoxID0gY29sMi5fcmdiO1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yJGMoXG4gICAgICAgICAgICB4eXowWzBdICsgZiAqICh4eXoxWzBdLXh5ejBbMF0pLFxuICAgICAgICAgICAgeHl6MFsxXSArIGYgKiAoeHl6MVsxXS14eXowWzFdKSxcbiAgICAgICAgICAgIHh5ejBbMl0gKyBmICogKHh5ejFbMl0teHl6MFsyXSksXG4gICAgICAgICAgICAncmdiJ1xuICAgICAgICApXG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLnJnYiA9IHJnYjtcblxuICAgIHZhciBDb2xvciRiID0gQ29sb3JfMTtcbiAgICB2YXIgc3FydCQyID0gTWF0aC5zcXJ0O1xuICAgIHZhciBwb3ckNSA9IE1hdGgucG93O1xuXG4gICAgdmFyIGxyZ2IgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgICAgICB2YXIgcmVmID0gY29sMS5fcmdiO1xuICAgICAgICB2YXIgeDEgPSByZWZbMF07XG4gICAgICAgIHZhciB5MSA9IHJlZlsxXTtcbiAgICAgICAgdmFyIHoxID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSBjb2wyLl9yZ2I7XG4gICAgICAgIHZhciB4MiA9IHJlZiQxWzBdO1xuICAgICAgICB2YXIgeTIgPSByZWYkMVsxXTtcbiAgICAgICAgdmFyIHoyID0gcmVmJDFbMl07XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IkYihcbiAgICAgICAgICAgIHNxcnQkMihwb3ckNSh4MSwyKSAqICgxLWYpICsgcG93JDUoeDIsMikgKiBmKSxcbiAgICAgICAgICAgIHNxcnQkMihwb3ckNSh5MSwyKSAqICgxLWYpICsgcG93JDUoeTIsMikgKiBmKSxcbiAgICAgICAgICAgIHNxcnQkMihwb3ckNSh6MSwyKSAqICgxLWYpICsgcG93JDUoejIsMikgKiBmKSxcbiAgICAgICAgICAgICdyZ2InXG4gICAgICAgIClcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEubHJnYiA9IGxyZ2I7XG5cbiAgICB2YXIgQ29sb3IkYSA9IENvbG9yXzE7XG5cbiAgICB2YXIgbGFiID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICAgICAgdmFyIHh5ejAgPSBjb2wxLmxhYigpO1xuICAgICAgICB2YXIgeHl6MSA9IGNvbDIubGFiKCk7XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IkYShcbiAgICAgICAgICAgIHh5ejBbMF0gKyBmICogKHh5ejFbMF0teHl6MFswXSksXG4gICAgICAgICAgICB4eXowWzFdICsgZiAqICh4eXoxWzFdLXh5ejBbMV0pLFxuICAgICAgICAgICAgeHl6MFsyXSArIGYgKiAoeHl6MVsyXS14eXowWzJdKSxcbiAgICAgICAgICAgICdsYWInXG4gICAgICAgIClcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEubGFiID0gbGFiO1xuXG4gICAgdmFyIENvbG9yJDkgPSBDb2xvcl8xO1xuXG4gICAgdmFyIF9oc3ggPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZiwgbSkge1xuICAgICAgICB2YXIgYXNzaWduLCBhc3NpZ24kMTtcblxuICAgICAgICB2YXIgeHl6MCwgeHl6MTtcbiAgICAgICAgaWYgKG0gPT09ICdoc2wnKSB7XG4gICAgICAgICAgICB4eXowID0gY29sMS5oc2woKTtcbiAgICAgICAgICAgIHh5ejEgPSBjb2wyLmhzbCgpO1xuICAgICAgICB9IGVsc2UgaWYgKG0gPT09ICdoc3YnKSB7XG4gICAgICAgICAgICB4eXowID0gY29sMS5oc3YoKTtcbiAgICAgICAgICAgIHh5ejEgPSBjb2wyLmhzdigpO1xuICAgICAgICB9IGVsc2UgaWYgKG0gPT09ICdoY2cnKSB7XG4gICAgICAgICAgICB4eXowID0gY29sMS5oY2coKTtcbiAgICAgICAgICAgIHh5ejEgPSBjb2wyLmhjZygpO1xuICAgICAgICB9IGVsc2UgaWYgKG0gPT09ICdoc2knKSB7XG4gICAgICAgICAgICB4eXowID0gY29sMS5oc2koKTtcbiAgICAgICAgICAgIHh5ejEgPSBjb2wyLmhzaSgpO1xuICAgICAgICB9IGVsc2UgaWYgKG0gPT09ICdsY2gnIHx8IG0gPT09ICdoY2wnKSB7XG4gICAgICAgICAgICBtID0gJ2hjbCc7XG4gICAgICAgICAgICB4eXowID0gY29sMS5oY2woKTtcbiAgICAgICAgICAgIHh5ejEgPSBjb2wyLmhjbCgpO1xuICAgICAgICB9IGVsc2UgaWYgKG0gPT09ICdva2xjaCcpIHtcbiAgICAgICAgICAgIHh5ejAgPSBjb2wxLm9rbGNoKCkucmV2ZXJzZSgpO1xuICAgICAgICAgICAgeHl6MSA9IGNvbDIub2tsY2goKS5yZXZlcnNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaHVlMCwgaHVlMSwgc2F0MCwgc2F0MSwgbGJ2MCwgbGJ2MTtcbiAgICAgICAgaWYgKG0uc3Vic3RyKDAsIDEpID09PSAnaCcgfHwgbSA9PT0gJ29rbGNoJykge1xuICAgICAgICAgICAgKGFzc2lnbiA9IHh5ejAsIGh1ZTAgPSBhc3NpZ25bMF0sIHNhdDAgPSBhc3NpZ25bMV0sIGxidjAgPSBhc3NpZ25bMl0pO1xuICAgICAgICAgICAgKGFzc2lnbiQxID0geHl6MSwgaHVlMSA9IGFzc2lnbiQxWzBdLCBzYXQxID0gYXNzaWduJDFbMV0sIGxidjEgPSBhc3NpZ24kMVsyXSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2F0LCBodWUsIGxidiwgZGg7XG5cbiAgICAgICAgaWYgKCFpc05hTihodWUwKSAmJiAhaXNOYU4oaHVlMSkpIHtcbiAgICAgICAgICAgIC8vIGJvdGggY29sb3JzIGhhdmUgaHVlXG4gICAgICAgICAgICBpZiAoaHVlMSA+IGh1ZTAgJiYgaHVlMSAtIGh1ZTAgPiAxODApIHtcbiAgICAgICAgICAgICAgICBkaCA9IGh1ZTEgLSAoaHVlMCArIDM2MCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGh1ZTEgPCBodWUwICYmIGh1ZTAgLSBodWUxID4gMTgwKSB7XG4gICAgICAgICAgICAgICAgZGggPSBodWUxICsgMzYwIC0gaHVlMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGggPSBodWUxIC0gaHVlMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGh1ZSA9IGh1ZTAgKyBmICogZGg7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzTmFOKGh1ZTApKSB7XG4gICAgICAgICAgICBodWUgPSBodWUwO1xuICAgICAgICAgICAgaWYgKChsYnYxID09IDEgfHwgbGJ2MSA9PSAwKSAmJiBtICE9ICdoc3YnKSB7IHNhdCA9IHNhdDA7IH1cbiAgICAgICAgfSBlbHNlIGlmICghaXNOYU4oaHVlMSkpIHtcbiAgICAgICAgICAgIGh1ZSA9IGh1ZTE7XG4gICAgICAgICAgICBpZiAoKGxidjAgPT0gMSB8fCBsYnYwID09IDApICYmIG0gIT0gJ2hzdicpIHsgc2F0ID0gc2F0MTsgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHVlID0gTnVtYmVyLk5hTjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzYXQgPT09IHVuZGVmaW5lZCkgeyBzYXQgPSBzYXQwICsgZiAqIChzYXQxIC0gc2F0MCk7IH1cbiAgICAgICAgbGJ2ID0gbGJ2MCArIGYgKiAobGJ2MSAtIGxidjApO1xuICAgICAgICByZXR1cm4gbSA9PT0gJ29rbGNoJyA/IG5ldyBDb2xvciQ5KFtsYnYsIHNhdCwgaHVlXSwgbSkgOiBuZXcgQ29sb3IkOShbaHVlLCBzYXQsIGxidl0sIG0pO1xuICAgIH07XG5cbiAgICB2YXIgaW50ZXJwb2xhdGVfaHN4JDUgPSBfaHN4O1xuXG4gICAgdmFyIGxjaCA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgXHRyZXR1cm4gaW50ZXJwb2xhdGVfaHN4JDUoY29sMSwgY29sMiwgZiwgJ2xjaCcpO1xuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IkMS5sY2ggPSBsY2g7XG4gICAgaW50ZXJwb2xhdG9yJDEuaGNsID0gbGNoO1xuXG4gICAgdmFyIENvbG9yJDggPSBDb2xvcl8xO1xuXG4gICAgdmFyIG51bSA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgICAgIHZhciBjMSA9IGNvbDEubnVtKCk7XG4gICAgICAgIHZhciBjMiA9IGNvbDIubnVtKCk7XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IkOChjMSArIGYgKiAoYzItYzEpLCAnbnVtJylcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEubnVtID0gbnVtO1xuXG4gICAgdmFyIGludGVycG9sYXRlX2hzeCQ0ID0gX2hzeDtcblxuICAgIHZhciBoY2cgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgIFx0cmV0dXJuIGludGVycG9sYXRlX2hzeCQ0KGNvbDEsIGNvbDIsIGYsICdoY2cnKTtcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEuaGNnID0gaGNnO1xuXG4gICAgdmFyIGludGVycG9sYXRlX2hzeCQzID0gX2hzeDtcblxuICAgIHZhciBoc2kgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgIFx0cmV0dXJuIGludGVycG9sYXRlX2hzeCQzKGNvbDEsIGNvbDIsIGYsICdoc2knKTtcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEuaHNpID0gaHNpO1xuXG4gICAgdmFyIGludGVycG9sYXRlX2hzeCQyID0gX2hzeDtcblxuICAgIHZhciBoc2wgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgIFx0cmV0dXJuIGludGVycG9sYXRlX2hzeCQyKGNvbDEsIGNvbDIsIGYsICdoc2wnKTtcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEuaHNsID0gaHNsO1xuXG4gICAgdmFyIGludGVycG9sYXRlX2hzeCQxID0gX2hzeDtcblxuICAgIHZhciBoc3YgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgIFx0cmV0dXJuIGludGVycG9sYXRlX2hzeCQxKGNvbDEsIGNvbDIsIGYsICdoc3YnKTtcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yJDEuaHN2ID0gaHN2O1xuXG4gICAgdmFyIENvbG9yJDcgPSBDb2xvcl8xO1xuXG4gICAgdmFyIG9rbGFiID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICAgICAgdmFyIHh5ejAgPSBjb2wxLm9rbGFiKCk7XG4gICAgICAgIHZhciB4eXoxID0gY29sMi5va2xhYigpO1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yJDcoXG4gICAgICAgICAgICB4eXowWzBdICsgZiAqICh4eXoxWzBdIC0geHl6MFswXSksXG4gICAgICAgICAgICB4eXowWzFdICsgZiAqICh4eXoxWzFdIC0geHl6MFsxXSksXG4gICAgICAgICAgICB4eXowWzJdICsgZiAqICh4eXoxWzJdIC0geHl6MFsyXSksXG4gICAgICAgICAgICAnb2tsYWInXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLm9rbGFiID0gb2tsYWI7XG5cbiAgICB2YXIgaW50ZXJwb2xhdGVfaHN4ID0gX2hzeDtcblxuICAgIHZhciBva2xjaCA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgICAgIHJldHVybiBpbnRlcnBvbGF0ZV9oc3goY29sMSwgY29sMiwgZiwgJ29rbGNoJyk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvciQxLm9rbGNoID0gb2tsY2g7XG5cbiAgICB2YXIgQ29sb3IkNiA9IENvbG9yXzE7XG4gICAgdmFyIGNsaXBfcmdiJDEgPSB1dGlscy5jbGlwX3JnYjtcbiAgICB2YXIgcG93JDQgPSBNYXRoLnBvdztcbiAgICB2YXIgc3FydCQxID0gTWF0aC5zcXJ0O1xuICAgIHZhciBQSSQxID0gTWF0aC5QSTtcbiAgICB2YXIgY29zJDIgPSBNYXRoLmNvcztcbiAgICB2YXIgc2luJDIgPSBNYXRoLnNpbjtcbiAgICB2YXIgYXRhbjIkMSA9IE1hdGguYXRhbjI7XG5cbiAgICB2YXIgYXZlcmFnZSA9IGZ1bmN0aW9uIChjb2xvcnMsIG1vZGUsIHdlaWdodHMpIHtcbiAgICAgICAgaWYgKCBtb2RlID09PSB2b2lkIDAgKSBtb2RlPSdscmdiJztcbiAgICAgICAgaWYgKCB3ZWlnaHRzID09PSB2b2lkIDAgKSB3ZWlnaHRzPW51bGw7XG5cbiAgICAgICAgdmFyIGwgPSBjb2xvcnMubGVuZ3RoO1xuICAgICAgICBpZiAoIXdlaWdodHMpIHsgd2VpZ2h0cyA9IEFycmF5LmZyb20obmV3IEFycmF5KGwpKS5tYXAoZnVuY3Rpb24gKCkgeyByZXR1cm4gMTsgfSk7IH1cbiAgICAgICAgLy8gbm9ybWFsaXplIHdlaWdodHNcbiAgICAgICAgdmFyIGsgPSBsIC8gd2VpZ2h0cy5yZWR1Y2UoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSArIGI7IH0pO1xuICAgICAgICB3ZWlnaHRzLmZvckVhY2goZnVuY3Rpb24gKHcsaSkgeyB3ZWlnaHRzW2ldICo9IGs7IH0pO1xuICAgICAgICAvLyBjb252ZXJ0IGNvbG9ycyB0byBDb2xvciBvYmplY3RzXG4gICAgICAgIGNvbG9ycyA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIG5ldyBDb2xvciQ2KGMpOyB9KTtcbiAgICAgICAgaWYgKG1vZGUgPT09ICdscmdiJykge1xuICAgICAgICAgICAgcmV0dXJuIF9hdmVyYWdlX2xyZ2IoY29sb3JzLCB3ZWlnaHRzKVxuICAgICAgICB9XG4gICAgICAgIHZhciBmaXJzdCA9IGNvbG9ycy5zaGlmdCgpO1xuICAgICAgICB2YXIgeHl6ID0gZmlyc3QuZ2V0KG1vZGUpO1xuICAgICAgICB2YXIgY250ID0gW107XG4gICAgICAgIHZhciBkeCA9IDA7XG4gICAgICAgIHZhciBkeSA9IDA7XG4gICAgICAgIC8vIGluaXRpYWwgY29sb3JcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPHh5ei5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgeHl6W2ldID0gKHh5eltpXSB8fCAwKSAqIHdlaWdodHNbMF07XG4gICAgICAgICAgICBjbnQucHVzaChpc05hTih4eXpbaV0pID8gMCA6IHdlaWdodHNbMF0pO1xuICAgICAgICAgICAgaWYgKG1vZGUuY2hhckF0KGkpID09PSAnaCcgJiYgIWlzTmFOKHh5eltpXSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgQSA9IHh5eltpXSAvIDE4MCAqIFBJJDE7XG4gICAgICAgICAgICAgICAgZHggKz0gY29zJDIoQSkgKiB3ZWlnaHRzWzBdO1xuICAgICAgICAgICAgICAgIGR5ICs9IHNpbiQyKEEpICogd2VpZ2h0c1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhbHBoYSA9IGZpcnN0LmFscGhhKCkgKiB3ZWlnaHRzWzBdO1xuICAgICAgICBjb2xvcnMuZm9yRWFjaChmdW5jdGlvbiAoYyxjaSkge1xuICAgICAgICAgICAgdmFyIHh5ejIgPSBjLmdldChtb2RlKTtcbiAgICAgICAgICAgIGFscGhhICs9IGMuYWxwaGEoKSAqIHdlaWdodHNbY2krMV07XG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8eHl6Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTih4eXoyW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBjbnRbaV0gKz0gd2VpZ2h0c1tjaSsxXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGUuY2hhckF0KGkpID09PSAnaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBBID0geHl6MltpXSAvIDE4MCAqIFBJJDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBkeCArPSBjb3MkMihBKSAqIHdlaWdodHNbY2krMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkeSArPSBzaW4kMihBKSAqIHdlaWdodHNbY2krMV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4eXpbaV0gKz0geHl6MltpXSAqIHdlaWdodHNbY2krMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkkMT0wOyBpJDE8eHl6Lmxlbmd0aDsgaSQxKyspIHtcbiAgICAgICAgICAgIGlmIChtb2RlLmNoYXJBdChpJDEpID09PSAnaCcpIHtcbiAgICAgICAgICAgICAgICB2YXIgQSQxID0gYXRhbjIkMShkeSAvIGNudFtpJDFdLCBkeCAvIGNudFtpJDFdKSAvIFBJJDEgKiAxODA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKEEkMSA8IDApIHsgQSQxICs9IDM2MDsgfVxuICAgICAgICAgICAgICAgIHdoaWxlIChBJDEgPj0gMzYwKSB7IEEkMSAtPSAzNjA7IH1cbiAgICAgICAgICAgICAgICB4eXpbaSQxXSA9IEEkMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeHl6W2kkMV0gPSB4eXpbaSQxXS9jbnRbaSQxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhbHBoYSAvPSBsO1xuICAgICAgICByZXR1cm4gKG5ldyBDb2xvciQ2KHh5eiwgbW9kZSkpLmFscGhhKGFscGhhID4gMC45OTk5OSA/IDEgOiBhbHBoYSwgdHJ1ZSk7XG4gICAgfTtcblxuXG4gICAgdmFyIF9hdmVyYWdlX2xyZ2IgPSBmdW5jdGlvbiAoY29sb3JzLCB3ZWlnaHRzKSB7XG4gICAgICAgIHZhciBsID0gY29sb3JzLmxlbmd0aDtcbiAgICAgICAgdmFyIHh5eiA9IFswLDAsMCwwXTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpIDwgY29sb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY29sID0gY29sb3JzW2ldO1xuICAgICAgICAgICAgdmFyIGYgPSB3ZWlnaHRzW2ldIC8gbDtcbiAgICAgICAgICAgIHZhciByZ2IgPSBjb2wuX3JnYjtcbiAgICAgICAgICAgIHh5elswXSArPSBwb3ckNChyZ2JbMF0sMikgKiBmO1xuICAgICAgICAgICAgeHl6WzFdICs9IHBvdyQ0KHJnYlsxXSwyKSAqIGY7XG4gICAgICAgICAgICB4eXpbMl0gKz0gcG93JDQocmdiWzJdLDIpICogZjtcbiAgICAgICAgICAgIHh5elszXSArPSByZ2JbM10gKiBmO1xuICAgICAgICB9XG4gICAgICAgIHh5elswXSA9IHNxcnQkMSh4eXpbMF0pO1xuICAgICAgICB4eXpbMV0gPSBzcXJ0JDEoeHl6WzFdKTtcbiAgICAgICAgeHl6WzJdID0gc3FydCQxKHh5elsyXSk7XG4gICAgICAgIGlmICh4eXpbM10gPiAwLjk5OTk5OTkpIHsgeHl6WzNdID0gMTsgfVxuICAgICAgICByZXR1cm4gbmV3IENvbG9yJDYoY2xpcF9yZ2IkMSh4eXopKTtcbiAgICB9O1xuXG4gICAgLy8gbWluaW1hbCBtdWx0aS1wdXJwb3NlIGludGVyZmFjZVxuXG4gICAgLy8gQHJlcXVpcmVzIHV0aWxzIGNvbG9yIGFuYWx5emVcblxuICAgIHZhciBjaHJvbWEkNCA9IGNocm9tYV8xO1xuICAgIHZhciB0eXBlJDIgPSB1dGlscy50eXBlO1xuXG4gICAgdmFyIHBvdyQzID0gTWF0aC5wb3c7XG5cbiAgICB2YXIgc2NhbGUkMiA9IGZ1bmN0aW9uKGNvbG9ycykge1xuXG4gICAgICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgIHZhciBfbW9kZSA9ICdyZ2InO1xuICAgICAgICB2YXIgX25hY29sID0gY2hyb21hJDQoJyNjY2MnKTtcbiAgICAgICAgdmFyIF9zcHJlYWQgPSAwO1xuICAgICAgICAvLyBjb25zdCBfZml4ZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9kb21haW4gPSBbMCwgMV07XG4gICAgICAgIHZhciBfcG9zID0gW107XG4gICAgICAgIHZhciBfcGFkZGluZyA9IFswLDBdO1xuICAgICAgICB2YXIgX2NsYXNzZXMgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9jb2xvcnMgPSBbXTtcbiAgICAgICAgdmFyIF9vdXQgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9taW4gPSAwO1xuICAgICAgICB2YXIgX21heCA9IDE7XG4gICAgICAgIHZhciBfY29ycmVjdExpZ2h0bmVzcyA9IGZhbHNlO1xuICAgICAgICB2YXIgX2NvbG9yQ2FjaGUgPSB7fTtcbiAgICAgICAgdmFyIF91c2VDYWNoZSA9IHRydWU7XG4gICAgICAgIHZhciBfZ2FtbWEgPSAxO1xuXG4gICAgICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuXG4gICAgICAgIHZhciBzZXRDb2xvcnMgPSBmdW5jdGlvbihjb2xvcnMpIHtcbiAgICAgICAgICAgIGNvbG9ycyA9IGNvbG9ycyB8fCBbJyNmZmYnLCAnIzAwMCddO1xuICAgICAgICAgICAgaWYgKGNvbG9ycyAmJiB0eXBlJDIoY29sb3JzKSA9PT0gJ3N0cmluZycgJiYgY2hyb21hJDQuYnJld2VyICYmXG4gICAgICAgICAgICAgICAgY2hyb21hJDQuYnJld2VyW2NvbG9ycy50b0xvd2VyQ2FzZSgpXSkge1xuICAgICAgICAgICAgICAgIGNvbG9ycyA9IGNocm9tYSQ0LmJyZXdlcltjb2xvcnMudG9Mb3dlckNhc2UoKV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZSQyKGNvbG9ycykgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgc2luZ2xlIGNvbG9yXG4gICAgICAgICAgICAgICAgaWYgKGNvbG9ycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzID0gW2NvbG9yc1swXSwgY29sb3JzWzBdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbWFrZSBhIGNvcHkgb2YgdGhlIGNvbG9yc1xuICAgICAgICAgICAgICAgIGNvbG9ycyA9IGNvbG9ycy5zbGljZSgwKTtcbiAgICAgICAgICAgICAgICAvLyBjb252ZXJ0IHRvIGNocm9tYSBjbGFzc2VzXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYz0wOyBjPGNvbG9ycy5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcnNbY10gPSBjaHJvbWEkNChjb2xvcnNbY10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBhdXRvLWZpbGwgY29sb3IgcG9zaXRpb25cbiAgICAgICAgICAgICAgICBfcG9zLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYyQxPTA7IGMkMTxjb2xvcnMubGVuZ3RoOyBjJDErKykge1xuICAgICAgICAgICAgICAgICAgICBfcG9zLnB1c2goYyQxLyhjb2xvcnMubGVuZ3RoLTEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNldENhY2hlKCk7XG4gICAgICAgICAgICByZXR1cm4gX2NvbG9ycyA9IGNvbG9ycztcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgZ2V0Q2xhc3MgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKF9jbGFzc2VzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IF9jbGFzc2VzLmxlbmd0aC0xO1xuICAgICAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IG4gJiYgdmFsdWUgPj0gX2NsYXNzZXNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaS0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHRNYXBMaWdodG5lc3MgPSBmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfTtcbiAgICAgICAgdmFyIHRNYXBEb21haW4gPSBmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfTtcblxuICAgICAgICAvLyBjb25zdCBjbGFzc2lmeVZhbHVlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgLy8gICAgIGxldCB2YWwgPSB2YWx1ZTtcbiAgICAgICAgLy8gICAgIGlmIChfY2xhc3Nlcy5sZW5ndGggPiAyKSB7XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgbiA9IF9jbGFzc2VzLmxlbmd0aC0xO1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGkgPSBnZXRDbGFzcyh2YWx1ZSk7XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgbWluYyA9IF9jbGFzc2VzWzBdICsgKChfY2xhc3Nlc1sxXS1fY2xhc3Nlc1swXSkgKiAoMCArIChfc3ByZWFkICogMC41KSkpOyAgLy8gY2VudGVyIG9mIDFzdCBjbGFzc1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IG1heGMgPSBfY2xhc3Nlc1tuLTFdICsgKChfY2xhc3Nlc1tuXS1fY2xhc3Nlc1tuLTFdKSAqICgxIC0gKF9zcHJlYWQgKiAwLjUpKSk7ICAvLyBjZW50ZXIgb2YgbGFzdCBjbGFzc1xuICAgICAgICAvLyAgICAgICAgIHZhbCA9IF9taW4gKyAoKCgoX2NsYXNzZXNbaV0gKyAoKF9jbGFzc2VzW2krMV0gLSBfY2xhc3Nlc1tpXSkgKiAwLjUpKSAtIG1pbmMpIC8gKG1heGMtbWluYykpICogKF9tYXggLSBfbWluKSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICByZXR1cm4gdmFsO1xuICAgICAgICAvLyB9O1xuXG4gICAgICAgIHZhciBnZXRDb2xvciA9IGZ1bmN0aW9uKHZhbCwgYnlwYXNzTWFwKSB7XG4gICAgICAgICAgICB2YXIgY29sLCB0O1xuICAgICAgICAgICAgaWYgKGJ5cGFzc01hcCA9PSBudWxsKSB7IGJ5cGFzc01hcCA9IGZhbHNlOyB9XG4gICAgICAgICAgICBpZiAoaXNOYU4odmFsKSB8fCAodmFsID09PSBudWxsKSkgeyByZXR1cm4gX25hY29sOyB9XG4gICAgICAgICAgICBpZiAoIWJ5cGFzc01hcCkge1xuICAgICAgICAgICAgICAgIGlmIChfY2xhc3NlcyAmJiAoX2NsYXNzZXMubGVuZ3RoID4gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCB0aGUgY2xhc3NcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBnZXRDbGFzcyh2YWwpO1xuICAgICAgICAgICAgICAgICAgICB0ID0gYyAvIChfY2xhc3Nlcy5sZW5ndGgtMik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfbWF4ICE9PSBfbWluKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGp1c3QgaW50ZXJwb2xhdGUgYmV0d2VlbiBtaW4vbWF4XG4gICAgICAgICAgICAgICAgICAgIHQgPSAodmFsIC0gX21pbikgLyAoX21heCAtIF9taW4pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHQgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdCA9IHZhbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZG9tYWluIG1hcFxuICAgICAgICAgICAgdCA9IHRNYXBEb21haW4odCk7XG5cbiAgICAgICAgICAgIGlmICghYnlwYXNzTWFwKSB7XG4gICAgICAgICAgICAgICAgdCA9IHRNYXBMaWdodG5lc3ModCk7ICAvLyBsaWdodG5lc3MgY29ycmVjdGlvblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoX2dhbW1hICE9PSAxKSB7IHQgPSBwb3ckMyh0LCBfZ2FtbWEpOyB9XG5cbiAgICAgICAgICAgIHQgPSBfcGFkZGluZ1swXSArICh0ICogKDEgLSBfcGFkZGluZ1swXSAtIF9wYWRkaW5nWzFdKSk7XG5cbiAgICAgICAgICAgIHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCB0KSk7XG5cbiAgICAgICAgICAgIHZhciBrID0gTWF0aC5mbG9vcih0ICogMTAwMDApO1xuXG4gICAgICAgICAgICBpZiAoX3VzZUNhY2hlICYmIF9jb2xvckNhY2hlW2tdKSB7XG4gICAgICAgICAgICAgICAgY29sID0gX2NvbG9yQ2FjaGVba107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlJDIoX2NvbG9ycykgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9mb3IgaSBpbiBbMC4uX3Bvcy5sZW5ndGgtMV1cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPF9wb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gX3Bvc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0IDw9IHApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgPSBfY29sb3JzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh0ID49IHApICYmIChpID09PSAoX3Bvcy5sZW5ndGgtMSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sID0gX2NvbG9yc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ID4gcCAmJiB0IDwgX3Bvc1tpKzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9ICh0LXApLyhfcG9zW2krMV0tcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sID0gY2hyb21hJDQuaW50ZXJwb2xhdGUoX2NvbG9yc1tpXSwgX2NvbG9yc1tpKzFdLCB0LCBfbW9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUkMihfY29sb3JzKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb2wgPSBfY29sb3JzKHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoX3VzZUNhY2hlKSB7IF9jb2xvckNhY2hlW2tdID0gY29sOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29sO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciByZXNldENhY2hlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX2NvbG9yQ2FjaGUgPSB7fTsgfTtcblxuICAgICAgICBzZXRDb2xvcnMoY29sb3JzKTtcblxuICAgICAgICAvLyBwdWJsaWMgaW50ZXJmYWNlXG5cbiAgICAgICAgdmFyIGYgPSBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICB2YXIgYyA9IGNocm9tYSQ0KGdldENvbG9yKHYpKTtcbiAgICAgICAgICAgIGlmIChfb3V0ICYmIGNbX291dF0pIHsgcmV0dXJuIGNbX291dF0oKTsgfSBlbHNlIHsgcmV0dXJuIGM7IH1cbiAgICAgICAgfTtcblxuICAgICAgICBmLmNsYXNzZXMgPSBmdW5jdGlvbihjbGFzc2VzKSB7XG4gICAgICAgICAgICBpZiAoY2xhc3NlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUkMihjbGFzc2VzKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgICAgICBfY2xhc3NlcyA9IGNsYXNzZXM7XG4gICAgICAgICAgICAgICAgICAgIF9kb21haW4gPSBbY2xhc3Nlc1swXSwgY2xhc3Nlc1tjbGFzc2VzLmxlbmd0aC0xXV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBjaHJvbWEkNC5hbmFseXplKF9kb21haW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xhc3NlcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NsYXNzZXMgPSBbZC5taW4sIGQubWF4XTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jbGFzc2VzID0gY2hyb21hJDQubGltaXRzKGQsICdlJywgY2xhc3Nlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX2NsYXNzZXM7XG4gICAgICAgIH07XG5cblxuICAgICAgICBmLmRvbWFpbiA9IGZ1bmN0aW9uKGRvbWFpbikge1xuICAgICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9kb21haW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbWluID0gZG9tYWluWzBdO1xuICAgICAgICAgICAgX21heCA9IGRvbWFpbltkb21haW4ubGVuZ3RoLTFdO1xuICAgICAgICAgICAgX3BvcyA9IFtdO1xuICAgICAgICAgICAgdmFyIGsgPSBfY29sb3JzLmxlbmd0aDtcbiAgICAgICAgICAgIGlmICgoZG9tYWluLmxlbmd0aCA9PT0gaykgJiYgKF9taW4gIT09IF9tYXgpKSB7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIHBvc2l0aW9uc1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gQXJyYXkuZnJvbShkb21haW4pOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IGxpc3RbaV07XG5cbiAgICAgICAgICAgICAgICAgIF9wb3MucHVzaCgoZC1fbWluKSAvIChfbWF4LV9taW4pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGM9MDsgYzxrOyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgX3Bvcy5wdXNoKGMvKGstMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZG9tYWluLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGRvbWFpbiBtYXBcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRPdXQgPSBkb21haW4ubWFwKGZ1bmN0aW9uIChkLGkpIHsgcmV0dXJuIGkvKGRvbWFpbi5sZW5ndGgtMSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdEJyZWFrcyA9IGRvbWFpbi5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIChkIC0gX21pbikgLyAoX21heCAtIF9taW4pOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0QnJlYWtzLmV2ZXJ5KGZ1bmN0aW9uICh2YWwsIGkpIHsgcmV0dXJuIHRPdXRbaV0gPT09IHZhbDsgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRNYXBEb21haW4gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0IDw9IDAgfHwgdCA+PSAxKSB7IHJldHVybiB0OyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICh0ID49IHRCcmVha3NbaSsxXSkgeyBpKys7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZiA9ICh0IC0gdEJyZWFrc1tpXSkgLyAodEJyZWFrc1tpKzFdIC0gdEJyZWFrc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG91dCA9IHRPdXRbaV0gKyBmICogKHRPdXRbaSsxXSAtIHRPdXRbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfZG9tYWluID0gW19taW4sIF9tYXhdO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5tb2RlID0gZnVuY3Rpb24oX20pIHtcbiAgICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfbW9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9tb2RlID0gX207XG4gICAgICAgICAgICByZXNldENhY2hlKCk7XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLnJhbmdlID0gZnVuY3Rpb24oY29sb3JzLCBfcG9zKSB7XG4gICAgICAgICAgICBzZXRDb2xvcnMoY29sb3JzKTtcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYub3V0ID0gZnVuY3Rpb24oX28pIHtcbiAgICAgICAgICAgIF9vdXQgPSBfbztcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYuc3ByZWFkID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3NwcmVhZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9zcHJlYWQgPSB2YWw7XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLmNvcnJlY3RMaWdodG5lc3MgPSBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICBpZiAodiA9PSBudWxsKSB7IHYgPSB0cnVlOyB9XG4gICAgICAgICAgICBfY29ycmVjdExpZ2h0bmVzcyA9IHY7XG4gICAgICAgICAgICByZXNldENhY2hlKCk7XG4gICAgICAgICAgICBpZiAoX2NvcnJlY3RMaWdodG5lc3MpIHtcbiAgICAgICAgICAgICAgICB0TWFwTGlnaHRuZXNzID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgTDAgPSBnZXRDb2xvcigwLCB0cnVlKS5sYWIoKVswXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEwxID0gZ2V0Q29sb3IoMSwgdHJ1ZSkubGFiKClbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBwb2wgPSBMMCA+IEwxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgTF9hY3R1YWwgPSBnZXRDb2xvcih0LCB0cnVlKS5sYWIoKVswXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIExfaWRlYWwgPSBMMCArICgoTDEgLSBMMCkgKiB0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIExfZGlmZiA9IExfYWN0dWFsIC0gTF9pZGVhbDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQwID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQxID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heF9pdGVyID0gMjA7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgoTWF0aC5hYnMoTF9kaWZmKSA+IDFlLTIpICYmIChtYXhfaXRlci0tID4gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9sKSB7IExfZGlmZiAqPSAtMTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChMX2RpZmYgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCArPSAodDEgLSB0KSAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0MSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgKz0gKHQwIC0gdCkgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExfYWN0dWFsID0gZ2V0Q29sb3IodCwgdHJ1ZSkubGFiKClbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIExfZGlmZiA9IExfYWN0dWFsIC0gTF9pZGVhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdE1hcExpZ2h0bmVzcyA9IGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5wYWRkaW5nID0gZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgaWYgKHAgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlJDIocCkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHAgPSBbcCxwXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3BhZGRpbmcgPSBwO1xuICAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3BhZGRpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5jb2xvcnMgPSBmdW5jdGlvbihudW1Db2xvcnMsIG91dCkge1xuICAgICAgICAgICAgLy8gSWYgbm8gYXJndW1lbnRzIGFyZSBnaXZlbiwgcmV0dXJuIHRoZSBvcmlnaW5hbCBjb2xvcnMgdGhhdCB3ZXJlIHByb3ZpZGVkXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHsgb3V0ID0gJ2hleCc7IH1cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfY29sb3JzLnNsaWNlKDApO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG51bUNvbG9ycyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtmKDAuNSldO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG51bUNvbG9ycyA+IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgZG0gPSBfZG9tYWluWzBdO1xuICAgICAgICAgICAgICAgIHZhciBkZCA9IF9kb21haW5bMV0gLSBkbTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfX3JhbmdlX18oMCwgbnVtQ29sb3JzLCBmYWxzZSkubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiBmKCBkbSArICgoaS8obnVtQ29sb3JzLTEpKSAqIGRkKSApOyB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIHsgLy8gcmV0dXJucyBhbGwgY29sb3JzIGJhc2VkIG9uIHRoZSBkZWZpbmVkIGNsYXNzZXNcbiAgICAgICAgICAgICAgICBjb2xvcnMgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgc2FtcGxlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChfY2xhc3NlcyAmJiAoX2NsYXNzZXMubGVuZ3RoID4gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDEsIGVuZCA9IF9jbGFzc2VzLmxlbmd0aCwgYXNjID0gMSA8PSBlbmQ7IGFzYyA/IGkgPCBlbmQgOiBpID4gZW5kOyBhc2MgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbXBsZXMucHVzaCgoX2NsYXNzZXNbaS0xXStfY2xhc3Nlc1tpXSkqMC41KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZXMgPSBfZG9tYWluO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHQgPSBzYW1wbGVzLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gZih2KTsgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaHJvbWEkNFtvdXRdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0Lm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gY1tvdXRdKCk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcblxuICAgICAgICBmLmNhY2hlID0gZnVuY3Rpb24oYykge1xuICAgICAgICAgICAgaWYgKGMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIF91c2VDYWNoZSA9IGM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdXNlQ2FjaGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5nYW1tYSA9IGZ1bmN0aW9uKGcpIHtcbiAgICAgICAgICAgIGlmIChnICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBfZ2FtbWEgPSBnO1xuICAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2dhbW1hO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGYubm9kYXRhID0gZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgaWYgKGQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIF9uYWNvbCA9IGNocm9tYSQ0KGQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX25hY29sO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBmO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfX3JhbmdlX18obGVmdCwgcmlnaHQsIGluY2x1c2l2ZSkge1xuICAgICAgdmFyIHJhbmdlID0gW107XG4gICAgICB2YXIgYXNjZW5kaW5nID0gbGVmdCA8IHJpZ2h0O1xuICAgICAgdmFyIGVuZCA9ICFpbmNsdXNpdmUgPyByaWdodCA6IGFzY2VuZGluZyA/IHJpZ2h0ICsgMSA6IHJpZ2h0IC0gMTtcbiAgICAgIGZvciAodmFyIGkgPSBsZWZ0OyBhc2NlbmRpbmcgPyBpIDwgZW5kIDogaSA+IGVuZDsgYXNjZW5kaW5nID8gaSsrIDogaS0tKSB7XG4gICAgICAgIHJhbmdlLnB1c2goaSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmFuZ2U7XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBpbnRlcnBvbGF0ZXMgYmV0d2VlbiBhIHNldCBvZiBjb2xvcnMgdXppbmcgYSBiZXppZXIgc3BsaW5lXG4gICAgLy9cblxuICAgIC8vIEByZXF1aXJlcyB1dGlscyBsYWJcbiAgICB2YXIgQ29sb3IkNSA9IENvbG9yXzE7XG5cbiAgICB2YXIgc2NhbGUkMSA9IHNjYWxlJDI7XG5cbiAgICAvLyBudGggcm93IG9mIHRoZSBwYXNjYWwgdHJpYW5nbGVcbiAgICB2YXIgYmlub21fcm93ID0gZnVuY3Rpb24obikge1xuICAgICAgICB2YXIgcm93ID0gWzEsIDFdO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgdmFyIG5ld3JvdyA9IFsxXTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDw9IHJvdy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIG5ld3Jvd1tqXSA9IChyb3dbal0gfHwgMCkgKyByb3dbaiAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcm93ID0gbmV3cm93O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3c7XG4gICAgfTtcblxuICAgIHZhciBiZXppZXIgPSBmdW5jdGlvbihjb2xvcnMpIHtcbiAgICAgICAgdmFyIGFzc2lnbiwgYXNzaWduJDEsIGFzc2lnbiQyO1xuXG4gICAgICAgIHZhciBJLCBsYWIwLCBsYWIxLCBsYWIyO1xuICAgICAgICBjb2xvcnMgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBuZXcgQ29sb3IkNShjKTsgfSk7XG4gICAgICAgIGlmIChjb2xvcnMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAvLyBsaW5lYXIgaW50ZXJwb2xhdGlvblxuICAgICAgICAgICAgKGFzc2lnbiA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMubGFiKCk7IH0pLCBsYWIwID0gYXNzaWduWzBdLCBsYWIxID0gYXNzaWduWzFdKTtcbiAgICAgICAgICAgIEkgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhYiA9IChbMCwgMSwgMl0ubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiBsYWIwW2ldICsgKHQgKiAobGFiMVtpXSAtIGxhYjBbaV0pKTsgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IkNShsYWIsICdsYWInKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoY29sb3JzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgLy8gcXVhZHJhdGljIGJlemllciBpbnRlcnBvbGF0aW9uXG4gICAgICAgICAgICAoYXNzaWduJDEgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLmxhYigpOyB9KSwgbGFiMCA9IGFzc2lnbiQxWzBdLCBsYWIxID0gYXNzaWduJDFbMV0sIGxhYjIgPSBhc3NpZ24kMVsyXSk7XG4gICAgICAgICAgICBJID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIHZhciBsYWIgPSAoWzAsIDEsIDJdLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gKCgxLXQpKigxLXQpICogbGFiMFtpXSkgKyAoMiAqICgxLXQpICogdCAqIGxhYjFbaV0pICsgKHQgKiB0ICogbGFiMltpXSk7IH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yJDUobGFiLCAnbGFiJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGNvbG9ycy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIC8vIGN1YmljIGJlemllciBpbnRlcnBvbGF0aW9uXG4gICAgICAgICAgICB2YXIgbGFiMztcbiAgICAgICAgICAgIChhc3NpZ24kMiA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMubGFiKCk7IH0pLCBsYWIwID0gYXNzaWduJDJbMF0sIGxhYjEgPSBhc3NpZ24kMlsxXSwgbGFiMiA9IGFzc2lnbiQyWzJdLCBsYWIzID0gYXNzaWduJDJbM10pO1xuICAgICAgICAgICAgSSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFiID0gKFswLCAxLCAyXS5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuICgoMS10KSooMS10KSooMS10KSAqIGxhYjBbaV0pICsgKDMgKiAoMS10KSAqICgxLXQpICogdCAqIGxhYjFbaV0pICsgKDMgKiAoMS10KSAqIHQgKiB0ICogbGFiMltpXSkgKyAodCp0KnQgKiBsYWIzW2ldKTsgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IkNShsYWIsICdsYWInKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoY29sb3JzLmxlbmd0aCA+PSA1KSB7XG4gICAgICAgICAgICAvLyBnZW5lcmFsIGNhc2UgKGRlZ3JlZSBuIGJlemllcilcbiAgICAgICAgICAgIHZhciBsYWJzLCByb3csIG47XG4gICAgICAgICAgICBsYWJzID0gY29sb3JzLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5sYWIoKTsgfSk7XG4gICAgICAgICAgICBuID0gY29sb3JzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICByb3cgPSBiaW5vbV9yb3cobik7XG4gICAgICAgICAgICBJID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdSA9IDEgLSB0O1xuICAgICAgICAgICAgICAgIHZhciBsYWIgPSAoWzAsIDEsIDJdLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gbGFicy5yZWR1Y2UoZnVuY3Rpb24gKHN1bSwgZWwsIGopIHsgcmV0dXJuIChzdW0gKyByb3dbal0gKiBNYXRoLnBvdyggdSwgKG4gLSBqKSApICogTWF0aC5wb3coIHQsIGogKSAqIGVsW2ldKTsgfSwgMCk7IH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yJDUobGFiLCAnbGFiJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJObyBwb2ludCBpbiBydW5uaW5nIGJlemllciB3aXRoIG9ubHkgb25lIGNvbG9yLlwiKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBJO1xuICAgIH07XG5cbiAgICB2YXIgYmV6aWVyXzEgPSBmdW5jdGlvbiAoY29sb3JzKSB7XG4gICAgICAgIHZhciBmID0gYmV6aWVyKGNvbG9ycyk7XG4gICAgICAgIGYuc2NhbGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzY2FsZSQxKGYpOyB9O1xuICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgKiBpbnRlcnBvbGF0ZXMgYmV0d2VlbiBhIHNldCBvZiBjb2xvcnMgdXppbmcgYSBiZXppZXIgc3BsaW5lXG4gICAgICogYmxlbmQgbW9kZSBmb3JtdWxhcyB0YWtlbiBmcm9tIGh0dHA6Ly93d3cudmVudHVyZS13YXJlLmNvbS9rZXZpbi9jb2RpbmcvbGV0cy1sZWFybi1tYXRoLXBob3Rvc2hvcC1ibGVuZC1tb2Rlcy9cbiAgICAgKi9cblxuICAgIHZhciBjaHJvbWEkMyA9IGNocm9tYV8xO1xuXG4gICAgdmFyIGJsZW5kID0gZnVuY3Rpb24gKGJvdHRvbSwgdG9wLCBtb2RlKSB7XG4gICAgICAgIGlmICghYmxlbmRbbW9kZV0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBibGVuZCBtb2RlICcgKyBtb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmxlbmRbbW9kZV0oYm90dG9tLCB0b3ApO1xuICAgIH07XG5cbiAgICB2YXIgYmxlbmRfZiA9IGZ1bmN0aW9uIChmKSB7IHJldHVybiBmdW5jdGlvbiAoYm90dG9tLHRvcCkge1xuICAgICAgICAgICAgdmFyIGMwID0gY2hyb21hJDModG9wKS5yZ2IoKTtcbiAgICAgICAgICAgIHZhciBjMSA9IGNocm9tYSQzKGJvdHRvbSkucmdiKCk7XG4gICAgICAgICAgICByZXR1cm4gY2hyb21hJDMucmdiKGYoYzAsIGMxKSk7XG4gICAgICAgIH07IH07XG5cbiAgICB2YXIgZWFjaCA9IGZ1bmN0aW9uIChmKSB7IHJldHVybiBmdW5jdGlvbiAoYzAsIGMxKSB7XG4gICAgICAgICAgICB2YXIgb3V0ID0gW107XG4gICAgICAgICAgICBvdXRbMF0gPSBmKGMwWzBdLCBjMVswXSk7XG4gICAgICAgICAgICBvdXRbMV0gPSBmKGMwWzFdLCBjMVsxXSk7XG4gICAgICAgICAgICBvdXRbMl0gPSBmKGMwWzJdLCBjMVsyXSk7XG4gICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICB9OyB9O1xuXG4gICAgdmFyIG5vcm1hbCA9IGZ1bmN0aW9uIChhKSB7IHJldHVybiBhOyB9O1xuICAgIHZhciBtdWx0aXBseSA9IGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIGEgKiBiIC8gMjU1OyB9O1xuICAgIHZhciBkYXJrZW4gPSBmdW5jdGlvbiAoYSxiKSB7IHJldHVybiBhID4gYiA/IGIgOiBhOyB9O1xuICAgIHZhciBsaWdodGVuID0gZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gYSA+IGIgPyBhIDogYjsgfTtcbiAgICB2YXIgc2NyZWVuID0gZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gMjU1ICogKDEgLSAoMS1hLzI1NSkgKiAoMS1iLzI1NSkpOyB9O1xuICAgIHZhciBvdmVybGF5ID0gZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gYiA8IDEyOCA/IDIgKiBhICogYiAvIDI1NSA6IDI1NSAqICgxIC0gMiAqICgxIC0gYSAvIDI1NSApICogKCAxIC0gYiAvIDI1NSApKTsgfTtcbiAgICB2YXIgYnVybiA9IGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIDI1NSAqICgxIC0gKDEgLSBiIC8gMjU1KSAvIChhLzI1NSkpOyB9O1xuICAgIHZhciBkb2RnZSA9IGZ1bmN0aW9uIChhLGIpIHtcbiAgICAgICAgaWYgKGEgPT09IDI1NSkgeyByZXR1cm4gMjU1OyB9XG4gICAgICAgIGEgPSAyNTUgKiAoYiAvIDI1NSkgLyAoMSAtIGEgLyAyNTUpO1xuICAgICAgICByZXR1cm4gYSA+IDI1NSA/IDI1NSA6IGFcbiAgICB9O1xuXG4gICAgLy8gIyBhZGQgPSAoYSxiKSAtPlxuICAgIC8vICMgICAgIGlmIChhICsgYiA+IDI1NSkgdGhlbiAyNTUgZWxzZSBhICsgYlxuXG4gICAgYmxlbmQubm9ybWFsID0gYmxlbmRfZihlYWNoKG5vcm1hbCkpO1xuICAgIGJsZW5kLm11bHRpcGx5ID0gYmxlbmRfZihlYWNoKG11bHRpcGx5KSk7XG4gICAgYmxlbmQuc2NyZWVuID0gYmxlbmRfZihlYWNoKHNjcmVlbikpO1xuICAgIGJsZW5kLm92ZXJsYXkgPSBibGVuZF9mKGVhY2gob3ZlcmxheSkpO1xuICAgIGJsZW5kLmRhcmtlbiA9IGJsZW5kX2YoZWFjaChkYXJrZW4pKTtcbiAgICBibGVuZC5saWdodGVuID0gYmxlbmRfZihlYWNoKGxpZ2h0ZW4pKTtcbiAgICBibGVuZC5kb2RnZSA9IGJsZW5kX2YoZWFjaChkb2RnZSkpO1xuICAgIGJsZW5kLmJ1cm4gPSBibGVuZF9mKGVhY2goYnVybikpO1xuICAgIC8vIGJsZW5kLmFkZCA9IGJsZW5kX2YoZWFjaChhZGQpKTtcblxuICAgIHZhciBibGVuZF8xID0gYmxlbmQ7XG5cbiAgICAvLyBjdWJlaGVsaXggaW50ZXJwb2xhdGlvblxuICAgIC8vIGJhc2VkIG9uIEQuQS4gR3JlZW4gXCJBIGNvbG91ciBzY2hlbWUgZm9yIHRoZSBkaXNwbGF5IG9mIGFzdHJvbm9taWNhbCBpbnRlbnNpdHkgaW1hZ2VzXCJcbiAgICAvLyBodHRwOi8vYXN0cm9uLXNvYy5pbi9idWxsZXRpbi8xMUp1bmUvMjg5MzkyMDExLnBkZlxuXG4gICAgdmFyIHR5cGUkMSA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIGNsaXBfcmdiID0gdXRpbHMuY2xpcF9yZ2I7XG4gICAgdmFyIFRXT1BJID0gdXRpbHMuVFdPUEk7XG4gICAgdmFyIHBvdyQyID0gTWF0aC5wb3c7XG4gICAgdmFyIHNpbiQxID0gTWF0aC5zaW47XG4gICAgdmFyIGNvcyQxID0gTWF0aC5jb3M7XG4gICAgdmFyIGNocm9tYSQyID0gY2hyb21hXzE7XG5cbiAgICB2YXIgY3ViZWhlbGl4ID0gZnVuY3Rpb24oc3RhcnQsIHJvdGF0aW9ucywgaHVlLCBnYW1tYSwgbGlnaHRuZXNzKSB7XG4gICAgICAgIGlmICggc3RhcnQgPT09IHZvaWQgMCApIHN0YXJ0PTMwMDtcbiAgICAgICAgaWYgKCByb3RhdGlvbnMgPT09IHZvaWQgMCApIHJvdGF0aW9ucz0tMS41O1xuICAgICAgICBpZiAoIGh1ZSA9PT0gdm9pZCAwICkgaHVlPTE7XG4gICAgICAgIGlmICggZ2FtbWEgPT09IHZvaWQgMCApIGdhbW1hPTE7XG4gICAgICAgIGlmICggbGlnaHRuZXNzID09PSB2b2lkIDAgKSBsaWdodG5lc3M9WzAsMV07XG5cbiAgICAgICAgdmFyIGRoID0gMCwgZGw7XG4gICAgICAgIGlmICh0eXBlJDEobGlnaHRuZXNzKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgZGwgPSBsaWdodG5lc3NbMV0gLSBsaWdodG5lc3NbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkbCA9IDA7XG4gICAgICAgICAgICBsaWdodG5lc3MgPSBbbGlnaHRuZXNzLCBsaWdodG5lc3NdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGYgPSBmdW5jdGlvbihmcmFjdCkge1xuICAgICAgICAgICAgdmFyIGEgPSBUV09QSSAqICgoKHN0YXJ0KzEyMCkvMzYwKSArIChyb3RhdGlvbnMgKiBmcmFjdCkpO1xuICAgICAgICAgICAgdmFyIGwgPSBwb3ckMihsaWdodG5lc3NbMF0gKyAoZGwgKiBmcmFjdCksIGdhbW1hKTtcbiAgICAgICAgICAgIHZhciBoID0gZGggIT09IDAgPyBodWVbMF0gKyAoZnJhY3QgKiBkaCkgOiBodWU7XG4gICAgICAgICAgICB2YXIgYW1wID0gKGggKiBsICogKDEtbCkpIC8gMjtcbiAgICAgICAgICAgIHZhciBjb3NfYSA9IGNvcyQxKGEpO1xuICAgICAgICAgICAgdmFyIHNpbl9hID0gc2luJDEoYSk7XG4gICAgICAgICAgICB2YXIgciA9IGwgKyAoYW1wICogKCgtMC4xNDg2MSAqIGNvc19hKSArICgxLjc4Mjc3KiBzaW5fYSkpKTtcbiAgICAgICAgICAgIHZhciBnID0gbCArIChhbXAgKiAoKC0wLjI5MjI3ICogY29zX2EpIC0gKDAuOTA2NDkqIHNpbl9hKSkpO1xuICAgICAgICAgICAgdmFyIGIgPSBsICsgKGFtcCAqICgrMS45NzI5NCAqIGNvc19hKSk7XG4gICAgICAgICAgICByZXR1cm4gY2hyb21hJDIoY2xpcF9yZ2IoW3IqMjU1LGcqMjU1LGIqMjU1LDFdKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5zdGFydCA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgIGlmICgocyA9PSBudWxsKSkgeyByZXR1cm4gc3RhcnQ7IH1cbiAgICAgICAgICAgIHN0YXJ0ID0gcztcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYucm90YXRpb25zID0gZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgaWYgKChyID09IG51bGwpKSB7IHJldHVybiByb3RhdGlvbnM7IH1cbiAgICAgICAgICAgIHJvdGF0aW9ucyA9IHI7XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLmdhbW1hID0gZnVuY3Rpb24oZykge1xuICAgICAgICAgICAgaWYgKChnID09IG51bGwpKSB7IHJldHVybiBnYW1tYTsgfVxuICAgICAgICAgICAgZ2FtbWEgPSBnO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5odWUgPSBmdW5jdGlvbihoKSB7XG4gICAgICAgICAgICBpZiAoKGggPT0gbnVsbCkpIHsgcmV0dXJuIGh1ZTsgfVxuICAgICAgICAgICAgaHVlID0gaDtcbiAgICAgICAgICAgIGlmICh0eXBlJDEoaHVlKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIGRoID0gaHVlWzFdIC0gaHVlWzBdO1xuICAgICAgICAgICAgICAgIGlmIChkaCA9PT0gMCkgeyBodWUgPSBodWVbMV07IH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5saWdodG5lc3MgPSBmdW5jdGlvbihoKSB7XG4gICAgICAgICAgICBpZiAoKGggPT0gbnVsbCkpIHsgcmV0dXJuIGxpZ2h0bmVzczsgfVxuICAgICAgICAgICAgaWYgKHR5cGUkMShoKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIGxpZ2h0bmVzcyA9IGg7XG4gICAgICAgICAgICAgICAgZGwgPSBoWzFdIC0gaFswXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlnaHRuZXNzID0gW2gsaF07XG4gICAgICAgICAgICAgICAgZGwgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5zY2FsZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNocm9tYSQyLnNjYWxlKGYpOyB9O1xuXG4gICAgICAgIGYuaHVlKGh1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcblxuICAgIHZhciBDb2xvciQ0ID0gQ29sb3JfMTtcbiAgICB2YXIgZGlnaXRzID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuXG4gICAgdmFyIGZsb29yJDEgPSBNYXRoLmZsb29yO1xuICAgIHZhciByYW5kb20gPSBNYXRoLnJhbmRvbTtcblxuICAgIHZhciByYW5kb21fMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvZGUgPSAnIyc7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaTw2OyBpKyspIHtcbiAgICAgICAgICAgIGNvZGUgKz0gZGlnaXRzLmNoYXJBdChmbG9vciQxKHJhbmRvbSgpICogMTYpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IENvbG9yJDQoY29kZSwgJ2hleCcpO1xuICAgIH07XG5cbiAgICB2YXIgdHlwZSA9IHR5cGUkcDtcbiAgICB2YXIgbG9nID0gTWF0aC5sb2c7XG4gICAgdmFyIHBvdyQxID0gTWF0aC5wb3c7XG4gICAgdmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbiAgICB2YXIgYWJzJDEgPSBNYXRoLmFicztcblxuXG4gICAgdmFyIGFuYWx5emUgPSBmdW5jdGlvbiAoZGF0YSwga2V5KSB7XG4gICAgICAgIGlmICgga2V5ID09PSB2b2lkIDAgKSBrZXk9bnVsbDtcblxuICAgICAgICB2YXIgciA9IHtcbiAgICAgICAgICAgIG1pbjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG1heDogTnVtYmVyLk1BWF9WQUxVRSotMSxcbiAgICAgICAgICAgIHN1bTogMCxcbiAgICAgICAgICAgIHZhbHVlczogW10sXG4gICAgICAgICAgICBjb3VudDogMFxuICAgICAgICB9O1xuICAgICAgICBpZiAodHlwZShkYXRhKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGRhdGEgPSBPYmplY3QudmFsdWVzKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICBpZiAoa2V5ICYmIHR5cGUodmFsKSA9PT0gJ29iamVjdCcpIHsgdmFsID0gdmFsW2tleV07IH1cbiAgICAgICAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwgJiYgIWlzTmFOKHZhbCkpIHtcbiAgICAgICAgICAgICAgICByLnZhbHVlcy5wdXNoKHZhbCk7XG4gICAgICAgICAgICAgICAgci5zdW0gKz0gdmFsO1xuICAgICAgICAgICAgICAgIGlmICh2YWwgPCByLm1pbikgeyByLm1pbiA9IHZhbDsgfVxuICAgICAgICAgICAgICAgIGlmICh2YWwgPiByLm1heCkgeyByLm1heCA9IHZhbDsgfVxuICAgICAgICAgICAgICAgIHIuY291bnQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgci5kb21haW4gPSBbci5taW4sIHIubWF4XTtcblxuICAgICAgICByLmxpbWl0cyA9IGZ1bmN0aW9uIChtb2RlLCBudW0pIHsgcmV0dXJuIGxpbWl0cyhyLCBtb2RlLCBudW0pOyB9O1xuXG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG5cblxuICAgIHZhciBsaW1pdHMgPSBmdW5jdGlvbiAoZGF0YSwgbW9kZSwgbnVtKSB7XG4gICAgICAgIGlmICggbW9kZSA9PT0gdm9pZCAwICkgbW9kZT0nZXF1YWwnO1xuICAgICAgICBpZiAoIG51bSA9PT0gdm9pZCAwICkgbnVtPTc7XG5cbiAgICAgICAgaWYgKHR5cGUoZGF0YSkgPT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgZGF0YSA9IGFuYWx5emUoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1pbiA9IGRhdGEubWluO1xuICAgICAgICB2YXIgbWF4ID0gZGF0YS5tYXg7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBkYXRhLnZhbHVlcy5zb3J0KGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIGEtYjsgfSk7XG5cbiAgICAgICAgaWYgKG51bSA9PT0gMSkgeyByZXR1cm4gW21pbixtYXhdOyB9XG5cbiAgICAgICAgdmFyIGxpbWl0cyA9IFtdO1xuXG4gICAgICAgIGlmIChtb2RlLnN1YnN0cigwLDEpID09PSAnYycpIHsgLy8gY29udGludW91c1xuICAgICAgICAgICAgbGltaXRzLnB1c2gobWluKTtcbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1heCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kZS5zdWJzdHIoMCwxKSA9PT0gJ2UnKSB7IC8vIGVxdWFsIGludGVydmFsXG4gICAgICAgICAgICBsaW1pdHMucHVzaChtaW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaT0xOyBpPG51bTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGltaXRzLnB1c2gobWluKygoaS9udW0pKihtYXgtbWluKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGltaXRzLnB1c2gobWF4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKG1vZGUuc3Vic3RyKDAsMSkgPT09ICdsJykgeyAvLyBsb2cgc2NhbGVcbiAgICAgICAgICAgIGlmIChtaW4gPD0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTG9nYXJpdGhtaWMgc2NhbGVzIGFyZSBvbmx5IHBvc3NpYmxlIGZvciB2YWx1ZXMgPiAwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbWluX2xvZyA9IE1hdGguTE9HMTBFICogbG9nKG1pbik7XG4gICAgICAgICAgICB2YXIgbWF4X2xvZyA9IE1hdGguTE9HMTBFICogbG9nKG1heCk7XG4gICAgICAgICAgICBsaW1pdHMucHVzaChtaW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQxPTE7IGkkMTxudW07IGkkMSsrKSB7XG4gICAgICAgICAgICAgICAgbGltaXRzLnB1c2gocG93JDEoMTAsIG1pbl9sb2cgKyAoKGkkMS9udW0pICogKG1heF9sb2cgLSBtaW5fbG9nKSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1heCk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChtb2RlLnN1YnN0cigwLDEpID09PSAncScpIHsgLy8gcXVhbnRpbGUgc2NhbGVcbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1pbik7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDI9MTsgaSQyPG51bTsgaSQyKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcCA9ICgodmFsdWVzLmxlbmd0aC0xKSAqIGkkMikvbnVtO1xuICAgICAgICAgICAgICAgIHZhciBwYiA9IGZsb29yKHApO1xuICAgICAgICAgICAgICAgIGlmIChwYiA9PT0gcCkge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdHMucHVzaCh2YWx1ZXNbcGJdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBwID4gcGJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByID0gcCAtIHBiO1xuICAgICAgICAgICAgICAgICAgICBsaW1pdHMucHVzaCgodmFsdWVzW3BiXSooMS1wcikpICsgKHZhbHVlc1twYisxXSpwcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1heCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKG1vZGUuc3Vic3RyKDAsMSkgPT09ICdrJykgeyAvLyBrLW1lYW5zIGNsdXN0ZXJpbmdcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBpbXBsZW1lbnRhdGlvbiBiYXNlZCBvblxuICAgICAgICAgICAgaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2ZpZ3VlL3NvdXJjZS9icm93c2UvdHJ1bmsvZmlndWUuanMjMzM2XG4gICAgICAgICAgICBzaW1wbGlmaWVkIGZvciAxLWQgaW5wdXQgdmFsdWVzXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIGNsdXN0ZXI7XG4gICAgICAgICAgICB2YXIgbiA9IHZhbHVlcy5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgYXNzaWdubWVudHMgPSBuZXcgQXJyYXkobik7XG4gICAgICAgICAgICB2YXIgY2x1c3RlclNpemVzID0gbmV3IEFycmF5KG51bSk7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBuYl9pdGVycyA9IDA7XG4gICAgICAgICAgICB2YXIgY2VudHJvaWRzID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gZ2V0IHNlZWQgdmFsdWVzXG4gICAgICAgICAgICBjZW50cm9pZHMgPSBbXTtcbiAgICAgICAgICAgIGNlbnRyb2lkcy5wdXNoKG1pbik7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDM9MTsgaSQzPG51bTsgaSQzKyspIHtcbiAgICAgICAgICAgICAgICBjZW50cm9pZHMucHVzaChtaW4gKyAoKGkkMy9udW0pICogKG1heC1taW4pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjZW50cm9pZHMucHVzaChtYXgpO1xuXG4gICAgICAgICAgICB3aGlsZSAocmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgLy8gYXNzaWdubWVudCBzdGVwXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaj0wOyBqPG51bTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsdXN0ZXJTaXplc1tqXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkkND0wOyBpJDQ8bjsgaSQ0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzW2kkNF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW5kaXN0ID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJlc3QgPSAodm9pZCAwKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiQxPTA7IGokMTxudW07IGokMSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdCA9IGFicyQxKGNlbnRyb2lkc1tqJDFdLXZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXN0IDwgbWluZGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmRpc3QgPSBkaXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlc3QgPSBqJDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbHVzdGVyU2l6ZXNbYmVzdF0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRzW2kkNF0gPSBiZXN0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGNlbnRyb2lkcyBzdGVwXG4gICAgICAgICAgICAgICAgdmFyIG5ld0NlbnRyb2lkcyA9IG5ldyBBcnJheShudW0pO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGokMj0wOyBqJDI8bnVtOyBqJDIrKykge1xuICAgICAgICAgICAgICAgICAgICBuZXdDZW50cm9pZHNbaiQyXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkkNT0wOyBpJDU8bjsgaSQ1KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY2x1c3RlciA9IGFzc2lnbm1lbnRzW2kkNV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdDZW50cm9pZHNbY2x1c3Rlcl0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NlbnRyb2lkc1tjbHVzdGVyXSA9IHZhbHVlc1tpJDVdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2VudHJvaWRzW2NsdXN0ZXJdICs9IHZhbHVlc1tpJDVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGokMz0wOyBqJDM8bnVtOyBqJDMrKykge1xuICAgICAgICAgICAgICAgICAgICBuZXdDZW50cm9pZHNbaiQzXSAqPSAxL2NsdXN0ZXJTaXplc1tqJDNdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGNvbnZlcmdlbmNlXG4gICAgICAgICAgICAgICAgcmVwZWF0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiQ0PTA7IGokNDxudW07IGokNCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdDZW50cm9pZHNbaiQ0XSAhPT0gY2VudHJvaWRzW2okNF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNlbnRyb2lkcyA9IG5ld0NlbnRyb2lkcztcbiAgICAgICAgICAgICAgICBuYl9pdGVycysrO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5iX2l0ZXJzID4gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZmluaXNoZWQgay1tZWFucyBjbHVzdGVyaW5nXG4gICAgICAgICAgICAvLyB0aGUgbmV4dCBwYXJ0IGlzIGJvcnJvd2VkIGZyb20gZ2FicmllbGZsb3IuaXRcbiAgICAgICAgICAgIHZhciBrQ2x1c3RlcnMgPSB7fTtcbiAgICAgICAgICAgIGZvciAodmFyIGokNT0wOyBqJDU8bnVtOyBqJDUrKykge1xuICAgICAgICAgICAgICAgIGtDbHVzdGVyc1tqJDVdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBpJDY9MDsgaSQ2PG47IGkkNisrKSB7XG4gICAgICAgICAgICAgICAgY2x1c3RlciA9IGFzc2lnbm1lbnRzW2kkNl07XG4gICAgICAgICAgICAgICAga0NsdXN0ZXJzW2NsdXN0ZXJdLnB1c2godmFsdWVzW2kkNl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRtcEtNZWFuc0JyZWFrcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaiQ2PTA7IGokNjxudW07IGokNisrKSB7XG4gICAgICAgICAgICAgICAgdG1wS01lYW5zQnJlYWtzLnB1c2goa0NsdXN0ZXJzW2okNl1bMF0pO1xuICAgICAgICAgICAgICAgIHRtcEtNZWFuc0JyZWFrcy5wdXNoKGtDbHVzdGVyc1tqJDZdW2tDbHVzdGVyc1tqJDZdLmxlbmd0aC0xXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0bXBLTWVhbnNCcmVha3MgPSB0bXBLTWVhbnNCcmVha3Muc29ydChmdW5jdGlvbiAoYSxiKXsgcmV0dXJuIGEtYjsgfSk7XG4gICAgICAgICAgICBsaW1pdHMucHVzaCh0bXBLTWVhbnNCcmVha3NbMF0pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQ3PTE7IGkkNyA8IHRtcEtNZWFuc0JyZWFrcy5sZW5ndGg7IGkkNys9IDIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IHRtcEtNZWFuc0JyZWFrc1tpJDddO1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4odikgJiYgKGxpbWl0cy5pbmRleE9mKHYpID09PSAtMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGltaXRzLnB1c2godik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaW1pdHM7XG4gICAgfTtcblxuICAgIHZhciBhbmFseXplXzEgPSB7YW5hbHl6ZTogYW5hbHl6ZSwgbGltaXRzOiBsaW1pdHN9O1xuXG4gICAgdmFyIENvbG9yJDMgPSBDb2xvcl8xO1xuXG5cbiAgICB2YXIgY29udHJhc3QgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAvLyBXQ0FHIGNvbnRyYXN0IHJhdGlvXG4gICAgICAgIC8vIHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDA4L1JFQy1XQ0FHMjAtMjAwODEyMTEvI2NvbnRyYXN0LXJhdGlvZGVmXG4gICAgICAgIGEgPSBuZXcgQ29sb3IkMyhhKTtcbiAgICAgICAgYiA9IG5ldyBDb2xvciQzKGIpO1xuICAgICAgICB2YXIgbDEgPSBhLmx1bWluYW5jZSgpO1xuICAgICAgICB2YXIgbDIgPSBiLmx1bWluYW5jZSgpO1xuICAgICAgICByZXR1cm4gbDEgPiBsMiA/IChsMSArIDAuMDUpIC8gKGwyICsgMC4wNSkgOiAobDIgKyAwLjA1KSAvIChsMSArIDAuMDUpO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3IkMiA9IENvbG9yXzE7XG4gICAgdmFyIHNxcnQgPSBNYXRoLnNxcnQ7XG4gICAgdmFyIHBvdyA9IE1hdGgucG93O1xuICAgIHZhciBtaW4gPSBNYXRoLm1pbjtcbiAgICB2YXIgbWF4ID0gTWF0aC5tYXg7XG4gICAgdmFyIGF0YW4yID0gTWF0aC5hdGFuMjtcbiAgICB2YXIgYWJzID0gTWF0aC5hYnM7XG4gICAgdmFyIGNvcyA9IE1hdGguY29zO1xuICAgIHZhciBzaW4gPSBNYXRoLnNpbjtcbiAgICB2YXIgZXhwID0gTWF0aC5leHA7XG4gICAgdmFyIFBJID0gTWF0aC5QSTtcblxuICAgIHZhciBkZWx0YUUgPSBmdW5jdGlvbihhLCBiLCBLbCwgS2MsIEtoKSB7XG4gICAgICAgIGlmICggS2wgPT09IHZvaWQgMCApIEtsPTE7XG4gICAgICAgIGlmICggS2MgPT09IHZvaWQgMCApIEtjPTE7XG4gICAgICAgIGlmICggS2ggPT09IHZvaWQgMCApIEtoPTE7XG5cbiAgICAgICAgLy8gRGVsdGEgRSAoQ0lFIDIwMDApXG4gICAgICAgIC8vIHNlZSBodHRwOi8vd3d3LmJydWNlbGluZGJsb29tLmNvbS9pbmRleC5odG1sP0Vxbl9EZWx0YUVfQ0lFMjAwMC5odG1sXG4gICAgICAgIHZhciByYWQyZGVnID0gZnVuY3Rpb24ocmFkKSB7XG4gICAgICAgICAgICByZXR1cm4gMzYwICogcmFkIC8gKDIgKiBQSSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBkZWcycmFkID0gZnVuY3Rpb24oZGVnKSB7XG4gICAgICAgICAgICByZXR1cm4gKDIgKiBQSSAqIGRlZykgLyAzNjA7XG4gICAgICAgIH07XG4gICAgICAgIGEgPSBuZXcgQ29sb3IkMihhKTtcbiAgICAgICAgYiA9IG5ldyBDb2xvciQyKGIpO1xuICAgICAgICB2YXIgcmVmID0gQXJyYXkuZnJvbShhLmxhYigpKTtcbiAgICAgICAgdmFyIEwxID0gcmVmWzBdO1xuICAgICAgICB2YXIgYTEgPSByZWZbMV07XG4gICAgICAgIHZhciBiMSA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gQXJyYXkuZnJvbShiLmxhYigpKTtcbiAgICAgICAgdmFyIEwyID0gcmVmJDFbMF07XG4gICAgICAgIHZhciBhMiA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgYjIgPSByZWYkMVsyXTtcbiAgICAgICAgdmFyIGF2Z0wgPSAoTDEgKyBMMikvMjtcbiAgICAgICAgdmFyIEMxID0gc3FydChwb3coYTEsIDIpICsgcG93KGIxLCAyKSk7XG4gICAgICAgIHZhciBDMiA9IHNxcnQocG93KGEyLCAyKSArIHBvdyhiMiwgMikpO1xuICAgICAgICB2YXIgYXZnQyA9IChDMSArIEMyKS8yO1xuICAgICAgICB2YXIgRyA9IDAuNSooMS1zcXJ0KHBvdyhhdmdDLCA3KS8ocG93KGF2Z0MsIDcpICsgcG93KDI1LCA3KSkpKTtcbiAgICAgICAgdmFyIGExcCA9IGExKigxK0cpO1xuICAgICAgICB2YXIgYTJwID0gYTIqKDErRyk7XG4gICAgICAgIHZhciBDMXAgPSBzcXJ0KHBvdyhhMXAsIDIpICsgcG93KGIxLCAyKSk7XG4gICAgICAgIHZhciBDMnAgPSBzcXJ0KHBvdyhhMnAsIDIpICsgcG93KGIyLCAyKSk7XG4gICAgICAgIHZhciBhdmdDcCA9IChDMXAgKyBDMnApLzI7XG4gICAgICAgIHZhciBhcmN0YW4xID0gcmFkMmRlZyhhdGFuMihiMSwgYTFwKSk7XG4gICAgICAgIHZhciBhcmN0YW4yID0gcmFkMmRlZyhhdGFuMihiMiwgYTJwKSk7XG4gICAgICAgIHZhciBoMXAgPSBhcmN0YW4xID49IDAgPyBhcmN0YW4xIDogYXJjdGFuMSArIDM2MDtcbiAgICAgICAgdmFyIGgycCA9IGFyY3RhbjIgPj0gMCA/IGFyY3RhbjIgOiBhcmN0YW4yICsgMzYwO1xuICAgICAgICB2YXIgYXZnSHAgPSBhYnMoaDFwIC0gaDJwKSA+IDE4MCA/IChoMXAgKyBoMnAgKyAzNjApLzIgOiAoaDFwICsgaDJwKS8yO1xuICAgICAgICB2YXIgVCA9IDEgLSAwLjE3KmNvcyhkZWcycmFkKGF2Z0hwIC0gMzApKSArIDAuMjQqY29zKGRlZzJyYWQoMiphdmdIcCkpICsgMC4zMipjb3MoZGVnMnJhZCgzKmF2Z0hwICsgNikpIC0gMC4yKmNvcyhkZWcycmFkKDQqYXZnSHAgLSA2MykpO1xuICAgICAgICB2YXIgZGVsdGFIcCA9IGgycCAtIGgxcDtcbiAgICAgICAgZGVsdGFIcCA9IGFicyhkZWx0YUhwKSA8PSAxODAgPyBkZWx0YUhwIDogaDJwIDw9IGgxcCA/IGRlbHRhSHAgKyAzNjAgOiBkZWx0YUhwIC0gMzYwO1xuICAgICAgICBkZWx0YUhwID0gMipzcXJ0KEMxcCpDMnApKnNpbihkZWcycmFkKGRlbHRhSHApLzIpO1xuICAgICAgICB2YXIgZGVsdGFMID0gTDIgLSBMMTtcbiAgICAgICAgdmFyIGRlbHRhQ3AgPSBDMnAgLSBDMXA7ICAgIFxuICAgICAgICB2YXIgc2wgPSAxICsgKDAuMDE1KnBvdyhhdmdMIC0gNTAsIDIpKS9zcXJ0KDIwICsgcG93KGF2Z0wgLSA1MCwgMikpO1xuICAgICAgICB2YXIgc2MgPSAxICsgMC4wNDUqYXZnQ3A7XG4gICAgICAgIHZhciBzaCA9IDEgKyAwLjAxNSphdmdDcCpUO1xuICAgICAgICB2YXIgZGVsdGFUaGV0YSA9IDMwKmV4cCgtcG93KChhdmdIcCAtIDI3NSkvMjUsIDIpKTtcbiAgICAgICAgdmFyIFJjID0gMipzcXJ0KHBvdyhhdmdDcCwgNykvKHBvdyhhdmdDcCwgNykgKyBwb3coMjUsIDcpKSk7XG4gICAgICAgIHZhciBSdCA9IC1SYypzaW4oMipkZWcycmFkKGRlbHRhVGhldGEpKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHNxcnQocG93KGRlbHRhTC8oS2wqc2wpLCAyKSArIHBvdyhkZWx0YUNwLyhLYypzYyksIDIpICsgcG93KGRlbHRhSHAvKEtoKnNoKSwgMikgKyBSdCooZGVsdGFDcC8oS2Mqc2MpKSooZGVsdGFIcC8oS2gqc2gpKSk7XG4gICAgICAgIHJldHVybiBtYXgoMCwgbWluKDEwMCwgcmVzdWx0KSk7XG4gICAgfTtcblxuICAgIHZhciBDb2xvciQxID0gQ29sb3JfMTtcblxuICAgIC8vIHNpbXBsZSBFdWNsaWRlYW4gZGlzdGFuY2VcbiAgICB2YXIgZGlzdGFuY2UgPSBmdW5jdGlvbihhLCBiLCBtb2RlKSB7XG4gICAgICAgIGlmICggbW9kZSA9PT0gdm9pZCAwICkgbW9kZT0nbGFiJztcblxuICAgICAgICAvLyBEZWx0YSBFIChDSUUgMTk3NilcbiAgICAgICAgLy8gc2VlIGh0dHA6Ly93d3cuYnJ1Y2VsaW5kYmxvb20uY29tL2luZGV4Lmh0bWw/RXF1YXRpb25zLmh0bWxcbiAgICAgICAgYSA9IG5ldyBDb2xvciQxKGEpO1xuICAgICAgICBiID0gbmV3IENvbG9yJDEoYik7XG4gICAgICAgIHZhciBsMSA9IGEuZ2V0KG1vZGUpO1xuICAgICAgICB2YXIgbDIgPSBiLmdldChtb2RlKTtcbiAgICAgICAgdmFyIHN1bV9zcSA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgaW4gbDEpIHtcbiAgICAgICAgICAgIHZhciBkID0gKGwxW2ldIHx8IDApIC0gKGwyW2ldIHx8IDApO1xuICAgICAgICAgICAgc3VtX3NxICs9IGQqZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHN1bV9zcSk7XG4gICAgfTtcblxuICAgIHZhciBDb2xvciA9IENvbG9yXzE7XG5cbiAgICB2YXIgdmFsaWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MpICkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBzb21lIHByZS1kZWZpbmVkIGNvbG9yIHNjYWxlczpcbiAgICB2YXIgY2hyb21hJDEgPSBjaHJvbWFfMTtcblxuICAgIHZhciBzY2FsZSA9IHNjYWxlJDI7XG5cbiAgICB2YXIgc2NhbGVzID0ge1xuICAgIFx0Y29vbDogZnVuY3Rpb24gY29vbCgpIHsgcmV0dXJuIHNjYWxlKFtjaHJvbWEkMS5oc2woMTgwLDEsLjkpLCBjaHJvbWEkMS5oc2woMjUwLC43LC40KV0pIH0sXG4gICAgXHRob3Q6IGZ1bmN0aW9uIGhvdCgpIHsgcmV0dXJuIHNjYWxlKFsnIzAwMCcsJyNmMDAnLCcjZmYwJywnI2ZmZiddKS5tb2RlKCdyZ2InKSB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAgICBDb2xvckJyZXdlciBjb2xvcnMgZm9yIGNocm9tYS5qc1xuXG4gICAgICAgIENvcHlyaWdodCAoYykgMjAwMiBDeW50aGlhIEJyZXdlciwgTWFyayBIYXJyb3dlciwgYW5kIFRoZVxuICAgICAgICBQZW5uc3lsdmFuaWEgU3RhdGUgVW5pdmVyc2l0eS5cblxuICAgICAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICAgICAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICAgICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICAgICAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkXG4gICAgICAgIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SXG4gICAgICAgIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gICAgICAgIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gICAgKi9cblxuICAgIHZhciBjb2xvcmJyZXdlciA9IHtcbiAgICAgICAgLy8gc2VxdWVudGlhbFxuICAgICAgICBPclJkOiBbJyNmZmY3ZWMnLCAnI2ZlZThjOCcsICcjZmRkNDllJywgJyNmZGJiODQnLCAnI2ZjOGQ1OScsICcjZWY2NTQ4JywgJyNkNzMwMWYnLCAnI2IzMDAwMCcsICcjN2YwMDAwJ10sXG4gICAgICAgIFB1QnU6IFsnI2ZmZjdmYicsICcjZWNlN2YyJywgJyNkMGQxZTYnLCAnI2E2YmRkYicsICcjNzRhOWNmJywgJyMzNjkwYzAnLCAnIzA1NzBiMCcsICcjMDQ1YThkJywgJyMwMjM4NTgnXSxcbiAgICAgICAgQnVQdTogWycjZjdmY2ZkJywgJyNlMGVjZjQnLCAnI2JmZDNlNicsICcjOWViY2RhJywgJyM4Yzk2YzYnLCAnIzhjNmJiMScsICcjODg0MTlkJywgJyM4MTBmN2MnLCAnIzRkMDA0YiddLFxuICAgICAgICBPcmFuZ2VzOiBbJyNmZmY1ZWInLCAnI2ZlZTZjZScsICcjZmRkMGEyJywgJyNmZGFlNmInLCAnI2ZkOGQzYycsICcjZjE2OTEzJywgJyNkOTQ4MDEnLCAnI2E2MzYwMycsICcjN2YyNzA0J10sXG4gICAgICAgIEJ1R246IFsnI2Y3ZmNmZCcsICcjZTVmNWY5JywgJyNjY2VjZTYnLCAnIzk5ZDhjOScsICcjNjZjMmE0JywgJyM0MWFlNzYnLCAnIzIzOGI0NScsICcjMDA2ZDJjJywgJyMwMDQ0MWInXSxcbiAgICAgICAgWWxPckJyOiBbJyNmZmZmZTUnLCAnI2ZmZjdiYycsICcjZmVlMzkxJywgJyNmZWM0NGYnLCAnI2ZlOTkyOScsICcjZWM3MDE0JywgJyNjYzRjMDInLCAnIzk5MzQwNCcsICcjNjYyNTA2J10sXG4gICAgICAgIFlsR246IFsnI2ZmZmZlNScsICcjZjdmY2I5JywgJyNkOWYwYTMnLCAnI2FkZGQ4ZScsICcjNzhjNjc5JywgJyM0MWFiNWQnLCAnIzIzODQ0MycsICcjMDA2ODM3JywgJyMwMDQ1MjknXSxcbiAgICAgICAgUmVkczogWycjZmZmNWYwJywgJyNmZWUwZDInLCAnI2ZjYmJhMScsICcjZmM5MjcyJywgJyNmYjZhNGEnLCAnI2VmM2IyYycsICcjY2IxODFkJywgJyNhNTBmMTUnLCAnIzY3MDAwZCddLFxuICAgICAgICBSZFB1OiBbJyNmZmY3ZjMnLCAnI2ZkZTBkZCcsICcjZmNjNWMwJywgJyNmYTlmYjUnLCAnI2Y3NjhhMScsICcjZGQzNDk3JywgJyNhZTAxN2UnLCAnIzdhMDE3NycsICcjNDkwMDZhJ10sXG4gICAgICAgIEdyZWVuczogWycjZjdmY2Y1JywgJyNlNWY1ZTAnLCAnI2M3ZTljMCcsICcjYTFkOTliJywgJyM3NGM0NzYnLCAnIzQxYWI1ZCcsICcjMjM4YjQ1JywgJyMwMDZkMmMnLCAnIzAwNDQxYiddLFxuICAgICAgICBZbEduQnU6IFsnI2ZmZmZkOScsICcjZWRmOGIxJywgJyNjN2U5YjQnLCAnIzdmY2RiYicsICcjNDFiNmM0JywgJyMxZDkxYzAnLCAnIzIyNWVhOCcsICcjMjUzNDk0JywgJyMwODFkNTgnXSxcbiAgICAgICAgUHVycGxlczogWycjZmNmYmZkJywgJyNlZmVkZjUnLCAnI2RhZGFlYicsICcjYmNiZGRjJywgJyM5ZTlhYzgnLCAnIzgwN2RiYScsICcjNmE1MWEzJywgJyM1NDI3OGYnLCAnIzNmMDA3ZCddLFxuICAgICAgICBHbkJ1OiBbJyNmN2ZjZjAnLCAnI2UwZjNkYicsICcjY2NlYmM1JywgJyNhOGRkYjUnLCAnIzdiY2NjNCcsICcjNGViM2QzJywgJyMyYjhjYmUnLCAnIzA4NjhhYycsICcjMDg0MDgxJ10sXG4gICAgICAgIEdyZXlzOiBbJyNmZmZmZmYnLCAnI2YwZjBmMCcsICcjZDlkOWQ5JywgJyNiZGJkYmQnLCAnIzk2OTY5NicsICcjNzM3MzczJywgJyM1MjUyNTInLCAnIzI1MjUyNScsICcjMDAwMDAwJ10sXG4gICAgICAgIFlsT3JSZDogWycjZmZmZmNjJywgJyNmZmVkYTAnLCAnI2ZlZDk3NicsICcjZmViMjRjJywgJyNmZDhkM2MnLCAnI2ZjNGUyYScsICcjZTMxYTFjJywgJyNiZDAwMjYnLCAnIzgwMDAyNiddLFxuICAgICAgICBQdVJkOiBbJyNmN2Y0ZjknLCAnI2U3ZTFlZicsICcjZDRiOWRhJywgJyNjOTk0YzcnLCAnI2RmNjViMCcsICcjZTcyOThhJywgJyNjZTEyNTYnLCAnIzk4MDA0MycsICcjNjcwMDFmJ10sXG4gICAgICAgIEJsdWVzOiBbJyNmN2ZiZmYnLCAnI2RlZWJmNycsICcjYzZkYmVmJywgJyM5ZWNhZTEnLCAnIzZiYWVkNicsICcjNDI5MmM2JywgJyMyMTcxYjUnLCAnIzA4NTE5YycsICcjMDgzMDZiJ10sXG4gICAgICAgIFB1QnVHbjogWycjZmZmN2ZiJywgJyNlY2UyZjAnLCAnI2QwZDFlNicsICcjYTZiZGRiJywgJyM2N2E5Y2YnLCAnIzM2OTBjMCcsICcjMDI4MThhJywgJyMwMTZjNTknLCAnIzAxNDYzNiddLFxuICAgICAgICBWaXJpZGlzOiBbJyM0NDAxNTQnLCAnIzQ4Mjc3NycsICcjM2Y0YThhJywgJyMzMTY3OGUnLCAnIzI2ODM4ZicsICcjMWY5ZDhhJywgJyM2Y2NlNWEnLCAnI2I2ZGUyYicsICcjZmVlODI1J10sXG5cbiAgICAgICAgLy8gZGl2ZXJnaW5nXG5cbiAgICAgICAgU3BlY3RyYWw6IFsnIzllMDE0MicsICcjZDUzZTRmJywgJyNmNDZkNDMnLCAnI2ZkYWU2MScsICcjZmVlMDhiJywgJyNmZmZmYmYnLCAnI2U2ZjU5OCcsICcjYWJkZGE0JywgJyM2NmMyYTUnLCAnIzMyODhiZCcsICcjNWU0ZmEyJ10sXG4gICAgICAgIFJkWWxHbjogWycjYTUwMDI2JywgJyNkNzMwMjcnLCAnI2Y0NmQ0MycsICcjZmRhZTYxJywgJyNmZWUwOGInLCAnI2ZmZmZiZicsICcjZDllZjhiJywgJyNhNmQ5NmEnLCAnIzY2YmQ2MycsICcjMWE5ODUwJywgJyMwMDY4MzcnXSxcbiAgICAgICAgUmRCdTogWycjNjcwMDFmJywgJyNiMjE4MmInLCAnI2Q2NjA0ZCcsICcjZjRhNTgyJywgJyNmZGRiYzcnLCAnI2Y3ZjdmNycsICcjZDFlNWYwJywgJyM5MmM1ZGUnLCAnIzQzOTNjMycsICcjMjE2NmFjJywgJyMwNTMwNjEnXSxcbiAgICAgICAgUGlZRzogWycjOGUwMTUyJywgJyNjNTFiN2QnLCAnI2RlNzdhZScsICcjZjFiNmRhJywgJyNmZGUwZWYnLCAnI2Y3ZjdmNycsICcjZTZmNWQwJywgJyNiOGUxODYnLCAnIzdmYmM0MScsICcjNGQ5MjIxJywgJyMyNzY0MTknXSxcbiAgICAgICAgUFJHbjogWycjNDAwMDRiJywgJyM3NjJhODMnLCAnIzk5NzBhYicsICcjYzJhNWNmJywgJyNlN2Q0ZTgnLCAnI2Y3ZjdmNycsICcjZDlmMGQzJywgJyNhNmRiYTAnLCAnIzVhYWU2MScsICcjMWI3ODM3JywgJyMwMDQ0MWInXSxcbiAgICAgICAgUmRZbEJ1OiBbJyNhNTAwMjYnLCAnI2Q3MzAyNycsICcjZjQ2ZDQzJywgJyNmZGFlNjEnLCAnI2ZlZTA5MCcsICcjZmZmZmJmJywgJyNlMGYzZjgnLCAnI2FiZDllOScsICcjNzRhZGQxJywgJyM0NTc1YjQnLCAnIzMxMzY5NSddLFxuICAgICAgICBCckJHOiBbJyM1NDMwMDUnLCAnIzhjNTEwYScsICcjYmY4MTJkJywgJyNkZmMyN2QnLCAnI2Y2ZThjMycsICcjZjVmNWY1JywgJyNjN2VhZTUnLCAnIzgwY2RjMScsICcjMzU5NzhmJywgJyMwMTY2NWUnLCAnIzAwM2MzMCddLFxuICAgICAgICBSZEd5OiBbJyM2NzAwMWYnLCAnI2IyMTgyYicsICcjZDY2MDRkJywgJyNmNGE1ODInLCAnI2ZkZGJjNycsICcjZmZmZmZmJywgJyNlMGUwZTAnLCAnI2JhYmFiYScsICcjODc4Nzg3JywgJyM0ZDRkNGQnLCAnIzFhMWExYSddLFxuICAgICAgICBQdU9yOiBbJyM3ZjNiMDgnLCAnI2IzNTgwNicsICcjZTA4MjE0JywgJyNmZGI4NjMnLCAnI2ZlZTBiNicsICcjZjdmN2Y3JywgJyNkOGRhZWInLCAnI2IyYWJkMicsICcjODA3M2FjJywgJyM1NDI3ODgnLCAnIzJkMDA0YiddLFxuXG4gICAgICAgIC8vIHF1YWxpdGF0aXZlXG5cbiAgICAgICAgU2V0MjogWycjNjZjMmE1JywgJyNmYzhkNjInLCAnIzhkYTBjYicsICcjZTc4YWMzJywgJyNhNmQ4NTQnLCAnI2ZmZDkyZicsICcjZTVjNDk0JywgJyNiM2IzYjMnXSxcbiAgICAgICAgQWNjZW50OiBbJyM3ZmM5N2YnLCAnI2JlYWVkNCcsICcjZmRjMDg2JywgJyNmZmZmOTknLCAnIzM4NmNiMCcsICcjZjAwMjdmJywgJyNiZjViMTcnLCAnIzY2NjY2NiddLFxuICAgICAgICBTZXQxOiBbJyNlNDFhMWMnLCAnIzM3N2ViOCcsICcjNGRhZjRhJywgJyM5ODRlYTMnLCAnI2ZmN2YwMCcsICcjZmZmZjMzJywgJyNhNjU2MjgnLCAnI2Y3ODFiZicsICcjOTk5OTk5J10sXG4gICAgICAgIFNldDM6IFsnIzhkZDNjNycsICcjZmZmZmIzJywgJyNiZWJhZGEnLCAnI2ZiODA3MicsICcjODBiMWQzJywgJyNmZGI0NjInLCAnI2IzZGU2OScsICcjZmNjZGU1JywgJyNkOWQ5ZDknLCAnI2JjODBiZCcsICcjY2NlYmM1JywgJyNmZmVkNmYnXSxcbiAgICAgICAgRGFyazI6IFsnIzFiOWU3NycsICcjZDk1ZjAyJywgJyM3NTcwYjMnLCAnI2U3Mjk4YScsICcjNjZhNjFlJywgJyNlNmFiMDInLCAnI2E2NzYxZCcsICcjNjY2NjY2J10sXG4gICAgICAgIFBhaXJlZDogWycjYTZjZWUzJywgJyMxZjc4YjQnLCAnI2IyZGY4YScsICcjMzNhMDJjJywgJyNmYjlhOTknLCAnI2UzMWExYycsICcjZmRiZjZmJywgJyNmZjdmMDAnLCAnI2NhYjJkNicsICcjNmEzZDlhJywgJyNmZmZmOTknLCAnI2IxNTkyOCddLFxuICAgICAgICBQYXN0ZWwyOiBbJyNiM2UyY2QnLCAnI2ZkY2RhYycsICcjY2JkNWU4JywgJyNmNGNhZTQnLCAnI2U2ZjVjOScsICcjZmZmMmFlJywgJyNmMWUyY2MnLCAnI2NjY2NjYyddLFxuICAgICAgICBQYXN0ZWwxOiBbJyNmYmI0YWUnLCAnI2IzY2RlMycsICcjY2NlYmM1JywgJyNkZWNiZTQnLCAnI2ZlZDlhNicsICcjZmZmZmNjJywgJyNlNWQ4YmQnLCAnI2ZkZGFlYycsICcjZjJmMmYyJ10sXG4gICAgfTtcblxuICAgIC8vIGFkZCBsb3dlcmNhc2UgYWxpYXNlcyBmb3IgY2FzZS1pbnNlbnNpdGl2ZSBtYXRjaGVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBPYmplY3Qua2V5cyhjb2xvcmJyZXdlcik7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBrZXkgPSBsaXN0W2ldO1xuXG4gICAgICAgIGNvbG9yYnJld2VyW2tleS50b0xvd2VyQ2FzZSgpXSA9IGNvbG9yYnJld2VyW2tleV07XG4gICAgfVxuXG4gICAgdmFyIGNvbG9yYnJld2VyXzEgPSBjb2xvcmJyZXdlcjtcblxuICAgIHZhciBjaHJvbWEgPSBjaHJvbWFfMTtcblxuICAgIC8vIGZlZWwgZnJlZSB0byBjb21tZW50IG91dCBhbnl0aGluZyB0byByb2xsdXBcbiAgICAvLyBhIHNtYWxsZXIgY2hyb21hLmpzIGJ1aWx0XG5cbiAgICAvLyBpbyAtLT4gY29udmVydCBjb2xvcnNcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgLy8gb3BlcmF0b3JzIC0tPiBtb2RpZnkgZXhpc3RpbmcgQ29sb3JzXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAvLyBpbnRlcnBvbGF0b3JzXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgLy8gZ2VuZXJhdG9ycyAtLSA+IGNyZWF0ZSBuZXcgY29sb3JzXG4gICAgY2hyb21hLmF2ZXJhZ2UgPSBhdmVyYWdlO1xuICAgIGNocm9tYS5iZXppZXIgPSBiZXppZXJfMTtcbiAgICBjaHJvbWEuYmxlbmQgPSBibGVuZF8xO1xuICAgIGNocm9tYS5jdWJlaGVsaXggPSBjdWJlaGVsaXg7XG4gICAgY2hyb21hLm1peCA9IGNocm9tYS5pbnRlcnBvbGF0ZSA9IG1peCQxO1xuICAgIGNocm9tYS5yYW5kb20gPSByYW5kb21fMTtcbiAgICBjaHJvbWEuc2NhbGUgPSBzY2FsZSQyO1xuXG4gICAgLy8gb3RoZXIgdXRpbGl0eSBtZXRob2RzXG4gICAgY2hyb21hLmFuYWx5emUgPSBhbmFseXplXzEuYW5hbHl6ZTtcbiAgICBjaHJvbWEuY29udHJhc3QgPSBjb250cmFzdDtcbiAgICBjaHJvbWEuZGVsdGFFID0gZGVsdGFFO1xuICAgIGNocm9tYS5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIGNocm9tYS5saW1pdHMgPSBhbmFseXplXzEubGltaXRzO1xuICAgIGNocm9tYS52YWxpZCA9IHZhbGlkO1xuXG4gICAgLy8gc2NhbGVcbiAgICBjaHJvbWEuc2NhbGVzID0gc2NhbGVzO1xuXG4gICAgLy8gY29sb3JzXG4gICAgY2hyb21hLmNvbG9ycyA9IHczY3gxMV8xO1xuICAgIGNocm9tYS5icmV3ZXIgPSBjb2xvcmJyZXdlcl8xO1xuXG4gICAgdmFyIGNocm9tYV9qcyA9IGNocm9tYTtcblxuICAgIHJldHVybiBjaHJvbWFfanM7XG5cbn0pKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGNvbnZlcnRGaWdtYUNvbG9yVG9SZ2IsIHBhcnNlQ29sb3JUb2tlbiB9IGZyb20gJy4vdXRpbHMvZmlnbWEtY29sb3JzJztcbmltcG9ydCB7IGdldENvbXBvbmVudENvbG9ycywgZ2V0R2xvYmFsTmV1dHJhbHMsIGdldFRoZW1lQ29sb3JzIH0gZnJvbSAnLi9jb2xvci10b2tlbnMnO1xuaW1wb3J0IHsgZ2V0RmlnbWFDb2xsZWN0aW9uLCByZXNvbHZlVmFyaWFibGVUeXBlLCBzZXRGaWdtYVZhcmlhYmxlIH0gZnJvbSBcIi4vdXRpbHMvZmlnbWEtdmFyaWFibGVzXCI7XG5pbXBvcnQgY2hyb21hIGZyb20gJ2Nocm9tYS1qcyc7XG5pbXBvcnQgKiBhcyBzcGFjaW5nVG9rZW5zIGZyb20gJy4vc3BhY2luZy10b2tlbnMnO1xuaW1wb3J0ICogYXMgcmFkaWlUb2tlbnMgZnJvbSAnLi9yYWRpaS10b2tlbnMnO1xuaW1wb3J0ICogYXMgdHlwZXNjYWxlVG9rZW5zIGZyb20gJy4vdHlwZXNjYWxlLXRva2Vucyc7XG5pbXBvcnQgKiBhcyBzaXppbmdUb2tlbnMgZnJvbSAnLi9zaXppbmctdG9rZW5zJztcbmltcG9ydCAqIGFzIGVmZmVjdHNUb2tlbnMgZnJvbSAnLi9lZmZlY3QtdG9rZW5zJztcbmltcG9ydCAqIGFzIG9wYWNpdHlUb2tlbnMgZnJvbSAnLi9vcGFjaXR5LXRva2Vucyc7XG5pbXBvcnQgeyBnZXRTaXplVG9rZW5zU29ydEZuLCBnZXRDb2xvclRva2Vuc1NvcnRGbiwgZ2V0QWxwaGFOdW1Ub2tlbnNTb3J0Rm4gfSBmcm9tICcuL3V0aWxzL3NvcnQtdG9rZW5zJztcbmltcG9ydCB7IGltcG9ydFRleHRTdHlsZXMgfSBmcm9tICcuL3V0aWxzL2ZpZ21hLXRleHQtc3R5bGVzJztcbmltcG9ydCB7IHJlbmRlckFjY2VudHMgfSBmcm9tIFwiLi9jb2xvci1nZW5lcmF0b3JzL3JlbmRlci1hY2NlbnRzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUdsb2JhbEFjY2VudFBhbGV0dGUsIGdldEdsb2JhbEFjY2VudCB9IGZyb20gJy4vY29sb3ItZ2VuZXJhdG9ycy9hY2NlbnQtcGFsZXR0ZS1nZW5lcmF0b3InO1xuaW1wb3J0IHsgZ2VuZXJhdGVOZXV0cmFscywgcmVuZGVyTmV1dHJhbHMgfSBmcm9tICcuL2NvbG9yLWdlbmVyYXRvcnMvbmV1dHJhbHMtcGFsZXR0ZS1nZW5lcmF0b3InO1xuaW1wb3J0IHsgYmluZFZhcmlhYmxlc0FuZFN0eWxlcyB9IGZyb20gJy4vdXRpbHMvdmFyaWFibGVzLXRvLXN0eWxlcyc7XG5pbXBvcnQgeyBwYXJzZVJlZmVyZW5jZUdsb2JhbCwgZmluZFZhcmlhYmxlQnlSZWZlcmVuY2VzIH0gZnJvbSAnLi91dGlscy90b2tlbi1yZWZlcmVuY2VzJztcbmltcG9ydCB7IHRvVGl0bGVDYXNlIH0gZnJvbSAnLi91dGlscy90ZXh0LXRvLXRpdGxlLWNhc2UnO1xuaW1wb3J0IHsgaWNvblNpemVOYW1lLCByYWRpaVNpemVOYW1lLCBzcGFjaW5nU2l6ZU5hbWUsIHR5cG9ncmFwaHlTaXplTmFtZSB9IGZyb20gJy4vZGVmYXVsdHMnO1xuaW1wb3J0IHsgcHJvY2Vzc0NvbXBvbmVudHMgfSBmcm9tICcuL2ZpeC1sYXllcnMnO1xuaW1wb3J0IHsgaW1wb3J0RWZmZWN0U3R5bGVzIH0gZnJvbSAnLi91dGlscy9maWdtYS1lZmZlY3Qtc3R5bGVzJztcbmltcG9ydCB7IHVwZGF0ZUVsZXZhdGlvbkNvbXBvbmVudHMgfSBmcm9tICcuL3V0aWxzL3VwZGF0ZS1lbGV2YXRpb24tY29tcG9uZW50cyc7XG5pbXBvcnQgeyBmbGF0dGVuT2JqZWN0IH0gZnJvbSAnLi91dGlscy9mbGF0dGVuLW9iamVjdCc7XG5pbXBvcnQgeyByb3VuZFR3b0RpZ2l0cyB9IGZyb20gJy4vdXRpbHMvcm91bmQtdHdvLWRpZ2l0cyc7XG5pbXBvcnQgeyBleHBvcnRTdHlsZVRlbXBsYXRlcyB9IGZyb20gJy4vdXRpbHMvZXhwb3J0LXN0eWxlLXRlbXBsYXRlcyc7XG5pbXBvcnQgeyBpbXBvcnRTdHlsZVRlbXBsYXRlcyB9IGZyb20gJy4vdXRpbHMvaW1wb3J0LXN0eWxlLXRlbXBsYXRlcyc7XG5jb25zb2xlLmNsZWFyKCk7XG5sZXQgZ2xvYmFsVG9rZW5zO1xuY29uc3QgY29sbGVjdGlvbk5hbWVzID0gbmV3IE1hcChbXG4gICAgW1wiYnJhbmRDb2xvcnNcIiwgXCJDb2xvciBUaGVtZVwiIC8qXCJCcmFuZCBDb2xvclwiKi9dLFxuICAgIFtcInRoZW1lQ29sb3JzXCIsIFwiQ29sb3IgVGhlbWVcIl0sXG4gICAgW1wiY29tcG9uZW50Q29sb3JzXCIsIFwiQ29tcG9uZW50IFRva2Vuc1wiXSxcbiAgICBbXCJzcGFjaW5nXCIsIFwiU3BhY2luZ1wiXSxcbiAgICBbXCJvcGFjaXR5XCIsIFwiT3BhY2l0eVwiXSxcbiAgICBbXCJyYWRpaVwiLCBcIlJhZGlpXCJdLFxuICAgIFtcImljb25TY2FsZVwiLCBcIkljb24gU2NhbGVcIl0sXG4gICAgW1wiZ2xvYmFsU2l6aW5nXCIsIFwiR2xvYmFsIFNpemluZ1wiXSxcbl0pO1xuKCgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGZvbnREZXRhaWxzID0geWllbGQgdHlwZXNjYWxlVG9rZW5zLmdldEZvbnREZXRhaWxzKCk7XG4gICAgeWllbGQgUHJvbWlzZS5hbGwoZm9udERldGFpbHMubWFwKChpdGVtKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgcmV0dXJuIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoaXRlbSk7IH0pKSk7XG4gICAgaWYgKGZpZ21hLmNvbW1hbmQgPT09IFwiaW1wb3J0XCIpIHtcbiAgICAgICAgZmlnbWEuc2hvd1VJKF9fdWlGaWxlc19fW1wiaW1wb3J0XCJdLCB7XG4gICAgICAgICAgICB3aWR0aDogNTYwLFxuICAgICAgICAgICAgaGVpZ2h0OiA3MjAsXG4gICAgICAgICAgICB0aGVtZUNvbG9yczogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChmaWdtYS5jb21tYW5kID09PSBcImV4cG9ydFwiKSB7XG4gICAgICAgIGZpZ21hLnNob3dVSShfX3VpRmlsZXNfX1tcImV4cG9ydFwiXSwge1xuICAgICAgICAgICAgd2lkdGg6IDUwMCxcbiAgICAgICAgICAgIGhlaWdodDogNTAwLFxuICAgICAgICAgICAgdGhlbWVDb2xvcnM6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZmlnbWEuY29tbWFuZCA9PSBcImJpbmRUb1N0eWxlc1wiKSB7XG4gICAgICAgIGJpbmRWYXJpYWJsZXNBbmRTdHlsZXMoKTtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9XG4gICAgaWYgKGZpZ21hLmNvbW1hbmQgPT0gXCJ1cGRhdGVFbGV2YXRpb25Db21wb25lbnRzXCIpIHtcbiAgICAgICAgdXBkYXRlRWxldmF0aW9uQ29tcG9uZW50cyhlZmZlY3RzVG9rZW5zLmdldEVsZXZhdGlvblRva2VucygpKTtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9XG4gICAgaWYgKGZpZ21hLmNvbW1hbmQgPT0gXCJzZXRQbGF5Z3JvdW5kXCIpIHtcbiAgICAgICAgY29uc3QgaXNQbGF5Z3JvdW5kID0gZmlnbWEucm9vdC5nZXRQbHVnaW5EYXRhKCdTRFNQbGF5Z3JvdW5kJykgIT09ICcnO1xuICAgICAgICBmaWdtYS5yb290LnNldFBsdWdpbkRhdGEoJ1NEU1BsYXlncm91bmQnLCBpc1BsYXlncm91bmQgPyAnJyA6ICd0cnVlJyk7XG4gICAgICAgIGZpZ21hLm5vdGlmeShgJHtpc1BsYXlncm91bmQgPyAn4p2OJyA6ICfinIUnfSBQbGF5Z3JvdW5kIGlzICR7aXNQbGF5Z3JvdW5kID8gJ2Rpc2FibGVkJyA6ICdlbmFibGVkJ31gKTtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9XG4gICAgaWYgKGZpZ21hLmNvbW1hbmQgPT0gXCJmaXhMYXllcnNcIikge1xuICAgICAgICB5aWVsZCBwcm9jZXNzQ29tcG9uZW50cygpO1xuICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgIH1cbiAgICBpZiAoZmlnbWEuY29tbWFuZCA9PSBcImV4cG9ydFN0eWxlVGVtcGxhdGVzXCIpIHtcbiAgICAgICAgeWllbGQgZXhwb3J0U3R5bGVUZW1wbGF0ZXMoKTtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oJ1N0eWxlIHRlbXBsYXRlcyBleHBvcnRlZCcpO1xuICAgIH1cbiAgICBpZiAoZmlnbWEuY29tbWFuZCA9PSBcImltcG9ydFN0eWxlVGVtcGxhdGVzXCIpIHtcbiAgICAgICAgeWllbGQgaW1wb3J0U3R5bGVUZW1wbGF0ZXMoKTtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oJ1N0eWxlIHRlbXBsYXRlcyBpbXBvcnRlZCcpO1xuICAgIH1cbn0pKSgpO1xuZmlnbWEudWkub25tZXNzYWdlID0gKGV2ZW50RGF0YSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJjb2RlIHJlY2VpdmVkIG1lc3NhZ2VcIiwgZXZlbnREYXRhKTtcbiAgICBjb25zdCBwYXJhbXMgPSBldmVudERhdGEucGFyYW1zO1xuICAgIGlmIChldmVudERhdGEudHlwZSA9PT0gXCJJTVBPUlRcIikge1xuICAgICAgICB5aWVsZCBpbml0aWF0ZUltcG9ydChwYXJhbXMpO1xuICAgICAgICB5aWVsZCBpbXBvcnRBbGxUb2tlbnMocGFyYW1zKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnREYXRhLnR5cGUgPT09IFwiRVhQT1JUXCIpIHtcbiAgICAgICAgeWllbGQgZXhwb3J0VG9KU09OKGV2ZW50RGF0YS5mb3JtYXQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudERhdGEudHlwZSA9PT0gXCJBTEVSVFwiKSB7XG4gICAgICAgIGZpZ21hLm5vdGlmeShgJHtldmVudERhdGEucGFyYW1zfWApO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudERhdGEudHlwZSA9PT0gXCJSRU5ERVJfQUNDRU5UU1wiKSB7XG4gICAgICAgIGNvbnN0IGxpZ2h0QWNjZW50VG9rZW5zID0gZ2VuZXJhdGVHbG9iYWxBY2NlbnRQYWxldHRlKCdsaWdodCcsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IGRhcmtBY2NlbnRUb2tlbnMgPSBnZW5lcmF0ZUdsb2JhbEFjY2VudFBhbGV0dGUoJ2RhcmsnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBmcmFtZUxpZ2h0UGFsZXR0ZSA9IHJlbmRlckFjY2VudHMobGlnaHRBY2NlbnRUb2tlbnMsICdMaWdodCBNb2RlIEFjY2VudHMnKTtcbiAgICAgICAgY29uc3QgZnJhbWVEYXJrUGFsZXR0ZSA9IHJlbmRlckFjY2VudHMoZGFya0FjY2VudFRva2VucywgJ0RhcmsgTW9kZSBBY2NlbnRzJyk7XG4gICAgICAgIGZyYW1lRGFya1BhbGV0dGUueSA9IGZyYW1lTGlnaHRQYWxldHRlLmhlaWdodCArIDY0O1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudERhdGEudHlwZSA9PT0gXCJSRU5ERVJfTkVVVFJBTFNcIikge1xuICAgICAgICBjb25zdCBuZXV0cmFsVG9rZW5zID0gZ2VuZXJhdGVOZXV0cmFscyhwYXJhbXMpO1xuICAgICAgICByZW5kZXJOZXV0cmFscyhuZXV0cmFsVG9rZW5zLCBgR2xvYmFsIE5ldXRyYWxzYCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50RGF0YS50eXBlID09PSBcIkxPQURFRFwiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwbHVnaW5EYXRhID0gZmlnbWEucm9vdC5nZXRQbHVnaW5EYXRhKCdTRFMnKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHBsdWdpbkRhdGEpO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignZmFpbGVkIHRvIHJlYWQgcGx1Z2luIGRhdGEnLCBlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudERhdGEudHlwZSA9PSAnUkVTSVpFJykge1xuICAgICAgICBzd2l0Y2ggKHBhcmFtcy5iYXNlRm9udFNpemUpIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5yZXNpemUoNTAwLCA4MDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnbGFyZ2UnOiB7XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucmVzaXplKDU2MCwgODAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuZnVuY3Rpb24gaW5pdGlhdGVJbXBvcnQocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgeWllbGQgZ2V0Q29sbGVjdGlvbkFuZFByZXBhcmVUb2tlbnMoe1xuICAgICAgICAgICAgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lcy5nZXQoJ2NvbXBvbmVudENvbG9ycycpLFxuICAgICAgICAgICAgbW9kZU5hbWU6IFwiRGVmYXVsdFwiLFxuICAgICAgICAgICAgZGF0YTogZ2V0Q29tcG9uZW50Q29sb3JzKCksXG4gICAgICAgICAgICBzb3J0Rm46IGdldENvbG9yVG9rZW5zU29ydEZuKClcbiAgICAgICAgfSk7XG4gICAgICAgIHlpZWxkIGdldENvbGxlY3Rpb25BbmRQcmVwYXJlVG9rZW5zKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZXMuZ2V0KCd0aGVtZUNvbG9ycycpLFxuICAgICAgICAgICAgbW9kZU5hbWU6IFwiTGlnaHQgQmFzZVwiLFxuICAgICAgICAgICAgZGF0YTogZ2V0VGhlbWVDb2xvcnMoJ2xpZ2h0QmFzZScsIHBhcmFtcyksXG4gICAgICAgICAgICBzb3J0Rm46IGdldENvbG9yVG9rZW5zU29ydEZuKClcbiAgICAgICAgfSk7XG4gICAgICAgIHlpZWxkIGdldENvbGxlY3Rpb25BbmRQcmVwYXJlVG9rZW5zKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZXMuZ2V0KCdzcGFjaW5nJyksXG4gICAgICAgICAgICBtb2RlTmFtZTogdG9UaXRsZUNhc2UocGFyYW1zLnNwYWNpbmcpLFxuICAgICAgICAgICAgZGF0YTogc3BhY2luZ1Rva2Vuc1twYXJhbXMuc3BhY2luZ10sXG4gICAgICAgICAgICBzb3J0Rm46IGdldFNpemVUb2tlbnNTb3J0Rm4oKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHlpZWxkIGdldENvbGxlY3Rpb25BbmRQcmVwYXJlVG9rZW5zKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZXMuZ2V0KCdyYWRpaScpLFxuICAgICAgICAgICAgbW9kZU5hbWU6IHRvVGl0bGVDYXNlKHBhcmFtcy5yYWRpaSksXG4gICAgICAgICAgICBkYXRhOiByYWRpaVRva2Vuc1twYXJhbXMucmFkaWldLFxuICAgICAgICAgICAgc29ydEZuOiBnZXRTaXplVG9rZW5zU29ydEZuKCksXG4gICAgICAgIH0pO1xuICAgICAgICB5aWVsZCBnZXRDb2xsZWN0aW9uQW5kUHJlcGFyZVRva2Vucyh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgnaWNvblNjYWxlJyksXG4gICAgICAgICAgICBtb2RlTmFtZTogdG9UaXRsZUNhc2UoXCJiYXNlXCIpLFxuICAgICAgICAgICAgZGF0YTogc2l6aW5nVG9rZW5zLmJhc2UsXG4gICAgICAgICAgICBzb3J0Rm46IGdldFNpemVUb2tlbnNTb3J0Rm4oKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHlpZWxkIGdldENvbGxlY3Rpb25BbmRQcmVwYXJlVG9rZW5zKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZXMuZ2V0KCdvcGFjaXR5JyksXG4gICAgICAgICAgICBtb2RlTmFtZTogdG9UaXRsZUNhc2UoXCJkZWZhdWx0XCIpLFxuICAgICAgICAgICAgZGF0YTogb3BhY2l0eVRva2Vucy5vcGFjaXR5LFxuICAgICAgICAgICAgc29ydEZuOiBnZXRBbHBoYU51bVRva2Vuc1NvcnRGbigpLFxuICAgICAgICB9KTtcbiAgICAgICAgeWllbGQgZ2V0Q29sbGVjdGlvbkFuZFByZXBhcmVUb2tlbnMoe1xuICAgICAgICAgICAgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lcy5nZXQoJ2dsb2JhbFNpemluZycpLFxuICAgICAgICAgICAgbW9kZU5hbWU6IHRvVGl0bGVDYXNlKFwiZGVmYXVsdFwiKSxcbiAgICAgICAgICAgIGRhdGE6IHNpemluZ1Rva2Vucy5nbG9iYWwsXG4gICAgICAgICAgICBzb3J0Rm46IGdldEFscGhhTnVtVG9rZW5zU29ydEZuKCksXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVWYXJpYWJsZXNGb3JQbGF5Z3JvdW5kKGRhdGEsIGlzUGxheWdyb3VuZCA9IGZhbHNlKSB7XG4gICAgaWYgKGlzUGxheWdyb3VuZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICA7XG4gICAgY29uc3QgY29udHJhc3RSYXRpb3MgPSB7fTtcbiAgICBjb25zdCBwcmltYXJ5Q29sb3JIVUUgPSBkYXRhLnByaW1hcnk7XG4gICAgY29uc3Qgc2hhZGVzID0gZ2V0R2xvYmFsQWNjZW50KGRhdGFbcHJpbWFyeUNvbG9ySFVFXSwgZGF0YS5hY2NlbnRTYXR1cmF0aW9uLCBkYXRhLmFjY2VudE1pbkx1bWluYW5jZSwgZGF0YS5hY2NlbnRNaWRMdW1pbmFuY2UsIGRhdGEuYWNjZW50TWF4THVtaW5hbmNlKTtcbiAgICBPYmplY3QuZW50cmllcyhzaGFkZXMpLmZvckVhY2goKFtuYW1lLCB0b2tlbl0pID0+IHtcbiAgICAgICAgdG9rZW4uc2NvcGVzID0gW107XG4gICAgICAgIGxldCBjaHJvbWFDb2xvciA9IGNocm9tYSh0b2tlbi4kdmFsdWUpO1xuICAgICAgICBjb25zdCBjb250cmFzdDEgPSByb3VuZFR3b0RpZ2l0cyhjaHJvbWEuY29udHJhc3QoY2hyb21hLmhzbChbMCwgMCwgMV0pLCBjaHJvbWFDb2xvcikpO1xuICAgICAgICBjb25zdCBjb250cmFzdDIgPSByb3VuZFR3b0RpZ2l0cyhjaHJvbWEuY29udHJhc3QoY2hyb21hLmhzbChbMCwgMCwgMC4yMl0pLCBjaHJvbWFDb2xvcikpO1xuICAgICAgICBjb250cmFzdFJhdGlvc1tgX2FjY2VudF8ke25hbWV9X3ZzX2xpZ2h0YF0gPSB7XG4gICAgICAgICAgICBcIiR2YWx1ZVwiOiBjb250cmFzdDEudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIFwiJHR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIFwic2NvcGVzXCI6IFtdXG4gICAgICAgIH07XG4gICAgICAgIGNvbnRyYXN0UmF0aW9zW2BfYWNjZW50XyR7bmFtZX1fdnNfZGFya2BdID0ge1xuICAgICAgICAgICAgXCIkdmFsdWVcIjogY29udHJhc3QyLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBcIiR0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBcInNjb3Blc1wiOiBbXVxuICAgICAgICB9O1xuICAgIH0pO1xuICAgIGltcG9ydFZhcmlhYmxlcyh7XG4gICAgICAgIGNvbGxlY3Rpb25OYW1lOiBcIl9QbGF5Z3JvdW5kXCIsXG4gICAgICAgIG1vZGVOYW1lOiBcIkRlZmF1bHRcIixcbiAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZsYXR0ZW5PYmplY3QoeyAnX2dsb2JhbC1hY2NlbnQnOiBzaGFkZXMgfSkpLCBjb250cmFzdFJhdGlvcyksIHsgJ19wcmltYXJ5LWNvbG9yLWh1ZSc6IHtcbiAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBkYXRhW2RhdGEucHJpbWFyeV0udG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJzY29wZXNcIjogW11cbiAgICAgICAgICAgIH0sICdfcHJpbWFyeS1jb2xvcic6IHtcbiAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBkYXRhLnByaW1hcnksXG4gICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwic2NvcGVzXCI6IFtdXG4gICAgICAgICAgICB9LCAnX3N1Y2Nlc3MtY29sb3InOiB7XG4gICAgICAgICAgICAgICAgXCIkdmFsdWVcIjogZGF0YS5zdWNjZXNzLFxuICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInNjb3Blc1wiOiBbXVxuICAgICAgICAgICAgfSwgJ193YXJuaW5nLWNvbG9yJzoge1xuICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IGRhdGEud2FybmluZyxcbiAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJzY29wZXNcIjogW11cbiAgICAgICAgICAgIH0sICdfZGFuZ2VyLWNvbG9yJzoge1xuICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IGRhdGEuZGFuZ2VyLFxuICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInNjb3Blc1wiOiBbXVxuICAgICAgICAgICAgfSwgJ19pbmZvLWNvbG9yJzoge1xuICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IGRhdGEuaW5mbyxcbiAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJzY29wZXNcIjogW11cbiAgICAgICAgICAgIH0gfSlcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGltcG9ydEFsbFRva2VucyhwYXJhbXMpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBmaWdtYS5yb290LnNldFBsdWdpbkRhdGEoJ1NEUycsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xuICAgICAgICBjb25zdCBpc1BsYXlncm91bmQgPSBmaWdtYS5yb290LmdldFBsdWdpbkRhdGEoJ1NEU1BsYXlncm91bmQnKSAhPT0gJyc7XG4gICAgICAgIGdlbmVyYXRlVmFyaWFibGVzRm9yUGxheWdyb3VuZChwYXJhbXMsIGlzUGxheWdyb3VuZCk7XG4gICAgICAgIHlpZWxkIGltcG9ydENvbG9yVGhlbWUocGFyYW1zKTtcbiAgICAgICAgeWllbGQgaW1wb3J0VmFyaWFibGVzKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZXMuZ2V0KCdjb21wb25lbnRDb2xvcnMnKSxcbiAgICAgICAgICAgIG1vZGVOYW1lOiBcIkRlZmF1bHRcIixcbiAgICAgICAgICAgIGRhdGE6IGdldENvbXBvbmVudENvbG9ycygpXG4gICAgICAgIH0pO1xuICAgICAgICB5aWVsZCBpbXBvcnRTaXplVG9rZW5zKHtcbiAgICAgICAgICAgIHR5cGU6ICdzcGFjaW5nJyxcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZXMuZ2V0KCdzcGFjaW5nJyksXG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICAgIGRlZmF1bHRNb2RlOiBwYXJhbXMuc3BhY2luZyxcbiAgICAgICAgICAgIGRlZmF1bHRPcmRlcjogc3BhY2luZ1NpemVOYW1lLFxuICAgICAgICAgICAgdG9rZW5zOiBzcGFjaW5nVG9rZW5zXG4gICAgICAgIH0pO1xuICAgICAgICB5aWVsZCBpbXBvcnRTaXplVG9rZW5zKHtcbiAgICAgICAgICAgIHR5cGU6ICdyYWRpaScsXG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgncmFkaWknKSxcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgICAgZGVmYXVsdE1vZGU6IHBhcmFtcy5yYWRpaSxcbiAgICAgICAgICAgIGRlZmF1bHRPcmRlcjogcmFkaWlTaXplTmFtZSxcbiAgICAgICAgICAgIHRva2VuczogcmFkaWlUb2tlbnNcbiAgICAgICAgfSk7XG4gICAgICAgIHlpZWxkIGltcG9ydFNpemVUb2tlbnMoe1xuICAgICAgICAgICAgdHlwZTogJ3R5cGVTY2FsZScsXG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogJ1R5cGUgU2NhbGUnLFxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgICBkZWZhdWx0TW9kZTogcGFyYW1zLmJhc2VGb250U2l6ZSxcbiAgICAgICAgICAgIGRlZmF1bHRPcmRlcjogdHlwb2dyYXBoeVNpemVOYW1lLFxuICAgICAgICAgICAgdG9rZW5zOiB0eXBlc2NhbGVUb2tlbnMsXG4gICAgICAgICAgICBpc1NpbmdsZU1vZGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIElDT05TIFNDQUxFXG4gICAgICAgIHlpZWxkIGltcG9ydFNpemVUb2tlbnMoe1xuICAgICAgICAgICAgdHlwZTogJ2ljb25TY2FsZScsXG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgnaWNvblNjYWxlJyksXG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICAgIGRlZmF1bHRNb2RlOiAnYmFzZScsXG4gICAgICAgICAgICBkZWZhdWx0T3JkZXI6IGljb25TaXplTmFtZSxcbiAgICAgICAgICAgIHRva2Vuczogc2l6aW5nVG9rZW5zXG4gICAgICAgIH0pO1xuICAgICAgICB5aWVsZCBpbXBvcnRWYXJpYWJsZXMoe1xuICAgICAgICAgICAgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lcy5nZXQoJ29wYWNpdHknKSxcbiAgICAgICAgICAgIG1vZGVOYW1lOiBcIkRlZmF1bHRcIixcbiAgICAgICAgICAgIGRhdGE6IG9wYWNpdHlUb2tlbnMub3BhY2l0eVxuICAgICAgICB9KTtcbiAgICAgICAgeWllbGQgaW1wb3J0VmFyaWFibGVzKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZXMuZ2V0KCdnbG9iYWxTaXppbmcnKSxcbiAgICAgICAgICAgIG1vZGVOYW1lOiBcIkRlZmF1bHRcIixcbiAgICAgICAgICAgIGRhdGE6IHNpemluZ1Rva2Vucy5nbG9iYWxcbiAgICAgICAgfSk7XG4gICAgICAgIGdsb2JhbFRva2VucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZ2xvYmFsVG9rZW5zKSwgdHlwZXNjYWxlVG9rZW5zLmdldFR5cG9ncmFvaHlUb2tlbnMocGFyYW1zLmJhc2VGb250U2l6ZSwgcGFyYW1zLnR5cGVTY2FsZSkpO1xuICAgICAgICB5aWVsZCBpbXBvcnRUZXh0U3R5bGVzKHR5cGVzY2FsZVRva2Vucy5nZXRUeXBvZ3Jhb2h5VG9rZW5zKHBhcmFtcy5iYXNlRm9udFNpemUsIHBhcmFtcy50eXBlU2NhbGUpKTtcbiAgICAgICAgeWllbGQgaW1wb3J0RWZmZWN0cygpO1xuICAgICAgICBmaWdtYS5ub3RpZnkoXCJGaWdtYSB2YXJpYWJsZXMgaGFzIGJlZW4gaW1wb3J0ZWRcIik7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKFwiaW1wb3J0Q29tcGxldGVkXCIpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaW1wb3J0RWZmZWN0cygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyBpbXBvcnQgZWZmZWN0cyBmb3IgZGVmYXVsdCB0aGVtZSB3aGljaCBpcyBsaWdodCBvbmVcbiAgICAgICAgeWllbGQgaW1wb3J0RWZmZWN0U3R5bGVzKGVmZmVjdHNUb2tlbnMuZWxldmF0aW9uKTtcbiAgICAgICAgdXBkYXRlRWxldmF0aW9uQ29tcG9uZW50cyhlZmZlY3RzVG9rZW5zLmdldEVsZXZhdGlvblRva2VucygpKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGltcG9ydENvbG9yVGhlbWUocGFyYW1zKSB7XG4gICAgbGV0IHRoZW1lQ29sb3JzID0gZ2V0VGhlbWVDb2xvcnMoJ2xpZ2h0QmFzZScsIHBhcmFtcyk7XG4gICAgZ2xvYmFsVG9rZW5zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGdldEdsb2JhbE5ldXRyYWxzKCkpLCBnZXRDb21wb25lbnRDb2xvcnMoKSksIHRoZW1lQ29sb3JzKTtcbiAgICBjb25zb2xlLmxvZygnSW1wb3J0aW5nIExpZ2h0IEJhc2UnLCB0aGVtZUNvbG9ycyk7XG4gICAgaW1wb3J0VmFyaWFibGVzKHtcbiAgICAgICAgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lcy5nZXQoJ3RoZW1lQ29sb3JzJyksXG4gICAgICAgIG1vZGVOYW1lOiBcIkxpZ2h0IEJhc2VcIixcbiAgICAgICAgZGF0YTogdGhlbWVDb2xvcnMsXG4gICAgICAgIHNvcnRGbjogZ2V0Q29sb3JUb2tlbnNTb3J0Rm5cbiAgICB9KTtcbiAgICB0aGVtZUNvbG9ycyA9IGdldFRoZW1lQ29sb3JzKCdkYXJrQmFzZScsIHBhcmFtcyk7XG4gICAgZ2xvYmFsVG9rZW5zID0gT2JqZWN0LmFzc2lnbihnbG9iYWxUb2tlbnMsIHRoZW1lQ29sb3JzKTtcbiAgICBjb25zb2xlLmxvZygnSW1wb3J0aW5nIERhcmsgQmFzZScsIHRoZW1lQ29sb3JzKTtcbiAgICBpbXBvcnRWYXJpYWJsZXMoe1xuICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgndGhlbWVDb2xvcnMnKSxcbiAgICAgICAgbW9kZU5hbWU6IFwiRGFyayBCYXNlXCIsXG4gICAgICAgIGRhdGE6IHRoZW1lQ29sb3JzXG4gICAgfSk7XG4gICAgdGhlbWVDb2xvcnMgPSBnZXRUaGVtZUNvbG9ycygnZGFya0VsZXZhdGVkJywgcGFyYW1zKTtcbiAgICBnbG9iYWxUb2tlbnMgPSBPYmplY3QuYXNzaWduKGdsb2JhbFRva2VucywgdGhlbWVDb2xvcnMpO1xuICAgIGNvbnNvbGUubG9nKCdJbXBvcnRpbmcgRGFyayBFbGV2YXRlZCcsIHRoZW1lQ29sb3JzKTtcbiAgICBpbXBvcnRWYXJpYWJsZXMoe1xuICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgndGhlbWVDb2xvcnMnKSxcbiAgICAgICAgbW9kZU5hbWU6IFwiRGFyayBFbGV2YXRlZFwiLFxuICAgICAgICBkYXRhOiB0aGVtZUNvbG9yc1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaW1wb3J0U2l6ZVRva2VucyhkYXRhKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgdG9rZW5zID0gZGF0YS50b2tlbnM7XG4gICAgICAgIGNvbnN0IGlzU2luZ2xlTW9kZSA9IGRhdGEuaXNTaW5nbGVNb2RlIHx8IGZhbHNlO1xuICAgICAgICBjb25zdCBzaW5nbGVDb2xsZWN0aW9uID0gZGF0YS5wYXJhbXMuc2luZ2xlQ29sbGVjdGlvbjtcbiAgICAgICAgY29uc3QgZGVmYXVsdE1vZGUgPSBkYXRhLmRlZmF1bHRNb2RlO1xuICAgICAgICBjb25zdCBkZWZhdWx0T3JkZXIgPSBkYXRhLmRlZmF1bHRPcmRlci5maWx0ZXIoaXRlbSA9PiBpdGVtICE9IGRlZmF1bHRNb2RlKTtcbiAgICAgICAgZGVmYXVsdE9yZGVyLnNwbGljZSgwLCAwLCBkZWZhdWx0TW9kZSk7XG4gICAgICAgIGRlZmF1bHRPcmRlci5sZW5ndGggPSBpc1NpbmdsZU1vZGUgPyAxIDogZGVmYXVsdE9yZGVyLmxlbmd0aDtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBtb2RlTmFtZSBvZiBkZWZhdWx0T3JkZXIpIHtcbiAgICAgICAgICAgIHlpZWxkIGltcG9ydFZhcmlhYmxlcyh7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbk5hbWU6IHNpbmdsZUNvbGxlY3Rpb24gPyBcIlVJIFNjYWxlXCIgOiBkYXRhLmNvbGxlY3Rpb25OYW1lLFxuICAgICAgICAgICAgICAgIG1vZGVOYW1lOiB0b1RpdGxlQ2FzZShtb2RlTmFtZSksXG4gICAgICAgICAgICAgICAgbW9kZUluZGV4OiBpbmRleCsrLFxuICAgICAgICAgICAgICAgIGRhdGE6IHRva2Vuc1ttb2RlTmFtZV0sXG4gICAgICAgICAgICAgICAgaXNTaW5nbGVNb2RlOiBpc1NpbmdsZU1vZGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRDb2xsZWN0aW9uQW5kUHJlcGFyZVRva2Vucyh7IGNvbGxlY3Rpb25OYW1lLCBtb2RlTmFtZSwgbW9kZUluZGV4ID0gLTEsIGRhdGEsIHNvcnRGbiA9IG51bGwsIGlzU2luZ2xlTW9kZSA9IGZhbHNlIH0pIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgbW9kZUlkO1xuICAgICAgICBjb25zdCB7IGNvbGxlY3Rpb24sIGlzTmV3IH0gPSB5aWVsZCBnZXRGaWdtYUNvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpO1xuICAgICAgICBpZiAoaXNOZXcgfHwgaXNTaW5nbGVNb2RlKSB7XG4gICAgICAgICAgICBtb2RlSWQgPSBjb2xsZWN0aW9uLm1vZGVzWzBdLm1vZGVJZDtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24ucmVuYW1lTW9kZShtb2RlSWQsIG1vZGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZGUgPSBtb2RlSW5kZXggPCAwID8gY29sbGVjdGlvbi5tb2Rlcy5maW5kKG1vZGUgPT4gbW9kZS5uYW1lID09PSBtb2RlTmFtZSkgOiBjb2xsZWN0aW9uLm1vZGVzW21vZGVJbmRleF07XG4gICAgICAgICAgICBpZiAoIW1vZGUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBtb2RlSWQgPSBjb2xsZWN0aW9uLmFkZE1vZGUobW9kZU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5ub3RpZnkoXCJDYW5ub3QgY3JlYXRlIG1vcmUgdGhhbiBvbmUgbW9kZS4gSXMgeW91ciBmaWxlIHVuZGVyIFBybyB0ZWFtIG9yIG9yZyBwbGFuP1wiLCB7IGVycm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vZGVJZCA9IG1vZGUubW9kZUlkO1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24ucmVuYW1lTW9kZShtb2RlSWQsIG1vZGVOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgdHJhbnNmb3JtZWRUb2tlbnMgPSBPYmplY3QuZW50cmllcyhkYXRhKS5tYXAoKFtrZXksIG9iamVjdF0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgbmFtZToga2V5IH0sIG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgc29ydGVkVG9rZW5zID0gdHJhbnNmb3JtZWRUb2tlbnM7XG4gICAgICAgIGlmIChzb3J0Rm4gIT0gbnVsbCkge1xuICAgICAgICAgICAgc29ydGVkVG9rZW5zID0gdHJhbnNmb3JtZWRUb2tlbnMuc29ydChzb3J0Rm4pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05ldykge1xuICAgICAgICAgICAgLy8gY3JlYXRlIHZhcmlhYmxlcyBzdHJhaWdodCBhd2F5IHNvIHRoZXJlIGlzIGEgd2F5IHRvIG1ha2UgXG4gICAgICAgICAgICAvLyByZWZlcmVuY2VzIC8gYWxpYXNlcyB3aXRob3V0IGFkZGl0aW9uYWwgcGFzc1xuICAgICAgICAgICAgZm9yIChjb25zdCB0b2tlbiBvZiBzb3J0ZWRUb2tlbnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gcmVzb2x2ZVZhcmlhYmxlVHlwZSh0b2tlbi4kdHlwZSk7XG4gICAgICAgICAgICAgICAgeWllbGQgc2V0RmlnbWFWYXJpYWJsZShjb2xsZWN0aW9uLCBtb2RlSWQsIHR5cGUsIHRva2VuLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b2tlbnM6IHNvcnRlZFRva2VucyxcbiAgICAgICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgICAgICBtb2RlSWQsXG4gICAgICAgICAgICB0eXBlOiBkYXRhLiR0eXBlXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpbXBvcnRWYXJpYWJsZXMoeyBjb2xsZWN0aW9uTmFtZSwgbW9kZU5hbWUsIG1vZGVJbmRleCA9IC0xLCBkYXRhLCBzb3J0Rm4gPSBudWxsLCBpc1NpbmdsZU1vZGUgPSBmYWxzZSB9KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgeyB0b2tlbnMsIGNvbGxlY3Rpb24sIG1vZGVJZCwgdHlwZSB9ID0geWllbGQgZ2V0Q29sbGVjdGlvbkFuZFByZXBhcmVUb2tlbnMoeyBjb2xsZWN0aW9uTmFtZSwgbW9kZU5hbWUsIG1vZGVJbmRleCwgZGF0YSwgc29ydEZuLCBpc1NpbmdsZU1vZGUgfSk7XG4gICAgICAgIC8vIGF3YWl0IFByb21pc2UuYWxsKHRva2Vucy5tYXAoYXN5bmMgKHRva2VuOiBEZXNpZ25Ub2tlbikgPT4ge1xuICAgICAgICAvLyB9KSk7XG4gICAgICAgIGZvciAoY29uc3QgdG9rZW4gb2YgdG9rZW5zKSB7XG4gICAgICAgICAgICB5aWVsZCBwcm9jZXNzVG9rZW4oe1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgICAgICAgICAgbW9kZUlkLFxuICAgICAgICAgICAgICAgIHR5cGU6IHRva2VuLiR0eXBlLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlTmFtZTogdG9rZW4ubmFtZSxcbiAgICAgICAgICAgICAgICB0b2tlbjogdG9rZW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBwcm9jZXNzVG9rZW4oeyBjb2xsZWN0aW9uLCBtb2RlSWQsIHR5cGUsIHZhcmlhYmxlTmFtZSwgdG9rZW4gfSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHR5cGUgPSB0eXBlIHx8IHRva2VuLiR0eXBlO1xuICAgICAgICAvLyBpZiBrZXkgaXMgYSBtZXRhIGZpZWxkLCBtb3ZlIG9uXG4gICAgICAgIGlmICh2YXJpYWJsZU5hbWUuY2hhckF0KDApID09PSBcIiRcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b2tlbi4kdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiY29sb3JcIikge1xuICAgICAgICAgICAgICAgIGxldCBjb2xvclZhbHVlID0gcGFyc2VDb2xvclRva2VuKHRva2VuLCBnbG9iYWxUb2tlbnMpO1xuICAgICAgICAgICAgICAgIGxldCByZWZlcmVuY2VWYXIgPSB5aWVsZCBmaW5kVmFyaWFibGVCeVJlZmVyZW5jZXModG9rZW4uJHZhbHVlLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlZmVyZW5jZVZhcikge1xuICAgICAgICAgICAgICAgICAgICBjb2xvclZhbHVlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJWQVJJQUJMRV9BTElBU1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJlZmVyZW5jZVZhci5pZCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIHNldEZpZ21hVmFyaWFibGUoY29sbGVjdGlvbiwgbW9kZUlkLCBcIkNPTE9SXCIsIHZhcmlhYmxlTmFtZSwgY29sb3JWYWx1ZSwgdG9rZW4uc2NvcGVzIHx8IFsnQUxMX1NDT1BFUyddLCB0b2tlbi5kZXNjcmlwdGlvbiB8fCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIHNldEZpZ21hVmFyaWFibGUoY29sbGVjdGlvbiwgbW9kZUlkLCBcIkZMT0FUXCIsIHZhcmlhYmxlTmFtZSwgcGFyc2VGbG9hdCh0b2tlbi4kdmFsdWUpLCB0b2tlbi5zY29wZXMsIHRva2VuLmRlc2NyaXB0aW9uIHx8IG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgc2V0RmlnbWFWYXJpYWJsZShjb2xsZWN0aW9uLCBtb2RlSWQsIFwiU1RSSU5HXCIsIHZhcmlhYmxlTmFtZSwgcGFyc2VSZWZlcmVuY2VHbG9iYWwodG9rZW4uJHZhbHVlLCBnbG9iYWxUb2tlbnMpLCB0b2tlbi5zY29wZXMsIHRva2VuLmRlc2NyaXB0aW9uIHx8IG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwidW5zdXBwb3J0ZWQgdHlwZVwiLCB0eXBlLCB0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ3JlY3Vyc2lvbiBpbiAnLCB0b2tlbik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGV4cG9ydFRvSlNPTihjb2xvckZvcm1hdCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25zID0geWllbGQgZmlnbWEudmFyaWFibGVzLmdldExvY2FsVmFyaWFibGVDb2xsZWN0aW9uc0FzeW5jKCk7XG4gICAgICAgIGNvbnN0IGZpbGVzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgY29sbGVjdGlvbiBvZiBjb2xsZWN0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgZXhwb3J0ZWREYXRhID0geWllbGQgZXhwb3J0Q29sbGVjdGlvbihjb2xsZWN0aW9uLCBjb2xvckZvcm1hdCk7XG4gICAgICAgICAgICBmaWxlcy5wdXNoKC4uLmV4cG9ydGVkRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcIkVYUE9SVF9SRVNVTFRcIiwgZmlsZXMgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBleHBvcnRDb2xsZWN0aW9uKHsgbmFtZSwgbW9kZXMsIHZhcmlhYmxlSWRzIH0sIGNvbG9yRm9ybWF0KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbnMgPSBbXTtcbiAgICAgICAgY29uc3QgdmFyaWFibGVSZWZlcmVuY2VzID0gdmFyaWFibGVJZHMuc29ydCgpO1xuICAgICAgICBmb3IgKGNvbnN0IG1vZGUgb2YgbW9kZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSB7IGNvbGxlY3Rpb246IG5hbWUsIG1vZGU6IG1vZGUubmFtZSwgdG9rZW5zOiB7fSB9O1xuICAgICAgICAgICAgZm9yIChjb25zdCB2YXJpYWJsZUlkIG9mIHZhcmlhYmxlUmVmZXJlbmNlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgcmVzb2x2ZWRUeXBlLCB2YWx1ZXNCeU1vZGUgfSA9IHlpZWxkIGZpZ21hLnZhcmlhYmxlcy5nZXRWYXJpYWJsZUJ5SWRBc3luYyh2YXJpYWJsZUlkKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuYW1lKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc0J5TW9kZVttb2RlLm1vZGVJZF07XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgW1wiQ09MT1JcIiwgXCJGTE9BVFwiXS5pbmNsdWRlcyhyZXNvbHZlZFR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSBjb2xsZWN0aW9uLnRva2VucztcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5zcGxpdChcIi9cIikuZm9yRWFjaCgoZ3JvdXBOYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbZ3JvdXBOYW1lXSA9IG9ialtncm91cE5hbWVdIHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqID0gb2JqW2dyb3VwTmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBvYmouJHR5cGUgPSByZXNvbHZlZFR5cGUgPT09IFwiQ09MT1JcIiA/IFwiY29sb3JcIiA6IFwibnVtYmVyXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS50eXBlID09PSBcIlZBUklBQkxFX0FMSUFTXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlID0geWllbGQgZmlnbWEudmFyaWFibGVzLmdldFZhcmlhYmxlQnlJZEFzeW5jKHZhbHVlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai4kdmFsdWUgPSBgeyR7dmFyaWFibGUubmFtZS5yZXBsYWNlKC9cXC8vZywgXCIuXCIpfX1gO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLiR2YWx1ZSA9IHJlc29sdmVkVHlwZSA9PT0gXCJDT0xPUlwiID8gY29udmVydEZpZ21hQ29sb3JUb1JnYih2YWx1ZSwgY29sb3JGb3JtYXQpIDogdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBjb2xsZWN0aW9ucy5wdXNoKGNvbGxlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb25zO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9