/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/chroma-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/chroma-js/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/chroma.js */ "./node_modules/chroma-js/src/chroma.js");
/* harmony import */ var _src_io_named_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/io/named/index.js */ "./node_modules/chroma-js/src/io/named/index.js");
/* harmony import */ var _src_ops_alpha_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/ops/alpha.js */ "./node_modules/chroma-js/src/ops/alpha.js");
/* harmony import */ var _src_ops_clipped_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/ops/clipped.js */ "./node_modules/chroma-js/src/ops/clipped.js");
/* harmony import */ var _src_ops_darken_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/ops/darken.js */ "./node_modules/chroma-js/src/ops/darken.js");
/* harmony import */ var _src_ops_get_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/ops/get.js */ "./node_modules/chroma-js/src/ops/get.js");
/* harmony import */ var _src_ops_luminance_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/ops/luminance.js */ "./node_modules/chroma-js/src/ops/luminance.js");
/* harmony import */ var _src_ops_mix_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/ops/mix.js */ "./node_modules/chroma-js/src/ops/mix.js");
/* harmony import */ var _src_ops_premultiply_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/ops/premultiply.js */ "./node_modules/chroma-js/src/ops/premultiply.js");
/* harmony import */ var _src_ops_saturate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/ops/saturate.js */ "./node_modules/chroma-js/src/ops/saturate.js");
/* harmony import */ var _src_ops_set_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/ops/set.js */ "./node_modules/chroma-js/src/ops/set.js");
/* harmony import */ var _src_ops_shade_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/ops/shade.js */ "./node_modules/chroma-js/src/ops/shade.js");
/* harmony import */ var _src_interpolator_rgb_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/interpolator/rgb.js */ "./node_modules/chroma-js/src/interpolator/rgb.js");
/* harmony import */ var _src_interpolator_lrgb_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/interpolator/lrgb.js */ "./node_modules/chroma-js/src/interpolator/lrgb.js");
/* harmony import */ var _src_interpolator_lab_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/interpolator/lab.js */ "./node_modules/chroma-js/src/interpolator/lab.js");
/* harmony import */ var _src_interpolator_lch_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/interpolator/lch.js */ "./node_modules/chroma-js/src/interpolator/lch.js");
/* harmony import */ var _src_interpolator_num_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/interpolator/num.js */ "./node_modules/chroma-js/src/interpolator/num.js");
/* harmony import */ var _src_interpolator_hcg_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/interpolator/hcg.js */ "./node_modules/chroma-js/src/interpolator/hcg.js");
/* harmony import */ var _src_interpolator_hsi_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./src/interpolator/hsi.js */ "./node_modules/chroma-js/src/interpolator/hsi.js");
/* harmony import */ var _src_interpolator_hsl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./src/interpolator/hsl.js */ "./node_modules/chroma-js/src/interpolator/hsl.js");
/* harmony import */ var _src_interpolator_hsv_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./src/interpolator/hsv.js */ "./node_modules/chroma-js/src/interpolator/hsv.js");
/* harmony import */ var _src_interpolator_oklab_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./src/interpolator/oklab.js */ "./node_modules/chroma-js/src/interpolator/oklab.js");
/* harmony import */ var _src_interpolator_oklch_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./src/interpolator/oklch.js */ "./node_modules/chroma-js/src/interpolator/oklch.js");
/* harmony import */ var _src_generator_average_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./src/generator/average.js */ "./node_modules/chroma-js/src/generator/average.js");
/* harmony import */ var _src_generator_bezier_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./src/generator/bezier.js */ "./node_modules/chroma-js/src/generator/bezier.js");
/* harmony import */ var _src_generator_blend_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./src/generator/blend.js */ "./node_modules/chroma-js/src/generator/blend.js");
/* harmony import */ var _src_generator_cubehelix_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./src/generator/cubehelix.js */ "./node_modules/chroma-js/src/generator/cubehelix.js");
/* harmony import */ var _src_generator_mix_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./src/generator/mix.js */ "./node_modules/chroma-js/src/generator/mix.js");
/* harmony import */ var _src_generator_random_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./src/generator/random.js */ "./node_modules/chroma-js/src/generator/random.js");
/* harmony import */ var _src_generator_scale_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./src/generator/scale.js */ "./node_modules/chroma-js/src/generator/scale.js");
/* harmony import */ var _src_utils_analyze_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./src/utils/analyze.js */ "./node_modules/chroma-js/src/utils/analyze.js");
/* harmony import */ var _src_utils_contrast_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./src/utils/contrast.js */ "./node_modules/chroma-js/src/utils/contrast.js");
/* harmony import */ var _src_utils_contrastAPCA_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./src/utils/contrastAPCA.js */ "./node_modules/chroma-js/src/utils/contrastAPCA.js");
/* harmony import */ var _src_utils_delta_e_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./src/utils/delta-e.js */ "./node_modules/chroma-js/src/utils/delta-e.js");
/* harmony import */ var _src_utils_distance_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./src/utils/distance.js */ "./node_modules/chroma-js/src/utils/distance.js");
/* harmony import */ var _src_utils_valid_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./src/utils/valid.js */ "./node_modules/chroma-js/src/utils/valid.js");
/* harmony import */ var _src_io_input_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./src/io/input.js */ "./node_modules/chroma-js/src/io/input.js");
/* harmony import */ var _src_utils_scales_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./src/utils/scales.js */ "./node_modules/chroma-js/src/utils/scales.js");
/* harmony import */ var _src_colors_w3cx11_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./src/colors/w3cx11.js */ "./node_modules/chroma-js/src/colors/w3cx11.js");
/* harmony import */ var _src_colors_colorbrewer_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./src/colors/colorbrewer.js */ "./node_modules/chroma-js/src/colors/colorbrewer.js");
/* harmony import */ var _src_Color_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./src/Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _src_io_cmyk_index_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./src/io/cmyk/index.js */ "./node_modules/chroma-js/src/io/cmyk/index.js");
/* harmony import */ var _src_io_css_index_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./src/io/css/index.js */ "./node_modules/chroma-js/src/io/css/index.js");
/* harmony import */ var _src_io_gl_index_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./src/io/gl/index.js */ "./node_modules/chroma-js/src/io/gl/index.js");
/* harmony import */ var _src_io_hcg_index_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./src/io/hcg/index.js */ "./node_modules/chroma-js/src/io/hcg/index.js");
/* harmony import */ var _src_io_hex_index_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./src/io/hex/index.js */ "./node_modules/chroma-js/src/io/hex/index.js");
/* harmony import */ var _src_io_hsi_index_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./src/io/hsi/index.js */ "./node_modules/chroma-js/src/io/hsi/index.js");
/* harmony import */ var _src_io_hsl_index_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./src/io/hsl/index.js */ "./node_modules/chroma-js/src/io/hsl/index.js");
/* harmony import */ var _src_io_hsv_index_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./src/io/hsv/index.js */ "./node_modules/chroma-js/src/io/hsv/index.js");
/* harmony import */ var _src_io_lab_index_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./src/io/lab/index.js */ "./node_modules/chroma-js/src/io/lab/index.js");
/* harmony import */ var _src_io_lch_index_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./src/io/lch/index.js */ "./node_modules/chroma-js/src/io/lch/index.js");
/* harmony import */ var _src_io_num_index_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./src/io/num/index.js */ "./node_modules/chroma-js/src/io/num/index.js");
/* harmony import */ var _src_io_rgb_index_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./src/io/rgb/index.js */ "./node_modules/chroma-js/src/io/rgb/index.js");
/* harmony import */ var _src_io_temp_index_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./src/io/temp/index.js */ "./node_modules/chroma-js/src/io/temp/index.js");
/* harmony import */ var _src_io_oklab_index_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./src/io/oklab/index.js */ "./node_modules/chroma-js/src/io/oklab/index.js");
/* harmony import */ var _src_io_oklch_index_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./src/io/oklch/index.js */ "./node_modules/chroma-js/src/io/oklch/index.js");
// feel free to comment out anything to rollup
// a smaller chroma.js bundle


// io --> convert colors


// operators --> modify existing Colors











// interpolators












// generators -- > create new colors








// other utility methods









// scale


// colors




Object.assign(_src_chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
    analyze: _src_utils_analyze_js__WEBPACK_IMPORTED_MODULE_30__.analyze,
    average: _src_generator_average_js__WEBPACK_IMPORTED_MODULE_23__["default"],
    bezier: _src_generator_bezier_js__WEBPACK_IMPORTED_MODULE_24__["default"],
    blend: _src_generator_blend_js__WEBPACK_IMPORTED_MODULE_25__["default"],
    brewer: _src_colors_colorbrewer_js__WEBPACK_IMPORTED_MODULE_39__["default"],
    Color: _src_Color_js__WEBPACK_IMPORTED_MODULE_40__["default"],
    colors: _src_colors_w3cx11_js__WEBPACK_IMPORTED_MODULE_38__["default"],
    contrast: _src_utils_contrast_js__WEBPACK_IMPORTED_MODULE_31__["default"],
    contrastAPCA: _src_utils_contrastAPCA_js__WEBPACK_IMPORTED_MODULE_32__["default"],
    cubehelix: _src_generator_cubehelix_js__WEBPACK_IMPORTED_MODULE_26__["default"],
    deltaE: _src_utils_delta_e_js__WEBPACK_IMPORTED_MODULE_33__["default"],
    distance: _src_utils_distance_js__WEBPACK_IMPORTED_MODULE_34__["default"],
    input: _src_io_input_js__WEBPACK_IMPORTED_MODULE_36__["default"],
    interpolate: _src_generator_mix_js__WEBPACK_IMPORTED_MODULE_27__["default"],
    limits: _src_utils_analyze_js__WEBPACK_IMPORTED_MODULE_30__.limits,
    mix: _src_generator_mix_js__WEBPACK_IMPORTED_MODULE_27__["default"],
    random: _src_generator_random_js__WEBPACK_IMPORTED_MODULE_28__["default"],
    scale: _src_generator_scale_js__WEBPACK_IMPORTED_MODULE_29__["default"],
    scales: _src_utils_scales_js__WEBPACK_IMPORTED_MODULE_37__["default"],
    valid: _src_utils_valid_js__WEBPACK_IMPORTED_MODULE_35__["default"]
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"]);




















/***/ }),

/***/ "./node_modules/chroma-js/src/Color.js":
/*!*********************************************!*\
  !*** ./node_modules/chroma-js/src/Color.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/* harmony import */ var _io_input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./io/input.js */ "./node_modules/chroma-js/src/io/input.js");



class Color {
    constructor(...args) {
        const me = this;
        if (
            (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.type)(args[0]) === 'object' &&
            args[0].constructor &&
            args[0].constructor === this.constructor
        ) {
            // the argument is already a Color instance
            return args[0];
        }
        // last argument could be the mode
        let mode = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.last)(args);
        let autodetect = false;
        if (!mode) {
            autodetect = true;

            if (!_io_input_js__WEBPACK_IMPORTED_MODULE_1__["default"].sorted) {
                _io_input_js__WEBPACK_IMPORTED_MODULE_1__["default"].autodetect = _io_input_js__WEBPACK_IMPORTED_MODULE_1__["default"].autodetect.sort((a, b) => b.p - a.p);
                _io_input_js__WEBPACK_IMPORTED_MODULE_1__["default"].sorted = true;
            }

            // auto-detect format
            for (let chk of _io_input_js__WEBPACK_IMPORTED_MODULE_1__["default"].autodetect) {
                mode = chk.test(...args);
                if (mode) break;
            }
        }
        if (_io_input_js__WEBPACK_IMPORTED_MODULE_1__["default"].format[mode]) {
            const rgb = _io_input_js__WEBPACK_IMPORTED_MODULE_1__["default"].format[mode].apply(
                null,
                autodetect ? args : args.slice(0, -1)
            );
            me._rgb = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.clip_rgb)(rgb);
        } else {
            throw new Error('unknown format: ' + args);
        }
        // add alpha channel
        if (me._rgb.length === 3) me._rgb.push(1);
    }
    toString() {
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.type)(this.hex) == 'function') return this.hex();
        return `[${this._rgb.join(',')}]`;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Color);


/***/ }),

/***/ "./node_modules/chroma-js/src/chroma.js":
/*!**********************************************!*\
  !*** ./node_modules/chroma-js/src/chroma.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./version.js */ "./node_modules/chroma-js/src/version.js");



const chroma = (...args) => {
    return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](...args);
};

chroma.version = _version_js__WEBPACK_IMPORTED_MODULE_1__.version;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chroma);


/***/ }),

/***/ "./node_modules/chroma-js/src/colors/colorbrewer.js":
/*!**********************************************************!*\
  !*** ./node_modules/chroma-js/src/colors/colorbrewer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

const colorbrewer = {
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
    Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2']
};

const colorbrewerTypes = Object.keys(colorbrewer);
const typeMap = new Map(colorbrewerTypes.map((key) => [key.toLowerCase(), key]));

// use Proxy to allow case-insensitive access to palettes
const colorbrewerProxy =
    typeof Proxy === 'function'
        ? new Proxy(colorbrewer, {
              get(target, prop) {
                  const lower = prop.toLowerCase();
                  if (typeMap.has(lower)) {
                      return target[typeMap.get(lower)];
                  }
              },
              getOwnPropertyNames() {
                  return Object.getOwnPropertyNames(colorbrewerTypes);
              }
          })
        : colorbrewer;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (colorbrewerProxy);


/***/ }),

/***/ "./node_modules/chroma-js/src/colors/w3cx11.js":
/*!*****************************************************!*\
  !*** ./node_modules/chroma-js/src/colors/w3cx11.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
	X11 color names

	http://www.w3.org/TR/css3-color/#svg-color
*/

const w3cx11 = {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (w3cx11);


/***/ }),

/***/ "./node_modules/chroma-js/src/generator/average.js":
/*!*********************************************************!*\
  !*** ./node_modules/chroma-js/src/generator/average.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");



const { pow, sqrt, PI, cos, sin, atan2 } = Math;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((colors, mode = 'lrgb', weights = null) => {
    const l = colors.length;
    if (!weights) weights = Array.from(new Array(l)).map(() => 1);
    // normalize weights
    const k =
        l /
        weights.reduce(function (a, b) {
            return a + b;
        });
    weights.forEach((w, i) => {
        weights[i] *= k;
    });
    // convert colors to Color objects
    colors = colors.map((c) => new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](c));
    if (mode === 'lrgb') {
        return _average_lrgb(colors, weights);
    }
    const first = colors.shift();
    const xyz = first.get(mode);
    const cnt = [];
    let dx = 0;
    let dy = 0;
    // initial color
    for (let i = 0; i < xyz.length; i++) {
        xyz[i] = (xyz[i] || 0) * weights[0];
        cnt.push(isNaN(xyz[i]) ? 0 : weights[0]);
        if (mode.charAt(i) === 'h' && !isNaN(xyz[i])) {
            const A = (xyz[i] / 180) * PI;
            dx += cos(A) * weights[0];
            dy += sin(A) * weights[0];
        }
    }

    let alpha = first.alpha() * weights[0];
    colors.forEach((c, ci) => {
        const xyz2 = c.get(mode);
        alpha += c.alpha() * weights[ci + 1];
        for (let i = 0; i < xyz.length; i++) {
            if (!isNaN(xyz2[i])) {
                cnt[i] += weights[ci + 1];
                if (mode.charAt(i) === 'h') {
                    const A = (xyz2[i] / 180) * PI;
                    dx += cos(A) * weights[ci + 1];
                    dy += sin(A) * weights[ci + 1];
                } else {
                    xyz[i] += xyz2[i] * weights[ci + 1];
                }
            }
        }
    });

    for (let i = 0; i < xyz.length; i++) {
        if (mode.charAt(i) === 'h') {
            let A = (atan2(dy / cnt[i], dx / cnt[i]) / PI) * 180;
            while (A < 0) A += 360;
            while (A >= 360) A -= 360;
            xyz[i] = A;
        } else {
            xyz[i] = xyz[i] / cnt[i];
        }
    }
    alpha /= l;
    return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](xyz, mode).alpha(alpha > 0.99999 ? 1 : alpha, true);
});

const _average_lrgb = (colors, weights) => {
    const l = colors.length;
    const xyz = [0, 0, 0, 0];
    for (let i = 0; i < colors.length; i++) {
        const col = colors[i];
        const f = weights[i] / l;
        const rgb = col._rgb;
        xyz[0] += pow(rgb[0], 2) * f;
        xyz[1] += pow(rgb[1], 2) * f;
        xyz[2] += pow(rgb[2], 2) * f;
        xyz[3] += rgb[3] * f;
    }
    xyz[0] = sqrt(xyz[0]);
    xyz[1] = sqrt(xyz[1]);
    xyz[2] = sqrt(xyz[2]);
    if (xyz[3] > 0.9999999) xyz[3] = 1;
    return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.clip_rgb)(xyz));
};


/***/ }),

/***/ "./node_modules/chroma-js/src/generator/bezier.js":
/*!********************************************************!*\
  !*** ./node_modules/chroma-js/src/generator/bezier.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _io_lab_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../io/lab/index.js */ "./node_modules/chroma-js/src/io/lab/index.js");
/* harmony import */ var _scale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scale.js */ "./node_modules/chroma-js/src/generator/scale.js");
//
// interpolates between a set of colors uzing a bezier spline
//

// @requires utils lab




// nth row of the pascal triangle
const binom_row = function (n) {
    let row = [1, 1];
    for (let i = 1; i < n; i++) {
        let newrow = [1];
        for (let j = 1; j <= row.length; j++) {
            newrow[j] = (row[j] || 0) + row[j - 1];
        }
        row = newrow;
    }
    return row;
};

const bezier = function (colors) {
    let I, lab0, lab1, lab2;
    colors = colors.map((c) => new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](c));
    if (colors.length === 2) {
        // linear interpolation
        [lab0, lab1] = colors.map((c) => c.lab());
        I = function (t) {
            const lab = [0, 1, 2].map((i) => lab0[i] + t * (lab1[i] - lab0[i]));
            return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](lab, 'lab');
        };
    } else if (colors.length === 3) {
        // quadratic bezier interpolation
        [lab0, lab1, lab2] = colors.map((c) => c.lab());
        I = function (t) {
            const lab = [0, 1, 2].map(
                (i) =>
                    (1 - t) * (1 - t) * lab0[i] +
                    2 * (1 - t) * t * lab1[i] +
                    t * t * lab2[i]
            );
            return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](lab, 'lab');
        };
    } else if (colors.length === 4) {
        // cubic bezier interpolation
        let lab3;
        [lab0, lab1, lab2, lab3] = colors.map((c) => c.lab());
        I = function (t) {
            const lab = [0, 1, 2].map(
                (i) =>
                    (1 - t) * (1 - t) * (1 - t) * lab0[i] +
                    3 * (1 - t) * (1 - t) * t * lab1[i] +
                    3 * (1 - t) * t * t * lab2[i] +
                    t * t * t * lab3[i]
            );
            return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](lab, 'lab');
        };
    } else if (colors.length >= 5) {
        // general case (degree n bezier)
        let labs, row, n;
        labs = colors.map((c) => c.lab());
        n = colors.length - 1;
        row = binom_row(n);
        I = function (t) {
            const u = 1 - t;
            const lab = [0, 1, 2].map((i) =>
                labs.reduce(
                    (sum, el, j) =>
                        sum + row[j] * u ** (n - j) * t ** j * el[i],
                    0
                )
            );
            return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](lab, 'lab');
        };
    } else {
        throw new RangeError('No point in running bezier with only one color.');
    }
    return I;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((colors) => {
    const f = bezier(colors);
    f.scale = () => (0,_scale_js__WEBPACK_IMPORTED_MODULE_2__["default"])(f);
    return f;
});


/***/ }),

/***/ "./node_modules/chroma-js/src/generator/blend.js":
/*!*******************************************************!*\
  !*** ./node_modules/chroma-js/src/generator/blend.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _io_rgb_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../io/rgb/index.js */ "./node_modules/chroma-js/src/io/rgb/index.js");
/* harmony import */ var _chroma_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chroma.js */ "./node_modules/chroma-js/src/chroma.js");
/*
 * interpolates between a set of colors uzing a bezier spline
 * blend mode formulas taken from https://web.archive.org/web/20180110014946/http://www.venture-ware.com/kevin/coding/lets-learn-math-photoshop-blend-modes/
 */




const blend = (bottom, top, mode) => {
    if (!blend[mode]) {
        throw new Error('unknown blend mode ' + mode);
    }
    return blend[mode](bottom, top);
};

const blend_f = (f) => (bottom, top) => {
    const c0 = (0,_chroma_js__WEBPACK_IMPORTED_MODULE_1__["default"])(top).rgb();
    const c1 = (0,_chroma_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bottom).rgb();
    return _chroma_js__WEBPACK_IMPORTED_MODULE_1__["default"].rgb(f(c0, c1));
};

const each = (f) => (c0, c1) => {
    const out = [];
    out[0] = f(c0[0], c1[0]);
    out[1] = f(c0[1], c1[1]);
    out[2] = f(c0[2], c1[2]);
    return out;
};

const normal = (a) => a;
const multiply = (a, b) => (a * b) / 255;
const darken = (a, b) => (a > b ? b : a);
const lighten = (a, b) => (a > b ? a : b);
const screen = (a, b) => 255 * (1 - (1 - a / 255) * (1 - b / 255));
const overlay = (a, b) =>
    b < 128 ? (2 * a * b) / 255 : 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255));
const burn = (a, b) => 255 * (1 - (1 - b / 255) / (a / 255));
const dodge = (a, b) => {
    if (a === 255) return 255;
    a = (255 * (b / 255)) / (1 - a / 255);
    return a > 255 ? 255 : a;
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blend);


/***/ }),

/***/ "./node_modules/chroma-js/src/generator/cubehelix.js":
/*!***********************************************************!*\
  !*** ./node_modules/chroma-js/src/generator/cubehelix.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/* harmony import */ var _chroma_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chroma.js */ "./node_modules/chroma-js/src/chroma.js");
// cubehelix interpolation
// based on D.A. Green "A colour scheme for the display of astronomical intensity images"
// http://astron-soc.in/bulletin/11June/289392011.pdf


const { pow, sin, cos } = Math;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(start = 300,
    rotations = -1.5,
    hue = 1,
    gamma = 1,
    lightness = [0, 1]
) {
    let dh = 0,
        dl;
    if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.type)(lightness) === 'array') {
        dl = lightness[1] - lightness[0];
    } else {
        dl = 0;
        lightness = [lightness, lightness];
    }
    const f = function (fract) {
        const a = _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.TWOPI * ((start + 120) / 360 + rotations * fract);
        const l = pow(lightness[0] + dl * fract, gamma);
        const h = dh !== 0 ? hue[0] + fract * dh : hue;
        const amp = (h * l * (1 - l)) / 2;
        const cos_a = cos(a);
        const sin_a = sin(a);
        const r = l + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
        const g = l + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
        const b = l + amp * (+1.97294 * cos_a);
        return (0,_chroma_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.clip_rgb)([r * 255, g * 255, b * 255, 1]));
    };
    f.start = function (s) {
        if (s == null) {
            return start;
        }
        start = s;
        return f;
    };
    f.rotations = function (r) {
        if (r == null) {
            return rotations;
        }
        rotations = r;
        return f;
    };
    f.gamma = function (g) {
        if (g == null) {
            return gamma;
        }
        gamma = g;
        return f;
    };
    f.hue = function (h) {
        if (h == null) {
            return hue;
        }
        hue = h;
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.type)(hue) === 'array') {
            dh = hue[1] - hue[0];
            if (dh === 0) {
                hue = hue[1];
            }
        } else {
            dh = 0;
        }
        return f;
    };
    f.lightness = function (h) {
        if (h == null) {
            return lightness;
        }
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.type)(h) === 'array') {
            lightness = h;
            dl = h[1] - h[0];
        } else {
            lightness = [h, h];
            dl = 0;
        }
        return f;
    };
    f.scale = () => _chroma_js__WEBPACK_IMPORTED_MODULE_1__["default"].scale(f);
    f.hue(hue);
    return f;
}


/***/ }),

/***/ "./node_modules/chroma-js/src/generator/mix.js":
/*!*****************************************************!*\
  !*** ./node_modules/chroma-js/src/generator/mix.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/* harmony import */ var _interpolator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interpolator/index.js */ "./node_modules/chroma-js/src/interpolator/index.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((col1, col2, f = 0.5, ...rest) => {
    let mode = rest[0] || 'lrgb';
    if (!_interpolator_index_js__WEBPACK_IMPORTED_MODULE_2__["default"][mode] && !rest.length) {
        // fall back to the first supported mode
        mode = Object.keys(_interpolator_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])[0];
    }
    if (!_interpolator_index_js__WEBPACK_IMPORTED_MODULE_2__["default"][mode]) {
        throw new Error(`interpolation mode ${mode} is not defined`);
    }
    if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.type)(col1) !== 'object') col1 = new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](col1);
    if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.type)(col2) !== 'object') col2 = new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](col2);
    return _interpolator_index_js__WEBPACK_IMPORTED_MODULE_2__["default"][mode](col1, col2, f).alpha(
        col1.alpha() + f * (col2.alpha() - col1.alpha())
    );
});


/***/ }),

/***/ "./node_modules/chroma-js/src/generator/random.js":
/*!********************************************************!*\
  !*** ./node_modules/chroma-js/src/generator/random.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");

const digits = '0123456789abcdef';

const { floor, random } = Math;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
    let code = '#';
    for (let i = 0; i < 6; i++) {
        code += digits.charAt(floor(random() * 16));
    }
    return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](code, 'hex');
});


/***/ }),

/***/ "./node_modules/chroma-js/src/generator/scale.js":
/*!*******************************************************!*\
  !*** ./node_modules/chroma-js/src/generator/scale.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chroma.js */ "./node_modules/chroma-js/src/chroma.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
// minimal multi-purpose interface

// @requires utils color analyze



const { pow } = Math;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(colors) {
    // constructor
    let _mode = 'rgb';
    let _nacol = (0,_chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#ccc');
    let _spread = 0;
    // const _fixed = false;
    let _domain = [0, 1];
    let _pos = [];
    let _padding = [0, 0];
    let _classes = false;
    let _colors = [];
    let _out = false;
    let _min = 0;
    let _max = 1;
    let _correctLightness = false;
    let _colorCache = {};
    let _useCache = true;
    let _gamma = 1;

    // private methods

    const setColors = function (colors) {
        colors = colors || ['#fff', '#000'];
        if (
            colors &&
            (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.type)(colors) === 'string' &&
            _chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"].brewer &&
            _chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"].brewer[colors.toLowerCase()]
        ) {
            colors = _chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"].brewer[colors.toLowerCase()];
        }
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.type)(colors) === 'array') {
            // handle single color
            if (colors.length === 1) {
                colors = [colors[0], colors[0]];
            }
            // make a copy of the colors
            colors = colors.slice(0);
            // convert to chroma classes
            for (let c = 0; c < colors.length; c++) {
                colors[c] = (0,_chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"])(colors[c]);
            }
            // auto-fill color position
            _pos.length = 0;
            for (let c = 0; c < colors.length; c++) {
                _pos.push(c / (colors.length - 1));
            }
        }
        resetCache();
        return (_colors = colors);
    };

    const getClass = function (value) {
        if (_classes != null) {
            const n = _classes.length - 1;
            let i = 0;
            while (i < n && value >= _classes[i]) {
                i++;
            }
            return i - 1;
        }
        return 0;
    };

    let tMapLightness = (t) => t;
    let tMapDomain = (t) => t;

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

    const getColor = function (val, bypassMap) {
        let col, t;
        if (bypassMap == null) {
            bypassMap = false;
        }
        if (isNaN(val) || val === null) {
            return _nacol;
        }
        if (!bypassMap) {
            if (_classes && _classes.length > 2) {
                // find the class
                const c = getClass(val);
                t = c / (_classes.length - 2);
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
            t = tMapLightness(t); // lightness correction
        }

        if (_gamma !== 1) {
            t = pow(t, _gamma);
        }

        t = _padding[0] + t * (1 - _padding[0] - _padding[1]);

        t = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.limit)(t, 0, 1);

        const k = Math.floor(t * 10000);

        if (_useCache && _colorCache[k]) {
            col = _colorCache[k];
        } else {
            if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.type)(_colors) === 'array') {
                //for i in [0.._pos.length-1]
                for (let i = 0; i < _pos.length; i++) {
                    const p = _pos[i];
                    if (t <= p) {
                        col = _colors[i];
                        break;
                    }
                    if (t >= p && i === _pos.length - 1) {
                        col = _colors[i];
                        break;
                    }
                    if (t > p && t < _pos[i + 1]) {
                        t = (t - p) / (_pos[i + 1] - p);
                        col = _chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"].interpolate(
                            _colors[i],
                            _colors[i + 1],
                            t,
                            _mode
                        );
                        break;
                    }
                }
            } else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.type)(_colors) === 'function') {
                col = _colors(t);
            }
            if (_useCache) {
                _colorCache[k] = col;
            }
        }
        return col;
    };

    var resetCache = () => (_colorCache = {});

    setColors(colors);

    // public interface

    const f = function (v) {
        const c = (0,_chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"])(getColor(v));
        if (_out && c[_out]) {
            return c[_out]();
        } else {
            return c;
        }
    };

    f.classes = function (classes) {
        if (classes != null) {
            if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.type)(classes) === 'array') {
                _classes = classes;
                _domain = [classes[0], classes[classes.length - 1]];
            } else {
                const d = _chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"].analyze(_domain);
                if (classes === 0) {
                    _classes = [d.min, d.max];
                } else {
                    _classes = _chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"].limits(d, 'e', classes);
                }
            }
            return f;
        }
        return _classes;
    };

    f.domain = function (domain) {
        if (!arguments.length) {
            return _domain;
        }
        _min = domain[0];
        _max = domain[domain.length - 1];
        _pos = [];
        const k = _colors.length;
        if (domain.length === k && _min !== _max) {
            // update positions
            for (let d of Array.from(domain)) {
                _pos.push((d - _min) / (_max - _min));
            }
        } else {
            for (let c = 0; c < k; c++) {
                _pos.push(c / (k - 1));
            }
            if (domain.length > 2) {
                // set domain map
                const tOut = domain.map((d, i) => i / (domain.length - 1));
                const tBreaks = domain.map((d) => (d - _min) / (_max - _min));
                if (!tBreaks.every((val, i) => tOut[i] === val)) {
                    tMapDomain = (t) => {
                        if (t <= 0 || t >= 1) return t;
                        let i = 0;
                        while (t >= tBreaks[i + 1]) i++;
                        const f =
                            (t - tBreaks[i]) / (tBreaks[i + 1] - tBreaks[i]);
                        const out = tOut[i] + f * (tOut[i + 1] - tOut[i]);
                        return out;
                    };
                }
            }
        }
        _domain = [_min, _max];
        return f;
    };

    f.mode = function (_m) {
        if (!arguments.length) {
            return _mode;
        }
        _mode = _m;
        resetCache();
        return f;
    };

    f.range = function (colors, _pos) {
        setColors(colors, _pos);
        return f;
    };

    f.out = function (_o) {
        _out = _o;
        return f;
    };

    f.spread = function (val) {
        if (!arguments.length) {
            return _spread;
        }
        _spread = val;
        return f;
    };

    f.correctLightness = function (v) {
        if (v == null) {
            v = true;
        }
        _correctLightness = v;
        resetCache();
        if (_correctLightness) {
            tMapLightness = function (t) {
                const L0 = getColor(0, true).lab()[0];
                const L1 = getColor(1, true).lab()[0];
                const pol = L0 > L1;
                let L_actual = getColor(t, true).lab()[0];
                const L_ideal = L0 + (L1 - L0) * t;
                let L_diff = L_actual - L_ideal;
                let t0 = 0;
                let t1 = 1;
                let max_iter = 20;
                while (Math.abs(L_diff) > 1e-2 && max_iter-- > 0) {
                    (function () {
                        if (pol) {
                            L_diff *= -1;
                        }
                        if (L_diff < 0) {
                            t0 = t;
                            t += (t1 - t) * 0.5;
                        } else {
                            t1 = t;
                            t += (t0 - t) * 0.5;
                        }
                        L_actual = getColor(t, true).lab()[0];
                        return (L_diff = L_actual - L_ideal);
                    })();
                }
                return t;
            };
        } else {
            tMapLightness = (t) => t;
        }
        return f;
    };

    f.padding = function (p) {
        if (p != null) {
            if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.type)(p) === 'number') {
                p = [p, p];
            }
            _padding = p;
            return f;
        } else {
            return _padding;
        }
    };

    f.colors = function (numColors, out) {
        // If no arguments are given, return the original colors that were provided
        if (arguments.length < 2) {
            out = 'hex';
        }
        let result = [];

        if (arguments.length === 0) {
            result = _colors.slice(0);
        } else if (numColors === 1) {
            result = [f(0.5)];
        } else if (numColors > 1) {
            const dm = _domain[0];
            const dd = _domain[1] - dm;
            result = __range__(0, numColors, false).map((i) =>
                f(dm + (i / (numColors - 1)) * dd)
            );
        } else {
            // returns all colors based on the defined classes
            colors = [];
            let samples = [];
            if (_classes && _classes.length > 2) {
                for (
                    let i = 1, end = _classes.length, asc = 1 <= end;
                    asc ? i < end : i > end;
                    asc ? i++ : i--
                ) {
                    samples.push((_classes[i - 1] + _classes[i]) * 0.5);
                }
            } else {
                samples = _domain;
            }
            result = samples.map((v) => f(v));
        }

        if (_chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"][out]) {
            result = result.map((c) => c[out]());
        }
        return result;
    };

    f.cache = function (c) {
        if (c != null) {
            _useCache = c;
            return f;
        } else {
            return _useCache;
        }
    };

    f.gamma = function (g) {
        if (g != null) {
            _gamma = g;
            return f;
        } else {
            return _gamma;
        }
    };

    f.nodata = function (d) {
        if (d != null) {
            _nacol = (0,_chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"])(d);
            return f;
        } else {
            return _nacol;
        }
    };

    return f;
}

function __range__(left, right, inclusive) {
    let range = [];
    let ascending = left < right;
    let end = !inclusive ? right : ascending ? right + 1 : right - 1;
    for (let i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
        range.push(i);
    }
    return range;
}


/***/ }),

/***/ "./node_modules/chroma-js/src/interpolator/_hsx.js":
/*!*********************************************************!*\
  !*** ./node_modules/chroma-js/src/interpolator/_hsx.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((col1, col2, f, m) => {
    let xyz0, xyz1;
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

    let hue0, hue1, sat0, sat1, lbv0, lbv1;
    if (m.substr(0, 1) === 'h' || m === 'oklch') {
        [hue0, sat0, lbv0] = xyz0;
        [hue1, sat1, lbv1] = xyz1;
    }

    let sat, hue, lbv, dh;

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
        if ((lbv1 == 1 || lbv1 == 0) && m != 'hsv') sat = sat0;
    } else if (!isNaN(hue1)) {
        hue = hue1;
        if ((lbv0 == 1 || lbv0 == 0) && m != 'hsv') sat = sat1;
    } else {
        hue = Number.NaN;
    }

    if (sat === undefined) sat = sat0 + f * (sat1 - sat0);
    lbv = lbv0 + f * (lbv1 - lbv0);
    return m === 'oklch'
        ? new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([lbv, sat, hue], m)
        : new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([hue, sat, lbv], m);
});


/***/ }),

/***/ "./node_modules/chroma-js/src/interpolator/hcg.js":
/*!********************************************************!*\
  !*** ./node_modules/chroma-js/src/interpolator/hcg.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _io_hcg_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../io/hcg/index.js */ "./node_modules/chroma-js/src/io/hcg/index.js");
/* harmony import */ var _hsx_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hsx.js */ "./node_modules/chroma-js/src/interpolator/_hsx.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/chroma-js/src/interpolator/index.js");




const hcg = (col1, col2, f) => {
    return (0,_hsx_js__WEBPACK_IMPORTED_MODULE_1__["default"])(col1, col2, f, 'hcg');
};

// register interpolator
_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].hcg = hcg;

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (hcg);


/***/ }),

/***/ "./node_modules/chroma-js/src/interpolator/hsi.js":
/*!********************************************************!*\
  !*** ./node_modules/chroma-js/src/interpolator/hsi.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _io_hsi_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../io/hsi/index.js */ "./node_modules/chroma-js/src/io/hsi/index.js");
/* harmony import */ var _hsx_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hsx.js */ "./node_modules/chroma-js/src/interpolator/_hsx.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/chroma-js/src/interpolator/index.js");




const hsi = (col1, col2, f) => {
    return (0,_hsx_js__WEBPACK_IMPORTED_MODULE_1__["default"])(col1, col2, f, 'hsi');
};

// register interpolator
_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].hsi = hsi;

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (hsi);


/***/ }),

/***/ "./node_modules/chroma-js/src/interpolator/hsl.js":
/*!********************************************************!*\
  !*** ./node_modules/chroma-js/src/interpolator/hsl.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _io_hsl_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../io/hsl/index.js */ "./node_modules/chroma-js/src/io/hsl/index.js");
/* harmony import */ var _hsx_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hsx.js */ "./node_modules/chroma-js/src/interpolator/_hsx.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/chroma-js/src/interpolator/index.js");




const hsl = (col1, col2, f) => {
    return (0,_hsx_js__WEBPACK_IMPORTED_MODULE_1__["default"])(col1, col2, f, 'hsl');
};

// register interpolator
_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].hsl = hsl;

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (hsl);


/***/ }),

/***/ "./node_modules/chroma-js/src/interpolator/hsv.js":
/*!********************************************************!*\
  !*** ./node_modules/chroma-js/src/interpolator/hsv.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _io_hsv_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../io/hsv/index.js */ "./node_modules/chroma-js/src/io/hsv/index.js");
/* harmony import */ var _hsx_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hsx.js */ "./node_modules/chroma-js/src/interpolator/_hsx.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/chroma-js/src/interpolator/index.js");




const hsv = (col1, col2, f) => {
    return (0,_hsx_js__WEBPACK_IMPORTED_MODULE_1__["default"])(col1, col2, f, 'hsv');
};

// register interpolator
_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].hsv = hsv;

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (hsv);


/***/ }),

/***/ "./node_modules/chroma-js/src/interpolator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/chroma-js/src/interpolator/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});


/***/ }),

/***/ "./node_modules/chroma-js/src/interpolator/lab.js":
/*!********************************************************!*\
  !*** ./node_modules/chroma-js/src/interpolator/lab.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _io_lab_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../io/lab/index.js */ "./node_modules/chroma-js/src/io/lab/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/chroma-js/src/interpolator/index.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");




const lab = (col1, col2, f) => {
    const xyz0 = col1.lab();
    const xyz1 = col2.lab();
    return new _Color_js__WEBPACK_IMPORTED_MODULE_2__["default"](
        xyz0[0] + f * (xyz1[0] - xyz0[0]),
        xyz0[1] + f * (xyz1[1] - xyz0[1]),
        xyz0[2] + f * (xyz1[2] - xyz0[2]),
        'lab'
    );
};

// register interpolator
_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].lab = lab;

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (lab);


/***/ }),

/***/ "./node_modules/chroma-js/src/interpolator/lch.js":
/*!********************************************************!*\
  !*** ./node_modules/chroma-js/src/interpolator/lch.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _io_lch_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../io/lch/index.js */ "./node_modules/chroma-js/src/io/lch/index.js");
/* harmony import */ var _hsx_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hsx.js */ "./node_modules/chroma-js/src/interpolator/_hsx.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/chroma-js/src/interpolator/index.js");




const lch = (col1, col2, f) => {
    return (0,_hsx_js__WEBPACK_IMPORTED_MODULE_1__["default"])(col1, col2, f, 'lch');
};

// register interpolator
_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].lch = lch;
_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].hcl = lch;

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (lch);


/***/ }),

/***/ "./node_modules/chroma-js/src/interpolator/lrgb.js":
/*!*********************************************************!*\
  !*** ./node_modules/chroma-js/src/interpolator/lrgb.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/chroma-js/src/interpolator/index.js");

const { sqrt, pow } = Math;


const lrgb = (col1, col2, f) => {
    const [x1, y1, z1] = col1._rgb;
    const [x2, y2, z2] = col2._rgb;
    return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](
        sqrt(pow(x1, 2) * (1 - f) + pow(x2, 2) * f),
        sqrt(pow(y1, 2) * (1 - f) + pow(y2, 2) * f),
        sqrt(pow(z1, 2) * (1 - f) + pow(z2, 2) * f),
        'rgb'
    );
};

// register interpolator
_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].lrgb = lrgb;

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (lrgb);


/***/ }),

/***/ "./node_modules/chroma-js/src/interpolator/num.js":
/*!********************************************************!*\
  !*** ./node_modules/chroma-js/src/interpolator/num.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _io_num_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../io/num/index.js */ "./node_modules/chroma-js/src/io/num/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/chroma-js/src/interpolator/index.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");





const num = (col1, col2, f) => {
    const c1 = col1.num();
    const c2 = col2.num();
    return new _Color_js__WEBPACK_IMPORTED_MODULE_2__["default"](c1 + f * (c2 - c1), 'num');
};

// register interpolator
_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].num = num;

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (num);


/***/ }),

/***/ "./node_modules/chroma-js/src/interpolator/oklab.js":
/*!**********************************************************!*\
  !*** ./node_modules/chroma-js/src/interpolator/oklab.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _io_oklab_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../io/oklab/index.js */ "./node_modules/chroma-js/src/io/oklab/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/chroma-js/src/interpolator/index.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");




const oklab = (col1, col2, f) => {
    const xyz0 = col1.oklab();
    const xyz1 = col2.oklab();
    return new _Color_js__WEBPACK_IMPORTED_MODULE_2__["default"](
        xyz0[0] + f * (xyz1[0] - xyz0[0]),
        xyz0[1] + f * (xyz1[1] - xyz0[1]),
        xyz0[2] + f * (xyz1[2] - xyz0[2]),
        'oklab'
    );
};

// register interpolator
_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].oklab = oklab;

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (oklab);


/***/ }),

/***/ "./node_modules/chroma-js/src/interpolator/oklch.js":
/*!**********************************************************!*\
  !*** ./node_modules/chroma-js/src/interpolator/oklch.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _io_lch_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../io/lch/index.js */ "./node_modules/chroma-js/src/io/lch/index.js");
/* harmony import */ var _hsx_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hsx.js */ "./node_modules/chroma-js/src/interpolator/_hsx.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/chroma-js/src/interpolator/index.js");




const oklch = (col1, col2, f) => {
    return (0,_hsx_js__WEBPACK_IMPORTED_MODULE_1__["default"])(col1, col2, f, 'oklch');
};

// register interpolator
_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].oklch = oklch;

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (oklch);


/***/ }),

/***/ "./node_modules/chroma-js/src/interpolator/rgb.js":
/*!********************************************************!*\
  !*** ./node_modules/chroma-js/src/interpolator/rgb.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/chroma-js/src/interpolator/index.js");



const rgb = (col1, col2, f) => {
    const xyz0 = col1._rgb;
    const xyz1 = col2._rgb;
    return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](
        xyz0[0] + f * (xyz1[0] - xyz0[0]),
        xyz0[1] + f * (xyz1[1] - xyz0[1]),
        xyz0[2] + f * (xyz1[2] - xyz0[2]),
        'rgb'
    );
};

// register interpolator
_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].rgb = rgb;

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (rgb);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/cmyk/cmyk2rgb.js":
/*!********************************************************!*\
  !*** ./node_modules/chroma-js/src/io/cmyk/cmyk2rgb.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");


const cmyk2rgb = (...args) => {
    args = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'cmyk');
    const [c, m, y, k] = args;
    const alpha = args.length > 4 ? args[4] : 1;
    if (k === 1) return [0, 0, 0, alpha];
    return [
        c >= 1 ? 0 : 255 * (1 - c) * (1 - k), // r
        m >= 1 ? 0 : 255 * (1 - m) * (1 - k), // g
        y >= 1 ? 0 : 255 * (1 - y) * (1 - k), // b
        alpha
    ];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cmyk2rgb);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/cmyk/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/chroma-js/src/io/cmyk/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export cmyk */
/* harmony import */ var _chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chroma.js */ "./node_modules/chroma-js/src/chroma.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input.js */ "./node_modules/chroma-js/src/io/input.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/* harmony import */ var _cmyk2rgb_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cmyk2rgb.js */ "./node_modules/chroma-js/src/io/cmyk/cmyk2rgb.js");
/* harmony import */ var _rgb2cmyk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rgb2cmyk.js */ "./node_modules/chroma-js/src/io/cmyk/rgb2cmyk.js");







_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.cmyk = function () {
    return (0,_rgb2cmyk_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this._rgb);
};

const cmyk = (...args) => new _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"](...args, 'cmyk');
Object.assign(_chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"], { cmyk });

_input_js__WEBPACK_IMPORTED_MODULE_2__["default"].format.cmyk = _cmyk2rgb_js__WEBPACK_IMPORTED_MODULE_4__["default"];

_input_js__WEBPACK_IMPORTED_MODULE_2__["default"].autodetect.push({
    p: 2,
    test: (...args) => {
        args = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__.unpack)(args, 'cmyk');
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__.type)(args) === 'array' && args.length === 4) {
            return 'cmyk';
        }
    }
});




/***/ }),

/***/ "./node_modules/chroma-js/src/io/cmyk/rgb2cmyk.js":
/*!********************************************************!*\
  !*** ./node_modules/chroma-js/src/io/cmyk/rgb2cmyk.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");

const { max } = Math;

const rgb2cmyk = (...args) => {
    let [r, g, b] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'rgb');
    r = r / 255;
    g = g / 255;
    b = b / 255;
    const k = 1 - max(r, max(g, b));
    const f = k < 1 ? 1 / (1 - k) : 0;
    const c = (1 - r - k) * f;
    const m = (1 - g - k) * f;
    const y = (1 - b - k) * f;
    return [c, m, y, k];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rgb2cmyk);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/css/css2rgb.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/css/css2rgb.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hsl_hsl2rgb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hsl/hsl2rgb.js */ "./node_modules/chroma-js/src/io/hsl/hsl2rgb.js");
/* harmony import */ var _lab_lab2rgb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lab/lab2rgb.js */ "./node_modules/chroma-js/src/io/lab/lab2rgb.js");
/* harmony import */ var _lch_lch2rgb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lch/lch2rgb.js */ "./node_modules/chroma-js/src/io/lch/lch2rgb.js");
/* harmony import */ var _oklab_oklab2rgb_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../oklab/oklab2rgb.js */ "./node_modules/chroma-js/src/io/oklab/oklab2rgb.js");
/* harmony import */ var _oklch_oklch2rgb_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../oklch/oklch2rgb.js */ "./node_modules/chroma-js/src/io/oklch/oklch2rgb.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../input.js */ "./node_modules/chroma-js/src/io/input.js");
/* harmony import */ var _utils_limit_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/limit.js */ "./node_modules/chroma-js/src/utils/limit.js");
/* harmony import */ var _lab_lab_constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lab/lab-constants.js */ "./node_modules/chroma-js/src/io/lab/lab-constants.js");









const INT_OR_PCT = /((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source;
const FLOAT_OR_PCT = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source;
const PCT = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source;
const RE_S = /\s*/.source;
const SEP = /\s+/.source;
const COMMA = /\s*,\s*/.source;
const ANLGE = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source;
const ALPHA = /\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source;

// e.g. rgb(250 20 0), rgb(100% 50% 20%), rgb(100% 50% 20% / 0.5)
const RE_RGB = new RegExp(
    '^rgba?\\(' +
        RE_S +
        [INT_OR_PCT, INT_OR_PCT, INT_OR_PCT].join(SEP) +
        ALPHA +
        '\\)$'
);
const RE_RGB_LEGACY = new RegExp(
    '^rgb\\(' +
        RE_S +
        [INT_OR_PCT, INT_OR_PCT, INT_OR_PCT].join(COMMA) +
        RE_S +
        '\\)$'
);
const RE_RGBA_LEGACY = new RegExp(
    '^rgba\\(' +
        RE_S +
        [INT_OR_PCT, INT_OR_PCT, INT_OR_PCT, FLOAT_OR_PCT].join(COMMA) +
        RE_S +
        '\\)$'
);

const RE_HSL = new RegExp(
    '^hsla?\\(' + RE_S + [ANLGE, PCT, PCT].join(SEP) + ALPHA + '\\)$'
);
const RE_HSL_LEGACY = new RegExp(
    '^hsl?\\(' + RE_S + [ANLGE, PCT, PCT].join(COMMA) + RE_S + '\\)$'
);
const RE_HSLA_LEGACY =
    /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;

const RE_LAB = new RegExp(
    '^lab\\(' +
        RE_S +
        [FLOAT_OR_PCT, FLOAT_OR_PCT, FLOAT_OR_PCT].join(SEP) +
        ALPHA +
        '\\)$'
);
const RE_LCH = new RegExp(
    '^lch\\(' +
        RE_S +
        [FLOAT_OR_PCT, FLOAT_OR_PCT, ANLGE].join(SEP) +
        ALPHA +
        '\\)$'
);
const RE_OKLAB = new RegExp(
    '^oklab\\(' +
        RE_S +
        [FLOAT_OR_PCT, FLOAT_OR_PCT, FLOAT_OR_PCT].join(SEP) +
        ALPHA +
        '\\)$'
);
const RE_OKLCH = new RegExp(
    '^oklch\\(' +
        RE_S +
        [FLOAT_OR_PCT, FLOAT_OR_PCT, ANLGE].join(SEP) +
        ALPHA +
        '\\)$'
);

const { round } = Math;

const roundRGB = (rgb) => {
    return rgb.map((v, i) => (i <= 2 ? (0,_utils_limit_js__WEBPACK_IMPORTED_MODULE_6__["default"])(round(v), 0, 255) : v));
};

const percentToAbsolute = (pct, min = 0, max = 100, signed = false) => {
    if (typeof pct === 'string' && pct.endsWith('%')) {
        pct = parseFloat(pct.substring(0, pct.length - 1)) / 100;
        if (signed) {
            // signed percentages are in the range -100% to 100%
            pct = min + (pct + 1) * 0.5 * (max - min);
        } else {
            pct = min + pct * (max - min);
        }
    }
    return +pct;
};

const noneToValue = (v, noneValue) => {
    return v === 'none' ? noneValue : v;
};

const css2rgb = (css) => {
    css = css.toLowerCase().trim();

    if (css === 'transparent') {
        return [0, 0, 0, 0];
    }

    let m;

    if (_input_js__WEBPACK_IMPORTED_MODULE_5__["default"].format.named) {
        try {
            return _input_js__WEBPACK_IMPORTED_MODULE_5__["default"].format.named(css);
            // eslint-disable-next-line
        } catch (e) {}
    }

    // rgb(250 20 0) or rgb(250,20,0)
    if ((m = css.match(RE_RGB)) || (m = css.match(RE_RGB_LEGACY))) {
        let rgb = m.slice(1, 4);
        for (let i = 0; i < 3; i++) {
            rgb[i] = +percentToAbsolute(noneToValue(rgb[i], 0), 0, 255);
        }
        rgb = roundRGB(rgb);
        const alpha = m[4] !== undefined ? +percentToAbsolute(m[4], 0, 1) : 1;
        rgb[3] = alpha; // default alpha
        return rgb;
    }

    // rgba(250,20,0,0.4)
    if ((m = css.match(RE_RGBA_LEGACY))) {
        const rgb = m.slice(1, 5);
        for (let i = 0; i < 4; i++) {
            rgb[i] = +percentToAbsolute(rgb[i], 0, 255);
        }
        return rgb;
    }

    // hsl(0,100%,50%)
    if ((m = css.match(RE_HSL)) || (m = css.match(RE_HSL_LEGACY))) {
        const hsl = m.slice(1, 4);
        hsl[0] = +noneToValue(hsl[0].replace('deg', ''), 0);
        hsl[1] = +percentToAbsolute(noneToValue(hsl[1], 0), 0, 100) * 0.01;
        hsl[2] = +percentToAbsolute(noneToValue(hsl[2], 0), 0, 100) * 0.01;
        const rgb = roundRGB((0,_hsl_hsl2rgb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(hsl));
        const alpha = m[4] !== undefined ? +percentToAbsolute(m[4], 0, 1) : 1;
        rgb[3] = alpha;
        return rgb;
    }

    // hsla(0,100%,50%,0.5)
    if ((m = css.match(RE_HSLA_LEGACY))) {
        const hsl = m.slice(1, 4);
        hsl[1] *= 0.01;
        hsl[2] *= 0.01;
        const rgb = (0,_hsl_hsl2rgb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(hsl);
        for (let i = 0; i < 3; i++) {
            rgb[i] = round(rgb[i]);
        }
        rgb[3] = +m[4]; // default alpha = 1
        return rgb;
    }

    if ((m = css.match(RE_LAB))) {
        const lab = m.slice(1, 4);
        lab[0] = percentToAbsolute(noneToValue(lab[0], 0), 0, 100);
        lab[1] = percentToAbsolute(noneToValue(lab[1], 0), -125, 125, true);
        lab[2] = percentToAbsolute(noneToValue(lab[2], 0), -125, 125, true);
        // convert to D50 Lab whitepoint
        const wp = (0,_lab_lab_constants_js__WEBPACK_IMPORTED_MODULE_7__.getLabWhitePoint)();
        (0,_lab_lab_constants_js__WEBPACK_IMPORTED_MODULE_7__.setLabWhitePoint)('d50');
        const rgb = roundRGB((0,_lab_lab2rgb_js__WEBPACK_IMPORTED_MODULE_1__["default"])(lab));
        // convert back to original Lab whitepoint
        (0,_lab_lab_constants_js__WEBPACK_IMPORTED_MODULE_7__.setLabWhitePoint)(wp);
        const alpha = m[4] !== undefined ? +percentToAbsolute(m[4], 0, 1) : 1;
        rgb[3] = alpha;
        return rgb;
    }

    if ((m = css.match(RE_LCH))) {
        const lch = m.slice(1, 4);
        lch[0] = percentToAbsolute(lch[0], 0, 100);
        lch[1] = percentToAbsolute(noneToValue(lch[1], 0), 0, 150, false);
        lch[2] = +noneToValue(lch[2].replace('deg', ''), 0);
        // convert to D50 Lab whitepoint
        const wp = (0,_lab_lab_constants_js__WEBPACK_IMPORTED_MODULE_7__.getLabWhitePoint)();
        (0,_lab_lab_constants_js__WEBPACK_IMPORTED_MODULE_7__.setLabWhitePoint)('d50');
        const rgb = roundRGB((0,_lch_lch2rgb_js__WEBPACK_IMPORTED_MODULE_2__["default"])(lch));
        // convert back to original Lab whitepoint
        (0,_lab_lab_constants_js__WEBPACK_IMPORTED_MODULE_7__.setLabWhitePoint)(wp);
        const alpha = m[4] !== undefined ? +percentToAbsolute(m[4], 0, 1) : 1;
        rgb[3] = alpha;
        return rgb;
    }

    if ((m = css.match(RE_OKLAB))) {
        const oklab = m.slice(1, 4);
        oklab[0] = percentToAbsolute(noneToValue(oklab[0], 0), 0, 1);
        oklab[1] = percentToAbsolute(noneToValue(oklab[1], 0), -0.4, 0.4, true);
        oklab[2] = percentToAbsolute(noneToValue(oklab[2], 0), -0.4, 0.4, true);
        const rgb = roundRGB((0,_oklab_oklab2rgb_js__WEBPACK_IMPORTED_MODULE_3__["default"])(oklab));
        const alpha = m[4] !== undefined ? +percentToAbsolute(m[4], 0, 1) : 1;
        rgb[3] = alpha;
        return rgb;
    }

    if ((m = css.match(RE_OKLCH))) {
        const oklch = m.slice(1, 4);
        oklch[0] = percentToAbsolute(noneToValue(oklch[0], 0), 0, 1);
        oklch[1] = percentToAbsolute(noneToValue(oklch[1], 0), 0, 0.4, false);
        oklch[2] = +noneToValue(oklch[2].replace('deg', ''), 0);
        const rgb = roundRGB((0,_oklch_oklch2rgb_js__WEBPACK_IMPORTED_MODULE_4__["default"])(oklch));
        const alpha = m[4] !== undefined ? +percentToAbsolute(m[4], 0, 1) : 1;
        rgb[3] = alpha;
        return rgb;
    }
};

css2rgb.test = (s) => {
    return (
        // modern
        RE_RGB.test(s) ||
        RE_HSL.test(s) ||
        RE_LAB.test(s) ||
        RE_LCH.test(s) ||
        RE_OKLAB.test(s) ||
        RE_OKLCH.test(s) ||
        // legacy
        RE_RGB_LEGACY.test(s) ||
        RE_RGBA_LEGACY.test(s) ||
        RE_HSL_LEGACY.test(s) ||
        RE_HSLA_LEGACY.test(s) ||
        s === 'transparent'
    );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (css2rgb);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/css/hsl2css.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/css/hsl2css.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");


/*
 * supported arguments:
 * - hsl2css(h,s,l)
 * - hsl2css(h,s,l,a)
 * - hsl2css([h,s,l], mode)
 * - hsl2css([h,s,l,a], mode)
 * - hsl2css({h,s,l,a}, mode)
 */
const hsl2css = (...args) => {
    const hsla = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'hsla');
    let mode = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.last)(args) || 'lsa';
    hsla[0] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.rnd2)(hsla[0] || 0) + 'deg';
    hsla[1] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.rnd2)(hsla[1] * 100) + '%';
    hsla[2] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.rnd2)(hsla[2] * 100) + '%';
    if (mode === 'hsla' || (hsla.length > 3 && hsla[3] < 1)) {
        hsla[3] = '/ ' + (hsla.length > 3 ? hsla[3] : 1);
        mode = 'hsla';
    } else {
        hsla.length = 3;
    }
    return `${mode.substr(0, 3)}(${hsla.join(' ')})`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hsl2css);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/css/index.js":
/*!****************************************************!*\
  !*** ./node_modules/chroma-js/src/io/css/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export css */
/* harmony import */ var _chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chroma.js */ "./node_modules/chroma-js/src/chroma.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input.js */ "./node_modules/chroma-js/src/io/input.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/* harmony import */ var _rgb2css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rgb2css.js */ "./node_modules/chroma-js/src/io/css/rgb2css.js");
/* harmony import */ var _css2rgb_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css2rgb.js */ "./node_modules/chroma-js/src/io/css/css2rgb.js");








_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.css = function (mode) {
    return (0,_rgb2css_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this._rgb, mode);
};

const css = (...args) => new _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"](...args, 'css');
_chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"].css = css;

_input_js__WEBPACK_IMPORTED_MODULE_2__["default"].format.css = _css2rgb_js__WEBPACK_IMPORTED_MODULE_5__["default"];

_input_js__WEBPACK_IMPORTED_MODULE_2__["default"].autodetect.push({
    p: 5,
    test: (h, ...rest) => {
        if (!rest.length && (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__.type)(h) === 'string' && _css2rgb_js__WEBPACK_IMPORTED_MODULE_5__["default"].test(h)) {
            return 'css';
        }
    }
});




/***/ }),

/***/ "./node_modules/chroma-js/src/io/css/lab2css.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/css/lab2css.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");


/*
 * supported arguments:
 * - lab2css(l,a,b)
 * - lab2css(l,a,b,alpha)
 * - lab2css([l,a,b], mode)
 * - lab2css([l,a,b,alpha], mode)
 */
const lab2css = (...args) => {
    const laba = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'lab');
    let mode = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.last)(args) || 'lab';
    laba[0] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.rnd2)(laba[0]) + '%';
    laba[1] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.rnd2)(laba[1]);
    laba[2] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.rnd2)(laba[2]);
    if (mode === 'laba' || (laba.length > 3 && laba[3] < 1)) {
        laba[3] = '/ ' + (laba.length > 3 ? laba[3] : 1);
    } else {
        laba.length = 3;
    }
    return `lab(${laba.join(' ')})`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lab2css);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/css/lch2css.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/css/lch2css.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");


/*
 * supported arguments:
 * - lab2css(l,a,b)
 * - lab2css(l,a,b,alpha)
 * - lab2css([l,a,b], mode)
 * - lab2css([l,a,b,alpha], mode)
 */
const lch2css = (...args) => {
    const lcha = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'lch');
    let mode = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.last)(args) || 'lab';
    lcha[0] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.rnd2)(lcha[0]) + '%';
    lcha[1] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.rnd2)(lcha[1]);
    lcha[2] = isNaN(lcha[2]) ? 'none' : (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.rnd2)(lcha[2]) + 'deg'; // add deg unit to hue
    if (mode === 'lcha' || (lcha.length > 3 && lcha[3] < 1)) {
        lcha[3] = '/ ' + (lcha.length > 3 ? lcha[3] : 1);
    } else {
        lcha.length = 3;
    }
    return `lch(${lcha.join(' ')})`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lch2css);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/css/oklab2css.js":
/*!********************************************************!*\
  !*** ./node_modules/chroma-js/src/io/css/oklab2css.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");


const oklab2css = (...args) => {
    const laba = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'lab');
    laba[0] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.rnd2)(laba[0] * 100) + '%';
    laba[1] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.rnd3)(laba[1]);
    laba[2] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.rnd3)(laba[2]);
    if (laba.length > 3 && laba[3] < 1) {
        laba[3] = '/ ' + (laba.length > 3 ? laba[3] : 1);
    } else {
        laba.length = 3;
    }
    return `oklab(${laba.join(' ')})`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (oklab2css);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/css/oklch2css.js":
/*!********************************************************!*\
  !*** ./node_modules/chroma-js/src/io/css/oklch2css.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");


const oklch2css = (...args) => {
    const lcha = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'lch');
    lcha[0] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.rnd2)(lcha[0] * 100) + '%';
    lcha[1] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.rnd3)(lcha[1]);
    lcha[2] = isNaN(lcha[2]) ? 'none' : (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.rnd2)(lcha[2]) + 'deg'; // add deg unit to hue
    if (lcha.length > 3 && lcha[3] < 1) {
        lcha[3] = '/ ' + (lcha.length > 3 ? lcha[3] : 1);
    } else {
        lcha.length = 3;
    }
    return `oklch(${lcha.join(' ')})`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (oklch2css);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/css/rgb2css.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/css/rgb2css.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/* harmony import */ var _hsl2css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hsl2css.js */ "./node_modules/chroma-js/src/io/css/hsl2css.js");
/* harmony import */ var _hsl_rgb2hsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hsl/rgb2hsl.js */ "./node_modules/chroma-js/src/io/hsl/rgb2hsl.js");
/* harmony import */ var _lab2css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lab2css.js */ "./node_modules/chroma-js/src/io/css/lab2css.js");
/* harmony import */ var _lab_rgb2lab_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lab/rgb2lab.js */ "./node_modules/chroma-js/src/io/lab/rgb2lab.js");
/* harmony import */ var _lch2css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lch2css.js */ "./node_modules/chroma-js/src/io/css/lch2css.js");
/* harmony import */ var _lch_rgb2lch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lch/rgb2lch.js */ "./node_modules/chroma-js/src/io/lch/rgb2lch.js");
/* harmony import */ var _oklab_rgb2oklab_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../oklab/rgb2oklab.js */ "./node_modules/chroma-js/src/io/oklab/rgb2oklab.js");
/* harmony import */ var _oklab2css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./oklab2css.js */ "./node_modules/chroma-js/src/io/css/oklab2css.js");
/* harmony import */ var _oklch_rgb2oklch_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../oklch/rgb2oklch.js */ "./node_modules/chroma-js/src/io/oklch/rgb2oklch.js");
/* harmony import */ var _oklch2css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./oklch2css.js */ "./node_modules/chroma-js/src/io/css/oklch2css.js");
/* harmony import */ var _lab_lab_constants_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lab/lab-constants.js */ "./node_modules/chroma-js/src/io/lab/lab-constants.js");












const { round } = Math;

/*
 * supported arguments:
 * - rgb2css(r,g,b)
 * - rgb2css(r,g,b,a)
 * - rgb2css([r,g,b], mode)
 * - rgb2css([r,g,b,a], mode)
 * - rgb2css({r,g,b,a}, mode)
 */
const rgb2css = (...args) => {
    const rgba = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'rgba');
    let mode = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.last)(args) || 'rgb';
    if (mode.substr(0, 3) === 'hsl') {
        return (0,_hsl2css_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_hsl_rgb2hsl_js__WEBPACK_IMPORTED_MODULE_2__["default"])(rgba), mode);
    }
    if (mode.substr(0, 3) === 'lab') {
        // change to D50 lab whitepoint since this is what W3C is using for CSS Lab colors
        const prevWhitePoint = (0,_lab_lab_constants_js__WEBPACK_IMPORTED_MODULE_11__.getLabWhitePoint)();
        (0,_lab_lab_constants_js__WEBPACK_IMPORTED_MODULE_11__.setLabWhitePoint)('d50');
        const cssColor = (0,_lab2css_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_lab_rgb2lab_js__WEBPACK_IMPORTED_MODULE_4__["default"])(rgba), mode);
        (0,_lab_lab_constants_js__WEBPACK_IMPORTED_MODULE_11__.setLabWhitePoint)(prevWhitePoint);
        return cssColor;
    }
    if (mode.substr(0, 3) === 'lch') {
        // change to D50 lab whitepoint since this is what W3C is using for CSS Lab colors
        const prevWhitePoint = (0,_lab_lab_constants_js__WEBPACK_IMPORTED_MODULE_11__.getLabWhitePoint)();
        (0,_lab_lab_constants_js__WEBPACK_IMPORTED_MODULE_11__.setLabWhitePoint)('d50');
        const cssColor = (0,_lch2css_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_lch_rgb2lch_js__WEBPACK_IMPORTED_MODULE_6__["default"])(rgba), mode);
        (0,_lab_lab_constants_js__WEBPACK_IMPORTED_MODULE_11__.setLabWhitePoint)(prevWhitePoint);
        return cssColor;
    }
    if (mode.substr(0, 5) === 'oklab') {
        return (0,_oklab2css_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_oklab_rgb2oklab_js__WEBPACK_IMPORTED_MODULE_7__["default"])(rgba));
    }
    if (mode.substr(0, 5) === 'oklch') {
        return (0,_oklch2css_js__WEBPACK_IMPORTED_MODULE_10__["default"])((0,_oklch_rgb2oklch_js__WEBPACK_IMPORTED_MODULE_9__["default"])(rgba));
    }
    rgba[0] = round(rgba[0]);
    rgba[1] = round(rgba[1]);
    rgba[2] = round(rgba[2]);
    if (mode === 'rgba' || (rgba.length > 3 && rgba[3] < 1)) {
        rgba[3] = '/ ' + (rgba.length > 3 ? rgba[3] : 1);
        mode = 'rgba';
    }
    return `${mode.substr(0, 3)}(${rgba.slice(0, mode === 'rgb' ? 3 : 4).join(' ')})`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rgb2css);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/gl/index.js":
/*!***************************************************!*\
  !*** ./node_modules/chroma-js/src/io/gl/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export gl */
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _chroma_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chroma.js */ "./node_modules/chroma-js/src/chroma.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input.js */ "./node_modules/chroma-js/src/io/input.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");





_input_js__WEBPACK_IMPORTED_MODULE_2__["default"].format.gl = (...args) => {
    const rgb = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__.unpack)(args, 'rgba');
    rgb[0] *= 255;
    rgb[1] *= 255;
    rgb[2] *= 255;
    return rgb;
};

const gl = (...args) => new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](...args, 'gl');
_chroma_js__WEBPACK_IMPORTED_MODULE_1__["default"].gl = gl;

_Color_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.gl = function () {
    const rgb = this._rgb;
    return [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, rgb[3]];
};




/***/ }),

/***/ "./node_modules/chroma-js/src/io/hcg/hcg2rgb.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/hcg/hcg2rgb.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");

const { floor } = Math;

/*
 * this is basically just HSV with some minor tweaks
 *
 * hue.. [0..360]
 * chroma .. [0..1]
 * grayness .. [0..1]
 */

const hcg2rgb = (...args) => {
    args = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'hcg');
    let [h, c, _g] = args;
    let r, g, b;
    _g = _g * 255;
    const _c = c * 255;
    if (c === 0) {
        r = g = b = _g;
    } else {
        if (h === 360) h = 0;
        if (h > 360) h -= 360;
        if (h < 0) h += 360;
        h /= 60;
        const i = floor(h);
        const f = h - i;
        const p = _g * (1 - c);
        const q = p + _c * (1 - f);
        const t = p + _c * f;
        const v = p + _c;
        switch (i) {
            case 0:
                [r, g, b] = [v, t, p];
                break;
            case 1:
                [r, g, b] = [q, v, p];
                break;
            case 2:
                [r, g, b] = [p, v, t];
                break;
            case 3:
                [r, g, b] = [p, q, v];
                break;
            case 4:
                [r, g, b] = [t, p, v];
                break;
            case 5:
                [r, g, b] = [v, p, q];
                break;
        }
    }
    return [r, g, b, args.length > 3 ? args[3] : 1];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hcg2rgb);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/hcg/index.js":
/*!****************************************************!*\
  !*** ./node_modules/chroma-js/src/io/hcg/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export hcg */
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/* harmony import */ var _chroma_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chroma.js */ "./node_modules/chroma-js/src/chroma.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input.js */ "./node_modules/chroma-js/src/io/input.js");
/* harmony import */ var _hcg2rgb_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hcg2rgb.js */ "./node_modules/chroma-js/src/io/hcg/hcg2rgb.js");
/* harmony import */ var _rgb2hcg_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rgb2hcg.js */ "./node_modules/chroma-js/src/io/hcg/rgb2hcg.js");







_Color_js__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.hcg = function () {
    return (0,_rgb2hcg_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this._rgb);
};

const hcg = (...args) => new _Color_js__WEBPACK_IMPORTED_MODULE_2__["default"](...args, 'hcg');
_chroma_js__WEBPACK_IMPORTED_MODULE_1__["default"].hcg = hcg;

_input_js__WEBPACK_IMPORTED_MODULE_3__["default"].format.hcg = _hcg2rgb_js__WEBPACK_IMPORTED_MODULE_4__["default"];

_input_js__WEBPACK_IMPORTED_MODULE_3__["default"].autodetect.push({
    p: 1,
    test: (...args) => {
        args = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'hcg');
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.type)(args) === 'array' && args.length === 3) {
            return 'hcg';
        }
    }
});




/***/ }),

/***/ "./node_modules/chroma-js/src/io/hcg/rgb2hcg.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/hcg/rgb2hcg.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");


const rgb2hcg = (...args) => {
    const [r, g, b] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'rgb');
    const minRgb = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.min)(r, g, b);
    const maxRgb = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.max)(r, g, b);
    const delta = maxRgb - minRgb;
    const c = (delta * 100) / 255;
    const _g = (minRgb / (255 - delta)) * 100;
    let h;
    if (delta === 0) {
        h = Number.NaN;
    } else {
        if (r === maxRgb) h = (g - b) / delta;
        if (g === maxRgb) h = 2 + (b - r) / delta;
        if (b === maxRgb) h = 4 + (r - g) / delta;
        h *= 60;
        if (h < 0) h += 360;
    }
    return [h, c, _g];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rgb2hcg);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/hex/hex2rgb.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/hex/hex2rgb.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;

const hex2rgb = (hex) => {
    if (hex.match(RE_HEX)) {
        // remove optional leading #
        if (hex.length === 4 || hex.length === 7) {
            hex = hex.substr(1);
        }
        // expand short-notation to full six-digit
        if (hex.length === 3) {
            hex = hex.split('');
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        const u = parseInt(hex, 16);
        const r = u >> 16;
        const g = (u >> 8) & 0xff;
        const b = u & 0xff;
        return [r, g, b, 1];
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
            hex =
                hex[0] +
                hex[0] +
                hex[1] +
                hex[1] +
                hex[2] +
                hex[2] +
                hex[3] +
                hex[3];
        }
        const u = parseInt(hex, 16);
        const r = (u >> 24) & 0xff;
        const g = (u >> 16) & 0xff;
        const b = (u >> 8) & 0xff;
        const a = Math.round(((u & 0xff) / 0xff) * 100) / 100;
        return [r, g, b, a];
    }

    // we used to check for css colors here
    // if _input.css? and rgb = _input.css hex
    //     return rgb

    throw new Error(`unknown hex color: ${hex}`);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hex2rgb);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/hex/index.js":
/*!****************************************************!*\
  !*** ./node_modules/chroma-js/src/io/hex/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export hex */
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _chroma_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chroma.js */ "./node_modules/chroma-js/src/chroma.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input.js */ "./node_modules/chroma-js/src/io/input.js");
/* harmony import */ var _hex2rgb_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hex2rgb.js */ "./node_modules/chroma-js/src/io/hex/hex2rgb.js");
/* harmony import */ var _rgb2hex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rgb2hex.js */ "./node_modules/chroma-js/src/io/hex/rgb2hex.js");







_Color_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hex = function (mode) {
    return (0,_rgb2hex_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this._rgb, mode);
};

const hex = (...args) => new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](...args, 'hex');
_chroma_js__WEBPACK_IMPORTED_MODULE_1__["default"].hex = hex;

_input_js__WEBPACK_IMPORTED_MODULE_3__["default"].format.hex = _hex2rgb_js__WEBPACK_IMPORTED_MODULE_4__["default"];
_input_js__WEBPACK_IMPORTED_MODULE_3__["default"].autodetect.push({
    p: 4,
    test: (h, ...rest) => {
        if (
            !rest.length &&
            (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.type)(h) === 'string' &&
            [3, 4, 5, 6, 7, 8, 9].indexOf(h.length) >= 0
        ) {
            return 'hex';
        }
    }
});




/***/ }),

/***/ "./node_modules/chroma-js/src/io/hex/rgb2hex.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/hex/rgb2hex.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");

const { round } = Math;

const rgb2hex = (...args) => {
    let [r, g, b, a] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'rgba');
    let mode = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.last)(args) || 'auto';
    if (a === undefined) a = 1;
    if (mode === 'auto') {
        mode = a < 1 ? 'rgba' : 'rgb';
    }
    r = round(r);
    g = round(g);
    b = round(b);
    const u = (r << 16) | (g << 8) | b;
    let str = '000000' + u.toString(16); //#.toUpperCase();
    str = str.substr(str.length - 6);
    let hxa = '0' + round(a * 255).toString(16);
    hxa = hxa.substr(hxa.length - 2);
    switch (mode.toLowerCase()) {
        case 'rgba':
            return `#${str}${hxa}`;
        case 'argb':
            return `#${hxa}${str}`;
        default:
            return `#${str}`;
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rgb2hex);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/hsi/hsi2rgb.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/hsi/hsi2rgb.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");

const { cos } = Math;

/*
 * hue [0..360]
 * saturation [0..1]
 * intensity [0..1]
 */
const hsi2rgb = (...args) => {
    /*
    borrowed from here:
    http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
    */
    args = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'hsi');
    let [h, s, i] = args;
    let r, g, b;

    if (isNaN(h)) h = 0;
    if (isNaN(s)) s = 0;
    // normalize hue
    if (h > 360) h -= 360;
    if (h < 0) h += 360;
    h /= 360;
    if (h < 1 / 3) {
        b = (1 - s) / 3;
        r = (1 + (s * cos(_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.TWOPI * h)) / cos(_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.PITHIRD - _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.TWOPI * h)) / 3;
        g = 1 - (b + r);
    } else if (h < 2 / 3) {
        h -= 1 / 3;
        r = (1 - s) / 3;
        g = (1 + (s * cos(_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.TWOPI * h)) / cos(_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.PITHIRD - _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.TWOPI * h)) / 3;
        b = 1 - (r + g);
    } else {
        h -= 2 / 3;
        g = (1 - s) / 3;
        b = (1 + (s * cos(_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.TWOPI * h)) / cos(_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.PITHIRD - _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.TWOPI * h)) / 3;
        r = 1 - (g + b);
    }
    r = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.limit)(i * r * 3);
    g = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.limit)(i * g * 3);
    b = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.limit)(i * b * 3);
    return [r * 255, g * 255, b * 255, args.length > 3 ? args[3] : 1];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hsi2rgb);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/hsi/index.js":
/*!****************************************************!*\
  !*** ./node_modules/chroma-js/src/io/hsi/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export hsi */
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/* harmony import */ var _chroma_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chroma.js */ "./node_modules/chroma-js/src/chroma.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input.js */ "./node_modules/chroma-js/src/io/input.js");
/* harmony import */ var _hsi2rgb_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hsi2rgb.js */ "./node_modules/chroma-js/src/io/hsi/hsi2rgb.js");
/* harmony import */ var _rgb2hsi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rgb2hsi.js */ "./node_modules/chroma-js/src/io/hsi/rgb2hsi.js");







_Color_js__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.hsi = function () {
    return (0,_rgb2hsi_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this._rgb);
};

const hsi = (...args) => new _Color_js__WEBPACK_IMPORTED_MODULE_2__["default"](...args, 'hsi');
_chroma_js__WEBPACK_IMPORTED_MODULE_1__["default"].hsi = hsi;

_input_js__WEBPACK_IMPORTED_MODULE_3__["default"].format.hsi = _hsi2rgb_js__WEBPACK_IMPORTED_MODULE_4__["default"];

_input_js__WEBPACK_IMPORTED_MODULE_3__["default"].autodetect.push({
    p: 2,
    test: (...args) => {
        args = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'hsi');
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.type)(args) === 'array' && args.length === 3) {
            return 'hsi';
        }
    }
});




/***/ }),

/***/ "./node_modules/chroma-js/src/io/hsi/rgb2hsi.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/hsi/rgb2hsi.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");

const { min, sqrt, acos } = Math;

const rgb2hsi = (...args) => {
    /*
    borrowed from here:
    http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/rgb2hsi.cpp
    */
    let [r, g, b] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'rgb');
    r /= 255;
    g /= 255;
    b /= 255;
    let h;
    const min_ = min(r, g, b);
    const i = (r + g + b) / 3;
    const s = i > 0 ? 1 - min_ / i : 0;
    if (s === 0) {
        h = NaN;
    } else {
        h = (r - g + (r - b)) / 2;
        h /= sqrt((r - g) * (r - g) + (r - b) * (g - b));
        h = acos(h);
        if (b > g) {
            h = _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.TWOPI - h;
        }
        h /= _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.TWOPI;
    }
    return [h * 360, s, i];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rgb2hsi);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/hsl/hsl2rgb.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/hsl/hsl2rgb.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");


const hsl2rgb = (...args) => {
    args = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'hsl');
    const [h, s, l] = args;
    let r, g, b;
    if (s === 0) {
        r = g = b = l * 255;
    } else {
        const t3 = [0, 0, 0];
        const c = [0, 0, 0];
        const t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const t1 = 2 * l - t2;
        const h_ = h / 360;
        t3[0] = h_ + 1 / 3;
        t3[1] = h_;
        t3[2] = h_ - 1 / 3;
        for (let i = 0; i < 3; i++) {
            if (t3[i] < 0) t3[i] += 1;
            if (t3[i] > 1) t3[i] -= 1;
            if (6 * t3[i] < 1) c[i] = t1 + (t2 - t1) * 6 * t3[i];
            else if (2 * t3[i] < 1) c[i] = t2;
            else if (3 * t3[i] < 2) c[i] = t1 + (t2 - t1) * (2 / 3 - t3[i]) * 6;
            else c[i] = t1;
        }
        [r, g, b] = [c[0] * 255, c[1] * 255, c[2] * 255];
    }
    if (args.length > 3) {
        // keep alpha channel
        return [r, g, b, args[3]];
    }
    return [r, g, b, 1];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hsl2rgb);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/hsl/index.js":
/*!****************************************************!*\
  !*** ./node_modules/chroma-js/src/io/hsl/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export hsl */
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/* harmony import */ var _chroma_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chroma.js */ "./node_modules/chroma-js/src/chroma.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input.js */ "./node_modules/chroma-js/src/io/input.js");
/* harmony import */ var _hsl2rgb_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hsl2rgb.js */ "./node_modules/chroma-js/src/io/hsl/hsl2rgb.js");
/* harmony import */ var _rgb2hsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rgb2hsl.js */ "./node_modules/chroma-js/src/io/hsl/rgb2hsl.js");







_Color_js__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.hsl = function () {
    return (0,_rgb2hsl_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this._rgb);
};

const hsl = (...args) => new _Color_js__WEBPACK_IMPORTED_MODULE_2__["default"](...args, 'hsl');
_chroma_js__WEBPACK_IMPORTED_MODULE_1__["default"].hsl = hsl;

_input_js__WEBPACK_IMPORTED_MODULE_3__["default"].format.hsl = _hsl2rgb_js__WEBPACK_IMPORTED_MODULE_4__["default"];

_input_js__WEBPACK_IMPORTED_MODULE_3__["default"].autodetect.push({
    p: 2,
    test: (...args) => {
        args = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'hsl');
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.type)(args) === 'array' && args.length === 3) {
            return 'hsl';
        }
    }
});




/***/ }),

/***/ "./node_modules/chroma-js/src/io/hsl/rgb2hsl.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/hsl/rgb2hsl.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");


/*
 * supported arguments:
 * - rgb2hsl(r,g,b)
 * - rgb2hsl(r,g,b,a)
 * - rgb2hsl([r,g,b])
 * - rgb2hsl([r,g,b,a])
 * - rgb2hsl({r,g,b,a})
 */
const rgb2hsl = (...args) => {
    args = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'rgba');
    let [r, g, b] = args;

    r /= 255;
    g /= 255;
    b /= 255;

    const minRgb = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.min)(r, g, b);
    const maxRgb = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.max)(r, g, b);

    const l = (maxRgb + minRgb) / 2;
    let s, h;

    if (maxRgb === minRgb) {
        s = 0;
        h = Number.NaN;
    } else {
        s =
            l < 0.5
                ? (maxRgb - minRgb) / (maxRgb + minRgb)
                : (maxRgb - minRgb) / (2 - maxRgb - minRgb);
    }

    if (r == maxRgb) h = (g - b) / (maxRgb - minRgb);
    else if (g == maxRgb) h = 2 + (b - r) / (maxRgb - minRgb);
    else if (b == maxRgb) h = 4 + (r - g) / (maxRgb - minRgb);

    h *= 60;
    if (h < 0) h += 360;
    if (args.length > 3 && args[3] !== undefined) return [h, s, l, args[3]];
    return [h, s, l];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rgb2hsl);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/hsv/hsv2rgb.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/hsv/hsv2rgb.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");

const { floor } = Math;

const hsv2rgb = (...args) => {
    args = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'hsv');
    let [h, s, v] = args;
    let r, g, b;
    v *= 255;
    if (s === 0) {
        r = g = b = v;
    } else {
        if (h === 360) h = 0;
        if (h > 360) h -= 360;
        if (h < 0) h += 360;
        h /= 60;

        const i = floor(h);
        const f = h - i;
        const p = v * (1 - s);
        const q = v * (1 - s * f);
        const t = v * (1 - s * (1 - f));

        switch (i) {
            case 0:
                [r, g, b] = [v, t, p];
                break;
            case 1:
                [r, g, b] = [q, v, p];
                break;
            case 2:
                [r, g, b] = [p, v, t];
                break;
            case 3:
                [r, g, b] = [p, q, v];
                break;
            case 4:
                [r, g, b] = [t, p, v];
                break;
            case 5:
                [r, g, b] = [v, p, q];
                break;
        }
    }
    return [r, g, b, args.length > 3 ? args[3] : 1];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hsv2rgb);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/hsv/index.js":
/*!****************************************************!*\
  !*** ./node_modules/chroma-js/src/io/hsv/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export hsv */
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/* harmony import */ var _chroma_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chroma.js */ "./node_modules/chroma-js/src/chroma.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input.js */ "./node_modules/chroma-js/src/io/input.js");
/* harmony import */ var _hsv2rgb_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hsv2rgb.js */ "./node_modules/chroma-js/src/io/hsv/hsv2rgb.js");
/* harmony import */ var _rgb2hsv_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rgb2hsv.js */ "./node_modules/chroma-js/src/io/hsv/rgb2hsv.js");







_Color_js__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.hsv = function () {
    return (0,_rgb2hsv_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this._rgb);
};

const hsv = (...args) => new _Color_js__WEBPACK_IMPORTED_MODULE_2__["default"](...args, 'hsv');
_chroma_js__WEBPACK_IMPORTED_MODULE_1__["default"].hsv = hsv;

_input_js__WEBPACK_IMPORTED_MODULE_3__["default"].format.hsv = _hsv2rgb_js__WEBPACK_IMPORTED_MODULE_4__["default"];

_input_js__WEBPACK_IMPORTED_MODULE_3__["default"].autodetect.push({
    p: 2,
    test: (...args) => {
        args = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'hsv');
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.type)(args) === 'array' && args.length === 3) {
            return 'hsv';
        }
    }
});




/***/ }),

/***/ "./node_modules/chroma-js/src/io/hsv/rgb2hsv.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/hsv/rgb2hsv.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");

const { min, max } = Math;

/*
 * supported arguments:
 * - rgb2hsv(r,g,b)
 * - rgb2hsv([r,g,b])
 * - rgb2hsv({r,g,b})
 */
const rgb2hsl = (...args) => {
    args = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'rgb');
    let [r, g, b] = args;
    const min_ = min(r, g, b);
    const max_ = max(r, g, b);
    const delta = max_ - min_;
    let h, s, v;
    v = max_ / 255.0;
    if (max_ === 0) {
        h = Number.NaN;
        s = 0;
    } else {
        s = delta / max_;
        if (r === max_) h = (g - b) / delta;
        if (g === max_) h = 2 + (b - r) / delta;
        if (b === max_) h = 4 + (r - g) / delta;
        h *= 60;
        if (h < 0) h += 360;
    }
    return [h, s, v];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rgb2hsl);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/input.js":
/*!************************************************!*\
  !*** ./node_modules/chroma-js/src/io/input.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    format: {},
    autodetect: []
});


/***/ }),

/***/ "./node_modules/chroma-js/src/io/lab/index.js":
/*!****************************************************!*\
  !*** ./node_modules/chroma-js/src/io/lab/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export lab */
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/* harmony import */ var _chroma_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chroma.js */ "./node_modules/chroma-js/src/chroma.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input.js */ "./node_modules/chroma-js/src/io/input.js");
/* harmony import */ var _lab2rgb_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lab2rgb.js */ "./node_modules/chroma-js/src/io/lab/lab2rgb.js");
/* harmony import */ var _rgb2lab_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rgb2lab.js */ "./node_modules/chroma-js/src/io/lab/rgb2lab.js");
/* harmony import */ var _lab_constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lab-constants.js */ "./node_modules/chroma-js/src/io/lab/lab-constants.js");








_Color_js__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.lab = function () {
    return (0,_rgb2lab_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this._rgb);
};

const lab = (...args) => new _Color_js__WEBPACK_IMPORTED_MODULE_2__["default"](...args, 'lab');
Object.assign(_chroma_js__WEBPACK_IMPORTED_MODULE_1__["default"], { lab, getLabWhitePoint: _lab_constants_js__WEBPACK_IMPORTED_MODULE_6__.getLabWhitePoint, setLabWhitePoint: _lab_constants_js__WEBPACK_IMPORTED_MODULE_6__.setLabWhitePoint });

_input_js__WEBPACK_IMPORTED_MODULE_3__["default"].format.lab = _lab2rgb_js__WEBPACK_IMPORTED_MODULE_4__["default"];

_input_js__WEBPACK_IMPORTED_MODULE_3__["default"].autodetect.push({
    p: 2,
    test: (...args) => {
        args = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'lab');
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.type)(args) === 'array' && args.length === 3) {
            return 'lab';
        }
    }
});




/***/ }),

/***/ "./node_modules/chroma-js/src/io/lab/lab-constants.js":
/*!************************************************************!*\
  !*** ./node_modules/chroma-js/src/io/lab/lab-constants.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getLabWhitePoint: () => (/* binding */ getLabWhitePoint),
/* harmony export */   setLabWhitePoint: () => (/* binding */ setLabWhitePoint)
/* harmony export */ });
const labConstants = {
    // Corresponds roughly to RGB brighter/darker
    Kn: 18,

    // D65 standard referent
    labWhitePoint: 'd65',
    Xn: 0.95047,
    Yn: 1,
    Zn: 1.08883,

    t0: 0.137931034, // 4 / 29
    t1: 0.206896552, // 6 / 29
    t2: 0.12841855, // 3 * t1 * t1
    t3: 0.008856452, // t1 * t1 * t1,

    kE: 216.0 / 24389.0,
    kKE: 8.0,
    kK: 24389.0 / 27.0,

    RefWhiteRGB: {
        // sRGB
        X: 0.95047,
        Y: 1,
        Z: 1.08883
    },

    MtxRGB2XYZ: {
        m00: 0.4124564390896922,
        m01: 0.21267285140562253,
        m02: 0.0193338955823293,
        m10: 0.357576077643909,
        m11: 0.715152155287818,
        m12: 0.11919202588130297,
        m20: 0.18043748326639894,
        m21: 0.07217499330655958,
        m22: 0.9503040785363679
    },

    MtxXYZ2RGB: {
        m00: 3.2404541621141045,
        m01: -0.9692660305051868,
        m02: 0.055643430959114726,
        m10: -1.5371385127977166,
        m11: 1.8760108454466942,
        m12: -0.2040259135167538,
        m20: -0.498531409556016,
        m21: 0.041556017530349834,
        m22: 1.0572251882231791
    },

    // used in rgb2xyz
    As: 0.9414285350000001,
    Bs: 1.040417467,
    Cs: 1.089532651,

    MtxAdaptMa: {
        m00: 0.8951,
        m01: -0.7502,
        m02: 0.0389,
        m10: 0.2664,
        m11: 1.7135,
        m12: -0.0685,
        m20: -0.1614,
        m21: 0.0367,
        m22: 1.0296
    },

    MtxAdaptMaI: {
        m00: 0.9869929054667123,
        m01: 0.43230526972339456,
        m02: -0.008528664575177328,
        m10: -0.14705425642099013,
        m11: 0.5183602715367776,
        m12: 0.04004282165408487,
        m20: 0.15996265166373125,
        m21: 0.0492912282128556,
        m22: 0.9684866957875502
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (labConstants);

// taken from https://de.mathworks.com/help/images/ref/whitepoint.html
const ILLUMINANTS = new Map([
    // ASTM E308-01
    ['a', [1.0985, 0.35585]],
    // Wyszecki & Stiles, p. 769
    ['b', [1.0985, 0.35585]],
    // C ASTM E308-01
    ['c', [0.98074, 1.18232]],
    // D50 (ASTM E308-01)
    ['d50', [0.96422, 0.82521]],
    // D55 (ASTM E308-01)
    ['d55', [0.95682, 0.92149]],
    // D65 (ASTM E308-01)
    ['d65', [0.95047, 1.08883]],
    // E (ASTM E308-01)
    ['e', [1, 1, 1]],
    // F2 (ASTM E308-01)
    ['f2', [0.99186, 0.67393]],
    // F7 (ASTM E308-01)
    ['f7', [0.95041, 1.08747]],
    // F11 (ASTM E308-01)
    ['f11', [1.00962, 0.6435]],
    ['icc', [0.96422, 0.82521]]
]);

function setLabWhitePoint(name) {
    const ill = ILLUMINANTS.get(String(name).toLowerCase());
    if (!ill) {
        throw new Error('unknown Lab illuminant ' + name);
    }
    labConstants.labWhitePoint = name;
    labConstants.Xn = ill[0];
    labConstants.Zn = ill[1];
}

function getLabWhitePoint() {
    return labConstants.labWhitePoint;
}


/***/ }),

/***/ "./node_modules/chroma-js/src/io/lab/lab2rgb.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/lab/lab2rgb.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   xyz2rgb: () => (/* binding */ xyz2rgb)
/* harmony export */ });
/* harmony import */ var _lab_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lab-constants.js */ "./node_modules/chroma-js/src/io/lab/lab-constants.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");



/*
 * L* [0..100]
 * a [-100..100]
 * b [-100..100]
 */
const lab2rgb = (...args) => {
    args = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.unpack)(args, 'lab');
    const [L, a, b] = args;
    const [x, y, z] = lab2xyz(L, a, b);
    const [r, g, b_] = xyz2rgb(x, y, z);
    return [r, g, b_, args.length > 3 ? args[3] : 1];
};

const lab2xyz = (L, a, b) => {
    const { kE, kK, kKE, Xn, Yn, Zn } = _lab_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"];

    const fy = (L + 16.0) / 116.0;
    const fx = 0.002 * a + fy;
    const fz = fy - 0.005 * b;

    const fx3 = fx * fx * fx;
    const fz3 = fz * fz * fz;

    const xr = fx3 > kE ? fx3 : (116.0 * fx - 16.0) / kK;
    const yr = L > kKE ? Math.pow((L + 16.0) / 116.0, 3.0) : L / kK;
    const zr = fz3 > kE ? fz3 : (116.0 * fz - 16.0) / kK;

    const x = xr * Xn;
    const y = yr * Yn;
    const z = zr * Zn;

    return [x, y, z];
};

const compand = (linear) => {
    /* sRGB */
    const sign = Math.sign(linear);
    linear = Math.abs(linear);
    return (
        (linear <= 0.0031308
            ? linear * 12.92
            : 1.055 * Math.pow(linear, 1.0 / 2.4) - 0.055) * sign
    );
};

const xyz2rgb = (x, y, z) => {
    const { MtxAdaptMa, MtxAdaptMaI, MtxXYZ2RGB, RefWhiteRGB, Xn, Yn, Zn } =
        _lab_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"];

    const As = Xn * MtxAdaptMa.m00 + Yn * MtxAdaptMa.m10 + Zn * MtxAdaptMa.m20;
    const Bs = Xn * MtxAdaptMa.m01 + Yn * MtxAdaptMa.m11 + Zn * MtxAdaptMa.m21;
    const Cs = Xn * MtxAdaptMa.m02 + Yn * MtxAdaptMa.m12 + Zn * MtxAdaptMa.m22;

    const Ad =
        RefWhiteRGB.X * MtxAdaptMa.m00 +
        RefWhiteRGB.Y * MtxAdaptMa.m10 +
        RefWhiteRGB.Z * MtxAdaptMa.m20;
    const Bd =
        RefWhiteRGB.X * MtxAdaptMa.m01 +
        RefWhiteRGB.Y * MtxAdaptMa.m11 +
        RefWhiteRGB.Z * MtxAdaptMa.m21;
    const Cd =
        RefWhiteRGB.X * MtxAdaptMa.m02 +
        RefWhiteRGB.Y * MtxAdaptMa.m12 +
        RefWhiteRGB.Z * MtxAdaptMa.m22;

    const X1 =
        (x * MtxAdaptMa.m00 + y * MtxAdaptMa.m10 + z * MtxAdaptMa.m20) *
        (Ad / As);
    const Y1 =
        (x * MtxAdaptMa.m01 + y * MtxAdaptMa.m11 + z * MtxAdaptMa.m21) *
        (Bd / Bs);
    const Z1 =
        (x * MtxAdaptMa.m02 + y * MtxAdaptMa.m12 + z * MtxAdaptMa.m22) *
        (Cd / Cs);

    const X2 =
        X1 * MtxAdaptMaI.m00 + Y1 * MtxAdaptMaI.m10 + Z1 * MtxAdaptMaI.m20;
    const Y2 =
        X1 * MtxAdaptMaI.m01 + Y1 * MtxAdaptMaI.m11 + Z1 * MtxAdaptMaI.m21;
    const Z2 =
        X1 * MtxAdaptMaI.m02 + Y1 * MtxAdaptMaI.m12 + Z1 * MtxAdaptMaI.m22;

    const r = compand(
        X2 * MtxXYZ2RGB.m00 + Y2 * MtxXYZ2RGB.m10 + Z2 * MtxXYZ2RGB.m20
    );
    const g = compand(
        X2 * MtxXYZ2RGB.m01 + Y2 * MtxXYZ2RGB.m11 + Z2 * MtxXYZ2RGB.m21
    );
    const b = compand(
        X2 * MtxXYZ2RGB.m02 + Y2 * MtxXYZ2RGB.m12 + Z2 * MtxXYZ2RGB.m22
    );

    return [r * 255, g * 255, b * 255];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lab2rgb);



/***/ }),

/***/ "./node_modules/chroma-js/src/io/lab/rgb2lab.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/lab/rgb2lab.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   rgb2xyz: () => (/* binding */ rgb2xyz)
/* harmony export */ });
/* harmony import */ var _lab_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lab-constants.js */ "./node_modules/chroma-js/src/io/lab/lab-constants.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");



const rgb2lab = (...args) => {
    const [r, g, b, ...rest] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.unpack)(args, 'rgb');
    const [x, y, z] = rgb2xyz(r, g, b);
    const [L, a, b_] = xyz2lab(x, y, z);
    return [L, a, b_, ...(rest.length > 0 && rest[0] < 1 ? [rest[0]] : [])];
};

function xyz2lab(x, y, z) {
    const { Xn, Yn, Zn, kE, kK } = _lab_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"];
    const xr = x / Xn;
    const yr = y / Yn;
    const zr = z / Zn;

    const fx = xr > kE ? Math.pow(xr, 1.0 / 3.0) : (kK * xr + 16.0) / 116.0;
    const fy = yr > kE ? Math.pow(yr, 1.0 / 3.0) : (kK * yr + 16.0) / 116.0;
    const fz = zr > kE ? Math.pow(zr, 1.0 / 3.0) : (kK * zr + 16.0) / 116.0;

    return [116.0 * fy - 16.0, 500.0 * (fx - fy), 200.0 * (fy - fz)];
}

function gammaAdjustSRGB(companded) {
    const sign = Math.sign(companded);
    companded = Math.abs(companded);
    const linear =
        companded <= 0.04045
            ? companded / 12.92
            : Math.pow((companded + 0.055) / 1.055, 2.4);
    return linear * sign;
}

const rgb2xyz = (r, g, b) => {
    // normalize and gamma adjust
    r = gammaAdjustSRGB(r / 255);
    g = gammaAdjustSRGB(g / 255);
    b = gammaAdjustSRGB(b / 255);

    const { MtxRGB2XYZ, MtxAdaptMa, MtxAdaptMaI, Xn, Yn, Zn, As, Bs, Cs } =
        _lab_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"];

    let x = r * MtxRGB2XYZ.m00 + g * MtxRGB2XYZ.m10 + b * MtxRGB2XYZ.m20;
    let y = r * MtxRGB2XYZ.m01 + g * MtxRGB2XYZ.m11 + b * MtxRGB2XYZ.m21;
    let z = r * MtxRGB2XYZ.m02 + g * MtxRGB2XYZ.m12 + b * MtxRGB2XYZ.m22;

    const Ad = Xn * MtxAdaptMa.m00 + Yn * MtxAdaptMa.m10 + Zn * MtxAdaptMa.m20;
    const Bd = Xn * MtxAdaptMa.m01 + Yn * MtxAdaptMa.m11 + Zn * MtxAdaptMa.m21;
    const Cd = Xn * MtxAdaptMa.m02 + Yn * MtxAdaptMa.m12 + Zn * MtxAdaptMa.m22;

    let X = x * MtxAdaptMa.m00 + y * MtxAdaptMa.m10 + z * MtxAdaptMa.m20;
    let Y = x * MtxAdaptMa.m01 + y * MtxAdaptMa.m11 + z * MtxAdaptMa.m21;
    let Z = x * MtxAdaptMa.m02 + y * MtxAdaptMa.m12 + z * MtxAdaptMa.m22;

    X *= Ad / As;
    Y *= Bd / Bs;
    Z *= Cd / Cs;

    x = X * MtxAdaptMaI.m00 + Y * MtxAdaptMaI.m10 + Z * MtxAdaptMaI.m20;
    y = X * MtxAdaptMaI.m01 + Y * MtxAdaptMaI.m11 + Z * MtxAdaptMaI.m21;
    z = X * MtxAdaptMaI.m02 + Y * MtxAdaptMaI.m12 + Z * MtxAdaptMaI.m22;

    return [x, y, z];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rgb2lab);



/***/ }),

/***/ "./node_modules/chroma-js/src/io/lch/hcl2rgb.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/lch/hcl2rgb.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/* harmony import */ var _lch2rgb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lch2rgb.js */ "./node_modules/chroma-js/src/io/lch/lch2rgb.js");



const hcl2rgb = (...args) => {
    const hcl = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'hcl').reverse();
    return (0,_lch2rgb_js__WEBPACK_IMPORTED_MODULE_1__["default"])(...hcl);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hcl2rgb);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/lch/index.js":
/*!****************************************************!*\
  !*** ./node_modules/chroma-js/src/io/lch/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports lch, hcl */
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/* harmony import */ var _chroma_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chroma.js */ "./node_modules/chroma-js/src/chroma.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input.js */ "./node_modules/chroma-js/src/io/input.js");
/* harmony import */ var _lch2rgb_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lch2rgb.js */ "./node_modules/chroma-js/src/io/lch/lch2rgb.js");
/* harmony import */ var _hcl2rgb_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hcl2rgb.js */ "./node_modules/chroma-js/src/io/lch/hcl2rgb.js");
/* harmony import */ var _rgb2lch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rgb2lch.js */ "./node_modules/chroma-js/src/io/lch/rgb2lch.js");








_Color_js__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.lch = function () {
    return (0,_rgb2lch_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this._rgb);
};
_Color_js__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.hcl = function () {
    return (0,_rgb2lch_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this._rgb).reverse();
};

const lch = (...args) => new _Color_js__WEBPACK_IMPORTED_MODULE_2__["default"](...args, 'lch');
const hcl = (...args) => new _Color_js__WEBPACK_IMPORTED_MODULE_2__["default"](...args, 'hcl');

Object.assign(_chroma_js__WEBPACK_IMPORTED_MODULE_1__["default"], { lch, hcl });

_input_js__WEBPACK_IMPORTED_MODULE_3__["default"].format.lch = _lch2rgb_js__WEBPACK_IMPORTED_MODULE_4__["default"];
_input_js__WEBPACK_IMPORTED_MODULE_3__["default"].format.hcl = _hcl2rgb_js__WEBPACK_IMPORTED_MODULE_5__["default"];
['lch', 'hcl'].forEach((m) =>
    _input_js__WEBPACK_IMPORTED_MODULE_3__["default"].autodetect.push({
        p: 2,
        test: (...args) => {
            args = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, m);
            if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.type)(args) === 'array' && args.length === 3) {
                return m;
            }
        }
    })
);




/***/ }),

/***/ "./node_modules/chroma-js/src/io/lch/lab2lch.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/lch/lab2lch.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");

const { sqrt, atan2, round } = Math;

const lab2lch = (...args) => {
    const [l, a, b] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'lab');
    const c = sqrt(a * a + b * b);
    let h = (atan2(b, a) * _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.RAD2DEG + 360) % 360;
    if (round(c * 10000) === 0) h = Number.NaN;
    return [l, c, h];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lab2lch);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/lch/lch2lab.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/lch/lch2lab.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");

const { sin, cos } = Math;

const lch2lab = (...args) => {
    /*
    Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel.
    These formulas were invented by David Dalrymple to obtain maximum contrast without going
    out of gamut if the parameters are in the range 0-1.

    A saturation multiplier was added by Gregor Aisch
    */
    let [l, c, h] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'lch');
    if (isNaN(h)) h = 0;
    h = h * _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.DEG2RAD;
    return [l, cos(h) * c, sin(h) * c];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lch2lab);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/lch/lch2rgb.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/lch/lch2rgb.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/* harmony import */ var _lch2lab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lch2lab.js */ "./node_modules/chroma-js/src/io/lch/lch2lab.js");
/* harmony import */ var _lab_lab2rgb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lab/lab2rgb.js */ "./node_modules/chroma-js/src/io/lab/lab2rgb.js");




const lch2rgb = (...args) => {
    args = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'lch');
    const [l, c, h] = args;
    const [L, a, b_] = (0,_lch2lab_js__WEBPACK_IMPORTED_MODULE_1__["default"])(l, c, h);
    const [r, g, b] = (0,_lab_lab2rgb_js__WEBPACK_IMPORTED_MODULE_2__["default"])(L, a, b_);
    return [r, g, b, args.length > 3 ? args[3] : 1];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lch2rgb);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/lch/rgb2lch.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/lch/rgb2lch.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/* harmony import */ var _lab_rgb2lab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lab/rgb2lab.js */ "./node_modules/chroma-js/src/io/lab/rgb2lab.js");
/* harmony import */ var _lab2lch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lab2lch.js */ "./node_modules/chroma-js/src/io/lch/lab2lch.js");




const rgb2lch = (...args) => {
    const [r, g, b, ...rest] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'rgb');
    const [l, a, b_] = (0,_lab_rgb2lab_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r, g, b);
    const [L, c, h] = (0,_lab2lch_js__WEBPACK_IMPORTED_MODULE_2__["default"])(l, a, b_);
    return [L, c, h, ...(rest.length > 0 && rest[0] < 1 ? [rest[0]] : [])];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rgb2lch);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/named/index.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/named/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input.js */ "./node_modules/chroma-js/src/io/input.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/* harmony import */ var _colors_w3cx11_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../colors/w3cx11.js */ "./node_modules/chroma-js/src/colors/w3cx11.js");
/* harmony import */ var _hex_hex2rgb_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hex/hex2rgb.js */ "./node_modules/chroma-js/src/io/hex/hex2rgb.js");
/* harmony import */ var _hex_rgb2hex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hex/rgb2hex.js */ "./node_modules/chroma-js/src/io/hex/rgb2hex.js");








_Color_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.name = function () {
    const hex = (0,_hex_rgb2hex_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this._rgb, 'rgb');
    for (let n of Object.keys(_colors_w3cx11_js__WEBPACK_IMPORTED_MODULE_3__["default"])) {
        if (_colors_w3cx11_js__WEBPACK_IMPORTED_MODULE_3__["default"][n] === hex) return n.toLowerCase();
    }
    return hex;
};

_input_js__WEBPACK_IMPORTED_MODULE_1__["default"].format.named = (name) => {
    name = name.toLowerCase();
    if (_colors_w3cx11_js__WEBPACK_IMPORTED_MODULE_3__["default"][name]) return (0,_hex_hex2rgb_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_colors_w3cx11_js__WEBPACK_IMPORTED_MODULE_3__["default"][name]);
    throw new Error('unknown color name: ' + name);
};

_input_js__WEBPACK_IMPORTED_MODULE_1__["default"].autodetect.push({
    p: 5,
    test: (h, ...rest) => {
        if (!rest.length && (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.type)(h) === 'string' && _colors_w3cx11_js__WEBPACK_IMPORTED_MODULE_3__["default"][h.toLowerCase()]) {
            return 'named';
        }
    }
});


/***/ }),

/***/ "./node_modules/chroma-js/src/io/num/index.js":
/*!****************************************************!*\
  !*** ./node_modules/chroma-js/src/io/num/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export num */
/* harmony import */ var _chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chroma.js */ "./node_modules/chroma-js/src/chroma.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input.js */ "./node_modules/chroma-js/src/io/input.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/* harmony import */ var _num2rgb_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./num2rgb.js */ "./node_modules/chroma-js/src/io/num/num2rgb.js");
/* harmony import */ var _rgb2num_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rgb2num.js */ "./node_modules/chroma-js/src/io/num/rgb2num.js");







_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.num = function () {
    return (0,_rgb2num_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this._rgb);
};

const num = (...args) => new _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"](...args, 'num');

Object.assign(_chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"], { num });

_input_js__WEBPACK_IMPORTED_MODULE_2__["default"].format.num = _num2rgb_js__WEBPACK_IMPORTED_MODULE_4__["default"];

_input_js__WEBPACK_IMPORTED_MODULE_2__["default"].autodetect.push({
    p: 5,
    test: (...args) => {
        if (
            args.length === 1 &&
            (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__.type)(args[0]) === 'number' &&
            args[0] >= 0 &&
            args[0] <= 0xffffff
        ) {
            return 'num';
        }
    }
});




/***/ }),

/***/ "./node_modules/chroma-js/src/io/num/num2rgb.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/num/num2rgb.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");


const num2rgb = (num) => {
    if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.type)(num) == 'number' && num >= 0 && num <= 0xffffff) {
        const r = num >> 16;
        const g = (num >> 8) & 0xff;
        const b = num & 0xff;
        return [r, g, b, 1];
    }
    throw new Error('unknown num color: ' + num);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (num2rgb);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/num/rgb2num.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/num/rgb2num.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");


const rgb2num = (...args) => {
    const [r, g, b] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'rgb');
    return (r << 16) + (g << 8) + b;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rgb2num);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/oklab/index.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/oklab/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export oklab */
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/* harmony import */ var _chroma_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chroma.js */ "./node_modules/chroma-js/src/chroma.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input.js */ "./node_modules/chroma-js/src/io/input.js");
/* harmony import */ var _oklab2rgb_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oklab2rgb.js */ "./node_modules/chroma-js/src/io/oklab/oklab2rgb.js");
/* harmony import */ var _rgb2oklab_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rgb2oklab.js */ "./node_modules/chroma-js/src/io/oklab/rgb2oklab.js");







_Color_js__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.oklab = function () {
    return (0,_rgb2oklab_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this._rgb);
};

const oklab = (...args) => new _Color_js__WEBPACK_IMPORTED_MODULE_2__["default"](...args, 'oklab');
Object.assign(_chroma_js__WEBPACK_IMPORTED_MODULE_1__["default"], { oklab });

_input_js__WEBPACK_IMPORTED_MODULE_3__["default"].format.oklab = _oklab2rgb_js__WEBPACK_IMPORTED_MODULE_4__["default"];

_input_js__WEBPACK_IMPORTED_MODULE_3__["default"].autodetect.push({
    p: 2,
    test: (...args) => {
        args = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'oklab');
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.type)(args) === 'array' && args.length === 3) {
            return 'oklab';
        }
    }
});




/***/ }),

/***/ "./node_modules/chroma-js/src/io/oklab/oklab2rgb.js":
/*!**********************************************************!*\
  !*** ./node_modules/chroma-js/src/io/oklab/oklab2rgb.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/* harmony import */ var _utils_multiply_matrices_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/multiply-matrices.js */ "./node_modules/chroma-js/src/utils/multiply-matrices.js");
/* harmony import */ var _lab_lab2rgb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lab/lab2rgb.js */ "./node_modules/chroma-js/src/io/lab/lab2rgb.js");




const oklab2rgb = (...args) => {
    args = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'lab');
    const [L, a, b, ...rest] = args;
    const [X, Y, Z] = OKLab_to_XYZ([L, a, b]);
    const [r, g, b_] = (0,_lab_lab2rgb_js__WEBPACK_IMPORTED_MODULE_2__.xyz2rgb)(X, Y, Z);
    return [r, g, b_, ...(rest.length > 0 && rest[0] < 1 ? [rest[0]] : [])];
};

// from https://www.w3.org/TR/css-color-4/#color-conversion-code
function OKLab_to_XYZ(OKLab) {
    // Given OKLab, convert to XYZ relative to D65
    var LMStoXYZ = [
        [1.2268798758459243, -0.5578149944602171, 0.2813910456659647],
        [-0.0405757452148008, 1.112286803280317, -0.0717110580655164],
        [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816]
    ];
    var OKLabtoLMS = [
        [1.0, 0.3963377773761749, 0.2158037573099136],
        [1.0, -0.1055613458156586, -0.0638541728258133],
        [1.0, -0.0894841775298119, -1.2914855480194092]
    ];

    var LMSnl = (0,_utils_multiply_matrices_js__WEBPACK_IMPORTED_MODULE_1__["default"])(OKLabtoLMS, OKLab);
    return (0,_utils_multiply_matrices_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
        LMStoXYZ,
        LMSnl.map((c) => c ** 3)
    );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (oklab2rgb);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/oklab/rgb2oklab.js":
/*!**********************************************************!*\
  !*** ./node_modules/chroma-js/src/io/oklab/rgb2oklab.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/* harmony import */ var _utils_multiply_matrices_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/multiply-matrices.js */ "./node_modules/chroma-js/src/utils/multiply-matrices.js");
/* harmony import */ var _lab_rgb2lab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lab/rgb2lab.js */ "./node_modules/chroma-js/src/io/lab/rgb2lab.js");




const rgb2oklab = (...args) => {
    const [r, g, b, ...rest] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'rgb');
    const xyz = (0,_lab_rgb2lab_js__WEBPACK_IMPORTED_MODULE_2__.rgb2xyz)(r, g, b);
    const oklab = XYZ_to_OKLab(xyz);
    return [...oklab, ...(rest.length > 0 && rest[0] < 1 ? [rest[0]] : [])];
};

// from https://www.w3.org/TR/css-color-4/#color-conversion-code
function XYZ_to_OKLab(XYZ) {
    // Given XYZ relative to D65, convert to OKLab
    const XYZtoLMS = [
        [0.819022437996703, 0.3619062600528904, -0.1288737815209879],
        [0.0329836539323885, 0.9292868615863434, 0.0361446663506424],
        [0.0481771893596242, 0.2642395317527308, 0.6335478284694309]
    ];
    const LMStoOKLab = [
        [0.210454268309314, 0.7936177747023054, -0.0040720430116193],
        [1.9779985324311684, -2.4285922420485799, 0.450593709617411],
        [0.0259040424655478, 0.7827717124575296, -0.8086757549230774]
    ];

    const LMS = (0,_utils_multiply_matrices_js__WEBPACK_IMPORTED_MODULE_1__["default"])(XYZtoLMS, XYZ);
    // JavaScript Math.cbrt returns a sign-matched cube root
    // beware if porting to other languages
    // especially if tempted to use a general power function
    return (0,_utils_multiply_matrices_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
        LMStoOKLab,
        LMS.map((c) => Math.cbrt(c))
    );
    // L in range [0,1]. For use in CSS, multiply by 100 and add a percent
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rgb2oklab);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/oklch/index.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/io/oklch/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export oklch */
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/* harmony import */ var _chroma_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chroma.js */ "./node_modules/chroma-js/src/chroma.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input.js */ "./node_modules/chroma-js/src/io/input.js");
/* harmony import */ var _oklch2rgb_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oklch2rgb.js */ "./node_modules/chroma-js/src/io/oklch/oklch2rgb.js");
/* harmony import */ var _rgb2oklch_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rgb2oklch.js */ "./node_modules/chroma-js/src/io/oklch/rgb2oklch.js");







_Color_js__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.oklch = function () {
    return (0,_rgb2oklch_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this._rgb);
};

const oklch = (...args) => new _Color_js__WEBPACK_IMPORTED_MODULE_2__["default"](...args, 'oklch');
Object.assign(_chroma_js__WEBPACK_IMPORTED_MODULE_1__["default"], { oklch });

_input_js__WEBPACK_IMPORTED_MODULE_3__["default"].format.oklch = _oklch2rgb_js__WEBPACK_IMPORTED_MODULE_4__["default"];

_input_js__WEBPACK_IMPORTED_MODULE_3__["default"].autodetect.push({
    p: 2,
    test: (...args) => {
        args = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'oklch');
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.type)(args) === 'array' && args.length === 3) {
            return 'oklch';
        }
    }
});




/***/ }),

/***/ "./node_modules/chroma-js/src/io/oklch/oklch2rgb.js":
/*!**********************************************************!*\
  !*** ./node_modules/chroma-js/src/io/oklch/oklch2rgb.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/* harmony import */ var _lch_lch2lab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lch/lch2lab.js */ "./node_modules/chroma-js/src/io/lch/lch2lab.js");
/* harmony import */ var _oklab_oklab2rgb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oklab/oklab2rgb.js */ "./node_modules/chroma-js/src/io/oklab/oklab2rgb.js");




const oklch2rgb = (...args) => {
    args = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'lch');
    const [l, c, h, ...rest] = args;
    const [L, a, b_] = (0,_lch_lch2lab_js__WEBPACK_IMPORTED_MODULE_1__["default"])(l, c, h);
    const [r, g, b] = (0,_oklab_oklab2rgb_js__WEBPACK_IMPORTED_MODULE_2__["default"])(L, a, b_);
    return [r, g, b, ...(rest.length > 0 && rest[0] < 1 ? [rest[0]] : [])];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (oklch2rgb);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/oklch/rgb2oklch.js":
/*!**********************************************************!*\
  !*** ./node_modules/chroma-js/src/io/oklch/rgb2oklch.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/* harmony import */ var _oklab_rgb2oklab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../oklab/rgb2oklab.js */ "./node_modules/chroma-js/src/io/oklab/rgb2oklab.js");
/* harmony import */ var _lch_lab2lch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lch/lab2lch.js */ "./node_modules/chroma-js/src/io/lch/lab2lch.js");




const rgb2oklch = (...args) => {
    const [r, g, b, ...rest] = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.unpack)(args, 'rgb');
    const [l, a, b_] = (0,_oklab_rgb2oklab_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r, g, b);
    const [L, c, h] = (0,_lch_lab2lch_js__WEBPACK_IMPORTED_MODULE_2__["default"])(l, a, b_);
    return [L, c, h, ...(rest.length > 0 && rest[0] < 1 ? [rest[0]] : [])];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rgb2oklch);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/rgb/index.js":
/*!****************************************************!*\
  !*** ./node_modules/chroma-js/src/io/rgb/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export rgb */
/* harmony import */ var _chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chroma.js */ "./node_modules/chroma-js/src/chroma.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input.js */ "./node_modules/chroma-js/src/io/input.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");




const { round } = Math;

_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.rgb = function (rnd = true) {
    if (rnd === false) return this._rgb.slice(0, 3);
    return this._rgb.slice(0, 3).map(round);
};

_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.rgba = function (rnd = true) {
    return this._rgb.slice(0, 4).map((v, i) => {
        return i < 3 ? (rnd === false ? v : round(v)) : v;
    });
};

const rgb = (...args) => new _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"](...args, 'rgb');
Object.assign(_chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"], { rgb });

_input_js__WEBPACK_IMPORTED_MODULE_2__["default"].format.rgb = (...args) => {
    const rgba = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__.unpack)(args, 'rgba');
    if (rgba[3] === undefined) rgba[3] = 1;
    return rgba;
};

_input_js__WEBPACK_IMPORTED_MODULE_2__["default"].autodetect.push({
    p: 3,
    test: (...args) => {
        args = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__.unpack)(args, 'rgba');
        if (
            (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__.type)(args) === 'array' &&
            (args.length === 3 ||
                (args.length === 4 &&
                    (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__.type)(args[3]) == 'number' &&
                    args[3] >= 0 &&
                    args[3] <= 1))
        ) {
            return 'rgb';
        }
    }
});




/***/ }),

/***/ "./node_modules/chroma-js/src/io/temp/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/chroma-js/src/io/temp/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports temp, kelvin, temperature */
/* harmony import */ var _chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chroma.js */ "./node_modules/chroma-js/src/chroma.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input.js */ "./node_modules/chroma-js/src/io/input.js");
/* harmony import */ var _temperature2rgb_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./temperature2rgb.js */ "./node_modules/chroma-js/src/io/temp/temperature2rgb.js");
/* harmony import */ var _rgb2temperature_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rgb2temperature.js */ "./node_modules/chroma-js/src/io/temp/rgb2temperature.js");






_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.temp =
    _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.kelvin =
    _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.temperature =
        function () {
            return (0,_rgb2temperature_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this._rgb);
        };

const temp = (...args) => new _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"](...args, 'temp');
Object.assign(_chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"], { temp, kelvin: temp, temperature: temp });

_input_js__WEBPACK_IMPORTED_MODULE_2__["default"].format.temp =
    _input_js__WEBPACK_IMPORTED_MODULE_2__["default"].format.kelvin =
    _input_js__WEBPACK_IMPORTED_MODULE_2__["default"].format.temperature =
        _temperature2rgb_js__WEBPACK_IMPORTED_MODULE_3__["default"];




/***/ }),

/***/ "./node_modules/chroma-js/src/io/temp/rgb2temperature.js":
/*!***************************************************************!*\
  !*** ./node_modules/chroma-js/src/io/temp/rgb2temperature.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _temperature2rgb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temperature2rgb.js */ "./node_modules/chroma-js/src/io/temp/temperature2rgb.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");
/*
 * Based on implementation by Neil Bartlett
 * https://github.com/neilbartlett/color-temperature
 **/



const { round } = Math;

const rgb2temperature = (...args) => {
    const rgb = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.unpack)(args, 'rgb');
    const r = rgb[0],
        b = rgb[2];
    let minTemp = 1000;
    let maxTemp = 40000;
    const eps = 0.4;
    let temp;
    while (maxTemp - minTemp > eps) {
        temp = (maxTemp + minTemp) * 0.5;
        const rgb = (0,_temperature2rgb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(temp);
        if (rgb[2] / rgb[0] >= b / r) {
            maxTemp = temp;
        } else {
            minTemp = temp;
        }
    }
    return round(temp);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rgb2temperature);


/***/ }),

/***/ "./node_modules/chroma-js/src/io/temp/temperature2rgb.js":
/*!***************************************************************!*\
  !*** ./node_modules/chroma-js/src/io/temp/temperature2rgb.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * Based on implementation by Neil Bartlett
 * https://github.com/neilbartlett/color-temperature
 */

const { log } = Math;

const temperature2rgb = (kelvin) => {
    const temp = kelvin / 100;
    let r, g, b;
    if (temp < 66) {
        r = 255;
        g =
            temp < 6
                ? 0
                : -155.25485562709179 -
                  0.44596950469579133 * (g = temp - 2) +
                  104.49216199393888 * log(g);
        b =
            temp < 20
                ? 0
                : -254.76935184120902 +
                  0.8274096064007395 * (b = temp - 10) +
                  115.67994401066147 * log(b);
    } else {
        r =
            351.97690566805693 +
            0.114206453784165 * (r = temp - 55) -
            40.25366309332127 * log(r);
        g =
            325.4494125711974 +
            0.07943456536662342 * (g = temp - 50) -
            28.0852963507957 * log(g);
        b = 255;
    }
    return [r, g, b, 1];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (temperature2rgb);


/***/ }),

/***/ "./node_modules/chroma-js/src/ops/alpha.js":
/*!*************************************************!*\
  !*** ./node_modules/chroma-js/src/ops/alpha.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");



_Color_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.alpha = function (a, mutate = false) {
    if (a !== undefined && (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.type)(a) === 'number') {
        if (mutate) {
            this._rgb[3] = a;
            return this;
        }
        return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([this._rgb[0], this._rgb[1], this._rgb[2], a], 'rgb');
    }
    return this._rgb[3];
};


/***/ }),

/***/ "./node_modules/chroma-js/src/ops/clipped.js":
/*!***************************************************!*\
  !*** ./node_modules/chroma-js/src/ops/clipped.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");


_Color_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.clipped = function () {
    return this._rgb._clipped || false;
};


/***/ }),

/***/ "./node_modules/chroma-js/src/ops/darken.js":
/*!**************************************************!*\
  !*** ./node_modules/chroma-js/src/ops/darken.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _io_lab_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../io/lab/index.js */ "./node_modules/chroma-js/src/io/lab/index.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _io_lab_lab_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../io/lab/lab-constants.js */ "./node_modules/chroma-js/src/io/lab/lab-constants.js");




_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.darken = function (amount = 1) {
    const me = this;
    const lab = me.lab();
    lab[0] -= _io_lab_lab_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].Kn * amount;
    return new _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"](lab, 'lab').alpha(me.alpha(), true);
};

_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.brighten = function (amount = 1) {
    return this.darken(-amount);
};

_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.darker = _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.darken;
_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.brighter = _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.brighten;


/***/ }),

/***/ "./node_modules/chroma-js/src/ops/get.js":
/*!***********************************************!*\
  !*** ./node_modules/chroma-js/src/ops/get.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");


_Color_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.get = function (mc) {
    const [mode, channel] = mc.split('.');
    const src = this[mode]();
    if (channel) {
        const i = mode.indexOf(channel) - (mode.substr(0, 2) === 'ok' ? 2 : 0);
        if (i > -1) return src[i];
        throw new Error(`unknown channel ${channel} in mode ${mode}`);
    } else {
        return src;
    }
};


/***/ }),

/***/ "./node_modules/chroma-js/src/ops/luminance.js":
/*!*****************************************************!*\
  !*** ./node_modules/chroma-js/src/ops/luminance.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");


const { pow } = Math;

const EPS = 1e-7;
const MAX_ITER = 20;

_Color_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.luminance = function (lum, mode = 'rgb') {
    if (lum !== undefined && (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.type)(lum) === 'number') {
        if (lum === 0) {
            // return pure black
            return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([0, 0, 0, this._rgb[3]], 'rgb');
        }
        if (lum === 1) {
            // return pure white
            return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([255, 255, 255, this._rgb[3]], 'rgb');
        }
        // compute new color using...
        let cur_lum = this.luminance();
        let max_iter = MAX_ITER;

        const test = (low, high) => {
            const mid = low.interpolate(high, 0.5, mode);
            const lm = mid.luminance();
            if (Math.abs(lum - lm) < EPS || !max_iter--) {
                // close enough
                return mid;
            }
            return lm > lum ? test(low, mid) : test(mid, high);
        };

        const rgb = (
            cur_lum > lum
                ? test(new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([0, 0, 0]), this)
                : test(this, new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([255, 255, 255]))
        ).rgb();
        return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([...rgb, this._rgb[3]]);
    }
    return rgb2luminance(...this._rgb.slice(0, 3));
};

const rgb2luminance = (r, g, b) => {
    // relative luminance
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    r = luminance_x(r);
    g = luminance_x(g);
    b = luminance_x(b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const luminance_x = (x) => {
    x /= 255;
    return x <= 0.03928 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
};


/***/ }),

/***/ "./node_modules/chroma-js/src/ops/mix.js":
/*!***********************************************!*\
  !*** ./node_modules/chroma-js/src/ops/mix.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _generator_mix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generator/mix.js */ "./node_modules/chroma-js/src/generator/mix.js");



_Color_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.mix = _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.interpolate = function (
    col2,
    f = 0.5,
    ...rest
) {
    return (0,_generator_mix_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, col2, f, ...rest);
};


/***/ }),

/***/ "./node_modules/chroma-js/src/ops/premultiply.js":
/*!*******************************************************!*\
  !*** ./node_modules/chroma-js/src/ops/premultiply.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");


_Color_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.premultiply = function (mutate = false) {
    const rgb = this._rgb;
    const a = rgb[3];
    if (mutate) {
        this._rgb = [rgb[0] * a, rgb[1] * a, rgb[2] * a, a];
        return this;
    } else {
        return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([rgb[0] * a, rgb[1] * a, rgb[2] * a, a], 'rgb');
    }
};


/***/ }),

/***/ "./node_modules/chroma-js/src/ops/saturate.js":
/*!****************************************************!*\
  !*** ./node_modules/chroma-js/src/ops/saturate.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _io_lch_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../io/lch/index.js */ "./node_modules/chroma-js/src/io/lch/index.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _io_lab_lab_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../io/lab/lab-constants.js */ "./node_modules/chroma-js/src/io/lab/lab-constants.js");




_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.saturate = function (amount = 1) {
    const me = this;
    const lch = me.lch();
    lch[1] += _io_lab_lab_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].Kn * amount;
    if (lch[1] < 0) lch[1] = 0;
    return new _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"](lch, 'lch').alpha(me.alpha(), true);
};

_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.desaturate = function (amount = 1) {
    return this.saturate(-amount);
};


/***/ }),

/***/ "./node_modules/chroma-js/src/ops/set.js":
/*!***********************************************!*\
  !*** ./node_modules/chroma-js/src/ops/set.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/chroma-js/src/utils/index.js");



_Color_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.set = function (mc, value, mutate = false) {
    const [mode, channel] = mc.split('.');
    const src = this[mode]();
    if (channel) {
        const i = mode.indexOf(channel) - (mode.substr(0, 2) === 'ok' ? 2 : 0);
        if (i > -1) {
            if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.type)(value) == 'string') {
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
            } else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.type)(value) === 'number') {
                src[i] = value;
            } else {
                throw new Error(`unsupported value for Color.set`);
            }
            const out = new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](src, mode);
            if (mutate) {
                this._rgb = out._rgb;
                return this;
            }
            return out;
        }
        throw new Error(`unknown channel ${channel} in mode ${mode}`);
    } else {
        return src;
    }
};


/***/ }),

/***/ "./node_modules/chroma-js/src/ops/shade.js":
/*!*************************************************!*\
  !*** ./node_modules/chroma-js/src/ops/shade.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _io_lab_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../io/lab/index.js */ "./node_modules/chroma-js/src/io/lab/index.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _generator_mix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generator/mix.js */ "./node_modules/chroma-js/src/generator/mix.js");




_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.tint = function (f = 0.5, ...rest) {
    return (0,_generator_mix_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, 'white', f, ...rest);
};

_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.shade = function (f = 0.5, ...rest) {
    return (0,_generator_mix_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, 'black', f, ...rest);
};


/***/ }),

/***/ "./node_modules/chroma-js/src/utils/analyze.js":
/*!*****************************************************!*\
  !*** ./node_modules/chroma-js/src/utils/analyze.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   analyze: () => (/* binding */ analyze),
/* harmony export */   limits: () => (/* binding */ limits)
/* harmony export */ });
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.js */ "./node_modules/chroma-js/src/utils/type.js");


const { log, pow, floor, abs } = Math;

function analyze(data, key = null) {
    const r = {
        min: Number.MAX_VALUE,
        max: Number.MAX_VALUE * -1,
        sum: 0,
        values: [],
        count: 0
    };
    if ((0,_type_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data) === 'object') {
        data = Object.values(data);
    }
    data.forEach((val) => {
        if (key && (0,_type_js__WEBPACK_IMPORTED_MODULE_0__["default"])(val) === 'object') val = val[key];
        if (val !== undefined && val !== null && !isNaN(val)) {
            r.values.push(val);
            r.sum += val;
            if (val < r.min) r.min = val;
            if (val > r.max) r.max = val;
            r.count += 1;
        }
    });

    r.domain = [r.min, r.max];

    r.limits = (mode, num) => limits(r, mode, num);

    return r;
}

function limits(data, mode = 'equal', num = 7) {
    if ((0,_type_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data) == 'array') {
        data = analyze(data);
    }
    const { min, max } = data;
    const values = data.values.sort((a, b) => a - b);

    if (num === 1) {
        return [min, max];
    }

    const limits = [];

    if (mode.substr(0, 1) === 'c') {
        // continuous
        limits.push(min);
        limits.push(max);
    }

    if (mode.substr(0, 1) === 'e') {
        // equal interval
        limits.push(min);
        for (let i = 1; i < num; i++) {
            limits.push(min + (i / num) * (max - min));
        }
        limits.push(max);
    } else if (mode.substr(0, 1) === 'l') {
        // log scale
        if (min <= 0) {
            throw new Error(
                'Logarithmic scales are only possible for values > 0'
            );
        }
        const min_log = Math.LOG10E * log(min);
        const max_log = Math.LOG10E * log(max);
        limits.push(min);
        for (let i = 1; i < num; i++) {
            limits.push(pow(10, min_log + (i / num) * (max_log - min_log)));
        }
        limits.push(max);
    } else if (mode.substr(0, 1) === 'q') {
        // quantile scale
        limits.push(min);
        for (let i = 1; i < num; i++) {
            const p = ((values.length - 1) * i) / num;
            const pb = floor(p);
            if (pb === p) {
                limits.push(values[pb]);
            } else {
                // p > pb
                const pr = p - pb;
                limits.push(values[pb] * (1 - pr) + values[pb + 1] * pr);
            }
        }
        limits.push(max);
    } else if (mode.substr(0, 1) === 'k') {
        // k-means clustering
        /*
        implementation based on
        http://code.google.com/p/figue/source/browse/trunk/figue.js#336
        simplified for 1-d input values
        */
        let cluster;
        const n = values.length;
        const assignments = new Array(n);
        const clusterSizes = new Array(num);
        let repeat = true;
        let nb_iters = 0;
        let centroids = null;

        // get seed values
        centroids = [];
        centroids.push(min);
        for (let i = 1; i < num; i++) {
            centroids.push(min + (i / num) * (max - min));
        }
        centroids.push(max);

        while (repeat) {
            // assignment step
            for (let j = 0; j < num; j++) {
                clusterSizes[j] = 0;
            }
            for (let i = 0; i < n; i++) {
                const value = values[i];
                let mindist = Number.MAX_VALUE;
                let best;
                for (let j = 0; j < num; j++) {
                    const dist = abs(centroids[j] - value);
                    if (dist < mindist) {
                        mindist = dist;
                        best = j;
                    }
                    clusterSizes[best]++;
                    assignments[i] = best;
                }
            }

            // update centroids step
            const newCentroids = new Array(num);
            for (let j = 0; j < num; j++) {
                newCentroids[j] = null;
            }
            for (let i = 0; i < n; i++) {
                cluster = assignments[i];
                if (newCentroids[cluster] === null) {
                    newCentroids[cluster] = values[i];
                } else {
                    newCentroids[cluster] += values[i];
                }
            }
            for (let j = 0; j < num; j++) {
                newCentroids[j] *= 1 / clusterSizes[j];
            }

            // check convergence
            repeat = false;
            for (let j = 0; j < num; j++) {
                if (newCentroids[j] !== centroids[j]) {
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
        const kClusters = {};
        for (let j = 0; j < num; j++) {
            kClusters[j] = [];
        }
        for (let i = 0; i < n; i++) {
            cluster = assignments[i];
            kClusters[cluster].push(values[i]);
        }
        let tmpKMeansBreaks = [];
        for (let j = 0; j < num; j++) {
            tmpKMeansBreaks.push(kClusters[j][0]);
            tmpKMeansBreaks.push(kClusters[j][kClusters[j].length - 1]);
        }
        tmpKMeansBreaks = tmpKMeansBreaks.sort((a, b) => a - b);
        limits.push(tmpKMeansBreaks[0]);
        for (let i = 1; i < tmpKMeansBreaks.length; i += 2) {
            const v = tmpKMeansBreaks[i];
            if (!isNaN(v) && limits.indexOf(v) === -1) {
                limits.push(v);
            }
        }
    }
    return limits;
}


/***/ }),

/***/ "./node_modules/chroma-js/src/utils/clip_rgb.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/utils/clip_rgb.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _limit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./limit.js */ "./node_modules/chroma-js/src/utils/limit.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((rgb) => {
    rgb._clipped = false;
    rgb._unclipped = rgb.slice(0);
    for (let i = 0; i <= 3; i++) {
        if (i < 3) {
            if (rgb[i] < 0 || rgb[i] > 255) rgb._clipped = true;
            rgb[i] = (0,_limit_js__WEBPACK_IMPORTED_MODULE_0__["default"])(rgb[i], 0, 255);
        } else if (i === 3) {
            rgb[i] = (0,_limit_js__WEBPACK_IMPORTED_MODULE_0__["default"])(rgb[i], 0, 1);
        }
    }
    return rgb;
});


/***/ }),

/***/ "./node_modules/chroma-js/src/utils/contrast.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/utils/contrast.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _ops_luminance_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ops/luminance.js */ "./node_modules/chroma-js/src/ops/luminance.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((a, b) => {
    // WCAG contrast ratio
    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
    a = new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](a);
    b = new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](b);
    const l1 = a.luminance();
    const l2 = b.luminance();
    return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
});


/***/ }),

/***/ "./node_modules/chroma-js/src/utils/contrastAPCA.js":
/*!**********************************************************!*\
  !*** ./node_modules/chroma-js/src/utils/contrastAPCA.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");
/* harmony import */ var _generator_mix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generator/mix.js */ "./node_modules/chroma-js/src/generator/mix.js");



/**
 * @license
 *
 * The APCA contrast prediction algorithm is based of the formulas published
 * in the APCA-1.0.98G specification by Myndex. The specification is available at:
 * https://raw.githubusercontent.com/Myndex/apca-w3/master/images/APCAw3_0.1.17_APCA0.0.98G.svg
 *
 * Note that the APCA implementation is still beta, so please update to
 * future versions of chroma.js when they become available.
 *
 * You can read more about the APCA Readability Criterion at
 * https://readtech.org/ARC/
 */

// constants
const W_offset = 0.027;
const P_in = 0.0005;
const P_out = 0.1;
const R_scale = 1.14;
const B_threshold = 0.022;
const B_exp = 1.414;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((text, bg) => {
    // parse input colors
    text = new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](text);
    bg = new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](bg);
    // if text color has alpha, blend against background
    if (text.alpha() < 1) {
        text = (0,_generator_mix_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bg, text, text.alpha(), 'rgb');
    }
    const l_text = lum(...text.rgb());
    const l_bg = lum(...bg.rgb());

    // soft clamp black levels
    const Y_text =
        l_text >= B_threshold
            ? l_text
            : l_text + Math.pow(B_threshold - l_text, B_exp);
    const Y_bg =
        l_bg >= B_threshold ? l_bg : l_bg + Math.pow(B_threshold - l_bg, B_exp);

    // normal polarity (dark text on light background)
    const S_norm = Math.pow(Y_bg, 0.56) - Math.pow(Y_text, 0.57);
    // reverse polarity (light text on dark background)
    const S_rev = Math.pow(Y_bg, 0.65) - Math.pow(Y_text, 0.62);
    // clamp noise then scale
    const C =
        Math.abs(Y_bg - Y_text) < P_in
            ? 0
            : Y_text < Y_bg
              ? S_norm * R_scale
              : S_rev * R_scale;
    // clamp minimum contrast then offset
    const S_apc = Math.abs(C) < P_out ? 0 : C > 0 ? C - W_offset : C + W_offset;
    // scale to 100
    return S_apc * 100;
});

function lum(r, g, b) {
    return (
        0.2126729 * Math.pow(r / 255, 2.4) +
        0.7151522 * Math.pow(g / 255, 2.4) +
        0.072175 * Math.pow(b / 255, 2.4)
    );
}


/***/ }),

/***/ "./node_modules/chroma-js/src/utils/delta-e.js":
/*!*****************************************************!*\
  !*** ./node_modules/chroma-js/src/utils/delta-e.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");

const { sqrt, pow, min, max, atan2, abs, cos, sin, exp, PI } = Math;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b, Kl = 1, Kc = 1, Kh = 1) {
    // Delta E (CIE 2000)
    // see http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CIE2000.html
    var rad2deg = function (rad) {
        return (360 * rad) / (2 * PI);
    };
    var deg2rad = function (deg) {
        return (2 * PI * deg) / 360;
    };
    a = new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](a);
    b = new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](b);
    const [L1, a1, b1] = Array.from(a.lab());
    const [L2, a2, b2] = Array.from(b.lab());
    const avgL = (L1 + L2) / 2;
    const C1 = sqrt(pow(a1, 2) + pow(b1, 2));
    const C2 = sqrt(pow(a2, 2) + pow(b2, 2));
    const avgC = (C1 + C2) / 2;
    const G = 0.5 * (1 - sqrt(pow(avgC, 7) / (pow(avgC, 7) + pow(25, 7))));
    const a1p = a1 * (1 + G);
    const a2p = a2 * (1 + G);
    const C1p = sqrt(pow(a1p, 2) + pow(b1, 2));
    const C2p = sqrt(pow(a2p, 2) + pow(b2, 2));
    const avgCp = (C1p + C2p) / 2;
    const arctan1 = rad2deg(atan2(b1, a1p));
    const arctan2 = rad2deg(atan2(b2, a2p));
    const h1p = arctan1 >= 0 ? arctan1 : arctan1 + 360;
    const h2p = arctan2 >= 0 ? arctan2 : arctan2 + 360;
    const avgHp =
        abs(h1p - h2p) > 180 ? (h1p + h2p + 360) / 2 : (h1p + h2p) / 2;
    const T =
        1 -
        0.17 * cos(deg2rad(avgHp - 30)) +
        0.24 * cos(deg2rad(2 * avgHp)) +
        0.32 * cos(deg2rad(3 * avgHp + 6)) -
        0.2 * cos(deg2rad(4 * avgHp - 63));
    let deltaHp = h2p - h1p;
    deltaHp =
        abs(deltaHp) <= 180
            ? deltaHp
            : h2p <= h1p
              ? deltaHp + 360
              : deltaHp - 360;
    deltaHp = 2 * sqrt(C1p * C2p) * sin(deg2rad(deltaHp) / 2);
    const deltaL = L2 - L1;
    const deltaCp = C2p - C1p;
    const sl = 1 + (0.015 * pow(avgL - 50, 2)) / sqrt(20 + pow(avgL - 50, 2));
    const sc = 1 + 0.045 * avgCp;
    const sh = 1 + 0.015 * avgCp * T;
    const deltaTheta = 30 * exp(-pow((avgHp - 275) / 25, 2));
    const Rc = 2 * sqrt(pow(avgCp, 7) / (pow(avgCp, 7) + pow(25, 7)));
    const Rt = -Rc * sin(2 * deg2rad(deltaTheta));
    const result = sqrt(
        pow(deltaL / (Kl * sl), 2) +
            pow(deltaCp / (Kc * sc), 2) +
            pow(deltaHp / (Kh * sh), 2) +
            Rt * (deltaCp / (Kc * sc)) * (deltaHp / (Kh * sh))
    );
    return max(0, min(100, result));
}


/***/ }),

/***/ "./node_modules/chroma-js/src/utils/distance.js":
/*!******************************************************!*\
  !*** ./node_modules/chroma-js/src/utils/distance.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");


// simple Euclidean distance
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b, mode = 'lab') {
    // Delta E (CIE 1976)
    // see http://www.brucelindbloom.com/index.html?Equations.html
    a = new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](a);
    b = new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](b);
    const l1 = a.get(mode);
    const l2 = b.get(mode);
    let sum_sq = 0;
    for (let i in l1) {
        const d = (l1[i] || 0) - (l2[i] || 0);
        sum_sq += d * d;
    }
    return Math.sqrt(sum_sq);
}


/***/ }),

/***/ "./node_modules/chroma-js/src/utils/index.js":
/*!***************************************************!*\
  !*** ./node_modules/chroma-js/src/utils/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEG2RAD: () => (/* binding */ DEG2RAD),
/* harmony export */   PITHIRD: () => (/* binding */ PITHIRD),
/* harmony export */   RAD2DEG: () => (/* binding */ RAD2DEG),
/* harmony export */   TWOPI: () => (/* binding */ TWOPI),
/* harmony export */   clip_rgb: () => (/* reexport safe */ _clip_rgb_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   last: () => (/* reexport safe */ _last_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   limit: () => (/* reexport safe */ _limit_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   max: () => (/* binding */ max),
/* harmony export */   min: () => (/* binding */ min),
/* harmony export */   rnd2: () => (/* binding */ rnd2),
/* harmony export */   rnd3: () => (/* binding */ rnd3),
/* harmony export */   type: () => (/* reexport safe */ _type_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   unpack: () => (/* reexport safe */ _unpack_js__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* unused harmony export PI */
/* harmony import */ var _clip_rgb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clip_rgb.js */ "./node_modules/chroma-js/src/utils/clip_rgb.js");
/* harmony import */ var _limit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./limit.js */ "./node_modules/chroma-js/src/utils/limit.js");
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type.js */ "./node_modules/chroma-js/src/utils/type.js");
/* harmony import */ var _unpack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unpack.js */ "./node_modules/chroma-js/src/utils/unpack.js");
/* harmony import */ var _last_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./last.js */ "./node_modules/chroma-js/src/utils/last.js");
const { PI, min, max } = Math;

const rnd2 = (a) => Math.round(a * 100) / 100;
const rnd3 = (a) => Math.round(a * 100) / 100;







const TWOPI = PI * 2;
const PITHIRD = PI / 3;
const DEG2RAD = PI / 180;
const RAD2DEG = 180 / PI;




/***/ }),

/***/ "./node_modules/chroma-js/src/utils/last.js":
/*!**************************************************!*\
  !*** ./node_modules/chroma-js/src/utils/last.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.js */ "./node_modules/chroma-js/src/utils/type.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((args) => {
    if (args.length < 2) return null;
    const l = args.length - 1;
    if ((0,_type_js__WEBPACK_IMPORTED_MODULE_0__["default"])(args[l]) == 'string') return args[l].toLowerCase();
    return null;
});


/***/ }),

/***/ "./node_modules/chroma-js/src/utils/limit.js":
/*!***************************************************!*\
  !*** ./node_modules/chroma-js/src/utils/limit.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const { min, max } = Math;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((x, low = 0, high = 1) => {
    return min(max(low, x), high);
});


/***/ }),

/***/ "./node_modules/chroma-js/src/utils/multiply-matrices.js":
/*!***************************************************************!*\
  !*** ./node_modules/chroma-js/src/utils/multiply-matrices.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ multiplyMatrices)
/* harmony export */ });
// from https://www.w3.org/TR/css-color-4/multiply-matrices.js
function multiplyMatrices(A, B) {
    let m = A.length;

    if (!Array.isArray(A[0])) {
        // A is vector, convert to [[a, b, c, ...]]
        A = [A];
    }

    if (!Array.isArray(B[0])) {
        // B is vector, convert to [[a], [b], [c], ...]]
        B = B.map((x) => [x]);
    }

    let p = B[0].length;
    let B_cols = B[0].map((_, i) => B.map((x) => x[i])); // transpose B
    let product = A.map((row) =>
        B_cols.map((col) => {
            if (!Array.isArray(row)) {
                return col.reduce((a, c) => a + c * row, 0);
            }

            return row.reduce((a, c, i) => a + c * (col[i] || 0), 0);
        })
    );

    if (m === 1) {
        product = product[0]; // Avoid [[a, b, c, ...]]
    }

    if (p === 1) {
        return product.map((x) => x[0]); // Avoid [[a], [b], [c], ...]]
    }

    return product;
}


/***/ }),

/***/ "./node_modules/chroma-js/src/utils/scales.js":
/*!****************************************************!*\
  !*** ./node_modules/chroma-js/src/utils/scales.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chroma.js */ "./node_modules/chroma-js/src/chroma.js");
/* harmony import */ var _io_hsl_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../io/hsl/index.js */ "./node_modules/chroma-js/src/io/hsl/index.js");
/* harmony import */ var _generator_scale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generator/scale.js */ "./node_modules/chroma-js/src/generator/scale.js");
// some pre-defined color scales:




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    cool() {
        return (0,_generator_scale_js__WEBPACK_IMPORTED_MODULE_2__["default"])([_chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"].hsl(180, 1, 0.9), _chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"].hsl(250, 0.7, 0.4)]);
    },
    hot() {
        return (0,_generator_scale_js__WEBPACK_IMPORTED_MODULE_2__["default"])(['#000', '#f00', '#ff0', '#fff'], [0, 0.25, 0.75, 1]).mode(
            'rgb'
        );
    }
});


/***/ }),

/***/ "./node_modules/chroma-js/src/utils/type.js":
/*!**************************************************!*\
  !*** ./node_modules/chroma-js/src/utils/type.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// ported from jQuery's $.type
const classToType = {};
for (let name of [
    'Boolean',
    'Number',
    'String',
    'Function',
    'Array',
    'Date',
    'RegExp',
    'Undefined',
    'Null'
]) {
    classToType[`[object ${name}]`] = name.toLowerCase();
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(obj) {
    return classToType[Object.prototype.toString.call(obj)] || 'object';
}


/***/ }),

/***/ "./node_modules/chroma-js/src/utils/unpack.js":
/*!****************************************************!*\
  !*** ./node_modules/chroma-js/src/utils/unpack.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type.js */ "./node_modules/chroma-js/src/utils/type.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((args, keyOrder = null) => {
    // if called with more than 3 arguments, we return the arguments
    if (args.length >= 3) return Array.prototype.slice.call(args);
    // with less than 3 args we check if first arg is object
    // and use the keyOrder string to extract and sort properties
    if ((0,_type_js__WEBPACK_IMPORTED_MODULE_0__["default"])(args[0]) == 'object' && keyOrder) {
        return keyOrder
            .split('')
            .filter((k) => args[0][k] !== undefined)
            .map((k) => args[0][k]);
    }
    // otherwise we just return the first argument
    // (which we suppose is an array of args)
    return args[0].slice(0);
});


/***/ }),

/***/ "./node_modules/chroma-js/src/utils/valid.js":
/*!***************************************************!*\
  !*** ./node_modules/chroma-js/src/utils/valid.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color.js */ "./node_modules/chroma-js/src/Color.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((...args) => {
    try {
        new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](...args);
        return true;
        // eslint-disable-next-line
    } catch (e) {
        return false;
    }
});


/***/ }),

/***/ "./node_modules/chroma-js/src/version.js":
/*!***********************************************!*\
  !*** ./node_modules/chroma-js/src/version.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   version: () => (/* binding */ version)
/* harmony export */ });
// this gets updated automatically
const version = '3.1.1';


/***/ }),

/***/ "./src/color-generators/accent-palette-generator.ts":
/*!**********************************************************!*\
  !*** ./src/color-generators/accent-palette-generator.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateGlobalAccentPalette: () => (/* binding */ generateGlobalAccentPalette),
/* harmony export */   generateSystemAccentPalette: () => (/* binding */ generateSystemAccentPalette),
/* harmony export */   getGlobalAccentRamp: () => (/* binding */ getGlobalAccentRamp)
/* harmony export */ });
/* unused harmony export getAccentRamp */
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/index.js");
/* harmony import */ var _utils_themes_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/themes-store */ "./src/utils/themes-store.ts");
/* harmony import */ var _utils_token_references__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/token-references */ "./src/utils/token-references.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../defaults */ "./src/defaults.ts");




function getAccentRamp(theme, params) {
    let textSaturationAdjustments = {};
    // if (params.customAccentTextSaturation === true) {
    //     textSaturationAdjustments = {
    //         s: params.accentTextSaturation
    //     }
    // }
    switch (theme) {
        default: {
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
                    "$value": "{600}",
                    "$type": "color",
                    "description": `Text on light surface`,
                    "adjustments": textSaturationAdjustments
                },
                "600": {
                    "$value": "{100}",
                    "$type": "color",
                    "description": `Text on dark surface`,
                    "adjustments": textSaturationAdjustments
                }
            };
        }
        case "dark": {
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
                    "description": `Text on light surface`,
                    "adjustments": textSaturationAdjustments
                },
                "600": {
                    "$value": "{100}",
                    "$type": "color",
                    "description": `Text on dark surface`,
                    "adjustments": textSaturationAdjustments
                }
            };
        }
    }
}
function getColorParams(theme, params) {
    let colorParams = {
        saturation: params.accentSaturation, //0.9 is default value
        minLuminance: params.accentMinLuminance,
        midLuminance: params.accentMidLuminance,
        maxLuminance: params.accentMaxLuminance,
    };
    if (theme == 'dark' && _utils_themes_store__WEBPACK_IMPORTED_MODULE_1__.isCustomDarkMode() === false) {
        colorParams.saturation = params.accentSaturation * 0.85;
        // colorParams.maxLuminance = params.accentMaxLuminance * 0.85;
    }
    return colorParams;
}
function generateSystemAccentPalette(theme, params) {
    const { saturation, minLuminance, midLuminance, maxLuminance } = getColorParams(theme, params);
    let accents = {
        red: getAccentRamp(theme, params),
        amber: getAccentRamp(theme, params),
        brown: getAccentRamp(theme, params),
        green: getAccentRamp(theme, params),
        teal: getAccentRamp(theme, params),
        blue: getAccentRamp(theme, params),
        indigo: getAccentRamp(theme, params),
        violet: getAccentRamp(theme, params),
        purple: getAccentRamp(theme, params),
        pink: getAccentRamp(theme, params)
    };
    for (const [name, scale] of Object.entries(accents)) {
        const hue = params[name];
        const shades = getGlobalAccentRamp(hue, saturation, minLuminance, midLuminance, maxLuminance);
        accents[name] = resolveRampValues(scale, shades);
    }
    return accents;
}
function generateGlobalAccentPalette(theme, params) {
    const { saturation, minLuminance, midLuminance, maxLuminance } = getColorParams(theme, params);
    let accents = {};
    _defaults__WEBPACK_IMPORTED_MODULE_3__.systemAccentList.forEach(name => {
        const hue = params[name];
        accents[name] = getGlobalAccentRamp(hue, saturation, minLuminance, midLuminance, maxLuminance);
    });
    return accents;
}
function getGlobalAccentRamp(hue, saturation, minLuminance, midLiminance, maxLuminance, steps = 7) {
    const keyShades = getRangeOfThree({
        hue,
        saturation,
        minLuminance,
        midLiminance,
        maxLuminance
    });
    let colorRamp = {};
    const scale = chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"].scale(keyShades).colors(steps, 'hex');
    scale.forEach((color, index) => {
        colorRamp[`${index + 1}00`] = {
            $value: color,
            $type: 'color',
            private: true
        };
    });
    return colorRamp;
}
function resolveRampValues(templateRamp, dictionary) {
    let output = {};
    Object.entries(templateRamp).forEach(([shadeNumber, token]) => {
        token.$value = (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_2__.resolveGlobalTokenValue)(token.$value, dictionary);
        output[shadeNumber] = token;
    });
    return output;
}
function getRangeOfThree({ hue, saturation, minLuminance = 0.1, midLiminance = 0.18, maxLuminance = 0.29 }) {
    let color1 = chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"].hsl(hue * 0.96, saturation * 1, 0.5)
        .luminance(maxLuminance);
    // this one always 4.5 : 1 contrast ratio
    let color2 = chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"].hsl(hue, saturation * 1, 0.5)
        .luminance(midLiminance);
    let color3 = chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"].hsl(hue * 1.04, saturation * 1, 0.5)
        .luminance(minLuminance);
    return [color1, color2, color3];
}



/***/ }),

/***/ "./src/color-generators/neutrals-palette-generator.ts":
/*!************************************************************!*\
  !*** ./src/color-generators/neutrals-palette-generator.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateNeutrals: () => (/* binding */ generateNeutrals),
/* harmony export */   renderNeutrals: () => (/* binding */ renderNeutrals)
/* harmony export */ });
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/index.js");
/* harmony import */ var _swatches_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swatches-generator */ "./src/color-generators/swatches-generator.ts");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/flatten-object */ "./src/utils/flatten-object.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../defaults */ "./src/defaults.ts");




function getSaturationModifier(lightness) {
    // visual representation
    // https://www.desmos.com/calculator/02ufrfsuzy
    const offset = 50; // ligthness range is [0, 100], for saturation we need to offset the curve to make [-50, 50] range 
    const magnitude = 70; // sets how much to modify, higher values outputs smaller modifier
    const saturationModifier = 1 + (Math.pow(lightness - offset, 2) / magnitude - Math.pow(offset, 2) / magnitude) / 100;
    return saturationModifier;
}
function generateNeutrals(params) {
    const min = 0;
    const max = 100;
    const { hue = 200, saturation = 0.1, distance } = params || {};
    let tokens = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_2__.flattenObject)({
        "text": {
            "black": {
                "$value": `{grey-${params.textBlackBrightness || _defaults__WEBPACK_IMPORTED_MODULE_3__.defaultSettings.textBlackBrightness}}`,
                "$type": 'color'
            },
            "white": {
                "$value": `{grey-${params.textWhiteBrightness || _defaults__WEBPACK_IMPORTED_MODULE_3__.defaultSettings.textWhiteBrightness}}`,
                "$type": 'color'
            }
        }
    });
    let value = min;
    while (value <= max) {
        const color = chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"].hsl(hue, saturation * getSaturationModifier(value), value / 100);
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderAccents: () => (/* binding */ renderAccents)
/* harmony export */ });
/* harmony import */ var _accent_palette_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accent-palette-generator */ "./src/color-generators/accent-palette-generator.ts");
/* harmony import */ var _swatches_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swatches-generator */ "./src/color-generators/swatches-generator.ts");


function renderAccents(theme, params, name) {
    const colors = (0,_accent_palette_generator__WEBPACK_IMPORTED_MODULE_0__.generateGlobalAccentPalette)(theme, params);
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
        (0,_swatches_generator__WEBPACK_IMPORTED_MODULE_1__.renderShades)(frame, name, shades, colors);
    }
    return frame;
}


/***/ }),

/***/ "./src/color-generators/swatches-generator.ts":
/*!****************************************************!*\
  !*** ./src/color-generators/swatches-generator.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderColor: () => (/* binding */ renderColor),
/* harmony export */   renderShades: () => (/* binding */ renderShades)
/* harmony export */ });
/* unused harmony export outputHSL */
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/index.js");
/* harmony import */ var _utils_round_decimals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/round-decimals */ "./src/utils/round-decimals.ts");
/* harmony import */ var _color_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color-tokens */ "./src/color-tokens.ts");



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
    const { r, g, b, a } = (0,_color_tokens__WEBPACK_IMPORTED_MODULE_2__.resolveColorTokenValue)(color, colors);
    const chromaColor = chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"].gl(r, g, b, a);
    frame.fills = [{ type: 'SOLID', color: { r, g, b }, opacity: a }];
    const opaqueColor = chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"].gl(r, g, b, 1);
    const mixedColor = chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"].mix(opaqueColor, "white", 1 - a);
    console.log(name, mixedColor.rgba());
    let contrast = [
        chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"].contrast("white", mixedColor),
        chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"].contrast(chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"].hsl(0, 0, 0.22), mixedColor)
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
    contrastWhiteRow.valueNode.characters = `${(0,_utils_round_decimals__WEBPACK_IMPORTED_MODULE_1__.roundTwoDigits)(contrast[0])}`;
    contrastBlackRow.labelNode.characters = "vs black";
    contrastBlackRow.valueNode.characters = `${(0,_utils_round_decimals__WEBPACK_IMPORTED_MODULE_1__.roundTwoDigits)(contrast[1])}`;
    nameRow.labelNode.characters = `{global.${name.replace(/\//g, ".")}}`;
    nameRow.valueNode.characters = ` `;
    hslRow.labelNode.characters = "hsl";
    hslRow.valueNode.characters = `${outputHSL(chromaColor).join(" ")}`;
    luminanceRow.labelNode.characters = "luminance";
    luminanceRow.valueNode.characters = `${Math.round((0,_utils_round_decimals__WEBPACK_IMPORTED_MODULE_1__.roundTwoDigits)(chromaColor.luminance()) * 100)}%`;
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
    return [`${Math.round(h) || 0}deg`, `${Math.round((0,_utils_round_decimals__WEBPACK_IMPORTED_MODULE_1__.roundTwoDigits)(s) * 100)}%`, `${Math.round((0,_utils_round_decimals__WEBPACK_IMPORTED_MODULE_1__.roundTwoDigits)(l) * 100)}%`];
}


/***/ }),

/***/ "./src/color-tokens.ts":
/*!*****************************!*\
  !*** ./src/color-tokens.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getColorTokenValue: () => (/* binding */ getColorTokenValue),
/* harmony export */   getComponentColors: () => (/* binding */ getComponentColors),
/* harmony export */   getGlobalNeutrals: () => (/* binding */ getGlobalNeutrals),
/* harmony export */   getShadowColorTokens: () => (/* binding */ getShadowColorTokens),
/* harmony export */   getThemeColors: () => (/* binding */ getThemeColors),
/* harmony export */   resolveColorTokenValue: () => (/* binding */ resolveColorTokenValue),
/* harmony export */   upgradeTextPalette: () => (/* binding */ upgradeTextPalette)
/* harmony export */ });
/* unused harmony exports getSemanticAccentSettings, getBrandColors, getColorSystemVersion, processColorTokenCSSValue */
/* harmony import */ var _tokens_colors_components_component_tokens_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens/colors/components/component-tokens.json */ "./src/tokens/colors/components/component-tokens.json");
/* harmony import */ var _tokens_colors_system_light_common_tokens_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokens/colors/system/light-common.tokens.json */ "./src/tokens/colors/system/light-common.tokens.json");
/* harmony import */ var _tokens_colors_system_light_shadow_colors_tokens_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokens/colors/system/light-shadow-colors.tokens.json */ "./src/tokens/colors/system/light-shadow-colors.tokens.json");
/* harmony import */ var _tokens_colors_system_light_2_tokens_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tokens/colors/system/light-2.tokens.json */ "./src/tokens/colors/system/light-2.tokens.json");
/* harmony import */ var _tokens_colors_system_light_3_tokens_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tokens/colors/system/light-3.tokens.json */ "./src/tokens/colors/system/light-3.tokens.json");
/* harmony import */ var _tokens_colors_system_light_4_tokens_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tokens/colors/system/light-4.tokens.json */ "./src/tokens/colors/system/light-4.tokens.json");
/* harmony import */ var _tokens_colors_system_light_text_base_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tokens/colors/system/light-text-base.json */ "./src/tokens/colors/system/light-text-base.json");
/* harmony import */ var _tokens_colors_system_dark_common_tokens_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tokens/colors/system/dark-common.tokens.json */ "./src/tokens/colors/system/dark-common.tokens.json");
/* harmony import */ var _tokens_colors_system_dark_shadow_colors_tokens_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tokens/colors/system/dark-shadow-colors.tokens.json */ "./src/tokens/colors/system/dark-shadow-colors.tokens.json");
/* harmony import */ var _tokens_colors_system_dark_elevated_2_tokens_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tokens/colors/system/dark-elevated-2.tokens.json */ "./src/tokens/colors/system/dark-elevated-2.tokens.json");
/* harmony import */ var _tokens_colors_system_dark_elevated_3_tokens_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tokens/colors/system/dark-elevated-3.tokens.json */ "./src/tokens/colors/system/dark-elevated-3.tokens.json");
/* harmony import */ var _tokens_colors_system_dark_elevated_4_tokens_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tokens/colors/system/dark-elevated-4.tokens.json */ "./src/tokens/colors/system/dark-elevated-4.tokens.json");
/* harmony import */ var _tokens_colors_system_dark_base_2_tokens_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tokens/colors/system/dark-base-2.tokens.json */ "./src/tokens/colors/system/dark-base-2.tokens.json");
/* harmony import */ var _tokens_colors_system_dark_base_3_tokens_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tokens/colors/system/dark-base-3.tokens.json */ "./src/tokens/colors/system/dark-base-3.tokens.json");
/* harmony import */ var _tokens_colors_system_dark_base_4_tokens_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tokens/colors/system/dark-base-4.tokens.json */ "./src/tokens/colors/system/dark-base-4.tokens.json");
/* harmony import */ var _tokens_colors_system_dark_text_base_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tokens/colors/system/dark-text-base.json */ "./src/tokens/colors/system/dark-text-base.json");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/flatten-object */ "./src/utils/flatten-object.ts");
/* harmony import */ var _color_generators_accent_palette_generator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./color-generators/accent-palette-generator */ "./src/color-generators/accent-palette-generator.ts");
/* harmony import */ var _color_generators_neutrals_palette_generator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./color-generators/neutrals-palette-generator */ "./src/color-generators/neutrals-palette-generator.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./defaults */ "./src/defaults.ts");
/* harmony import */ var _utils_clone__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utils/clone */ "./src/utils/clone.ts");
/* harmony import */ var _utils_token_references__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./utils/token-references */ "./src/utils/token-references.ts");
/* harmony import */ var _utils_figma_colors__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./utils/figma-colors */ "./src/utils/figma-colors.ts");
/* harmony import */ var _import_tokens__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./import-tokens */ "./src/import-tokens.ts");
/* harmony import */ var _utils_merge_deep__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./utils/merge-deep */ "./src/utils/merge-deep.ts");
/* harmony import */ var _utils_figma_variables__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./utils/figma-variables */ "./src/utils/figma-variables.ts");
/* harmony import */ var _utils_sort_tokens__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./utils/sort-tokens */ "./src/utils/sort-tokens.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



























// const _merge = require('lodash.merge')
let GlobalNeutrals;
function getSemanticAccentSettings() {
    return _defaults__WEBPACK_IMPORTED_MODULE_19__.defaultSemanticAccents;
}
function getGlobalNeutrals(params) {
    if (params) {
        GlobalNeutrals = (0,_color_generators_neutrals_palette_generator__WEBPACK_IMPORTED_MODULE_18__.generateNeutrals)(params);
    }
    return GlobalNeutrals;
}
function getComponentColors() {
    return (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_16__.flattenObject)(_tokens_colors_components_component_tokens_json__WEBPACK_IMPORTED_MODULE_0__);
}
function getBrandColors(name, accentShades, flat) {
    const palette = {
        primary: generateSemanticShades(name, accentShades)
    };
    return flat ? (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_16__.flattenObject)(palette) : palette;
}
function getTextOnAccentColors(formData) {
    const primaryHUE = formData[formData.primary];
    // const systemAccentColor = chroma.hsl(primaryHUE, formData.accentSaturation, 0.5).luminance(formData.accentMidLuminance);
    // const whiteTextColor = chroma.hsl(formData.hue, formData.saturation, formData.textWhiteBrightness / 100);
    // const blackTextColor = chroma.hsl(formData.hue, formData.saturation, formData.textBlackBrightness / 100);
    // const whiteTextContrast = roundTwoDigits(chroma.contrast(whiteTextColor, systemAccentColor));
    // const blackTextContrast = roundTwoDigits(chroma.contrast(blackTextColor, systemAccentColor));
    let finalColor = formData.accentTextColor;
    if (finalColor == 'auto') {
        finalColor = formData.accentMidLuminance > 0.3 ? 'black' : 'white';
    }
    const template = {
        "text": {
            "accent": {
                "400": {
                    "$value": `rgba({text.${finalColor}}, 0.45)`,
                    "$type": "color",
                    "adjustments": finalColor == 'black' ? {
                        "h": primaryHUE,
                        "s": "0.9"
                    } : null
                },
                "500": {
                    "$value": `rgba({text.${finalColor}}, 0.7)`,
                    "$type": "color",
                    "adjustments": finalColor == 'black' ? {
                        "h": primaryHUE,
                        "s": "0.9"
                    } : null
                },
                "600": {
                    "$value": `{text.${finalColor}}`,
                    "$type": "color",
                    "adjustments": finalColor == 'black' ? {
                        "h": primaryHUE,
                        "s": "0.9"
                    } : null
                }
            }
        }
    };
    return template;
}
function processCommonColors(formData, tokens) {
    let textSaturationAdjustments = {};
    if (formData.customAccentTextSaturation === true) {
        textSaturationAdjustments = {
            s: formData.accentTextSaturation
        };
    }
    const adjustments = {
        "text": {
            "base": {
                "action": {
                    "adjustments": textSaturationAdjustments
                },
                "info": {
                    "adjustments": textSaturationAdjustments
                },
                "success": {
                    "adjustments": textSaturationAdjustments
                },
                "warning": {
                    "adjustments": textSaturationAdjustments
                },
                "danger": {
                    "adjustments": textSaturationAdjustments
                }
            },
            "contrast": {
                "action": {
                    "adjustments": textSaturationAdjustments
                },
                "info": {
                    "adjustments": textSaturationAdjustments
                },
                "success": {
                    "adjustments": textSaturationAdjustments
                },
                "warning": {
                    "adjustments": textSaturationAdjustments
                },
                "danger": {
                    "adjustments": textSaturationAdjustments
                }
            }
        }
    };
    tokens = (0,_utils_clone__WEBPACK_IMPORTED_MODULE_20__._clone)(tokens);
    return (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_24__._mergeDeep)(tokens, adjustments);
}
function getThemeColors(theme, formData) {
    let lightCommon = processCommonColors(formData, _tokens_colors_system_light_common_tokens_json__WEBPACK_IMPORTED_MODULE_1__);
    let darkCommon = processCommonColors(formData, _tokens_colors_system_dark_common_tokens_json__WEBPACK_IMPORTED_MODULE_7__);
    let params = Object.assign({}, normalizeFormData(formData));
    getGlobalNeutrals(formData);
    const semanticAccents = {
        primary: params.primary,
        info: params.info,
        success: params.success,
        warning: params.warning,
        danger: params.danger,
    };
    let lightAccentTokens = (0,_color_generators_accent_palette_generator__WEBPACK_IMPORTED_MODULE_17__.generateSystemAccentPalette)('light', params);
    let darkAccentTokens = (0,_color_generators_accent_palette_generator__WEBPACK_IMPORTED_MODULE_17__.generateSystemAccentPalette)('dark', params);
    const lightSemanticTokens = generateSemanticPalette(semanticAccents, lightAccentTokens);
    const darkSemanticTokens = generateSemanticPalette(semanticAccents, darkAccentTokens);
    const lightCommonTokens = Object.assign(Object.assign(Object.assign({ accent: lightAccentTokens }, lightCommon), getShadowColorTokens('light', formData)), lightSemanticTokens);
    const darkCommonTokens = Object.assign(Object.assign(Object.assign({ accent: darkAccentTokens }, darkCommon), getShadowColorTokens('dark', formData)), darkSemanticTokens);
    let commonColors = {};
    let themeColors = {};
    if (theme === "lightBase") {
        commonColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_16__.flattenObject)(lightCommonTokens);
        if (params.distance === 0.02) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_16__.flattenObject)(_tokens_colors_system_light_2_tokens_json__WEBPACK_IMPORTED_MODULE_3__);
        }
        if (params.distance === 0.03) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_16__.flattenObject)(_tokens_colors_system_light_3_tokens_json__WEBPACK_IMPORTED_MODULE_4__);
        }
        if (params.distance === 0.04) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_16__.flattenObject)(_tokens_colors_system_light_4_tokens_json__WEBPACK_IMPORTED_MODULE_5__);
        }
    }
    if (theme === "darkElevated") {
        commonColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_16__.flattenObject)(darkCommonTokens);
        if (params.distance === 0.02) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_16__.flattenObject)(_tokens_colors_system_dark_elevated_2_tokens_json__WEBPACK_IMPORTED_MODULE_9__);
        }
        if (params.distance === 0.03) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_16__.flattenObject)(_tokens_colors_system_dark_elevated_3_tokens_json__WEBPACK_IMPORTED_MODULE_10__);
        }
        if (params.distance === 0.04) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_16__.flattenObject)(_tokens_colors_system_dark_elevated_4_tokens_json__WEBPACK_IMPORTED_MODULE_11__);
        }
    }
    if (theme === "darkBase") {
        commonColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_16__.flattenObject)(darkCommonTokens);
        if (params.distance === 0.02) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_16__.flattenObject)(_tokens_colors_system_dark_base_2_tokens_json__WEBPACK_IMPORTED_MODULE_12__);
        }
        if (params.distance === 0.03) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_16__.flattenObject)(_tokens_colors_system_dark_base_3_tokens_json__WEBPACK_IMPORTED_MODULE_13__);
        }
        if (params.distance === 0.04) {
            themeColors = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_16__.flattenObject)(_tokens_colors_system_dark_base_4_tokens_json__WEBPACK_IMPORTED_MODULE_14__);
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
    let normalizedData = (0,_utils_clone__WEBPACK_IMPORTED_MODULE_20__._clone)(formData);
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
        'accentMinLuminance',
        'accentTextSaturation',
        'textWhiteBrightness',
        'textBlackBrightness',
    ];
    numberTypes.forEach(p => {
        if (typeof formData[p] == 'string') {
            normalizedData[p] = parseFloat(formData[p]);
        }
    });
    return normalizedData;
}
function getColorVariableAliasValue(tokenValue, variableId, modeId) {
    return __awaiter(this, void 0, void 0, function* () {
        const figmaVariable = yield figma.variables.getVariableByIdAsync(variableId);
        let result;
        if (figmaVariable.resolvedType != "COLOR") {
            throw (`Variable ${figmaVariable.name} is not a color, it is ${figmaVariable.resolvedType}`);
        }
        const defaultValueRGBA = yield (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_25__.getDefaultVariableValue)(figmaVariable, modeId);
        result = (0,_utils_figma_colors__WEBPACK_IMPORTED_MODULE_22__.convertFigmaColorToRgb)(defaultValueRGBA, 'hex');
        if (typeof tokenValue == 'string' && tokenValue.indexOf('rgb') >= 0) {
            const references = (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_21__.findTokenReferences)(tokenValue).length;
            const alias = `{${(0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_25__.figmaAliasToDesignTokens)(figmaVariable.name)}}`;
            const newValue = tokenValue.replace(alias, result);
            result = (0,_utils_figma_colors__WEBPACK_IMPORTED_MODULE_22__.parseColorValue)(newValue).gl;
            return result;
        }
        return result;
    });
}
function resolveColorTokenValue(token, dictionary, output = 'gl') {
    const color = token.$value;
    const colorValue = (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_21__.resolveGlobalTokenValue)(color.trim(), dictionary);
    const result = colorValue ? (0,_utils_figma_colors__WEBPACK_IMPORTED_MODULE_22__.parseColorValue)(colorValue, token.adjustments) : null;
    if (result) {
        return result[output];
    }
    else {
        console.warn(`Cannot resolve value for ${token.name}`);
        //throw new Error("Invalid color format");
    }
}
function getColorTokenValue(token, modeId) {
    return __awaiter(this, void 0, void 0, function* () {
        let valueString = (`${token.$value}`).trim();
        const variableAlias = yield (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_21__.findVariableAlias)(valueString);
        const rawValue = resolveColorTokenValue(token, (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_21__.getGlobalTokensDictionary)());
        if (token.name == 'text/base/action')
            debugger;
        if (token.$type != "color") {
            return;
        }
        const hasAdjustments = typeof token.adjustments == 'object' && Object.keys(token.adjustments).length > 0;
        if (hasAdjustments && rawValue) {
            return rawValue;
        }
        if (variableAlias && typeof variableAlias == 'object') {
            if (typeof token.$value == 'string' && token.$value.indexOf('rgb') >= 0) {
                let parsedValue = yield getColorVariableAliasValue(token.$value, variableAlias.id, modeId);
                const references = (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_21__.findTokenReferences)(token.$value).length;
                if (!rawValue && parsedValue && references) {
                    return parsedValue;
                }
            }
            return variableAlias;
        }
        if (rawValue) {
            return rawValue;
        }
    });
}
function upgradeTextPalette(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const baseTextColorTokens = [
            "text/contrast/600",
            "text/contrast/500",
            "text/contrast/400"
        ];
        const brandTextColorTokens = [
            "text/base/action",
            "text/contrast/action"
        ];
        const targetTokens = [
            "text/accent/600",
            "text/accent/500",
            "text/accent/400"
        ];
        const figmaVariables = yield figma.variables.getLocalVariablesAsync();
        const accentColorVariable = figmaVariables.find((variable) => {
            return targetTokens.indexOf(variable.name) >= 0;
        });
        const baseColorVariables = figmaVariables.filter((variable) => {
            return baseTextColorTokens.indexOf(variable.name) >= 0;
        });
        const brandColorVariables = figmaVariables.filter((variable) => {
            return brandTextColorTokens.indexOf(variable.name) >= 0;
        });
        if (!accentColorVariable) {
            baseColorVariables.forEach(variable => {
                variable.name = variable.name.replace('contrast', 'accent');
            });
        }
        brandColorVariables.forEach(variable => {
            variable.name = variable.name.replace('action', 'primary');
        });
        (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_21__.addToGlobalTokensDictionary)(Object.assign({}, getGlobalNeutrals(params)));
        yield (0,_import_tokens__WEBPACK_IMPORTED_MODULE_23__.importVariables)({
            collectionName: _defaults__WEBPACK_IMPORTED_MODULE_19__.collectionNames.get('themeColors'),
            modeName: 'Light Base',
            sortFn: (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_26__.getColorTokensSortFn)(),
            data: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_16__.flattenObject)(Object.assign({}, _tokens_colors_system_light_text_base_json__WEBPACK_IMPORTED_MODULE_6__))
        });
        yield (0,_import_tokens__WEBPACK_IMPORTED_MODULE_23__.importVariables)({
            collectionName: _defaults__WEBPACK_IMPORTED_MODULE_19__.collectionNames.get('themeColors'),
            modeName: 'Dark Base',
            sortFn: (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_26__.getColorTokensSortFn)(),
            data: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_16__.flattenObject)(Object.assign({}, _tokens_colors_system_dark_text_base_json__WEBPACK_IMPORTED_MODULE_15__))
        });
        yield (0,_import_tokens__WEBPACK_IMPORTED_MODULE_23__.importVariables)({
            collectionName: _defaults__WEBPACK_IMPORTED_MODULE_19__.collectionNames.get('themeColors'),
            modeName: 'Dark Elevated',
            sortFn: (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_26__.getColorTokensSortFn)(),
            data: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_16__.flattenObject)(Object.assign({}, _tokens_colors_system_dark_text_base_json__WEBPACK_IMPORTED_MODULE_15__))
        });
    });
}
function getColorSystemVersion() {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = yield figma.variables.getLocalVariablesAsync();
        const isSDS = figma.root.getPluginData('SDS') !== '';
        if (variables.length == 0) {
            return 0;
        }
        if (isSDS) {
            const textOnAccentVar = variables.find(variable => variable.name.startsWith('text/accent'));
            return textOnAccentVar ? 2 : 1;
        }
        return 0;
    });
}
function isAlias(value) {
    try {
        return value.toString().trim().charAt(0) === "{";
    }
    catch (e) {
        debugger;
    }
}
function processColorTokenCSSValue(token, globalNeutrals) {
    let value = token.$value;
    value = resolveColorTokenValue(token, globalNeutrals, 'hsl');
    const hasAdjustments = typeof token.adjustments == 'object' && Object.keys(token.adjustments).length > 0;
    if (hasAdjustments) {
        return value;
    }
    if (isAlias(token.$value)) {
        const aliasName = (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_21__.getReferenceName)(token.$value);
        value = `var(--${aliasName.replace(/\./g, "-")})`;
    }
    return value;
}
const shadowColours = {
    light: _tokens_colors_system_light_shadow_colors_tokens_json__WEBPACK_IMPORTED_MODULE_2__,
    dark: _tokens_colors_system_dark_shadow_colors_tokens_json__WEBPACK_IMPORTED_MODULE_8__,
};
function getShadowColorTokens(theme, params) {
    const tokenOptions = shadowColours[theme || 'light'];
    if (params.shadowsColor == undefined) {
        params.shadowsColor = _defaults__WEBPACK_IMPORTED_MODULE_19__.defaultSettings.shadowsColor;
    }
    return (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_16__.flattenObject)(tokenOptions[params.shadowsColor]);
}


/***/ }),

/***/ "./src/defaults.ts":
/*!*************************!*\
  !*** ./src/defaults.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   collectionNames: () => (/* binding */ collectionNames),
/* harmony export */   colorThemeNames: () => (/* binding */ colorThemeNames),
/* harmony export */   colorThemes: () => (/* binding */ colorThemes),
/* harmony export */   defaultSemanticAccents: () => (/* binding */ defaultSemanticAccents),
/* harmony export */   defaultSettings: () => (/* binding */ defaultSettings),
/* harmony export */   radiiSizeName: () => (/* binding */ radiiSizeName),
/* harmony export */   spacingSizeName: () => (/* binding */ spacingSizeName),
/* harmony export */   systemAccentList: () => (/* binding */ systemAccentList),
/* harmony export */   typographySizeName: () => (/* binding */ typographySizeName)
/* harmony export */ });
/* unused harmony exports radiiSizeValues, typographySizeValues, iconSizeName, iconSizeValues, defaultAccentHUEs */
const colorThemes = [
    'lightBase',
    'darkBase',
    'darkElevated'
];
const colorThemeNames = [
    'Light Base',
    'Dark Base',
    'Dark Elevated'
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
const defaultSemanticAccents = {
    primary: 'blue',
    info: 'teal',
    success: 'green',
    warning: 'amber',
    danger: 'red'
};
const defaultSettings = Object.assign(Object.assign(Object.assign({}, defaultAccentHUEs), defaultSemanticAccents), { type: 'IMPORT', theme: 'light', hue: 190, saturation: 0.2, distance: 0.02, baseFontSize: 'base', typeScale: 'minorThird', createStyles: true, accentSaturation: 0.9, accentMaxLuminance: 0.45, accentMidLuminance: 0.18, accentMinLuminance: 0.12, radii: 'base', spacing: 'base', verticalSpacing: 'uneven', singleCollection: false, customAccentTextSaturation: false, accentTextSaturation: 0, accentTextColor: 'auto', textWhiteBrightness: 100, textBlackBrightness: 6, createColorTokens: true, createComponentTokens: true, createTypographyTokens: true, createSpacingTokens: true, createElevationTokens: true, createRadiiTokens: true, createGlobalSizeTokens: true, createOpacityTokens: true, shadowsStyle: 1, shadowsColor: 1, shadowsSpread: -1 });
const collectionNames = new Map([
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


/***/ }),

/***/ "./src/effect-tokens.ts":
/*!******************************!*\
  !*** ./src/effect-tokens.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getElevationTokens: () => (/* binding */ getElevationTokens)
/* harmony export */ });
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults */ "./src/defaults.ts");
/* harmony import */ var _utils_clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/clone */ "./src/utils/clone.ts");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/flatten-object */ "./src/utils/flatten-object.ts");



function getElevationTokens(params, raw) {
    let tokens;
    let depth = params.shadowsStyle - 2;
    if (params.shadowsSpread == undefined) {
        params.shadowsSpread = _defaults__WEBPACK_IMPORTED_MODULE_0__.defaultSettings.shadowsSpread;
    }
    if (params.shadowsStyle == 1) {
        /*
            this is exceptional case
        */
        tokens = generateShadows(0, params.shadowsSpread);
        const firstShadowRump = (0,_utils_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(tokens['shadow-1']);
        Object.entries(firstShadowRump).forEach(([key, effectDesignToken]) => {
            effectDesignToken.$value.pop();
        });
        tokens = {
            'shadow-1': firstShadowRump,
            'shadow-2': tokens['shadow-1'],
            'shadow-3': tokens['shadow-2'],
            'shadow-4': tokens['shadow-3'],
            'shadow-5': tokens['shadow-4'],
            'shadow-6': tokens['shadow-5'],
        };
    }
    else {
        tokens = generateShadows(depth, params.shadowsSpread);
    }
    return raw === true ? tokens : (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_2__.flattenObject)(tokens);
}
const valueSequence = [1, 2, 4, 8, 12, 16, 24, 32, 40, 48, 56, 72, 88, 104];
const effectTemplate = {
    "type": "DROP_SHADOW",
    "showShadowBehindNode": false,
    "color": "{utility.shade.100}",
    "blendMode": "MULTIPLY",
    "offsetX": 0,
    "offsetY": 0,
    "radius": 1,
    "spread": 0.5
};
function getLayersCount(offsetValue) {
    let layers = 1;
    if (offsetValue > 0 && offsetValue < 12) {
        layers += 1;
    }
    else if (offsetValue >= 12) {
        layers += 2;
    }
    return layers;
}
function getShadowValueRamp(valueSequeceIndex, spread) {
    const offsetValue = valueSequence[valueSequeceIndex];
    let layers = getLayersCount(offsetValue);
    const shadowRampDefinition = {
        "100": {
            '$type': 'effect',
            '$value': getShadowValue(layers, valueSequeceIndex, 1, spread)
        },
        "200": {
            '$type': 'effect',
            '$value': getShadowValue(layers, valueSequeceIndex, 2, spread)
        },
        "300": {
            '$type': 'effect',
            '$value': getShadowValue(layers, valueSequeceIndex, 3, spread)
        },
        "400": {
            '$type': 'effect',
            '$value': getShadowValue(layers, valueSequeceIndex, 4, spread)
        },
        "500": {
            '$type': 'effect',
            '$value': getShadowValue(layers, valueSequeceIndex, 5, spread)
        },
        "600": {
            '$type': 'effect',
            '$value': getShadowValue(layers, valueSequeceIndex, 6, spread)
        },
    };
    return shadowRampDefinition;
}
function adjustSpread(spread, blurValue) {
    if (spread < 0 && Math.abs(spread) >= blurValue) {
        return adjustSpread(++spread, blurValue);
    }
    return spread;
}
function getShadowValue(layers, sequeceStartIndex, colorIndex, spread) {
    let shadowValue = [
        (0,_utils_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(effectTemplate)
    ];
    for (let l = 0; l < layers; l++) {
        const sequenceIndex = sequeceStartIndex + l;
        const offsetValue = valueSequence[sequenceIndex];
        const radiusValue = valueSequence[sequenceIndex + 1];
        let layerValue = Object.assign(Object.assign({}, (0,_utils_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(effectTemplate)), { color: `{utility.shade.${colorIndex}00}`, offsetY: offsetValue, radius: radiusValue, spread: adjustSpread(spread, offsetValue) });
        shadowValue.push(layerValue);
    }
    return shadowValue;
}
function generateShadows(size, spread) {
    let spreadFactor = 0;
    if (spread < 0) {
        spreadFactor = -1;
    }
    else if (spread > 0) {
        spreadFactor = 1;
    }
    let ramp = {};
    for (let s = 1; s <= 6; s++) {
        ramp[`shadow-${s}`] = getShadowValueRamp(size++, spread);
        spread += spreadFactor;
    }
    return ramp;
}


/***/ }),

/***/ "./src/import-export-json.ts":
/*!***********************************!*\
  !*** ./src/import-export-json.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exportBrandVariantToJSON: () => (/* binding */ exportBrandVariantToJSON),
/* harmony export */   exportToJSON: () => (/* binding */ exportToJSON),
/* harmony export */   importFromJSON: () => (/* binding */ importFromJSON)
/* harmony export */ });
/* harmony import */ var _utils_brand_variant_template_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/brand-variant-template.json */ "./src/utils/brand-variant-template.json");
/* harmony import */ var _import_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import-tokens */ "./src/import-tokens.ts");
/* harmony import */ var _utils_figma_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/figma-colors */ "./src/utils/figma-colors.ts");
/* harmony import */ var _utils_figma_effect_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/figma-effect-styles */ "./src/utils/figma-effect-styles.ts");
/* harmony import */ var _utils_figma_text_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/figma-text-styles */ "./src/utils/figma-text-styles.ts");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/flatten-object */ "./src/utils/flatten-object.ts");
/* harmony import */ var _utils_figma_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/figma-variables */ "./src/utils/figma-variables.ts");
/* harmony import */ var _utils_delay_async__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/delay-async */ "./src/utils/delay-async.ts");
/* harmony import */ var _utils_token_references__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/token-references */ "./src/utils/token-references.ts");
/* harmony import */ var _utils_clone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/clone */ "./src/utils/clone.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./defaults */ "./src/defaults.ts");
/* harmony import */ var _utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/text-to-title-case */ "./src/utils/text-to-title-case.ts");
/* harmony import */ var _utils_sort_tokens__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/sort-tokens */ "./src/utils/sort-tokens.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};













function makeBrandVariantRecord(name) {
    const brandVariantRecord = (0,_utils_clone__WEBPACK_IMPORTED_MODULE_9__._clone)(_utils_brand_variant_template_json__WEBPACK_IMPORTED_MODULE_0__);
    brandVariantRecord.collection = "Brand Variant";
    brandVariantRecord.mode = (0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_11__.toCamelCase)(name);
    brandVariantRecord.tokens = {
        theme: {},
        brand: {},
        component: {},
    };
    return brandVariantRecord;
}
function exportBrandThemeTokens(key, brandVariantRecord, exportedData) {
    let brandTokens = brandVariantRecord.tokens[key];
    exportedData.forEach(record => {
        const modeName = (0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_11__.toCamelCase)(record.mode);
        const tokens = record.tokens;
        const data = {};
        Object.entries(tokens).forEach(([tokenName, tokenData]) => {
            let token = (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_6__.variableNameToObject)({ name: tokenName, targetObject: data });
            const value = tokenData.$value.toString();
            let references = (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_8__.findTokenReferences)(value) || [];
            const newValue = references.map(alias => {
                return `{${key}.${modeName}.${(0,_utils_token_references__WEBPACK_IMPORTED_MODULE_8__.getReferenceName)(alias)}}`;
            }).join(' ');
            Object.assign(token, tokenData, {
                $value: newValue || value,
                scopes: [], // i want these to stay private
            });
        });
        brandTokens[modeName] = data;
    });
    return brandVariantRecord;
}
function remapPrimaryVariables(exportedData, getPath) {
    const exportData = exportedData.map(record => {
        const modeName = record.mode;
        const tokens = record.tokens;
        const data = {};
        Object.entries(tokens).forEach(([tokenName, tokenData]) => {
            let token = (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_6__.variableNameToObject)({ name: tokenName, targetObject: data });
            const name = (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_6__.figmaAliasToDesignTokens)((0,_utils_token_references__WEBPACK_IMPORTED_MODULE_8__.getReferenceName)(tokenName));
            const path = getPath(modeName);
            token = Object.assign(token, tokenData, {
                $value: `{${path}.${name}}`
            });
        });
        record.tokens = data;
        return record;
    });
    return exportData;
}
function exportToJSON(exportParams, formData) {
    return __awaiter(this, void 0, void 0, function* () {
        const collections = yield figma.variables.getLocalVariableCollectionsAsync();
        const files = [];
        for (const collection of collections) {
            const exportedData = yield exportFigmaVariableCollection(collection, exportParams.jsonColorFormat);
            exportedData.forEach(record => {
                const tokens = record.tokens;
                const data = expandTokenNameToObject(tokens);
                record.tokens = data;
            });
            files.push(...exportedData);
        }
        const textStyles = yield figma.getLocalTextStylesAsync();
        const effectStyles = yield figma.getLocalEffectStylesAsync();
        const exportedTextStyles = yield exportTextStyles(textStyles);
        const exportedEffectStyles = yield exportEffectStyles(effectStyles, exportParams.jsonColorFormat);
        exportedTextStyles && files.push(exportedTextStyles);
        exportedEffectStyles && files.push(exportedEffectStyles);
        figma.ui.postMessage({ type: "EXPORT_RESULT_JSON", files });
    });
}
function exportBrandVariantToJSON(params, formData) {
    return __awaiter(this, void 0, void 0, function* () {
        const collections = yield figma.variables.getLocalVariableCollectionsAsync();
        const brandModeName = formData.primary;
        let brandVariantCollection = makeBrandVariantRecord(brandModeName);
        const files = [brandVariantCollection];
        for (const collection of collections) {
            const exportedCollectionData = yield exportFigmaVariableCollection(collection, params.brandColorFormat);
            if (params.createColorTokens && collection.name == _defaults__WEBPACK_IMPORTED_MODULE_10__.collectionNames.get("themeColors")) {
                brandVariantCollection = exportBrandThemeTokens("theme", brandVariantCollection, exportedCollectionData);
                brandVariantCollection.tokens.theme["color"] = {
                    "$type": "string",
                    "scopes": [
                        "ALL_SCOPES"
                    ],
                    "$value": (0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_11__.toCamelCase)(brandModeName)
                };
                files.push(...remapPrimaryVariables(exportedCollectionData, (modeName) => {
                    return `theme.${(0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_11__.toCamelCase)(modeName)}`;
                }));
            }
            if (params.createComponentTokens && collection.name == _defaults__WEBPACK_IMPORTED_MODULE_10__.collectionNames.get("componentColors")) {
                importBrandSpecificTokens(collection, 'component', exportedCollectionData, files, brandVariantCollection);
            }
            const isBrandSpecificCollection = (collection) => {
                return collection.name == _defaults__WEBPACK_IMPORTED_MODULE_10__.collectionNames.get("typeFace") ||
                    collection.name == _defaults__WEBPACK_IMPORTED_MODULE_10__.collectionNames.get("typeScale") ||
                    collection.name == _defaults__WEBPACK_IMPORTED_MODULE_10__.collectionNames.get("radii") ||
                    collection.name == _defaults__WEBPACK_IMPORTED_MODULE_10__.collectionNames.get("spacing");
            };
            if (params.createTypographyTokens && isBrandSpecificCollection(collection)) {
                importBrandSpecificTokens(collection, 'brand', exportedCollectionData, files, brandVariantCollection);
            }
        }
        figma.ui.postMessage({ type: "EXPORT_RESULT_BRAND", files });
    });
}
function expandTokenNameToObject(tokens) {
    const data = {};
    Object.entries(tokens).forEach(([tokenName, tokenData]) => {
        let token = (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_6__.variableNameToObject)({ name: tokenName, targetObject: data });
        Object.assign(token, tokenData);
    });
    return data;
}
function importBrandSpecificTokens(collection, targetKey, exportedCollectionData, files, brandVariantCollection) {
    const defaultModeId = collection.defaultModeId;
    const defaulttMode = collection.modes.find(mode => mode.modeId === defaultModeId);
    const exportData = exportedCollectionData.find(record => record.mode === defaulttMode.name);
    const data = expandTokenNameToObject(exportData.tokens);
    brandVariantCollection.tokens[targetKey] = Object.assign(brandVariantCollection.tokens[targetKey], data);
    files.push(...remapPrimaryVariables([exportData], (modeName) => {
        return `${targetKey}`;
    }));
    return brandVariantCollection;
}
function getTokenValueFromVariable(value, variable, colorFormat) {
    return __awaiter(this, void 0, void 0, function* () {
        const type = value['type'];
        if (type === "VARIABLE_ALIAS") {
            const alias = yield (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_6__.getAliasName)(value['id']);
            return alias;
        }
        if (variable.resolvedType == "COLOR") {
            return (0,_utils_figma_colors__WEBPACK_IMPORTED_MODULE_2__.convertFigmaColorToRgb)(value, colorFormat);
        }
        return `${value}`;
    });
}
function exportFigmaVariableCollection(collection, colorFormat = "hsl") {
    return __awaiter(this, void 0, void 0, function* () {
        const collections = [];
        const variableReferences = collection.variableIds.sort();
        const typeNames = new Map([
            ["COLOR", "color"],
            ["BOOLEAN", "boolean"],
            ["FLOAT", "number"],
            ["STRING", "string"]
        ]);
        for (const mode of collection.modes) {
            const collectionRecord = {
                type: "variables",
                collection: collection.name,
                mode: mode.name,
                tokens: {}
            };
            for (const variableId of variableReferences) {
                const figmaVariable = yield figma.variables.getVariableByIdAsync(variableId);
                const { name, resolvedType, scopes, valuesByMode } = figmaVariable;
                console.log(name);
                const value = valuesByMode[mode.modeId];
                // const valueObject = variableNameToObject(name, collectionRecord.tokens);
                const token = {
                    $type: typeNames.get(resolvedType),
                    $value: yield getTokenValueFromVariable(value, figmaVariable, colorFormat),
                    scopes: scopes,
                    description: figmaVariable.description || ""
                };
                collectionRecord.tokens[name] = token;
            }
            ;
            collections.push(collectionRecord);
        }
        ;
        return collections;
    });
}
function exportTextStyles(styles) {
    return __awaiter(this, void 0, void 0, function* () {
        if (styles.length == 0) {
            return null;
        }
        const collection = {
            type: "textStyles",
            collection: "Text Styles",
            mode: "default",
            tokens: {}
        };
        for (const style of styles) {
            const name = style.name;
            let token = (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_6__.variableNameToObject)({ name, targetObject: collection.tokens });
            Object.assign(token, {
                $value: yield (0,_utils_figma_text_styles__WEBPACK_IMPORTED_MODULE_4__.convertFigmaTextStyleToToken)(style),
                $type: "typography",
            });
        }
        return collection;
    });
}
function exportEffectStyles(styles, colorFormat) {
    return __awaiter(this, void 0, void 0, function* () {
        if (styles.length == 0) {
            return null;
        }
        const collection = {
            type: "effectStyles",
            collection: "Effect Styles",
            mode: "default",
            tokens: {}
        };
        for (const style of styles) {
            const name = style.name;
            let token = (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_6__.variableNameToObject)({ name, targetObject: collection.tokens });
            Object.assign(token, {
                $value: yield (0,_utils_figma_effect_styles__WEBPACK_IMPORTED_MODULE_3__.convertFigmaEffectStyleToToken)(style, colorFormat),
                $type: "effect",
                description: style.description || ""
            });
        }
        return collection;
    });
}
function importFromJSON(data, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const collections = []; // unique set of collections to import
        const uniqueCollections = data.filter(record => {
            const collectionName = record.collection;
            // get unique collection list
            if (collections.indexOf(collectionName) < 0) {
                collections.push(collectionName);
                return true;
            }
            return false;
        });
        let tokensDictionary = {};
        // iterate each collection, ignore additional modes and make a dictionary
        uniqueCollections.forEach(collectionRecord => {
            const flatTokens = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_5__.flattenObject)(collectionRecord.tokens);
            tokensDictionary = Object.assign(Object.assign({}, tokensDictionary), flatTokens);
        });
        (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_8__.addToGlobalTokensDictionary)(tokensDictionary);
        while (uniqueCollections.length) {
            const collectionRecord = uniqueCollections.shift();
            if (collectionRecord.type == "variables") {
                yield (0,_import_tokens__WEBPACK_IMPORTED_MODULE_1__.getCollectionAndPrepareTokens)({
                    collectionName: collectionRecord.collection,
                    modeName: collectionRecord.mode,
                    data: (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_5__.flattenObject)(collectionRecord.tokens),
                    sortFn: getSortFnByCollectionName(collectionRecord.collection)
                });
                yield (0,_utils_delay_async__WEBPACK_IMPORTED_MODULE_7__.delayAsync)(5);
            }
        }
        // calculate tokens count
        let tokensCountTotal = 0;
        let tokensImportedCount = 0;
        data.forEach(collectionRecord => {
            const flatTokens = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_5__.flattenObject)(collectionRecord.tokens);
            tokensCountTotal += Object.keys(flatTokens).length;
        });
        while (data.length) {
            const collectionRecord = data.shift();
            const flatTokens = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_5__.flattenObject)(collectionRecord.tokens);
            if (collectionRecord.type == "variables") {
                yield (0,_import_tokens__WEBPACK_IMPORTED_MODULE_1__.importVariables)({
                    collectionName: collectionRecord.collection,
                    modeName: collectionRecord.mode,
                    data: flatTokens
                });
                yield (0,_utils_delay_async__WEBPACK_IMPORTED_MODULE_7__.delayAsync)(5);
                tokensImportedCount += Object.keys(flatTokens).length;
                console.log(`Imported ${tokensImportedCount} out of ${tokensCountTotal}`);
            }
            if (collectionRecord.type == "textStyles") {
                yield (0,_utils_figma_text_styles__WEBPACK_IMPORTED_MODULE_4__.importTextStyles)(tokensDictionary);
                yield (0,_utils_delay_async__WEBPACK_IMPORTED_MODULE_7__.delayAsync)(5);
            }
            if (collectionRecord.type == "effectStyles") {
                yield (0,_utils_figma_effect_styles__WEBPACK_IMPORTED_MODULE_3__.importEffectStyles)(flatTokens, tokensDictionary);
                yield (0,_utils_delay_async__WEBPACK_IMPORTED_MODULE_7__.delayAsync)(5);
            }
        }
    });
}
function getSortFnByCollectionName(name) {
    const references = {
        "Color Theme": (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_12__.getColorTokensSortFn)(),
        "Brand Variant": (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_12__.getColorTokensSortFn)(),
        "Component Colors": (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_12__.getColorTokensSortFn)(),
        "Opacity": (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_12__.getAlphaNumTokensSortFn)(),
        "Spacing": (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_12__.getSizeTokensSortFn)(),
        "Radii": (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_12__.getSizeTokensSortFn)(),
        "Global Sizing": (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_12__.getAlphaNumTokensSortFn)(),
    };
    return references[name];
}


/***/ }),

/***/ "./src/import-tokens.ts":
/*!******************************!*\
  !*** ./src/import-tokens.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCollectionAndPrepareTokens: () => (/* binding */ getCollectionAndPrepareTokens),
/* harmony export */   importAllTokens: () => (/* binding */ importAllTokens),
/* harmony export */   importVariables: () => (/* binding */ importVariables),
/* harmony export */   initiateImport: () => (/* binding */ initiateImport)
/* harmony export */ });
/* harmony import */ var _color_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-tokens */ "./src/color-tokens.ts");
/* harmony import */ var _utils_figma_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/figma-variables */ "./src/utils/figma-variables.ts");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/index.js");
/* harmony import */ var _spacing_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spacing-tokens */ "./src/spacing-tokens.ts");
/* harmony import */ var _radii_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radii-tokens */ "./src/radii-tokens.ts");
/* harmony import */ var _typography_tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./typography-tokens */ "./src/typography-tokens.ts");
/* harmony import */ var _sizing_tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sizing-tokens */ "./src/sizing-tokens.ts");
/* harmony import */ var _effect_tokens__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./effect-tokens */ "./src/effect-tokens.ts");
/* harmony import */ var _opacity_tokens__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./opacity-tokens */ "./src/opacity-tokens.ts");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaults */ "./src/defaults.ts");
/* harmony import */ var _utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/sort-tokens */ "./src/utils/sort-tokens.ts");
/* harmony import */ var _utils_figma_text_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/figma-text-styles */ "./src/utils/figma-text-styles.ts");
/* harmony import */ var _color_generators_accent_palette_generator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./color-generators/accent-palette-generator */ "./src/color-generators/accent-palette-generator.ts");
/* harmony import */ var _utils_token_references__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/token-references */ "./src/utils/token-references.ts");
/* harmony import */ var _utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/text-to-title-case */ "./src/utils/text-to-title-case.ts");
/* harmony import */ var _utils_figma_effect_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/figma-effect-styles */ "./src/utils/figma-effect-styles.ts");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/flatten-object */ "./src/utils/flatten-object.ts");
/* harmony import */ var _utils_round_decimals__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/round-decimals */ "./src/utils/round-decimals.ts");
/* harmony import */ var _utils_clone__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utils/clone */ "./src/utils/clone.ts");
/* harmony import */ var _utils_themes_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utils/themes-store */ "./src/utils/themes-store.ts");
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
function initiateImport() {
    return __awaiter(this, void 0, void 0, function* () {
        const params = _utils_themes_store__WEBPACK_IMPORTED_MODULE_19__.getTheme('light');
        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
        params.createComponentTokens && (yield getCollectionAndPrepareTokens({
            collectionName: _defaults__WEBPACK_IMPORTED_MODULE_9__.collectionNames.get('componentColors'),
            modeName: "Default",
            data: (0,_color_tokens__WEBPACK_IMPORTED_MODULE_0__.getComponentColors)(),
            sortFn: (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__.getColorTokensSortFn)()
        }));
        params.createColorTokens && (yield getCollectionAndPrepareTokens({
            collectionName: _defaults__WEBPACK_IMPORTED_MODULE_9__.collectionNames.get('themeColors'),
            modeName: "Light Base",
            data: (0,_color_tokens__WEBPACK_IMPORTED_MODULE_0__.getThemeColors)('lightBase', params),
            sortFn: (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__.getColorTokensSortFn)()
        }));
        params.createSpacingTokens && (yield getCollectionAndPrepareTokens({
            collectionName: _defaults__WEBPACK_IMPORTED_MODULE_9__.collectionNames.get('spacing'),
            modeName: (0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_14__.toTitleCase)(params.spacing),
            data: _spacing_tokens__WEBPACK_IMPORTED_MODULE_3__[params.spacing],
            sortFn: (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__.getSizeTokensSortFn)(),
        }));
        params.createRadiiTokens && (yield getCollectionAndPrepareTokens({
            collectionName: _defaults__WEBPACK_IMPORTED_MODULE_9__.collectionNames.get('radii'),
            modeName: (0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_14__.toTitleCase)(params.radii),
            data: _radii_tokens__WEBPACK_IMPORTED_MODULE_4__[params.radii],
            sortFn: (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__.getSizeTokensSortFn)(),
        }));
        params.createTypographyTokens && (yield getCollectionAndPrepareTokens({
            collectionName: "Type Scale",
            modeName: (0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_14__.toTitleCase)(params.baseFontSize),
            data: _typography_tokens__WEBPACK_IMPORTED_MODULE_5__[params.baseFontSize],
            sortFn: (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__.getSizeTokensSortFn)(),
        }));
        params.createOpacityTokens && (yield getCollectionAndPrepareTokens({
            collectionName: _defaults__WEBPACK_IMPORTED_MODULE_9__.collectionNames.get('opacity'),
            modeName: (0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_14__.toTitleCase)("default"),
            data: _opacity_tokens__WEBPACK_IMPORTED_MODULE_8__.opacity,
            sortFn: (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__.getAlphaNumTokensSortFn)(),
        }));
        params.createGlobalSizeTokens && (yield getCollectionAndPrepareTokens({
            collectionName: _defaults__WEBPACK_IMPORTED_MODULE_9__.collectionNames.get('globalSizing'),
            modeName: (0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_14__.toTitleCase)("default"),
            data: _sizing_tokens__WEBPACK_IMPORTED_MODULE_6__.global,
            sortFn: (0,_utils_sort_tokens__WEBPACK_IMPORTED_MODULE_10__.getAlphaNumTokensSortFn)(),
        }));
    });
}
function generateVariablesForPlayground(data, isPlayground = false) {
    if (isPlayground === false) {
        return;
    }
    ;
    const contrastRatios = {};
    const primaryColorHUE = data.primary;
    const shades = (0,_color_generators_accent_palette_generator__WEBPACK_IMPORTED_MODULE_12__.getGlobalAccentRamp)(data[primaryColorHUE], data.accentSaturation, data.accentMinLuminance, data.accentMidLuminance, data.accentMaxLuminance);
    Object.entries(shades).forEach(([name, token]) => {
        token.scopes = [];
        let chromaColor = (0,chroma_js__WEBPACK_IMPORTED_MODULE_2__["default"])(token.$value);
        const contrast1 = (0,_utils_round_decimals__WEBPACK_IMPORTED_MODULE_17__.roundTwoDigits)(chroma_js__WEBPACK_IMPORTED_MODULE_2__["default"].contrast(chroma_js__WEBPACK_IMPORTED_MODULE_2__["default"].hsl(0, 0, 1), chromaColor));
        const contrast2 = (0,_utils_round_decimals__WEBPACK_IMPORTED_MODULE_17__.roundTwoDigits)(chroma_js__WEBPACK_IMPORTED_MODULE_2__["default"].contrast(chroma_js__WEBPACK_IMPORTED_MODULE_2__["default"].hsl(0, 0, 0.22), chromaColor));
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
        data: Object.assign(Object.assign(Object.assign({}, (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_16__.flattenObject)({ '_global-accent': shades })), contrastRatios), { '_primary-color-hue': {
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
function importAllTokens() {
    return __awaiter(this, void 0, void 0, function* () {
        _utils_themes_store__WEBPACK_IMPORTED_MODULE_19__.save();
        const params = _utils_themes_store__WEBPACK_IMPORTED_MODULE_19__.getTheme('light');
        const isPlayground = figma.root.getPluginData('SDSPlayground') !== '';
        generateVariablesForPlayground(params, isPlayground);
        params.createColorTokens && (yield importColorTheme());
        params.createComponentTokens && (yield importVariables({
            collectionName: _defaults__WEBPACK_IMPORTED_MODULE_9__.collectionNames.get('componentColors'),
            modeName: "Default",
            data: (0,_color_tokens__WEBPACK_IMPORTED_MODULE_0__.getComponentColors)()
        }));
        params.createSpacingTokens && (yield importSizeTokens({
            type: 'spacing',
            collectionName: _defaults__WEBPACK_IMPORTED_MODULE_9__.collectionNames.get('spacing'),
            params: params,
            defaultMode: params.spacing,
            defaultOrder: _defaults__WEBPACK_IMPORTED_MODULE_9__.spacingSizeName,
            tokens: _spacing_tokens__WEBPACK_IMPORTED_MODULE_3__.getSpacingTokens(params.verticalSpacing)
        }));
        params.createRadiiTokens && (yield importSizeTokens({
            type: 'radii',
            collectionName: _defaults__WEBPACK_IMPORTED_MODULE_9__.collectionNames.get('radii'),
            params: params,
            defaultMode: params.radii,
            defaultOrder: _defaults__WEBPACK_IMPORTED_MODULE_9__.radiiSizeName,
            tokens: _radii_tokens__WEBPACK_IMPORTED_MODULE_4__
        }));
        params.createTypographyTokens && (yield importTypographyTokens(params));
        params.createOpacityTokens && (yield importVariables({
            collectionName: _defaults__WEBPACK_IMPORTED_MODULE_9__.collectionNames.get('opacity'),
            modeName: "Default",
            data: _opacity_tokens__WEBPACK_IMPORTED_MODULE_8__.opacity
        }));
        params.createGlobalSizeTokens && (yield importVariables({
            collectionName: _defaults__WEBPACK_IMPORTED_MODULE_9__.collectionNames.get('globalSizing'),
            modeName: "Default",
            data: _sizing_tokens__WEBPACK_IMPORTED_MODULE_6__.global
        }));
        params.createElevationTokens && (yield importEffectTokens(params));
        figma.notify("Figma variables has been imported");
        figma.ui.postMessage("IMPORT_COMPLETED");
    });
}
function getThemeParams(theme) {
    if (theme.startsWith('light')) {
        return _utils_themes_store__WEBPACK_IMPORTED_MODULE_19__.getTheme('light');
    }
    if (theme.startsWith('dark')) {
        return _utils_themes_store__WEBPACK_IMPORTED_MODULE_19__.getTheme('dark');
    }
    throw new Error(`Unusual theme name ${theme}`);
}
function importColorTheme() {
    return __awaiter(this, void 0, void 0, function* () {
        const defaultThemes = (0,_utils_clone__WEBPACK_IMPORTED_MODULE_18__._clone)(_defaults__WEBPACK_IMPORTED_MODULE_9__.colorThemes);
        (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_13__.addToGlobalTokensDictionary)(Object.assign({}, (0,_color_tokens__WEBPACK_IMPORTED_MODULE_0__.getComponentColors)()));
        let index = 0;
        while (defaultThemes.length) {
            const themeName = defaultThemes.shift();
            const params = getThemeParams(themeName);
            let themeColors = (0,_color_tokens__WEBPACK_IMPORTED_MODULE_0__.getThemeColors)(themeName, params);
            const globalNeutrals = (0,_color_tokens__WEBPACK_IMPORTED_MODULE_0__.getGlobalNeutrals)(params);
            (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_13__.addToGlobalTokensDictionary)(Object.assign(Object.assign({}, globalNeutrals), themeColors));
            yield importVariables({
                collectionName: _defaults__WEBPACK_IMPORTED_MODULE_9__.collectionNames.get('themeColors'),
                modeName: _defaults__WEBPACK_IMPORTED_MODULE_9__.colorThemeNames[index],
                data: themeColors
            });
            index++;
        }
        debugger;
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
                modeName: (0,_utils_text_to_title_case__WEBPACK_IMPORTED_MODULE_14__.toTitleCase)(modeName),
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
        const { collection, isNew } = yield (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_1__.getFigmaCollection)(collectionName);
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
                    console.error("Cannot create more than one mode. Is your file under Pro team or org plan?", e);
                    throw new Error(e);
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
        if (sortFn != null) {
            transformedTokens.sort(sortFn);
            console.log(transformedTokens.map(token => token.name));
        }
        if (isNew) {
            // create variables straight away so there is a way to make 
            // references / aliases without additional pass
            for (const token of transformedTokens) {
                const type = (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_1__.resolveVariableType)(token["$type"]);
                yield (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_1__.setFigmaVariable)(collection, modeId, type, token.name);
            }
        }
        return {
            tokens: transformedTokens,
            collection,
            modeId,
            type: data.$type
        };
    });
}
function importVariables({ collectionName, modeName, modeIndex = -1, data, sortFn = null, isSingleMode = false, overrideValues = true }) {
    return __awaiter(this, void 0, void 0, function* () {
        const { tokens, collection, modeId, type } = yield getCollectionAndPrepareTokens({ collectionName, modeName, modeIndex, data, sortFn, isSingleMode });
        for (const token of tokens) {
            let type = '$type' in token ? token.$type : 'string';
            yield processToken({
                collection,
                modeId,
                type: type,
                variableName: token.name,
                token: token,
                overrideValues
            });
        }
    });
}
function importShadowVariables(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const style = params.shadowsStyle;
        (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_13__.addToGlobalTokensDictionary)(Object.assign({}, (0,_color_tokens__WEBPACK_IMPORTED_MODULE_0__.getGlobalNeutrals)(params)));
        yield importVariables({
            collectionName: _defaults__WEBPACK_IMPORTED_MODULE_9__.collectionNames.get('themeColors'),
            modeName: 'Light Base',
            data: (0,_color_tokens__WEBPACK_IMPORTED_MODULE_0__.getShadowColorTokens)('light', params)
        });
        yield importVariables({
            collectionName: _defaults__WEBPACK_IMPORTED_MODULE_9__.collectionNames.get('themeColors'),
            modeName: 'Dark Base',
            data: (0,_color_tokens__WEBPACK_IMPORTED_MODULE_0__.getShadowColorTokens)('dark', params)
        });
        yield importVariables({
            collectionName: _defaults__WEBPACK_IMPORTED_MODULE_9__.collectionNames.get('themeColors'),
            modeName: 'Dark Elevated',
            data: (0,_color_tokens__WEBPACK_IMPORTED_MODULE_0__.getShadowColorTokens)('dark', params)
        });
    });
}
function importEffectTokens(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const tokens = _effect_tokens__WEBPACK_IMPORTED_MODULE_7__.getElevationTokens(params);
        yield importShadowVariables(params);
        yield (0,_utils_figma_effect_styles__WEBPACK_IMPORTED_MODULE_15__.importEffectStyles)(tokens);
    });
}
function importTypographyTokens(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const tokens = _typography_tokens__WEBPACK_IMPORTED_MODULE_5__.getTypographyTokens(params.baseFontSize, params.typeScale);
        const typeScaleTokens = _typography_tokens__WEBPACK_IMPORTED_MODULE_5__.getTypScaleTokens(params.typeScale);
        const collectionName = 'Type Face';
        // const collection = await findFigmaVariableCollectionByName(collectionName);
        (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_13__.addToGlobalTokensDictionary)(tokens);
        yield importVariables({
            collectionName: collectionName,
            modeName: _typography_tokens__WEBPACK_IMPORTED_MODULE_5__.typeFace["font-family"].$value || "Default",
            data: _typography_tokens__WEBPACK_IMPORTED_MODULE_5__.typeFace
        });
        yield importSizeTokens({
            type: 'typeScale',
            collectionName: "Type Scale",
            params: params,
            defaultMode: params.baseFontSize,
            defaultOrder: _defaults__WEBPACK_IMPORTED_MODULE_9__.typographySizeName,
            tokens: typeScaleTokens
        });
        yield (0,_utils_figma_text_styles__WEBPACK_IMPORTED_MODULE_11__.importTextStyles)(tokens);
    });
}
function processToken({ collection, modeId, type, variableName, token, overrideValues }) {
    return __awaiter(this, void 0, void 0, function* () {
        type = type || token.$type;
        // if key is a meta field, move on
        if (variableName.charAt(0) === "$") {
            return;
        }
        let valueString = `${token.$value}`;
        if (token.$value !== undefined) {
            if (type === "color") {
                return yield (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_1__.setFigmaVariable)(collection, modeId, "COLOR", variableName, yield (0,_color_tokens__WEBPACK_IMPORTED_MODULE_0__.getColorTokenValue)(token, modeId), token.scopes || ['ALL_SCOPES'], token.description || null);
            }
            if (type === "number") {
                let resolvedValue = yield (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_13__.resolveAliasOrValue)(valueString, (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_13__.getGlobalTokensDictionary)());
                let numValue = typeof resolvedValue == 'string' ? parseFloat(resolvedValue) : resolvedValue;
                return yield (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_1__.setFigmaVariable)(collection, modeId, "FLOAT", variableName, numValue, token.scopes, token.description || null);
            }
            if (type === "string") {
                return yield (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_1__.setFigmaVariable)(collection, modeId, "STRING", variableName, yield (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_13__.resolveAliasOrValue)(valueString, (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_13__.getGlobalTokensDictionary)()), token.scopes, token.description || null).catch(function (err) {
                    console.log(err.message); // some coding error in handling happened
                });
            }
            console.error("unsupported type", type, token);
        }
        else {
            console.warn('recursion in ', token);
        }
    });
}


/***/ }),

/***/ "./src/opacity-tokens.ts":
/*!*******************************!*\
  !*** ./src/opacity-tokens.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   global: () => (/* binding */ global)
/* harmony export */ });
/* unused harmony exports base, touch */
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base: () => (/* binding */ base),
/* harmony export */   compact: () => (/* binding */ compact),
/* harmony export */   getSpacingTokens: () => (/* binding */ getSpacingTokens),
/* harmony export */   large: () => (/* binding */ large),
/* harmony export */   touch: () => (/* binding */ touch)
/* harmony export */ });
/* harmony import */ var _tokens_spacing_base_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens/spacing/base.json */ "./src/tokens/spacing/base.json");
/* harmony import */ var _tokens_spacing_compact_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokens/spacing/compact.json */ "./src/tokens/spacing/compact.json");
/* harmony import */ var _tokens_spacing_large_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokens/spacing/large.json */ "./src/tokens/spacing/large.json");
/* harmony import */ var _tokens_spacing_touch_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tokens/spacing/touch.json */ "./src/tokens/spacing/touch.json");
/* harmony import */ var _utils_clone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/clone */ "./src/utils/clone.ts");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/flatten-object */ "./src/utils/flatten-object.ts");






const tokens = {
    base: _tokens_spacing_base_json__WEBPACK_IMPORTED_MODULE_0__,
    compact: _tokens_spacing_compact_json__WEBPACK_IMPORTED_MODULE_1__,
    large: _tokens_spacing_large_json__WEBPACK_IMPORTED_MODULE_2__,
    touch: _tokens_spacing_touch_json__WEBPACK_IMPORTED_MODULE_3__
};
const base = getSpacingTokens("uneven", "base");
const compact = getSpacingTokens("uneven", "compact");
const large = getSpacingTokens("uneven", "large");
const touch = getSpacingTokens("uneven", "touch");
function getSpacingTokens(verticalSpacing, spacingScale) {
    let output = {};
    for (const spacingScale in tokens) {
        output[spacingScale] = normalizeSpacingTokens(spacingScale, verticalSpacing === "even");
    }
    if (spacingScale) {
        return output[spacingScale];
    }
    return output;
}
function normalizeSpacingTokens(spacingScale, isEven) {
    if (!isEven) {
        return (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_5__.flattenObject)(tokens[spacingScale]);
    }
    const scale = (0,_utils_clone__WEBPACK_IMPORTED_MODULE_4__._clone)(tokens[spacingScale]);
    const major = scale["spacing"];
    const minor = scale["spacing"].minor;
    for (const tokenName in minor) {
        minor[tokenName] = major[tokenName];
    }
    return (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_5__.flattenObject)(scale);
}


/***/ }),

/***/ "./src/tokens/colors/components/component-tokens.json":
/*!************************************************************!*\
  !*** ./src/tokens/colors/components/component-tokens.json ***!
  \************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"button":{"bg":{"rest":{"$value":"{utility.tint.300}","$type":"color"},"hover":{"$value":"{alt.base.100}","$type":"color"},"active":{"$value":"{utility.tint.200}","$type":"color"}},"border":{"rest":{"$value":"{stroke.base.400}","$type":"color"},"hover":{"$value":"{stroke.base.500}","$type":"color"},"active":{"$value":"{stroke.base.400}","$type":"color"}}},"ui-element":{"bg":{"rest":{"$value":"{utility.transparent}","$type":"color"},"hover":{"$value":"{alt.base.100}","$type":"color"},"active":{"$value":"{alt.base.200}","$type":"color"},"selected":{"$value":"{primary.400}","$type":"color"},"disabled":{"$value":"{alt.base.600}","$type":"color"}},"border":{"rest":{"$value":"{alt.base.100}","$type":"color"},"hover":{"$value":"{alt.base.200}","$type":"color"},"active":{"$value":"{alt.base.300}","$type":"color"},"selected":{"$value":"{primary.500}","$type":"color"},"disabled":{"$value":"{alt.base.600}","$type":"color"}}},"form-element":{"bg":{"rest":{"$value":"{fill.base.100}","$type":"color"},"hover":{"$value":"{fill.base.100}","$type":"color"},"readonly":{"$value":"{fill.base.200}","$type":"color"}},"border":{"rest":{"$value":"{stroke.base.400}","$type":"color"},"hover":{"$value":"{primary.300}","$type":"color"},"readonly":{"$value":"{stroke.base.400}","$type":"color"}}},"card":{"bg":{"primary":{"$value":"{fill.base.100}","$type":"color"},"secondary":{"$value":"{fill.base.200}","$type":"color"}},"border":{"inner":{"$value":"{stroke.base.100}","$type":"color"},"outer":{"$value":"{stroke.base.200}","$type":"color"}}},"overlay":{"bg":{"$value":"{card.bg.primary}","$type":"color"},"border":{"$value":"{alt.base.400}","$type":"color"}}}');

/***/ }),

/***/ "./src/tokens/colors/system/dark-base-2.tokens.json":
/*!**********************************************************!*\
  !*** ./src/tokens/colors/system/dark-base-2.tokens.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-6}","$type":"color"},"200":{"$value":"{grey-8}","$type":"color"},"300":{"$value":"{grey-10}","$type":"color"},"400":{"$value":"{grey-12}","$type":"color"},"500":{"$value":"{grey-14}","$type":"color"},"600":{"$value":"{grey-16}","$type":"color"}},"contrast":{"100":{"$value":"{grey-16}","$type":"color"},"200":{"$value":"{grey-18}","$type":"color"},"300":{"$value":"{grey-20}","$type":"color"},"400":{"$value":"{grey-22}","$type":"color"},"500":{"$value":"{grey-24}","$type":"color"},"600":{"$value":"{grey-26}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-16}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-20}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-24}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-28}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-34}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-40}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-26}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-30}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-34}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-38}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-44}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-50}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/dark-base-3.tokens.json":
/*!**********************************************************!*\
  !*** ./src/tokens/colors/system/dark-base-3.tokens.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-6}","$type":"color"},"200":{"$value":"{grey-9}","$type":"color"},"300":{"$value":"{grey-12}","$type":"color"},"400":{"$value":"{grey-15}","$type":"color"},"500":{"$value":"{grey-18}","$type":"color"},"600":{"$value":"{grey-21}","$type":"color"}},"contrast":{"100":{"$value":"{grey-16}","$type":"color"},"200":{"$value":"{grey-19}","$type":"color"},"300":{"$value":"{grey-22}","$type":"color"},"400":{"$value":"{grey-25}","$type":"color"},"500":{"$value":"{grey-28}","$type":"color"},"600":{"$value":"{grey-31}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-16}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-21}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-26}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-31}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-37}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-43}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-26}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-31}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-36}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-41}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-47}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-53}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/dark-base-4.tokens.json":
/*!**********************************************************!*\
  !*** ./src/tokens/colors/system/dark-base-4.tokens.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-6}","$type":"color"},"200":{"$value":"{grey-10}","$type":"color"},"300":{"$value":"{grey-14}","$type":"color"},"400":{"$value":"{grey-18}","$type":"color"},"500":{"$value":"{grey-22}","$type":"color"},"600":{"$value":"{grey-26}","$type":"color"}},"contrast":{"100":{"$value":"{grey-16}","$type":"color"},"200":{"$value":"{grey-20}","$type":"color"},"300":{"$value":"{grey-24}","$type":"color"},"400":{"$value":"{grey-28}","$type":"color"},"500":{"$value":"{grey-32}","$type":"color"},"600":{"$value":"{grey-36}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-16}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-22}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-28}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-34}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-40}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-46}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-28}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-32}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-36}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-40}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-48}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-56}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/dark-common.tokens.json":
/*!**********************************************************!*\
  !*** ./src/tokens/colors/system/dark-common.tokens.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"text":{"base":{"400":{"$value":"rgba({text.white}, 0.45)","$type":"color"},"500":{"$value":"rgba({text.white}, 0.7)","$type":"color"},"600":{"$value":"{text.white}","$type":"color"},"action":{"$value":"{primary.500}","$type":"color"},"info":{"$value":"{info.500}","$type":"color"},"success":{"$value":"{success.500}","$type":"color"},"warning":{"$value":"{warning.500}","$type":"color"},"danger":{"$value":"{danger.500}","$type":"color"}},"contrast":{"400":{"$value":"rgba({text.white}, 0.45)","$type":"color"},"500":{"$value":"rgba({text.white}, 0.7)","$type":"color"},"600":{"$value":"{text.white}","$type":"color"},"action":{"$value":"{primary.600}","$type":"color"},"info":{"$value":"{info.600}","$type":"color"},"success":{"$value":"{success.600}","$type":"color"},"warning":{"$value":"{warning.600}","$type":"color"},"danger":{"$value":"{danger.600}","$type":"color"}}},"alt":{"base":{"100":{"$value":"rgba({grey-78}, 0.04)","$type":"color","adjustments":{"s":"*2"}},"200":{"$value":"rgba({grey-78}, 0.06)","$type":"color","adjustments":{"s":"*2"}},"300":{"$value":"rgba({grey-78}, 0.08)","$type":"color","adjustments":{"s":"*2"}},"400":{"$value":"rgba({grey-78}, 0.12)","$type":"color","adjustments":{"s":"*2"}},"500":{"$value":"rgba({grey-78}, 0.16)","$type":"color","adjustments":{"s":"*2"}},"600":{"$value":"rgba({grey-78}, 0.24)","$type":"color","adjustments":{"s":"*2"}}},"contrast":{"100":{"$value":"rgba({grey-78}, 0.04)","$type":"color","adjustments":{"s":"*2"}},"200":{"$value":"rgba({grey-78}, 0.06)","$type":"color","adjustments":{"s":"*2"}},"300":{"$value":"rgba({grey-78}, 0.08)","$type":"color","adjustments":{"s":"*2"}},"400":{"$value":"rgba({grey-78}, 0.12)","$type":"color","adjustments":{"s":"*2"}},"500":{"$value":"rgba({grey-78}, 0.16)","$type":"color","adjustments":{"s":"*2"}},"600":{"$value":"rgba({grey-78}, 0.24)","$type":"color","adjustments":{"s":"*2"}}}},"utility":{"white":{"$value":"{grey-100}","$type":"color"},"black":{"$value":"{grey-4}","$type":"color"},"transparent":{"$value":"rgba(0, 0, 0, 0)","$type":"color"},"shade":{"100":{"$value":"rgba(#000000, 0.08)","$type":"color"},"200":{"$value":"rgba(#000000, 0.16)","$type":"color"},"300":{"$value":"rgba(#000000, 0.24)","$type":"color"},"400":{"$value":"rgba(#000000, 0.32)","$type":"color"},"500":{"$value":"rgba(#000000, 0.40)","$type":"color"},"600":{"$value":"rgba(#000000, 0.48)","$type":"color"}},"tint":{"100":{"$value":"rgba({grey-78}, 0.04)","$type":"color","adjustments":{"s":"*2"}},"200":{"$value":"rgba({grey-78}, 0.06)","$type":"color","adjustments":{"s":"*2"}},"300":{"$value":"rgba({grey-78}, 0.08)","$type":"color","adjustments":{"s":"*2"}},"400":{"$value":"rgba({grey-78}, 0.12)","$type":"color","adjustments":{"s":"*2"}},"500":{"$value":"rgba({grey-78}, 0.16)","$type":"color","adjustments":{"s":"*2"}},"600":{"$value":"rgba({grey-78}, 0.24)","$type":"color","adjustments":{"s":"*2"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/dark-elevated-2.tokens.json":
/*!**************************************************************!*\
  !*** ./src/tokens/colors/system/dark-elevated-2.tokens.json ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-14}","$type":"color"},"200":{"$value":"{grey-12}","$type":"color"},"300":{"$value":"{grey-10}","$type":"color"},"400":{"$value":"{grey-8}","$type":"color"},"500":{"$value":"{grey-6}","$type":"color"},"600":{"$value":"{grey-4}","$type":"color"}},"contrast":{"100":{"$value":"{grey-24}","$type":"color"},"200":{"$value":"{grey-22}","$type":"color"},"300":{"$value":"{grey-20}","$type":"color"},"400":{"$value":"{grey-18}","$type":"color"},"500":{"$value":"{grey-16}","$type":"color"},"600":{"$value":"{grey-14}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-22}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-25}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-29}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-34}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-40}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-47}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-28}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-30}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-33}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-36}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-39}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-45}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/dark-elevated-3.tokens.json":
/*!**************************************************************!*\
  !*** ./src/tokens/colors/system/dark-elevated-3.tokens.json ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-19}","$type":"color"},"200":{"$value":"{grey-16}","$type":"color"},"300":{"$value":"{grey-13}","$type":"color"},"400":{"$value":"{grey-10}","$type":"color"},"500":{"$value":"{grey-7}","$type":"color"},"600":{"$value":"{grey-4}","$type":"color"}},"contrast":{"100":{"$value":"{grey-29}","$type":"color"},"200":{"$value":"{grey-26}","$type":"color"},"300":{"$value":"{grey-23}","$type":"color"},"400":{"$value":"{grey-20}","$type":"color"},"500":{"$value":"{grey-17}","$type":"color"},"600":{"$value":"{grey-14}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-29}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-30}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-32}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-36}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-41}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-49}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-39}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-40}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-42}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-46}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-51}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-61}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/dark-elevated-4.tokens.json":
/*!**************************************************************!*\
  !*** ./src/tokens/colors/system/dark-elevated-4.tokens.json ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-24}","$type":"color"},"200":{"$value":"{grey-20}","$type":"color"},"300":{"$value":"{grey-16}","$type":"color"},"400":{"$value":"{grey-12}","$type":"color"},"500":{"$value":"{grey-8}","$type":"color"},"600":{"$value":"{grey-4}","$type":"color"}},"contrast":{"100":{"$value":"{grey-34}","$type":"color"},"200":{"$value":"{grey-30}","$type":"color"},"300":{"$value":"{grey-26}","$type":"color"},"400":{"$value":"{grey-22}","$type":"color"},"500":{"$value":"{grey-18}","$type":"color"},"600":{"$value":"{grey-14}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-34}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-35}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-38}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-42}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-47}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-55}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-44}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-45}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-48}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-52}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-57}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-65}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/dark-shadow-colors.tokens.json":
/*!*****************************************************************!*\
  !*** ./src/tokens/colors/system/dark-shadow-colors.tokens.json ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"utility":{"shade":{"100":{"$value":"rgba(#000000, 0.08)","$type":"color"},"200":{"$value":"rgba(#000000, 0.12)","$type":"color"},"300":{"$value":"rgba(#000000, 0.16)","$type":"color"},"400":{"$value":"rgba(#000000, 0.24)","$type":"color"},"500":{"$value":"rgba(#000000, 0.32)","$type":"color"},"600":{"$value":"rgba(#000000, 0.48)","$type":"color"}}}},{"utility":{"shade":{"100":{"$type":"color","$value":"rgba(#000000, 0.06)"},"200":{"$type":"color","$value":"rgba(#000000, 0.10)"},"300":{"$type":"color","$value":"rgba(#000000, 0.14)"},"400":{"$type":"color","$value":"rgba(#000000, 0.22)"},"500":{"$type":"color","$value":"rgba(#000000, 0.30)"},"600":{"$type":"color","$value":"rgba(#000000, 0.46)"}}}},{"utility":{"shade":{"100":{"$type":"color","$value":"rgba(#000000, 0.04)"},"200":{"$type":"color","$value":"rgba(#000000, 0.08)"},"300":{"$type":"color","$value":"rgba(#000000, 0.12)"},"400":{"$type":"color","$value":"rgba(#000000, 0.20)"},"500":{"$type":"color","$value":"rgba(#000000, 0.28)"},"600":{"$type":"color","$value":"rgba(#000000, 0.44)"}}}},{"utility":{"shade":{"100":{"$type":"color","$value":"rgba(#000000, 0.02)"},"200":{"$type":"color","$value":"rgba(#000000, 0.06)"},"300":{"$type":"color","$value":"rgba(#000000, 0.10)"},"400":{"$type":"color","$value":"rgba(#000000, 0.18)"},"500":{"$type":"color","$value":"rgba(#000000, 0.26)"},"600":{"$type":"color","$value":"rgba(#000000, 0.42)"}}}}]');

/***/ }),

/***/ "./src/tokens/colors/system/dark-text-base.json":
/*!******************************************************!*\
  !*** ./src/tokens/colors/system/dark-text-base.json ***!
  \******************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"text":{"base":{"400":{"$value":"rgba({text.white}, 0.45)","$type":"color"},"500":{"$value":"rgba({text.white}, 0.7)","$type":"color"},"600":{"$value":"{text.white}","$type":"color"},"primary":{"$value":"{primary.600}","$type":"color"},"info":{"$value":"{info.600}","$type":"color"},"success":{"$value":"{success.600}","$type":"color"},"warning":{"$value":"{warning.600}","$type":"color"},"danger":{"$value":"{danger.600}","$type":"color"}},"contrast":{"400":{"$value":"rgba({text.white}, 0.45)","$type":"color"},"500":{"$value":"rgba({text.white}, 0.7)","$type":"color"},"600":{"$value":"{text.white}","$type":"color"},"primary":{"$value":"{primary.600}","$type":"color"},"info":{"$value":"{info.600}","$type":"color"},"success":{"$value":"{success.600}","$type":"color"},"warning":{"$value":"{warning.600}","$type":"color"},"danger":{"$value":"{danger.600}","$type":"color"}},"accent":{"400":{"$value":"rgba({text.white}, 0.45)","$type":"color"},"500":{"$value":"rgba({text.white}, 0.7)","$type":"color"},"600":{"$value":"{text.white}","$type":"color"}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/light-2.tokens.json":
/*!******************************************************!*\
  !*** ./src/tokens/colors/system/light-2.tokens.json ***!
  \******************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-100}","$type":"color"},"200":{"$value":"{grey-98}","$type":"color"},"300":{"$value":"{grey-96}","$type":"color"},"400":{"$value":"{grey-94}","$type":"color"},"500":{"$value":"{grey-92}","$type":"color"},"600":{"$value":"{grey-88}","$type":"color"}},"contrast":{"100":{"$value":"{grey-24}","$type":"color"},"200":{"$value":"{grey-22}","$type":"color"},"300":{"$value":"{grey-20}","$type":"color"},"400":{"$value":"{grey-18}","$type":"color"},"500":{"$value":"{grey-16}","$type":"color"},"600":{"$value":"{grey-14}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-93}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-88}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-85}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-80}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-70}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-54}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-28}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-30}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-33}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-36}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-39}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-45}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/light-3.tokens.json":
/*!******************************************************!*\
  !*** ./src/tokens/colors/system/light-3.tokens.json ***!
  \******************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-100}","$type":"color"},"200":{"$value":"{grey-97}","$type":"color"},"300":{"$value":"{grey-94}","$type":"color"},"400":{"$value":"{grey-91}","$type":"color"},"500":{"$value":"{grey-88}","$type":"color"},"600":{"$value":"{grey-84}","$type":"color"}},"contrast":{"100":{"$value":"{grey-29}","$type":"color"},"200":{"$value":"{grey-26}","$type":"color"},"300":{"$value":"{grey-23}","$type":"color"},"400":{"$value":"{grey-20}","$type":"color"},"500":{"$value":"{grey-17}","$type":"color"},"600":{"$value":"{grey-14}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-92}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-87}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-83}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-79}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-67}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-55}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-39}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-40}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-42}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-46}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-51}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-61}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/light-4.tokens.json":
/*!******************************************************!*\
  !*** ./src/tokens/colors/system/light-4.tokens.json ***!
  \******************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"fill":{"base":{"100":{"$value":"{grey-100}","$type":"color"},"200":{"$value":"{grey-96}","$type":"color"},"300":{"$value":"{grey-92}","$type":"color"},"400":{"$value":"{grey-88}","$type":"color"},"500":{"$value":"{grey-84}","$type":"color"},"600":{"$value":"{grey-80}","$type":"color"}},"contrast":{"100":{"$value":"{grey-34}","$type":"color"},"200":{"$value":"{grey-30}","$type":"color"},"300":{"$value":"{grey-26}","$type":"color"},"400":{"$value":"{grey-22}","$type":"color"},"500":{"$value":"{grey-18}","$type":"color"},"600":{"$value":"{grey-14}","$type":"color"}}},"stroke":{"base":{"100":{"$value":"{grey-91}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-86}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-81}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-76}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-64}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-54}","$type":"color","adjustments":{"s":"*0.7"}}},"contrast":{"100":{"$value":"{grey-44}","$type":"color","adjustments":{"s":"*0.7"}},"200":{"$value":"{grey-45}","$type":"color","adjustments":{"s":"*0.7"}},"300":{"$value":"{grey-48}","$type":"color","adjustments":{"s":"*0.7"}},"400":{"$value":"{grey-52}","$type":"color","adjustments":{"s":"*0.7"}},"500":{"$value":"{grey-57}","$type":"color","adjustments":{"s":"*0.7"}},"600":{"$value":"{grey-65}","$type":"color","adjustments":{"s":"*0.7"}}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/light-common.tokens.json":
/*!***********************************************************!*\
  !*** ./src/tokens/colors/system/light-common.tokens.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"text":{"base":{"400":{"$value":"rgba({text.black}, 0.45)","$type":"color"},"500":{"$value":"rgba({text.black}, 0.7)","$type":"color"},"600":{"$value":"{text.black}","$type":"color"},"action":{"$value":"{primary.500}","$type":"color"},"info":{"$value":"{info.500}","$type":"color"},"success":{"$value":"{success.500}","$type":"color"},"warning":{"$value":"{warning.500}","$type":"color"},"danger":{"$value":"{danger.500}","$type":"color"}},"contrast":{"400":{"$value":"rgba({text.white}, 0.45)","$type":"color"},"500":{"$value":"rgba({text.white}, 0.7)","$type":"color"},"600":{"$value":"{text.white}","$type":"color"},"action":{"$value":"{primary.600}","$type":"color"},"info":{"$value":"{info.600}","$type":"color"},"success":{"$value":"{success.600}","$type":"color"},"warning":{"$value":"{warning.600}","$type":"color"},"danger":{"$value":"{danger.600}","$type":"color"}}},"alt":{"base":{"100":{"$value":"rgba({grey-14}, 0.03)","$type":"color","adjustments":{"s":"1"}},"200":{"$value":"rgba({grey-14}, 0.06)","$type":"color","adjustments":{"s":"1"}},"300":{"$value":"rgba({grey-14}, 0.12)","$type":"color","adjustments":{"s":"1"}},"400":{"$value":"rgba({grey-14}, 0.20)","$type":"color","adjustments":{"s":"1"}},"500":{"$value":"rgba({grey-14}, 0.28)","$type":"color","adjustments":{"s":"1"}},"600":{"$value":"rgba({grey-14}, 0.32)","$type":"color","adjustments":{"s":"1"}}},"contrast":{"100":{"$value":"rgba(#FFFFFF, 0.04)","$type":"color"},"200":{"$value":"rgba(#FFFFFF, 0.08)","$type":"color"},"300":{"$value":"rgba(#FFFFFF, 0.12)","$type":"color"},"400":{"$value":"rgba(#FFFFFF, 0.16)","$type":"color"},"500":{"$value":"rgba(#FFFFFF, 0.24)","$type":"color"},"600":{"$value":"rgba(#FFFFFF, 0.32)","$type":"color"}}},"utility":{"white":{"$value":"{grey-100}","$type":"color"},"black":{"$value":"{grey-4}","$type":"color"},"transparent":{"$value":"rgba(255, 255, 255, 0)","$type":"color"},"shade":{"100":{"$value":"rgba({grey-8}, 0.04)","$type":"color","adjustments":{"s":"1"}},"200":{"$value":"rgba({grey-8}, 0.08)","$type":"color","adjustments":{"s":"1"}},"300":{"$value":"rgba({grey-8}, 0.16)","$type":"color","adjustments":{"s":"1"}},"400":{"$value":"rgba({grey-8}, 0.24)","$type":"color","adjustments":{"s":"1"}},"500":{"$value":"rgba({grey-8}, 0.32)","$type":"color","adjustments":{"s":"1"}},"600":{"$value":"rgba({grey-8}, 0.44)","$type":"color","adjustments":{"s":"1"}}},"tint":{"100":{"$value":"rgba({grey-100}, 0.5)","$type":"color"},"200":{"$value":"rgba({grey-100}, 0.6)","$type":"color"},"300":{"$value":"rgba({grey-100}, 0.7)","$type":"color"},"400":{"$value":"rgba({grey-100}, 0.8)","$type":"color"},"500":{"$value":"rgba({grey-100}, 0.9)","$type":"color"},"600":{"$value":"{grey-100}","$type":"color"}}}}');

/***/ }),

/***/ "./src/tokens/colors/system/light-shadow-colors.tokens.json":
/*!******************************************************************!*\
  !*** ./src/tokens/colors/system/light-shadow-colors.tokens.json ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"utility":{"shade":{"100":{"$value":"rgba({grey-8}, 0.04)","$type":"color","adjustments":{"s":"1"}},"200":{"$value":"rgba({grey-8}, 0.06)","$type":"color","adjustments":{"s":"1"}},"300":{"$value":"rgba({grey-8}, 0.08)","$type":"color","adjustments":{"s":"1"}},"400":{"$value":"rgba({grey-8}, 0.12)","$type":"color","adjustments":{"s":"1"}},"500":{"$value":"rgba({grey-8}, 0.16)","$type":"color","adjustments":{"s":"1"}},"600":{"$value":"rgba({grey-8}, 0.24)","$type":"color","adjustments":{"s":"1"}}}}},{"utility":{"shade":{"100":{"$value":"rgba({grey-8}, 0.03)","$type":"color","adjustments":{"s":"1"}},"200":{"$value":"rgba({grey-8}, 0.05)","$type":"color","adjustments":{"s":"1"}},"300":{"$value":"rgba({grey-8}, 0.07)","$type":"color","adjustments":{"s":"1"}},"400":{"$value":"rgba({grey-8}, 0.11)","$type":"color","adjustments":{"s":"1"}},"500":{"$value":"rgba({grey-8}, 0.15)","$type":"color","adjustments":{"s":"1"}},"600":{"$value":"rgba({grey-8}, 0.23)","$type":"color","adjustments":{"s":"1"}}}}},{"utility":{"shade":{"100":{"$value":"rgba({grey-8}, 0.02)","$type":"color","adjustments":{"s":"1"}},"200":{"$value":"rgba({grey-8}, 0.04)","$type":"color","adjustments":{"s":"1"}},"300":{"$value":"rgba({grey-8}, 0.06)","$type":"color","adjustments":{"s":"1"}},"400":{"$value":"rgba({grey-8}, 0.10)","$type":"color","adjustments":{"s":"1"}},"500":{"$value":"rgba({grey-8}, 0.14)","$type":"color","adjustments":{"s":"1"}},"600":{"$value":"rgba({grey-8}, 0.22)","$type":"color","adjustments":{"s":"1"}}}}},{"utility":{"shade":{"100":{"$value":"rgba({grey-8}, 0.01)","$type":"color","adjustments":{"s":"1"}},"200":{"$value":"rgba({grey-8}, 0.03)","$type":"color","adjustments":{"s":"1"}},"300":{"$value":"rgba({grey-8}, 0.05)","$type":"color","adjustments":{"s":"1"}},"400":{"$value":"rgba({grey-8}, 0.09)","$type":"color","adjustments":{"s":"1"}},"500":{"$value":"rgba({grey-8}, 0.13)","$type":"color","adjustments":{"s":"1"}},"600":{"$value":"rgba({grey-8}, 0.21)","$type":"color","adjustments":{"s":"1"}}}}}]');

/***/ }),

/***/ "./src/tokens/colors/system/light-text-base.json":
/*!*******************************************************!*\
  !*** ./src/tokens/colors/system/light-text-base.json ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"text":{"base":{"400":{"$value":"rgba({text.black}, 0.45)","$type":"color"},"500":{"$value":"rgba({text.black}, 0.7)","$type":"color"},"600":{"$value":"{text.black}","$type":"color"},"primary":{"$value":"{primary.500}","$type":"color"},"info":{"$value":"{info.500}","$type":"color"},"success":{"$value":"{success.500}","$type":"color"},"warning":{"$value":"{warning.500}","$type":"color"},"danger":{"$value":"{danger.500}","$type":"color"}},"contrast":{"400":{"$value":"rgba({text.white}, 0.45)","$type":"color"},"500":{"$value":"rgba({text.white}, 0.7)","$type":"color"},"600":{"$value":"{text.white}","$type":"color"},"primary":{"$value":"{primary.600}","$type":"color"},"info":{"$value":"{info.600}","$type":"color"},"success":{"$value":"{success.600}","$type":"color"},"warning":{"$value":"{warning.600}","$type":"color"},"danger":{"$value":"{danger.600}","$type":"color"}},"accent":{"400":{"$value":"rgba({text.white}, 0.45)","$type":"color"},"500":{"$value":"rgba({text.white}, 0.7)","$type":"color"},"600":{"$value":"{text.white}","$type":"color"}}}}');

/***/ }),

/***/ "./src/tokens/opacity/opacity.tokens.json":
/*!************************************************!*\
  !*** ./src/tokens/opacity/opacity.tokens.json ***!
  \************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"opacity-0":{"$value":0,"$type":"number","scopes":["OPACITY"]},"opacity-5":{"$value":5,"$type":"number","scopes":["OPACITY"]},"opacity-10":{"$value":10,"$type":"number","scopes":["OPACITY"]},"opacity-15":{"$value":15,"$type":"number","scopes":["OPACITY"]},"opacity-20":{"$value":20,"$type":"number","scopes":["OPACITY"]},"opacity-25":{"$value":25,"$type":"number","scopes":["OPACITY"]},"opacity-30":{"$value":30,"$type":"number","scopes":["OPACITY"]},"opacity-35":{"$value":35,"$type":"number","scopes":["OPACITY"]},"opacity-40":{"$value":40,"$type":"number","scopes":["OPACITY"]},"opacity-45":{"$value":45,"$type":"number","scopes":["OPACITY"]},"opacity-50":{"$value":50,"$type":"number","scopes":["OPACITY"]},"opacity-55":{"$value":55,"$type":"number","scopes":["OPACITY"]},"opacity-60":{"$value":60,"$type":"number","scopes":["OPACITY"]},"opacity-65":{"$value":65,"$type":"number","scopes":["OPACITY"]},"opacity-70":{"$value":70,"$type":"number","scopes":["OPACITY"]},"opacity-75":{"$value":75,"$type":"number","scopes":["OPACITY"]},"opacity-80":{"$value":80,"$type":"number","scopes":["OPACITY"]},"opacity-85":{"$value":85,"$type":"number","scopes":["OPACITY"]},"opacity-90":{"$value":90,"$type":"number","scopes":["OPACITY"]},"opacity-95":{"$value":95,"$type":"number","scopes":["OPACITY"]},"opacity-100":{"$value":100,"$type":"number","scopes":["OPACITY"]}}');

/***/ }),

/***/ "./src/tokens/radii/base.tokens.json":
/*!*******************************************!*\
  !*** ./src/tokens/radii/base.tokens.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"radii":{"none":{"$value":"0","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"sm":{"$value":"4.5","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"base":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"md":{"$value":"9","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"lg":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"xl":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"xl2":{"$value":"22","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"round":{"$value":"999","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]}}}');

/***/ }),

/***/ "./src/tokens/radii/compact.tokens.json":
/*!**********************************************!*\
  !*** ./src/tokens/radii/compact.tokens.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"radii":{"none":{"$value":"0","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"sm":{"$value":"3","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"base":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"md":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"lg":{"$value":"9","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"xl":{"$value":"13","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"xl2":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"round":{"$value":"999","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]}}}');

/***/ }),

/***/ "./src/tokens/radii/large.tokens.json":
/*!********************************************!*\
  !*** ./src/tokens/radii/large.tokens.json ***!
  \********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"radii":{"none":{"$value":"0","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"sm":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"base":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"md":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"lg":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"xl":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"xl2":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]},"round":{"$value":"999","$type":"number","scopes":["TEXT_CONTENT","CORNER_RADIUS"]}}}');

/***/ }),

/***/ "./src/tokens/sizing/base.tokens.json":
/*!********************************************!*\
  !*** ./src/tokens/sizing/base.tokens.json ***!
  \********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"icon-size":{"sm":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"64","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"96","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"128","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"256","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}}}');

/***/ }),

/***/ "./src/tokens/sizing/global.tokens.json":
/*!**********************************************!*\
  !*** ./src/tokens/sizing/global.tokens.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"size-0":{"$value":"0","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-2":{"$value":"2","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-4":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-6":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-8":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-10":{"$value":"10","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-12":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-14":{"$value":"14","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-16":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-20":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-24":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-28":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-32":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-36":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-40":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-44":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-48":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-56":{"$value":"56","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-64":{"$value":"64","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-80":{"$value":"80","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-96":{"$value":"96","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-112":{"$value":"112","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-128":{"$value":"128","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-144":{"$value":"144","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-160":{"$value":"160","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-192":{"$value":"192","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-224":{"$value":"224","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-256":{"$value":"256","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-288":{"$value":"288","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-320":{"$value":"320","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-352":{"$value":"352","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-384":{"$value":"384","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]},"size-416":{"$value":"416","$type":"number","scopes":["TEXT_CONTENT","GAP","WIDTH_HEIGHT"]}}');

/***/ }),

/***/ "./src/tokens/sizing/touch.tokens.json":
/*!*********************************************!*\
  !*** ./src/tokens/sizing/touch.tokens.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"icon-size":{"sm":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"base":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"md":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"lg":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl":{"$value":"64","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl2":{"$value":"96","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl3":{"$value":"128","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl4":{"$value":"256","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]},"xl5":{"$value":"512","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"]}}}');

/***/ }),

/***/ "./src/tokens/spacing/base.json":
/*!**************************************!*\
  !*** ./src/tokens/spacing/base.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"spacing":{"xs4":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs3":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs2":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"sm":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"base":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"md":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"lg":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl2":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl3":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl4":{"$value":"60","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl5":{"$value":"72","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"minor":{"xs4":{"$value":"2","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs3":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs2":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"sm":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"base":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"md":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"lg":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl2":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl3":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl4":{"$value":"56","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl5":{"$value":"68","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]}}}}');

/***/ }),

/***/ "./src/tokens/spacing/compact.json":
/*!*****************************************!*\
  !*** ./src/tokens/spacing/compact.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"spacing":{"xs4":{"$value":"2","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs3":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs2":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"sm":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"base":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"md":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"lg":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl2":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl3":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl4":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl5":{"$value":"60","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"minor":{"xs4":{"$value":"1","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs3":{"$value":"2","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs2":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"sm":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"base":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"md":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"lg":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl2":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl3":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl4":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl5":{"$value":"56","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]}}}}');

/***/ }),

/***/ "./src/tokens/spacing/large.json":
/*!***************************************!*\
  !*** ./src/tokens/spacing/large.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"spacing":{"xs4":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs3":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs2":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"sm":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"base":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"md":{"$value":"28","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"lg":{"$value":"36","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl":{"$value":"44","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl2":{"$value":"52","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl3":{"$value":"64","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl4":{"$value":"76","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl5":{"$value":"88","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"minor":{"xs4":{"$value":"2","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs3":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs2":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"sm":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"base":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"md":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"lg":{"$value":"32","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl":{"$value":"40","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl2":{"$value":"48","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl3":{"$value":"60","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl4":{"$value":"72","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl5":{"$value":"84","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]}}}}');

/***/ }),

/***/ "./src/tokens/spacing/touch.json":
/*!***************************************!*\
  !*** ./src/tokens/spacing/touch.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"spacing":{"xs4":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs3":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs2":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"sm":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"base":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"md":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"lg":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl":{"$value":"24","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"minor":{"xs4":{"$value":"2","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs3":{"$value":"4","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs2":{"$value":"6","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xs":{"$value":"8","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"sm":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"base":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"md":{"$value":"12","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"lg":{"$value":"16","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]},"xl":{"$value":"20","$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","GAP","STROKE_FLOAT"]}}}}');

/***/ }),

/***/ "./src/tokens/typography/major-second/typescale-base.json":
/*!****************************************************************!*\
  !*** ./src/tokens/typography/major-second/typescale-base.json ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"paragraph-spacing":{"display":{"$type":"number","scopes":["TEXT_CONTENT"],"$value":20},"label":{"$type":"number","scopes":["TEXT_CONTENT"],"$value":12},"paragraph":{"$type":"number","scopes":["TEXT_CONTENT"],"$value":16}},"font-size":{"xs2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":10},"xs":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":11},"sm":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":13},"base":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":15},"md":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":17},"lg":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":19},"xl":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":21},"xl2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":24},"xl3":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":27},"xl4":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":30},"xl5":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":34},"xl6":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":38},"xl7":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":43}},"line-height":{"xs2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":12},"xs":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":14},"sm":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":16},"base":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":20},"md":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":24},"lg":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":28},"xl":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":32},"xl2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":34},"xl3":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":38},"xl4":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":42},"xl5":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":48},"xl6":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":52},"xl7":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":60}}}');

/***/ }),

/***/ "./src/tokens/typography/major-second/typescale-compact.json":
/*!*******************************************************************!*\
  !*** ./src/tokens/typography/major-second/typescale-compact.json ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"paragraph-spacing":{"display":{"$type":"number","scopes":["TEXT_CONTENT"],"$value":16},"label":{"$type":"number","scopes":["TEXT_CONTENT"],"$value":8},"paragraph":{"$type":"number","scopes":["TEXT_CONTENT"],"$value":12}},"font-size":{"xs2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":9},"xs":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":10},"sm":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":11},"base":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":13},"md":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":15},"lg":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":16},"xl":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":19},"xl2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":21},"xl3":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":24},"xl4":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":27},"xl5":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":30},"xl6":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":33},"xl7":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":38}},"line-height":{"xs2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":10},"xs":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":12},"sm":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":14},"base":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":16},"md":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":20},"lg":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":24},"xl":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":24},"xl2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":26},"xl3":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":28},"xl4":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":32},"xl5":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":36},"xl6":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":40},"xl7":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":46}}}');

/***/ }),

/***/ "./src/tokens/typography/major-second/typescale-large.json":
/*!*****************************************************************!*\
  !*** ./src/tokens/typography/major-second/typescale-large.json ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"paragraph-spacing":{"display":{"$type":"number","scopes":["TEXT_CONTENT"],"$value":20},"label":{"$type":"number","scopes":["TEXT_CONTENT"],"$value":12},"paragraph":{"$type":"number","scopes":["TEXT_CONTENT"],"$value":16}},"font-size":{"xs2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":12},"xs":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":13},"sm":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":15},"base":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":17},"md":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":19},"lg":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":22},"xl":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":24},"xl2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":27},"xl3":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":31},"xl4":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":34},"xl5":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":39},"xl6":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":44},"xl7":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":49}},"line-height":{"xs2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":14},"xs":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":16},"sm":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":20},"base":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":24},"md":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":28},"lg":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":32},"xl":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":34},"xl2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":38},"xl3":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":44},"xl4":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":48},"xl5":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":56},"xl6":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":62},"xl7":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT"],"$value":68}}}');

/***/ }),

/***/ "./src/tokens/typography/major-third/typescale-base.json":
/*!***************************************************************!*\
  !*** ./src/tokens/typography/major-third/typescale-base.json ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"paragraph-spacing":{"display":{"$type":"number","scopes":["TEXT_CONTENT","PARAGRAPH_SPACING"],"$value":20},"label":{"$type":"number","scopes":["TEXT_CONTENT","PARAGRAPH_SPACING"],"$value":12},"paragraph":{"$type":"number","scopes":["TEXT_CONTENT","PARAGRAPH_SPACING"],"$value":16}},"font-size":{"xs2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":9},"xs":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":11},"sm":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":13},"base":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":15},"md":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":19},"lg":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":23},"xl":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":29},"xl2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":37},"xl3":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":46},"xl4":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":57},"xl5":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":72},"xl6":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":89},"xl7":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":112}},"line-height":{"xs2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":12},"xs":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":14},"sm":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":16},"base":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":20},"md":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":24},"lg":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":28},"xl":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":36},"xl2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":44},"xl3":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":56},"xl4":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":64},"xl5":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":80},"xl6":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":100},"xl7":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":124}}}');

/***/ }),

/***/ "./src/tokens/typography/major-third/typescale-compact.json":
/*!******************************************************************!*\
  !*** ./src/tokens/typography/major-third/typescale-compact.json ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"paragraph-spacing":{"display":{"$type":"number","scopes":["TEXT_CONTENT","PARAGRAPH_SPACING"],"$value":16},"label":{"$type":"number","scopes":["TEXT_CONTENT","PARAGRAPH_SPACING"],"$value":8},"paragraph":{"$type":"number","scopes":["TEXT_CONTENT","PARAGRAPH_SPACING"],"$value":12}},"font-size":{"xs2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":9},"xs":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":10},"sm":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":11},"base":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":13},"md":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":16},"lg":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":20},"xl":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":25},"xl2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":32},"xl3":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":40},"xl4":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":50},"xl5":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":62},"xl6":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":77},"xl7":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":97}},"line-height":{"xs2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":10},"xs":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":12},"sm":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":14},"base":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":16},"md":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":20},"lg":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":24},"xl":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":32},"xl2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":36},"xl3":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":48},"xl4":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":56},"xl5":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":64},"xl6":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":84},"xl7":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":106}}}');

/***/ }),

/***/ "./src/tokens/typography/major-third/typescale-large.json":
/*!****************************************************************!*\
  !*** ./src/tokens/typography/major-third/typescale-large.json ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"paragraph-spacing":{"display":{"$type":"number","scopes":["TEXT_CONTENT","PARAGRAPH_SPACING"],"$value":20},"label":{"$type":"number","scopes":["TEXT_CONTENT","PARAGRAPH_SPACING"],"$value":12},"paragraph":{"$type":"number","scopes":["TEXT_CONTENT","PARAGRAPH_SPACING"],"$value":16}},"font-size":{"xs2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":9},"xs":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":11},"sm":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":14},"base":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":17},"md":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":21},"lg":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":27},"xl":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":33},"xl2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":42},"xl3":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":52},"xl4":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":65},"xl5":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":81},"xl6":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":101},"xl7":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","FONT_SIZE"],"$value":127}},"line-height":{"xs2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":12},"xs":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":16},"sm":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":20},"base":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":24},"md":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":28},"lg":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":32},"xl":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":40},"xl2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":48},"xl3":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":60},"xl4":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":72},"xl5":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":88},"xl6":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":112},"xl7":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":140}}}');

/***/ }),

/***/ "./src/tokens/typography/minor-third/typescale-base.json":
/*!***************************************************************!*\
  !*** ./src/tokens/typography/minor-third/typescale-base.json ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"paragraph-spacing":{"display":{"$type":"number","scopes":["TEXT_CONTENT"],"$value":20},"label":{"$type":"number","scopes":["TEXT_CONTENT"],"$value":12},"paragraph":{"$type":"number","scopes":["TEXT_CONTENT"],"$value":16}},"font-size":{"xs2":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":10},"xs":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":11},"sm":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":13},"base":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":15},"md":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":18},"lg":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":22},"xl":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":26},"xl2":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":31},"xl3":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":37},"xl4":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":45},"xl5":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":54},"xl6":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":64},"xl7":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":77}},"line-height":{"xs2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":12},"xs":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":14},"sm":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":16},"base":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":20},"md":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":24},"lg":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":28},"xl":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":32},"xl2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":36},"xl3":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":44},"xl4":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":48},"xl5":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":60},"xl6":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":72},"xl7":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":86}}}');

/***/ }),

/***/ "./src/tokens/typography/minor-third/typescale-compact.json":
/*!******************************************************************!*\
  !*** ./src/tokens/typography/minor-third/typescale-compact.json ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"paragraph-spacing":{"display":{"$type":"number","scopes":["TEXT_CONTENT"],"$value":16},"label":{"$type":"number","scopes":["TEXT_CONTENT"],"$value":8},"paragraph":{"$type":"number","scopes":["TEXT_CONTENT"],"$value":12}},"font-size":{"xs2":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":10},"xs":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":11},"sm":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":12},"base":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":13},"md":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":16},"lg":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":19},"xl":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":22},"xl2":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":27},"xl3":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":32},"xl4":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":39},"xl5":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":47},"xl6":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":56},"xl7":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":67}},"line-height":{"xs2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":10},"xs":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":12},"sm":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":14},"base":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":16},"md":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":20},"lg":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":24},"xl":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":28},"xl2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":32},"xl3":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":40},"xl4":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":44},"xl5":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":52},"xl6":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":60},"xl7":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":78}}}');

/***/ }),

/***/ "./src/tokens/typography/minor-third/typescale-large.json":
/*!****************************************************************!*\
  !*** ./src/tokens/typography/minor-third/typescale-large.json ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"paragraph-spacing":{"display":{"$type":"number","scopes":["TEXT_CONTENT"],"$value":20},"label":{"$type":"number","scopes":["TEXT_CONTENT"],"$value":12},"paragraph":{"$type":"number","scopes":["TEXT_CONTENT"],"$value":16}},"font-size":{"xs2":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":11},"xs":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":12},"sm":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":14},"base":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":17},"md":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":20},"lg":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":24},"xl":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":29},"xl2":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":35},"xl3":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":42},"xl4":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":51},"xl5":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":61},"xl6":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":73},"xl7":{"$type":"number","scopes":["TEXT_CONTENT","FONT_SIZE"],"$value":88}},"line-height":{"xs2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":12},"xs":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":16},"sm":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":20},"base":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":24},"md":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":28},"lg":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":32},"xl":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":34},"xl2":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":40},"xl3":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":52},"xl4":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":56},"xl5":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":68},"xl6":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":80},"xl7":{"$type":"number","scopes":["TEXT_CONTENT","WIDTH_HEIGHT","LINE_HEIGHT"],"$value":96}}}');

/***/ }),

/***/ "./src/tokens/typography/styles.json":
/*!*******************************************!*\
  !*** ./src/tokens/typography/styles.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"body":{"x-small2":{"normal":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"semi-bold":{"$value":{"fontFamily":"{font-family}","fontWeight":500,"lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.semibold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family}","fontWeight":700,"lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.bold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.italic}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"UNDERLINE"},"$type":"typography"},"uppercase":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.regular}","textCase":"UPPER","textDecoration":"NONE"},"$type":"typography"},"uppercase-bold":{"$value":{"fontFamily":"{font-family}","fontWeight":700,"lineHeight":"{line-height.xs2}","fontSize":"{font-size.xs2}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.bold}","textCase":"UPPER","textDecoration":"NONE"},"$type":"typography"}},"x-small":{"normal":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"semi-bold":{"$value":{"fontFamily":"{font-family}","fontWeight":500,"lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.semibold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family}","fontWeight":700,"lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.bold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.italic}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"UNDERLINE"},"$type":"typography"},"uppercase":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.regular}","textCase":"UPPER","textDecoration":"NONE"},"$type":"typography"},"uppercase-bold":{"$value":{"fontFamily":"{font-family}","fontWeight":700,"lineHeight":"{line-height.xs}","fontSize":"{font-size.xs}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.bold}","textCase":"UPPER","textDecoration":"NONE"},"$type":"typography"}},"small":{"normal":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"semi-bold":{"$value":{"fontFamily":"{font-family}","fontWeight":500,"lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.semibold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family}","fontWeight":700,"lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.bold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.italic}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"UNDERLINE"},"$type":"typography"},"uppercase":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.regular}","textCase":"UPPER","textDecoration":"NONE"},"$type":"typography"},"uppercase-bold":{"$value":{"fontFamily":"{font-family}","fontWeight":700,"lineHeight":"{line-height.sm}","fontSize":"{font-size.sm}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.bold}","textCase":"UPPER","textDecoration":"NONE"},"$type":"typography"}},"base":{"normal":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"semi-bold":{"$value":{"fontFamily":"{font-family}","fontWeight":500,"lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.semibold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family}","fontWeight":700,"lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.bold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.italic}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"UNDERLINE"},"$type":"typography"},"uppercase":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.regular}","textCase":"UPPER","textDecoration":"NONE"},"$type":"typography"},"uppercase-bold":{"$value":{"fontFamily":"{font-family}","fontWeight":700,"lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.bold}","textCase":"UPPER","textDecoration":"NONE"},"$type":"typography"}},"medium":{"normal":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"semi-bold":{"$value":{"fontFamily":"{font-family}","fontWeight":500,"lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.semibold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family}","fontWeight":700,"lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.bold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.italic}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"UNDERLINE"},"$type":"typography"},"uppercase":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.regular}","textCase":"UPPER","textDecoration":"NONE"},"$type":"typography"},"uppercase-bold":{"$value":{"fontFamily":"{font-family}","fontWeight":700,"lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.bold}","textCase":"UPPER","textDecoration":"NONE"},"$type":"typography"}},"large":{"normal":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"semi-bold":{"$value":{"fontFamily":"{font-family}","fontWeight":500,"lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.semibold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family}","fontWeight":700,"lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.bold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.italic}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"UNDERLINE"},"$type":"typography"},"uppercase":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.regular}","textCase":"UPPER","textDecoration":"NONE"},"$type":"typography"},"uppercase-bold":{"$value":{"fontFamily":"{font-family}","fontWeight":700,"lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.bold}","textCase":"UPPER","textDecoration":"NONE"},"$type":"typography"}}},"paragraph":{"x-small2":{"normal":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.xs}","fontSize":"{font-size.xs2}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.paragraph}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family}","fontWeight":700,"lineHeight":"{line-height.xs}","fontSize":"{font-size.xs2}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.paragraph}","fontStyle":"{text-style.bold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.xs}","fontSize":"{font-size.xs2}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.paragraph}","fontStyle":"{text-style.italic}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.xs}","fontSize":"{font-size.xs2}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.paragraph}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"UNDERLINE"},"$type":"typography"}},"x-small":{"normal":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.sm}","fontSize":"{font-size.xs}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.paragraph}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family}","fontWeight":700,"lineHeight":"{line-height.sm}","fontSize":"{font-size.xs}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.paragraph}","fontStyle":"{text-style.bold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.sm}","fontSize":"{font-size.xs}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.paragraph}","fontStyle":"{text-style.italic}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.sm}","fontSize":"{font-size.xs}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.paragraph}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"UNDERLINE"},"$type":"typography"}},"small":{"normal":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.base}","fontSize":"{font-size.sm}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.paragraph}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family}","fontWeight":700,"lineHeight":"{line-height.base}","fontSize":"{font-size.sm}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.paragraph}","fontStyle":"{text-style.bold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.base}","fontSize":"{font-size.sm}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.paragraph}","fontStyle":"{text-style.italic}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.base}","fontSize":"{font-size.sm}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.paragraph}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"UNDERLINE"},"$type":"typography"}},"base":{"normal":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.md}","fontSize":"{font-size.base}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.paragraph}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family}","fontWeight":700,"lineHeight":"{line-height.md}","fontSize":"{font-size.base}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.paragraph}","fontStyle":"{text-style.bold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.md}","fontSize":"{font-size.base}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.paragraph}","fontStyle":"{text-style.italic}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.md}","fontSize":"{font-size.base}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.paragraph}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"UNDERLINE"},"$type":"typography"}},"medium":{"normal":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.lg}","fontSize":"{font-size.md}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.paragraph}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family}","fontWeight":700,"lineHeight":"{line-height.lg}","fontSize":"{font-size.md}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.paragraph}","fontStyle":"{text-style.bold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.lg}","fontSize":"{font-size.md}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.paragraph}","fontStyle":"{text-style.italic}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.lg}","fontSize":"{font-size.md}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.paragraph}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"UNDERLINE"},"$type":"typography"}},"large":{"normal":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.xl}","fontSize":"{font-size.lg}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.paragraph}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family}","fontWeight":700,"lineHeight":"{line-height.xl}","fontSize":"{font-size.lg}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.paragraph}","fontStyle":"{text-style.bold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"italic":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.xl}","fontSize":"{font-size.lg}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.paragraph}","fontStyle":"{text-style.italic}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"underline":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.xl}","fontSize":"{font-size.lg}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.paragraph}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"UNDERLINE"},"$type":"typography"}}},"heading":{"h6":{"bold":{"$value":{"fontFamily":"{font-family}","fontWeight":700,"lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.bold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.base}","fontSize":"{font-size.base}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"}},"h5":{"bold":{"$value":{"fontFamily":"{font-family}","fontWeight":700,"lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.bold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.md}","fontSize":"{font-size.md}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"}},"h4":{"bold":{"$value":{"fontFamily":"{font-family}","fontWeight":700,"lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.bold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.lg}","fontSize":"{font-size.lg}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"}},"h3":{"bold":{"$value":{"fontFamily":"{font-family}","fontWeight":700,"lineHeight":"{line-height.xl}","fontSize":"{font-size.xl}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.bold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.xl}","fontSize":"{font-size.xl}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"}},"h2":{"bold":{"$value":{"fontFamily":"{font-family}","fontWeight":700,"lineHeight":"{line-height.xl2}","fontSize":"{font-size.xl2}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.bold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.xl2}","fontSize":"{font-size.xl2}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"}},"h1":{"bold":{"$value":{"fontFamily":"{font-family}","fontWeight":700,"lineHeight":"{line-height.xl3}","fontSize":"{font-size.xl3}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.bold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.xl3}","fontSize":"{font-size.xl3}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.label}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"}}},"display":{"d1":{"light":{"$value":{"fontFamily":"{font-family}","fontWeight":300,"lineHeight":"{line-height.xl7}","fontSize":"{font-size.xl7}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.display}","fontStyle":"{text-style.light}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.xl7}","fontSize":"{font-size.xl7}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.display}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family}","fontWeight":500,"lineHeight":"{line-height.xl7}","fontSize":"{font-size.xl7}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.display}","fontStyle":"{text-style.semibold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"}},"d2":{"light":{"$value":{"fontFamily":"{font-family}","fontWeight":300,"lineHeight":"{line-height.xl6}","fontSize":"{font-size.xl6}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.display}","fontStyle":"{text-style.light}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.xl6}","fontSize":"{font-size.xl6}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.display}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family}","fontWeight":500,"lineHeight":"{line-height.xl6}","fontSize":"{font-size.xl6}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.display}","fontStyle":"{text-style.semibold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"}},"d3":{"light":{"$value":{"fontFamily":"{font-family}","fontWeight":300,"lineHeight":"{line-height.xl5}","fontSize":"{font-size.xl5}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.display}","fontStyle":"{text-style.light}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.xl5}","fontSize":"{font-size.xl5}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.display}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family}","fontWeight":500,"lineHeight":"{line-height.xl5}","fontSize":"{font-size.xl5}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.display}","fontStyle":"{text-style.semibold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"}},"d4":{"light":{"$value":{"fontFamily":"{font-family}","fontWeight":300,"lineHeight":"{line-height.xl4}","fontSize":"{font-size.xl4}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.display}","fontStyle":"{text-style.light}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"normal":{"$value":{"fontFamily":"{font-family}","fontWeight":400,"lineHeight":"{line-height.xl4}","fontSize":"{font-size.xl4}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.display}","fontStyle":"{text-style.regular}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"},"bold":{"$value":{"fontFamily":"{font-family}","fontWeight":500,"lineHeight":"{line-height.xl4}","fontSize":"{font-size.xl4}","letterSpacing":"0","paragraphSpacing":"{paragraph-spacing.display}","fontStyle":"{text-style.semibold}","textCase":"NONE","textDecoration":"NONE"},"$type":"typography"}}}}');

/***/ }),

/***/ "./src/tokens/typography/typeface.json":
/*!*********************************************!*\
  !*** ./src/tokens/typography/typeface.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"font-family":{"$value":"Inter","$type":"string","scopes":["TEXT_CONTENT","FONT_FAMILY"]},"text-style":{"light":{"$value":"Light","$type":"string","scopes":["TEXT_CONTENT","FONT_STYLE"]},"regular":{"$value":"Regular","$type":"string","scopes":["TEXT_CONTENT","FONT_STYLE"]},"semibold":{"$value":"Semi Bold","$type":"string","scopes":["TEXT_CONTENT","FONT_STYLE"]},"bold":{"$value":"Bold","$type":"string","scopes":["TEXT_CONTENT","FONT_STYLE"]},"italic":{"$value":"Italic","$type":"string","scopes":["TEXT_CONTENT","FONT_STYLE"]}}}');

/***/ }),

/***/ "./src/typography-tokens.ts":
/*!**********************************!*\
  !*** ./src/typography-tokens.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base: () => (/* binding */ base),
/* harmony export */   compact: () => (/* binding */ compact),
/* harmony export */   getFontDetails: () => (/* binding */ getFontDetails),
/* harmony export */   getTypScaleTokens: () => (/* binding */ getTypScaleTokens),
/* harmony export */   getTypographyTokens: () => (/* binding */ getTypographyTokens),
/* harmony export */   large: () => (/* binding */ large),
/* harmony export */   typeFace: () => (/* binding */ typeFace)
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
/* harmony import */ var _utils_figma_variables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/figma-variables */ "./src/utils/figma-variables.ts");
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
const typeFace = (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_11__.flattenObject)(_tokens_typography_typeface_json__WEBPACK_IMPORTED_MODULE_1__);
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
function getTypographyTokens(size, scale = "minorThird") {
    let scaleTokens = tokens[scale][size];
    return Object.assign(Object.assign(Object.assign({}, typeFace), scaleTokens), styles);
}
function getTypScaleTokens(scale = "minorThird") {
    let scaleTokens = tokens[scale];
    return scaleTokens;
}
function getFontDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield getFontDetailsTokens();
    });
}
function getFontDetailsTokens() {
    return __awaiter(this, void 0, void 0, function* () {
        const collectionName = 'Type Face';
        const collection = yield (0,_utils_figma_variables__WEBPACK_IMPORTED_MODULE_12__.findFigmaVariableCollectionByName)(collectionName);
        let names = [];
        if (collection == null) {
            const tokens = _tokens_typography_typeface_json__WEBPACK_IMPORTED_MODULE_1__;
            const family = _tokens_typography_typeface_json__WEBPACK_IMPORTED_MODULE_1__["font-family"].$value;
            for (let [name, textStyle] of Object.entries(_tokens_typography_typeface_json__WEBPACK_IMPORTED_MODULE_1__["text-style"])) {
                names.push({ family, style: textStyle.$value });
            }
        }
        else {
            let family, styles = [];
            for (const variableId of collection.variableIds) {
                const figmaVar = yield figma.variables.getVariableByIdAsync(variableId);
                const name = figmaVar.name;
                const figmaVarValue = Object.values(figmaVar.valuesByMode)[0];
                if (name.startsWith('font-family')) {
                    family = figmaVarValue;
                }
                else if (name.startsWith('text-style')) {
                    styles.push(figmaVarValue);
                }
            }
            for (const style of styles) {
                names.push({ family, style });
            }
        }
        return names;
    });
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

/***/ "./src/utils/brand-variant-template.json":
/*!***********************************************!*\
  !*** ./src/utils/brand-variant-template.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"type":"variables","collection":"Accent Color","mode":"Color","tokens":{"theme":{"light":{},"color":{"$type":"string","scopes":["ALL_SCOPES"],"$value":"color"},"dark":{}}}}');

/***/ }),

/***/ "./src/utils/clone.ts":
/*!****************************!*\
  !*** ./src/utils/clone.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   delayAsync: () => (/* binding */ delayAsync)
/* harmony export */ });
function delayAsync(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


/***/ }),

/***/ "./src/utils/figma-colors.ts":
/*!***********************************!*\
  !*** ./src/utils/figma-colors.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertFigmaColorToRgb: () => (/* binding */ convertFigmaColorToRgb),
/* harmony export */   parseColorValue: () => (/* binding */ parseColorValue)
/* harmony export */ });
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/index.js");

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
    let color = chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"].gl(r, g, b, a);
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
                color = (0,chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"])(rgbValues[0]); // hexToFigmaRGB(rgbValues[0]);
                const alpha = parseFloat(rgbValues[1]);
                color = color.alpha(alpha);
            }
            else {
                color = (0,chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input);
            }
        }
        else {
            color = (0,chroma_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input);
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


/***/ }),

/***/ "./src/utils/figma-effect-styles.ts":
/*!******************************************!*\
  !*** ./src/utils/figma-effect-styles.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertFigmaEffectStyleToToken: () => (/* binding */ convertFigmaEffectStyleToToken),
/* harmony export */   importEffectStyles: () => (/* binding */ importEffectStyles)
/* harmony export */ });
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone */ "./src/utils/clone.ts");
/* harmony import */ var _figma_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./figma-colors */ "./src/utils/figma-colors.ts");
/* harmony import */ var _figma_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./figma-variables */ "./src/utils/figma-variables.ts");
/* harmony import */ var _token_references__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-references */ "./src/utils/token-references.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




let globalDictionary;
/*
    This method reads shadow color values directly from Figma Variables
*/
function importEffectStyles(tokens, dictionary) {
    return __awaiter(this, void 0, void 0, function* () {
        if (dictionary) {
            globalDictionary = dictionary;
        }
        for (const [name, tokenData] of Object.entries(tokens)) {
            let token = tokenData;
            if (token.$type == 'effect') {
                let figmaStyle = yield getStyleByName(name);
                if (!figmaStyle) {
                    figmaStyle = figma.createEffectStyle();
                }
                const values = token.$value;
                const effects = [];
                for (const effectValue of values) {
                    const effect = yield convertEffectStyleToFigma(effectValue);
                    effects.push(effect);
                }
                figmaStyle.name = name;
                figmaStyle.effects = effects;
                figmaStyle.description = token.description || figmaStyle.description;
            }
        }
    });
}
function convertEffectStyleToFigma(value) {
    return __awaiter(this, void 0, void 0, function* () {
        const { effectTokenValue, boundProps } = yield resolveBoundValues(value);
        let effect = {
            type: effectTokenValue.type,
            radius: effectTokenValue.radius,
            visible: true
        };
        if (effectTokenValue.type == 'INNER_SHADOW' || effectTokenValue.type == 'DROP_SHADOW') {
            effect = Object.assign(effect, {
                color: figma.util.rgba(effectTokenValue.color),
                offset: {
                    x: effectTokenValue.offsetX,
                    y: effectTokenValue.offsetY
                },
                spread: effectTokenValue.spread,
                blendMode: "NORMAL"
            });
        }
        if (effectTokenValue.type == 'DROP_SHADOW') {
            effect = Object.assign(effect, {
                showShadowBehindNode: parseBoolean(effectTokenValue.showShadowBehindNode)
            });
        }
        boundProps.forEach(boundData => {
            const effectCopy = figma.variables.setBoundVariableForEffect(effect, boundData.propName, boundData.variable);
            if (effect.type == "DROP_SHADOW" || effect.type == 'INNER_SHADOW') {
                effectCopy.spread = effectTokenValue.spread;
            }
            effect = effectCopy;
        });
        return effect;
    });
}
function resolveBoundValues(effectValue) {
    return __awaiter(this, void 0, void 0, function* () {
        let copy = (0,_clone__WEBPACK_IMPORTED_MODULE_0__._clone)(effectValue);
        let boundProps = [];
        for (const prop in copy) {
            const figmaVariable = yield (0,_token_references__WEBPACK_IMPORTED_MODULE_3__.findVariableByReferences)(copy[prop]);
            if (figmaVariable) {
                boundProps.push({
                    propName: prop,
                    variable: figmaVariable
                });
                const defaultValue = yield (0,_figma_variables__WEBPACK_IMPORTED_MODULE_2__.getDefaultVariableValue)(figmaVariable);
                copy[prop] = defaultValue;
            }
            else {
                let val = (0,_token_references__WEBPACK_IMPORTED_MODULE_3__.resolveGlobalTokenValue)(copy[prop], globalDictionary || (0,_token_references__WEBPACK_IMPORTED_MODULE_3__.getGlobalTokensDictionary)());
                if (prop == 'color') {
                    val = (0,_figma_colors__WEBPACK_IMPORTED_MODULE_1__.parseColorValue)(val).rgb;
                }
                copy[prop] = val;
            }
        }
        return { effectTokenValue: copy, boundProps };
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
    if (typeof val == 'boolean') {
        return val;
    }
    return val !== "false";
}
function convertFigmaEffectStyleToToken(style, colorFormat) {
    return __awaiter(this, void 0, void 0, function* () {
        const effects = style.effects;
        const values = [];
        for (var effect of effects) {
            values.push(yield convertFigmaShadowEffectToToken(effect, colorFormat));
        }
        return values;
    });
}
function convertFigmaShadowEffectToToken(effect, colorFormat) {
    return __awaiter(this, void 0, void 0, function* () {
        let effectTokenValue = {
            "type": effect.type,
            "radius": effect.radius,
        };
        if (effect.type == "DROP_SHADOW" || effect.type == "INNER_SHADOW") {
            effectTokenValue = Object.assign(effectTokenValue, {
                "color": (0,_figma_colors__WEBPACK_IMPORTED_MODULE_1__.convertFigmaColorToRgb)(effect.color, colorFormat),
                "blendMode": effect.blendMode,
                "offsetX": effect.offset.x,
                "offsetY": effect.offset.y,
                "spread": effect.spread,
            });
        }
        if (effect.type == "DROP_SHADOW") {
            effectTokenValue = Object.assign(effectTokenValue, {
                "showShadowBehindNode": `${effect.showShadowBehindNode || false}`
            });
        }
        for (const prop in effect.boundVariables) {
            const boundVariable = effect.boundVariables[prop];
            effectTokenValue[prop] = yield (0,_figma_variables__WEBPACK_IMPORTED_MODULE_2__.getAliasName)(boundVariable.id);
        }
        return effectTokenValue;
    });
}


/***/ }),

/***/ "./src/utils/figma-library-variables.ts":
/*!**********************************************!*\
  !*** ./src/utils/figma-library-variables.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findVariableByName: () => (/* binding */ findVariableByName),
/* harmony export */   getStoreData: () => (/* binding */ getStoreData),
/* harmony export */   serialize: () => (/* binding */ serialize),
/* harmony export */   setSelectedLibrary: () => (/* binding */ setSelectedLibrary)
/* harmony export */ });
/* unused harmony exports LOCAL_LIB_NAME, getSelectedLibrary */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const store = new Map();
let selectedLibraryName;
const LOCAL_LIB_NAME = "Local variables";
function getStoreData(refresh = false) {
    return __awaiter(this, void 0, void 0, function* () {
        if (refresh === true) {
            store.clear();
        }
        const localLibraryVariables = yield collectLocalVariables();
        if (localLibraryVariables) {
            store.set(localLibraryVariables.name, localLibraryVariables.libraryVariables);
        }
        if (store.size > 1) { // which means
            return store;
        }
        // read 
        const libraryCollections = yield figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync().catch(e => {
            throw e;
        });
        yield Promise.all(libraryCollections.map((collection) => __awaiter(this, void 0, void 0, function* () {
            return yield figma.teamLibrary.getVariablesInLibraryCollectionAsync(collection.key).then((data) => {
                let variables = store.get(collection.libraryName) || [];
                variables = variables.concat(data);
                store.set(collection.libraryName, variables);
            });
        })));
        return store;
    });
}
function collectLocalVariables() {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = yield figma.variables.getLocalVariablesAsync().catch(err => {
            throw (err);
        });
        if (variables.length == 0) {
            return null;
        }
        return {
            name: LOCAL_LIB_NAME,
            libraryVariables: []
        };
        // const libraryVariables: LibraryVariable[] = variables.map(variable => {
        //     const {
        //         key, resolvedType, name
        //     } = variable;
        //     return { name, key, resolvedType };
        // })
        // if(libraryVariables.length) {
        //     return {name: LOCAL_LIB_NAME, libraryVariables}
        // }
        // else {
        //     return null;
        // }
    });
}
let importedVariablesLibrary = [];
function importLibraryVariables(libraryName) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = store.get(libraryName) || [];
        if (importedVariablesLibrary.length == 0) {
            yield Promise.all(data.map((record) => __awaiter(this, void 0, void 0, function* () {
                return yield figma.variables.importVariableByKeyAsync(record.key).then(variable => {
                    importedVariablesLibrary.push(variable);
                });
            })));
        }
        return importedVariablesLibrary;
    });
}
function serialize() {
    let result = {};
    store.forEach((value, key) => {
        result[key] = value;
    });
    return result;
}
function getSelectedLibrary() {
    return selectedLibraryName || LOCAL_LIB_NAME;
}
function setSelectedLibrary(name) {
    selectedLibraryName = name;
    return selectedLibraryName;
}
function findVariableByName(variableName) {
    return __awaiter(this, void 0, void 0, function* () {
        const libraryName = getSelectedLibrary();
        if (libraryName == LOCAL_LIB_NAME) {
            const figmaVariables = yield figma.variables.getLocalVariablesAsync();
            return figmaVariables.find(variable => variable.name === variableName);
        }
        const store = yield getStoreData();
        const variables = yield importLibraryVariables(libraryName);
        return variables.find(variable => {
            return variable.name == variableName;
        });
    });
}
function set(name, data) {
    return __awaiter(this, void 0, void 0, function* () {
        store.set(name, data);
        return store;
    });
}
function get(name) {
    return store.get(name);
}
function remove(name) {
    return __awaiter(this, void 0, void 0, function* () {
        store.delete(name);
        return store;
    });
}
function clearStore() {
    store.clear();
    return store;
}


/***/ }),

/***/ "./src/utils/figma-text-styles.ts":
/*!****************************************!*\
  !*** ./src/utils/figma-text-styles.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertFigmaTextStyleToToken: () => (/* binding */ convertFigmaTextStyleToToken),
/* harmony export */   importTextStyles: () => (/* binding */ importTextStyles)
/* harmony export */ });
/* unused harmony export convertTextStyleToFigma */
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone */ "./src/utils/clone.ts");
/* harmony import */ var _figma_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./figma-variables */ "./src/utils/figma-variables.ts");
/* harmony import */ var _token_references__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token-references */ "./src/utils/token-references.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let fontLoadStatus = [];
function preLoadFont(fontName) {
    return __awaiter(this, void 0, void 0, function* () {
        const fontNameAndStyle = `${fontName.family} ${fontName.style}`;
        if (fontLoadStatus.indexOf(fontNameAndStyle) == -1) {
            console.log(`loading ${fontNameAndStyle}`);
            yield figma.loadFontAsync(fontName).catch((reason) => {
                debugger;
            });
            fontLoadStatus.push(fontNameAndStyle);
            return true;
        }
        console.log(`already done with ${fontNameAndStyle}`);
        return false;
    });
}
function importTextStyles(tokens) {
    return __awaiter(this, void 0, void 0, function* () {
        fontLoadStatus = [];
        for (const [name, token] of Object.entries(tokens)) {
            if (token.$type != 'typography') {
                continue;
            }
            const resolved = yield parseValues(token.$value, tokens);
            const normalized = convertTextStyleToFigma(name, resolved);
            let fontName = normalized.fontName;
            yield preLoadFont(fontName);
            let textStyle = yield getStyleByName(name);
            let newStyle = false;
            if (!textStyle) {
                textStyle = figma.createTextStyle();
                newStyle = true;
            }
            // reset
            textStyle.setBoundVariable('fontStyle', null);
            textStyle.setBoundVariable('lineHeight', null);
            textStyle.setBoundVariable('fontSize', null);
            textStyle.setBoundVariable('paragraphSpacing', null);
            textStyle.setBoundVariable('fontFamily', null);
            textStyle.setBoundVariable('fontStyle', null);
            if (!newStyle) {
                fontName = (0,_clone__WEBPACK_IMPORTED_MODULE_0__._clone)(textStyle.fontName);
                yield preLoadFont(fontName);
                normalized.fontName = fontName;
            }
            try {
                Object.keys(normalized).forEach(key => {
                    textStyle[key] = normalized[key];
                });
                const lineHeightValue = token.$value.lineHeight;
                const lineHeightVariable = typeof lineHeightValue == 'string' ? yield (0,_token_references__WEBPACK_IMPORTED_MODULE_2__.findVariableByReferences)(lineHeightValue) : null;
                const fontSizeValue = token.$value.fontSize;
                const fontSizeVariable = typeof fontSizeValue == 'string' ? yield (0,_token_references__WEBPACK_IMPORTED_MODULE_2__.findVariableByReferences)(fontSizeValue) : null;
                const paragraphSpacingValue = token.$value.paragraphSpacing;
                const paragraphSpacingVariable = typeof paragraphSpacingValue == 'string' ? yield (0,_token_references__WEBPACK_IMPORTED_MODULE_2__.findVariableByReferences)(paragraphSpacingValue) : null;
                const fontFamilyValue = token.$value.fontFamily;
                const fontFamilyVariable = typeof fontFamilyValue == 'string' ? yield (0,_token_references__WEBPACK_IMPORTED_MODULE_2__.findVariableByReferences)(fontFamilyValue) : null;
                const fontStyleValue = token.$value.fontStyle;
                const fontStyleVariable = typeof fontStyleValue == 'string' ? yield (0,_token_references__WEBPACK_IMPORTED_MODULE_2__.findVariableByReferences)(fontStyleValue) : null;
                lineHeightVariable && textStyle.setBoundVariable('lineHeight', lineHeightVariable);
                fontSizeVariable && textStyle.setBoundVariable('fontSize', fontSizeVariable);
                paragraphSpacingVariable && textStyle.setBoundVariable('paragraphSpacing', paragraphSpacingVariable);
                fontFamilyVariable && textStyle.setBoundVariable('fontFamily', fontFamilyVariable);
                fontStyleVariable && textStyle.setBoundVariable('fontStyle', fontStyleVariable);
            }
            catch (e) {
                debugger;
            }
        }
    });
}
function parseValues(value, dictionary) {
    return __awaiter(this, void 0, void 0, function* () {
        let output = {};
        for (const [key, tokenReference] of Object.entries(value)) {
            const resolvedVariable = yield (0,_token_references__WEBPACK_IMPORTED_MODULE_2__.findVariableByReferences)(tokenReference);
            if (resolvedVariable) {
                output[key] = yield (0,_figma_variables__WEBPACK_IMPORTED_MODULE_1__.getDefaultVariableValue)(resolvedVariable);
            }
            else {
                const resolvedValue = (0,_token_references__WEBPACK_IMPORTED_MODULE_2__.resolveGlobalTokenValue)(tokenReference, dictionary || (0,_token_references__WEBPACK_IMPORTED_MODULE_2__.getGlobalTokensDictionary)());
                output[key] = resolvedValue;
            }
        }
        return output;
    });
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
function getLetterSpacing(value) {
    return getValueUnit(value);
}
function getValueUnit(value) {
    const stringValue = `${value}`;
    if (value === 'AUTO') {
        return {
            unit: "AUTO"
        };
    }
    if (stringValue.includes('%')) {
        return {
            unit: "PERCENT",
            value: parseFloat(stringValue)
        };
    }
    else {
        return {
            unit: "PIXELS",
            value: parseFloat(stringValue)
        };
    }
}
function convertTextStyleToFigma(name, values) {
    let textStyle = {
        'name': name,
        'fontSize': parseFloat(`${values.fontSize}`),
        'textDecoration': convertTextDecorationToFigma(values.textDecoration),
        'fontName': {
            family: values.fontFamily,
            style: values.fontStyle
        },
        'letterSpacing': getLetterSpacing(values.letterSpacing),
        'lineHeight': getValueUnit(values.lineHeight),
        'leadingTrim': "NONE",
        'paragraphIndent': 0,
        'paragraphSpacing': parseInt(`${values.paragraphSpacing}`) || 0,
        'listSpacing': parseFloat(`${values.listSpacing}`) || 0,
        'hangingPunctuation': false,
        'hangingList': false,
        'textCase': convertTextCaseToFigma(values.textCase)
    };
    return textStyle;
}
function getUnitValue(unitValue) {
    if (unitValue.unit == "AUTO") {
        return "AUTO";
    }
    if (unitValue.unit == "PERCENT") {
        return `${unitValue.value}%`;
    }
    return unitValue.value;
}
function convertFigmaTextStyleToToken(style) {
    return __awaiter(this, void 0, void 0, function* () {
        let typographyTokenValue = {
            "fontFamily": style.fontName.family,
            "lineHeight": getUnitValue(style.lineHeight),
            "fontSize": style.fontSize,
            "letterSpacing": getUnitValue(style.letterSpacing),
            "listSpacing": style.listSpacing,
            "paragraphSpacing": style.paragraphSpacing,
            "fontStyle": style.fontName.style,
            "textCase": style.textCase,
            "textDecoration": style.textDecoration,
        };
        for (const prop in style.boundVariables) {
            const boundVariable = style.boundVariables[prop];
            typographyTokenValue[prop] = yield (0,_figma_variables__WEBPACK_IMPORTED_MODULE_1__.getAliasName)(boundVariable.id);
        }
        return typographyTokenValue;
    });
}


/***/ }),

/***/ "./src/utils/figma-variables.ts":
/*!**************************************!*\
  !*** ./src/utils/figma-variables.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   designTokenAliasToFigma: () => (/* binding */ designTokenAliasToFigma),
/* harmony export */   figmaAliasToDesignTokens: () => (/* binding */ figmaAliasToDesignTokens),
/* harmony export */   findFigmaVariableByName: () => (/* binding */ findFigmaVariableByName),
/* harmony export */   findFigmaVariableCollectionByName: () => (/* binding */ findFigmaVariableCollectionByName),
/* harmony export */   getAliasName: () => (/* binding */ getAliasName),
/* harmony export */   getDefaultVariableValue: () => (/* binding */ getDefaultVariableValue),
/* harmony export */   getFigmaCollection: () => (/* binding */ getFigmaCollection),
/* harmony export */   resolveVariableType: () => (/* binding */ resolveVariableType),
/* harmony export */   setFigmaVariable: () => (/* binding */ setFigmaVariable),
/* harmony export */   variableNameToObject: () => (/* binding */ variableNameToObject)
/* harmony export */ });
/* harmony import */ var _figma_library_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./figma-library-variables */ "./src/utils/figma-library-variables.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function figmaAliasToDesignTokens(alias) {
    return alias.replace(/\//g, ".");
}
function designTokenAliasToFigma(alias) {
    return alias.replace(/\./g, "/");
}
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
        return _figma_library_variables__WEBPACK_IMPORTED_MODULE_0__.findVariableByName(variableName);
    });
}
function findFigmaVariableCollectionByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const figmaCollections = yield figma.variables.getLocalVariableCollectionsAsync();
        const collection = figmaCollections.find(collection => collection.name === name);
        return collection || null;
    });
}
function getFigmaCollection(name) {
    return __awaiter(this, void 0, void 0, function* () {
        let isNew = false;
        let collection = yield findFigmaVariableCollectionByName(name);
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
            try {
                figmaVariable.setValueForMode(modeId, value);
            }
            catch (e) {
                debugger;
            }
        }
        figmaVariable.scopes = scopes;
        if (description != null) {
            figmaVariable.description = description;
        }
        return figmaVariable;
    });
}
function getAliasName(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const variable = yield figma.variables.getVariableByIdAsync(id);
        return `{${figmaAliasToDesignTokens(variable.name)}}`;
    });
}
function variableNameToObject({ name, targetObject }) {
    let obj = targetObject;
    name.split("/").forEach((groupName) => {
        obj[groupName] = obj[groupName] || {};
        obj = obj[groupName];
    });
    return obj;
}
function getDefaultVariableValue(figmaVariable, modeId) {
    return __awaiter(this, void 0, void 0, function* () {
        const collectionID = figmaVariable.variableCollectionId;
        const collection = yield figma.variables.getVariableCollectionByIdAsync(collectionID);
        const defaultValue = figmaVariable.valuesByMode[modeId || collection.defaultModeId];
        if (defaultValue['type'] == "VARIABLE_ALIAS") {
            const variable = yield figma.variables.getVariableByIdAsync(defaultValue['id']);
            return yield getDefaultVariableValue(variable, modeId);
        }
        else {
            return defaultValue;
        }
    });
}


/***/ }),

/***/ "./src/utils/flatten-object.ts":
/*!*************************************!*\
  !*** ./src/utils/flatten-object.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/utils/merge-deep.ts":
/*!*********************************!*\
  !*** ./src/utils/merge-deep.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _mergeDeep: () => (/* binding */ _mergeDeep)
/* harmony export */ });
/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
function _mergeDeep(target, ...sources) {
    if (!sources.length)
        return target;
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key])
                    Object.assign(target, { [key]: {} });
                _mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return _mergeDeep(target, ...sources);
}


/***/ }),

/***/ "./src/utils/round-decimals.ts":
/*!*************************************!*\
  !*** ./src/utils/round-decimals.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   roundTwoDigits: () => (/* binding */ roundTwoDigits)
/* harmony export */ });
/* unused harmony export roundOneDigit */
function roundTwoDigits(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}
function roundOneDigit(num) {
    return Math.round((num + Number.EPSILON) * 10) / 10;
}


/***/ }),

/***/ "./src/utils/sort-tokens.ts":
/*!**********************************!*\
  !*** ./src/utils/sort-tokens.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    '_test',
    'primary',
    'brand',
    'fill/base',
    'fill/contrast',
    'text/black',
    'text/white',
    'text/base/600',
    'text/base/500',
    'text/base/400',
    'text/base/action',
    'text/base/primary',
    'text/base/info',
    'text/base/success',
    'text/base/warning',
    'text/base/danger',
    'text/accent/600',
    'text/accent/500',
    'text/accent/400',
    'text/contrast/600',
    'text/contrast/500',
    'text/contrast/400',
    'text/contrast/action',
    'text/contrast/primary',
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
    return getSortFn(colorNamesOrder, 'includes');
}
function getSizeTokensSortFn() {
    return getSortFn(sizeValuesOrder, 'endsWith');
}
function getAlphaNumTokensSortFn() {
    return function (a, b) {
        a.name.localeCompare(b.name, 'en', { numeric: true });
    };
    // var collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
    // return collator.compare;
}
function getSortFn(dataSet, fn = 'startsWith') {
    return function (firstEl, secondEl) {
        var resultFirst = dataSet.findIndex(item => {
            return firstEl.name[fn](item);
        });
        var resultSecond = dataSet.findIndex(item => {
            return secondEl.name[fn](item);
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

/***/ "./src/utils/text-to-title-case.ts":
/*!*****************************************!*\
  !*** ./src/utils/text-to-title-case.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toCamelCase: () => (/* binding */ toCamelCase),
/* harmony export */   toTitleCase: () => (/* binding */ toTitleCase)
/* harmony export */ });
/* unused harmony export camelToTitle */
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
function toCamelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}


/***/ }),

/***/ "./src/utils/themes-store.ts":
/*!***********************************!*\
  !*** ./src/utils/themes-store.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableCustomDarkMode: () => (/* binding */ disableCustomDarkMode),
/* harmony export */   enableCustomDarkMode: () => (/* binding */ enableCustomDarkMode),
/* harmony export */   getTheme: () => (/* binding */ getTheme),
/* harmony export */   isCustomDarkMode: () => (/* binding */ isCustomDarkMode),
/* harmony export */   load: () => (/* binding */ load),
/* harmony export */   resetDefaults: () => (/* binding */ resetDefaults),
/* harmony export */   save: () => (/* binding */ save),
/* harmony export */   setTheme: () => (/* binding */ setTheme)
/* harmony export */ });
/* unused harmony exports serialize, getStore, getSize */
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaults */ "./src/defaults.ts");

let activeTheme = 'light';
let _isCustomDarkMode = false;
const store = new Map();
function syncValues(data) {
    const sharedProps = [
        'hue',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
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
        'baseFontSize',
        'typeScale',
        'createStyles',
        'radii',
        'spacing',
        'verticalSpacing',
        'singleCollection',
        'createColorTokens',
        'createComponentTokens',
        'createTypographyTokens',
        'createSpacingTokens',
        'createElevationTokens',
        'createRadiiTokens',
        'createGlobalSizeTokens',
        'createOpacityTokens',
        'shadowsStyle',
        'shadowsSpread',
        'textBlackBrightness'
    ];
    store.forEach((params, themeKey) => {
        sharedProps.forEach(propName => {
            params[propName] = data[propName];
        });
    });
}
function setTheme(data) {
    const theme = _isCustomDarkMode ? data.theme : 'light';
    activeTheme = theme;
    if (_isCustomDarkMode === true && theme === 'dark') {
        data.theme = 'dark';
        store.set(theme, data);
    }
    else {
        data.theme = 'light';
        store.set('light', data);
    }
    syncValues(data);
}
function getTheme(theme) {
    if (_isCustomDarkMode === true && theme === 'dark') {
        return store.get('dark');
    }
    return store.get('light');
}
function serialize() {
    let result = [store.get('light')];
    if (_isCustomDarkMode === true) {
        result.push(store.get('dark'));
    }
    return result;
}
function save() {
    figma.root.setPluginData('SDS', JSON.stringify(serialize()));
}
function load() {
    const pluginDataText = figma.root.getPluginData('SDS');
    let data;
    try {
        data = JSON.parse(pluginDataText);
    }
    catch (e) {
        data = [_defaults__WEBPACK_IMPORTED_MODULE_0__.defaultSettings];
        console.info('No plugin data found, loading default');
    }
    const isArray = Array.isArray(data);
    let formData;
    activeTheme = 'light';
    if (isArray) {
        formData = [...data];
    }
    else {
        formData = [data];
    }
    _isCustomDarkMode = formData.length > 1;
    formData.forEach(params => {
        store.set(params.theme, params);
    });
}
function getStore() {
    return store;
}
function getSize() {
    return store.size;
}
function resetDefaults() {
    activeTheme = 'light';
    _isCustomDarkMode = false;
    store.clear();
    store.set('light', _defaults__WEBPACK_IMPORTED_MODULE_0__.defaultSettings);
}
function enableCustomDarkMode() {
    _isCustomDarkMode = true;
}
function disableCustomDarkMode() {
    _isCustomDarkMode = false;
}
function isCustomDarkMode() {
    return _isCustomDarkMode;
}


/***/ }),

/***/ "./src/utils/token-references.ts":
/*!***************************************!*\
  !*** ./src/utils/token-references.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToGlobalTokensDictionary: () => (/* binding */ addToGlobalTokensDictionary),
/* harmony export */   findTokenReferences: () => (/* binding */ findTokenReferences),
/* harmony export */   findVariableAlias: () => (/* binding */ findVariableAlias),
/* harmony export */   findVariableByReferences: () => (/* binding */ findVariableByReferences),
/* harmony export */   getGlobalTokensDictionary: () => (/* binding */ getGlobalTokensDictionary),
/* harmony export */   getReferenceName: () => (/* binding */ getReferenceName),
/* harmony export */   resolveAliasOrValue: () => (/* binding */ resolveAliasOrValue),
/* harmony export */   resolveGlobalTokenValue: () => (/* binding */ resolveGlobalTokenValue)
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

let globalTokens = {};
function getGlobalTokensDictionary() {
    return globalTokens;
}
function addToGlobalTokensDictionary(data) {
    globalTokens = Object.assign(Object.assign({}, globalTokens), data);
}
const aliasRegex = /\{(.+?)(.+?)\}/g;
function findTokenReferences(tokenAlias) {
    return tokenAlias === null || tokenAlias === void 0 ? void 0 : tokenAlias.toString().match(aliasRegex);
}
function getReferenceName(reference) {
    let name = reference.replace(/{/g, "");
    name = name.replace(/}/g, "");
    return name;
}
function findVariableByReferences(alias) {
    return __awaiter(this, void 0, void 0, function* () {
        let references = findTokenReferences(alias);
        let results = [];
        for (const reference of references || []) {
            let name = getReferenceName(reference);
            name = (0,_figma_variables__WEBPACK_IMPORTED_MODULE_0__.designTokenAliasToFigma)(name);
            const figmaVariable = yield (0,_figma_variables__WEBPACK_IMPORTED_MODULE_0__.findFigmaVariableByName)(name);
            if (figmaVariable) {
                results.push(figmaVariable);
            }
            else {
                console.warn(`findVariableByReferences(${alias}) call failed -> cannot find value for ${reference}`);
            }
        }
        return results[0];
    });
}
function findGlobalTokenByName(name, dictionary) {
    name = (0,_figma_variables__WEBPACK_IMPORTED_MODULE_0__.designTokenAliasToFigma)(name);
    const token = dictionary[name];
    if (name == 'grey-undefined')
        debugger;
    if (!token) {
        const msg = `Cannot find token ${name} in global disctionary:`;
        console.warn(msg, dictionary);
        // figma.notify(msg, {error: true});
        return null;
    }
    ;
    return token;
}
function resolveGlobalTokenValue(alias, dictionary) {
    let references = findTokenReferences(alias);
    let result = alias;
    references === null || references === void 0 ? void 0 : references.forEach(reference => {
        let name = getReferenceName(reference);
        const globalToken = findGlobalTokenByName(name, dictionary);
        if (globalToken) {
            result = result.replace(reference, globalToken.$value);
        }
        else {
            result = null;
        }
    });
    const check = findTokenReferences(result);
    if (check != null) {
        return resolveGlobalTokenValue(result, dictionary);
    }
    else {
        return result;
    }
}
function findVariableAlias(name) {
    return __awaiter(this, void 0, void 0, function* () {
        let referenceVar = yield findVariableByReferences(name.trim());
        if (referenceVar) {
            return {
                type: "VARIABLE_ALIAS",
                id: referenceVar.id,
            };
        }
        else {
            return null;
        }
    });
}
function resolveAliasOrValue(value, dictionary) {
    return __awaiter(this, void 0, void 0, function* () {
        let variableAlias = yield findVariableAlias(value.trim());
        if (variableAlias) {
            return variableAlias;
        }
        return resolveGlobalTokenValue(value, dictionary);
    });
}


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/* harmony import */ var _color_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-tokens */ "./src/color-tokens.ts");
/* harmony import */ var _typography_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typography-tokens */ "./src/typography-tokens.ts");
/* harmony import */ var _utils_figma_library_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/figma-library-variables */ "./src/utils/figma-library-variables.ts");
/* harmony import */ var _utils_themes_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/themes-store */ "./src/utils/themes-store.ts");
/* harmony import */ var _color_generators_render_accents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-generators/render-accents */ "./src/color-generators/render-accents.ts");
/* harmony import */ var _color_generators_neutrals_palette_generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color-generators/neutrals-palette-generator */ "./src/color-generators/neutrals-palette-generator.ts");
/* harmony import */ var _utils_token_references__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/token-references */ "./src/utils/token-references.ts");
/* harmony import */ var _import_export_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./import-export-json */ "./src/import-export-json.ts");
/* harmony import */ var _import_tokens__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./import-tokens */ "./src/import-tokens.ts");
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
figma.showUI(__html__, {
    width: 560,
    height: 720,
    themeColors: true,
});
figma.ui.onmessage = (eventData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("code received message", eventData);
    const params = eventData.params;
    if (eventData.type === "IMPORT") {
        _utils_themes_store__WEBPACK_IMPORTED_MODULE_3__.setTheme(params);
        yield (0,_import_tokens__WEBPACK_IMPORTED_MODULE_8__.initiateImport)();
        yield (0,_import_tokens__WEBPACK_IMPORTED_MODULE_8__.importAllTokens)();
    }
    else if (eventData.type === "EXPORT") {
        yield (0,_import_export_json__WEBPACK_IMPORTED_MODULE_7__.exportToJSON)(eventData.exportJSONParams, params);
        yield (0,_import_export_json__WEBPACK_IMPORTED_MODULE_7__.exportBrandVariantToJSON)(eventData.exportBrandParams, params);
    }
    else if (eventData.type === "IMPORT_JSON") {
        (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_6__.addToGlobalTokensDictionary)(Object.assign(Object.assign({}, (0,_color_tokens__WEBPACK_IMPORTED_MODULE_0__.getGlobalNeutrals)(params)), _typography_tokens__WEBPACK_IMPORTED_MODULE_1__.getTypographyTokens(params.baseFontSize, params.typeScale)));
        _utils_figma_library_variables__WEBPACK_IMPORTED_MODULE_2__.setSelectedLibrary(eventData.importJSONParams.tokenLibraryName);
        yield (0,_import_export_json__WEBPACK_IMPORTED_MODULE_7__.importFromJSON)(eventData.data, params).catch(error => {
            console.error(error);
            figma.ui.postMessage("IMPORT_COMPLETED");
            figma.notify(error, { error: true });
        });
        figma.notify(`Figma variables has been imported`);
        figma.ui.postMessage("IMPORT_COMPLETED");
    }
    else if (eventData.type === "ALERT") {
        figma.notify(`${eventData.data}`, eventData.alertParams || {});
    }
    else if (eventData.type === "RENDER_ACCENTS") {
        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
        const frameLightPalette = (0,_color_generators_render_accents__WEBPACK_IMPORTED_MODULE_4__.renderAccents)('light', params, 'Light Mode Accents');
        const frameDarkPalette = (0,_color_generators_render_accents__WEBPACK_IMPORTED_MODULE_4__.renderAccents)('dark', params, 'Dark Mode Accents');
        frameDarkPalette.y = frameLightPalette.height + 64;
    }
    else if (eventData.type === "RENDER_NEUTRALS") {
        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
        const neutralTokens = (0,_color_generators_neutrals_palette_generator__WEBPACK_IMPORTED_MODULE_5__.generateNeutrals)(params);
        (0,_color_generators_neutrals_palette_generator__WEBPACK_IMPORTED_MODULE_5__.renderNeutrals)(neutralTokens, `Global Neutrals`);
    }
    else if (eventData.type === "UPGRADE_TEXT_COLORS") {
        yield (0,_color_tokens__WEBPACK_IMPORTED_MODULE_0__.upgradeTextPalette)(params);
    }
    else if (eventData.type == 'CENTER_WINDOW') {
        let pluginWidth = 500, pluginHeight = 800, zoom = figma.viewport.zoom, centerX = Math.round(figma.viewport.center.x - (zoom / 2)) - pluginWidth / 2, centerY = Math.round(figma.viewport.center.y - (zoom / 2)) - pluginHeight / 2;
        figma.ui.reposition(centerX, centerY);
    }
    else if (eventData.type === "UI_READY") {
        const colorSystemVersion = 1; //await getColorSystemVersion();
        yield _utils_figma_library_variables__WEBPACK_IMPORTED_MODULE_2__.getStoreData();
        _utils_themes_store__WEBPACK_IMPORTED_MODULE_3__.load();
        figma.ui.postMessage({
            type: "REFRESH_UI",
            data: {
                colorSystemVersion,
                customDarkMode: _utils_themes_store__WEBPACK_IMPORTED_MODULE_3__.isCustomDarkMode(),
                params: _utils_themes_store__WEBPACK_IMPORTED_MODULE_3__.getTheme('light'),
                tokenLibraries: _utils_figma_library_variables__WEBPACK_IMPORTED_MODULE_2__.serialize()
            }
        });
    }
    else if (eventData.type == 'UPDATE') {
        _utils_themes_store__WEBPACK_IMPORTED_MODULE_3__.setTheme(params);
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
    else if (eventData.type == 'RESET') {
        _utils_themes_store__WEBPACK_IMPORTED_MODULE_3__.resetDefaults();
        figma.ui.postMessage({
            type: "REFRESH_UI",
            data: {
                colorSystemVersion: 1,
                customDarkMode: _utils_themes_store__WEBPACK_IMPORTED_MODULE_3__.isCustomDarkMode(),
                params: _utils_themes_store__WEBPACK_IMPORTED_MODULE_3__.getTheme("light"),
                tokenLibraries: _utils_figma_library_variables__WEBPACK_IMPORTED_MODULE_2__.serialize()
            }
        });
    }
    else if (eventData.type == 'UPDATE_ACTIVE_THEME') {
        const selectedThemeData = _utils_themes_store__WEBPACK_IMPORTED_MODULE_3__.getTheme(params.theme);
        selectedThemeData.theme = params.theme;
        figma.ui.postMessage({
            type: "REFRESH_UI",
            data: {
                colorSystemVersion: 1,
                params: selectedThemeData,
                customDarkMode: _utils_themes_store__WEBPACK_IMPORTED_MODULE_3__.isCustomDarkMode(),
                tokenLibraries: _utils_figma_library_variables__WEBPACK_IMPORTED_MODULE_2__.serialize()
            }
        });
    }
    else if (eventData.type == 'ENABLE_CUSTOM_DARK_MODE') {
        _utils_themes_store__WEBPACK_IMPORTED_MODULE_3__.enableCustomDarkMode();
        figma.ui.postMessage({
            type: "REFRESH_UI",
            data: {
                colorSystemVersion: 1,
                params: params,
                customDarkMode: _utils_themes_store__WEBPACK_IMPORTED_MODULE_3__.isCustomDarkMode(),
                tokenLibraries: _utils_figma_library_variables__WEBPACK_IMPORTED_MODULE_2__.serialize()
            }
        });
    }
    else if (eventData.type == 'DISABLE_CUSTOM_DARK_MODE') {
        _utils_themes_store__WEBPACK_IMPORTED_MODULE_3__.disableCustomDarkMode();
        figma.ui.postMessage({
            type: "REFRESH_UI",
            data: {
                colorSystemVersion: 1,
                params: Object.assign(Object.assign({}, _utils_themes_store__WEBPACK_IMPORTED_MODULE_3__.getTheme('light')), { theme: params.theme }),
                customDarkMode: _utils_themes_store__WEBPACK_IMPORTED_MODULE_3__.isCustomDarkMode(),
                tokenLibraries: _utils_figma_library_variables__WEBPACK_IMPORTED_MODULE_2__.serialize()
            }
        });
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ25LVTtBQUNhOztBQUU3QyxRQUFRLGlDQUFpQzs7QUFFekMsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUNBQW1DLGlEQUFLO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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TztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IscURBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLGtEQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixzREFBTTtBQUMzQjtBQUNBLFVBQVU7QUFDVjtBQUNB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Q3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlFQUEyQjtBQUMzRCx3QkFBd0IseURBQW1CO0FBQzNDLGdDQUFnQyxxRUFBZ0I7QUFDaEQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQVEseURBQW1CO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQXdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlFQUEyQjtBQUMzRCx3QkFBd0IseURBQW1CO0FBQzNDLGdDQUFnQyxxRUFBZ0I7QUFDaEQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGtDQUFrQyx5REFBbUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlFQUEyQjtBQUMzRCxnQ0FBZ0MscUVBQWdCO0FBQ2hEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLHFFQUErQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlFQUEyQjtBQUMzRCxnQ0FBZ0MscUVBQWdCO0FBQ2hEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLHNFQUFnQztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxFQUFFLHlEQUFtQixjQUFjLHFCQUFxQjtBQUM5RyxnQ0FBZ0MsaUVBQTJCO0FBQzNELGdDQUFnQyxxRUFBZ0I7QUFDaEQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL0NvbG9yLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9jaHJvbWEuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2NvbG9ycy9jb2xvcmJyZXdlci5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvY29sb3JzL3czY3gxMS5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvZ2VuZXJhdG9yL2F2ZXJhZ2UuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2dlbmVyYXRvci9iZXppZXIuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2dlbmVyYXRvci9ibGVuZC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvZ2VuZXJhdG9yL2N1YmVoZWxpeC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvZ2VuZXJhdG9yL21peC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvZ2VuZXJhdG9yL3JhbmRvbS5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvZ2VuZXJhdG9yL3NjYWxlLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pbnRlcnBvbGF0b3IvX2hzeC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW50ZXJwb2xhdG9yL2hjZy5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW50ZXJwb2xhdG9yL2hzaS5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW50ZXJwb2xhdG9yL2hzbC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW50ZXJwb2xhdG9yL2hzdi5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW50ZXJwb2xhdG9yL2luZGV4LmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pbnRlcnBvbGF0b3IvbGFiLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pbnRlcnBvbGF0b3IvbGNoLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pbnRlcnBvbGF0b3IvbHJnYi5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW50ZXJwb2xhdG9yL251bS5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW50ZXJwb2xhdG9yL29rbGFiLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pbnRlcnBvbGF0b3Ivb2tsY2guanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2ludGVycG9sYXRvci9yZ2IuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2NteWsvY215azJyZ2IuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2NteWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2NteWsvcmdiMmNteWsuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2Nzcy9jc3MycmdiLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9jc3MvaHNsMmNzcy5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vY3NzL2luZGV4LmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9jc3MvbGFiMmNzcy5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vY3NzL2xjaDJjc3MuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2Nzcy9va2xhYjJjc3MuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2Nzcy9va2xjaDJjc3MuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2Nzcy9yZ2IyY3NzLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9nbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vaGNnL2hjZzJyZ2IuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2hjZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vaGNnL3JnYjJoY2cuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2hleC9oZXgycmdiLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9oZXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2hleC9yZ2IyaGV4LmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9oc2kvaHNpMnJnYi5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vaHNpL2luZGV4LmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9oc2kvcmdiMmhzaS5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vaHNsL2hzbDJyZ2IuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2hzbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vaHNsL3JnYjJoc2wuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2hzdi9oc3YycmdiLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9oc3YvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2hzdi9yZ2IyaHN2LmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9pbnB1dC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vbGFiL2luZGV4LmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9sYWIvbGFiLWNvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vbGFiL2xhYjJyZ2IuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2xhYi9yZ2IybGFiLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9sY2gvaGNsMnJnYi5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vbGNoL2luZGV4LmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9sY2gvbGFiMmxjaC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vbGNoL2xjaDJsYWIuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2xjaC9sY2gycmdiLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9sY2gvcmdiMmxjaC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vbmFtZWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL251bS9pbmRleC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vbnVtL251bTJyZ2IuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL251bS9yZ2IybnVtLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9va2xhYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vb2tsYWIvb2tsYWIycmdiLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9va2xhYi9yZ2Iyb2tsYWIuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL29rbGNoL2luZGV4LmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9va2xjaC9va2xjaDJyZ2IuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL29rbGNoL3JnYjJva2xjaC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vcmdiL2luZGV4LmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby90ZW1wL2luZGV4LmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby90ZW1wL3JnYjJ0ZW1wZXJhdHVyZS5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vdGVtcC90ZW1wZXJhdHVyZTJyZ2IuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL29wcy9hbHBoYS5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvb3BzL2NsaXBwZWQuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL29wcy9kYXJrZW4uanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL29wcy9nZXQuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL29wcy9sdW1pbmFuY2UuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL29wcy9taXguanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL29wcy9wcmVtdWx0aXBseS5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvb3BzL3NhdHVyYXRlLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9vcHMvc2V0LmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9vcHMvc2hhZGUuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL3V0aWxzL2FuYWx5emUuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL3V0aWxzL2NsaXBfcmdiLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy91dGlscy9jb250cmFzdC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvdXRpbHMvY29udHJhc3RBUENBLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy91dGlscy9kZWx0YS1lLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy91dGlscy9kaXN0YW5jZS5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL3V0aWxzL2xhc3QuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL3V0aWxzL2xpbWl0LmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy91dGlscy9tdWx0aXBseS1tYXRyaWNlcy5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvdXRpbHMvc2NhbGVzLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy91dGlscy90eXBlLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy91dGlscy91bnBhY2suanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL3V0aWxzL3ZhbGlkLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy92ZXJzaW9uLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvY29sb3ItZ2VuZXJhdG9ycy9hY2NlbnQtcGFsZXR0ZS1nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy9jb2xvci1nZW5lcmF0b3JzL25ldXRyYWxzLXBhbGV0dGUtZ2VuZXJhdG9yLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvY29sb3ItZ2VuZXJhdG9ycy9yZW5kZXItYWNjZW50cy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL2NvbG9yLWdlbmVyYXRvcnMvc3dhdGNoZXMtZ2VuZXJhdG9yLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvY29sb3ItdG9rZW5zLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvZGVmYXVsdHMudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy9lZmZlY3QtdG9rZW5zLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvaW1wb3J0LWV4cG9ydC1qc29uLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvaW1wb3J0LXRva2Vucy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL29wYWNpdHktdG9rZW5zLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvcmFkaWktdG9rZW5zLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvc2l6aW5nLXRva2Vucy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3NwYWNpbmctdG9rZW5zLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdHlwb2dyYXBoeS10b2tlbnMudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy9jbG9uZS50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3V0aWxzL2RlbGF5LWFzeW5jLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvZmlnbWEtY29sb3JzLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvZmlnbWEtZWZmZWN0LXN0eWxlcy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3V0aWxzL2ZpZ21hLWxpYnJhcnktdmFyaWFibGVzLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvZmlnbWEtdGV4dC1zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy9maWdtYS12YXJpYWJsZXMudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy9mbGF0dGVuLW9iamVjdC50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3V0aWxzL21lcmdlLWRlZXAudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy9yb3VuZC1kZWNpbWFscy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3V0aWxzL3NvcnQtdG9rZW5zLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvdGV4dC10by10aXRsZS1jYXNlLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvdGhlbWVzLXN0b3JlLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvdG9rZW4tcmVmZXJlbmNlcy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZlZWwgZnJlZSB0byBjb21tZW50IG91dCBhbnl0aGluZyB0byByb2xsdXBcbi8vIGEgc21hbGxlciBjaHJvbWEuanMgYnVuZGxlXG5pbXBvcnQgY2hyb21hIGZyb20gJy4vc3JjL2Nocm9tYS5qcyc7XG5cbi8vIGlvIC0tPiBjb252ZXJ0IGNvbG9yc1xuaW1wb3J0ICcuL3NyYy9pby9uYW1lZC9pbmRleC5qcyc7XG5cbi8vIG9wZXJhdG9ycyAtLT4gbW9kaWZ5IGV4aXN0aW5nIENvbG9yc1xuaW1wb3J0ICcuL3NyYy9vcHMvYWxwaGEuanMnO1xuaW1wb3J0ICcuL3NyYy9vcHMvY2xpcHBlZC5qcyc7XG5pbXBvcnQgJy4vc3JjL29wcy9kYXJrZW4uanMnO1xuaW1wb3J0ICcuL3NyYy9vcHMvZ2V0LmpzJztcbmltcG9ydCAnLi9zcmMvb3BzL2x1bWluYW5jZS5qcyc7XG5pbXBvcnQgJy4vc3JjL29wcy9taXguanMnO1xuaW1wb3J0ICcuL3NyYy9vcHMvcHJlbXVsdGlwbHkuanMnO1xuaW1wb3J0ICcuL3NyYy9vcHMvc2F0dXJhdGUuanMnO1xuaW1wb3J0ICcuL3NyYy9vcHMvc2V0LmpzJztcbmltcG9ydCAnLi9zcmMvb3BzL3NoYWRlLmpzJztcblxuLy8gaW50ZXJwb2xhdG9yc1xuaW1wb3J0ICcuL3NyYy9pbnRlcnBvbGF0b3IvcmdiLmpzJztcbmltcG9ydCAnLi9zcmMvaW50ZXJwb2xhdG9yL2xyZ2IuanMnO1xuaW1wb3J0ICcuL3NyYy9pbnRlcnBvbGF0b3IvbGFiLmpzJztcbmltcG9ydCAnLi9zcmMvaW50ZXJwb2xhdG9yL2xjaC5qcyc7XG5pbXBvcnQgJy4vc3JjL2ludGVycG9sYXRvci9udW0uanMnO1xuaW1wb3J0ICcuL3NyYy9pbnRlcnBvbGF0b3IvaGNnLmpzJztcbmltcG9ydCAnLi9zcmMvaW50ZXJwb2xhdG9yL2hzaS5qcyc7XG5pbXBvcnQgJy4vc3JjL2ludGVycG9sYXRvci9oc2wuanMnO1xuaW1wb3J0ICcuL3NyYy9pbnRlcnBvbGF0b3IvaHN2LmpzJztcbmltcG9ydCAnLi9zcmMvaW50ZXJwb2xhdG9yL29rbGFiLmpzJztcbmltcG9ydCAnLi9zcmMvaW50ZXJwb2xhdG9yL29rbGNoLmpzJztcblxuLy8gZ2VuZXJhdG9ycyAtLSA+IGNyZWF0ZSBuZXcgY29sb3JzXG5pbXBvcnQgYXZlcmFnZSBmcm9tICcuL3NyYy9nZW5lcmF0b3IvYXZlcmFnZS5qcyc7XG5pbXBvcnQgYmV6aWVyIGZyb20gJy4vc3JjL2dlbmVyYXRvci9iZXppZXIuanMnO1xuaW1wb3J0IGJsZW5kIGZyb20gJy4vc3JjL2dlbmVyYXRvci9ibGVuZC5qcyc7XG5pbXBvcnQgY3ViZWhlbGl4IGZyb20gJy4vc3JjL2dlbmVyYXRvci9jdWJlaGVsaXguanMnO1xuaW1wb3J0IG1peCBmcm9tICcuL3NyYy9nZW5lcmF0b3IvbWl4LmpzJztcbmltcG9ydCByYW5kb20gZnJvbSAnLi9zcmMvZ2VuZXJhdG9yL3JhbmRvbS5qcyc7XG5pbXBvcnQgc2NhbGUgZnJvbSAnLi9zcmMvZ2VuZXJhdG9yL3NjYWxlLmpzJztcblxuLy8gb3RoZXIgdXRpbGl0eSBtZXRob2RzXG5pbXBvcnQgeyBhbmFseXplIH0gZnJvbSAnLi9zcmMvdXRpbHMvYW5hbHl6ZS5qcyc7XG5pbXBvcnQgY29udHJhc3QgZnJvbSAnLi9zcmMvdXRpbHMvY29udHJhc3QuanMnO1xuaW1wb3J0IGNvbnRyYXN0QVBDQSBmcm9tICcuL3NyYy91dGlscy9jb250cmFzdEFQQ0EuanMnO1xuaW1wb3J0IGRlbHRhRSBmcm9tICcuL3NyYy91dGlscy9kZWx0YS1lLmpzJztcbmltcG9ydCBkaXN0YW5jZSBmcm9tICcuL3NyYy91dGlscy9kaXN0YW5jZS5qcyc7XG5pbXBvcnQgeyBsaW1pdHMgfSBmcm9tICcuL3NyYy91dGlscy9hbmFseXplLmpzJztcbmltcG9ydCB2YWxpZCBmcm9tICcuL3NyYy91dGlscy92YWxpZC5qcyc7XG5pbXBvcnQgaW5wdXQgZnJvbSAnLi9zcmMvaW8vaW5wdXQuanMnO1xuXG4vLyBzY2FsZVxuaW1wb3J0IHNjYWxlcyBmcm9tICcuL3NyYy91dGlscy9zY2FsZXMuanMnO1xuXG4vLyBjb2xvcnNcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi9zcmMvY29sb3JzL3czY3gxMS5qcyc7XG5pbXBvcnQgYnJld2VyIGZyb20gJy4vc3JjL2NvbG9ycy9jb2xvcmJyZXdlci5qcyc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnLi9zcmMvQ29sb3IuanMnO1xuXG5PYmplY3QuYXNzaWduKGNocm9tYSwge1xuICAgIGFuYWx5emUsXG4gICAgYXZlcmFnZSxcbiAgICBiZXppZXIsXG4gICAgYmxlbmQsXG4gICAgYnJld2VyLFxuICAgIENvbG9yLFxuICAgIGNvbG9ycyxcbiAgICBjb250cmFzdCxcbiAgICBjb250cmFzdEFQQ0EsXG4gICAgY3ViZWhlbGl4LFxuICAgIGRlbHRhRSxcbiAgICBkaXN0YW5jZSxcbiAgICBpbnB1dCxcbiAgICBpbnRlcnBvbGF0ZTogbWl4LFxuICAgIGxpbWl0cyxcbiAgICBtaXgsXG4gICAgcmFuZG9tLFxuICAgIHNjYWxlLFxuICAgIHNjYWxlcyxcbiAgICB2YWxpZFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNocm9tYTtcblxuZXhwb3J0IHtcbiAgICBhbmFseXplLFxuICAgIGF2ZXJhZ2UsXG4gICAgYmV6aWVyLFxuICAgIGJsZW5kLFxuICAgIGJyZXdlcixcbiAgICBDb2xvcixcbiAgICBjb2xvcnMsXG4gICAgY29udHJhc3QsXG4gICAgY29udHJhc3RBUENBLFxuICAgIGN1YmVoZWxpeCxcbiAgICBkZWx0YUUsXG4gICAgZGlzdGFuY2UsXG4gICAgaW5wdXQsXG4gICAgbGltaXRzLFxuICAgIG1peCxcbiAgICBtaXggYXMgaW50ZXJwb2xhdGUsXG4gICAgcmFuZG9tLFxuICAgIHNjYWxlLFxuICAgIHNjYWxlcyxcbiAgICB2YWxpZFxufTtcblxuZXhwb3J0ICogZnJvbSAnLi9zcmMvaW8vY215ay9pbmRleC5qcyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9pby9jc3MvaW5kZXguanMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvaW8vZ2wvaW5kZXguanMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvaW8vaGNnL2luZGV4LmpzJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2lvL2hleC9pbmRleC5qcyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9pby9oc2kvaW5kZXguanMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvaW8vaHNsL2luZGV4LmpzJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2lvL2hzdi9pbmRleC5qcyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9pby9sYWIvaW5kZXguanMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvaW8vbGNoL2luZGV4LmpzJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2lvL251bS9pbmRleC5qcyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9pby9yZ2IvaW5kZXguanMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvaW8vdGVtcC9pbmRleC5qcyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9pby9va2xhYi9pbmRleC5qcyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9pby9va2xjaC9pbmRleC5qcyc7XG4iLCJpbXBvcnQgeyBsYXN0LCBjbGlwX3JnYiwgdHlwZSB9IGZyb20gJy4vdXRpbHMvaW5kZXguanMnO1xuaW1wb3J0IF9pbnB1dCBmcm9tICcuL2lvL2lucHV0LmpzJztcblxuY2xhc3MgQ29sb3Ige1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlKGFyZ3NbMF0pID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgYXJnc1swXS5jb25zdHJ1Y3RvciAmJlxuICAgICAgICAgICAgYXJnc1swXS5jb25zdHJ1Y3RvciA9PT0gdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIHRoZSBhcmd1bWVudCBpcyBhbHJlYWR5IGEgQ29sb3IgaW5zdGFuY2VcbiAgICAgICAgICAgIHJldHVybiBhcmdzWzBdO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxhc3QgYXJndW1lbnQgY291bGQgYmUgdGhlIG1vZGVcbiAgICAgICAgbGV0IG1vZGUgPSBsYXN0KGFyZ3MpO1xuICAgICAgICBsZXQgYXV0b2RldGVjdCA9IGZhbHNlO1xuICAgICAgICBpZiAoIW1vZGUpIHtcbiAgICAgICAgICAgIGF1dG9kZXRlY3QgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoIV9pbnB1dC5zb3J0ZWQpIHtcbiAgICAgICAgICAgICAgICBfaW5wdXQuYXV0b2RldGVjdCA9IF9pbnB1dC5hdXRvZGV0ZWN0LnNvcnQoKGEsIGIpID0+IGIucCAtIGEucCk7XG4gICAgICAgICAgICAgICAgX2lucHV0LnNvcnRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGF1dG8tZGV0ZWN0IGZvcm1hdFxuICAgICAgICAgICAgZm9yIChsZXQgY2hrIG9mIF9pbnB1dC5hdXRvZGV0ZWN0KSB7XG4gICAgICAgICAgICAgICAgbW9kZSA9IGNoay50ZXN0KC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIGlmIChtb2RlKSBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoX2lucHV0LmZvcm1hdFttb2RlXSkge1xuICAgICAgICAgICAgY29uc3QgcmdiID0gX2lucHV0LmZvcm1hdFttb2RlXS5hcHBseShcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIGF1dG9kZXRlY3QgPyBhcmdzIDogYXJncy5zbGljZSgwLCAtMSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtZS5fcmdiID0gY2xpcF9yZ2IocmdiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBmb3JtYXQ6ICcgKyBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBhZGQgYWxwaGEgY2hhbm5lbFxuICAgICAgICBpZiAobWUuX3JnYi5sZW5ndGggPT09IDMpIG1lLl9yZ2IucHVzaCgxKTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGlmICh0eXBlKHRoaXMuaGV4KSA9PSAnZnVuY3Rpb24nKSByZXR1cm4gdGhpcy5oZXgoKTtcbiAgICAgICAgcmV0dXJuIGBbJHt0aGlzLl9yZ2Iuam9pbignLCcpfV1gO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvbG9yO1xuIiwiaW1wb3J0IENvbG9yIGZyb20gJy4vQ29sb3IuanMnO1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4vdmVyc2lvbi5qcyc7XG5cbmNvbnN0IGNocm9tYSA9ICguLi5hcmdzKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBDb2xvciguLi5hcmdzKTtcbn07XG5cbmNocm9tYS52ZXJzaW9uID0gdmVyc2lvbjtcblxuZXhwb3J0IGRlZmF1bHQgY2hyb21hO1xuIiwiLyoqXG4gICAgQ29sb3JCcmV3ZXIgY29sb3JzIGZvciBjaHJvbWEuanNcblxuICAgIENvcHlyaWdodCAoYykgMjAwMiBDeW50aGlhIEJyZXdlciwgTWFyayBIYXJyb3dlciwgYW5kIFRoZVxuICAgIFBlbm5zeWx2YW5pYSBTdGF0ZSBVbml2ZXJzaXR5LlxuXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkXG4gICAgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1JcbiAgICBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICAgIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5jb25zdCBjb2xvcmJyZXdlciA9IHtcbiAgICAvLyBzZXF1ZW50aWFsXG4gICAgT3JSZDogWycjZmZmN2VjJywgJyNmZWU4YzgnLCAnI2ZkZDQ5ZScsICcjZmRiYjg0JywgJyNmYzhkNTknLCAnI2VmNjU0OCcsICcjZDczMDFmJywgJyNiMzAwMDAnLCAnIzdmMDAwMCddLFxuICAgIFB1QnU6IFsnI2ZmZjdmYicsICcjZWNlN2YyJywgJyNkMGQxZTYnLCAnI2E2YmRkYicsICcjNzRhOWNmJywgJyMzNjkwYzAnLCAnIzA1NzBiMCcsICcjMDQ1YThkJywgJyMwMjM4NTgnXSxcbiAgICBCdVB1OiBbJyNmN2ZjZmQnLCAnI2UwZWNmNCcsICcjYmZkM2U2JywgJyM5ZWJjZGEnLCAnIzhjOTZjNicsICcjOGM2YmIxJywgJyM4ODQxOWQnLCAnIzgxMGY3YycsICcjNGQwMDRiJ10sXG4gICAgT3JhbmdlczogWycjZmZmNWViJywgJyNmZWU2Y2UnLCAnI2ZkZDBhMicsICcjZmRhZTZiJywgJyNmZDhkM2MnLCAnI2YxNjkxMycsICcjZDk0ODAxJywgJyNhNjM2MDMnLCAnIzdmMjcwNCddLFxuICAgIEJ1R246IFsnI2Y3ZmNmZCcsICcjZTVmNWY5JywgJyNjY2VjZTYnLCAnIzk5ZDhjOScsICcjNjZjMmE0JywgJyM0MWFlNzYnLCAnIzIzOGI0NScsICcjMDA2ZDJjJywgJyMwMDQ0MWInXSxcbiAgICBZbE9yQnI6IFsnI2ZmZmZlNScsICcjZmZmN2JjJywgJyNmZWUzOTEnLCAnI2ZlYzQ0ZicsICcjZmU5OTI5JywgJyNlYzcwMTQnLCAnI2NjNGMwMicsICcjOTkzNDA0JywgJyM2NjI1MDYnXSxcbiAgICBZbEduOiBbJyNmZmZmZTUnLCAnI2Y3ZmNiOScsICcjZDlmMGEzJywgJyNhZGRkOGUnLCAnIzc4YzY3OScsICcjNDFhYjVkJywgJyMyMzg0NDMnLCAnIzAwNjgzNycsICcjMDA0NTI5J10sXG4gICAgUmVkczogWycjZmZmNWYwJywgJyNmZWUwZDInLCAnI2ZjYmJhMScsICcjZmM5MjcyJywgJyNmYjZhNGEnLCAnI2VmM2IyYycsICcjY2IxODFkJywgJyNhNTBmMTUnLCAnIzY3MDAwZCddLFxuICAgIFJkUHU6IFsnI2ZmZjdmMycsICcjZmRlMGRkJywgJyNmY2M1YzAnLCAnI2ZhOWZiNScsICcjZjc2OGExJywgJyNkZDM0OTcnLCAnI2FlMDE3ZScsICcjN2EwMTc3JywgJyM0OTAwNmEnXSxcbiAgICBHcmVlbnM6IFsnI2Y3ZmNmNScsICcjZTVmNWUwJywgJyNjN2U5YzAnLCAnI2ExZDk5YicsICcjNzRjNDc2JywgJyM0MWFiNWQnLCAnIzIzOGI0NScsICcjMDA2ZDJjJywgJyMwMDQ0MWInXSxcbiAgICBZbEduQnU6IFsnI2ZmZmZkOScsICcjZWRmOGIxJywgJyNjN2U5YjQnLCAnIzdmY2RiYicsICcjNDFiNmM0JywgJyMxZDkxYzAnLCAnIzIyNWVhOCcsICcjMjUzNDk0JywgJyMwODFkNTgnXSxcbiAgICBQdXJwbGVzOiBbJyNmY2ZiZmQnLCAnI2VmZWRmNScsICcjZGFkYWViJywgJyNiY2JkZGMnLCAnIzllOWFjOCcsICcjODA3ZGJhJywgJyM2YTUxYTMnLCAnIzU0Mjc4ZicsICcjM2YwMDdkJ10sXG4gICAgR25CdTogWycjZjdmY2YwJywgJyNlMGYzZGInLCAnI2NjZWJjNScsICcjYThkZGI1JywgJyM3YmNjYzQnLCAnIzRlYjNkMycsICcjMmI4Y2JlJywgJyMwODY4YWMnLCAnIzA4NDA4MSddLFxuICAgIEdyZXlzOiBbJyNmZmZmZmYnLCAnI2YwZjBmMCcsICcjZDlkOWQ5JywgJyNiZGJkYmQnLCAnIzk2OTY5NicsICcjNzM3MzczJywgJyM1MjUyNTInLCAnIzI1MjUyNScsICcjMDAwMDAwJ10sXG4gICAgWWxPclJkOiBbJyNmZmZmY2MnLCAnI2ZmZWRhMCcsICcjZmVkOTc2JywgJyNmZWIyNGMnLCAnI2ZkOGQzYycsICcjZmM0ZTJhJywgJyNlMzFhMWMnLCAnI2JkMDAyNicsICcjODAwMDI2J10sXG4gICAgUHVSZDogWycjZjdmNGY5JywgJyNlN2UxZWYnLCAnI2Q0YjlkYScsICcjYzk5NGM3JywgJyNkZjY1YjAnLCAnI2U3Mjk4YScsICcjY2UxMjU2JywgJyM5ODAwNDMnLCAnIzY3MDAxZiddLFxuICAgIEJsdWVzOiBbJyNmN2ZiZmYnLCAnI2RlZWJmNycsICcjYzZkYmVmJywgJyM5ZWNhZTEnLCAnIzZiYWVkNicsICcjNDI5MmM2JywgJyMyMTcxYjUnLCAnIzA4NTE5YycsICcjMDgzMDZiJ10sXG4gICAgUHVCdUduOiBbJyNmZmY3ZmInLCAnI2VjZTJmMCcsICcjZDBkMWU2JywgJyNhNmJkZGInLCAnIzY3YTljZicsICcjMzY5MGMwJywgJyMwMjgxOGEnLCAnIzAxNmM1OScsICcjMDE0NjM2J10sXG4gICAgVmlyaWRpczogWycjNDQwMTU0JywgJyM0ODI3NzcnLCAnIzNmNGE4YScsICcjMzE2NzhlJywgJyMyNjgzOGYnLCAnIzFmOWQ4YScsICcjNmNjZTVhJywgJyNiNmRlMmInLCAnI2ZlZTgyNSddLFxuXG4gICAgLy8gZGl2ZXJnaW5nXG4gICAgU3BlY3RyYWw6IFsnIzllMDE0MicsICcjZDUzZTRmJywgJyNmNDZkNDMnLCAnI2ZkYWU2MScsICcjZmVlMDhiJywgJyNmZmZmYmYnLCAnI2U2ZjU5OCcsICcjYWJkZGE0JywgJyM2NmMyYTUnLCAnIzMyODhiZCcsICcjNWU0ZmEyJ10sXG4gICAgUmRZbEduOiBbJyNhNTAwMjYnLCAnI2Q3MzAyNycsICcjZjQ2ZDQzJywgJyNmZGFlNjEnLCAnI2ZlZTA4YicsICcjZmZmZmJmJywgJyNkOWVmOGInLCAnI2E2ZDk2YScsICcjNjZiZDYzJywgJyMxYTk4NTAnLCAnIzAwNjgzNyddLFxuICAgIFJkQnU6IFsnIzY3MDAxZicsICcjYjIxODJiJywgJyNkNjYwNGQnLCAnI2Y0YTU4MicsICcjZmRkYmM3JywgJyNmN2Y3ZjcnLCAnI2QxZTVmMCcsICcjOTJjNWRlJywgJyM0MzkzYzMnLCAnIzIxNjZhYycsICcjMDUzMDYxJ10sXG4gICAgUGlZRzogWycjOGUwMTUyJywgJyNjNTFiN2QnLCAnI2RlNzdhZScsICcjZjFiNmRhJywgJyNmZGUwZWYnLCAnI2Y3ZjdmNycsICcjZTZmNWQwJywgJyNiOGUxODYnLCAnIzdmYmM0MScsICcjNGQ5MjIxJywgJyMyNzY0MTknXSxcbiAgICBQUkduOiBbJyM0MDAwNGInLCAnIzc2MmE4MycsICcjOTk3MGFiJywgJyNjMmE1Y2YnLCAnI2U3ZDRlOCcsICcjZjdmN2Y3JywgJyNkOWYwZDMnLCAnI2E2ZGJhMCcsICcjNWFhZTYxJywgJyMxYjc4MzcnLCAnIzAwNDQxYiddLFxuICAgIFJkWWxCdTogWycjYTUwMDI2JywgJyNkNzMwMjcnLCAnI2Y0NmQ0MycsICcjZmRhZTYxJywgJyNmZWUwOTAnLCAnI2ZmZmZiZicsICcjZTBmM2Y4JywgJyNhYmQ5ZTknLCAnIzc0YWRkMScsICcjNDU3NWI0JywgJyMzMTM2OTUnXSxcbiAgICBCckJHOiBbJyM1NDMwMDUnLCAnIzhjNTEwYScsICcjYmY4MTJkJywgJyNkZmMyN2QnLCAnI2Y2ZThjMycsICcjZjVmNWY1JywgJyNjN2VhZTUnLCAnIzgwY2RjMScsICcjMzU5NzhmJywgJyMwMTY2NWUnLCAnIzAwM2MzMCddLFxuICAgIFJkR3k6IFsnIzY3MDAxZicsICcjYjIxODJiJywgJyNkNjYwNGQnLCAnI2Y0YTU4MicsICcjZmRkYmM3JywgJyNmZmZmZmYnLCAnI2UwZTBlMCcsICcjYmFiYWJhJywgJyM4Nzg3ODcnLCAnIzRkNGQ0ZCcsICcjMWExYTFhJ10sXG4gICAgUHVPcjogWycjN2YzYjA4JywgJyNiMzU4MDYnLCAnI2UwODIxNCcsICcjZmRiODYzJywgJyNmZWUwYjYnLCAnI2Y3ZjdmNycsICcjZDhkYWViJywgJyNiMmFiZDInLCAnIzgwNzNhYycsICcjNTQyNzg4JywgJyMyZDAwNGInXSxcblxuICAgIC8vIHF1YWxpdGF0aXZlXG4gICAgU2V0MjogWycjNjZjMmE1JywgJyNmYzhkNjInLCAnIzhkYTBjYicsICcjZTc4YWMzJywgJyNhNmQ4NTQnLCAnI2ZmZDkyZicsICcjZTVjNDk0JywgJyNiM2IzYjMnXSxcbiAgICBBY2NlbnQ6IFsnIzdmYzk3ZicsICcjYmVhZWQ0JywgJyNmZGMwODYnLCAnI2ZmZmY5OScsICcjMzg2Y2IwJywgJyNmMDAyN2YnLCAnI2JmNWIxNycsICcjNjY2NjY2J10sXG4gICAgU2V0MTogWycjZTQxYTFjJywgJyMzNzdlYjgnLCAnIzRkYWY0YScsICcjOTg0ZWEzJywgJyNmZjdmMDAnLCAnI2ZmZmYzMycsICcjYTY1NjI4JywgJyNmNzgxYmYnLCAnIzk5OTk5OSddLFxuICAgIFNldDM6IFsnIzhkZDNjNycsICcjZmZmZmIzJywgJyNiZWJhZGEnLCAnI2ZiODA3MicsICcjODBiMWQzJywgJyNmZGI0NjInLCAnI2IzZGU2OScsICcjZmNjZGU1JywgJyNkOWQ5ZDknLCAnI2JjODBiZCcsICcjY2NlYmM1JywgJyNmZmVkNmYnXSxcbiAgICBEYXJrMjogWycjMWI5ZTc3JywgJyNkOTVmMDInLCAnIzc1NzBiMycsICcjZTcyOThhJywgJyM2NmE2MWUnLCAnI2U2YWIwMicsICcjYTY3NjFkJywgJyM2NjY2NjYnXSxcbiAgICBQYWlyZWQ6IFsnI2E2Y2VlMycsICcjMWY3OGI0JywgJyNiMmRmOGEnLCAnIzMzYTAyYycsICcjZmI5YTk5JywgJyNlMzFhMWMnLCAnI2ZkYmY2ZicsICcjZmY3ZjAwJywgJyNjYWIyZDYnLCAnIzZhM2Q5YScsICcjZmZmZjk5JywgJyNiMTU5MjgnXSxcbiAgICBQYXN0ZWwyOiBbJyNiM2UyY2QnLCAnI2ZkY2RhYycsICcjY2JkNWU4JywgJyNmNGNhZTQnLCAnI2U2ZjVjOScsICcjZmZmMmFlJywgJyNmMWUyY2MnLCAnI2NjY2NjYyddLFxuICAgIFBhc3RlbDE6IFsnI2ZiYjRhZScsICcjYjNjZGUzJywgJyNjY2ViYzUnLCAnI2RlY2JlNCcsICcjZmVkOWE2JywgJyNmZmZmY2MnLCAnI2U1ZDhiZCcsICcjZmRkYWVjJywgJyNmMmYyZjInXVxufTtcblxuY29uc3QgY29sb3JicmV3ZXJUeXBlcyA9IE9iamVjdC5rZXlzKGNvbG9yYnJld2VyKTtcbmNvbnN0IHR5cGVNYXAgPSBuZXcgTWFwKGNvbG9yYnJld2VyVHlwZXMubWFwKChrZXkpID0+IFtrZXkudG9Mb3dlckNhc2UoKSwga2V5XSkpO1xuXG4vLyB1c2UgUHJveHkgdG8gYWxsb3cgY2FzZS1pbnNlbnNpdGl2ZSBhY2Nlc3MgdG8gcGFsZXR0ZXNcbmNvbnN0IGNvbG9yYnJld2VyUHJveHkgPVxuICAgIHR5cGVvZiBQcm94eSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IG5ldyBQcm94eShjb2xvcmJyZXdlciwge1xuICAgICAgICAgICAgICBnZXQodGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBsb3dlciA9IHByb3AudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlTWFwLmhhcyhsb3dlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3R5cGVNYXAuZ2V0KGxvd2VyKV07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGdldE93blByb3BlcnR5TmFtZXMoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY29sb3JicmV3ZXJUeXBlcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IGNvbG9yYnJld2VyO1xuXG5leHBvcnQgZGVmYXVsdCBjb2xvcmJyZXdlclByb3h5O1xuIiwiLyoqXG5cdFgxMSBjb2xvciBuYW1lc1xuXG5cdGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtY29sb3IvI3N2Zy1jb2xvclxuKi9cblxuY29uc3QgdzNjeDExID0ge1xuICAgIGFsaWNlYmx1ZTogJyNmMGY4ZmYnLFxuICAgIGFudGlxdWV3aGl0ZTogJyNmYWViZDcnLFxuICAgIGFxdWE6ICcjMDBmZmZmJyxcbiAgICBhcXVhbWFyaW5lOiAnIzdmZmZkNCcsXG4gICAgYXp1cmU6ICcjZjBmZmZmJyxcbiAgICBiZWlnZTogJyNmNWY1ZGMnLFxuICAgIGJpc3F1ZTogJyNmZmU0YzQnLFxuICAgIGJsYWNrOiAnIzAwMDAwMCcsXG4gICAgYmxhbmNoZWRhbG1vbmQ6ICcjZmZlYmNkJyxcbiAgICBibHVlOiAnIzAwMDBmZicsXG4gICAgYmx1ZXZpb2xldDogJyM4YTJiZTInLFxuICAgIGJyb3duOiAnI2E1MmEyYScsXG4gICAgYnVybHl3b29kOiAnI2RlYjg4NycsXG4gICAgY2FkZXRibHVlOiAnIzVmOWVhMCcsXG4gICAgY2hhcnRyZXVzZTogJyM3ZmZmMDAnLFxuICAgIGNob2NvbGF0ZTogJyNkMjY5MWUnLFxuICAgIGNvcmFsOiAnI2ZmN2Y1MCcsXG4gICAgY29ybmZsb3dlcmJsdWU6ICcjNjQ5NWVkJyxcbiAgICBjb3Juc2lsazogJyNmZmY4ZGMnLFxuICAgIGNyaW1zb246ICcjZGMxNDNjJyxcbiAgICBjeWFuOiAnIzAwZmZmZicsXG4gICAgZGFya2JsdWU6ICcjMDAwMDhiJyxcbiAgICBkYXJrY3lhbjogJyMwMDhiOGInLFxuICAgIGRhcmtnb2xkZW5yb2Q6ICcjYjg4NjBiJyxcbiAgICBkYXJrZ3JheTogJyNhOWE5YTknLFxuICAgIGRhcmtncmVlbjogJyMwMDY0MDAnLFxuICAgIGRhcmtncmV5OiAnI2E5YTlhOScsXG4gICAgZGFya2toYWtpOiAnI2JkYjc2YicsXG4gICAgZGFya21hZ2VudGE6ICcjOGIwMDhiJyxcbiAgICBkYXJrb2xpdmVncmVlbjogJyM1NTZiMmYnLFxuICAgIGRhcmtvcmFuZ2U6ICcjZmY4YzAwJyxcbiAgICBkYXJrb3JjaGlkOiAnIzk5MzJjYycsXG4gICAgZGFya3JlZDogJyM4YjAwMDAnLFxuICAgIGRhcmtzYWxtb246ICcjZTk5NjdhJyxcbiAgICBkYXJrc2VhZ3JlZW46ICcjOGZiYzhmJyxcbiAgICBkYXJrc2xhdGVibHVlOiAnIzQ4M2Q4YicsXG4gICAgZGFya3NsYXRlZ3JheTogJyMyZjRmNGYnLFxuICAgIGRhcmtzbGF0ZWdyZXk6ICcjMmY0ZjRmJyxcbiAgICBkYXJrdHVycXVvaXNlOiAnIzAwY2VkMScsXG4gICAgZGFya3Zpb2xldDogJyM5NDAwZDMnLFxuICAgIGRlZXBwaW5rOiAnI2ZmMTQ5MycsXG4gICAgZGVlcHNreWJsdWU6ICcjMDBiZmZmJyxcbiAgICBkaW1ncmF5OiAnIzY5Njk2OScsXG4gICAgZGltZ3JleTogJyM2OTY5NjknLFxuICAgIGRvZGdlcmJsdWU6ICcjMWU5MGZmJyxcbiAgICBmaXJlYnJpY2s6ICcjYjIyMjIyJyxcbiAgICBmbG9yYWx3aGl0ZTogJyNmZmZhZjAnLFxuICAgIGZvcmVzdGdyZWVuOiAnIzIyOGIyMicsXG4gICAgZnVjaHNpYTogJyNmZjAwZmYnLFxuICAgIGdhaW5zYm9ybzogJyNkY2RjZGMnLFxuICAgIGdob3N0d2hpdGU6ICcjZjhmOGZmJyxcbiAgICBnb2xkOiAnI2ZmZDcwMCcsXG4gICAgZ29sZGVucm9kOiAnI2RhYTUyMCcsXG4gICAgZ3JheTogJyM4MDgwODAnLFxuICAgIGdyZWVuOiAnIzAwODAwMCcsXG4gICAgZ3JlZW55ZWxsb3c6ICcjYWRmZjJmJyxcbiAgICBncmV5OiAnIzgwODA4MCcsXG4gICAgaG9uZXlkZXc6ICcjZjBmZmYwJyxcbiAgICBob3RwaW5rOiAnI2ZmNjliNCcsXG4gICAgaW5kaWFucmVkOiAnI2NkNWM1YycsXG4gICAgaW5kaWdvOiAnIzRiMDA4MicsXG4gICAgaXZvcnk6ICcjZmZmZmYwJyxcbiAgICBraGFraTogJyNmMGU2OGMnLFxuICAgIGxhc2VybGVtb246ICcjZmZmZjU0JyxcbiAgICBsYXZlbmRlcjogJyNlNmU2ZmEnLFxuICAgIGxhdmVuZGVyYmx1c2g6ICcjZmZmMGY1JyxcbiAgICBsYXduZ3JlZW46ICcjN2NmYzAwJyxcbiAgICBsZW1vbmNoaWZmb246ICcjZmZmYWNkJyxcbiAgICBsaWdodGJsdWU6ICcjYWRkOGU2JyxcbiAgICBsaWdodGNvcmFsOiAnI2YwODA4MCcsXG4gICAgbGlnaHRjeWFuOiAnI2UwZmZmZicsXG4gICAgbGlnaHRnb2xkZW5yb2Q6ICcjZmFmYWQyJyxcbiAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogJyNmYWZhZDInLFxuICAgIGxpZ2h0Z3JheTogJyNkM2QzZDMnLFxuICAgIGxpZ2h0Z3JlZW46ICcjOTBlZTkwJyxcbiAgICBsaWdodGdyZXk6ICcjZDNkM2QzJyxcbiAgICBsaWdodHBpbms6ICcjZmZiNmMxJyxcbiAgICBsaWdodHNhbG1vbjogJyNmZmEwN2EnLFxuICAgIGxpZ2h0c2VhZ3JlZW46ICcjMjBiMmFhJyxcbiAgICBsaWdodHNreWJsdWU6ICcjODdjZWZhJyxcbiAgICBsaWdodHNsYXRlZ3JheTogJyM3Nzg4OTknLFxuICAgIGxpZ2h0c2xhdGVncmV5OiAnIzc3ODg5OScsXG4gICAgbGlnaHRzdGVlbGJsdWU6ICcjYjBjNGRlJyxcbiAgICBsaWdodHllbGxvdzogJyNmZmZmZTAnLFxuICAgIGxpbWU6ICcjMDBmZjAwJyxcbiAgICBsaW1lZ3JlZW46ICcjMzJjZDMyJyxcbiAgICBsaW5lbjogJyNmYWYwZTYnLFxuICAgIG1hZ2VudGE6ICcjZmYwMGZmJyxcbiAgICBtYXJvb246ICcjODAwMDAwJyxcbiAgICBtYXJvb24yOiAnIzdmMDAwMCcsXG4gICAgbWFyb29uMzogJyNiMDMwNjAnLFxuICAgIG1lZGl1bWFxdWFtYXJpbmU6ICcjNjZjZGFhJyxcbiAgICBtZWRpdW1ibHVlOiAnIzAwMDBjZCcsXG4gICAgbWVkaXVtb3JjaGlkOiAnI2JhNTVkMycsXG4gICAgbWVkaXVtcHVycGxlOiAnIzkzNzBkYicsXG4gICAgbWVkaXVtc2VhZ3JlZW46ICcjM2NiMzcxJyxcbiAgICBtZWRpdW1zbGF0ZWJsdWU6ICcjN2I2OGVlJyxcbiAgICBtZWRpdW1zcHJpbmdncmVlbjogJyMwMGZhOWEnLFxuICAgIG1lZGl1bXR1cnF1b2lzZTogJyM0OGQxY2MnLFxuICAgIG1lZGl1bXZpb2xldHJlZDogJyNjNzE1ODUnLFxuICAgIG1pZG5pZ2h0Ymx1ZTogJyMxOTE5NzAnLFxuICAgIG1pbnRjcmVhbTogJyNmNWZmZmEnLFxuICAgIG1pc3R5cm9zZTogJyNmZmU0ZTEnLFxuICAgIG1vY2Nhc2luOiAnI2ZmZTRiNScsXG4gICAgbmF2YWpvd2hpdGU6ICcjZmZkZWFkJyxcbiAgICBuYXZ5OiAnIzAwMDA4MCcsXG4gICAgb2xkbGFjZTogJyNmZGY1ZTYnLFxuICAgIG9saXZlOiAnIzgwODAwMCcsXG4gICAgb2xpdmVkcmFiOiAnIzZiOGUyMycsXG4gICAgb3JhbmdlOiAnI2ZmYTUwMCcsXG4gICAgb3JhbmdlcmVkOiAnI2ZmNDUwMCcsXG4gICAgb3JjaGlkOiAnI2RhNzBkNicsXG4gICAgcGFsZWdvbGRlbnJvZDogJyNlZWU4YWEnLFxuICAgIHBhbGVncmVlbjogJyM5OGZiOTgnLFxuICAgIHBhbGV0dXJxdW9pc2U6ICcjYWZlZWVlJyxcbiAgICBwYWxldmlvbGV0cmVkOiAnI2RiNzA5MycsXG4gICAgcGFwYXlhd2hpcDogJyNmZmVmZDUnLFxuICAgIHBlYWNocHVmZjogJyNmZmRhYjknLFxuICAgIHBlcnU6ICcjY2Q4NTNmJyxcbiAgICBwaW5rOiAnI2ZmYzBjYicsXG4gICAgcGx1bTogJyNkZGEwZGQnLFxuICAgIHBvd2RlcmJsdWU6ICcjYjBlMGU2JyxcbiAgICBwdXJwbGU6ICcjODAwMDgwJyxcbiAgICBwdXJwbGUyOiAnIzdmMDA3ZicsXG4gICAgcHVycGxlMzogJyNhMDIwZjAnLFxuICAgIHJlYmVjY2FwdXJwbGU6ICcjNjYzMzk5JyxcbiAgICByZWQ6ICcjZmYwMDAwJyxcbiAgICByb3N5YnJvd246ICcjYmM4ZjhmJyxcbiAgICByb3lhbGJsdWU6ICcjNDE2OWUxJyxcbiAgICBzYWRkbGVicm93bjogJyM4YjQ1MTMnLFxuICAgIHNhbG1vbjogJyNmYTgwNzInLFxuICAgIHNhbmR5YnJvd246ICcjZjRhNDYwJyxcbiAgICBzZWFncmVlbjogJyMyZThiNTcnLFxuICAgIHNlYXNoZWxsOiAnI2ZmZjVlZScsXG4gICAgc2llbm5hOiAnI2EwNTIyZCcsXG4gICAgc2lsdmVyOiAnI2MwYzBjMCcsXG4gICAgc2t5Ymx1ZTogJyM4N2NlZWInLFxuICAgIHNsYXRlYmx1ZTogJyM2YTVhY2QnLFxuICAgIHNsYXRlZ3JheTogJyM3MDgwOTAnLFxuICAgIHNsYXRlZ3JleTogJyM3MDgwOTAnLFxuICAgIHNub3c6ICcjZmZmYWZhJyxcbiAgICBzcHJpbmdncmVlbjogJyMwMGZmN2YnLFxuICAgIHN0ZWVsYmx1ZTogJyM0NjgyYjQnLFxuICAgIHRhbjogJyNkMmI0OGMnLFxuICAgIHRlYWw6ICcjMDA4MDgwJyxcbiAgICB0aGlzdGxlOiAnI2Q4YmZkOCcsXG4gICAgdG9tYXRvOiAnI2ZmNjM0NycsXG4gICAgdHVycXVvaXNlOiAnIzQwZTBkMCcsXG4gICAgdmlvbGV0OiAnI2VlODJlZScsXG4gICAgd2hlYXQ6ICcjZjVkZWIzJyxcbiAgICB3aGl0ZTogJyNmZmZmZmYnLFxuICAgIHdoaXRlc21va2U6ICcjZjVmNWY1JyxcbiAgICB5ZWxsb3c6ICcjZmZmZjAwJyxcbiAgICB5ZWxsb3dncmVlbjogJyM5YWNkMzInXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3M2N4MTE7XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSAnLi4vQ29sb3IuanMnO1xuaW1wb3J0IHsgY2xpcF9yZ2IgfSBmcm9tICcuLi91dGlscy9pbmRleC5qcyc7XG5cbmNvbnN0IHsgcG93LCBzcXJ0LCBQSSwgY29zLCBzaW4sIGF0YW4yIH0gPSBNYXRoO1xuXG5leHBvcnQgZGVmYXVsdCAoY29sb3JzLCBtb2RlID0gJ2xyZ2InLCB3ZWlnaHRzID0gbnVsbCkgPT4ge1xuICAgIGNvbnN0IGwgPSBjb2xvcnMubGVuZ3RoO1xuICAgIGlmICghd2VpZ2h0cykgd2VpZ2h0cyA9IEFycmF5LmZyb20obmV3IEFycmF5KGwpKS5tYXAoKCkgPT4gMSk7XG4gICAgLy8gbm9ybWFsaXplIHdlaWdodHNcbiAgICBjb25zdCBrID1cbiAgICAgICAgbCAvXG4gICAgICAgIHdlaWdodHMucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgICAgIH0pO1xuICAgIHdlaWdodHMuZm9yRWFjaCgodywgaSkgPT4ge1xuICAgICAgICB3ZWlnaHRzW2ldICo9IGs7XG4gICAgfSk7XG4gICAgLy8gY29udmVydCBjb2xvcnMgdG8gQ29sb3Igb2JqZWN0c1xuICAgIGNvbG9ycyA9IGNvbG9ycy5tYXAoKGMpID0+IG5ldyBDb2xvcihjKSk7XG4gICAgaWYgKG1vZGUgPT09ICdscmdiJykge1xuICAgICAgICByZXR1cm4gX2F2ZXJhZ2VfbHJnYihjb2xvcnMsIHdlaWdodHMpO1xuICAgIH1cbiAgICBjb25zdCBmaXJzdCA9IGNvbG9ycy5zaGlmdCgpO1xuICAgIGNvbnN0IHh5eiA9IGZpcnN0LmdldChtb2RlKTtcbiAgICBjb25zdCBjbnQgPSBbXTtcbiAgICBsZXQgZHggPSAwO1xuICAgIGxldCBkeSA9IDA7XG4gICAgLy8gaW5pdGlhbCBjb2xvclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeHl6Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHh5eltpXSA9ICh4eXpbaV0gfHwgMCkgKiB3ZWlnaHRzWzBdO1xuICAgICAgICBjbnQucHVzaChpc05hTih4eXpbaV0pID8gMCA6IHdlaWdodHNbMF0pO1xuICAgICAgICBpZiAobW9kZS5jaGFyQXQoaSkgPT09ICdoJyAmJiAhaXNOYU4oeHl6W2ldKSkge1xuICAgICAgICAgICAgY29uc3QgQSA9ICh4eXpbaV0gLyAxODApICogUEk7XG4gICAgICAgICAgICBkeCArPSBjb3MoQSkgKiB3ZWlnaHRzWzBdO1xuICAgICAgICAgICAgZHkgKz0gc2luKEEpICogd2VpZ2h0c1swXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhbHBoYSA9IGZpcnN0LmFscGhhKCkgKiB3ZWlnaHRzWzBdO1xuICAgIGNvbG9ycy5mb3JFYWNoKChjLCBjaSkgPT4ge1xuICAgICAgICBjb25zdCB4eXoyID0gYy5nZXQobW9kZSk7XG4gICAgICAgIGFscGhhICs9IGMuYWxwaGEoKSAqIHdlaWdodHNbY2kgKyAxXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB4eXoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghaXNOYU4oeHl6MltpXSkpIHtcbiAgICAgICAgICAgICAgICBjbnRbaV0gKz0gd2VpZ2h0c1tjaSArIDFdO1xuICAgICAgICAgICAgICAgIGlmIChtb2RlLmNoYXJBdChpKSA9PT0gJ2gnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IEEgPSAoeHl6MltpXSAvIDE4MCkgKiBQSTtcbiAgICAgICAgICAgICAgICAgICAgZHggKz0gY29zKEEpICogd2VpZ2h0c1tjaSArIDFdO1xuICAgICAgICAgICAgICAgICAgICBkeSArPSBzaW4oQSkgKiB3ZWlnaHRzW2NpICsgMV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgeHl6W2ldICs9IHh5ejJbaV0gKiB3ZWlnaHRzW2NpICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHh5ei5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobW9kZS5jaGFyQXQoaSkgPT09ICdoJykge1xuICAgICAgICAgICAgbGV0IEEgPSAoYXRhbjIoZHkgLyBjbnRbaV0sIGR4IC8gY250W2ldKSAvIFBJKSAqIDE4MDtcbiAgICAgICAgICAgIHdoaWxlIChBIDwgMCkgQSArPSAzNjA7XG4gICAgICAgICAgICB3aGlsZSAoQSA+PSAzNjApIEEgLT0gMzYwO1xuICAgICAgICAgICAgeHl6W2ldID0gQTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHh5eltpXSA9IHh5eltpXSAvIGNudFtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhbHBoYSAvPSBsO1xuICAgIHJldHVybiBuZXcgQ29sb3IoeHl6LCBtb2RlKS5hbHBoYShhbHBoYSA+IDAuOTk5OTkgPyAxIDogYWxwaGEsIHRydWUpO1xufTtcblxuY29uc3QgX2F2ZXJhZ2VfbHJnYiA9IChjb2xvcnMsIHdlaWdodHMpID0+IHtcbiAgICBjb25zdCBsID0gY29sb3JzLmxlbmd0aDtcbiAgICBjb25zdCB4eXogPSBbMCwgMCwgMCwgMF07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29sID0gY29sb3JzW2ldO1xuICAgICAgICBjb25zdCBmID0gd2VpZ2h0c1tpXSAvIGw7XG4gICAgICAgIGNvbnN0IHJnYiA9IGNvbC5fcmdiO1xuICAgICAgICB4eXpbMF0gKz0gcG93KHJnYlswXSwgMikgKiBmO1xuICAgICAgICB4eXpbMV0gKz0gcG93KHJnYlsxXSwgMikgKiBmO1xuICAgICAgICB4eXpbMl0gKz0gcG93KHJnYlsyXSwgMikgKiBmO1xuICAgICAgICB4eXpbM10gKz0gcmdiWzNdICogZjtcbiAgICB9XG4gICAgeHl6WzBdID0gc3FydCh4eXpbMF0pO1xuICAgIHh5elsxXSA9IHNxcnQoeHl6WzFdKTtcbiAgICB4eXpbMl0gPSBzcXJ0KHh5elsyXSk7XG4gICAgaWYgKHh5elszXSA+IDAuOTk5OTk5OSkgeHl6WzNdID0gMTtcbiAgICByZXR1cm4gbmV3IENvbG9yKGNsaXBfcmdiKHh5eikpO1xufTtcbiIsIi8vXG4vLyBpbnRlcnBvbGF0ZXMgYmV0d2VlbiBhIHNldCBvZiBjb2xvcnMgdXppbmcgYSBiZXppZXIgc3BsaW5lXG4vL1xuXG4vLyBAcmVxdWlyZXMgdXRpbHMgbGFiXG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vQ29sb3IuanMnO1xuaW1wb3J0ICcuLi9pby9sYWIvaW5kZXguanMnO1xuaW1wb3J0IHNjYWxlIGZyb20gJy4vc2NhbGUuanMnO1xuXG4vLyBudGggcm93IG9mIHRoZSBwYXNjYWwgdHJpYW5nbGVcbmNvbnN0IGJpbm9tX3JvdyA9IGZ1bmN0aW9uIChuKSB7XG4gICAgbGV0IHJvdyA9IFsxLCAxXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG47IGkrKykge1xuICAgICAgICBsZXQgbmV3cm93ID0gWzFdO1xuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSByb3cubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIG5ld3Jvd1tqXSA9IChyb3dbal0gfHwgMCkgKyByb3dbaiAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIHJvdyA9IG5ld3JvdztcbiAgICB9XG4gICAgcmV0dXJuIHJvdztcbn07XG5cbmNvbnN0IGJlemllciA9IGZ1bmN0aW9uIChjb2xvcnMpIHtcbiAgICBsZXQgSSwgbGFiMCwgbGFiMSwgbGFiMjtcbiAgICBjb2xvcnMgPSBjb2xvcnMubWFwKChjKSA9PiBuZXcgQ29sb3IoYykpO1xuICAgIGlmIChjb2xvcnMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIC8vIGxpbmVhciBpbnRlcnBvbGF0aW9uXG4gICAgICAgIFtsYWIwLCBsYWIxXSA9IGNvbG9ycy5tYXAoKGMpID0+IGMubGFiKCkpO1xuICAgICAgICBJID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhYiA9IFswLCAxLCAyXS5tYXAoKGkpID0+IGxhYjBbaV0gKyB0ICogKGxhYjFbaV0gLSBsYWIwW2ldKSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKGxhYiwgJ2xhYicpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoY29sb3JzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAvLyBxdWFkcmF0aWMgYmV6aWVyIGludGVycG9sYXRpb25cbiAgICAgICAgW2xhYjAsIGxhYjEsIGxhYjJdID0gY29sb3JzLm1hcCgoYykgPT4gYy5sYWIoKSk7XG4gICAgICAgIEkgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgY29uc3QgbGFiID0gWzAsIDEsIDJdLm1hcChcbiAgICAgICAgICAgICAgICAoaSkgPT5cbiAgICAgICAgICAgICAgICAgICAgKDEgLSB0KSAqICgxIC0gdCkgKiBsYWIwW2ldICtcbiAgICAgICAgICAgICAgICAgICAgMiAqICgxIC0gdCkgKiB0ICogbGFiMVtpXSArXG4gICAgICAgICAgICAgICAgICAgIHQgKiB0ICogbGFiMltpXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IobGFiLCAnbGFiJyk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChjb2xvcnMubGVuZ3RoID09PSA0KSB7XG4gICAgICAgIC8vIGN1YmljIGJlemllciBpbnRlcnBvbGF0aW9uXG4gICAgICAgIGxldCBsYWIzO1xuICAgICAgICBbbGFiMCwgbGFiMSwgbGFiMiwgbGFiM10gPSBjb2xvcnMubWFwKChjKSA9PiBjLmxhYigpKTtcbiAgICAgICAgSSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICBjb25zdCBsYWIgPSBbMCwgMSwgMl0ubWFwKFxuICAgICAgICAgICAgICAgIChpKSA9PlxuICAgICAgICAgICAgICAgICAgICAoMSAtIHQpICogKDEgLSB0KSAqICgxIC0gdCkgKiBsYWIwW2ldICtcbiAgICAgICAgICAgICAgICAgICAgMyAqICgxIC0gdCkgKiAoMSAtIHQpICogdCAqIGxhYjFbaV0gK1xuICAgICAgICAgICAgICAgICAgICAzICogKDEgLSB0KSAqIHQgKiB0ICogbGFiMltpXSArXG4gICAgICAgICAgICAgICAgICAgIHQgKiB0ICogdCAqIGxhYjNbaV1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKGxhYiwgJ2xhYicpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoY29sb3JzLmxlbmd0aCA+PSA1KSB7XG4gICAgICAgIC8vIGdlbmVyYWwgY2FzZSAoZGVncmVlIG4gYmV6aWVyKVxuICAgICAgICBsZXQgbGFicywgcm93LCBuO1xuICAgICAgICBsYWJzID0gY29sb3JzLm1hcCgoYykgPT4gYy5sYWIoKSk7XG4gICAgICAgIG4gPSBjb2xvcnMubGVuZ3RoIC0gMTtcbiAgICAgICAgcm93ID0gYmlub21fcm93KG4pO1xuICAgICAgICBJID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIGNvbnN0IHUgPSAxIC0gdDtcbiAgICAgICAgICAgIGNvbnN0IGxhYiA9IFswLCAxLCAyXS5tYXAoKGkpID0+XG4gICAgICAgICAgICAgICAgbGFicy5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgICAgIChzdW0sIGVsLCBqKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgc3VtICsgcm93W2pdICogdSAqKiAobiAtIGopICogdCAqKiBqICogZWxbaV0sXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihsYWIsICdsYWInKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignTm8gcG9pbnQgaW4gcnVubmluZyBiZXppZXIgd2l0aCBvbmx5IG9uZSBjb2xvci4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoY29sb3JzKSA9PiB7XG4gICAgY29uc3QgZiA9IGJlemllcihjb2xvcnMpO1xuICAgIGYuc2NhbGUgPSAoKSA9PiBzY2FsZShmKTtcbiAgICByZXR1cm4gZjtcbn07XG4iLCIvKlxuICogaW50ZXJwb2xhdGVzIGJldHdlZW4gYSBzZXQgb2YgY29sb3JzIHV6aW5nIGEgYmV6aWVyIHNwbGluZVxuICogYmxlbmQgbW9kZSBmb3JtdWxhcyB0YWtlbiBmcm9tIGh0dHBzOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDE4MDExMDAxNDk0Ni9odHRwOi8vd3d3LnZlbnR1cmUtd2FyZS5jb20va2V2aW4vY29kaW5nL2xldHMtbGVhcm4tbWF0aC1waG90b3Nob3AtYmxlbmQtbW9kZXMvXG4gKi9cblxuaW1wb3J0ICcuLi9pby9yZ2IvaW5kZXguanMnO1xuaW1wb3J0IGNocm9tYSBmcm9tICcuLi9jaHJvbWEuanMnO1xuXG5jb25zdCBibGVuZCA9IChib3R0b20sIHRvcCwgbW9kZSkgPT4ge1xuICAgIGlmICghYmxlbmRbbW9kZV0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIGJsZW5kIG1vZGUgJyArIG1vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gYmxlbmRbbW9kZV0oYm90dG9tLCB0b3ApO1xufTtcblxuY29uc3QgYmxlbmRfZiA9IChmKSA9PiAoYm90dG9tLCB0b3ApID0+IHtcbiAgICBjb25zdCBjMCA9IGNocm9tYSh0b3ApLnJnYigpO1xuICAgIGNvbnN0IGMxID0gY2hyb21hKGJvdHRvbSkucmdiKCk7XG4gICAgcmV0dXJuIGNocm9tYS5yZ2IoZihjMCwgYzEpKTtcbn07XG5cbmNvbnN0IGVhY2ggPSAoZikgPT4gKGMwLCBjMSkgPT4ge1xuICAgIGNvbnN0IG91dCA9IFtdO1xuICAgIG91dFswXSA9IGYoYzBbMF0sIGMxWzBdKTtcbiAgICBvdXRbMV0gPSBmKGMwWzFdLCBjMVsxXSk7XG4gICAgb3V0WzJdID0gZihjMFsyXSwgYzFbMl0pO1xuICAgIHJldHVybiBvdXQ7XG59O1xuXG5jb25zdCBub3JtYWwgPSAoYSkgPT4gYTtcbmNvbnN0IG11bHRpcGx5ID0gKGEsIGIpID0+IChhICogYikgLyAyNTU7XG5jb25zdCBkYXJrZW4gPSAoYSwgYikgPT4gKGEgPiBiID8gYiA6IGEpO1xuY29uc3QgbGlnaHRlbiA9IChhLCBiKSA9PiAoYSA+IGIgPyBhIDogYik7XG5jb25zdCBzY3JlZW4gPSAoYSwgYikgPT4gMjU1ICogKDEgLSAoMSAtIGEgLyAyNTUpICogKDEgLSBiIC8gMjU1KSk7XG5jb25zdCBvdmVybGF5ID0gKGEsIGIpID0+XG4gICAgYiA8IDEyOCA/ICgyICogYSAqIGIpIC8gMjU1IDogMjU1ICogKDEgLSAyICogKDEgLSBhIC8gMjU1KSAqICgxIC0gYiAvIDI1NSkpO1xuY29uc3QgYnVybiA9IChhLCBiKSA9PiAyNTUgKiAoMSAtICgxIC0gYiAvIDI1NSkgLyAoYSAvIDI1NSkpO1xuY29uc3QgZG9kZ2UgPSAoYSwgYikgPT4ge1xuICAgIGlmIChhID09PSAyNTUpIHJldHVybiAyNTU7XG4gICAgYSA9ICgyNTUgKiAoYiAvIDI1NSkpIC8gKDEgLSBhIC8gMjU1KTtcbiAgICByZXR1cm4gYSA+IDI1NSA/IDI1NSA6IGE7XG59O1xuXG4vLyAjIGFkZCA9IChhLGIpIC0+XG4vLyAjICAgICBpZiAoYSArIGIgPiAyNTUpIHRoZW4gMjU1IGVsc2UgYSArIGJcblxuYmxlbmQubm9ybWFsID0gYmxlbmRfZihlYWNoKG5vcm1hbCkpO1xuYmxlbmQubXVsdGlwbHkgPSBibGVuZF9mKGVhY2gobXVsdGlwbHkpKTtcbmJsZW5kLnNjcmVlbiA9IGJsZW5kX2YoZWFjaChzY3JlZW4pKTtcbmJsZW5kLm92ZXJsYXkgPSBibGVuZF9mKGVhY2gob3ZlcmxheSkpO1xuYmxlbmQuZGFya2VuID0gYmxlbmRfZihlYWNoKGRhcmtlbikpO1xuYmxlbmQubGlnaHRlbiA9IGJsZW5kX2YoZWFjaChsaWdodGVuKSk7XG5ibGVuZC5kb2RnZSA9IGJsZW5kX2YoZWFjaChkb2RnZSkpO1xuYmxlbmQuYnVybiA9IGJsZW5kX2YoZWFjaChidXJuKSk7XG4vLyBibGVuZC5hZGQgPSBibGVuZF9mKGVhY2goYWRkKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGJsZW5kO1xuIiwiLy8gY3ViZWhlbGl4IGludGVycG9sYXRpb25cbi8vIGJhc2VkIG9uIEQuQS4gR3JlZW4gXCJBIGNvbG91ciBzY2hlbWUgZm9yIHRoZSBkaXNwbGF5IG9mIGFzdHJvbm9taWNhbCBpbnRlbnNpdHkgaW1hZ2VzXCJcbi8vIGh0dHA6Ly9hc3Ryb24tc29jLmluL2J1bGxldGluLzExSnVuZS8yODkzOTIwMTEucGRmXG5pbXBvcnQgeyB0eXBlLCBjbGlwX3JnYiwgVFdPUEkgfSBmcm9tICcuLi91dGlscy9pbmRleC5qcyc7XG5pbXBvcnQgY2hyb21hIGZyb20gJy4uL2Nocm9tYS5qcyc7XG5jb25zdCB7IHBvdywgc2luLCBjb3MgfSA9IE1hdGg7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChcbiAgICBzdGFydCA9IDMwMCxcbiAgICByb3RhdGlvbnMgPSAtMS41LFxuICAgIGh1ZSA9IDEsXG4gICAgZ2FtbWEgPSAxLFxuICAgIGxpZ2h0bmVzcyA9IFswLCAxXVxuKSB7XG4gICAgbGV0IGRoID0gMCxcbiAgICAgICAgZGw7XG4gICAgaWYgKHR5cGUobGlnaHRuZXNzKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICBkbCA9IGxpZ2h0bmVzc1sxXSAtIGxpZ2h0bmVzc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkbCA9IDA7XG4gICAgICAgIGxpZ2h0bmVzcyA9IFtsaWdodG5lc3MsIGxpZ2h0bmVzc107XG4gICAgfVxuICAgIGNvbnN0IGYgPSBmdW5jdGlvbiAoZnJhY3QpIHtcbiAgICAgICAgY29uc3QgYSA9IFRXT1BJICogKChzdGFydCArIDEyMCkgLyAzNjAgKyByb3RhdGlvbnMgKiBmcmFjdCk7XG4gICAgICAgIGNvbnN0IGwgPSBwb3cobGlnaHRuZXNzWzBdICsgZGwgKiBmcmFjdCwgZ2FtbWEpO1xuICAgICAgICBjb25zdCBoID0gZGggIT09IDAgPyBodWVbMF0gKyBmcmFjdCAqIGRoIDogaHVlO1xuICAgICAgICBjb25zdCBhbXAgPSAoaCAqIGwgKiAoMSAtIGwpKSAvIDI7XG4gICAgICAgIGNvbnN0IGNvc19hID0gY29zKGEpO1xuICAgICAgICBjb25zdCBzaW5fYSA9IHNpbihhKTtcbiAgICAgICAgY29uc3QgciA9IGwgKyBhbXAgKiAoLTAuMTQ4NjEgKiBjb3NfYSArIDEuNzgyNzcgKiBzaW5fYSk7XG4gICAgICAgIGNvbnN0IGcgPSBsICsgYW1wICogKC0wLjI5MjI3ICogY29zX2EgLSAwLjkwNjQ5ICogc2luX2EpO1xuICAgICAgICBjb25zdCBiID0gbCArIGFtcCAqICgrMS45NzI5NCAqIGNvc19hKTtcbiAgICAgICAgcmV0dXJuIGNocm9tYShjbGlwX3JnYihbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NSwgMV0pKTtcbiAgICB9O1xuICAgIGYuc3RhcnQgPSBmdW5jdGlvbiAocykge1xuICAgICAgICBpZiAocyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgc3RhcnQgPSBzO1xuICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xuICAgIGYucm90YXRpb25zID0gZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgaWYgKHIgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHJvdGF0aW9ucztcbiAgICAgICAgfVxuICAgICAgICByb3RhdGlvbnMgPSByO1xuICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xuICAgIGYuZ2FtbWEgPSBmdW5jdGlvbiAoZykge1xuICAgICAgICBpZiAoZyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2FtbWE7XG4gICAgICAgIH1cbiAgICAgICAgZ2FtbWEgPSBnO1xuICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xuICAgIGYuaHVlID0gZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgaWYgKGggPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGh1ZTtcbiAgICAgICAgfVxuICAgICAgICBodWUgPSBoO1xuICAgICAgICBpZiAodHlwZShodWUpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICBkaCA9IGh1ZVsxXSAtIGh1ZVswXTtcbiAgICAgICAgICAgIGlmIChkaCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGh1ZSA9IGh1ZVsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRoID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xuICAgIGYubGlnaHRuZXNzID0gZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgaWYgKGggPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGxpZ2h0bmVzcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZShoKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgbGlnaHRuZXNzID0gaDtcbiAgICAgICAgICAgIGRsID0gaFsxXSAtIGhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaWdodG5lc3MgPSBbaCwgaF07XG4gICAgICAgICAgICBkbCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcbiAgICBmLnNjYWxlID0gKCkgPT4gY2hyb21hLnNjYWxlKGYpO1xuICAgIGYuaHVlKGh1ZSk7XG4gICAgcmV0dXJuIGY7XG59XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSAnLi4vQ29sb3IuanMnO1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL3V0aWxzL2luZGV4LmpzJztcbmltcG9ydCBpbnRlcnBvbGF0b3IgZnJvbSAnLi4vaW50ZXJwb2xhdG9yL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbDEsIGNvbDIsIGYgPSAwLjUsIC4uLnJlc3QpID0+IHtcbiAgICBsZXQgbW9kZSA9IHJlc3RbMF0gfHwgJ2xyZ2InO1xuICAgIGlmICghaW50ZXJwb2xhdG9yW21vZGVdICYmICFyZXN0Lmxlbmd0aCkge1xuICAgICAgICAvLyBmYWxsIGJhY2sgdG8gdGhlIGZpcnN0IHN1cHBvcnRlZCBtb2RlXG4gICAgICAgIG1vZGUgPSBPYmplY3Qua2V5cyhpbnRlcnBvbGF0b3IpWzBdO1xuICAgIH1cbiAgICBpZiAoIWludGVycG9sYXRvclttb2RlXSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludGVycG9sYXRpb24gbW9kZSAke21vZGV9IGlzIG5vdCBkZWZpbmVkYCk7XG4gICAgfVxuICAgIGlmICh0eXBlKGNvbDEpICE9PSAnb2JqZWN0JykgY29sMSA9IG5ldyBDb2xvcihjb2wxKTtcbiAgICBpZiAodHlwZShjb2wyKSAhPT0gJ29iamVjdCcpIGNvbDIgPSBuZXcgQ29sb3IoY29sMik7XG4gICAgcmV0dXJuIGludGVycG9sYXRvclttb2RlXShjb2wxLCBjb2wyLCBmKS5hbHBoYShcbiAgICAgICAgY29sMS5hbHBoYSgpICsgZiAqIChjb2wyLmFscGhhKCkgLSBjb2wxLmFscGhhKCkpXG4gICAgKTtcbn07XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSAnLi4vQ29sb3IuanMnO1xuY29uc3QgZGlnaXRzID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuXG5jb25zdCB7IGZsb29yLCByYW5kb20gfSA9IE1hdGg7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBsZXQgY29kZSA9ICcjJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICBjb2RlICs9IGRpZ2l0cy5jaGFyQXQoZmxvb3IocmFuZG9tKCkgKiAxNikpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IENvbG9yKGNvZGUsICdoZXgnKTtcbn07XG4iLCIvLyBtaW5pbWFsIG11bHRpLXB1cnBvc2UgaW50ZXJmYWNlXG5cbi8vIEByZXF1aXJlcyB1dGlscyBjb2xvciBhbmFseXplXG5pbXBvcnQgY2hyb21hIGZyb20gJy4uL2Nocm9tYS5qcyc7XG5pbXBvcnQgeyBsaW1pdCwgdHlwZSB9IGZyb20gJy4uL3V0aWxzL2luZGV4LmpzJztcblxuY29uc3QgeyBwb3cgfSA9IE1hdGg7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb2xvcnMpIHtcbiAgICAvLyBjb25zdHJ1Y3RvclxuICAgIGxldCBfbW9kZSA9ICdyZ2InO1xuICAgIGxldCBfbmFjb2wgPSBjaHJvbWEoJyNjY2MnKTtcbiAgICBsZXQgX3NwcmVhZCA9IDA7XG4gICAgLy8gY29uc3QgX2ZpeGVkID0gZmFsc2U7XG4gICAgbGV0IF9kb21haW4gPSBbMCwgMV07XG4gICAgbGV0IF9wb3MgPSBbXTtcbiAgICBsZXQgX3BhZGRpbmcgPSBbMCwgMF07XG4gICAgbGV0IF9jbGFzc2VzID0gZmFsc2U7XG4gICAgbGV0IF9jb2xvcnMgPSBbXTtcbiAgICBsZXQgX291dCA9IGZhbHNlO1xuICAgIGxldCBfbWluID0gMDtcbiAgICBsZXQgX21heCA9IDE7XG4gICAgbGV0IF9jb3JyZWN0TGlnaHRuZXNzID0gZmFsc2U7XG4gICAgbGV0IF9jb2xvckNhY2hlID0ge307XG4gICAgbGV0IF91c2VDYWNoZSA9IHRydWU7XG4gICAgbGV0IF9nYW1tYSA9IDE7XG5cbiAgICAvLyBwcml2YXRlIG1ldGhvZHNcblxuICAgIGNvbnN0IHNldENvbG9ycyA9IGZ1bmN0aW9uIChjb2xvcnMpIHtcbiAgICAgICAgY29sb3JzID0gY29sb3JzIHx8IFsnI2ZmZicsICcjMDAwJ107XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGNvbG9ycyAmJlxuICAgICAgICAgICAgdHlwZShjb2xvcnMpID09PSAnc3RyaW5nJyAmJlxuICAgICAgICAgICAgY2hyb21hLmJyZXdlciAmJlxuICAgICAgICAgICAgY2hyb21hLmJyZXdlcltjb2xvcnMudG9Mb3dlckNhc2UoKV1cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb2xvcnMgPSBjaHJvbWEuYnJld2VyW2NvbG9ycy50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZShjb2xvcnMpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAvLyBoYW5kbGUgc2luZ2xlIGNvbG9yXG4gICAgICAgICAgICBpZiAoY29sb3JzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbG9ycyA9IFtjb2xvcnNbMF0sIGNvbG9yc1swXV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYWtlIGEgY29weSBvZiB0aGUgY29sb3JzXG4gICAgICAgICAgICBjb2xvcnMgPSBjb2xvcnMuc2xpY2UoMCk7XG4gICAgICAgICAgICAvLyBjb252ZXJ0IHRvIGNocm9tYSBjbGFzc2VzXG4gICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNvbG9ycy5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgICAgIGNvbG9yc1tjXSA9IGNocm9tYShjb2xvcnNbY10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYXV0by1maWxsIGNvbG9yIHBvc2l0aW9uXG4gICAgICAgICAgICBfcG9zLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNvbG9ycy5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgICAgIF9wb3MucHVzaChjIC8gKGNvbG9ycy5sZW5ndGggLSAxKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzZXRDYWNoZSgpO1xuICAgICAgICByZXR1cm4gKF9jb2xvcnMgPSBjb2xvcnMpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRDbGFzcyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoX2NsYXNzZXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgbiA9IF9jbGFzc2VzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoaSA8IG4gJiYgdmFsdWUgPj0gX2NsYXNzZXNbaV0pIHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaSAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfTtcblxuICAgIGxldCB0TWFwTGlnaHRuZXNzID0gKHQpID0+IHQ7XG4gICAgbGV0IHRNYXBEb21haW4gPSAodCkgPT4gdDtcblxuICAgIC8vIGNvbnN0IGNsYXNzaWZ5VmFsdWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIC8vICAgICBsZXQgdmFsID0gdmFsdWU7XG4gICAgLy8gICAgIGlmIChfY2xhc3Nlcy5sZW5ndGggPiAyKSB7XG4gICAgLy8gICAgICAgICBjb25zdCBuID0gX2NsYXNzZXMubGVuZ3RoLTE7XG4gICAgLy8gICAgICAgICBjb25zdCBpID0gZ2V0Q2xhc3ModmFsdWUpO1xuICAgIC8vICAgICAgICAgY29uc3QgbWluYyA9IF9jbGFzc2VzWzBdICsgKChfY2xhc3Nlc1sxXS1fY2xhc3Nlc1swXSkgKiAoMCArIChfc3ByZWFkICogMC41KSkpOyAgLy8gY2VudGVyIG9mIDFzdCBjbGFzc1xuICAgIC8vICAgICAgICAgY29uc3QgbWF4YyA9IF9jbGFzc2VzW24tMV0gKyAoKF9jbGFzc2VzW25dLV9jbGFzc2VzW24tMV0pICogKDEgLSAoX3NwcmVhZCAqIDAuNSkpKTsgIC8vIGNlbnRlciBvZiBsYXN0IGNsYXNzXG4gICAgLy8gICAgICAgICB2YWwgPSBfbWluICsgKCgoKF9jbGFzc2VzW2ldICsgKChfY2xhc3Nlc1tpKzFdIC0gX2NsYXNzZXNbaV0pICogMC41KSkgLSBtaW5jKSAvIChtYXhjLW1pbmMpKSAqIChfbWF4IC0gX21pbikpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiB2YWw7XG4gICAgLy8gfTtcblxuICAgIGNvbnN0IGdldENvbG9yID0gZnVuY3Rpb24gKHZhbCwgYnlwYXNzTWFwKSB7XG4gICAgICAgIGxldCBjb2wsIHQ7XG4gICAgICAgIGlmIChieXBhc3NNYXAgPT0gbnVsbCkge1xuICAgICAgICAgICAgYnlwYXNzTWFwID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTmFOKHZhbCkgfHwgdmFsID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gX25hY29sO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYnlwYXNzTWFwKSB7XG4gICAgICAgICAgICBpZiAoX2NsYXNzZXMgJiYgX2NsYXNzZXMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgIC8vIGZpbmQgdGhlIGNsYXNzXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGdldENsYXNzKHZhbCk7XG4gICAgICAgICAgICAgICAgdCA9IGMgLyAoX2NsYXNzZXMubGVuZ3RoIC0gMik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKF9tYXggIT09IF9taW4pIHtcbiAgICAgICAgICAgICAgICAvLyBqdXN0IGludGVycG9sYXRlIGJldHdlZW4gbWluL21heFxuICAgICAgICAgICAgICAgIHQgPSAodmFsIC0gX21pbikgLyAoX21heCAtIF9taW4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHQgPSB2YWw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkb21haW4gbWFwXG4gICAgICAgIHQgPSB0TWFwRG9tYWluKHQpO1xuXG4gICAgICAgIGlmICghYnlwYXNzTWFwKSB7XG4gICAgICAgICAgICB0ID0gdE1hcExpZ2h0bmVzcyh0KTsgLy8gbGlnaHRuZXNzIGNvcnJlY3Rpb25cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfZ2FtbWEgIT09IDEpIHtcbiAgICAgICAgICAgIHQgPSBwb3codCwgX2dhbW1hKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHQgPSBfcGFkZGluZ1swXSArIHQgKiAoMSAtIF9wYWRkaW5nWzBdIC0gX3BhZGRpbmdbMV0pO1xuXG4gICAgICAgIHQgPSBsaW1pdCh0LCAwLCAxKTtcblxuICAgICAgICBjb25zdCBrID0gTWF0aC5mbG9vcih0ICogMTAwMDApO1xuXG4gICAgICAgIGlmIChfdXNlQ2FjaGUgJiYgX2NvbG9yQ2FjaGVba10pIHtcbiAgICAgICAgICAgIGNvbCA9IF9jb2xvckNhY2hlW2tdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGUoX2NvbG9ycykgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICAvL2ZvciBpIGluIFswLi5fcG9zLmxlbmd0aC0xXVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3Bvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gX3Bvc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgPD0gcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sID0gX2NvbG9yc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ID49IHAgJiYgaSA9PT0gX3Bvcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2wgPSBfY29sb3JzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgPiBwICYmIHQgPCBfcG9zW2kgKyAxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9ICh0IC0gcCkgLyAoX3Bvc1tpICsgMV0gLSBwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA9IGNocm9tYS5pbnRlcnBvbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29sb3JzW2ldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb2xvcnNbaSArIDFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX21vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZShfY29sb3JzKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbCA9IF9jb2xvcnModCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoX3VzZUNhY2hlKSB7XG4gICAgICAgICAgICAgICAgX2NvbG9yQ2FjaGVba10gPSBjb2w7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbDtcbiAgICB9O1xuXG4gICAgdmFyIHJlc2V0Q2FjaGUgPSAoKSA9PiAoX2NvbG9yQ2FjaGUgPSB7fSk7XG5cbiAgICBzZXRDb2xvcnMoY29sb3JzKTtcblxuICAgIC8vIHB1YmxpYyBpbnRlcmZhY2VcblxuICAgIGNvbnN0IGYgPSBmdW5jdGlvbiAodikge1xuICAgICAgICBjb25zdCBjID0gY2hyb21hKGdldENvbG9yKHYpKTtcbiAgICAgICAgaWYgKF9vdXQgJiYgY1tfb3V0XSkge1xuICAgICAgICAgICAgcmV0dXJuIGNbX291dF0oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGYuY2xhc3NlcyA9IGZ1bmN0aW9uIChjbGFzc2VzKSB7XG4gICAgICAgIGlmIChjbGFzc2VzICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0eXBlKGNsYXNzZXMpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgX2NsYXNzZXMgPSBjbGFzc2VzO1xuICAgICAgICAgICAgICAgIF9kb21haW4gPSBbY2xhc3Nlc1swXSwgY2xhc3Nlc1tjbGFzc2VzLmxlbmd0aCAtIDFdXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IGNocm9tYS5hbmFseXplKF9kb21haW4pO1xuICAgICAgICAgICAgICAgIGlmIChjbGFzc2VzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIF9jbGFzc2VzID0gW2QubWluLCBkLm1heF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX2NsYXNzZXMgPSBjaHJvbWEubGltaXRzKGQsICdlJywgY2xhc3Nlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9jbGFzc2VzO1xuICAgIH07XG5cbiAgICBmLmRvbWFpbiA9IGZ1bmN0aW9uIChkb21haW4pIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2RvbWFpbjtcbiAgICAgICAgfVxuICAgICAgICBfbWluID0gZG9tYWluWzBdO1xuICAgICAgICBfbWF4ID0gZG9tYWluW2RvbWFpbi5sZW5ndGggLSAxXTtcbiAgICAgICAgX3BvcyA9IFtdO1xuICAgICAgICBjb25zdCBrID0gX2NvbG9ycy5sZW5ndGg7XG4gICAgICAgIGlmIChkb21haW4ubGVuZ3RoID09PSBrICYmIF9taW4gIT09IF9tYXgpIHtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBwb3NpdGlvbnNcbiAgICAgICAgICAgIGZvciAobGV0IGQgb2YgQXJyYXkuZnJvbShkb21haW4pKSB7XG4gICAgICAgICAgICAgICAgX3Bvcy5wdXNoKChkIC0gX21pbikgLyAoX21heCAtIF9taW4pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgazsgYysrKSB7XG4gICAgICAgICAgICAgICAgX3Bvcy5wdXNoKGMgLyAoayAtIDEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkb21haW4ubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgIC8vIHNldCBkb21haW4gbWFwXG4gICAgICAgICAgICAgICAgY29uc3QgdE91dCA9IGRvbWFpbi5tYXAoKGQsIGkpID0+IGkgLyAoZG9tYWluLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0QnJlYWtzID0gZG9tYWluLm1hcCgoZCkgPT4gKGQgLSBfbWluKSAvIChfbWF4IC0gX21pbikpO1xuICAgICAgICAgICAgICAgIGlmICghdEJyZWFrcy5ldmVyeSgodmFsLCBpKSA9PiB0T3V0W2ldID09PSB2YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRNYXBEb21haW4gPSAodCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgPD0gMCB8fCB0ID49IDEpIHJldHVybiB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHQgPj0gdEJyZWFrc1tpICsgMV0pIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGYgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0IC0gdEJyZWFrc1tpXSkgLyAodEJyZWFrc1tpICsgMV0gLSB0QnJlYWtzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dCA9IHRPdXRbaV0gKyBmICogKHRPdXRbaSArIDFdIC0gdE91dFtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfZG9tYWluID0gW19taW4sIF9tYXhdO1xuICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xuXG4gICAgZi5tb2RlID0gZnVuY3Rpb24gKF9tKSB7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIF9tb2RlO1xuICAgICAgICB9XG4gICAgICAgIF9tb2RlID0gX207XG4gICAgICAgIHJlc2V0Q2FjaGUoKTtcbiAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcblxuICAgIGYucmFuZ2UgPSBmdW5jdGlvbiAoY29sb3JzLCBfcG9zKSB7XG4gICAgICAgIHNldENvbG9ycyhjb2xvcnMsIF9wb3MpO1xuICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xuXG4gICAgZi5vdXQgPSBmdW5jdGlvbiAoX28pIHtcbiAgICAgICAgX291dCA9IF9vO1xuICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xuXG4gICAgZi5zcHJlYWQgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIF9zcHJlYWQ7XG4gICAgICAgIH1cbiAgICAgICAgX3NwcmVhZCA9IHZhbDtcbiAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcblxuICAgIGYuY29ycmVjdExpZ2h0bmVzcyA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGlmICh2ID09IG51bGwpIHtcbiAgICAgICAgICAgIHYgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIF9jb3JyZWN0TGlnaHRuZXNzID0gdjtcbiAgICAgICAgcmVzZXRDYWNoZSgpO1xuICAgICAgICBpZiAoX2NvcnJlY3RMaWdodG5lc3MpIHtcbiAgICAgICAgICAgIHRNYXBMaWdodG5lc3MgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IEwwID0gZ2V0Q29sb3IoMCwgdHJ1ZSkubGFiKClbMF07XG4gICAgICAgICAgICAgICAgY29uc3QgTDEgPSBnZXRDb2xvcigxLCB0cnVlKS5sYWIoKVswXTtcbiAgICAgICAgICAgICAgICBjb25zdCBwb2wgPSBMMCA+IEwxO1xuICAgICAgICAgICAgICAgIGxldCBMX2FjdHVhbCA9IGdldENvbG9yKHQsIHRydWUpLmxhYigpWzBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IExfaWRlYWwgPSBMMCArIChMMSAtIEwwKSAqIHQ7XG4gICAgICAgICAgICAgICAgbGV0IExfZGlmZiA9IExfYWN0dWFsIC0gTF9pZGVhbDtcbiAgICAgICAgICAgICAgICBsZXQgdDAgPSAwO1xuICAgICAgICAgICAgICAgIGxldCB0MSA9IDE7XG4gICAgICAgICAgICAgICAgbGV0IG1heF9pdGVyID0gMjA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKE1hdGguYWJzKExfZGlmZikgPiAxZS0yICYmIG1heF9pdGVyLS0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTF9kaWZmICo9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKExfZGlmZiA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0MCA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCArPSAodDEgLSB0KSAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgKz0gKHQwIC0gdCkgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBMX2FjdHVhbCA9IGdldENvbG9yKHQsIHRydWUpLmxhYigpWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChMX2RpZmYgPSBMX2FjdHVhbCAtIExfaWRlYWwpO1xuICAgICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0TWFwTGlnaHRuZXNzID0gKHQpID0+IHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcblxuICAgIGYucGFkZGluZyA9IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIGlmIChwICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0eXBlKHApID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHAgPSBbcCwgcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfcGFkZGluZyA9IHA7XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfcGFkZGluZztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmLmNvbG9ycyA9IGZ1bmN0aW9uIChudW1Db2xvcnMsIG91dCkge1xuICAgICAgICAvLyBJZiBubyBhcmd1bWVudHMgYXJlIGdpdmVuLCByZXR1cm4gdGhlIG9yaWdpbmFsIGNvbG9ycyB0aGF0IHdlcmUgcHJvdmlkZWRcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICBvdXQgPSAnaGV4JztcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IF9jb2xvcnMuc2xpY2UoMCk7XG4gICAgICAgIH0gZWxzZSBpZiAobnVtQ29sb3JzID09PSAxKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBbZigwLjUpXTtcbiAgICAgICAgfSBlbHNlIGlmIChudW1Db2xvcnMgPiAxKSB7XG4gICAgICAgICAgICBjb25zdCBkbSA9IF9kb21haW5bMF07XG4gICAgICAgICAgICBjb25zdCBkZCA9IF9kb21haW5bMV0gLSBkbTtcbiAgICAgICAgICAgIHJlc3VsdCA9IF9fcmFuZ2VfXygwLCBudW1Db2xvcnMsIGZhbHNlKS5tYXAoKGkpID0+XG4gICAgICAgICAgICAgICAgZihkbSArIChpIC8gKG51bUNvbG9ycyAtIDEpKSAqIGRkKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHJldHVybnMgYWxsIGNvbG9ycyBiYXNlZCBvbiB0aGUgZGVmaW5lZCBjbGFzc2VzXG4gICAgICAgICAgICBjb2xvcnMgPSBbXTtcbiAgICAgICAgICAgIGxldCBzYW1wbGVzID0gW107XG4gICAgICAgICAgICBpZiAoX2NsYXNzZXMgJiYgX2NsYXNzZXMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICAgICAgICAgIGxldCBpID0gMSwgZW5kID0gX2NsYXNzZXMubGVuZ3RoLCBhc2MgPSAxIDw9IGVuZDtcbiAgICAgICAgICAgICAgICAgICAgYXNjID8gaSA8IGVuZCA6IGkgPiBlbmQ7XG4gICAgICAgICAgICAgICAgICAgIGFzYyA/IGkrKyA6IGktLVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBzYW1wbGVzLnB1c2goKF9jbGFzc2VzW2kgLSAxXSArIF9jbGFzc2VzW2ldKSAqIDAuNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzYW1wbGVzID0gX2RvbWFpbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdCA9IHNhbXBsZXMubWFwKCh2KSA9PiBmKHYpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaHJvbWFbb3V0XSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0Lm1hcCgoYykgPT4gY1tvdXRdKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIGYuY2FjaGUgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYyAhPSBudWxsKSB7XG4gICAgICAgICAgICBfdXNlQ2FjaGUgPSBjO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX3VzZUNhY2hlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGYuZ2FtbWEgPSBmdW5jdGlvbiAoZykge1xuICAgICAgICBpZiAoZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBfZ2FtbWEgPSBnO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX2dhbW1hO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGYubm9kYXRhID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgaWYgKGQgIT0gbnVsbCkge1xuICAgICAgICAgICAgX25hY29sID0gY2hyb21hKGQpO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX25hY29sO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBmO1xufVxuXG5mdW5jdGlvbiBfX3JhbmdlX18obGVmdCwgcmlnaHQsIGluY2x1c2l2ZSkge1xuICAgIGxldCByYW5nZSA9IFtdO1xuICAgIGxldCBhc2NlbmRpbmcgPSBsZWZ0IDwgcmlnaHQ7XG4gICAgbGV0IGVuZCA9ICFpbmNsdXNpdmUgPyByaWdodCA6IGFzY2VuZGluZyA/IHJpZ2h0ICsgMSA6IHJpZ2h0IC0gMTtcbiAgICBmb3IgKGxldCBpID0gbGVmdDsgYXNjZW5kaW5nID8gaSA8IGVuZCA6IGkgPiBlbmQ7IGFzY2VuZGluZyA/IGkrKyA6IGktLSkge1xuICAgICAgICByYW5nZS5wdXNoKGkpO1xuICAgIH1cbiAgICByZXR1cm4gcmFuZ2U7XG59XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSAnLi4vQ29sb3IuanMnO1xuXG5leHBvcnQgZGVmYXVsdCAoY29sMSwgY29sMiwgZiwgbSkgPT4ge1xuICAgIGxldCB4eXowLCB4eXoxO1xuICAgIGlmIChtID09PSAnaHNsJykge1xuICAgICAgICB4eXowID0gY29sMS5oc2woKTtcbiAgICAgICAgeHl6MSA9IGNvbDIuaHNsKCk7XG4gICAgfSBlbHNlIGlmIChtID09PSAnaHN2Jykge1xuICAgICAgICB4eXowID0gY29sMS5oc3YoKTtcbiAgICAgICAgeHl6MSA9IGNvbDIuaHN2KCk7XG4gICAgfSBlbHNlIGlmIChtID09PSAnaGNnJykge1xuICAgICAgICB4eXowID0gY29sMS5oY2coKTtcbiAgICAgICAgeHl6MSA9IGNvbDIuaGNnKCk7XG4gICAgfSBlbHNlIGlmIChtID09PSAnaHNpJykge1xuICAgICAgICB4eXowID0gY29sMS5oc2koKTtcbiAgICAgICAgeHl6MSA9IGNvbDIuaHNpKCk7XG4gICAgfSBlbHNlIGlmIChtID09PSAnbGNoJyB8fCBtID09PSAnaGNsJykge1xuICAgICAgICBtID0gJ2hjbCc7XG4gICAgICAgIHh5ejAgPSBjb2wxLmhjbCgpO1xuICAgICAgICB4eXoxID0gY29sMi5oY2woKTtcbiAgICB9IGVsc2UgaWYgKG0gPT09ICdva2xjaCcpIHtcbiAgICAgICAgeHl6MCA9IGNvbDEub2tsY2goKS5yZXZlcnNlKCk7XG4gICAgICAgIHh5ejEgPSBjb2wyLm9rbGNoKCkucmV2ZXJzZSgpO1xuICAgIH1cblxuICAgIGxldCBodWUwLCBodWUxLCBzYXQwLCBzYXQxLCBsYnYwLCBsYnYxO1xuICAgIGlmIChtLnN1YnN0cigwLCAxKSA9PT0gJ2gnIHx8IG0gPT09ICdva2xjaCcpIHtcbiAgICAgICAgW2h1ZTAsIHNhdDAsIGxidjBdID0geHl6MDtcbiAgICAgICAgW2h1ZTEsIHNhdDEsIGxidjFdID0geHl6MTtcbiAgICB9XG5cbiAgICBsZXQgc2F0LCBodWUsIGxidiwgZGg7XG5cbiAgICBpZiAoIWlzTmFOKGh1ZTApICYmICFpc05hTihodWUxKSkge1xuICAgICAgICAvLyBib3RoIGNvbG9ycyBoYXZlIGh1ZVxuICAgICAgICBpZiAoaHVlMSA+IGh1ZTAgJiYgaHVlMSAtIGh1ZTAgPiAxODApIHtcbiAgICAgICAgICAgIGRoID0gaHVlMSAtIChodWUwICsgMzYwKTtcbiAgICAgICAgfSBlbHNlIGlmIChodWUxIDwgaHVlMCAmJiBodWUwIC0gaHVlMSA+IDE4MCkge1xuICAgICAgICAgICAgZGggPSBodWUxICsgMzYwIC0gaHVlMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRoID0gaHVlMSAtIGh1ZTA7XG4gICAgICAgIH1cbiAgICAgICAgaHVlID0gaHVlMCArIGYgKiBkaDtcbiAgICB9IGVsc2UgaWYgKCFpc05hTihodWUwKSkge1xuICAgICAgICBodWUgPSBodWUwO1xuICAgICAgICBpZiAoKGxidjEgPT0gMSB8fCBsYnYxID09IDApICYmIG0gIT0gJ2hzdicpIHNhdCA9IHNhdDA7XG4gICAgfSBlbHNlIGlmICghaXNOYU4oaHVlMSkpIHtcbiAgICAgICAgaHVlID0gaHVlMTtcbiAgICAgICAgaWYgKChsYnYwID09IDEgfHwgbGJ2MCA9PSAwKSAmJiBtICE9ICdoc3YnKSBzYXQgPSBzYXQxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGh1ZSA9IE51bWJlci5OYU47XG4gICAgfVxuXG4gICAgaWYgKHNhdCA9PT0gdW5kZWZpbmVkKSBzYXQgPSBzYXQwICsgZiAqIChzYXQxIC0gc2F0MCk7XG4gICAgbGJ2ID0gbGJ2MCArIGYgKiAobGJ2MSAtIGxidjApO1xuICAgIHJldHVybiBtID09PSAnb2tsY2gnXG4gICAgICAgID8gbmV3IENvbG9yKFtsYnYsIHNhdCwgaHVlXSwgbSlcbiAgICAgICAgOiBuZXcgQ29sb3IoW2h1ZSwgc2F0LCBsYnZdLCBtKTtcbn07XG4iLCJpbXBvcnQgJy4uL2lvL2hjZy9pbmRleC5qcyc7XG5pbXBvcnQgaW50ZXJwb2xhdGVfaHN4IGZyb20gJy4vX2hzeC5qcyc7XG5pbXBvcnQgaW5kZXggZnJvbSAnLi9pbmRleC5qcyc7XG5cbmNvbnN0IGhjZyA9IChjb2wxLCBjb2wyLCBmKSA9PiB7XG4gICAgcmV0dXJuIGludGVycG9sYXRlX2hzeChjb2wxLCBjb2wyLCBmLCAnaGNnJyk7XG59O1xuXG4vLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbmluZGV4LmhjZyA9IGhjZztcblxuZXhwb3J0IGRlZmF1bHQgaGNnO1xuIiwiaW1wb3J0ICcuLi9pby9oc2kvaW5kZXguanMnO1xuaW1wb3J0IGludGVycG9sYXRlX2hzeCBmcm9tICcuL19oc3guanMnO1xuaW1wb3J0IGluZGV4IGZyb20gJy4vaW5kZXguanMnO1xuXG5jb25zdCBoc2kgPSAoY29sMSwgY29sMiwgZikgPT4ge1xuICAgIHJldHVybiBpbnRlcnBvbGF0ZV9oc3goY29sMSwgY29sMiwgZiwgJ2hzaScpO1xufTtcblxuLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG5pbmRleC5oc2kgPSBoc2k7XG5cbmV4cG9ydCBkZWZhdWx0IGhzaTtcbiIsImltcG9ydCAnLi4vaW8vaHNsL2luZGV4LmpzJztcbmltcG9ydCBpbnRlcnBvbGF0ZV9oc3ggZnJvbSAnLi9faHN4LmpzJztcbmltcG9ydCBpbmRleCBmcm9tICcuL2luZGV4LmpzJztcblxuY29uc3QgaHNsID0gKGNvbDEsIGNvbDIsIGYpID0+IHtcbiAgICByZXR1cm4gaW50ZXJwb2xhdGVfaHN4KGNvbDEsIGNvbDIsIGYsICdoc2wnKTtcbn07XG5cbi8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuaW5kZXguaHNsID0gaHNsO1xuXG5leHBvcnQgZGVmYXVsdCBoc2w7XG4iLCJpbXBvcnQgJy4uL2lvL2hzdi9pbmRleC5qcyc7XG5pbXBvcnQgaW50ZXJwb2xhdGVfaHN4IGZyb20gJy4vX2hzeC5qcyc7XG5pbXBvcnQgaW5kZXggZnJvbSAnLi9pbmRleC5qcyc7XG5cbmNvbnN0IGhzdiA9IChjb2wxLCBjb2wyLCBmKSA9PiB7XG4gICAgcmV0dXJuIGludGVycG9sYXRlX2hzeChjb2wxLCBjb2wyLCBmLCAnaHN2Jyk7XG59O1xuXG4vLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbmluZGV4LmhzdiA9IGhzdjtcblxuZXhwb3J0IGRlZmF1bHQgaHN2O1xuIiwiZXhwb3J0IGRlZmF1bHQge307XG4iLCJpbXBvcnQgJy4uL2lvL2xhYi9pbmRleC5qcyc7XG5pbXBvcnQgaW5kZXggZnJvbSAnLi9pbmRleC5qcyc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vQ29sb3IuanMnO1xuXG5jb25zdCBsYWIgPSAoY29sMSwgY29sMiwgZikgPT4ge1xuICAgIGNvbnN0IHh5ejAgPSBjb2wxLmxhYigpO1xuICAgIGNvbnN0IHh5ejEgPSBjb2wyLmxhYigpO1xuICAgIHJldHVybiBuZXcgQ29sb3IoXG4gICAgICAgIHh5ejBbMF0gKyBmICogKHh5ejFbMF0gLSB4eXowWzBdKSxcbiAgICAgICAgeHl6MFsxXSArIGYgKiAoeHl6MVsxXSAtIHh5ejBbMV0pLFxuICAgICAgICB4eXowWzJdICsgZiAqICh4eXoxWzJdIC0geHl6MFsyXSksXG4gICAgICAgICdsYWInXG4gICAgKTtcbn07XG5cbi8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuaW5kZXgubGFiID0gbGFiO1xuXG5leHBvcnQgZGVmYXVsdCBsYWI7XG4iLCJpbXBvcnQgJy4uL2lvL2xjaC9pbmRleC5qcyc7XG5pbXBvcnQgaW50ZXJwb2xhdGVfaHN4IGZyb20gJy4vX2hzeC5qcyc7XG5pbXBvcnQgaW5kZXggZnJvbSAnLi9pbmRleC5qcyc7XG5cbmNvbnN0IGxjaCA9IChjb2wxLCBjb2wyLCBmKSA9PiB7XG4gICAgcmV0dXJuIGludGVycG9sYXRlX2hzeChjb2wxLCBjb2wyLCBmLCAnbGNoJyk7XG59O1xuXG4vLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbmluZGV4LmxjaCA9IGxjaDtcbmluZGV4LmhjbCA9IGxjaDtcblxuZXhwb3J0IGRlZmF1bHQgbGNoO1xuIiwiaW1wb3J0IENvbG9yIGZyb20gJy4uL0NvbG9yLmpzJztcbmNvbnN0IHsgc3FydCwgcG93IH0gPSBNYXRoO1xuaW1wb3J0IGluZGV4IGZyb20gJy4vaW5kZXguanMnO1xuXG5jb25zdCBscmdiID0gKGNvbDEsIGNvbDIsIGYpID0+IHtcbiAgICBjb25zdCBbeDEsIHkxLCB6MV0gPSBjb2wxLl9yZ2I7XG4gICAgY29uc3QgW3gyLCB5MiwgejJdID0gY29sMi5fcmdiO1xuICAgIHJldHVybiBuZXcgQ29sb3IoXG4gICAgICAgIHNxcnQocG93KHgxLCAyKSAqICgxIC0gZikgKyBwb3coeDIsIDIpICogZiksXG4gICAgICAgIHNxcnQocG93KHkxLCAyKSAqICgxIC0gZikgKyBwb3coeTIsIDIpICogZiksXG4gICAgICAgIHNxcnQocG93KHoxLCAyKSAqICgxIC0gZikgKyBwb3coejIsIDIpICogZiksXG4gICAgICAgICdyZ2InXG4gICAgKTtcbn07XG5cbi8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuaW5kZXgubHJnYiA9IGxyZ2I7XG5cbmV4cG9ydCBkZWZhdWx0IGxyZ2I7XG4iLCJpbXBvcnQgJy4uL2lvL251bS9pbmRleC5qcyc7XG5pbXBvcnQgaW5kZXggZnJvbSAnLi9pbmRleC5qcyc7XG5cbmltcG9ydCBDb2xvciBmcm9tICcuLi9Db2xvci5qcyc7XG5cbmNvbnN0IG51bSA9IChjb2wxLCBjb2wyLCBmKSA9PiB7XG4gICAgY29uc3QgYzEgPSBjb2wxLm51bSgpO1xuICAgIGNvbnN0IGMyID0gY29sMi5udW0oKTtcbiAgICByZXR1cm4gbmV3IENvbG9yKGMxICsgZiAqIChjMiAtIGMxKSwgJ251bScpO1xufTtcblxuLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG5pbmRleC5udW0gPSBudW07XG5cbmV4cG9ydCBkZWZhdWx0IG51bTtcbiIsImltcG9ydCAnLi4vaW8vb2tsYWIvaW5kZXguanMnO1xuaW1wb3J0IGluZGV4IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IENvbG9yIGZyb20gJy4uL0NvbG9yLmpzJztcblxuY29uc3Qgb2tsYWIgPSAoY29sMSwgY29sMiwgZikgPT4ge1xuICAgIGNvbnN0IHh5ejAgPSBjb2wxLm9rbGFiKCk7XG4gICAgY29uc3QgeHl6MSA9IGNvbDIub2tsYWIoKTtcbiAgICByZXR1cm4gbmV3IENvbG9yKFxuICAgICAgICB4eXowWzBdICsgZiAqICh4eXoxWzBdIC0geHl6MFswXSksXG4gICAgICAgIHh5ejBbMV0gKyBmICogKHh5ejFbMV0gLSB4eXowWzFdKSxcbiAgICAgICAgeHl6MFsyXSArIGYgKiAoeHl6MVsyXSAtIHh5ejBbMl0pLFxuICAgICAgICAnb2tsYWInXG4gICAgKTtcbn07XG5cbi8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuaW5kZXgub2tsYWIgPSBva2xhYjtcblxuZXhwb3J0IGRlZmF1bHQgb2tsYWI7XG4iLCJpbXBvcnQgJy4uL2lvL2xjaC9pbmRleC5qcyc7XG5pbXBvcnQgaW50ZXJwb2xhdGVfaHN4IGZyb20gJy4vX2hzeC5qcyc7XG5pbXBvcnQgaW5kZXggZnJvbSAnLi9pbmRleC5qcyc7XG5cbmNvbnN0IG9rbGNoID0gKGNvbDEsIGNvbDIsIGYpID0+IHtcbiAgICByZXR1cm4gaW50ZXJwb2xhdGVfaHN4KGNvbDEsIGNvbDIsIGYsICdva2xjaCcpO1xufTtcblxuLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG5pbmRleC5va2xjaCA9IG9rbGNoO1xuXG5leHBvcnQgZGVmYXVsdCBva2xjaDtcbiIsImltcG9ydCBDb2xvciBmcm9tICcuLi9Db2xvci5qcyc7XG5pbXBvcnQgaW5kZXggZnJvbSAnLi9pbmRleC5qcyc7XG5cbmNvbnN0IHJnYiA9IChjb2wxLCBjb2wyLCBmKSA9PiB7XG4gICAgY29uc3QgeHl6MCA9IGNvbDEuX3JnYjtcbiAgICBjb25zdCB4eXoxID0gY29sMi5fcmdiO1xuICAgIHJldHVybiBuZXcgQ29sb3IoXG4gICAgICAgIHh5ejBbMF0gKyBmICogKHh5ejFbMF0gLSB4eXowWzBdKSxcbiAgICAgICAgeHl6MFsxXSArIGYgKiAoeHl6MVsxXSAtIHh5ejBbMV0pLFxuICAgICAgICB4eXowWzJdICsgZiAqICh4eXoxWzJdIC0geHl6MFsyXSksXG4gICAgICAgICdyZ2InXG4gICAgKTtcbn07XG5cbi8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuaW5kZXgucmdiID0gcmdiO1xuXG5leHBvcnQgZGVmYXVsdCByZ2I7XG4iLCJpbXBvcnQgeyB1bnBhY2sgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5cbmNvbnN0IGNteWsycmdiID0gKC4uLmFyZ3MpID0+IHtcbiAgICBhcmdzID0gdW5wYWNrKGFyZ3MsICdjbXlrJyk7XG4gICAgY29uc3QgW2MsIG0sIHksIGtdID0gYXJncztcbiAgICBjb25zdCBhbHBoYSA9IGFyZ3MubGVuZ3RoID4gNCA/IGFyZ3NbNF0gOiAxO1xuICAgIGlmIChrID09PSAxKSByZXR1cm4gWzAsIDAsIDAsIGFscGhhXTtcbiAgICByZXR1cm4gW1xuICAgICAgICBjID49IDEgPyAwIDogMjU1ICogKDEgLSBjKSAqICgxIC0gayksIC8vIHJcbiAgICAgICAgbSA+PSAxID8gMCA6IDI1NSAqICgxIC0gbSkgKiAoMSAtIGspLCAvLyBnXG4gICAgICAgIHkgPj0gMSA/IDAgOiAyNTUgKiAoMSAtIHkpICogKDEgLSBrKSwgLy8gYlxuICAgICAgICBhbHBoYVxuICAgIF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbXlrMnJnYjtcbiIsImltcG9ydCBjaHJvbWEgZnJvbSAnLi4vLi4vY2hyb21hLmpzJztcbmltcG9ydCBDb2xvciBmcm9tICcuLi8uLi9Db2xvci5qcyc7XG5pbXBvcnQgaW5wdXQgZnJvbSAnLi4vaW5wdXQuanMnO1xuaW1wb3J0IHsgdW5wYWNrLCB0eXBlIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuaW1wb3J0IGNteWsycmdiIGZyb20gJy4vY215azJyZ2IuanMnO1xuaW1wb3J0IHJnYjJjbXlrIGZyb20gJy4vcmdiMmNteWsuanMnO1xuXG5Db2xvci5wcm90b3R5cGUuY215ayA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmdiMmNteWsodGhpcy5fcmdiKTtcbn07XG5cbmNvbnN0IGNteWsgPSAoLi4uYXJncykgPT4gbmV3IENvbG9yKC4uLmFyZ3MsICdjbXlrJyk7XG5PYmplY3QuYXNzaWduKGNocm9tYSwgeyBjbXlrIH0pO1xuXG5pbnB1dC5mb3JtYXQuY215ayA9IGNteWsycmdiO1xuXG5pbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgIHA6IDIsXG4gICAgdGVzdDogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgYXJncyA9IHVucGFjayhhcmdzLCAnY215aycpO1xuICAgICAgICBpZiAodHlwZShhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgcmV0dXJuICdjbXlrJztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5leHBvcnQgeyBjbXlrIH07XG4iLCJpbXBvcnQgeyB1bnBhY2sgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5jb25zdCB7IG1heCB9ID0gTWF0aDtcblxuY29uc3QgcmdiMmNteWsgPSAoLi4uYXJncykgPT4ge1xuICAgIGxldCBbciwgZywgYl0gPSB1bnBhY2soYXJncywgJ3JnYicpO1xuICAgIHIgPSByIC8gMjU1O1xuICAgIGcgPSBnIC8gMjU1O1xuICAgIGIgPSBiIC8gMjU1O1xuICAgIGNvbnN0IGsgPSAxIC0gbWF4KHIsIG1heChnLCBiKSk7XG4gICAgY29uc3QgZiA9IGsgPCAxID8gMSAvICgxIC0gaykgOiAwO1xuICAgIGNvbnN0IGMgPSAoMSAtIHIgLSBrKSAqIGY7XG4gICAgY29uc3QgbSA9ICgxIC0gZyAtIGspICogZjtcbiAgICBjb25zdCB5ID0gKDEgLSBiIC0gaykgKiBmO1xuICAgIHJldHVybiBbYywgbSwgeSwga107XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZ2IyY215aztcbiIsImltcG9ydCBoc2wycmdiIGZyb20gJy4uL2hzbC9oc2wycmdiLmpzJztcbmltcG9ydCBsYWIycmdiIGZyb20gJy4uL2xhYi9sYWIycmdiLmpzJztcbmltcG9ydCBsY2gycmdiIGZyb20gJy4uL2xjaC9sY2gycmdiLmpzJztcbmltcG9ydCBva2xhYjJyZ2IgZnJvbSAnLi4vb2tsYWIvb2tsYWIycmdiLmpzJztcbmltcG9ydCBva2xjaDJyZ2IgZnJvbSAnLi4vb2tsY2gvb2tsY2gycmdiLmpzJztcbmltcG9ydCBpbnB1dCBmcm9tICcuLi9pbnB1dC5qcyc7XG5pbXBvcnQgbGltaXQgZnJvbSAnLi4vLi4vdXRpbHMvbGltaXQuanMnO1xuaW1wb3J0IHsgZ2V0TGFiV2hpdGVQb2ludCwgc2V0TGFiV2hpdGVQb2ludCB9IGZyb20gJy4uL2xhYi9sYWItY29uc3RhbnRzLmpzJztcblxuY29uc3QgSU5UX09SX1BDVCA9IC8oKD86LT9cXGQrKXwoPzotP1xcZCsoPzpcXC5cXGQrKT8pJXxub25lKS8uc291cmNlO1xuY29uc3QgRkxPQVRfT1JfUENUID0gLygoPzotPyg/OlxcZCsoPzpcXC5cXGQqKT98XFwuXFxkKyklPyl8bm9uZSkvLnNvdXJjZTtcbmNvbnN0IFBDVCA9IC8oKD86LT8oPzpcXGQrKD86XFwuXFxkKik/fFxcLlxcZCspJSl8bm9uZSkvLnNvdXJjZTtcbmNvbnN0IFJFX1MgPSAvXFxzKi8uc291cmNlO1xuY29uc3QgU0VQID0gL1xccysvLnNvdXJjZTtcbmNvbnN0IENPTU1BID0gL1xccyosXFxzKi8uc291cmNlO1xuY29uc3QgQU5MR0UgPSAvKCg/Oi0/KD86XFxkKyg/OlxcLlxcZCopP3xcXC5cXGQrKSg/OmRlZyk/KXxub25lKS8uc291cmNlO1xuY29uc3QgQUxQSEEgPSAvXFxzKig/OlxcL1xccyooKD86WzAxXXxbMDFdP1xcLlxcZCspfFxcZCsoPzpcXC5cXGQrKT8lKSk/Ly5zb3VyY2U7XG5cbi8vIGUuZy4gcmdiKDI1MCAyMCAwKSwgcmdiKDEwMCUgNTAlIDIwJSksIHJnYigxMDAlIDUwJSAyMCUgLyAwLjUpXG5jb25zdCBSRV9SR0IgPSBuZXcgUmVnRXhwKFxuICAgICdecmdiYT9cXFxcKCcgK1xuICAgICAgICBSRV9TICtcbiAgICAgICAgW0lOVF9PUl9QQ1QsIElOVF9PUl9QQ1QsIElOVF9PUl9QQ1RdLmpvaW4oU0VQKSArXG4gICAgICAgIEFMUEhBICtcbiAgICAgICAgJ1xcXFwpJCdcbik7XG5jb25zdCBSRV9SR0JfTEVHQUNZID0gbmV3IFJlZ0V4cChcbiAgICAnXnJnYlxcXFwoJyArXG4gICAgICAgIFJFX1MgK1xuICAgICAgICBbSU5UX09SX1BDVCwgSU5UX09SX1BDVCwgSU5UX09SX1BDVF0uam9pbihDT01NQSkgK1xuICAgICAgICBSRV9TICtcbiAgICAgICAgJ1xcXFwpJCdcbik7XG5jb25zdCBSRV9SR0JBX0xFR0FDWSA9IG5ldyBSZWdFeHAoXG4gICAgJ15yZ2JhXFxcXCgnICtcbiAgICAgICAgUkVfUyArXG4gICAgICAgIFtJTlRfT1JfUENULCBJTlRfT1JfUENULCBJTlRfT1JfUENULCBGTE9BVF9PUl9QQ1RdLmpvaW4oQ09NTUEpICtcbiAgICAgICAgUkVfUyArXG4gICAgICAgICdcXFxcKSQnXG4pO1xuXG5jb25zdCBSRV9IU0wgPSBuZXcgUmVnRXhwKFxuICAgICdeaHNsYT9cXFxcKCcgKyBSRV9TICsgW0FOTEdFLCBQQ1QsIFBDVF0uam9pbihTRVApICsgQUxQSEEgKyAnXFxcXCkkJ1xuKTtcbmNvbnN0IFJFX0hTTF9MRUdBQ1kgPSBuZXcgUmVnRXhwKFxuICAgICdeaHNsP1xcXFwoJyArIFJFX1MgKyBbQU5MR0UsIFBDVCwgUENUXS5qb2luKENPTU1BKSArIFJFX1MgKyAnXFxcXCkkJ1xuKTtcbmNvbnN0IFJFX0hTTEFfTEVHQUNZID1cbiAgICAvXmhzbGFcXChcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyksXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKihbMDFdfFswMV0/XFwuXFxkKylcXCkkLztcblxuY29uc3QgUkVfTEFCID0gbmV3IFJlZ0V4cChcbiAgICAnXmxhYlxcXFwoJyArXG4gICAgICAgIFJFX1MgK1xuICAgICAgICBbRkxPQVRfT1JfUENULCBGTE9BVF9PUl9QQ1QsIEZMT0FUX09SX1BDVF0uam9pbihTRVApICtcbiAgICAgICAgQUxQSEEgK1xuICAgICAgICAnXFxcXCkkJ1xuKTtcbmNvbnN0IFJFX0xDSCA9IG5ldyBSZWdFeHAoXG4gICAgJ15sY2hcXFxcKCcgK1xuICAgICAgICBSRV9TICtcbiAgICAgICAgW0ZMT0FUX09SX1BDVCwgRkxPQVRfT1JfUENULCBBTkxHRV0uam9pbihTRVApICtcbiAgICAgICAgQUxQSEEgK1xuICAgICAgICAnXFxcXCkkJ1xuKTtcbmNvbnN0IFJFX09LTEFCID0gbmV3IFJlZ0V4cChcbiAgICAnXm9rbGFiXFxcXCgnICtcbiAgICAgICAgUkVfUyArXG4gICAgICAgIFtGTE9BVF9PUl9QQ1QsIEZMT0FUX09SX1BDVCwgRkxPQVRfT1JfUENUXS5qb2luKFNFUCkgK1xuICAgICAgICBBTFBIQSArXG4gICAgICAgICdcXFxcKSQnXG4pO1xuY29uc3QgUkVfT0tMQ0ggPSBuZXcgUmVnRXhwKFxuICAgICdeb2tsY2hcXFxcKCcgK1xuICAgICAgICBSRV9TICtcbiAgICAgICAgW0ZMT0FUX09SX1BDVCwgRkxPQVRfT1JfUENULCBBTkxHRV0uam9pbihTRVApICtcbiAgICAgICAgQUxQSEEgK1xuICAgICAgICAnXFxcXCkkJ1xuKTtcblxuY29uc3QgeyByb3VuZCB9ID0gTWF0aDtcblxuY29uc3Qgcm91bmRSR0IgPSAocmdiKSA9PiB7XG4gICAgcmV0dXJuIHJnYi5tYXAoKHYsIGkpID0+IChpIDw9IDIgPyBsaW1pdChyb3VuZCh2KSwgMCwgMjU1KSA6IHYpKTtcbn07XG5cbmNvbnN0IHBlcmNlbnRUb0Fic29sdXRlID0gKHBjdCwgbWluID0gMCwgbWF4ID0gMTAwLCBzaWduZWQgPSBmYWxzZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcGN0ID09PSAnc3RyaW5nJyAmJiBwY3QuZW5kc1dpdGgoJyUnKSkge1xuICAgICAgICBwY3QgPSBwYXJzZUZsb2F0KHBjdC5zdWJzdHJpbmcoMCwgcGN0Lmxlbmd0aCAtIDEpKSAvIDEwMDtcbiAgICAgICAgaWYgKHNpZ25lZCkge1xuICAgICAgICAgICAgLy8gc2lnbmVkIHBlcmNlbnRhZ2VzIGFyZSBpbiB0aGUgcmFuZ2UgLTEwMCUgdG8gMTAwJVxuICAgICAgICAgICAgcGN0ID0gbWluICsgKHBjdCArIDEpICogMC41ICogKG1heCAtIG1pbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwY3QgPSBtaW4gKyBwY3QgKiAobWF4IC0gbWluKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gK3BjdDtcbn07XG5cbmNvbnN0IG5vbmVUb1ZhbHVlID0gKHYsIG5vbmVWYWx1ZSkgPT4ge1xuICAgIHJldHVybiB2ID09PSAnbm9uZScgPyBub25lVmFsdWUgOiB2O1xufTtcblxuY29uc3QgY3NzMnJnYiA9IChjc3MpID0+IHtcbiAgICBjc3MgPSBjc3MudG9Mb3dlckNhc2UoKS50cmltKCk7XG5cbiAgICBpZiAoY3NzID09PSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICAgIHJldHVybiBbMCwgMCwgMCwgMF07XG4gICAgfVxuXG4gICAgbGV0IG07XG5cbiAgICBpZiAoaW5wdXQuZm9ybWF0Lm5hbWVkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQuZm9ybWF0Lm5hbWVkKGNzcyk7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG5cbiAgICAvLyByZ2IoMjUwIDIwIDApIG9yIHJnYigyNTAsMjAsMClcbiAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfUkdCKSkgfHwgKG0gPSBjc3MubWF0Y2goUkVfUkdCX0xFR0FDWSkpKSB7XG4gICAgICAgIGxldCByZ2IgPSBtLnNsaWNlKDEsIDQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgcmdiW2ldID0gK3BlcmNlbnRUb0Fic29sdXRlKG5vbmVUb1ZhbHVlKHJnYltpXSwgMCksIDAsIDI1NSk7XG4gICAgICAgIH1cbiAgICAgICAgcmdiID0gcm91bmRSR0IocmdiKTtcbiAgICAgICAgY29uc3QgYWxwaGEgPSBtWzRdICE9PSB1bmRlZmluZWQgPyArcGVyY2VudFRvQWJzb2x1dGUobVs0XSwgMCwgMSkgOiAxO1xuICAgICAgICByZ2JbM10gPSBhbHBoYTsgLy8gZGVmYXVsdCBhbHBoYVxuICAgICAgICByZXR1cm4gcmdiO1xuICAgIH1cblxuICAgIC8vIHJnYmEoMjUwLDIwLDAsMC40KVxuICAgIGlmICgobSA9IGNzcy5tYXRjaChSRV9SR0JBX0xFR0FDWSkpKSB7XG4gICAgICAgIGNvbnN0IHJnYiA9IG0uc2xpY2UoMSwgNSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICByZ2JbaV0gPSArcGVyY2VudFRvQWJzb2x1dGUocmdiW2ldLCAwLCAyNTUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZ2I7XG4gICAgfVxuXG4gICAgLy8gaHNsKDAsMTAwJSw1MCUpXG4gICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX0hTTCkpIHx8IChtID0gY3NzLm1hdGNoKFJFX0hTTF9MRUdBQ1kpKSkge1xuICAgICAgICBjb25zdCBoc2wgPSBtLnNsaWNlKDEsIDQpO1xuICAgICAgICBoc2xbMF0gPSArbm9uZVRvVmFsdWUoaHNsWzBdLnJlcGxhY2UoJ2RlZycsICcnKSwgMCk7XG4gICAgICAgIGhzbFsxXSA9ICtwZXJjZW50VG9BYnNvbHV0ZShub25lVG9WYWx1ZShoc2xbMV0sIDApLCAwLCAxMDApICogMC4wMTtcbiAgICAgICAgaHNsWzJdID0gK3BlcmNlbnRUb0Fic29sdXRlKG5vbmVUb1ZhbHVlKGhzbFsyXSwgMCksIDAsIDEwMCkgKiAwLjAxO1xuICAgICAgICBjb25zdCByZ2IgPSByb3VuZFJHQihoc2wycmdiKGhzbCkpO1xuICAgICAgICBjb25zdCBhbHBoYSA9IG1bNF0gIT09IHVuZGVmaW5lZCA/ICtwZXJjZW50VG9BYnNvbHV0ZShtWzRdLCAwLCAxKSA6IDE7XG4gICAgICAgIHJnYlszXSA9IGFscGhhO1xuICAgICAgICByZXR1cm4gcmdiO1xuICAgIH1cblxuICAgIC8vIGhzbGEoMCwxMDAlLDUwJSwwLjUpXG4gICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX0hTTEFfTEVHQUNZKSkpIHtcbiAgICAgICAgY29uc3QgaHNsID0gbS5zbGljZSgxLCA0KTtcbiAgICAgICAgaHNsWzFdICo9IDAuMDE7XG4gICAgICAgIGhzbFsyXSAqPSAwLjAxO1xuICAgICAgICBjb25zdCByZ2IgPSBoc2wycmdiKGhzbCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICByZ2JbaV0gPSByb3VuZChyZ2JbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJnYlszXSA9ICttWzRdOyAvLyBkZWZhdWx0IGFscGhhID0gMVxuICAgICAgICByZXR1cm4gcmdiO1xuICAgIH1cblxuICAgIGlmICgobSA9IGNzcy5tYXRjaChSRV9MQUIpKSkge1xuICAgICAgICBjb25zdCBsYWIgPSBtLnNsaWNlKDEsIDQpO1xuICAgICAgICBsYWJbMF0gPSBwZXJjZW50VG9BYnNvbHV0ZShub25lVG9WYWx1ZShsYWJbMF0sIDApLCAwLCAxMDApO1xuICAgICAgICBsYWJbMV0gPSBwZXJjZW50VG9BYnNvbHV0ZShub25lVG9WYWx1ZShsYWJbMV0sIDApLCAtMTI1LCAxMjUsIHRydWUpO1xuICAgICAgICBsYWJbMl0gPSBwZXJjZW50VG9BYnNvbHV0ZShub25lVG9WYWx1ZShsYWJbMl0sIDApLCAtMTI1LCAxMjUsIHRydWUpO1xuICAgICAgICAvLyBjb252ZXJ0IHRvIEQ1MCBMYWIgd2hpdGVwb2ludFxuICAgICAgICBjb25zdCB3cCA9IGdldExhYldoaXRlUG9pbnQoKTtcbiAgICAgICAgc2V0TGFiV2hpdGVQb2ludCgnZDUwJyk7XG4gICAgICAgIGNvbnN0IHJnYiA9IHJvdW5kUkdCKGxhYjJyZ2IobGFiKSk7XG4gICAgICAgIC8vIGNvbnZlcnQgYmFjayB0byBvcmlnaW5hbCBMYWIgd2hpdGVwb2ludFxuICAgICAgICBzZXRMYWJXaGl0ZVBvaW50KHdwKTtcbiAgICAgICAgY29uc3QgYWxwaGEgPSBtWzRdICE9PSB1bmRlZmluZWQgPyArcGVyY2VudFRvQWJzb2x1dGUobVs0XSwgMCwgMSkgOiAxO1xuICAgICAgICByZ2JbM10gPSBhbHBoYTtcbiAgICAgICAgcmV0dXJuIHJnYjtcbiAgICB9XG5cbiAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfTENIKSkpIHtcbiAgICAgICAgY29uc3QgbGNoID0gbS5zbGljZSgxLCA0KTtcbiAgICAgICAgbGNoWzBdID0gcGVyY2VudFRvQWJzb2x1dGUobGNoWzBdLCAwLCAxMDApO1xuICAgICAgICBsY2hbMV0gPSBwZXJjZW50VG9BYnNvbHV0ZShub25lVG9WYWx1ZShsY2hbMV0sIDApLCAwLCAxNTAsIGZhbHNlKTtcbiAgICAgICAgbGNoWzJdID0gK25vbmVUb1ZhbHVlKGxjaFsyXS5yZXBsYWNlKCdkZWcnLCAnJyksIDApO1xuICAgICAgICAvLyBjb252ZXJ0IHRvIEQ1MCBMYWIgd2hpdGVwb2ludFxuICAgICAgICBjb25zdCB3cCA9IGdldExhYldoaXRlUG9pbnQoKTtcbiAgICAgICAgc2V0TGFiV2hpdGVQb2ludCgnZDUwJyk7XG4gICAgICAgIGNvbnN0IHJnYiA9IHJvdW5kUkdCKGxjaDJyZ2IobGNoKSk7XG4gICAgICAgIC8vIGNvbnZlcnQgYmFjayB0byBvcmlnaW5hbCBMYWIgd2hpdGVwb2ludFxuICAgICAgICBzZXRMYWJXaGl0ZVBvaW50KHdwKTtcbiAgICAgICAgY29uc3QgYWxwaGEgPSBtWzRdICE9PSB1bmRlZmluZWQgPyArcGVyY2VudFRvQWJzb2x1dGUobVs0XSwgMCwgMSkgOiAxO1xuICAgICAgICByZ2JbM10gPSBhbHBoYTtcbiAgICAgICAgcmV0dXJuIHJnYjtcbiAgICB9XG5cbiAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfT0tMQUIpKSkge1xuICAgICAgICBjb25zdCBva2xhYiA9IG0uc2xpY2UoMSwgNCk7XG4gICAgICAgIG9rbGFiWzBdID0gcGVyY2VudFRvQWJzb2x1dGUobm9uZVRvVmFsdWUob2tsYWJbMF0sIDApLCAwLCAxKTtcbiAgICAgICAgb2tsYWJbMV0gPSBwZXJjZW50VG9BYnNvbHV0ZShub25lVG9WYWx1ZShva2xhYlsxXSwgMCksIC0wLjQsIDAuNCwgdHJ1ZSk7XG4gICAgICAgIG9rbGFiWzJdID0gcGVyY2VudFRvQWJzb2x1dGUobm9uZVRvVmFsdWUob2tsYWJbMl0sIDApLCAtMC40LCAwLjQsIHRydWUpO1xuICAgICAgICBjb25zdCByZ2IgPSByb3VuZFJHQihva2xhYjJyZ2Iob2tsYWIpKTtcbiAgICAgICAgY29uc3QgYWxwaGEgPSBtWzRdICE9PSB1bmRlZmluZWQgPyArcGVyY2VudFRvQWJzb2x1dGUobVs0XSwgMCwgMSkgOiAxO1xuICAgICAgICByZ2JbM10gPSBhbHBoYTtcbiAgICAgICAgcmV0dXJuIHJnYjtcbiAgICB9XG5cbiAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfT0tMQ0gpKSkge1xuICAgICAgICBjb25zdCBva2xjaCA9IG0uc2xpY2UoMSwgNCk7XG4gICAgICAgIG9rbGNoWzBdID0gcGVyY2VudFRvQWJzb2x1dGUobm9uZVRvVmFsdWUob2tsY2hbMF0sIDApLCAwLCAxKTtcbiAgICAgICAgb2tsY2hbMV0gPSBwZXJjZW50VG9BYnNvbHV0ZShub25lVG9WYWx1ZShva2xjaFsxXSwgMCksIDAsIDAuNCwgZmFsc2UpO1xuICAgICAgICBva2xjaFsyXSA9ICtub25lVG9WYWx1ZShva2xjaFsyXS5yZXBsYWNlKCdkZWcnLCAnJyksIDApO1xuICAgICAgICBjb25zdCByZ2IgPSByb3VuZFJHQihva2xjaDJyZ2Iob2tsY2gpKTtcbiAgICAgICAgY29uc3QgYWxwaGEgPSBtWzRdICE9PSB1bmRlZmluZWQgPyArcGVyY2VudFRvQWJzb2x1dGUobVs0XSwgMCwgMSkgOiAxO1xuICAgICAgICByZ2JbM10gPSBhbHBoYTtcbiAgICAgICAgcmV0dXJuIHJnYjtcbiAgICB9XG59O1xuXG5jc3MycmdiLnRlc3QgPSAocykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIC8vIG1vZGVyblxuICAgICAgICBSRV9SR0IudGVzdChzKSB8fFxuICAgICAgICBSRV9IU0wudGVzdChzKSB8fFxuICAgICAgICBSRV9MQUIudGVzdChzKSB8fFxuICAgICAgICBSRV9MQ0gudGVzdChzKSB8fFxuICAgICAgICBSRV9PS0xBQi50ZXN0KHMpIHx8XG4gICAgICAgIFJFX09LTENILnRlc3QocykgfHxcbiAgICAgICAgLy8gbGVnYWN5XG4gICAgICAgIFJFX1JHQl9MRUdBQ1kudGVzdChzKSB8fFxuICAgICAgICBSRV9SR0JBX0xFR0FDWS50ZXN0KHMpIHx8XG4gICAgICAgIFJFX0hTTF9MRUdBQ1kudGVzdChzKSB8fFxuICAgICAgICBSRV9IU0xBX0xFR0FDWS50ZXN0KHMpIHx8XG4gICAgICAgIHMgPT09ICd0cmFuc3BhcmVudCdcbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3NzMnJnYjtcbiIsImltcG9ydCB7IHVucGFjaywgbGFzdCwgcm5kMiB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcblxuLypcbiAqIHN1cHBvcnRlZCBhcmd1bWVudHM6XG4gKiAtIGhzbDJjc3MoaCxzLGwpXG4gKiAtIGhzbDJjc3MoaCxzLGwsYSlcbiAqIC0gaHNsMmNzcyhbaCxzLGxdLCBtb2RlKVxuICogLSBoc2wyY3NzKFtoLHMsbCxhXSwgbW9kZSlcbiAqIC0gaHNsMmNzcyh7aCxzLGwsYX0sIG1vZGUpXG4gKi9cbmNvbnN0IGhzbDJjc3MgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IGhzbGEgPSB1bnBhY2soYXJncywgJ2hzbGEnKTtcbiAgICBsZXQgbW9kZSA9IGxhc3QoYXJncykgfHwgJ2xzYSc7XG4gICAgaHNsYVswXSA9IHJuZDIoaHNsYVswXSB8fCAwKSArICdkZWcnO1xuICAgIGhzbGFbMV0gPSBybmQyKGhzbGFbMV0gKiAxMDApICsgJyUnO1xuICAgIGhzbGFbMl0gPSBybmQyKGhzbGFbMl0gKiAxMDApICsgJyUnO1xuICAgIGlmIChtb2RlID09PSAnaHNsYScgfHwgKGhzbGEubGVuZ3RoID4gMyAmJiBoc2xhWzNdIDwgMSkpIHtcbiAgICAgICAgaHNsYVszXSA9ICcvICcgKyAoaHNsYS5sZW5ndGggPiAzID8gaHNsYVszXSA6IDEpO1xuICAgICAgICBtb2RlID0gJ2hzbGEnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhzbGEubGVuZ3RoID0gMztcbiAgICB9XG4gICAgcmV0dXJuIGAke21vZGUuc3Vic3RyKDAsIDMpfSgke2hzbGEuam9pbignICcpfSlgO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaHNsMmNzcztcbiIsImltcG9ydCBjaHJvbWEgZnJvbSAnLi4vLi4vY2hyb21hLmpzJztcbmltcG9ydCBDb2xvciBmcm9tICcuLi8uLi9Db2xvci5qcyc7XG5pbXBvcnQgaW5wdXQgZnJvbSAnLi4vaW5wdXQuanMnO1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcblxuaW1wb3J0IHJnYjJjc3MgZnJvbSAnLi9yZ2IyY3NzLmpzJztcbmltcG9ydCBjc3MycmdiIGZyb20gJy4vY3NzMnJnYi5qcyc7XG5cbkNvbG9yLnByb3RvdHlwZS5jc3MgPSBmdW5jdGlvbiAobW9kZSkge1xuICAgIHJldHVybiByZ2IyY3NzKHRoaXMuX3JnYiwgbW9kZSk7XG59O1xuXG5jb25zdCBjc3MgPSAoLi4uYXJncykgPT4gbmV3IENvbG9yKC4uLmFyZ3MsICdjc3MnKTtcbmNocm9tYS5jc3MgPSBjc3M7XG5cbmlucHV0LmZvcm1hdC5jc3MgPSBjc3MycmdiO1xuXG5pbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgIHA6IDUsXG4gICAgdGVzdDogKGgsIC4uLnJlc3QpID0+IHtcbiAgICAgICAgaWYgKCFyZXN0Lmxlbmd0aCAmJiB0eXBlKGgpID09PSAnc3RyaW5nJyAmJiBjc3MycmdiLnRlc3QoaCkpIHtcbiAgICAgICAgICAgIHJldHVybiAnY3NzJztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5leHBvcnQgeyBjc3MgfTtcbiIsImltcG9ydCB7IHVucGFjaywgbGFzdCwgcm5kMiB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcblxuLypcbiAqIHN1cHBvcnRlZCBhcmd1bWVudHM6XG4gKiAtIGxhYjJjc3MobCxhLGIpXG4gKiAtIGxhYjJjc3MobCxhLGIsYWxwaGEpXG4gKiAtIGxhYjJjc3MoW2wsYSxiXSwgbW9kZSlcbiAqIC0gbGFiMmNzcyhbbCxhLGIsYWxwaGFdLCBtb2RlKVxuICovXG5jb25zdCBsYWIyY3NzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBsYWJhID0gdW5wYWNrKGFyZ3MsICdsYWInKTtcbiAgICBsZXQgbW9kZSA9IGxhc3QoYXJncykgfHwgJ2xhYic7XG4gICAgbGFiYVswXSA9IHJuZDIobGFiYVswXSkgKyAnJSc7XG4gICAgbGFiYVsxXSA9IHJuZDIobGFiYVsxXSk7XG4gICAgbGFiYVsyXSA9IHJuZDIobGFiYVsyXSk7XG4gICAgaWYgKG1vZGUgPT09ICdsYWJhJyB8fCAobGFiYS5sZW5ndGggPiAzICYmIGxhYmFbM10gPCAxKSkge1xuICAgICAgICBsYWJhWzNdID0gJy8gJyArIChsYWJhLmxlbmd0aCA+IDMgPyBsYWJhWzNdIDogMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGFiYS5sZW5ndGggPSAzO1xuICAgIH1cbiAgICByZXR1cm4gYGxhYigke2xhYmEuam9pbignICcpfSlgO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbGFiMmNzcztcbiIsImltcG9ydCB7IHVucGFjaywgbGFzdCwgcm5kMiB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcblxuLypcbiAqIHN1cHBvcnRlZCBhcmd1bWVudHM6XG4gKiAtIGxhYjJjc3MobCxhLGIpXG4gKiAtIGxhYjJjc3MobCxhLGIsYWxwaGEpXG4gKiAtIGxhYjJjc3MoW2wsYSxiXSwgbW9kZSlcbiAqIC0gbGFiMmNzcyhbbCxhLGIsYWxwaGFdLCBtb2RlKVxuICovXG5jb25zdCBsY2gyY3NzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBsY2hhID0gdW5wYWNrKGFyZ3MsICdsY2gnKTtcbiAgICBsZXQgbW9kZSA9IGxhc3QoYXJncykgfHwgJ2xhYic7XG4gICAgbGNoYVswXSA9IHJuZDIobGNoYVswXSkgKyAnJSc7XG4gICAgbGNoYVsxXSA9IHJuZDIobGNoYVsxXSk7XG4gICAgbGNoYVsyXSA9IGlzTmFOKGxjaGFbMl0pID8gJ25vbmUnIDogcm5kMihsY2hhWzJdKSArICdkZWcnOyAvLyBhZGQgZGVnIHVuaXQgdG8gaHVlXG4gICAgaWYgKG1vZGUgPT09ICdsY2hhJyB8fCAobGNoYS5sZW5ndGggPiAzICYmIGxjaGFbM10gPCAxKSkge1xuICAgICAgICBsY2hhWzNdID0gJy8gJyArIChsY2hhLmxlbmd0aCA+IDMgPyBsY2hhWzNdIDogMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGNoYS5sZW5ndGggPSAzO1xuICAgIH1cbiAgICByZXR1cm4gYGxjaCgke2xjaGEuam9pbignICcpfSlgO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbGNoMmNzcztcbiIsImltcG9ydCB7IHVucGFjaywgcm5kMiwgcm5kMyB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcblxuY29uc3Qgb2tsYWIyY3NzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBsYWJhID0gdW5wYWNrKGFyZ3MsICdsYWInKTtcbiAgICBsYWJhWzBdID0gcm5kMihsYWJhWzBdICogMTAwKSArICclJztcbiAgICBsYWJhWzFdID0gcm5kMyhsYWJhWzFdKTtcbiAgICBsYWJhWzJdID0gcm5kMyhsYWJhWzJdKTtcbiAgICBpZiAobGFiYS5sZW5ndGggPiAzICYmIGxhYmFbM10gPCAxKSB7XG4gICAgICAgIGxhYmFbM10gPSAnLyAnICsgKGxhYmEubGVuZ3RoID4gMyA/IGxhYmFbM10gOiAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsYWJhLmxlbmd0aCA9IDM7XG4gICAgfVxuICAgIHJldHVybiBgb2tsYWIoJHtsYWJhLmpvaW4oJyAnKX0pYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9rbGFiMmNzcztcbiIsImltcG9ydCB7IHVucGFjaywgcm5kMiwgcm5kMyB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcblxuY29uc3Qgb2tsY2gyY3NzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBsY2hhID0gdW5wYWNrKGFyZ3MsICdsY2gnKTtcbiAgICBsY2hhWzBdID0gcm5kMihsY2hhWzBdICogMTAwKSArICclJztcbiAgICBsY2hhWzFdID0gcm5kMyhsY2hhWzFdKTtcbiAgICBsY2hhWzJdID0gaXNOYU4obGNoYVsyXSkgPyAnbm9uZScgOiBybmQyKGxjaGFbMl0pICsgJ2RlZyc7IC8vIGFkZCBkZWcgdW5pdCB0byBodWVcbiAgICBpZiAobGNoYS5sZW5ndGggPiAzICYmIGxjaGFbM10gPCAxKSB7XG4gICAgICAgIGxjaGFbM10gPSAnLyAnICsgKGxjaGEubGVuZ3RoID4gMyA/IGxjaGFbM10gOiAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsY2hhLmxlbmd0aCA9IDM7XG4gICAgfVxuICAgIHJldHVybiBgb2tsY2goJHtsY2hhLmpvaW4oJyAnKX0pYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9rbGNoMmNzcztcbiIsImltcG9ydCB7IHVucGFjaywgbGFzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcbmltcG9ydCBoc2wyY3NzIGZyb20gJy4vaHNsMmNzcy5qcyc7XG5pbXBvcnQgcmdiMmhzbCBmcm9tICcuLi9oc2wvcmdiMmhzbC5qcyc7XG5pbXBvcnQgbGFiMmNzcyBmcm9tICcuL2xhYjJjc3MuanMnO1xuaW1wb3J0IHJnYjJsYWIgZnJvbSAnLi4vbGFiL3JnYjJsYWIuanMnO1xuaW1wb3J0IGxjaDJjc3MgZnJvbSAnLi9sY2gyY3NzLmpzJztcbmltcG9ydCByZ2IybGNoIGZyb20gJy4uL2xjaC9yZ2IybGNoLmpzJztcbmltcG9ydCByZ2Iyb2tsYWIgZnJvbSAnLi4vb2tsYWIvcmdiMm9rbGFiLmpzJztcbmltcG9ydCBva2xhYjJjc3MgZnJvbSAnLi9va2xhYjJjc3MuanMnO1xuaW1wb3J0IHJnYjJva2xjaCBmcm9tICcuLi9va2xjaC9yZ2Iyb2tsY2guanMnO1xuaW1wb3J0IG9rbGNoMmNzcyBmcm9tICcuL29rbGNoMmNzcy5qcyc7XG5pbXBvcnQgeyBnZXRMYWJXaGl0ZVBvaW50LCBzZXRMYWJXaGl0ZVBvaW50IH0gZnJvbSAnLi4vbGFiL2xhYi1jb25zdGFudHMuanMnO1xuY29uc3QgeyByb3VuZCB9ID0gTWF0aDtcblxuLypcbiAqIHN1cHBvcnRlZCBhcmd1bWVudHM6XG4gKiAtIHJnYjJjc3MocixnLGIpXG4gKiAtIHJnYjJjc3MocixnLGIsYSlcbiAqIC0gcmdiMmNzcyhbcixnLGJdLCBtb2RlKVxuICogLSByZ2IyY3NzKFtyLGcsYixhXSwgbW9kZSlcbiAqIC0gcmdiMmNzcyh7cixnLGIsYX0sIG1vZGUpXG4gKi9cbmNvbnN0IHJnYjJjc3MgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IHJnYmEgPSB1bnBhY2soYXJncywgJ3JnYmEnKTtcbiAgICBsZXQgbW9kZSA9IGxhc3QoYXJncykgfHwgJ3JnYic7XG4gICAgaWYgKG1vZGUuc3Vic3RyKDAsIDMpID09PSAnaHNsJykge1xuICAgICAgICByZXR1cm4gaHNsMmNzcyhyZ2IyaHNsKHJnYmEpLCBtb2RlKTtcbiAgICB9XG4gICAgaWYgKG1vZGUuc3Vic3RyKDAsIDMpID09PSAnbGFiJykge1xuICAgICAgICAvLyBjaGFuZ2UgdG8gRDUwIGxhYiB3aGl0ZXBvaW50IHNpbmNlIHRoaXMgaXMgd2hhdCBXM0MgaXMgdXNpbmcgZm9yIENTUyBMYWIgY29sb3JzXG4gICAgICAgIGNvbnN0IHByZXZXaGl0ZVBvaW50ID0gZ2V0TGFiV2hpdGVQb2ludCgpO1xuICAgICAgICBzZXRMYWJXaGl0ZVBvaW50KCdkNTAnKTtcbiAgICAgICAgY29uc3QgY3NzQ29sb3IgPSBsYWIyY3NzKHJnYjJsYWIocmdiYSksIG1vZGUpO1xuICAgICAgICBzZXRMYWJXaGl0ZVBvaW50KHByZXZXaGl0ZVBvaW50KTtcbiAgICAgICAgcmV0dXJuIGNzc0NvbG9yO1xuICAgIH1cbiAgICBpZiAobW9kZS5zdWJzdHIoMCwgMykgPT09ICdsY2gnKSB7XG4gICAgICAgIC8vIGNoYW5nZSB0byBENTAgbGFiIHdoaXRlcG9pbnQgc2luY2UgdGhpcyBpcyB3aGF0IFczQyBpcyB1c2luZyBmb3IgQ1NTIExhYiBjb2xvcnNcbiAgICAgICAgY29uc3QgcHJldldoaXRlUG9pbnQgPSBnZXRMYWJXaGl0ZVBvaW50KCk7XG4gICAgICAgIHNldExhYldoaXRlUG9pbnQoJ2Q1MCcpO1xuICAgICAgICBjb25zdCBjc3NDb2xvciA9IGxjaDJjc3MocmdiMmxjaChyZ2JhKSwgbW9kZSk7XG4gICAgICAgIHNldExhYldoaXRlUG9pbnQocHJldldoaXRlUG9pbnQpO1xuICAgICAgICByZXR1cm4gY3NzQ29sb3I7XG4gICAgfVxuICAgIGlmIChtb2RlLnN1YnN0cigwLCA1KSA9PT0gJ29rbGFiJykge1xuICAgICAgICByZXR1cm4gb2tsYWIyY3NzKHJnYjJva2xhYihyZ2JhKSk7XG4gICAgfVxuICAgIGlmIChtb2RlLnN1YnN0cigwLCA1KSA9PT0gJ29rbGNoJykge1xuICAgICAgICByZXR1cm4gb2tsY2gyY3NzKHJnYjJva2xjaChyZ2JhKSk7XG4gICAgfVxuICAgIHJnYmFbMF0gPSByb3VuZChyZ2JhWzBdKTtcbiAgICByZ2JhWzFdID0gcm91bmQocmdiYVsxXSk7XG4gICAgcmdiYVsyXSA9IHJvdW5kKHJnYmFbMl0pO1xuICAgIGlmIChtb2RlID09PSAncmdiYScgfHwgKHJnYmEubGVuZ3RoID4gMyAmJiByZ2JhWzNdIDwgMSkpIHtcbiAgICAgICAgcmdiYVszXSA9ICcvICcgKyAocmdiYS5sZW5ndGggPiAzID8gcmdiYVszXSA6IDEpO1xuICAgICAgICBtb2RlID0gJ3JnYmEnO1xuICAgIH1cbiAgICByZXR1cm4gYCR7bW9kZS5zdWJzdHIoMCwgMyl9KCR7cmdiYS5zbGljZSgwLCBtb2RlID09PSAncmdiJyA/IDMgOiA0KS5qb2luKCcgJyl9KWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZ2IyY3NzO1xuIiwiaW1wb3J0IENvbG9yIGZyb20gJy4uLy4uL0NvbG9yLmpzJztcbmltcG9ydCBjaHJvbWEgZnJvbSAnLi4vLi4vY2hyb21hLmpzJztcbmltcG9ydCBpbnB1dCBmcm9tICcuLi9pbnB1dC5qcyc7XG5pbXBvcnQgeyB1bnBhY2sgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5cbmlucHV0LmZvcm1hdC5nbCA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgcmdiID0gdW5wYWNrKGFyZ3MsICdyZ2JhJyk7XG4gICAgcmdiWzBdICo9IDI1NTtcbiAgICByZ2JbMV0gKj0gMjU1O1xuICAgIHJnYlsyXSAqPSAyNTU7XG4gICAgcmV0dXJuIHJnYjtcbn07XG5cbmNvbnN0IGdsID0gKC4uLmFyZ3MpID0+IG5ldyBDb2xvciguLi5hcmdzLCAnZ2wnKTtcbmNocm9tYS5nbCA9IGdsO1xuXG5Db2xvci5wcm90b3R5cGUuZ2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmdiID0gdGhpcy5fcmdiO1xuICAgIHJldHVybiBbcmdiWzBdIC8gMjU1LCByZ2JbMV0gLyAyNTUsIHJnYlsyXSAvIDI1NSwgcmdiWzNdXTtcbn07XG5cbmV4cG9ydCB7IGdsIH07XG4iLCJpbXBvcnQgeyB1bnBhY2sgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5jb25zdCB7IGZsb29yIH0gPSBNYXRoO1xuXG4vKlxuICogdGhpcyBpcyBiYXNpY2FsbHkganVzdCBIU1Ygd2l0aCBzb21lIG1pbm9yIHR3ZWFrc1xuICpcbiAqIGh1ZS4uIFswLi4zNjBdXG4gKiBjaHJvbWEgLi4gWzAuLjFdXG4gKiBncmF5bmVzcyAuLiBbMC4uMV1cbiAqL1xuXG5jb25zdCBoY2cycmdiID0gKC4uLmFyZ3MpID0+IHtcbiAgICBhcmdzID0gdW5wYWNrKGFyZ3MsICdoY2cnKTtcbiAgICBsZXQgW2gsIGMsIF9nXSA9IGFyZ3M7XG4gICAgbGV0IHIsIGcsIGI7XG4gICAgX2cgPSBfZyAqIDI1NTtcbiAgICBjb25zdCBfYyA9IGMgKiAyNTU7XG4gICAgaWYgKGMgPT09IDApIHtcbiAgICAgICAgciA9IGcgPSBiID0gX2c7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGggPT09IDM2MCkgaCA9IDA7XG4gICAgICAgIGlmIChoID4gMzYwKSBoIC09IDM2MDtcbiAgICAgICAgaWYgKGggPCAwKSBoICs9IDM2MDtcbiAgICAgICAgaCAvPSA2MDtcbiAgICAgICAgY29uc3QgaSA9IGZsb29yKGgpO1xuICAgICAgICBjb25zdCBmID0gaCAtIGk7XG4gICAgICAgIGNvbnN0IHAgPSBfZyAqICgxIC0gYyk7XG4gICAgICAgIGNvbnN0IHEgPSBwICsgX2MgKiAoMSAtIGYpO1xuICAgICAgICBjb25zdCB0ID0gcCArIF9jICogZjtcbiAgICAgICAgY29uc3QgdiA9IHAgKyBfYztcbiAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgW3IsIGcsIGJdID0gW3YsIHQsIHBdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIFtyLCBnLCBiXSA9IFtxLCB2LCBwXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBbciwgZywgYl0gPSBbcCwgdiwgdF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgW3IsIGcsIGJdID0gW3AsIHEsIHZdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIFtyLCBnLCBiXSA9IFt0LCBwLCB2XTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBbciwgZywgYl0gPSBbdiwgcCwgcV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtyLCBnLCBiLCBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogMV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoY2cycmdiO1xuIiwiaW1wb3J0IHsgdW5wYWNrLCB0eXBlIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuaW1wb3J0IGNocm9tYSBmcm9tICcuLi8uLi9jaHJvbWEuanMnO1xuaW1wb3J0IENvbG9yIGZyb20gJy4uLy4uL0NvbG9yLmpzJztcbmltcG9ydCBpbnB1dCBmcm9tICcuLi9pbnB1dC5qcyc7XG5pbXBvcnQgaGNnMnJnYiBmcm9tICcuL2hjZzJyZ2IuanMnO1xuaW1wb3J0IHJnYjJoY2cgZnJvbSAnLi9yZ2IyaGNnLmpzJztcblxuQ29sb3IucHJvdG90eXBlLmhjZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmdiMmhjZyh0aGlzLl9yZ2IpO1xufTtcblxuY29uc3QgaGNnID0gKC4uLmFyZ3MpID0+IG5ldyBDb2xvciguLi5hcmdzLCAnaGNnJyk7XG5jaHJvbWEuaGNnID0gaGNnO1xuXG5pbnB1dC5mb3JtYXQuaGNnID0gaGNnMnJnYjtcblxuaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICBwOiAxLFxuICAgIHRlc3Q6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGFyZ3MgPSB1bnBhY2soYXJncywgJ2hjZycpO1xuICAgICAgICBpZiAodHlwZShhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgcmV0dXJuICdoY2cnO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmV4cG9ydCB7IGhjZyB9O1xuIiwiaW1wb3J0IHsgdW5wYWNrLCBtYXgsIG1pbiB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcblxuY29uc3QgcmdiMmhjZyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgW3IsIGcsIGJdID0gdW5wYWNrKGFyZ3MsICdyZ2InKTtcbiAgICBjb25zdCBtaW5SZ2IgPSBtaW4ociwgZywgYik7XG4gICAgY29uc3QgbWF4UmdiID0gbWF4KHIsIGcsIGIpO1xuICAgIGNvbnN0IGRlbHRhID0gbWF4UmdiIC0gbWluUmdiO1xuICAgIGNvbnN0IGMgPSAoZGVsdGEgKiAxMDApIC8gMjU1O1xuICAgIGNvbnN0IF9nID0gKG1pblJnYiAvICgyNTUgLSBkZWx0YSkpICogMTAwO1xuICAgIGxldCBoO1xuICAgIGlmIChkZWx0YSA9PT0gMCkge1xuICAgICAgICBoID0gTnVtYmVyLk5hTjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAociA9PT0gbWF4UmdiKSBoID0gKGcgLSBiKSAvIGRlbHRhO1xuICAgICAgICBpZiAoZyA9PT0gbWF4UmdiKSBoID0gMiArIChiIC0gcikgLyBkZWx0YTtcbiAgICAgICAgaWYgKGIgPT09IG1heFJnYikgaCA9IDQgKyAociAtIGcpIC8gZGVsdGE7XG4gICAgICAgIGggKj0gNjA7XG4gICAgICAgIGlmIChoIDwgMCkgaCArPSAzNjA7XG4gICAgfVxuICAgIHJldHVybiBbaCwgYywgX2ddO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmdiMmhjZztcbiIsImNvbnN0IFJFX0hFWCA9IC9eIz8oW0EtRmEtZjAtOV17Nn18W0EtRmEtZjAtOV17M30pJC87XG5jb25zdCBSRV9IRVhBID0gL14jPyhbQS1GYS1mMC05XXs4fXxbQS1GYS1mMC05XXs0fSkkLztcblxuY29uc3QgaGV4MnJnYiA9IChoZXgpID0+IHtcbiAgICBpZiAoaGV4Lm1hdGNoKFJFX0hFWCkpIHtcbiAgICAgICAgLy8gcmVtb3ZlIG9wdGlvbmFsIGxlYWRpbmcgI1xuICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gNCB8fCBoZXgubGVuZ3RoID09PSA3KSB7XG4gICAgICAgICAgICBoZXggPSBoZXguc3Vic3RyKDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGV4cGFuZCBzaG9ydC1ub3RhdGlvbiB0byBmdWxsIHNpeC1kaWdpdFxuICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgaGV4ID0gaGV4LnNwbGl0KCcnKTtcbiAgICAgICAgICAgIGhleCA9IGhleFswXSArIGhleFswXSArIGhleFsxXSArIGhleFsxXSArIGhleFsyXSArIGhleFsyXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1ID0gcGFyc2VJbnQoaGV4LCAxNik7XG4gICAgICAgIGNvbnN0IHIgPSB1ID4+IDE2O1xuICAgICAgICBjb25zdCBnID0gKHUgPj4gOCkgJiAweGZmO1xuICAgICAgICBjb25zdCBiID0gdSAmIDB4ZmY7XG4gICAgICAgIHJldHVybiBbciwgZywgYiwgMV07XG4gICAgfVxuXG4gICAgLy8gbWF0Y2ggcmdiYSBoZXggZm9ybWF0LCBlZyAjRkYwMDAwNzdcbiAgICBpZiAoaGV4Lm1hdGNoKFJFX0hFWEEpKSB7XG4gICAgICAgIGlmIChoZXgubGVuZ3RoID09PSA1IHx8IGhleC5sZW5ndGggPT09IDkpIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBvcHRpb25hbCBsZWFkaW5nICNcbiAgICAgICAgICAgIGhleCA9IGhleC5zdWJzdHIoMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXhwYW5kIHNob3J0LW5vdGF0aW9uIHRvIGZ1bGwgZWlnaHQtZGlnaXRcbiAgICAgICAgaWYgKGhleC5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIGhleCA9IGhleC5zcGxpdCgnJyk7XG4gICAgICAgICAgICBoZXggPVxuICAgICAgICAgICAgICAgIGhleFswXSArXG4gICAgICAgICAgICAgICAgaGV4WzBdICtcbiAgICAgICAgICAgICAgICBoZXhbMV0gK1xuICAgICAgICAgICAgICAgIGhleFsxXSArXG4gICAgICAgICAgICAgICAgaGV4WzJdICtcbiAgICAgICAgICAgICAgICBoZXhbMl0gK1xuICAgICAgICAgICAgICAgIGhleFszXSArXG4gICAgICAgICAgICAgICAgaGV4WzNdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHUgPSBwYXJzZUludChoZXgsIDE2KTtcbiAgICAgICAgY29uc3QgciA9ICh1ID4+IDI0KSAmIDB4ZmY7XG4gICAgICAgIGNvbnN0IGcgPSAodSA+PiAxNikgJiAweGZmO1xuICAgICAgICBjb25zdCBiID0gKHUgPj4gOCkgJiAweGZmO1xuICAgICAgICBjb25zdCBhID0gTWF0aC5yb3VuZCgoKHUgJiAweGZmKSAvIDB4ZmYpICogMTAwKSAvIDEwMDtcbiAgICAgICAgcmV0dXJuIFtyLCBnLCBiLCBhXTtcbiAgICB9XG5cbiAgICAvLyB3ZSB1c2VkIHRvIGNoZWNrIGZvciBjc3MgY29sb3JzIGhlcmVcbiAgICAvLyBpZiBfaW5wdXQuY3NzPyBhbmQgcmdiID0gX2lucHV0LmNzcyBoZXhcbiAgICAvLyAgICAgcmV0dXJuIHJnYlxuXG4gICAgdGhyb3cgbmV3IEVycm9yKGB1bmtub3duIGhleCBjb2xvcjogJHtoZXh9YCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZXgycmdiO1xuIiwiaW1wb3J0IENvbG9yIGZyb20gJy4uLy4uL0NvbG9yLmpzJztcbmltcG9ydCBjaHJvbWEgZnJvbSAnLi4vLi4vY2hyb21hLmpzJztcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5pbXBvcnQgaW5wdXQgZnJvbSAnLi4vaW5wdXQuanMnO1xuaW1wb3J0IGhleDJyZ2IgZnJvbSAnLi9oZXgycmdiLmpzJztcbmltcG9ydCByZ2IyaGV4IGZyb20gJy4vcmdiMmhleC5qcyc7XG5cbkNvbG9yLnByb3RvdHlwZS5oZXggPSBmdW5jdGlvbiAobW9kZSkge1xuICAgIHJldHVybiByZ2IyaGV4KHRoaXMuX3JnYiwgbW9kZSk7XG59O1xuXG5jb25zdCBoZXggPSAoLi4uYXJncykgPT4gbmV3IENvbG9yKC4uLmFyZ3MsICdoZXgnKTtcbmNocm9tYS5oZXggPSBoZXg7XG5cbmlucHV0LmZvcm1hdC5oZXggPSBoZXgycmdiO1xuaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICBwOiA0LFxuICAgIHRlc3Q6IChoLCAuLi5yZXN0KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICFyZXN0Lmxlbmd0aCAmJlxuICAgICAgICAgICAgdHlwZShoKSA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgICAgIFszLCA0LCA1LCA2LCA3LCA4LCA5XS5pbmRleE9mKGgubGVuZ3RoKSA+PSAwXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuICdoZXgnO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmV4cG9ydCB7IGhleCB9O1xuIiwiaW1wb3J0IHsgdW5wYWNrLCBsYXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuY29uc3QgeyByb3VuZCB9ID0gTWF0aDtcblxuY29uc3QgcmdiMmhleCA9ICguLi5hcmdzKSA9PiB7XG4gICAgbGV0IFtyLCBnLCBiLCBhXSA9IHVucGFjayhhcmdzLCAncmdiYScpO1xuICAgIGxldCBtb2RlID0gbGFzdChhcmdzKSB8fCAnYXV0byc7XG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkgYSA9IDE7XG4gICAgaWYgKG1vZGUgPT09ICdhdXRvJykge1xuICAgICAgICBtb2RlID0gYSA8IDEgPyAncmdiYScgOiAncmdiJztcbiAgICB9XG4gICAgciA9IHJvdW5kKHIpO1xuICAgIGcgPSByb3VuZChnKTtcbiAgICBiID0gcm91bmQoYik7XG4gICAgY29uc3QgdSA9IChyIDw8IDE2KSB8IChnIDw8IDgpIHwgYjtcbiAgICBsZXQgc3RyID0gJzAwMDAwMCcgKyB1LnRvU3RyaW5nKDE2KTsgLy8jLnRvVXBwZXJDYXNlKCk7XG4gICAgc3RyID0gc3RyLnN1YnN0cihzdHIubGVuZ3RoIC0gNik7XG4gICAgbGV0IGh4YSA9ICcwJyArIHJvdW5kKGEgKiAyNTUpLnRvU3RyaW5nKDE2KTtcbiAgICBoeGEgPSBoeGEuc3Vic3RyKGh4YS5sZW5ndGggLSAyKTtcbiAgICBzd2l0Y2ggKG1vZGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjYXNlICdyZ2JhJzpcbiAgICAgICAgICAgIHJldHVybiBgIyR7c3RyfSR7aHhhfWA7XG4gICAgICAgIGNhc2UgJ2FyZ2InOlxuICAgICAgICAgICAgcmV0dXJuIGAjJHtoeGF9JHtzdHJ9YDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBgIyR7c3RyfWA7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmdiMmhleDtcbiIsImltcG9ydCB7IHVucGFjaywgbGltaXQsIFRXT1BJLCBQSVRISVJEIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuY29uc3QgeyBjb3MgfSA9IE1hdGg7XG5cbi8qXG4gKiBodWUgWzAuLjM2MF1cbiAqIHNhdHVyYXRpb24gWzAuLjFdXG4gKiBpbnRlbnNpdHkgWzAuLjFdXG4gKi9cbmNvbnN0IGhzaTJyZ2IgPSAoLi4uYXJncykgPT4ge1xuICAgIC8qXG4gICAgYm9ycm93ZWQgZnJvbSBoZXJlOlxuICAgIGh0dHA6Ly9odW1tZXIuc3RhbmZvcmQuZWR1L211c2VpbmZvL2RvYy9leGFtcGxlcy9odW1kcnVtL2tleXNjYXBlMi9oc2kycmdiLmNwcFxuICAgICovXG4gICAgYXJncyA9IHVucGFjayhhcmdzLCAnaHNpJyk7XG4gICAgbGV0IFtoLCBzLCBpXSA9IGFyZ3M7XG4gICAgbGV0IHIsIGcsIGI7XG5cbiAgICBpZiAoaXNOYU4oaCkpIGggPSAwO1xuICAgIGlmIChpc05hTihzKSkgcyA9IDA7XG4gICAgLy8gbm9ybWFsaXplIGh1ZVxuICAgIGlmIChoID4gMzYwKSBoIC09IDM2MDtcbiAgICBpZiAoaCA8IDApIGggKz0gMzYwO1xuICAgIGggLz0gMzYwO1xuICAgIGlmIChoIDwgMSAvIDMpIHtcbiAgICAgICAgYiA9ICgxIC0gcykgLyAzO1xuICAgICAgICByID0gKDEgKyAocyAqIGNvcyhUV09QSSAqIGgpKSAvIGNvcyhQSVRISVJEIC0gVFdPUEkgKiBoKSkgLyAzO1xuICAgICAgICBnID0gMSAtIChiICsgcik7XG4gICAgfSBlbHNlIGlmIChoIDwgMiAvIDMpIHtcbiAgICAgICAgaCAtPSAxIC8gMztcbiAgICAgICAgciA9ICgxIC0gcykgLyAzO1xuICAgICAgICBnID0gKDEgKyAocyAqIGNvcyhUV09QSSAqIGgpKSAvIGNvcyhQSVRISVJEIC0gVFdPUEkgKiBoKSkgLyAzO1xuICAgICAgICBiID0gMSAtIChyICsgZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaCAtPSAyIC8gMztcbiAgICAgICAgZyA9ICgxIC0gcykgLyAzO1xuICAgICAgICBiID0gKDEgKyAocyAqIGNvcyhUV09QSSAqIGgpKSAvIGNvcyhQSVRISVJEIC0gVFdPUEkgKiBoKSkgLyAzO1xuICAgICAgICByID0gMSAtIChnICsgYik7XG4gICAgfVxuICAgIHIgPSBsaW1pdChpICogciAqIDMpO1xuICAgIGcgPSBsaW1pdChpICogZyAqIDMpO1xuICAgIGIgPSBsaW1pdChpICogYiAqIDMpO1xuICAgIHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NSwgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IDFdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaHNpMnJnYjtcbiIsImltcG9ydCB7IHVucGFjaywgdHlwZSB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcbmltcG9ydCBjaHJvbWEgZnJvbSAnLi4vLi4vY2hyb21hLmpzJztcbmltcG9ydCBDb2xvciBmcm9tICcuLi8uLi9Db2xvci5qcyc7XG5pbXBvcnQgaW5wdXQgZnJvbSAnLi4vaW5wdXQuanMnO1xuaW1wb3J0IGhzaTJyZ2IgZnJvbSAnLi9oc2kycmdiLmpzJztcbmltcG9ydCByZ2IyaHNpIGZyb20gJy4vcmdiMmhzaS5qcyc7XG5cbkNvbG9yLnByb3RvdHlwZS5oc2kgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJnYjJoc2kodGhpcy5fcmdiKTtcbn07XG5cbmNvbnN0IGhzaSA9ICguLi5hcmdzKSA9PiBuZXcgQ29sb3IoLi4uYXJncywgJ2hzaScpO1xuY2hyb21hLmhzaSA9IGhzaTtcblxuaW5wdXQuZm9ybWF0LmhzaSA9IGhzaTJyZ2I7XG5cbmlucHV0LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgcDogMixcbiAgICB0ZXN0OiAoLi4uYXJncykgPT4ge1xuICAgICAgICBhcmdzID0gdW5wYWNrKGFyZ3MsICdoc2knKTtcbiAgICAgICAgaWYgKHR5cGUoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIHJldHVybiAnaHNpJztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5leHBvcnQgeyBoc2kgfTtcbiIsImltcG9ydCB7IHVucGFjaywgVFdPUEkgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5jb25zdCB7IG1pbiwgc3FydCwgYWNvcyB9ID0gTWF0aDtcblxuY29uc3QgcmdiMmhzaSA9ICguLi5hcmdzKSA9PiB7XG4gICAgLypcbiAgICBib3Jyb3dlZCBmcm9tIGhlcmU6XG4gICAgaHR0cDovL2h1bW1lci5zdGFuZm9yZC5lZHUvbXVzZWluZm8vZG9jL2V4YW1wbGVzL2h1bWRydW0va2V5c2NhcGUyL3JnYjJoc2kuY3BwXG4gICAgKi9cbiAgICBsZXQgW3IsIGcsIGJdID0gdW5wYWNrKGFyZ3MsICdyZ2InKTtcbiAgICByIC89IDI1NTtcbiAgICBnIC89IDI1NTtcbiAgICBiIC89IDI1NTtcbiAgICBsZXQgaDtcbiAgICBjb25zdCBtaW5fID0gbWluKHIsIGcsIGIpO1xuICAgIGNvbnN0IGkgPSAociArIGcgKyBiKSAvIDM7XG4gICAgY29uc3QgcyA9IGkgPiAwID8gMSAtIG1pbl8gLyBpIDogMDtcbiAgICBpZiAocyA9PT0gMCkge1xuICAgICAgICBoID0gTmFOO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGggPSAociAtIGcgKyAociAtIGIpKSAvIDI7XG4gICAgICAgIGggLz0gc3FydCgociAtIGcpICogKHIgLSBnKSArIChyIC0gYikgKiAoZyAtIGIpKTtcbiAgICAgICAgaCA9IGFjb3MoaCk7XG4gICAgICAgIGlmIChiID4gZykge1xuICAgICAgICAgICAgaCA9IFRXT1BJIC0gaDtcbiAgICAgICAgfVxuICAgICAgICBoIC89IFRXT1BJO1xuICAgIH1cbiAgICByZXR1cm4gW2ggKiAzNjAsIHMsIGldO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmdiMmhzaTtcbiIsImltcG9ydCB7IHVucGFjayB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcblxuY29uc3QgaHNsMnJnYiA9ICguLi5hcmdzKSA9PiB7XG4gICAgYXJncyA9IHVucGFjayhhcmdzLCAnaHNsJyk7XG4gICAgY29uc3QgW2gsIHMsIGxdID0gYXJncztcbiAgICBsZXQgciwgZywgYjtcbiAgICBpZiAocyA9PT0gMCkge1xuICAgICAgICByID0gZyA9IGIgPSBsICogMjU1O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHQzID0gWzAsIDAsIDBdO1xuICAgICAgICBjb25zdCBjID0gWzAsIDAsIDBdO1xuICAgICAgICBjb25zdCB0MiA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XG4gICAgICAgIGNvbnN0IHQxID0gMiAqIGwgLSB0MjtcbiAgICAgICAgY29uc3QgaF8gPSBoIC8gMzYwO1xuICAgICAgICB0M1swXSA9IGhfICsgMSAvIDM7XG4gICAgICAgIHQzWzFdID0gaF87XG4gICAgICAgIHQzWzJdID0gaF8gLSAxIC8gMztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0M1tpXSA8IDApIHQzW2ldICs9IDE7XG4gICAgICAgICAgICBpZiAodDNbaV0gPiAxKSB0M1tpXSAtPSAxO1xuICAgICAgICAgICAgaWYgKDYgKiB0M1tpXSA8IDEpIGNbaV0gPSB0MSArICh0MiAtIHQxKSAqIDYgKiB0M1tpXTtcbiAgICAgICAgICAgIGVsc2UgaWYgKDIgKiB0M1tpXSA8IDEpIGNbaV0gPSB0MjtcbiAgICAgICAgICAgIGVsc2UgaWYgKDMgKiB0M1tpXSA8IDIpIGNbaV0gPSB0MSArICh0MiAtIHQxKSAqICgyIC8gMyAtIHQzW2ldKSAqIDY7XG4gICAgICAgICAgICBlbHNlIGNbaV0gPSB0MTtcbiAgICAgICAgfVxuICAgICAgICBbciwgZywgYl0gPSBbY1swXSAqIDI1NSwgY1sxXSAqIDI1NSwgY1syXSAqIDI1NV07XG4gICAgfVxuICAgIGlmIChhcmdzLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgLy8ga2VlcCBhbHBoYSBjaGFubmVsXG4gICAgICAgIHJldHVybiBbciwgZywgYiwgYXJnc1szXV07XG4gICAgfVxuICAgIHJldHVybiBbciwgZywgYiwgMV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoc2wycmdiO1xuIiwiaW1wb3J0IHsgdW5wYWNrLCB0eXBlIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuaW1wb3J0IGNocm9tYSBmcm9tICcuLi8uLi9jaHJvbWEuanMnO1xuaW1wb3J0IENvbG9yIGZyb20gJy4uLy4uL0NvbG9yLmpzJztcbmltcG9ydCBpbnB1dCBmcm9tICcuLi9pbnB1dC5qcyc7XG5pbXBvcnQgaHNsMnJnYiBmcm9tICcuL2hzbDJyZ2IuanMnO1xuaW1wb3J0IHJnYjJoc2wgZnJvbSAnLi9yZ2IyaHNsLmpzJztcblxuQ29sb3IucHJvdG90eXBlLmhzbCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmdiMmhzbCh0aGlzLl9yZ2IpO1xufTtcblxuY29uc3QgaHNsID0gKC4uLmFyZ3MpID0+IG5ldyBDb2xvciguLi5hcmdzLCAnaHNsJyk7XG5jaHJvbWEuaHNsID0gaHNsO1xuXG5pbnB1dC5mb3JtYXQuaHNsID0gaHNsMnJnYjtcblxuaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICBwOiAyLFxuICAgIHRlc3Q6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGFyZ3MgPSB1bnBhY2soYXJncywgJ2hzbCcpO1xuICAgICAgICBpZiAodHlwZShhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgcmV0dXJuICdoc2wnO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmV4cG9ydCB7IGhzbCB9O1xuIiwiaW1wb3J0IHsgdW5wYWNrLCBtaW4sIG1heCB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcblxuLypcbiAqIHN1cHBvcnRlZCBhcmd1bWVudHM6XG4gKiAtIHJnYjJoc2wocixnLGIpXG4gKiAtIHJnYjJoc2wocixnLGIsYSlcbiAqIC0gcmdiMmhzbChbcixnLGJdKVxuICogLSByZ2IyaHNsKFtyLGcsYixhXSlcbiAqIC0gcmdiMmhzbCh7cixnLGIsYX0pXG4gKi9cbmNvbnN0IHJnYjJoc2wgPSAoLi4uYXJncykgPT4ge1xuICAgIGFyZ3MgPSB1bnBhY2soYXJncywgJ3JnYmEnKTtcbiAgICBsZXQgW3IsIGcsIGJdID0gYXJncztcblxuICAgIHIgLz0gMjU1O1xuICAgIGcgLz0gMjU1O1xuICAgIGIgLz0gMjU1O1xuXG4gICAgY29uc3QgbWluUmdiID0gbWluKHIsIGcsIGIpO1xuICAgIGNvbnN0IG1heFJnYiA9IG1heChyLCBnLCBiKTtcblxuICAgIGNvbnN0IGwgPSAobWF4UmdiICsgbWluUmdiKSAvIDI7XG4gICAgbGV0IHMsIGg7XG5cbiAgICBpZiAobWF4UmdiID09PSBtaW5SZ2IpIHtcbiAgICAgICAgcyA9IDA7XG4gICAgICAgIGggPSBOdW1iZXIuTmFOO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHMgPVxuICAgICAgICAgICAgbCA8IDAuNVxuICAgICAgICAgICAgICAgID8gKG1heFJnYiAtIG1pblJnYikgLyAobWF4UmdiICsgbWluUmdiKVxuICAgICAgICAgICAgICAgIDogKG1heFJnYiAtIG1pblJnYikgLyAoMiAtIG1heFJnYiAtIG1pblJnYik7XG4gICAgfVxuXG4gICAgaWYgKHIgPT0gbWF4UmdiKSBoID0gKGcgLSBiKSAvIChtYXhSZ2IgLSBtaW5SZ2IpO1xuICAgIGVsc2UgaWYgKGcgPT0gbWF4UmdiKSBoID0gMiArIChiIC0gcikgLyAobWF4UmdiIC0gbWluUmdiKTtcbiAgICBlbHNlIGlmIChiID09IG1heFJnYikgaCA9IDQgKyAociAtIGcpIC8gKG1heFJnYiAtIG1pblJnYik7XG5cbiAgICBoICo9IDYwO1xuICAgIGlmIChoIDwgMCkgaCArPSAzNjA7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMyAmJiBhcmdzWzNdICE9PSB1bmRlZmluZWQpIHJldHVybiBbaCwgcywgbCwgYXJnc1szXV07XG4gICAgcmV0dXJuIFtoLCBzLCBsXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJnYjJoc2w7XG4iLCJpbXBvcnQgeyB1bnBhY2sgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5jb25zdCB7IGZsb29yIH0gPSBNYXRoO1xuXG5jb25zdCBoc3YycmdiID0gKC4uLmFyZ3MpID0+IHtcbiAgICBhcmdzID0gdW5wYWNrKGFyZ3MsICdoc3YnKTtcbiAgICBsZXQgW2gsIHMsIHZdID0gYXJncztcbiAgICBsZXQgciwgZywgYjtcbiAgICB2ICo9IDI1NTtcbiAgICBpZiAocyA9PT0gMCkge1xuICAgICAgICByID0gZyA9IGIgPSB2O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChoID09PSAzNjApIGggPSAwO1xuICAgICAgICBpZiAoaCA+IDM2MCkgaCAtPSAzNjA7XG4gICAgICAgIGlmIChoIDwgMCkgaCArPSAzNjA7XG4gICAgICAgIGggLz0gNjA7XG5cbiAgICAgICAgY29uc3QgaSA9IGZsb29yKGgpO1xuICAgICAgICBjb25zdCBmID0gaCAtIGk7XG4gICAgICAgIGNvbnN0IHAgPSB2ICogKDEgLSBzKTtcbiAgICAgICAgY29uc3QgcSA9IHYgKiAoMSAtIHMgKiBmKTtcbiAgICAgICAgY29uc3QgdCA9IHYgKiAoMSAtIHMgKiAoMSAtIGYpKTtcblxuICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBbciwgZywgYl0gPSBbdiwgdCwgcF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgW3IsIGcsIGJdID0gW3EsIHYsIHBdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIFtyLCBnLCBiXSA9IFtwLCB2LCB0XTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBbciwgZywgYl0gPSBbcCwgcSwgdl07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgW3IsIGcsIGJdID0gW3QsIHAsIHZdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIFtyLCBnLCBiXSA9IFt2LCBwLCBxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW3IsIGcsIGIsIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhzdjJyZ2I7XG4iLCJpbXBvcnQgeyB1bnBhY2ssIHR5cGUgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5pbXBvcnQgY2hyb21hIGZyb20gJy4uLy4uL2Nocm9tYS5qcyc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vLi4vQ29sb3IuanMnO1xuaW1wb3J0IGlucHV0IGZyb20gJy4uL2lucHV0LmpzJztcbmltcG9ydCBoc3YycmdiIGZyb20gJy4vaHN2MnJnYi5qcyc7XG5pbXBvcnQgcmdiMmhzdiBmcm9tICcuL3JnYjJoc3YuanMnO1xuXG5Db2xvci5wcm90b3R5cGUuaHN2ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByZ2IyaHN2KHRoaXMuX3JnYik7XG59O1xuXG5jb25zdCBoc3YgPSAoLi4uYXJncykgPT4gbmV3IENvbG9yKC4uLmFyZ3MsICdoc3YnKTtcbmNocm9tYS5oc3YgPSBoc3Y7XG5cbmlucHV0LmZvcm1hdC5oc3YgPSBoc3YycmdiO1xuXG5pbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgIHA6IDIsXG4gICAgdGVzdDogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgYXJncyA9IHVucGFjayhhcmdzLCAnaHN2Jyk7XG4gICAgICAgIGlmICh0eXBlKGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2hzdic7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuZXhwb3J0IHsgaHN2IH07XG4iLCJpbXBvcnQgeyB1bnBhY2sgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5jb25zdCB7IG1pbiwgbWF4IH0gPSBNYXRoO1xuXG4vKlxuICogc3VwcG9ydGVkIGFyZ3VtZW50czpcbiAqIC0gcmdiMmhzdihyLGcsYilcbiAqIC0gcmdiMmhzdihbcixnLGJdKVxuICogLSByZ2IyaHN2KHtyLGcsYn0pXG4gKi9cbmNvbnN0IHJnYjJoc2wgPSAoLi4uYXJncykgPT4ge1xuICAgIGFyZ3MgPSB1bnBhY2soYXJncywgJ3JnYicpO1xuICAgIGxldCBbciwgZywgYl0gPSBhcmdzO1xuICAgIGNvbnN0IG1pbl8gPSBtaW4ociwgZywgYik7XG4gICAgY29uc3QgbWF4XyA9IG1heChyLCBnLCBiKTtcbiAgICBjb25zdCBkZWx0YSA9IG1heF8gLSBtaW5fO1xuICAgIGxldCBoLCBzLCB2O1xuICAgIHYgPSBtYXhfIC8gMjU1LjA7XG4gICAgaWYgKG1heF8gPT09IDApIHtcbiAgICAgICAgaCA9IE51bWJlci5OYU47XG4gICAgICAgIHMgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHMgPSBkZWx0YSAvIG1heF87XG4gICAgICAgIGlmIChyID09PSBtYXhfKSBoID0gKGcgLSBiKSAvIGRlbHRhO1xuICAgICAgICBpZiAoZyA9PT0gbWF4XykgaCA9IDIgKyAoYiAtIHIpIC8gZGVsdGE7XG4gICAgICAgIGlmIChiID09PSBtYXhfKSBoID0gNCArIChyIC0gZykgLyBkZWx0YTtcbiAgICAgICAgaCAqPSA2MDtcbiAgICAgICAgaWYgKGggPCAwKSBoICs9IDM2MDtcbiAgICB9XG4gICAgcmV0dXJuIFtoLCBzLCB2XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJnYjJoc2w7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgZm9ybWF0OiB7fSxcbiAgICBhdXRvZGV0ZWN0OiBbXVxufTtcbiIsImltcG9ydCB7IHVucGFjaywgdHlwZSB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcbmltcG9ydCBjaHJvbWEgZnJvbSAnLi4vLi4vY2hyb21hLmpzJztcbmltcG9ydCBDb2xvciBmcm9tICcuLi8uLi9Db2xvci5qcyc7XG5pbXBvcnQgaW5wdXQgZnJvbSAnLi4vaW5wdXQuanMnO1xuaW1wb3J0IGxhYjJyZ2IgZnJvbSAnLi9sYWIycmdiLmpzJztcbmltcG9ydCByZ2IybGFiIGZyb20gJy4vcmdiMmxhYi5qcyc7XG5pbXBvcnQgeyBnZXRMYWJXaGl0ZVBvaW50LCBzZXRMYWJXaGl0ZVBvaW50IH0gZnJvbSAnLi9sYWItY29uc3RhbnRzLmpzJztcblxuQ29sb3IucHJvdG90eXBlLmxhYiA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmdiMmxhYih0aGlzLl9yZ2IpO1xufTtcblxuY29uc3QgbGFiID0gKC4uLmFyZ3MpID0+IG5ldyBDb2xvciguLi5hcmdzLCAnbGFiJyk7XG5PYmplY3QuYXNzaWduKGNocm9tYSwgeyBsYWIsIGdldExhYldoaXRlUG9pbnQsIHNldExhYldoaXRlUG9pbnQgfSk7XG5cbmlucHV0LmZvcm1hdC5sYWIgPSBsYWIycmdiO1xuXG5pbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgIHA6IDIsXG4gICAgdGVzdDogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgYXJncyA9IHVucGFjayhhcmdzLCAnbGFiJyk7XG4gICAgICAgIGlmICh0eXBlKGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2xhYic7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuZXhwb3J0IHsgbGFiLCBnZXRMYWJXaGl0ZVBvaW50LCBzZXRMYWJXaGl0ZVBvaW50IH07XG4iLCJjb25zdCBsYWJDb25zdGFudHMgPSB7XG4gICAgLy8gQ29ycmVzcG9uZHMgcm91Z2hseSB0byBSR0IgYnJpZ2h0ZXIvZGFya2VyXG4gICAgS246IDE4LFxuXG4gICAgLy8gRDY1IHN0YW5kYXJkIHJlZmVyZW50XG4gICAgbGFiV2hpdGVQb2ludDogJ2Q2NScsXG4gICAgWG46IDAuOTUwNDcsXG4gICAgWW46IDEsXG4gICAgWm46IDEuMDg4ODMsXG5cbiAgICB0MDogMC4xMzc5MzEwMzQsIC8vIDQgLyAyOVxuICAgIHQxOiAwLjIwNjg5NjU1MiwgLy8gNiAvIDI5XG4gICAgdDI6IDAuMTI4NDE4NTUsIC8vIDMgKiB0MSAqIHQxXG4gICAgdDM6IDAuMDA4ODU2NDUyLCAvLyB0MSAqIHQxICogdDEsXG5cbiAgICBrRTogMjE2LjAgLyAyNDM4OS4wLFxuICAgIGtLRTogOC4wLFxuICAgIGtLOiAyNDM4OS4wIC8gMjcuMCxcblxuICAgIFJlZldoaXRlUkdCOiB7XG4gICAgICAgIC8vIHNSR0JcbiAgICAgICAgWDogMC45NTA0NyxcbiAgICAgICAgWTogMSxcbiAgICAgICAgWjogMS4wODg4M1xuICAgIH0sXG5cbiAgICBNdHhSR0IyWFlaOiB7XG4gICAgICAgIG0wMDogMC40MTI0NTY0MzkwODk2OTIyLFxuICAgICAgICBtMDE6IDAuMjEyNjcyODUxNDA1NjIyNTMsXG4gICAgICAgIG0wMjogMC4wMTkzMzM4OTU1ODIzMjkzLFxuICAgICAgICBtMTA6IDAuMzU3NTc2MDc3NjQzOTA5LFxuICAgICAgICBtMTE6IDAuNzE1MTUyMTU1Mjg3ODE4LFxuICAgICAgICBtMTI6IDAuMTE5MTkyMDI1ODgxMzAyOTcsXG4gICAgICAgIG0yMDogMC4xODA0Mzc0ODMyNjYzOTg5NCxcbiAgICAgICAgbTIxOiAwLjA3MjE3NDk5MzMwNjU1OTU4LFxuICAgICAgICBtMjI6IDAuOTUwMzA0MDc4NTM2MzY3OVxuICAgIH0sXG5cbiAgICBNdHhYWVoyUkdCOiB7XG4gICAgICAgIG0wMDogMy4yNDA0NTQxNjIxMTQxMDQ1LFxuICAgICAgICBtMDE6IC0wLjk2OTI2NjAzMDUwNTE4NjgsXG4gICAgICAgIG0wMjogMC4wNTU2NDM0MzA5NTkxMTQ3MjYsXG4gICAgICAgIG0xMDogLTEuNTM3MTM4NTEyNzk3NzE2NixcbiAgICAgICAgbTExOiAxLjg3NjAxMDg0NTQ0NjY5NDIsXG4gICAgICAgIG0xMjogLTAuMjA0MDI1OTEzNTE2NzUzOCxcbiAgICAgICAgbTIwOiAtMC40OTg1MzE0MDk1NTYwMTYsXG4gICAgICAgIG0yMTogMC4wNDE1NTYwMTc1MzAzNDk4MzQsXG4gICAgICAgIG0yMjogMS4wNTcyMjUxODgyMjMxNzkxXG4gICAgfSxcblxuICAgIC8vIHVzZWQgaW4gcmdiMnh5elxuICAgIEFzOiAwLjk0MTQyODUzNTAwMDAwMDEsXG4gICAgQnM6IDEuMDQwNDE3NDY3LFxuICAgIENzOiAxLjA4OTUzMjY1MSxcblxuICAgIE10eEFkYXB0TWE6IHtcbiAgICAgICAgbTAwOiAwLjg5NTEsXG4gICAgICAgIG0wMTogLTAuNzUwMixcbiAgICAgICAgbTAyOiAwLjAzODksXG4gICAgICAgIG0xMDogMC4yNjY0LFxuICAgICAgICBtMTE6IDEuNzEzNSxcbiAgICAgICAgbTEyOiAtMC4wNjg1LFxuICAgICAgICBtMjA6IC0wLjE2MTQsXG4gICAgICAgIG0yMTogMC4wMzY3LFxuICAgICAgICBtMjI6IDEuMDI5NlxuICAgIH0sXG5cbiAgICBNdHhBZGFwdE1hSToge1xuICAgICAgICBtMDA6IDAuOTg2OTkyOTA1NDY2NzEyMyxcbiAgICAgICAgbTAxOiAwLjQzMjMwNTI2OTcyMzM5NDU2LFxuICAgICAgICBtMDI6IC0wLjAwODUyODY2NDU3NTE3NzMyOCxcbiAgICAgICAgbTEwOiAtMC4xNDcwNTQyNTY0MjA5OTAxMyxcbiAgICAgICAgbTExOiAwLjUxODM2MDI3MTUzNjc3NzYsXG4gICAgICAgIG0xMjogMC4wNDAwNDI4MjE2NTQwODQ4NyxcbiAgICAgICAgbTIwOiAwLjE1OTk2MjY1MTY2MzczMTI1LFxuICAgICAgICBtMjE6IDAuMDQ5MjkxMjI4MjEyODU1NixcbiAgICAgICAgbTIyOiAwLjk2ODQ4NjY5NTc4NzU1MDJcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsYWJDb25zdGFudHM7XG5cbi8vIHRha2VuIGZyb20gaHR0cHM6Ly9kZS5tYXRod29ya3MuY29tL2hlbHAvaW1hZ2VzL3JlZi93aGl0ZXBvaW50Lmh0bWxcbmNvbnN0IElMTFVNSU5BTlRTID0gbmV3IE1hcChbXG4gICAgLy8gQVNUTSBFMzA4LTAxXG4gICAgWydhJywgWzEuMDk4NSwgMC4zNTU4NV1dLFxuICAgIC8vIFd5c3plY2tpICYgU3RpbGVzLCBwLiA3NjlcbiAgICBbJ2InLCBbMS4wOTg1LCAwLjM1NTg1XV0sXG4gICAgLy8gQyBBU1RNIEUzMDgtMDFcbiAgICBbJ2MnLCBbMC45ODA3NCwgMS4xODIzMl1dLFxuICAgIC8vIEQ1MCAoQVNUTSBFMzA4LTAxKVxuICAgIFsnZDUwJywgWzAuOTY0MjIsIDAuODI1MjFdXSxcbiAgICAvLyBENTUgKEFTVE0gRTMwOC0wMSlcbiAgICBbJ2Q1NScsIFswLjk1NjgyLCAwLjkyMTQ5XV0sXG4gICAgLy8gRDY1IChBU1RNIEUzMDgtMDEpXG4gICAgWydkNjUnLCBbMC45NTA0NywgMS4wODg4M11dLFxuICAgIC8vIEUgKEFTVE0gRTMwOC0wMSlcbiAgICBbJ2UnLCBbMSwgMSwgMV1dLFxuICAgIC8vIEYyIChBU1RNIEUzMDgtMDEpXG4gICAgWydmMicsIFswLjk5MTg2LCAwLjY3MzkzXV0sXG4gICAgLy8gRjcgKEFTVE0gRTMwOC0wMSlcbiAgICBbJ2Y3JywgWzAuOTUwNDEsIDEuMDg3NDddXSxcbiAgICAvLyBGMTEgKEFTVE0gRTMwOC0wMSlcbiAgICBbJ2YxMScsIFsxLjAwOTYyLCAwLjY0MzVdXSxcbiAgICBbJ2ljYycsIFswLjk2NDIyLCAwLjgyNTIxXV1cbl0pO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0TGFiV2hpdGVQb2ludChuYW1lKSB7XG4gICAgY29uc3QgaWxsID0gSUxMVU1JTkFOVFMuZ2V0KFN0cmluZyhuYW1lKS50b0xvd2VyQ2FzZSgpKTtcbiAgICBpZiAoIWlsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gTGFiIGlsbHVtaW5hbnQgJyArIG5hbWUpO1xuICAgIH1cbiAgICBsYWJDb25zdGFudHMubGFiV2hpdGVQb2ludCA9IG5hbWU7XG4gICAgbGFiQ29uc3RhbnRzLlhuID0gaWxsWzBdO1xuICAgIGxhYkNvbnN0YW50cy5abiA9IGlsbFsxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhYldoaXRlUG9pbnQoKSB7XG4gICAgcmV0dXJuIGxhYkNvbnN0YW50cy5sYWJXaGl0ZVBvaW50O1xufVxuIiwiaW1wb3J0IExBQl9DT05TVEFOVFMgZnJvbSAnLi9sYWItY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IHVucGFjayB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcblxuLypcbiAqIEwqIFswLi4xMDBdXG4gKiBhIFstMTAwLi4xMDBdXG4gKiBiIFstMTAwLi4xMDBdXG4gKi9cbmNvbnN0IGxhYjJyZ2IgPSAoLi4uYXJncykgPT4ge1xuICAgIGFyZ3MgPSB1bnBhY2soYXJncywgJ2xhYicpO1xuICAgIGNvbnN0IFtMLCBhLCBiXSA9IGFyZ3M7XG4gICAgY29uc3QgW3gsIHksIHpdID0gbGFiMnh5eihMLCBhLCBiKTtcbiAgICBjb25zdCBbciwgZywgYl9dID0geHl6MnJnYih4LCB5LCB6KTtcbiAgICByZXR1cm4gW3IsIGcsIGJfLCBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogMV07XG59O1xuXG5jb25zdCBsYWIyeHl6ID0gKEwsIGEsIGIpID0+IHtcbiAgICBjb25zdCB7IGtFLCBrSywga0tFLCBYbiwgWW4sIFpuIH0gPSBMQUJfQ09OU1RBTlRTO1xuXG4gICAgY29uc3QgZnkgPSAoTCArIDE2LjApIC8gMTE2LjA7XG4gICAgY29uc3QgZnggPSAwLjAwMiAqIGEgKyBmeTtcbiAgICBjb25zdCBmeiA9IGZ5IC0gMC4wMDUgKiBiO1xuXG4gICAgY29uc3QgZngzID0gZnggKiBmeCAqIGZ4O1xuICAgIGNvbnN0IGZ6MyA9IGZ6ICogZnogKiBmejtcblxuICAgIGNvbnN0IHhyID0gZngzID4ga0UgPyBmeDMgOiAoMTE2LjAgKiBmeCAtIDE2LjApIC8ga0s7XG4gICAgY29uc3QgeXIgPSBMID4ga0tFID8gTWF0aC5wb3coKEwgKyAxNi4wKSAvIDExNi4wLCAzLjApIDogTCAvIGtLO1xuICAgIGNvbnN0IHpyID0gZnozID4ga0UgPyBmejMgOiAoMTE2LjAgKiBmeiAtIDE2LjApIC8ga0s7XG5cbiAgICBjb25zdCB4ID0geHIgKiBYbjtcbiAgICBjb25zdCB5ID0geXIgKiBZbjtcbiAgICBjb25zdCB6ID0genIgKiBabjtcblxuICAgIHJldHVybiBbeCwgeSwgel07XG59O1xuXG5jb25zdCBjb21wYW5kID0gKGxpbmVhcikgPT4ge1xuICAgIC8qIHNSR0IgKi9cbiAgICBjb25zdCBzaWduID0gTWF0aC5zaWduKGxpbmVhcik7XG4gICAgbGluZWFyID0gTWF0aC5hYnMobGluZWFyKTtcbiAgICByZXR1cm4gKFxuICAgICAgICAobGluZWFyIDw9IDAuMDAzMTMwOFxuICAgICAgICAgICAgPyBsaW5lYXIgKiAxMi45MlxuICAgICAgICAgICAgOiAxLjA1NSAqIE1hdGgucG93KGxpbmVhciwgMS4wIC8gMi40KSAtIDAuMDU1KSAqIHNpZ25cbiAgICApO1xufTtcblxuY29uc3QgeHl6MnJnYiA9ICh4LCB5LCB6KSA9PiB7XG4gICAgY29uc3QgeyBNdHhBZGFwdE1hLCBNdHhBZGFwdE1hSSwgTXR4WFlaMlJHQiwgUmVmV2hpdGVSR0IsIFhuLCBZbiwgWm4gfSA9XG4gICAgICAgIExBQl9DT05TVEFOVFM7XG5cbiAgICBjb25zdCBBcyA9IFhuICogTXR4QWRhcHRNYS5tMDAgKyBZbiAqIE10eEFkYXB0TWEubTEwICsgWm4gKiBNdHhBZGFwdE1hLm0yMDtcbiAgICBjb25zdCBCcyA9IFhuICogTXR4QWRhcHRNYS5tMDEgKyBZbiAqIE10eEFkYXB0TWEubTExICsgWm4gKiBNdHhBZGFwdE1hLm0yMTtcbiAgICBjb25zdCBDcyA9IFhuICogTXR4QWRhcHRNYS5tMDIgKyBZbiAqIE10eEFkYXB0TWEubTEyICsgWm4gKiBNdHhBZGFwdE1hLm0yMjtcblxuICAgIGNvbnN0IEFkID1cbiAgICAgICAgUmVmV2hpdGVSR0IuWCAqIE10eEFkYXB0TWEubTAwICtcbiAgICAgICAgUmVmV2hpdGVSR0IuWSAqIE10eEFkYXB0TWEubTEwICtcbiAgICAgICAgUmVmV2hpdGVSR0IuWiAqIE10eEFkYXB0TWEubTIwO1xuICAgIGNvbnN0IEJkID1cbiAgICAgICAgUmVmV2hpdGVSR0IuWCAqIE10eEFkYXB0TWEubTAxICtcbiAgICAgICAgUmVmV2hpdGVSR0IuWSAqIE10eEFkYXB0TWEubTExICtcbiAgICAgICAgUmVmV2hpdGVSR0IuWiAqIE10eEFkYXB0TWEubTIxO1xuICAgIGNvbnN0IENkID1cbiAgICAgICAgUmVmV2hpdGVSR0IuWCAqIE10eEFkYXB0TWEubTAyICtcbiAgICAgICAgUmVmV2hpdGVSR0IuWSAqIE10eEFkYXB0TWEubTEyICtcbiAgICAgICAgUmVmV2hpdGVSR0IuWiAqIE10eEFkYXB0TWEubTIyO1xuXG4gICAgY29uc3QgWDEgPVxuICAgICAgICAoeCAqIE10eEFkYXB0TWEubTAwICsgeSAqIE10eEFkYXB0TWEubTEwICsgeiAqIE10eEFkYXB0TWEubTIwKSAqXG4gICAgICAgIChBZCAvIEFzKTtcbiAgICBjb25zdCBZMSA9XG4gICAgICAgICh4ICogTXR4QWRhcHRNYS5tMDEgKyB5ICogTXR4QWRhcHRNYS5tMTEgKyB6ICogTXR4QWRhcHRNYS5tMjEpICpcbiAgICAgICAgKEJkIC8gQnMpO1xuICAgIGNvbnN0IFoxID1cbiAgICAgICAgKHggKiBNdHhBZGFwdE1hLm0wMiArIHkgKiBNdHhBZGFwdE1hLm0xMiArIHogKiBNdHhBZGFwdE1hLm0yMikgKlxuICAgICAgICAoQ2QgLyBDcyk7XG5cbiAgICBjb25zdCBYMiA9XG4gICAgICAgIFgxICogTXR4QWRhcHRNYUkubTAwICsgWTEgKiBNdHhBZGFwdE1hSS5tMTAgKyBaMSAqIE10eEFkYXB0TWFJLm0yMDtcbiAgICBjb25zdCBZMiA9XG4gICAgICAgIFgxICogTXR4QWRhcHRNYUkubTAxICsgWTEgKiBNdHhBZGFwdE1hSS5tMTEgKyBaMSAqIE10eEFkYXB0TWFJLm0yMTtcbiAgICBjb25zdCBaMiA9XG4gICAgICAgIFgxICogTXR4QWRhcHRNYUkubTAyICsgWTEgKiBNdHhBZGFwdE1hSS5tMTIgKyBaMSAqIE10eEFkYXB0TWFJLm0yMjtcblxuICAgIGNvbnN0IHIgPSBjb21wYW5kKFxuICAgICAgICBYMiAqIE10eFhZWjJSR0IubTAwICsgWTIgKiBNdHhYWVoyUkdCLm0xMCArIFoyICogTXR4WFlaMlJHQi5tMjBcbiAgICApO1xuICAgIGNvbnN0IGcgPSBjb21wYW5kKFxuICAgICAgICBYMiAqIE10eFhZWjJSR0IubTAxICsgWTIgKiBNdHhYWVoyUkdCLm0xMSArIFoyICogTXR4WFlaMlJHQi5tMjFcbiAgICApO1xuICAgIGNvbnN0IGIgPSBjb21wYW5kKFxuICAgICAgICBYMiAqIE10eFhZWjJSR0IubTAyICsgWTIgKiBNdHhYWVoyUkdCLm0xMiArIFoyICogTXR4WFlaMlJHQi5tMjJcbiAgICApO1xuXG4gICAgcmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxhYjJyZ2I7XG5leHBvcnQgeyB4eXoycmdiIH07XG4iLCJpbXBvcnQgTEFCX0NPTlNUQU5UUyBmcm9tICcuL2xhYi1jb25zdGFudHMuanMnO1xuaW1wb3J0IHsgdW5wYWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuXG5jb25zdCByZ2IybGFiID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBbciwgZywgYiwgLi4ucmVzdF0gPSB1bnBhY2soYXJncywgJ3JnYicpO1xuICAgIGNvbnN0IFt4LCB5LCB6XSA9IHJnYjJ4eXoociwgZywgYik7XG4gICAgY29uc3QgW0wsIGEsIGJfXSA9IHh5ejJsYWIoeCwgeSwgeik7XG4gICAgcmV0dXJuIFtMLCBhLCBiXywgLi4uKHJlc3QubGVuZ3RoID4gMCAmJiByZXN0WzBdIDwgMSA/IFtyZXN0WzBdXSA6IFtdKV07XG59O1xuXG5mdW5jdGlvbiB4eXoybGFiKHgsIHksIHopIHtcbiAgICBjb25zdCB7IFhuLCBZbiwgWm4sIGtFLCBrSyB9ID0gTEFCX0NPTlNUQU5UUztcbiAgICBjb25zdCB4ciA9IHggLyBYbjtcbiAgICBjb25zdCB5ciA9IHkgLyBZbjtcbiAgICBjb25zdCB6ciA9IHogLyBabjtcblxuICAgIGNvbnN0IGZ4ID0geHIgPiBrRSA/IE1hdGgucG93KHhyLCAxLjAgLyAzLjApIDogKGtLICogeHIgKyAxNi4wKSAvIDExNi4wO1xuICAgIGNvbnN0IGZ5ID0geXIgPiBrRSA/IE1hdGgucG93KHlyLCAxLjAgLyAzLjApIDogKGtLICogeXIgKyAxNi4wKSAvIDExNi4wO1xuICAgIGNvbnN0IGZ6ID0genIgPiBrRSA/IE1hdGgucG93KHpyLCAxLjAgLyAzLjApIDogKGtLICogenIgKyAxNi4wKSAvIDExNi4wO1xuXG4gICAgcmV0dXJuIFsxMTYuMCAqIGZ5IC0gMTYuMCwgNTAwLjAgKiAoZnggLSBmeSksIDIwMC4wICogKGZ5IC0gZnopXTtcbn1cblxuZnVuY3Rpb24gZ2FtbWFBZGp1c3RTUkdCKGNvbXBhbmRlZCkge1xuICAgIGNvbnN0IHNpZ24gPSBNYXRoLnNpZ24oY29tcGFuZGVkKTtcbiAgICBjb21wYW5kZWQgPSBNYXRoLmFicyhjb21wYW5kZWQpO1xuICAgIGNvbnN0IGxpbmVhciA9XG4gICAgICAgIGNvbXBhbmRlZCA8PSAwLjA0MDQ1XG4gICAgICAgICAgICA/IGNvbXBhbmRlZCAvIDEyLjkyXG4gICAgICAgICAgICA6IE1hdGgucG93KChjb21wYW5kZWQgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbiAgICByZXR1cm4gbGluZWFyICogc2lnbjtcbn1cblxuY29uc3QgcmdiMnh5eiA9IChyLCBnLCBiKSA9PiB7XG4gICAgLy8gbm9ybWFsaXplIGFuZCBnYW1tYSBhZGp1c3RcbiAgICByID0gZ2FtbWFBZGp1c3RTUkdCKHIgLyAyNTUpO1xuICAgIGcgPSBnYW1tYUFkanVzdFNSR0IoZyAvIDI1NSk7XG4gICAgYiA9IGdhbW1hQWRqdXN0U1JHQihiIC8gMjU1KTtcblxuICAgIGNvbnN0IHsgTXR4UkdCMlhZWiwgTXR4QWRhcHRNYSwgTXR4QWRhcHRNYUksIFhuLCBZbiwgWm4sIEFzLCBCcywgQ3MgfSA9XG4gICAgICAgIExBQl9DT05TVEFOVFM7XG5cbiAgICBsZXQgeCA9IHIgKiBNdHhSR0IyWFlaLm0wMCArIGcgKiBNdHhSR0IyWFlaLm0xMCArIGIgKiBNdHhSR0IyWFlaLm0yMDtcbiAgICBsZXQgeSA9IHIgKiBNdHhSR0IyWFlaLm0wMSArIGcgKiBNdHhSR0IyWFlaLm0xMSArIGIgKiBNdHhSR0IyWFlaLm0yMTtcbiAgICBsZXQgeiA9IHIgKiBNdHhSR0IyWFlaLm0wMiArIGcgKiBNdHhSR0IyWFlaLm0xMiArIGIgKiBNdHhSR0IyWFlaLm0yMjtcblxuICAgIGNvbnN0IEFkID0gWG4gKiBNdHhBZGFwdE1hLm0wMCArIFluICogTXR4QWRhcHRNYS5tMTAgKyBabiAqIE10eEFkYXB0TWEubTIwO1xuICAgIGNvbnN0IEJkID0gWG4gKiBNdHhBZGFwdE1hLm0wMSArIFluICogTXR4QWRhcHRNYS5tMTEgKyBabiAqIE10eEFkYXB0TWEubTIxO1xuICAgIGNvbnN0IENkID0gWG4gKiBNdHhBZGFwdE1hLm0wMiArIFluICogTXR4QWRhcHRNYS5tMTIgKyBabiAqIE10eEFkYXB0TWEubTIyO1xuXG4gICAgbGV0IFggPSB4ICogTXR4QWRhcHRNYS5tMDAgKyB5ICogTXR4QWRhcHRNYS5tMTAgKyB6ICogTXR4QWRhcHRNYS5tMjA7XG4gICAgbGV0IFkgPSB4ICogTXR4QWRhcHRNYS5tMDEgKyB5ICogTXR4QWRhcHRNYS5tMTEgKyB6ICogTXR4QWRhcHRNYS5tMjE7XG4gICAgbGV0IFogPSB4ICogTXR4QWRhcHRNYS5tMDIgKyB5ICogTXR4QWRhcHRNYS5tMTIgKyB6ICogTXR4QWRhcHRNYS5tMjI7XG5cbiAgICBYICo9IEFkIC8gQXM7XG4gICAgWSAqPSBCZCAvIEJzO1xuICAgIFogKj0gQ2QgLyBDcztcblxuICAgIHggPSBYICogTXR4QWRhcHRNYUkubTAwICsgWSAqIE10eEFkYXB0TWFJLm0xMCArIFogKiBNdHhBZGFwdE1hSS5tMjA7XG4gICAgeSA9IFggKiBNdHhBZGFwdE1hSS5tMDEgKyBZICogTXR4QWRhcHRNYUkubTExICsgWiAqIE10eEFkYXB0TWFJLm0yMTtcbiAgICB6ID0gWCAqIE10eEFkYXB0TWFJLm0wMiArIFkgKiBNdHhBZGFwdE1hSS5tMTIgKyBaICogTXR4QWRhcHRNYUkubTIyO1xuXG4gICAgcmV0dXJuIFt4LCB5LCB6XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJnYjJsYWI7XG5leHBvcnQgeyByZ2IyeHl6IH07XG4iLCJpbXBvcnQgeyB1bnBhY2sgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5pbXBvcnQgbGNoMnJnYiBmcm9tICcuL2xjaDJyZ2IuanMnO1xuXG5jb25zdCBoY2wycmdiID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBoY2wgPSB1bnBhY2soYXJncywgJ2hjbCcpLnJldmVyc2UoKTtcbiAgICByZXR1cm4gbGNoMnJnYiguLi5oY2wpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGNsMnJnYjtcbiIsImltcG9ydCB7IHVucGFjaywgdHlwZSB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcbmltcG9ydCBjaHJvbWEgZnJvbSAnLi4vLi4vY2hyb21hLmpzJztcbmltcG9ydCBDb2xvciBmcm9tICcuLi8uLi9Db2xvci5qcyc7XG5pbXBvcnQgaW5wdXQgZnJvbSAnLi4vaW5wdXQuanMnO1xuaW1wb3J0IGxjaDJyZ2IgZnJvbSAnLi9sY2gycmdiLmpzJztcbmltcG9ydCBoY2wycmdiIGZyb20gJy4vaGNsMnJnYi5qcyc7XG5pbXBvcnQgcmdiMmxjaCBmcm9tICcuL3JnYjJsY2guanMnO1xuXG5Db2xvci5wcm90b3R5cGUubGNoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByZ2IybGNoKHRoaXMuX3JnYik7XG59O1xuQ29sb3IucHJvdG90eXBlLmhjbCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmdiMmxjaCh0aGlzLl9yZ2IpLnJldmVyc2UoKTtcbn07XG5cbmNvbnN0IGxjaCA9ICguLi5hcmdzKSA9PiBuZXcgQ29sb3IoLi4uYXJncywgJ2xjaCcpO1xuY29uc3QgaGNsID0gKC4uLmFyZ3MpID0+IG5ldyBDb2xvciguLi5hcmdzLCAnaGNsJyk7XG5cbk9iamVjdC5hc3NpZ24oY2hyb21hLCB7IGxjaCwgaGNsIH0pO1xuXG5pbnB1dC5mb3JtYXQubGNoID0gbGNoMnJnYjtcbmlucHV0LmZvcm1hdC5oY2wgPSBoY2wycmdiO1xuWydsY2gnLCAnaGNsJ10uZm9yRWFjaCgobSkgPT5cbiAgICBpbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgYXJncyA9IHVucGFjayhhcmdzLCBtKTtcbiAgICAgICAgICAgIGlmICh0eXBlKGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuKTtcblxuZXhwb3J0IHsgbGNoLCBoY2wgfTtcbiIsImltcG9ydCB7IHVucGFjaywgUkFEMkRFRyB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcbmNvbnN0IHsgc3FydCwgYXRhbjIsIHJvdW5kIH0gPSBNYXRoO1xuXG5jb25zdCBsYWIybGNoID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBbbCwgYSwgYl0gPSB1bnBhY2soYXJncywgJ2xhYicpO1xuICAgIGNvbnN0IGMgPSBzcXJ0KGEgKiBhICsgYiAqIGIpO1xuICAgIGxldCBoID0gKGF0YW4yKGIsIGEpICogUkFEMkRFRyArIDM2MCkgJSAzNjA7XG4gICAgaWYgKHJvdW5kKGMgKiAxMDAwMCkgPT09IDApIGggPSBOdW1iZXIuTmFOO1xuICAgIHJldHVybiBbbCwgYywgaF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsYWIybGNoO1xuIiwiaW1wb3J0IHsgdW5wYWNrLCBERUcyUkFEIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuY29uc3QgeyBzaW4sIGNvcyB9ID0gTWF0aDtcblxuY29uc3QgbGNoMmxhYiA9ICguLi5hcmdzKSA9PiB7XG4gICAgLypcbiAgICBDb252ZXJ0IGZyb20gYSBxdWFsaXRhdGl2ZSBwYXJhbWV0ZXIgaCBhbmQgYSBxdWFudGl0YXRpdmUgcGFyYW1ldGVyIGwgdG8gYSAyNC1iaXQgcGl4ZWwuXG4gICAgVGhlc2UgZm9ybXVsYXMgd2VyZSBpbnZlbnRlZCBieSBEYXZpZCBEYWxyeW1wbGUgdG8gb2J0YWluIG1heGltdW0gY29udHJhc3Qgd2l0aG91dCBnb2luZ1xuICAgIG91dCBvZiBnYW11dCBpZiB0aGUgcGFyYW1ldGVycyBhcmUgaW4gdGhlIHJhbmdlIDAtMS5cblxuICAgIEEgc2F0dXJhdGlvbiBtdWx0aXBsaWVyIHdhcyBhZGRlZCBieSBHcmVnb3IgQWlzY2hcbiAgICAqL1xuICAgIGxldCBbbCwgYywgaF0gPSB1bnBhY2soYXJncywgJ2xjaCcpO1xuICAgIGlmIChpc05hTihoKSkgaCA9IDA7XG4gICAgaCA9IGggKiBERUcyUkFEO1xuICAgIHJldHVybiBbbCwgY29zKGgpICogYywgc2luKGgpICogY107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsY2gybGFiO1xuIiwiaW1wb3J0IHsgdW5wYWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuaW1wb3J0IGxjaDJsYWIgZnJvbSAnLi9sY2gybGFiLmpzJztcbmltcG9ydCBsYWIycmdiIGZyb20gJy4uL2xhYi9sYWIycmdiLmpzJztcblxuY29uc3QgbGNoMnJnYiA9ICguLi5hcmdzKSA9PiB7XG4gICAgYXJncyA9IHVucGFjayhhcmdzLCAnbGNoJyk7XG4gICAgY29uc3QgW2wsIGMsIGhdID0gYXJncztcbiAgICBjb25zdCBbTCwgYSwgYl9dID0gbGNoMmxhYihsLCBjLCBoKTtcbiAgICBjb25zdCBbciwgZywgYl0gPSBsYWIycmdiKEwsIGEsIGJfKTtcbiAgICByZXR1cm4gW3IsIGcsIGIsIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxjaDJyZ2I7XG4iLCJpbXBvcnQgeyB1bnBhY2sgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5pbXBvcnQgcmdiMmxhYiBmcm9tICcuLi9sYWIvcmdiMmxhYi5qcyc7XG5pbXBvcnQgbGFiMmxjaCBmcm9tICcuL2xhYjJsY2guanMnO1xuXG5jb25zdCByZ2IybGNoID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBbciwgZywgYiwgLi4ucmVzdF0gPSB1bnBhY2soYXJncywgJ3JnYicpO1xuICAgIGNvbnN0IFtsLCBhLCBiX10gPSByZ2IybGFiKHIsIGcsIGIpO1xuICAgIGNvbnN0IFtMLCBjLCBoXSA9IGxhYjJsY2gobCwgYSwgYl8pO1xuICAgIHJldHVybiBbTCwgYywgaCwgLi4uKHJlc3QubGVuZ3RoID4gMCAmJiByZXN0WzBdIDwgMSA/IFtyZXN0WzBdXSA6IFtdKV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZ2IybGNoO1xuIiwiaW1wb3J0IENvbG9yIGZyb20gJy4uLy4uL0NvbG9yLmpzJztcbmltcG9ydCBpbnB1dCBmcm9tICcuLi9pbnB1dC5qcyc7XG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuXG5pbXBvcnQgdzNjeDExIGZyb20gJy4uLy4uL2NvbG9ycy93M2N4MTEuanMnO1xuaW1wb3J0IGhleDJyZ2IgZnJvbSAnLi4vaGV4L2hleDJyZ2IuanMnO1xuaW1wb3J0IHJnYjJoZXggZnJvbSAnLi4vaGV4L3JnYjJoZXguanMnO1xuXG5Db2xvci5wcm90b3R5cGUubmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBoZXggPSByZ2IyaGV4KHRoaXMuX3JnYiwgJ3JnYicpO1xuICAgIGZvciAobGV0IG4gb2YgT2JqZWN0LmtleXModzNjeDExKSkge1xuICAgICAgICBpZiAodzNjeDExW25dID09PSBoZXgpIHJldHVybiBuLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIHJldHVybiBoZXg7XG59O1xuXG5pbnB1dC5mb3JtYXQubmFtZWQgPSAobmFtZSkgPT4ge1xuICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHczY3gxMVtuYW1lXSkgcmV0dXJuIGhleDJyZ2IodzNjeDExW25hbWVdKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gY29sb3IgbmFtZTogJyArIG5hbWUpO1xufTtcblxuaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICBwOiA1LFxuICAgIHRlc3Q6IChoLCAuLi5yZXN0KSA9PiB7XG4gICAgICAgIGlmICghcmVzdC5sZW5ndGggJiYgdHlwZShoKSA9PT0gJ3N0cmluZycgJiYgdzNjeDExW2gudG9Mb3dlckNhc2UoKV0pIHtcbiAgICAgICAgICAgIHJldHVybiAnbmFtZWQnO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCJpbXBvcnQgY2hyb21hIGZyb20gJy4uLy4uL2Nocm9tYS5qcyc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vLi4vQ29sb3IuanMnO1xuaW1wb3J0IGlucHV0IGZyb20gJy4uL2lucHV0LmpzJztcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5pbXBvcnQgbnVtMnJnYiBmcm9tICcuL251bTJyZ2IuanMnO1xuaW1wb3J0IHJnYjJudW0gZnJvbSAnLi9yZ2IybnVtLmpzJztcblxuQ29sb3IucHJvdG90eXBlLm51bSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmdiMm51bSh0aGlzLl9yZ2IpO1xufTtcblxuY29uc3QgbnVtID0gKC4uLmFyZ3MpID0+IG5ldyBDb2xvciguLi5hcmdzLCAnbnVtJyk7XG5cbk9iamVjdC5hc3NpZ24oY2hyb21hLCB7IG51bSB9KTtcblxuaW5wdXQuZm9ybWF0Lm51bSA9IG51bTJyZ2I7XG5cbmlucHV0LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgcDogNSxcbiAgICB0ZXN0OiAoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBhcmdzLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgICAgICAgdHlwZShhcmdzWzBdKSA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgICAgIGFyZ3NbMF0gPj0gMCAmJlxuICAgICAgICAgICAgYXJnc1swXSA8PSAweGZmZmZmZlxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiAnbnVtJztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5leHBvcnQgeyBudW0gfTtcbiIsImltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5cbmNvbnN0IG51bTJyZ2IgPSAobnVtKSA9PiB7XG4gICAgaWYgKHR5cGUobnVtKSA9PSAnbnVtYmVyJyAmJiBudW0gPj0gMCAmJiBudW0gPD0gMHhmZmZmZmYpIHtcbiAgICAgICAgY29uc3QgciA9IG51bSA+PiAxNjtcbiAgICAgICAgY29uc3QgZyA9IChudW0gPj4gOCkgJiAweGZmO1xuICAgICAgICBjb25zdCBiID0gbnVtICYgMHhmZjtcbiAgICAgICAgcmV0dXJuIFtyLCBnLCBiLCAxXTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIG51bSBjb2xvcjogJyArIG51bSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBudW0ycmdiO1xuIiwiaW1wb3J0IHsgdW5wYWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuXG5jb25zdCByZ2IybnVtID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBbciwgZywgYl0gPSB1bnBhY2soYXJncywgJ3JnYicpO1xuICAgIHJldHVybiAociA8PCAxNikgKyAoZyA8PCA4KSArIGI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZ2IybnVtO1xuIiwiaW1wb3J0IHsgdW5wYWNrLCB0eXBlIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuaW1wb3J0IGNocm9tYSBmcm9tICcuLi8uLi9jaHJvbWEuanMnO1xuaW1wb3J0IENvbG9yIGZyb20gJy4uLy4uL0NvbG9yLmpzJztcbmltcG9ydCBpbnB1dCBmcm9tICcuLi9pbnB1dC5qcyc7XG5pbXBvcnQgb2tsYWIycmdiIGZyb20gJy4vb2tsYWIycmdiLmpzJztcbmltcG9ydCByZ2Iyb2tsYWIgZnJvbSAnLi9yZ2Iyb2tsYWIuanMnO1xuXG5Db2xvci5wcm90b3R5cGUub2tsYWIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJnYjJva2xhYih0aGlzLl9yZ2IpO1xufTtcblxuY29uc3Qgb2tsYWIgPSAoLi4uYXJncykgPT4gbmV3IENvbG9yKC4uLmFyZ3MsICdva2xhYicpO1xuT2JqZWN0LmFzc2lnbihjaHJvbWEsIHsgb2tsYWIgfSk7XG5cbmlucHV0LmZvcm1hdC5va2xhYiA9IG9rbGFiMnJnYjtcblxuaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICBwOiAyLFxuICAgIHRlc3Q6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGFyZ3MgPSB1bnBhY2soYXJncywgJ29rbGFiJyk7XG4gICAgICAgIGlmICh0eXBlKGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICByZXR1cm4gJ29rbGFiJztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5leHBvcnQgeyBva2xhYiB9O1xuIiwiaW1wb3J0IHsgdW5wYWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuaW1wb3J0IG11bHRpcGx5TWF0cmljZXMgZnJvbSAnLi4vLi4vdXRpbHMvbXVsdGlwbHktbWF0cmljZXMuanMnO1xuaW1wb3J0IHsgeHl6MnJnYiB9IGZyb20gJy4uL2xhYi9sYWIycmdiLmpzJztcblxuY29uc3Qgb2tsYWIycmdiID0gKC4uLmFyZ3MpID0+IHtcbiAgICBhcmdzID0gdW5wYWNrKGFyZ3MsICdsYWInKTtcbiAgICBjb25zdCBbTCwgYSwgYiwgLi4ucmVzdF0gPSBhcmdzO1xuICAgIGNvbnN0IFtYLCBZLCBaXSA9IE9LTGFiX3RvX1hZWihbTCwgYSwgYl0pO1xuICAgIGNvbnN0IFtyLCBnLCBiX10gPSB4eXoycmdiKFgsIFksIFopO1xuICAgIHJldHVybiBbciwgZywgYl8sIC4uLihyZXN0Lmxlbmd0aCA+IDAgJiYgcmVzdFswXSA8IDEgPyBbcmVzdFswXV0gOiBbXSldO1xufTtcblxuLy8gZnJvbSBodHRwczovL3d3dy53My5vcmcvVFIvY3NzLWNvbG9yLTQvI2NvbG9yLWNvbnZlcnNpb24tY29kZVxuZnVuY3Rpb24gT0tMYWJfdG9fWFlaKE9LTGFiKSB7XG4gICAgLy8gR2l2ZW4gT0tMYWIsIGNvbnZlcnQgdG8gWFlaIHJlbGF0aXZlIHRvIEQ2NVxuICAgIHZhciBMTVN0b1hZWiA9IFtcbiAgICAgICAgWzEuMjI2ODc5ODc1ODQ1OTI0MywgLTAuNTU3ODE0OTk0NDYwMjE3MSwgMC4yODEzOTEwNDU2NjU5NjQ3XSxcbiAgICAgICAgWy0wLjA0MDU3NTc0NTIxNDgwMDgsIDEuMTEyMjg2ODAzMjgwMzE3LCAtMC4wNzE3MTEwNTgwNjU1MTY0XSxcbiAgICAgICAgWy0wLjA3NjM3MjkzNjY3NDY2MDEsIC0wLjQyMTQ5MzMzMjQwMjI0MzIsIDEuNTg2OTI0MDE5ODM2NzgxNl1cbiAgICBdO1xuICAgIHZhciBPS0xhYnRvTE1TID0gW1xuICAgICAgICBbMS4wLCAwLjM5NjMzNzc3NzM3NjE3NDksIDAuMjE1ODAzNzU3MzA5OTEzNl0sXG4gICAgICAgIFsxLjAsIC0wLjEwNTU2MTM0NTgxNTY1ODYsIC0wLjA2Mzg1NDE3MjgyNTgxMzNdLFxuICAgICAgICBbMS4wLCAtMC4wODk0ODQxNzc1Mjk4MTE5LCAtMS4yOTE0ODU1NDgwMTk0MDkyXVxuICAgIF07XG5cbiAgICB2YXIgTE1TbmwgPSBtdWx0aXBseU1hdHJpY2VzKE9LTGFidG9MTVMsIE9LTGFiKTtcbiAgICByZXR1cm4gbXVsdGlwbHlNYXRyaWNlcyhcbiAgICAgICAgTE1TdG9YWVosXG4gICAgICAgIExNU25sLm1hcCgoYykgPT4gYyAqKiAzKVxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9rbGFiMnJnYjtcbiIsImltcG9ydCB7IHVucGFjayB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcbmltcG9ydCBtdWx0aXBseU1hdHJpY2VzIGZyb20gJy4uLy4uL3V0aWxzL211bHRpcGx5LW1hdHJpY2VzLmpzJztcbmltcG9ydCB7IHJnYjJ4eXogfSBmcm9tICcuLi9sYWIvcmdiMmxhYi5qcyc7XG5cbmNvbnN0IHJnYjJva2xhYiA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgW3IsIGcsIGIsIC4uLnJlc3RdID0gdW5wYWNrKGFyZ3MsICdyZ2InKTtcbiAgICBjb25zdCB4eXogPSByZ2IyeHl6KHIsIGcsIGIpO1xuICAgIGNvbnN0IG9rbGFiID0gWFlaX3RvX09LTGFiKHh5eik7XG4gICAgcmV0dXJuIFsuLi5va2xhYiwgLi4uKHJlc3QubGVuZ3RoID4gMCAmJiByZXN0WzBdIDwgMSA/IFtyZXN0WzBdXSA6IFtdKV07XG59O1xuXG4vLyBmcm9tIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3MtY29sb3ItNC8jY29sb3ItY29udmVyc2lvbi1jb2RlXG5mdW5jdGlvbiBYWVpfdG9fT0tMYWIoWFlaKSB7XG4gICAgLy8gR2l2ZW4gWFlaIHJlbGF0aXZlIHRvIEQ2NSwgY29udmVydCB0byBPS0xhYlxuICAgIGNvbnN0IFhZWnRvTE1TID0gW1xuICAgICAgICBbMC44MTkwMjI0Mzc5OTY3MDMsIDAuMzYxOTA2MjYwMDUyODkwNCwgLTAuMTI4ODczNzgxNTIwOTg3OV0sXG4gICAgICAgIFswLjAzMjk4MzY1MzkzMjM4ODUsIDAuOTI5Mjg2ODYxNTg2MzQzNCwgMC4wMzYxNDQ2NjYzNTA2NDI0XSxcbiAgICAgICAgWzAuMDQ4MTc3MTg5MzU5NjI0MiwgMC4yNjQyMzk1MzE3NTI3MzA4LCAwLjYzMzU0NzgyODQ2OTQzMDldXG4gICAgXTtcbiAgICBjb25zdCBMTVN0b09LTGFiID0gW1xuICAgICAgICBbMC4yMTA0NTQyNjgzMDkzMTQsIDAuNzkzNjE3Nzc0NzAyMzA1NCwgLTAuMDA0MDcyMDQzMDExNjE5M10sXG4gICAgICAgIFsxLjk3Nzk5ODUzMjQzMTE2ODQsIC0yLjQyODU5MjI0MjA0ODU3OTksIDAuNDUwNTkzNzA5NjE3NDExXSxcbiAgICAgICAgWzAuMDI1OTA0MDQyNDY1NTQ3OCwgMC43ODI3NzE3MTI0NTc1Mjk2LCAtMC44MDg2NzU3NTQ5MjMwNzc0XVxuICAgIF07XG5cbiAgICBjb25zdCBMTVMgPSBtdWx0aXBseU1hdHJpY2VzKFhZWnRvTE1TLCBYWVopO1xuICAgIC8vIEphdmFTY3JpcHQgTWF0aC5jYnJ0IHJldHVybnMgYSBzaWduLW1hdGNoZWQgY3ViZSByb290XG4gICAgLy8gYmV3YXJlIGlmIHBvcnRpbmcgdG8gb3RoZXIgbGFuZ3VhZ2VzXG4gICAgLy8gZXNwZWNpYWxseSBpZiB0ZW1wdGVkIHRvIHVzZSBhIGdlbmVyYWwgcG93ZXIgZnVuY3Rpb25cbiAgICByZXR1cm4gbXVsdGlwbHlNYXRyaWNlcyhcbiAgICAgICAgTE1TdG9PS0xhYixcbiAgICAgICAgTE1TLm1hcCgoYykgPT4gTWF0aC5jYnJ0KGMpKVxuICAgICk7XG4gICAgLy8gTCBpbiByYW5nZSBbMCwxXS4gRm9yIHVzZSBpbiBDU1MsIG11bHRpcGx5IGJ5IDEwMCBhbmQgYWRkIGEgcGVyY2VudFxufVxuXG5leHBvcnQgZGVmYXVsdCByZ2Iyb2tsYWI7XG4iLCJpbXBvcnQgeyB1bnBhY2ssIHR5cGUgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5pbXBvcnQgY2hyb21hIGZyb20gJy4uLy4uL2Nocm9tYS5qcyc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vLi4vQ29sb3IuanMnO1xuaW1wb3J0IGlucHV0IGZyb20gJy4uL2lucHV0LmpzJztcbmltcG9ydCBva2xjaDJyZ2IgZnJvbSAnLi9va2xjaDJyZ2IuanMnO1xuaW1wb3J0IHJnYjJva2xjaCBmcm9tICcuL3JnYjJva2xjaC5qcyc7XG5cbkNvbG9yLnByb3RvdHlwZS5va2xjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmdiMm9rbGNoKHRoaXMuX3JnYik7XG59O1xuXG5jb25zdCBva2xjaCA9ICguLi5hcmdzKSA9PiBuZXcgQ29sb3IoLi4uYXJncywgJ29rbGNoJyk7XG5PYmplY3QuYXNzaWduKGNocm9tYSwgeyBva2xjaCB9KTtcblxuaW5wdXQuZm9ybWF0Lm9rbGNoID0gb2tsY2gycmdiO1xuXG5pbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgIHA6IDIsXG4gICAgdGVzdDogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgYXJncyA9IHVucGFjayhhcmdzLCAnb2tsY2gnKTtcbiAgICAgICAgaWYgKHR5cGUoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIHJldHVybiAnb2tsY2gnO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmV4cG9ydCB7IG9rbGNoIH07XG4iLCJpbXBvcnQgeyB1bnBhY2sgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5pbXBvcnQgbGNoMmxhYiBmcm9tICcuLi9sY2gvbGNoMmxhYi5qcyc7XG5pbXBvcnQgb2tsYWIycmdiIGZyb20gJy4uL29rbGFiL29rbGFiMnJnYi5qcyc7XG5cbmNvbnN0IG9rbGNoMnJnYiA9ICguLi5hcmdzKSA9PiB7XG4gICAgYXJncyA9IHVucGFjayhhcmdzLCAnbGNoJyk7XG4gICAgY29uc3QgW2wsIGMsIGgsIC4uLnJlc3RdID0gYXJncztcbiAgICBjb25zdCBbTCwgYSwgYl9dID0gbGNoMmxhYihsLCBjLCBoKTtcbiAgICBjb25zdCBbciwgZywgYl0gPSBva2xhYjJyZ2IoTCwgYSwgYl8pO1xuICAgIHJldHVybiBbciwgZywgYiwgLi4uKHJlc3QubGVuZ3RoID4gMCAmJiByZXN0WzBdIDwgMSA/IFtyZXN0WzBdXSA6IFtdKV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBva2xjaDJyZ2I7XG4iLCJpbXBvcnQgeyB1bnBhY2sgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5pbXBvcnQgcmdiMm9rbGFiIGZyb20gJy4uL29rbGFiL3JnYjJva2xhYi5qcyc7XG5pbXBvcnQgbGFiMmxjaCBmcm9tICcuLi9sY2gvbGFiMmxjaC5qcyc7XG5cbmNvbnN0IHJnYjJva2xjaCA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgW3IsIGcsIGIsIC4uLnJlc3RdID0gdW5wYWNrKGFyZ3MsICdyZ2InKTtcbiAgICBjb25zdCBbbCwgYSwgYl9dID0gcmdiMm9rbGFiKHIsIGcsIGIpO1xuICAgIGNvbnN0IFtMLCBjLCBoXSA9IGxhYjJsY2gobCwgYSwgYl8pO1xuICAgIHJldHVybiBbTCwgYywgaCwgLi4uKHJlc3QubGVuZ3RoID4gMCAmJiByZXN0WzBdIDwgMSA/IFtyZXN0WzBdXSA6IFtdKV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZ2Iyb2tsY2g7XG4iLCJpbXBvcnQgY2hyb21hIGZyb20gJy4uLy4uL2Nocm9tYS5qcyc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vLi4vQ29sb3IuanMnO1xuaW1wb3J0IGlucHV0IGZyb20gJy4uL2lucHV0LmpzJztcbmltcG9ydCB7IHVucGFjaywgdHlwZSB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcbmNvbnN0IHsgcm91bmQgfSA9IE1hdGg7XG5cbkNvbG9yLnByb3RvdHlwZS5yZ2IgPSBmdW5jdGlvbiAocm5kID0gdHJ1ZSkge1xuICAgIGlmIChybmQgPT09IGZhbHNlKSByZXR1cm4gdGhpcy5fcmdiLnNsaWNlKDAsIDMpO1xuICAgIHJldHVybiB0aGlzLl9yZ2Iuc2xpY2UoMCwgMykubWFwKHJvdW5kKTtcbn07XG5cbkNvbG9yLnByb3RvdHlwZS5yZ2JhID0gZnVuY3Rpb24gKHJuZCA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy5fcmdiLnNsaWNlKDAsIDQpLm1hcCgodiwgaSkgPT4ge1xuICAgICAgICByZXR1cm4gaSA8IDMgPyAocm5kID09PSBmYWxzZSA/IHYgOiByb3VuZCh2KSkgOiB2O1xuICAgIH0pO1xufTtcblxuY29uc3QgcmdiID0gKC4uLmFyZ3MpID0+IG5ldyBDb2xvciguLi5hcmdzLCAncmdiJyk7XG5PYmplY3QuYXNzaWduKGNocm9tYSwgeyByZ2IgfSk7XG5cbmlucHV0LmZvcm1hdC5yZ2IgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IHJnYmEgPSB1bnBhY2soYXJncywgJ3JnYmEnKTtcbiAgICBpZiAocmdiYVszXSA9PT0gdW5kZWZpbmVkKSByZ2JhWzNdID0gMTtcbiAgICByZXR1cm4gcmdiYTtcbn07XG5cbmlucHV0LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgcDogMyxcbiAgICB0ZXN0OiAoLi4uYXJncykgPT4ge1xuICAgICAgICBhcmdzID0gdW5wYWNrKGFyZ3MsICdyZ2JhJyk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGUoYXJncykgPT09ICdhcnJheScgJiZcbiAgICAgICAgICAgIChhcmdzLmxlbmd0aCA9PT0gMyB8fFxuICAgICAgICAgICAgICAgIChhcmdzLmxlbmd0aCA9PT0gNCAmJlxuICAgICAgICAgICAgICAgICAgICB0eXBlKGFyZ3NbM10pID09ICdudW1iZXInICYmXG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbM10gPj0gMCAmJlxuICAgICAgICAgICAgICAgICAgICBhcmdzWzNdIDw9IDEpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiAncmdiJztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5leHBvcnQgeyByZ2IgfTtcbiIsImltcG9ydCBjaHJvbWEgZnJvbSAnLi4vLi4vY2hyb21hLmpzJztcbmltcG9ydCBDb2xvciBmcm9tICcuLi8uLi9Db2xvci5qcyc7XG5pbXBvcnQgaW5wdXQgZnJvbSAnLi4vaW5wdXQuanMnO1xuaW1wb3J0IHRlbXBlcmF0dXJlMnJnYiBmcm9tICcuL3RlbXBlcmF0dXJlMnJnYi5qcyc7XG5pbXBvcnQgcmdiMnRlbXBlcmF0dXJlIGZyb20gJy4vcmdiMnRlbXBlcmF0dXJlLmpzJztcblxuQ29sb3IucHJvdG90eXBlLnRlbXAgPVxuICAgIENvbG9yLnByb3RvdHlwZS5rZWx2aW4gPVxuICAgIENvbG9yLnByb3RvdHlwZS50ZW1wZXJhdHVyZSA9XG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiByZ2IydGVtcGVyYXR1cmUodGhpcy5fcmdiKTtcbiAgICAgICAgfTtcblxuY29uc3QgdGVtcCA9ICguLi5hcmdzKSA9PiBuZXcgQ29sb3IoLi4uYXJncywgJ3RlbXAnKTtcbk9iamVjdC5hc3NpZ24oY2hyb21hLCB7IHRlbXAsIGtlbHZpbjogdGVtcCwgdGVtcGVyYXR1cmU6IHRlbXAgfSk7XG5cbmlucHV0LmZvcm1hdC50ZW1wID1cbiAgICBpbnB1dC5mb3JtYXQua2VsdmluID1cbiAgICBpbnB1dC5mb3JtYXQudGVtcGVyYXR1cmUgPVxuICAgICAgICB0ZW1wZXJhdHVyZTJyZ2I7XG5cbmV4cG9ydCB7IHRlbXAsIHRlbXAgYXMga2VsdmluLCB0ZW1wIGFzIHRlbXBlcmF0dXJlIH07XG4iLCIvKlxuICogQmFzZWQgb24gaW1wbGVtZW50YXRpb24gYnkgTmVpbCBCYXJ0bGV0dFxuICogaHR0cHM6Ly9naXRodWIuY29tL25laWxiYXJ0bGV0dC9jb2xvci10ZW1wZXJhdHVyZVxuICoqL1xuXG5pbXBvcnQgdGVtcGVyYXR1cmUycmdiIGZyb20gJy4vdGVtcGVyYXR1cmUycmdiLmpzJztcbmltcG9ydCB7IHVucGFjayB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcbmNvbnN0IHsgcm91bmQgfSA9IE1hdGg7XG5cbmNvbnN0IHJnYjJ0ZW1wZXJhdHVyZSA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgcmdiID0gdW5wYWNrKGFyZ3MsICdyZ2InKTtcbiAgICBjb25zdCByID0gcmdiWzBdLFxuICAgICAgICBiID0gcmdiWzJdO1xuICAgIGxldCBtaW5UZW1wID0gMTAwMDtcbiAgICBsZXQgbWF4VGVtcCA9IDQwMDAwO1xuICAgIGNvbnN0IGVwcyA9IDAuNDtcbiAgICBsZXQgdGVtcDtcbiAgICB3aGlsZSAobWF4VGVtcCAtIG1pblRlbXAgPiBlcHMpIHtcbiAgICAgICAgdGVtcCA9IChtYXhUZW1wICsgbWluVGVtcCkgKiAwLjU7XG4gICAgICAgIGNvbnN0IHJnYiA9IHRlbXBlcmF0dXJlMnJnYih0ZW1wKTtcbiAgICAgICAgaWYgKHJnYlsyXSAvIHJnYlswXSA+PSBiIC8gcikge1xuICAgICAgICAgICAgbWF4VGVtcCA9IHRlbXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtaW5UZW1wID0gdGVtcDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcm91bmQodGVtcCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZ2IydGVtcGVyYXR1cmU7XG4iLCIvKlxuICogQmFzZWQgb24gaW1wbGVtZW50YXRpb24gYnkgTmVpbCBCYXJ0bGV0dFxuICogaHR0cHM6Ly9naXRodWIuY29tL25laWxiYXJ0bGV0dC9jb2xvci10ZW1wZXJhdHVyZVxuICovXG5cbmNvbnN0IHsgbG9nIH0gPSBNYXRoO1xuXG5jb25zdCB0ZW1wZXJhdHVyZTJyZ2IgPSAoa2VsdmluKSA9PiB7XG4gICAgY29uc3QgdGVtcCA9IGtlbHZpbiAvIDEwMDtcbiAgICBsZXQgciwgZywgYjtcbiAgICBpZiAodGVtcCA8IDY2KSB7XG4gICAgICAgIHIgPSAyNTU7XG4gICAgICAgIGcgPVxuICAgICAgICAgICAgdGVtcCA8IDZcbiAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICA6IC0xNTUuMjU0ODU1NjI3MDkxNzkgLVxuICAgICAgICAgICAgICAgICAgMC40NDU5Njk1MDQ2OTU3OTEzMyAqIChnID0gdGVtcCAtIDIpICtcbiAgICAgICAgICAgICAgICAgIDEwNC40OTIxNjE5OTM5Mzg4OCAqIGxvZyhnKTtcbiAgICAgICAgYiA9XG4gICAgICAgICAgICB0ZW1wIDwgMjBcbiAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICA6IC0yNTQuNzY5MzUxODQxMjA5MDIgK1xuICAgICAgICAgICAgICAgICAgMC44Mjc0MDk2MDY0MDA3Mzk1ICogKGIgPSB0ZW1wIC0gMTApICtcbiAgICAgICAgICAgICAgICAgIDExNS42Nzk5NDQwMTA2NjE0NyAqIGxvZyhiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByID1cbiAgICAgICAgICAgIDM1MS45NzY5MDU2NjgwNTY5MyArXG4gICAgICAgICAgICAwLjExNDIwNjQ1Mzc4NDE2NSAqIChyID0gdGVtcCAtIDU1KSAtXG4gICAgICAgICAgICA0MC4yNTM2NjMwOTMzMjEyNyAqIGxvZyhyKTtcbiAgICAgICAgZyA9XG4gICAgICAgICAgICAzMjUuNDQ5NDEyNTcxMTk3NCArXG4gICAgICAgICAgICAwLjA3OTQzNDU2NTM2NjYyMzQyICogKGcgPSB0ZW1wIC0gNTApIC1cbiAgICAgICAgICAgIDI4LjA4NTI5NjM1MDc5NTcgKiBsb2coZyk7XG4gICAgICAgIGIgPSAyNTU7XG4gICAgfVxuICAgIHJldHVybiBbciwgZywgYiwgMV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0ZW1wZXJhdHVyZTJyZ2I7XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSAnLi4vQ29sb3IuanMnO1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL3V0aWxzL2luZGV4LmpzJztcblxuQ29sb3IucHJvdG90eXBlLmFscGhhID0gZnVuY3Rpb24gKGEsIG11dGF0ZSA9IGZhbHNlKSB7XG4gICAgaWYgKGEgIT09IHVuZGVmaW5lZCAmJiB0eXBlKGEpID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAobXV0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZ2JbM10gPSBhO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihbdGhpcy5fcmdiWzBdLCB0aGlzLl9yZ2JbMV0sIHRoaXMuX3JnYlsyXSwgYV0sICdyZ2InKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3JnYlszXTtcbn07XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSAnLi4vQ29sb3IuanMnO1xuXG5Db2xvci5wcm90b3R5cGUuY2xpcHBlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmdiLl9jbGlwcGVkIHx8IGZhbHNlO1xufTtcbiIsImltcG9ydCAnLi4vaW8vbGFiL2luZGV4LmpzJztcbmltcG9ydCBDb2xvciBmcm9tICcuLi9Db2xvci5qcyc7XG5pbXBvcnQgTEFCX0NPTlNUQU5UUyBmcm9tICcuLi9pby9sYWIvbGFiLWNvbnN0YW50cy5qcyc7XG5cbkNvbG9yLnByb3RvdHlwZS5kYXJrZW4gPSBmdW5jdGlvbiAoYW1vdW50ID0gMSkge1xuICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICBjb25zdCBsYWIgPSBtZS5sYWIoKTtcbiAgICBsYWJbMF0gLT0gTEFCX0NPTlNUQU5UUy5LbiAqIGFtb3VudDtcbiAgICByZXR1cm4gbmV3IENvbG9yKGxhYiwgJ2xhYicpLmFscGhhKG1lLmFscGhhKCksIHRydWUpO1xufTtcblxuQ29sb3IucHJvdG90eXBlLmJyaWdodGVuID0gZnVuY3Rpb24gKGFtb3VudCA9IDEpIHtcbiAgICByZXR1cm4gdGhpcy5kYXJrZW4oLWFtb3VudCk7XG59O1xuXG5Db2xvci5wcm90b3R5cGUuZGFya2VyID0gQ29sb3IucHJvdG90eXBlLmRhcmtlbjtcbkNvbG9yLnByb3RvdHlwZS5icmlnaHRlciA9IENvbG9yLnByb3RvdHlwZS5icmlnaHRlbjtcbiIsImltcG9ydCBDb2xvciBmcm9tICcuLi9Db2xvci5qcyc7XG5cbkNvbG9yLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobWMpIHtcbiAgICBjb25zdCBbbW9kZSwgY2hhbm5lbF0gPSBtYy5zcGxpdCgnLicpO1xuICAgIGNvbnN0IHNyYyA9IHRoaXNbbW9kZV0oKTtcbiAgICBpZiAoY2hhbm5lbCkge1xuICAgICAgICBjb25zdCBpID0gbW9kZS5pbmRleE9mKGNoYW5uZWwpIC0gKG1vZGUuc3Vic3RyKDAsIDIpID09PSAnb2snID8gMiA6IDApO1xuICAgICAgICBpZiAoaSA+IC0xKSByZXR1cm4gc3JjW2ldO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHVua25vd24gY2hhbm5lbCAke2NoYW5uZWx9IGluIG1vZGUgJHttb2RlfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzcmM7XG4gICAgfVxufTtcbiIsImltcG9ydCBDb2xvciBmcm9tICcuLi9Db2xvci5qcyc7XG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vdXRpbHMvaW5kZXguanMnO1xuY29uc3QgeyBwb3cgfSA9IE1hdGg7XG5cbmNvbnN0IEVQUyA9IDFlLTc7XG5jb25zdCBNQVhfSVRFUiA9IDIwO1xuXG5Db2xvci5wcm90b3R5cGUubHVtaW5hbmNlID0gZnVuY3Rpb24gKGx1bSwgbW9kZSA9ICdyZ2InKSB7XG4gICAgaWYgKGx1bSAhPT0gdW5kZWZpbmVkICYmIHR5cGUobHVtKSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKGx1bSA9PT0gMCkge1xuICAgICAgICAgICAgLy8gcmV0dXJuIHB1cmUgYmxhY2tcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoWzAsIDAsIDAsIHRoaXMuX3JnYlszXV0sICdyZ2InKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobHVtID09PSAxKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gcHVyZSB3aGl0ZVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihbMjU1LCAyNTUsIDI1NSwgdGhpcy5fcmdiWzNdXSwgJ3JnYicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbXB1dGUgbmV3IGNvbG9yIHVzaW5nLi4uXG4gICAgICAgIGxldCBjdXJfbHVtID0gdGhpcy5sdW1pbmFuY2UoKTtcbiAgICAgICAgbGV0IG1heF9pdGVyID0gTUFYX0lURVI7XG5cbiAgICAgICAgY29uc3QgdGVzdCA9IChsb3csIGhpZ2gpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1pZCA9IGxvdy5pbnRlcnBvbGF0ZShoaWdoLCAwLjUsIG1vZGUpO1xuICAgICAgICAgICAgY29uc3QgbG0gPSBtaWQubHVtaW5hbmNlKCk7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMobHVtIC0gbG0pIDwgRVBTIHx8ICFtYXhfaXRlci0tKSB7XG4gICAgICAgICAgICAgICAgLy8gY2xvc2UgZW5vdWdoXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBsbSA+IGx1bSA/IHRlc3QobG93LCBtaWQpIDogdGVzdChtaWQsIGhpZ2gpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJnYiA9IChcbiAgICAgICAgICAgIGN1cl9sdW0gPiBsdW1cbiAgICAgICAgICAgICAgICA/IHRlc3QobmV3IENvbG9yKFswLCAwLCAwXSksIHRoaXMpXG4gICAgICAgICAgICAgICAgOiB0ZXN0KHRoaXMsIG5ldyBDb2xvcihbMjU1LCAyNTUsIDI1NV0pKVxuICAgICAgICApLnJnYigpO1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yKFsuLi5yZ2IsIHRoaXMuX3JnYlszXV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmdiMmx1bWluYW5jZSguLi50aGlzLl9yZ2Iuc2xpY2UoMCwgMykpO1xufTtcblxuY29uc3QgcmdiMmx1bWluYW5jZSA9IChyLCBnLCBiKSA9PiB7XG4gICAgLy8gcmVsYXRpdmUgbHVtaW5hbmNlXG4gICAgLy8gc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDgvUkVDLVdDQUcyMC0yMDA4MTIxMS8jcmVsYXRpdmVsdW1pbmFuY2VkZWZcbiAgICByID0gbHVtaW5hbmNlX3gocik7XG4gICAgZyA9IGx1bWluYW5jZV94KGcpO1xuICAgIGIgPSBsdW1pbmFuY2VfeChiKTtcbiAgICByZXR1cm4gMC4yMTI2ICogciArIDAuNzE1MiAqIGcgKyAwLjA3MjIgKiBiO1xufTtcblxuY29uc3QgbHVtaW5hbmNlX3ggPSAoeCkgPT4ge1xuICAgIHggLz0gMjU1O1xuICAgIHJldHVybiB4IDw9IDAuMDM5MjggPyB4IC8gMTIuOTIgOiBwb3coKHggKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbn07XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSAnLi4vQ29sb3IuanMnO1xuaW1wb3J0IG1peCBmcm9tICcuLi9nZW5lcmF0b3IvbWl4LmpzJztcblxuQ29sb3IucHJvdG90eXBlLm1peCA9IENvbG9yLnByb3RvdHlwZS5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uIChcbiAgICBjb2wyLFxuICAgIGYgPSAwLjUsXG4gICAgLi4ucmVzdFxuKSB7XG4gICAgcmV0dXJuIG1peCh0aGlzLCBjb2wyLCBmLCAuLi5yZXN0KTtcbn07XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSAnLi4vQ29sb3IuanMnO1xuXG5Db2xvci5wcm90b3R5cGUucHJlbXVsdGlwbHkgPSBmdW5jdGlvbiAobXV0YXRlID0gZmFsc2UpIHtcbiAgICBjb25zdCByZ2IgPSB0aGlzLl9yZ2I7XG4gICAgY29uc3QgYSA9IHJnYlszXTtcbiAgICBpZiAobXV0YXRlKSB7XG4gICAgICAgIHRoaXMuX3JnYiA9IFtyZ2JbMF0gKiBhLCByZ2JbMV0gKiBhLCByZ2JbMl0gKiBhLCBhXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihbcmdiWzBdICogYSwgcmdiWzFdICogYSwgcmdiWzJdICogYSwgYV0sICdyZ2InKTtcbiAgICB9XG59O1xuIiwiaW1wb3J0ICcuLi9pby9sY2gvaW5kZXguanMnO1xuaW1wb3J0IENvbG9yIGZyb20gJy4uL0NvbG9yLmpzJztcbmltcG9ydCBMQUJfQ09OU1RBTlRTIGZyb20gJy4uL2lvL2xhYi9sYWItY29uc3RhbnRzLmpzJztcblxuQ29sb3IucHJvdG90eXBlLnNhdHVyYXRlID0gZnVuY3Rpb24gKGFtb3VudCA9IDEpIHtcbiAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgY29uc3QgbGNoID0gbWUubGNoKCk7XG4gICAgbGNoWzFdICs9IExBQl9DT05TVEFOVFMuS24gKiBhbW91bnQ7XG4gICAgaWYgKGxjaFsxXSA8IDApIGxjaFsxXSA9IDA7XG4gICAgcmV0dXJuIG5ldyBDb2xvcihsY2gsICdsY2gnKS5hbHBoYShtZS5hbHBoYSgpLCB0cnVlKTtcbn07XG5cbkNvbG9yLnByb3RvdHlwZS5kZXNhdHVyYXRlID0gZnVuY3Rpb24gKGFtb3VudCA9IDEpIHtcbiAgICByZXR1cm4gdGhpcy5zYXR1cmF0ZSgtYW1vdW50KTtcbn07XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSAnLi4vQ29sb3IuanMnO1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL3V0aWxzL2luZGV4LmpzJztcblxuQ29sb3IucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChtYywgdmFsdWUsIG11dGF0ZSA9IGZhbHNlKSB7XG4gICAgY29uc3QgW21vZGUsIGNoYW5uZWxdID0gbWMuc3BsaXQoJy4nKTtcbiAgICBjb25zdCBzcmMgPSB0aGlzW21vZGVdKCk7XG4gICAgaWYgKGNoYW5uZWwpIHtcbiAgICAgICAgY29uc3QgaSA9IG1vZGUuaW5kZXhPZihjaGFubmVsKSAtIChtb2RlLnN1YnN0cigwLCAyKSA9PT0gJ29rJyA/IDIgOiAwKTtcbiAgICAgICAgaWYgKGkgPiAtMSkge1xuICAgICAgICAgICAgaWYgKHR5cGUodmFsdWUpID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZS5jaGFyQXQoMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNbaV0gKz0gK3ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjW2ldICs9ICt2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tpXSAqPSArdmFsdWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjW2ldIC89ICt2YWx1ZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tpXSA9ICt2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUodmFsdWUpID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHNyY1tpXSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHVuc3VwcG9ydGVkIHZhbHVlIGZvciBDb2xvci5zZXRgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG91dCA9IG5ldyBDb2xvcihzcmMsIG1vZGUpO1xuICAgICAgICAgICAgaWYgKG11dGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JnYiA9IG91dC5fcmdiO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHVua25vd24gY2hhbm5lbCAke2NoYW5uZWx9IGluIG1vZGUgJHttb2RlfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzcmM7XG4gICAgfVxufTtcbiIsImltcG9ydCAnLi4vaW8vbGFiL2luZGV4LmpzJztcbmltcG9ydCBDb2xvciBmcm9tICcuLi9Db2xvci5qcyc7XG5pbXBvcnQgbWl4IGZyb20gJy4uL2dlbmVyYXRvci9taXguanMnO1xuXG5Db2xvci5wcm90b3R5cGUudGludCA9IGZ1bmN0aW9uIChmID0gMC41LCAuLi5yZXN0KSB7XG4gICAgcmV0dXJuIG1peCh0aGlzLCAnd2hpdGUnLCBmLCAuLi5yZXN0KTtcbn07XG5cbkNvbG9yLnByb3RvdHlwZS5zaGFkZSA9IGZ1bmN0aW9uIChmID0gMC41LCAuLi5yZXN0KSB7XG4gICAgcmV0dXJuIG1peCh0aGlzLCAnYmxhY2snLCBmLCAuLi5yZXN0KTtcbn07XG4iLCJpbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUuanMnO1xuXG5jb25zdCB7IGxvZywgcG93LCBmbG9vciwgYWJzIH0gPSBNYXRoO1xuXG5leHBvcnQgZnVuY3Rpb24gYW5hbHl6ZShkYXRhLCBrZXkgPSBudWxsKSB7XG4gICAgY29uc3QgciA9IHtcbiAgICAgICAgbWluOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgICBtYXg6IE51bWJlci5NQVhfVkFMVUUgKiAtMSxcbiAgICAgICAgc3VtOiAwLFxuICAgICAgICB2YWx1ZXM6IFtdLFxuICAgICAgICBjb3VudDogMFxuICAgIH07XG4gICAgaWYgKHR5cGUoZGF0YSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGRhdGEgPSBPYmplY3QudmFsdWVzKGRhdGEpO1xuICAgIH1cbiAgICBkYXRhLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgICBpZiAoa2V5ICYmIHR5cGUodmFsKSA9PT0gJ29iamVjdCcpIHZhbCA9IHZhbFtrZXldO1xuICAgICAgICBpZiAodmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSBudWxsICYmICFpc05hTih2YWwpKSB7XG4gICAgICAgICAgICByLnZhbHVlcy5wdXNoKHZhbCk7XG4gICAgICAgICAgICByLnN1bSArPSB2YWw7XG4gICAgICAgICAgICBpZiAodmFsIDwgci5taW4pIHIubWluID0gdmFsO1xuICAgICAgICAgICAgaWYgKHZhbCA+IHIubWF4KSByLm1heCA9IHZhbDtcbiAgICAgICAgICAgIHIuY291bnQgKz0gMTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgci5kb21haW4gPSBbci5taW4sIHIubWF4XTtcblxuICAgIHIubGltaXRzID0gKG1vZGUsIG51bSkgPT4gbGltaXRzKHIsIG1vZGUsIG51bSk7XG5cbiAgICByZXR1cm4gcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpbWl0cyhkYXRhLCBtb2RlID0gJ2VxdWFsJywgbnVtID0gNykge1xuICAgIGlmICh0eXBlKGRhdGEpID09ICdhcnJheScpIHtcbiAgICAgICAgZGF0YSA9IGFuYWx5emUoZGF0YSk7XG4gICAgfVxuICAgIGNvbnN0IHsgbWluLCBtYXggfSA9IGRhdGE7XG4gICAgY29uc3QgdmFsdWVzID0gZGF0YS52YWx1ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuXG4gICAgaWYgKG51bSA9PT0gMSkge1xuICAgICAgICByZXR1cm4gW21pbiwgbWF4XTtcbiAgICB9XG5cbiAgICBjb25zdCBsaW1pdHMgPSBbXTtcblxuICAgIGlmIChtb2RlLnN1YnN0cigwLCAxKSA9PT0gJ2MnKSB7XG4gICAgICAgIC8vIGNvbnRpbnVvdXNcbiAgICAgICAgbGltaXRzLnB1c2gobWluKTtcbiAgICAgICAgbGltaXRzLnB1c2gobWF4KTtcbiAgICB9XG5cbiAgICBpZiAobW9kZS5zdWJzdHIoMCwgMSkgPT09ICdlJykge1xuICAgICAgICAvLyBlcXVhbCBpbnRlcnZhbFxuICAgICAgICBsaW1pdHMucHVzaChtaW4pO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgICAgICBsaW1pdHMucHVzaChtaW4gKyAoaSAvIG51bSkgKiAobWF4IC0gbWluKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGltaXRzLnB1c2gobWF4KTtcbiAgICB9IGVsc2UgaWYgKG1vZGUuc3Vic3RyKDAsIDEpID09PSAnbCcpIHtcbiAgICAgICAgLy8gbG9nIHNjYWxlXG4gICAgICAgIGlmIChtaW4gPD0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdMb2dhcml0aG1pYyBzY2FsZXMgYXJlIG9ubHkgcG9zc2libGUgZm9yIHZhbHVlcyA+IDAnXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1pbl9sb2cgPSBNYXRoLkxPRzEwRSAqIGxvZyhtaW4pO1xuICAgICAgICBjb25zdCBtYXhfbG9nID0gTWF0aC5MT0cxMEUgKiBsb2cobWF4KTtcbiAgICAgICAgbGltaXRzLnB1c2gobWluKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW07IGkrKykge1xuICAgICAgICAgICAgbGltaXRzLnB1c2gocG93KDEwLCBtaW5fbG9nICsgKGkgLyBudW0pICogKG1heF9sb2cgLSBtaW5fbG9nKSkpO1xuICAgICAgICB9XG4gICAgICAgIGxpbWl0cy5wdXNoKG1heCk7XG4gICAgfSBlbHNlIGlmIChtb2RlLnN1YnN0cigwLCAxKSA9PT0gJ3EnKSB7XG4gICAgICAgIC8vIHF1YW50aWxlIHNjYWxlXG4gICAgICAgIGxpbWl0cy5wdXNoKG1pbik7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSAoKHZhbHVlcy5sZW5ndGggLSAxKSAqIGkpIC8gbnVtO1xuICAgICAgICAgICAgY29uc3QgcGIgPSBmbG9vcihwKTtcbiAgICAgICAgICAgIGlmIChwYiA9PT0gcCkge1xuICAgICAgICAgICAgICAgIGxpbWl0cy5wdXNoKHZhbHVlc1twYl0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBwID4gcGJcbiAgICAgICAgICAgICAgICBjb25zdCBwciA9IHAgLSBwYjtcbiAgICAgICAgICAgICAgICBsaW1pdHMucHVzaCh2YWx1ZXNbcGJdICogKDEgLSBwcikgKyB2YWx1ZXNbcGIgKyAxXSAqIHByKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsaW1pdHMucHVzaChtYXgpO1xuICAgIH0gZWxzZSBpZiAobW9kZS5zdWJzdHIoMCwgMSkgPT09ICdrJykge1xuICAgICAgICAvLyBrLW1lYW5zIGNsdXN0ZXJpbmdcbiAgICAgICAgLypcbiAgICAgICAgaW1wbGVtZW50YXRpb24gYmFzZWQgb25cbiAgICAgICAgaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2ZpZ3VlL3NvdXJjZS9icm93c2UvdHJ1bmsvZmlndWUuanMjMzM2XG4gICAgICAgIHNpbXBsaWZpZWQgZm9yIDEtZCBpbnB1dCB2YWx1ZXNcbiAgICAgICAgKi9cbiAgICAgICAgbGV0IGNsdXN0ZXI7XG4gICAgICAgIGNvbnN0IG4gPSB2YWx1ZXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50cyA9IG5ldyBBcnJheShuKTtcbiAgICAgICAgY29uc3QgY2x1c3RlclNpemVzID0gbmV3IEFycmF5KG51bSk7XG4gICAgICAgIGxldCByZXBlYXQgPSB0cnVlO1xuICAgICAgICBsZXQgbmJfaXRlcnMgPSAwO1xuICAgICAgICBsZXQgY2VudHJvaWRzID0gbnVsbDtcblxuICAgICAgICAvLyBnZXQgc2VlZCB2YWx1ZXNcbiAgICAgICAgY2VudHJvaWRzID0gW107XG4gICAgICAgIGNlbnRyb2lkcy5wdXNoKG1pbik7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgICAgIGNlbnRyb2lkcy5wdXNoKG1pbiArIChpIC8gbnVtKSAqIChtYXggLSBtaW4pKTtcbiAgICAgICAgfVxuICAgICAgICBjZW50cm9pZHMucHVzaChtYXgpO1xuXG4gICAgICAgIHdoaWxlIChyZXBlYXQpIHtcbiAgICAgICAgICAgIC8vIGFzc2lnbm1lbnQgc3RlcFxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW07IGorKykge1xuICAgICAgICAgICAgICAgIGNsdXN0ZXJTaXplc1tqXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgIGxldCBtaW5kaXN0ID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgICAgICAgICBsZXQgYmVzdDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBhYnMoY2VudHJvaWRzW2pdIC0gdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdCA8IG1pbmRpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmRpc3QgPSBkaXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdCA9IGo7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2x1c3RlclNpemVzW2Jlc3RdKys7XG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRzW2ldID0gYmVzdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjZW50cm9pZHMgc3RlcFxuICAgICAgICAgICAgY29uc3QgbmV3Q2VudHJvaWRzID0gbmV3IEFycmF5KG51bSk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bTsgaisrKSB7XG4gICAgICAgICAgICAgICAgbmV3Q2VudHJvaWRzW2pdID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2x1c3RlciA9IGFzc2lnbm1lbnRzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChuZXdDZW50cm9pZHNbY2x1c3Rlcl0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2VudHJvaWRzW2NsdXN0ZXJdID0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbnRyb2lkc1tjbHVzdGVyXSArPSB2YWx1ZXNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW07IGorKykge1xuICAgICAgICAgICAgICAgIG5ld0NlbnRyb2lkc1tqXSAqPSAxIC8gY2x1c3RlclNpemVzW2pdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjaGVjayBjb252ZXJnZW5jZVxuICAgICAgICAgICAgcmVwZWF0ID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bTsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0NlbnRyb2lkc1tqXSAhPT0gY2VudHJvaWRzW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2VudHJvaWRzID0gbmV3Q2VudHJvaWRzO1xuICAgICAgICAgICAgbmJfaXRlcnMrKztcblxuICAgICAgICAgICAgaWYgKG5iX2l0ZXJzID4gMjAwKSB7XG4gICAgICAgICAgICAgICAgcmVwZWF0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaW5pc2hlZCBrLW1lYW5zIGNsdXN0ZXJpbmdcbiAgICAgICAgLy8gdGhlIG5leHQgcGFydCBpcyBib3Jyb3dlZCBmcm9tIGdhYnJpZWxmbG9yLml0XG4gICAgICAgIGNvbnN0IGtDbHVzdGVycyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bTsgaisrKSB7XG4gICAgICAgICAgICBrQ2x1c3RlcnNbal0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgY2x1c3RlciA9IGFzc2lnbm1lbnRzW2ldO1xuICAgICAgICAgICAga0NsdXN0ZXJzW2NsdXN0ZXJdLnB1c2godmFsdWVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG1wS01lYW5zQnJlYWtzID0gW107XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtOyBqKyspIHtcbiAgICAgICAgICAgIHRtcEtNZWFuc0JyZWFrcy5wdXNoKGtDbHVzdGVyc1tqXVswXSk7XG4gICAgICAgICAgICB0bXBLTWVhbnNCcmVha3MucHVzaChrQ2x1c3RlcnNbal1ba0NsdXN0ZXJzW2pdLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgfVxuICAgICAgICB0bXBLTWVhbnNCcmVha3MgPSB0bXBLTWVhbnNCcmVha3Muc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgICAgICBsaW1pdHMucHVzaCh0bXBLTWVhbnNCcmVha3NbMF0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRtcEtNZWFuc0JyZWFrcy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAgICAgY29uc3QgdiA9IHRtcEtNZWFuc0JyZWFrc1tpXTtcbiAgICAgICAgICAgIGlmICghaXNOYU4odikgJiYgbGltaXRzLmluZGV4T2YodikgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgbGltaXRzLnB1c2godik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxpbWl0cztcbn1cbiIsImltcG9ydCBsaW1pdCBmcm9tICcuL2xpbWl0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgKHJnYikgPT4ge1xuICAgIHJnYi5fY2xpcHBlZCA9IGZhbHNlO1xuICAgIHJnYi5fdW5jbGlwcGVkID0gcmdiLnNsaWNlKDApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDM7IGkrKykge1xuICAgICAgICBpZiAoaSA8IDMpIHtcbiAgICAgICAgICAgIGlmIChyZ2JbaV0gPCAwIHx8IHJnYltpXSA+IDI1NSkgcmdiLl9jbGlwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJnYltpXSA9IGxpbWl0KHJnYltpXSwgMCwgMjU1KTtcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSAzKSB7XG4gICAgICAgICAgICByZ2JbaV0gPSBsaW1pdChyZ2JbaV0sIDAsIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZ2I7XG59O1xuIiwiaW1wb3J0IENvbG9yIGZyb20gJy4uL0NvbG9yLmpzJztcbmltcG9ydCAnLi4vb3BzL2x1bWluYW5jZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChhLCBiKSA9PiB7XG4gICAgLy8gV0NBRyBjb250cmFzdCByYXRpb1xuICAgIC8vIHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDA4L1JFQy1XQ0FHMjAtMjAwODEyMTEvI2NvbnRyYXN0LXJhdGlvZGVmXG4gICAgYSA9IG5ldyBDb2xvcihhKTtcbiAgICBiID0gbmV3IENvbG9yKGIpO1xuICAgIGNvbnN0IGwxID0gYS5sdW1pbmFuY2UoKTtcbiAgICBjb25zdCBsMiA9IGIubHVtaW5hbmNlKCk7XG4gICAgcmV0dXJuIGwxID4gbDIgPyAobDEgKyAwLjA1KSAvIChsMiArIDAuMDUpIDogKGwyICsgMC4wNSkgLyAobDEgKyAwLjA1KTtcbn07XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSAnLi4vQ29sb3IuanMnO1xuaW1wb3J0IG1peCBmcm9tICcuLi9nZW5lcmF0b3IvbWl4LmpzJztcblxuLyoqXG4gKiBAbGljZW5zZVxuICpcbiAqIFRoZSBBUENBIGNvbnRyYXN0IHByZWRpY3Rpb24gYWxnb3JpdGhtIGlzIGJhc2VkIG9mIHRoZSBmb3JtdWxhcyBwdWJsaXNoZWRcbiAqIGluIHRoZSBBUENBLTEuMC45OEcgc3BlY2lmaWNhdGlvbiBieSBNeW5kZXguIFRoZSBzcGVjaWZpY2F0aW9uIGlzIGF2YWlsYWJsZSBhdDpcbiAqIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9NeW5kZXgvYXBjYS13My9tYXN0ZXIvaW1hZ2VzL0FQQ0F3M18wLjEuMTdfQVBDQTAuMC45OEcuc3ZnXG4gKlxuICogTm90ZSB0aGF0IHRoZSBBUENBIGltcGxlbWVudGF0aW9uIGlzIHN0aWxsIGJldGEsIHNvIHBsZWFzZSB1cGRhdGUgdG9cbiAqIGZ1dHVyZSB2ZXJzaW9ucyBvZiBjaHJvbWEuanMgd2hlbiB0aGV5IGJlY29tZSBhdmFpbGFibGUuXG4gKlxuICogWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgdGhlIEFQQ0EgUmVhZGFiaWxpdHkgQ3JpdGVyaW9uIGF0XG4gKiBodHRwczovL3JlYWR0ZWNoLm9yZy9BUkMvXG4gKi9cblxuLy8gY29uc3RhbnRzXG5jb25zdCBXX29mZnNldCA9IDAuMDI3O1xuY29uc3QgUF9pbiA9IDAuMDAwNTtcbmNvbnN0IFBfb3V0ID0gMC4xO1xuY29uc3QgUl9zY2FsZSA9IDEuMTQ7XG5jb25zdCBCX3RocmVzaG9sZCA9IDAuMDIyO1xuY29uc3QgQl9leHAgPSAxLjQxNDtcblxuZXhwb3J0IGRlZmF1bHQgKHRleHQsIGJnKSA9PiB7XG4gICAgLy8gcGFyc2UgaW5wdXQgY29sb3JzXG4gICAgdGV4dCA9IG5ldyBDb2xvcih0ZXh0KTtcbiAgICBiZyA9IG5ldyBDb2xvcihiZyk7XG4gICAgLy8gaWYgdGV4dCBjb2xvciBoYXMgYWxwaGEsIGJsZW5kIGFnYWluc3QgYmFja2dyb3VuZFxuICAgIGlmICh0ZXh0LmFscGhhKCkgPCAxKSB7XG4gICAgICAgIHRleHQgPSBtaXgoYmcsIHRleHQsIHRleHQuYWxwaGEoKSwgJ3JnYicpO1xuICAgIH1cbiAgICBjb25zdCBsX3RleHQgPSBsdW0oLi4udGV4dC5yZ2IoKSk7XG4gICAgY29uc3QgbF9iZyA9IGx1bSguLi5iZy5yZ2IoKSk7XG5cbiAgICAvLyBzb2Z0IGNsYW1wIGJsYWNrIGxldmVsc1xuICAgIGNvbnN0IFlfdGV4dCA9XG4gICAgICAgIGxfdGV4dCA+PSBCX3RocmVzaG9sZFxuICAgICAgICAgICAgPyBsX3RleHRcbiAgICAgICAgICAgIDogbF90ZXh0ICsgTWF0aC5wb3coQl90aHJlc2hvbGQgLSBsX3RleHQsIEJfZXhwKTtcbiAgICBjb25zdCBZX2JnID1cbiAgICAgICAgbF9iZyA+PSBCX3RocmVzaG9sZCA/IGxfYmcgOiBsX2JnICsgTWF0aC5wb3coQl90aHJlc2hvbGQgLSBsX2JnLCBCX2V4cCk7XG5cbiAgICAvLyBub3JtYWwgcG9sYXJpdHkgKGRhcmsgdGV4dCBvbiBsaWdodCBiYWNrZ3JvdW5kKVxuICAgIGNvbnN0IFNfbm9ybSA9IE1hdGgucG93KFlfYmcsIDAuNTYpIC0gTWF0aC5wb3coWV90ZXh0LCAwLjU3KTtcbiAgICAvLyByZXZlcnNlIHBvbGFyaXR5IChsaWdodCB0ZXh0IG9uIGRhcmsgYmFja2dyb3VuZClcbiAgICBjb25zdCBTX3JldiA9IE1hdGgucG93KFlfYmcsIDAuNjUpIC0gTWF0aC5wb3coWV90ZXh0LCAwLjYyKTtcbiAgICAvLyBjbGFtcCBub2lzZSB0aGVuIHNjYWxlXG4gICAgY29uc3QgQyA9XG4gICAgICAgIE1hdGguYWJzKFlfYmcgLSBZX3RleHQpIDwgUF9pblxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IFlfdGV4dCA8IFlfYmdcbiAgICAgICAgICAgICAgPyBTX25vcm0gKiBSX3NjYWxlXG4gICAgICAgICAgICAgIDogU19yZXYgKiBSX3NjYWxlO1xuICAgIC8vIGNsYW1wIG1pbmltdW0gY29udHJhc3QgdGhlbiBvZmZzZXRcbiAgICBjb25zdCBTX2FwYyA9IE1hdGguYWJzKEMpIDwgUF9vdXQgPyAwIDogQyA+IDAgPyBDIC0gV19vZmZzZXQgOiBDICsgV19vZmZzZXQ7XG4gICAgLy8gc2NhbGUgdG8gMTAwXG4gICAgcmV0dXJuIFNfYXBjICogMTAwO1xufTtcblxuZnVuY3Rpb24gbHVtKHIsIGcsIGIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAwLjIxMjY3MjkgKiBNYXRoLnBvdyhyIC8gMjU1LCAyLjQpICtcbiAgICAgICAgMC43MTUxNTIyICogTWF0aC5wb3coZyAvIDI1NSwgMi40KSArXG4gICAgICAgIDAuMDcyMTc1ICogTWF0aC5wb3coYiAvIDI1NSwgMi40KVxuICAgICk7XG59XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSAnLi4vQ29sb3IuanMnO1xuY29uc3QgeyBzcXJ0LCBwb3csIG1pbiwgbWF4LCBhdGFuMiwgYWJzLCBjb3MsIHNpbiwgZXhwLCBQSSB9ID0gTWF0aDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGEsIGIsIEtsID0gMSwgS2MgPSAxLCBLaCA9IDEpIHtcbiAgICAvLyBEZWx0YSBFIChDSUUgMjAwMClcbiAgICAvLyBzZWUgaHR0cDovL3d3dy5icnVjZWxpbmRibG9vbS5jb20vaW5kZXguaHRtbD9FcW5fRGVsdGFFX0NJRTIwMDAuaHRtbFxuICAgIHZhciByYWQyZGVnID0gZnVuY3Rpb24gKHJhZCkge1xuICAgICAgICByZXR1cm4gKDM2MCAqIHJhZCkgLyAoMiAqIFBJKTtcbiAgICB9O1xuICAgIHZhciBkZWcycmFkID0gZnVuY3Rpb24gKGRlZykge1xuICAgICAgICByZXR1cm4gKDIgKiBQSSAqIGRlZykgLyAzNjA7XG4gICAgfTtcbiAgICBhID0gbmV3IENvbG9yKGEpO1xuICAgIGIgPSBuZXcgQ29sb3IoYik7XG4gICAgY29uc3QgW0wxLCBhMSwgYjFdID0gQXJyYXkuZnJvbShhLmxhYigpKTtcbiAgICBjb25zdCBbTDIsIGEyLCBiMl0gPSBBcnJheS5mcm9tKGIubGFiKCkpO1xuICAgIGNvbnN0IGF2Z0wgPSAoTDEgKyBMMikgLyAyO1xuICAgIGNvbnN0IEMxID0gc3FydChwb3coYTEsIDIpICsgcG93KGIxLCAyKSk7XG4gICAgY29uc3QgQzIgPSBzcXJ0KHBvdyhhMiwgMikgKyBwb3coYjIsIDIpKTtcbiAgICBjb25zdCBhdmdDID0gKEMxICsgQzIpIC8gMjtcbiAgICBjb25zdCBHID0gMC41ICogKDEgLSBzcXJ0KHBvdyhhdmdDLCA3KSAvIChwb3coYXZnQywgNykgKyBwb3coMjUsIDcpKSkpO1xuICAgIGNvbnN0IGExcCA9IGExICogKDEgKyBHKTtcbiAgICBjb25zdCBhMnAgPSBhMiAqICgxICsgRyk7XG4gICAgY29uc3QgQzFwID0gc3FydChwb3coYTFwLCAyKSArIHBvdyhiMSwgMikpO1xuICAgIGNvbnN0IEMycCA9IHNxcnQocG93KGEycCwgMikgKyBwb3coYjIsIDIpKTtcbiAgICBjb25zdCBhdmdDcCA9IChDMXAgKyBDMnApIC8gMjtcbiAgICBjb25zdCBhcmN0YW4xID0gcmFkMmRlZyhhdGFuMihiMSwgYTFwKSk7XG4gICAgY29uc3QgYXJjdGFuMiA9IHJhZDJkZWcoYXRhbjIoYjIsIGEycCkpO1xuICAgIGNvbnN0IGgxcCA9IGFyY3RhbjEgPj0gMCA/IGFyY3RhbjEgOiBhcmN0YW4xICsgMzYwO1xuICAgIGNvbnN0IGgycCA9IGFyY3RhbjIgPj0gMCA/IGFyY3RhbjIgOiBhcmN0YW4yICsgMzYwO1xuICAgIGNvbnN0IGF2Z0hwID1cbiAgICAgICAgYWJzKGgxcCAtIGgycCkgPiAxODAgPyAoaDFwICsgaDJwICsgMzYwKSAvIDIgOiAoaDFwICsgaDJwKSAvIDI7XG4gICAgY29uc3QgVCA9XG4gICAgICAgIDEgLVxuICAgICAgICAwLjE3ICogY29zKGRlZzJyYWQoYXZnSHAgLSAzMCkpICtcbiAgICAgICAgMC4yNCAqIGNvcyhkZWcycmFkKDIgKiBhdmdIcCkpICtcbiAgICAgICAgMC4zMiAqIGNvcyhkZWcycmFkKDMgKiBhdmdIcCArIDYpKSAtXG4gICAgICAgIDAuMiAqIGNvcyhkZWcycmFkKDQgKiBhdmdIcCAtIDYzKSk7XG4gICAgbGV0IGRlbHRhSHAgPSBoMnAgLSBoMXA7XG4gICAgZGVsdGFIcCA9XG4gICAgICAgIGFicyhkZWx0YUhwKSA8PSAxODBcbiAgICAgICAgICAgID8gZGVsdGFIcFxuICAgICAgICAgICAgOiBoMnAgPD0gaDFwXG4gICAgICAgICAgICAgID8gZGVsdGFIcCArIDM2MFxuICAgICAgICAgICAgICA6IGRlbHRhSHAgLSAzNjA7XG4gICAgZGVsdGFIcCA9IDIgKiBzcXJ0KEMxcCAqIEMycCkgKiBzaW4oZGVnMnJhZChkZWx0YUhwKSAvIDIpO1xuICAgIGNvbnN0IGRlbHRhTCA9IEwyIC0gTDE7XG4gICAgY29uc3QgZGVsdGFDcCA9IEMycCAtIEMxcDtcbiAgICBjb25zdCBzbCA9IDEgKyAoMC4wMTUgKiBwb3coYXZnTCAtIDUwLCAyKSkgLyBzcXJ0KDIwICsgcG93KGF2Z0wgLSA1MCwgMikpO1xuICAgIGNvbnN0IHNjID0gMSArIDAuMDQ1ICogYXZnQ3A7XG4gICAgY29uc3Qgc2ggPSAxICsgMC4wMTUgKiBhdmdDcCAqIFQ7XG4gICAgY29uc3QgZGVsdGFUaGV0YSA9IDMwICogZXhwKC1wb3coKGF2Z0hwIC0gMjc1KSAvIDI1LCAyKSk7XG4gICAgY29uc3QgUmMgPSAyICogc3FydChwb3coYXZnQ3AsIDcpIC8gKHBvdyhhdmdDcCwgNykgKyBwb3coMjUsIDcpKSk7XG4gICAgY29uc3QgUnQgPSAtUmMgKiBzaW4oMiAqIGRlZzJyYWQoZGVsdGFUaGV0YSkpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHNxcnQoXG4gICAgICAgIHBvdyhkZWx0YUwgLyAoS2wgKiBzbCksIDIpICtcbiAgICAgICAgICAgIHBvdyhkZWx0YUNwIC8gKEtjICogc2MpLCAyKSArXG4gICAgICAgICAgICBwb3coZGVsdGFIcCAvIChLaCAqIHNoKSwgMikgK1xuICAgICAgICAgICAgUnQgKiAoZGVsdGFDcCAvIChLYyAqIHNjKSkgKiAoZGVsdGFIcCAvIChLaCAqIHNoKSlcbiAgICApO1xuICAgIHJldHVybiBtYXgoMCwgbWluKDEwMCwgcmVzdWx0KSk7XG59XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSAnLi4vQ29sb3IuanMnO1xuXG4vLyBzaW1wbGUgRXVjbGlkZWFuIGRpc3RhbmNlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYSwgYiwgbW9kZSA9ICdsYWInKSB7XG4gICAgLy8gRGVsdGEgRSAoQ0lFIDE5NzYpXG4gICAgLy8gc2VlIGh0dHA6Ly93d3cuYnJ1Y2VsaW5kYmxvb20uY29tL2luZGV4Lmh0bWw/RXF1YXRpb25zLmh0bWxcbiAgICBhID0gbmV3IENvbG9yKGEpO1xuICAgIGIgPSBuZXcgQ29sb3IoYik7XG4gICAgY29uc3QgbDEgPSBhLmdldChtb2RlKTtcbiAgICBjb25zdCBsMiA9IGIuZ2V0KG1vZGUpO1xuICAgIGxldCBzdW1fc3EgPSAwO1xuICAgIGZvciAobGV0IGkgaW4gbDEpIHtcbiAgICAgICAgY29uc3QgZCA9IChsMVtpXSB8fCAwKSAtIChsMltpXSB8fCAwKTtcbiAgICAgICAgc3VtX3NxICs9IGQgKiBkO1xuICAgIH1cbiAgICByZXR1cm4gTWF0aC5zcXJ0KHN1bV9zcSk7XG59XG4iLCJjb25zdCB7IFBJLCBtaW4sIG1heCB9ID0gTWF0aDtcblxuY29uc3Qgcm5kMiA9IChhKSA9PiBNYXRoLnJvdW5kKGEgKiAxMDApIC8gMTAwO1xuY29uc3Qgcm5kMyA9IChhKSA9PiBNYXRoLnJvdW5kKGEgKiAxMDApIC8gMTAwO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNsaXBfcmdiIH0gZnJvbSAnLi9jbGlwX3JnYi5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGxpbWl0IH0gZnJvbSAnLi9saW1pdC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHR5cGUgfSBmcm9tICcuL3R5cGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bnBhY2sgfSBmcm9tICcuL3VucGFjay5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGxhc3QgfSBmcm9tICcuL2xhc3QuanMnO1xuXG5jb25zdCBUV09QSSA9IFBJICogMjtcbmNvbnN0IFBJVEhJUkQgPSBQSSAvIDM7XG5jb25zdCBERUcyUkFEID0gUEkgLyAxODA7XG5jb25zdCBSQUQyREVHID0gMTgwIC8gUEk7XG5cbmV4cG9ydCB7IFBJLCBUV09QSSwgUElUSElSRCwgREVHMlJBRCwgUkFEMkRFRywgbWluLCBtYXgsIHJuZDIsIHJuZDMgfTtcbiIsImltcG9ydCB0eXBlIGZyb20gJy4vdHlwZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChhcmdzKSA9PiB7XG4gICAgaWYgKGFyZ3MubGVuZ3RoIDwgMikgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgbCA9IGFyZ3MubGVuZ3RoIC0gMTtcbiAgICBpZiAodHlwZShhcmdzW2xdKSA9PSAnc3RyaW5nJykgcmV0dXJuIGFyZ3NbbF0udG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gbnVsbDtcbn07XG4iLCJjb25zdCB7IG1pbiwgbWF4IH0gPSBNYXRoO1xuXG5leHBvcnQgZGVmYXVsdCAoeCwgbG93ID0gMCwgaGlnaCA9IDEpID0+IHtcbiAgICByZXR1cm4gbWluKG1heChsb3csIHgpLCBoaWdoKTtcbn07XG4iLCIvLyBmcm9tIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3MtY29sb3ItNC9tdWx0aXBseS1tYXRyaWNlcy5qc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbXVsdGlwbHlNYXRyaWNlcyhBLCBCKSB7XG4gICAgbGV0IG0gPSBBLmxlbmd0aDtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShBWzBdKSkge1xuICAgICAgICAvLyBBIGlzIHZlY3RvciwgY29udmVydCB0byBbW2EsIGIsIGMsIC4uLl1dXG4gICAgICAgIEEgPSBbQV07XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KEJbMF0pKSB7XG4gICAgICAgIC8vIEIgaXMgdmVjdG9yLCBjb252ZXJ0IHRvIFtbYV0sIFtiXSwgW2NdLCAuLi5dXVxuICAgICAgICBCID0gQi5tYXAoKHgpID0+IFt4XSk7XG4gICAgfVxuXG4gICAgbGV0IHAgPSBCWzBdLmxlbmd0aDtcbiAgICBsZXQgQl9jb2xzID0gQlswXS5tYXAoKF8sIGkpID0+IEIubWFwKCh4KSA9PiB4W2ldKSk7IC8vIHRyYW5zcG9zZSBCXG4gICAgbGV0IHByb2R1Y3QgPSBBLm1hcCgocm93KSA9PlxuICAgICAgICBCX2NvbHMubWFwKChjb2wpID0+IHtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyb3cpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbC5yZWR1Y2UoKGEsIGMpID0+IGEgKyBjICogcm93LCAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJvdy5yZWR1Y2UoKGEsIGMsIGkpID0+IGEgKyBjICogKGNvbFtpXSB8fCAwKSwgMCk7XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIGlmIChtID09PSAxKSB7XG4gICAgICAgIHByb2R1Y3QgPSBwcm9kdWN0WzBdOyAvLyBBdm9pZCBbW2EsIGIsIGMsIC4uLl1dXG4gICAgfVxuXG4gICAgaWYgKHAgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3QubWFwKCh4KSA9PiB4WzBdKTsgLy8gQXZvaWQgW1thXSwgW2JdLCBbY10sIC4uLl1dXG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2R1Y3Q7XG59XG4iLCIvLyBzb21lIHByZS1kZWZpbmVkIGNvbG9yIHNjYWxlczpcbmltcG9ydCBjaHJvbWEgZnJvbSAnLi4vY2hyb21hLmpzJztcbmltcG9ydCAnLi4vaW8vaHNsL2luZGV4LmpzJztcbmltcG9ydCBzY2FsZSBmcm9tICcuLi9nZW5lcmF0b3Ivc2NhbGUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29vbCgpIHtcbiAgICAgICAgcmV0dXJuIHNjYWxlKFtjaHJvbWEuaHNsKDE4MCwgMSwgMC45KSwgY2hyb21hLmhzbCgyNTAsIDAuNywgMC40KV0pO1xuICAgIH0sXG4gICAgaG90KCkge1xuICAgICAgICByZXR1cm4gc2NhbGUoWycjMDAwJywgJyNmMDAnLCAnI2ZmMCcsICcjZmZmJ10sIFswLCAwLjI1LCAwLjc1LCAxXSkubW9kZShcbiAgICAgICAgICAgICdyZ2InXG4gICAgICAgICk7XG4gICAgfVxufTtcbiIsIi8vIHBvcnRlZCBmcm9tIGpRdWVyeSdzICQudHlwZVxuY29uc3QgY2xhc3NUb1R5cGUgPSB7fTtcbmZvciAobGV0IG5hbWUgb2YgW1xuICAgICdCb29sZWFuJyxcbiAgICAnTnVtYmVyJyxcbiAgICAnU3RyaW5nJyxcbiAgICAnRnVuY3Rpb24nLFxuICAgICdBcnJheScsXG4gICAgJ0RhdGUnLFxuICAgICdSZWdFeHAnLFxuICAgICdVbmRlZmluZWQnLFxuICAgICdOdWxsJ1xuXSkge1xuICAgIGNsYXNzVG9UeXBlW2Bbb2JqZWN0ICR7bmFtZX1dYF0gPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIGNsYXNzVG9UeXBlW09iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopXSB8fCAnb2JqZWN0Jztcbn1cbiIsImltcG9ydCB0eXBlIGZyb20gJy4vdHlwZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChhcmdzLCBrZXlPcmRlciA9IG51bGwpID0+IHtcbiAgICAvLyBpZiBjYWxsZWQgd2l0aCBtb3JlIHRoYW4gMyBhcmd1bWVudHMsIHdlIHJldHVybiB0aGUgYXJndW1lbnRzXG4gICAgaWYgKGFyZ3MubGVuZ3RoID49IDMpIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKTtcbiAgICAvLyB3aXRoIGxlc3MgdGhhbiAzIGFyZ3Mgd2UgY2hlY2sgaWYgZmlyc3QgYXJnIGlzIG9iamVjdFxuICAgIC8vIGFuZCB1c2UgdGhlIGtleU9yZGVyIHN0cmluZyB0byBleHRyYWN0IGFuZCBzb3J0IHByb3BlcnRpZXNcbiAgICBpZiAodHlwZShhcmdzWzBdKSA9PSAnb2JqZWN0JyAmJiBrZXlPcmRlcikge1xuICAgICAgICByZXR1cm4ga2V5T3JkZXJcbiAgICAgICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgICAgIC5maWx0ZXIoKGspID0+IGFyZ3NbMF1ba10gIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIC5tYXAoKGspID0+IGFyZ3NbMF1ba10pO1xuICAgIH1cbiAgICAvLyBvdGhlcndpc2Ugd2UganVzdCByZXR1cm4gdGhlIGZpcnN0IGFyZ3VtZW50XG4gICAgLy8gKHdoaWNoIHdlIHN1cHBvc2UgaXMgYW4gYXJyYXkgb2YgYXJncylcbiAgICByZXR1cm4gYXJnc1swXS5zbGljZSgwKTtcbn07XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSAnLi4vQ29sb3IuanMnO1xuXG5leHBvcnQgZGVmYXVsdCAoLi4uYXJncykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIG5ldyBDb2xvciguLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG4iLCIvLyB0aGlzIGdldHMgdXBkYXRlZCBhdXRvbWF0aWNhbGx5XG5leHBvcnQgY29uc3QgdmVyc2lvbiA9ICczLjEuMSc7XG4iLCJpbXBvcnQgY2hyb21hIGZyb20gXCJjaHJvbWEtanNcIjtcbmltcG9ydCAqIGFzIHRoZW1lU3RvcmUgZnJvbSAnLi4vdXRpbHMvdGhlbWVzLXN0b3JlJztcbmltcG9ydCB7IHJlc29sdmVHbG9iYWxUb2tlblZhbHVlIH0gZnJvbSBcIi4uL3V0aWxzL3Rva2VuLXJlZmVyZW5jZXNcIjtcbmltcG9ydCB7IGRlZmF1bHRBY2NlbnRIVUVzLCBzeXN0ZW1BY2NlbnRMaXN0IH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5leHBvcnQgZnVuY3Rpb24gZ2V0QWNjZW50UmFtcCh0aGVtZSwgcGFyYW1zKSB7XG4gICAgbGV0IHRleHRTYXR1cmF0aW9uQWRqdXN0bWVudHMgPSB7fTtcbiAgICAvLyBpZiAocGFyYW1zLmN1c3RvbUFjY2VudFRleHRTYXR1cmF0aW9uID09PSB0cnVlKSB7XG4gICAgLy8gICAgIHRleHRTYXR1cmF0aW9uQWRqdXN0bWVudHMgPSB7XG4gICAgLy8gICAgICAgICBzOiBwYXJhbXMuYWNjZW50VGV4dFNhdHVyYXRpb25cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICBzd2l0Y2ggKHRoZW1lKSB7XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCIxMDBcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBcInJnYmEoezIwMH0sIDAuMTI1KVwiLFxuICAgICAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwiY29sb3JcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBgU3VidGxlIHNlbWl0cmFuc3BhcmVudCBhY2NlbnRgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIjIwMFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IFwicmdiYSh7MjAwfSwgMC4zMylcIixcbiAgICAgICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogYExpZ2h0IHNlbWl0cmFuc3BhcmVudCBhY2NlbnRgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIjMwMFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IFwiezMwMH1cIixcbiAgICAgICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogYE5vbiB0ZXh0dWFsIGVsZW1lbnRzYFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCI0MDBcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBcIns0MDB9XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJjb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGBCYXNlIGJhY2tncm91bmQgY29sb3JgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIjUwMFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IFwiezYwMH1cIixcbiAgICAgICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogYFRleHQgb24gbGlnaHQgc3VyZmFjZWAsXG4gICAgICAgICAgICAgICAgICAgIFwiYWRqdXN0bWVudHNcIjogdGV4dFNhdHVyYXRpb25BZGp1c3RtZW50c1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCI2MDBcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBcInsxMDB9XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJjb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGBUZXh0IG9uIGRhcmsgc3VyZmFjZWAsXG4gICAgICAgICAgICAgICAgICAgIFwiYWRqdXN0bWVudHNcIjogdGV4dFNhdHVyYXRpb25BZGp1c3RtZW50c1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcImRhcmtcIjoge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBcIjEwMFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IFwicmdiYSh7MjAwfSwgMC4yMClcIixcbiAgICAgICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogYFN1YnRsZSBzZW1pdHJhbnNwYXJlbnQgYWNjZW50YFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCIyMDBcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBcInJnYmEoezIwMH0sIDAuNDUpXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJjb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGBMaWdodCBzZW1pdHJhbnNwYXJlbnQgYWNjZW50YFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCIzMDBcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBcInszMDB9XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJjb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGBOb24gdGV4dHVhbCBlbGVtZW50c2BcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiNDAwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCIkdmFsdWVcIjogXCJ7NDAwfVwiLFxuICAgICAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwiY29sb3JcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBgQmFzZSBiYWNrZ3JvdW5kIGNvbG9yYFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCI1MDBcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBcInsxMDB9XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJjb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGBUZXh0IG9uIGxpZ2h0IHN1cmZhY2VgLFxuICAgICAgICAgICAgICAgICAgICBcImFkanVzdG1lbnRzXCI6IHRleHRTYXR1cmF0aW9uQWRqdXN0bWVudHNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiNjAwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCIkdmFsdWVcIjogXCJ7MTAwfVwiLFxuICAgICAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwiY29sb3JcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBgVGV4dCBvbiBkYXJrIHN1cmZhY2VgLFxuICAgICAgICAgICAgICAgICAgICBcImFkanVzdG1lbnRzXCI6IHRleHRTYXR1cmF0aW9uQWRqdXN0bWVudHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0Q29sb3JQYXJhbXModGhlbWUsIHBhcmFtcykge1xuICAgIGxldCBjb2xvclBhcmFtcyA9IHtcbiAgICAgICAgc2F0dXJhdGlvbjogcGFyYW1zLmFjY2VudFNhdHVyYXRpb24sIC8vMC45IGlzIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgbWluTHVtaW5hbmNlOiBwYXJhbXMuYWNjZW50TWluTHVtaW5hbmNlLFxuICAgICAgICBtaWRMdW1pbmFuY2U6IHBhcmFtcy5hY2NlbnRNaWRMdW1pbmFuY2UsXG4gICAgICAgIG1heEx1bWluYW5jZTogcGFyYW1zLmFjY2VudE1heEx1bWluYW5jZSxcbiAgICB9O1xuICAgIGlmICh0aGVtZSA9PSAnZGFyaycgJiYgdGhlbWVTdG9yZS5pc0N1c3RvbURhcmtNb2RlKCkgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbG9yUGFyYW1zLnNhdHVyYXRpb24gPSBwYXJhbXMuYWNjZW50U2F0dXJhdGlvbiAqIDAuODU7XG4gICAgICAgIC8vIGNvbG9yUGFyYW1zLm1heEx1bWluYW5jZSA9IHBhcmFtcy5hY2NlbnRNYXhMdW1pbmFuY2UgKiAwLjg1O1xuICAgIH1cbiAgICByZXR1cm4gY29sb3JQYXJhbXM7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVTeXN0ZW1BY2NlbnRQYWxldHRlKHRoZW1lLCBwYXJhbXMpIHtcbiAgICBjb25zdCB7IHNhdHVyYXRpb24sIG1pbkx1bWluYW5jZSwgbWlkTHVtaW5hbmNlLCBtYXhMdW1pbmFuY2UgfSA9IGdldENvbG9yUGFyYW1zKHRoZW1lLCBwYXJhbXMpO1xuICAgIGxldCBhY2NlbnRzID0ge1xuICAgICAgICByZWQ6IGdldEFjY2VudFJhbXAodGhlbWUsIHBhcmFtcyksXG4gICAgICAgIGFtYmVyOiBnZXRBY2NlbnRSYW1wKHRoZW1lLCBwYXJhbXMpLFxuICAgICAgICBicm93bjogZ2V0QWNjZW50UmFtcCh0aGVtZSwgcGFyYW1zKSxcbiAgICAgICAgZ3JlZW46IGdldEFjY2VudFJhbXAodGhlbWUsIHBhcmFtcyksXG4gICAgICAgIHRlYWw6IGdldEFjY2VudFJhbXAodGhlbWUsIHBhcmFtcyksXG4gICAgICAgIGJsdWU6IGdldEFjY2VudFJhbXAodGhlbWUsIHBhcmFtcyksXG4gICAgICAgIGluZGlnbzogZ2V0QWNjZW50UmFtcCh0aGVtZSwgcGFyYW1zKSxcbiAgICAgICAgdmlvbGV0OiBnZXRBY2NlbnRSYW1wKHRoZW1lLCBwYXJhbXMpLFxuICAgICAgICBwdXJwbGU6IGdldEFjY2VudFJhbXAodGhlbWUsIHBhcmFtcyksXG4gICAgICAgIHBpbms6IGdldEFjY2VudFJhbXAodGhlbWUsIHBhcmFtcylcbiAgICB9O1xuICAgIGZvciAoY29uc3QgW25hbWUsIHNjYWxlXSBvZiBPYmplY3QuZW50cmllcyhhY2NlbnRzKSkge1xuICAgICAgICBjb25zdCBodWUgPSBwYXJhbXNbbmFtZV07XG4gICAgICAgIGNvbnN0IHNoYWRlcyA9IGdldEdsb2JhbEFjY2VudFJhbXAoaHVlLCBzYXR1cmF0aW9uLCBtaW5MdW1pbmFuY2UsIG1pZEx1bWluYW5jZSwgbWF4THVtaW5hbmNlKTtcbiAgICAgICAgYWNjZW50c1tuYW1lXSA9IHJlc29sdmVSYW1wVmFsdWVzKHNjYWxlLCBzaGFkZXMpO1xuICAgIH1cbiAgICByZXR1cm4gYWNjZW50cztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUdsb2JhbEFjY2VudFBhbGV0dGUodGhlbWUsIHBhcmFtcykge1xuICAgIGNvbnN0IHsgc2F0dXJhdGlvbiwgbWluTHVtaW5hbmNlLCBtaWRMdW1pbmFuY2UsIG1heEx1bWluYW5jZSB9ID0gZ2V0Q29sb3JQYXJhbXModGhlbWUsIHBhcmFtcyk7XG4gICAgbGV0IGFjY2VudHMgPSB7fTtcbiAgICBzeXN0ZW1BY2NlbnRMaXN0LmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGNvbnN0IGh1ZSA9IHBhcmFtc1tuYW1lXTtcbiAgICAgICAgYWNjZW50c1tuYW1lXSA9IGdldEdsb2JhbEFjY2VudFJhbXAoaHVlLCBzYXR1cmF0aW9uLCBtaW5MdW1pbmFuY2UsIG1pZEx1bWluYW5jZSwgbWF4THVtaW5hbmNlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWNjZW50cztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRHbG9iYWxBY2NlbnRSYW1wKGh1ZSwgc2F0dXJhdGlvbiwgbWluTHVtaW5hbmNlLCBtaWRMaW1pbmFuY2UsIG1heEx1bWluYW5jZSwgc3RlcHMgPSA3KSB7XG4gICAgY29uc3Qga2V5U2hhZGVzID0gZ2V0UmFuZ2VPZlRocmVlKHtcbiAgICAgICAgaHVlLFxuICAgICAgICBzYXR1cmF0aW9uLFxuICAgICAgICBtaW5MdW1pbmFuY2UsXG4gICAgICAgIG1pZExpbWluYW5jZSxcbiAgICAgICAgbWF4THVtaW5hbmNlXG4gICAgfSk7XG4gICAgbGV0IGNvbG9yUmFtcCA9IHt9O1xuICAgIGNvbnN0IHNjYWxlID0gY2hyb21hLnNjYWxlKGtleVNoYWRlcykuY29sb3JzKHN0ZXBzLCAnaGV4Jyk7XG4gICAgc2NhbGUuZm9yRWFjaCgoY29sb3IsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbG9yUmFtcFtgJHtpbmRleCArIDF9MDBgXSA9IHtcbiAgICAgICAgICAgICR2YWx1ZTogY29sb3IsXG4gICAgICAgICAgICAkdHlwZTogJ2NvbG9yJyxcbiAgICAgICAgICAgIHByaXZhdGU6IHRydWVcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29sb3JSYW1wO1xufVxuZnVuY3Rpb24gcmVzb2x2ZVJhbXBWYWx1ZXModGVtcGxhdGVSYW1wLCBkaWN0aW9uYXJ5KSB7XG4gICAgbGV0IG91dHB1dCA9IHt9O1xuICAgIE9iamVjdC5lbnRyaWVzKHRlbXBsYXRlUmFtcCkuZm9yRWFjaCgoW3NoYWRlTnVtYmVyLCB0b2tlbl0pID0+IHtcbiAgICAgICAgdG9rZW4uJHZhbHVlID0gcmVzb2x2ZUdsb2JhbFRva2VuVmFsdWUodG9rZW4uJHZhbHVlLCBkaWN0aW9uYXJ5KTtcbiAgICAgICAgb3V0cHV0W3NoYWRlTnVtYmVyXSA9IHRva2VuO1xuICAgIH0pO1xuICAgIHJldHVybiBvdXRwdXQ7XG59XG5mdW5jdGlvbiBnZXRSYW5nZU9mVGhyZWUoeyBodWUsIHNhdHVyYXRpb24sIG1pbkx1bWluYW5jZSA9IDAuMSwgbWlkTGltaW5hbmNlID0gMC4xOCwgbWF4THVtaW5hbmNlID0gMC4yOSB9KSB7XG4gICAgbGV0IGNvbG9yMSA9IGNocm9tYS5oc2woaHVlICogMC45Niwgc2F0dXJhdGlvbiAqIDEsIDAuNSlcbiAgICAgICAgLmx1bWluYW5jZShtYXhMdW1pbmFuY2UpO1xuICAgIC8vIHRoaXMgb25lIGFsd2F5cyA0LjUgOiAxIGNvbnRyYXN0IHJhdGlvXG4gICAgbGV0IGNvbG9yMiA9IGNocm9tYS5oc2woaHVlLCBzYXR1cmF0aW9uICogMSwgMC41KVxuICAgICAgICAubHVtaW5hbmNlKG1pZExpbWluYW5jZSk7XG4gICAgbGV0IGNvbG9yMyA9IGNocm9tYS5oc2woaHVlICogMS4wNCwgc2F0dXJhdGlvbiAqIDEsIDAuNSlcbiAgICAgICAgLmx1bWluYW5jZShtaW5MdW1pbmFuY2UpO1xuICAgIHJldHVybiBbY29sb3IxLCBjb2xvcjIsIGNvbG9yM107XG59XG5leHBvcnQgeyBkZWZhdWx0QWNjZW50SFVFcyBhcyBkZWZhdWx0QWNjZW50Q29sb3JzIH07XG4iLCJpbXBvcnQgY2hyb21hIGZyb20gXCJjaHJvbWEtanNcIjtcbmltcG9ydCB7IHJlbmRlckNvbG9yIH0gZnJvbSBcIi4vc3dhdGNoZXMtZ2VuZXJhdG9yXCI7XG5pbXBvcnQgeyBmbGF0dGVuT2JqZWN0IH0gZnJvbSBcIi4uL3V0aWxzL2ZsYXR0ZW4tb2JqZWN0XCI7XG5pbXBvcnQgeyBkZWZhdWx0U2V0dGluZ3MgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcbmZ1bmN0aW9uIGdldFNhdHVyYXRpb25Nb2RpZmllcihsaWdodG5lc3MpIHtcbiAgICAvLyB2aXN1YWwgcmVwcmVzZW50YXRpb25cbiAgICAvLyBodHRwczovL3d3dy5kZXNtb3MuY29tL2NhbGN1bGF0b3IvMDJ1ZnJmc3V6eVxuICAgIGNvbnN0IG9mZnNldCA9IDUwOyAvLyBsaWd0aG5lc3MgcmFuZ2UgaXMgWzAsIDEwMF0sIGZvciBzYXR1cmF0aW9uIHdlIG5lZWQgdG8gb2Zmc2V0IHRoZSBjdXJ2ZSB0byBtYWtlIFstNTAsIDUwXSByYW5nZSBcbiAgICBjb25zdCBtYWduaXR1ZGUgPSA3MDsgLy8gc2V0cyBob3cgbXVjaCB0byBtb2RpZnksIGhpZ2hlciB2YWx1ZXMgb3V0cHV0cyBzbWFsbGVyIG1vZGlmaWVyXG4gICAgY29uc3Qgc2F0dXJhdGlvbk1vZGlmaWVyID0gMSArIChNYXRoLnBvdyhsaWdodG5lc3MgLSBvZmZzZXQsIDIpIC8gbWFnbml0dWRlIC0gTWF0aC5wb3cob2Zmc2V0LCAyKSAvIG1hZ25pdHVkZSkgLyAxMDA7XG4gICAgcmV0dXJuIHNhdHVyYXRpb25Nb2RpZmllcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU5ldXRyYWxzKHBhcmFtcykge1xuICAgIGNvbnN0IG1pbiA9IDA7XG4gICAgY29uc3QgbWF4ID0gMTAwO1xuICAgIGNvbnN0IHsgaHVlID0gMjAwLCBzYXR1cmF0aW9uID0gMC4xLCBkaXN0YW5jZSB9ID0gcGFyYW1zIHx8IHt9O1xuICAgIGxldCB0b2tlbnMgPSBmbGF0dGVuT2JqZWN0KHtcbiAgICAgICAgXCJ0ZXh0XCI6IHtcbiAgICAgICAgICAgIFwiYmxhY2tcIjoge1xuICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IGB7Z3JleS0ke3BhcmFtcy50ZXh0QmxhY2tCcmlnaHRuZXNzIHx8IGRlZmF1bHRTZXR0aW5ncy50ZXh0QmxhY2tCcmlnaHRuZXNzfX1gLFxuICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogJ2NvbG9yJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwid2hpdGVcIjoge1xuICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IGB7Z3JleS0ke3BhcmFtcy50ZXh0V2hpdGVCcmlnaHRuZXNzIHx8IGRlZmF1bHRTZXR0aW5ncy50ZXh0V2hpdGVCcmlnaHRuZXNzfX1gLFxuICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogJ2NvbG9yJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgbGV0IHZhbHVlID0gbWluO1xuICAgIHdoaWxlICh2YWx1ZSA8PSBtYXgpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSBjaHJvbWEuaHNsKGh1ZSwgc2F0dXJhdGlvbiAqIGdldFNhdHVyYXRpb25Nb2RpZmllcih2YWx1ZSksIHZhbHVlIC8gMTAwKTtcbiAgICAgICAgdG9rZW5zW2BncmV5LSR7dmFsdWV9YF0gPSB7XG4gICAgICAgICAgICAnJHZhbHVlJzogY29sb3IuaGV4KCksXG4gICAgICAgICAgICAnJHR5cGUnOiAnY29sb3InLFxuICAgICAgICAgICAgJ3ByaXZhdGUnOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIHZhbHVlKys7XG4gICAgfVxuICAgIHRva2Vuc1tcImdyZXktMTAwXCJdID0ge1xuICAgICAgICBcIiR2YWx1ZVwiOiBcIiNGRkZGRkZcIixcbiAgICAgICAgJyR0eXBlJzogJ2NvbG9yJyxcbiAgICAgICAgJ3ByaXZhdGUnOiB0cnVlXG4gICAgfTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlck5ldXRyYWxzKGNvbG9ycywgbmFtZSkge1xuICAgIGNvbnN0IGV4aXN0aW5nTm9kZSA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRDaGlsZCgobm9kZSkgPT4gbm9kZS5uYW1lLnN0YXJ0c1dpdGgoJ0dsb2JhbCBOZXV0cmFscycpKTtcbiAgICBleGlzdGluZ05vZGUgPT09IG51bGwgfHwgZXhpc3RpbmdOb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBleGlzdGluZ05vZGUucmVtb3ZlKCk7XG4gICAgbGV0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBmcmFtZS5sYXlvdXRNb2RlID0gJ0hPUklaT05UQUwnO1xuICAgIGZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgIGZyYW1lLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgIGZyYW1lLml0ZW1TcGFjaW5nID0gMDtcbiAgICBmcmFtZS5uYW1lID0gbmFtZSB8fCAnR2xvYmFsIE5ldXRyYWxzJztcbiAgICBmcmFtZS54ID0gMDtcbiAgICBmcmFtZS55ID0gLTE1NjtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBjb2xvcl0gb2YgT2JqZWN0LmVudHJpZXMoY29sb3JzKSkge1xuICAgICAgICByZW5kZXJDb2xvcihmcmFtZSwgbmFtZSwgY29sb3IsIGNvbG9ycyk7XG4gICAgfVxuICAgIHJldHVybiBmcmFtZTtcbn1cbiIsImltcG9ydCB7IGdlbmVyYXRlR2xvYmFsQWNjZW50UGFsZXR0ZSB9IGZyb20gXCIuL2FjY2VudC1wYWxldHRlLWdlbmVyYXRvclwiO1xuaW1wb3J0IHsgcmVuZGVyU2hhZGVzIH0gZnJvbSBcIi4vc3dhdGNoZXMtZ2VuZXJhdG9yXCI7XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQWNjZW50cyh0aGVtZSwgcGFyYW1zLCBuYW1lKSB7XG4gICAgY29uc3QgY29sb3JzID0gZ2VuZXJhdGVHbG9iYWxBY2NlbnRQYWxldHRlKHRoZW1lLCBwYXJhbXMpO1xuICAgIGNvbnN0IGV4aXN0aW5nTm9kZSA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRDaGlsZCgobm9kZSkgPT4gbm9kZS5uYW1lID09IChuYW1lIHx8ICdBY2NlbnQgQ29sb3VycycpKTtcbiAgICBleGlzdGluZ05vZGUgPT09IG51bGwgfHwgZXhpc3RpbmdOb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBleGlzdGluZ05vZGUucmVtb3ZlKCk7XG4gICAgbGV0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBmcmFtZS5sYXlvdXRNb2RlID0gJ0hPUklaT05UQUwnO1xuICAgIGZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgIGZyYW1lLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgIGZyYW1lLml0ZW1TcGFjaW5nID0gMTY7XG4gICAgZnJhbWUuZmlsbHMgPSBbXTtcbiAgICBmcmFtZS5uYW1lID0gbmFtZSB8fCAnQWNjZW50IENvbG91cnMnO1xuICAgIGZyYW1lLnggPSAwO1xuICAgIGZyYW1lLnkgPSAwO1xuICAgIGZvciAoY29uc3QgW25hbWUsIHNoYWRlc10gb2YgT2JqZWN0LmVudHJpZXMoY29sb3JzKSkge1xuICAgICAgICByZW5kZXJTaGFkZXMoZnJhbWUsIG5hbWUsIHNoYWRlcywgY29sb3JzKTtcbiAgICB9XG4gICAgcmV0dXJuIGZyYW1lO1xufVxuIiwiaW1wb3J0IGNocm9tYSBmcm9tIFwiY2hyb21hLWpzXCI7XG5pbXBvcnQgeyByb3VuZFR3b0RpZ2l0cyB9IGZyb20gXCIuLi91dGlscy9yb3VuZC1kZWNpbWFsc1wiO1xuaW1wb3J0IHsgcmVzb2x2ZUNvbG9yVG9rZW5WYWx1ZSB9IGZyb20gXCIuLi9jb2xvci10b2tlbnNcIjtcbmZ1bmN0aW9uIGdldEJvdW5kVmFyaWFibGVzKG5vZGUpIHtcbiAgICBjb25zdCBib3VuZFZhcmlhYmxlcyA9IE9iamVjdC5lbnRyaWVzKG5vZGUuYm91bmRWYXJpYWJsZXMpO1xuICAgIGZvciAoY29uc3QgW3Byb3BOYW1lLCBwcm9wVmFsdWVdIG9mIGJvdW5kVmFyaWFibGVzKSB7XG4gICAgICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpc0FycmF5KSB7XG4gICAgICAgICAgICBwcm9wVmFsdWUuZm9yRWFjaCgoYWxpYXMsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzQm91bmRWYXJpYWJsZShmaWdtYS52YXJpYWJsZXMuZ2V0VmFyaWFibGVCeUlkKGFsaWFzLmlkKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB2YXJJZCA9IHByb3BWYWx1ZS5pZDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFySWQgIT0gJ3N0cmluZycpIHsgLy8gaXQgaXMgXG4gICAgICAgICAgICAgICAgdmFySWQgPSB2YXJJZC5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2Nlc3NCb3VuZFZhcmlhYmxlKGZpZ21hLnZhcmlhYmxlcy5nZXRWYXJpYWJsZUJ5SWQodmFySWQpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHByb2Nlc3NCb3VuZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2hhZGVzKHBhcmVudE5vZGUsIG5hbWUsIHNoYWRlcywgY29sb3JzKSB7XG4gICAgbGV0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBmcmFtZS5yZXNpemVXaXRob3V0Q29uc3RyYWludHMoMzIwLCBmcmFtZS5oZWlnaHQpO1xuICAgIGZyYW1lLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgZnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgZnJhbWUucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgZnJhbWUubmFtZSA9IG5hbWU7XG4gICAgZnJhbWUuZmlsbHMgPSBbXTtcbiAgICBnZXRCb3VuZFZhcmlhYmxlcyhmcmFtZSk7XG4gICAgZm9yIChjb25zdCBbc2hhZGVOYW1lLCBjb2xvcl0gb2YgT2JqZWN0LmVudHJpZXMoc2hhZGVzKSkge1xuICAgICAgICByZW5kZXJDb2xvcihmcmFtZSwgYGFjY2VudC8ke25hbWV9LyR7c2hhZGVOYW1lfWAsIGNvbG9yLCBjb2xvcnMpO1xuICAgIH1cbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgICByZXR1cm4gcGFyZW50Tm9kZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDb2xvcihwYXJlbnROb2RlLCBuYW1lLCBjb2xvciwgY29sb3JzKSB7XG4gICAgbGV0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBmcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIGZyYW1lLmxheW91dEFsaWduID0gJ1NUUkVUQ0gnO1xuICAgIGZyYW1lLml0ZW1TcGFjaW5nID0gNDtcbiAgICBmcmFtZS5uYW1lID0gbmFtZTtcbiAgICBmcmFtZS52ZXJ0aWNhbFBhZGRpbmcgPSAxNjtcbiAgICBmcmFtZS5ob3Jpem9udGFsUGFkZGluZyA9IDIwO1xuICAgIGNvbnN0IHsgciwgZywgYiwgYSB9ID0gcmVzb2x2ZUNvbG9yVG9rZW5WYWx1ZShjb2xvciwgY29sb3JzKTtcbiAgICBjb25zdCBjaHJvbWFDb2xvciA9IGNocm9tYS5nbChyLCBnLCBiLCBhKTtcbiAgICBmcmFtZS5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHIsIGcsIGIgfSwgb3BhY2l0eTogYSB9XTtcbiAgICBjb25zdCBvcGFxdWVDb2xvciA9IGNocm9tYS5nbChyLCBnLCBiLCAxKTtcbiAgICBjb25zdCBtaXhlZENvbG9yID0gY2hyb21hLm1peChvcGFxdWVDb2xvciwgXCJ3aGl0ZVwiLCAxIC0gYSk7XG4gICAgY29uc29sZS5sb2cobmFtZSwgbWl4ZWRDb2xvci5yZ2JhKCkpO1xuICAgIGxldCBjb250cmFzdCA9IFtcbiAgICAgICAgY2hyb21hLmNvbnRyYXN0KFwid2hpdGVcIiwgbWl4ZWRDb2xvciksXG4gICAgICAgIGNocm9tYS5jb250cmFzdChjaHJvbWEuaHNsKDAsIDAsIDAuMjIpLCBtaXhlZENvbG9yKVxuICAgIF07XG4gICAgbGV0IG5hbWVSb3cgPSBnZXRSb3coZnJhbWUsIGNvbnRyYXN0WzBdID4gMi41KTtcbiAgICBsZXQgY29udHJhc3RXaGl0ZVJvdyA9IGdldFJvdyhmcmFtZSwgY29udHJhc3RbMF0gPiAyLjUpO1xuICAgIGxldCBjb250cmFzdEJsYWNrUm93ID0gZ2V0Um93KGZyYW1lLCBjb250cmFzdFswXSA+IDIuNSk7XG4gICAgbGV0IGhzbFJvdyA9IGdldFJvdyhmcmFtZSwgY29udHJhc3RbMF0gPiAyLjUpO1xuICAgIGxldCBsdW1pbmFuY2VSb3cgPSBnZXRSb3coZnJhbWUsIGNvbnRyYXN0WzBdID4gMi41KTtcbiAgICAvLyBhd2FpdCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICBuYW1lUm93LnJvb3QubmFtZSA9IFwibmFtZVJvd1wiO1xuICAgIGNvbnRyYXN0V2hpdGVSb3cucm9vdC5uYW1lID0gXCJjb250cmFzdFdoaXRlUm93XCI7XG4gICAgY29udHJhc3RCbGFja1Jvdy5yb290Lm5hbWUgPSBcImNvbnRyYXN0QmxhY2tSb3dcIjtcbiAgICBoc2xSb3cucm9vdC5uYW1lID0gXCJoc2xSb3dcIjtcbiAgICBsdW1pbmFuY2VSb3cucm9vdC5uYW1lID0gXCJsdW1pbmFuY2VSb3dcIjtcbiAgICBjb250cmFzdFdoaXRlUm93LmxhYmVsTm9kZS5jaGFyYWN0ZXJzID0gXCJ2cyB3aGl0ZVwiO1xuICAgIGNvbnRyYXN0V2hpdGVSb3cudmFsdWVOb2RlLmNoYXJhY3RlcnMgPSBgJHtyb3VuZFR3b0RpZ2l0cyhjb250cmFzdFswXSl9YDtcbiAgICBjb250cmFzdEJsYWNrUm93LmxhYmVsTm9kZS5jaGFyYWN0ZXJzID0gXCJ2cyBibGFja1wiO1xuICAgIGNvbnRyYXN0QmxhY2tSb3cudmFsdWVOb2RlLmNoYXJhY3RlcnMgPSBgJHtyb3VuZFR3b0RpZ2l0cyhjb250cmFzdFsxXSl9YDtcbiAgICBuYW1lUm93LmxhYmVsTm9kZS5jaGFyYWN0ZXJzID0gYHtnbG9iYWwuJHtuYW1lLnJlcGxhY2UoL1xcLy9nLCBcIi5cIil9fWA7XG4gICAgbmFtZVJvdy52YWx1ZU5vZGUuY2hhcmFjdGVycyA9IGAgYDtcbiAgICBoc2xSb3cubGFiZWxOb2RlLmNoYXJhY3RlcnMgPSBcImhzbFwiO1xuICAgIGhzbFJvdy52YWx1ZU5vZGUuY2hhcmFjdGVycyA9IGAke291dHB1dEhTTChjaHJvbWFDb2xvcikuam9pbihcIiBcIil9YDtcbiAgICBsdW1pbmFuY2VSb3cubGFiZWxOb2RlLmNoYXJhY3RlcnMgPSBcImx1bWluYW5jZVwiO1xuICAgIGx1bWluYW5jZVJvdy52YWx1ZU5vZGUuY2hhcmFjdGVycyA9IGAke01hdGgucm91bmQocm91bmRUd29EaWdpdHMoY2hyb21hQ29sb3IubHVtaW5hbmNlKCkpICogMTAwKX0lYDtcbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgICBmcmFtZS5yZXNpemUoMjQwLCBmcmFtZS5oZWlnaHQpO1xuICAgIHJldHVybiBwYXJlbnROb2RlO1xufVxuZnVuY3Rpb24gZ2V0Um93KHBhcmVudE5vZGUsIGlzV2hpdGUpIHtcbiAgICBjb25zdCB0ZXh0Tm9kZSA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgZnJhbWUubmFtZSA9IFwicm93XCI7XG4gICAgZnJhbWUubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgIGZyYW1lLmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgZnJhbWUucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gXCJGSVhFRFwiO1xuICAgIGZyYW1lLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9IFwiU1BBQ0VfQkVUV0VFTlwiO1xuICAgIGZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgIGZyYW1lLmZpbGxzID0gW107XG4gICAgdGV4dE5vZGUubmFtZSA9IFwibGFiZWxcIjtcbiAgICBjb25zdCB2YWx1ZUxhYmVsID0gdGV4dE5vZGUuY2xvbmUoKTtcbiAgICB2YWx1ZUxhYmVsLm5hbWUgPSBcInZhbHVlLWxhYmVsXCI7XG4gICAgZnJhbWUuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgIGZyYW1lLmFwcGVuZENoaWxkKHZhbHVlTGFiZWwpO1xuICAgIGNvbnN0IGNvbG9yID0gaXNXaGl0ZSA/IHtcbiAgICAgICAgcjogMSwgZzogMSwgYjogMVxuICAgIH0gOiB7XG4gICAgICAgIHI6IDAsIGc6IDAsIGI6IDBcbiAgICB9O1xuICAgIHRleHROb2RlLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3IsIG9wYWNpdHk6IDAuOCB9XTtcbiAgICB2YWx1ZUxhYmVsLmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3IgfV07XG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChmcmFtZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGFiZWxOb2RlOiB0ZXh0Tm9kZSwgdmFsdWVOb2RlOiB2YWx1ZUxhYmVsLCByb290OiBmcmFtZVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gb3V0cHV0SFNMKGNocm9tYUNvbG9yKSB7XG4gICAgY29uc3QgW2gsIHMsIGxdID0gY2hyb21hQ29sb3IuaHNsKCk7XG4gICAgcmV0dXJuIFtgJHtNYXRoLnJvdW5kKGgpIHx8IDB9ZGVnYCwgYCR7TWF0aC5yb3VuZChyb3VuZFR3b0RpZ2l0cyhzKSAqIDEwMCl9JWAsIGAke01hdGgucm91bmQocm91bmRUd29EaWdpdHMobCkgKiAxMDApfSVgXTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IGNvbXBvbmVudFRva2VucyBmcm9tICcuL3Rva2Vucy9jb2xvcnMvY29tcG9uZW50cy9jb21wb25lbnQtdG9rZW5zLmpzb24nO1xuaW1wb3J0IHBhbGV0dGVMaWdodENvbW1vbiBmcm9tICcuL3Rva2Vucy9jb2xvcnMvc3lzdGVtL2xpZ2h0LWNvbW1vbi50b2tlbnMuanNvbic7XG5pbXBvcnQgcGFsZXR0ZUxpZ2h0U2hhZG93cyBmcm9tICcuL3Rva2Vucy9jb2xvcnMvc3lzdGVtL2xpZ2h0LXNoYWRvdy1jb2xvcnMudG9rZW5zLmpzb24nO1xuaW1wb3J0IHBhbGV0dGVMaWdodDIgZnJvbSAnLi90b2tlbnMvY29sb3JzL3N5c3RlbS9saWdodC0yLnRva2Vucy5qc29uJztcbmltcG9ydCBwYWxldHRlTGlnaHQzIGZyb20gJy4vdG9rZW5zL2NvbG9ycy9zeXN0ZW0vbGlnaHQtMy50b2tlbnMuanNvbic7XG5pbXBvcnQgcGFsZXR0ZUxpZ2h0NCBmcm9tICcuL3Rva2Vucy9jb2xvcnMvc3lzdGVtL2xpZ2h0LTQudG9rZW5zLmpzb24nO1xuaW1wb3J0IHBhbGV0dGVUZXh0TGlnaHQgZnJvbSAnLi90b2tlbnMvY29sb3JzL3N5c3RlbS9saWdodC10ZXh0LWJhc2UuanNvbic7XG5pbXBvcnQgcGFsZXR0ZURhcmtDb21tb24gZnJvbSAnLi90b2tlbnMvY29sb3JzL3N5c3RlbS9kYXJrLWNvbW1vbi50b2tlbnMuanNvbic7XG5pbXBvcnQgcGFsZXR0ZURhcmtTaGFkb3dzIGZyb20gJy4vdG9rZW5zL2NvbG9ycy9zeXN0ZW0vZGFyay1zaGFkb3ctY29sb3JzLnRva2Vucy5qc29uJztcbmltcG9ydCBwYWxldHRlRGFya0VsZXZhdGVkMiBmcm9tICcuL3Rva2Vucy9jb2xvcnMvc3lzdGVtL2RhcmstZWxldmF0ZWQtMi50b2tlbnMuanNvbic7XG5pbXBvcnQgcGFsZXR0ZURhcmtFbGV2YXRlZDMgZnJvbSAnLi90b2tlbnMvY29sb3JzL3N5c3RlbS9kYXJrLWVsZXZhdGVkLTMudG9rZW5zLmpzb24nO1xuaW1wb3J0IHBhbGV0dGVEYXJrRWxldmF0ZWQ0IGZyb20gJy4vdG9rZW5zL2NvbG9ycy9zeXN0ZW0vZGFyay1lbGV2YXRlZC00LnRva2Vucy5qc29uJztcbmltcG9ydCBwYWxldHRlRGFya0Jhc2UyIGZyb20gJy4vdG9rZW5zL2NvbG9ycy9zeXN0ZW0vZGFyay1iYXNlLTIudG9rZW5zLmpzb24nO1xuaW1wb3J0IHBhbGV0dGVEYXJrQmFzZTMgZnJvbSAnLi90b2tlbnMvY29sb3JzL3N5c3RlbS9kYXJrLWJhc2UtMy50b2tlbnMuanNvbic7XG5pbXBvcnQgcGFsZXR0ZURhcmtCYXNlNCBmcm9tICcuL3Rva2Vucy9jb2xvcnMvc3lzdGVtL2RhcmstYmFzZS00LnRva2Vucy5qc29uJztcbmltcG9ydCBwYWxldHRlVGV4dERhcmsgZnJvbSAnLi90b2tlbnMvY29sb3JzL3N5c3RlbS9kYXJrLXRleHQtYmFzZS5qc29uJztcbmltcG9ydCB7IGZsYXR0ZW5PYmplY3QgfSBmcm9tICcuL3V0aWxzL2ZsYXR0ZW4tb2JqZWN0JztcbmltcG9ydCB7IGdlbmVyYXRlU3lzdGVtQWNjZW50UGFsZXR0ZSB9IGZyb20gJy4vY29sb3ItZ2VuZXJhdG9ycy9hY2NlbnQtcGFsZXR0ZS1nZW5lcmF0b3InO1xuaW1wb3J0IHsgZ2VuZXJhdGVOZXV0cmFscyB9IGZyb20gJy4vY29sb3ItZ2VuZXJhdG9ycy9uZXV0cmFscy1wYWxldHRlLWdlbmVyYXRvcic7XG5pbXBvcnQgeyBjb2xsZWN0aW9uTmFtZXMsIGRlZmF1bHRTZW1hbnRpY0FjY2VudHMsIGRlZmF1bHRTZXR0aW5ncyB9IGZyb20gJy4vZGVmYXVsdHMnO1xuaW1wb3J0IHsgX2Nsb25lIH0gZnJvbSAnLi91dGlscy9jbG9uZSc7XG5pbXBvcnQgeyBhZGRUb0dsb2JhbFRva2Vuc0RpY3Rpb25hcnksIGZpbmRUb2tlblJlZmVyZW5jZXMsIGZpbmRWYXJpYWJsZUFsaWFzLCBnZXRHbG9iYWxUb2tlbnNEaWN0aW9uYXJ5LCBnZXRSZWZlcmVuY2VOYW1lLCByZXNvbHZlR2xvYmFsVG9rZW5WYWx1ZSB9IGZyb20gJy4vdXRpbHMvdG9rZW4tcmVmZXJlbmNlcyc7XG5pbXBvcnQgeyBjb252ZXJ0RmlnbWFDb2xvclRvUmdiLCBwYXJzZUNvbG9yVmFsdWUgfSBmcm9tICcuL3V0aWxzL2ZpZ21hLWNvbG9ycyc7XG5pbXBvcnQgeyBpbXBvcnRWYXJpYWJsZXMgfSBmcm9tICcuL2ltcG9ydC10b2tlbnMnO1xuaW1wb3J0IHsgX21lcmdlRGVlcCB9IGZyb20gJy4vdXRpbHMvbWVyZ2UtZGVlcCc7XG5pbXBvcnQgeyBmaWdtYUFsaWFzVG9EZXNpZ25Ub2tlbnMsIGdldERlZmF1bHRWYXJpYWJsZVZhbHVlIH0gZnJvbSAnLi91dGlscy9maWdtYS12YXJpYWJsZXMnO1xuaW1wb3J0IHsgZ2V0Q29sb3JUb2tlbnNTb3J0Rm4gfSBmcm9tICcuL3V0aWxzL3NvcnQtdG9rZW5zJztcbi8vIGNvbnN0IF9tZXJnZSA9IHJlcXVpcmUoJ2xvZGFzaC5tZXJnZScpXG5sZXQgR2xvYmFsTmV1dHJhbHM7XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VtYW50aWNBY2NlbnRTZXR0aW5ncygpIHtcbiAgICByZXR1cm4gZGVmYXVsdFNlbWFudGljQWNjZW50cztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRHbG9iYWxOZXV0cmFscyhwYXJhbXMpIHtcbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIEdsb2JhbE5ldXRyYWxzID0gZ2VuZXJhdGVOZXV0cmFscyhwYXJhbXMpO1xuICAgIH1cbiAgICByZXR1cm4gR2xvYmFsTmV1dHJhbHM7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcG9uZW50Q29sb3JzKCkge1xuICAgIHJldHVybiBmbGF0dGVuT2JqZWN0KGNvbXBvbmVudFRva2Vucyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0QnJhbmRDb2xvcnMobmFtZSwgYWNjZW50U2hhZGVzLCBmbGF0KSB7XG4gICAgY29uc3QgcGFsZXR0ZSA9IHtcbiAgICAgICAgcHJpbWFyeTogZ2VuZXJhdGVTZW1hbnRpY1NoYWRlcyhuYW1lLCBhY2NlbnRTaGFkZXMpXG4gICAgfTtcbiAgICByZXR1cm4gZmxhdCA/IGZsYXR0ZW5PYmplY3QocGFsZXR0ZSkgOiBwYWxldHRlO1xufVxuZnVuY3Rpb24gZ2V0VGV4dE9uQWNjZW50Q29sb3JzKGZvcm1EYXRhKSB7XG4gICAgY29uc3QgcHJpbWFyeUhVRSA9IGZvcm1EYXRhW2Zvcm1EYXRhLnByaW1hcnldO1xuICAgIC8vIGNvbnN0IHN5c3RlbUFjY2VudENvbG9yID0gY2hyb21hLmhzbChwcmltYXJ5SFVFLCBmb3JtRGF0YS5hY2NlbnRTYXR1cmF0aW9uLCAwLjUpLmx1bWluYW5jZShmb3JtRGF0YS5hY2NlbnRNaWRMdW1pbmFuY2UpO1xuICAgIC8vIGNvbnN0IHdoaXRlVGV4dENvbG9yID0gY2hyb21hLmhzbChmb3JtRGF0YS5odWUsIGZvcm1EYXRhLnNhdHVyYXRpb24sIGZvcm1EYXRhLnRleHRXaGl0ZUJyaWdodG5lc3MgLyAxMDApO1xuICAgIC8vIGNvbnN0IGJsYWNrVGV4dENvbG9yID0gY2hyb21hLmhzbChmb3JtRGF0YS5odWUsIGZvcm1EYXRhLnNhdHVyYXRpb24sIGZvcm1EYXRhLnRleHRCbGFja0JyaWdodG5lc3MgLyAxMDApO1xuICAgIC8vIGNvbnN0IHdoaXRlVGV4dENvbnRyYXN0ID0gcm91bmRUd29EaWdpdHMoY2hyb21hLmNvbnRyYXN0KHdoaXRlVGV4dENvbG9yLCBzeXN0ZW1BY2NlbnRDb2xvcikpO1xuICAgIC8vIGNvbnN0IGJsYWNrVGV4dENvbnRyYXN0ID0gcm91bmRUd29EaWdpdHMoY2hyb21hLmNvbnRyYXN0KGJsYWNrVGV4dENvbG9yLCBzeXN0ZW1BY2NlbnRDb2xvcikpO1xuICAgIGxldCBmaW5hbENvbG9yID0gZm9ybURhdGEuYWNjZW50VGV4dENvbG9yO1xuICAgIGlmIChmaW5hbENvbG9yID09ICdhdXRvJykge1xuICAgICAgICBmaW5hbENvbG9yID0gZm9ybURhdGEuYWNjZW50TWlkTHVtaW5hbmNlID4gMC4zID8gJ2JsYWNrJyA6ICd3aGl0ZSc7XG4gICAgfVxuICAgIGNvbnN0IHRlbXBsYXRlID0ge1xuICAgICAgICBcInRleHRcIjoge1xuICAgICAgICAgICAgXCJhY2NlbnRcIjoge1xuICAgICAgICAgICAgICAgIFwiNDAwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCIkdmFsdWVcIjogYHJnYmEoe3RleHQuJHtmaW5hbENvbG9yfX0sIDAuNDUpYCxcbiAgICAgICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWRqdXN0bWVudHNcIjogZmluYWxDb2xvciA9PSAnYmxhY2snID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJoXCI6IHByaW1hcnlIVUUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNcIjogXCIwLjlcIlxuICAgICAgICAgICAgICAgICAgICB9IDogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCI1MDBcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBgcmdiYSh7dGV4dC4ke2ZpbmFsQ29sb3J9fSwgMC43KWAsXG4gICAgICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJjb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICBcImFkanVzdG1lbnRzXCI6IGZpbmFsQ29sb3IgPT0gJ2JsYWNrJyA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaFwiOiBwcmltYXJ5SFVFLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzXCI6IFwiMC45XCJcbiAgICAgICAgICAgICAgICAgICAgfSA6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiNjAwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCIkdmFsdWVcIjogYHt0ZXh0LiR7ZmluYWxDb2xvcn19YCxcbiAgICAgICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWRqdXN0bWVudHNcIjogZmluYWxDb2xvciA9PSAnYmxhY2snID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJoXCI6IHByaW1hcnlIVUUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNcIjogXCIwLjlcIlxuICAgICAgICAgICAgICAgICAgICB9IDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xufVxuZnVuY3Rpb24gcHJvY2Vzc0NvbW1vbkNvbG9ycyhmb3JtRGF0YSwgdG9rZW5zKSB7XG4gICAgbGV0IHRleHRTYXR1cmF0aW9uQWRqdXN0bWVudHMgPSB7fTtcbiAgICBpZiAoZm9ybURhdGEuY3VzdG9tQWNjZW50VGV4dFNhdHVyYXRpb24gPT09IHRydWUpIHtcbiAgICAgICAgdGV4dFNhdHVyYXRpb25BZGp1c3RtZW50cyA9IHtcbiAgICAgICAgICAgIHM6IGZvcm1EYXRhLmFjY2VudFRleHRTYXR1cmF0aW9uXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGFkanVzdG1lbnRzID0ge1xuICAgICAgICBcInRleHRcIjoge1xuICAgICAgICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiYWRqdXN0bWVudHNcIjogdGV4dFNhdHVyYXRpb25BZGp1c3RtZW50c1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJpbmZvXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJhZGp1c3RtZW50c1wiOiB0ZXh0U2F0dXJhdGlvbkFkanVzdG1lbnRzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImFkanVzdG1lbnRzXCI6IHRleHRTYXR1cmF0aW9uQWRqdXN0bWVudHNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwid2FybmluZ1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiYWRqdXN0bWVudHNcIjogdGV4dFNhdHVyYXRpb25BZGp1c3RtZW50c1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkYW5nZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImFkanVzdG1lbnRzXCI6IHRleHRTYXR1cmF0aW9uQWRqdXN0bWVudHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjb250cmFzdFwiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjoge1xuICAgICAgICAgICAgICAgICAgICBcImFkanVzdG1lbnRzXCI6IHRleHRTYXR1cmF0aW9uQWRqdXN0bWVudHNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiaW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiYWRqdXN0bWVudHNcIjogdGV4dFNhdHVyYXRpb25BZGp1c3RtZW50c1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJhZGp1c3RtZW50c1wiOiB0ZXh0U2F0dXJhdGlvbkFkanVzdG1lbnRzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIndhcm5pbmdcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImFkanVzdG1lbnRzXCI6IHRleHRTYXR1cmF0aW9uQWRqdXN0bWVudHNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGFuZ2VyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJhZGp1c3RtZW50c1wiOiB0ZXh0U2F0dXJhdGlvbkFkanVzdG1lbnRzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICB0b2tlbnMgPSBfY2xvbmUodG9rZW5zKTtcbiAgICByZXR1cm4gX21lcmdlRGVlcCh0b2tlbnMsIGFkanVzdG1lbnRzKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaGVtZUNvbG9ycyh0aGVtZSwgZm9ybURhdGEpIHtcbiAgICBsZXQgbGlnaHRDb21tb24gPSBwcm9jZXNzQ29tbW9uQ29sb3JzKGZvcm1EYXRhLCBwYWxldHRlTGlnaHRDb21tb24pO1xuICAgIGxldCBkYXJrQ29tbW9uID0gcHJvY2Vzc0NvbW1vbkNvbG9ycyhmb3JtRGF0YSwgcGFsZXR0ZURhcmtDb21tb24pO1xuICAgIGxldCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBub3JtYWxpemVGb3JtRGF0YShmb3JtRGF0YSkpO1xuICAgIGdldEdsb2JhbE5ldXRyYWxzKGZvcm1EYXRhKTtcbiAgICBjb25zdCBzZW1hbnRpY0FjY2VudHMgPSB7XG4gICAgICAgIHByaW1hcnk6IHBhcmFtcy5wcmltYXJ5LFxuICAgICAgICBpbmZvOiBwYXJhbXMuaW5mbyxcbiAgICAgICAgc3VjY2VzczogcGFyYW1zLnN1Y2Nlc3MsXG4gICAgICAgIHdhcm5pbmc6IHBhcmFtcy53YXJuaW5nLFxuICAgICAgICBkYW5nZXI6IHBhcmFtcy5kYW5nZXIsXG4gICAgfTtcbiAgICBsZXQgbGlnaHRBY2NlbnRUb2tlbnMgPSBnZW5lcmF0ZVN5c3RlbUFjY2VudFBhbGV0dGUoJ2xpZ2h0JywgcGFyYW1zKTtcbiAgICBsZXQgZGFya0FjY2VudFRva2VucyA9IGdlbmVyYXRlU3lzdGVtQWNjZW50UGFsZXR0ZSgnZGFyaycsIHBhcmFtcyk7XG4gICAgY29uc3QgbGlnaHRTZW1hbnRpY1Rva2VucyA9IGdlbmVyYXRlU2VtYW50aWNQYWxldHRlKHNlbWFudGljQWNjZW50cywgbGlnaHRBY2NlbnRUb2tlbnMpO1xuICAgIGNvbnN0IGRhcmtTZW1hbnRpY1Rva2VucyA9IGdlbmVyYXRlU2VtYW50aWNQYWxldHRlKHNlbWFudGljQWNjZW50cywgZGFya0FjY2VudFRva2Vucyk7XG4gICAgY29uc3QgbGlnaHRDb21tb25Ub2tlbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IGFjY2VudDogbGlnaHRBY2NlbnRUb2tlbnMgfSwgbGlnaHRDb21tb24pLCBnZXRTaGFkb3dDb2xvclRva2VucygnbGlnaHQnLCBmb3JtRGF0YSkpLCBsaWdodFNlbWFudGljVG9rZW5zKTtcbiAgICBjb25zdCBkYXJrQ29tbW9uVG9rZW5zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBhY2NlbnQ6IGRhcmtBY2NlbnRUb2tlbnMgfSwgZGFya0NvbW1vbiksIGdldFNoYWRvd0NvbG9yVG9rZW5zKCdkYXJrJywgZm9ybURhdGEpKSwgZGFya1NlbWFudGljVG9rZW5zKTtcbiAgICBsZXQgY29tbW9uQ29sb3JzID0ge307XG4gICAgbGV0IHRoZW1lQ29sb3JzID0ge307XG4gICAgaWYgKHRoZW1lID09PSBcImxpZ2h0QmFzZVwiKSB7XG4gICAgICAgIGNvbW1vbkNvbG9ycyA9IGZsYXR0ZW5PYmplY3QobGlnaHRDb21tb25Ub2tlbnMpO1xuICAgICAgICBpZiAocGFyYW1zLmRpc3RhbmNlID09PSAwLjAyKSB7XG4gICAgICAgICAgICB0aGVtZUNvbG9ycyA9IGZsYXR0ZW5PYmplY3QocGFsZXR0ZUxpZ2h0Mik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5kaXN0YW5jZSA9PT0gMC4wMykge1xuICAgICAgICAgICAgdGhlbWVDb2xvcnMgPSBmbGF0dGVuT2JqZWN0KHBhbGV0dGVMaWdodDMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMuZGlzdGFuY2UgPT09IDAuMDQpIHtcbiAgICAgICAgICAgIHRoZW1lQ29sb3JzID0gZmxhdHRlbk9iamVjdChwYWxldHRlTGlnaHQ0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhlbWUgPT09IFwiZGFya0VsZXZhdGVkXCIpIHtcbiAgICAgICAgY29tbW9uQ29sb3JzID0gZmxhdHRlbk9iamVjdChkYXJrQ29tbW9uVG9rZW5zKTtcbiAgICAgICAgaWYgKHBhcmFtcy5kaXN0YW5jZSA9PT0gMC4wMikge1xuICAgICAgICAgICAgdGhlbWVDb2xvcnMgPSBmbGF0dGVuT2JqZWN0KHBhbGV0dGVEYXJrRWxldmF0ZWQyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLmRpc3RhbmNlID09PSAwLjAzKSB7XG4gICAgICAgICAgICB0aGVtZUNvbG9ycyA9IGZsYXR0ZW5PYmplY3QocGFsZXR0ZURhcmtFbGV2YXRlZDMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMuZGlzdGFuY2UgPT09IDAuMDQpIHtcbiAgICAgICAgICAgIHRoZW1lQ29sb3JzID0gZmxhdHRlbk9iamVjdChwYWxldHRlRGFya0VsZXZhdGVkNCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoZW1lID09PSBcImRhcmtCYXNlXCIpIHtcbiAgICAgICAgY29tbW9uQ29sb3JzID0gZmxhdHRlbk9iamVjdChkYXJrQ29tbW9uVG9rZW5zKTtcbiAgICAgICAgaWYgKHBhcmFtcy5kaXN0YW5jZSA9PT0gMC4wMikge1xuICAgICAgICAgICAgdGhlbWVDb2xvcnMgPSBmbGF0dGVuT2JqZWN0KHBhbGV0dGVEYXJrQmFzZTIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMuZGlzdGFuY2UgPT09IDAuMDMpIHtcbiAgICAgICAgICAgIHRoZW1lQ29sb3JzID0gZmxhdHRlbk9iamVjdChwYWxldHRlRGFya0Jhc2UzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLmRpc3RhbmNlID09PSAwLjA0KSB7XG4gICAgICAgICAgICB0aGVtZUNvbG9ycyA9IGZsYXR0ZW5PYmplY3QocGFsZXR0ZURhcmtCYXNlNCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uQ29sb3JzKSwgdGhlbWVDb2xvcnMpO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVTZW1hbnRpY1NoYWRlcyhhbGlhc05hbWUsIGFjY2VudFNoYWRlcykge1xuICAgIGxldCBvdXRwdXQgPSB7fTtcbiAgICBmb3IgKHZhciBhID0gMSwgYiA9IDc7IGEgPCBiOyBhKyspIHtcbiAgICAgICAgb3V0cHV0W2Ake2F9MDBgXSA9IHtcbiAgICAgICAgICAgIFwiJHZhbHVlXCI6IGB7YWNjZW50LiR7YWxpYXNOYW1lfS4ke2F9MDB9YCxcbiAgICAgICAgICAgIFwiJHR5cGVcIjogXCJjb2xvclwiLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBhY2NlbnRTaGFkZXNbYCR7YX0wMGBdLmRlc2NyaXB0aW9uXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZVNlbWFudGljUGFsZXR0ZShhY2NlbnRzLCBwYWxldHRlKSB7XG4gICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5lbnRyaWVzKGFjY2VudHMpLmZvckVhY2goKFtuYW1lLCBhbGlhc10pID0+IHtcbiAgICAgICAgcmVzdWx0W25hbWVdID0gZ2VuZXJhdGVTZW1hbnRpY1NoYWRlcyhhbGlhcywgcGFsZXR0ZVthbGlhc10pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBub3JtYWxpemVGb3JtRGF0YShmb3JtRGF0YSkge1xuICAgIGxldCBub3JtYWxpemVkRGF0YSA9IF9jbG9uZShmb3JtRGF0YSk7XG4gICAgY29uc3QgbnVtYmVyVHlwZXMgPSBbXG4gICAgICAgICdodWUnLFxuICAgICAgICAnc2F0dXJhdGlvbicsXG4gICAgICAgICdkaXN0YW5jZScsXG4gICAgICAgICdyZWQnLFxuICAgICAgICAnYW1iZXInLFxuICAgICAgICAnYnJvd24nLFxuICAgICAgICAnZ3JlZW4nLFxuICAgICAgICAndGVhbCcsXG4gICAgICAgICdibHVlJyxcbiAgICAgICAgJ2luZGlnbycsXG4gICAgICAgICd2aW9sZXQnLFxuICAgICAgICAncHVycGxlJyxcbiAgICAgICAgJ3BpbmsnLFxuICAgICAgICAnYWNjZW50U2F0dXJhdGlvbicsXG4gICAgICAgICdhY2NlbnRNYXhMdW1pbmFuY2UnLFxuICAgICAgICAnYWNjZW50TWlkTHVtaW5hbmNlJyxcbiAgICAgICAgJ2FjY2VudE1pbkx1bWluYW5jZScsXG4gICAgICAgICdhY2NlbnRUZXh0U2F0dXJhdGlvbicsXG4gICAgICAgICd0ZXh0V2hpdGVCcmlnaHRuZXNzJyxcbiAgICAgICAgJ3RleHRCbGFja0JyaWdodG5lc3MnLFxuICAgIF07XG4gICAgbnVtYmVyVHlwZXMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBmb3JtRGF0YVtwXSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbm9ybWFsaXplZERhdGFbcF0gPSBwYXJzZUZsb2F0KGZvcm1EYXRhW3BdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBub3JtYWxpemVkRGF0YTtcbn1cbmZ1bmN0aW9uIGdldENvbG9yVmFyaWFibGVBbGlhc1ZhbHVlKHRva2VuVmFsdWUsIHZhcmlhYmxlSWQsIG1vZGVJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGZpZ21hVmFyaWFibGUgPSB5aWVsZCBmaWdtYS52YXJpYWJsZXMuZ2V0VmFyaWFibGVCeUlkQXN5bmModmFyaWFibGVJZCk7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGlmIChmaWdtYVZhcmlhYmxlLnJlc29sdmVkVHlwZSAhPSBcIkNPTE9SXCIpIHtcbiAgICAgICAgICAgIHRocm93IChgVmFyaWFibGUgJHtmaWdtYVZhcmlhYmxlLm5hbWV9IGlzIG5vdCBhIGNvbG9yLCBpdCBpcyAke2ZpZ21hVmFyaWFibGUucmVzb2x2ZWRUeXBlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZVJHQkEgPSB5aWVsZCBnZXREZWZhdWx0VmFyaWFibGVWYWx1ZShmaWdtYVZhcmlhYmxlLCBtb2RlSWQpO1xuICAgICAgICByZXN1bHQgPSBjb252ZXJ0RmlnbWFDb2xvclRvUmdiKGRlZmF1bHRWYWx1ZVJHQkEsICdoZXgnKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09ICdzdHJpbmcnICYmIHRva2VuVmFsdWUuaW5kZXhPZigncmdiJykgPj0gMCkge1xuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlcyA9IGZpbmRUb2tlblJlZmVyZW5jZXModG9rZW5WYWx1ZSkubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgYWxpYXMgPSBgeyR7ZmlnbWFBbGlhc1RvRGVzaWduVG9rZW5zKGZpZ21hVmFyaWFibGUubmFtZSl9fWA7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRva2VuVmFsdWUucmVwbGFjZShhbGlhcywgcmVzdWx0KTtcbiAgICAgICAgICAgIHJlc3VsdCA9IHBhcnNlQ29sb3JWYWx1ZShuZXdWYWx1ZSkuZ2w7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUNvbG9yVG9rZW5WYWx1ZSh0b2tlbiwgZGljdGlvbmFyeSwgb3V0cHV0ID0gJ2dsJykge1xuICAgIGNvbnN0IGNvbG9yID0gdG9rZW4uJHZhbHVlO1xuICAgIGNvbnN0IGNvbG9yVmFsdWUgPSByZXNvbHZlR2xvYmFsVG9rZW5WYWx1ZShjb2xvci50cmltKCksIGRpY3Rpb25hcnkpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGNvbG9yVmFsdWUgPyBwYXJzZUNvbG9yVmFsdWUoY29sb3JWYWx1ZSwgdG9rZW4uYWRqdXN0bWVudHMpIDogbnVsbDtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiByZXN1bHRbb3V0cHV0XTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgQ2Fubm90IHJlc29sdmUgdmFsdWUgZm9yICR7dG9rZW4ubmFtZX1gKTtcbiAgICAgICAgLy90aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvbG9yIGZvcm1hdFwiKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29sb3JUb2tlblZhbHVlKHRva2VuLCBtb2RlSWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgdmFsdWVTdHJpbmcgPSAoYCR7dG9rZW4uJHZhbHVlfWApLnRyaW0oKTtcbiAgICAgICAgY29uc3QgdmFyaWFibGVBbGlhcyA9IHlpZWxkIGZpbmRWYXJpYWJsZUFsaWFzKHZhbHVlU3RyaW5nKTtcbiAgICAgICAgY29uc3QgcmF3VmFsdWUgPSByZXNvbHZlQ29sb3JUb2tlblZhbHVlKHRva2VuLCBnZXRHbG9iYWxUb2tlbnNEaWN0aW9uYXJ5KCkpO1xuICAgICAgICBpZiAodG9rZW4ubmFtZSA9PSAndGV4dC9iYXNlL2FjdGlvbicpXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgaWYgKHRva2VuLiR0eXBlICE9IFwiY29sb3JcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhc0FkanVzdG1lbnRzID0gdHlwZW9mIHRva2VuLmFkanVzdG1lbnRzID09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKHRva2VuLmFkanVzdG1lbnRzKS5sZW5ndGggPiAwO1xuICAgICAgICBpZiAoaGFzQWRqdXN0bWVudHMgJiYgcmF3VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiByYXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFyaWFibGVBbGlhcyAmJiB0eXBlb2YgdmFyaWFibGVBbGlhcyA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbi4kdmFsdWUgPT0gJ3N0cmluZycgJiYgdG9rZW4uJHZhbHVlLmluZGV4T2YoJ3JnYicpID49IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VkVmFsdWUgPSB5aWVsZCBnZXRDb2xvclZhcmlhYmxlQWxpYXNWYWx1ZSh0b2tlbi4kdmFsdWUsIHZhcmlhYmxlQWxpYXMuaWQsIG1vZGVJZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlcyA9IGZpbmRUb2tlblJlZmVyZW5jZXModG9rZW4uJHZhbHVlKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaWYgKCFyYXdWYWx1ZSAmJiBwYXJzZWRWYWx1ZSAmJiByZWZlcmVuY2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFyaWFibGVBbGlhcztcbiAgICAgICAgfVxuICAgICAgICBpZiAocmF3VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiByYXdWYWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZ3JhZGVUZXh0UGFsZXR0ZShwYXJhbXMpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBiYXNlVGV4dENvbG9yVG9rZW5zID0gW1xuICAgICAgICAgICAgXCJ0ZXh0L2NvbnRyYXN0LzYwMFwiLFxuICAgICAgICAgICAgXCJ0ZXh0L2NvbnRyYXN0LzUwMFwiLFxuICAgICAgICAgICAgXCJ0ZXh0L2NvbnRyYXN0LzQwMFwiXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGJyYW5kVGV4dENvbG9yVG9rZW5zID0gW1xuICAgICAgICAgICAgXCJ0ZXh0L2Jhc2UvYWN0aW9uXCIsXG4gICAgICAgICAgICBcInRleHQvY29udHJhc3QvYWN0aW9uXCJcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgdGFyZ2V0VG9rZW5zID0gW1xuICAgICAgICAgICAgXCJ0ZXh0L2FjY2VudC82MDBcIixcbiAgICAgICAgICAgIFwidGV4dC9hY2NlbnQvNTAwXCIsXG4gICAgICAgICAgICBcInRleHQvYWNjZW50LzQwMFwiXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGZpZ21hVmFyaWFibGVzID0geWllbGQgZmlnbWEudmFyaWFibGVzLmdldExvY2FsVmFyaWFibGVzQXN5bmMoKTtcbiAgICAgICAgY29uc3QgYWNjZW50Q29sb3JWYXJpYWJsZSA9IGZpZ21hVmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0VG9rZW5zLmluZGV4T2YodmFyaWFibGUubmFtZSkgPj0gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJhc2VDb2xvclZhcmlhYmxlcyA9IGZpZ21hVmFyaWFibGVzLmZpbHRlcigodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBiYXNlVGV4dENvbG9yVG9rZW5zLmluZGV4T2YodmFyaWFibGUubmFtZSkgPj0gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJyYW5kQ29sb3JWYXJpYWJsZXMgPSBmaWdtYVZhcmlhYmxlcy5maWx0ZXIoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYnJhbmRUZXh0Q29sb3JUb2tlbnMuaW5kZXhPZih2YXJpYWJsZS5uYW1lKSA+PSAwO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFhY2NlbnRDb2xvclZhcmlhYmxlKSB7XG4gICAgICAgICAgICBiYXNlQ29sb3JWYXJpYWJsZXMuZm9yRWFjaCh2YXJpYWJsZSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGUubmFtZSA9IHZhcmlhYmxlLm5hbWUucmVwbGFjZSgnY29udHJhc3QnLCAnYWNjZW50Jyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBicmFuZENvbG9yVmFyaWFibGVzLmZvckVhY2godmFyaWFibGUgPT4ge1xuICAgICAgICAgICAgdmFyaWFibGUubmFtZSA9IHZhcmlhYmxlLm5hbWUucmVwbGFjZSgnYWN0aW9uJywgJ3ByaW1hcnknKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFkZFRvR2xvYmFsVG9rZW5zRGljdGlvbmFyeShPYmplY3QuYXNzaWduKHt9LCBnZXRHbG9iYWxOZXV0cmFscyhwYXJhbXMpKSk7XG4gICAgICAgIHlpZWxkIGltcG9ydFZhcmlhYmxlcyh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgndGhlbWVDb2xvcnMnKSxcbiAgICAgICAgICAgIG1vZGVOYW1lOiAnTGlnaHQgQmFzZScsXG4gICAgICAgICAgICBzb3J0Rm46IGdldENvbG9yVG9rZW5zU29ydEZuKCksXG4gICAgICAgICAgICBkYXRhOiBmbGF0dGVuT2JqZWN0KE9iamVjdC5hc3NpZ24oe30sIHBhbGV0dGVUZXh0TGlnaHQpKVxuICAgICAgICB9KTtcbiAgICAgICAgeWllbGQgaW1wb3J0VmFyaWFibGVzKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZXMuZ2V0KCd0aGVtZUNvbG9ycycpLFxuICAgICAgICAgICAgbW9kZU5hbWU6ICdEYXJrIEJhc2UnLFxuICAgICAgICAgICAgc29ydEZuOiBnZXRDb2xvclRva2Vuc1NvcnRGbigpLFxuICAgICAgICAgICAgZGF0YTogZmxhdHRlbk9iamVjdChPYmplY3QuYXNzaWduKHt9LCBwYWxldHRlVGV4dERhcmspKVxuICAgICAgICB9KTtcbiAgICAgICAgeWllbGQgaW1wb3J0VmFyaWFibGVzKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZXMuZ2V0KCd0aGVtZUNvbG9ycycpLFxuICAgICAgICAgICAgbW9kZU5hbWU6ICdEYXJrIEVsZXZhdGVkJyxcbiAgICAgICAgICAgIHNvcnRGbjogZ2V0Q29sb3JUb2tlbnNTb3J0Rm4oKSxcbiAgICAgICAgICAgIGRhdGE6IGZsYXR0ZW5PYmplY3QoT2JqZWN0LmFzc2lnbih7fSwgcGFsZXR0ZVRleHREYXJrKSlcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29sb3JTeXN0ZW1WZXJzaW9uKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IHlpZWxkIGZpZ21hLnZhcmlhYmxlcy5nZXRMb2NhbFZhcmlhYmxlc0FzeW5jKCk7XG4gICAgICAgIGNvbnN0IGlzU0RTID0gZmlnbWEucm9vdC5nZXRQbHVnaW5EYXRhKCdTRFMnKSAhPT0gJyc7XG4gICAgICAgIGlmICh2YXJpYWJsZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1NEUykge1xuICAgICAgICAgICAgY29uc3QgdGV4dE9uQWNjZW50VmFyID0gdmFyaWFibGVzLmZpbmQodmFyaWFibGUgPT4gdmFyaWFibGUubmFtZS5zdGFydHNXaXRoKCd0ZXh0L2FjY2VudCcpKTtcbiAgICAgICAgICAgIHJldHVybiB0ZXh0T25BY2NlbnRWYXIgPyAyIDogMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzQWxpYXModmFsdWUpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKS50cmltKCkuY2hhckF0KDApID09PSBcIntcIjtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NDb2xvclRva2VuQ1NTVmFsdWUodG9rZW4sIGdsb2JhbE5ldXRyYWxzKSB7XG4gICAgbGV0IHZhbHVlID0gdG9rZW4uJHZhbHVlO1xuICAgIHZhbHVlID0gcmVzb2x2ZUNvbG9yVG9rZW5WYWx1ZSh0b2tlbiwgZ2xvYmFsTmV1dHJhbHMsICdoc2wnKTtcbiAgICBjb25zdCBoYXNBZGp1c3RtZW50cyA9IHR5cGVvZiB0b2tlbi5hZGp1c3RtZW50cyA9PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyh0b2tlbi5hZGp1c3RtZW50cykubGVuZ3RoID4gMDtcbiAgICBpZiAoaGFzQWRqdXN0bWVudHMpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAoaXNBbGlhcyh0b2tlbi4kdmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IGFsaWFzTmFtZSA9IGdldFJlZmVyZW5jZU5hbWUodG9rZW4uJHZhbHVlKTtcbiAgICAgICAgdmFsdWUgPSBgdmFyKC0tJHthbGlhc05hbWUucmVwbGFjZSgvXFwuL2csIFwiLVwiKX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuY29uc3Qgc2hhZG93Q29sb3VycyA9IHtcbiAgICBsaWdodDogcGFsZXR0ZUxpZ2h0U2hhZG93cyxcbiAgICBkYXJrOiBwYWxldHRlRGFya1NoYWRvd3MsXG59O1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNoYWRvd0NvbG9yVG9rZW5zKHRoZW1lLCBwYXJhbXMpIHtcbiAgICBjb25zdCB0b2tlbk9wdGlvbnMgPSBzaGFkb3dDb2xvdXJzW3RoZW1lIHx8ICdsaWdodCddO1xuICAgIGlmIChwYXJhbXMuc2hhZG93c0NvbG9yID09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXMuc2hhZG93c0NvbG9yID0gZGVmYXVsdFNldHRpbmdzLnNoYWRvd3NDb2xvcjtcbiAgICB9XG4gICAgcmV0dXJuIGZsYXR0ZW5PYmplY3QodG9rZW5PcHRpb25zW3BhcmFtcy5zaGFkb3dzQ29sb3JdKTtcbn1cbiIsImV4cG9ydCBjb25zdCBjb2xvclRoZW1lcyA9IFtcbiAgICAnbGlnaHRCYXNlJyxcbiAgICAnZGFya0Jhc2UnLFxuICAgICdkYXJrRWxldmF0ZWQnXG5dO1xuZXhwb3J0IGNvbnN0IGNvbG9yVGhlbWVOYW1lcyA9IFtcbiAgICAnTGlnaHQgQmFzZScsXG4gICAgJ0RhcmsgQmFzZScsXG4gICAgJ0RhcmsgRWxldmF0ZWQnXG5dO1xuZXhwb3J0IGNvbnN0IHJhZGlpU2l6ZU5hbWUgPSBbXG4gICAgXCJjb21wYWN0XCIsXG4gICAgXCJiYXNlXCIsXG4gICAgXCJsYXJnZVwiLFxuXTtcbmV4cG9ydCBjb25zdCByYWRpaVNpemVWYWx1ZXMgPSBbXG4gICAgNCxcbiAgICA2LFxuICAgIDgsXG5dO1xuZXhwb3J0IGNvbnN0IHNwYWNpbmdTaXplTmFtZSA9IFtcbiAgICBcImNvbXBhY3RcIixcbiAgICBcImJhc2VcIixcbiAgICBcImxhcmdlXCIsXG4gICAgXCJ0b3VjaFwiLFxuXTtcbmV4cG9ydCBjb25zdCB0eXBvZ3JhcGh5U2l6ZU5hbWUgPSBbXG4gICAgXCJjb21wYWN0XCIsXG4gICAgXCJiYXNlXCIsXG4gICAgXCJsYXJnZVwiLFxuXTtcbmV4cG9ydCBjb25zdCB0eXBvZ3JhcGh5U2l6ZVZhbHVlcyA9IFtcbiAgICBcIjEzLzE2XCIsXG4gICAgXCIxNS8yMFwiLFxuICAgIFwiMTcvMjRcIixcbl07XG5leHBvcnQgY29uc3QgaWNvblNpemVOYW1lID0gW1xuICAgIFwiYmFzZVwiLFxuICAgIFwidG91Y2hcIlxuXTtcbmV4cG9ydCBjb25zdCBpY29uU2l6ZVZhbHVlcyA9IFtcbiAgICBcIjE2XCIsXG4gICAgXCIyNFwiLFxuXTtcbmV4cG9ydCBjb25zdCBzeXN0ZW1BY2NlbnRMaXN0ID0gW1xuICAgIFwicmVkXCIsXG4gICAgXCJhbWJlclwiLFxuICAgIFwiYnJvd25cIixcbiAgICBcImdyZWVuXCIsXG4gICAgXCJ0ZWFsXCIsXG4gICAgXCJibHVlXCIsXG4gICAgXCJpbmRpZ29cIixcbiAgICBcInZpb2xldFwiLFxuICAgIFwicHVycGxlXCIsXG4gICAgXCJwaW5rXCJcbl07XG5leHBvcnQgY29uc3QgZGVmYXVsdEFjY2VudEhVRXMgPSB7XG4gICAgXCJyZWRcIjogNCxcbiAgICBcImFtYmVyXCI6IDI1LFxuICAgIFwiYnJvd25cIjogMzMsXG4gICAgXCJncmVlblwiOiAxNTAsXG4gICAgXCJ0ZWFsXCI6IDE4MCxcbiAgICBcImJsdWVcIjogMjEwLFxuICAgIFwiaW5kaWdvXCI6IDI0MCxcbiAgICBcInZpb2xldFwiOiAyNjAsXG4gICAgXCJwdXJwbGVcIjogMjgwLFxuICAgIFwicGlua1wiOiAzNDBcbn07XG5leHBvcnQgY29uc3QgZGVmYXVsdFNlbWFudGljQWNjZW50cyA9IHtcbiAgICBwcmltYXJ5OiAnYmx1ZScsXG4gICAgaW5mbzogJ3RlYWwnLFxuICAgIHN1Y2Nlc3M6ICdncmVlbicsXG4gICAgd2FybmluZzogJ2FtYmVyJyxcbiAgICBkYW5nZXI6ICdyZWQnXG59O1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0QWNjZW50SFVFcyksIGRlZmF1bHRTZW1hbnRpY0FjY2VudHMpLCB7IHR5cGU6ICdJTVBPUlQnLCB0aGVtZTogJ2xpZ2h0JywgaHVlOiAxOTAsIHNhdHVyYXRpb246IDAuMiwgZGlzdGFuY2U6IDAuMDIsIGJhc2VGb250U2l6ZTogJ2Jhc2UnLCB0eXBlU2NhbGU6ICdtaW5vclRoaXJkJywgY3JlYXRlU3R5bGVzOiB0cnVlLCBhY2NlbnRTYXR1cmF0aW9uOiAwLjksIGFjY2VudE1heEx1bWluYW5jZTogMC40NSwgYWNjZW50TWlkTHVtaW5hbmNlOiAwLjE4LCBhY2NlbnRNaW5MdW1pbmFuY2U6IDAuMTIsIHJhZGlpOiAnYmFzZScsIHNwYWNpbmc6ICdiYXNlJywgdmVydGljYWxTcGFjaW5nOiAndW5ldmVuJywgc2luZ2xlQ29sbGVjdGlvbjogZmFsc2UsIGN1c3RvbUFjY2VudFRleHRTYXR1cmF0aW9uOiBmYWxzZSwgYWNjZW50VGV4dFNhdHVyYXRpb246IDAsIGFjY2VudFRleHRDb2xvcjogJ2F1dG8nLCB0ZXh0V2hpdGVCcmlnaHRuZXNzOiAxMDAsIHRleHRCbGFja0JyaWdodG5lc3M6IDYsIGNyZWF0ZUNvbG9yVG9rZW5zOiB0cnVlLCBjcmVhdGVDb21wb25lbnRUb2tlbnM6IHRydWUsIGNyZWF0ZVR5cG9ncmFwaHlUb2tlbnM6IHRydWUsIGNyZWF0ZVNwYWNpbmdUb2tlbnM6IHRydWUsIGNyZWF0ZUVsZXZhdGlvblRva2VuczogdHJ1ZSwgY3JlYXRlUmFkaWlUb2tlbnM6IHRydWUsIGNyZWF0ZUdsb2JhbFNpemVUb2tlbnM6IHRydWUsIGNyZWF0ZU9wYWNpdHlUb2tlbnM6IHRydWUsIHNoYWRvd3NTdHlsZTogMSwgc2hhZG93c0NvbG9yOiAxLCBzaGFkb3dzU3ByZWFkOiAtMSB9KTtcbmV4cG9ydCBjb25zdCBjb2xsZWN0aW9uTmFtZXMgPSBuZXcgTWFwKFtcbiAgICBbXCJicmFuZENvbG9yc1wiLCBcIkNvbG9yIFRoZW1lXCJdLFxuICAgIFtcInR5cGVTY2FsZVwiLCBcIlR5cGUgU2NhbGVcIl0sXG4gICAgW1widHlwZUZhY2VcIiwgXCJUeXBlIEZhY2VcIl0sXG4gICAgW1widGhlbWVDb2xvcnNcIiwgXCJDb2xvciBUaGVtZVwiXSxcbiAgICBbXCJjb21wb25lbnRDb2xvcnNcIiwgXCJDb21wb25lbnQgVG9rZW5zXCJdLFxuICAgIFtcInNwYWNpbmdcIiwgXCJTcGFjaW5nXCJdLFxuICAgIFtcIm9wYWNpdHlcIiwgXCJPcGFjaXR5XCJdLFxuICAgIFtcInJhZGlpXCIsIFwiUmFkaWlcIl0sXG4gICAgW1wiaWNvblNjYWxlXCIsIFwiSWNvbiBTY2FsZVwiXSxcbiAgICBbXCJnbG9iYWxTaXppbmdcIiwgXCJHbG9iYWwgU2l6aW5nXCJdLFxuXSk7XG4iLCJpbXBvcnQgeyBkZWZhdWx0U2V0dGluZ3MgfSBmcm9tICcuL2RlZmF1bHRzJztcbmltcG9ydCB7IF9jbG9uZSB9IGZyb20gJy4vdXRpbHMvY2xvbmUnO1xuaW1wb3J0IHsgZmxhdHRlbk9iamVjdCB9IGZyb20gXCIuL3V0aWxzL2ZsYXR0ZW4tb2JqZWN0XCI7XG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxldmF0aW9uVG9rZW5zKHBhcmFtcywgcmF3KSB7XG4gICAgbGV0IHRva2VucztcbiAgICBsZXQgZGVwdGggPSBwYXJhbXMuc2hhZG93c1N0eWxlIC0gMjtcbiAgICBpZiAocGFyYW1zLnNoYWRvd3NTcHJlYWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtcy5zaGFkb3dzU3ByZWFkID0gZGVmYXVsdFNldHRpbmdzLnNoYWRvd3NTcHJlYWQ7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuc2hhZG93c1N0eWxlID09IDEpIHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIHRoaXMgaXMgZXhjZXB0aW9uYWwgY2FzZVxuICAgICAgICAqL1xuICAgICAgICB0b2tlbnMgPSBnZW5lcmF0ZVNoYWRvd3MoMCwgcGFyYW1zLnNoYWRvd3NTcHJlYWQpO1xuICAgICAgICBjb25zdCBmaXJzdFNoYWRvd1J1bXAgPSBfY2xvbmUodG9rZW5zWydzaGFkb3ctMSddKTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZmlyc3RTaGFkb3dSdW1wKS5mb3JFYWNoKChba2V5LCBlZmZlY3REZXNpZ25Ub2tlbl0pID0+IHtcbiAgICAgICAgICAgIGVmZmVjdERlc2lnblRva2VuLiR2YWx1ZS5wb3AoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRva2VucyA9IHtcbiAgICAgICAgICAgICdzaGFkb3ctMSc6IGZpcnN0U2hhZG93UnVtcCxcbiAgICAgICAgICAgICdzaGFkb3ctMic6IHRva2Vuc1snc2hhZG93LTEnXSxcbiAgICAgICAgICAgICdzaGFkb3ctMyc6IHRva2Vuc1snc2hhZG93LTInXSxcbiAgICAgICAgICAgICdzaGFkb3ctNCc6IHRva2Vuc1snc2hhZG93LTMnXSxcbiAgICAgICAgICAgICdzaGFkb3ctNSc6IHRva2Vuc1snc2hhZG93LTQnXSxcbiAgICAgICAgICAgICdzaGFkb3ctNic6IHRva2Vuc1snc2hhZG93LTUnXSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRva2VucyA9IGdlbmVyYXRlU2hhZG93cyhkZXB0aCwgcGFyYW1zLnNoYWRvd3NTcHJlYWQpO1xuICAgIH1cbiAgICByZXR1cm4gcmF3ID09PSB0cnVlID8gdG9rZW5zIDogZmxhdHRlbk9iamVjdCh0b2tlbnMpO1xufVxuY29uc3QgdmFsdWVTZXF1ZW5jZSA9IFsxLCAyLCA0LCA4LCAxMiwgMTYsIDI0LCAzMiwgNDAsIDQ4LCA1NiwgNzIsIDg4LCAxMDRdO1xuY29uc3QgZWZmZWN0VGVtcGxhdGUgPSB7XG4gICAgXCJ0eXBlXCI6IFwiRFJPUF9TSEFET1dcIixcbiAgICBcInNob3dTaGFkb3dCZWhpbmROb2RlXCI6IGZhbHNlLFxuICAgIFwiY29sb3JcIjogXCJ7dXRpbGl0eS5zaGFkZS4xMDB9XCIsXG4gICAgXCJibGVuZE1vZGVcIjogXCJNVUxUSVBMWVwiLFxuICAgIFwib2Zmc2V0WFwiOiAwLFxuICAgIFwib2Zmc2V0WVwiOiAwLFxuICAgIFwicmFkaXVzXCI6IDEsXG4gICAgXCJzcHJlYWRcIjogMC41XG59O1xuZnVuY3Rpb24gZ2V0TGF5ZXJzQ291bnQob2Zmc2V0VmFsdWUpIHtcbiAgICBsZXQgbGF5ZXJzID0gMTtcbiAgICBpZiAob2Zmc2V0VmFsdWUgPiAwICYmIG9mZnNldFZhbHVlIDwgMTIpIHtcbiAgICAgICAgbGF5ZXJzICs9IDE7XG4gICAgfVxuICAgIGVsc2UgaWYgKG9mZnNldFZhbHVlID49IDEyKSB7XG4gICAgICAgIGxheWVycyArPSAyO1xuICAgIH1cbiAgICByZXR1cm4gbGF5ZXJzO1xufVxuZnVuY3Rpb24gZ2V0U2hhZG93VmFsdWVSYW1wKHZhbHVlU2VxdWVjZUluZGV4LCBzcHJlYWQpIHtcbiAgICBjb25zdCBvZmZzZXRWYWx1ZSA9IHZhbHVlU2VxdWVuY2VbdmFsdWVTZXF1ZWNlSW5kZXhdO1xuICAgIGxldCBsYXllcnMgPSBnZXRMYXllcnNDb3VudChvZmZzZXRWYWx1ZSk7XG4gICAgY29uc3Qgc2hhZG93UmFtcERlZmluaXRpb24gPSB7XG4gICAgICAgIFwiMTAwXCI6IHtcbiAgICAgICAgICAgICckdHlwZSc6ICdlZmZlY3QnLFxuICAgICAgICAgICAgJyR2YWx1ZSc6IGdldFNoYWRvd1ZhbHVlKGxheWVycywgdmFsdWVTZXF1ZWNlSW5kZXgsIDEsIHNwcmVhZClcbiAgICAgICAgfSxcbiAgICAgICAgXCIyMDBcIjoge1xuICAgICAgICAgICAgJyR0eXBlJzogJ2VmZmVjdCcsXG4gICAgICAgICAgICAnJHZhbHVlJzogZ2V0U2hhZG93VmFsdWUobGF5ZXJzLCB2YWx1ZVNlcXVlY2VJbmRleCwgMiwgc3ByZWFkKVxuICAgICAgICB9LFxuICAgICAgICBcIjMwMFwiOiB7XG4gICAgICAgICAgICAnJHR5cGUnOiAnZWZmZWN0JyxcbiAgICAgICAgICAgICckdmFsdWUnOiBnZXRTaGFkb3dWYWx1ZShsYXllcnMsIHZhbHVlU2VxdWVjZUluZGV4LCAzLCBzcHJlYWQpXG4gICAgICAgIH0sXG4gICAgICAgIFwiNDAwXCI6IHtcbiAgICAgICAgICAgICckdHlwZSc6ICdlZmZlY3QnLFxuICAgICAgICAgICAgJyR2YWx1ZSc6IGdldFNoYWRvd1ZhbHVlKGxheWVycywgdmFsdWVTZXF1ZWNlSW5kZXgsIDQsIHNwcmVhZClcbiAgICAgICAgfSxcbiAgICAgICAgXCI1MDBcIjoge1xuICAgICAgICAgICAgJyR0eXBlJzogJ2VmZmVjdCcsXG4gICAgICAgICAgICAnJHZhbHVlJzogZ2V0U2hhZG93VmFsdWUobGF5ZXJzLCB2YWx1ZVNlcXVlY2VJbmRleCwgNSwgc3ByZWFkKVxuICAgICAgICB9LFxuICAgICAgICBcIjYwMFwiOiB7XG4gICAgICAgICAgICAnJHR5cGUnOiAnZWZmZWN0JyxcbiAgICAgICAgICAgICckdmFsdWUnOiBnZXRTaGFkb3dWYWx1ZShsYXllcnMsIHZhbHVlU2VxdWVjZUluZGV4LCA2LCBzcHJlYWQpXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gc2hhZG93UmFtcERlZmluaXRpb247XG59XG5mdW5jdGlvbiBhZGp1c3RTcHJlYWQoc3ByZWFkLCBibHVyVmFsdWUpIHtcbiAgICBpZiAoc3ByZWFkIDwgMCAmJiBNYXRoLmFicyhzcHJlYWQpID49IGJsdXJWYWx1ZSkge1xuICAgICAgICByZXR1cm4gYWRqdXN0U3ByZWFkKCsrc3ByZWFkLCBibHVyVmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gc3ByZWFkO1xufVxuZnVuY3Rpb24gZ2V0U2hhZG93VmFsdWUobGF5ZXJzLCBzZXF1ZWNlU3RhcnRJbmRleCwgY29sb3JJbmRleCwgc3ByZWFkKSB7XG4gICAgbGV0IHNoYWRvd1ZhbHVlID0gW1xuICAgICAgICBfY2xvbmUoZWZmZWN0VGVtcGxhdGUpXG4gICAgXTtcbiAgICBmb3IgKGxldCBsID0gMDsgbCA8IGxheWVyczsgbCsrKSB7XG4gICAgICAgIGNvbnN0IHNlcXVlbmNlSW5kZXggPSBzZXF1ZWNlU3RhcnRJbmRleCArIGw7XG4gICAgICAgIGNvbnN0IG9mZnNldFZhbHVlID0gdmFsdWVTZXF1ZW5jZVtzZXF1ZW5jZUluZGV4XTtcbiAgICAgICAgY29uc3QgcmFkaXVzVmFsdWUgPSB2YWx1ZVNlcXVlbmNlW3NlcXVlbmNlSW5kZXggKyAxXTtcbiAgICAgICAgbGV0IGxheWVyVmFsdWUgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIF9jbG9uZShlZmZlY3RUZW1wbGF0ZSkpLCB7IGNvbG9yOiBge3V0aWxpdHkuc2hhZGUuJHtjb2xvckluZGV4fTAwfWAsIG9mZnNldFk6IG9mZnNldFZhbHVlLCByYWRpdXM6IHJhZGl1c1ZhbHVlLCBzcHJlYWQ6IGFkanVzdFNwcmVhZChzcHJlYWQsIG9mZnNldFZhbHVlKSB9KTtcbiAgICAgICAgc2hhZG93VmFsdWUucHVzaChsYXllclZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNoYWRvd1ZhbHVlO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVTaGFkb3dzKHNpemUsIHNwcmVhZCkge1xuICAgIGxldCBzcHJlYWRGYWN0b3IgPSAwO1xuICAgIGlmIChzcHJlYWQgPCAwKSB7XG4gICAgICAgIHNwcmVhZEZhY3RvciA9IC0xO1xuICAgIH1cbiAgICBlbHNlIGlmIChzcHJlYWQgPiAwKSB7XG4gICAgICAgIHNwcmVhZEZhY3RvciA9IDE7XG4gICAgfVxuICAgIGxldCByYW1wID0ge307XG4gICAgZm9yIChsZXQgcyA9IDE7IHMgPD0gNjsgcysrKSB7XG4gICAgICAgIHJhbXBbYHNoYWRvdy0ke3N9YF0gPSBnZXRTaGFkb3dWYWx1ZVJhbXAoc2l6ZSsrLCBzcHJlYWQpO1xuICAgICAgICBzcHJlYWQgKz0gc3ByZWFkRmFjdG9yO1xuICAgIH1cbiAgICByZXR1cm4gcmFtcDtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IGJyYW5kVmFyaWFudFRlbXBsYXRlIGZyb20gXCIuL3V0aWxzL2JyYW5kLXZhcmlhbnQtdGVtcGxhdGUuanNvblwiO1xuaW1wb3J0IHsgZ2V0Q29sbGVjdGlvbkFuZFByZXBhcmVUb2tlbnMsIGltcG9ydFZhcmlhYmxlcyB9IGZyb20gXCIuL2ltcG9ydC10b2tlbnNcIjtcbmltcG9ydCB7IGNvbnZlcnRGaWdtYUNvbG9yVG9SZ2IgfSBmcm9tIFwiLi91dGlscy9maWdtYS1jb2xvcnNcIjtcbmltcG9ydCB7IGNvbnZlcnRGaWdtYUVmZmVjdFN0eWxlVG9Ub2tlbiwgaW1wb3J0RWZmZWN0U3R5bGVzIH0gZnJvbSBcIi4vdXRpbHMvZmlnbWEtZWZmZWN0LXN0eWxlc1wiO1xuaW1wb3J0IHsgY29udmVydEZpZ21hVGV4dFN0eWxlVG9Ub2tlbiwgaW1wb3J0VGV4dFN0eWxlcyB9IGZyb20gXCIuL3V0aWxzL2ZpZ21hLXRleHQtc3R5bGVzXCI7XG5pbXBvcnQgeyBmbGF0dGVuT2JqZWN0IH0gZnJvbSBcIi4vdXRpbHMvZmxhdHRlbi1vYmplY3RcIjtcbmltcG9ydCB7IGZpZ21hQWxpYXNUb0Rlc2lnblRva2VucywgZ2V0QWxpYXNOYW1lLCB2YXJpYWJsZU5hbWVUb09iamVjdCB9IGZyb20gXCIuL3V0aWxzL2ZpZ21hLXZhcmlhYmxlc1wiO1xuaW1wb3J0IHsgZGVsYXlBc3luYyB9IGZyb20gXCIuL3V0aWxzL2RlbGF5LWFzeW5jXCI7XG5pbXBvcnQgeyBhZGRUb0dsb2JhbFRva2Vuc0RpY3Rpb25hcnksIGZpbmRUb2tlblJlZmVyZW5jZXMsIGdldFJlZmVyZW5jZU5hbWUgfSBmcm9tIFwiLi91dGlscy90b2tlbi1yZWZlcmVuY2VzXCI7XG5pbXBvcnQgeyBfY2xvbmUgfSBmcm9tIFwiLi91dGlscy9jbG9uZVwiO1xuaW1wb3J0IHsgY29sbGVjdGlvbk5hbWVzIH0gZnJvbSBcIi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IHRvQ2FtZWxDYXNlIH0gZnJvbSBcIi4vdXRpbHMvdGV4dC10by10aXRsZS1jYXNlXCI7XG5pbXBvcnQgeyBnZXRBbHBoYU51bVRva2Vuc1NvcnRGbiwgZ2V0Q29sb3JUb2tlbnNTb3J0Rm4sIGdldFNpemVUb2tlbnNTb3J0Rm4gfSBmcm9tIFwiLi91dGlscy9zb3J0LXRva2Vuc1wiO1xuZnVuY3Rpb24gbWFrZUJyYW5kVmFyaWFudFJlY29yZChuYW1lKSB7XG4gICAgY29uc3QgYnJhbmRWYXJpYW50UmVjb3JkID0gX2Nsb25lKGJyYW5kVmFyaWFudFRlbXBsYXRlKTtcbiAgICBicmFuZFZhcmlhbnRSZWNvcmQuY29sbGVjdGlvbiA9IFwiQnJhbmQgVmFyaWFudFwiO1xuICAgIGJyYW5kVmFyaWFudFJlY29yZC5tb2RlID0gdG9DYW1lbENhc2UobmFtZSk7XG4gICAgYnJhbmRWYXJpYW50UmVjb3JkLnRva2VucyA9IHtcbiAgICAgICAgdGhlbWU6IHt9LFxuICAgICAgICBicmFuZDoge30sXG4gICAgICAgIGNvbXBvbmVudDoge30sXG4gICAgfTtcbiAgICByZXR1cm4gYnJhbmRWYXJpYW50UmVjb3JkO1xufVxuZnVuY3Rpb24gZXhwb3J0QnJhbmRUaGVtZVRva2VucyhrZXksIGJyYW5kVmFyaWFudFJlY29yZCwgZXhwb3J0ZWREYXRhKSB7XG4gICAgbGV0IGJyYW5kVG9rZW5zID0gYnJhbmRWYXJpYW50UmVjb3JkLnRva2Vuc1trZXldO1xuICAgIGV4cG9ydGVkRGF0YS5mb3JFYWNoKHJlY29yZCA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGVOYW1lID0gdG9DYW1lbENhc2UocmVjb3JkLm1vZGUpO1xuICAgICAgICBjb25zdCB0b2tlbnMgPSByZWNvcmQudG9rZW5zO1xuICAgICAgICBjb25zdCBkYXRhID0ge307XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRva2VucykuZm9yRWFjaCgoW3Rva2VuTmFtZSwgdG9rZW5EYXRhXSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRva2VuID0gdmFyaWFibGVOYW1lVG9PYmplY3QoeyBuYW1lOiB0b2tlbk5hbWUsIHRhcmdldE9iamVjdDogZGF0YSB9KTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdG9rZW5EYXRhLiR2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgbGV0IHJlZmVyZW5jZXMgPSBmaW5kVG9rZW5SZWZlcmVuY2VzKHZhbHVlKSB8fCBbXTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gcmVmZXJlbmNlcy5tYXAoYWxpYXMgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgeyR7a2V5fS4ke21vZGVOYW1lfS4ke2dldFJlZmVyZW5jZU5hbWUoYWxpYXMpfX1gO1xuICAgICAgICAgICAgfSkuam9pbignICcpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0b2tlbiwgdG9rZW5EYXRhLCB7XG4gICAgICAgICAgICAgICAgJHZhbHVlOiBuZXdWYWx1ZSB8fCB2YWx1ZSxcbiAgICAgICAgICAgICAgICBzY29wZXM6IFtdLCAvLyBpIHdhbnQgdGhlc2UgdG8gc3RheSBwcml2YXRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyYW5kVG9rZW5zW21vZGVOYW1lXSA9IGRhdGE7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJyYW5kVmFyaWFudFJlY29yZDtcbn1cbmZ1bmN0aW9uIHJlbWFwUHJpbWFyeVZhcmlhYmxlcyhleHBvcnRlZERhdGEsIGdldFBhdGgpIHtcbiAgICBjb25zdCBleHBvcnREYXRhID0gZXhwb3J0ZWREYXRhLm1hcChyZWNvcmQgPT4ge1xuICAgICAgICBjb25zdCBtb2RlTmFtZSA9IHJlY29yZC5tb2RlO1xuICAgICAgICBjb25zdCB0b2tlbnMgPSByZWNvcmQudG9rZW5zO1xuICAgICAgICBjb25zdCBkYXRhID0ge307XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRva2VucykuZm9yRWFjaCgoW3Rva2VuTmFtZSwgdG9rZW5EYXRhXSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRva2VuID0gdmFyaWFibGVOYW1lVG9PYmplY3QoeyBuYW1lOiB0b2tlbk5hbWUsIHRhcmdldE9iamVjdDogZGF0YSB9KTtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBmaWdtYUFsaWFzVG9EZXNpZ25Ub2tlbnMoZ2V0UmVmZXJlbmNlTmFtZSh0b2tlbk5hbWUpKTtcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBnZXRQYXRoKG1vZGVOYW1lKTtcbiAgICAgICAgICAgIHRva2VuID0gT2JqZWN0LmFzc2lnbih0b2tlbiwgdG9rZW5EYXRhLCB7XG4gICAgICAgICAgICAgICAgJHZhbHVlOiBgeyR7cGF0aH0uJHtuYW1lfX1gXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlY29yZC50b2tlbnMgPSBkYXRhO1xuICAgICAgICByZXR1cm4gcmVjb3JkO1xuICAgIH0pO1xuICAgIHJldHVybiBleHBvcnREYXRhO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGV4cG9ydFRvSlNPTihleHBvcnRQYXJhbXMsIGZvcm1EYXRhKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbnMgPSB5aWVsZCBmaWdtYS52YXJpYWJsZXMuZ2V0TG9jYWxWYXJpYWJsZUNvbGxlY3Rpb25zQXN5bmMoKTtcbiAgICAgICAgY29uc3QgZmlsZXMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBjb2xsZWN0aW9uIG9mIGNvbGxlY3Rpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBleHBvcnRlZERhdGEgPSB5aWVsZCBleHBvcnRGaWdtYVZhcmlhYmxlQ29sbGVjdGlvbihjb2xsZWN0aW9uLCBleHBvcnRQYXJhbXMuanNvbkNvbG9yRm9ybWF0KTtcbiAgICAgICAgICAgIGV4cG9ydGVkRGF0YS5mb3JFYWNoKHJlY29yZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW5zID0gcmVjb3JkLnRva2VucztcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gZXhwYW5kVG9rZW5OYW1lVG9PYmplY3QodG9rZW5zKTtcbiAgICAgICAgICAgICAgICByZWNvcmQudG9rZW5zID0gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZmlsZXMucHVzaCguLi5leHBvcnRlZERhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRleHRTdHlsZXMgPSB5aWVsZCBmaWdtYS5nZXRMb2NhbFRleHRTdHlsZXNBc3luYygpO1xuICAgICAgICBjb25zdCBlZmZlY3RTdHlsZXMgPSB5aWVsZCBmaWdtYS5nZXRMb2NhbEVmZmVjdFN0eWxlc0FzeW5jKCk7XG4gICAgICAgIGNvbnN0IGV4cG9ydGVkVGV4dFN0eWxlcyA9IHlpZWxkIGV4cG9ydFRleHRTdHlsZXModGV4dFN0eWxlcyk7XG4gICAgICAgIGNvbnN0IGV4cG9ydGVkRWZmZWN0U3R5bGVzID0geWllbGQgZXhwb3J0RWZmZWN0U3R5bGVzKGVmZmVjdFN0eWxlcywgZXhwb3J0UGFyYW1zLmpzb25Db2xvckZvcm1hdCk7XG4gICAgICAgIGV4cG9ydGVkVGV4dFN0eWxlcyAmJiBmaWxlcy5wdXNoKGV4cG9ydGVkVGV4dFN0eWxlcyk7XG4gICAgICAgIGV4cG9ydGVkRWZmZWN0U3R5bGVzICYmIGZpbGVzLnB1c2goZXhwb3J0ZWRFZmZlY3RTdHlsZXMpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwiRVhQT1JUX1JFU1VMVF9KU09OXCIsIGZpbGVzIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGV4cG9ydEJyYW5kVmFyaWFudFRvSlNPTihwYXJhbXMsIGZvcm1EYXRhKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbnMgPSB5aWVsZCBmaWdtYS52YXJpYWJsZXMuZ2V0TG9jYWxWYXJpYWJsZUNvbGxlY3Rpb25zQXN5bmMoKTtcbiAgICAgICAgY29uc3QgYnJhbmRNb2RlTmFtZSA9IGZvcm1EYXRhLnByaW1hcnk7XG4gICAgICAgIGxldCBicmFuZFZhcmlhbnRDb2xsZWN0aW9uID0gbWFrZUJyYW5kVmFyaWFudFJlY29yZChicmFuZE1vZGVOYW1lKTtcbiAgICAgICAgY29uc3QgZmlsZXMgPSBbYnJhbmRWYXJpYW50Q29sbGVjdGlvbl07XG4gICAgICAgIGZvciAoY29uc3QgY29sbGVjdGlvbiBvZiBjb2xsZWN0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgZXhwb3J0ZWRDb2xsZWN0aW9uRGF0YSA9IHlpZWxkIGV4cG9ydEZpZ21hVmFyaWFibGVDb2xsZWN0aW9uKGNvbGxlY3Rpb24sIHBhcmFtcy5icmFuZENvbG9yRm9ybWF0KTtcbiAgICAgICAgICAgIGlmIChwYXJhbXMuY3JlYXRlQ29sb3JUb2tlbnMgJiYgY29sbGVjdGlvbi5uYW1lID09IGNvbGxlY3Rpb25OYW1lcy5nZXQoXCJ0aGVtZUNvbG9yc1wiKSkge1xuICAgICAgICAgICAgICAgIGJyYW5kVmFyaWFudENvbGxlY3Rpb24gPSBleHBvcnRCcmFuZFRoZW1lVG9rZW5zKFwidGhlbWVcIiwgYnJhbmRWYXJpYW50Q29sbGVjdGlvbiwgZXhwb3J0ZWRDb2xsZWN0aW9uRGF0YSk7XG4gICAgICAgICAgICAgICAgYnJhbmRWYXJpYW50Q29sbGVjdGlvbi50b2tlbnMudGhlbWVbXCJjb2xvclwiXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcInNjb3Blc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFMTF9TQ09QRVNcIlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiB0b0NhbWVsQ2FzZShicmFuZE1vZGVOYW1lKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZmlsZXMucHVzaCguLi5yZW1hcFByaW1hcnlWYXJpYWJsZXMoZXhwb3J0ZWRDb2xsZWN0aW9uRGF0YSwgKG1vZGVOYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgdGhlbWUuJHt0b0NhbWVsQ2FzZShtb2RlTmFtZSl9YDtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyYW1zLmNyZWF0ZUNvbXBvbmVudFRva2VucyAmJiBjb2xsZWN0aW9uLm5hbWUgPT0gY29sbGVjdGlvbk5hbWVzLmdldChcImNvbXBvbmVudENvbG9yc1wiKSkge1xuICAgICAgICAgICAgICAgIGltcG9ydEJyYW5kU3BlY2lmaWNUb2tlbnMoY29sbGVjdGlvbiwgJ2NvbXBvbmVudCcsIGV4cG9ydGVkQ29sbGVjdGlvbkRhdGEsIGZpbGVzLCBicmFuZFZhcmlhbnRDb2xsZWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGlzQnJhbmRTcGVjaWZpY0NvbGxlY3Rpb24gPSAoY29sbGVjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uLm5hbWUgPT0gY29sbGVjdGlvbk5hbWVzLmdldChcInR5cGVGYWNlXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24ubmFtZSA9PSBjb2xsZWN0aW9uTmFtZXMuZ2V0KFwidHlwZVNjYWxlXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24ubmFtZSA9PSBjb2xsZWN0aW9uTmFtZXMuZ2V0KFwicmFkaWlcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbi5uYW1lID09IGNvbGxlY3Rpb25OYW1lcy5nZXQoXCJzcGFjaW5nXCIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChwYXJhbXMuY3JlYXRlVHlwb2dyYXBoeVRva2VucyAmJiBpc0JyYW5kU3BlY2lmaWNDb2xsZWN0aW9uKGNvbGxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgaW1wb3J0QnJhbmRTcGVjaWZpY1Rva2Vucyhjb2xsZWN0aW9uLCAnYnJhbmQnLCBleHBvcnRlZENvbGxlY3Rpb25EYXRhLCBmaWxlcywgYnJhbmRWYXJpYW50Q29sbGVjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcIkVYUE9SVF9SRVNVTFRfQlJBTkRcIiwgZmlsZXMgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBleHBhbmRUb2tlbk5hbWVUb09iamVjdCh0b2tlbnMpIHtcbiAgICBjb25zdCBkYXRhID0ge307XG4gICAgT2JqZWN0LmVudHJpZXModG9rZW5zKS5mb3JFYWNoKChbdG9rZW5OYW1lLCB0b2tlbkRhdGFdKSA9PiB7XG4gICAgICAgIGxldCB0b2tlbiA9IHZhcmlhYmxlTmFtZVRvT2JqZWN0KHsgbmFtZTogdG9rZW5OYW1lLCB0YXJnZXRPYmplY3Q6IGRhdGEgfSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odG9rZW4sIHRva2VuRGF0YSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG59XG5mdW5jdGlvbiBpbXBvcnRCcmFuZFNwZWNpZmljVG9rZW5zKGNvbGxlY3Rpb24sIHRhcmdldEtleSwgZXhwb3J0ZWRDb2xsZWN0aW9uRGF0YSwgZmlsZXMsIGJyYW5kVmFyaWFudENvbGxlY3Rpb24pIHtcbiAgICBjb25zdCBkZWZhdWx0TW9kZUlkID0gY29sbGVjdGlvbi5kZWZhdWx0TW9kZUlkO1xuICAgIGNvbnN0IGRlZmF1bHR0TW9kZSA9IGNvbGxlY3Rpb24ubW9kZXMuZmluZChtb2RlID0+IG1vZGUubW9kZUlkID09PSBkZWZhdWx0TW9kZUlkKTtcbiAgICBjb25zdCBleHBvcnREYXRhID0gZXhwb3J0ZWRDb2xsZWN0aW9uRGF0YS5maW5kKHJlY29yZCA9PiByZWNvcmQubW9kZSA9PT0gZGVmYXVsdHRNb2RlLm5hbWUpO1xuICAgIGNvbnN0IGRhdGEgPSBleHBhbmRUb2tlbk5hbWVUb09iamVjdChleHBvcnREYXRhLnRva2Vucyk7XG4gICAgYnJhbmRWYXJpYW50Q29sbGVjdGlvbi50b2tlbnNbdGFyZ2V0S2V5XSA9IE9iamVjdC5hc3NpZ24oYnJhbmRWYXJpYW50Q29sbGVjdGlvbi50b2tlbnNbdGFyZ2V0S2V5XSwgZGF0YSk7XG4gICAgZmlsZXMucHVzaCguLi5yZW1hcFByaW1hcnlWYXJpYWJsZXMoW2V4cG9ydERhdGFdLCAobW9kZU5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIGAke3RhcmdldEtleX1gO1xuICAgIH0pKTtcbiAgICByZXR1cm4gYnJhbmRWYXJpYW50Q29sbGVjdGlvbjtcbn1cbmZ1bmN0aW9uIGdldFRva2VuVmFsdWVGcm9tVmFyaWFibGUodmFsdWUsIHZhcmlhYmxlLCBjb2xvckZvcm1hdCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB2YWx1ZVsndHlwZSddO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJWQVJJQUJMRV9BTElBU1wiKSB7XG4gICAgICAgICAgICBjb25zdCBhbGlhcyA9IHlpZWxkIGdldEFsaWFzTmFtZSh2YWx1ZVsnaWQnXSk7XG4gICAgICAgICAgICByZXR1cm4gYWxpYXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhcmlhYmxlLnJlc29sdmVkVHlwZSA9PSBcIkNPTE9SXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBjb252ZXJ0RmlnbWFDb2xvclRvUmdiKHZhbHVlLCBjb2xvckZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke3ZhbHVlfWA7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBleHBvcnRGaWdtYVZhcmlhYmxlQ29sbGVjdGlvbihjb2xsZWN0aW9uLCBjb2xvckZvcm1hdCA9IFwiaHNsXCIpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9ucyA9IFtdO1xuICAgICAgICBjb25zdCB2YXJpYWJsZVJlZmVyZW5jZXMgPSBjb2xsZWN0aW9uLnZhcmlhYmxlSWRzLnNvcnQoKTtcbiAgICAgICAgY29uc3QgdHlwZU5hbWVzID0gbmV3IE1hcChbXG4gICAgICAgICAgICBbXCJDT0xPUlwiLCBcImNvbG9yXCJdLFxuICAgICAgICAgICAgW1wiQk9PTEVBTlwiLCBcImJvb2xlYW5cIl0sXG4gICAgICAgICAgICBbXCJGTE9BVFwiLCBcIm51bWJlclwiXSxcbiAgICAgICAgICAgIFtcIlNUUklOR1wiLCBcInN0cmluZ1wiXVxuICAgICAgICBdKTtcbiAgICAgICAgZm9yIChjb25zdCBtb2RlIG9mIGNvbGxlY3Rpb24ubW9kZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3Rpb25SZWNvcmQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJ2YXJpYWJsZXNcIixcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLm5hbWUsXG4gICAgICAgICAgICAgICAgbW9kZTogbW9kZS5uYW1lLFxuICAgICAgICAgICAgICAgIHRva2Vuczoge31cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZhcmlhYmxlSWQgb2YgdmFyaWFibGVSZWZlcmVuY2VzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlnbWFWYXJpYWJsZSA9IHlpZWxkIGZpZ21hLnZhcmlhYmxlcy5nZXRWYXJpYWJsZUJ5SWRBc3luYyh2YXJpYWJsZUlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCB7IG5hbWUsIHJlc29sdmVkVHlwZSwgc2NvcGVzLCB2YWx1ZXNCeU1vZGUgfSA9IGZpZ21hVmFyaWFibGU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmFtZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNCeU1vZGVbbW9kZS5tb2RlSWRdO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHZhbHVlT2JqZWN0ID0gdmFyaWFibGVOYW1lVG9PYmplY3QobmFtZSwgY29sbGVjdGlvblJlY29yZC50b2tlbnMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0ge1xuICAgICAgICAgICAgICAgICAgICAkdHlwZTogdHlwZU5hbWVzLmdldChyZXNvbHZlZFR5cGUpLFxuICAgICAgICAgICAgICAgICAgICAkdmFsdWU6IHlpZWxkIGdldFRva2VuVmFsdWVGcm9tVmFyaWFibGUodmFsdWUsIGZpZ21hVmFyaWFibGUsIGNvbG9yRm9ybWF0KSxcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVzOiBzY29wZXMsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBmaWdtYVZhcmlhYmxlLmRlc2NyaXB0aW9uIHx8IFwiXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25SZWNvcmQudG9rZW5zW25hbWVdID0gdG9rZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBjb2xsZWN0aW9ucy5wdXNoKGNvbGxlY3Rpb25SZWNvcmQpO1xuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb25zO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZXhwb3J0VGV4dFN0eWxlcyhzdHlsZXMpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoc3R5bGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0ge1xuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0U3R5bGVzXCIsXG4gICAgICAgICAgICBjb2xsZWN0aW9uOiBcIlRleHQgU3R5bGVzXCIsXG4gICAgICAgICAgICBtb2RlOiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgIHRva2Vuczoge31cbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChjb25zdCBzdHlsZSBvZiBzdHlsZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBzdHlsZS5uYW1lO1xuICAgICAgICAgICAgbGV0IHRva2VuID0gdmFyaWFibGVOYW1lVG9PYmplY3QoeyBuYW1lLCB0YXJnZXRPYmplY3Q6IGNvbGxlY3Rpb24udG9rZW5zIH0pO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0b2tlbiwge1xuICAgICAgICAgICAgICAgICR2YWx1ZTogeWllbGQgY29udmVydEZpZ21hVGV4dFN0eWxlVG9Ub2tlbihzdHlsZSksXG4gICAgICAgICAgICAgICAgJHR5cGU6IFwidHlwb2dyYXBoeVwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgfSk7XG59XG5mdW5jdGlvbiBleHBvcnRFZmZlY3RTdHlsZXMoc3R5bGVzLCBjb2xvckZvcm1hdCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChzdHlsZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSB7XG4gICAgICAgICAgICB0eXBlOiBcImVmZmVjdFN0eWxlc1wiLFxuICAgICAgICAgICAgY29sbGVjdGlvbjogXCJFZmZlY3QgU3R5bGVzXCIsXG4gICAgICAgICAgICBtb2RlOiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgIHRva2Vuczoge31cbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChjb25zdCBzdHlsZSBvZiBzdHlsZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBzdHlsZS5uYW1lO1xuICAgICAgICAgICAgbGV0IHRva2VuID0gdmFyaWFibGVOYW1lVG9PYmplY3QoeyBuYW1lLCB0YXJnZXRPYmplY3Q6IGNvbGxlY3Rpb24udG9rZW5zIH0pO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0b2tlbiwge1xuICAgICAgICAgICAgICAgICR2YWx1ZTogeWllbGQgY29udmVydEZpZ21hRWZmZWN0U3R5bGVUb1Rva2VuKHN0eWxlLCBjb2xvckZvcm1hdCksXG4gICAgICAgICAgICAgICAgJHR5cGU6IFwiZWZmZWN0XCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHN0eWxlLmRlc2NyaXB0aW9uIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGltcG9ydEZyb21KU09OKGRhdGEsIHBhcmFtcykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25zID0gW107IC8vIHVuaXF1ZSBzZXQgb2YgY29sbGVjdGlvbnMgdG8gaW1wb3J0XG4gICAgICAgIGNvbnN0IHVuaXF1ZUNvbGxlY3Rpb25zID0gZGF0YS5maWx0ZXIocmVjb3JkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3Rpb25OYW1lID0gcmVjb3JkLmNvbGxlY3Rpb247XG4gICAgICAgICAgICAvLyBnZXQgdW5pcXVlIGNvbGxlY3Rpb24gbGlzdFxuICAgICAgICAgICAgaWYgKGNvbGxlY3Rpb25zLmluZGV4T2YoY29sbGVjdGlvbk5hbWUpIDwgMCkge1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25zLnB1c2goY29sbGVjdGlvbk5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHRva2Vuc0RpY3Rpb25hcnkgPSB7fTtcbiAgICAgICAgLy8gaXRlcmF0ZSBlYWNoIGNvbGxlY3Rpb24sIGlnbm9yZSBhZGRpdGlvbmFsIG1vZGVzIGFuZCBtYWtlIGEgZGljdGlvbmFyeVxuICAgICAgICB1bmlxdWVDb2xsZWN0aW9ucy5mb3JFYWNoKGNvbGxlY3Rpb25SZWNvcmQgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmxhdFRva2VucyA9IGZsYXR0ZW5PYmplY3QoY29sbGVjdGlvblJlY29yZC50b2tlbnMpO1xuICAgICAgICAgICAgdG9rZW5zRGljdGlvbmFyeSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdG9rZW5zRGljdGlvbmFyeSksIGZsYXRUb2tlbnMpO1xuICAgICAgICB9KTtcbiAgICAgICAgYWRkVG9HbG9iYWxUb2tlbnNEaWN0aW9uYXJ5KHRva2Vuc0RpY3Rpb25hcnkpO1xuICAgICAgICB3aGlsZSAodW5pcXVlQ29sbGVjdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBjb2xsZWN0aW9uUmVjb3JkID0gdW5pcXVlQ29sbGVjdGlvbnMuc2hpZnQoKTtcbiAgICAgICAgICAgIGlmIChjb2xsZWN0aW9uUmVjb3JkLnR5cGUgPT0gXCJ2YXJpYWJsZXNcIikge1xuICAgICAgICAgICAgICAgIHlpZWxkIGdldENvbGxlY3Rpb25BbmRQcmVwYXJlVG9rZW5zKHtcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25SZWNvcmQuY29sbGVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbW9kZU5hbWU6IGNvbGxlY3Rpb25SZWNvcmQubW9kZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZmxhdHRlbk9iamVjdChjb2xsZWN0aW9uUmVjb3JkLnRva2VucyksXG4gICAgICAgICAgICAgICAgICAgIHNvcnRGbjogZ2V0U29ydEZuQnlDb2xsZWN0aW9uTmFtZShjb2xsZWN0aW9uUmVjb3JkLmNvbGxlY3Rpb24pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgeWllbGQgZGVsYXlBc3luYyg1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjYWxjdWxhdGUgdG9rZW5zIGNvdW50XG4gICAgICAgIGxldCB0b2tlbnNDb3VudFRvdGFsID0gMDtcbiAgICAgICAgbGV0IHRva2Vuc0ltcG9ydGVkQ291bnQgPSAwO1xuICAgICAgICBkYXRhLmZvckVhY2goY29sbGVjdGlvblJlY29yZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBmbGF0VG9rZW5zID0gZmxhdHRlbk9iamVjdChjb2xsZWN0aW9uUmVjb3JkLnRva2Vucyk7XG4gICAgICAgICAgICB0b2tlbnNDb3VudFRvdGFsICs9IE9iamVjdC5rZXlzKGZsYXRUb2tlbnMpLmxlbmd0aDtcbiAgICAgICAgfSk7XG4gICAgICAgIHdoaWxlIChkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY29sbGVjdGlvblJlY29yZCA9IGRhdGEuc2hpZnQoKTtcbiAgICAgICAgICAgIGNvbnN0IGZsYXRUb2tlbnMgPSBmbGF0dGVuT2JqZWN0KGNvbGxlY3Rpb25SZWNvcmQudG9rZW5zKTtcbiAgICAgICAgICAgIGlmIChjb2xsZWN0aW9uUmVjb3JkLnR5cGUgPT0gXCJ2YXJpYWJsZXNcIikge1xuICAgICAgICAgICAgICAgIHlpZWxkIGltcG9ydFZhcmlhYmxlcyh7XG4gICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uUmVjb3JkLmNvbGxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVOYW1lOiBjb2xsZWN0aW9uUmVjb3JkLm1vZGUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGZsYXRUb2tlbnNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB5aWVsZCBkZWxheUFzeW5jKDUpO1xuICAgICAgICAgICAgICAgIHRva2Vuc0ltcG9ydGVkQ291bnQgKz0gT2JqZWN0LmtleXMoZmxhdFRva2VucykubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBJbXBvcnRlZCAke3Rva2Vuc0ltcG9ydGVkQ291bnR9IG91dCBvZiAke3Rva2Vuc0NvdW50VG90YWx9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29sbGVjdGlvblJlY29yZC50eXBlID09IFwidGV4dFN0eWxlc1wiKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgaW1wb3J0VGV4dFN0eWxlcyh0b2tlbnNEaWN0aW9uYXJ5KTtcbiAgICAgICAgICAgICAgICB5aWVsZCBkZWxheUFzeW5jKDUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbGxlY3Rpb25SZWNvcmQudHlwZSA9PSBcImVmZmVjdFN0eWxlc1wiKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgaW1wb3J0RWZmZWN0U3R5bGVzKGZsYXRUb2tlbnMsIHRva2Vuc0RpY3Rpb25hcnkpO1xuICAgICAgICAgICAgICAgIHlpZWxkIGRlbGF5QXN5bmMoNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldFNvcnRGbkJ5Q29sbGVjdGlvbk5hbWUobmFtZSkge1xuICAgIGNvbnN0IHJlZmVyZW5jZXMgPSB7XG4gICAgICAgIFwiQ29sb3IgVGhlbWVcIjogZ2V0Q29sb3JUb2tlbnNTb3J0Rm4oKSxcbiAgICAgICAgXCJCcmFuZCBWYXJpYW50XCI6IGdldENvbG9yVG9rZW5zU29ydEZuKCksXG4gICAgICAgIFwiQ29tcG9uZW50IENvbG9yc1wiOiBnZXRDb2xvclRva2Vuc1NvcnRGbigpLFxuICAgICAgICBcIk9wYWNpdHlcIjogZ2V0QWxwaGFOdW1Ub2tlbnNTb3J0Rm4oKSxcbiAgICAgICAgXCJTcGFjaW5nXCI6IGdldFNpemVUb2tlbnNTb3J0Rm4oKSxcbiAgICAgICAgXCJSYWRpaVwiOiBnZXRTaXplVG9rZW5zU29ydEZuKCksXG4gICAgICAgIFwiR2xvYmFsIFNpemluZ1wiOiBnZXRBbHBoYU51bVRva2Vuc1NvcnRGbigpLFxuICAgIH07XG4gICAgcmV0dXJuIHJlZmVyZW5jZXNbbmFtZV07XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGdldENvbG9yVG9rZW5WYWx1ZSwgZ2V0Q29tcG9uZW50Q29sb3JzLCBnZXRHbG9iYWxOZXV0cmFscywgZ2V0U2hhZG93Q29sb3JUb2tlbnMsIGdldFRoZW1lQ29sb3JzIH0gZnJvbSAnLi9jb2xvci10b2tlbnMnO1xuaW1wb3J0IHsgZ2V0RmlnbWFDb2xsZWN0aW9uLCByZXNvbHZlVmFyaWFibGVUeXBlLCBzZXRGaWdtYVZhcmlhYmxlIH0gZnJvbSBcIi4vdXRpbHMvZmlnbWEtdmFyaWFibGVzXCI7XG5pbXBvcnQgY2hyb21hIGZyb20gJ2Nocm9tYS1qcyc7XG5pbXBvcnQgKiBhcyBzcGFjaW5nVG9rZW5zIGZyb20gJy4vc3BhY2luZy10b2tlbnMnO1xuaW1wb3J0ICogYXMgcmFkaWlUb2tlbnMgZnJvbSAnLi9yYWRpaS10b2tlbnMnO1xuaW1wb3J0ICogYXMgdHlwb2dyYXBoeVRva2VucyBmcm9tICcuL3R5cG9ncmFwaHktdG9rZW5zJztcbmltcG9ydCAqIGFzIHNpemluZ1Rva2VucyBmcm9tICcuL3NpemluZy10b2tlbnMnO1xuaW1wb3J0ICogYXMgZWZmZWN0c1Rva2VucyBmcm9tICcuL2VmZmVjdC10b2tlbnMnO1xuaW1wb3J0ICogYXMgb3BhY2l0eVRva2VucyBmcm9tICcuL29wYWNpdHktdG9rZW5zJztcbmltcG9ydCB7IGNvbG9yVGhlbWVzLCBjb2xvclRoZW1lTmFtZXMsIGNvbGxlY3Rpb25OYW1lcyB9IGZyb20gJy4vZGVmYXVsdHMnO1xuaW1wb3J0IHsgZ2V0U2l6ZVRva2Vuc1NvcnRGbiwgZ2V0Q29sb3JUb2tlbnNTb3J0Rm4sIGdldEFscGhhTnVtVG9rZW5zU29ydEZuIH0gZnJvbSAnLi91dGlscy9zb3J0LXRva2Vucyc7XG5pbXBvcnQgeyBpbXBvcnRUZXh0U3R5bGVzIH0gZnJvbSAnLi91dGlscy9maWdtYS10ZXh0LXN0eWxlcyc7XG5pbXBvcnQgeyBnZXRHbG9iYWxBY2NlbnRSYW1wIH0gZnJvbSAnLi9jb2xvci1nZW5lcmF0b3JzL2FjY2VudC1wYWxldHRlLWdlbmVyYXRvcic7XG5pbXBvcnQgeyByZXNvbHZlQWxpYXNPclZhbHVlLCBhZGRUb0dsb2JhbFRva2Vuc0RpY3Rpb25hcnksIGdldEdsb2JhbFRva2Vuc0RpY3Rpb25hcnkgfSBmcm9tICcuL3V0aWxzL3Rva2VuLXJlZmVyZW5jZXMnO1xuaW1wb3J0IHsgdG9UaXRsZUNhc2UgfSBmcm9tICcuL3V0aWxzL3RleHQtdG8tdGl0bGUtY2FzZSc7XG5pbXBvcnQgeyByYWRpaVNpemVOYW1lLCBzcGFjaW5nU2l6ZU5hbWUsIHR5cG9ncmFwaHlTaXplTmFtZSB9IGZyb20gJy4vZGVmYXVsdHMnO1xuaW1wb3J0IHsgaW1wb3J0RWZmZWN0U3R5bGVzIH0gZnJvbSAnLi91dGlscy9maWdtYS1lZmZlY3Qtc3R5bGVzJztcbmltcG9ydCB7IGZsYXR0ZW5PYmplY3QgfSBmcm9tICcuL3V0aWxzL2ZsYXR0ZW4tb2JqZWN0JztcbmltcG9ydCB7IHJvdW5kVHdvRGlnaXRzIH0gZnJvbSAnLi91dGlscy9yb3VuZC1kZWNpbWFscyc7XG5pbXBvcnQgeyBfY2xvbmUgfSBmcm9tICcuL3V0aWxzL2Nsb25lJztcbmltcG9ydCAqIGFzIHRoZW1lU3RvcmUgZnJvbSAnLi91dGlscy90aGVtZXMtc3RvcmUnO1xuY29uc29sZS5jbGVhcigpO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYXRlSW1wb3J0KCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHRoZW1lU3RvcmUuZ2V0VGhlbWUoJ2xpZ2h0Jyk7XG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICBwYXJhbXMuY3JlYXRlQ29tcG9uZW50VG9rZW5zICYmICh5aWVsZCBnZXRDb2xsZWN0aW9uQW5kUHJlcGFyZVRva2Vucyh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgnY29tcG9uZW50Q29sb3JzJyksXG4gICAgICAgICAgICBtb2RlTmFtZTogXCJEZWZhdWx0XCIsXG4gICAgICAgICAgICBkYXRhOiBnZXRDb21wb25lbnRDb2xvcnMoKSxcbiAgICAgICAgICAgIHNvcnRGbjogZ2V0Q29sb3JUb2tlbnNTb3J0Rm4oKVxuICAgICAgICB9KSk7XG4gICAgICAgIHBhcmFtcy5jcmVhdGVDb2xvclRva2VucyAmJiAoeWllbGQgZ2V0Q29sbGVjdGlvbkFuZFByZXBhcmVUb2tlbnMoe1xuICAgICAgICAgICAgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lcy5nZXQoJ3RoZW1lQ29sb3JzJyksXG4gICAgICAgICAgICBtb2RlTmFtZTogXCJMaWdodCBCYXNlXCIsXG4gICAgICAgICAgICBkYXRhOiBnZXRUaGVtZUNvbG9ycygnbGlnaHRCYXNlJywgcGFyYW1zKSxcbiAgICAgICAgICAgIHNvcnRGbjogZ2V0Q29sb3JUb2tlbnNTb3J0Rm4oKVxuICAgICAgICB9KSk7XG4gICAgICAgIHBhcmFtcy5jcmVhdGVTcGFjaW5nVG9rZW5zICYmICh5aWVsZCBnZXRDb2xsZWN0aW9uQW5kUHJlcGFyZVRva2Vucyh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgnc3BhY2luZycpLFxuICAgICAgICAgICAgbW9kZU5hbWU6IHRvVGl0bGVDYXNlKHBhcmFtcy5zcGFjaW5nKSxcbiAgICAgICAgICAgIGRhdGE6IHNwYWNpbmdUb2tlbnNbcGFyYW1zLnNwYWNpbmddLFxuICAgICAgICAgICAgc29ydEZuOiBnZXRTaXplVG9rZW5zU29ydEZuKCksXG4gICAgICAgIH0pKTtcbiAgICAgICAgcGFyYW1zLmNyZWF0ZVJhZGlpVG9rZW5zICYmICh5aWVsZCBnZXRDb2xsZWN0aW9uQW5kUHJlcGFyZVRva2Vucyh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgncmFkaWknKSxcbiAgICAgICAgICAgIG1vZGVOYW1lOiB0b1RpdGxlQ2FzZShwYXJhbXMucmFkaWkpLFxuICAgICAgICAgICAgZGF0YTogcmFkaWlUb2tlbnNbcGFyYW1zLnJhZGlpXSxcbiAgICAgICAgICAgIHNvcnRGbjogZ2V0U2l6ZVRva2Vuc1NvcnRGbigpLFxuICAgICAgICB9KSk7XG4gICAgICAgIHBhcmFtcy5jcmVhdGVUeXBvZ3JhcGh5VG9rZW5zICYmICh5aWVsZCBnZXRDb2xsZWN0aW9uQW5kUHJlcGFyZVRva2Vucyh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogXCJUeXBlIFNjYWxlXCIsXG4gICAgICAgICAgICBtb2RlTmFtZTogdG9UaXRsZUNhc2UocGFyYW1zLmJhc2VGb250U2l6ZSksXG4gICAgICAgICAgICBkYXRhOiB0eXBvZ3JhcGh5VG9rZW5zW3BhcmFtcy5iYXNlRm9udFNpemVdLFxuICAgICAgICAgICAgc29ydEZuOiBnZXRTaXplVG9rZW5zU29ydEZuKCksXG4gICAgICAgIH0pKTtcbiAgICAgICAgcGFyYW1zLmNyZWF0ZU9wYWNpdHlUb2tlbnMgJiYgKHlpZWxkIGdldENvbGxlY3Rpb25BbmRQcmVwYXJlVG9rZW5zKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZXMuZ2V0KCdvcGFjaXR5JyksXG4gICAgICAgICAgICBtb2RlTmFtZTogdG9UaXRsZUNhc2UoXCJkZWZhdWx0XCIpLFxuICAgICAgICAgICAgZGF0YTogb3BhY2l0eVRva2Vucy5vcGFjaXR5LFxuICAgICAgICAgICAgc29ydEZuOiBnZXRBbHBoYU51bVRva2Vuc1NvcnRGbigpLFxuICAgICAgICB9KSk7XG4gICAgICAgIHBhcmFtcy5jcmVhdGVHbG9iYWxTaXplVG9rZW5zICYmICh5aWVsZCBnZXRDb2xsZWN0aW9uQW5kUHJlcGFyZVRva2Vucyh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgnZ2xvYmFsU2l6aW5nJyksXG4gICAgICAgICAgICBtb2RlTmFtZTogdG9UaXRsZUNhc2UoXCJkZWZhdWx0XCIpLFxuICAgICAgICAgICAgZGF0YTogc2l6aW5nVG9rZW5zLmdsb2JhbCxcbiAgICAgICAgICAgIHNvcnRGbjogZ2V0QWxwaGFOdW1Ub2tlbnNTb3J0Rm4oKSxcbiAgICAgICAgfSkpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVWYXJpYWJsZXNGb3JQbGF5Z3JvdW5kKGRhdGEsIGlzUGxheWdyb3VuZCA9IGZhbHNlKSB7XG4gICAgaWYgKGlzUGxheWdyb3VuZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICA7XG4gICAgY29uc3QgY29udHJhc3RSYXRpb3MgPSB7fTtcbiAgICBjb25zdCBwcmltYXJ5Q29sb3JIVUUgPSBkYXRhLnByaW1hcnk7XG4gICAgY29uc3Qgc2hhZGVzID0gZ2V0R2xvYmFsQWNjZW50UmFtcChkYXRhW3ByaW1hcnlDb2xvckhVRV0sIGRhdGEuYWNjZW50U2F0dXJhdGlvbiwgZGF0YS5hY2NlbnRNaW5MdW1pbmFuY2UsIGRhdGEuYWNjZW50TWlkTHVtaW5hbmNlLCBkYXRhLmFjY2VudE1heEx1bWluYW5jZSk7XG4gICAgT2JqZWN0LmVudHJpZXMoc2hhZGVzKS5mb3JFYWNoKChbbmFtZSwgdG9rZW5dKSA9PiB7XG4gICAgICAgIHRva2VuLnNjb3BlcyA9IFtdO1xuICAgICAgICBsZXQgY2hyb21hQ29sb3IgPSBjaHJvbWEodG9rZW4uJHZhbHVlKTtcbiAgICAgICAgY29uc3QgY29udHJhc3QxID0gcm91bmRUd29EaWdpdHMoY2hyb21hLmNvbnRyYXN0KGNocm9tYS5oc2woMCwgMCwgMSksIGNocm9tYUNvbG9yKSk7XG4gICAgICAgIGNvbnN0IGNvbnRyYXN0MiA9IHJvdW5kVHdvRGlnaXRzKGNocm9tYS5jb250cmFzdChjaHJvbWEuaHNsKDAsIDAsIDAuMjIpLCBjaHJvbWFDb2xvcikpO1xuICAgICAgICBjb250cmFzdFJhdGlvc1tgX2FjY2VudF8ke25hbWV9X3ZzX2xpZ2h0YF0gPSB7XG4gICAgICAgICAgICBcIiR2YWx1ZVwiOiBjb250cmFzdDEudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIFwiJHR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIFwic2NvcGVzXCI6IFtdXG4gICAgICAgIH07XG4gICAgICAgIGNvbnRyYXN0UmF0aW9zW2BfYWNjZW50XyR7bmFtZX1fdnNfZGFya2BdID0ge1xuICAgICAgICAgICAgXCIkdmFsdWVcIjogY29udHJhc3QyLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBcIiR0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBcInNjb3Blc1wiOiBbXVxuICAgICAgICB9O1xuICAgIH0pO1xuICAgIGltcG9ydFZhcmlhYmxlcyh7XG4gICAgICAgIGNvbGxlY3Rpb25OYW1lOiBcIl9QbGF5Z3JvdW5kXCIsXG4gICAgICAgIG1vZGVOYW1lOiBcIkRlZmF1bHRcIixcbiAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZsYXR0ZW5PYmplY3QoeyAnX2dsb2JhbC1hY2NlbnQnOiBzaGFkZXMgfSkpLCBjb250cmFzdFJhdGlvcyksIHsgJ19wcmltYXJ5LWNvbG9yLWh1ZSc6IHtcbiAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBkYXRhW2RhdGEucHJpbWFyeV0udG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJzY29wZXNcIjogW11cbiAgICAgICAgICAgIH0sICdfcHJpbWFyeS1jb2xvcic6IHtcbiAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBkYXRhLnByaW1hcnksXG4gICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwic2NvcGVzXCI6IFtdXG4gICAgICAgICAgICB9LCAnX3N1Y2Nlc3MtY29sb3InOiB7XG4gICAgICAgICAgICAgICAgXCIkdmFsdWVcIjogZGF0YS5zdWNjZXNzLFxuICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInNjb3Blc1wiOiBbXVxuICAgICAgICAgICAgfSwgJ193YXJuaW5nLWNvbG9yJzoge1xuICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IGRhdGEud2FybmluZyxcbiAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJzY29wZXNcIjogW11cbiAgICAgICAgICAgIH0sICdfZGFuZ2VyLWNvbG9yJzoge1xuICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IGRhdGEuZGFuZ2VyLFxuICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInNjb3Blc1wiOiBbXVxuICAgICAgICAgICAgfSwgJ19pbmZvLWNvbG9yJzoge1xuICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IGRhdGEuaW5mbyxcbiAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJzY29wZXNcIjogW11cbiAgICAgICAgICAgIH0gfSlcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbXBvcnRBbGxUb2tlbnMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdGhlbWVTdG9yZS5zYXZlKCk7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHRoZW1lU3RvcmUuZ2V0VGhlbWUoJ2xpZ2h0Jyk7XG4gICAgICAgIGNvbnN0IGlzUGxheWdyb3VuZCA9IGZpZ21hLnJvb3QuZ2V0UGx1Z2luRGF0YSgnU0RTUGxheWdyb3VuZCcpICE9PSAnJztcbiAgICAgICAgZ2VuZXJhdGVWYXJpYWJsZXNGb3JQbGF5Z3JvdW5kKHBhcmFtcywgaXNQbGF5Z3JvdW5kKTtcbiAgICAgICAgcGFyYW1zLmNyZWF0ZUNvbG9yVG9rZW5zICYmICh5aWVsZCBpbXBvcnRDb2xvclRoZW1lKCkpO1xuICAgICAgICBwYXJhbXMuY3JlYXRlQ29tcG9uZW50VG9rZW5zICYmICh5aWVsZCBpbXBvcnRWYXJpYWJsZXMoe1xuICAgICAgICAgICAgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lcy5nZXQoJ2NvbXBvbmVudENvbG9ycycpLFxuICAgICAgICAgICAgbW9kZU5hbWU6IFwiRGVmYXVsdFwiLFxuICAgICAgICAgICAgZGF0YTogZ2V0Q29tcG9uZW50Q29sb3JzKClcbiAgICAgICAgfSkpO1xuICAgICAgICBwYXJhbXMuY3JlYXRlU3BhY2luZ1Rva2VucyAmJiAoeWllbGQgaW1wb3J0U2l6ZVRva2Vucyh7XG4gICAgICAgICAgICB0eXBlOiAnc3BhY2luZycsXG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgnc3BhY2luZycpLFxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgICBkZWZhdWx0TW9kZTogcGFyYW1zLnNwYWNpbmcsXG4gICAgICAgICAgICBkZWZhdWx0T3JkZXI6IHNwYWNpbmdTaXplTmFtZSxcbiAgICAgICAgICAgIHRva2Vuczogc3BhY2luZ1Rva2Vucy5nZXRTcGFjaW5nVG9rZW5zKHBhcmFtcy52ZXJ0aWNhbFNwYWNpbmcpXG4gICAgICAgIH0pKTtcbiAgICAgICAgcGFyYW1zLmNyZWF0ZVJhZGlpVG9rZW5zICYmICh5aWVsZCBpbXBvcnRTaXplVG9rZW5zKHtcbiAgICAgICAgICAgIHR5cGU6ICdyYWRpaScsXG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgncmFkaWknKSxcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgICAgZGVmYXVsdE1vZGU6IHBhcmFtcy5yYWRpaSxcbiAgICAgICAgICAgIGRlZmF1bHRPcmRlcjogcmFkaWlTaXplTmFtZSxcbiAgICAgICAgICAgIHRva2VuczogcmFkaWlUb2tlbnNcbiAgICAgICAgfSkpO1xuICAgICAgICBwYXJhbXMuY3JlYXRlVHlwb2dyYXBoeVRva2VucyAmJiAoeWllbGQgaW1wb3J0VHlwb2dyYXBoeVRva2VucyhwYXJhbXMpKTtcbiAgICAgICAgcGFyYW1zLmNyZWF0ZU9wYWNpdHlUb2tlbnMgJiYgKHlpZWxkIGltcG9ydFZhcmlhYmxlcyh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgnb3BhY2l0eScpLFxuICAgICAgICAgICAgbW9kZU5hbWU6IFwiRGVmYXVsdFwiLFxuICAgICAgICAgICAgZGF0YTogb3BhY2l0eVRva2Vucy5vcGFjaXR5XG4gICAgICAgIH0pKTtcbiAgICAgICAgcGFyYW1zLmNyZWF0ZUdsb2JhbFNpemVUb2tlbnMgJiYgKHlpZWxkIGltcG9ydFZhcmlhYmxlcyh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgnZ2xvYmFsU2l6aW5nJyksXG4gICAgICAgICAgICBtb2RlTmFtZTogXCJEZWZhdWx0XCIsXG4gICAgICAgICAgICBkYXRhOiBzaXppbmdUb2tlbnMuZ2xvYmFsXG4gICAgICAgIH0pKTtcbiAgICAgICAgcGFyYW1zLmNyZWF0ZUVsZXZhdGlvblRva2VucyAmJiAoeWllbGQgaW1wb3J0RWZmZWN0VG9rZW5zKHBhcmFtcykpO1xuICAgICAgICBmaWdtYS5ub3RpZnkoXCJGaWdtYSB2YXJpYWJsZXMgaGFzIGJlZW4gaW1wb3J0ZWRcIik7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKFwiSU1QT1JUX0NPTVBMRVRFRFwiKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldFRoZW1lUGFyYW1zKHRoZW1lKSB7XG4gICAgaWYgKHRoZW1lLnN0YXJ0c1dpdGgoJ2xpZ2h0JykpIHtcbiAgICAgICAgcmV0dXJuIHRoZW1lU3RvcmUuZ2V0VGhlbWUoJ2xpZ2h0Jyk7XG4gICAgfVxuICAgIGlmICh0aGVtZS5zdGFydHNXaXRoKCdkYXJrJykpIHtcbiAgICAgICAgcmV0dXJuIHRoZW1lU3RvcmUuZ2V0VGhlbWUoJ2RhcmsnKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbnVzdWFsIHRoZW1lIG5hbWUgJHt0aGVtZX1gKTtcbn1cbmZ1bmN0aW9uIGltcG9ydENvbG9yVGhlbWUoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFRoZW1lcyA9IF9jbG9uZShjb2xvclRoZW1lcyk7XG4gICAgICAgIGFkZFRvR2xvYmFsVG9rZW5zRGljdGlvbmFyeShPYmplY3QuYXNzaWduKHt9LCBnZXRDb21wb25lbnRDb2xvcnMoKSkpO1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICB3aGlsZSAoZGVmYXVsdFRoZW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoZW1lTmFtZSA9IGRlZmF1bHRUaGVtZXMuc2hpZnQoKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGdldFRoZW1lUGFyYW1zKHRoZW1lTmFtZSk7XG4gICAgICAgICAgICBsZXQgdGhlbWVDb2xvcnMgPSBnZXRUaGVtZUNvbG9ycyh0aGVtZU5hbWUsIHBhcmFtcyk7XG4gICAgICAgICAgICBjb25zdCBnbG9iYWxOZXV0cmFscyA9IGdldEdsb2JhbE5ldXRyYWxzKHBhcmFtcyk7XG4gICAgICAgICAgICBhZGRUb0dsb2JhbFRva2Vuc0RpY3Rpb25hcnkoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBnbG9iYWxOZXV0cmFscyksIHRoZW1lQ29sb3JzKSk7XG4gICAgICAgICAgICB5aWVsZCBpbXBvcnRWYXJpYWJsZXMoe1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZXMuZ2V0KCd0aGVtZUNvbG9ycycpLFxuICAgICAgICAgICAgICAgIG1vZGVOYW1lOiBjb2xvclRoZW1lTmFtZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIGRhdGE6IHRoZW1lQ29sb3JzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgZGVidWdnZXI7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpbXBvcnRTaXplVG9rZW5zKGRhdGEpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCB0b2tlbnMgPSBkYXRhLnRva2VucztcbiAgICAgICAgY29uc3QgaXNTaW5nbGVNb2RlID0gZGF0YS5pc1NpbmdsZU1vZGUgfHwgZmFsc2U7XG4gICAgICAgIGNvbnN0IHNpbmdsZUNvbGxlY3Rpb24gPSBkYXRhLnBhcmFtcy5zaW5nbGVDb2xsZWN0aW9uO1xuICAgICAgICBjb25zdCBkZWZhdWx0TW9kZSA9IGRhdGEuZGVmYXVsdE1vZGU7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcmRlciA9IGRhdGEuZGVmYXVsdE9yZGVyLmZpbHRlcihpdGVtID0+IGl0ZW0gIT0gZGVmYXVsdE1vZGUpO1xuICAgICAgICBkZWZhdWx0T3JkZXIuc3BsaWNlKDAsIDAsIGRlZmF1bHRNb2RlKTtcbiAgICAgICAgZGVmYXVsdE9yZGVyLmxlbmd0aCA9IGlzU2luZ2xlTW9kZSA/IDEgOiBkZWZhdWx0T3JkZXIubGVuZ3RoO1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IG1vZGVOYW1lIG9mIGRlZmF1bHRPcmRlcikge1xuICAgICAgICAgICAgeWllbGQgaW1wb3J0VmFyaWFibGVzKHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogc2luZ2xlQ29sbGVjdGlvbiA/IFwiVUkgU2NhbGVcIiA6IGRhdGEuY29sbGVjdGlvbk5hbWUsXG4gICAgICAgICAgICAgICAgbW9kZU5hbWU6IHRvVGl0bGVDYXNlKG1vZGVOYW1lKSxcbiAgICAgICAgICAgICAgICBtb2RlSW5kZXg6IGluZGV4KyssXG4gICAgICAgICAgICAgICAgZGF0YTogdG9rZW5zW21vZGVOYW1lXSxcbiAgICAgICAgICAgICAgICBpc1NpbmdsZU1vZGU6IGlzU2luZ2xlTW9kZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb2xsZWN0aW9uQW5kUHJlcGFyZVRva2Vucyh7IGNvbGxlY3Rpb25OYW1lLCBtb2RlTmFtZSwgbW9kZUluZGV4ID0gLTEsIGRhdGEsIHNvcnRGbiA9IG51bGwsIGlzU2luZ2xlTW9kZSA9IGZhbHNlIH0pIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgbW9kZUlkO1xuICAgICAgICBjb25zdCB7IGNvbGxlY3Rpb24sIGlzTmV3IH0gPSB5aWVsZCBnZXRGaWdtYUNvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpO1xuICAgICAgICBpZiAoaXNOZXcgfHwgaXNTaW5nbGVNb2RlKSB7XG4gICAgICAgICAgICBtb2RlSWQgPSBjb2xsZWN0aW9uLm1vZGVzWzBdLm1vZGVJZDtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24ucmVuYW1lTW9kZShtb2RlSWQsIG1vZGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZGUgPSBtb2RlSW5kZXggPCAwID8gY29sbGVjdGlvbi5tb2Rlcy5maW5kKG1vZGUgPT4gbW9kZS5uYW1lID09PSBtb2RlTmFtZSkgOiBjb2xsZWN0aW9uLm1vZGVzW21vZGVJbmRleF07XG4gICAgICAgICAgICBpZiAoIW1vZGUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBtb2RlSWQgPSBjb2xsZWN0aW9uLmFkZE1vZGUobW9kZU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5ub3RpZnkoXCJDYW5ub3QgY3JlYXRlIG1vcmUgdGhhbiBvbmUgbW9kZS4gSXMgeW91ciBmaWxlIHVuZGVyIFBybyB0ZWFtIG9yIG9yZyBwbGFuP1wiLCB7IGVycm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2Fubm90IGNyZWF0ZSBtb3JlIHRoYW4gb25lIG1vZGUuIElzIHlvdXIgZmlsZSB1bmRlciBQcm8gdGVhbSBvciBvcmcgcGxhbj9cIiwgZSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlKTtcbiAgICAgICAgICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2RlSWQgPSBtb2RlLm1vZGVJZDtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLnJlbmFtZU1vZGUobW9kZUlkLCBtb2RlTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRyYW5zZm9ybWVkVG9rZW5zID0gT2JqZWN0LmVudHJpZXMoZGF0YSkubWFwKChba2V5LCBvYmplY3RdKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IG5hbWU6IGtleSB9LCBvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNvcnRGbiAhPSBudWxsKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1lZFRva2Vucy5zb3J0KHNvcnRGbik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0cmFuc2Zvcm1lZFRva2Vucy5tYXAodG9rZW4gPT4gdG9rZW4ubmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05ldykge1xuICAgICAgICAgICAgLy8gY3JlYXRlIHZhcmlhYmxlcyBzdHJhaWdodCBhd2F5IHNvIHRoZXJlIGlzIGEgd2F5IHRvIG1ha2UgXG4gICAgICAgICAgICAvLyByZWZlcmVuY2VzIC8gYWxpYXNlcyB3aXRob3V0IGFkZGl0aW9uYWwgcGFzc1xuICAgICAgICAgICAgZm9yIChjb25zdCB0b2tlbiBvZiB0cmFuc2Zvcm1lZFRva2Vucykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSByZXNvbHZlVmFyaWFibGVUeXBlKHRva2VuW1wiJHR5cGVcIl0pO1xuICAgICAgICAgICAgICAgIHlpZWxkIHNldEZpZ21hVmFyaWFibGUoY29sbGVjdGlvbiwgbW9kZUlkLCB0eXBlLCB0b2tlbi5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9rZW5zOiB0cmFuc2Zvcm1lZFRva2VucyxcbiAgICAgICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgICAgICBtb2RlSWQsXG4gICAgICAgICAgICB0eXBlOiBkYXRhLiR0eXBlXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaW1wb3J0VmFyaWFibGVzKHsgY29sbGVjdGlvbk5hbWUsIG1vZGVOYW1lLCBtb2RlSW5kZXggPSAtMSwgZGF0YSwgc29ydEZuID0gbnVsbCwgaXNTaW5nbGVNb2RlID0gZmFsc2UsIG92ZXJyaWRlVmFsdWVzID0gdHJ1ZSB9KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgeyB0b2tlbnMsIGNvbGxlY3Rpb24sIG1vZGVJZCwgdHlwZSB9ID0geWllbGQgZ2V0Q29sbGVjdGlvbkFuZFByZXBhcmVUb2tlbnMoeyBjb2xsZWN0aW9uTmFtZSwgbW9kZU5hbWUsIG1vZGVJbmRleCwgZGF0YSwgc29ydEZuLCBpc1NpbmdsZU1vZGUgfSk7XG4gICAgICAgIGZvciAoY29uc3QgdG9rZW4gb2YgdG9rZW5zKSB7XG4gICAgICAgICAgICBsZXQgdHlwZSA9ICckdHlwZScgaW4gdG9rZW4gPyB0b2tlbi4kdHlwZSA6ICdzdHJpbmcnO1xuICAgICAgICAgICAgeWllbGQgcHJvY2Vzc1Rva2VuKHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgICAgIG1vZGVJZCxcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlTmFtZTogdG9rZW4ubmFtZSxcbiAgICAgICAgICAgICAgICB0b2tlbjogdG9rZW4sXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVWYWx1ZXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpbXBvcnRTaGFkb3dWYXJpYWJsZXMocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBwYXJhbXMuc2hhZG93c1N0eWxlO1xuICAgICAgICBhZGRUb0dsb2JhbFRva2Vuc0RpY3Rpb25hcnkoT2JqZWN0LmFzc2lnbih7fSwgZ2V0R2xvYmFsTmV1dHJhbHMocGFyYW1zKSkpO1xuICAgICAgICB5aWVsZCBpbXBvcnRWYXJpYWJsZXMoe1xuICAgICAgICAgICAgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lcy5nZXQoJ3RoZW1lQ29sb3JzJyksXG4gICAgICAgICAgICBtb2RlTmFtZTogJ0xpZ2h0IEJhc2UnLFxuICAgICAgICAgICAgZGF0YTogZ2V0U2hhZG93Q29sb3JUb2tlbnMoJ2xpZ2h0JywgcGFyYW1zKVxuICAgICAgICB9KTtcbiAgICAgICAgeWllbGQgaW1wb3J0VmFyaWFibGVzKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZXMuZ2V0KCd0aGVtZUNvbG9ycycpLFxuICAgICAgICAgICAgbW9kZU5hbWU6ICdEYXJrIEJhc2UnLFxuICAgICAgICAgICAgZGF0YTogZ2V0U2hhZG93Q29sb3JUb2tlbnMoJ2RhcmsnLCBwYXJhbXMpXG4gICAgICAgIH0pO1xuICAgICAgICB5aWVsZCBpbXBvcnRWYXJpYWJsZXMoe1xuICAgICAgICAgICAgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lcy5nZXQoJ3RoZW1lQ29sb3JzJyksXG4gICAgICAgICAgICBtb2RlTmFtZTogJ0RhcmsgRWxldmF0ZWQnLFxuICAgICAgICAgICAgZGF0YTogZ2V0U2hhZG93Q29sb3JUb2tlbnMoJ2RhcmsnLCBwYXJhbXMpXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaW1wb3J0RWZmZWN0VG9rZW5zKHBhcmFtcykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHRva2VucyA9IGVmZmVjdHNUb2tlbnMuZ2V0RWxldmF0aW9uVG9rZW5zKHBhcmFtcyk7XG4gICAgICAgIHlpZWxkIGltcG9ydFNoYWRvd1ZhcmlhYmxlcyhwYXJhbXMpO1xuICAgICAgICB5aWVsZCBpbXBvcnRFZmZlY3RTdHlsZXModG9rZW5zKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGltcG9ydFR5cG9ncmFwaHlUb2tlbnMocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgdG9rZW5zID0gdHlwb2dyYXBoeVRva2Vucy5nZXRUeXBvZ3JhcGh5VG9rZW5zKHBhcmFtcy5iYXNlRm9udFNpemUsIHBhcmFtcy50eXBlU2NhbGUpO1xuICAgICAgICBjb25zdCB0eXBlU2NhbGVUb2tlbnMgPSB0eXBvZ3JhcGh5VG9rZW5zLmdldFR5cFNjYWxlVG9rZW5zKHBhcmFtcy50eXBlU2NhbGUpO1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uTmFtZSA9ICdUeXBlIEZhY2UnO1xuICAgICAgICAvLyBjb25zdCBjb2xsZWN0aW9uID0gYXdhaXQgZmluZEZpZ21hVmFyaWFibGVDb2xsZWN0aW9uQnlOYW1lKGNvbGxlY3Rpb25OYW1lKTtcbiAgICAgICAgYWRkVG9HbG9iYWxUb2tlbnNEaWN0aW9uYXJ5KHRva2Vucyk7XG4gICAgICAgIHlpZWxkIGltcG9ydFZhcmlhYmxlcyh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWUsXG4gICAgICAgICAgICBtb2RlTmFtZTogdHlwb2dyYXBoeVRva2Vucy50eXBlRmFjZVtcImZvbnQtZmFtaWx5XCJdLiR2YWx1ZSB8fCBcIkRlZmF1bHRcIixcbiAgICAgICAgICAgIGRhdGE6IHR5cG9ncmFwaHlUb2tlbnMudHlwZUZhY2VcbiAgICAgICAgfSk7XG4gICAgICAgIHlpZWxkIGltcG9ydFNpemVUb2tlbnMoe1xuICAgICAgICAgICAgdHlwZTogJ3R5cGVTY2FsZScsXG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogXCJUeXBlIFNjYWxlXCIsXG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICAgIGRlZmF1bHRNb2RlOiBwYXJhbXMuYmFzZUZvbnRTaXplLFxuICAgICAgICAgICAgZGVmYXVsdE9yZGVyOiB0eXBvZ3JhcGh5U2l6ZU5hbWUsXG4gICAgICAgICAgICB0b2tlbnM6IHR5cGVTY2FsZVRva2Vuc1xuICAgICAgICB9KTtcbiAgICAgICAgeWllbGQgaW1wb3J0VGV4dFN0eWxlcyh0b2tlbnMpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcHJvY2Vzc1Rva2VuKHsgY29sbGVjdGlvbiwgbW9kZUlkLCB0eXBlLCB2YXJpYWJsZU5hbWUsIHRva2VuLCBvdmVycmlkZVZhbHVlcyB9KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHlwZSA9IHR5cGUgfHwgdG9rZW4uJHR5cGU7XG4gICAgICAgIC8vIGlmIGtleSBpcyBhIG1ldGEgZmllbGQsIG1vdmUgb25cbiAgICAgICAgaWYgKHZhcmlhYmxlTmFtZS5jaGFyQXQoMCkgPT09IFwiJFwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHZhbHVlU3RyaW5nID0gYCR7dG9rZW4uJHZhbHVlfWA7XG4gICAgICAgIGlmICh0b2tlbi4kdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiY29sb3JcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBzZXRGaWdtYVZhcmlhYmxlKGNvbGxlY3Rpb24sIG1vZGVJZCwgXCJDT0xPUlwiLCB2YXJpYWJsZU5hbWUsIHlpZWxkIGdldENvbG9yVG9rZW5WYWx1ZSh0b2tlbiwgbW9kZUlkKSwgdG9rZW4uc2NvcGVzIHx8IFsnQUxMX1NDT1BFUyddLCB0b2tlbi5kZXNjcmlwdGlvbiB8fCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc29sdmVkVmFsdWUgPSB5aWVsZCByZXNvbHZlQWxpYXNPclZhbHVlKHZhbHVlU3RyaW5nLCBnZXRHbG9iYWxUb2tlbnNEaWN0aW9uYXJ5KCkpO1xuICAgICAgICAgICAgICAgIGxldCBudW1WYWx1ZSA9IHR5cGVvZiByZXNvbHZlZFZhbHVlID09ICdzdHJpbmcnID8gcGFyc2VGbG9hdChyZXNvbHZlZFZhbHVlKSA6IHJlc29sdmVkVmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIHNldEZpZ21hVmFyaWFibGUoY29sbGVjdGlvbiwgbW9kZUlkLCBcIkZMT0FUXCIsIHZhcmlhYmxlTmFtZSwgbnVtVmFsdWUsIHRva2VuLnNjb3BlcywgdG9rZW4uZGVzY3JpcHRpb24gfHwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBzZXRGaWdtYVZhcmlhYmxlKGNvbGxlY3Rpb24sIG1vZGVJZCwgXCJTVFJJTkdcIiwgdmFyaWFibGVOYW1lLCB5aWVsZCByZXNvbHZlQWxpYXNPclZhbHVlKHZhbHVlU3RyaW5nLCBnZXRHbG9iYWxUb2tlbnNEaWN0aW9uYXJ5KCkpLCB0b2tlbi5zY29wZXMsIHRva2VuLmRlc2NyaXB0aW9uIHx8IG51bGwpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpOyAvLyBzb21lIGNvZGluZyBlcnJvciBpbiBoYW5kbGluZyBoYXBwZW5lZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInVuc3VwcG9ydGVkIHR5cGVcIiwgdHlwZSwgdG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdyZWN1cnNpb24gaW4gJywgdG9rZW4pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgb3BhY2l0eVRva2VucyBmcm9tIFwiLi90b2tlbnMvb3BhY2l0eS9vcGFjaXR5LnRva2Vucy5qc29uXCI7XG5pbXBvcnQgeyBmbGF0dGVuT2JqZWN0IH0gZnJvbSBcIi4vdXRpbHMvZmxhdHRlbi1vYmplY3RcIjtcbmV4cG9ydCBjb25zdCBvcGFjaXR5ID0gZmxhdHRlbk9iamVjdChvcGFjaXR5VG9rZW5zKTtcbiIsImltcG9ydCBiYXNlUmFkaWlUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3JhZGlpL2Jhc2UudG9rZW5zLmpzb25cIjtcbmltcG9ydCBjb21wYWN0UmFkaWlUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3JhZGlpL2NvbXBhY3QudG9rZW5zLmpzb25cIjtcbmltcG9ydCBsYXJnZVJhZGlpVG9rZW5zIGZyb20gXCIuL3Rva2Vucy9yYWRpaS9sYXJnZS50b2tlbnMuanNvblwiO1xuaW1wb3J0IHsgZmxhdHRlbk9iamVjdCB9IGZyb20gXCIuL3V0aWxzL2ZsYXR0ZW4tb2JqZWN0XCI7XG5leHBvcnQgY29uc3QgYmFzZSA9IGZsYXR0ZW5PYmplY3QoYmFzZVJhZGlpVG9rZW5zKTtcbmV4cG9ydCBjb25zdCBjb21wYWN0ID0gZmxhdHRlbk9iamVjdChjb21wYWN0UmFkaWlUb2tlbnMpO1xuZXhwb3J0IGNvbnN0IGxhcmdlID0gZmxhdHRlbk9iamVjdChsYXJnZVJhZGlpVG9rZW5zKTtcbiIsImltcG9ydCBnbG9iYWxTaXppbmdUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3NpemluZy9nbG9iYWwudG9rZW5zLmpzb25cIjtcbmltcG9ydCBiYXNlU2l6aW5nVG9rZW5zIGZyb20gXCIuL3Rva2Vucy9zaXppbmcvYmFzZS50b2tlbnMuanNvblwiO1xuaW1wb3J0IHRvdWNoU2l6aW5nVG9rZW5zIGZyb20gXCIuL3Rva2Vucy9zaXppbmcvdG91Y2gudG9rZW5zLmpzb25cIjtcbmltcG9ydCB7IGZsYXR0ZW5PYmplY3QgfSBmcm9tIFwiLi91dGlscy9mbGF0dGVuLW9iamVjdFwiO1xuZXhwb3J0IGNvbnN0IGJhc2UgPSBmbGF0dGVuT2JqZWN0KGJhc2VTaXppbmdUb2tlbnMpO1xuZXhwb3J0IGNvbnN0IHRvdWNoID0gZmxhdHRlbk9iamVjdCh0b3VjaFNpemluZ1Rva2Vucyk7XG5leHBvcnQgY29uc3QgZ2xvYmFsID0gZmxhdHRlbk9iamVjdChnbG9iYWxTaXppbmdUb2tlbnMpO1xuIiwiaW1wb3J0IGJhc2VTcGFjaW5nVG9rZW5zIGZyb20gXCIuL3Rva2Vucy9zcGFjaW5nL2Jhc2UuanNvblwiO1xuaW1wb3J0IGNvbXBhY3RTcGFjaW5nVG9rZW5zIGZyb20gXCIuL3Rva2Vucy9zcGFjaW5nL2NvbXBhY3QuanNvblwiO1xuaW1wb3J0IGxhcmdlU3BhY2luZ1Rva2VucyBmcm9tIFwiLi90b2tlbnMvc3BhY2luZy9sYXJnZS5qc29uXCI7XG5pbXBvcnQgdG91Y2hTcGFjaW5nVG9rZW5zIGZyb20gXCIuL3Rva2Vucy9zcGFjaW5nL3RvdWNoLmpzb25cIjtcbmltcG9ydCB7IF9jbG9uZSB9IGZyb20gXCIuL3V0aWxzL2Nsb25lXCI7XG5pbXBvcnQgeyBmbGF0dGVuT2JqZWN0IH0gZnJvbSBcIi4vdXRpbHMvZmxhdHRlbi1vYmplY3RcIjtcbmNvbnN0IHRva2VucyA9IHtcbiAgICBiYXNlOiBiYXNlU3BhY2luZ1Rva2VucyxcbiAgICBjb21wYWN0OiBjb21wYWN0U3BhY2luZ1Rva2VucyxcbiAgICBsYXJnZTogbGFyZ2VTcGFjaW5nVG9rZW5zLFxuICAgIHRvdWNoOiB0b3VjaFNwYWNpbmdUb2tlbnNcbn07XG5leHBvcnQgY29uc3QgYmFzZSA9IGdldFNwYWNpbmdUb2tlbnMoXCJ1bmV2ZW5cIiwgXCJiYXNlXCIpO1xuZXhwb3J0IGNvbnN0IGNvbXBhY3QgPSBnZXRTcGFjaW5nVG9rZW5zKFwidW5ldmVuXCIsIFwiY29tcGFjdFwiKTtcbmV4cG9ydCBjb25zdCBsYXJnZSA9IGdldFNwYWNpbmdUb2tlbnMoXCJ1bmV2ZW5cIiwgXCJsYXJnZVwiKTtcbmV4cG9ydCBjb25zdCB0b3VjaCA9IGdldFNwYWNpbmdUb2tlbnMoXCJ1bmV2ZW5cIiwgXCJ0b3VjaFwiKTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRTcGFjaW5nVG9rZW5zKHZlcnRpY2FsU3BhY2luZywgc3BhY2luZ1NjYWxlKSB7XG4gICAgbGV0IG91dHB1dCA9IHt9O1xuICAgIGZvciAoY29uc3Qgc3BhY2luZ1NjYWxlIGluIHRva2Vucykge1xuICAgICAgICBvdXRwdXRbc3BhY2luZ1NjYWxlXSA9IG5vcm1hbGl6ZVNwYWNpbmdUb2tlbnMoc3BhY2luZ1NjYWxlLCB2ZXJ0aWNhbFNwYWNpbmcgPT09IFwiZXZlblwiKTtcbiAgICB9XG4gICAgaWYgKHNwYWNpbmdTY2FsZSkge1xuICAgICAgICByZXR1cm4gb3V0cHV0W3NwYWNpbmdTY2FsZV07XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG59XG5mdW5jdGlvbiBub3JtYWxpemVTcGFjaW5nVG9rZW5zKHNwYWNpbmdTY2FsZSwgaXNFdmVuKSB7XG4gICAgaWYgKCFpc0V2ZW4pIHtcbiAgICAgICAgcmV0dXJuIGZsYXR0ZW5PYmplY3QodG9rZW5zW3NwYWNpbmdTY2FsZV0pO1xuICAgIH1cbiAgICBjb25zdCBzY2FsZSA9IF9jbG9uZSh0b2tlbnNbc3BhY2luZ1NjYWxlXSk7XG4gICAgY29uc3QgbWFqb3IgPSBzY2FsZVtcInNwYWNpbmdcIl07XG4gICAgY29uc3QgbWlub3IgPSBzY2FsZVtcInNwYWNpbmdcIl0ubWlub3I7XG4gICAgZm9yIChjb25zdCB0b2tlbk5hbWUgaW4gbWlub3IpIHtcbiAgICAgICAgbWlub3JbdG9rZW5OYW1lXSA9IG1ham9yW3Rva2VuTmFtZV07XG4gICAgfVxuICAgIHJldHVybiBmbGF0dGVuT2JqZWN0KHNjYWxlKTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHRleHRTdHlsZVRva2VucyBmcm9tIFwiLi90b2tlbnMvdHlwb2dyYXBoeS9zdHlsZXMuanNvblwiO1xuaW1wb3J0IHR5cGVGYWNlVG9rZW5zIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L3R5cGVmYWNlLmpzb25cIjtcbmltcG9ydCBiYXNlTWFqb3JUaGlyZCBmcm9tIFwiLi90b2tlbnMvdHlwb2dyYXBoeS9tYWpvci10aGlyZC90eXBlc2NhbGUtYmFzZS5qc29uXCI7XG5pbXBvcnQgY29tcGFjdE1ham9yVGhpcmQgZnJvbSBcIi4vdG9rZW5zL3R5cG9ncmFwaHkvbWFqb3ItdGhpcmQvdHlwZXNjYWxlLWNvbXBhY3QuanNvblwiO1xuaW1wb3J0IGxhcmdlTWFqb3JUaGlyZCBmcm9tIFwiLi90b2tlbnMvdHlwb2dyYXBoeS9tYWpvci10aGlyZC90eXBlc2NhbGUtbGFyZ2UuanNvblwiO1xuaW1wb3J0IGJhc2VNaW5vclRoaXJkIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L21pbm9yLXRoaXJkL3R5cGVzY2FsZS1iYXNlLmpzb25cIjtcbmltcG9ydCBjb21wYWN0TWlub3JUaGlyZCBmcm9tIFwiLi90b2tlbnMvdHlwb2dyYXBoeS9taW5vci10aGlyZC90eXBlc2NhbGUtY29tcGFjdC5qc29uXCI7XG5pbXBvcnQgbGFyZ2VNaW5vclRoaXJkIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L21pbm9yLXRoaXJkL3R5cGVzY2FsZS1sYXJnZS5qc29uXCI7XG5pbXBvcnQgYmFzZU1ham9yU2Vjb25kIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L21ham9yLXNlY29uZC90eXBlc2NhbGUtYmFzZS5qc29uXCI7XG5pbXBvcnQgY29tcGFjdE1ham9yU2Vjb25kIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L21ham9yLXNlY29uZC90eXBlc2NhbGUtY29tcGFjdC5qc29uXCI7XG5pbXBvcnQgbGFyZ2VNYWpvclNlY29uZCBmcm9tIFwiLi90b2tlbnMvdHlwb2dyYXBoeS9tYWpvci1zZWNvbmQvdHlwZXNjYWxlLWxhcmdlLmpzb25cIjtcbmltcG9ydCB7IGZsYXR0ZW5PYmplY3QgfSBmcm9tIFwiLi91dGlscy9mbGF0dGVuLW9iamVjdFwiO1xuaW1wb3J0IHsgZmluZEZpZ21hVmFyaWFibGVDb2xsZWN0aW9uQnlOYW1lIH0gZnJvbSBcIi4vdXRpbHMvZmlnbWEtdmFyaWFibGVzXCI7XG5leHBvcnQgY29uc3QgYmFzZSA9IGZsYXR0ZW5PYmplY3QoYmFzZU1pbm9yVGhpcmQpO1xuZXhwb3J0IGNvbnN0IGNvbXBhY3QgPSBmbGF0dGVuT2JqZWN0KGNvbXBhY3RNaW5vclRoaXJkKTtcbmV4cG9ydCBjb25zdCBsYXJnZSA9IGZsYXR0ZW5PYmplY3QobGFyZ2VNaW5vclRoaXJkKTtcbmV4cG9ydCBjb25zdCB0eXBlRmFjZSA9IGZsYXR0ZW5PYmplY3QodHlwZUZhY2VUb2tlbnMpO1xuY29uc3Qgc3R5bGVzID0gZmxhdHRlbk9iamVjdCh0ZXh0U3R5bGVUb2tlbnMpO1xuY29uc3QgdG9rZW5zID0ge1xuICAgIG1ham9yVGhpcmQ6IHtcbiAgICAgICAgYmFzZTogZmxhdHRlbk9iamVjdChiYXNlTWFqb3JUaGlyZCksXG4gICAgICAgIGNvbXBhY3Q6IGZsYXR0ZW5PYmplY3QoY29tcGFjdE1ham9yVGhpcmQpLFxuICAgICAgICBsYXJnZTogZmxhdHRlbk9iamVjdChsYXJnZU1ham9yVGhpcmQpLFxuICAgIH0sXG4gICAgbWlub3JUaGlyZDoge1xuICAgICAgICBiYXNlOiBmbGF0dGVuT2JqZWN0KGJhc2VNaW5vclRoaXJkKSxcbiAgICAgICAgY29tcGFjdDogZmxhdHRlbk9iamVjdChjb21wYWN0TWlub3JUaGlyZCksXG4gICAgICAgIGxhcmdlOiBmbGF0dGVuT2JqZWN0KGxhcmdlTWlub3JUaGlyZCksXG4gICAgfSxcbiAgICBtYWpvclNlY29uZDoge1xuICAgICAgICBiYXNlOiBmbGF0dGVuT2JqZWN0KGJhc2VNYWpvclNlY29uZCksXG4gICAgICAgIGNvbXBhY3Q6IGZsYXR0ZW5PYmplY3QoY29tcGFjdE1ham9yU2Vjb25kKSxcbiAgICAgICAgbGFyZ2U6IGZsYXR0ZW5PYmplY3QobGFyZ2VNYWpvclNlY29uZCksXG4gICAgfSxcbn07XG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwb2dyYXBoeVRva2VucyhzaXplLCBzY2FsZSA9IFwibWlub3JUaGlyZFwiKSB7XG4gICAgbGV0IHNjYWxlVG9rZW5zID0gdG9rZW5zW3NjYWxlXVtzaXplXTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHR5cGVGYWNlKSwgc2NhbGVUb2tlbnMpLCBzdHlsZXMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cFNjYWxlVG9rZW5zKHNjYWxlID0gXCJtaW5vclRoaXJkXCIpIHtcbiAgICBsZXQgc2NhbGVUb2tlbnMgPSB0b2tlbnNbc2NhbGVdO1xuICAgIHJldHVybiBzY2FsZVRva2Vucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb250RGV0YWlscygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICByZXR1cm4geWllbGQgZ2V0Rm9udERldGFpbHNUb2tlbnMoKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldEZvbnREZXRhaWxzVG9rZW5zKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25OYW1lID0gJ1R5cGUgRmFjZSc7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSB5aWVsZCBmaW5kRmlnbWFWYXJpYWJsZUNvbGxlY3Rpb25CeU5hbWUoY29sbGVjdGlvbk5hbWUpO1xuICAgICAgICBsZXQgbmFtZXMgPSBbXTtcbiAgICAgICAgaWYgKGNvbGxlY3Rpb24gPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgdG9rZW5zID0gdHlwZUZhY2VUb2tlbnM7XG4gICAgICAgICAgICBjb25zdCBmYW1pbHkgPSB0eXBlRmFjZVRva2Vuc1tcImZvbnQtZmFtaWx5XCJdLiR2YWx1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IFtuYW1lLCB0ZXh0U3R5bGVdIG9mIE9iamVjdC5lbnRyaWVzKHR5cGVGYWNlVG9rZW5zW1widGV4dC1zdHlsZVwiXSkpIHtcbiAgICAgICAgICAgICAgICBuYW1lcy5wdXNoKHsgZmFtaWx5LCBzdHlsZTogdGV4dFN0eWxlLiR2YWx1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBmYW1pbHksIHN0eWxlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCB2YXJpYWJsZUlkIG9mIGNvbGxlY3Rpb24udmFyaWFibGVJZHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWdtYVZhciA9IHlpZWxkIGZpZ21hLnZhcmlhYmxlcy5nZXRWYXJpYWJsZUJ5SWRBc3luYyh2YXJpYWJsZUlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZmlnbWFWYXIubmFtZTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWdtYVZhclZhbHVlID0gT2JqZWN0LnZhbHVlcyhmaWdtYVZhci52YWx1ZXNCeU1vZGUpWzBdO1xuICAgICAgICAgICAgICAgIGlmIChuYW1lLnN0YXJ0c1dpdGgoJ2ZvbnQtZmFtaWx5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgZmFtaWx5ID0gZmlnbWFWYXJWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZS5zdGFydHNXaXRoKCd0ZXh0LXN0eWxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzLnB1c2goZmlnbWFWYXJWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBzdHlsZSBvZiBzdHlsZXMpIHtcbiAgICAgICAgICAgICAgICBuYW1lcy5wdXNoKHsgZmFtaWx5LCBzdHlsZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmFtZXM7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRGb250RGV0YWlsc0xvY2FsKHN0eWxlcykge1xuICAgIGNvbnN0IGZvbnRGYW1pbGllcyA9IFtdO1xuICAgIGNvbnN0IGZvbnRTdHlsZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHN0eWxlIG9mIHN0eWxlcykge1xuICAgICAgICBjb25zdCBmb250RmFtaWx5ID0gc3R5bGUuZm9udE5hbWUuZmFtaWx5O1xuICAgICAgICBjb25zdCBmb250U3R5bGUgPSBzdHlsZS5mb250TmFtZS5zdHlsZTtcbiAgICAgICAgaWYgKGZvbnRGYW1pbGllcy5pbmNsdWRlcyhmb250RmFtaWx5KSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgZm9udEZhbWlsaWVzLnB1c2goZm9udEZhbWlseSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvbnRTdHlsZXMuaW5jbHVkZXMoZm9udFN0eWxlKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgZm9udFN0eWxlcy5wdXNoKGZvbnRTdHlsZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IG5hbWVzID0gW107XG4gICAgZm9udEZhbWlsaWVzLmZvckVhY2goZmFtaWx5ID0+IHtcbiAgICAgICAgZm9udFN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IHtcbiAgICAgICAgICAgIG5hbWVzLnB1c2goeyBmYW1pbHksIHN0eWxlIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmFtZXM7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gX2Nsb25lKHZhbCkge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsO1xuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdudW1iZXInIHx8XG4gICAgICAgIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWwubWFwKHggPT4gX2Nsb25lKHgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkodmFsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBvID0ge307XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWwpIHtcbiAgICAgICAgICAgICAgICBvW2tleV0gPSBfY2xvbmUodmFsW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgJ3Vua25vd24nO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRlbGF5QXN5bmModGltZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKSk7XG59XG4iLCJpbXBvcnQgY2hyb21hIGZyb20gJ2Nocm9tYS1qcyc7XG5jb25zdCBoZXhDb2xvclJlZ2V4ID0gL14jKFswLTlhLWZdezN9fFswLTlhLWZdezZ9KSQvaTtcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RmlnbWFDb2xvclRvUmdiKGlucHV0LCBmb3JtYXQpIHtcbiAgICBjb25zdCB7IHIsIGcsIGIsIGEgfSA9IGlucHV0O1xuICAgIC8vZmlnbWEgdXNlcyBmbG9hdCAwLi4uMSB2cyBzdGFuZGFyZCAwLi4uMjU1XG4gICAgY29uc3QgZmlnbWFDb2xvclRyYW5zZm9ybWVkID0ge1xuICAgICAgICByOiBpbnB1dC5yICogMjU1LFxuICAgICAgICBnOiBpbnB1dC5nICogMjU1LFxuICAgICAgICBiOiBpbnB1dC5iICogMjU1LFxuICAgICAgICBhOiBpbnB1dC5hXG4gICAgfTtcbiAgICBsZXQgY29sb3IgPSBjaHJvbWEuZ2wociwgZywgYiwgYSk7XG4gICAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICAgICAgY2FzZSAnaGV4Jzoge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmhleCgpO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2hzbCc6IHtcbiAgICAgICAgICAgIHJldHVybiBjb2xvci5jc3MoJ2hzbCcpO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIHJldHVybiBjb2xvci5jc3MoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbG9yVmFsdWUoaW5wdXQsIGFkanVzdG1lbnRzKSB7XG4gICAgbGV0IGNvbG9yO1xuICAgIHRyeSB7XG4gICAgICAgIGlmIChpbnB1dC5zdGFydHNXaXRoKCdyZ2InKSkge1xuICAgICAgICAgICAgY29uc3QgcmdiVmFsdWVzID0gaW5wdXQucmVwbGFjZSgvXnJnYmE/XFwofFxccyt8XFwpJC9nLCAnJykuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGlmIChoZXhDb2xvclJlZ2V4LnRlc3QocmdiVmFsdWVzWzBdKSkge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gY2hyb21hKHJnYlZhbHVlc1swXSk7IC8vIGhleFRvRmlnbWFSR0IocmdiVmFsdWVzWzBdKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhbHBoYSA9IHBhcnNlRmxvYXQocmdiVmFsdWVzWzFdKTtcbiAgICAgICAgICAgICAgICBjb2xvciA9IGNvbG9yLmFscGhhKGFscGhhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gY2hyb21hKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbG9yID0gY2hyb21hKGlucHV0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChhZGp1c3RtZW50cykge1xuICAgICAgICBpZiAoYWRqdXN0bWVudHMuaCkge1xuICAgICAgICAgICAgY29sb3IgPSBjb2xvci5zZXQoJ2hzbC5oJywgYCR7YWRqdXN0bWVudHMuaH1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWRqdXN0bWVudHMucykge1xuICAgICAgICAgICAgY29sb3IgPSBjb2xvci5zZXQoJ2hzbC5zJywgYCR7YWRqdXN0bWVudHMuc31gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWRqdXN0bWVudHMubCkge1xuICAgICAgICAgICAgY29sb3IgPSBjb2xvci5zZXQoJ2hzbC5sJywgYCR7YWRqdXN0bWVudHMubH1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWRqdXN0bWVudHMuYSkge1xuICAgICAgICAgICAgY29sb3IgPSBjb2xvci5zZXQoJ2hzbC5hJywgYCR7YWRqdXN0bWVudHMuYX1gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBbciwgZywgYiwgYV0gPSBjb2xvci5nbCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGdsOiB7IHIsIGcsIGIsIGEgfSxcbiAgICAgICAgcmdiOiBjb2xvci5jc3MoKSxcbiAgICAgICAgaHNsOiBjb2xvci5jc3MoJ2hzbCcpLFxuICAgICAgICBoZXg6IGNvbG9yLmhleCgpXG4gICAgfTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgX2Nsb25lIH0gZnJvbSBcIi4vY2xvbmVcIjtcbmltcG9ydCB7IGNvbnZlcnRGaWdtYUNvbG9yVG9SZ2IsIHBhcnNlQ29sb3JWYWx1ZSB9IGZyb20gXCIuL2ZpZ21hLWNvbG9yc1wiO1xuaW1wb3J0IHsgZ2V0QWxpYXNOYW1lLCBnZXREZWZhdWx0VmFyaWFibGVWYWx1ZSB9IGZyb20gXCIuL2ZpZ21hLXZhcmlhYmxlc1wiO1xuaW1wb3J0IHsgcmVzb2x2ZUdsb2JhbFRva2VuVmFsdWUsIGZpbmRWYXJpYWJsZUJ5UmVmZXJlbmNlcywgZ2V0R2xvYmFsVG9rZW5zRGljdGlvbmFyeSB9IGZyb20gXCIuL3Rva2VuLXJlZmVyZW5jZXNcIjtcbmxldCBnbG9iYWxEaWN0aW9uYXJ5O1xuLypcbiAgICBUaGlzIG1ldGhvZCByZWFkcyBzaGFkb3cgY29sb3IgdmFsdWVzIGRpcmVjdGx5IGZyb20gRmlnbWEgVmFyaWFibGVzXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGltcG9ydEVmZmVjdFN0eWxlcyh0b2tlbnMsIGRpY3Rpb25hcnkpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoZGljdGlvbmFyeSkge1xuICAgICAgICAgICAgZ2xvYmFsRGljdGlvbmFyeSA9IGRpY3Rpb25hcnk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBbbmFtZSwgdG9rZW5EYXRhXSBvZiBPYmplY3QuZW50cmllcyh0b2tlbnMpKSB7XG4gICAgICAgICAgICBsZXQgdG9rZW4gPSB0b2tlbkRhdGE7XG4gICAgICAgICAgICBpZiAodG9rZW4uJHR5cGUgPT0gJ2VmZmVjdCcpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmlnbWFTdHlsZSA9IHlpZWxkIGdldFN0eWxlQnlOYW1lKG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghZmlnbWFTdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICBmaWdtYVN0eWxlID0gZmlnbWEuY3JlYXRlRWZmZWN0U3R5bGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdG9rZW4uJHZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVmZmVjdHMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVmZmVjdFZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlZmZlY3QgPSB5aWVsZCBjb252ZXJ0RWZmZWN0U3R5bGVUb0ZpZ21hKGVmZmVjdFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0cy5wdXNoKGVmZmVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpZ21hU3R5bGUubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICAgICAgZmlnbWFTdHlsZS5lZmZlY3RzID0gZWZmZWN0cztcbiAgICAgICAgICAgICAgICBmaWdtYVN0eWxlLmRlc2NyaXB0aW9uID0gdG9rZW4uZGVzY3JpcHRpb24gfHwgZmlnbWFTdHlsZS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gY29udmVydEVmZmVjdFN0eWxlVG9GaWdtYSh2YWx1ZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHsgZWZmZWN0VG9rZW5WYWx1ZSwgYm91bmRQcm9wcyB9ID0geWllbGQgcmVzb2x2ZUJvdW5kVmFsdWVzKHZhbHVlKTtcbiAgICAgICAgbGV0IGVmZmVjdCA9IHtcbiAgICAgICAgICAgIHR5cGU6IGVmZmVjdFRva2VuVmFsdWUudHlwZSxcbiAgICAgICAgICAgIHJhZGl1czogZWZmZWN0VG9rZW5WYWx1ZS5yYWRpdXMsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGlmIChlZmZlY3RUb2tlblZhbHVlLnR5cGUgPT0gJ0lOTkVSX1NIQURPVycgfHwgZWZmZWN0VG9rZW5WYWx1ZS50eXBlID09ICdEUk9QX1NIQURPVycpIHtcbiAgICAgICAgICAgIGVmZmVjdCA9IE9iamVjdC5hc3NpZ24oZWZmZWN0LCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGZpZ21hLnV0aWwucmdiYShlZmZlY3RUb2tlblZhbHVlLmNvbG9yKSxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogZWZmZWN0VG9rZW5WYWx1ZS5vZmZzZXRYLFxuICAgICAgICAgICAgICAgICAgICB5OiBlZmZlY3RUb2tlblZhbHVlLm9mZnNldFlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNwcmVhZDogZWZmZWN0VG9rZW5WYWx1ZS5zcHJlYWQsXG4gICAgICAgICAgICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWZmZWN0VG9rZW5WYWx1ZS50eXBlID09ICdEUk9QX1NIQURPVycpIHtcbiAgICAgICAgICAgIGVmZmVjdCA9IE9iamVjdC5hc3NpZ24oZWZmZWN0LCB7XG4gICAgICAgICAgICAgICAgc2hvd1NoYWRvd0JlaGluZE5vZGU6IHBhcnNlQm9vbGVhbihlZmZlY3RUb2tlblZhbHVlLnNob3dTaGFkb3dCZWhpbmROb2RlKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYm91bmRQcm9wcy5mb3JFYWNoKGJvdW5kRGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlZmZlY3RDb3B5ID0gZmlnbWEudmFyaWFibGVzLnNldEJvdW5kVmFyaWFibGVGb3JFZmZlY3QoZWZmZWN0LCBib3VuZERhdGEucHJvcE5hbWUsIGJvdW5kRGF0YS52YXJpYWJsZSk7XG4gICAgICAgICAgICBpZiAoZWZmZWN0LnR5cGUgPT0gXCJEUk9QX1NIQURPV1wiIHx8IGVmZmVjdC50eXBlID09ICdJTk5FUl9TSEFET1cnKSB7XG4gICAgICAgICAgICAgICAgZWZmZWN0Q29weS5zcHJlYWQgPSBlZmZlY3RUb2tlblZhbHVlLnNwcmVhZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVmZmVjdCA9IGVmZmVjdENvcHk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZWZmZWN0O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcmVzb2x2ZUJvdW5kVmFsdWVzKGVmZmVjdFZhbHVlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IGNvcHkgPSBfY2xvbmUoZWZmZWN0VmFsdWUpO1xuICAgICAgICBsZXQgYm91bmRQcm9wcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gY29weSkge1xuICAgICAgICAgICAgY29uc3QgZmlnbWFWYXJpYWJsZSA9IHlpZWxkIGZpbmRWYXJpYWJsZUJ5UmVmZXJlbmNlcyhjb3B5W3Byb3BdKTtcbiAgICAgICAgICAgIGlmIChmaWdtYVZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgYm91bmRQcm9wcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcE5hbWU6IHByb3AsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlOiBmaWdtYVZhcmlhYmxlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0geWllbGQgZ2V0RGVmYXVsdFZhcmlhYmxlVmFsdWUoZmlnbWFWYXJpYWJsZSk7XG4gICAgICAgICAgICAgICAgY29weVtwcm9wXSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB2YWwgPSByZXNvbHZlR2xvYmFsVG9rZW5WYWx1ZShjb3B5W3Byb3BdLCBnbG9iYWxEaWN0aW9uYXJ5IHx8IGdldEdsb2JhbFRva2Vuc0RpY3Rpb25hcnkoKSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb3AgPT0gJ2NvbG9yJykge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSBwYXJzZUNvbG9yVmFsdWUodmFsKS5yZ2I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvcHlbcHJvcF0gPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZWZmZWN0VG9rZW5WYWx1ZTogY29weSwgYm91bmRQcm9wcyB9O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0TG9jYWxTdHlsZXMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgcmV0dXJuIHlpZWxkIGZpZ21hLmdldExvY2FsRWZmZWN0U3R5bGVzQXN5bmMoKTtcbiAgICB9KTtcbn1cbjtcbmZ1bmN0aW9uIGdldFN0eWxlQnlOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBzdHlsZXNCeVR5cGUgPSB5aWVsZCBnZXRMb2NhbFN0eWxlcygpO1xuICAgICAgICBjb25zdCBtYXRjaCA9IHN0eWxlc0J5VHlwZS5maW5kKChzdHlsZSkgPT4gc3R5bGUubmFtZSA9PT0gbmFtZSk7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbjtcbmZ1bmN0aW9uIHBhcnNlQm9vbGVhbih2YWwpIHtcbiAgICBpZiAodHlwZW9mIHZhbCA9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbCAhPT0gXCJmYWxzZVwiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRGaWdtYUVmZmVjdFN0eWxlVG9Ub2tlbihzdHlsZSwgY29sb3JGb3JtYXQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBlZmZlY3RzID0gc3R5bGUuZWZmZWN0cztcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgICAgIGZvciAodmFyIGVmZmVjdCBvZiBlZmZlY3RzKSB7XG4gICAgICAgICAgICB2YWx1ZXMucHVzaCh5aWVsZCBjb252ZXJ0RmlnbWFTaGFkb3dFZmZlY3RUb1Rva2VuKGVmZmVjdCwgY29sb3JGb3JtYXQpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY29udmVydEZpZ21hU2hhZG93RWZmZWN0VG9Ub2tlbihlZmZlY3QsIGNvbG9yRm9ybWF0KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IGVmZmVjdFRva2VuVmFsdWUgPSB7XG4gICAgICAgICAgICBcInR5cGVcIjogZWZmZWN0LnR5cGUsXG4gICAgICAgICAgICBcInJhZGl1c1wiOiBlZmZlY3QucmFkaXVzLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoZWZmZWN0LnR5cGUgPT0gXCJEUk9QX1NIQURPV1wiIHx8IGVmZmVjdC50eXBlID09IFwiSU5ORVJfU0hBRE9XXCIpIHtcbiAgICAgICAgICAgIGVmZmVjdFRva2VuVmFsdWUgPSBPYmplY3QuYXNzaWduKGVmZmVjdFRva2VuVmFsdWUsIHtcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IGNvbnZlcnRGaWdtYUNvbG9yVG9SZ2IoZWZmZWN0LmNvbG9yLCBjb2xvckZvcm1hdCksXG4gICAgICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogZWZmZWN0LmJsZW5kTW9kZSxcbiAgICAgICAgICAgICAgICBcIm9mZnNldFhcIjogZWZmZWN0Lm9mZnNldC54LFxuICAgICAgICAgICAgICAgIFwib2Zmc2V0WVwiOiBlZmZlY3Qub2Zmc2V0LnksXG4gICAgICAgICAgICAgICAgXCJzcHJlYWRcIjogZWZmZWN0LnNwcmVhZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlZmZlY3QudHlwZSA9PSBcIkRST1BfU0hBRE9XXCIpIHtcbiAgICAgICAgICAgIGVmZmVjdFRva2VuVmFsdWUgPSBPYmplY3QuYXNzaWduKGVmZmVjdFRva2VuVmFsdWUsIHtcbiAgICAgICAgICAgICAgICBcInNob3dTaGFkb3dCZWhpbmROb2RlXCI6IGAke2VmZmVjdC5zaG93U2hhZG93QmVoaW5kTm9kZSB8fCBmYWxzZX1gXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gZWZmZWN0LmJvdW5kVmFyaWFibGVzKSB7XG4gICAgICAgICAgICBjb25zdCBib3VuZFZhcmlhYmxlID0gZWZmZWN0LmJvdW5kVmFyaWFibGVzW3Byb3BdO1xuICAgICAgICAgICAgZWZmZWN0VG9rZW5WYWx1ZVtwcm9wXSA9IHlpZWxkIGdldEFsaWFzTmFtZShib3VuZFZhcmlhYmxlLmlkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWZmZWN0VG9rZW5WYWx1ZTtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY29uc3Qgc3RvcmUgPSBuZXcgTWFwKCk7XG5sZXQgc2VsZWN0ZWRMaWJyYXJ5TmFtZTtcbmV4cG9ydCBjb25zdCBMT0NBTF9MSUJfTkFNRSA9IFwiTG9jYWwgdmFyaWFibGVzXCI7XG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmVEYXRhKHJlZnJlc2ggPSBmYWxzZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChyZWZyZXNoID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdG9yZS5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxvY2FsTGlicmFyeVZhcmlhYmxlcyA9IHlpZWxkIGNvbGxlY3RMb2NhbFZhcmlhYmxlcygpO1xuICAgICAgICBpZiAobG9jYWxMaWJyYXJ5VmFyaWFibGVzKSB7XG4gICAgICAgICAgICBzdG9yZS5zZXQobG9jYWxMaWJyYXJ5VmFyaWFibGVzLm5hbWUsIGxvY2FsTGlicmFyeVZhcmlhYmxlcy5saWJyYXJ5VmFyaWFibGVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RvcmUuc2l6ZSA+IDEpIHsgLy8gd2hpY2ggbWVhbnNcbiAgICAgICAgICAgIHJldHVybiBzdG9yZTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZWFkIFxuICAgICAgICBjb25zdCBsaWJyYXJ5Q29sbGVjdGlvbnMgPSB5aWVsZCBmaWdtYS50ZWFtTGlicmFyeS5nZXRBdmFpbGFibGVMaWJyYXJ5VmFyaWFibGVDb2xsZWN0aW9uc0FzeW5jKCkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9KTtcbiAgICAgICAgeWllbGQgUHJvbWlzZS5hbGwobGlicmFyeUNvbGxlY3Rpb25zLm1hcCgoY29sbGVjdGlvbikgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGZpZ21hLnRlYW1MaWJyYXJ5LmdldFZhcmlhYmxlc0luTGlicmFyeUNvbGxlY3Rpb25Bc3luYyhjb2xsZWN0aW9uLmtleSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB2YXJpYWJsZXMgPSBzdG9yZS5nZXQoY29sbGVjdGlvbi5saWJyYXJ5TmFtZSkgfHwgW107XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzLmNvbmNhdChkYXRhKTtcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXQoY29sbGVjdGlvbi5saWJyYXJ5TmFtZSwgdmFyaWFibGVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSkpO1xuICAgICAgICByZXR1cm4gc3RvcmU7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjb2xsZWN0TG9jYWxWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVzID0geWllbGQgZmlnbWEudmFyaWFibGVzLmdldExvY2FsVmFyaWFibGVzQXN5bmMoKS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgdGhyb3cgKGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodmFyaWFibGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogTE9DQUxfTElCX05BTUUsXG4gICAgICAgICAgICBsaWJyYXJ5VmFyaWFibGVzOiBbXVxuICAgICAgICB9O1xuICAgICAgICAvLyBjb25zdCBsaWJyYXJ5VmFyaWFibGVzOiBMaWJyYXJ5VmFyaWFibGVbXSA9IHZhcmlhYmxlcy5tYXAodmFyaWFibGUgPT4ge1xuICAgICAgICAvLyAgICAgY29uc3Qge1xuICAgICAgICAvLyAgICAgICAgIGtleSwgcmVzb2x2ZWRUeXBlLCBuYW1lXG4gICAgICAgIC8vICAgICB9ID0gdmFyaWFibGU7XG4gICAgICAgIC8vICAgICByZXR1cm4geyBuYW1lLCBrZXksIHJlc29sdmVkVHlwZSB9O1xuICAgICAgICAvLyB9KVxuICAgICAgICAvLyBpZihsaWJyYXJ5VmFyaWFibGVzLmxlbmd0aCkge1xuICAgICAgICAvLyAgICAgcmV0dXJuIHtuYW1lOiBMT0NBTF9MSUJfTkFNRSwgbGlicmFyeVZhcmlhYmxlc31cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgLy8gICAgIHJldHVybiBudWxsO1xuICAgICAgICAvLyB9XG4gICAgfSk7XG59XG5sZXQgaW1wb3J0ZWRWYXJpYWJsZXNMaWJyYXJ5ID0gW107XG5mdW5jdGlvbiBpbXBvcnRMaWJyYXJ5VmFyaWFibGVzKGxpYnJhcnlOYW1lKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHN0b3JlLmdldChsaWJyYXJ5TmFtZSkgfHwgW107XG4gICAgICAgIGlmIChpbXBvcnRlZFZhcmlhYmxlc0xpYnJhcnkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsKGRhdGEubWFwKChyZWNvcmQpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgZmlnbWEudmFyaWFibGVzLmltcG9ydFZhcmlhYmxlQnlLZXlBc3luYyhyZWNvcmQua2V5KS50aGVuKHZhcmlhYmxlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0ZWRWYXJpYWJsZXNMaWJyYXJ5LnB1c2godmFyaWFibGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW1wb3J0ZWRWYXJpYWJsZXNMaWJyYXJ5O1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZSgpIHtcbiAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgc3RvcmUuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRMaWJyYXJ5KCkge1xuICAgIHJldHVybiBzZWxlY3RlZExpYnJhcnlOYW1lIHx8IExPQ0FMX0xJQl9OQU1FO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlbGVjdGVkTGlicmFyeShuYW1lKSB7XG4gICAgc2VsZWN0ZWRMaWJyYXJ5TmFtZSA9IG5hbWU7XG4gICAgcmV0dXJuIHNlbGVjdGVkTGlicmFyeU5hbWU7XG59XG5leHBvcnQgZnVuY3Rpb24gZmluZFZhcmlhYmxlQnlOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGxpYnJhcnlOYW1lID0gZ2V0U2VsZWN0ZWRMaWJyYXJ5KCk7XG4gICAgICAgIGlmIChsaWJyYXJ5TmFtZSA9PSBMT0NBTF9MSUJfTkFNRSkge1xuICAgICAgICAgICAgY29uc3QgZmlnbWFWYXJpYWJsZXMgPSB5aWVsZCBmaWdtYS52YXJpYWJsZXMuZ2V0TG9jYWxWYXJpYWJsZXNBc3luYygpO1xuICAgICAgICAgICAgcmV0dXJuIGZpZ21hVmFyaWFibGVzLmZpbmQodmFyaWFibGUgPT4gdmFyaWFibGUubmFtZSA9PT0gdmFyaWFibGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdG9yZSA9IHlpZWxkIGdldFN0b3JlRGF0YSgpO1xuICAgICAgICBjb25zdCB2YXJpYWJsZXMgPSB5aWVsZCBpbXBvcnRMaWJyYXJ5VmFyaWFibGVzKGxpYnJhcnlOYW1lKTtcbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlcy5maW5kKHZhcmlhYmxlID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2YXJpYWJsZS5uYW1lID09IHZhcmlhYmxlTmFtZTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzZXQobmFtZSwgZGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHN0b3JlLnNldChuYW1lLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0KG5hbWUpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0KG5hbWUpO1xufVxuZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBzdG9yZS5kZWxldGUobmFtZSk7XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNsZWFyU3RvcmUoKSB7XG4gICAgc3RvcmUuY2xlYXIoKTtcbiAgICByZXR1cm4gc3RvcmU7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IF9jbG9uZSB9IGZyb20gXCIuL2Nsb25lXCI7XG5pbXBvcnQgeyBnZXRBbGlhc05hbWUsIGdldERlZmF1bHRWYXJpYWJsZVZhbHVlIH0gZnJvbSBcIi4vZmlnbWEtdmFyaWFibGVzXCI7XG5pbXBvcnQgeyBmaW5kVmFyaWFibGVCeVJlZmVyZW5jZXMsIGdldEdsb2JhbFRva2Vuc0RpY3Rpb25hcnksIHJlc29sdmVHbG9iYWxUb2tlblZhbHVlIH0gZnJvbSBcIi4vdG9rZW4tcmVmZXJlbmNlc1wiO1xubGV0IGZvbnRMb2FkU3RhdHVzID0gW107XG5mdW5jdGlvbiBwcmVMb2FkRm9udChmb250TmFtZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGZvbnROYW1lQW5kU3R5bGUgPSBgJHtmb250TmFtZS5mYW1pbHl9ICR7Zm9udE5hbWUuc3R5bGV9YDtcbiAgICAgICAgaWYgKGZvbnRMb2FkU3RhdHVzLmluZGV4T2YoZm9udE5hbWVBbmRTdHlsZSkgPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBsb2FkaW5nICR7Zm9udE5hbWVBbmRTdHlsZX1gKTtcbiAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoZm9udE5hbWUpLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9udExvYWRTdGF0dXMucHVzaChmb250TmFtZUFuZFN0eWxlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGBhbHJlYWR5IGRvbmUgd2l0aCAke2ZvbnROYW1lQW5kU3R5bGV9YCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbXBvcnRUZXh0U3R5bGVzKHRva2Vucykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGZvbnRMb2FkU3RhdHVzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgW25hbWUsIHRva2VuXSBvZiBPYmplY3QuZW50cmllcyh0b2tlbnMpKSB7XG4gICAgICAgICAgICBpZiAodG9rZW4uJHR5cGUgIT0gJ3R5cG9ncmFwaHknKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXNvbHZlZCA9IHlpZWxkIHBhcnNlVmFsdWVzKHRva2VuLiR2YWx1ZSwgdG9rZW5zKTtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBjb252ZXJ0VGV4dFN0eWxlVG9GaWdtYShuYW1lLCByZXNvbHZlZCk7XG4gICAgICAgICAgICBsZXQgZm9udE5hbWUgPSBub3JtYWxpemVkLmZvbnROYW1lO1xuICAgICAgICAgICAgeWllbGQgcHJlTG9hZEZvbnQoZm9udE5hbWUpO1xuICAgICAgICAgICAgbGV0IHRleHRTdHlsZSA9IHlpZWxkIGdldFN0eWxlQnlOYW1lKG5hbWUpO1xuICAgICAgICAgICAgbGV0IG5ld1N0eWxlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIXRleHRTdHlsZSkge1xuICAgICAgICAgICAgICAgIHRleHRTdHlsZSA9IGZpZ21hLmNyZWF0ZVRleHRTdHlsZSgpO1xuICAgICAgICAgICAgICAgIG5ld1N0eWxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJlc2V0XG4gICAgICAgICAgICB0ZXh0U3R5bGUuc2V0Qm91bmRWYXJpYWJsZSgnZm9udFN0eWxlJywgbnVsbCk7XG4gICAgICAgICAgICB0ZXh0U3R5bGUuc2V0Qm91bmRWYXJpYWJsZSgnbGluZUhlaWdodCcsIG51bGwpO1xuICAgICAgICAgICAgdGV4dFN0eWxlLnNldEJvdW5kVmFyaWFibGUoJ2ZvbnRTaXplJywgbnVsbCk7XG4gICAgICAgICAgICB0ZXh0U3R5bGUuc2V0Qm91bmRWYXJpYWJsZSgncGFyYWdyYXBoU3BhY2luZycsIG51bGwpO1xuICAgICAgICAgICAgdGV4dFN0eWxlLnNldEJvdW5kVmFyaWFibGUoJ2ZvbnRGYW1pbHknLCBudWxsKTtcbiAgICAgICAgICAgIHRleHRTdHlsZS5zZXRCb3VuZFZhcmlhYmxlKCdmb250U3R5bGUnLCBudWxsKTtcbiAgICAgICAgICAgIGlmICghbmV3U3R5bGUpIHtcbiAgICAgICAgICAgICAgICBmb250TmFtZSA9IF9jbG9uZSh0ZXh0U3R5bGUuZm9udE5hbWUpO1xuICAgICAgICAgICAgICAgIHlpZWxkIHByZUxvYWRGb250KGZvbnROYW1lKTtcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkLmZvbnROYW1lID0gZm9udE5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG5vcm1hbGl6ZWQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dFN0eWxlW2tleV0gPSBub3JtYWxpemVkW2tleV07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZUhlaWdodFZhbHVlID0gdG9rZW4uJHZhbHVlLmxpbmVIZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZUhlaWdodFZhcmlhYmxlID0gdHlwZW9mIGxpbmVIZWlnaHRWYWx1ZSA9PSAnc3RyaW5nJyA/IHlpZWxkIGZpbmRWYXJpYWJsZUJ5UmVmZXJlbmNlcyhsaW5lSGVpZ2h0VmFsdWUpIDogbnVsbDtcbiAgICAgICAgICAgICAgICBjb25zdCBmb250U2l6ZVZhbHVlID0gdG9rZW4uJHZhbHVlLmZvbnRTaXplO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvbnRTaXplVmFyaWFibGUgPSB0eXBlb2YgZm9udFNpemVWYWx1ZSA9PSAnc3RyaW5nJyA/IHlpZWxkIGZpbmRWYXJpYWJsZUJ5UmVmZXJlbmNlcyhmb250U2l6ZVZhbHVlKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYWdyYXBoU3BhY2luZ1ZhbHVlID0gdG9rZW4uJHZhbHVlLnBhcmFncmFwaFNwYWNpbmc7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYWdyYXBoU3BhY2luZ1ZhcmlhYmxlID0gdHlwZW9mIHBhcmFncmFwaFNwYWNpbmdWYWx1ZSA9PSAnc3RyaW5nJyA/IHlpZWxkIGZpbmRWYXJpYWJsZUJ5UmVmZXJlbmNlcyhwYXJhZ3JhcGhTcGFjaW5nVmFsdWUpIDogbnVsbDtcbiAgICAgICAgICAgICAgICBjb25zdCBmb250RmFtaWx5VmFsdWUgPSB0b2tlbi4kdmFsdWUuZm9udEZhbWlseTtcbiAgICAgICAgICAgICAgICBjb25zdCBmb250RmFtaWx5VmFyaWFibGUgPSB0eXBlb2YgZm9udEZhbWlseVZhbHVlID09ICdzdHJpbmcnID8geWllbGQgZmluZFZhcmlhYmxlQnlSZWZlcmVuY2VzKGZvbnRGYW1pbHlWYWx1ZSkgOiBudWxsO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvbnRTdHlsZVZhbHVlID0gdG9rZW4uJHZhbHVlLmZvbnRTdHlsZTtcbiAgICAgICAgICAgICAgICBjb25zdCBmb250U3R5bGVWYXJpYWJsZSA9IHR5cGVvZiBmb250U3R5bGVWYWx1ZSA9PSAnc3RyaW5nJyA/IHlpZWxkIGZpbmRWYXJpYWJsZUJ5UmVmZXJlbmNlcyhmb250U3R5bGVWYWx1ZSkgOiBudWxsO1xuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHRWYXJpYWJsZSAmJiB0ZXh0U3R5bGUuc2V0Qm91bmRWYXJpYWJsZSgnbGluZUhlaWdodCcsIGxpbmVIZWlnaHRWYXJpYWJsZSk7XG4gICAgICAgICAgICAgICAgZm9udFNpemVWYXJpYWJsZSAmJiB0ZXh0U3R5bGUuc2V0Qm91bmRWYXJpYWJsZSgnZm9udFNpemUnLCBmb250U2l6ZVZhcmlhYmxlKTtcbiAgICAgICAgICAgICAgICBwYXJhZ3JhcGhTcGFjaW5nVmFyaWFibGUgJiYgdGV4dFN0eWxlLnNldEJvdW5kVmFyaWFibGUoJ3BhcmFncmFwaFNwYWNpbmcnLCBwYXJhZ3JhcGhTcGFjaW5nVmFyaWFibGUpO1xuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHlWYXJpYWJsZSAmJiB0ZXh0U3R5bGUuc2V0Qm91bmRWYXJpYWJsZSgnZm9udEZhbWlseScsIGZvbnRGYW1pbHlWYXJpYWJsZSk7XG4gICAgICAgICAgICAgICAgZm9udFN0eWxlVmFyaWFibGUgJiYgdGV4dFN0eWxlLnNldEJvdW5kVmFyaWFibGUoJ2ZvbnRTdHlsZScsIGZvbnRTdHlsZVZhcmlhYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHBhcnNlVmFsdWVzKHZhbHVlLCBkaWN0aW9uYXJ5KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IG91dHB1dCA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHRva2VuUmVmZXJlbmNlXSBvZiBPYmplY3QuZW50cmllcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc29sdmVkVmFyaWFibGUgPSB5aWVsZCBmaW5kVmFyaWFibGVCeVJlZmVyZW5jZXModG9rZW5SZWZlcmVuY2UpO1xuICAgICAgICAgICAgaWYgKHJlc29sdmVkVmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXRba2V5XSA9IHlpZWxkIGdldERlZmF1bHRWYXJpYWJsZVZhbHVlKHJlc29sdmVkVmFyaWFibGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRWYWx1ZSA9IHJlc29sdmVHbG9iYWxUb2tlblZhbHVlKHRva2VuUmVmZXJlbmNlLCBkaWN0aW9uYXJ5IHx8IGdldEdsb2JhbFRva2Vuc0RpY3Rpb25hcnkoKSk7XG4gICAgICAgICAgICAgICAgb3V0cHV0W2tleV0gPSByZXNvbHZlZFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRMb2NhbFN0eWxlcygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICByZXR1cm4geWllbGQgZmlnbWEuZ2V0TG9jYWxUZXh0U3R5bGVzQXN5bmMoKTtcbiAgICB9KTtcbn1cbjtcbmZ1bmN0aW9uIGdldFN0eWxlQnlOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBzdHlsZXNCeVR5cGUgPSB5aWVsZCBnZXRMb2NhbFN0eWxlcygpO1xuICAgICAgICBjb25zdCBtYXRjaCA9IHN0eWxlc0J5VHlwZS5maW5kKChzdHlsZSkgPT4gc3R5bGUubmFtZSA9PT0gbmFtZSk7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbjtcbmZ1bmN0aW9uIGNvbnZlcnRUZXh0Q2FzZVRvRmlnbWEodmFsdWUpIHtcbiAgICBzd2l0Y2ggKHZhbHVlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgY2FzZSAndXBwZXJjYXNlJzpcbiAgICAgICAgY2FzZSAndXBwZXInOlxuICAgICAgICAgICAgcmV0dXJuICdVUFBFUic7XG4gICAgICAgIGNhc2UgJ2xvd2VyY2FzZSc6XG4gICAgICAgIGNhc2UgJ2xvd2VyJzpcbiAgICAgICAgICAgIHJldHVybiAnTE9XRVInO1xuICAgICAgICBjYXNlICdjYXBpdGFsaXplJzpcbiAgICAgICAgY2FzZSAndGl0bGUnOlxuICAgICAgICAgICAgcmV0dXJuICdUSVRMRSc7XG4gICAgICAgIGNhc2UgJ3NtYWxsLWNhcHMnOlxuICAgICAgICBjYXNlICdzbWFsbF9jYXBzJzpcbiAgICAgICAgICAgIHJldHVybiAnU01BTExfQ0FQUyc7XG4gICAgICAgIGNhc2UgJ2FsbC1zbWFsbC1jYXBzJzpcbiAgICAgICAgY2FzZSAnc21hbGxfY2Fwc19mb3JjZWQnOlxuICAgICAgICAgICAgcmV0dXJuICdTTUFMTF9DQVBTX0ZPUkNFRCc7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJ09SSUdJTkFMJztcbiAgICB9XG59XG5mdW5jdGlvbiBjb252ZXJ0VGV4dERlY29yYXRpb25Ub0ZpZ21hKHZhbHVlKSB7XG4gICAgc3dpdGNoICh2YWx1ZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgJ3VuZGVybGluZSc6XG4gICAgICAgICAgICByZXR1cm4gJ1VOREVSTElORSc7XG4gICAgICAgIGNhc2UgJ2xpbmUtdGhyb3VnaCc6XG4gICAgICAgIGNhc2UgJ3N0cmlrZXRocm91Z2gnOlxuICAgICAgICAgICAgcmV0dXJuICdTVFJJS0VUSFJPVUdIJztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnTk9ORSc7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0TGV0dGVyU3BhY2luZyh2YWx1ZSkge1xuICAgIHJldHVybiBnZXRWYWx1ZVVuaXQodmFsdWUpO1xufVxuZnVuY3Rpb24gZ2V0VmFsdWVVbml0KHZhbHVlKSB7XG4gICAgY29uc3Qgc3RyaW5nVmFsdWUgPSBgJHt2YWx1ZX1gO1xuICAgIGlmICh2YWx1ZSA9PT0gJ0FVVE8nKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bml0OiBcIkFVVE9cIlxuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoc3RyaW5nVmFsdWUuaW5jbHVkZXMoJyUnKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdW5pdDogXCJQRVJDRU5UXCIsXG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdChzdHJpbmdWYWx1ZSlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bml0OiBcIlBJWEVMU1wiLFxuICAgICAgICAgICAgdmFsdWU6IHBhcnNlRmxvYXQoc3RyaW5nVmFsdWUpXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUZXh0U3R5bGVUb0ZpZ21hKG5hbWUsIHZhbHVlcykge1xuICAgIGxldCB0ZXh0U3R5bGUgPSB7XG4gICAgICAgICduYW1lJzogbmFtZSxcbiAgICAgICAgJ2ZvbnRTaXplJzogcGFyc2VGbG9hdChgJHt2YWx1ZXMuZm9udFNpemV9YCksXG4gICAgICAgICd0ZXh0RGVjb3JhdGlvbic6IGNvbnZlcnRUZXh0RGVjb3JhdGlvblRvRmlnbWEodmFsdWVzLnRleHREZWNvcmF0aW9uKSxcbiAgICAgICAgJ2ZvbnROYW1lJzoge1xuICAgICAgICAgICAgZmFtaWx5OiB2YWx1ZXMuZm9udEZhbWlseSxcbiAgICAgICAgICAgIHN0eWxlOiB2YWx1ZXMuZm9udFN0eWxlXG4gICAgICAgIH0sXG4gICAgICAgICdsZXR0ZXJTcGFjaW5nJzogZ2V0TGV0dGVyU3BhY2luZyh2YWx1ZXMubGV0dGVyU3BhY2luZyksXG4gICAgICAgICdsaW5lSGVpZ2h0JzogZ2V0VmFsdWVVbml0KHZhbHVlcy5saW5lSGVpZ2h0KSxcbiAgICAgICAgJ2xlYWRpbmdUcmltJzogXCJOT05FXCIsXG4gICAgICAgICdwYXJhZ3JhcGhJbmRlbnQnOiAwLFxuICAgICAgICAncGFyYWdyYXBoU3BhY2luZyc6IHBhcnNlSW50KGAke3ZhbHVlcy5wYXJhZ3JhcGhTcGFjaW5nfWApIHx8IDAsXG4gICAgICAgICdsaXN0U3BhY2luZyc6IHBhcnNlRmxvYXQoYCR7dmFsdWVzLmxpc3RTcGFjaW5nfWApIHx8IDAsXG4gICAgICAgICdoYW5naW5nUHVuY3R1YXRpb24nOiBmYWxzZSxcbiAgICAgICAgJ2hhbmdpbmdMaXN0JzogZmFsc2UsXG4gICAgICAgICd0ZXh0Q2FzZSc6IGNvbnZlcnRUZXh0Q2FzZVRvRmlnbWEodmFsdWVzLnRleHRDYXNlKVxuICAgIH07XG4gICAgcmV0dXJuIHRleHRTdHlsZTtcbn1cbmZ1bmN0aW9uIGdldFVuaXRWYWx1ZSh1bml0VmFsdWUpIHtcbiAgICBpZiAodW5pdFZhbHVlLnVuaXQgPT0gXCJBVVRPXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiQVVUT1wiO1xuICAgIH1cbiAgICBpZiAodW5pdFZhbHVlLnVuaXQgPT0gXCJQRVJDRU5UXCIpIHtcbiAgICAgICAgcmV0dXJuIGAke3VuaXRWYWx1ZS52YWx1ZX0lYDtcbiAgICB9XG4gICAgcmV0dXJuIHVuaXRWYWx1ZS52YWx1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RmlnbWFUZXh0U3R5bGVUb1Rva2VuKHN0eWxlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IHR5cG9ncmFwaHlUb2tlblZhbHVlID0ge1xuICAgICAgICAgICAgXCJmb250RmFtaWx5XCI6IHN0eWxlLmZvbnROYW1lLmZhbWlseSxcbiAgICAgICAgICAgIFwibGluZUhlaWdodFwiOiBnZXRVbml0VmFsdWUoc3R5bGUubGluZUhlaWdodCksXG4gICAgICAgICAgICBcImZvbnRTaXplXCI6IHN0eWxlLmZvbnRTaXplLFxuICAgICAgICAgICAgXCJsZXR0ZXJTcGFjaW5nXCI6IGdldFVuaXRWYWx1ZShzdHlsZS5sZXR0ZXJTcGFjaW5nKSxcbiAgICAgICAgICAgIFwibGlzdFNwYWNpbmdcIjogc3R5bGUubGlzdFNwYWNpbmcsXG4gICAgICAgICAgICBcInBhcmFncmFwaFNwYWNpbmdcIjogc3R5bGUucGFyYWdyYXBoU3BhY2luZyxcbiAgICAgICAgICAgIFwiZm9udFN0eWxlXCI6IHN0eWxlLmZvbnROYW1lLnN0eWxlLFxuICAgICAgICAgICAgXCJ0ZXh0Q2FzZVwiOiBzdHlsZS50ZXh0Q2FzZSxcbiAgICAgICAgICAgIFwidGV4dERlY29yYXRpb25cIjogc3R5bGUudGV4dERlY29yYXRpb24sXG4gICAgICAgIH07XG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBzdHlsZS5ib3VuZFZhcmlhYmxlcykge1xuICAgICAgICAgICAgY29uc3QgYm91bmRWYXJpYWJsZSA9IHN0eWxlLmJvdW5kVmFyaWFibGVzW3Byb3BdO1xuICAgICAgICAgICAgdHlwb2dyYXBoeVRva2VuVmFsdWVbcHJvcF0gPSB5aWVsZCBnZXRBbGlhc05hbWUoYm91bmRWYXJpYWJsZS5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR5cG9ncmFwaHlUb2tlblZhbHVlO1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgKiBhcyBmaWdsaWIgZnJvbSAnLi9maWdtYS1saWJyYXJ5LXZhcmlhYmxlcyc7XG5leHBvcnQgZnVuY3Rpb24gZmlnbWFBbGlhc1RvRGVzaWduVG9rZW5zKGFsaWFzKSB7XG4gICAgcmV0dXJuIGFsaWFzLnJlcGxhY2UoL1xcLy9nLCBcIi5cIik7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVzaWduVG9rZW5BbGlhc1RvRmlnbWEoYWxpYXMpIHtcbiAgICByZXR1cm4gYWxpYXMucmVwbGFjZSgvXFwuL2csIFwiL1wiKTtcbn1cbmZ1bmN0aW9uIGZpbmRWYXJpYWJsZUluQ29sbGVjdGlvbih2YXJpYWJsZU5hbWUsIGNvbGxlY3Rpb25OYW1lKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgZmlnbWFDb2xsZWN0aW9ucyA9IHlpZWxkIGZpZ21hLnZhcmlhYmxlcy5nZXRMb2NhbFZhcmlhYmxlQ29sbGVjdGlvbnNBc3luYygpO1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gZmlnbWFDb2xsZWN0aW9ucy5maW5kKGNvbGxlY3Rpb24gPT4gY29sbGVjdGlvbi5uYW1lID09PSBjb2xsZWN0aW9uTmFtZSk7XG4gICAgICAgIGxldCBmaWdtYVZpcmFibGU7XG4gICAgICAgIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlkIG9mIGNvbGxlY3Rpb24udmFyaWFibGVJZHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWdtYVZhcmlhYmxlSW5Db2xsZWNpdG9uID0geWllbGQgZmlnbWEudmFyaWFibGVzLmdldFZhcmlhYmxlQnlJZEFzeW5jKGlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IChmaWdtYVZhcmlhYmxlSW5Db2xsZWNpdG9uID09PSBudWxsIHx8IGZpZ21hVmFyaWFibGVJbkNvbGxlY2l0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZpZ21hVmFyaWFibGVJbkNvbGxlY2l0b24ubmFtZSkgPT09IHZhcmlhYmxlTmFtZTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlnbWFWaXJhYmxlID0gZmlnbWFWYXJpYWJsZUluQ29sbGVjaXRvbjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWdtYVZpcmFibGU7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmluZEZpZ21hVmFyaWFibGVCeU5hbWUodmFyaWFibGVOYW1lLCBjb2xsZWN0aW9uTmFtZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChjb2xsZWN0aW9uTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGZpbmRWYXJpYWJsZUluQ29sbGVjdGlvbih2YXJpYWJsZU5hbWUsIGNvbGxlY3Rpb25OYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlnbGliLmZpbmRWYXJpYWJsZUJ5TmFtZSh2YXJpYWJsZU5hbWUpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGaWdtYVZhcmlhYmxlQ29sbGVjdGlvbkJ5TmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgZmlnbWFDb2xsZWN0aW9ucyA9IHlpZWxkIGZpZ21hLnZhcmlhYmxlcy5nZXRMb2NhbFZhcmlhYmxlQ29sbGVjdGlvbnNBc3luYygpO1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gZmlnbWFDb2xsZWN0aW9ucy5maW5kKGNvbGxlY3Rpb24gPT4gY29sbGVjdGlvbi5uYW1lID09PSBuYW1lKTtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24gfHwgbnVsbDtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWdtYUNvbGxlY3Rpb24obmFtZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCBpc05ldyA9IGZhbHNlO1xuICAgICAgICBsZXQgY29sbGVjdGlvbiA9IHlpZWxkIGZpbmRGaWdtYVZhcmlhYmxlQ29sbGVjdGlvbkJ5TmFtZShuYW1lKTtcbiAgICAgICAgaWYgKCFjb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICBpc05ldyA9IHRydWU7XG4gICAgICAgICAgICBjb2xsZWN0aW9uID0gZmlnbWEudmFyaWFibGVzLmNyZWF0ZVZhcmlhYmxlQ29sbGVjdGlvbihuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBjb2xsZWN0aW9uLCBpc05ldyB9O1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVWYXJpYWJsZVR5cGUodHlwZU5hbWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVOYW1lKSB7XG4gICAgICAgIGNhc2UgJ2NvbG9yJzogcmV0dXJuICdDT0xPUic7XG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOiByZXR1cm4gJ0JPT0xFQU4nO1xuICAgICAgICBjYXNlICdudW1iZXInOiByZXR1cm4gJ0ZMT0FUJztcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuICdTVFJJTkcnO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWdtYVZhcmlhYmxlKGNvbGxlY3Rpb24sIG1vZGVJZCwgdHlwZSwgdmFyaWFibGVOYW1lLCB2YWx1ZSA9IG51bGwsIHNjb3BlcyA9IFsnQUxMX1NDT1BFUyddLCBkZXNjcmlwdGlvbiA9IG51bGwpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgZmlnbWFWYXJpYWJsZSA9IHlpZWxkIGZpbmRGaWdtYVZhcmlhYmxlQnlOYW1lKHZhcmlhYmxlTmFtZSwgY29sbGVjdGlvbi5uYW1lKTtcbiAgICAgICAgaWYgKCFmaWdtYVZhcmlhYmxlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZpZ21hVmFyaWFibGUgPSBmaWdtYS52YXJpYWJsZXMuY3JlYXRlVmFyaWFibGUodmFyaWFibGVOYW1lLCBjb2xsZWN0aW9uLCB0eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZpZ21hVmFyaWFibGUuc2V0VmFsdWVGb3JNb2RlKG1vZGVJZCwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmaWdtYVZhcmlhYmxlLnNjb3BlcyA9IHNjb3BlcztcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZpZ21hVmFyaWFibGUuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlnbWFWYXJpYWJsZTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGlhc05hbWUoaWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IHlpZWxkIGZpZ21hLnZhcmlhYmxlcy5nZXRWYXJpYWJsZUJ5SWRBc3luYyhpZCk7XG4gICAgICAgIHJldHVybiBgeyR7ZmlnbWFBbGlhc1RvRGVzaWduVG9rZW5zKHZhcmlhYmxlLm5hbWUpfX1gO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhYmxlTmFtZVRvT2JqZWN0KHsgbmFtZSwgdGFyZ2V0T2JqZWN0IH0pIHtcbiAgICBsZXQgb2JqID0gdGFyZ2V0T2JqZWN0O1xuICAgIG5hbWUuc3BsaXQoXCIvXCIpLmZvckVhY2goKGdyb3VwTmFtZSkgPT4ge1xuICAgICAgICBvYmpbZ3JvdXBOYW1lXSA9IG9ialtncm91cE5hbWVdIHx8IHt9O1xuICAgICAgICBvYmogPSBvYmpbZ3JvdXBOYW1lXTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRWYXJpYWJsZVZhbHVlKGZpZ21hVmFyaWFibGUsIG1vZGVJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25JRCA9IGZpZ21hVmFyaWFibGUudmFyaWFibGVDb2xsZWN0aW9uSWQ7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSB5aWVsZCBmaWdtYS52YXJpYWJsZXMuZ2V0VmFyaWFibGVDb2xsZWN0aW9uQnlJZEFzeW5jKGNvbGxlY3Rpb25JRCk7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IGZpZ21hVmFyaWFibGUudmFsdWVzQnlNb2RlW21vZGVJZCB8fCBjb2xsZWN0aW9uLmRlZmF1bHRNb2RlSWRdO1xuICAgICAgICBpZiAoZGVmYXVsdFZhbHVlWyd0eXBlJ10gPT0gXCJWQVJJQUJMRV9BTElBU1wiKSB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZSA9IHlpZWxkIGZpZ21hLnZhcmlhYmxlcy5nZXRWYXJpYWJsZUJ5SWRBc3luYyhkZWZhdWx0VmFsdWVbJ2lkJ10pO1xuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGdldERlZmF1bHRWYXJpYWJsZVZhbHVlKHZhcmlhYmxlLCBtb2RlSWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW5PYmplY3QoZGF0YSkge1xuICAgIGNvbnN0IHRva2VucyA9IHt9O1xuICAgIE9iamVjdC5lbnRyaWVzKGRhdGEpLmZvckVhY2goKFtrZXksIG9iamVjdF0pID0+IHtcbiAgICAgICAgdHJhdmVyc2VUb2tlbih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBvYmplY3QsXG4gICAgICAgICAgICB0b2tlbnMsXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG5mdW5jdGlvbiB0cmF2ZXJzZVRva2VuKHsga2V5LCBvYmplY3QsIHRva2VucywgfSkge1xuICAgIGlmICghb2JqZWN0KVxuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAvLyBpZiBrZXkgaXMgYSBtZXRhIGZpZWxkLCBtb3ZlIG9uXG4gICAgaWYgKGtleS5jaGFyQXQoMCkgPT09IFwiJFwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC4kdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0b2tlbnNba2V5XSA9IE9iamVjdC5hc3NpZ24oe30sIG9iamVjdCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBPYmplY3QuZW50cmllcyhvYmplY3QpLmZvckVhY2goKFtrZXkyLCBvYmplY3QyXSkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleTIuY2hhckF0KDApICE9PSBcIiRcIikge1xuICAgICAgICAgICAgICAgIHRyYXZlcnNlVG9rZW4oe1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGAke2tleX0vJHtrZXkyfWAsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogb2JqZWN0MixcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5zXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8qKlxuICogU2ltcGxlIG9iamVjdCBjaGVjay5cbiAqIEBwYXJhbSBpdGVtXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QoaXRlbSkge1xuICAgIHJldHVybiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpO1xufVxuLyoqXG4gKiBEZWVwIG1lcmdlIHR3byBvYmplY3RzLlxuICogQHBhcmFtIHRhcmdldFxuICogQHBhcmFtIC4uLnNvdXJjZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9tZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gICAgaWYgKCFzb3VyY2VzLmxlbmd0aClcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFtrZXldKVxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgeyBba2V5XToge30gfSk7XG4gICAgICAgICAgICAgICAgX21lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBfbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcm91bmRUd29EaWdpdHMobnVtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoKG51bSArIE51bWJlci5FUFNJTE9OKSAqIDEwMCkgLyAxMDA7XG59XG5leHBvcnQgZnVuY3Rpb24gcm91bmRPbmVEaWdpdChudW0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgobnVtICsgTnVtYmVyLkVQU0lMT04pICogMTApIC8gMTA7XG59XG4iLCJjb25zdCBzaXplVmFsdWVzT3JkZXIgPSBbXG4gICAgJ25vbmUnLFxuICAgICd4czUnLFxuICAgICd4czUnLFxuICAgICd4czMnLFxuICAgICd4czInLFxuICAgICd4cycsXG4gICAgJ3NtJyxcbiAgICAnYmFzZScsXG4gICAgJ21kJyxcbiAgICAnbGcnLFxuICAgICd4bCcsXG4gICAgJ3hsMicsXG4gICAgJ3hsMycsXG4gICAgJ3hsNCcsXG4gICAgJ3hsNScsXG4gICAgJ3hsNicsXG4gICAgJ3hsNycsXG4gICAgJ3JvdW5kJ1xuXTtcbmNvbnN0IG9wYWNpdHlWYWx1ZXNPcmRlciA9IFtcbiAgICBcIm9wYWNpdHktMFwiLFxuICAgIFwib3BhY2l0eS01XCIsXG4gICAgXCJvcGFjaXR5LTEwXCIsXG4gICAgXCJvcGFjaXR5LTE1XCIsXG4gICAgXCJvcGFjaXR5LTIwXCIsXG4gICAgXCJvcGFjaXR5LTI1XCIsXG4gICAgXCJvcGFjaXR5LTMwXCIsXG4gICAgXCJvcGFjaXR5LTM1XCIsXG4gICAgXCJvcGFjaXR5LTQwXCIsXG4gICAgXCJvcGFjaXR5LTQ1XCIsXG4gICAgXCJvcGFjaXR5LTUwXCIsXG4gICAgXCJvcGFjaXR5LTU1XCIsXG4gICAgXCJvcGFjaXR5LTYwXCIsXG4gICAgXCJvcGFjaXR5LTY1XCIsXG4gICAgXCJvcGFjaXR5LTcwXCIsXG4gICAgXCJvcGFjaXR5LTc1XCIsXG4gICAgXCJvcGFjaXR5LTgwXCIsXG4gICAgXCJvcGFjaXR5LTg1XCIsXG4gICAgXCJvcGFjaXR5LTkwXCIsXG4gICAgXCJvcGFjaXR5LTk1XCIsXG4gICAgXCJvcGFjaXR5LTEwMFwiLFxuXTtcbmNvbnN0IGNvbG9yTmFtZXNPcmRlciA9IFtcbiAgICAnX3Rlc3QnLFxuICAgICdwcmltYXJ5JyxcbiAgICAnYnJhbmQnLFxuICAgICdmaWxsL2Jhc2UnLFxuICAgICdmaWxsL2NvbnRyYXN0JyxcbiAgICAndGV4dC9ibGFjaycsXG4gICAgJ3RleHQvd2hpdGUnLFxuICAgICd0ZXh0L2Jhc2UvNjAwJyxcbiAgICAndGV4dC9iYXNlLzUwMCcsXG4gICAgJ3RleHQvYmFzZS80MDAnLFxuICAgICd0ZXh0L2Jhc2UvYWN0aW9uJyxcbiAgICAndGV4dC9iYXNlL3ByaW1hcnknLFxuICAgICd0ZXh0L2Jhc2UvaW5mbycsXG4gICAgJ3RleHQvYmFzZS9zdWNjZXNzJyxcbiAgICAndGV4dC9iYXNlL3dhcm5pbmcnLFxuICAgICd0ZXh0L2Jhc2UvZGFuZ2VyJyxcbiAgICAndGV4dC9hY2NlbnQvNjAwJyxcbiAgICAndGV4dC9hY2NlbnQvNTAwJyxcbiAgICAndGV4dC9hY2NlbnQvNDAwJyxcbiAgICAndGV4dC9jb250cmFzdC82MDAnLFxuICAgICd0ZXh0L2NvbnRyYXN0LzUwMCcsXG4gICAgJ3RleHQvY29udHJhc3QvNDAwJyxcbiAgICAndGV4dC9jb250cmFzdC9hY3Rpb24nLFxuICAgICd0ZXh0L2NvbnRyYXN0L3ByaW1hcnknLFxuICAgICd0ZXh0L2NvbnRyYXN0L2luZm8nLFxuICAgICd0ZXh0L2NvbnRyYXN0L3N1Y2Nlc3MnLFxuICAgICd0ZXh0L2NvbnRyYXN0L3dhcm5pbmcnLFxuICAgICd0ZXh0L2NvbnRyYXN0L2RhbmdlcicsXG4gICAgJ3N0cm9rZS9iYXNlJyxcbiAgICAnc3Ryb2tlL2NvbnRyYXN0JyxcbiAgICAnaW5mbycsXG4gICAgJ3N1Y2Nlc3MnLFxuICAgICd3YXJuaW5nJyxcbiAgICAnZGFuZ2VyJyxcbiAgICAnYWx0L2Jhc2UnLFxuICAgICdhbHQvY29udHJhc3QnLFxuICAgICd1dGlsaXR5JyxcbiAgICAnYWNjZW50L3JlZCcsXG4gICAgJ2FjY2VudC9hbWJlcicsXG4gICAgJ2FjY2VudC9icm93bicsXG4gICAgJ2FjY2VudC9ncmVlbicsXG4gICAgJ2FjY2VudC90ZWFsJyxcbiAgICAnYWNjZW50L2N5YW4nLFxuICAgICdhY2NlbnQvYmx1ZScsXG4gICAgJ2FjY2VudC9pbmRpZ28nLFxuICAgICdhY2NlbnQvdmlvbGV0JyxcbiAgICAnYWNjZW50L3B1cnBsZScsXG4gICAgJ2FjY2VudC9waW5rJyxcbiAgICAndWktZWxlbWVudC9iZy9yZXN0JyxcbiAgICAndWktZWxlbWVudC9iZy9ob3ZlcicsXG4gICAgJ3VpLWVsZW1lbnQvYmcvYWN0aXZlJyxcbiAgICAndWktZWxlbWVudC9iZy9zZWxlY3RlZCcsXG4gICAgJ3VpLWVsZW1lbnQvYmcvZGlzYWJsZWQnLFxuICAgICd1aS1lbGVtZW50L2JvcmRlci9yZXN0JyxcbiAgICAndWktZWxlbWVudC9ib3JkZXIvaG92ZXInLFxuICAgICd1aS1lbGVtZW50L2JvcmRlci9hY3RpdmUnLFxuICAgICd1aS1lbGVtZW50L2JvcmRlci9zZWxlY3RlZCcsXG4gICAgJ3VpLWVsZW1lbnQvYm9yZGVyL2Rpc2FibGVkJyxcbiAgICAndWktZWxlbWVudC90ZXh0JyxcbiAgICAnYnV0dG9uL2JnL3Jlc3QnLFxuICAgICdidXR0b24vYmcvaG92ZXInLFxuICAgICdidXR0b24vYmcvYWN0aXZlJyxcbiAgICAnYnV0dG9uL3ByaW1hcnknLFxuICAgICdidXR0b24vc3VjY2VzcycsXG4gICAgJ2J1dHRvbi9kYW5nZXInLFxuICAgICdidXR0b24vYm9yZGVyL3Jlc3QnLFxuICAgICdidXR0b24vYm9yZGVyL2hvdmVyJyxcbiAgICAnYnV0dG9uL2JvcmRlci9hY3RpdmUnLFxuICAgICdmb3JtLWVsZW1lbnQvYmcvcmVzdCcsXG4gICAgJ2Zvcm0tZWxlbWVudC9iZy9yZWFkb25seScsXG4gICAgJ2Zvcm0tZWxlbWVudC9iZy9ob3ZlcicsXG4gICAgJ2Zvcm0tZWxlbWVudC9ib3JkZXIvcmVzdCcsXG4gICAgJ2Zvcm0tZWxlbWVudC9ib3JkZXIvcmVhZG9ubHknLFxuICAgICdmb3JtLWVsZW1lbnQvYm9yZGVyL2hvdmVyJyxcbiAgICAnY2FyZC9iZy9wcmltYXJ5JyxcbiAgICAnY2FyZC9iZy9zZWNvbmRhcnknLFxuICAgICdjYXJkL2JvcmRlci9pbm5lcicsXG4gICAgJ2NhcmQvYm9yZGVyL291dGVyJyxcbiAgICAnb3ZlcmxheS9iZycsXG4gICAgJ292ZXJsYXkvYm9yZGVyJyxcbl07XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29sb3JUb2tlbnNTb3J0Rm4oKSB7XG4gICAgcmV0dXJuIGdldFNvcnRGbihjb2xvck5hbWVzT3JkZXIsICdpbmNsdWRlcycpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFNpemVUb2tlbnNTb3J0Rm4oKSB7XG4gICAgcmV0dXJuIGdldFNvcnRGbihzaXplVmFsdWVzT3JkZXIsICdlbmRzV2l0aCcpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEFscGhhTnVtVG9rZW5zU29ydEZuKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUsICdlbicsIHsgbnVtZXJpYzogdHJ1ZSB9KTtcbiAgICB9O1xuICAgIC8vIHZhciBjb2xsYXRvciA9IG5ldyBJbnRsLkNvbGxhdG9yKHVuZGVmaW5lZCwge251bWVyaWM6IHRydWUsIHNlbnNpdGl2aXR5OiAnYmFzZSd9KTtcbiAgICAvLyByZXR1cm4gY29sbGF0b3IuY29tcGFyZTtcbn1cbmZ1bmN0aW9uIGdldFNvcnRGbihkYXRhU2V0LCBmbiA9ICdzdGFydHNXaXRoJykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZmlyc3RFbCwgc2Vjb25kRWwpIHtcbiAgICAgICAgdmFyIHJlc3VsdEZpcnN0ID0gZGF0YVNldC5maW5kSW5kZXgoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3RFbC5uYW1lW2ZuXShpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciByZXN1bHRTZWNvbmQgPSBkYXRhU2V0LmZpbmRJbmRleChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzZWNvbmRFbC5uYW1lW2ZuXShpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXN1bHRGaXJzdCA8IHJlc3VsdFNlY29uZCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xOyAvLyBmaXJzdEVsIGdvZXMgZmlyc3RcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0Rmlyc3QgPiByZXN1bHRTZWNvbmQpIHtcbiAgICAgICAgICAgIHJldHVybiAxOyAvLyBzZWNvbmRFbCBnb2VzIGZpcnN0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdEZpcnN0ID09PSByZXN1bHRTZWNvbmQpIHtcbiAgICAgICAgICAgIGxldCBuYW1lMSA9IGZpcnN0RWwubmFtZTtcbiAgICAgICAgICAgIGxldCBuYW1lMiA9IHNlY29uZEVsLm5hbWU7XG4gICAgICAgICAgICBpZiAobmFtZTEgPCBuYW1lMikge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTsgLy8gZmlyc3RFbCBnb2VzIGZpcnN0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmFtZTEgPiBuYW1lMikge1xuICAgICAgICAgICAgICAgIHJldHVybiAxOyAvLyBzZWNvbmRFbCBnb2VzIGZpcnN0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDsgLy8ga2VlcCBvcmlnaW5hbCBvcmRlciAgICBcbiAgICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRvVGl0bGVDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFx3XFxTKi9nLCBmdW5jdGlvbiAodHh0KSB7XG4gICAgICAgIHJldHVybiB0eHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eHQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gY2FtZWxUb1RpdGxlKGNhbWVsQ2FzZSkge1xuICAgIC8vIG5vIHNpZGUtZWZmZWN0c1xuICAgIHJldHVybiBjYW1lbENhc2VcbiAgICAgICAgLy8gaW5qZWN0IHNwYWNlIGJlZm9yZSB0aGUgdXBwZXIgY2FzZSBsZXR0ZXJzXG4gICAgICAgIC5yZXBsYWNlKC8oW0EtWl0pL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICByZXR1cm4gXCIgXCIgKyBtYXRjaDtcbiAgICB9KVxuICAgICAgICAvLyByZXBsYWNlIGZpcnN0IGNoYXIgd2l0aCB1cHBlciBjYXNlXG4gICAgICAgIC5yZXBsYWNlKC9eLi8sIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICByZXR1cm4gbWF0Y2gudG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b0NhbWVsQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyg/Ol5cXHd8W0EtWl18XFxiXFx3KS9nLCBmdW5jdGlvbiAod29yZCwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4ID09PSAwID8gd29yZC50b0xvd2VyQ2FzZSgpIDogd29yZC50b1VwcGVyQ2FzZSgpO1xuICAgIH0pLnJlcGxhY2UoL1xccysvZywgJycpO1xufVxuIiwiaW1wb3J0IHsgZGVmYXVsdFNldHRpbmdzIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5sZXQgYWN0aXZlVGhlbWUgPSAnbGlnaHQnO1xubGV0IF9pc0N1c3RvbURhcmtNb2RlID0gZmFsc2U7XG5jb25zdCBzdG9yZSA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIHN5bmNWYWx1ZXMoZGF0YSkge1xuICAgIGNvbnN0IHNoYXJlZFByb3BzID0gW1xuICAgICAgICAnaHVlJyxcbiAgICAgICAgJ3ByaW1hcnknLFxuICAgICAgICAnaW5mbycsXG4gICAgICAgICdzdWNjZXNzJyxcbiAgICAgICAgJ3dhcm5pbmcnLFxuICAgICAgICAnZGFuZ2VyJyxcbiAgICAgICAgJ3JlZCcsXG4gICAgICAgICdhbWJlcicsXG4gICAgICAgICdicm93bicsXG4gICAgICAgICdncmVlbicsXG4gICAgICAgICd0ZWFsJyxcbiAgICAgICAgJ2JsdWUnLFxuICAgICAgICAnaW5kaWdvJyxcbiAgICAgICAgJ3Zpb2xldCcsXG4gICAgICAgICdwdXJwbGUnLFxuICAgICAgICAncGluaycsXG4gICAgICAgICdiYXNlRm9udFNpemUnLFxuICAgICAgICAndHlwZVNjYWxlJyxcbiAgICAgICAgJ2NyZWF0ZVN0eWxlcycsXG4gICAgICAgICdyYWRpaScsXG4gICAgICAgICdzcGFjaW5nJyxcbiAgICAgICAgJ3ZlcnRpY2FsU3BhY2luZycsXG4gICAgICAgICdzaW5nbGVDb2xsZWN0aW9uJyxcbiAgICAgICAgJ2NyZWF0ZUNvbG9yVG9rZW5zJyxcbiAgICAgICAgJ2NyZWF0ZUNvbXBvbmVudFRva2VucycsXG4gICAgICAgICdjcmVhdGVUeXBvZ3JhcGh5VG9rZW5zJyxcbiAgICAgICAgJ2NyZWF0ZVNwYWNpbmdUb2tlbnMnLFxuICAgICAgICAnY3JlYXRlRWxldmF0aW9uVG9rZW5zJyxcbiAgICAgICAgJ2NyZWF0ZVJhZGlpVG9rZW5zJyxcbiAgICAgICAgJ2NyZWF0ZUdsb2JhbFNpemVUb2tlbnMnLFxuICAgICAgICAnY3JlYXRlT3BhY2l0eVRva2VucycsXG4gICAgICAgICdzaGFkb3dzU3R5bGUnLFxuICAgICAgICAnc2hhZG93c1NwcmVhZCcsXG4gICAgICAgICd0ZXh0QmxhY2tCcmlnaHRuZXNzJ1xuICAgIF07XG4gICAgc3RvcmUuZm9yRWFjaCgocGFyYW1zLCB0aGVtZUtleSkgPT4ge1xuICAgICAgICBzaGFyZWRQcm9wcy5mb3JFYWNoKHByb3BOYW1lID0+IHtcbiAgICAgICAgICAgIHBhcmFtc1twcm9wTmFtZV0gPSBkYXRhW3Byb3BOYW1lXTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0VGhlbWUoZGF0YSkge1xuICAgIGNvbnN0IHRoZW1lID0gX2lzQ3VzdG9tRGFya01vZGUgPyBkYXRhLnRoZW1lIDogJ2xpZ2h0JztcbiAgICBhY3RpdmVUaGVtZSA9IHRoZW1lO1xuICAgIGlmIChfaXNDdXN0b21EYXJrTW9kZSA9PT0gdHJ1ZSAmJiB0aGVtZSA9PT0gJ2RhcmsnKSB7XG4gICAgICAgIGRhdGEudGhlbWUgPSAnZGFyayc7XG4gICAgICAgIHN0b3JlLnNldCh0aGVtZSwgZGF0YSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkYXRhLnRoZW1lID0gJ2xpZ2h0JztcbiAgICAgICAgc3RvcmUuc2V0KCdsaWdodCcsIGRhdGEpO1xuICAgIH1cbiAgICBzeW5jVmFsdWVzKGRhdGEpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFRoZW1lKHRoZW1lKSB7XG4gICAgaWYgKF9pc0N1c3RvbURhcmtNb2RlID09PSB0cnVlICYmIHRoZW1lID09PSAnZGFyaycpIHtcbiAgICAgICAgcmV0dXJuIHN0b3JlLmdldCgnZGFyaycpO1xuICAgIH1cbiAgICByZXR1cm4gc3RvcmUuZ2V0KCdsaWdodCcpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZSgpIHtcbiAgICBsZXQgcmVzdWx0ID0gW3N0b3JlLmdldCgnbGlnaHQnKV07XG4gICAgaWYgKF9pc0N1c3RvbURhcmtNb2RlID09PSB0cnVlKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHN0b3JlLmdldCgnZGFyaycpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzYXZlKCkge1xuICAgIGZpZ21hLnJvb3Quc2V0UGx1Z2luRGF0YSgnU0RTJywgSlNPTi5zdHJpbmdpZnkoc2VyaWFsaXplKCkpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBsb2FkKCkge1xuICAgIGNvbnN0IHBsdWdpbkRhdGFUZXh0ID0gZmlnbWEucm9vdC5nZXRQbHVnaW5EYXRhKCdTRFMnKTtcbiAgICBsZXQgZGF0YTtcbiAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShwbHVnaW5EYXRhVGV4dCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGRhdGEgPSBbZGVmYXVsdFNldHRpbmdzXTtcbiAgICAgICAgY29uc29sZS5pbmZvKCdObyBwbHVnaW4gZGF0YSBmb3VuZCwgbG9hZGluZyBkZWZhdWx0Jyk7XG4gICAgfVxuICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGRhdGEpO1xuICAgIGxldCBmb3JtRGF0YTtcbiAgICBhY3RpdmVUaGVtZSA9ICdsaWdodCc7XG4gICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgZm9ybURhdGEgPSBbLi4uZGF0YV07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmb3JtRGF0YSA9IFtkYXRhXTtcbiAgICB9XG4gICAgX2lzQ3VzdG9tRGFya01vZGUgPSBmb3JtRGF0YS5sZW5ndGggPiAxO1xuICAgIGZvcm1EYXRhLmZvckVhY2gocGFyYW1zID0+IHtcbiAgICAgICAgc3RvcmUuc2V0KHBhcmFtcy50aGVtZSwgcGFyYW1zKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdG9yZSgpIHtcbiAgICByZXR1cm4gc3RvcmU7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gc3RvcmUuc2l6ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZXNldERlZmF1bHRzKCkge1xuICAgIGFjdGl2ZVRoZW1lID0gJ2xpZ2h0JztcbiAgICBfaXNDdXN0b21EYXJrTW9kZSA9IGZhbHNlO1xuICAgIHN0b3JlLmNsZWFyKCk7XG4gICAgc3RvcmUuc2V0KCdsaWdodCcsIGRlZmF1bHRTZXR0aW5ncyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlQ3VzdG9tRGFya01vZGUoKSB7XG4gICAgX2lzQ3VzdG9tRGFya01vZGUgPSB0cnVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVDdXN0b21EYXJrTW9kZSgpIHtcbiAgICBfaXNDdXN0b21EYXJrTW9kZSA9IGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQ3VzdG9tRGFya01vZGUoKSB7XG4gICAgcmV0dXJuIF9pc0N1c3RvbURhcmtNb2RlO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBkZXNpZ25Ub2tlbkFsaWFzVG9GaWdtYSwgZmluZEZpZ21hVmFyaWFibGVCeU5hbWUgfSBmcm9tIFwiLi9maWdtYS12YXJpYWJsZXNcIjtcbmxldCBnbG9iYWxUb2tlbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRHbG9iYWxUb2tlbnNEaWN0aW9uYXJ5KCkge1xuICAgIHJldHVybiBnbG9iYWxUb2tlbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gYWRkVG9HbG9iYWxUb2tlbnNEaWN0aW9uYXJ5KGRhdGEpIHtcbiAgICBnbG9iYWxUb2tlbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGdsb2JhbFRva2VucyksIGRhdGEpO1xufVxuY29uc3QgYWxpYXNSZWdleCA9IC9cXHsoLis/KSguKz8pXFx9L2c7XG5leHBvcnQgZnVuY3Rpb24gZmluZFRva2VuUmVmZXJlbmNlcyh0b2tlbkFsaWFzKSB7XG4gICAgcmV0dXJuIHRva2VuQWxpYXMgPT09IG51bGwgfHwgdG9rZW5BbGlhcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogdG9rZW5BbGlhcy50b1N0cmluZygpLm1hdGNoKGFsaWFzUmVnZXgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZmVyZW5jZU5hbWUocmVmZXJlbmNlKSB7XG4gICAgbGV0IG5hbWUgPSByZWZlcmVuY2UucmVwbGFjZSgvey9nLCBcIlwiKTtcbiAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC99L2csIFwiXCIpO1xuICAgIHJldHVybiBuYW1lO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRWYXJpYWJsZUJ5UmVmZXJlbmNlcyhhbGlhcykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCByZWZlcmVuY2VzID0gZmluZFRva2VuUmVmZXJlbmNlcyhhbGlhcyk7XG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgcmVmZXJlbmNlIG9mIHJlZmVyZW5jZXMgfHwgW10pIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gZ2V0UmVmZXJlbmNlTmFtZShyZWZlcmVuY2UpO1xuICAgICAgICAgICAgbmFtZSA9IGRlc2lnblRva2VuQWxpYXNUb0ZpZ21hKG5hbWUpO1xuICAgICAgICAgICAgY29uc3QgZmlnbWFWYXJpYWJsZSA9IHlpZWxkIGZpbmRGaWdtYVZhcmlhYmxlQnlOYW1lKG5hbWUpO1xuICAgICAgICAgICAgaWYgKGZpZ21hVmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goZmlnbWFWYXJpYWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYGZpbmRWYXJpYWJsZUJ5UmVmZXJlbmNlcygke2FsaWFzfSkgY2FsbCBmYWlsZWQgLT4gY2Fubm90IGZpbmQgdmFsdWUgZm9yICR7cmVmZXJlbmNlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZmluZEdsb2JhbFRva2VuQnlOYW1lKG5hbWUsIGRpY3Rpb25hcnkpIHtcbiAgICBuYW1lID0gZGVzaWduVG9rZW5BbGlhc1RvRmlnbWEobmFtZSk7XG4gICAgY29uc3QgdG9rZW4gPSBkaWN0aW9uYXJ5W25hbWVdO1xuICAgIGlmIChuYW1lID09ICdncmV5LXVuZGVmaW5lZCcpXG4gICAgICAgIGRlYnVnZ2VyO1xuICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgY29uc3QgbXNnID0gYENhbm5vdCBmaW5kIHRva2VuICR7bmFtZX0gaW4gZ2xvYmFsIGRpc2N0aW9uYXJ5OmA7XG4gICAgICAgIGNvbnNvbGUud2Fybihtc2csIGRpY3Rpb25hcnkpO1xuICAgICAgICAvLyBmaWdtYS5ub3RpZnkobXNnLCB7ZXJyb3I6IHRydWV9KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIDtcbiAgICByZXR1cm4gdG9rZW47XG59XG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUdsb2JhbFRva2VuVmFsdWUoYWxpYXMsIGRpY3Rpb25hcnkpIHtcbiAgICBsZXQgcmVmZXJlbmNlcyA9IGZpbmRUb2tlblJlZmVyZW5jZXMoYWxpYXMpO1xuICAgIGxldCByZXN1bHQgPSBhbGlhcztcbiAgICByZWZlcmVuY2VzID09PSBudWxsIHx8IHJlZmVyZW5jZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZmVyZW5jZXMuZm9yRWFjaChyZWZlcmVuY2UgPT4ge1xuICAgICAgICBsZXQgbmFtZSA9IGdldFJlZmVyZW5jZU5hbWUocmVmZXJlbmNlKTtcbiAgICAgICAgY29uc3QgZ2xvYmFsVG9rZW4gPSBmaW5kR2xvYmFsVG9rZW5CeU5hbWUobmFtZSwgZGljdGlvbmFyeSk7XG4gICAgICAgIGlmIChnbG9iYWxUb2tlbikge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UocmVmZXJlbmNlLCBnbG9iYWxUb2tlbi4kdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGNoZWNrID0gZmluZFRva2VuUmVmZXJlbmNlcyhyZXN1bHQpO1xuICAgIGlmIChjaGVjayAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlR2xvYmFsVG9rZW5WYWx1ZShyZXN1bHQsIGRpY3Rpb25hcnkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZmluZFZhcmlhYmxlQWxpYXMobmFtZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCByZWZlcmVuY2VWYXIgPSB5aWVsZCBmaW5kVmFyaWFibGVCeVJlZmVyZW5jZXMobmFtZS50cmltKCkpO1xuICAgICAgICBpZiAocmVmZXJlbmNlVmFyKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiVkFSSUFCTEVfQUxJQVNcIixcbiAgICAgICAgICAgICAgICBpZDogcmVmZXJlbmNlVmFyLmlkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUFsaWFzT3JWYWx1ZSh2YWx1ZSwgZGljdGlvbmFyeSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCB2YXJpYWJsZUFsaWFzID0geWllbGQgZmluZFZhcmlhYmxlQWxpYXModmFsdWUudHJpbSgpKTtcbiAgICAgICAgaWYgKHZhcmlhYmxlQWxpYXMpIHtcbiAgICAgICAgICAgIHJldHVybiB2YXJpYWJsZUFsaWFzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlR2xvYmFsVG9rZW5WYWx1ZSh2YWx1ZSwgZGljdGlvbmFyeSk7XG4gICAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZ2V0R2xvYmFsTmV1dHJhbHMsIHVwZ3JhZGVUZXh0UGFsZXR0ZSB9IGZyb20gJy4vY29sb3ItdG9rZW5zJztcbmltcG9ydCAqIGFzIHR5cG9ncmFwaHlUb2tlbnMgZnJvbSAnLi90eXBvZ3JhcGh5LXRva2Vucyc7XG5pbXBvcnQgKiBhcyBmaWdsaWIgZnJvbSAnLi91dGlscy9maWdtYS1saWJyYXJ5LXZhcmlhYmxlcyc7XG5pbXBvcnQgKiBhcyB0aGVtZVN0b3JlIGZyb20gJy4vdXRpbHMvdGhlbWVzLXN0b3JlJztcbmltcG9ydCB7IHJlbmRlckFjY2VudHMgfSBmcm9tIFwiLi9jb2xvci1nZW5lcmF0b3JzL3JlbmRlci1hY2NlbnRzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZU5ldXRyYWxzLCByZW5kZXJOZXV0cmFscyB9IGZyb20gJy4vY29sb3ItZ2VuZXJhdG9ycy9uZXV0cmFscy1wYWxldHRlLWdlbmVyYXRvcic7XG5pbXBvcnQgeyBhZGRUb0dsb2JhbFRva2Vuc0RpY3Rpb25hcnkgfSBmcm9tICcuL3V0aWxzL3Rva2VuLXJlZmVyZW5jZXMnO1xuaW1wb3J0IHsgZXhwb3J0QnJhbmRWYXJpYW50VG9KU09OLCBleHBvcnRUb0pTT04sIGltcG9ydEZyb21KU09OIH0gZnJvbSAnLi9pbXBvcnQtZXhwb3J0LWpzb24nO1xuaW1wb3J0IHsgaW1wb3J0QWxsVG9rZW5zLCBpbml0aWF0ZUltcG9ydCB9IGZyb20gJy4vaW1wb3J0LXRva2Vucyc7XG5jb25zb2xlLmNsZWFyKCk7XG5maWdtYS5zaG93VUkoX19odG1sX18sIHtcbiAgICB3aWR0aDogNTYwLFxuICAgIGhlaWdodDogNzIwLFxuICAgIHRoZW1lQ29sb3JzOiB0cnVlLFxufSk7XG5maWdtYS51aS5vbm1lc3NhZ2UgPSAoZXZlbnREYXRhKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zb2xlLmxvZyhcImNvZGUgcmVjZWl2ZWQgbWVzc2FnZVwiLCBldmVudERhdGEpO1xuICAgIGNvbnN0IHBhcmFtcyA9IGV2ZW50RGF0YS5wYXJhbXM7XG4gICAgaWYgKGV2ZW50RGF0YS50eXBlID09PSBcIklNUE9SVFwiKSB7XG4gICAgICAgIHRoZW1lU3RvcmUuc2V0VGhlbWUocGFyYW1zKTtcbiAgICAgICAgeWllbGQgaW5pdGlhdGVJbXBvcnQoKTtcbiAgICAgICAgeWllbGQgaW1wb3J0QWxsVG9rZW5zKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50RGF0YS50eXBlID09PSBcIkVYUE9SVFwiKSB7XG4gICAgICAgIHlpZWxkIGV4cG9ydFRvSlNPTihldmVudERhdGEuZXhwb3J0SlNPTlBhcmFtcywgcGFyYW1zKTtcbiAgICAgICAgeWllbGQgZXhwb3J0QnJhbmRWYXJpYW50VG9KU09OKGV2ZW50RGF0YS5leHBvcnRCcmFuZFBhcmFtcywgcGFyYW1zKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnREYXRhLnR5cGUgPT09IFwiSU1QT1JUX0pTT05cIikge1xuICAgICAgICBhZGRUb0dsb2JhbFRva2Vuc0RpY3Rpb25hcnkoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBnZXRHbG9iYWxOZXV0cmFscyhwYXJhbXMpKSwgdHlwb2dyYXBoeVRva2Vucy5nZXRUeXBvZ3JhcGh5VG9rZW5zKHBhcmFtcy5iYXNlRm9udFNpemUsIHBhcmFtcy50eXBlU2NhbGUpKSk7XG4gICAgICAgIGZpZ2xpYi5zZXRTZWxlY3RlZExpYnJhcnkoZXZlbnREYXRhLmltcG9ydEpTT05QYXJhbXMudG9rZW5MaWJyYXJ5TmFtZSk7XG4gICAgICAgIHlpZWxkIGltcG9ydEZyb21KU09OKGV2ZW50RGF0YS5kYXRhLCBwYXJhbXMpLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoXCJJTVBPUlRfQ09NUExFVEVEXCIpO1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KGVycm9yLCB7IGVycm9yOiB0cnVlIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZmlnbWEubm90aWZ5KGBGaWdtYSB2YXJpYWJsZXMgaGFzIGJlZW4gaW1wb3J0ZWRgKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoXCJJTVBPUlRfQ09NUExFVEVEXCIpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudERhdGEudHlwZSA9PT0gXCJBTEVSVFwiKSB7XG4gICAgICAgIGZpZ21hLm5vdGlmeShgJHtldmVudERhdGEuZGF0YX1gLCBldmVudERhdGEuYWxlcnRQYXJhbXMgfHwge30pO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudERhdGEudHlwZSA9PT0gXCJSRU5ERVJfQUNDRU5UU1wiKSB7XG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICBjb25zdCBmcmFtZUxpZ2h0UGFsZXR0ZSA9IHJlbmRlckFjY2VudHMoJ2xpZ2h0JywgcGFyYW1zLCAnTGlnaHQgTW9kZSBBY2NlbnRzJyk7XG4gICAgICAgIGNvbnN0IGZyYW1lRGFya1BhbGV0dGUgPSByZW5kZXJBY2NlbnRzKCdkYXJrJywgcGFyYW1zLCAnRGFyayBNb2RlIEFjY2VudHMnKTtcbiAgICAgICAgZnJhbWVEYXJrUGFsZXR0ZS55ID0gZnJhbWVMaWdodFBhbGV0dGUuaGVpZ2h0ICsgNjQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50RGF0YS50eXBlID09PSBcIlJFTkRFUl9ORVVUUkFMU1wiKSB7XG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICBjb25zdCBuZXV0cmFsVG9rZW5zID0gZ2VuZXJhdGVOZXV0cmFscyhwYXJhbXMpO1xuICAgICAgICByZW5kZXJOZXV0cmFscyhuZXV0cmFsVG9rZW5zLCBgR2xvYmFsIE5ldXRyYWxzYCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50RGF0YS50eXBlID09PSBcIlVQR1JBREVfVEVYVF9DT0xPUlNcIikge1xuICAgICAgICB5aWVsZCB1cGdyYWRlVGV4dFBhbGV0dGUocGFyYW1zKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnREYXRhLnR5cGUgPT0gJ0NFTlRFUl9XSU5ET1cnKSB7XG4gICAgICAgIGxldCBwbHVnaW5XaWR0aCA9IDUwMCwgcGx1Z2luSGVpZ2h0ID0gODAwLCB6b29tID0gZmlnbWEudmlld3BvcnQuem9vbSwgY2VudGVyWCA9IE1hdGgucm91bmQoZmlnbWEudmlld3BvcnQuY2VudGVyLnggLSAoem9vbSAvIDIpKSAtIHBsdWdpbldpZHRoIC8gMiwgY2VudGVyWSA9IE1hdGgucm91bmQoZmlnbWEudmlld3BvcnQuY2VudGVyLnkgLSAoem9vbSAvIDIpKSAtIHBsdWdpbkhlaWdodCAvIDI7XG4gICAgICAgIGZpZ21hLnVpLnJlcG9zaXRpb24oY2VudGVyWCwgY2VudGVyWSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50RGF0YS50eXBlID09PSBcIlVJX1JFQURZXCIpIHtcbiAgICAgICAgY29uc3QgY29sb3JTeXN0ZW1WZXJzaW9uID0gMTsgLy9hd2FpdCBnZXRDb2xvclN5c3RlbVZlcnNpb24oKTtcbiAgICAgICAgeWllbGQgZmlnbGliLmdldFN0b3JlRGF0YSgpO1xuICAgICAgICB0aGVtZVN0b3JlLmxvYWQoKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogXCJSRUZSRVNIX1VJXCIsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgY29sb3JTeXN0ZW1WZXJzaW9uLFxuICAgICAgICAgICAgICAgIGN1c3RvbURhcmtNb2RlOiB0aGVtZVN0b3JlLmlzQ3VzdG9tRGFya01vZGUoKSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHRoZW1lU3RvcmUuZ2V0VGhlbWUoJ2xpZ2h0JyksXG4gICAgICAgICAgICAgICAgdG9rZW5MaWJyYXJpZXM6IGZpZ2xpYi5zZXJpYWxpemUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnREYXRhLnR5cGUgPT0gJ1VQREFURScpIHtcbiAgICAgICAgdGhlbWVTdG9yZS5zZXRUaGVtZShwYXJhbXMpO1xuICAgICAgICBzd2l0Y2ggKHBhcmFtcy5iYXNlRm9udFNpemUpIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5yZXNpemUoNTAwLCA4MDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnbGFyZ2UnOiB7XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucmVzaXplKDU2MCwgODAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudERhdGEudHlwZSA9PSAnUkVTRVQnKSB7XG4gICAgICAgIHRoZW1lU3RvcmUucmVzZXREZWZhdWx0cygpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBcIlJFRlJFU0hfVUlcIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBjb2xvclN5c3RlbVZlcnNpb246IDEsXG4gICAgICAgICAgICAgICAgY3VzdG9tRGFya01vZGU6IHRoZW1lU3RvcmUuaXNDdXN0b21EYXJrTW9kZSgpLFxuICAgICAgICAgICAgICAgIHBhcmFtczogdGhlbWVTdG9yZS5nZXRUaGVtZShcImxpZ2h0XCIpLFxuICAgICAgICAgICAgICAgIHRva2VuTGlicmFyaWVzOiBmaWdsaWIuc2VyaWFsaXplKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50RGF0YS50eXBlID09ICdVUERBVEVfQUNUSVZFX1RIRU1FJykge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFRoZW1lRGF0YSA9IHRoZW1lU3RvcmUuZ2V0VGhlbWUocGFyYW1zLnRoZW1lKTtcbiAgICAgICAgc2VsZWN0ZWRUaGVtZURhdGEudGhlbWUgPSBwYXJhbXMudGhlbWU7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6IFwiUkVGUkVTSF9VSVwiLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGNvbG9yU3lzdGVtVmVyc2lvbjogMSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHNlbGVjdGVkVGhlbWVEYXRhLFxuICAgICAgICAgICAgICAgIGN1c3RvbURhcmtNb2RlOiB0aGVtZVN0b3JlLmlzQ3VzdG9tRGFya01vZGUoKSxcbiAgICAgICAgICAgICAgICB0b2tlbkxpYnJhcmllczogZmlnbGliLnNlcmlhbGl6ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudERhdGEudHlwZSA9PSAnRU5BQkxFX0NVU1RPTV9EQVJLX01PREUnKSB7XG4gICAgICAgIHRoZW1lU3RvcmUuZW5hYmxlQ3VzdG9tRGFya01vZGUoKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogXCJSRUZSRVNIX1VJXCIsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgY29sb3JTeXN0ZW1WZXJzaW9uOiAxLFxuICAgICAgICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgICAgICAgIGN1c3RvbURhcmtNb2RlOiB0aGVtZVN0b3JlLmlzQ3VzdG9tRGFya01vZGUoKSxcbiAgICAgICAgICAgICAgICB0b2tlbkxpYnJhcmllczogZmlnbGliLnNlcmlhbGl6ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudERhdGEudHlwZSA9PSAnRElTQUJMRV9DVVNUT01fREFSS19NT0RFJykge1xuICAgICAgICB0aGVtZVN0b3JlLmRpc2FibGVDdXN0b21EYXJrTW9kZSgpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBcIlJFRlJFU0hfVUlcIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBjb2xvclN5c3RlbVZlcnNpb246IDEsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoZW1lU3RvcmUuZ2V0VGhlbWUoJ2xpZ2h0JykpLCB7IHRoZW1lOiBwYXJhbXMudGhlbWUgfSksXG4gICAgICAgICAgICAgICAgY3VzdG9tRGFya01vZGU6IHRoZW1lU3RvcmUuaXNDdXN0b21EYXJrTW9kZSgpLFxuICAgICAgICAgICAgICAgIHRva2VuTGlicmFyaWVzOiBmaWdsaWIuc2VyaWFsaXplKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=