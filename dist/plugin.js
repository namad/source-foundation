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
/* harmony export */   createUpdateElevationComponents: () => (/* binding */ createUpdateElevationComponents),
/* harmony export */   getElevationTokens: () => (/* binding */ getElevationTokens)
/* harmony export */ });
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults */ "./src/defaults.ts");
/* harmony import */ var _utils_clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/clone */ "./src/utils/clone.ts");
/* harmony import */ var _utils_delay_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/delay-async */ "./src/utils/delay-async.ts");
/* harmony import */ var _utils_flatten_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/flatten-object */ "./src/utils/flatten-object.ts");
/* harmony import */ var _utils_token_references__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/token-references */ "./src/utils/token-references.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





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
    return raw === true ? tokens : (0,_utils_flatten_object__WEBPACK_IMPORTED_MODULE_3__.flattenObject)(tokens);
}
const valueSequence = [1, 2, 4, 8, 12, 16, 24, 32, 40, 48, 56, 72, 88, 104, 120, 136, 152, 168];
const effectTemplate = {
    "type": "DROP_SHADOW",
    "showShadowBehindNode": false,
    "color": "{utility.shade.100}",
    "blendMode": "MULTIPLY",
    "offsetX": 0,
    "offsetY": 0,
    "radius": 1,
    "spread": 0
};
function getLayersCount(offsetValue) {
    let layers = 1;
    if (offsetValue > 0 && offsetValue < 12) {
        layers = 2;
    }
    else if (offsetValue >= 12) {
        layers = 3;
    }
    else if (offsetValue >= 40) {
        layers = 4;
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
/*
    spread becomes useless once it goes below vertical offset and the shadow disappears
    this function check both values and adjust spead value to prevent shadow from dissapearing
*/
function adjustNegativeSpreadValue(spread, offsetY) {
    if (spread < 0 && Math.abs(spread) >= offsetY) {
        return adjustNegativeSpreadValue(++spread, offsetY);
    }
    return spread;
}
function getShadowValue(layers, sequeceStartIndex, colorIndex, spread) {
    let shadowValue = [
        Object.assign(Object.assign({}, (0,_utils_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(effectTemplate)), { color: `{utility.shade.${colorIndex}00}` })
    ];
    for (let l = 0; l < layers; l++) {
        const sequenceIndex = sequeceStartIndex + l;
        const offsetY = valueSequence[sequenceIndex];
        const radius = valueSequence[sequenceIndex + 1];
        spread *= 1.25;
        let layerValue = Object.assign(Object.assign({}, (0,_utils_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(effectTemplate)), { color: `{utility.shade.${colorIndex}00}`, offsetY,
            radius, spread: adjustNegativeSpreadValue(spread, offsetY) });
        shadowValue.push(layerValue);
    }
    return shadowValue;
}
function getSpreadFactor(spread) {
    let spreadFactor = 0;
    if (spread < 0) {
        spreadFactor = -1;
    }
    else if (spread > 0) {
        spreadFactor = 1;
    }
    return spreadFactor;
}
function generateShadows(size, spread) {
    let ramp = {};
    spread /= 1.25;
    for (let s = 1; s <= 6; s++) {
        ramp[`shadow-${s}`] = getShadowValueRamp(size++, spread);
        spread *= 1.25;
    }
    return ramp;
}
function findShadowComponent(name, destinationPage) {
    const pageComponents = destinationPage.findAllWithCriteria({
        types: ['COMPONENT'],
        pluginData: {
            keys: ["SourceShadow"]
        }
    });
    return pageComponents.find(node => {
        const pluginData = node.getPluginData('SourceShadow');
        return pluginData === name;
    });
}
function createShadowComponent(name, shadowToken) {
    const constraints = {
        horizontal: 'STRETCH',
        vertical: 'STRETCH'
    };
    const shadowComponentFrame = figma.createFrame();
    shadowComponentFrame.name = name;
    shadowComponentFrame.clipsContent = false;
    shadowComponentFrame.fills = [];
    const baseRectOuter = figma.createRectangle();
    const baseRectInner = figma.createRectangle();
    const union = figma.subtract([baseRectInner, baseRectOuter], shadowComponentFrame);
    baseRectOuter.name = 'outer';
    baseRectOuter.constraints = constraints;
    baseRectOuter.setPluginData('SourceShadowElement', 'mask-outer');
    baseRectInner.name = 'inner';
    baseRectInner.constraints = constraints;
    baseRectInner.setPluginData('SourceShadowElement', 'mask-inner');
    union.name = 'mask';
    union.setPluginData('SourceShadowElement', 'mask');
    shadowToken.$value.forEach((effectValue, index) => {
        const shadowLayer = figma.createRectangle();
        shadowLayer.name = `shadow-${index++}`;
        shadowLayer.constraints = constraints;
        shadowComponentFrame.appendChild(shadowLayer);
    });
    union.isMask = true;
    const shadowComponent = figma.createComponentFromNode(shadowComponentFrame);
    shadowComponent.setPluginData('SourceShadow', name);
    return shadowComponent;
}
function getShadowComponent(name, destinationPage, shadowToken) {
    let shadowComponent = findShadowComponent(name, destinationPage);
    if (!shadowComponent) {
        shadowComponent = createShadowComponent(name, shadowToken);
    }
    shadowComponent.clipsContent = false;
    return shadowComponent;
}
function createUpdateElevationComponents(params, destinationPage) {
    return __awaiter(this, void 0, void 0, function* () {
        const tokens = getElevationTokens(params, true);
        const page = figma.root.children.find(node => node.name == destinationPage) || figma.currentPage;
        yield figma.setCurrentPageAsync(page);
        let shadowComponents = [];
        for (const key in tokens) {
            const shadowRamp = tokens[key];
            const shadowToken = shadowRamp['200'];
            const shadowComponent = getShadowComponent(key, page, shadowToken);
            const maskLayer = shadowComponent.findOne(node => node.getPluginData('SourceShadowElement') == 'mask');
            if (!maskLayer) {
                throw new Error(`Error processing ${shadowComponent.name}. Cannot find mask layer, aborting...`);
            }
            const baseRectOuter = maskLayer.findOne(node => node.getPluginData('SourceShadowElement') == 'mask-outer');
            if (!baseRectOuter) {
                throw new Error(`Error processing ${shadowComponent.name} > ${maskLayer.name}. Cannot find mask outer mask rectangle, aborting...`);
            }
            maskLayer.visible = false;
            yield updateMaskComponentLayers(shadowComponent, shadowToken);
            const absoluteBoundingBox = shadowComponent.absoluteBoundingBox;
            const absoluteRenderBounds = shadowComponent.absoluteRenderBounds;
            baseRectOuter.resize(absoluteRenderBounds.width, absoluteRenderBounds.height);
            baseRectOuter.x = (absoluteRenderBounds.x - absoluteBoundingBox.x);
            baseRectOuter.y = (absoluteRenderBounds.y - absoluteBoundingBox.y);
            maskLayer.visible = true;
            shadowComponents.push(shadowComponent);
        }
        yield (0,_utils_delay_async__WEBPACK_IMPORTED_MODULE_2__.delayAsync)(200);
        debugger;
        figma.currentPage.selection = shadowComponents;
        figma.viewport.scrollAndZoomIntoView(shadowComponents);
    });
}
function updateMaskComponentLayers(shadowComponent, shadowToken) {
    return __awaiter(this, void 0, void 0, function* () {
        const shadowTokenValue = shadowToken.$value;
        const shadowLayersChildren = shadowComponent.children;
        let shadowLayerIndex = shadowLayersChildren.length - 1;
        while (shadowLayerIndex > shadowTokenValue.length) {
            shadowLayersChildren[shadowLayerIndex].remove();
            shadowLayerIndex--;
        }
        let index = 1;
        while (shadowTokenValue.length) {
            const effectValue = shadowTokenValue.shift();
            const colorVariable = yield (0,_utils_token_references__WEBPACK_IMPORTED_MODULE_4__.findVariableByReferences)(effectValue.color);
            let paint = figma.util.solidPaint('#000000');
            paint = figma.variables.setBoundVariableForPaint(paint, 'color', colorVariable);
            let shadowLayer = shadowComponent.children[index];
            // findChild(node => node.name == `shadow-${index}`) as RectangleNode;
            if (shadowLayer && shadowLayer.type != 'RECTANGLE') {
                throw new Error(`shadow-${index}  type is ${shadowLayer.type} but has to be a rectangle`);
            }
            if (!shadowLayer) {
                shadowLayer = figma.createRectangle();
                shadowLayer.constraints = {
                    horizontal: 'STRETCH',
                    vertical: 'STRETCH'
                };
                shadowComponent.insertChild(index, shadowLayer);
            }
            shadowLayer.name = `shadow-${index}`;
            shadowLayer.fills = [paint];
            shadowLayer.visible = true;
            shadowLayer.blendMode = effectTemplate.blendMode;
            const LayerBlur = {
                type: "LAYER_BLUR",
                visible: true,
                radius: effectValue.radius
            };
            shadowLayer.effects = [LayerBlur];
            shadowLayer.x = effectValue.offsetX - effectValue.spread;
            shadowLayer.y = effectValue.offsetY - effectValue.spread;
            shadowLayer.resize(shadowComponent.width + 2 * effectValue.spread, shadowComponent.height + 2 * effectValue.spread);
            index++;
        }
    });
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
/* harmony export */   serialize: () => (/* binding */ serialize),
/* harmony export */   setTheme: () => (/* binding */ setTheme)
/* harmony export */ });
/* unused harmony exports getStore, getSize */
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
/* harmony import */ var _effect_tokens__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./effect-tokens */ "./src/effect-tokens.ts");
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
        yield (0,_import_export_json__WEBPACK_IMPORTED_MODULE_7__.importFromJSON)(eventData.data, params).catch((error) => {
            console.error(error);
            figma.ui.postMessage("IMPORT_COMPLETED");
            figma.notify(error.message, { error: true });
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
    else if (eventData.type === "START_ELEVATION_COMPONENTS") {
        figma.ui.postMessage({
            type: "START_ELEVATION_COMPONENTS",
            data: {
                pages: figma.root.children.map(node => node.name),
                currentPage: figma.currentPage.name
            }
        });
    }
    else if (eventData.type === "CREATE_ELEVATION_COMPONENTS") {
        const page = eventData.options['componentPage'];
        yield (0,_effect_tokens__WEBPACK_IMPORTED_MODULE_9__.createUpdateElevationComponents)(params, page).catch((error) => {
            figma.notify(error.message, { error: true });
        });
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
                preset: _utils_themes_store__WEBPACK_IMPORTED_MODULE_3__.serialize(),
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
                preset: _utils_themes_store__WEBPACK_IMPORTED_MODULE_3__.serialize(),
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
                preset: _utils_themes_store__WEBPACK_IMPORTED_MODULE_3__.serialize(),
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
                preset: _utils_themes_store__WEBPACK_IMPORTED_MODULE_3__.serialize(),
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
                preset: _utils_themes_store__WEBPACK_IMPORTED_MODULE_3__.serialize(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ25LVTtBQUNhOztBQUU3QyxRQUFRLGlDQUFpQzs7QUFFekMsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUNBQW1DLGlEQUFLO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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TztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IscURBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLGtEQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixzREFBTTtBQUMzQjtBQUNBLFVBQVU7QUFDVjtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxvQkFBb0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUJPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0EsNkNBQTZDLGVBQWU7QUFD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QUFDQTtBQUNBLFFBQVEsc0VBQWdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDBEQUFvQjtBQUM1QyxzREFBc0QsRUFBRSx5REFBbUIsY0FBYyxxQkFBcUI7QUFDOUcsZ0NBQWdDLGlFQUEyQjtBQUMzRCxnQ0FBZ0MscUVBQWdCO0FBQ2hEO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL2luZGV4LmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9Db2xvci5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvY2hyb21hLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9jb2xvcnMvY29sb3JicmV3ZXIuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2NvbG9ycy93M2N4MTEuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2dlbmVyYXRvci9hdmVyYWdlLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9nZW5lcmF0b3IvYmV6aWVyLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9nZW5lcmF0b3IvYmxlbmQuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2dlbmVyYXRvci9jdWJlaGVsaXguanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2dlbmVyYXRvci9taXguanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2dlbmVyYXRvci9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2dlbmVyYXRvci9zY2FsZS5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW50ZXJwb2xhdG9yL19oc3guanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2ludGVycG9sYXRvci9oY2cuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2ludGVycG9sYXRvci9oc2kuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2ludGVycG9sYXRvci9oc2wuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2ludGVycG9sYXRvci9oc3YuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2ludGVycG9sYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW50ZXJwb2xhdG9yL2xhYi5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW50ZXJwb2xhdG9yL2xjaC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW50ZXJwb2xhdG9yL2xyZ2IuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2ludGVycG9sYXRvci9udW0uanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2ludGVycG9sYXRvci9va2xhYi5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW50ZXJwb2xhdG9yL29rbGNoLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pbnRlcnBvbGF0b3IvcmdiLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9jbXlrL2NteWsycmdiLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9jbXlrL2luZGV4LmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9jbXlrL3JnYjJjbXlrLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9jc3MvY3NzMnJnYi5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vY3NzL2hzbDJjc3MuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2Nzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vY3NzL2xhYjJjc3MuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2Nzcy9sY2gyY3NzLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9jc3Mvb2tsYWIyY3NzLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9jc3Mvb2tsY2gyY3NzLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9jc3MvcmdiMmNzcy5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vZ2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2hjZy9oY2cycmdiLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9oY2cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2hjZy9yZ2IyaGNnLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9oZXgvaGV4MnJnYi5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vaGV4L2luZGV4LmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9oZXgvcmdiMmhleC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vaHNpL2hzaTJyZ2IuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2hzaS9pbmRleC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vaHNpL3JnYjJoc2kuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2hzbC9oc2wycmdiLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9oc2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2hzbC9yZ2IyaHNsLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9oc3YvaHN2MnJnYi5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vaHN2L2luZGV4LmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9oc3YvcmdiMmhzdi5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vaW5wdXQuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2xhYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vbGFiL2xhYi1jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2xhYi9sYWIycmdiLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9sYWIvcmdiMmxhYi5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vbGNoL2hjbDJyZ2IuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2xjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vbGNoL2xhYjJsY2guanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL2xjaC9sY2gybGFiLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9sY2gvbGNoMnJnYi5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vbGNoL3JnYjJsY2guanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL25hbWVkL2luZGV4LmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9udW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL251bS9udW0ycmdiLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9udW0vcmdiMm51bS5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vb2tsYWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL29rbGFiL29rbGFiMnJnYi5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vb2tsYWIvcmdiMm9rbGFiLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9va2xjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vb2tsY2gvb2tsY2gycmdiLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9pby9va2xjaC9yZ2Iyb2tsY2guanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL3JnYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vdGVtcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvaW8vdGVtcC9yZ2IydGVtcGVyYXR1cmUuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL2lvL3RlbXAvdGVtcGVyYXR1cmUycmdiLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9vcHMvYWxwaGEuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL29wcy9jbGlwcGVkLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9vcHMvZGFya2VuLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9vcHMvZ2V0LmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9vcHMvbHVtaW5hbmNlLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9vcHMvbWl4LmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy9vcHMvcHJlbXVsdGlwbHkuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL29wcy9zYXR1cmF0ZS5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvb3BzL3NldC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvb3BzL3NoYWRlLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy91dGlscy9hbmFseXplLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy91dGlscy9jbGlwX3JnYi5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvdXRpbHMvY29udHJhc3QuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL3V0aWxzL2NvbnRyYXN0QVBDQS5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvdXRpbHMvZGVsdGEtZS5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvdXRpbHMvZGlzdGFuY2UuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy91dGlscy9sYXN0LmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy91dGlscy9saW1pdC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvdXRpbHMvbXVsdGlwbHktbWF0cmljZXMuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jaHJvbWEtanMvc3JjL3V0aWxzL3NjYWxlcy5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvdXRpbHMvdHlwZS5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvdXRpbHMvdW5wYWNrLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL3NyYy91dGlscy92YWxpZC5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL2Nocm9tYS1qcy9zcmMvdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL2NvbG9yLWdlbmVyYXRvcnMvYWNjZW50LXBhbGV0dGUtZ2VuZXJhdG9yLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvY29sb3ItZ2VuZXJhdG9ycy9uZXV0cmFscy1wYWxldHRlLWdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL2NvbG9yLWdlbmVyYXRvcnMvcmVuZGVyLWFjY2VudHMudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy9jb2xvci1nZW5lcmF0b3JzL3N3YXRjaGVzLWdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL2NvbG9yLXRva2Vucy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL2RlZmF1bHRzLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvZWZmZWN0LXRva2Vucy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL2ltcG9ydC1leHBvcnQtanNvbi50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL2ltcG9ydC10b2tlbnMudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy9vcGFjaXR5LXRva2Vucy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3JhZGlpLXRva2Vucy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3NpemluZy10b2tlbnMudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy9zcGFjaW5nLXRva2Vucy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3R5cG9ncmFwaHktdG9rZW5zLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvY2xvbmUudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy9kZWxheS1hc3luYy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3V0aWxzL2ZpZ21hLWNvbG9ycy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3V0aWxzL2ZpZ21hLWVmZmVjdC1zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy9maWdtYS1saWJyYXJ5LXZhcmlhYmxlcy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3V0aWxzL2ZpZ21hLXRleHQtc3R5bGVzLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvZmlnbWEtdmFyaWFibGVzLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvZmxhdHRlbi1vYmplY3QudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy9tZXJnZS1kZWVwLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvcm91bmQtZGVjaW1hbHMudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy9zb3J0LXRva2Vucy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3V0aWxzL3RleHQtdG8tdGl0bGUtY2FzZS50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3V0aWxzL3RoZW1lcy1zdG9yZS50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3V0aWxzL3Rva2VuLXJlZmVyZW5jZXMudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmZWVsIGZyZWUgdG8gY29tbWVudCBvdXQgYW55dGhpbmcgdG8gcm9sbHVwXG4vLyBhIHNtYWxsZXIgY2hyb21hLmpzIGJ1bmRsZVxuaW1wb3J0IGNocm9tYSBmcm9tICcuL3NyYy9jaHJvbWEuanMnO1xuXG4vLyBpbyAtLT4gY29udmVydCBjb2xvcnNcbmltcG9ydCAnLi9zcmMvaW8vbmFtZWQvaW5kZXguanMnO1xuXG4vLyBvcGVyYXRvcnMgLS0+IG1vZGlmeSBleGlzdGluZyBDb2xvcnNcbmltcG9ydCAnLi9zcmMvb3BzL2FscGhhLmpzJztcbmltcG9ydCAnLi9zcmMvb3BzL2NsaXBwZWQuanMnO1xuaW1wb3J0ICcuL3NyYy9vcHMvZGFya2VuLmpzJztcbmltcG9ydCAnLi9zcmMvb3BzL2dldC5qcyc7XG5pbXBvcnQgJy4vc3JjL29wcy9sdW1pbmFuY2UuanMnO1xuaW1wb3J0ICcuL3NyYy9vcHMvbWl4LmpzJztcbmltcG9ydCAnLi9zcmMvb3BzL3ByZW11bHRpcGx5LmpzJztcbmltcG9ydCAnLi9zcmMvb3BzL3NhdHVyYXRlLmpzJztcbmltcG9ydCAnLi9zcmMvb3BzL3NldC5qcyc7XG5pbXBvcnQgJy4vc3JjL29wcy9zaGFkZS5qcyc7XG5cbi8vIGludGVycG9sYXRvcnNcbmltcG9ydCAnLi9zcmMvaW50ZXJwb2xhdG9yL3JnYi5qcyc7XG5pbXBvcnQgJy4vc3JjL2ludGVycG9sYXRvci9scmdiLmpzJztcbmltcG9ydCAnLi9zcmMvaW50ZXJwb2xhdG9yL2xhYi5qcyc7XG5pbXBvcnQgJy4vc3JjL2ludGVycG9sYXRvci9sY2guanMnO1xuaW1wb3J0ICcuL3NyYy9pbnRlcnBvbGF0b3IvbnVtLmpzJztcbmltcG9ydCAnLi9zcmMvaW50ZXJwb2xhdG9yL2hjZy5qcyc7XG5pbXBvcnQgJy4vc3JjL2ludGVycG9sYXRvci9oc2kuanMnO1xuaW1wb3J0ICcuL3NyYy9pbnRlcnBvbGF0b3IvaHNsLmpzJztcbmltcG9ydCAnLi9zcmMvaW50ZXJwb2xhdG9yL2hzdi5qcyc7XG5pbXBvcnQgJy4vc3JjL2ludGVycG9sYXRvci9va2xhYi5qcyc7XG5pbXBvcnQgJy4vc3JjL2ludGVycG9sYXRvci9va2xjaC5qcyc7XG5cbi8vIGdlbmVyYXRvcnMgLS0gPiBjcmVhdGUgbmV3IGNvbG9yc1xuaW1wb3J0IGF2ZXJhZ2UgZnJvbSAnLi9zcmMvZ2VuZXJhdG9yL2F2ZXJhZ2UuanMnO1xuaW1wb3J0IGJlemllciBmcm9tICcuL3NyYy9nZW5lcmF0b3IvYmV6aWVyLmpzJztcbmltcG9ydCBibGVuZCBmcm9tICcuL3NyYy9nZW5lcmF0b3IvYmxlbmQuanMnO1xuaW1wb3J0IGN1YmVoZWxpeCBmcm9tICcuL3NyYy9nZW5lcmF0b3IvY3ViZWhlbGl4LmpzJztcbmltcG9ydCBtaXggZnJvbSAnLi9zcmMvZ2VuZXJhdG9yL21peC5qcyc7XG5pbXBvcnQgcmFuZG9tIGZyb20gJy4vc3JjL2dlbmVyYXRvci9yYW5kb20uanMnO1xuaW1wb3J0IHNjYWxlIGZyb20gJy4vc3JjL2dlbmVyYXRvci9zY2FsZS5qcyc7XG5cbi8vIG90aGVyIHV0aWxpdHkgbWV0aG9kc1xuaW1wb3J0IHsgYW5hbHl6ZSB9IGZyb20gJy4vc3JjL3V0aWxzL2FuYWx5emUuanMnO1xuaW1wb3J0IGNvbnRyYXN0IGZyb20gJy4vc3JjL3V0aWxzL2NvbnRyYXN0LmpzJztcbmltcG9ydCBjb250cmFzdEFQQ0EgZnJvbSAnLi9zcmMvdXRpbHMvY29udHJhc3RBUENBLmpzJztcbmltcG9ydCBkZWx0YUUgZnJvbSAnLi9zcmMvdXRpbHMvZGVsdGEtZS5qcyc7XG5pbXBvcnQgZGlzdGFuY2UgZnJvbSAnLi9zcmMvdXRpbHMvZGlzdGFuY2UuanMnO1xuaW1wb3J0IHsgbGltaXRzIH0gZnJvbSAnLi9zcmMvdXRpbHMvYW5hbHl6ZS5qcyc7XG5pbXBvcnQgdmFsaWQgZnJvbSAnLi9zcmMvdXRpbHMvdmFsaWQuanMnO1xuaW1wb3J0IGlucHV0IGZyb20gJy4vc3JjL2lvL2lucHV0LmpzJztcblxuLy8gc2NhbGVcbmltcG9ydCBzY2FsZXMgZnJvbSAnLi9zcmMvdXRpbHMvc2NhbGVzLmpzJztcblxuLy8gY29sb3JzXG5pbXBvcnQgY29sb3JzIGZyb20gJy4vc3JjL2NvbG9ycy93M2N4MTEuanMnO1xuaW1wb3J0IGJyZXdlciBmcm9tICcuL3NyYy9jb2xvcnMvY29sb3JicmV3ZXIuanMnO1xuaW1wb3J0IENvbG9yIGZyb20gJy4vc3JjL0NvbG9yLmpzJztcblxuT2JqZWN0LmFzc2lnbihjaHJvbWEsIHtcbiAgICBhbmFseXplLFxuICAgIGF2ZXJhZ2UsXG4gICAgYmV6aWVyLFxuICAgIGJsZW5kLFxuICAgIGJyZXdlcixcbiAgICBDb2xvcixcbiAgICBjb2xvcnMsXG4gICAgY29udHJhc3QsXG4gICAgY29udHJhc3RBUENBLFxuICAgIGN1YmVoZWxpeCxcbiAgICBkZWx0YUUsXG4gICAgZGlzdGFuY2UsXG4gICAgaW5wdXQsXG4gICAgaW50ZXJwb2xhdGU6IG1peCxcbiAgICBsaW1pdHMsXG4gICAgbWl4LFxuICAgIHJhbmRvbSxcbiAgICBzY2FsZSxcbiAgICBzY2FsZXMsXG4gICAgdmFsaWRcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjaHJvbWE7XG5cbmV4cG9ydCB7XG4gICAgYW5hbHl6ZSxcbiAgICBhdmVyYWdlLFxuICAgIGJlemllcixcbiAgICBibGVuZCxcbiAgICBicmV3ZXIsXG4gICAgQ29sb3IsXG4gICAgY29sb3JzLFxuICAgIGNvbnRyYXN0LFxuICAgIGNvbnRyYXN0QVBDQSxcbiAgICBjdWJlaGVsaXgsXG4gICAgZGVsdGFFLFxuICAgIGRpc3RhbmNlLFxuICAgIGlucHV0LFxuICAgIGxpbWl0cyxcbiAgICBtaXgsXG4gICAgbWl4IGFzIGludGVycG9sYXRlLFxuICAgIHJhbmRvbSxcbiAgICBzY2FsZSxcbiAgICBzY2FsZXMsXG4gICAgdmFsaWRcbn07XG5cbmV4cG9ydCAqIGZyb20gJy4vc3JjL2lvL2NteWsvaW5kZXguanMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvaW8vY3NzL2luZGV4LmpzJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2lvL2dsL2luZGV4LmpzJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2lvL2hjZy9pbmRleC5qcyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9pby9oZXgvaW5kZXguanMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvaW8vaHNpL2luZGV4LmpzJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2lvL2hzbC9pbmRleC5qcyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9pby9oc3YvaW5kZXguanMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvaW8vbGFiL2luZGV4LmpzJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2lvL2xjaC9pbmRleC5qcyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9pby9udW0vaW5kZXguanMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvaW8vcmdiL2luZGV4LmpzJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2lvL3RlbXAvaW5kZXguanMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvaW8vb2tsYWIvaW5kZXguanMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvaW8vb2tsY2gvaW5kZXguanMnO1xuIiwiaW1wb3J0IHsgbGFzdCwgY2xpcF9yZ2IsIHR5cGUgfSBmcm9tICcuL3V0aWxzL2luZGV4LmpzJztcbmltcG9ydCBfaW5wdXQgZnJvbSAnLi9pby9pbnB1dC5qcyc7XG5cbmNsYXNzIENvbG9yIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZShhcmdzWzBdKSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgIGFyZ3NbMF0uY29uc3RydWN0b3IgJiZcbiAgICAgICAgICAgIGFyZ3NbMF0uY29uc3RydWN0b3IgPT09IHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyB0aGUgYXJndW1lbnQgaXMgYWxyZWFkeSBhIENvbG9yIGluc3RhbmNlXG4gICAgICAgICAgICByZXR1cm4gYXJnc1swXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBsYXN0IGFyZ3VtZW50IGNvdWxkIGJlIHRoZSBtb2RlXG4gICAgICAgIGxldCBtb2RlID0gbGFzdChhcmdzKTtcbiAgICAgICAgbGV0IGF1dG9kZXRlY3QgPSBmYWxzZTtcbiAgICAgICAgaWYgKCFtb2RlKSB7XG4gICAgICAgICAgICBhdXRvZGV0ZWN0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKCFfaW5wdXQuc29ydGVkKSB7XG4gICAgICAgICAgICAgICAgX2lucHV0LmF1dG9kZXRlY3QgPSBfaW5wdXQuYXV0b2RldGVjdC5zb3J0KChhLCBiKSA9PiBiLnAgLSBhLnApO1xuICAgICAgICAgICAgICAgIF9pbnB1dC5zb3J0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhdXRvLWRldGVjdCBmb3JtYXRcbiAgICAgICAgICAgIGZvciAobGV0IGNoayBvZiBfaW5wdXQuYXV0b2RldGVjdCkge1xuICAgICAgICAgICAgICAgIG1vZGUgPSBjaGsudGVzdCguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICBpZiAobW9kZSkgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9pbnB1dC5mb3JtYXRbbW9kZV0pIHtcbiAgICAgICAgICAgIGNvbnN0IHJnYiA9IF9pbnB1dC5mb3JtYXRbbW9kZV0uYXBwbHkoXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBhdXRvZGV0ZWN0ID8gYXJncyA6IGFyZ3Muc2xpY2UoMCwgLTEpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWUuX3JnYiA9IGNsaXBfcmdiKHJnYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gZm9ybWF0OiAnICsgYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRkIGFscGhhIGNoYW5uZWxcbiAgICAgICAgaWYgKG1lLl9yZ2IubGVuZ3RoID09PSAzKSBtZS5fcmdiLnB1c2goMSk7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBpZiAodHlwZSh0aGlzLmhleCkgPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHRoaXMuaGV4KCk7XG4gICAgICAgIHJldHVybiBgWyR7dGhpcy5fcmdiLmpvaW4oJywnKX1dYDtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb2xvcjtcbiIsImltcG9ydCBDb2xvciBmcm9tICcuL0NvbG9yLmpzJztcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuL3ZlcnNpb24uanMnO1xuXG5jb25zdCBjaHJvbWEgPSAoLi4uYXJncykgPT4ge1xuICAgIHJldHVybiBuZXcgQ29sb3IoLi4uYXJncyk7XG59O1xuXG5jaHJvbWEudmVyc2lvbiA9IHZlcnNpb247XG5cbmV4cG9ydCBkZWZhdWx0IGNocm9tYTtcbiIsIi8qKlxuICAgIENvbG9yQnJld2VyIGNvbG9ycyBmb3IgY2hyb21hLmpzXG5cbiAgICBDb3B5cmlnaHQgKGMpIDIwMDIgQ3ludGhpYSBCcmV3ZXIsIE1hcmsgSGFycm93ZXIsIGFuZCBUaGVcbiAgICBQZW5uc3lsdmFuaWEgU3RhdGUgVW5pdmVyc2l0eS5cblxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZFxuICAgIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SXG4gICAgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAgICBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuY29uc3QgY29sb3JicmV3ZXIgPSB7XG4gICAgLy8gc2VxdWVudGlhbFxuICAgIE9yUmQ6IFsnI2ZmZjdlYycsICcjZmVlOGM4JywgJyNmZGQ0OWUnLCAnI2ZkYmI4NCcsICcjZmM4ZDU5JywgJyNlZjY1NDgnLCAnI2Q3MzAxZicsICcjYjMwMDAwJywgJyM3ZjAwMDAnXSxcbiAgICBQdUJ1OiBbJyNmZmY3ZmInLCAnI2VjZTdmMicsICcjZDBkMWU2JywgJyNhNmJkZGInLCAnIzc0YTljZicsICcjMzY5MGMwJywgJyMwNTcwYjAnLCAnIzA0NWE4ZCcsICcjMDIzODU4J10sXG4gICAgQnVQdTogWycjZjdmY2ZkJywgJyNlMGVjZjQnLCAnI2JmZDNlNicsICcjOWViY2RhJywgJyM4Yzk2YzYnLCAnIzhjNmJiMScsICcjODg0MTlkJywgJyM4MTBmN2MnLCAnIzRkMDA0YiddLFxuICAgIE9yYW5nZXM6IFsnI2ZmZjVlYicsICcjZmVlNmNlJywgJyNmZGQwYTInLCAnI2ZkYWU2YicsICcjZmQ4ZDNjJywgJyNmMTY5MTMnLCAnI2Q5NDgwMScsICcjYTYzNjAzJywgJyM3ZjI3MDQnXSxcbiAgICBCdUduOiBbJyNmN2ZjZmQnLCAnI2U1ZjVmOScsICcjY2NlY2U2JywgJyM5OWQ4YzknLCAnIzY2YzJhNCcsICcjNDFhZTc2JywgJyMyMzhiNDUnLCAnIzAwNmQyYycsICcjMDA0NDFiJ10sXG4gICAgWWxPckJyOiBbJyNmZmZmZTUnLCAnI2ZmZjdiYycsICcjZmVlMzkxJywgJyNmZWM0NGYnLCAnI2ZlOTkyOScsICcjZWM3MDE0JywgJyNjYzRjMDInLCAnIzk5MzQwNCcsICcjNjYyNTA2J10sXG4gICAgWWxHbjogWycjZmZmZmU1JywgJyNmN2ZjYjknLCAnI2Q5ZjBhMycsICcjYWRkZDhlJywgJyM3OGM2NzknLCAnIzQxYWI1ZCcsICcjMjM4NDQzJywgJyMwMDY4MzcnLCAnIzAwNDUyOSddLFxuICAgIFJlZHM6IFsnI2ZmZjVmMCcsICcjZmVlMGQyJywgJyNmY2JiYTEnLCAnI2ZjOTI3MicsICcjZmI2YTRhJywgJyNlZjNiMmMnLCAnI2NiMTgxZCcsICcjYTUwZjE1JywgJyM2NzAwMGQnXSxcbiAgICBSZFB1OiBbJyNmZmY3ZjMnLCAnI2ZkZTBkZCcsICcjZmNjNWMwJywgJyNmYTlmYjUnLCAnI2Y3NjhhMScsICcjZGQzNDk3JywgJyNhZTAxN2UnLCAnIzdhMDE3NycsICcjNDkwMDZhJ10sXG4gICAgR3JlZW5zOiBbJyNmN2ZjZjUnLCAnI2U1ZjVlMCcsICcjYzdlOWMwJywgJyNhMWQ5OWInLCAnIzc0YzQ3NicsICcjNDFhYjVkJywgJyMyMzhiNDUnLCAnIzAwNmQyYycsICcjMDA0NDFiJ10sXG4gICAgWWxHbkJ1OiBbJyNmZmZmZDknLCAnI2VkZjhiMScsICcjYzdlOWI0JywgJyM3ZmNkYmInLCAnIzQxYjZjNCcsICcjMWQ5MWMwJywgJyMyMjVlYTgnLCAnIzI1MzQ5NCcsICcjMDgxZDU4J10sXG4gICAgUHVycGxlczogWycjZmNmYmZkJywgJyNlZmVkZjUnLCAnI2RhZGFlYicsICcjYmNiZGRjJywgJyM5ZTlhYzgnLCAnIzgwN2RiYScsICcjNmE1MWEzJywgJyM1NDI3OGYnLCAnIzNmMDA3ZCddLFxuICAgIEduQnU6IFsnI2Y3ZmNmMCcsICcjZTBmM2RiJywgJyNjY2ViYzUnLCAnI2E4ZGRiNScsICcjN2JjY2M0JywgJyM0ZWIzZDMnLCAnIzJiOGNiZScsICcjMDg2OGFjJywgJyMwODQwODEnXSxcbiAgICBHcmV5czogWycjZmZmZmZmJywgJyNmMGYwZjAnLCAnI2Q5ZDlkOScsICcjYmRiZGJkJywgJyM5Njk2OTYnLCAnIzczNzM3MycsICcjNTI1MjUyJywgJyMyNTI1MjUnLCAnIzAwMDAwMCddLFxuICAgIFlsT3JSZDogWycjZmZmZmNjJywgJyNmZmVkYTAnLCAnI2ZlZDk3NicsICcjZmViMjRjJywgJyNmZDhkM2MnLCAnI2ZjNGUyYScsICcjZTMxYTFjJywgJyNiZDAwMjYnLCAnIzgwMDAyNiddLFxuICAgIFB1UmQ6IFsnI2Y3ZjRmOScsICcjZTdlMWVmJywgJyNkNGI5ZGEnLCAnI2M5OTRjNycsICcjZGY2NWIwJywgJyNlNzI5OGEnLCAnI2NlMTI1NicsICcjOTgwMDQzJywgJyM2NzAwMWYnXSxcbiAgICBCbHVlczogWycjZjdmYmZmJywgJyNkZWViZjcnLCAnI2M2ZGJlZicsICcjOWVjYWUxJywgJyM2YmFlZDYnLCAnIzQyOTJjNicsICcjMjE3MWI1JywgJyMwODUxOWMnLCAnIzA4MzA2YiddLFxuICAgIFB1QnVHbjogWycjZmZmN2ZiJywgJyNlY2UyZjAnLCAnI2QwZDFlNicsICcjYTZiZGRiJywgJyM2N2E5Y2YnLCAnIzM2OTBjMCcsICcjMDI4MThhJywgJyMwMTZjNTknLCAnIzAxNDYzNiddLFxuICAgIFZpcmlkaXM6IFsnIzQ0MDE1NCcsICcjNDgyNzc3JywgJyMzZjRhOGEnLCAnIzMxNjc4ZScsICcjMjY4MzhmJywgJyMxZjlkOGEnLCAnIzZjY2U1YScsICcjYjZkZTJiJywgJyNmZWU4MjUnXSxcblxuICAgIC8vIGRpdmVyZ2luZ1xuICAgIFNwZWN0cmFsOiBbJyM5ZTAxNDInLCAnI2Q1M2U0ZicsICcjZjQ2ZDQzJywgJyNmZGFlNjEnLCAnI2ZlZTA4YicsICcjZmZmZmJmJywgJyNlNmY1OTgnLCAnI2FiZGRhNCcsICcjNjZjMmE1JywgJyMzMjg4YmQnLCAnIzVlNGZhMiddLFxuICAgIFJkWWxHbjogWycjYTUwMDI2JywgJyNkNzMwMjcnLCAnI2Y0NmQ0MycsICcjZmRhZTYxJywgJyNmZWUwOGInLCAnI2ZmZmZiZicsICcjZDllZjhiJywgJyNhNmQ5NmEnLCAnIzY2YmQ2MycsICcjMWE5ODUwJywgJyMwMDY4MzcnXSxcbiAgICBSZEJ1OiBbJyM2NzAwMWYnLCAnI2IyMTgyYicsICcjZDY2MDRkJywgJyNmNGE1ODInLCAnI2ZkZGJjNycsICcjZjdmN2Y3JywgJyNkMWU1ZjAnLCAnIzkyYzVkZScsICcjNDM5M2MzJywgJyMyMTY2YWMnLCAnIzA1MzA2MSddLFxuICAgIFBpWUc6IFsnIzhlMDE1MicsICcjYzUxYjdkJywgJyNkZTc3YWUnLCAnI2YxYjZkYScsICcjZmRlMGVmJywgJyNmN2Y3ZjcnLCAnI2U2ZjVkMCcsICcjYjhlMTg2JywgJyM3ZmJjNDEnLCAnIzRkOTIyMScsICcjMjc2NDE5J10sXG4gICAgUFJHbjogWycjNDAwMDRiJywgJyM3NjJhODMnLCAnIzk5NzBhYicsICcjYzJhNWNmJywgJyNlN2Q0ZTgnLCAnI2Y3ZjdmNycsICcjZDlmMGQzJywgJyNhNmRiYTAnLCAnIzVhYWU2MScsICcjMWI3ODM3JywgJyMwMDQ0MWInXSxcbiAgICBSZFlsQnU6IFsnI2E1MDAyNicsICcjZDczMDI3JywgJyNmNDZkNDMnLCAnI2ZkYWU2MScsICcjZmVlMDkwJywgJyNmZmZmYmYnLCAnI2UwZjNmOCcsICcjYWJkOWU5JywgJyM3NGFkZDEnLCAnIzQ1NzViNCcsICcjMzEzNjk1J10sXG4gICAgQnJCRzogWycjNTQzMDA1JywgJyM4YzUxMGEnLCAnI2JmODEyZCcsICcjZGZjMjdkJywgJyNmNmU4YzMnLCAnI2Y1ZjVmNScsICcjYzdlYWU1JywgJyM4MGNkYzEnLCAnIzM1OTc4ZicsICcjMDE2NjVlJywgJyMwMDNjMzAnXSxcbiAgICBSZEd5OiBbJyM2NzAwMWYnLCAnI2IyMTgyYicsICcjZDY2MDRkJywgJyNmNGE1ODInLCAnI2ZkZGJjNycsICcjZmZmZmZmJywgJyNlMGUwZTAnLCAnI2JhYmFiYScsICcjODc4Nzg3JywgJyM0ZDRkNGQnLCAnIzFhMWExYSddLFxuICAgIFB1T3I6IFsnIzdmM2IwOCcsICcjYjM1ODA2JywgJyNlMDgyMTQnLCAnI2ZkYjg2MycsICcjZmVlMGI2JywgJyNmN2Y3ZjcnLCAnI2Q4ZGFlYicsICcjYjJhYmQyJywgJyM4MDczYWMnLCAnIzU0Mjc4OCcsICcjMmQwMDRiJ10sXG5cbiAgICAvLyBxdWFsaXRhdGl2ZVxuICAgIFNldDI6IFsnIzY2YzJhNScsICcjZmM4ZDYyJywgJyM4ZGEwY2InLCAnI2U3OGFjMycsICcjYTZkODU0JywgJyNmZmQ5MmYnLCAnI2U1YzQ5NCcsICcjYjNiM2IzJ10sXG4gICAgQWNjZW50OiBbJyM3ZmM5N2YnLCAnI2JlYWVkNCcsICcjZmRjMDg2JywgJyNmZmZmOTknLCAnIzM4NmNiMCcsICcjZjAwMjdmJywgJyNiZjViMTcnLCAnIzY2NjY2NiddLFxuICAgIFNldDE6IFsnI2U0MWExYycsICcjMzc3ZWI4JywgJyM0ZGFmNGEnLCAnIzk4NGVhMycsICcjZmY3ZjAwJywgJyNmZmZmMzMnLCAnI2E2NTYyOCcsICcjZjc4MWJmJywgJyM5OTk5OTknXSxcbiAgICBTZXQzOiBbJyM4ZGQzYzcnLCAnI2ZmZmZiMycsICcjYmViYWRhJywgJyNmYjgwNzInLCAnIzgwYjFkMycsICcjZmRiNDYyJywgJyNiM2RlNjknLCAnI2ZjY2RlNScsICcjZDlkOWQ5JywgJyNiYzgwYmQnLCAnI2NjZWJjNScsICcjZmZlZDZmJ10sXG4gICAgRGFyazI6IFsnIzFiOWU3NycsICcjZDk1ZjAyJywgJyM3NTcwYjMnLCAnI2U3Mjk4YScsICcjNjZhNjFlJywgJyNlNmFiMDInLCAnI2E2NzYxZCcsICcjNjY2NjY2J10sXG4gICAgUGFpcmVkOiBbJyNhNmNlZTMnLCAnIzFmNzhiNCcsICcjYjJkZjhhJywgJyMzM2EwMmMnLCAnI2ZiOWE5OScsICcjZTMxYTFjJywgJyNmZGJmNmYnLCAnI2ZmN2YwMCcsICcjY2FiMmQ2JywgJyM2YTNkOWEnLCAnI2ZmZmY5OScsICcjYjE1OTI4J10sXG4gICAgUGFzdGVsMjogWycjYjNlMmNkJywgJyNmZGNkYWMnLCAnI2NiZDVlOCcsICcjZjRjYWU0JywgJyNlNmY1YzknLCAnI2ZmZjJhZScsICcjZjFlMmNjJywgJyNjY2NjY2MnXSxcbiAgICBQYXN0ZWwxOiBbJyNmYmI0YWUnLCAnI2IzY2RlMycsICcjY2NlYmM1JywgJyNkZWNiZTQnLCAnI2ZlZDlhNicsICcjZmZmZmNjJywgJyNlNWQ4YmQnLCAnI2ZkZGFlYycsICcjZjJmMmYyJ11cbn07XG5cbmNvbnN0IGNvbG9yYnJld2VyVHlwZXMgPSBPYmplY3Qua2V5cyhjb2xvcmJyZXdlcik7XG5jb25zdCB0eXBlTWFwID0gbmV3IE1hcChjb2xvcmJyZXdlclR5cGVzLm1hcCgoa2V5KSA9PiBba2V5LnRvTG93ZXJDYXNlKCksIGtleV0pKTtcblxuLy8gdXNlIFByb3h5IHRvIGFsbG93IGNhc2UtaW5zZW5zaXRpdmUgYWNjZXNzIHRvIHBhbGV0dGVzXG5jb25zdCBjb2xvcmJyZXdlclByb3h5ID1cbiAgICB0eXBlb2YgUHJveHkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBuZXcgUHJveHkoY29sb3JicmV3ZXIsIHtcbiAgICAgICAgICAgICAgZ2V0KHRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgbG93ZXIgPSBwcm9wLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZU1hcC5oYXMobG93ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFt0eXBlTWFwLmdldChsb3dlcildO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBnZXRPd25Qcm9wZXJ0eU5hbWVzKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNvbG9yYnJld2VyVHlwZXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBjb2xvcmJyZXdlcjtcblxuZXhwb3J0IGRlZmF1bHQgY29sb3JicmV3ZXJQcm94eTtcbiIsIi8qKlxuXHRYMTEgY29sb3IgbmFtZXNcblxuXHRodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWNvbG9yLyNzdmctY29sb3JcbiovXG5cbmNvbnN0IHczY3gxMSA9IHtcbiAgICBhbGljZWJsdWU6ICcjZjBmOGZmJyxcbiAgICBhbnRpcXVld2hpdGU6ICcjZmFlYmQ3JyxcbiAgICBhcXVhOiAnIzAwZmZmZicsXG4gICAgYXF1YW1hcmluZTogJyM3ZmZmZDQnLFxuICAgIGF6dXJlOiAnI2YwZmZmZicsXG4gICAgYmVpZ2U6ICcjZjVmNWRjJyxcbiAgICBiaXNxdWU6ICcjZmZlNGM0JyxcbiAgICBibGFjazogJyMwMDAwMDAnLFxuICAgIGJsYW5jaGVkYWxtb25kOiAnI2ZmZWJjZCcsXG4gICAgYmx1ZTogJyMwMDAwZmYnLFxuICAgIGJsdWV2aW9sZXQ6ICcjOGEyYmUyJyxcbiAgICBicm93bjogJyNhNTJhMmEnLFxuICAgIGJ1cmx5d29vZDogJyNkZWI4ODcnLFxuICAgIGNhZGV0Ymx1ZTogJyM1ZjllYTAnLFxuICAgIGNoYXJ0cmV1c2U6ICcjN2ZmZjAwJyxcbiAgICBjaG9jb2xhdGU6ICcjZDI2OTFlJyxcbiAgICBjb3JhbDogJyNmZjdmNTAnLFxuICAgIGNvcm5mbG93ZXJibHVlOiAnIzY0OTVlZCcsXG4gICAgY29ybnNpbGs6ICcjZmZmOGRjJyxcbiAgICBjcmltc29uOiAnI2RjMTQzYycsXG4gICAgY3lhbjogJyMwMGZmZmYnLFxuICAgIGRhcmtibHVlOiAnIzAwMDA4YicsXG4gICAgZGFya2N5YW46ICcjMDA4YjhiJyxcbiAgICBkYXJrZ29sZGVucm9kOiAnI2I4ODYwYicsXG4gICAgZGFya2dyYXk6ICcjYTlhOWE5JyxcbiAgICBkYXJrZ3JlZW46ICcjMDA2NDAwJyxcbiAgICBkYXJrZ3JleTogJyNhOWE5YTknLFxuICAgIGRhcmtraGFraTogJyNiZGI3NmInLFxuICAgIGRhcmttYWdlbnRhOiAnIzhiMDA4YicsXG4gICAgZGFya29saXZlZ3JlZW46ICcjNTU2YjJmJyxcbiAgICBkYXJrb3JhbmdlOiAnI2ZmOGMwMCcsXG4gICAgZGFya29yY2hpZDogJyM5OTMyY2MnLFxuICAgIGRhcmtyZWQ6ICcjOGIwMDAwJyxcbiAgICBkYXJrc2FsbW9uOiAnI2U5OTY3YScsXG4gICAgZGFya3NlYWdyZWVuOiAnIzhmYmM4ZicsXG4gICAgZGFya3NsYXRlYmx1ZTogJyM0ODNkOGInLFxuICAgIGRhcmtzbGF0ZWdyYXk6ICcjMmY0ZjRmJyxcbiAgICBkYXJrc2xhdGVncmV5OiAnIzJmNGY0ZicsXG4gICAgZGFya3R1cnF1b2lzZTogJyMwMGNlZDEnLFxuICAgIGRhcmt2aW9sZXQ6ICcjOTQwMGQzJyxcbiAgICBkZWVwcGluazogJyNmZjE0OTMnLFxuICAgIGRlZXBza3libHVlOiAnIzAwYmZmZicsXG4gICAgZGltZ3JheTogJyM2OTY5NjknLFxuICAgIGRpbWdyZXk6ICcjNjk2OTY5JyxcbiAgICBkb2RnZXJibHVlOiAnIzFlOTBmZicsXG4gICAgZmlyZWJyaWNrOiAnI2IyMjIyMicsXG4gICAgZmxvcmFsd2hpdGU6ICcjZmZmYWYwJyxcbiAgICBmb3Jlc3RncmVlbjogJyMyMjhiMjInLFxuICAgIGZ1Y2hzaWE6ICcjZmYwMGZmJyxcbiAgICBnYWluc2Jvcm86ICcjZGNkY2RjJyxcbiAgICBnaG9zdHdoaXRlOiAnI2Y4ZjhmZicsXG4gICAgZ29sZDogJyNmZmQ3MDAnLFxuICAgIGdvbGRlbnJvZDogJyNkYWE1MjAnLFxuICAgIGdyYXk6ICcjODA4MDgwJyxcbiAgICBncmVlbjogJyMwMDgwMDAnLFxuICAgIGdyZWVueWVsbG93OiAnI2FkZmYyZicsXG4gICAgZ3JleTogJyM4MDgwODAnLFxuICAgIGhvbmV5ZGV3OiAnI2YwZmZmMCcsXG4gICAgaG90cGluazogJyNmZjY5YjQnLFxuICAgIGluZGlhbnJlZDogJyNjZDVjNWMnLFxuICAgIGluZGlnbzogJyM0YjAwODInLFxuICAgIGl2b3J5OiAnI2ZmZmZmMCcsXG4gICAga2hha2k6ICcjZjBlNjhjJyxcbiAgICBsYXNlcmxlbW9uOiAnI2ZmZmY1NCcsXG4gICAgbGF2ZW5kZXI6ICcjZTZlNmZhJyxcbiAgICBsYXZlbmRlcmJsdXNoOiAnI2ZmZjBmNScsXG4gICAgbGF3bmdyZWVuOiAnIzdjZmMwMCcsXG4gICAgbGVtb25jaGlmZm9uOiAnI2ZmZmFjZCcsXG4gICAgbGlnaHRibHVlOiAnI2FkZDhlNicsXG4gICAgbGlnaHRjb3JhbDogJyNmMDgwODAnLFxuICAgIGxpZ2h0Y3lhbjogJyNlMGZmZmYnLFxuICAgIGxpZ2h0Z29sZGVucm9kOiAnI2ZhZmFkMicsXG4gICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICcjZmFmYWQyJyxcbiAgICBsaWdodGdyYXk6ICcjZDNkM2QzJyxcbiAgICBsaWdodGdyZWVuOiAnIzkwZWU5MCcsXG4gICAgbGlnaHRncmV5OiAnI2QzZDNkMycsXG4gICAgbGlnaHRwaW5rOiAnI2ZmYjZjMScsXG4gICAgbGlnaHRzYWxtb246ICcjZmZhMDdhJyxcbiAgICBsaWdodHNlYWdyZWVuOiAnIzIwYjJhYScsXG4gICAgbGlnaHRza3libHVlOiAnIzg3Y2VmYScsXG4gICAgbGlnaHRzbGF0ZWdyYXk6ICcjNzc4ODk5JyxcbiAgICBsaWdodHNsYXRlZ3JleTogJyM3Nzg4OTknLFxuICAgIGxpZ2h0c3RlZWxibHVlOiAnI2IwYzRkZScsXG4gICAgbGlnaHR5ZWxsb3c6ICcjZmZmZmUwJyxcbiAgICBsaW1lOiAnIzAwZmYwMCcsXG4gICAgbGltZWdyZWVuOiAnIzMyY2QzMicsXG4gICAgbGluZW46ICcjZmFmMGU2JyxcbiAgICBtYWdlbnRhOiAnI2ZmMDBmZicsXG4gICAgbWFyb29uOiAnIzgwMDAwMCcsXG4gICAgbWFyb29uMjogJyM3ZjAwMDAnLFxuICAgIG1hcm9vbjM6ICcjYjAzMDYwJyxcbiAgICBtZWRpdW1hcXVhbWFyaW5lOiAnIzY2Y2RhYScsXG4gICAgbWVkaXVtYmx1ZTogJyMwMDAwY2QnLFxuICAgIG1lZGl1bW9yY2hpZDogJyNiYTU1ZDMnLFxuICAgIG1lZGl1bXB1cnBsZTogJyM5MzcwZGInLFxuICAgIG1lZGl1bXNlYWdyZWVuOiAnIzNjYjM3MScsXG4gICAgbWVkaXVtc2xhdGVibHVlOiAnIzdiNjhlZScsXG4gICAgbWVkaXVtc3ByaW5nZ3JlZW46ICcjMDBmYTlhJyxcbiAgICBtZWRpdW10dXJxdW9pc2U6ICcjNDhkMWNjJyxcbiAgICBtZWRpdW12aW9sZXRyZWQ6ICcjYzcxNTg1JyxcbiAgICBtaWRuaWdodGJsdWU6ICcjMTkxOTcwJyxcbiAgICBtaW50Y3JlYW06ICcjZjVmZmZhJyxcbiAgICBtaXN0eXJvc2U6ICcjZmZlNGUxJyxcbiAgICBtb2NjYXNpbjogJyNmZmU0YjUnLFxuICAgIG5hdmFqb3doaXRlOiAnI2ZmZGVhZCcsXG4gICAgbmF2eTogJyMwMDAwODAnLFxuICAgIG9sZGxhY2U6ICcjZmRmNWU2JyxcbiAgICBvbGl2ZTogJyM4MDgwMDAnLFxuICAgIG9saXZlZHJhYjogJyM2YjhlMjMnLFxuICAgIG9yYW5nZTogJyNmZmE1MDAnLFxuICAgIG9yYW5nZXJlZDogJyNmZjQ1MDAnLFxuICAgIG9yY2hpZDogJyNkYTcwZDYnLFxuICAgIHBhbGVnb2xkZW5yb2Q6ICcjZWVlOGFhJyxcbiAgICBwYWxlZ3JlZW46ICcjOThmYjk4JyxcbiAgICBwYWxldHVycXVvaXNlOiAnI2FmZWVlZScsXG4gICAgcGFsZXZpb2xldHJlZDogJyNkYjcwOTMnLFxuICAgIHBhcGF5YXdoaXA6ICcjZmZlZmQ1JyxcbiAgICBwZWFjaHB1ZmY6ICcjZmZkYWI5JyxcbiAgICBwZXJ1OiAnI2NkODUzZicsXG4gICAgcGluazogJyNmZmMwY2InLFxuICAgIHBsdW06ICcjZGRhMGRkJyxcbiAgICBwb3dkZXJibHVlOiAnI2IwZTBlNicsXG4gICAgcHVycGxlOiAnIzgwMDA4MCcsXG4gICAgcHVycGxlMjogJyM3ZjAwN2YnLFxuICAgIHB1cnBsZTM6ICcjYTAyMGYwJyxcbiAgICByZWJlY2NhcHVycGxlOiAnIzY2MzM5OScsXG4gICAgcmVkOiAnI2ZmMDAwMCcsXG4gICAgcm9zeWJyb3duOiAnI2JjOGY4ZicsXG4gICAgcm95YWxibHVlOiAnIzQxNjllMScsXG4gICAgc2FkZGxlYnJvd246ICcjOGI0NTEzJyxcbiAgICBzYWxtb246ICcjZmE4MDcyJyxcbiAgICBzYW5keWJyb3duOiAnI2Y0YTQ2MCcsXG4gICAgc2VhZ3JlZW46ICcjMmU4YjU3JyxcbiAgICBzZWFzaGVsbDogJyNmZmY1ZWUnLFxuICAgIHNpZW5uYTogJyNhMDUyMmQnLFxuICAgIHNpbHZlcjogJyNjMGMwYzAnLFxuICAgIHNreWJsdWU6ICcjODdjZWViJyxcbiAgICBzbGF0ZWJsdWU6ICcjNmE1YWNkJyxcbiAgICBzbGF0ZWdyYXk6ICcjNzA4MDkwJyxcbiAgICBzbGF0ZWdyZXk6ICcjNzA4MDkwJyxcbiAgICBzbm93OiAnI2ZmZmFmYScsXG4gICAgc3ByaW5nZ3JlZW46ICcjMDBmZjdmJyxcbiAgICBzdGVlbGJsdWU6ICcjNDY4MmI0JyxcbiAgICB0YW46ICcjZDJiNDhjJyxcbiAgICB0ZWFsOiAnIzAwODA4MCcsXG4gICAgdGhpc3RsZTogJyNkOGJmZDgnLFxuICAgIHRvbWF0bzogJyNmZjYzNDcnLFxuICAgIHR1cnF1b2lzZTogJyM0MGUwZDAnLFxuICAgIHZpb2xldDogJyNlZTgyZWUnLFxuICAgIHdoZWF0OiAnI2Y1ZGViMycsXG4gICAgd2hpdGU6ICcjZmZmZmZmJyxcbiAgICB3aGl0ZXNtb2tlOiAnI2Y1ZjVmNScsXG4gICAgeWVsbG93OiAnI2ZmZmYwMCcsXG4gICAgeWVsbG93Z3JlZW46ICcjOWFjZDMyJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdzNjeDExO1xuIiwiaW1wb3J0IENvbG9yIGZyb20gJy4uL0NvbG9yLmpzJztcbmltcG9ydCB7IGNsaXBfcmdiIH0gZnJvbSAnLi4vdXRpbHMvaW5kZXguanMnO1xuXG5jb25zdCB7IHBvdywgc3FydCwgUEksIGNvcywgc2luLCBhdGFuMiB9ID0gTWF0aDtcblxuZXhwb3J0IGRlZmF1bHQgKGNvbG9ycywgbW9kZSA9ICdscmdiJywgd2VpZ2h0cyA9IG51bGwpID0+IHtcbiAgICBjb25zdCBsID0gY29sb3JzLmxlbmd0aDtcbiAgICBpZiAoIXdlaWdodHMpIHdlaWdodHMgPSBBcnJheS5mcm9tKG5ldyBBcnJheShsKSkubWFwKCgpID0+IDEpO1xuICAgIC8vIG5vcm1hbGl6ZSB3ZWlnaHRzXG4gICAgY29uc3QgayA9XG4gICAgICAgIGwgL1xuICAgICAgICB3ZWlnaHRzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGEgKyBiO1xuICAgICAgICB9KTtcbiAgICB3ZWlnaHRzLmZvckVhY2goKHcsIGkpID0+IHtcbiAgICAgICAgd2VpZ2h0c1tpXSAqPSBrO1xuICAgIH0pO1xuICAgIC8vIGNvbnZlcnQgY29sb3JzIHRvIENvbG9yIG9iamVjdHNcbiAgICBjb2xvcnMgPSBjb2xvcnMubWFwKChjKSA9PiBuZXcgQ29sb3IoYykpO1xuICAgIGlmIChtb2RlID09PSAnbHJnYicpIHtcbiAgICAgICAgcmV0dXJuIF9hdmVyYWdlX2xyZ2IoY29sb3JzLCB3ZWlnaHRzKTtcbiAgICB9XG4gICAgY29uc3QgZmlyc3QgPSBjb2xvcnMuc2hpZnQoKTtcbiAgICBjb25zdCB4eXogPSBmaXJzdC5nZXQobW9kZSk7XG4gICAgY29uc3QgY250ID0gW107XG4gICAgbGV0IGR4ID0gMDtcbiAgICBsZXQgZHkgPSAwO1xuICAgIC8vIGluaXRpYWwgY29sb3JcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHh5ei5sZW5ndGg7IGkrKykge1xuICAgICAgICB4eXpbaV0gPSAoeHl6W2ldIHx8IDApICogd2VpZ2h0c1swXTtcbiAgICAgICAgY250LnB1c2goaXNOYU4oeHl6W2ldKSA/IDAgOiB3ZWlnaHRzWzBdKTtcbiAgICAgICAgaWYgKG1vZGUuY2hhckF0KGkpID09PSAnaCcgJiYgIWlzTmFOKHh5eltpXSkpIHtcbiAgICAgICAgICAgIGNvbnN0IEEgPSAoeHl6W2ldIC8gMTgwKSAqIFBJO1xuICAgICAgICAgICAgZHggKz0gY29zKEEpICogd2VpZ2h0c1swXTtcbiAgICAgICAgICAgIGR5ICs9IHNpbihBKSAqIHdlaWdodHNbMF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYWxwaGEgPSBmaXJzdC5hbHBoYSgpICogd2VpZ2h0c1swXTtcbiAgICBjb2xvcnMuZm9yRWFjaCgoYywgY2kpID0+IHtcbiAgICAgICAgY29uc3QgeHl6MiA9IGMuZ2V0KG1vZGUpO1xuICAgICAgICBhbHBoYSArPSBjLmFscGhhKCkgKiB3ZWlnaHRzW2NpICsgMV07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeHl6Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKHh5ejJbaV0pKSB7XG4gICAgICAgICAgICAgICAgY250W2ldICs9IHdlaWdodHNbY2kgKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAobW9kZS5jaGFyQXQoaSkgPT09ICdoJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBBID0gKHh5ejJbaV0gLyAxODApICogUEk7XG4gICAgICAgICAgICAgICAgICAgIGR4ICs9IGNvcyhBKSAqIHdlaWdodHNbY2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgZHkgKz0gc2luKEEpICogd2VpZ2h0c1tjaSArIDFdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHh5eltpXSArPSB4eXoyW2ldICogd2VpZ2h0c1tjaSArIDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB4eXoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG1vZGUuY2hhckF0KGkpID09PSAnaCcpIHtcbiAgICAgICAgICAgIGxldCBBID0gKGF0YW4yKGR5IC8gY250W2ldLCBkeCAvIGNudFtpXSkgLyBQSSkgKiAxODA7XG4gICAgICAgICAgICB3aGlsZSAoQSA8IDApIEEgKz0gMzYwO1xuICAgICAgICAgICAgd2hpbGUgKEEgPj0gMzYwKSBBIC09IDM2MDtcbiAgICAgICAgICAgIHh5eltpXSA9IEE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4eXpbaV0gPSB4eXpbaV0gLyBjbnRbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWxwaGEgLz0gbDtcbiAgICByZXR1cm4gbmV3IENvbG9yKHh5eiwgbW9kZSkuYWxwaGEoYWxwaGEgPiAwLjk5OTk5ID8gMSA6IGFscGhhLCB0cnVlKTtcbn07XG5cbmNvbnN0IF9hdmVyYWdlX2xyZ2IgPSAoY29sb3JzLCB3ZWlnaHRzKSA9PiB7XG4gICAgY29uc3QgbCA9IGNvbG9ycy5sZW5ndGg7XG4gICAgY29uc3QgeHl6ID0gWzAsIDAsIDAsIDBdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbCA9IGNvbG9yc1tpXTtcbiAgICAgICAgY29uc3QgZiA9IHdlaWdodHNbaV0gLyBsO1xuICAgICAgICBjb25zdCByZ2IgPSBjb2wuX3JnYjtcbiAgICAgICAgeHl6WzBdICs9IHBvdyhyZ2JbMF0sIDIpICogZjtcbiAgICAgICAgeHl6WzFdICs9IHBvdyhyZ2JbMV0sIDIpICogZjtcbiAgICAgICAgeHl6WzJdICs9IHBvdyhyZ2JbMl0sIDIpICogZjtcbiAgICAgICAgeHl6WzNdICs9IHJnYlszXSAqIGY7XG4gICAgfVxuICAgIHh5elswXSA9IHNxcnQoeHl6WzBdKTtcbiAgICB4eXpbMV0gPSBzcXJ0KHh5elsxXSk7XG4gICAgeHl6WzJdID0gc3FydCh4eXpbMl0pO1xuICAgIGlmICh4eXpbM10gPiAwLjk5OTk5OTkpIHh5elszXSA9IDE7XG4gICAgcmV0dXJuIG5ldyBDb2xvcihjbGlwX3JnYih4eXopKTtcbn07XG4iLCIvL1xuLy8gaW50ZXJwb2xhdGVzIGJldHdlZW4gYSBzZXQgb2YgY29sb3JzIHV6aW5nIGEgYmV6aWVyIHNwbGluZVxuLy9cblxuLy8gQHJlcXVpcmVzIHV0aWxzIGxhYlxuaW1wb3J0IENvbG9yIGZyb20gJy4uL0NvbG9yLmpzJztcbmltcG9ydCAnLi4vaW8vbGFiL2luZGV4LmpzJztcbmltcG9ydCBzY2FsZSBmcm9tICcuL3NjYWxlLmpzJztcblxuLy8gbnRoIHJvdyBvZiB0aGUgcGFzY2FsIHRyaWFuZ2xlXG5jb25zdCBiaW5vbV9yb3cgPSBmdW5jdGlvbiAobikge1xuICAgIGxldCByb3cgPSBbMSwgMV07XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgbGV0IG5ld3JvdyA9IFsxXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gcm93Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBuZXdyb3dbal0gPSAocm93W2pdIHx8IDApICsgcm93W2ogLSAxXTtcbiAgICAgICAgfVxuICAgICAgICByb3cgPSBuZXdyb3c7XG4gICAgfVxuICAgIHJldHVybiByb3c7XG59O1xuXG5jb25zdCBiZXppZXIgPSBmdW5jdGlvbiAoY29sb3JzKSB7XG4gICAgbGV0IEksIGxhYjAsIGxhYjEsIGxhYjI7XG4gICAgY29sb3JzID0gY29sb3JzLm1hcCgoYykgPT4gbmV3IENvbG9yKGMpKTtcbiAgICBpZiAoY29sb3JzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAvLyBsaW5lYXIgaW50ZXJwb2xhdGlvblxuICAgICAgICBbbGFiMCwgbGFiMV0gPSBjb2xvcnMubWFwKChjKSA9PiBjLmxhYigpKTtcbiAgICAgICAgSSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICBjb25zdCBsYWIgPSBbMCwgMSwgMl0ubWFwKChpKSA9PiBsYWIwW2ldICsgdCAqIChsYWIxW2ldIC0gbGFiMFtpXSkpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihsYWIsICdsYWInKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGNvbG9ycy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgLy8gcXVhZHJhdGljIGJlemllciBpbnRlcnBvbGF0aW9uXG4gICAgICAgIFtsYWIwLCBsYWIxLCBsYWIyXSA9IGNvbG9ycy5tYXAoKGMpID0+IGMubGFiKCkpO1xuICAgICAgICBJID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhYiA9IFswLCAxLCAyXS5tYXAoXG4gICAgICAgICAgICAgICAgKGkpID0+XG4gICAgICAgICAgICAgICAgICAgICgxIC0gdCkgKiAoMSAtIHQpICogbGFiMFtpXSArXG4gICAgICAgICAgICAgICAgICAgIDIgKiAoMSAtIHQpICogdCAqIGxhYjFbaV0gK1xuICAgICAgICAgICAgICAgICAgICB0ICogdCAqIGxhYjJbaV1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKGxhYiwgJ2xhYicpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoY29sb3JzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAvLyBjdWJpYyBiZXppZXIgaW50ZXJwb2xhdGlvblxuICAgICAgICBsZXQgbGFiMztcbiAgICAgICAgW2xhYjAsIGxhYjEsIGxhYjIsIGxhYjNdID0gY29sb3JzLm1hcCgoYykgPT4gYy5sYWIoKSk7XG4gICAgICAgIEkgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgY29uc3QgbGFiID0gWzAsIDEsIDJdLm1hcChcbiAgICAgICAgICAgICAgICAoaSkgPT5cbiAgICAgICAgICAgICAgICAgICAgKDEgLSB0KSAqICgxIC0gdCkgKiAoMSAtIHQpICogbGFiMFtpXSArXG4gICAgICAgICAgICAgICAgICAgIDMgKiAoMSAtIHQpICogKDEgLSB0KSAqIHQgKiBsYWIxW2ldICtcbiAgICAgICAgICAgICAgICAgICAgMyAqICgxIC0gdCkgKiB0ICogdCAqIGxhYjJbaV0gK1xuICAgICAgICAgICAgICAgICAgICB0ICogdCAqIHQgKiBsYWIzW2ldXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihsYWIsICdsYWInKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGNvbG9ycy5sZW5ndGggPj0gNSkge1xuICAgICAgICAvLyBnZW5lcmFsIGNhc2UgKGRlZ3JlZSBuIGJlemllcilcbiAgICAgICAgbGV0IGxhYnMsIHJvdywgbjtcbiAgICAgICAgbGFicyA9IGNvbG9ycy5tYXAoKGMpID0+IGMubGFiKCkpO1xuICAgICAgICBuID0gY29sb3JzLmxlbmd0aCAtIDE7XG4gICAgICAgIHJvdyA9IGJpbm9tX3JvdyhuKTtcbiAgICAgICAgSSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICBjb25zdCB1ID0gMSAtIHQ7XG4gICAgICAgICAgICBjb25zdCBsYWIgPSBbMCwgMSwgMl0ubWFwKChpKSA9PlxuICAgICAgICAgICAgICAgIGxhYnMucmVkdWNlKFxuICAgICAgICAgICAgICAgICAgICAoc3VtLCBlbCwgaikgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bSArIHJvd1tqXSAqIHUgKiogKG4gLSBqKSAqIHQgKiogaiAqIGVsW2ldLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IobGFiLCAnbGFiJyk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ05vIHBvaW50IGluIHJ1bm5pbmcgYmV6aWVyIHdpdGggb25seSBvbmUgY29sb3IuJyk7XG4gICAgfVxuICAgIHJldHVybiBJO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKGNvbG9ycykgPT4ge1xuICAgIGNvbnN0IGYgPSBiZXppZXIoY29sb3JzKTtcbiAgICBmLnNjYWxlID0gKCkgPT4gc2NhbGUoZik7XG4gICAgcmV0dXJuIGY7XG59O1xuIiwiLypcbiAqIGludGVycG9sYXRlcyBiZXR3ZWVuIGEgc2V0IG9mIGNvbG9ycyB1emluZyBhIGJlemllciBzcGxpbmVcbiAqIGJsZW5kIG1vZGUgZm9ybXVsYXMgdGFrZW4gZnJvbSBodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxODAxMTAwMTQ5NDYvaHR0cDovL3d3dy52ZW50dXJlLXdhcmUuY29tL2tldmluL2NvZGluZy9sZXRzLWxlYXJuLW1hdGgtcGhvdG9zaG9wLWJsZW5kLW1vZGVzL1xuICovXG5cbmltcG9ydCAnLi4vaW8vcmdiL2luZGV4LmpzJztcbmltcG9ydCBjaHJvbWEgZnJvbSAnLi4vY2hyb21hLmpzJztcblxuY29uc3QgYmxlbmQgPSAoYm90dG9tLCB0b3AsIG1vZGUpID0+IHtcbiAgICBpZiAoIWJsZW5kW21vZGVdKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBibGVuZCBtb2RlICcgKyBtb2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIGJsZW5kW21vZGVdKGJvdHRvbSwgdG9wKTtcbn07XG5cbmNvbnN0IGJsZW5kX2YgPSAoZikgPT4gKGJvdHRvbSwgdG9wKSA9PiB7XG4gICAgY29uc3QgYzAgPSBjaHJvbWEodG9wKS5yZ2IoKTtcbiAgICBjb25zdCBjMSA9IGNocm9tYShib3R0b20pLnJnYigpO1xuICAgIHJldHVybiBjaHJvbWEucmdiKGYoYzAsIGMxKSk7XG59O1xuXG5jb25zdCBlYWNoID0gKGYpID0+IChjMCwgYzEpID0+IHtcbiAgICBjb25zdCBvdXQgPSBbXTtcbiAgICBvdXRbMF0gPSBmKGMwWzBdLCBjMVswXSk7XG4gICAgb3V0WzFdID0gZihjMFsxXSwgYzFbMV0pO1xuICAgIG91dFsyXSA9IGYoYzBbMl0sIGMxWzJdKTtcbiAgICByZXR1cm4gb3V0O1xufTtcblxuY29uc3Qgbm9ybWFsID0gKGEpID0+IGE7XG5jb25zdCBtdWx0aXBseSA9IChhLCBiKSA9PiAoYSAqIGIpIC8gMjU1O1xuY29uc3QgZGFya2VuID0gKGEsIGIpID0+IChhID4gYiA/IGIgOiBhKTtcbmNvbnN0IGxpZ2h0ZW4gPSAoYSwgYikgPT4gKGEgPiBiID8gYSA6IGIpO1xuY29uc3Qgc2NyZWVuID0gKGEsIGIpID0+IDI1NSAqICgxIC0gKDEgLSBhIC8gMjU1KSAqICgxIC0gYiAvIDI1NSkpO1xuY29uc3Qgb3ZlcmxheSA9IChhLCBiKSA9PlxuICAgIGIgPCAxMjggPyAoMiAqIGEgKiBiKSAvIDI1NSA6IDI1NSAqICgxIC0gMiAqICgxIC0gYSAvIDI1NSkgKiAoMSAtIGIgLyAyNTUpKTtcbmNvbnN0IGJ1cm4gPSAoYSwgYikgPT4gMjU1ICogKDEgLSAoMSAtIGIgLyAyNTUpIC8gKGEgLyAyNTUpKTtcbmNvbnN0IGRvZGdlID0gKGEsIGIpID0+IHtcbiAgICBpZiAoYSA9PT0gMjU1KSByZXR1cm4gMjU1O1xuICAgIGEgPSAoMjU1ICogKGIgLyAyNTUpKSAvICgxIC0gYSAvIDI1NSk7XG4gICAgcmV0dXJuIGEgPiAyNTUgPyAyNTUgOiBhO1xufTtcblxuLy8gIyBhZGQgPSAoYSxiKSAtPlxuLy8gIyAgICAgaWYgKGEgKyBiID4gMjU1KSB0aGVuIDI1NSBlbHNlIGEgKyBiXG5cbmJsZW5kLm5vcm1hbCA9IGJsZW5kX2YoZWFjaChub3JtYWwpKTtcbmJsZW5kLm11bHRpcGx5ID0gYmxlbmRfZihlYWNoKG11bHRpcGx5KSk7XG5ibGVuZC5zY3JlZW4gPSBibGVuZF9mKGVhY2goc2NyZWVuKSk7XG5ibGVuZC5vdmVybGF5ID0gYmxlbmRfZihlYWNoKG92ZXJsYXkpKTtcbmJsZW5kLmRhcmtlbiA9IGJsZW5kX2YoZWFjaChkYXJrZW4pKTtcbmJsZW5kLmxpZ2h0ZW4gPSBibGVuZF9mKGVhY2gobGlnaHRlbikpO1xuYmxlbmQuZG9kZ2UgPSBibGVuZF9mKGVhY2goZG9kZ2UpKTtcbmJsZW5kLmJ1cm4gPSBibGVuZF9mKGVhY2goYnVybikpO1xuLy8gYmxlbmQuYWRkID0gYmxlbmRfZihlYWNoKGFkZCkpO1xuXG5leHBvcnQgZGVmYXVsdCBibGVuZDtcbiIsIi8vIGN1YmVoZWxpeCBpbnRlcnBvbGF0aW9uXG4vLyBiYXNlZCBvbiBELkEuIEdyZWVuIFwiQSBjb2xvdXIgc2NoZW1lIGZvciB0aGUgZGlzcGxheSBvZiBhc3Ryb25vbWljYWwgaW50ZW5zaXR5IGltYWdlc1wiXG4vLyBodHRwOi8vYXN0cm9uLXNvYy5pbi9idWxsZXRpbi8xMUp1bmUvMjg5MzkyMDExLnBkZlxuaW1wb3J0IHsgdHlwZSwgY2xpcF9yZ2IsIFRXT1BJIH0gZnJvbSAnLi4vdXRpbHMvaW5kZXguanMnO1xuaW1wb3J0IGNocm9tYSBmcm9tICcuLi9jaHJvbWEuanMnO1xuY29uc3QgeyBwb3csIHNpbiwgY29zIH0gPSBNYXRoO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoXG4gICAgc3RhcnQgPSAzMDAsXG4gICAgcm90YXRpb25zID0gLTEuNSxcbiAgICBodWUgPSAxLFxuICAgIGdhbW1hID0gMSxcbiAgICBsaWdodG5lc3MgPSBbMCwgMV1cbikge1xuICAgIGxldCBkaCA9IDAsXG4gICAgICAgIGRsO1xuICAgIGlmICh0eXBlKGxpZ2h0bmVzcykgPT09ICdhcnJheScpIHtcbiAgICAgICAgZGwgPSBsaWdodG5lc3NbMV0gLSBsaWdodG5lc3NbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGwgPSAwO1xuICAgICAgICBsaWdodG5lc3MgPSBbbGlnaHRuZXNzLCBsaWdodG5lc3NdO1xuICAgIH1cbiAgICBjb25zdCBmID0gZnVuY3Rpb24gKGZyYWN0KSB7XG4gICAgICAgIGNvbnN0IGEgPSBUV09QSSAqICgoc3RhcnQgKyAxMjApIC8gMzYwICsgcm90YXRpb25zICogZnJhY3QpO1xuICAgICAgICBjb25zdCBsID0gcG93KGxpZ2h0bmVzc1swXSArIGRsICogZnJhY3QsIGdhbW1hKTtcbiAgICAgICAgY29uc3QgaCA9IGRoICE9PSAwID8gaHVlWzBdICsgZnJhY3QgKiBkaCA6IGh1ZTtcbiAgICAgICAgY29uc3QgYW1wID0gKGggKiBsICogKDEgLSBsKSkgLyAyO1xuICAgICAgICBjb25zdCBjb3NfYSA9IGNvcyhhKTtcbiAgICAgICAgY29uc3Qgc2luX2EgPSBzaW4oYSk7XG4gICAgICAgIGNvbnN0IHIgPSBsICsgYW1wICogKC0wLjE0ODYxICogY29zX2EgKyAxLjc4Mjc3ICogc2luX2EpO1xuICAgICAgICBjb25zdCBnID0gbCArIGFtcCAqICgtMC4yOTIyNyAqIGNvc19hIC0gMC45MDY0OSAqIHNpbl9hKTtcbiAgICAgICAgY29uc3QgYiA9IGwgKyBhbXAgKiAoKzEuOTcyOTQgKiBjb3NfYSk7XG4gICAgICAgIHJldHVybiBjaHJvbWEoY2xpcF9yZ2IoW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTUsIDFdKSk7XG4gICAgfTtcbiAgICBmLnN0YXJ0ID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgaWYgKHMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIHN0YXJ0ID0gcztcbiAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcbiAgICBmLnJvdGF0aW9ucyA9IGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIGlmIChyID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiByb3RhdGlvbnM7XG4gICAgICAgIH1cbiAgICAgICAgcm90YXRpb25zID0gcjtcbiAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcbiAgICBmLmdhbW1hID0gZnVuY3Rpb24gKGcpIHtcbiAgICAgICAgaWYgKGcgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGdhbW1hO1xuICAgICAgICB9XG4gICAgICAgIGdhbW1hID0gZztcbiAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcbiAgICBmLmh1ZSA9IGZ1bmN0aW9uIChoKSB7XG4gICAgICAgIGlmIChoID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBodWU7XG4gICAgICAgIH1cbiAgICAgICAgaHVlID0gaDtcbiAgICAgICAgaWYgKHR5cGUoaHVlKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgZGggPSBodWVbMV0gLSBodWVbMF07XG4gICAgICAgICAgICBpZiAoZGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBodWUgPSBodWVbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcbiAgICBmLmxpZ2h0bmVzcyA9IGZ1bmN0aW9uIChoKSB7XG4gICAgICAgIGlmIChoID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBsaWdodG5lc3M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUoaCkgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgIGxpZ2h0bmVzcyA9IGg7XG4gICAgICAgICAgICBkbCA9IGhbMV0gLSBoWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlnaHRuZXNzID0gW2gsIGhdO1xuICAgICAgICAgICAgZGwgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmO1xuICAgIH07XG4gICAgZi5zY2FsZSA9ICgpID0+IGNocm9tYS5zY2FsZShmKTtcbiAgICBmLmh1ZShodWUpO1xuICAgIHJldHVybiBmO1xufVxuIiwiaW1wb3J0IENvbG9yIGZyb20gJy4uL0NvbG9yLmpzJztcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi91dGlscy9pbmRleC5qcyc7XG5pbXBvcnQgaW50ZXJwb2xhdG9yIGZyb20gJy4uL2ludGVycG9sYXRvci9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChjb2wxLCBjb2wyLCBmID0gMC41LCAuLi5yZXN0KSA9PiB7XG4gICAgbGV0IG1vZGUgPSByZXN0WzBdIHx8ICdscmdiJztcbiAgICBpZiAoIWludGVycG9sYXRvclttb2RlXSAmJiAhcmVzdC5sZW5ndGgpIHtcbiAgICAgICAgLy8gZmFsbCBiYWNrIHRvIHRoZSBmaXJzdCBzdXBwb3J0ZWQgbW9kZVxuICAgICAgICBtb2RlID0gT2JqZWN0LmtleXMoaW50ZXJwb2xhdG9yKVswXTtcbiAgICB9XG4gICAgaWYgKCFpbnRlcnBvbGF0b3JbbW9kZV0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnRlcnBvbGF0aW9uIG1vZGUgJHttb2RlfSBpcyBub3QgZGVmaW5lZGApO1xuICAgIH1cbiAgICBpZiAodHlwZShjb2wxKSAhPT0gJ29iamVjdCcpIGNvbDEgPSBuZXcgQ29sb3IoY29sMSk7XG4gICAgaWYgKHR5cGUoY29sMikgIT09ICdvYmplY3QnKSBjb2wyID0gbmV3IENvbG9yKGNvbDIpO1xuICAgIHJldHVybiBpbnRlcnBvbGF0b3JbbW9kZV0oY29sMSwgY29sMiwgZikuYWxwaGEoXG4gICAgICAgIGNvbDEuYWxwaGEoKSArIGYgKiAoY29sMi5hbHBoYSgpIC0gY29sMS5hbHBoYSgpKVxuICAgICk7XG59O1xuIiwiaW1wb3J0IENvbG9yIGZyb20gJy4uL0NvbG9yLmpzJztcbmNvbnN0IGRpZ2l0cyA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcblxuY29uc3QgeyBmbG9vciwgcmFuZG9tIH0gPSBNYXRoO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgbGV0IGNvZGUgPSAnIyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgY29kZSArPSBkaWdpdHMuY2hhckF0KGZsb29yKHJhbmRvbSgpICogMTYpKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDb2xvcihjb2RlLCAnaGV4Jyk7XG59O1xuIiwiLy8gbWluaW1hbCBtdWx0aS1wdXJwb3NlIGludGVyZmFjZVxuXG4vLyBAcmVxdWlyZXMgdXRpbHMgY29sb3IgYW5hbHl6ZVxuaW1wb3J0IGNocm9tYSBmcm9tICcuLi9jaHJvbWEuanMnO1xuaW1wb3J0IHsgbGltaXQsIHR5cGUgfSBmcm9tICcuLi91dGlscy9pbmRleC5qcyc7XG5cbmNvbnN0IHsgcG93IH0gPSBNYXRoO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29sb3JzKSB7XG4gICAgLy8gY29uc3RydWN0b3JcbiAgICBsZXQgX21vZGUgPSAncmdiJztcbiAgICBsZXQgX25hY29sID0gY2hyb21hKCcjY2NjJyk7XG4gICAgbGV0IF9zcHJlYWQgPSAwO1xuICAgIC8vIGNvbnN0IF9maXhlZCA9IGZhbHNlO1xuICAgIGxldCBfZG9tYWluID0gWzAsIDFdO1xuICAgIGxldCBfcG9zID0gW107XG4gICAgbGV0IF9wYWRkaW5nID0gWzAsIDBdO1xuICAgIGxldCBfY2xhc3NlcyA9IGZhbHNlO1xuICAgIGxldCBfY29sb3JzID0gW107XG4gICAgbGV0IF9vdXQgPSBmYWxzZTtcbiAgICBsZXQgX21pbiA9IDA7XG4gICAgbGV0IF9tYXggPSAxO1xuICAgIGxldCBfY29ycmVjdExpZ2h0bmVzcyA9IGZhbHNlO1xuICAgIGxldCBfY29sb3JDYWNoZSA9IHt9O1xuICAgIGxldCBfdXNlQ2FjaGUgPSB0cnVlO1xuICAgIGxldCBfZ2FtbWEgPSAxO1xuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG5cbiAgICBjb25zdCBzZXRDb2xvcnMgPSBmdW5jdGlvbiAoY29sb3JzKSB7XG4gICAgICAgIGNvbG9ycyA9IGNvbG9ycyB8fCBbJyNmZmYnLCAnIzAwMCddO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjb2xvcnMgJiZcbiAgICAgICAgICAgIHR5cGUoY29sb3JzKSA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgICAgIGNocm9tYS5icmV3ZXIgJiZcbiAgICAgICAgICAgIGNocm9tYS5icmV3ZXJbY29sb3JzLnRvTG93ZXJDYXNlKCldXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29sb3JzID0gY2hyb21hLmJyZXdlcltjb2xvcnMudG9Mb3dlckNhc2UoKV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUoY29sb3JzKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgLy8gaGFuZGxlIHNpbmdsZSBjb2xvclxuICAgICAgICAgICAgaWYgKGNvbG9ycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBjb2xvcnMgPSBbY29sb3JzWzBdLCBjb2xvcnNbMF1dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFrZSBhIGNvcHkgb2YgdGhlIGNvbG9yc1xuICAgICAgICAgICAgY29sb3JzID0gY29sb3JzLnNsaWNlKDApO1xuICAgICAgICAgICAgLy8gY29udmVydCB0byBjaHJvbWEgY2xhc3Nlc1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2xvcnMubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgICAgICAgICBjb2xvcnNbY10gPSBjaHJvbWEoY29sb3JzW2NdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGF1dG8tZmlsbCBjb2xvciBwb3NpdGlvblxuICAgICAgICAgICAgX3Bvcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2xvcnMubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgICAgICAgICBfcG9zLnB1c2goYyAvIChjb2xvcnMubGVuZ3RoIC0gMSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc2V0Q2FjaGUoKTtcbiAgICAgICAgcmV0dXJuIChfY29sb3JzID0gY29sb3JzKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Q2xhc3MgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKF9jbGFzc2VzICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSBfY2xhc3Nlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCBuICYmIHZhbHVlID49IF9jbGFzc2VzW2ldKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGkgLSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH07XG5cbiAgICBsZXQgdE1hcExpZ2h0bmVzcyA9ICh0KSA9PiB0O1xuICAgIGxldCB0TWFwRG9tYWluID0gKHQpID0+IHQ7XG5cbiAgICAvLyBjb25zdCBjbGFzc2lmeVZhbHVlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAvLyAgICAgbGV0IHZhbCA9IHZhbHVlO1xuICAgIC8vICAgICBpZiAoX2NsYXNzZXMubGVuZ3RoID4gMikge1xuICAgIC8vICAgICAgICAgY29uc3QgbiA9IF9jbGFzc2VzLmxlbmd0aC0xO1xuICAgIC8vICAgICAgICAgY29uc3QgaSA9IGdldENsYXNzKHZhbHVlKTtcbiAgICAvLyAgICAgICAgIGNvbnN0IG1pbmMgPSBfY2xhc3Nlc1swXSArICgoX2NsYXNzZXNbMV0tX2NsYXNzZXNbMF0pICogKDAgKyAoX3NwcmVhZCAqIDAuNSkpKTsgIC8vIGNlbnRlciBvZiAxc3QgY2xhc3NcbiAgICAvLyAgICAgICAgIGNvbnN0IG1heGMgPSBfY2xhc3Nlc1tuLTFdICsgKChfY2xhc3Nlc1tuXS1fY2xhc3Nlc1tuLTFdKSAqICgxIC0gKF9zcHJlYWQgKiAwLjUpKSk7ICAvLyBjZW50ZXIgb2YgbGFzdCBjbGFzc1xuICAgIC8vICAgICAgICAgdmFsID0gX21pbiArICgoKChfY2xhc3Nlc1tpXSArICgoX2NsYXNzZXNbaSsxXSAtIF9jbGFzc2VzW2ldKSAqIDAuNSkpIC0gbWluYykgLyAobWF4Yy1taW5jKSkgKiAoX21heCAtIF9taW4pKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gdmFsO1xuICAgIC8vIH07XG5cbiAgICBjb25zdCBnZXRDb2xvciA9IGZ1bmN0aW9uICh2YWwsIGJ5cGFzc01hcCkge1xuICAgICAgICBsZXQgY29sLCB0O1xuICAgICAgICBpZiAoYnlwYXNzTWFwID09IG51bGwpIHtcbiAgICAgICAgICAgIGJ5cGFzc01hcCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05hTih2YWwpIHx8IHZhbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIF9uYWNvbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWJ5cGFzc01hcCkge1xuICAgICAgICAgICAgaWYgKF9jbGFzc2VzICYmIF9jbGFzc2VzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAvLyBmaW5kIHRoZSBjbGFzc1xuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBnZXRDbGFzcyh2YWwpO1xuICAgICAgICAgICAgICAgIHQgPSBjIC8gKF9jbGFzc2VzLmxlbmd0aCAtIDIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChfbWF4ICE9PSBfbWluKSB7XG4gICAgICAgICAgICAgICAgLy8ganVzdCBpbnRlcnBvbGF0ZSBiZXR3ZWVuIG1pbi9tYXhcbiAgICAgICAgICAgICAgICB0ID0gKHZhbCAtIF9taW4pIC8gKF9tYXggLSBfbWluKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ID0gdmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZG9tYWluIG1hcFxuICAgICAgICB0ID0gdE1hcERvbWFpbih0KTtcblxuICAgICAgICBpZiAoIWJ5cGFzc01hcCkge1xuICAgICAgICAgICAgdCA9IHRNYXBMaWdodG5lc3ModCk7IC8vIGxpZ2h0bmVzcyBjb3JyZWN0aW9uXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX2dhbW1hICE9PSAxKSB7XG4gICAgICAgICAgICB0ID0gcG93KHQsIF9nYW1tYSk7XG4gICAgICAgIH1cblxuICAgICAgICB0ID0gX3BhZGRpbmdbMF0gKyB0ICogKDEgLSBfcGFkZGluZ1swXSAtIF9wYWRkaW5nWzFdKTtcblxuICAgICAgICB0ID0gbGltaXQodCwgMCwgMSk7XG5cbiAgICAgICAgY29uc3QgayA9IE1hdGguZmxvb3IodCAqIDEwMDAwKTtcblxuICAgICAgICBpZiAoX3VzZUNhY2hlICYmIF9jb2xvckNhY2hlW2tdKSB7XG4gICAgICAgICAgICBjb2wgPSBfY29sb3JDYWNoZVtrXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlKF9jb2xvcnMpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgLy9mb3IgaSBpbiBbMC4uX3Bvcy5sZW5ndGgtMV1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9wb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IF9wb3NbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0IDw9IHApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA9IF9jb2xvcnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCA+PSBwICYmIGkgPT09IF9wb3MubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sID0gX2NvbG9yc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ID4gcCAmJiB0IDwgX3Bvc1tpICsgMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAodCAtIHApIC8gKF9wb3NbaSArIDFdIC0gcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2wgPSBjaHJvbWEuaW50ZXJwb2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbG9yc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29sb3JzW2kgKyAxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9tb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUoX2NvbG9ycykgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb2wgPSBfY29sb3JzKHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF91c2VDYWNoZSkge1xuICAgICAgICAgICAgICAgIF9jb2xvckNhY2hlW2tdID0gY29sO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2w7XG4gICAgfTtcblxuICAgIHZhciByZXNldENhY2hlID0gKCkgPT4gKF9jb2xvckNhY2hlID0ge30pO1xuXG4gICAgc2V0Q29sb3JzKGNvbG9ycyk7XG5cbiAgICAvLyBwdWJsaWMgaW50ZXJmYWNlXG5cbiAgICBjb25zdCBmID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgY29uc3QgYyA9IGNocm9tYShnZXRDb2xvcih2KSk7XG4gICAgICAgIGlmIChfb3V0ICYmIGNbX291dF0pIHtcbiAgICAgICAgICAgIHJldHVybiBjW19vdXRdKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmLmNsYXNzZXMgPSBmdW5jdGlvbiAoY2xhc3Nlcykge1xuICAgICAgICBpZiAoY2xhc3NlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodHlwZShjbGFzc2VzKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIF9jbGFzc2VzID0gY2xhc3NlcztcbiAgICAgICAgICAgICAgICBfZG9tYWluID0gW2NsYXNzZXNbMF0sIGNsYXNzZXNbY2xhc3Nlcy5sZW5ndGggLSAxXV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBjaHJvbWEuYW5hbHl6ZShfZG9tYWluKTtcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NlcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBfY2xhc3NlcyA9IFtkLm1pbiwgZC5tYXhdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9jbGFzc2VzID0gY2hyb21hLmxpbWl0cyhkLCAnZScsIGNsYXNzZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfY2xhc3NlcztcbiAgICB9O1xuXG4gICAgZi5kb21haW4gPSBmdW5jdGlvbiAoZG9tYWluKSB7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIF9kb21haW47XG4gICAgICAgIH1cbiAgICAgICAgX21pbiA9IGRvbWFpblswXTtcbiAgICAgICAgX21heCA9IGRvbWFpbltkb21haW4ubGVuZ3RoIC0gMV07XG4gICAgICAgIF9wb3MgPSBbXTtcbiAgICAgICAgY29uc3QgayA9IF9jb2xvcnMubGVuZ3RoO1xuICAgICAgICBpZiAoZG9tYWluLmxlbmd0aCA9PT0gayAmJiBfbWluICE9PSBfbWF4KSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgcG9zaXRpb25zXG4gICAgICAgICAgICBmb3IgKGxldCBkIG9mIEFycmF5LmZyb20oZG9tYWluKSkge1xuICAgICAgICAgICAgICAgIF9wb3MucHVzaCgoZCAtIF9taW4pIC8gKF9tYXggLSBfbWluKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGs7IGMrKykge1xuICAgICAgICAgICAgICAgIF9wb3MucHVzaChjIC8gKGsgLSAxKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZG9tYWluLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAvLyBzZXQgZG9tYWluIG1hcFxuICAgICAgICAgICAgICAgIGNvbnN0IHRPdXQgPSBkb21haW4ubWFwKChkLCBpKSA9PiBpIC8gKGRvbWFpbi5sZW5ndGggLSAxKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdEJyZWFrcyA9IGRvbWFpbi5tYXAoKGQpID0+IChkIC0gX21pbikgLyAoX21heCAtIF9taW4pKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRCcmVha3MuZXZlcnkoKHZhbCwgaSkgPT4gdE91dFtpXSA9PT0gdmFsKSkge1xuICAgICAgICAgICAgICAgICAgICB0TWFwRG9tYWluID0gKHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0IDw9IDAgfHwgdCA+PSAxKSByZXR1cm4gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICh0ID49IHRCcmVha3NbaSArIDFdKSBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodCAtIHRCcmVha3NbaV0pIC8gKHRCcmVha3NbaSArIDFdIC0gdEJyZWFrc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvdXQgPSB0T3V0W2ldICsgZiAqICh0T3V0W2kgKyAxXSAtIHRPdXRbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX2RvbWFpbiA9IFtfbWluLCBfbWF4XTtcbiAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcblxuICAgIGYubW9kZSA9IGZ1bmN0aW9uIChfbSkge1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBfbW9kZTtcbiAgICAgICAgfVxuICAgICAgICBfbW9kZSA9IF9tO1xuICAgICAgICByZXNldENhY2hlKCk7XG4gICAgICAgIHJldHVybiBmO1xuICAgIH07XG5cbiAgICBmLnJhbmdlID0gZnVuY3Rpb24gKGNvbG9ycywgX3Bvcykge1xuICAgICAgICBzZXRDb2xvcnMoY29sb3JzLCBfcG9zKTtcbiAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcblxuICAgIGYub3V0ID0gZnVuY3Rpb24gKF9vKSB7XG4gICAgICAgIF9vdXQgPSBfbztcbiAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcblxuICAgIGYuc3ByZWFkID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3ByZWFkO1xuICAgICAgICB9XG4gICAgICAgIF9zcHJlYWQgPSB2YWw7XG4gICAgICAgIHJldHVybiBmO1xuICAgIH07XG5cbiAgICBmLmNvcnJlY3RMaWdodG5lc3MgPSBmdW5jdGlvbiAodikge1xuICAgICAgICBpZiAodiA9PSBudWxsKSB7XG4gICAgICAgICAgICB2ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBfY29ycmVjdExpZ2h0bmVzcyA9IHY7XG4gICAgICAgIHJlc2V0Q2FjaGUoKTtcbiAgICAgICAgaWYgKF9jb3JyZWN0TGlnaHRuZXNzKSB7XG4gICAgICAgICAgICB0TWFwTGlnaHRuZXNzID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBMMCA9IGdldENvbG9yKDAsIHRydWUpLmxhYigpWzBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IEwxID0gZ2V0Q29sb3IoMSwgdHJ1ZSkubGFiKClbMF07XG4gICAgICAgICAgICAgICAgY29uc3QgcG9sID0gTDAgPiBMMTtcbiAgICAgICAgICAgICAgICBsZXQgTF9hY3R1YWwgPSBnZXRDb2xvcih0LCB0cnVlKS5sYWIoKVswXTtcbiAgICAgICAgICAgICAgICBjb25zdCBMX2lkZWFsID0gTDAgKyAoTDEgLSBMMCkgKiB0O1xuICAgICAgICAgICAgICAgIGxldCBMX2RpZmYgPSBMX2FjdHVhbCAtIExfaWRlYWw7XG4gICAgICAgICAgICAgICAgbGV0IHQwID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgdDEgPSAxO1xuICAgICAgICAgICAgICAgIGxldCBtYXhfaXRlciA9IDIwO1xuICAgICAgICAgICAgICAgIHdoaWxlIChNYXRoLmFicyhMX2RpZmYpID4gMWUtMiAmJiBtYXhfaXRlci0tID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExfZGlmZiAqPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChMX2RpZmYgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdDAgPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgKz0gKHQxIC0gdCkgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQxID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ICs9ICh0MCAtIHQpICogMC41O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgTF9hY3R1YWwgPSBnZXRDb2xvcih0LCB0cnVlKS5sYWIoKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoTF9kaWZmID0gTF9hY3R1YWwgLSBMX2lkZWFsKTtcbiAgICAgICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdE1hcExpZ2h0bmVzcyA9ICh0KSA9PiB0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmO1xuICAgIH07XG5cbiAgICBmLnBhZGRpbmcgPSBmdW5jdGlvbiAocCkge1xuICAgICAgICBpZiAocCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodHlwZShwKSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBwID0gW3AsIHBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3BhZGRpbmcgPSBwO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX3BhZGRpbmc7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZi5jb2xvcnMgPSBmdW5jdGlvbiAobnVtQ29sb3JzLCBvdXQpIHtcbiAgICAgICAgLy8gSWYgbm8gYXJndW1lbnRzIGFyZSBnaXZlbiwgcmV0dXJuIHRoZSBvcmlnaW5hbCBjb2xvcnMgdGhhdCB3ZXJlIHByb3ZpZGVkXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgb3V0ID0gJ2hleCc7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBfY29sb3JzLnNsaWNlKDApO1xuICAgICAgICB9IGVsc2UgaWYgKG51bUNvbG9ycyA9PT0gMSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gW2YoMC41KV07XG4gICAgICAgIH0gZWxzZSBpZiAobnVtQ29sb3JzID4gMSkge1xuICAgICAgICAgICAgY29uc3QgZG0gPSBfZG9tYWluWzBdO1xuICAgICAgICAgICAgY29uc3QgZGQgPSBfZG9tYWluWzFdIC0gZG07XG4gICAgICAgICAgICByZXN1bHQgPSBfX3JhbmdlX18oMCwgbnVtQ29sb3JzLCBmYWxzZSkubWFwKChpKSA9PlxuICAgICAgICAgICAgICAgIGYoZG0gKyAoaSAvIChudW1Db2xvcnMgLSAxKSkgKiBkZClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyByZXR1cm5zIGFsbCBjb2xvcnMgYmFzZWQgb24gdGhlIGRlZmluZWQgY2xhc3Nlc1xuICAgICAgICAgICAgY29sb3JzID0gW107XG4gICAgICAgICAgICBsZXQgc2FtcGxlcyA9IFtdO1xuICAgICAgICAgICAgaWYgKF9jbGFzc2VzICYmIF9jbGFzc2VzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDEsIGVuZCA9IF9jbGFzc2VzLmxlbmd0aCwgYXNjID0gMSA8PSBlbmQ7XG4gICAgICAgICAgICAgICAgICAgIGFzYyA/IGkgPCBlbmQgOiBpID4gZW5kO1xuICAgICAgICAgICAgICAgICAgICBhc2MgPyBpKysgOiBpLS1cbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlcy5wdXNoKChfY2xhc3Nlc1tpIC0gMV0gKyBfY2xhc3Nlc1tpXSkgKiAwLjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2FtcGxlcyA9IF9kb21haW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgPSBzYW1wbGVzLm1hcCgodikgPT4gZih2KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hyb21hW291dF0pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5tYXAoKGMpID0+IGNbb3V0XSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBmLmNhY2hlID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKGMgIT0gbnVsbCkge1xuICAgICAgICAgICAgX3VzZUNhY2hlID0gYztcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF91c2VDYWNoZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmLmdhbW1hID0gZnVuY3Rpb24gKGcpIHtcbiAgICAgICAgaWYgKGcgIT0gbnVsbCkge1xuICAgICAgICAgICAgX2dhbW1hID0gZztcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9nYW1tYTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmLm5vZGF0YSA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGlmIChkICE9IG51bGwpIHtcbiAgICAgICAgICAgIF9uYWNvbCA9IGNocm9tYShkKTtcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9uYWNvbDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gZjtcbn1cblxuZnVuY3Rpb24gX19yYW5nZV9fKGxlZnQsIHJpZ2h0LCBpbmNsdXNpdmUpIHtcbiAgICBsZXQgcmFuZ2UgPSBbXTtcbiAgICBsZXQgYXNjZW5kaW5nID0gbGVmdCA8IHJpZ2h0O1xuICAgIGxldCBlbmQgPSAhaW5jbHVzaXZlID8gcmlnaHQgOiBhc2NlbmRpbmcgPyByaWdodCArIDEgOiByaWdodCAtIDE7XG4gICAgZm9yIChsZXQgaSA9IGxlZnQ7IGFzY2VuZGluZyA/IGkgPCBlbmQgOiBpID4gZW5kOyBhc2NlbmRpbmcgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgcmFuZ2UucHVzaChpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJhbmdlO1xufVxuIiwiaW1wb3J0IENvbG9yIGZyb20gJy4uL0NvbG9yLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbDEsIGNvbDIsIGYsIG0pID0+IHtcbiAgICBsZXQgeHl6MCwgeHl6MTtcbiAgICBpZiAobSA9PT0gJ2hzbCcpIHtcbiAgICAgICAgeHl6MCA9IGNvbDEuaHNsKCk7XG4gICAgICAgIHh5ejEgPSBjb2wyLmhzbCgpO1xuICAgIH0gZWxzZSBpZiAobSA9PT0gJ2hzdicpIHtcbiAgICAgICAgeHl6MCA9IGNvbDEuaHN2KCk7XG4gICAgICAgIHh5ejEgPSBjb2wyLmhzdigpO1xuICAgIH0gZWxzZSBpZiAobSA9PT0gJ2hjZycpIHtcbiAgICAgICAgeHl6MCA9IGNvbDEuaGNnKCk7XG4gICAgICAgIHh5ejEgPSBjb2wyLmhjZygpO1xuICAgIH0gZWxzZSBpZiAobSA9PT0gJ2hzaScpIHtcbiAgICAgICAgeHl6MCA9IGNvbDEuaHNpKCk7XG4gICAgICAgIHh5ejEgPSBjb2wyLmhzaSgpO1xuICAgIH0gZWxzZSBpZiAobSA9PT0gJ2xjaCcgfHwgbSA9PT0gJ2hjbCcpIHtcbiAgICAgICAgbSA9ICdoY2wnO1xuICAgICAgICB4eXowID0gY29sMS5oY2woKTtcbiAgICAgICAgeHl6MSA9IGNvbDIuaGNsKCk7XG4gICAgfSBlbHNlIGlmIChtID09PSAnb2tsY2gnKSB7XG4gICAgICAgIHh5ejAgPSBjb2wxLm9rbGNoKCkucmV2ZXJzZSgpO1xuICAgICAgICB4eXoxID0gY29sMi5va2xjaCgpLnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICBsZXQgaHVlMCwgaHVlMSwgc2F0MCwgc2F0MSwgbGJ2MCwgbGJ2MTtcbiAgICBpZiAobS5zdWJzdHIoMCwgMSkgPT09ICdoJyB8fCBtID09PSAnb2tsY2gnKSB7XG4gICAgICAgIFtodWUwLCBzYXQwLCBsYnYwXSA9IHh5ejA7XG4gICAgICAgIFtodWUxLCBzYXQxLCBsYnYxXSA9IHh5ejE7XG4gICAgfVxuXG4gICAgbGV0IHNhdCwgaHVlLCBsYnYsIGRoO1xuXG4gICAgaWYgKCFpc05hTihodWUwKSAmJiAhaXNOYU4oaHVlMSkpIHtcbiAgICAgICAgLy8gYm90aCBjb2xvcnMgaGF2ZSBodWVcbiAgICAgICAgaWYgKGh1ZTEgPiBodWUwICYmIGh1ZTEgLSBodWUwID4gMTgwKSB7XG4gICAgICAgICAgICBkaCA9IGh1ZTEgLSAoaHVlMCArIDM2MCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaHVlMSA8IGh1ZTAgJiYgaHVlMCAtIGh1ZTEgPiAxODApIHtcbiAgICAgICAgICAgIGRoID0gaHVlMSArIDM2MCAtIGh1ZTA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaCA9IGh1ZTEgLSBodWUwO1xuICAgICAgICB9XG4gICAgICAgIGh1ZSA9IGh1ZTAgKyBmICogZGg7XG4gICAgfSBlbHNlIGlmICghaXNOYU4oaHVlMCkpIHtcbiAgICAgICAgaHVlID0gaHVlMDtcbiAgICAgICAgaWYgKChsYnYxID09IDEgfHwgbGJ2MSA9PSAwKSAmJiBtICE9ICdoc3YnKSBzYXQgPSBzYXQwO1xuICAgIH0gZWxzZSBpZiAoIWlzTmFOKGh1ZTEpKSB7XG4gICAgICAgIGh1ZSA9IGh1ZTE7XG4gICAgICAgIGlmICgobGJ2MCA9PSAxIHx8IGxidjAgPT0gMCkgJiYgbSAhPSAnaHN2Jykgc2F0ID0gc2F0MTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBodWUgPSBOdW1iZXIuTmFOO1xuICAgIH1cblxuICAgIGlmIChzYXQgPT09IHVuZGVmaW5lZCkgc2F0ID0gc2F0MCArIGYgKiAoc2F0MSAtIHNhdDApO1xuICAgIGxidiA9IGxidjAgKyBmICogKGxidjEgLSBsYnYwKTtcbiAgICByZXR1cm4gbSA9PT0gJ29rbGNoJ1xuICAgICAgICA/IG5ldyBDb2xvcihbbGJ2LCBzYXQsIGh1ZV0sIG0pXG4gICAgICAgIDogbmV3IENvbG9yKFtodWUsIHNhdCwgbGJ2XSwgbSk7XG59O1xuIiwiaW1wb3J0ICcuLi9pby9oY2cvaW5kZXguanMnO1xuaW1wb3J0IGludGVycG9sYXRlX2hzeCBmcm9tICcuL19oc3guanMnO1xuaW1wb3J0IGluZGV4IGZyb20gJy4vaW5kZXguanMnO1xuXG5jb25zdCBoY2cgPSAoY29sMSwgY29sMiwgZikgPT4ge1xuICAgIHJldHVybiBpbnRlcnBvbGF0ZV9oc3goY29sMSwgY29sMiwgZiwgJ2hjZycpO1xufTtcblxuLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG5pbmRleC5oY2cgPSBoY2c7XG5cbmV4cG9ydCBkZWZhdWx0IGhjZztcbiIsImltcG9ydCAnLi4vaW8vaHNpL2luZGV4LmpzJztcbmltcG9ydCBpbnRlcnBvbGF0ZV9oc3ggZnJvbSAnLi9faHN4LmpzJztcbmltcG9ydCBpbmRleCBmcm9tICcuL2luZGV4LmpzJztcblxuY29uc3QgaHNpID0gKGNvbDEsIGNvbDIsIGYpID0+IHtcbiAgICByZXR1cm4gaW50ZXJwb2xhdGVfaHN4KGNvbDEsIGNvbDIsIGYsICdoc2knKTtcbn07XG5cbi8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuaW5kZXguaHNpID0gaHNpO1xuXG5leHBvcnQgZGVmYXVsdCBoc2k7XG4iLCJpbXBvcnQgJy4uL2lvL2hzbC9pbmRleC5qcyc7XG5pbXBvcnQgaW50ZXJwb2xhdGVfaHN4IGZyb20gJy4vX2hzeC5qcyc7XG5pbXBvcnQgaW5kZXggZnJvbSAnLi9pbmRleC5qcyc7XG5cbmNvbnN0IGhzbCA9IChjb2wxLCBjb2wyLCBmKSA9PiB7XG4gICAgcmV0dXJuIGludGVycG9sYXRlX2hzeChjb2wxLCBjb2wyLCBmLCAnaHNsJyk7XG59O1xuXG4vLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbmluZGV4LmhzbCA9IGhzbDtcblxuZXhwb3J0IGRlZmF1bHQgaHNsO1xuIiwiaW1wb3J0ICcuLi9pby9oc3YvaW5kZXguanMnO1xuaW1wb3J0IGludGVycG9sYXRlX2hzeCBmcm9tICcuL19oc3guanMnO1xuaW1wb3J0IGluZGV4IGZyb20gJy4vaW5kZXguanMnO1xuXG5jb25zdCBoc3YgPSAoY29sMSwgY29sMiwgZikgPT4ge1xuICAgIHJldHVybiBpbnRlcnBvbGF0ZV9oc3goY29sMSwgY29sMiwgZiwgJ2hzdicpO1xufTtcblxuLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG5pbmRleC5oc3YgPSBoc3Y7XG5cbmV4cG9ydCBkZWZhdWx0IGhzdjtcbiIsImV4cG9ydCBkZWZhdWx0IHt9O1xuIiwiaW1wb3J0ICcuLi9pby9sYWIvaW5kZXguanMnO1xuaW1wb3J0IGluZGV4IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IENvbG9yIGZyb20gJy4uL0NvbG9yLmpzJztcblxuY29uc3QgbGFiID0gKGNvbDEsIGNvbDIsIGYpID0+IHtcbiAgICBjb25zdCB4eXowID0gY29sMS5sYWIoKTtcbiAgICBjb25zdCB4eXoxID0gY29sMi5sYWIoKTtcbiAgICByZXR1cm4gbmV3IENvbG9yKFxuICAgICAgICB4eXowWzBdICsgZiAqICh4eXoxWzBdIC0geHl6MFswXSksXG4gICAgICAgIHh5ejBbMV0gKyBmICogKHh5ejFbMV0gLSB4eXowWzFdKSxcbiAgICAgICAgeHl6MFsyXSArIGYgKiAoeHl6MVsyXSAtIHh5ejBbMl0pLFxuICAgICAgICAnbGFiJ1xuICAgICk7XG59O1xuXG4vLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbmluZGV4LmxhYiA9IGxhYjtcblxuZXhwb3J0IGRlZmF1bHQgbGFiO1xuIiwiaW1wb3J0ICcuLi9pby9sY2gvaW5kZXguanMnO1xuaW1wb3J0IGludGVycG9sYXRlX2hzeCBmcm9tICcuL19oc3guanMnO1xuaW1wb3J0IGluZGV4IGZyb20gJy4vaW5kZXguanMnO1xuXG5jb25zdCBsY2ggPSAoY29sMSwgY29sMiwgZikgPT4ge1xuICAgIHJldHVybiBpbnRlcnBvbGF0ZV9oc3goY29sMSwgY29sMiwgZiwgJ2xjaCcpO1xufTtcblxuLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG5pbmRleC5sY2ggPSBsY2g7XG5pbmRleC5oY2wgPSBsY2g7XG5cbmV4cG9ydCBkZWZhdWx0IGxjaDtcbiIsImltcG9ydCBDb2xvciBmcm9tICcuLi9Db2xvci5qcyc7XG5jb25zdCB7IHNxcnQsIHBvdyB9ID0gTWF0aDtcbmltcG9ydCBpbmRleCBmcm9tICcuL2luZGV4LmpzJztcblxuY29uc3QgbHJnYiA9IChjb2wxLCBjb2wyLCBmKSA9PiB7XG4gICAgY29uc3QgW3gxLCB5MSwgejFdID0gY29sMS5fcmdiO1xuICAgIGNvbnN0IFt4MiwgeTIsIHoyXSA9IGNvbDIuX3JnYjtcbiAgICByZXR1cm4gbmV3IENvbG9yKFxuICAgICAgICBzcXJ0KHBvdyh4MSwgMikgKiAoMSAtIGYpICsgcG93KHgyLCAyKSAqIGYpLFxuICAgICAgICBzcXJ0KHBvdyh5MSwgMikgKiAoMSAtIGYpICsgcG93KHkyLCAyKSAqIGYpLFxuICAgICAgICBzcXJ0KHBvdyh6MSwgMikgKiAoMSAtIGYpICsgcG93KHoyLCAyKSAqIGYpLFxuICAgICAgICAncmdiJ1xuICAgICk7XG59O1xuXG4vLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbmluZGV4LmxyZ2IgPSBscmdiO1xuXG5leHBvcnQgZGVmYXVsdCBscmdiO1xuIiwiaW1wb3J0ICcuLi9pby9udW0vaW5kZXguanMnO1xuaW1wb3J0IGluZGV4IGZyb20gJy4vaW5kZXguanMnO1xuXG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vQ29sb3IuanMnO1xuXG5jb25zdCBudW0gPSAoY29sMSwgY29sMiwgZikgPT4ge1xuICAgIGNvbnN0IGMxID0gY29sMS5udW0oKTtcbiAgICBjb25zdCBjMiA9IGNvbDIubnVtKCk7XG4gICAgcmV0dXJuIG5ldyBDb2xvcihjMSArIGYgKiAoYzIgLSBjMSksICdudW0nKTtcbn07XG5cbi8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuaW5kZXgubnVtID0gbnVtO1xuXG5leHBvcnQgZGVmYXVsdCBudW07XG4iLCJpbXBvcnQgJy4uL2lvL29rbGFiL2luZGV4LmpzJztcbmltcG9ydCBpbmRleCBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCBDb2xvciBmcm9tICcuLi9Db2xvci5qcyc7XG5cbmNvbnN0IG9rbGFiID0gKGNvbDEsIGNvbDIsIGYpID0+IHtcbiAgICBjb25zdCB4eXowID0gY29sMS5va2xhYigpO1xuICAgIGNvbnN0IHh5ejEgPSBjb2wyLm9rbGFiKCk7XG4gICAgcmV0dXJuIG5ldyBDb2xvcihcbiAgICAgICAgeHl6MFswXSArIGYgKiAoeHl6MVswXSAtIHh5ejBbMF0pLFxuICAgICAgICB4eXowWzFdICsgZiAqICh4eXoxWzFdIC0geHl6MFsxXSksXG4gICAgICAgIHh5ejBbMl0gKyBmICogKHh5ejFbMl0gLSB4eXowWzJdKSxcbiAgICAgICAgJ29rbGFiJ1xuICAgICk7XG59O1xuXG4vLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbmluZGV4Lm9rbGFiID0gb2tsYWI7XG5cbmV4cG9ydCBkZWZhdWx0IG9rbGFiO1xuIiwiaW1wb3J0ICcuLi9pby9sY2gvaW5kZXguanMnO1xuaW1wb3J0IGludGVycG9sYXRlX2hzeCBmcm9tICcuL19oc3guanMnO1xuaW1wb3J0IGluZGV4IGZyb20gJy4vaW5kZXguanMnO1xuXG5jb25zdCBva2xjaCA9IChjb2wxLCBjb2wyLCBmKSA9PiB7XG4gICAgcmV0dXJuIGludGVycG9sYXRlX2hzeChjb2wxLCBjb2wyLCBmLCAnb2tsY2gnKTtcbn07XG5cbi8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuaW5kZXgub2tsY2ggPSBva2xjaDtcblxuZXhwb3J0IGRlZmF1bHQgb2tsY2g7XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSAnLi4vQ29sb3IuanMnO1xuaW1wb3J0IGluZGV4IGZyb20gJy4vaW5kZXguanMnO1xuXG5jb25zdCByZ2IgPSAoY29sMSwgY29sMiwgZikgPT4ge1xuICAgIGNvbnN0IHh5ejAgPSBjb2wxLl9yZ2I7XG4gICAgY29uc3QgeHl6MSA9IGNvbDIuX3JnYjtcbiAgICByZXR1cm4gbmV3IENvbG9yKFxuICAgICAgICB4eXowWzBdICsgZiAqICh4eXoxWzBdIC0geHl6MFswXSksXG4gICAgICAgIHh5ejBbMV0gKyBmICogKHh5ejFbMV0gLSB4eXowWzFdKSxcbiAgICAgICAgeHl6MFsyXSArIGYgKiAoeHl6MVsyXSAtIHh5ejBbMl0pLFxuICAgICAgICAncmdiJ1xuICAgICk7XG59O1xuXG4vLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbmluZGV4LnJnYiA9IHJnYjtcblxuZXhwb3J0IGRlZmF1bHQgcmdiO1xuIiwiaW1wb3J0IHsgdW5wYWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuXG5jb25zdCBjbXlrMnJnYiA9ICguLi5hcmdzKSA9PiB7XG4gICAgYXJncyA9IHVucGFjayhhcmdzLCAnY215aycpO1xuICAgIGNvbnN0IFtjLCBtLCB5LCBrXSA9IGFyZ3M7XG4gICAgY29uc3QgYWxwaGEgPSBhcmdzLmxlbmd0aCA+IDQgPyBhcmdzWzRdIDogMTtcbiAgICBpZiAoayA9PT0gMSkgcmV0dXJuIFswLCAwLCAwLCBhbHBoYV07XG4gICAgcmV0dXJuIFtcbiAgICAgICAgYyA+PSAxID8gMCA6IDI1NSAqICgxIC0gYykgKiAoMSAtIGspLCAvLyByXG4gICAgICAgIG0gPj0gMSA/IDAgOiAyNTUgKiAoMSAtIG0pICogKDEgLSBrKSwgLy8gZ1xuICAgICAgICB5ID49IDEgPyAwIDogMjU1ICogKDEgLSB5KSAqICgxIC0gayksIC8vIGJcbiAgICAgICAgYWxwaGFcbiAgICBdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY215azJyZ2I7XG4iLCJpbXBvcnQgY2hyb21hIGZyb20gJy4uLy4uL2Nocm9tYS5qcyc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vLi4vQ29sb3IuanMnO1xuaW1wb3J0IGlucHV0IGZyb20gJy4uL2lucHV0LmpzJztcbmltcG9ydCB7IHVucGFjaywgdHlwZSB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcbmltcG9ydCBjbXlrMnJnYiBmcm9tICcuL2NteWsycmdiLmpzJztcbmltcG9ydCByZ2IyY215ayBmcm9tICcuL3JnYjJjbXlrLmpzJztcblxuQ29sb3IucHJvdG90eXBlLmNteWsgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJnYjJjbXlrKHRoaXMuX3JnYik7XG59O1xuXG5jb25zdCBjbXlrID0gKC4uLmFyZ3MpID0+IG5ldyBDb2xvciguLi5hcmdzLCAnY215aycpO1xuT2JqZWN0LmFzc2lnbihjaHJvbWEsIHsgY215ayB9KTtcblxuaW5wdXQuZm9ybWF0LmNteWsgPSBjbXlrMnJnYjtcblxuaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICBwOiAyLFxuICAgIHRlc3Q6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGFyZ3MgPSB1bnBhY2soYXJncywgJ2NteWsnKTtcbiAgICAgICAgaWYgKHR5cGUoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIHJldHVybiAnY215ayc7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuZXhwb3J0IHsgY215ayB9O1xuIiwiaW1wb3J0IHsgdW5wYWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuY29uc3QgeyBtYXggfSA9IE1hdGg7XG5cbmNvbnN0IHJnYjJjbXlrID0gKC4uLmFyZ3MpID0+IHtcbiAgICBsZXQgW3IsIGcsIGJdID0gdW5wYWNrKGFyZ3MsICdyZ2InKTtcbiAgICByID0gciAvIDI1NTtcbiAgICBnID0gZyAvIDI1NTtcbiAgICBiID0gYiAvIDI1NTtcbiAgICBjb25zdCBrID0gMSAtIG1heChyLCBtYXgoZywgYikpO1xuICAgIGNvbnN0IGYgPSBrIDwgMSA/IDEgLyAoMSAtIGspIDogMDtcbiAgICBjb25zdCBjID0gKDEgLSByIC0gaykgKiBmO1xuICAgIGNvbnN0IG0gPSAoMSAtIGcgLSBrKSAqIGY7XG4gICAgY29uc3QgeSA9ICgxIC0gYiAtIGspICogZjtcbiAgICByZXR1cm4gW2MsIG0sIHksIGtdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmdiMmNteWs7XG4iLCJpbXBvcnQgaHNsMnJnYiBmcm9tICcuLi9oc2wvaHNsMnJnYi5qcyc7XG5pbXBvcnQgbGFiMnJnYiBmcm9tICcuLi9sYWIvbGFiMnJnYi5qcyc7XG5pbXBvcnQgbGNoMnJnYiBmcm9tICcuLi9sY2gvbGNoMnJnYi5qcyc7XG5pbXBvcnQgb2tsYWIycmdiIGZyb20gJy4uL29rbGFiL29rbGFiMnJnYi5qcyc7XG5pbXBvcnQgb2tsY2gycmdiIGZyb20gJy4uL29rbGNoL29rbGNoMnJnYi5qcyc7XG5pbXBvcnQgaW5wdXQgZnJvbSAnLi4vaW5wdXQuanMnO1xuaW1wb3J0IGxpbWl0IGZyb20gJy4uLy4uL3V0aWxzL2xpbWl0LmpzJztcbmltcG9ydCB7IGdldExhYldoaXRlUG9pbnQsIHNldExhYldoaXRlUG9pbnQgfSBmcm9tICcuLi9sYWIvbGFiLWNvbnN0YW50cy5qcyc7XG5cbmNvbnN0IElOVF9PUl9QQ1QgPSAvKCg/Oi0/XFxkKyl8KD86LT9cXGQrKD86XFwuXFxkKyk/KSV8bm9uZSkvLnNvdXJjZTtcbmNvbnN0IEZMT0FUX09SX1BDVCA9IC8oKD86LT8oPzpcXGQrKD86XFwuXFxkKik/fFxcLlxcZCspJT8pfG5vbmUpLy5zb3VyY2U7XG5jb25zdCBQQ1QgPSAvKCg/Oi0/KD86XFxkKyg/OlxcLlxcZCopP3xcXC5cXGQrKSUpfG5vbmUpLy5zb3VyY2U7XG5jb25zdCBSRV9TID0gL1xccyovLnNvdXJjZTtcbmNvbnN0IFNFUCA9IC9cXHMrLy5zb3VyY2U7XG5jb25zdCBDT01NQSA9IC9cXHMqLFxccyovLnNvdXJjZTtcbmNvbnN0IEFOTEdFID0gLygoPzotPyg/OlxcZCsoPzpcXC5cXGQqKT98XFwuXFxkKykoPzpkZWcpPyl8bm9uZSkvLnNvdXJjZTtcbmNvbnN0IEFMUEhBID0gL1xccyooPzpcXC9cXHMqKCg/OlswMV18WzAxXT9cXC5cXGQrKXxcXGQrKD86XFwuXFxkKyk/JSkpPy8uc291cmNlO1xuXG4vLyBlLmcuIHJnYigyNTAgMjAgMCksIHJnYigxMDAlIDUwJSAyMCUpLCByZ2IoMTAwJSA1MCUgMjAlIC8gMC41KVxuY29uc3QgUkVfUkdCID0gbmV3IFJlZ0V4cChcbiAgICAnXnJnYmE/XFxcXCgnICtcbiAgICAgICAgUkVfUyArXG4gICAgICAgIFtJTlRfT1JfUENULCBJTlRfT1JfUENULCBJTlRfT1JfUENUXS5qb2luKFNFUCkgK1xuICAgICAgICBBTFBIQSArXG4gICAgICAgICdcXFxcKSQnXG4pO1xuY29uc3QgUkVfUkdCX0xFR0FDWSA9IG5ldyBSZWdFeHAoXG4gICAgJ15yZ2JcXFxcKCcgK1xuICAgICAgICBSRV9TICtcbiAgICAgICAgW0lOVF9PUl9QQ1QsIElOVF9PUl9QQ1QsIElOVF9PUl9QQ1RdLmpvaW4oQ09NTUEpICtcbiAgICAgICAgUkVfUyArXG4gICAgICAgICdcXFxcKSQnXG4pO1xuY29uc3QgUkVfUkdCQV9MRUdBQ1kgPSBuZXcgUmVnRXhwKFxuICAgICdecmdiYVxcXFwoJyArXG4gICAgICAgIFJFX1MgK1xuICAgICAgICBbSU5UX09SX1BDVCwgSU5UX09SX1BDVCwgSU5UX09SX1BDVCwgRkxPQVRfT1JfUENUXS5qb2luKENPTU1BKSArXG4gICAgICAgIFJFX1MgK1xuICAgICAgICAnXFxcXCkkJ1xuKTtcblxuY29uc3QgUkVfSFNMID0gbmV3IFJlZ0V4cChcbiAgICAnXmhzbGE/XFxcXCgnICsgUkVfUyArIFtBTkxHRSwgUENULCBQQ1RdLmpvaW4oU0VQKSArIEFMUEhBICsgJ1xcXFwpJCdcbik7XG5jb25zdCBSRV9IU0xfTEVHQUNZID0gbmV3IFJlZ0V4cChcbiAgICAnXmhzbD9cXFxcKCcgKyBSRV9TICsgW0FOTEdFLCBQQ1QsIFBDVF0uam9pbihDT01NQSkgKyBSRV9TICsgJ1xcXFwpJCdcbik7XG5jb25zdCBSRV9IU0xBX0xFR0FDWSA9XG4gICAgL15oc2xhXFwoXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqLFxccyooWzAxXXxbMDFdP1xcLlxcZCspXFwpJC87XG5cbmNvbnN0IFJFX0xBQiA9IG5ldyBSZWdFeHAoXG4gICAgJ15sYWJcXFxcKCcgK1xuICAgICAgICBSRV9TICtcbiAgICAgICAgW0ZMT0FUX09SX1BDVCwgRkxPQVRfT1JfUENULCBGTE9BVF9PUl9QQ1RdLmpvaW4oU0VQKSArXG4gICAgICAgIEFMUEhBICtcbiAgICAgICAgJ1xcXFwpJCdcbik7XG5jb25zdCBSRV9MQ0ggPSBuZXcgUmVnRXhwKFxuICAgICdebGNoXFxcXCgnICtcbiAgICAgICAgUkVfUyArXG4gICAgICAgIFtGTE9BVF9PUl9QQ1QsIEZMT0FUX09SX1BDVCwgQU5MR0VdLmpvaW4oU0VQKSArXG4gICAgICAgIEFMUEhBICtcbiAgICAgICAgJ1xcXFwpJCdcbik7XG5jb25zdCBSRV9PS0xBQiA9IG5ldyBSZWdFeHAoXG4gICAgJ15va2xhYlxcXFwoJyArXG4gICAgICAgIFJFX1MgK1xuICAgICAgICBbRkxPQVRfT1JfUENULCBGTE9BVF9PUl9QQ1QsIEZMT0FUX09SX1BDVF0uam9pbihTRVApICtcbiAgICAgICAgQUxQSEEgK1xuICAgICAgICAnXFxcXCkkJ1xuKTtcbmNvbnN0IFJFX09LTENIID0gbmV3IFJlZ0V4cChcbiAgICAnXm9rbGNoXFxcXCgnICtcbiAgICAgICAgUkVfUyArXG4gICAgICAgIFtGTE9BVF9PUl9QQ1QsIEZMT0FUX09SX1BDVCwgQU5MR0VdLmpvaW4oU0VQKSArXG4gICAgICAgIEFMUEhBICtcbiAgICAgICAgJ1xcXFwpJCdcbik7XG5cbmNvbnN0IHsgcm91bmQgfSA9IE1hdGg7XG5cbmNvbnN0IHJvdW5kUkdCID0gKHJnYikgPT4ge1xuICAgIHJldHVybiByZ2IubWFwKCh2LCBpKSA9PiAoaSA8PSAyID8gbGltaXQocm91bmQodiksIDAsIDI1NSkgOiB2KSk7XG59O1xuXG5jb25zdCBwZXJjZW50VG9BYnNvbHV0ZSA9IChwY3QsIG1pbiA9IDAsIG1heCA9IDEwMCwgc2lnbmVkID0gZmFsc2UpID0+IHtcbiAgICBpZiAodHlwZW9mIHBjdCA9PT0gJ3N0cmluZycgJiYgcGN0LmVuZHNXaXRoKCclJykpIHtcbiAgICAgICAgcGN0ID0gcGFyc2VGbG9hdChwY3Quc3Vic3RyaW5nKDAsIHBjdC5sZW5ndGggLSAxKSkgLyAxMDA7XG4gICAgICAgIGlmIChzaWduZWQpIHtcbiAgICAgICAgICAgIC8vIHNpZ25lZCBwZXJjZW50YWdlcyBhcmUgaW4gdGhlIHJhbmdlIC0xMDAlIHRvIDEwMCVcbiAgICAgICAgICAgIHBjdCA9IG1pbiArIChwY3QgKyAxKSAqIDAuNSAqIChtYXggLSBtaW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGN0ID0gbWluICsgcGN0ICogKG1heCAtIG1pbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICtwY3Q7XG59O1xuXG5jb25zdCBub25lVG9WYWx1ZSA9ICh2LCBub25lVmFsdWUpID0+IHtcbiAgICByZXR1cm4gdiA9PT0gJ25vbmUnID8gbm9uZVZhbHVlIDogdjtcbn07XG5cbmNvbnN0IGNzczJyZ2IgPSAoY3NzKSA9PiB7XG4gICAgY3NzID0gY3NzLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuXG4gICAgaWYgKGNzcyA9PT0gJ3RyYW5zcGFyZW50Jykge1xuICAgICAgICByZXR1cm4gWzAsIDAsIDAsIDBdO1xuICAgIH1cblxuICAgIGxldCBtO1xuXG4gICAgaWYgKGlucHV0LmZvcm1hdC5uYW1lZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0LmZvcm1hdC5uYW1lZChjc3MpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgLy8gcmdiKDI1MCAyMCAwKSBvciByZ2IoMjUwLDIwLDApXG4gICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX1JHQikpIHx8IChtID0gY3NzLm1hdGNoKFJFX1JHQl9MRUdBQ1kpKSkge1xuICAgICAgICBsZXQgcmdiID0gbS5zbGljZSgxLCA0KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIHJnYltpXSA9ICtwZXJjZW50VG9BYnNvbHV0ZShub25lVG9WYWx1ZShyZ2JbaV0sIDApLCAwLCAyNTUpO1xuICAgICAgICB9XG4gICAgICAgIHJnYiA9IHJvdW5kUkdCKHJnYik7XG4gICAgICAgIGNvbnN0IGFscGhhID0gbVs0XSAhPT0gdW5kZWZpbmVkID8gK3BlcmNlbnRUb0Fic29sdXRlKG1bNF0sIDAsIDEpIDogMTtcbiAgICAgICAgcmdiWzNdID0gYWxwaGE7IC8vIGRlZmF1bHQgYWxwaGFcbiAgICAgICAgcmV0dXJuIHJnYjtcbiAgICB9XG5cbiAgICAvLyByZ2JhKDI1MCwyMCwwLDAuNClcbiAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfUkdCQV9MRUdBQ1kpKSkge1xuICAgICAgICBjb25zdCByZ2IgPSBtLnNsaWNlKDEsIDUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgcmdiW2ldID0gK3BlcmNlbnRUb0Fic29sdXRlKHJnYltpXSwgMCwgMjU1KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmdiO1xuICAgIH1cblxuICAgIC8vIGhzbCgwLDEwMCUsNTAlKVxuICAgIGlmICgobSA9IGNzcy5tYXRjaChSRV9IU0wpKSB8fCAobSA9IGNzcy5tYXRjaChSRV9IU0xfTEVHQUNZKSkpIHtcbiAgICAgICAgY29uc3QgaHNsID0gbS5zbGljZSgxLCA0KTtcbiAgICAgICAgaHNsWzBdID0gK25vbmVUb1ZhbHVlKGhzbFswXS5yZXBsYWNlKCdkZWcnLCAnJyksIDApO1xuICAgICAgICBoc2xbMV0gPSArcGVyY2VudFRvQWJzb2x1dGUobm9uZVRvVmFsdWUoaHNsWzFdLCAwKSwgMCwgMTAwKSAqIDAuMDE7XG4gICAgICAgIGhzbFsyXSA9ICtwZXJjZW50VG9BYnNvbHV0ZShub25lVG9WYWx1ZShoc2xbMl0sIDApLCAwLCAxMDApICogMC4wMTtcbiAgICAgICAgY29uc3QgcmdiID0gcm91bmRSR0IoaHNsMnJnYihoc2wpKTtcbiAgICAgICAgY29uc3QgYWxwaGEgPSBtWzRdICE9PSB1bmRlZmluZWQgPyArcGVyY2VudFRvQWJzb2x1dGUobVs0XSwgMCwgMSkgOiAxO1xuICAgICAgICByZ2JbM10gPSBhbHBoYTtcbiAgICAgICAgcmV0dXJuIHJnYjtcbiAgICB9XG5cbiAgICAvLyBoc2xhKDAsMTAwJSw1MCUsMC41KVxuICAgIGlmICgobSA9IGNzcy5tYXRjaChSRV9IU0xBX0xFR0FDWSkpKSB7XG4gICAgICAgIGNvbnN0IGhzbCA9IG0uc2xpY2UoMSwgNCk7XG4gICAgICAgIGhzbFsxXSAqPSAwLjAxO1xuICAgICAgICBoc2xbMl0gKj0gMC4wMTtcbiAgICAgICAgY29uc3QgcmdiID0gaHNsMnJnYihoc2wpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgcmdiW2ldID0gcm91bmQocmdiW2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZ2JbM10gPSArbVs0XTsgLy8gZGVmYXVsdCBhbHBoYSA9IDFcbiAgICAgICAgcmV0dXJuIHJnYjtcbiAgICB9XG5cbiAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfTEFCKSkpIHtcbiAgICAgICAgY29uc3QgbGFiID0gbS5zbGljZSgxLCA0KTtcbiAgICAgICAgbGFiWzBdID0gcGVyY2VudFRvQWJzb2x1dGUobm9uZVRvVmFsdWUobGFiWzBdLCAwKSwgMCwgMTAwKTtcbiAgICAgICAgbGFiWzFdID0gcGVyY2VudFRvQWJzb2x1dGUobm9uZVRvVmFsdWUobGFiWzFdLCAwKSwgLTEyNSwgMTI1LCB0cnVlKTtcbiAgICAgICAgbGFiWzJdID0gcGVyY2VudFRvQWJzb2x1dGUobm9uZVRvVmFsdWUobGFiWzJdLCAwKSwgLTEyNSwgMTI1LCB0cnVlKTtcbiAgICAgICAgLy8gY29udmVydCB0byBENTAgTGFiIHdoaXRlcG9pbnRcbiAgICAgICAgY29uc3Qgd3AgPSBnZXRMYWJXaGl0ZVBvaW50KCk7XG4gICAgICAgIHNldExhYldoaXRlUG9pbnQoJ2Q1MCcpO1xuICAgICAgICBjb25zdCByZ2IgPSByb3VuZFJHQihsYWIycmdiKGxhYikpO1xuICAgICAgICAvLyBjb252ZXJ0IGJhY2sgdG8gb3JpZ2luYWwgTGFiIHdoaXRlcG9pbnRcbiAgICAgICAgc2V0TGFiV2hpdGVQb2ludCh3cCk7XG4gICAgICAgIGNvbnN0IGFscGhhID0gbVs0XSAhPT0gdW5kZWZpbmVkID8gK3BlcmNlbnRUb0Fic29sdXRlKG1bNF0sIDAsIDEpIDogMTtcbiAgICAgICAgcmdiWzNdID0gYWxwaGE7XG4gICAgICAgIHJldHVybiByZ2I7XG4gICAgfVxuXG4gICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX0xDSCkpKSB7XG4gICAgICAgIGNvbnN0IGxjaCA9IG0uc2xpY2UoMSwgNCk7XG4gICAgICAgIGxjaFswXSA9IHBlcmNlbnRUb0Fic29sdXRlKGxjaFswXSwgMCwgMTAwKTtcbiAgICAgICAgbGNoWzFdID0gcGVyY2VudFRvQWJzb2x1dGUobm9uZVRvVmFsdWUobGNoWzFdLCAwKSwgMCwgMTUwLCBmYWxzZSk7XG4gICAgICAgIGxjaFsyXSA9ICtub25lVG9WYWx1ZShsY2hbMl0ucmVwbGFjZSgnZGVnJywgJycpLCAwKTtcbiAgICAgICAgLy8gY29udmVydCB0byBENTAgTGFiIHdoaXRlcG9pbnRcbiAgICAgICAgY29uc3Qgd3AgPSBnZXRMYWJXaGl0ZVBvaW50KCk7XG4gICAgICAgIHNldExhYldoaXRlUG9pbnQoJ2Q1MCcpO1xuICAgICAgICBjb25zdCByZ2IgPSByb3VuZFJHQihsY2gycmdiKGxjaCkpO1xuICAgICAgICAvLyBjb252ZXJ0IGJhY2sgdG8gb3JpZ2luYWwgTGFiIHdoaXRlcG9pbnRcbiAgICAgICAgc2V0TGFiV2hpdGVQb2ludCh3cCk7XG4gICAgICAgIGNvbnN0IGFscGhhID0gbVs0XSAhPT0gdW5kZWZpbmVkID8gK3BlcmNlbnRUb0Fic29sdXRlKG1bNF0sIDAsIDEpIDogMTtcbiAgICAgICAgcmdiWzNdID0gYWxwaGE7XG4gICAgICAgIHJldHVybiByZ2I7XG4gICAgfVxuXG4gICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX09LTEFCKSkpIHtcbiAgICAgICAgY29uc3Qgb2tsYWIgPSBtLnNsaWNlKDEsIDQpO1xuICAgICAgICBva2xhYlswXSA9IHBlcmNlbnRUb0Fic29sdXRlKG5vbmVUb1ZhbHVlKG9rbGFiWzBdLCAwKSwgMCwgMSk7XG4gICAgICAgIG9rbGFiWzFdID0gcGVyY2VudFRvQWJzb2x1dGUobm9uZVRvVmFsdWUob2tsYWJbMV0sIDApLCAtMC40LCAwLjQsIHRydWUpO1xuICAgICAgICBva2xhYlsyXSA9IHBlcmNlbnRUb0Fic29sdXRlKG5vbmVUb1ZhbHVlKG9rbGFiWzJdLCAwKSwgLTAuNCwgMC40LCB0cnVlKTtcbiAgICAgICAgY29uc3QgcmdiID0gcm91bmRSR0Iob2tsYWIycmdiKG9rbGFiKSk7XG4gICAgICAgIGNvbnN0IGFscGhhID0gbVs0XSAhPT0gdW5kZWZpbmVkID8gK3BlcmNlbnRUb0Fic29sdXRlKG1bNF0sIDAsIDEpIDogMTtcbiAgICAgICAgcmdiWzNdID0gYWxwaGE7XG4gICAgICAgIHJldHVybiByZ2I7XG4gICAgfVxuXG4gICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX09LTENIKSkpIHtcbiAgICAgICAgY29uc3Qgb2tsY2ggPSBtLnNsaWNlKDEsIDQpO1xuICAgICAgICBva2xjaFswXSA9IHBlcmNlbnRUb0Fic29sdXRlKG5vbmVUb1ZhbHVlKG9rbGNoWzBdLCAwKSwgMCwgMSk7XG4gICAgICAgIG9rbGNoWzFdID0gcGVyY2VudFRvQWJzb2x1dGUobm9uZVRvVmFsdWUob2tsY2hbMV0sIDApLCAwLCAwLjQsIGZhbHNlKTtcbiAgICAgICAgb2tsY2hbMl0gPSArbm9uZVRvVmFsdWUob2tsY2hbMl0ucmVwbGFjZSgnZGVnJywgJycpLCAwKTtcbiAgICAgICAgY29uc3QgcmdiID0gcm91bmRSR0Iob2tsY2gycmdiKG9rbGNoKSk7XG4gICAgICAgIGNvbnN0IGFscGhhID0gbVs0XSAhPT0gdW5kZWZpbmVkID8gK3BlcmNlbnRUb0Fic29sdXRlKG1bNF0sIDAsIDEpIDogMTtcbiAgICAgICAgcmdiWzNdID0gYWxwaGE7XG4gICAgICAgIHJldHVybiByZ2I7XG4gICAgfVxufTtcblxuY3NzMnJnYi50ZXN0ID0gKHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICAvLyBtb2Rlcm5cbiAgICAgICAgUkVfUkdCLnRlc3QocykgfHxcbiAgICAgICAgUkVfSFNMLnRlc3QocykgfHxcbiAgICAgICAgUkVfTEFCLnRlc3QocykgfHxcbiAgICAgICAgUkVfTENILnRlc3QocykgfHxcbiAgICAgICAgUkVfT0tMQUIudGVzdChzKSB8fFxuICAgICAgICBSRV9PS0xDSC50ZXN0KHMpIHx8XG4gICAgICAgIC8vIGxlZ2FjeVxuICAgICAgICBSRV9SR0JfTEVHQUNZLnRlc3QocykgfHxcbiAgICAgICAgUkVfUkdCQV9MRUdBQ1kudGVzdChzKSB8fFxuICAgICAgICBSRV9IU0xfTEVHQUNZLnRlc3QocykgfHxcbiAgICAgICAgUkVfSFNMQV9MRUdBQ1kudGVzdChzKSB8fFxuICAgICAgICBzID09PSAndHJhbnNwYXJlbnQnXG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNzczJyZ2I7XG4iLCJpbXBvcnQgeyB1bnBhY2ssIGxhc3QsIHJuZDIgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5cbi8qXG4gKiBzdXBwb3J0ZWQgYXJndW1lbnRzOlxuICogLSBoc2wyY3NzKGgscyxsKVxuICogLSBoc2wyY3NzKGgscyxsLGEpXG4gKiAtIGhzbDJjc3MoW2gscyxsXSwgbW9kZSlcbiAqIC0gaHNsMmNzcyhbaCxzLGwsYV0sIG1vZGUpXG4gKiAtIGhzbDJjc3Moe2gscyxsLGF9LCBtb2RlKVxuICovXG5jb25zdCBoc2wyY3NzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBoc2xhID0gdW5wYWNrKGFyZ3MsICdoc2xhJyk7XG4gICAgbGV0IG1vZGUgPSBsYXN0KGFyZ3MpIHx8ICdsc2EnO1xuICAgIGhzbGFbMF0gPSBybmQyKGhzbGFbMF0gfHwgMCkgKyAnZGVnJztcbiAgICBoc2xhWzFdID0gcm5kMihoc2xhWzFdICogMTAwKSArICclJztcbiAgICBoc2xhWzJdID0gcm5kMihoc2xhWzJdICogMTAwKSArICclJztcbiAgICBpZiAobW9kZSA9PT0gJ2hzbGEnIHx8IChoc2xhLmxlbmd0aCA+IDMgJiYgaHNsYVszXSA8IDEpKSB7XG4gICAgICAgIGhzbGFbM10gPSAnLyAnICsgKGhzbGEubGVuZ3RoID4gMyA/IGhzbGFbM10gOiAxKTtcbiAgICAgICAgbW9kZSA9ICdoc2xhJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBoc2xhLmxlbmd0aCA9IDM7XG4gICAgfVxuICAgIHJldHVybiBgJHttb2RlLnN1YnN0cigwLCAzKX0oJHtoc2xhLmpvaW4oJyAnKX0pYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhzbDJjc3M7XG4iLCJpbXBvcnQgY2hyb21hIGZyb20gJy4uLy4uL2Nocm9tYS5qcyc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vLi4vQ29sb3IuanMnO1xuaW1wb3J0IGlucHV0IGZyb20gJy4uL2lucHV0LmpzJztcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5cbmltcG9ydCByZ2IyY3NzIGZyb20gJy4vcmdiMmNzcy5qcyc7XG5pbXBvcnQgY3NzMnJnYiBmcm9tICcuL2NzczJyZ2IuanMnO1xuXG5Db2xvci5wcm90b3R5cGUuY3NzID0gZnVuY3Rpb24gKG1vZGUpIHtcbiAgICByZXR1cm4gcmdiMmNzcyh0aGlzLl9yZ2IsIG1vZGUpO1xufTtcblxuY29uc3QgY3NzID0gKC4uLmFyZ3MpID0+IG5ldyBDb2xvciguLi5hcmdzLCAnY3NzJyk7XG5jaHJvbWEuY3NzID0gY3NzO1xuXG5pbnB1dC5mb3JtYXQuY3NzID0gY3NzMnJnYjtcblxuaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICBwOiA1LFxuICAgIHRlc3Q6IChoLCAuLi5yZXN0KSA9PiB7XG4gICAgICAgIGlmICghcmVzdC5sZW5ndGggJiYgdHlwZShoKSA9PT0gJ3N0cmluZycgJiYgY3NzMnJnYi50ZXN0KGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Nzcyc7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuZXhwb3J0IHsgY3NzIH07XG4iLCJpbXBvcnQgeyB1bnBhY2ssIGxhc3QsIHJuZDIgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5cbi8qXG4gKiBzdXBwb3J0ZWQgYXJndW1lbnRzOlxuICogLSBsYWIyY3NzKGwsYSxiKVxuICogLSBsYWIyY3NzKGwsYSxiLGFscGhhKVxuICogLSBsYWIyY3NzKFtsLGEsYl0sIG1vZGUpXG4gKiAtIGxhYjJjc3MoW2wsYSxiLGFscGhhXSwgbW9kZSlcbiAqL1xuY29uc3QgbGFiMmNzcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbGFiYSA9IHVucGFjayhhcmdzLCAnbGFiJyk7XG4gICAgbGV0IG1vZGUgPSBsYXN0KGFyZ3MpIHx8ICdsYWInO1xuICAgIGxhYmFbMF0gPSBybmQyKGxhYmFbMF0pICsgJyUnO1xuICAgIGxhYmFbMV0gPSBybmQyKGxhYmFbMV0pO1xuICAgIGxhYmFbMl0gPSBybmQyKGxhYmFbMl0pO1xuICAgIGlmIChtb2RlID09PSAnbGFiYScgfHwgKGxhYmEubGVuZ3RoID4gMyAmJiBsYWJhWzNdIDwgMSkpIHtcbiAgICAgICAgbGFiYVszXSA9ICcvICcgKyAobGFiYS5sZW5ndGggPiAzID8gbGFiYVszXSA6IDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxhYmEubGVuZ3RoID0gMztcbiAgICB9XG4gICAgcmV0dXJuIGBsYWIoJHtsYWJhLmpvaW4oJyAnKX0pYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxhYjJjc3M7XG4iLCJpbXBvcnQgeyB1bnBhY2ssIGxhc3QsIHJuZDIgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5cbi8qXG4gKiBzdXBwb3J0ZWQgYXJndW1lbnRzOlxuICogLSBsYWIyY3NzKGwsYSxiKVxuICogLSBsYWIyY3NzKGwsYSxiLGFscGhhKVxuICogLSBsYWIyY3NzKFtsLGEsYl0sIG1vZGUpXG4gKiAtIGxhYjJjc3MoW2wsYSxiLGFscGhhXSwgbW9kZSlcbiAqL1xuY29uc3QgbGNoMmNzcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbGNoYSA9IHVucGFjayhhcmdzLCAnbGNoJyk7XG4gICAgbGV0IG1vZGUgPSBsYXN0KGFyZ3MpIHx8ICdsYWInO1xuICAgIGxjaGFbMF0gPSBybmQyKGxjaGFbMF0pICsgJyUnO1xuICAgIGxjaGFbMV0gPSBybmQyKGxjaGFbMV0pO1xuICAgIGxjaGFbMl0gPSBpc05hTihsY2hhWzJdKSA/ICdub25lJyA6IHJuZDIobGNoYVsyXSkgKyAnZGVnJzsgLy8gYWRkIGRlZyB1bml0IHRvIGh1ZVxuICAgIGlmIChtb2RlID09PSAnbGNoYScgfHwgKGxjaGEubGVuZ3RoID4gMyAmJiBsY2hhWzNdIDwgMSkpIHtcbiAgICAgICAgbGNoYVszXSA9ICcvICcgKyAobGNoYS5sZW5ndGggPiAzID8gbGNoYVszXSA6IDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxjaGEubGVuZ3RoID0gMztcbiAgICB9XG4gICAgcmV0dXJuIGBsY2goJHtsY2hhLmpvaW4oJyAnKX0pYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxjaDJjc3M7XG4iLCJpbXBvcnQgeyB1bnBhY2ssIHJuZDIsIHJuZDMgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5cbmNvbnN0IG9rbGFiMmNzcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbGFiYSA9IHVucGFjayhhcmdzLCAnbGFiJyk7XG4gICAgbGFiYVswXSA9IHJuZDIobGFiYVswXSAqIDEwMCkgKyAnJSc7XG4gICAgbGFiYVsxXSA9IHJuZDMobGFiYVsxXSk7XG4gICAgbGFiYVsyXSA9IHJuZDMobGFiYVsyXSk7XG4gICAgaWYgKGxhYmEubGVuZ3RoID4gMyAmJiBsYWJhWzNdIDwgMSkge1xuICAgICAgICBsYWJhWzNdID0gJy8gJyArIChsYWJhLmxlbmd0aCA+IDMgPyBsYWJhWzNdIDogMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGFiYS5sZW5ndGggPSAzO1xuICAgIH1cbiAgICByZXR1cm4gYG9rbGFiKCR7bGFiYS5qb2luKCcgJyl9KWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBva2xhYjJjc3M7XG4iLCJpbXBvcnQgeyB1bnBhY2ssIHJuZDIsIHJuZDMgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5cbmNvbnN0IG9rbGNoMmNzcyA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbGNoYSA9IHVucGFjayhhcmdzLCAnbGNoJyk7XG4gICAgbGNoYVswXSA9IHJuZDIobGNoYVswXSAqIDEwMCkgKyAnJSc7XG4gICAgbGNoYVsxXSA9IHJuZDMobGNoYVsxXSk7XG4gICAgbGNoYVsyXSA9IGlzTmFOKGxjaGFbMl0pID8gJ25vbmUnIDogcm5kMihsY2hhWzJdKSArICdkZWcnOyAvLyBhZGQgZGVnIHVuaXQgdG8gaHVlXG4gICAgaWYgKGxjaGEubGVuZ3RoID4gMyAmJiBsY2hhWzNdIDwgMSkge1xuICAgICAgICBsY2hhWzNdID0gJy8gJyArIChsY2hhLmxlbmd0aCA+IDMgPyBsY2hhWzNdIDogMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGNoYS5sZW5ndGggPSAzO1xuICAgIH1cbiAgICByZXR1cm4gYG9rbGNoKCR7bGNoYS5qb2luKCcgJyl9KWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBva2xjaDJjc3M7XG4iLCJpbXBvcnQgeyB1bnBhY2ssIGxhc3QgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5pbXBvcnQgaHNsMmNzcyBmcm9tICcuL2hzbDJjc3MuanMnO1xuaW1wb3J0IHJnYjJoc2wgZnJvbSAnLi4vaHNsL3JnYjJoc2wuanMnO1xuaW1wb3J0IGxhYjJjc3MgZnJvbSAnLi9sYWIyY3NzLmpzJztcbmltcG9ydCByZ2IybGFiIGZyb20gJy4uL2xhYi9yZ2IybGFiLmpzJztcbmltcG9ydCBsY2gyY3NzIGZyb20gJy4vbGNoMmNzcy5qcyc7XG5pbXBvcnQgcmdiMmxjaCBmcm9tICcuLi9sY2gvcmdiMmxjaC5qcyc7XG5pbXBvcnQgcmdiMm9rbGFiIGZyb20gJy4uL29rbGFiL3JnYjJva2xhYi5qcyc7XG5pbXBvcnQgb2tsYWIyY3NzIGZyb20gJy4vb2tsYWIyY3NzLmpzJztcbmltcG9ydCByZ2Iyb2tsY2ggZnJvbSAnLi4vb2tsY2gvcmdiMm9rbGNoLmpzJztcbmltcG9ydCBva2xjaDJjc3MgZnJvbSAnLi9va2xjaDJjc3MuanMnO1xuaW1wb3J0IHsgZ2V0TGFiV2hpdGVQb2ludCwgc2V0TGFiV2hpdGVQb2ludCB9IGZyb20gJy4uL2xhYi9sYWItY29uc3RhbnRzLmpzJztcbmNvbnN0IHsgcm91bmQgfSA9IE1hdGg7XG5cbi8qXG4gKiBzdXBwb3J0ZWQgYXJndW1lbnRzOlxuICogLSByZ2IyY3NzKHIsZyxiKVxuICogLSByZ2IyY3NzKHIsZyxiLGEpXG4gKiAtIHJnYjJjc3MoW3IsZyxiXSwgbW9kZSlcbiAqIC0gcmdiMmNzcyhbcixnLGIsYV0sIG1vZGUpXG4gKiAtIHJnYjJjc3Moe3IsZyxiLGF9LCBtb2RlKVxuICovXG5jb25zdCByZ2IyY3NzID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCByZ2JhID0gdW5wYWNrKGFyZ3MsICdyZ2JhJyk7XG4gICAgbGV0IG1vZGUgPSBsYXN0KGFyZ3MpIHx8ICdyZ2InO1xuICAgIGlmIChtb2RlLnN1YnN0cigwLCAzKSA9PT0gJ2hzbCcpIHtcbiAgICAgICAgcmV0dXJuIGhzbDJjc3MocmdiMmhzbChyZ2JhKSwgbW9kZSk7XG4gICAgfVxuICAgIGlmIChtb2RlLnN1YnN0cigwLCAzKSA9PT0gJ2xhYicpIHtcbiAgICAgICAgLy8gY2hhbmdlIHRvIEQ1MCBsYWIgd2hpdGVwb2ludCBzaW5jZSB0aGlzIGlzIHdoYXQgVzNDIGlzIHVzaW5nIGZvciBDU1MgTGFiIGNvbG9yc1xuICAgICAgICBjb25zdCBwcmV2V2hpdGVQb2ludCA9IGdldExhYldoaXRlUG9pbnQoKTtcbiAgICAgICAgc2V0TGFiV2hpdGVQb2ludCgnZDUwJyk7XG4gICAgICAgIGNvbnN0IGNzc0NvbG9yID0gbGFiMmNzcyhyZ2IybGFiKHJnYmEpLCBtb2RlKTtcbiAgICAgICAgc2V0TGFiV2hpdGVQb2ludChwcmV2V2hpdGVQb2ludCk7XG4gICAgICAgIHJldHVybiBjc3NDb2xvcjtcbiAgICB9XG4gICAgaWYgKG1vZGUuc3Vic3RyKDAsIDMpID09PSAnbGNoJykge1xuICAgICAgICAvLyBjaGFuZ2UgdG8gRDUwIGxhYiB3aGl0ZXBvaW50IHNpbmNlIHRoaXMgaXMgd2hhdCBXM0MgaXMgdXNpbmcgZm9yIENTUyBMYWIgY29sb3JzXG4gICAgICAgIGNvbnN0IHByZXZXaGl0ZVBvaW50ID0gZ2V0TGFiV2hpdGVQb2ludCgpO1xuICAgICAgICBzZXRMYWJXaGl0ZVBvaW50KCdkNTAnKTtcbiAgICAgICAgY29uc3QgY3NzQ29sb3IgPSBsY2gyY3NzKHJnYjJsY2gocmdiYSksIG1vZGUpO1xuICAgICAgICBzZXRMYWJXaGl0ZVBvaW50KHByZXZXaGl0ZVBvaW50KTtcbiAgICAgICAgcmV0dXJuIGNzc0NvbG9yO1xuICAgIH1cbiAgICBpZiAobW9kZS5zdWJzdHIoMCwgNSkgPT09ICdva2xhYicpIHtcbiAgICAgICAgcmV0dXJuIG9rbGFiMmNzcyhyZ2Iyb2tsYWIocmdiYSkpO1xuICAgIH1cbiAgICBpZiAobW9kZS5zdWJzdHIoMCwgNSkgPT09ICdva2xjaCcpIHtcbiAgICAgICAgcmV0dXJuIG9rbGNoMmNzcyhyZ2Iyb2tsY2gocmdiYSkpO1xuICAgIH1cbiAgICByZ2JhWzBdID0gcm91bmQocmdiYVswXSk7XG4gICAgcmdiYVsxXSA9IHJvdW5kKHJnYmFbMV0pO1xuICAgIHJnYmFbMl0gPSByb3VuZChyZ2JhWzJdKTtcbiAgICBpZiAobW9kZSA9PT0gJ3JnYmEnIHx8IChyZ2JhLmxlbmd0aCA+IDMgJiYgcmdiYVszXSA8IDEpKSB7XG4gICAgICAgIHJnYmFbM10gPSAnLyAnICsgKHJnYmEubGVuZ3RoID4gMyA/IHJnYmFbM10gOiAxKTtcbiAgICAgICAgbW9kZSA9ICdyZ2JhJztcbiAgICB9XG4gICAgcmV0dXJuIGAke21vZGUuc3Vic3RyKDAsIDMpfSgke3JnYmEuc2xpY2UoMCwgbW9kZSA9PT0gJ3JnYicgPyAzIDogNCkuam9pbignICcpfSlgO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmdiMmNzcztcbiIsImltcG9ydCBDb2xvciBmcm9tICcuLi8uLi9Db2xvci5qcyc7XG5pbXBvcnQgY2hyb21hIGZyb20gJy4uLy4uL2Nocm9tYS5qcyc7XG5pbXBvcnQgaW5wdXQgZnJvbSAnLi4vaW5wdXQuanMnO1xuaW1wb3J0IHsgdW5wYWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuXG5pbnB1dC5mb3JtYXQuZ2wgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IHJnYiA9IHVucGFjayhhcmdzLCAncmdiYScpO1xuICAgIHJnYlswXSAqPSAyNTU7XG4gICAgcmdiWzFdICo9IDI1NTtcbiAgICByZ2JbMl0gKj0gMjU1O1xuICAgIHJldHVybiByZ2I7XG59O1xuXG5jb25zdCBnbCA9ICguLi5hcmdzKSA9PiBuZXcgQ29sb3IoLi4uYXJncywgJ2dsJyk7XG5jaHJvbWEuZ2wgPSBnbDtcblxuQ29sb3IucHJvdG90eXBlLmdsID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJnYiA9IHRoaXMuX3JnYjtcbiAgICByZXR1cm4gW3JnYlswXSAvIDI1NSwgcmdiWzFdIC8gMjU1LCByZ2JbMl0gLyAyNTUsIHJnYlszXV07XG59O1xuXG5leHBvcnQgeyBnbCB9O1xuIiwiaW1wb3J0IHsgdW5wYWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuY29uc3QgeyBmbG9vciB9ID0gTWF0aDtcblxuLypcbiAqIHRoaXMgaXMgYmFzaWNhbGx5IGp1c3QgSFNWIHdpdGggc29tZSBtaW5vciB0d2Vha3NcbiAqXG4gKiBodWUuLiBbMC4uMzYwXVxuICogY2hyb21hIC4uIFswLi4xXVxuICogZ3JheW5lc3MgLi4gWzAuLjFdXG4gKi9cblxuY29uc3QgaGNnMnJnYiA9ICguLi5hcmdzKSA9PiB7XG4gICAgYXJncyA9IHVucGFjayhhcmdzLCAnaGNnJyk7XG4gICAgbGV0IFtoLCBjLCBfZ10gPSBhcmdzO1xuICAgIGxldCByLCBnLCBiO1xuICAgIF9nID0gX2cgKiAyNTU7XG4gICAgY29uc3QgX2MgPSBjICogMjU1O1xuICAgIGlmIChjID09PSAwKSB7XG4gICAgICAgIHIgPSBnID0gYiA9IF9nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChoID09PSAzNjApIGggPSAwO1xuICAgICAgICBpZiAoaCA+IDM2MCkgaCAtPSAzNjA7XG4gICAgICAgIGlmIChoIDwgMCkgaCArPSAzNjA7XG4gICAgICAgIGggLz0gNjA7XG4gICAgICAgIGNvbnN0IGkgPSBmbG9vcihoKTtcbiAgICAgICAgY29uc3QgZiA9IGggLSBpO1xuICAgICAgICBjb25zdCBwID0gX2cgKiAoMSAtIGMpO1xuICAgICAgICBjb25zdCBxID0gcCArIF9jICogKDEgLSBmKTtcbiAgICAgICAgY29uc3QgdCA9IHAgKyBfYyAqIGY7XG4gICAgICAgIGNvbnN0IHYgPSBwICsgX2M7XG4gICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIFtyLCBnLCBiXSA9IFt2LCB0LCBwXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBbciwgZywgYl0gPSBbcSwgdiwgcF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgW3IsIGcsIGJdID0gW3AsIHYsIHRdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIFtyLCBnLCBiXSA9IFtwLCBxLCB2XTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBbciwgZywgYl0gPSBbdCwgcCwgdl07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgW3IsIGcsIGJdID0gW3YsIHAsIHFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbciwgZywgYiwgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IDFdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGNnMnJnYjtcbiIsImltcG9ydCB7IHVucGFjaywgdHlwZSB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcbmltcG9ydCBjaHJvbWEgZnJvbSAnLi4vLi4vY2hyb21hLmpzJztcbmltcG9ydCBDb2xvciBmcm9tICcuLi8uLi9Db2xvci5qcyc7XG5pbXBvcnQgaW5wdXQgZnJvbSAnLi4vaW5wdXQuanMnO1xuaW1wb3J0IGhjZzJyZ2IgZnJvbSAnLi9oY2cycmdiLmpzJztcbmltcG9ydCByZ2IyaGNnIGZyb20gJy4vcmdiMmhjZy5qcyc7XG5cbkNvbG9yLnByb3RvdHlwZS5oY2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJnYjJoY2codGhpcy5fcmdiKTtcbn07XG5cbmNvbnN0IGhjZyA9ICguLi5hcmdzKSA9PiBuZXcgQ29sb3IoLi4uYXJncywgJ2hjZycpO1xuY2hyb21hLmhjZyA9IGhjZztcblxuaW5wdXQuZm9ybWF0LmhjZyA9IGhjZzJyZ2I7XG5cbmlucHV0LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgcDogMSxcbiAgICB0ZXN0OiAoLi4uYXJncykgPT4ge1xuICAgICAgICBhcmdzID0gdW5wYWNrKGFyZ3MsICdoY2cnKTtcbiAgICAgICAgaWYgKHR5cGUoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIHJldHVybiAnaGNnJztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5leHBvcnQgeyBoY2cgfTtcbiIsImltcG9ydCB7IHVucGFjaywgbWF4LCBtaW4gfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5cbmNvbnN0IHJnYjJoY2cgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IFtyLCBnLCBiXSA9IHVucGFjayhhcmdzLCAncmdiJyk7XG4gICAgY29uc3QgbWluUmdiID0gbWluKHIsIGcsIGIpO1xuICAgIGNvbnN0IG1heFJnYiA9IG1heChyLCBnLCBiKTtcbiAgICBjb25zdCBkZWx0YSA9IG1heFJnYiAtIG1pblJnYjtcbiAgICBjb25zdCBjID0gKGRlbHRhICogMTAwKSAvIDI1NTtcbiAgICBjb25zdCBfZyA9IChtaW5SZ2IgLyAoMjU1IC0gZGVsdGEpKSAqIDEwMDtcbiAgICBsZXQgaDtcbiAgICBpZiAoZGVsdGEgPT09IDApIHtcbiAgICAgICAgaCA9IE51bWJlci5OYU47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHIgPT09IG1heFJnYikgaCA9IChnIC0gYikgLyBkZWx0YTtcbiAgICAgICAgaWYgKGcgPT09IG1heFJnYikgaCA9IDIgKyAoYiAtIHIpIC8gZGVsdGE7XG4gICAgICAgIGlmIChiID09PSBtYXhSZ2IpIGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuICAgICAgICBoICo9IDYwO1xuICAgICAgICBpZiAoaCA8IDApIGggKz0gMzYwO1xuICAgIH1cbiAgICByZXR1cm4gW2gsIGMsIF9nXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJnYjJoY2c7XG4iLCJjb25zdCBSRV9IRVggPSAvXiM/KFtBLUZhLWYwLTldezZ9fFtBLUZhLWYwLTldezN9KSQvO1xuY29uc3QgUkVfSEVYQSA9IC9eIz8oW0EtRmEtZjAtOV17OH18W0EtRmEtZjAtOV17NH0pJC87XG5cbmNvbnN0IGhleDJyZ2IgPSAoaGV4KSA9PiB7XG4gICAgaWYgKGhleC5tYXRjaChSRV9IRVgpKSB7XG4gICAgICAgIC8vIHJlbW92ZSBvcHRpb25hbCBsZWFkaW5nICNcbiAgICAgICAgaWYgKGhleC5sZW5ndGggPT09IDQgfHwgaGV4Lmxlbmd0aCA9PT0gNykge1xuICAgICAgICAgICAgaGV4ID0gaGV4LnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBleHBhbmQgc2hvcnQtbm90YXRpb24gdG8gZnVsbCBzaXgtZGlnaXRcbiAgICAgICAgaWYgKGhleC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIGhleCA9IGhleC5zcGxpdCgnJyk7XG4gICAgICAgICAgICBoZXggPSBoZXhbMF0gKyBoZXhbMF0gKyBoZXhbMV0gKyBoZXhbMV0gKyBoZXhbMl0gKyBoZXhbMl07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdSA9IHBhcnNlSW50KGhleCwgMTYpO1xuICAgICAgICBjb25zdCByID0gdSA+PiAxNjtcbiAgICAgICAgY29uc3QgZyA9ICh1ID4+IDgpICYgMHhmZjtcbiAgICAgICAgY29uc3QgYiA9IHUgJiAweGZmO1xuICAgICAgICByZXR1cm4gW3IsIGcsIGIsIDFdO1xuICAgIH1cblxuICAgIC8vIG1hdGNoIHJnYmEgaGV4IGZvcm1hdCwgZWcgI0ZGMDAwMDc3XG4gICAgaWYgKGhleC5tYXRjaChSRV9IRVhBKSkge1xuICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gNSB8fCBoZXgubGVuZ3RoID09PSA5KSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgb3B0aW9uYWwgbGVhZGluZyAjXG4gICAgICAgICAgICBoZXggPSBoZXguc3Vic3RyKDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGV4cGFuZCBzaG9ydC1ub3RhdGlvbiB0byBmdWxsIGVpZ2h0LWRpZ2l0XG4gICAgICAgIGlmIChoZXgubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICBoZXggPSBoZXguc3BsaXQoJycpO1xuICAgICAgICAgICAgaGV4ID1cbiAgICAgICAgICAgICAgICBoZXhbMF0gK1xuICAgICAgICAgICAgICAgIGhleFswXSArXG4gICAgICAgICAgICAgICAgaGV4WzFdICtcbiAgICAgICAgICAgICAgICBoZXhbMV0gK1xuICAgICAgICAgICAgICAgIGhleFsyXSArXG4gICAgICAgICAgICAgICAgaGV4WzJdICtcbiAgICAgICAgICAgICAgICBoZXhbM10gK1xuICAgICAgICAgICAgICAgIGhleFszXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1ID0gcGFyc2VJbnQoaGV4LCAxNik7XG4gICAgICAgIGNvbnN0IHIgPSAodSA+PiAyNCkgJiAweGZmO1xuICAgICAgICBjb25zdCBnID0gKHUgPj4gMTYpICYgMHhmZjtcbiAgICAgICAgY29uc3QgYiA9ICh1ID4+IDgpICYgMHhmZjtcbiAgICAgICAgY29uc3QgYSA9IE1hdGgucm91bmQoKCh1ICYgMHhmZikgLyAweGZmKSAqIDEwMCkgLyAxMDA7XG4gICAgICAgIHJldHVybiBbciwgZywgYiwgYV07XG4gICAgfVxuXG4gICAgLy8gd2UgdXNlZCB0byBjaGVjayBmb3IgY3NzIGNvbG9ycyBoZXJlXG4gICAgLy8gaWYgX2lucHV0LmNzcz8gYW5kIHJnYiA9IF9pbnB1dC5jc3MgaGV4XG4gICAgLy8gICAgIHJldHVybiByZ2JcblxuICAgIHRocm93IG5ldyBFcnJvcihgdW5rbm93biBoZXggY29sb3I6ICR7aGV4fWApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGV4MnJnYjtcbiIsImltcG9ydCBDb2xvciBmcm9tICcuLi8uLi9Db2xvci5qcyc7XG5pbXBvcnQgY2hyb21hIGZyb20gJy4uLy4uL2Nocm9tYS5qcyc7XG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuaW1wb3J0IGlucHV0IGZyb20gJy4uL2lucHV0LmpzJztcbmltcG9ydCBoZXgycmdiIGZyb20gJy4vaGV4MnJnYi5qcyc7XG5pbXBvcnQgcmdiMmhleCBmcm9tICcuL3JnYjJoZXguanMnO1xuXG5Db2xvci5wcm90b3R5cGUuaGV4ID0gZnVuY3Rpb24gKG1vZGUpIHtcbiAgICByZXR1cm4gcmdiMmhleCh0aGlzLl9yZ2IsIG1vZGUpO1xufTtcblxuY29uc3QgaGV4ID0gKC4uLmFyZ3MpID0+IG5ldyBDb2xvciguLi5hcmdzLCAnaGV4Jyk7XG5jaHJvbWEuaGV4ID0gaGV4O1xuXG5pbnB1dC5mb3JtYXQuaGV4ID0gaGV4MnJnYjtcbmlucHV0LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgcDogNCxcbiAgICB0ZXN0OiAoaCwgLi4ucmVzdCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhcmVzdC5sZW5ndGggJiZcbiAgICAgICAgICAgIHR5cGUoaCkgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgICBbMywgNCwgNSwgNiwgNywgOCwgOV0uaW5kZXhPZihoLmxlbmd0aCkgPj0gMFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiAnaGV4JztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5leHBvcnQgeyBoZXggfTtcbiIsImltcG9ydCB7IHVucGFjaywgbGFzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcbmNvbnN0IHsgcm91bmQgfSA9IE1hdGg7XG5cbmNvbnN0IHJnYjJoZXggPSAoLi4uYXJncykgPT4ge1xuICAgIGxldCBbciwgZywgYiwgYV0gPSB1bnBhY2soYXJncywgJ3JnYmEnKTtcbiAgICBsZXQgbW9kZSA9IGxhc3QoYXJncykgfHwgJ2F1dG8nO1xuICAgIGlmIChhID09PSB1bmRlZmluZWQpIGEgPSAxO1xuICAgIGlmIChtb2RlID09PSAnYXV0bycpIHtcbiAgICAgICAgbW9kZSA9IGEgPCAxID8gJ3JnYmEnIDogJ3JnYic7XG4gICAgfVxuICAgIHIgPSByb3VuZChyKTtcbiAgICBnID0gcm91bmQoZyk7XG4gICAgYiA9IHJvdW5kKGIpO1xuICAgIGNvbnN0IHUgPSAociA8PCAxNikgfCAoZyA8PCA4KSB8IGI7XG4gICAgbGV0IHN0ciA9ICcwMDAwMDAnICsgdS50b1N0cmluZygxNik7IC8vIy50b1VwcGVyQ2FzZSgpO1xuICAgIHN0ciA9IHN0ci5zdWJzdHIoc3RyLmxlbmd0aCAtIDYpO1xuICAgIGxldCBoeGEgPSAnMCcgKyByb3VuZChhICogMjU1KS50b1N0cmluZygxNik7XG4gICAgaHhhID0gaHhhLnN1YnN0cihoeGEubGVuZ3RoIC0gMik7XG4gICAgc3dpdGNoIChtb2RlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgY2FzZSAncmdiYSc6XG4gICAgICAgICAgICByZXR1cm4gYCMke3N0cn0ke2h4YX1gO1xuICAgICAgICBjYXNlICdhcmdiJzpcbiAgICAgICAgICAgIHJldHVybiBgIyR7aHhhfSR7c3RyfWA7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gYCMke3N0cn1gO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJnYjJoZXg7XG4iLCJpbXBvcnQgeyB1bnBhY2ssIGxpbWl0LCBUV09QSSwgUElUSElSRCB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcbmNvbnN0IHsgY29zIH0gPSBNYXRoO1xuXG4vKlxuICogaHVlIFswLi4zNjBdXG4gKiBzYXR1cmF0aW9uIFswLi4xXVxuICogaW50ZW5zaXR5IFswLi4xXVxuICovXG5jb25zdCBoc2kycmdiID0gKC4uLmFyZ3MpID0+IHtcbiAgICAvKlxuICAgIGJvcnJvd2VkIGZyb20gaGVyZTpcbiAgICBodHRwOi8vaHVtbWVyLnN0YW5mb3JkLmVkdS9tdXNlaW5mby9kb2MvZXhhbXBsZXMvaHVtZHJ1bS9rZXlzY2FwZTIvaHNpMnJnYi5jcHBcbiAgICAqL1xuICAgIGFyZ3MgPSB1bnBhY2soYXJncywgJ2hzaScpO1xuICAgIGxldCBbaCwgcywgaV0gPSBhcmdzO1xuICAgIGxldCByLCBnLCBiO1xuXG4gICAgaWYgKGlzTmFOKGgpKSBoID0gMDtcbiAgICBpZiAoaXNOYU4ocykpIHMgPSAwO1xuICAgIC8vIG5vcm1hbGl6ZSBodWVcbiAgICBpZiAoaCA+IDM2MCkgaCAtPSAzNjA7XG4gICAgaWYgKGggPCAwKSBoICs9IDM2MDtcbiAgICBoIC89IDM2MDtcbiAgICBpZiAoaCA8IDEgLyAzKSB7XG4gICAgICAgIGIgPSAoMSAtIHMpIC8gMztcbiAgICAgICAgciA9ICgxICsgKHMgKiBjb3MoVFdPUEkgKiBoKSkgLyBjb3MoUElUSElSRCAtIFRXT1BJICogaCkpIC8gMztcbiAgICAgICAgZyA9IDEgLSAoYiArIHIpO1xuICAgIH0gZWxzZSBpZiAoaCA8IDIgLyAzKSB7XG4gICAgICAgIGggLT0gMSAvIDM7XG4gICAgICAgIHIgPSAoMSAtIHMpIC8gMztcbiAgICAgICAgZyA9ICgxICsgKHMgKiBjb3MoVFdPUEkgKiBoKSkgLyBjb3MoUElUSElSRCAtIFRXT1BJICogaCkpIC8gMztcbiAgICAgICAgYiA9IDEgLSAociArIGcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGggLT0gMiAvIDM7XG4gICAgICAgIGcgPSAoMSAtIHMpIC8gMztcbiAgICAgICAgYiA9ICgxICsgKHMgKiBjb3MoVFdPUEkgKiBoKSkgLyBjb3MoUElUSElSRCAtIFRXT1BJICogaCkpIC8gMztcbiAgICAgICAgciA9IDEgLSAoZyArIGIpO1xuICAgIH1cbiAgICByID0gbGltaXQoaSAqIHIgKiAzKTtcbiAgICBnID0gbGltaXQoaSAqIGcgKiAzKTtcbiAgICBiID0gbGltaXQoaSAqIGIgKiAzKTtcbiAgICByZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTUsIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhzaTJyZ2I7XG4iLCJpbXBvcnQgeyB1bnBhY2ssIHR5cGUgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5pbXBvcnQgY2hyb21hIGZyb20gJy4uLy4uL2Nocm9tYS5qcyc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vLi4vQ29sb3IuanMnO1xuaW1wb3J0IGlucHV0IGZyb20gJy4uL2lucHV0LmpzJztcbmltcG9ydCBoc2kycmdiIGZyb20gJy4vaHNpMnJnYi5qcyc7XG5pbXBvcnQgcmdiMmhzaSBmcm9tICcuL3JnYjJoc2kuanMnO1xuXG5Db2xvci5wcm90b3R5cGUuaHNpID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByZ2IyaHNpKHRoaXMuX3JnYik7XG59O1xuXG5jb25zdCBoc2kgPSAoLi4uYXJncykgPT4gbmV3IENvbG9yKC4uLmFyZ3MsICdoc2knKTtcbmNocm9tYS5oc2kgPSBoc2k7XG5cbmlucHV0LmZvcm1hdC5oc2kgPSBoc2kycmdiO1xuXG5pbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgIHA6IDIsXG4gICAgdGVzdDogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgYXJncyA9IHVucGFjayhhcmdzLCAnaHNpJyk7XG4gICAgICAgIGlmICh0eXBlKGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2hzaSc7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuZXhwb3J0IHsgaHNpIH07XG4iLCJpbXBvcnQgeyB1bnBhY2ssIFRXT1BJIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuY29uc3QgeyBtaW4sIHNxcnQsIGFjb3MgfSA9IE1hdGg7XG5cbmNvbnN0IHJnYjJoc2kgPSAoLi4uYXJncykgPT4ge1xuICAgIC8qXG4gICAgYm9ycm93ZWQgZnJvbSBoZXJlOlxuICAgIGh0dHA6Ly9odW1tZXIuc3RhbmZvcmQuZWR1L211c2VpbmZvL2RvYy9leGFtcGxlcy9odW1kcnVtL2tleXNjYXBlMi9yZ2IyaHNpLmNwcFxuICAgICovXG4gICAgbGV0IFtyLCBnLCBiXSA9IHVucGFjayhhcmdzLCAncmdiJyk7XG4gICAgciAvPSAyNTU7XG4gICAgZyAvPSAyNTU7XG4gICAgYiAvPSAyNTU7XG4gICAgbGV0IGg7XG4gICAgY29uc3QgbWluXyA9IG1pbihyLCBnLCBiKTtcbiAgICBjb25zdCBpID0gKHIgKyBnICsgYikgLyAzO1xuICAgIGNvbnN0IHMgPSBpID4gMCA/IDEgLSBtaW5fIC8gaSA6IDA7XG4gICAgaWYgKHMgPT09IDApIHtcbiAgICAgICAgaCA9IE5hTjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBoID0gKHIgLSBnICsgKHIgLSBiKSkgLyAyO1xuICAgICAgICBoIC89IHNxcnQoKHIgLSBnKSAqIChyIC0gZykgKyAociAtIGIpICogKGcgLSBiKSk7XG4gICAgICAgIGggPSBhY29zKGgpO1xuICAgICAgICBpZiAoYiA+IGcpIHtcbiAgICAgICAgICAgIGggPSBUV09QSSAtIGg7XG4gICAgICAgIH1cbiAgICAgICAgaCAvPSBUV09QSTtcbiAgICB9XG4gICAgcmV0dXJuIFtoICogMzYwLCBzLCBpXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJnYjJoc2k7XG4iLCJpbXBvcnQgeyB1bnBhY2sgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5cbmNvbnN0IGhzbDJyZ2IgPSAoLi4uYXJncykgPT4ge1xuICAgIGFyZ3MgPSB1bnBhY2soYXJncywgJ2hzbCcpO1xuICAgIGNvbnN0IFtoLCBzLCBsXSA9IGFyZ3M7XG4gICAgbGV0IHIsIGcsIGI7XG4gICAgaWYgKHMgPT09IDApIHtcbiAgICAgICAgciA9IGcgPSBiID0gbCAqIDI1NTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0MyA9IFswLCAwLCAwXTtcbiAgICAgICAgY29uc3QgYyA9IFswLCAwLCAwXTtcbiAgICAgICAgY29uc3QgdDIgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICAgICAgICBjb25zdCB0MSA9IDIgKiBsIC0gdDI7XG4gICAgICAgIGNvbnN0IGhfID0gaCAvIDM2MDtcbiAgICAgICAgdDNbMF0gPSBoXyArIDEgLyAzO1xuICAgICAgICB0M1sxXSA9IGhfO1xuICAgICAgICB0M1syXSA9IGhfIC0gMSAvIDM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodDNbaV0gPCAwKSB0M1tpXSArPSAxO1xuICAgICAgICAgICAgaWYgKHQzW2ldID4gMSkgdDNbaV0gLT0gMTtcbiAgICAgICAgICAgIGlmICg2ICogdDNbaV0gPCAxKSBjW2ldID0gdDEgKyAodDIgLSB0MSkgKiA2ICogdDNbaV07XG4gICAgICAgICAgICBlbHNlIGlmICgyICogdDNbaV0gPCAxKSBjW2ldID0gdDI7XG4gICAgICAgICAgICBlbHNlIGlmICgzICogdDNbaV0gPCAyKSBjW2ldID0gdDEgKyAodDIgLSB0MSkgKiAoMiAvIDMgLSB0M1tpXSkgKiA2O1xuICAgICAgICAgICAgZWxzZSBjW2ldID0gdDE7XG4gICAgICAgIH1cbiAgICAgICAgW3IsIGcsIGJdID0gW2NbMF0gKiAyNTUsIGNbMV0gKiAyNTUsIGNbMl0gKiAyNTVdO1xuICAgIH1cbiAgICBpZiAoYXJncy5sZW5ndGggPiAzKSB7XG4gICAgICAgIC8vIGtlZXAgYWxwaGEgY2hhbm5lbFxuICAgICAgICByZXR1cm4gW3IsIGcsIGIsIGFyZ3NbM11dO1xuICAgIH1cbiAgICByZXR1cm4gW3IsIGcsIGIsIDFdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaHNsMnJnYjtcbiIsImltcG9ydCB7IHVucGFjaywgdHlwZSB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcbmltcG9ydCBjaHJvbWEgZnJvbSAnLi4vLi4vY2hyb21hLmpzJztcbmltcG9ydCBDb2xvciBmcm9tICcuLi8uLi9Db2xvci5qcyc7XG5pbXBvcnQgaW5wdXQgZnJvbSAnLi4vaW5wdXQuanMnO1xuaW1wb3J0IGhzbDJyZ2IgZnJvbSAnLi9oc2wycmdiLmpzJztcbmltcG9ydCByZ2IyaHNsIGZyb20gJy4vcmdiMmhzbC5qcyc7XG5cbkNvbG9yLnByb3RvdHlwZS5oc2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJnYjJoc2wodGhpcy5fcmdiKTtcbn07XG5cbmNvbnN0IGhzbCA9ICguLi5hcmdzKSA9PiBuZXcgQ29sb3IoLi4uYXJncywgJ2hzbCcpO1xuY2hyb21hLmhzbCA9IGhzbDtcblxuaW5wdXQuZm9ybWF0LmhzbCA9IGhzbDJyZ2I7XG5cbmlucHV0LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgcDogMixcbiAgICB0ZXN0OiAoLi4uYXJncykgPT4ge1xuICAgICAgICBhcmdzID0gdW5wYWNrKGFyZ3MsICdoc2wnKTtcbiAgICAgICAgaWYgKHR5cGUoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIHJldHVybiAnaHNsJztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5leHBvcnQgeyBoc2wgfTtcbiIsImltcG9ydCB7IHVucGFjaywgbWluLCBtYXggfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5cbi8qXG4gKiBzdXBwb3J0ZWQgYXJndW1lbnRzOlxuICogLSByZ2IyaHNsKHIsZyxiKVxuICogLSByZ2IyaHNsKHIsZyxiLGEpXG4gKiAtIHJnYjJoc2woW3IsZyxiXSlcbiAqIC0gcmdiMmhzbChbcixnLGIsYV0pXG4gKiAtIHJnYjJoc2woe3IsZyxiLGF9KVxuICovXG5jb25zdCByZ2IyaHNsID0gKC4uLmFyZ3MpID0+IHtcbiAgICBhcmdzID0gdW5wYWNrKGFyZ3MsICdyZ2JhJyk7XG4gICAgbGV0IFtyLCBnLCBiXSA9IGFyZ3M7XG5cbiAgICByIC89IDI1NTtcbiAgICBnIC89IDI1NTtcbiAgICBiIC89IDI1NTtcblxuICAgIGNvbnN0IG1pblJnYiA9IG1pbihyLCBnLCBiKTtcbiAgICBjb25zdCBtYXhSZ2IgPSBtYXgociwgZywgYik7XG5cbiAgICBjb25zdCBsID0gKG1heFJnYiArIG1pblJnYikgLyAyO1xuICAgIGxldCBzLCBoO1xuXG4gICAgaWYgKG1heFJnYiA9PT0gbWluUmdiKSB7XG4gICAgICAgIHMgPSAwO1xuICAgICAgICBoID0gTnVtYmVyLk5hTjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzID1cbiAgICAgICAgICAgIGwgPCAwLjVcbiAgICAgICAgICAgICAgICA/IChtYXhSZ2IgLSBtaW5SZ2IpIC8gKG1heFJnYiArIG1pblJnYilcbiAgICAgICAgICAgICAgICA6IChtYXhSZ2IgLSBtaW5SZ2IpIC8gKDIgLSBtYXhSZ2IgLSBtaW5SZ2IpO1xuICAgIH1cblxuICAgIGlmIChyID09IG1heFJnYikgaCA9IChnIC0gYikgLyAobWF4UmdiIC0gbWluUmdiKTtcbiAgICBlbHNlIGlmIChnID09IG1heFJnYikgaCA9IDIgKyAoYiAtIHIpIC8gKG1heFJnYiAtIG1pblJnYik7XG4gICAgZWxzZSBpZiAoYiA9PSBtYXhSZ2IpIGggPSA0ICsgKHIgLSBnKSAvIChtYXhSZ2IgLSBtaW5SZ2IpO1xuXG4gICAgaCAqPSA2MDtcbiAgICBpZiAoaCA8IDApIGggKz0gMzYwO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDMgJiYgYXJnc1szXSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gW2gsIHMsIGwsIGFyZ3NbM11dO1xuICAgIHJldHVybiBbaCwgcywgbF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZ2IyaHNsO1xuIiwiaW1wb3J0IHsgdW5wYWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuY29uc3QgeyBmbG9vciB9ID0gTWF0aDtcblxuY29uc3QgaHN2MnJnYiA9ICguLi5hcmdzKSA9PiB7XG4gICAgYXJncyA9IHVucGFjayhhcmdzLCAnaHN2Jyk7XG4gICAgbGV0IFtoLCBzLCB2XSA9IGFyZ3M7XG4gICAgbGV0IHIsIGcsIGI7XG4gICAgdiAqPSAyNTU7XG4gICAgaWYgKHMgPT09IDApIHtcbiAgICAgICAgciA9IGcgPSBiID0gdjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaCA9PT0gMzYwKSBoID0gMDtcbiAgICAgICAgaWYgKGggPiAzNjApIGggLT0gMzYwO1xuICAgICAgICBpZiAoaCA8IDApIGggKz0gMzYwO1xuICAgICAgICBoIC89IDYwO1xuXG4gICAgICAgIGNvbnN0IGkgPSBmbG9vcihoKTtcbiAgICAgICAgY29uc3QgZiA9IGggLSBpO1xuICAgICAgICBjb25zdCBwID0gdiAqICgxIC0gcyk7XG4gICAgICAgIGNvbnN0IHEgPSB2ICogKDEgLSBzICogZik7XG4gICAgICAgIGNvbnN0IHQgPSB2ICogKDEgLSBzICogKDEgLSBmKSk7XG5cbiAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgW3IsIGcsIGJdID0gW3YsIHQsIHBdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIFtyLCBnLCBiXSA9IFtxLCB2LCBwXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBbciwgZywgYl0gPSBbcCwgdiwgdF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgW3IsIGcsIGJdID0gW3AsIHEsIHZdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIFtyLCBnLCBiXSA9IFt0LCBwLCB2XTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBbciwgZywgYl0gPSBbdiwgcCwgcV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtyLCBnLCBiLCBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogMV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoc3YycmdiO1xuIiwiaW1wb3J0IHsgdW5wYWNrLCB0eXBlIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuaW1wb3J0IGNocm9tYSBmcm9tICcuLi8uLi9jaHJvbWEuanMnO1xuaW1wb3J0IENvbG9yIGZyb20gJy4uLy4uL0NvbG9yLmpzJztcbmltcG9ydCBpbnB1dCBmcm9tICcuLi9pbnB1dC5qcyc7XG5pbXBvcnQgaHN2MnJnYiBmcm9tICcuL2hzdjJyZ2IuanMnO1xuaW1wb3J0IHJnYjJoc3YgZnJvbSAnLi9yZ2IyaHN2LmpzJztcblxuQ29sb3IucHJvdG90eXBlLmhzdiA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmdiMmhzdih0aGlzLl9yZ2IpO1xufTtcblxuY29uc3QgaHN2ID0gKC4uLmFyZ3MpID0+IG5ldyBDb2xvciguLi5hcmdzLCAnaHN2Jyk7XG5jaHJvbWEuaHN2ID0gaHN2O1xuXG5pbnB1dC5mb3JtYXQuaHN2ID0gaHN2MnJnYjtcblxuaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICBwOiAyLFxuICAgIHRlc3Q6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGFyZ3MgPSB1bnBhY2soYXJncywgJ2hzdicpO1xuICAgICAgICBpZiAodHlwZShhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgcmV0dXJuICdoc3YnO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmV4cG9ydCB7IGhzdiB9O1xuIiwiaW1wb3J0IHsgdW5wYWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuY29uc3QgeyBtaW4sIG1heCB9ID0gTWF0aDtcblxuLypcbiAqIHN1cHBvcnRlZCBhcmd1bWVudHM6XG4gKiAtIHJnYjJoc3YocixnLGIpXG4gKiAtIHJnYjJoc3YoW3IsZyxiXSlcbiAqIC0gcmdiMmhzdih7cixnLGJ9KVxuICovXG5jb25zdCByZ2IyaHNsID0gKC4uLmFyZ3MpID0+IHtcbiAgICBhcmdzID0gdW5wYWNrKGFyZ3MsICdyZ2InKTtcbiAgICBsZXQgW3IsIGcsIGJdID0gYXJncztcbiAgICBjb25zdCBtaW5fID0gbWluKHIsIGcsIGIpO1xuICAgIGNvbnN0IG1heF8gPSBtYXgociwgZywgYik7XG4gICAgY29uc3QgZGVsdGEgPSBtYXhfIC0gbWluXztcbiAgICBsZXQgaCwgcywgdjtcbiAgICB2ID0gbWF4XyAvIDI1NS4wO1xuICAgIGlmIChtYXhfID09PSAwKSB7XG4gICAgICAgIGggPSBOdW1iZXIuTmFOO1xuICAgICAgICBzID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzID0gZGVsdGEgLyBtYXhfO1xuICAgICAgICBpZiAociA9PT0gbWF4XykgaCA9IChnIC0gYikgLyBkZWx0YTtcbiAgICAgICAgaWYgKGcgPT09IG1heF8pIGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuICAgICAgICBpZiAoYiA9PT0gbWF4XykgaCA9IDQgKyAociAtIGcpIC8gZGVsdGE7XG4gICAgICAgIGggKj0gNjA7XG4gICAgICAgIGlmIChoIDwgMCkgaCArPSAzNjA7XG4gICAgfVxuICAgIHJldHVybiBbaCwgcywgdl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZ2IyaHNsO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGZvcm1hdDoge30sXG4gICAgYXV0b2RldGVjdDogW11cbn07XG4iLCJpbXBvcnQgeyB1bnBhY2ssIHR5cGUgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5pbXBvcnQgY2hyb21hIGZyb20gJy4uLy4uL2Nocm9tYS5qcyc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vLi4vQ29sb3IuanMnO1xuaW1wb3J0IGlucHV0IGZyb20gJy4uL2lucHV0LmpzJztcbmltcG9ydCBsYWIycmdiIGZyb20gJy4vbGFiMnJnYi5qcyc7XG5pbXBvcnQgcmdiMmxhYiBmcm9tICcuL3JnYjJsYWIuanMnO1xuaW1wb3J0IHsgZ2V0TGFiV2hpdGVQb2ludCwgc2V0TGFiV2hpdGVQb2ludCB9IGZyb20gJy4vbGFiLWNvbnN0YW50cy5qcyc7XG5cbkNvbG9yLnByb3RvdHlwZS5sYWIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJnYjJsYWIodGhpcy5fcmdiKTtcbn07XG5cbmNvbnN0IGxhYiA9ICguLi5hcmdzKSA9PiBuZXcgQ29sb3IoLi4uYXJncywgJ2xhYicpO1xuT2JqZWN0LmFzc2lnbihjaHJvbWEsIHsgbGFiLCBnZXRMYWJXaGl0ZVBvaW50LCBzZXRMYWJXaGl0ZVBvaW50IH0pO1xuXG5pbnB1dC5mb3JtYXQubGFiID0gbGFiMnJnYjtcblxuaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICBwOiAyLFxuICAgIHRlc3Q6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGFyZ3MgPSB1bnBhY2soYXJncywgJ2xhYicpO1xuICAgICAgICBpZiAodHlwZShhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgcmV0dXJuICdsYWInO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmV4cG9ydCB7IGxhYiwgZ2V0TGFiV2hpdGVQb2ludCwgc2V0TGFiV2hpdGVQb2ludCB9O1xuIiwiY29uc3QgbGFiQ29uc3RhbnRzID0ge1xuICAgIC8vIENvcnJlc3BvbmRzIHJvdWdobHkgdG8gUkdCIGJyaWdodGVyL2RhcmtlclxuICAgIEtuOiAxOCxcblxuICAgIC8vIEQ2NSBzdGFuZGFyZCByZWZlcmVudFxuICAgIGxhYldoaXRlUG9pbnQ6ICdkNjUnLFxuICAgIFhuOiAwLjk1MDQ3LFxuICAgIFluOiAxLFxuICAgIFpuOiAxLjA4ODgzLFxuXG4gICAgdDA6IDAuMTM3OTMxMDM0LCAvLyA0IC8gMjlcbiAgICB0MTogMC4yMDY4OTY1NTIsIC8vIDYgLyAyOVxuICAgIHQyOiAwLjEyODQxODU1LCAvLyAzICogdDEgKiB0MVxuICAgIHQzOiAwLjAwODg1NjQ1MiwgLy8gdDEgKiB0MSAqIHQxLFxuXG4gICAga0U6IDIxNi4wIC8gMjQzODkuMCxcbiAgICBrS0U6IDguMCxcbiAgICBrSzogMjQzODkuMCAvIDI3LjAsXG5cbiAgICBSZWZXaGl0ZVJHQjoge1xuICAgICAgICAvLyBzUkdCXG4gICAgICAgIFg6IDAuOTUwNDcsXG4gICAgICAgIFk6IDEsXG4gICAgICAgIFo6IDEuMDg4ODNcbiAgICB9LFxuXG4gICAgTXR4UkdCMlhZWjoge1xuICAgICAgICBtMDA6IDAuNDEyNDU2NDM5MDg5NjkyMixcbiAgICAgICAgbTAxOiAwLjIxMjY3Mjg1MTQwNTYyMjUzLFxuICAgICAgICBtMDI6IDAuMDE5MzMzODk1NTgyMzI5MyxcbiAgICAgICAgbTEwOiAwLjM1NzU3NjA3NzY0MzkwOSxcbiAgICAgICAgbTExOiAwLjcxNTE1MjE1NTI4NzgxOCxcbiAgICAgICAgbTEyOiAwLjExOTE5MjAyNTg4MTMwMjk3LFxuICAgICAgICBtMjA6IDAuMTgwNDM3NDgzMjY2Mzk4OTQsXG4gICAgICAgIG0yMTogMC4wNzIxNzQ5OTMzMDY1NTk1OCxcbiAgICAgICAgbTIyOiAwLjk1MDMwNDA3ODUzNjM2NzlcbiAgICB9LFxuXG4gICAgTXR4WFlaMlJHQjoge1xuICAgICAgICBtMDA6IDMuMjQwNDU0MTYyMTE0MTA0NSxcbiAgICAgICAgbTAxOiAtMC45NjkyNjYwMzA1MDUxODY4LFxuICAgICAgICBtMDI6IDAuMDU1NjQzNDMwOTU5MTE0NzI2LFxuICAgICAgICBtMTA6IC0xLjUzNzEzODUxMjc5NzcxNjYsXG4gICAgICAgIG0xMTogMS44NzYwMTA4NDU0NDY2OTQyLFxuICAgICAgICBtMTI6IC0wLjIwNDAyNTkxMzUxNjc1MzgsXG4gICAgICAgIG0yMDogLTAuNDk4NTMxNDA5NTU2MDE2LFxuICAgICAgICBtMjE6IDAuMDQxNTU2MDE3NTMwMzQ5ODM0LFxuICAgICAgICBtMjI6IDEuMDU3MjI1MTg4MjIzMTc5MVxuICAgIH0sXG5cbiAgICAvLyB1c2VkIGluIHJnYjJ4eXpcbiAgICBBczogMC45NDE0Mjg1MzUwMDAwMDAxLFxuICAgIEJzOiAxLjA0MDQxNzQ2NyxcbiAgICBDczogMS4wODk1MzI2NTEsXG5cbiAgICBNdHhBZGFwdE1hOiB7XG4gICAgICAgIG0wMDogMC44OTUxLFxuICAgICAgICBtMDE6IC0wLjc1MDIsXG4gICAgICAgIG0wMjogMC4wMzg5LFxuICAgICAgICBtMTA6IDAuMjY2NCxcbiAgICAgICAgbTExOiAxLjcxMzUsXG4gICAgICAgIG0xMjogLTAuMDY4NSxcbiAgICAgICAgbTIwOiAtMC4xNjE0LFxuICAgICAgICBtMjE6IDAuMDM2NyxcbiAgICAgICAgbTIyOiAxLjAyOTZcbiAgICB9LFxuXG4gICAgTXR4QWRhcHRNYUk6IHtcbiAgICAgICAgbTAwOiAwLjk4Njk5MjkwNTQ2NjcxMjMsXG4gICAgICAgIG0wMTogMC40MzIzMDUyNjk3MjMzOTQ1NixcbiAgICAgICAgbTAyOiAtMC4wMDg1Mjg2NjQ1NzUxNzczMjgsXG4gICAgICAgIG0xMDogLTAuMTQ3MDU0MjU2NDIwOTkwMTMsXG4gICAgICAgIG0xMTogMC41MTgzNjAyNzE1MzY3Nzc2LFxuICAgICAgICBtMTI6IDAuMDQwMDQyODIxNjU0MDg0ODcsXG4gICAgICAgIG0yMDogMC4xNTk5NjI2NTE2NjM3MzEyNSxcbiAgICAgICAgbTIxOiAwLjA0OTI5MTIyODIxMjg1NTYsXG4gICAgICAgIG0yMjogMC45Njg0ODY2OTU3ODc1NTAyXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbGFiQ29uc3RhbnRzO1xuXG4vLyB0YWtlbiBmcm9tIGh0dHBzOi8vZGUubWF0aHdvcmtzLmNvbS9oZWxwL2ltYWdlcy9yZWYvd2hpdGVwb2ludC5odG1sXG5jb25zdCBJTExVTUlOQU5UUyA9IG5ldyBNYXAoW1xuICAgIC8vIEFTVE0gRTMwOC0wMVxuICAgIFsnYScsIFsxLjA5ODUsIDAuMzU1ODVdXSxcbiAgICAvLyBXeXN6ZWNraSAmIFN0aWxlcywgcC4gNzY5XG4gICAgWydiJywgWzEuMDk4NSwgMC4zNTU4NV1dLFxuICAgIC8vIEMgQVNUTSBFMzA4LTAxXG4gICAgWydjJywgWzAuOTgwNzQsIDEuMTgyMzJdXSxcbiAgICAvLyBENTAgKEFTVE0gRTMwOC0wMSlcbiAgICBbJ2Q1MCcsIFswLjk2NDIyLCAwLjgyNTIxXV0sXG4gICAgLy8gRDU1IChBU1RNIEUzMDgtMDEpXG4gICAgWydkNTUnLCBbMC45NTY4MiwgMC45MjE0OV1dLFxuICAgIC8vIEQ2NSAoQVNUTSBFMzA4LTAxKVxuICAgIFsnZDY1JywgWzAuOTUwNDcsIDEuMDg4ODNdXSxcbiAgICAvLyBFIChBU1RNIEUzMDgtMDEpXG4gICAgWydlJywgWzEsIDEsIDFdXSxcbiAgICAvLyBGMiAoQVNUTSBFMzA4LTAxKVxuICAgIFsnZjInLCBbMC45OTE4NiwgMC42NzM5M11dLFxuICAgIC8vIEY3IChBU1RNIEUzMDgtMDEpXG4gICAgWydmNycsIFswLjk1MDQxLCAxLjA4NzQ3XV0sXG4gICAgLy8gRjExIChBU1RNIEUzMDgtMDEpXG4gICAgWydmMTEnLCBbMS4wMDk2MiwgMC42NDM1XV0sXG4gICAgWydpY2MnLCBbMC45NjQyMiwgMC44MjUyMV1dXG5dKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldExhYldoaXRlUG9pbnQobmFtZSkge1xuICAgIGNvbnN0IGlsbCA9IElMTFVNSU5BTlRTLmdldChTdHJpbmcobmFtZSkudG9Mb3dlckNhc2UoKSk7XG4gICAgaWYgKCFpbGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIExhYiBpbGx1bWluYW50ICcgKyBuYW1lKTtcbiAgICB9XG4gICAgbGFiQ29uc3RhbnRzLmxhYldoaXRlUG9pbnQgPSBuYW1lO1xuICAgIGxhYkNvbnN0YW50cy5YbiA9IGlsbFswXTtcbiAgICBsYWJDb25zdGFudHMuWm4gPSBpbGxbMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYWJXaGl0ZVBvaW50KCkge1xuICAgIHJldHVybiBsYWJDb25zdGFudHMubGFiV2hpdGVQb2ludDtcbn1cbiIsImltcG9ydCBMQUJfQ09OU1RBTlRTIGZyb20gJy4vbGFiLWNvbnN0YW50cy5qcyc7XG5pbXBvcnQgeyB1bnBhY2sgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5cbi8qXG4gKiBMKiBbMC4uMTAwXVxuICogYSBbLTEwMC4uMTAwXVxuICogYiBbLTEwMC4uMTAwXVxuICovXG5jb25zdCBsYWIycmdiID0gKC4uLmFyZ3MpID0+IHtcbiAgICBhcmdzID0gdW5wYWNrKGFyZ3MsICdsYWInKTtcbiAgICBjb25zdCBbTCwgYSwgYl0gPSBhcmdzO1xuICAgIGNvbnN0IFt4LCB5LCB6XSA9IGxhYjJ4eXooTCwgYSwgYik7XG4gICAgY29uc3QgW3IsIGcsIGJfXSA9IHh5ejJyZ2IoeCwgeSwgeik7XG4gICAgcmV0dXJuIFtyLCBnLCBiXywgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IDFdO1xufTtcblxuY29uc3QgbGFiMnh5eiA9IChMLCBhLCBiKSA9PiB7XG4gICAgY29uc3QgeyBrRSwga0ssIGtLRSwgWG4sIFluLCBabiB9ID0gTEFCX0NPTlNUQU5UUztcblxuICAgIGNvbnN0IGZ5ID0gKEwgKyAxNi4wKSAvIDExNi4wO1xuICAgIGNvbnN0IGZ4ID0gMC4wMDIgKiBhICsgZnk7XG4gICAgY29uc3QgZnogPSBmeSAtIDAuMDA1ICogYjtcblxuICAgIGNvbnN0IGZ4MyA9IGZ4ICogZnggKiBmeDtcbiAgICBjb25zdCBmejMgPSBmeiAqIGZ6ICogZno7XG5cbiAgICBjb25zdCB4ciA9IGZ4MyA+IGtFID8gZngzIDogKDExNi4wICogZnggLSAxNi4wKSAvIGtLO1xuICAgIGNvbnN0IHlyID0gTCA+IGtLRSA/IE1hdGgucG93KChMICsgMTYuMCkgLyAxMTYuMCwgMy4wKSA6IEwgLyBrSztcbiAgICBjb25zdCB6ciA9IGZ6MyA+IGtFID8gZnozIDogKDExNi4wICogZnogLSAxNi4wKSAvIGtLO1xuXG4gICAgY29uc3QgeCA9IHhyICogWG47XG4gICAgY29uc3QgeSA9IHlyICogWW47XG4gICAgY29uc3QgeiA9IHpyICogWm47XG5cbiAgICByZXR1cm4gW3gsIHksIHpdO1xufTtcblxuY29uc3QgY29tcGFuZCA9IChsaW5lYXIpID0+IHtcbiAgICAvKiBzUkdCICovXG4gICAgY29uc3Qgc2lnbiA9IE1hdGguc2lnbihsaW5lYXIpO1xuICAgIGxpbmVhciA9IE1hdGguYWJzKGxpbmVhcik7XG4gICAgcmV0dXJuIChcbiAgICAgICAgKGxpbmVhciA8PSAwLjAwMzEzMDhcbiAgICAgICAgICAgID8gbGluZWFyICogMTIuOTJcbiAgICAgICAgICAgIDogMS4wNTUgKiBNYXRoLnBvdyhsaW5lYXIsIDEuMCAvIDIuNCkgLSAwLjA1NSkgKiBzaWduXG4gICAgKTtcbn07XG5cbmNvbnN0IHh5ejJyZ2IgPSAoeCwgeSwgeikgPT4ge1xuICAgIGNvbnN0IHsgTXR4QWRhcHRNYSwgTXR4QWRhcHRNYUksIE10eFhZWjJSR0IsIFJlZldoaXRlUkdCLCBYbiwgWW4sIFpuIH0gPVxuICAgICAgICBMQUJfQ09OU1RBTlRTO1xuXG4gICAgY29uc3QgQXMgPSBYbiAqIE10eEFkYXB0TWEubTAwICsgWW4gKiBNdHhBZGFwdE1hLm0xMCArIFpuICogTXR4QWRhcHRNYS5tMjA7XG4gICAgY29uc3QgQnMgPSBYbiAqIE10eEFkYXB0TWEubTAxICsgWW4gKiBNdHhBZGFwdE1hLm0xMSArIFpuICogTXR4QWRhcHRNYS5tMjE7XG4gICAgY29uc3QgQ3MgPSBYbiAqIE10eEFkYXB0TWEubTAyICsgWW4gKiBNdHhBZGFwdE1hLm0xMiArIFpuICogTXR4QWRhcHRNYS5tMjI7XG5cbiAgICBjb25zdCBBZCA9XG4gICAgICAgIFJlZldoaXRlUkdCLlggKiBNdHhBZGFwdE1hLm0wMCArXG4gICAgICAgIFJlZldoaXRlUkdCLlkgKiBNdHhBZGFwdE1hLm0xMCArXG4gICAgICAgIFJlZldoaXRlUkdCLlogKiBNdHhBZGFwdE1hLm0yMDtcbiAgICBjb25zdCBCZCA9XG4gICAgICAgIFJlZldoaXRlUkdCLlggKiBNdHhBZGFwdE1hLm0wMSArXG4gICAgICAgIFJlZldoaXRlUkdCLlkgKiBNdHhBZGFwdE1hLm0xMSArXG4gICAgICAgIFJlZldoaXRlUkdCLlogKiBNdHhBZGFwdE1hLm0yMTtcbiAgICBjb25zdCBDZCA9XG4gICAgICAgIFJlZldoaXRlUkdCLlggKiBNdHhBZGFwdE1hLm0wMiArXG4gICAgICAgIFJlZldoaXRlUkdCLlkgKiBNdHhBZGFwdE1hLm0xMiArXG4gICAgICAgIFJlZldoaXRlUkdCLlogKiBNdHhBZGFwdE1hLm0yMjtcblxuICAgIGNvbnN0IFgxID1cbiAgICAgICAgKHggKiBNdHhBZGFwdE1hLm0wMCArIHkgKiBNdHhBZGFwdE1hLm0xMCArIHogKiBNdHhBZGFwdE1hLm0yMCkgKlxuICAgICAgICAoQWQgLyBBcyk7XG4gICAgY29uc3QgWTEgPVxuICAgICAgICAoeCAqIE10eEFkYXB0TWEubTAxICsgeSAqIE10eEFkYXB0TWEubTExICsgeiAqIE10eEFkYXB0TWEubTIxKSAqXG4gICAgICAgIChCZCAvIEJzKTtcbiAgICBjb25zdCBaMSA9XG4gICAgICAgICh4ICogTXR4QWRhcHRNYS5tMDIgKyB5ICogTXR4QWRhcHRNYS5tMTIgKyB6ICogTXR4QWRhcHRNYS5tMjIpICpcbiAgICAgICAgKENkIC8gQ3MpO1xuXG4gICAgY29uc3QgWDIgPVxuICAgICAgICBYMSAqIE10eEFkYXB0TWFJLm0wMCArIFkxICogTXR4QWRhcHRNYUkubTEwICsgWjEgKiBNdHhBZGFwdE1hSS5tMjA7XG4gICAgY29uc3QgWTIgPVxuICAgICAgICBYMSAqIE10eEFkYXB0TWFJLm0wMSArIFkxICogTXR4QWRhcHRNYUkubTExICsgWjEgKiBNdHhBZGFwdE1hSS5tMjE7XG4gICAgY29uc3QgWjIgPVxuICAgICAgICBYMSAqIE10eEFkYXB0TWFJLm0wMiArIFkxICogTXR4QWRhcHRNYUkubTEyICsgWjEgKiBNdHhBZGFwdE1hSS5tMjI7XG5cbiAgICBjb25zdCByID0gY29tcGFuZChcbiAgICAgICAgWDIgKiBNdHhYWVoyUkdCLm0wMCArIFkyICogTXR4WFlaMlJHQi5tMTAgKyBaMiAqIE10eFhZWjJSR0IubTIwXG4gICAgKTtcbiAgICBjb25zdCBnID0gY29tcGFuZChcbiAgICAgICAgWDIgKiBNdHhYWVoyUkdCLm0wMSArIFkyICogTXR4WFlaMlJHQi5tMTEgKyBaMiAqIE10eFhZWjJSR0IubTIxXG4gICAgKTtcbiAgICBjb25zdCBiID0gY29tcGFuZChcbiAgICAgICAgWDIgKiBNdHhYWVoyUkdCLm0wMiArIFkyICogTXR4WFlaMlJHQi5tMTIgKyBaMiAqIE10eFhZWjJSR0IubTIyXG4gICAgKTtcblxuICAgIHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsYWIycmdiO1xuZXhwb3J0IHsgeHl6MnJnYiB9O1xuIiwiaW1wb3J0IExBQl9DT05TVEFOVFMgZnJvbSAnLi9sYWItY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IHVucGFjayB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcblxuY29uc3QgcmdiMmxhYiA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgW3IsIGcsIGIsIC4uLnJlc3RdID0gdW5wYWNrKGFyZ3MsICdyZ2InKTtcbiAgICBjb25zdCBbeCwgeSwgel0gPSByZ2IyeHl6KHIsIGcsIGIpO1xuICAgIGNvbnN0IFtMLCBhLCBiX10gPSB4eXoybGFiKHgsIHksIHopO1xuICAgIHJldHVybiBbTCwgYSwgYl8sIC4uLihyZXN0Lmxlbmd0aCA+IDAgJiYgcmVzdFswXSA8IDEgPyBbcmVzdFswXV0gOiBbXSldO1xufTtcblxuZnVuY3Rpb24geHl6MmxhYih4LCB5LCB6KSB7XG4gICAgY29uc3QgeyBYbiwgWW4sIFpuLCBrRSwga0sgfSA9IExBQl9DT05TVEFOVFM7XG4gICAgY29uc3QgeHIgPSB4IC8gWG47XG4gICAgY29uc3QgeXIgPSB5IC8gWW47XG4gICAgY29uc3QgenIgPSB6IC8gWm47XG5cbiAgICBjb25zdCBmeCA9IHhyID4ga0UgPyBNYXRoLnBvdyh4ciwgMS4wIC8gMy4wKSA6IChrSyAqIHhyICsgMTYuMCkgLyAxMTYuMDtcbiAgICBjb25zdCBmeSA9IHlyID4ga0UgPyBNYXRoLnBvdyh5ciwgMS4wIC8gMy4wKSA6IChrSyAqIHlyICsgMTYuMCkgLyAxMTYuMDtcbiAgICBjb25zdCBmeiA9IHpyID4ga0UgPyBNYXRoLnBvdyh6ciwgMS4wIC8gMy4wKSA6IChrSyAqIHpyICsgMTYuMCkgLyAxMTYuMDtcblxuICAgIHJldHVybiBbMTE2LjAgKiBmeSAtIDE2LjAsIDUwMC4wICogKGZ4IC0gZnkpLCAyMDAuMCAqIChmeSAtIGZ6KV07XG59XG5cbmZ1bmN0aW9uIGdhbW1hQWRqdXN0U1JHQihjb21wYW5kZWQpIHtcbiAgICBjb25zdCBzaWduID0gTWF0aC5zaWduKGNvbXBhbmRlZCk7XG4gICAgY29tcGFuZGVkID0gTWF0aC5hYnMoY29tcGFuZGVkKTtcbiAgICBjb25zdCBsaW5lYXIgPVxuICAgICAgICBjb21wYW5kZWQgPD0gMC4wNDA0NVxuICAgICAgICAgICAgPyBjb21wYW5kZWQgLyAxMi45MlxuICAgICAgICAgICAgOiBNYXRoLnBvdygoY29tcGFuZGVkICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gICAgcmV0dXJuIGxpbmVhciAqIHNpZ247XG59XG5cbmNvbnN0IHJnYjJ4eXogPSAociwgZywgYikgPT4ge1xuICAgIC8vIG5vcm1hbGl6ZSBhbmQgZ2FtbWEgYWRqdXN0XG4gICAgciA9IGdhbW1hQWRqdXN0U1JHQihyIC8gMjU1KTtcbiAgICBnID0gZ2FtbWFBZGp1c3RTUkdCKGcgLyAyNTUpO1xuICAgIGIgPSBnYW1tYUFkanVzdFNSR0IoYiAvIDI1NSk7XG5cbiAgICBjb25zdCB7IE10eFJHQjJYWVosIE10eEFkYXB0TWEsIE10eEFkYXB0TWFJLCBYbiwgWW4sIFpuLCBBcywgQnMsIENzIH0gPVxuICAgICAgICBMQUJfQ09OU1RBTlRTO1xuXG4gICAgbGV0IHggPSByICogTXR4UkdCMlhZWi5tMDAgKyBnICogTXR4UkdCMlhZWi5tMTAgKyBiICogTXR4UkdCMlhZWi5tMjA7XG4gICAgbGV0IHkgPSByICogTXR4UkdCMlhZWi5tMDEgKyBnICogTXR4UkdCMlhZWi5tMTEgKyBiICogTXR4UkdCMlhZWi5tMjE7XG4gICAgbGV0IHogPSByICogTXR4UkdCMlhZWi5tMDIgKyBnICogTXR4UkdCMlhZWi5tMTIgKyBiICogTXR4UkdCMlhZWi5tMjI7XG5cbiAgICBjb25zdCBBZCA9IFhuICogTXR4QWRhcHRNYS5tMDAgKyBZbiAqIE10eEFkYXB0TWEubTEwICsgWm4gKiBNdHhBZGFwdE1hLm0yMDtcbiAgICBjb25zdCBCZCA9IFhuICogTXR4QWRhcHRNYS5tMDEgKyBZbiAqIE10eEFkYXB0TWEubTExICsgWm4gKiBNdHhBZGFwdE1hLm0yMTtcbiAgICBjb25zdCBDZCA9IFhuICogTXR4QWRhcHRNYS5tMDIgKyBZbiAqIE10eEFkYXB0TWEubTEyICsgWm4gKiBNdHhBZGFwdE1hLm0yMjtcblxuICAgIGxldCBYID0geCAqIE10eEFkYXB0TWEubTAwICsgeSAqIE10eEFkYXB0TWEubTEwICsgeiAqIE10eEFkYXB0TWEubTIwO1xuICAgIGxldCBZID0geCAqIE10eEFkYXB0TWEubTAxICsgeSAqIE10eEFkYXB0TWEubTExICsgeiAqIE10eEFkYXB0TWEubTIxO1xuICAgIGxldCBaID0geCAqIE10eEFkYXB0TWEubTAyICsgeSAqIE10eEFkYXB0TWEubTEyICsgeiAqIE10eEFkYXB0TWEubTIyO1xuXG4gICAgWCAqPSBBZCAvIEFzO1xuICAgIFkgKj0gQmQgLyBCcztcbiAgICBaICo9IENkIC8gQ3M7XG5cbiAgICB4ID0gWCAqIE10eEFkYXB0TWFJLm0wMCArIFkgKiBNdHhBZGFwdE1hSS5tMTAgKyBaICogTXR4QWRhcHRNYUkubTIwO1xuICAgIHkgPSBYICogTXR4QWRhcHRNYUkubTAxICsgWSAqIE10eEFkYXB0TWFJLm0xMSArIFogKiBNdHhBZGFwdE1hSS5tMjE7XG4gICAgeiA9IFggKiBNdHhBZGFwdE1hSS5tMDIgKyBZICogTXR4QWRhcHRNYUkubTEyICsgWiAqIE10eEFkYXB0TWFJLm0yMjtcblxuICAgIHJldHVybiBbeCwgeSwgel07XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZ2IybGFiO1xuZXhwb3J0IHsgcmdiMnh5eiB9O1xuIiwiaW1wb3J0IHsgdW5wYWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuaW1wb3J0IGxjaDJyZ2IgZnJvbSAnLi9sY2gycmdiLmpzJztcblxuY29uc3QgaGNsMnJnYiA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgaGNsID0gdW5wYWNrKGFyZ3MsICdoY2wnKS5yZXZlcnNlKCk7XG4gICAgcmV0dXJuIGxjaDJyZ2IoLi4uaGNsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhjbDJyZ2I7XG4iLCJpbXBvcnQgeyB1bnBhY2ssIHR5cGUgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5pbXBvcnQgY2hyb21hIGZyb20gJy4uLy4uL2Nocm9tYS5qcyc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vLi4vQ29sb3IuanMnO1xuaW1wb3J0IGlucHV0IGZyb20gJy4uL2lucHV0LmpzJztcbmltcG9ydCBsY2gycmdiIGZyb20gJy4vbGNoMnJnYi5qcyc7XG5pbXBvcnQgaGNsMnJnYiBmcm9tICcuL2hjbDJyZ2IuanMnO1xuaW1wb3J0IHJnYjJsY2ggZnJvbSAnLi9yZ2IybGNoLmpzJztcblxuQ29sb3IucHJvdG90eXBlLmxjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmdiMmxjaCh0aGlzLl9yZ2IpO1xufTtcbkNvbG9yLnByb3RvdHlwZS5oY2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJnYjJsY2godGhpcy5fcmdiKS5yZXZlcnNlKCk7XG59O1xuXG5jb25zdCBsY2ggPSAoLi4uYXJncykgPT4gbmV3IENvbG9yKC4uLmFyZ3MsICdsY2gnKTtcbmNvbnN0IGhjbCA9ICguLi5hcmdzKSA9PiBuZXcgQ29sb3IoLi4uYXJncywgJ2hjbCcpO1xuXG5PYmplY3QuYXNzaWduKGNocm9tYSwgeyBsY2gsIGhjbCB9KTtcblxuaW5wdXQuZm9ybWF0LmxjaCA9IGxjaDJyZ2I7XG5pbnB1dC5mb3JtYXQuaGNsID0gaGNsMnJnYjtcblsnbGNoJywgJ2hjbCddLmZvckVhY2goKG0pID0+XG4gICAgaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMixcbiAgICAgICAgdGVzdDogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2soYXJncywgbSk7XG4gICAgICAgICAgICBpZiAodHlwZShhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbik7XG5cbmV4cG9ydCB7IGxjaCwgaGNsIH07XG4iLCJpbXBvcnQgeyB1bnBhY2ssIFJBRDJERUcgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5jb25zdCB7IHNxcnQsIGF0YW4yLCByb3VuZCB9ID0gTWF0aDtcblxuY29uc3QgbGFiMmxjaCA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgW2wsIGEsIGJdID0gdW5wYWNrKGFyZ3MsICdsYWInKTtcbiAgICBjb25zdCBjID0gc3FydChhICogYSArIGIgKiBiKTtcbiAgICBsZXQgaCA9IChhdGFuMihiLCBhKSAqIFJBRDJERUcgKyAzNjApICUgMzYwO1xuICAgIGlmIChyb3VuZChjICogMTAwMDApID09PSAwKSBoID0gTnVtYmVyLk5hTjtcbiAgICByZXR1cm4gW2wsIGMsIGhdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbGFiMmxjaDtcbiIsImltcG9ydCB7IHVucGFjaywgREVHMlJBRCB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcbmNvbnN0IHsgc2luLCBjb3MgfSA9IE1hdGg7XG5cbmNvbnN0IGxjaDJsYWIgPSAoLi4uYXJncykgPT4ge1xuICAgIC8qXG4gICAgQ29udmVydCBmcm9tIGEgcXVhbGl0YXRpdmUgcGFyYW1ldGVyIGggYW5kIGEgcXVhbnRpdGF0aXZlIHBhcmFtZXRlciBsIHRvIGEgMjQtYml0IHBpeGVsLlxuICAgIFRoZXNlIGZvcm11bGFzIHdlcmUgaW52ZW50ZWQgYnkgRGF2aWQgRGFscnltcGxlIHRvIG9idGFpbiBtYXhpbXVtIGNvbnRyYXN0IHdpdGhvdXQgZ29pbmdcbiAgICBvdXQgb2YgZ2FtdXQgaWYgdGhlIHBhcmFtZXRlcnMgYXJlIGluIHRoZSByYW5nZSAwLTEuXG5cbiAgICBBIHNhdHVyYXRpb24gbXVsdGlwbGllciB3YXMgYWRkZWQgYnkgR3JlZ29yIEFpc2NoXG4gICAgKi9cbiAgICBsZXQgW2wsIGMsIGhdID0gdW5wYWNrKGFyZ3MsICdsY2gnKTtcbiAgICBpZiAoaXNOYU4oaCkpIGggPSAwO1xuICAgIGggPSBoICogREVHMlJBRDtcbiAgICByZXR1cm4gW2wsIGNvcyhoKSAqIGMsIHNpbihoKSAqIGNdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbGNoMmxhYjtcbiIsImltcG9ydCB7IHVucGFjayB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcbmltcG9ydCBsY2gybGFiIGZyb20gJy4vbGNoMmxhYi5qcyc7XG5pbXBvcnQgbGFiMnJnYiBmcm9tICcuLi9sYWIvbGFiMnJnYi5qcyc7XG5cbmNvbnN0IGxjaDJyZ2IgPSAoLi4uYXJncykgPT4ge1xuICAgIGFyZ3MgPSB1bnBhY2soYXJncywgJ2xjaCcpO1xuICAgIGNvbnN0IFtsLCBjLCBoXSA9IGFyZ3M7XG4gICAgY29uc3QgW0wsIGEsIGJfXSA9IGxjaDJsYWIobCwgYywgaCk7XG4gICAgY29uc3QgW3IsIGcsIGJdID0gbGFiMnJnYihMLCBhLCBiXyk7XG4gICAgcmV0dXJuIFtyLCBnLCBiLCBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogMV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsY2gycmdiO1xuIiwiaW1wb3J0IHsgdW5wYWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuaW1wb3J0IHJnYjJsYWIgZnJvbSAnLi4vbGFiL3JnYjJsYWIuanMnO1xuaW1wb3J0IGxhYjJsY2ggZnJvbSAnLi9sYWIybGNoLmpzJztcblxuY29uc3QgcmdiMmxjaCA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgW3IsIGcsIGIsIC4uLnJlc3RdID0gdW5wYWNrKGFyZ3MsICdyZ2InKTtcbiAgICBjb25zdCBbbCwgYSwgYl9dID0gcmdiMmxhYihyLCBnLCBiKTtcbiAgICBjb25zdCBbTCwgYywgaF0gPSBsYWIybGNoKGwsIGEsIGJfKTtcbiAgICByZXR1cm4gW0wsIGMsIGgsIC4uLihyZXN0Lmxlbmd0aCA+IDAgJiYgcmVzdFswXSA8IDEgPyBbcmVzdFswXV0gOiBbXSldO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmdiMmxjaDtcbiIsImltcG9ydCBDb2xvciBmcm9tICcuLi8uLi9Db2xvci5qcyc7XG5pbXBvcnQgaW5wdXQgZnJvbSAnLi4vaW5wdXQuanMnO1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcblxuaW1wb3J0IHczY3gxMSBmcm9tICcuLi8uLi9jb2xvcnMvdzNjeDExLmpzJztcbmltcG9ydCBoZXgycmdiIGZyb20gJy4uL2hleC9oZXgycmdiLmpzJztcbmltcG9ydCByZ2IyaGV4IGZyb20gJy4uL2hleC9yZ2IyaGV4LmpzJztcblxuQ29sb3IucHJvdG90eXBlLm5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgaGV4ID0gcmdiMmhleCh0aGlzLl9yZ2IsICdyZ2InKTtcbiAgICBmb3IgKGxldCBuIG9mIE9iamVjdC5rZXlzKHczY3gxMSkpIHtcbiAgICAgICAgaWYgKHczY3gxMVtuXSA9PT0gaGV4KSByZXR1cm4gbi50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gaGV4O1xufTtcblxuaW5wdXQuZm9ybWF0Lm5hbWVkID0gKG5hbWUpID0+IHtcbiAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICh3M2N4MTFbbmFtZV0pIHJldHVybiBoZXgycmdiKHczY3gxMVtuYW1lXSk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIGNvbG9yIG5hbWU6ICcgKyBuYW1lKTtcbn07XG5cbmlucHV0LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgcDogNSxcbiAgICB0ZXN0OiAoaCwgLi4ucmVzdCkgPT4ge1xuICAgICAgICBpZiAoIXJlc3QubGVuZ3RoICYmIHR5cGUoaCkgPT09ICdzdHJpbmcnICYmIHczY3gxMVtoLnRvTG93ZXJDYXNlKCldKSB7XG4gICAgICAgICAgICByZXR1cm4gJ25hbWVkJztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwiaW1wb3J0IGNocm9tYSBmcm9tICcuLi8uLi9jaHJvbWEuanMnO1xuaW1wb3J0IENvbG9yIGZyb20gJy4uLy4uL0NvbG9yLmpzJztcbmltcG9ydCBpbnB1dCBmcm9tICcuLi9pbnB1dC5qcyc7XG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuaW1wb3J0IG51bTJyZ2IgZnJvbSAnLi9udW0ycmdiLmpzJztcbmltcG9ydCByZ2IybnVtIGZyb20gJy4vcmdiMm51bS5qcyc7XG5cbkNvbG9yLnByb3RvdHlwZS5udW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJnYjJudW0odGhpcy5fcmdiKTtcbn07XG5cbmNvbnN0IG51bSA9ICguLi5hcmdzKSA9PiBuZXcgQ29sb3IoLi4uYXJncywgJ251bScpO1xuXG5PYmplY3QuYXNzaWduKGNocm9tYSwgeyBudW0gfSk7XG5cbmlucHV0LmZvcm1hdC5udW0gPSBudW0ycmdiO1xuXG5pbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgIHA6IDUsXG4gICAgdGVzdDogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgYXJncy5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICAgIHR5cGUoYXJnc1swXSkgPT09ICdudW1iZXInICYmXG4gICAgICAgICAgICBhcmdzWzBdID49IDAgJiZcbiAgICAgICAgICAgIGFyZ3NbMF0gPD0gMHhmZmZmZmZcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gJ251bSc7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuZXhwb3J0IHsgbnVtIH07XG4iLCJpbXBvcnQgeyB0eXBlIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuXG5jb25zdCBudW0ycmdiID0gKG51bSkgPT4ge1xuICAgIGlmICh0eXBlKG51bSkgPT0gJ251bWJlcicgJiYgbnVtID49IDAgJiYgbnVtIDw9IDB4ZmZmZmZmKSB7XG4gICAgICAgIGNvbnN0IHIgPSBudW0gPj4gMTY7XG4gICAgICAgIGNvbnN0IGcgPSAobnVtID4+IDgpICYgMHhmZjtcbiAgICAgICAgY29uc3QgYiA9IG51bSAmIDB4ZmY7XG4gICAgICAgIHJldHVybiBbciwgZywgYiwgMV07XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBudW0gY29sb3I6ICcgKyBudW0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbnVtMnJnYjtcbiIsImltcG9ydCB7IHVucGFjayB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcblxuY29uc3QgcmdiMm51bSA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgW3IsIGcsIGJdID0gdW5wYWNrKGFyZ3MsICdyZ2InKTtcbiAgICByZXR1cm4gKHIgPDwgMTYpICsgKGcgPDwgOCkgKyBiO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmdiMm51bTtcbiIsImltcG9ydCB7IHVucGFjaywgdHlwZSB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcbmltcG9ydCBjaHJvbWEgZnJvbSAnLi4vLi4vY2hyb21hLmpzJztcbmltcG9ydCBDb2xvciBmcm9tICcuLi8uLi9Db2xvci5qcyc7XG5pbXBvcnQgaW5wdXQgZnJvbSAnLi4vaW5wdXQuanMnO1xuaW1wb3J0IG9rbGFiMnJnYiBmcm9tICcuL29rbGFiMnJnYi5qcyc7XG5pbXBvcnQgcmdiMm9rbGFiIGZyb20gJy4vcmdiMm9rbGFiLmpzJztcblxuQ29sb3IucHJvdG90eXBlLm9rbGFiID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByZ2Iyb2tsYWIodGhpcy5fcmdiKTtcbn07XG5cbmNvbnN0IG9rbGFiID0gKC4uLmFyZ3MpID0+IG5ldyBDb2xvciguLi5hcmdzLCAnb2tsYWInKTtcbk9iamVjdC5hc3NpZ24oY2hyb21hLCB7IG9rbGFiIH0pO1xuXG5pbnB1dC5mb3JtYXQub2tsYWIgPSBva2xhYjJyZ2I7XG5cbmlucHV0LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgcDogMixcbiAgICB0ZXN0OiAoLi4uYXJncykgPT4ge1xuICAgICAgICBhcmdzID0gdW5wYWNrKGFyZ3MsICdva2xhYicpO1xuICAgICAgICBpZiAodHlwZShhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgcmV0dXJuICdva2xhYic7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuZXhwb3J0IHsgb2tsYWIgfTtcbiIsImltcG9ydCB7IHVucGFjayB9IGZyb20gJy4uLy4uL3V0aWxzL2luZGV4LmpzJztcbmltcG9ydCBtdWx0aXBseU1hdHJpY2VzIGZyb20gJy4uLy4uL3V0aWxzL211bHRpcGx5LW1hdHJpY2VzLmpzJztcbmltcG9ydCB7IHh5ejJyZ2IgfSBmcm9tICcuLi9sYWIvbGFiMnJnYi5qcyc7XG5cbmNvbnN0IG9rbGFiMnJnYiA9ICguLi5hcmdzKSA9PiB7XG4gICAgYXJncyA9IHVucGFjayhhcmdzLCAnbGFiJyk7XG4gICAgY29uc3QgW0wsIGEsIGIsIC4uLnJlc3RdID0gYXJncztcbiAgICBjb25zdCBbWCwgWSwgWl0gPSBPS0xhYl90b19YWVooW0wsIGEsIGJdKTtcbiAgICBjb25zdCBbciwgZywgYl9dID0geHl6MnJnYihYLCBZLCBaKTtcbiAgICByZXR1cm4gW3IsIGcsIGJfLCAuLi4ocmVzdC5sZW5ndGggPiAwICYmIHJlc3RbMF0gPCAxID8gW3Jlc3RbMF1dIDogW10pXTtcbn07XG5cbi8vIGZyb20gaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1jb2xvci00LyNjb2xvci1jb252ZXJzaW9uLWNvZGVcbmZ1bmN0aW9uIE9LTGFiX3RvX1hZWihPS0xhYikge1xuICAgIC8vIEdpdmVuIE9LTGFiLCBjb252ZXJ0IHRvIFhZWiByZWxhdGl2ZSB0byBENjVcbiAgICB2YXIgTE1TdG9YWVogPSBbXG4gICAgICAgIFsxLjIyNjg3OTg3NTg0NTkyNDMsIC0wLjU1NzgxNDk5NDQ2MDIxNzEsIDAuMjgxMzkxMDQ1NjY1OTY0N10sXG4gICAgICAgIFstMC4wNDA1NzU3NDUyMTQ4MDA4LCAxLjExMjI4NjgwMzI4MDMxNywgLTAuMDcxNzExMDU4MDY1NTE2NF0sXG4gICAgICAgIFstMC4wNzYzNzI5MzY2NzQ2NjAxLCAtMC40MjE0OTMzMzI0MDIyNDMyLCAxLjU4NjkyNDAxOTgzNjc4MTZdXG4gICAgXTtcbiAgICB2YXIgT0tMYWJ0b0xNUyA9IFtcbiAgICAgICAgWzEuMCwgMC4zOTYzMzc3NzczNzYxNzQ5LCAwLjIxNTgwMzc1NzMwOTkxMzZdLFxuICAgICAgICBbMS4wLCAtMC4xMDU1NjEzNDU4MTU2NTg2LCAtMC4wNjM4NTQxNzI4MjU4MTMzXSxcbiAgICAgICAgWzEuMCwgLTAuMDg5NDg0MTc3NTI5ODExOSwgLTEuMjkxNDg1NTQ4MDE5NDA5Ml1cbiAgICBdO1xuXG4gICAgdmFyIExNU25sID0gbXVsdGlwbHlNYXRyaWNlcyhPS0xhYnRvTE1TLCBPS0xhYik7XG4gICAgcmV0dXJuIG11bHRpcGx5TWF0cmljZXMoXG4gICAgICAgIExNU3RvWFlaLFxuICAgICAgICBMTVNubC5tYXAoKGMpID0+IGMgKiogMylcbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBva2xhYjJyZ2I7XG4iLCJpbXBvcnQgeyB1bnBhY2sgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5pbXBvcnQgbXVsdGlwbHlNYXRyaWNlcyBmcm9tICcuLi8uLi91dGlscy9tdWx0aXBseS1tYXRyaWNlcy5qcyc7XG5pbXBvcnQgeyByZ2IyeHl6IH0gZnJvbSAnLi4vbGFiL3JnYjJsYWIuanMnO1xuXG5jb25zdCByZ2Iyb2tsYWIgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IFtyLCBnLCBiLCAuLi5yZXN0XSA9IHVucGFjayhhcmdzLCAncmdiJyk7XG4gICAgY29uc3QgeHl6ID0gcmdiMnh5eihyLCBnLCBiKTtcbiAgICBjb25zdCBva2xhYiA9IFhZWl90b19PS0xhYih4eXopO1xuICAgIHJldHVybiBbLi4ub2tsYWIsIC4uLihyZXN0Lmxlbmd0aCA+IDAgJiYgcmVzdFswXSA8IDEgPyBbcmVzdFswXV0gOiBbXSldO1xufTtcblxuLy8gZnJvbSBodHRwczovL3d3dy53My5vcmcvVFIvY3NzLWNvbG9yLTQvI2NvbG9yLWNvbnZlcnNpb24tY29kZVxuZnVuY3Rpb24gWFlaX3RvX09LTGFiKFhZWikge1xuICAgIC8vIEdpdmVuIFhZWiByZWxhdGl2ZSB0byBENjUsIGNvbnZlcnQgdG8gT0tMYWJcbiAgICBjb25zdCBYWVp0b0xNUyA9IFtcbiAgICAgICAgWzAuODE5MDIyNDM3OTk2NzAzLCAwLjM2MTkwNjI2MDA1Mjg5MDQsIC0wLjEyODg3Mzc4MTUyMDk4NzldLFxuICAgICAgICBbMC4wMzI5ODM2NTM5MzIzODg1LCAwLjkyOTI4Njg2MTU4NjM0MzQsIDAuMDM2MTQ0NjY2MzUwNjQyNF0sXG4gICAgICAgIFswLjA0ODE3NzE4OTM1OTYyNDIsIDAuMjY0MjM5NTMxNzUyNzMwOCwgMC42MzM1NDc4Mjg0Njk0MzA5XVxuICAgIF07XG4gICAgY29uc3QgTE1TdG9PS0xhYiA9IFtcbiAgICAgICAgWzAuMjEwNDU0MjY4MzA5MzE0LCAwLjc5MzYxNzc3NDcwMjMwNTQsIC0wLjAwNDA3MjA0MzAxMTYxOTNdLFxuICAgICAgICBbMS45Nzc5OTg1MzI0MzExNjg0LCAtMi40Mjg1OTIyNDIwNDg1Nzk5LCAwLjQ1MDU5MzcwOTYxNzQxMV0sXG4gICAgICAgIFswLjAyNTkwNDA0MjQ2NTU0NzgsIDAuNzgyNzcxNzEyNDU3NTI5NiwgLTAuODA4Njc1NzU0OTIzMDc3NF1cbiAgICBdO1xuXG4gICAgY29uc3QgTE1TID0gbXVsdGlwbHlNYXRyaWNlcyhYWVp0b0xNUywgWFlaKTtcbiAgICAvLyBKYXZhU2NyaXB0IE1hdGguY2JydCByZXR1cm5zIGEgc2lnbi1tYXRjaGVkIGN1YmUgcm9vdFxuICAgIC8vIGJld2FyZSBpZiBwb3J0aW5nIHRvIG90aGVyIGxhbmd1YWdlc1xuICAgIC8vIGVzcGVjaWFsbHkgaWYgdGVtcHRlZCB0byB1c2UgYSBnZW5lcmFsIHBvd2VyIGZ1bmN0aW9uXG4gICAgcmV0dXJuIG11bHRpcGx5TWF0cmljZXMoXG4gICAgICAgIExNU3RvT0tMYWIsXG4gICAgICAgIExNUy5tYXAoKGMpID0+IE1hdGguY2JydChjKSlcbiAgICApO1xuICAgIC8vIEwgaW4gcmFuZ2UgWzAsMV0uIEZvciB1c2UgaW4gQ1NTLCBtdWx0aXBseSBieSAxMDAgYW5kIGFkZCBhIHBlcmNlbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmdiMm9rbGFiO1xuIiwiaW1wb3J0IHsgdW5wYWNrLCB0eXBlIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuaW1wb3J0IGNocm9tYSBmcm9tICcuLi8uLi9jaHJvbWEuanMnO1xuaW1wb3J0IENvbG9yIGZyb20gJy4uLy4uL0NvbG9yLmpzJztcbmltcG9ydCBpbnB1dCBmcm9tICcuLi9pbnB1dC5qcyc7XG5pbXBvcnQgb2tsY2gycmdiIGZyb20gJy4vb2tsY2gycmdiLmpzJztcbmltcG9ydCByZ2Iyb2tsY2ggZnJvbSAnLi9yZ2Iyb2tsY2guanMnO1xuXG5Db2xvci5wcm90b3R5cGUub2tsY2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJnYjJva2xjaCh0aGlzLl9yZ2IpO1xufTtcblxuY29uc3Qgb2tsY2ggPSAoLi4uYXJncykgPT4gbmV3IENvbG9yKC4uLmFyZ3MsICdva2xjaCcpO1xuT2JqZWN0LmFzc2lnbihjaHJvbWEsIHsgb2tsY2ggfSk7XG5cbmlucHV0LmZvcm1hdC5va2xjaCA9IG9rbGNoMnJnYjtcblxuaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICBwOiAyLFxuICAgIHRlc3Q6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGFyZ3MgPSB1bnBhY2soYXJncywgJ29rbGNoJyk7XG4gICAgICAgIGlmICh0eXBlKGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICByZXR1cm4gJ29rbGNoJztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5leHBvcnQgeyBva2xjaCB9O1xuIiwiaW1wb3J0IHsgdW5wYWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuaW1wb3J0IGxjaDJsYWIgZnJvbSAnLi4vbGNoL2xjaDJsYWIuanMnO1xuaW1wb3J0IG9rbGFiMnJnYiBmcm9tICcuLi9va2xhYi9va2xhYjJyZ2IuanMnO1xuXG5jb25zdCBva2xjaDJyZ2IgPSAoLi4uYXJncykgPT4ge1xuICAgIGFyZ3MgPSB1bnBhY2soYXJncywgJ2xjaCcpO1xuICAgIGNvbnN0IFtsLCBjLCBoLCAuLi5yZXN0XSA9IGFyZ3M7XG4gICAgY29uc3QgW0wsIGEsIGJfXSA9IGxjaDJsYWIobCwgYywgaCk7XG4gICAgY29uc3QgW3IsIGcsIGJdID0gb2tsYWIycmdiKEwsIGEsIGJfKTtcbiAgICByZXR1cm4gW3IsIGcsIGIsIC4uLihyZXN0Lmxlbmd0aCA+IDAgJiYgcmVzdFswXSA8IDEgPyBbcmVzdFswXV0gOiBbXSldO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgb2tsY2gycmdiO1xuIiwiaW1wb3J0IHsgdW5wYWNrIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xuaW1wb3J0IHJnYjJva2xhYiBmcm9tICcuLi9va2xhYi9yZ2Iyb2tsYWIuanMnO1xuaW1wb3J0IGxhYjJsY2ggZnJvbSAnLi4vbGNoL2xhYjJsY2guanMnO1xuXG5jb25zdCByZ2Iyb2tsY2ggPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IFtyLCBnLCBiLCAuLi5yZXN0XSA9IHVucGFjayhhcmdzLCAncmdiJyk7XG4gICAgY29uc3QgW2wsIGEsIGJfXSA9IHJnYjJva2xhYihyLCBnLCBiKTtcbiAgICBjb25zdCBbTCwgYywgaF0gPSBsYWIybGNoKGwsIGEsIGJfKTtcbiAgICByZXR1cm4gW0wsIGMsIGgsIC4uLihyZXN0Lmxlbmd0aCA+IDAgJiYgcmVzdFswXSA8IDEgPyBbcmVzdFswXV0gOiBbXSldO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmdiMm9rbGNoO1xuIiwiaW1wb3J0IGNocm9tYSBmcm9tICcuLi8uLi9jaHJvbWEuanMnO1xuaW1wb3J0IENvbG9yIGZyb20gJy4uLy4uL0NvbG9yLmpzJztcbmltcG9ydCBpbnB1dCBmcm9tICcuLi9pbnB1dC5qcyc7XG5pbXBvcnQgeyB1bnBhY2ssIHR5cGUgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5jb25zdCB7IHJvdW5kIH0gPSBNYXRoO1xuXG5Db2xvci5wcm90b3R5cGUucmdiID0gZnVuY3Rpb24gKHJuZCA9IHRydWUpIHtcbiAgICBpZiAocm5kID09PSBmYWxzZSkgcmV0dXJuIHRoaXMuX3JnYi5zbGljZSgwLCAzKTtcbiAgICByZXR1cm4gdGhpcy5fcmdiLnNsaWNlKDAsIDMpLm1hcChyb3VuZCk7XG59O1xuXG5Db2xvci5wcm90b3R5cGUucmdiYSA9IGZ1bmN0aW9uIChybmQgPSB0cnVlKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JnYi5zbGljZSgwLCA0KS5tYXAoKHYsIGkpID0+IHtcbiAgICAgICAgcmV0dXJuIGkgPCAzID8gKHJuZCA9PT0gZmFsc2UgPyB2IDogcm91bmQodikpIDogdjtcbiAgICB9KTtcbn07XG5cbmNvbnN0IHJnYiA9ICguLi5hcmdzKSA9PiBuZXcgQ29sb3IoLi4uYXJncywgJ3JnYicpO1xuT2JqZWN0LmFzc2lnbihjaHJvbWEsIHsgcmdiIH0pO1xuXG5pbnB1dC5mb3JtYXQucmdiID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCByZ2JhID0gdW5wYWNrKGFyZ3MsICdyZ2JhJyk7XG4gICAgaWYgKHJnYmFbM10gPT09IHVuZGVmaW5lZCkgcmdiYVszXSA9IDE7XG4gICAgcmV0dXJuIHJnYmE7XG59O1xuXG5pbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgIHA6IDMsXG4gICAgdGVzdDogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgYXJncyA9IHVucGFjayhhcmdzLCAncmdiYScpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlKGFyZ3MpID09PSAnYXJyYXknICYmXG4gICAgICAgICAgICAoYXJncy5sZW5ndGggPT09IDMgfHxcbiAgICAgICAgICAgICAgICAoYXJncy5sZW5ndGggPT09IDQgJiZcbiAgICAgICAgICAgICAgICAgICAgdHlwZShhcmdzWzNdKSA9PSAnbnVtYmVyJyAmJlxuICAgICAgICAgICAgICAgICAgICBhcmdzWzNdID49IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgYXJnc1szXSA8PSAxKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3JnYic7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuZXhwb3J0IHsgcmdiIH07XG4iLCJpbXBvcnQgY2hyb21hIGZyb20gJy4uLy4uL2Nocm9tYS5qcyc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vLi4vQ29sb3IuanMnO1xuaW1wb3J0IGlucHV0IGZyb20gJy4uL2lucHV0LmpzJztcbmltcG9ydCB0ZW1wZXJhdHVyZTJyZ2IgZnJvbSAnLi90ZW1wZXJhdHVyZTJyZ2IuanMnO1xuaW1wb3J0IHJnYjJ0ZW1wZXJhdHVyZSBmcm9tICcuL3JnYjJ0ZW1wZXJhdHVyZS5qcyc7XG5cbkNvbG9yLnByb3RvdHlwZS50ZW1wID1cbiAgICBDb2xvci5wcm90b3R5cGUua2VsdmluID1cbiAgICBDb2xvci5wcm90b3R5cGUudGVtcGVyYXR1cmUgPVxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmdiMnRlbXBlcmF0dXJlKHRoaXMuX3JnYik7XG4gICAgICAgIH07XG5cbmNvbnN0IHRlbXAgPSAoLi4uYXJncykgPT4gbmV3IENvbG9yKC4uLmFyZ3MsICd0ZW1wJyk7XG5PYmplY3QuYXNzaWduKGNocm9tYSwgeyB0ZW1wLCBrZWx2aW46IHRlbXAsIHRlbXBlcmF0dXJlOiB0ZW1wIH0pO1xuXG5pbnB1dC5mb3JtYXQudGVtcCA9XG4gICAgaW5wdXQuZm9ybWF0LmtlbHZpbiA9XG4gICAgaW5wdXQuZm9ybWF0LnRlbXBlcmF0dXJlID1cbiAgICAgICAgdGVtcGVyYXR1cmUycmdiO1xuXG5leHBvcnQgeyB0ZW1wLCB0ZW1wIGFzIGtlbHZpbiwgdGVtcCBhcyB0ZW1wZXJhdHVyZSB9O1xuIiwiLypcbiAqIEJhc2VkIG9uIGltcGxlbWVudGF0aW9uIGJ5IE5laWwgQmFydGxldHRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uZWlsYmFydGxldHQvY29sb3ItdGVtcGVyYXR1cmVcbiAqKi9cblxuaW1wb3J0IHRlbXBlcmF0dXJlMnJnYiBmcm9tICcuL3RlbXBlcmF0dXJlMnJnYi5qcyc7XG5pbXBvcnQgeyB1bnBhY2sgfSBmcm9tICcuLi8uLi91dGlscy9pbmRleC5qcyc7XG5jb25zdCB7IHJvdW5kIH0gPSBNYXRoO1xuXG5jb25zdCByZ2IydGVtcGVyYXR1cmUgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IHJnYiA9IHVucGFjayhhcmdzLCAncmdiJyk7XG4gICAgY29uc3QgciA9IHJnYlswXSxcbiAgICAgICAgYiA9IHJnYlsyXTtcbiAgICBsZXQgbWluVGVtcCA9IDEwMDA7XG4gICAgbGV0IG1heFRlbXAgPSA0MDAwMDtcbiAgICBjb25zdCBlcHMgPSAwLjQ7XG4gICAgbGV0IHRlbXA7XG4gICAgd2hpbGUgKG1heFRlbXAgLSBtaW5UZW1wID4gZXBzKSB7XG4gICAgICAgIHRlbXAgPSAobWF4VGVtcCArIG1pblRlbXApICogMC41O1xuICAgICAgICBjb25zdCByZ2IgPSB0ZW1wZXJhdHVyZTJyZ2IodGVtcCk7XG4gICAgICAgIGlmIChyZ2JbMl0gLyByZ2JbMF0gPj0gYiAvIHIpIHtcbiAgICAgICAgICAgIG1heFRlbXAgPSB0ZW1wO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWluVGVtcCA9IHRlbXA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJvdW5kKHRlbXApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmdiMnRlbXBlcmF0dXJlO1xuIiwiLypcbiAqIEJhc2VkIG9uIGltcGxlbWVudGF0aW9uIGJ5IE5laWwgQmFydGxldHRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uZWlsYmFydGxldHQvY29sb3ItdGVtcGVyYXR1cmVcbiAqL1xuXG5jb25zdCB7IGxvZyB9ID0gTWF0aDtcblxuY29uc3QgdGVtcGVyYXR1cmUycmdiID0gKGtlbHZpbikgPT4ge1xuICAgIGNvbnN0IHRlbXAgPSBrZWx2aW4gLyAxMDA7XG4gICAgbGV0IHIsIGcsIGI7XG4gICAgaWYgKHRlbXAgPCA2Nikge1xuICAgICAgICByID0gMjU1O1xuICAgICAgICBnID1cbiAgICAgICAgICAgIHRlbXAgPCA2XG4gICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgOiAtMTU1LjI1NDg1NTYyNzA5MTc5IC1cbiAgICAgICAgICAgICAgICAgIDAuNDQ1OTY5NTA0Njk1NzkxMzMgKiAoZyA9IHRlbXAgLSAyKSArXG4gICAgICAgICAgICAgICAgICAxMDQuNDkyMTYxOTkzOTM4ODggKiBsb2coZyk7XG4gICAgICAgIGIgPVxuICAgICAgICAgICAgdGVtcCA8IDIwXG4gICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgOiAtMjU0Ljc2OTM1MTg0MTIwOTAyICtcbiAgICAgICAgICAgICAgICAgIDAuODI3NDA5NjA2NDAwNzM5NSAqIChiID0gdGVtcCAtIDEwKSArXG4gICAgICAgICAgICAgICAgICAxMTUuNjc5OTQ0MDEwNjYxNDcgKiBsb2coYik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgciA9XG4gICAgICAgICAgICAzNTEuOTc2OTA1NjY4MDU2OTMgK1xuICAgICAgICAgICAgMC4xMTQyMDY0NTM3ODQxNjUgKiAociA9IHRlbXAgLSA1NSkgLVxuICAgICAgICAgICAgNDAuMjUzNjYzMDkzMzIxMjcgKiBsb2cocik7XG4gICAgICAgIGcgPVxuICAgICAgICAgICAgMzI1LjQ0OTQxMjU3MTE5NzQgK1xuICAgICAgICAgICAgMC4wNzk0MzQ1NjUzNjY2MjM0MiAqIChnID0gdGVtcCAtIDUwKSAtXG4gICAgICAgICAgICAyOC4wODUyOTYzNTA3OTU3ICogbG9nKGcpO1xuICAgICAgICBiID0gMjU1O1xuICAgIH1cbiAgICByZXR1cm4gW3IsIGcsIGIsIDFdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGVtcGVyYXR1cmUycmdiO1xuIiwiaW1wb3J0IENvbG9yIGZyb20gJy4uL0NvbG9yLmpzJztcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi91dGlscy9pbmRleC5qcyc7XG5cbkNvbG9yLnByb3RvdHlwZS5hbHBoYSA9IGZ1bmN0aW9uIChhLCBtdXRhdGUgPSBmYWxzZSkge1xuICAgIGlmIChhICE9PSB1bmRlZmluZWQgJiYgdHlwZShhKSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKG11dGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmdiWzNdID0gYTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IoW3RoaXMuX3JnYlswXSwgdGhpcy5fcmdiWzFdLCB0aGlzLl9yZ2JbMl0sIGFdLCAncmdiJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9yZ2JbM107XG59O1xuIiwiaW1wb3J0IENvbG9yIGZyb20gJy4uL0NvbG9yLmpzJztcblxuQ29sb3IucHJvdG90eXBlLmNsaXBwZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JnYi5fY2xpcHBlZCB8fCBmYWxzZTtcbn07XG4iLCJpbXBvcnQgJy4uL2lvL2xhYi9pbmRleC5qcyc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vQ29sb3IuanMnO1xuaW1wb3J0IExBQl9DT05TVEFOVFMgZnJvbSAnLi4vaW8vbGFiL2xhYi1jb25zdGFudHMuanMnO1xuXG5Db2xvci5wcm90b3R5cGUuZGFya2VuID0gZnVuY3Rpb24gKGFtb3VudCA9IDEpIHtcbiAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgY29uc3QgbGFiID0gbWUubGFiKCk7XG4gICAgbGFiWzBdIC09IExBQl9DT05TVEFOVFMuS24gKiBhbW91bnQ7XG4gICAgcmV0dXJuIG5ldyBDb2xvcihsYWIsICdsYWInKS5hbHBoYShtZS5hbHBoYSgpLCB0cnVlKTtcbn07XG5cbkNvbG9yLnByb3RvdHlwZS5icmlnaHRlbiA9IGZ1bmN0aW9uIChhbW91bnQgPSAxKSB7XG4gICAgcmV0dXJuIHRoaXMuZGFya2VuKC1hbW91bnQpO1xufTtcblxuQ29sb3IucHJvdG90eXBlLmRhcmtlciA9IENvbG9yLnByb3RvdHlwZS5kYXJrZW47XG5Db2xvci5wcm90b3R5cGUuYnJpZ2h0ZXIgPSBDb2xvci5wcm90b3R5cGUuYnJpZ2h0ZW47XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSAnLi4vQ29sb3IuanMnO1xuXG5Db2xvci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG1jKSB7XG4gICAgY29uc3QgW21vZGUsIGNoYW5uZWxdID0gbWMuc3BsaXQoJy4nKTtcbiAgICBjb25zdCBzcmMgPSB0aGlzW21vZGVdKCk7XG4gICAgaWYgKGNoYW5uZWwpIHtcbiAgICAgICAgY29uc3QgaSA9IG1vZGUuaW5kZXhPZihjaGFubmVsKSAtIChtb2RlLnN1YnN0cigwLCAyKSA9PT0gJ29rJyA/IDIgOiAwKTtcbiAgICAgICAgaWYgKGkgPiAtMSkgcmV0dXJuIHNyY1tpXTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bmtub3duIGNoYW5uZWwgJHtjaGFubmVsfSBpbiBtb2RlICR7bW9kZX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3JjO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSAnLi4vQ29sb3IuanMnO1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gJy4uL3V0aWxzL2luZGV4LmpzJztcbmNvbnN0IHsgcG93IH0gPSBNYXRoO1xuXG5jb25zdCBFUFMgPSAxZS03O1xuY29uc3QgTUFYX0lURVIgPSAyMDtcblxuQ29sb3IucHJvdG90eXBlLmx1bWluYW5jZSA9IGZ1bmN0aW9uIChsdW0sIG1vZGUgPSAncmdiJykge1xuICAgIGlmIChsdW0gIT09IHVuZGVmaW5lZCAmJiB0eXBlKGx1bSkgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGlmIChsdW0gPT09IDApIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBwdXJlIGJsYWNrXG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKFswLCAwLCAwLCB0aGlzLl9yZ2JbM11dLCAncmdiJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGx1bSA9PT0gMSkge1xuICAgICAgICAgICAgLy8gcmV0dXJuIHB1cmUgd2hpdGVcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoWzI1NSwgMjU1LCAyNTUsIHRoaXMuX3JnYlszXV0sICdyZ2InKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb21wdXRlIG5ldyBjb2xvciB1c2luZy4uLlxuICAgICAgICBsZXQgY3VyX2x1bSA9IHRoaXMubHVtaW5hbmNlKCk7XG4gICAgICAgIGxldCBtYXhfaXRlciA9IE1BWF9JVEVSO1xuXG4gICAgICAgIGNvbnN0IHRlc3QgPSAobG93LCBoaWdoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtaWQgPSBsb3cuaW50ZXJwb2xhdGUoaGlnaCwgMC41LCBtb2RlKTtcbiAgICAgICAgICAgIGNvbnN0IGxtID0gbWlkLmx1bWluYW5jZSgpO1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGx1bSAtIGxtKSA8IEVQUyB8fCAhbWF4X2l0ZXItLSkge1xuICAgICAgICAgICAgICAgIC8vIGNsb3NlIGVub3VnaFxuICAgICAgICAgICAgICAgIHJldHVybiBtaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbG0gPiBsdW0gPyB0ZXN0KGxvdywgbWlkKSA6IHRlc3QobWlkLCBoaWdoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZ2IgPSAoXG4gICAgICAgICAgICBjdXJfbHVtID4gbHVtXG4gICAgICAgICAgICAgICAgPyB0ZXN0KG5ldyBDb2xvcihbMCwgMCwgMF0pLCB0aGlzKVxuICAgICAgICAgICAgICAgIDogdGVzdCh0aGlzLCBuZXcgQ29sb3IoWzI1NSwgMjU1LCAyNTVdKSlcbiAgICAgICAgKS5yZ2IoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihbLi4ucmdiLCB0aGlzLl9yZ2JbM11dKTtcbiAgICB9XG4gICAgcmV0dXJuIHJnYjJsdW1pbmFuY2UoLi4udGhpcy5fcmdiLnNsaWNlKDAsIDMpKTtcbn07XG5cbmNvbnN0IHJnYjJsdW1pbmFuY2UgPSAociwgZywgYikgPT4ge1xuICAgIC8vIHJlbGF0aXZlIGx1bWluYW5jZVxuICAgIC8vIHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDA4L1JFQy1XQ0FHMjAtMjAwODEyMTEvI3JlbGF0aXZlbHVtaW5hbmNlZGVmXG4gICAgciA9IGx1bWluYW5jZV94KHIpO1xuICAgIGcgPSBsdW1pbmFuY2VfeChnKTtcbiAgICBiID0gbHVtaW5hbmNlX3goYik7XG4gICAgcmV0dXJuIDAuMjEyNiAqIHIgKyAwLjcxNTIgKiBnICsgMC4wNzIyICogYjtcbn07XG5cbmNvbnN0IGx1bWluYW5jZV94ID0gKHgpID0+IHtcbiAgICB4IC89IDI1NTtcbiAgICByZXR1cm4geCA8PSAwLjAzOTI4ID8geCAvIDEyLjkyIDogcG93KCh4ICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG59O1xuIiwiaW1wb3J0IENvbG9yIGZyb20gJy4uL0NvbG9yLmpzJztcbmltcG9ydCBtaXggZnJvbSAnLi4vZ2VuZXJhdG9yL21peC5qcyc7XG5cbkNvbG9yLnByb3RvdHlwZS5taXggPSBDb2xvci5wcm90b3R5cGUuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiAoXG4gICAgY29sMixcbiAgICBmID0gMC41LFxuICAgIC4uLnJlc3Rcbikge1xuICAgIHJldHVybiBtaXgodGhpcywgY29sMiwgZiwgLi4ucmVzdCk7XG59O1xuIiwiaW1wb3J0IENvbG9yIGZyb20gJy4uL0NvbG9yLmpzJztcblxuQ29sb3IucHJvdG90eXBlLnByZW11bHRpcGx5ID0gZnVuY3Rpb24gKG11dGF0ZSA9IGZhbHNlKSB7XG4gICAgY29uc3QgcmdiID0gdGhpcy5fcmdiO1xuICAgIGNvbnN0IGEgPSByZ2JbM107XG4gICAgaWYgKG11dGF0ZSkge1xuICAgICAgICB0aGlzLl9yZ2IgPSBbcmdiWzBdICogYSwgcmdiWzFdICogYSwgcmdiWzJdICogYSwgYV07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IoW3JnYlswXSAqIGEsIHJnYlsxXSAqIGEsIHJnYlsyXSAqIGEsIGFdLCAncmdiJyk7XG4gICAgfVxufTtcbiIsImltcG9ydCAnLi4vaW8vbGNoL2luZGV4LmpzJztcbmltcG9ydCBDb2xvciBmcm9tICcuLi9Db2xvci5qcyc7XG5pbXBvcnQgTEFCX0NPTlNUQU5UUyBmcm9tICcuLi9pby9sYWIvbGFiLWNvbnN0YW50cy5qcyc7XG5cbkNvbG9yLnByb3RvdHlwZS5zYXR1cmF0ZSA9IGZ1bmN0aW9uIChhbW91bnQgPSAxKSB7XG4gICAgY29uc3QgbWUgPSB0aGlzO1xuICAgIGNvbnN0IGxjaCA9IG1lLmxjaCgpO1xuICAgIGxjaFsxXSArPSBMQUJfQ09OU1RBTlRTLktuICogYW1vdW50O1xuICAgIGlmIChsY2hbMV0gPCAwKSBsY2hbMV0gPSAwO1xuICAgIHJldHVybiBuZXcgQ29sb3IobGNoLCAnbGNoJykuYWxwaGEobWUuYWxwaGEoKSwgdHJ1ZSk7XG59O1xuXG5Db2xvci5wcm90b3R5cGUuZGVzYXR1cmF0ZSA9IGZ1bmN0aW9uIChhbW91bnQgPSAxKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F0dXJhdGUoLWFtb3VudCk7XG59O1xuIiwiaW1wb3J0IENvbG9yIGZyb20gJy4uL0NvbG9yLmpzJztcbmltcG9ydCB7IHR5cGUgfSBmcm9tICcuLi91dGlscy9pbmRleC5qcyc7XG5cbkNvbG9yLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAobWMsIHZhbHVlLCBtdXRhdGUgPSBmYWxzZSkge1xuICAgIGNvbnN0IFttb2RlLCBjaGFubmVsXSA9IG1jLnNwbGl0KCcuJyk7XG4gICAgY29uc3Qgc3JjID0gdGhpc1ttb2RlXSgpO1xuICAgIGlmIChjaGFubmVsKSB7XG4gICAgICAgIGNvbnN0IGkgPSBtb2RlLmluZGV4T2YoY2hhbm5lbCkgLSAobW9kZS5zdWJzdHIoMCwgMikgPT09ICdvaycgPyAyIDogMCk7XG4gICAgICAgIGlmIChpID4gLTEpIHtcbiAgICAgICAgICAgIGlmICh0eXBlKHZhbHVlKSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUuY2hhckF0KDApKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjW2ldICs9ICt2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tpXSArPSArdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNbaV0gKj0gK3ZhbHVlLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tpXSAvPSArdmFsdWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNbaV0gPSArdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlKHZhbHVlKSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBzcmNbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bnN1cHBvcnRlZCB2YWx1ZSBmb3IgQ29sb3Iuc2V0YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBvdXQgPSBuZXcgQ29sb3Ioc3JjLCBtb2RlKTtcbiAgICAgICAgICAgIGlmIChtdXRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZ2IgPSBvdXQuX3JnYjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bmtub3duIGNoYW5uZWwgJHtjaGFubmVsfSBpbiBtb2RlICR7bW9kZX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3JjO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgJy4uL2lvL2xhYi9pbmRleC5qcyc7XG5pbXBvcnQgQ29sb3IgZnJvbSAnLi4vQ29sb3IuanMnO1xuaW1wb3J0IG1peCBmcm9tICcuLi9nZW5lcmF0b3IvbWl4LmpzJztcblxuQ29sb3IucHJvdG90eXBlLnRpbnQgPSBmdW5jdGlvbiAoZiA9IDAuNSwgLi4ucmVzdCkge1xuICAgIHJldHVybiBtaXgodGhpcywgJ3doaXRlJywgZiwgLi4ucmVzdCk7XG59O1xuXG5Db2xvci5wcm90b3R5cGUuc2hhZGUgPSBmdW5jdGlvbiAoZiA9IDAuNSwgLi4ucmVzdCkge1xuICAgIHJldHVybiBtaXgodGhpcywgJ2JsYWNrJywgZiwgLi4ucmVzdCk7XG59O1xuIiwiaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlLmpzJztcblxuY29uc3QgeyBsb2csIHBvdywgZmxvb3IsIGFicyB9ID0gTWF0aDtcblxuZXhwb3J0IGZ1bmN0aW9uIGFuYWx5emUoZGF0YSwga2V5ID0gbnVsbCkge1xuICAgIGNvbnN0IHIgPSB7XG4gICAgICAgIG1pbjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgbWF4OiBOdW1iZXIuTUFYX1ZBTFVFICogLTEsXG4gICAgICAgIHN1bTogMCxcbiAgICAgICAgdmFsdWVzOiBbXSxcbiAgICAgICAgY291bnQ6IDBcbiAgICB9O1xuICAgIGlmICh0eXBlKGRhdGEpID09PSAnb2JqZWN0Jykge1xuICAgICAgICBkYXRhID0gT2JqZWN0LnZhbHVlcyhkYXRhKTtcbiAgICB9XG4gICAgZGF0YS5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgICAgaWYgKGtleSAmJiB0eXBlKHZhbCkgPT09ICdvYmplY3QnKSB2YWwgPSB2YWxba2V5XTtcbiAgICAgICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbCAmJiAhaXNOYU4odmFsKSkge1xuICAgICAgICAgICAgci52YWx1ZXMucHVzaCh2YWwpO1xuICAgICAgICAgICAgci5zdW0gKz0gdmFsO1xuICAgICAgICAgICAgaWYgKHZhbCA8IHIubWluKSByLm1pbiA9IHZhbDtcbiAgICAgICAgICAgIGlmICh2YWwgPiByLm1heCkgci5tYXggPSB2YWw7XG4gICAgICAgICAgICByLmNvdW50ICs9IDE7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHIuZG9tYWluID0gW3IubWluLCByLm1heF07XG5cbiAgICByLmxpbWl0cyA9IChtb2RlLCBudW0pID0+IGxpbWl0cyhyLCBtb2RlLCBudW0pO1xuXG4gICAgcmV0dXJuIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW1pdHMoZGF0YSwgbW9kZSA9ICdlcXVhbCcsIG51bSA9IDcpIHtcbiAgICBpZiAodHlwZShkYXRhKSA9PSAnYXJyYXknKSB7XG4gICAgICAgIGRhdGEgPSBhbmFseXplKGRhdGEpO1xuICAgIH1cbiAgICBjb25zdCB7IG1pbiwgbWF4IH0gPSBkYXRhO1xuICAgIGNvbnN0IHZhbHVlcyA9IGRhdGEudmFsdWVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcblxuICAgIGlmIChudW0gPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIFttaW4sIG1heF07XG4gICAgfVxuXG4gICAgY29uc3QgbGltaXRzID0gW107XG5cbiAgICBpZiAobW9kZS5zdWJzdHIoMCwgMSkgPT09ICdjJykge1xuICAgICAgICAvLyBjb250aW51b3VzXG4gICAgICAgIGxpbWl0cy5wdXNoKG1pbik7XG4gICAgICAgIGxpbWl0cy5wdXNoKG1heCk7XG4gICAgfVxuXG4gICAgaWYgKG1vZGUuc3Vic3RyKDAsIDEpID09PSAnZScpIHtcbiAgICAgICAgLy8gZXF1YWwgaW50ZXJ2YWxcbiAgICAgICAgbGltaXRzLnB1c2gobWluKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW07IGkrKykge1xuICAgICAgICAgICAgbGltaXRzLnB1c2gobWluICsgKGkgLyBudW0pICogKG1heCAtIG1pbikpO1xuICAgICAgICB9XG4gICAgICAgIGxpbWl0cy5wdXNoKG1heCk7XG4gICAgfSBlbHNlIGlmIChtb2RlLnN1YnN0cigwLCAxKSA9PT0gJ2wnKSB7XG4gICAgICAgIC8vIGxvZyBzY2FsZVxuICAgICAgICBpZiAobWluIDw9IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAnTG9nYXJpdGhtaWMgc2NhbGVzIGFyZSBvbmx5IHBvc3NpYmxlIGZvciB2YWx1ZXMgPiAwJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtaW5fbG9nID0gTWF0aC5MT0cxMEUgKiBsb2cobWluKTtcbiAgICAgICAgY29uc3QgbWF4X2xvZyA9IE1hdGguTE9HMTBFICogbG9nKG1heCk7XG4gICAgICAgIGxpbWl0cy5wdXNoKG1pbik7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKHBvdygxMCwgbWluX2xvZyArIChpIC8gbnVtKSAqIChtYXhfbG9nIC0gbWluX2xvZykpKTtcbiAgICAgICAgfVxuICAgICAgICBsaW1pdHMucHVzaChtYXgpO1xuICAgIH0gZWxzZSBpZiAobW9kZS5zdWJzdHIoMCwgMSkgPT09ICdxJykge1xuICAgICAgICAvLyBxdWFudGlsZSBzY2FsZVxuICAgICAgICBsaW1pdHMucHVzaChtaW4pO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gKCh2YWx1ZXMubGVuZ3RoIC0gMSkgKiBpKSAvIG51bTtcbiAgICAgICAgICAgIGNvbnN0IHBiID0gZmxvb3IocCk7XG4gICAgICAgICAgICBpZiAocGIgPT09IHApIHtcbiAgICAgICAgICAgICAgICBsaW1pdHMucHVzaCh2YWx1ZXNbcGJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gcCA+IHBiXG4gICAgICAgICAgICAgICAgY29uc3QgcHIgPSBwIC0gcGI7XG4gICAgICAgICAgICAgICAgbGltaXRzLnB1c2godmFsdWVzW3BiXSAqICgxIC0gcHIpICsgdmFsdWVzW3BiICsgMV0gKiBwcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGltaXRzLnB1c2gobWF4KTtcbiAgICB9IGVsc2UgaWYgKG1vZGUuc3Vic3RyKDAsIDEpID09PSAnaycpIHtcbiAgICAgICAgLy8gay1tZWFucyBjbHVzdGVyaW5nXG4gICAgICAgIC8qXG4gICAgICAgIGltcGxlbWVudGF0aW9uIGJhc2VkIG9uXG4gICAgICAgIGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vcC9maWd1ZS9zb3VyY2UvYnJvd3NlL3RydW5rL2ZpZ3VlLmpzIzMzNlxuICAgICAgICBzaW1wbGlmaWVkIGZvciAxLWQgaW5wdXQgdmFsdWVzXG4gICAgICAgICovXG4gICAgICAgIGxldCBjbHVzdGVyO1xuICAgICAgICBjb25zdCBuID0gdmFsdWVzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudHMgPSBuZXcgQXJyYXkobik7XG4gICAgICAgIGNvbnN0IGNsdXN0ZXJTaXplcyA9IG5ldyBBcnJheShudW0pO1xuICAgICAgICBsZXQgcmVwZWF0ID0gdHJ1ZTtcbiAgICAgICAgbGV0IG5iX2l0ZXJzID0gMDtcbiAgICAgICAgbGV0IGNlbnRyb2lkcyA9IG51bGw7XG5cbiAgICAgICAgLy8gZ2V0IHNlZWQgdmFsdWVzXG4gICAgICAgIGNlbnRyb2lkcyA9IFtdO1xuICAgICAgICBjZW50cm9pZHMucHVzaChtaW4pO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgICAgICBjZW50cm9pZHMucHVzaChtaW4gKyAoaSAvIG51bSkgKiAobWF4IC0gbWluKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2VudHJvaWRzLnB1c2gobWF4KTtcblxuICAgICAgICB3aGlsZSAocmVwZWF0KSB7XG4gICAgICAgICAgICAvLyBhc3NpZ25tZW50IHN0ZXBcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjbHVzdGVyU2l6ZXNbal0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc1tpXTtcbiAgICAgICAgICAgICAgICBsZXQgbWluZGlzdCA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgICAgICAgICAgbGV0IGJlc3Q7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW07IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXN0ID0gYWJzKGNlbnRyb2lkc1tqXSAtIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3QgPCBtaW5kaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5kaXN0ID0gZGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlc3QgPSBqO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNsdXN0ZXJTaXplc1tiZXN0XSsrO1xuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50c1tpXSA9IGJlc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB1cGRhdGUgY2VudHJvaWRzIHN0ZXBcbiAgICAgICAgICAgIGNvbnN0IG5ld0NlbnRyb2lkcyA9IG5ldyBBcnJheShudW0pO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW07IGorKykge1xuICAgICAgICAgICAgICAgIG5ld0NlbnRyb2lkc1tqXSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIGNsdXN0ZXIgPSBhc3NpZ25tZW50c1tpXTtcbiAgICAgICAgICAgICAgICBpZiAobmV3Q2VudHJvaWRzW2NsdXN0ZXJdID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbnRyb2lkc1tjbHVzdGVyXSA9IHZhbHVlc1tpXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdDZW50cm9pZHNbY2x1c3Rlcl0gKz0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtOyBqKyspIHtcbiAgICAgICAgICAgICAgICBuZXdDZW50cm9pZHNbal0gKj0gMSAvIGNsdXN0ZXJTaXplc1tqXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2hlY2sgY29udmVyZ2VuY2VcbiAgICAgICAgICAgIHJlcGVhdCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW07IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChuZXdDZW50cm9pZHNbal0gIT09IGNlbnRyb2lkc1tqXSkge1xuICAgICAgICAgICAgICAgICAgICByZXBlYXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNlbnRyb2lkcyA9IG5ld0NlbnRyb2lkcztcbiAgICAgICAgICAgIG5iX2l0ZXJzKys7XG5cbiAgICAgICAgICAgIGlmIChuYl9pdGVycyA+IDIwMCkge1xuICAgICAgICAgICAgICAgIHJlcGVhdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmluaXNoZWQgay1tZWFucyBjbHVzdGVyaW5nXG4gICAgICAgIC8vIHRoZSBuZXh0IHBhcnQgaXMgYm9ycm93ZWQgZnJvbSBnYWJyaWVsZmxvci5pdFxuICAgICAgICBjb25zdCBrQ2x1c3RlcnMgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW07IGorKykge1xuICAgICAgICAgICAga0NsdXN0ZXJzW2pdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGNsdXN0ZXIgPSBhc3NpZ25tZW50c1tpXTtcbiAgICAgICAgICAgIGtDbHVzdGVyc1tjbHVzdGVyXS5wdXNoKHZhbHVlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRtcEtNZWFuc0JyZWFrcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bTsgaisrKSB7XG4gICAgICAgICAgICB0bXBLTWVhbnNCcmVha3MucHVzaChrQ2x1c3RlcnNbal1bMF0pO1xuICAgICAgICAgICAgdG1wS01lYW5zQnJlYWtzLnB1c2goa0NsdXN0ZXJzW2pdW2tDbHVzdGVyc1tqXS5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cbiAgICAgICAgdG1wS01lYW5zQnJlYWtzID0gdG1wS01lYW5zQnJlYWtzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICAgICAgbGltaXRzLnB1c2godG1wS01lYW5zQnJlYWtzWzBdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0bXBLTWVhbnNCcmVha3MubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSB0bXBLTWVhbnNCcmVha3NbaV07XG4gICAgICAgICAgICBpZiAoIWlzTmFOKHYpICYmIGxpbWl0cy5pbmRleE9mKHYpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGxpbWl0cy5wdXNoKHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsaW1pdHM7XG59XG4iLCJpbXBvcnQgbGltaXQgZnJvbSAnLi9saW1pdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChyZ2IpID0+IHtcbiAgICByZ2IuX2NsaXBwZWQgPSBmYWxzZTtcbiAgICByZ2IuX3VuY2xpcHBlZCA9IHJnYi5zbGljZSgwKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAzOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPCAzKSB7XG4gICAgICAgICAgICBpZiAocmdiW2ldIDwgMCB8fCByZ2JbaV0gPiAyNTUpIHJnYi5fY2xpcHBlZCA9IHRydWU7XG4gICAgICAgICAgICByZ2JbaV0gPSBsaW1pdChyZ2JbaV0sIDAsIDI1NSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMykge1xuICAgICAgICAgICAgcmdiW2ldID0gbGltaXQocmdiW2ldLCAwLCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmdiO1xufTtcbiIsImltcG9ydCBDb2xvciBmcm9tICcuLi9Db2xvci5qcyc7XG5pbXBvcnQgJy4uL29wcy9sdW1pbmFuY2UuanMnO1xuXG5leHBvcnQgZGVmYXVsdCAoYSwgYikgPT4ge1xuICAgIC8vIFdDQUcgY29udHJhc3QgcmF0aW9cbiAgICAvLyBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvMjAwOC9SRUMtV0NBRzIwLTIwMDgxMjExLyNjb250cmFzdC1yYXRpb2RlZlxuICAgIGEgPSBuZXcgQ29sb3IoYSk7XG4gICAgYiA9IG5ldyBDb2xvcihiKTtcbiAgICBjb25zdCBsMSA9IGEubHVtaW5hbmNlKCk7XG4gICAgY29uc3QgbDIgPSBiLmx1bWluYW5jZSgpO1xuICAgIHJldHVybiBsMSA+IGwyID8gKGwxICsgMC4wNSkgLyAobDIgKyAwLjA1KSA6IChsMiArIDAuMDUpIC8gKGwxICsgMC4wNSk7XG59O1xuIiwiaW1wb3J0IENvbG9yIGZyb20gJy4uL0NvbG9yLmpzJztcbmltcG9ydCBtaXggZnJvbSAnLi4vZ2VuZXJhdG9yL21peC5qcyc7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqXG4gKiBUaGUgQVBDQSBjb250cmFzdCBwcmVkaWN0aW9uIGFsZ29yaXRobSBpcyBiYXNlZCBvZiB0aGUgZm9ybXVsYXMgcHVibGlzaGVkXG4gKiBpbiB0aGUgQVBDQS0xLjAuOThHIHNwZWNpZmljYXRpb24gYnkgTXluZGV4LiBUaGUgc3BlY2lmaWNhdGlvbiBpcyBhdmFpbGFibGUgYXQ6XG4gKiBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vTXluZGV4L2FwY2EtdzMvbWFzdGVyL2ltYWdlcy9BUENBdzNfMC4xLjE3X0FQQ0EwLjAuOThHLnN2Z1xuICpcbiAqIE5vdGUgdGhhdCB0aGUgQVBDQSBpbXBsZW1lbnRhdGlvbiBpcyBzdGlsbCBiZXRhLCBzbyBwbGVhc2UgdXBkYXRlIHRvXG4gKiBmdXR1cmUgdmVyc2lvbnMgb2YgY2hyb21hLmpzIHdoZW4gdGhleSBiZWNvbWUgYXZhaWxhYmxlLlxuICpcbiAqIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IHRoZSBBUENBIFJlYWRhYmlsaXR5IENyaXRlcmlvbiBhdFxuICogaHR0cHM6Ly9yZWFkdGVjaC5vcmcvQVJDL1xuICovXG5cbi8vIGNvbnN0YW50c1xuY29uc3QgV19vZmZzZXQgPSAwLjAyNztcbmNvbnN0IFBfaW4gPSAwLjAwMDU7XG5jb25zdCBQX291dCA9IDAuMTtcbmNvbnN0IFJfc2NhbGUgPSAxLjE0O1xuY29uc3QgQl90aHJlc2hvbGQgPSAwLjAyMjtcbmNvbnN0IEJfZXhwID0gMS40MTQ7XG5cbmV4cG9ydCBkZWZhdWx0ICh0ZXh0LCBiZykgPT4ge1xuICAgIC8vIHBhcnNlIGlucHV0IGNvbG9yc1xuICAgIHRleHQgPSBuZXcgQ29sb3IodGV4dCk7XG4gICAgYmcgPSBuZXcgQ29sb3IoYmcpO1xuICAgIC8vIGlmIHRleHQgY29sb3IgaGFzIGFscGhhLCBibGVuZCBhZ2FpbnN0IGJhY2tncm91bmRcbiAgICBpZiAodGV4dC5hbHBoYSgpIDwgMSkge1xuICAgICAgICB0ZXh0ID0gbWl4KGJnLCB0ZXh0LCB0ZXh0LmFscGhhKCksICdyZ2InKTtcbiAgICB9XG4gICAgY29uc3QgbF90ZXh0ID0gbHVtKC4uLnRleHQucmdiKCkpO1xuICAgIGNvbnN0IGxfYmcgPSBsdW0oLi4uYmcucmdiKCkpO1xuXG4gICAgLy8gc29mdCBjbGFtcCBibGFjayBsZXZlbHNcbiAgICBjb25zdCBZX3RleHQgPVxuICAgICAgICBsX3RleHQgPj0gQl90aHJlc2hvbGRcbiAgICAgICAgICAgID8gbF90ZXh0XG4gICAgICAgICAgICA6IGxfdGV4dCArIE1hdGgucG93KEJfdGhyZXNob2xkIC0gbF90ZXh0LCBCX2V4cCk7XG4gICAgY29uc3QgWV9iZyA9XG4gICAgICAgIGxfYmcgPj0gQl90aHJlc2hvbGQgPyBsX2JnIDogbF9iZyArIE1hdGgucG93KEJfdGhyZXNob2xkIC0gbF9iZywgQl9leHApO1xuXG4gICAgLy8gbm9ybWFsIHBvbGFyaXR5IChkYXJrIHRleHQgb24gbGlnaHQgYmFja2dyb3VuZClcbiAgICBjb25zdCBTX25vcm0gPSBNYXRoLnBvdyhZX2JnLCAwLjU2KSAtIE1hdGgucG93KFlfdGV4dCwgMC41Nyk7XG4gICAgLy8gcmV2ZXJzZSBwb2xhcml0eSAobGlnaHQgdGV4dCBvbiBkYXJrIGJhY2tncm91bmQpXG4gICAgY29uc3QgU19yZXYgPSBNYXRoLnBvdyhZX2JnLCAwLjY1KSAtIE1hdGgucG93KFlfdGV4dCwgMC42Mik7XG4gICAgLy8gY2xhbXAgbm9pc2UgdGhlbiBzY2FsZVxuICAgIGNvbnN0IEMgPVxuICAgICAgICBNYXRoLmFicyhZX2JnIC0gWV90ZXh0KSA8IFBfaW5cbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiBZX3RleHQgPCBZX2JnXG4gICAgICAgICAgICAgID8gU19ub3JtICogUl9zY2FsZVxuICAgICAgICAgICAgICA6IFNfcmV2ICogUl9zY2FsZTtcbiAgICAvLyBjbGFtcCBtaW5pbXVtIGNvbnRyYXN0IHRoZW4gb2Zmc2V0XG4gICAgY29uc3QgU19hcGMgPSBNYXRoLmFicyhDKSA8IFBfb3V0ID8gMCA6IEMgPiAwID8gQyAtIFdfb2Zmc2V0IDogQyArIFdfb2Zmc2V0O1xuICAgIC8vIHNjYWxlIHRvIDEwMFxuICAgIHJldHVybiBTX2FwYyAqIDEwMDtcbn07XG5cbmZ1bmN0aW9uIGx1bShyLCBnLCBiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgMC4yMTI2NzI5ICogTWF0aC5wb3cociAvIDI1NSwgMi40KSArXG4gICAgICAgIDAuNzE1MTUyMiAqIE1hdGgucG93KGcgLyAyNTUsIDIuNCkgK1xuICAgICAgICAwLjA3MjE3NSAqIE1hdGgucG93KGIgLyAyNTUsIDIuNClcbiAgICApO1xufVxuIiwiaW1wb3J0IENvbG9yIGZyb20gJy4uL0NvbG9yLmpzJztcbmNvbnN0IHsgc3FydCwgcG93LCBtaW4sIG1heCwgYXRhbjIsIGFicywgY29zLCBzaW4sIGV4cCwgUEkgfSA9IE1hdGg7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhLCBiLCBLbCA9IDEsIEtjID0gMSwgS2ggPSAxKSB7XG4gICAgLy8gRGVsdGEgRSAoQ0lFIDIwMDApXG4gICAgLy8gc2VlIGh0dHA6Ly93d3cuYnJ1Y2VsaW5kYmxvb20uY29tL2luZGV4Lmh0bWw/RXFuX0RlbHRhRV9DSUUyMDAwLmh0bWxcbiAgICB2YXIgcmFkMmRlZyA9IGZ1bmN0aW9uIChyYWQpIHtcbiAgICAgICAgcmV0dXJuICgzNjAgKiByYWQpIC8gKDIgKiBQSSk7XG4gICAgfTtcbiAgICB2YXIgZGVnMnJhZCA9IGZ1bmN0aW9uIChkZWcpIHtcbiAgICAgICAgcmV0dXJuICgyICogUEkgKiBkZWcpIC8gMzYwO1xuICAgIH07XG4gICAgYSA9IG5ldyBDb2xvcihhKTtcbiAgICBiID0gbmV3IENvbG9yKGIpO1xuICAgIGNvbnN0IFtMMSwgYTEsIGIxXSA9IEFycmF5LmZyb20oYS5sYWIoKSk7XG4gICAgY29uc3QgW0wyLCBhMiwgYjJdID0gQXJyYXkuZnJvbShiLmxhYigpKTtcbiAgICBjb25zdCBhdmdMID0gKEwxICsgTDIpIC8gMjtcbiAgICBjb25zdCBDMSA9IHNxcnQocG93KGExLCAyKSArIHBvdyhiMSwgMikpO1xuICAgIGNvbnN0IEMyID0gc3FydChwb3coYTIsIDIpICsgcG93KGIyLCAyKSk7XG4gICAgY29uc3QgYXZnQyA9IChDMSArIEMyKSAvIDI7XG4gICAgY29uc3QgRyA9IDAuNSAqICgxIC0gc3FydChwb3coYXZnQywgNykgLyAocG93KGF2Z0MsIDcpICsgcG93KDI1LCA3KSkpKTtcbiAgICBjb25zdCBhMXAgPSBhMSAqICgxICsgRyk7XG4gICAgY29uc3QgYTJwID0gYTIgKiAoMSArIEcpO1xuICAgIGNvbnN0IEMxcCA9IHNxcnQocG93KGExcCwgMikgKyBwb3coYjEsIDIpKTtcbiAgICBjb25zdCBDMnAgPSBzcXJ0KHBvdyhhMnAsIDIpICsgcG93KGIyLCAyKSk7XG4gICAgY29uc3QgYXZnQ3AgPSAoQzFwICsgQzJwKSAvIDI7XG4gICAgY29uc3QgYXJjdGFuMSA9IHJhZDJkZWcoYXRhbjIoYjEsIGExcCkpO1xuICAgIGNvbnN0IGFyY3RhbjIgPSByYWQyZGVnKGF0YW4yKGIyLCBhMnApKTtcbiAgICBjb25zdCBoMXAgPSBhcmN0YW4xID49IDAgPyBhcmN0YW4xIDogYXJjdGFuMSArIDM2MDtcbiAgICBjb25zdCBoMnAgPSBhcmN0YW4yID49IDAgPyBhcmN0YW4yIDogYXJjdGFuMiArIDM2MDtcbiAgICBjb25zdCBhdmdIcCA9XG4gICAgICAgIGFicyhoMXAgLSBoMnApID4gMTgwID8gKGgxcCArIGgycCArIDM2MCkgLyAyIDogKGgxcCArIGgycCkgLyAyO1xuICAgIGNvbnN0IFQgPVxuICAgICAgICAxIC1cbiAgICAgICAgMC4xNyAqIGNvcyhkZWcycmFkKGF2Z0hwIC0gMzApKSArXG4gICAgICAgIDAuMjQgKiBjb3MoZGVnMnJhZCgyICogYXZnSHApKSArXG4gICAgICAgIDAuMzIgKiBjb3MoZGVnMnJhZCgzICogYXZnSHAgKyA2KSkgLVxuICAgICAgICAwLjIgKiBjb3MoZGVnMnJhZCg0ICogYXZnSHAgLSA2MykpO1xuICAgIGxldCBkZWx0YUhwID0gaDJwIC0gaDFwO1xuICAgIGRlbHRhSHAgPVxuICAgICAgICBhYnMoZGVsdGFIcCkgPD0gMTgwXG4gICAgICAgICAgICA/IGRlbHRhSHBcbiAgICAgICAgICAgIDogaDJwIDw9IGgxcFxuICAgICAgICAgICAgICA/IGRlbHRhSHAgKyAzNjBcbiAgICAgICAgICAgICAgOiBkZWx0YUhwIC0gMzYwO1xuICAgIGRlbHRhSHAgPSAyICogc3FydChDMXAgKiBDMnApICogc2luKGRlZzJyYWQoZGVsdGFIcCkgLyAyKTtcbiAgICBjb25zdCBkZWx0YUwgPSBMMiAtIEwxO1xuICAgIGNvbnN0IGRlbHRhQ3AgPSBDMnAgLSBDMXA7XG4gICAgY29uc3Qgc2wgPSAxICsgKDAuMDE1ICogcG93KGF2Z0wgLSA1MCwgMikpIC8gc3FydCgyMCArIHBvdyhhdmdMIC0gNTAsIDIpKTtcbiAgICBjb25zdCBzYyA9IDEgKyAwLjA0NSAqIGF2Z0NwO1xuICAgIGNvbnN0IHNoID0gMSArIDAuMDE1ICogYXZnQ3AgKiBUO1xuICAgIGNvbnN0IGRlbHRhVGhldGEgPSAzMCAqIGV4cCgtcG93KChhdmdIcCAtIDI3NSkgLyAyNSwgMikpO1xuICAgIGNvbnN0IFJjID0gMiAqIHNxcnQocG93KGF2Z0NwLCA3KSAvIChwb3coYXZnQ3AsIDcpICsgcG93KDI1LCA3KSkpO1xuICAgIGNvbnN0IFJ0ID0gLVJjICogc2luKDIgKiBkZWcycmFkKGRlbHRhVGhldGEpKTtcbiAgICBjb25zdCByZXN1bHQgPSBzcXJ0KFxuICAgICAgICBwb3coZGVsdGFMIC8gKEtsICogc2wpLCAyKSArXG4gICAgICAgICAgICBwb3coZGVsdGFDcCAvIChLYyAqIHNjKSwgMikgK1xuICAgICAgICAgICAgcG93KGRlbHRhSHAgLyAoS2ggKiBzaCksIDIpICtcbiAgICAgICAgICAgIFJ0ICogKGRlbHRhQ3AgLyAoS2MgKiBzYykpICogKGRlbHRhSHAgLyAoS2ggKiBzaCkpXG4gICAgKTtcbiAgICByZXR1cm4gbWF4KDAsIG1pbigxMDAsIHJlc3VsdCkpO1xufVxuIiwiaW1wb3J0IENvbG9yIGZyb20gJy4uL0NvbG9yLmpzJztcblxuLy8gc2ltcGxlIEV1Y2xpZGVhbiBkaXN0YW5jZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGEsIGIsIG1vZGUgPSAnbGFiJykge1xuICAgIC8vIERlbHRhIEUgKENJRSAxOTc2KVxuICAgIC8vIHNlZSBodHRwOi8vd3d3LmJydWNlbGluZGJsb29tLmNvbS9pbmRleC5odG1sP0VxdWF0aW9ucy5odG1sXG4gICAgYSA9IG5ldyBDb2xvcihhKTtcbiAgICBiID0gbmV3IENvbG9yKGIpO1xuICAgIGNvbnN0IGwxID0gYS5nZXQobW9kZSk7XG4gICAgY29uc3QgbDIgPSBiLmdldChtb2RlKTtcbiAgICBsZXQgc3VtX3NxID0gMDtcbiAgICBmb3IgKGxldCBpIGluIGwxKSB7XG4gICAgICAgIGNvbnN0IGQgPSAobDFbaV0gfHwgMCkgLSAobDJbaV0gfHwgMCk7XG4gICAgICAgIHN1bV9zcSArPSBkICogZDtcbiAgICB9XG4gICAgcmV0dXJuIE1hdGguc3FydChzdW1fc3EpO1xufVxuIiwiY29uc3QgeyBQSSwgbWluLCBtYXggfSA9IE1hdGg7XG5cbmNvbnN0IHJuZDIgPSAoYSkgPT4gTWF0aC5yb3VuZChhICogMTAwKSAvIDEwMDtcbmNvbnN0IHJuZDMgPSAoYSkgPT4gTWF0aC5yb3VuZChhICogMTAwKSAvIDEwMDtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjbGlwX3JnYiB9IGZyb20gJy4vY2xpcF9yZ2IuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBsaW1pdCB9IGZyb20gJy4vbGltaXQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0eXBlIH0gZnJvbSAnLi90eXBlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5wYWNrIH0gZnJvbSAnLi91bnBhY2suanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBsYXN0IH0gZnJvbSAnLi9sYXN0LmpzJztcblxuY29uc3QgVFdPUEkgPSBQSSAqIDI7XG5jb25zdCBQSVRISVJEID0gUEkgLyAzO1xuY29uc3QgREVHMlJBRCA9IFBJIC8gMTgwO1xuY29uc3QgUkFEMkRFRyA9IDE4MCAvIFBJO1xuXG5leHBvcnQgeyBQSSwgVFdPUEksIFBJVEhJUkQsIERFRzJSQUQsIFJBRDJERUcsIG1pbiwgbWF4LCBybmQyLCBybmQzIH07XG4iLCJpbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCAoYXJncykgPT4ge1xuICAgIGlmIChhcmdzLmxlbmd0aCA8IDIpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGwgPSBhcmdzLmxlbmd0aCAtIDE7XG4gICAgaWYgKHR5cGUoYXJnc1tsXSkgPT0gJ3N0cmluZycpIHJldHVybiBhcmdzW2xdLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIG51bGw7XG59O1xuIiwiY29uc3QgeyBtaW4sIG1heCB9ID0gTWF0aDtcblxuZXhwb3J0IGRlZmF1bHQgKHgsIGxvdyA9IDAsIGhpZ2ggPSAxKSA9PiB7XG4gICAgcmV0dXJuIG1pbihtYXgobG93LCB4KSwgaGlnaCk7XG59O1xuIiwiLy8gZnJvbSBodHRwczovL3d3dy53My5vcmcvVFIvY3NzLWNvbG9yLTQvbXVsdGlwbHktbWF0cmljZXMuanNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG11bHRpcGx5TWF0cmljZXMoQSwgQikge1xuICAgIGxldCBtID0gQS5sZW5ndGg7XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoQVswXSkpIHtcbiAgICAgICAgLy8gQSBpcyB2ZWN0b3IsIGNvbnZlcnQgdG8gW1thLCBiLCBjLCAuLi5dXVxuICAgICAgICBBID0gW0FdO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShCWzBdKSkge1xuICAgICAgICAvLyBCIGlzIHZlY3RvciwgY29udmVydCB0byBbW2FdLCBbYl0sIFtjXSwgLi4uXV1cbiAgICAgICAgQiA9IEIubWFwKCh4KSA9PiBbeF0pO1xuICAgIH1cblxuICAgIGxldCBwID0gQlswXS5sZW5ndGg7XG4gICAgbGV0IEJfY29scyA9IEJbMF0ubWFwKChfLCBpKSA9PiBCLm1hcCgoeCkgPT4geFtpXSkpOyAvLyB0cmFuc3Bvc2UgQlxuICAgIGxldCBwcm9kdWN0ID0gQS5tYXAoKHJvdykgPT5cbiAgICAgICAgQl9jb2xzLm1hcCgoY29sKSA9PiB7XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocm93KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2wucmVkdWNlKChhLCBjKSA9PiBhICsgYyAqIHJvdywgMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByb3cucmVkdWNlKChhLCBjLCBpKSA9PiBhICsgYyAqIChjb2xbaV0gfHwgMCksIDApO1xuICAgICAgICB9KVxuICAgICk7XG5cbiAgICBpZiAobSA9PT0gMSkge1xuICAgICAgICBwcm9kdWN0ID0gcHJvZHVjdFswXTsgLy8gQXZvaWQgW1thLCBiLCBjLCAuLi5dXVxuICAgIH1cblxuICAgIGlmIChwID09PSAxKSB7XG4gICAgICAgIHJldHVybiBwcm9kdWN0Lm1hcCgoeCkgPT4geFswXSk7IC8vIEF2b2lkIFtbYV0sIFtiXSwgW2NdLCAuLi5dXVxuICAgIH1cblxuICAgIHJldHVybiBwcm9kdWN0O1xufVxuIiwiLy8gc29tZSBwcmUtZGVmaW5lZCBjb2xvciBzY2FsZXM6XG5pbXBvcnQgY2hyb21hIGZyb20gJy4uL2Nocm9tYS5qcyc7XG5pbXBvcnQgJy4uL2lvL2hzbC9pbmRleC5qcyc7XG5pbXBvcnQgc2NhbGUgZnJvbSAnLi4vZ2VuZXJhdG9yL3NjYWxlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvb2woKSB7XG4gICAgICAgIHJldHVybiBzY2FsZShbY2hyb21hLmhzbCgxODAsIDEsIDAuOSksIGNocm9tYS5oc2woMjUwLCAwLjcsIDAuNCldKTtcbiAgICB9LFxuICAgIGhvdCgpIHtcbiAgICAgICAgcmV0dXJuIHNjYWxlKFsnIzAwMCcsICcjZjAwJywgJyNmZjAnLCAnI2ZmZiddLCBbMCwgMC4yNSwgMC43NSwgMV0pLm1vZGUoXG4gICAgICAgICAgICAncmdiJ1xuICAgICAgICApO1xuICAgIH1cbn07XG4iLCIvLyBwb3J0ZWQgZnJvbSBqUXVlcnkncyAkLnR5cGVcbmNvbnN0IGNsYXNzVG9UeXBlID0ge307XG5mb3IgKGxldCBuYW1lIG9mIFtcbiAgICAnQm9vbGVhbicsXG4gICAgJ051bWJlcicsXG4gICAgJ1N0cmluZycsXG4gICAgJ0Z1bmN0aW9uJyxcbiAgICAnQXJyYXknLFxuICAgICdEYXRlJyxcbiAgICAnUmVnRXhwJyxcbiAgICAnVW5kZWZpbmVkJyxcbiAgICAnTnVsbCdcbl0pIHtcbiAgICBjbGFzc1RvVHlwZVtgW29iamVjdCAke25hbWV9XWBdID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBjbGFzc1RvVHlwZVtPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKV0gfHwgJ29iamVjdCc7XG59XG4iLCJpbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCAoYXJncywga2V5T3JkZXIgPSBudWxsKSA9PiB7XG4gICAgLy8gaWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIDMgYXJndW1lbnRzLCB3ZSByZXR1cm4gdGhlIGFyZ3VtZW50c1xuICAgIGlmIChhcmdzLmxlbmd0aCA+PSAzKSByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncyk7XG4gICAgLy8gd2l0aCBsZXNzIHRoYW4gMyBhcmdzIHdlIGNoZWNrIGlmIGZpcnN0IGFyZyBpcyBvYmplY3RcbiAgICAvLyBhbmQgdXNlIHRoZSBrZXlPcmRlciBzdHJpbmcgdG8gZXh0cmFjdCBhbmQgc29ydCBwcm9wZXJ0aWVzXG4gICAgaWYgKHR5cGUoYXJnc1swXSkgPT0gJ29iamVjdCcgJiYga2V5T3JkZXIpIHtcbiAgICAgICAgcmV0dXJuIGtleU9yZGVyXG4gICAgICAgICAgICAuc3BsaXQoJycpXG4gICAgICAgICAgICAuZmlsdGVyKChrKSA9PiBhcmdzWzBdW2tdICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAubWFwKChrKSA9PiBhcmdzWzBdW2tdKTtcbiAgICB9XG4gICAgLy8gb3RoZXJ3aXNlIHdlIGp1c3QgcmV0dXJuIHRoZSBmaXJzdCBhcmd1bWVudFxuICAgIC8vICh3aGljaCB3ZSBzdXBwb3NlIGlzIGFuIGFycmF5IG9mIGFyZ3MpXG4gICAgcmV0dXJuIGFyZ3NbMF0uc2xpY2UoMCk7XG59O1xuIiwiaW1wb3J0IENvbG9yIGZyb20gJy4uL0NvbG9yLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgKC4uLmFyZ3MpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBuZXcgQ29sb3IoLi4uYXJncyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuIiwiLy8gdGhpcyBnZXRzIHVwZGF0ZWQgYXV0b21hdGljYWxseVxuZXhwb3J0IGNvbnN0IHZlcnNpb24gPSAnMy4xLjEnO1xuIiwiaW1wb3J0IGNocm9tYSBmcm9tIFwiY2hyb21hLWpzXCI7XG5pbXBvcnQgKiBhcyB0aGVtZVN0b3JlIGZyb20gJy4uL3V0aWxzL3RoZW1lcy1zdG9yZSc7XG5pbXBvcnQgeyByZXNvbHZlR2xvYmFsVG9rZW5WYWx1ZSB9IGZyb20gXCIuLi91dGlscy90b2tlbi1yZWZlcmVuY2VzXCI7XG5pbXBvcnQgeyBkZWZhdWx0QWNjZW50SFVFcywgc3lzdGVtQWNjZW50TGlzdCB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFjY2VudFJhbXAodGhlbWUsIHBhcmFtcykge1xuICAgIGxldCB0ZXh0U2F0dXJhdGlvbkFkanVzdG1lbnRzID0ge307XG4gICAgLy8gaWYgKHBhcmFtcy5jdXN0b21BY2NlbnRUZXh0U2F0dXJhdGlvbiA9PT0gdHJ1ZSkge1xuICAgIC8vICAgICB0ZXh0U2F0dXJhdGlvbkFkanVzdG1lbnRzID0ge1xuICAgIC8vICAgICAgICAgczogcGFyYW1zLmFjY2VudFRleHRTYXR1cmF0aW9uXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgc3dpdGNoICh0aGVtZSkge1xuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFwiMTAwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCIkdmFsdWVcIjogXCJyZ2JhKHsyMDB9LCAwLjEyNSlcIixcbiAgICAgICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogYFN1YnRsZSBzZW1pdHJhbnNwYXJlbnQgYWNjZW50YFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCIyMDBcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBcInJnYmEoezIwMH0sIDAuMzMpXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJjb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGBMaWdodCBzZW1pdHJhbnNwYXJlbnQgYWNjZW50YFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCIzMDBcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBcInszMDB9XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJjb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGBOb24gdGV4dHVhbCBlbGVtZW50c2BcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiNDAwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCIkdmFsdWVcIjogXCJ7NDAwfVwiLFxuICAgICAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwiY29sb3JcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBgQmFzZSBiYWNrZ3JvdW5kIGNvbG9yYFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCI1MDBcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBcIns2MDB9XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJjb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGBUZXh0IG9uIGxpZ2h0IHN1cmZhY2VgLFxuICAgICAgICAgICAgICAgICAgICBcImFkanVzdG1lbnRzXCI6IHRleHRTYXR1cmF0aW9uQWRqdXN0bWVudHNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiNjAwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCIkdmFsdWVcIjogXCJ7MTAwfVwiLFxuICAgICAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwiY29sb3JcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBgVGV4dCBvbiBkYXJrIHN1cmZhY2VgLFxuICAgICAgICAgICAgICAgICAgICBcImFkanVzdG1lbnRzXCI6IHRleHRTYXR1cmF0aW9uQWRqdXN0bWVudHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJkYXJrXCI6IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgXCIxMDBcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBcInJnYmEoezIwMH0sIDAuMjApXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJjb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGBTdWJ0bGUgc2VtaXRyYW5zcGFyZW50IGFjY2VudGBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiMjAwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCIkdmFsdWVcIjogXCJyZ2JhKHsyMDB9LCAwLjQ1KVwiLFxuICAgICAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwiY29sb3JcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBgTGlnaHQgc2VtaXRyYW5zcGFyZW50IGFjY2VudGBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiMzAwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCIkdmFsdWVcIjogXCJ7MzAwfVwiLFxuICAgICAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwiY29sb3JcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBgTm9uIHRleHR1YWwgZWxlbWVudHNgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIjQwMFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IFwiezQwMH1cIixcbiAgICAgICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogYEJhc2UgYmFja2dyb3VuZCBjb2xvcmBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiNTAwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCIkdmFsdWVcIjogXCJ7MTAwfVwiLFxuICAgICAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwiY29sb3JcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBgVGV4dCBvbiBsaWdodCBzdXJmYWNlYCxcbiAgICAgICAgICAgICAgICAgICAgXCJhZGp1c3RtZW50c1wiOiB0ZXh0U2F0dXJhdGlvbkFkanVzdG1lbnRzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIjYwMFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IFwiezEwMH1cIixcbiAgICAgICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogYFRleHQgb24gZGFyayBzdXJmYWNlYCxcbiAgICAgICAgICAgICAgICAgICAgXCJhZGp1c3RtZW50c1wiOiB0ZXh0U2F0dXJhdGlvbkFkanVzdG1lbnRzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGdldENvbG9yUGFyYW1zKHRoZW1lLCBwYXJhbXMpIHtcbiAgICBsZXQgY29sb3JQYXJhbXMgPSB7XG4gICAgICAgIHNhdHVyYXRpb246IHBhcmFtcy5hY2NlbnRTYXR1cmF0aW9uLCAvLzAuOSBpcyBkZWZhdWx0IHZhbHVlXG4gICAgICAgIG1pbkx1bWluYW5jZTogcGFyYW1zLmFjY2VudE1pbkx1bWluYW5jZSxcbiAgICAgICAgbWlkTHVtaW5hbmNlOiBwYXJhbXMuYWNjZW50TWlkTHVtaW5hbmNlLFxuICAgICAgICBtYXhMdW1pbmFuY2U6IHBhcmFtcy5hY2NlbnRNYXhMdW1pbmFuY2UsXG4gICAgfTtcbiAgICBpZiAodGhlbWUgPT0gJ2RhcmsnICYmIHRoZW1lU3RvcmUuaXNDdXN0b21EYXJrTW9kZSgpID09PSBmYWxzZSkge1xuICAgICAgICBjb2xvclBhcmFtcy5zYXR1cmF0aW9uID0gcGFyYW1zLmFjY2VudFNhdHVyYXRpb24gKiAwLjg1O1xuICAgICAgICAvLyBjb2xvclBhcmFtcy5tYXhMdW1pbmFuY2UgPSBwYXJhbXMuYWNjZW50TWF4THVtaW5hbmNlICogMC44NTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9yUGFyYW1zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlU3lzdGVtQWNjZW50UGFsZXR0ZSh0aGVtZSwgcGFyYW1zKSB7XG4gICAgY29uc3QgeyBzYXR1cmF0aW9uLCBtaW5MdW1pbmFuY2UsIG1pZEx1bWluYW5jZSwgbWF4THVtaW5hbmNlIH0gPSBnZXRDb2xvclBhcmFtcyh0aGVtZSwgcGFyYW1zKTtcbiAgICBsZXQgYWNjZW50cyA9IHtcbiAgICAgICAgcmVkOiBnZXRBY2NlbnRSYW1wKHRoZW1lLCBwYXJhbXMpLFxuICAgICAgICBhbWJlcjogZ2V0QWNjZW50UmFtcCh0aGVtZSwgcGFyYW1zKSxcbiAgICAgICAgYnJvd246IGdldEFjY2VudFJhbXAodGhlbWUsIHBhcmFtcyksXG4gICAgICAgIGdyZWVuOiBnZXRBY2NlbnRSYW1wKHRoZW1lLCBwYXJhbXMpLFxuICAgICAgICB0ZWFsOiBnZXRBY2NlbnRSYW1wKHRoZW1lLCBwYXJhbXMpLFxuICAgICAgICBibHVlOiBnZXRBY2NlbnRSYW1wKHRoZW1lLCBwYXJhbXMpLFxuICAgICAgICBpbmRpZ286IGdldEFjY2VudFJhbXAodGhlbWUsIHBhcmFtcyksXG4gICAgICAgIHZpb2xldDogZ2V0QWNjZW50UmFtcCh0aGVtZSwgcGFyYW1zKSxcbiAgICAgICAgcHVycGxlOiBnZXRBY2NlbnRSYW1wKHRoZW1lLCBwYXJhbXMpLFxuICAgICAgICBwaW5rOiBnZXRBY2NlbnRSYW1wKHRoZW1lLCBwYXJhbXMpXG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBzY2FsZV0gb2YgT2JqZWN0LmVudHJpZXMoYWNjZW50cykpIHtcbiAgICAgICAgY29uc3QgaHVlID0gcGFyYW1zW25hbWVdO1xuICAgICAgICBjb25zdCBzaGFkZXMgPSBnZXRHbG9iYWxBY2NlbnRSYW1wKGh1ZSwgc2F0dXJhdGlvbiwgbWluTHVtaW5hbmNlLCBtaWRMdW1pbmFuY2UsIG1heEx1bWluYW5jZSk7XG4gICAgICAgIGFjY2VudHNbbmFtZV0gPSByZXNvbHZlUmFtcFZhbHVlcyhzY2FsZSwgc2hhZGVzKTtcbiAgICB9XG4gICAgcmV0dXJuIGFjY2VudHM7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVHbG9iYWxBY2NlbnRQYWxldHRlKHRoZW1lLCBwYXJhbXMpIHtcbiAgICBjb25zdCB7IHNhdHVyYXRpb24sIG1pbkx1bWluYW5jZSwgbWlkTHVtaW5hbmNlLCBtYXhMdW1pbmFuY2UgfSA9IGdldENvbG9yUGFyYW1zKHRoZW1lLCBwYXJhbXMpO1xuICAgIGxldCBhY2NlbnRzID0ge307XG4gICAgc3lzdGVtQWNjZW50TGlzdC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBjb25zdCBodWUgPSBwYXJhbXNbbmFtZV07XG4gICAgICAgIGFjY2VudHNbbmFtZV0gPSBnZXRHbG9iYWxBY2NlbnRSYW1wKGh1ZSwgc2F0dXJhdGlvbiwgbWluTHVtaW5hbmNlLCBtaWRMdW1pbmFuY2UsIG1heEx1bWluYW5jZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjY2VudHM7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0R2xvYmFsQWNjZW50UmFtcChodWUsIHNhdHVyYXRpb24sIG1pbkx1bWluYW5jZSwgbWlkTGltaW5hbmNlLCBtYXhMdW1pbmFuY2UsIHN0ZXBzID0gNykge1xuICAgIGNvbnN0IGtleVNoYWRlcyA9IGdldFJhbmdlT2ZUaHJlZSh7XG4gICAgICAgIGh1ZSxcbiAgICAgICAgc2F0dXJhdGlvbixcbiAgICAgICAgbWluTHVtaW5hbmNlLFxuICAgICAgICBtaWRMaW1pbmFuY2UsXG4gICAgICAgIG1heEx1bWluYW5jZVxuICAgIH0pO1xuICAgIGxldCBjb2xvclJhbXAgPSB7fTtcbiAgICBjb25zdCBzY2FsZSA9IGNocm9tYS5zY2FsZShrZXlTaGFkZXMpLmNvbG9ycyhzdGVwcywgJ2hleCcpO1xuICAgIHNjYWxlLmZvckVhY2goKGNvbG9yLCBpbmRleCkgPT4ge1xuICAgICAgICBjb2xvclJhbXBbYCR7aW5kZXggKyAxfTAwYF0gPSB7XG4gICAgICAgICAgICAkdmFsdWU6IGNvbG9yLFxuICAgICAgICAgICAgJHR5cGU6ICdjb2xvcicsXG4gICAgICAgICAgICBwcml2YXRlOiB0cnVlXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbG9yUmFtcDtcbn1cbmZ1bmN0aW9uIHJlc29sdmVSYW1wVmFsdWVzKHRlbXBsYXRlUmFtcCwgZGljdGlvbmFyeSkge1xuICAgIGxldCBvdXRwdXQgPSB7fTtcbiAgICBPYmplY3QuZW50cmllcyh0ZW1wbGF0ZVJhbXApLmZvckVhY2goKFtzaGFkZU51bWJlciwgdG9rZW5dKSA9PiB7XG4gICAgICAgIHRva2VuLiR2YWx1ZSA9IHJlc29sdmVHbG9iYWxUb2tlblZhbHVlKHRva2VuLiR2YWx1ZSwgZGljdGlvbmFyeSk7XG4gICAgICAgIG91dHB1dFtzaGFkZU51bWJlcl0gPSB0b2tlbjtcbiAgICB9KTtcbiAgICByZXR1cm4gb3V0cHV0O1xufVxuZnVuY3Rpb24gZ2V0UmFuZ2VPZlRocmVlKHsgaHVlLCBzYXR1cmF0aW9uLCBtaW5MdW1pbmFuY2UgPSAwLjEsIG1pZExpbWluYW5jZSA9IDAuMTgsIG1heEx1bWluYW5jZSA9IDAuMjkgfSkge1xuICAgIGxldCBjb2xvcjEgPSBjaHJvbWEuaHNsKGh1ZSAqIDAuOTYsIHNhdHVyYXRpb24gKiAxLCAwLjUpXG4gICAgICAgIC5sdW1pbmFuY2UobWF4THVtaW5hbmNlKTtcbiAgICAvLyB0aGlzIG9uZSBhbHdheXMgNC41IDogMSBjb250cmFzdCByYXRpb1xuICAgIGxldCBjb2xvcjIgPSBjaHJvbWEuaHNsKGh1ZSwgc2F0dXJhdGlvbiAqIDEsIDAuNSlcbiAgICAgICAgLmx1bWluYW5jZShtaWRMaW1pbmFuY2UpO1xuICAgIGxldCBjb2xvcjMgPSBjaHJvbWEuaHNsKGh1ZSAqIDEuMDQsIHNhdHVyYXRpb24gKiAxLCAwLjUpXG4gICAgICAgIC5sdW1pbmFuY2UobWluTHVtaW5hbmNlKTtcbiAgICByZXR1cm4gW2NvbG9yMSwgY29sb3IyLCBjb2xvcjNdO1xufVxuZXhwb3J0IHsgZGVmYXVsdEFjY2VudEhVRXMgYXMgZGVmYXVsdEFjY2VudENvbG9ycyB9O1xuIiwiaW1wb3J0IGNocm9tYSBmcm9tIFwiY2hyb21hLWpzXCI7XG5pbXBvcnQgeyByZW5kZXJDb2xvciB9IGZyb20gXCIuL3N3YXRjaGVzLWdlbmVyYXRvclwiO1xuaW1wb3J0IHsgZmxhdHRlbk9iamVjdCB9IGZyb20gXCIuLi91dGlscy9mbGF0dGVuLW9iamVjdFwiO1xuaW1wb3J0IHsgZGVmYXVsdFNldHRpbmdzIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5mdW5jdGlvbiBnZXRTYXR1cmF0aW9uTW9kaWZpZXIobGlnaHRuZXNzKSB7XG4gICAgLy8gdmlzdWFsIHJlcHJlc2VudGF0aW9uXG4gICAgLy8gaHR0cHM6Ly93d3cuZGVzbW9zLmNvbS9jYWxjdWxhdG9yLzAydWZyZnN1enlcbiAgICBjb25zdCBvZmZzZXQgPSA1MDsgLy8gbGlndGhuZXNzIHJhbmdlIGlzIFswLCAxMDBdLCBmb3Igc2F0dXJhdGlvbiB3ZSBuZWVkIHRvIG9mZnNldCB0aGUgY3VydmUgdG8gbWFrZSBbLTUwLCA1MF0gcmFuZ2UgXG4gICAgY29uc3QgbWFnbml0dWRlID0gNzA7IC8vIHNldHMgaG93IG11Y2ggdG8gbW9kaWZ5LCBoaWdoZXIgdmFsdWVzIG91dHB1dHMgc21hbGxlciBtb2RpZmllclxuICAgIGNvbnN0IHNhdHVyYXRpb25Nb2RpZmllciA9IDEgKyAoTWF0aC5wb3cobGlnaHRuZXNzIC0gb2Zmc2V0LCAyKSAvIG1hZ25pdHVkZSAtIE1hdGgucG93KG9mZnNldCwgMikgLyBtYWduaXR1ZGUpIC8gMTAwO1xuICAgIHJldHVybiBzYXR1cmF0aW9uTW9kaWZpZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOZXV0cmFscyhwYXJhbXMpIHtcbiAgICBjb25zdCBtaW4gPSAwO1xuICAgIGNvbnN0IG1heCA9IDEwMDtcbiAgICBjb25zdCB7IGh1ZSA9IDIwMCwgc2F0dXJhdGlvbiA9IDAuMSwgZGlzdGFuY2UgfSA9IHBhcmFtcyB8fCB7fTtcbiAgICBsZXQgdG9rZW5zID0gZmxhdHRlbk9iamVjdCh7XG4gICAgICAgIFwidGV4dFwiOiB7XG4gICAgICAgICAgICBcImJsYWNrXCI6IHtcbiAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBge2dyZXktJHtwYXJhbXMudGV4dEJsYWNrQnJpZ2h0bmVzcyB8fCBkZWZhdWx0U2V0dGluZ3MudGV4dEJsYWNrQnJpZ2h0bmVzc319YCxcbiAgICAgICAgICAgICAgICBcIiR0eXBlXCI6ICdjb2xvcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIndoaXRlXCI6IHtcbiAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBge2dyZXktJHtwYXJhbXMudGV4dFdoaXRlQnJpZ2h0bmVzcyB8fCBkZWZhdWx0U2V0dGluZ3MudGV4dFdoaXRlQnJpZ2h0bmVzc319YCxcbiAgICAgICAgICAgICAgICBcIiR0eXBlXCI6ICdjb2xvcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGxldCB2YWx1ZSA9IG1pbjtcbiAgICB3aGlsZSAodmFsdWUgPD0gbWF4KSB7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gY2hyb21hLmhzbChodWUsIHNhdHVyYXRpb24gKiBnZXRTYXR1cmF0aW9uTW9kaWZpZXIodmFsdWUpLCB2YWx1ZSAvIDEwMCk7XG4gICAgICAgIHRva2Vuc1tgZ3JleS0ke3ZhbHVlfWBdID0ge1xuICAgICAgICAgICAgJyR2YWx1ZSc6IGNvbG9yLmhleCgpLFxuICAgICAgICAgICAgJyR0eXBlJzogJ2NvbG9yJyxcbiAgICAgICAgICAgICdwcml2YXRlJzogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICB2YWx1ZSsrO1xuICAgIH1cbiAgICB0b2tlbnNbXCJncmV5LTEwMFwiXSA9IHtcbiAgICAgICAgXCIkdmFsdWVcIjogXCIjRkZGRkZGXCIsXG4gICAgICAgICckdHlwZSc6ICdjb2xvcicsXG4gICAgICAgICdwcml2YXRlJzogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJOZXV0cmFscyhjb2xvcnMsIG5hbWUpIHtcbiAgICBjb25zdCBleGlzdGluZ05vZGUgPSBmaWdtYS5jdXJyZW50UGFnZS5maW5kQ2hpbGQoKG5vZGUpID0+IG5vZGUubmFtZS5zdGFydHNXaXRoKCdHbG9iYWwgTmV1dHJhbHMnKSk7XG4gICAgZXhpc3RpbmdOb2RlID09PSBudWxsIHx8IGV4aXN0aW5nTm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXhpc3RpbmdOb2RlLnJlbW92ZSgpO1xuICAgIGxldCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgZnJhbWUubGF5b3V0TW9kZSA9ICdIT1JJWk9OVEFMJztcbiAgICBmcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICBmcmFtZS5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICBmcmFtZS5pdGVtU3BhY2luZyA9IDA7XG4gICAgZnJhbWUubmFtZSA9IG5hbWUgfHwgJ0dsb2JhbCBOZXV0cmFscyc7XG4gICAgZnJhbWUueCA9IDA7XG4gICAgZnJhbWUueSA9IC0xNTY7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgY29sb3JdIG9mIE9iamVjdC5lbnRyaWVzKGNvbG9ycykpIHtcbiAgICAgICAgcmVuZGVyQ29sb3IoZnJhbWUsIG5hbWUsIGNvbG9yLCBjb2xvcnMpO1xuICAgIH1cbiAgICByZXR1cm4gZnJhbWU7XG59XG4iLCJpbXBvcnQgeyBnZW5lcmF0ZUdsb2JhbEFjY2VudFBhbGV0dGUgfSBmcm9tIFwiLi9hY2NlbnQtcGFsZXR0ZS1nZW5lcmF0b3JcIjtcbmltcG9ydCB7IHJlbmRlclNoYWRlcyB9IGZyb20gXCIuL3N3YXRjaGVzLWdlbmVyYXRvclwiO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckFjY2VudHModGhlbWUsIHBhcmFtcywgbmFtZSkge1xuICAgIGNvbnN0IGNvbG9ycyA9IGdlbmVyYXRlR2xvYmFsQWNjZW50UGFsZXR0ZSh0aGVtZSwgcGFyYW1zKTtcbiAgICBjb25zdCBleGlzdGluZ05vZGUgPSBmaWdtYS5jdXJyZW50UGFnZS5maW5kQ2hpbGQoKG5vZGUpID0+IG5vZGUubmFtZSA9PSAobmFtZSB8fCAnQWNjZW50IENvbG91cnMnKSk7XG4gICAgZXhpc3RpbmdOb2RlID09PSBudWxsIHx8IGV4aXN0aW5nTm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXhpc3RpbmdOb2RlLnJlbW92ZSgpO1xuICAgIGxldCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgZnJhbWUubGF5b3V0TW9kZSA9ICdIT1JJWk9OVEFMJztcbiAgICBmcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICBmcmFtZS5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICBmcmFtZS5pdGVtU3BhY2luZyA9IDE2O1xuICAgIGZyYW1lLmZpbGxzID0gW107XG4gICAgZnJhbWUubmFtZSA9IG5hbWUgfHwgJ0FjY2VudCBDb2xvdXJzJztcbiAgICBmcmFtZS54ID0gMDtcbiAgICBmcmFtZS55ID0gMDtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBzaGFkZXNdIG9mIE9iamVjdC5lbnRyaWVzKGNvbG9ycykpIHtcbiAgICAgICAgcmVuZGVyU2hhZGVzKGZyYW1lLCBuYW1lLCBzaGFkZXMsIGNvbG9ycyk7XG4gICAgfVxuICAgIHJldHVybiBmcmFtZTtcbn1cbiIsImltcG9ydCBjaHJvbWEgZnJvbSBcImNocm9tYS1qc1wiO1xuaW1wb3J0IHsgcm91bmRUd29EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMvcm91bmQtZGVjaW1hbHNcIjtcbmltcG9ydCB7IHJlc29sdmVDb2xvclRva2VuVmFsdWUgfSBmcm9tIFwiLi4vY29sb3ItdG9rZW5zXCI7XG5mdW5jdGlvbiBnZXRCb3VuZFZhcmlhYmxlcyhub2RlKSB7XG4gICAgY29uc3QgYm91bmRWYXJpYWJsZXMgPSBPYmplY3QuZW50cmllcyhub2RlLmJvdW5kVmFyaWFibGVzKTtcbiAgICBmb3IgKGNvbnN0IFtwcm9wTmFtZSwgcHJvcFZhbHVlXSBvZiBib3VuZFZhcmlhYmxlcykge1xuICAgICAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXNBcnJheSkge1xuICAgICAgICAgICAgcHJvcFZhbHVlLmZvckVhY2goKGFsaWFzLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc0JvdW5kVmFyaWFibGUoZmlnbWEudmFyaWFibGVzLmdldFZhcmlhYmxlQnlJZChhbGlhcy5pZCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdmFySWQgPSBwcm9wVmFsdWUuaWQ7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhcklkICE9ICdzdHJpbmcnKSB7IC8vIGl0IGlzIFxuICAgICAgICAgICAgICAgIHZhcklkID0gdmFySWQuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9jZXNzQm91bmRWYXJpYWJsZShmaWdtYS52YXJpYWJsZXMuZ2V0VmFyaWFibGVCeUlkKHZhcklkKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBwcm9jZXNzQm91bmRWYXJpYWJsZSh2YXJpYWJsZSkge1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNoYWRlcyhwYXJlbnROb2RlLCBuYW1lLCBzaGFkZXMsIGNvbG9ycykge1xuICAgIGxldCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgZnJhbWUucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKDMyMCwgZnJhbWUuaGVpZ2h0KTtcbiAgICBmcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIGZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgIGZyYW1lLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgIGZyYW1lLm5hbWUgPSBuYW1lO1xuICAgIGZyYW1lLmZpbGxzID0gW107XG4gICAgZ2V0Qm91bmRWYXJpYWJsZXMoZnJhbWUpO1xuICAgIGZvciAoY29uc3QgW3NoYWRlTmFtZSwgY29sb3JdIG9mIE9iamVjdC5lbnRyaWVzKHNoYWRlcykpIHtcbiAgICAgICAgcmVuZGVyQ29sb3IoZnJhbWUsIGBhY2NlbnQvJHtuYW1lfS8ke3NoYWRlTmFtZX1gLCBjb2xvciwgY29sb3JzKTtcbiAgICB9XG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChmcmFtZSk7XG4gICAgcmV0dXJuIHBhcmVudE5vZGU7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ29sb3IocGFyZW50Tm9kZSwgbmFtZSwgY29sb3IsIGNvbG9ycykge1xuICAgIGxldCBmcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgZnJhbWUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICBmcmFtZS5sYXlvdXRBbGlnbiA9ICdTVFJFVENIJztcbiAgICBmcmFtZS5pdGVtU3BhY2luZyA9IDQ7XG4gICAgZnJhbWUubmFtZSA9IG5hbWU7XG4gICAgZnJhbWUudmVydGljYWxQYWRkaW5nID0gMTY7XG4gICAgZnJhbWUuaG9yaXpvbnRhbFBhZGRpbmcgPSAyMDtcbiAgICBjb25zdCB7IHIsIGcsIGIsIGEgfSA9IHJlc29sdmVDb2xvclRva2VuVmFsdWUoY29sb3IsIGNvbG9ycyk7XG4gICAgY29uc3QgY2hyb21hQ29sb3IgPSBjaHJvbWEuZ2wociwgZywgYiwgYSk7XG4gICAgZnJhbWUuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByLCBnLCBiIH0sIG9wYWNpdHk6IGEgfV07XG4gICAgY29uc3Qgb3BhcXVlQ29sb3IgPSBjaHJvbWEuZ2wociwgZywgYiwgMSk7XG4gICAgY29uc3QgbWl4ZWRDb2xvciA9IGNocm9tYS5taXgob3BhcXVlQ29sb3IsIFwid2hpdGVcIiwgMSAtIGEpO1xuICAgIGNvbnNvbGUubG9nKG5hbWUsIG1peGVkQ29sb3IucmdiYSgpKTtcbiAgICBsZXQgY29udHJhc3QgPSBbXG4gICAgICAgIGNocm9tYS5jb250cmFzdChcIndoaXRlXCIsIG1peGVkQ29sb3IpLFxuICAgICAgICBjaHJvbWEuY29udHJhc3QoY2hyb21hLmhzbCgwLCAwLCAwLjIyKSwgbWl4ZWRDb2xvcilcbiAgICBdO1xuICAgIGxldCBuYW1lUm93ID0gZ2V0Um93KGZyYW1lLCBjb250cmFzdFswXSA+IDIuNSk7XG4gICAgbGV0IGNvbnRyYXN0V2hpdGVSb3cgPSBnZXRSb3coZnJhbWUsIGNvbnRyYXN0WzBdID4gMi41KTtcbiAgICBsZXQgY29udHJhc3RCbGFja1JvdyA9IGdldFJvdyhmcmFtZSwgY29udHJhc3RbMF0gPiAyLjUpO1xuICAgIGxldCBoc2xSb3cgPSBnZXRSb3coZnJhbWUsIGNvbnRyYXN0WzBdID4gMi41KTtcbiAgICBsZXQgbHVtaW5hbmNlUm93ID0gZ2V0Um93KGZyYW1lLCBjb250cmFzdFswXSA+IDIuNSk7XG4gICAgLy8gYXdhaXQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgbmFtZVJvdy5yb290Lm5hbWUgPSBcIm5hbWVSb3dcIjtcbiAgICBjb250cmFzdFdoaXRlUm93LnJvb3QubmFtZSA9IFwiY29udHJhc3RXaGl0ZVJvd1wiO1xuICAgIGNvbnRyYXN0QmxhY2tSb3cucm9vdC5uYW1lID0gXCJjb250cmFzdEJsYWNrUm93XCI7XG4gICAgaHNsUm93LnJvb3QubmFtZSA9IFwiaHNsUm93XCI7XG4gICAgbHVtaW5hbmNlUm93LnJvb3QubmFtZSA9IFwibHVtaW5hbmNlUm93XCI7XG4gICAgY29udHJhc3RXaGl0ZVJvdy5sYWJlbE5vZGUuY2hhcmFjdGVycyA9IFwidnMgd2hpdGVcIjtcbiAgICBjb250cmFzdFdoaXRlUm93LnZhbHVlTm9kZS5jaGFyYWN0ZXJzID0gYCR7cm91bmRUd29EaWdpdHMoY29udHJhc3RbMF0pfWA7XG4gICAgY29udHJhc3RCbGFja1Jvdy5sYWJlbE5vZGUuY2hhcmFjdGVycyA9IFwidnMgYmxhY2tcIjtcbiAgICBjb250cmFzdEJsYWNrUm93LnZhbHVlTm9kZS5jaGFyYWN0ZXJzID0gYCR7cm91bmRUd29EaWdpdHMoY29udHJhc3RbMV0pfWA7XG4gICAgbmFtZVJvdy5sYWJlbE5vZGUuY2hhcmFjdGVycyA9IGB7Z2xvYmFsLiR7bmFtZS5yZXBsYWNlKC9cXC8vZywgXCIuXCIpfX1gO1xuICAgIG5hbWVSb3cudmFsdWVOb2RlLmNoYXJhY3RlcnMgPSBgIGA7XG4gICAgaHNsUm93LmxhYmVsTm9kZS5jaGFyYWN0ZXJzID0gXCJoc2xcIjtcbiAgICBoc2xSb3cudmFsdWVOb2RlLmNoYXJhY3RlcnMgPSBgJHtvdXRwdXRIU0woY2hyb21hQ29sb3IpLmpvaW4oXCIgXCIpfWA7XG4gICAgbHVtaW5hbmNlUm93LmxhYmVsTm9kZS5jaGFyYWN0ZXJzID0gXCJsdW1pbmFuY2VcIjtcbiAgICBsdW1pbmFuY2VSb3cudmFsdWVOb2RlLmNoYXJhY3RlcnMgPSBgJHtNYXRoLnJvdW5kKHJvdW5kVHdvRGlnaXRzKGNocm9tYUNvbG9yLmx1bWluYW5jZSgpKSAqIDEwMCl9JWA7XG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChmcmFtZSk7XG4gICAgZnJhbWUucmVzaXplKDI0MCwgZnJhbWUuaGVpZ2h0KTtcbiAgICByZXR1cm4gcGFyZW50Tm9kZTtcbn1cbmZ1bmN0aW9uIGdldFJvdyhwYXJlbnROb2RlLCBpc1doaXRlKSB7XG4gICAgY29uc3QgdGV4dE5vZGUgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgY29uc3QgZnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGZyYW1lLm5hbWUgPSBcInJvd1wiO1xuICAgIGZyYW1lLmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjtcbiAgICBmcmFtZS5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgIGZyYW1lLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiRklYRURcIjtcbiAgICBmcmFtZS5wcmltYXJ5QXhpc0FsaWduSXRlbXMgPSBcIlNQQUNFX0JFVFdFRU5cIjtcbiAgICBmcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICBmcmFtZS5maWxscyA9IFtdO1xuICAgIHRleHROb2RlLm5hbWUgPSBcImxhYmVsXCI7XG4gICAgY29uc3QgdmFsdWVMYWJlbCA9IHRleHROb2RlLmNsb25lKCk7XG4gICAgdmFsdWVMYWJlbC5uYW1lID0gXCJ2YWx1ZS1sYWJlbFwiO1xuICAgIGZyYW1lLmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICBmcmFtZS5hcHBlbmRDaGlsZCh2YWx1ZUxhYmVsKTtcbiAgICBjb25zdCBjb2xvciA9IGlzV2hpdGUgPyB7XG4gICAgICAgIHI6IDEsIGc6IDEsIGI6IDFcbiAgICB9IDoge1xuICAgICAgICByOiAwLCBnOiAwLCBiOiAwXG4gICAgfTtcbiAgICB0ZXh0Tm9kZS5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yLCBvcGFjaXR5OiAwLjggfV07XG4gICAgdmFsdWVMYWJlbC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yIH1dO1xuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGxhYmVsTm9kZTogdGV4dE5vZGUsIHZhbHVlTm9kZTogdmFsdWVMYWJlbCwgcm9vdDogZnJhbWVcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIG91dHB1dEhTTChjaHJvbWFDb2xvcikge1xuICAgIGNvbnN0IFtoLCBzLCBsXSA9IGNocm9tYUNvbG9yLmhzbCgpO1xuICAgIHJldHVybiBbYCR7TWF0aC5yb3VuZChoKSB8fCAwfWRlZ2AsIGAke01hdGgucm91bmQocm91bmRUd29EaWdpdHMocykgKiAxMDApfSVgLCBgJHtNYXRoLnJvdW5kKHJvdW5kVHdvRGlnaXRzKGwpICogMTAwKX0lYF07XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBjb21wb25lbnRUb2tlbnMgZnJvbSAnLi90b2tlbnMvY29sb3JzL2NvbXBvbmVudHMvY29tcG9uZW50LXRva2Vucy5qc29uJztcbmltcG9ydCBwYWxldHRlTGlnaHRDb21tb24gZnJvbSAnLi90b2tlbnMvY29sb3JzL3N5c3RlbS9saWdodC1jb21tb24udG9rZW5zLmpzb24nO1xuaW1wb3J0IHBhbGV0dGVMaWdodFNoYWRvd3MgZnJvbSAnLi90b2tlbnMvY29sb3JzL3N5c3RlbS9saWdodC1zaGFkb3ctY29sb3JzLnRva2Vucy5qc29uJztcbmltcG9ydCBwYWxldHRlTGlnaHQyIGZyb20gJy4vdG9rZW5zL2NvbG9ycy9zeXN0ZW0vbGlnaHQtMi50b2tlbnMuanNvbic7XG5pbXBvcnQgcGFsZXR0ZUxpZ2h0MyBmcm9tICcuL3Rva2Vucy9jb2xvcnMvc3lzdGVtL2xpZ2h0LTMudG9rZW5zLmpzb24nO1xuaW1wb3J0IHBhbGV0dGVMaWdodDQgZnJvbSAnLi90b2tlbnMvY29sb3JzL3N5c3RlbS9saWdodC00LnRva2Vucy5qc29uJztcbmltcG9ydCBwYWxldHRlVGV4dExpZ2h0IGZyb20gJy4vdG9rZW5zL2NvbG9ycy9zeXN0ZW0vbGlnaHQtdGV4dC1iYXNlLmpzb24nO1xuaW1wb3J0IHBhbGV0dGVEYXJrQ29tbW9uIGZyb20gJy4vdG9rZW5zL2NvbG9ycy9zeXN0ZW0vZGFyay1jb21tb24udG9rZW5zLmpzb24nO1xuaW1wb3J0IHBhbGV0dGVEYXJrU2hhZG93cyBmcm9tICcuL3Rva2Vucy9jb2xvcnMvc3lzdGVtL2Rhcmstc2hhZG93LWNvbG9ycy50b2tlbnMuanNvbic7XG5pbXBvcnQgcGFsZXR0ZURhcmtFbGV2YXRlZDIgZnJvbSAnLi90b2tlbnMvY29sb3JzL3N5c3RlbS9kYXJrLWVsZXZhdGVkLTIudG9rZW5zLmpzb24nO1xuaW1wb3J0IHBhbGV0dGVEYXJrRWxldmF0ZWQzIGZyb20gJy4vdG9rZW5zL2NvbG9ycy9zeXN0ZW0vZGFyay1lbGV2YXRlZC0zLnRva2Vucy5qc29uJztcbmltcG9ydCBwYWxldHRlRGFya0VsZXZhdGVkNCBmcm9tICcuL3Rva2Vucy9jb2xvcnMvc3lzdGVtL2RhcmstZWxldmF0ZWQtNC50b2tlbnMuanNvbic7XG5pbXBvcnQgcGFsZXR0ZURhcmtCYXNlMiBmcm9tICcuL3Rva2Vucy9jb2xvcnMvc3lzdGVtL2RhcmstYmFzZS0yLnRva2Vucy5qc29uJztcbmltcG9ydCBwYWxldHRlRGFya0Jhc2UzIGZyb20gJy4vdG9rZW5zL2NvbG9ycy9zeXN0ZW0vZGFyay1iYXNlLTMudG9rZW5zLmpzb24nO1xuaW1wb3J0IHBhbGV0dGVEYXJrQmFzZTQgZnJvbSAnLi90b2tlbnMvY29sb3JzL3N5c3RlbS9kYXJrLWJhc2UtNC50b2tlbnMuanNvbic7XG5pbXBvcnQgcGFsZXR0ZVRleHREYXJrIGZyb20gJy4vdG9rZW5zL2NvbG9ycy9zeXN0ZW0vZGFyay10ZXh0LWJhc2UuanNvbic7XG5pbXBvcnQgeyBmbGF0dGVuT2JqZWN0IH0gZnJvbSAnLi91dGlscy9mbGF0dGVuLW9iamVjdCc7XG5pbXBvcnQgeyBnZW5lcmF0ZVN5c3RlbUFjY2VudFBhbGV0dGUgfSBmcm9tICcuL2NvbG9yLWdlbmVyYXRvcnMvYWNjZW50LXBhbGV0dGUtZ2VuZXJhdG9yJztcbmltcG9ydCB7IGdlbmVyYXRlTmV1dHJhbHMgfSBmcm9tICcuL2NvbG9yLWdlbmVyYXRvcnMvbmV1dHJhbHMtcGFsZXR0ZS1nZW5lcmF0b3InO1xuaW1wb3J0IHsgY29sbGVjdGlvbk5hbWVzLCBkZWZhdWx0U2VtYW50aWNBY2NlbnRzLCBkZWZhdWx0U2V0dGluZ3MgfSBmcm9tICcuL2RlZmF1bHRzJztcbmltcG9ydCB7IF9jbG9uZSB9IGZyb20gJy4vdXRpbHMvY2xvbmUnO1xuaW1wb3J0IHsgYWRkVG9HbG9iYWxUb2tlbnNEaWN0aW9uYXJ5LCBmaW5kVG9rZW5SZWZlcmVuY2VzLCBmaW5kVmFyaWFibGVBbGlhcywgZ2V0R2xvYmFsVG9rZW5zRGljdGlvbmFyeSwgZ2V0UmVmZXJlbmNlTmFtZSwgcmVzb2x2ZUdsb2JhbFRva2VuVmFsdWUgfSBmcm9tICcuL3V0aWxzL3Rva2VuLXJlZmVyZW5jZXMnO1xuaW1wb3J0IHsgY29udmVydEZpZ21hQ29sb3JUb1JnYiwgcGFyc2VDb2xvclZhbHVlIH0gZnJvbSAnLi91dGlscy9maWdtYS1jb2xvcnMnO1xuaW1wb3J0IHsgaW1wb3J0VmFyaWFibGVzIH0gZnJvbSAnLi9pbXBvcnQtdG9rZW5zJztcbmltcG9ydCB7IF9tZXJnZURlZXAgfSBmcm9tICcuL3V0aWxzL21lcmdlLWRlZXAnO1xuaW1wb3J0IHsgZmlnbWFBbGlhc1RvRGVzaWduVG9rZW5zLCBnZXREZWZhdWx0VmFyaWFibGVWYWx1ZSB9IGZyb20gJy4vdXRpbHMvZmlnbWEtdmFyaWFibGVzJztcbmltcG9ydCB7IGdldENvbG9yVG9rZW5zU29ydEZuIH0gZnJvbSAnLi91dGlscy9zb3J0LXRva2Vucyc7XG4vLyBjb25zdCBfbWVyZ2UgPSByZXF1aXJlKCdsb2Rhc2gubWVyZ2UnKVxubGV0IEdsb2JhbE5ldXRyYWxzO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbWFudGljQWNjZW50U2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRTZW1hbnRpY0FjY2VudHM7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0R2xvYmFsTmV1dHJhbHMocGFyYW1zKSB7XG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgICBHbG9iYWxOZXV0cmFscyA9IGdlbmVyYXRlTmV1dHJhbHMocGFyYW1zKTtcbiAgICB9XG4gICAgcmV0dXJuIEdsb2JhbE5ldXRyYWxzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXBvbmVudENvbG9ycygpIHtcbiAgICByZXR1cm4gZmxhdHRlbk9iamVjdChjb21wb25lbnRUb2tlbnMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEJyYW5kQ29sb3JzKG5hbWUsIGFjY2VudFNoYWRlcywgZmxhdCkge1xuICAgIGNvbnN0IHBhbGV0dGUgPSB7XG4gICAgICAgIHByaW1hcnk6IGdlbmVyYXRlU2VtYW50aWNTaGFkZXMobmFtZSwgYWNjZW50U2hhZGVzKVxuICAgIH07XG4gICAgcmV0dXJuIGZsYXQgPyBmbGF0dGVuT2JqZWN0KHBhbGV0dGUpIDogcGFsZXR0ZTtcbn1cbmZ1bmN0aW9uIGdldFRleHRPbkFjY2VudENvbG9ycyhmb3JtRGF0YSkge1xuICAgIGNvbnN0IHByaW1hcnlIVUUgPSBmb3JtRGF0YVtmb3JtRGF0YS5wcmltYXJ5XTtcbiAgICAvLyBjb25zdCBzeXN0ZW1BY2NlbnRDb2xvciA9IGNocm9tYS5oc2wocHJpbWFyeUhVRSwgZm9ybURhdGEuYWNjZW50U2F0dXJhdGlvbiwgMC41KS5sdW1pbmFuY2UoZm9ybURhdGEuYWNjZW50TWlkTHVtaW5hbmNlKTtcbiAgICAvLyBjb25zdCB3aGl0ZVRleHRDb2xvciA9IGNocm9tYS5oc2woZm9ybURhdGEuaHVlLCBmb3JtRGF0YS5zYXR1cmF0aW9uLCBmb3JtRGF0YS50ZXh0V2hpdGVCcmlnaHRuZXNzIC8gMTAwKTtcbiAgICAvLyBjb25zdCBibGFja1RleHRDb2xvciA9IGNocm9tYS5oc2woZm9ybURhdGEuaHVlLCBmb3JtRGF0YS5zYXR1cmF0aW9uLCBmb3JtRGF0YS50ZXh0QmxhY2tCcmlnaHRuZXNzIC8gMTAwKTtcbiAgICAvLyBjb25zdCB3aGl0ZVRleHRDb250cmFzdCA9IHJvdW5kVHdvRGlnaXRzKGNocm9tYS5jb250cmFzdCh3aGl0ZVRleHRDb2xvciwgc3lzdGVtQWNjZW50Q29sb3IpKTtcbiAgICAvLyBjb25zdCBibGFja1RleHRDb250cmFzdCA9IHJvdW5kVHdvRGlnaXRzKGNocm9tYS5jb250cmFzdChibGFja1RleHRDb2xvciwgc3lzdGVtQWNjZW50Q29sb3IpKTtcbiAgICBsZXQgZmluYWxDb2xvciA9IGZvcm1EYXRhLmFjY2VudFRleHRDb2xvcjtcbiAgICBpZiAoZmluYWxDb2xvciA9PSAnYXV0bycpIHtcbiAgICAgICAgZmluYWxDb2xvciA9IGZvcm1EYXRhLmFjY2VudE1pZEx1bWluYW5jZSA+IDAuMyA/ICdibGFjaycgOiAnd2hpdGUnO1xuICAgIH1cbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgXCJ0ZXh0XCI6IHtcbiAgICAgICAgICAgIFwiYWNjZW50XCI6IHtcbiAgICAgICAgICAgICAgICBcIjQwMFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IGByZ2JhKHt0ZXh0LiR7ZmluYWxDb2xvcn19LCAwLjQ1KWAsXG4gICAgICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJjb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICBcImFkanVzdG1lbnRzXCI6IGZpbmFsQ29sb3IgPT0gJ2JsYWNrJyA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaFwiOiBwcmltYXJ5SFVFLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzXCI6IFwiMC45XCJcbiAgICAgICAgICAgICAgICAgICAgfSA6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiNTAwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCIkdmFsdWVcIjogYHJnYmEoe3RleHQuJHtmaW5hbENvbG9yfX0sIDAuNylgLFxuICAgICAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwiY29sb3JcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhZGp1c3RtZW50c1wiOiBmaW5hbENvbG9yID09ICdibGFjaycgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhcIjogcHJpbWFyeUhVRSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic1wiOiBcIjAuOVwiXG4gICAgICAgICAgICAgICAgICAgIH0gOiBudWxsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIjYwMFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IGB7dGV4dC4ke2ZpbmFsQ29sb3J9fWAsXG4gICAgICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJjb2xvclwiLFxuICAgICAgICAgICAgICAgICAgICBcImFkanVzdG1lbnRzXCI6IGZpbmFsQ29sb3IgPT0gJ2JsYWNrJyA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaFwiOiBwcmltYXJ5SFVFLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzXCI6IFwiMC45XCJcbiAgICAgICAgICAgICAgICAgICAgfSA6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbn1cbmZ1bmN0aW9uIHByb2Nlc3NDb21tb25Db2xvcnMoZm9ybURhdGEsIHRva2Vucykge1xuICAgIGxldCB0ZXh0U2F0dXJhdGlvbkFkanVzdG1lbnRzID0ge307XG4gICAgaWYgKGZvcm1EYXRhLmN1c3RvbUFjY2VudFRleHRTYXR1cmF0aW9uID09PSB0cnVlKSB7XG4gICAgICAgIHRleHRTYXR1cmF0aW9uQWRqdXN0bWVudHMgPSB7XG4gICAgICAgICAgICBzOiBmb3JtRGF0YS5hY2NlbnRUZXh0U2F0dXJhdGlvblxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBhZGp1c3RtZW50cyA9IHtcbiAgICAgICAgXCJ0ZXh0XCI6IHtcbiAgICAgICAgICAgIFwiYmFzZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjoge1xuICAgICAgICAgICAgICAgICAgICBcImFkanVzdG1lbnRzXCI6IHRleHRTYXR1cmF0aW9uQWRqdXN0bWVudHNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiaW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiYWRqdXN0bWVudHNcIjogdGV4dFNhdHVyYXRpb25BZGp1c3RtZW50c1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJhZGp1c3RtZW50c1wiOiB0ZXh0U2F0dXJhdGlvbkFkanVzdG1lbnRzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIndhcm5pbmdcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImFkanVzdG1lbnRzXCI6IHRleHRTYXR1cmF0aW9uQWRqdXN0bWVudHNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGFuZ2VyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJhZGp1c3RtZW50c1wiOiB0ZXh0U2F0dXJhdGlvbkFkanVzdG1lbnRzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY29udHJhc3RcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJhZGp1c3RtZW50c1wiOiB0ZXh0U2F0dXJhdGlvbkFkanVzdG1lbnRzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImluZm9cIjoge1xuICAgICAgICAgICAgICAgICAgICBcImFkanVzdG1lbnRzXCI6IHRleHRTYXR1cmF0aW9uQWRqdXN0bWVudHNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiYWRqdXN0bWVudHNcIjogdGV4dFNhdHVyYXRpb25BZGp1c3RtZW50c1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJ3YXJuaW5nXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJhZGp1c3RtZW50c1wiOiB0ZXh0U2F0dXJhdGlvbkFkanVzdG1lbnRzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImRhbmdlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiYWRqdXN0bWVudHNcIjogdGV4dFNhdHVyYXRpb25BZGp1c3RtZW50c1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgdG9rZW5zID0gX2Nsb25lKHRva2Vucyk7XG4gICAgcmV0dXJuIF9tZXJnZURlZXAodG9rZW5zLCBhZGp1c3RtZW50cyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VGhlbWVDb2xvcnModGhlbWUsIGZvcm1EYXRhKSB7XG4gICAgbGV0IGxpZ2h0Q29tbW9uID0gcHJvY2Vzc0NvbW1vbkNvbG9ycyhmb3JtRGF0YSwgcGFsZXR0ZUxpZ2h0Q29tbW9uKTtcbiAgICBsZXQgZGFya0NvbW1vbiA9IHByb2Nlc3NDb21tb25Db2xvcnMoZm9ybURhdGEsIHBhbGV0dGVEYXJrQ29tbW9uKTtcbiAgICBsZXQgcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgbm9ybWFsaXplRm9ybURhdGEoZm9ybURhdGEpKTtcbiAgICBnZXRHbG9iYWxOZXV0cmFscyhmb3JtRGF0YSk7XG4gICAgY29uc3Qgc2VtYW50aWNBY2NlbnRzID0ge1xuICAgICAgICBwcmltYXJ5OiBwYXJhbXMucHJpbWFyeSxcbiAgICAgICAgaW5mbzogcGFyYW1zLmluZm8sXG4gICAgICAgIHN1Y2Nlc3M6IHBhcmFtcy5zdWNjZXNzLFxuICAgICAgICB3YXJuaW5nOiBwYXJhbXMud2FybmluZyxcbiAgICAgICAgZGFuZ2VyOiBwYXJhbXMuZGFuZ2VyLFxuICAgIH07XG4gICAgbGV0IGxpZ2h0QWNjZW50VG9rZW5zID0gZ2VuZXJhdGVTeXN0ZW1BY2NlbnRQYWxldHRlKCdsaWdodCcsIHBhcmFtcyk7XG4gICAgbGV0IGRhcmtBY2NlbnRUb2tlbnMgPSBnZW5lcmF0ZVN5c3RlbUFjY2VudFBhbGV0dGUoJ2RhcmsnLCBwYXJhbXMpO1xuICAgIGNvbnN0IGxpZ2h0U2VtYW50aWNUb2tlbnMgPSBnZW5lcmF0ZVNlbWFudGljUGFsZXR0ZShzZW1hbnRpY0FjY2VudHMsIGxpZ2h0QWNjZW50VG9rZW5zKTtcbiAgICBjb25zdCBkYXJrU2VtYW50aWNUb2tlbnMgPSBnZW5lcmF0ZVNlbWFudGljUGFsZXR0ZShzZW1hbnRpY0FjY2VudHMsIGRhcmtBY2NlbnRUb2tlbnMpO1xuICAgIGNvbnN0IGxpZ2h0Q29tbW9uVG9rZW5zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBhY2NlbnQ6IGxpZ2h0QWNjZW50VG9rZW5zIH0sIGxpZ2h0Q29tbW9uKSwgZ2V0U2hhZG93Q29sb3JUb2tlbnMoJ2xpZ2h0JywgZm9ybURhdGEpKSwgbGlnaHRTZW1hbnRpY1Rva2Vucyk7XG4gICAgY29uc3QgZGFya0NvbW1vblRva2VucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHsgYWNjZW50OiBkYXJrQWNjZW50VG9rZW5zIH0sIGRhcmtDb21tb24pLCBnZXRTaGFkb3dDb2xvclRva2VucygnZGFyaycsIGZvcm1EYXRhKSksIGRhcmtTZW1hbnRpY1Rva2Vucyk7XG4gICAgbGV0IGNvbW1vbkNvbG9ycyA9IHt9O1xuICAgIGxldCB0aGVtZUNvbG9ycyA9IHt9O1xuICAgIGlmICh0aGVtZSA9PT0gXCJsaWdodEJhc2VcIikge1xuICAgICAgICBjb21tb25Db2xvcnMgPSBmbGF0dGVuT2JqZWN0KGxpZ2h0Q29tbW9uVG9rZW5zKTtcbiAgICAgICAgaWYgKHBhcmFtcy5kaXN0YW5jZSA9PT0gMC4wMikge1xuICAgICAgICAgICAgdGhlbWVDb2xvcnMgPSBmbGF0dGVuT2JqZWN0KHBhbGV0dGVMaWdodDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMuZGlzdGFuY2UgPT09IDAuMDMpIHtcbiAgICAgICAgICAgIHRoZW1lQ29sb3JzID0gZmxhdHRlbk9iamVjdChwYWxldHRlTGlnaHQzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLmRpc3RhbmNlID09PSAwLjA0KSB7XG4gICAgICAgICAgICB0aGVtZUNvbG9ycyA9IGZsYXR0ZW5PYmplY3QocGFsZXR0ZUxpZ2h0NCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoZW1lID09PSBcImRhcmtFbGV2YXRlZFwiKSB7XG4gICAgICAgIGNvbW1vbkNvbG9ycyA9IGZsYXR0ZW5PYmplY3QoZGFya0NvbW1vblRva2Vucyk7XG4gICAgICAgIGlmIChwYXJhbXMuZGlzdGFuY2UgPT09IDAuMDIpIHtcbiAgICAgICAgICAgIHRoZW1lQ29sb3JzID0gZmxhdHRlbk9iamVjdChwYWxldHRlRGFya0VsZXZhdGVkMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5kaXN0YW5jZSA9PT0gMC4wMykge1xuICAgICAgICAgICAgdGhlbWVDb2xvcnMgPSBmbGF0dGVuT2JqZWN0KHBhbGV0dGVEYXJrRWxldmF0ZWQzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLmRpc3RhbmNlID09PSAwLjA0KSB7XG4gICAgICAgICAgICB0aGVtZUNvbG9ycyA9IGZsYXR0ZW5PYmplY3QocGFsZXR0ZURhcmtFbGV2YXRlZDQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0aGVtZSA9PT0gXCJkYXJrQmFzZVwiKSB7XG4gICAgICAgIGNvbW1vbkNvbG9ycyA9IGZsYXR0ZW5PYmplY3QoZGFya0NvbW1vblRva2Vucyk7XG4gICAgICAgIGlmIChwYXJhbXMuZGlzdGFuY2UgPT09IDAuMDIpIHtcbiAgICAgICAgICAgIHRoZW1lQ29sb3JzID0gZmxhdHRlbk9iamVjdChwYWxldHRlRGFya0Jhc2UyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLmRpc3RhbmNlID09PSAwLjAzKSB7XG4gICAgICAgICAgICB0aGVtZUNvbG9ycyA9IGZsYXR0ZW5PYmplY3QocGFsZXR0ZURhcmtCYXNlMyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5kaXN0YW5jZSA9PT0gMC4wNCkge1xuICAgICAgICAgICAgdGhlbWVDb2xvcnMgPSBmbGF0dGVuT2JqZWN0KHBhbGV0dGVEYXJrQmFzZTQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vbkNvbG9ycyksIHRoZW1lQ29sb3JzKTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlU2VtYW50aWNTaGFkZXMoYWxpYXNOYW1lLCBhY2NlbnRTaGFkZXMpIHtcbiAgICBsZXQgb3V0cHV0ID0ge307XG4gICAgZm9yICh2YXIgYSA9IDEsIGIgPSA3OyBhIDwgYjsgYSsrKSB7XG4gICAgICAgIG91dHB1dFtgJHthfTAwYF0gPSB7XG4gICAgICAgICAgICBcIiR2YWx1ZVwiOiBge2FjY2VudC4ke2FsaWFzTmFtZX0uJHthfTAwfWAsXG4gICAgICAgICAgICBcIiR0eXBlXCI6IFwiY29sb3JcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogYWNjZW50U2hhZGVzW2Ake2F9MDBgXS5kZXNjcmlwdGlvblxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVTZW1hbnRpY1BhbGV0dGUoYWNjZW50cywgcGFsZXR0ZSkge1xuICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3QuZW50cmllcyhhY2NlbnRzKS5mb3JFYWNoKChbbmFtZSwgYWxpYXNdKSA9PiB7XG4gICAgICAgIHJlc3VsdFtuYW1lXSA9IGdlbmVyYXRlU2VtYW50aWNTaGFkZXMoYWxpYXMsIHBhbGV0dGVbYWxpYXNdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbm9ybWFsaXplRm9ybURhdGEoZm9ybURhdGEpIHtcbiAgICBsZXQgbm9ybWFsaXplZERhdGEgPSBfY2xvbmUoZm9ybURhdGEpO1xuICAgIGNvbnN0IG51bWJlclR5cGVzID0gW1xuICAgICAgICAnaHVlJyxcbiAgICAgICAgJ3NhdHVyYXRpb24nLFxuICAgICAgICAnZGlzdGFuY2UnLFxuICAgICAgICAncmVkJyxcbiAgICAgICAgJ2FtYmVyJyxcbiAgICAgICAgJ2Jyb3duJyxcbiAgICAgICAgJ2dyZWVuJyxcbiAgICAgICAgJ3RlYWwnLFxuICAgICAgICAnYmx1ZScsXG4gICAgICAgICdpbmRpZ28nLFxuICAgICAgICAndmlvbGV0JyxcbiAgICAgICAgJ3B1cnBsZScsXG4gICAgICAgICdwaW5rJyxcbiAgICAgICAgJ2FjY2VudFNhdHVyYXRpb24nLFxuICAgICAgICAnYWNjZW50TWF4THVtaW5hbmNlJyxcbiAgICAgICAgJ2FjY2VudE1pZEx1bWluYW5jZScsXG4gICAgICAgICdhY2NlbnRNaW5MdW1pbmFuY2UnLFxuICAgICAgICAnYWNjZW50VGV4dFNhdHVyYXRpb24nLFxuICAgICAgICAndGV4dFdoaXRlQnJpZ2h0bmVzcycsXG4gICAgICAgICd0ZXh0QmxhY2tCcmlnaHRuZXNzJyxcbiAgICBdO1xuICAgIG51bWJlclR5cGVzLmZvckVhY2gocCA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgZm9ybURhdGFbcF0gPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIG5vcm1hbGl6ZWREYXRhW3BdID0gcGFyc2VGbG9hdChmb3JtRGF0YVtwXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbm9ybWFsaXplZERhdGE7XG59XG5mdW5jdGlvbiBnZXRDb2xvclZhcmlhYmxlQWxpYXNWYWx1ZSh0b2tlblZhbHVlLCB2YXJpYWJsZUlkLCBtb2RlSWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBmaWdtYVZhcmlhYmxlID0geWllbGQgZmlnbWEudmFyaWFibGVzLmdldFZhcmlhYmxlQnlJZEFzeW5jKHZhcmlhYmxlSWQpO1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBpZiAoZmlnbWFWYXJpYWJsZS5yZXNvbHZlZFR5cGUgIT0gXCJDT0xPUlwiKSB7XG4gICAgICAgICAgICB0aHJvdyAoYFZhcmlhYmxlICR7ZmlnbWFWYXJpYWJsZS5uYW1lfSBpcyBub3QgYSBjb2xvciwgaXQgaXMgJHtmaWdtYVZhcmlhYmxlLnJlc29sdmVkVHlwZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWVSR0JBID0geWllbGQgZ2V0RGVmYXVsdFZhcmlhYmxlVmFsdWUoZmlnbWFWYXJpYWJsZSwgbW9kZUlkKTtcbiAgICAgICAgcmVzdWx0ID0gY29udmVydEZpZ21hQ29sb3JUb1JnYihkZWZhdWx0VmFsdWVSR0JBLCAnaGV4Jyk7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PSAnc3RyaW5nJyAmJiB0b2tlblZhbHVlLmluZGV4T2YoJ3JnYicpID49IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZXMgPSBmaW5kVG9rZW5SZWZlcmVuY2VzKHRva2VuVmFsdWUpLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IGFsaWFzID0gYHske2ZpZ21hQWxpYXNUb0Rlc2lnblRva2VucyhmaWdtYVZhcmlhYmxlLm5hbWUpfX1gO1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0b2tlblZhbHVlLnJlcGxhY2UoYWxpYXMsIHJlc3VsdCk7XG4gICAgICAgICAgICByZXN1bHQgPSBwYXJzZUNvbG9yVmFsdWUobmV3VmFsdWUpLmdsO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVDb2xvclRva2VuVmFsdWUodG9rZW4sIGRpY3Rpb25hcnksIG91dHB1dCA9ICdnbCcpIHtcbiAgICBjb25zdCBjb2xvciA9IHRva2VuLiR2YWx1ZTtcbiAgICBjb25zdCBjb2xvclZhbHVlID0gcmVzb2x2ZUdsb2JhbFRva2VuVmFsdWUoY29sb3IudHJpbSgpLCBkaWN0aW9uYXJ5KTtcbiAgICBjb25zdCByZXN1bHQgPSBjb2xvclZhbHVlID8gcGFyc2VDb2xvclZhbHVlKGNvbG9yVmFsdWUsIHRva2VuLmFkanVzdG1lbnRzKSA6IG51bGw7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0W291dHB1dF07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oYENhbm5vdCByZXNvbHZlIHZhbHVlIGZvciAke3Rva2VuLm5hbWV9YCk7XG4gICAgICAgIC8vdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb2xvciBmb3JtYXRcIik7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbG9yVG9rZW5WYWx1ZSh0b2tlbiwgbW9kZUlkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IHZhbHVlU3RyaW5nID0gKGAke3Rva2VuLiR2YWx1ZX1gKS50cmltKCk7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlQWxpYXMgPSB5aWVsZCBmaW5kVmFyaWFibGVBbGlhcyh2YWx1ZVN0cmluZyk7XG4gICAgICAgIGNvbnN0IHJhd1ZhbHVlID0gcmVzb2x2ZUNvbG9yVG9rZW5WYWx1ZSh0b2tlbiwgZ2V0R2xvYmFsVG9rZW5zRGljdGlvbmFyeSgpKTtcbiAgICAgICAgaWYgKHRva2VuLm5hbWUgPT0gJ3RleHQvYmFzZS9hY3Rpb24nKVxuICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIGlmICh0b2tlbi4kdHlwZSAhPSBcImNvbG9yXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYXNBZGp1c3RtZW50cyA9IHR5cGVvZiB0b2tlbi5hZGp1c3RtZW50cyA9PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyh0b2tlbi5hZGp1c3RtZW50cykubGVuZ3RoID4gMDtcbiAgICAgICAgaWYgKGhhc0FkanVzdG1lbnRzICYmIHJhd1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmF3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhcmlhYmxlQWxpYXMgJiYgdHlwZW9mIHZhcmlhYmxlQWxpYXMgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4uJHZhbHVlID09ICdzdHJpbmcnICYmIHRva2VuLiR2YWx1ZS5pbmRleE9mKCdyZ2InKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZFZhbHVlID0geWllbGQgZ2V0Q29sb3JWYXJpYWJsZUFsaWFzVmFsdWUodG9rZW4uJHZhbHVlLCB2YXJpYWJsZUFsaWFzLmlkLCBtb2RlSWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZXMgPSBmaW5kVG9rZW5SZWZlcmVuY2VzKHRva2VuLiR2YWx1ZSkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmICghcmF3VmFsdWUgJiYgcGFyc2VkVmFsdWUgJiYgcmVmZXJlbmNlcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlQWxpYXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJhd1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmF3VmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGdyYWRlVGV4dFBhbGV0dGUocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgYmFzZVRleHRDb2xvclRva2VucyA9IFtcbiAgICAgICAgICAgIFwidGV4dC9jb250cmFzdC82MDBcIixcbiAgICAgICAgICAgIFwidGV4dC9jb250cmFzdC81MDBcIixcbiAgICAgICAgICAgIFwidGV4dC9jb250cmFzdC80MDBcIlxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBicmFuZFRleHRDb2xvclRva2VucyA9IFtcbiAgICAgICAgICAgIFwidGV4dC9iYXNlL2FjdGlvblwiLFxuICAgICAgICAgICAgXCJ0ZXh0L2NvbnRyYXN0L2FjdGlvblwiXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IHRhcmdldFRva2VucyA9IFtcbiAgICAgICAgICAgIFwidGV4dC9hY2NlbnQvNjAwXCIsXG4gICAgICAgICAgICBcInRleHQvYWNjZW50LzUwMFwiLFxuICAgICAgICAgICAgXCJ0ZXh0L2FjY2VudC80MDBcIlxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBmaWdtYVZhcmlhYmxlcyA9IHlpZWxkIGZpZ21hLnZhcmlhYmxlcy5nZXRMb2NhbFZhcmlhYmxlc0FzeW5jKCk7XG4gICAgICAgIGNvbnN0IGFjY2VudENvbG9yVmFyaWFibGUgPSBmaWdtYVZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFRva2Vucy5pbmRleE9mKHZhcmlhYmxlLm5hbWUpID49IDA7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiYXNlQ29sb3JWYXJpYWJsZXMgPSBmaWdtYVZhcmlhYmxlcy5maWx0ZXIoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYmFzZVRleHRDb2xvclRva2Vucy5pbmRleE9mKHZhcmlhYmxlLm5hbWUpID49IDA7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBicmFuZENvbG9yVmFyaWFibGVzID0gZmlnbWFWYXJpYWJsZXMuZmlsdGVyKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGJyYW5kVGV4dENvbG9yVG9rZW5zLmluZGV4T2YodmFyaWFibGUubmFtZSkgPj0gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghYWNjZW50Q29sb3JWYXJpYWJsZSkge1xuICAgICAgICAgICAgYmFzZUNvbG9yVmFyaWFibGVzLmZvckVhY2godmFyaWFibGUgPT4ge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlLm5hbWUgPSB2YXJpYWJsZS5uYW1lLnJlcGxhY2UoJ2NvbnRyYXN0JywgJ2FjY2VudCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJhbmRDb2xvclZhcmlhYmxlcy5mb3JFYWNoKHZhcmlhYmxlID0+IHtcbiAgICAgICAgICAgIHZhcmlhYmxlLm5hbWUgPSB2YXJpYWJsZS5uYW1lLnJlcGxhY2UoJ2FjdGlvbicsICdwcmltYXJ5Jyk7XG4gICAgICAgIH0pO1xuICAgICAgICBhZGRUb0dsb2JhbFRva2Vuc0RpY3Rpb25hcnkoT2JqZWN0LmFzc2lnbih7fSwgZ2V0R2xvYmFsTmV1dHJhbHMocGFyYW1zKSkpO1xuICAgICAgICB5aWVsZCBpbXBvcnRWYXJpYWJsZXMoe1xuICAgICAgICAgICAgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lcy5nZXQoJ3RoZW1lQ29sb3JzJyksXG4gICAgICAgICAgICBtb2RlTmFtZTogJ0xpZ2h0IEJhc2UnLFxuICAgICAgICAgICAgc29ydEZuOiBnZXRDb2xvclRva2Vuc1NvcnRGbigpLFxuICAgICAgICAgICAgZGF0YTogZmxhdHRlbk9iamVjdChPYmplY3QuYXNzaWduKHt9LCBwYWxldHRlVGV4dExpZ2h0KSlcbiAgICAgICAgfSk7XG4gICAgICAgIHlpZWxkIGltcG9ydFZhcmlhYmxlcyh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgndGhlbWVDb2xvcnMnKSxcbiAgICAgICAgICAgIG1vZGVOYW1lOiAnRGFyayBCYXNlJyxcbiAgICAgICAgICAgIHNvcnRGbjogZ2V0Q29sb3JUb2tlbnNTb3J0Rm4oKSxcbiAgICAgICAgICAgIGRhdGE6IGZsYXR0ZW5PYmplY3QoT2JqZWN0LmFzc2lnbih7fSwgcGFsZXR0ZVRleHREYXJrKSlcbiAgICAgICAgfSk7XG4gICAgICAgIHlpZWxkIGltcG9ydFZhcmlhYmxlcyh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgndGhlbWVDb2xvcnMnKSxcbiAgICAgICAgICAgIG1vZGVOYW1lOiAnRGFyayBFbGV2YXRlZCcsXG4gICAgICAgICAgICBzb3J0Rm46IGdldENvbG9yVG9rZW5zU29ydEZuKCksXG4gICAgICAgICAgICBkYXRhOiBmbGF0dGVuT2JqZWN0KE9iamVjdC5hc3NpZ24oe30sIHBhbGV0dGVUZXh0RGFyaykpXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbG9yU3lzdGVtVmVyc2lvbigpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCB2YXJpYWJsZXMgPSB5aWVsZCBmaWdtYS52YXJpYWJsZXMuZ2V0TG9jYWxWYXJpYWJsZXNBc3luYygpO1xuICAgICAgICBjb25zdCBpc1NEUyA9IGZpZ21hLnJvb3QuZ2V0UGx1Z2luRGF0YSgnU0RTJykgIT09ICcnO1xuICAgICAgICBpZiAodmFyaWFibGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTRFMpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHRPbkFjY2VudFZhciA9IHZhcmlhYmxlcy5maW5kKHZhcmlhYmxlID0+IHZhcmlhYmxlLm5hbWUuc3RhcnRzV2l0aCgndGV4dC9hY2NlbnQnKSk7XG4gICAgICAgICAgICByZXR1cm4gdGV4dE9uQWNjZW50VmFyID8gMiA6IDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0FsaWFzKHZhbHVlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkudHJpbSgpLmNoYXJBdCgwKSA9PT0gXCJ7XCI7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzQ29sb3JUb2tlbkNTU1ZhbHVlKHRva2VuLCBnbG9iYWxOZXV0cmFscykge1xuICAgIGxldCB2YWx1ZSA9IHRva2VuLiR2YWx1ZTtcbiAgICB2YWx1ZSA9IHJlc29sdmVDb2xvclRva2VuVmFsdWUodG9rZW4sIGdsb2JhbE5ldXRyYWxzLCAnaHNsJyk7XG4gICAgY29uc3QgaGFzQWRqdXN0bWVudHMgPSB0eXBlb2YgdG9rZW4uYWRqdXN0bWVudHMgPT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXModG9rZW4uYWRqdXN0bWVudHMpLmxlbmd0aCA+IDA7XG4gICAgaWYgKGhhc0FkanVzdG1lbnRzKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKGlzQWxpYXModG9rZW4uJHZhbHVlKSkge1xuICAgICAgICBjb25zdCBhbGlhc05hbWUgPSBnZXRSZWZlcmVuY2VOYW1lKHRva2VuLiR2YWx1ZSk7XG4gICAgICAgIHZhbHVlID0gYHZhcigtLSR7YWxpYXNOYW1lLnJlcGxhY2UoL1xcLi9nLCBcIi1cIil9KWA7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmNvbnN0IHNoYWRvd0NvbG91cnMgPSB7XG4gICAgbGlnaHQ6IHBhbGV0dGVMaWdodFNoYWRvd3MsXG4gICAgZGFyazogcGFsZXR0ZURhcmtTaGFkb3dzLFxufTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRTaGFkb3dDb2xvclRva2Vucyh0aGVtZSwgcGFyYW1zKSB7XG4gICAgY29uc3QgdG9rZW5PcHRpb25zID0gc2hhZG93Q29sb3Vyc1t0aGVtZSB8fCAnbGlnaHQnXTtcbiAgICBpZiAocGFyYW1zLnNoYWRvd3NDb2xvciA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zLnNoYWRvd3NDb2xvciA9IGRlZmF1bHRTZXR0aW5ncy5zaGFkb3dzQ29sb3I7XG4gICAgfVxuICAgIHJldHVybiBmbGF0dGVuT2JqZWN0KHRva2VuT3B0aW9uc1twYXJhbXMuc2hhZG93c0NvbG9yXSk7XG59XG4iLCJleHBvcnQgY29uc3QgY29sb3JUaGVtZXMgPSBbXG4gICAgJ2xpZ2h0QmFzZScsXG4gICAgJ2RhcmtCYXNlJyxcbiAgICAnZGFya0VsZXZhdGVkJ1xuXTtcbmV4cG9ydCBjb25zdCBjb2xvclRoZW1lTmFtZXMgPSBbXG4gICAgJ0xpZ2h0IEJhc2UnLFxuICAgICdEYXJrIEJhc2UnLFxuICAgICdEYXJrIEVsZXZhdGVkJ1xuXTtcbmV4cG9ydCBjb25zdCByYWRpaVNpemVOYW1lID0gW1xuICAgIFwiY29tcGFjdFwiLFxuICAgIFwiYmFzZVwiLFxuICAgIFwibGFyZ2VcIixcbl07XG5leHBvcnQgY29uc3QgcmFkaWlTaXplVmFsdWVzID0gW1xuICAgIDQsXG4gICAgNixcbiAgICA4LFxuXTtcbmV4cG9ydCBjb25zdCBzcGFjaW5nU2l6ZU5hbWUgPSBbXG4gICAgXCJjb21wYWN0XCIsXG4gICAgXCJiYXNlXCIsXG4gICAgXCJsYXJnZVwiLFxuICAgIFwidG91Y2hcIixcbl07XG5leHBvcnQgY29uc3QgdHlwb2dyYXBoeVNpemVOYW1lID0gW1xuICAgIFwiY29tcGFjdFwiLFxuICAgIFwiYmFzZVwiLFxuICAgIFwibGFyZ2VcIixcbl07XG5leHBvcnQgY29uc3QgdHlwb2dyYXBoeVNpemVWYWx1ZXMgPSBbXG4gICAgXCIxMy8xNlwiLFxuICAgIFwiMTUvMjBcIixcbiAgICBcIjE3LzI0XCIsXG5dO1xuZXhwb3J0IGNvbnN0IGljb25TaXplTmFtZSA9IFtcbiAgICBcImJhc2VcIixcbiAgICBcInRvdWNoXCJcbl07XG5leHBvcnQgY29uc3QgaWNvblNpemVWYWx1ZXMgPSBbXG4gICAgXCIxNlwiLFxuICAgIFwiMjRcIixcbl07XG5leHBvcnQgY29uc3Qgc3lzdGVtQWNjZW50TGlzdCA9IFtcbiAgICBcInJlZFwiLFxuICAgIFwiYW1iZXJcIixcbiAgICBcImJyb3duXCIsXG4gICAgXCJncmVlblwiLFxuICAgIFwidGVhbFwiLFxuICAgIFwiYmx1ZVwiLFxuICAgIFwiaW5kaWdvXCIsXG4gICAgXCJ2aW9sZXRcIixcbiAgICBcInB1cnBsZVwiLFxuICAgIFwicGlua1wiXG5dO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRBY2NlbnRIVUVzID0ge1xuICAgIFwicmVkXCI6IDQsXG4gICAgXCJhbWJlclwiOiAyNSxcbiAgICBcImJyb3duXCI6IDMzLFxuICAgIFwiZ3JlZW5cIjogMTUwLFxuICAgIFwidGVhbFwiOiAxODAsXG4gICAgXCJibHVlXCI6IDIxMCxcbiAgICBcImluZGlnb1wiOiAyNDAsXG4gICAgXCJ2aW9sZXRcIjogMjYwLFxuICAgIFwicHVycGxlXCI6IDI4MCxcbiAgICBcInBpbmtcIjogMzQwXG59O1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRTZW1hbnRpY0FjY2VudHMgPSB7XG4gICAgcHJpbWFyeTogJ2JsdWUnLFxuICAgIGluZm86ICd0ZWFsJyxcbiAgICBzdWNjZXNzOiAnZ3JlZW4nLFxuICAgIHdhcm5pbmc6ICdhbWJlcicsXG4gICAgZGFuZ2VyOiAncmVkJ1xufTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdEFjY2VudEhVRXMpLCBkZWZhdWx0U2VtYW50aWNBY2NlbnRzKSwgeyB0eXBlOiAnSU1QT1JUJywgdGhlbWU6ICdsaWdodCcsIGh1ZTogMTkwLCBzYXR1cmF0aW9uOiAwLjIsIGRpc3RhbmNlOiAwLjAyLCBiYXNlRm9udFNpemU6ICdiYXNlJywgdHlwZVNjYWxlOiAnbWlub3JUaGlyZCcsIGNyZWF0ZVN0eWxlczogdHJ1ZSwgYWNjZW50U2F0dXJhdGlvbjogMC45LCBhY2NlbnRNYXhMdW1pbmFuY2U6IDAuNDUsIGFjY2VudE1pZEx1bWluYW5jZTogMC4xOCwgYWNjZW50TWluTHVtaW5hbmNlOiAwLjEyLCByYWRpaTogJ2Jhc2UnLCBzcGFjaW5nOiAnYmFzZScsIHZlcnRpY2FsU3BhY2luZzogJ3VuZXZlbicsIHNpbmdsZUNvbGxlY3Rpb246IGZhbHNlLCBjdXN0b21BY2NlbnRUZXh0U2F0dXJhdGlvbjogZmFsc2UsIGFjY2VudFRleHRTYXR1cmF0aW9uOiAwLCBhY2NlbnRUZXh0Q29sb3I6ICdhdXRvJywgdGV4dFdoaXRlQnJpZ2h0bmVzczogMTAwLCB0ZXh0QmxhY2tCcmlnaHRuZXNzOiA2LCBjcmVhdGVDb2xvclRva2VuczogdHJ1ZSwgY3JlYXRlQ29tcG9uZW50VG9rZW5zOiB0cnVlLCBjcmVhdGVUeXBvZ3JhcGh5VG9rZW5zOiB0cnVlLCBjcmVhdGVTcGFjaW5nVG9rZW5zOiB0cnVlLCBjcmVhdGVFbGV2YXRpb25Ub2tlbnM6IHRydWUsIGNyZWF0ZVJhZGlpVG9rZW5zOiB0cnVlLCBjcmVhdGVHbG9iYWxTaXplVG9rZW5zOiB0cnVlLCBjcmVhdGVPcGFjaXR5VG9rZW5zOiB0cnVlLCBzaGFkb3dzU3R5bGU6IDEsIHNoYWRvd3NDb2xvcjogMSwgc2hhZG93c1NwcmVhZDogLTEgfSk7XG5leHBvcnQgY29uc3QgY29sbGVjdGlvbk5hbWVzID0gbmV3IE1hcChbXG4gICAgW1wiYnJhbmRDb2xvcnNcIiwgXCJDb2xvciBUaGVtZVwiXSxcbiAgICBbXCJ0eXBlU2NhbGVcIiwgXCJUeXBlIFNjYWxlXCJdLFxuICAgIFtcInR5cGVGYWNlXCIsIFwiVHlwZSBGYWNlXCJdLFxuICAgIFtcInRoZW1lQ29sb3JzXCIsIFwiQ29sb3IgVGhlbWVcIl0sXG4gICAgW1wiY29tcG9uZW50Q29sb3JzXCIsIFwiQ29tcG9uZW50IFRva2Vuc1wiXSxcbiAgICBbXCJzcGFjaW5nXCIsIFwiU3BhY2luZ1wiXSxcbiAgICBbXCJvcGFjaXR5XCIsIFwiT3BhY2l0eVwiXSxcbiAgICBbXCJyYWRpaVwiLCBcIlJhZGlpXCJdLFxuICAgIFtcImljb25TY2FsZVwiLCBcIkljb24gU2NhbGVcIl0sXG4gICAgW1wiZ2xvYmFsU2l6aW5nXCIsIFwiR2xvYmFsIFNpemluZ1wiXSxcbl0pO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBkZWZhdWx0U2V0dGluZ3MgfSBmcm9tICcuL2RlZmF1bHRzJztcbmltcG9ydCB7IF9jbG9uZSB9IGZyb20gJy4vdXRpbHMvY2xvbmUnO1xuaW1wb3J0IHsgZGVsYXlBc3luYyB9IGZyb20gJy4vdXRpbHMvZGVsYXktYXN5bmMnO1xuaW1wb3J0IHsgZmxhdHRlbk9iamVjdCB9IGZyb20gXCIuL3V0aWxzL2ZsYXR0ZW4tb2JqZWN0XCI7XG5pbXBvcnQgeyBmaW5kVmFyaWFibGVCeVJlZmVyZW5jZXMgfSBmcm9tICcuL3V0aWxzL3Rva2VuLXJlZmVyZW5jZXMnO1xuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZXZhdGlvblRva2VucyhwYXJhbXMsIHJhdykge1xuICAgIGxldCB0b2tlbnM7XG4gICAgbGV0IGRlcHRoID0gcGFyYW1zLnNoYWRvd3NTdHlsZSAtIDI7XG4gICAgaWYgKHBhcmFtcy5zaGFkb3dzU3ByZWFkID09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXMuc2hhZG93c1NwcmVhZCA9IGRlZmF1bHRTZXR0aW5ncy5zaGFkb3dzU3ByZWFkO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLnNoYWRvd3NTdHlsZSA9PSAxKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICB0aGlzIGlzIGV4Y2VwdGlvbmFsIGNhc2VcbiAgICAgICAgKi9cbiAgICAgICAgdG9rZW5zID0gZ2VuZXJhdGVTaGFkb3dzKDAsIHBhcmFtcy5zaGFkb3dzU3ByZWFkKTtcbiAgICAgICAgY29uc3QgZmlyc3RTaGFkb3dSdW1wID0gX2Nsb25lKHRva2Vuc1snc2hhZG93LTEnXSk7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGZpcnN0U2hhZG93UnVtcCkuZm9yRWFjaCgoW2tleSwgZWZmZWN0RGVzaWduVG9rZW5dKSA9PiB7XG4gICAgICAgICAgICBlZmZlY3REZXNpZ25Ub2tlbi4kdmFsdWUucG9wKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0b2tlbnMgPSB7XG4gICAgICAgICAgICAnc2hhZG93LTEnOiBmaXJzdFNoYWRvd1J1bXAsXG4gICAgICAgICAgICAnc2hhZG93LTInOiB0b2tlbnNbJ3NoYWRvdy0xJ10sXG4gICAgICAgICAgICAnc2hhZG93LTMnOiB0b2tlbnNbJ3NoYWRvdy0yJ10sXG4gICAgICAgICAgICAnc2hhZG93LTQnOiB0b2tlbnNbJ3NoYWRvdy0zJ10sXG4gICAgICAgICAgICAnc2hhZG93LTUnOiB0b2tlbnNbJ3NoYWRvdy00J10sXG4gICAgICAgICAgICAnc2hhZG93LTYnOiB0b2tlbnNbJ3NoYWRvdy01J10sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0b2tlbnMgPSBnZW5lcmF0ZVNoYWRvd3MoZGVwdGgsIHBhcmFtcy5zaGFkb3dzU3ByZWFkKTtcbiAgICB9XG4gICAgcmV0dXJuIHJhdyA9PT0gdHJ1ZSA/IHRva2VucyA6IGZsYXR0ZW5PYmplY3QodG9rZW5zKTtcbn1cbmNvbnN0IHZhbHVlU2VxdWVuY2UgPSBbMSwgMiwgNCwgOCwgMTIsIDE2LCAyNCwgMzIsIDQwLCA0OCwgNTYsIDcyLCA4OCwgMTA0LCAxMjAsIDEzNiwgMTUyLCAxNjhdO1xuY29uc3QgZWZmZWN0VGVtcGxhdGUgPSB7XG4gICAgXCJ0eXBlXCI6IFwiRFJPUF9TSEFET1dcIixcbiAgICBcInNob3dTaGFkb3dCZWhpbmROb2RlXCI6IGZhbHNlLFxuICAgIFwiY29sb3JcIjogXCJ7dXRpbGl0eS5zaGFkZS4xMDB9XCIsXG4gICAgXCJibGVuZE1vZGVcIjogXCJNVUxUSVBMWVwiLFxuICAgIFwib2Zmc2V0WFwiOiAwLFxuICAgIFwib2Zmc2V0WVwiOiAwLFxuICAgIFwicmFkaXVzXCI6IDEsXG4gICAgXCJzcHJlYWRcIjogMFxufTtcbmZ1bmN0aW9uIGdldExheWVyc0NvdW50KG9mZnNldFZhbHVlKSB7XG4gICAgbGV0IGxheWVycyA9IDE7XG4gICAgaWYgKG9mZnNldFZhbHVlID4gMCAmJiBvZmZzZXRWYWx1ZSA8IDEyKSB7XG4gICAgICAgIGxheWVycyA9IDI7XG4gICAgfVxuICAgIGVsc2UgaWYgKG9mZnNldFZhbHVlID49IDEyKSB7XG4gICAgICAgIGxheWVycyA9IDM7XG4gICAgfVxuICAgIGVsc2UgaWYgKG9mZnNldFZhbHVlID49IDQwKSB7XG4gICAgICAgIGxheWVycyA9IDQ7XG4gICAgfVxuICAgIHJldHVybiBsYXllcnM7XG59XG5mdW5jdGlvbiBnZXRTaGFkb3dWYWx1ZVJhbXAodmFsdWVTZXF1ZWNlSW5kZXgsIHNwcmVhZCkge1xuICAgIGNvbnN0IG9mZnNldFZhbHVlID0gdmFsdWVTZXF1ZW5jZVt2YWx1ZVNlcXVlY2VJbmRleF07XG4gICAgbGV0IGxheWVycyA9IGdldExheWVyc0NvdW50KG9mZnNldFZhbHVlKTtcbiAgICBjb25zdCBzaGFkb3dSYW1wRGVmaW5pdGlvbiA9IHtcbiAgICAgICAgXCIxMDBcIjoge1xuICAgICAgICAgICAgJyR0eXBlJzogJ2VmZmVjdCcsXG4gICAgICAgICAgICAnJHZhbHVlJzogZ2V0U2hhZG93VmFsdWUobGF5ZXJzLCB2YWx1ZVNlcXVlY2VJbmRleCwgMSwgc3ByZWFkKVxuICAgICAgICB9LFxuICAgICAgICBcIjIwMFwiOiB7XG4gICAgICAgICAgICAnJHR5cGUnOiAnZWZmZWN0JyxcbiAgICAgICAgICAgICckdmFsdWUnOiBnZXRTaGFkb3dWYWx1ZShsYXllcnMsIHZhbHVlU2VxdWVjZUluZGV4LCAyLCBzcHJlYWQpXG4gICAgICAgIH0sXG4gICAgICAgIFwiMzAwXCI6IHtcbiAgICAgICAgICAgICckdHlwZSc6ICdlZmZlY3QnLFxuICAgICAgICAgICAgJyR2YWx1ZSc6IGdldFNoYWRvd1ZhbHVlKGxheWVycywgdmFsdWVTZXF1ZWNlSW5kZXgsIDMsIHNwcmVhZClcbiAgICAgICAgfSxcbiAgICAgICAgXCI0MDBcIjoge1xuICAgICAgICAgICAgJyR0eXBlJzogJ2VmZmVjdCcsXG4gICAgICAgICAgICAnJHZhbHVlJzogZ2V0U2hhZG93VmFsdWUobGF5ZXJzLCB2YWx1ZVNlcXVlY2VJbmRleCwgNCwgc3ByZWFkKVxuICAgICAgICB9LFxuICAgICAgICBcIjUwMFwiOiB7XG4gICAgICAgICAgICAnJHR5cGUnOiAnZWZmZWN0JyxcbiAgICAgICAgICAgICckdmFsdWUnOiBnZXRTaGFkb3dWYWx1ZShsYXllcnMsIHZhbHVlU2VxdWVjZUluZGV4LCA1LCBzcHJlYWQpXG4gICAgICAgIH0sXG4gICAgICAgIFwiNjAwXCI6IHtcbiAgICAgICAgICAgICckdHlwZSc6ICdlZmZlY3QnLFxuICAgICAgICAgICAgJyR2YWx1ZSc6IGdldFNoYWRvd1ZhbHVlKGxheWVycywgdmFsdWVTZXF1ZWNlSW5kZXgsIDYsIHNwcmVhZClcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiBzaGFkb3dSYW1wRGVmaW5pdGlvbjtcbn1cbi8qXG4gICAgc3ByZWFkIGJlY29tZXMgdXNlbGVzcyBvbmNlIGl0IGdvZXMgYmVsb3cgdmVydGljYWwgb2Zmc2V0IGFuZCB0aGUgc2hhZG93IGRpc2FwcGVhcnNcbiAgICB0aGlzIGZ1bmN0aW9uIGNoZWNrIGJvdGggdmFsdWVzIGFuZCBhZGp1c3Qgc3BlYWQgdmFsdWUgdG8gcHJldmVudCBzaGFkb3cgZnJvbSBkaXNzYXBlYXJpbmdcbiovXG5mdW5jdGlvbiBhZGp1c3ROZWdhdGl2ZVNwcmVhZFZhbHVlKHNwcmVhZCwgb2Zmc2V0WSkge1xuICAgIGlmIChzcHJlYWQgPCAwICYmIE1hdGguYWJzKHNwcmVhZCkgPj0gb2Zmc2V0WSkge1xuICAgICAgICByZXR1cm4gYWRqdXN0TmVnYXRpdmVTcHJlYWRWYWx1ZSgrK3NwcmVhZCwgb2Zmc2V0WSk7XG4gICAgfVxuICAgIHJldHVybiBzcHJlYWQ7XG59XG5mdW5jdGlvbiBnZXRTaGFkb3dWYWx1ZShsYXllcnMsIHNlcXVlY2VTdGFydEluZGV4LCBjb2xvckluZGV4LCBzcHJlYWQpIHtcbiAgICBsZXQgc2hhZG93VmFsdWUgPSBbXG4gICAgICAgIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgX2Nsb25lKGVmZmVjdFRlbXBsYXRlKSksIHsgY29sb3I6IGB7dXRpbGl0eS5zaGFkZS4ke2NvbG9ySW5kZXh9MDB9YCB9KVxuICAgIF07XG4gICAgZm9yIChsZXQgbCA9IDA7IGwgPCBsYXllcnM7IGwrKykge1xuICAgICAgICBjb25zdCBzZXF1ZW5jZUluZGV4ID0gc2VxdWVjZVN0YXJ0SW5kZXggKyBsO1xuICAgICAgICBjb25zdCBvZmZzZXRZID0gdmFsdWVTZXF1ZW5jZVtzZXF1ZW5jZUluZGV4XTtcbiAgICAgICAgY29uc3QgcmFkaXVzID0gdmFsdWVTZXF1ZW5jZVtzZXF1ZW5jZUluZGV4ICsgMV07XG4gICAgICAgIHNwcmVhZCAqPSAxLjI1O1xuICAgICAgICBsZXQgbGF5ZXJWYWx1ZSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgX2Nsb25lKGVmZmVjdFRlbXBsYXRlKSksIHsgY29sb3I6IGB7dXRpbGl0eS5zaGFkZS4ke2NvbG9ySW5kZXh9MDB9YCwgb2Zmc2V0WSxcbiAgICAgICAgICAgIHJhZGl1cywgc3ByZWFkOiBhZGp1c3ROZWdhdGl2ZVNwcmVhZFZhbHVlKHNwcmVhZCwgb2Zmc2V0WSkgfSk7XG4gICAgICAgIHNoYWRvd1ZhbHVlLnB1c2gobGF5ZXJWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBzaGFkb3dWYWx1ZTtcbn1cbmZ1bmN0aW9uIGdldFNwcmVhZEZhY3RvcihzcHJlYWQpIHtcbiAgICBsZXQgc3ByZWFkRmFjdG9yID0gMDtcbiAgICBpZiAoc3ByZWFkIDwgMCkge1xuICAgICAgICBzcHJlYWRGYWN0b3IgPSAtMTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc3ByZWFkID4gMCkge1xuICAgICAgICBzcHJlYWRGYWN0b3IgPSAxO1xuICAgIH1cbiAgICByZXR1cm4gc3ByZWFkRmFjdG9yO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVTaGFkb3dzKHNpemUsIHNwcmVhZCkge1xuICAgIGxldCByYW1wID0ge307XG4gICAgc3ByZWFkIC89IDEuMjU7XG4gICAgZm9yIChsZXQgcyA9IDE7IHMgPD0gNjsgcysrKSB7XG4gICAgICAgIHJhbXBbYHNoYWRvdy0ke3N9YF0gPSBnZXRTaGFkb3dWYWx1ZVJhbXAoc2l6ZSsrLCBzcHJlYWQpO1xuICAgICAgICBzcHJlYWQgKj0gMS4yNTtcbiAgICB9XG4gICAgcmV0dXJuIHJhbXA7XG59XG5mdW5jdGlvbiBmaW5kU2hhZG93Q29tcG9uZW50KG5hbWUsIGRlc3RpbmF0aW9uUGFnZSkge1xuICAgIGNvbnN0IHBhZ2VDb21wb25lbnRzID0gZGVzdGluYXRpb25QYWdlLmZpbmRBbGxXaXRoQ3JpdGVyaWEoe1xuICAgICAgICB0eXBlczogWydDT01QT05FTlQnXSxcbiAgICAgICAgcGx1Z2luRGF0YToge1xuICAgICAgICAgICAga2V5czogW1wiU291cmNlU2hhZG93XCJdXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcGFnZUNvbXBvbmVudHMuZmluZChub2RlID0+IHtcbiAgICAgICAgY29uc3QgcGx1Z2luRGF0YSA9IG5vZGUuZ2V0UGx1Z2luRGF0YSgnU291cmNlU2hhZG93Jyk7XG4gICAgICAgIHJldHVybiBwbHVnaW5EYXRhID09PSBuYW1lO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlU2hhZG93Q29tcG9uZW50KG5hbWUsIHNoYWRvd1Rva2VuKSB7XG4gICAgY29uc3QgY29uc3RyYWludHMgPSB7XG4gICAgICAgIGhvcml6b250YWw6ICdTVFJFVENIJyxcbiAgICAgICAgdmVydGljYWw6ICdTVFJFVENIJ1xuICAgIH07XG4gICAgY29uc3Qgc2hhZG93Q29tcG9uZW50RnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIHNoYWRvd0NvbXBvbmVudEZyYW1lLm5hbWUgPSBuYW1lO1xuICAgIHNoYWRvd0NvbXBvbmVudEZyYW1lLmNsaXBzQ29udGVudCA9IGZhbHNlO1xuICAgIHNoYWRvd0NvbXBvbmVudEZyYW1lLmZpbGxzID0gW107XG4gICAgY29uc3QgYmFzZVJlY3RPdXRlciA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgIGNvbnN0IGJhc2VSZWN0SW5uZXIgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICBjb25zdCB1bmlvbiA9IGZpZ21hLnN1YnRyYWN0KFtiYXNlUmVjdElubmVyLCBiYXNlUmVjdE91dGVyXSwgc2hhZG93Q29tcG9uZW50RnJhbWUpO1xuICAgIGJhc2VSZWN0T3V0ZXIubmFtZSA9ICdvdXRlcic7XG4gICAgYmFzZVJlY3RPdXRlci5jb25zdHJhaW50cyA9IGNvbnN0cmFpbnRzO1xuICAgIGJhc2VSZWN0T3V0ZXIuc2V0UGx1Z2luRGF0YSgnU291cmNlU2hhZG93RWxlbWVudCcsICdtYXNrLW91dGVyJyk7XG4gICAgYmFzZVJlY3RJbm5lci5uYW1lID0gJ2lubmVyJztcbiAgICBiYXNlUmVjdElubmVyLmNvbnN0cmFpbnRzID0gY29uc3RyYWludHM7XG4gICAgYmFzZVJlY3RJbm5lci5zZXRQbHVnaW5EYXRhKCdTb3VyY2VTaGFkb3dFbGVtZW50JywgJ21hc2staW5uZXInKTtcbiAgICB1bmlvbi5uYW1lID0gJ21hc2snO1xuICAgIHVuaW9uLnNldFBsdWdpbkRhdGEoJ1NvdXJjZVNoYWRvd0VsZW1lbnQnLCAnbWFzaycpO1xuICAgIHNoYWRvd1Rva2VuLiR2YWx1ZS5mb3JFYWNoKChlZmZlY3RWYWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hhZG93TGF5ZXIgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAgICAgc2hhZG93TGF5ZXIubmFtZSA9IGBzaGFkb3ctJHtpbmRleCsrfWA7XG4gICAgICAgIHNoYWRvd0xheWVyLmNvbnN0cmFpbnRzID0gY29uc3RyYWludHM7XG4gICAgICAgIHNoYWRvd0NvbXBvbmVudEZyYW1lLmFwcGVuZENoaWxkKHNoYWRvd0xheWVyKTtcbiAgICB9KTtcbiAgICB1bmlvbi5pc01hc2sgPSB0cnVlO1xuICAgIGNvbnN0IHNoYWRvd0NvbXBvbmVudCA9IGZpZ21hLmNyZWF0ZUNvbXBvbmVudEZyb21Ob2RlKHNoYWRvd0NvbXBvbmVudEZyYW1lKTtcbiAgICBzaGFkb3dDb21wb25lbnQuc2V0UGx1Z2luRGF0YSgnU291cmNlU2hhZG93JywgbmFtZSk7XG4gICAgcmV0dXJuIHNoYWRvd0NvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGdldFNoYWRvd0NvbXBvbmVudChuYW1lLCBkZXN0aW5hdGlvblBhZ2UsIHNoYWRvd1Rva2VuKSB7XG4gICAgbGV0IHNoYWRvd0NvbXBvbmVudCA9IGZpbmRTaGFkb3dDb21wb25lbnQobmFtZSwgZGVzdGluYXRpb25QYWdlKTtcbiAgICBpZiAoIXNoYWRvd0NvbXBvbmVudCkge1xuICAgICAgICBzaGFkb3dDb21wb25lbnQgPSBjcmVhdGVTaGFkb3dDb21wb25lbnQobmFtZSwgc2hhZG93VG9rZW4pO1xuICAgIH1cbiAgICBzaGFkb3dDb21wb25lbnQuY2xpcHNDb250ZW50ID0gZmFsc2U7XG4gICAgcmV0dXJuIHNoYWRvd0NvbXBvbmVudDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcGRhdGVFbGV2YXRpb25Db21wb25lbnRzKHBhcmFtcywgZGVzdGluYXRpb25QYWdlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgdG9rZW5zID0gZ2V0RWxldmF0aW9uVG9rZW5zKHBhcmFtcywgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSBmaWdtYS5yb290LmNoaWxkcmVuLmZpbmQobm9kZSA9PiBub2RlLm5hbWUgPT0gZGVzdGluYXRpb25QYWdlKSB8fCBmaWdtYS5jdXJyZW50UGFnZTtcbiAgICAgICAgeWllbGQgZmlnbWEuc2V0Q3VycmVudFBhZ2VBc3luYyhwYWdlKTtcbiAgICAgICAgbGV0IHNoYWRvd0NvbXBvbmVudHMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdG9rZW5zKSB7XG4gICAgICAgICAgICBjb25zdCBzaGFkb3dSYW1wID0gdG9rZW5zW2tleV07XG4gICAgICAgICAgICBjb25zdCBzaGFkb3dUb2tlbiA9IHNoYWRvd1JhbXBbJzIwMCddO1xuICAgICAgICAgICAgY29uc3Qgc2hhZG93Q29tcG9uZW50ID0gZ2V0U2hhZG93Q29tcG9uZW50KGtleSwgcGFnZSwgc2hhZG93VG9rZW4pO1xuICAgICAgICAgICAgY29uc3QgbWFza0xheWVyID0gc2hhZG93Q29tcG9uZW50LmZpbmRPbmUobm9kZSA9PiBub2RlLmdldFBsdWdpbkRhdGEoJ1NvdXJjZVNoYWRvd0VsZW1lbnQnKSA9PSAnbWFzaycpO1xuICAgICAgICAgICAgaWYgKCFtYXNrTGF5ZXIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIHByb2Nlc3NpbmcgJHtzaGFkb3dDb21wb25lbnQubmFtZX0uIENhbm5vdCBmaW5kIG1hc2sgbGF5ZXIsIGFib3J0aW5nLi4uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBiYXNlUmVjdE91dGVyID0gbWFza0xheWVyLmZpbmRPbmUobm9kZSA9PiBub2RlLmdldFBsdWdpbkRhdGEoJ1NvdXJjZVNoYWRvd0VsZW1lbnQnKSA9PSAnbWFzay1vdXRlcicpO1xuICAgICAgICAgICAgaWYgKCFiYXNlUmVjdE91dGVyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBwcm9jZXNzaW5nICR7c2hhZG93Q29tcG9uZW50Lm5hbWV9ID4gJHttYXNrTGF5ZXIubmFtZX0uIENhbm5vdCBmaW5kIG1hc2sgb3V0ZXIgbWFzayByZWN0YW5nbGUsIGFib3J0aW5nLi4uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXNrTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgeWllbGQgdXBkYXRlTWFza0NvbXBvbmVudExheWVycyhzaGFkb3dDb21wb25lbnQsIHNoYWRvd1Rva2VuKTtcbiAgICAgICAgICAgIGNvbnN0IGFic29sdXRlQm91bmRpbmdCb3ggPSBzaGFkb3dDb21wb25lbnQuYWJzb2x1dGVCb3VuZGluZ0JveDtcbiAgICAgICAgICAgIGNvbnN0IGFic29sdXRlUmVuZGVyQm91bmRzID0gc2hhZG93Q29tcG9uZW50LmFic29sdXRlUmVuZGVyQm91bmRzO1xuICAgICAgICAgICAgYmFzZVJlY3RPdXRlci5yZXNpemUoYWJzb2x1dGVSZW5kZXJCb3VuZHMud2lkdGgsIGFic29sdXRlUmVuZGVyQm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICBiYXNlUmVjdE91dGVyLnggPSAoYWJzb2x1dGVSZW5kZXJCb3VuZHMueCAtIGFic29sdXRlQm91bmRpbmdCb3gueCk7XG4gICAgICAgICAgICBiYXNlUmVjdE91dGVyLnkgPSAoYWJzb2x1dGVSZW5kZXJCb3VuZHMueSAtIGFic29sdXRlQm91bmRpbmdCb3gueSk7XG4gICAgICAgICAgICBtYXNrTGF5ZXIudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBzaGFkb3dDb21wb25lbnRzLnB1c2goc2hhZG93Q29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICB5aWVsZCBkZWxheUFzeW5jKDIwMCk7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBzaGFkb3dDb21wb25lbnRzO1xuICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoc2hhZG93Q29tcG9uZW50cyk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiB1cGRhdGVNYXNrQ29tcG9uZW50TGF5ZXJzKHNoYWRvd0NvbXBvbmVudCwgc2hhZG93VG9rZW4pIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBzaGFkb3dUb2tlblZhbHVlID0gc2hhZG93VG9rZW4uJHZhbHVlO1xuICAgICAgICBjb25zdCBzaGFkb3dMYXllcnNDaGlsZHJlbiA9IHNoYWRvd0NvbXBvbmVudC5jaGlsZHJlbjtcbiAgICAgICAgbGV0IHNoYWRvd0xheWVySW5kZXggPSBzaGFkb3dMYXllcnNDaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgICAgICB3aGlsZSAoc2hhZG93TGF5ZXJJbmRleCA+IHNoYWRvd1Rva2VuVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICBzaGFkb3dMYXllcnNDaGlsZHJlbltzaGFkb3dMYXllckluZGV4XS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHNoYWRvd0xheWVySW5kZXgtLTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW5kZXggPSAxO1xuICAgICAgICB3aGlsZSAoc2hhZG93VG9rZW5WYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGVmZmVjdFZhbHVlID0gc2hhZG93VG9rZW5WYWx1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgY29uc3QgY29sb3JWYXJpYWJsZSA9IHlpZWxkIGZpbmRWYXJpYWJsZUJ5UmVmZXJlbmNlcyhlZmZlY3RWYWx1ZS5jb2xvcik7XG4gICAgICAgICAgICBsZXQgcGFpbnQgPSBmaWdtYS51dGlsLnNvbGlkUGFpbnQoJyMwMDAwMDAnKTtcbiAgICAgICAgICAgIHBhaW50ID0gZmlnbWEudmFyaWFibGVzLnNldEJvdW5kVmFyaWFibGVGb3JQYWludChwYWludCwgJ2NvbG9yJywgY29sb3JWYXJpYWJsZSk7XG4gICAgICAgICAgICBsZXQgc2hhZG93TGF5ZXIgPSBzaGFkb3dDb21wb25lbnQuY2hpbGRyZW5baW5kZXhdO1xuICAgICAgICAgICAgLy8gZmluZENoaWxkKG5vZGUgPT4gbm9kZS5uYW1lID09IGBzaGFkb3ctJHtpbmRleH1gKSBhcyBSZWN0YW5nbGVOb2RlO1xuICAgICAgICAgICAgaWYgKHNoYWRvd0xheWVyICYmIHNoYWRvd0xheWVyLnR5cGUgIT0gJ1JFQ1RBTkdMRScpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHNoYWRvdy0ke2luZGV4fSAgdHlwZSBpcyAke3NoYWRvd0xheWVyLnR5cGV9IGJ1dCBoYXMgdG8gYmUgYSByZWN0YW5nbGVgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc2hhZG93TGF5ZXIpIHtcbiAgICAgICAgICAgICAgICBzaGFkb3dMYXllciA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xuICAgICAgICAgICAgICAgIHNoYWRvd0xheWVyLmNvbnN0cmFpbnRzID0ge1xuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnU1RSRVRDSCcsXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAnU1RSRVRDSCdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHNoYWRvd0NvbXBvbmVudC5pbnNlcnRDaGlsZChpbmRleCwgc2hhZG93TGF5ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hhZG93TGF5ZXIubmFtZSA9IGBzaGFkb3ctJHtpbmRleH1gO1xuICAgICAgICAgICAgc2hhZG93TGF5ZXIuZmlsbHMgPSBbcGFpbnRdO1xuICAgICAgICAgICAgc2hhZG93TGF5ZXIudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBzaGFkb3dMYXllci5ibGVuZE1vZGUgPSBlZmZlY3RUZW1wbGF0ZS5ibGVuZE1vZGU7XG4gICAgICAgICAgICBjb25zdCBMYXllckJsdXIgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJMQVlFUl9CTFVSXCIsXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICByYWRpdXM6IGVmZmVjdFZhbHVlLnJhZGl1c1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNoYWRvd0xheWVyLmVmZmVjdHMgPSBbTGF5ZXJCbHVyXTtcbiAgICAgICAgICAgIHNoYWRvd0xheWVyLnggPSBlZmZlY3RWYWx1ZS5vZmZzZXRYIC0gZWZmZWN0VmFsdWUuc3ByZWFkO1xuICAgICAgICAgICAgc2hhZG93TGF5ZXIueSA9IGVmZmVjdFZhbHVlLm9mZnNldFkgLSBlZmZlY3RWYWx1ZS5zcHJlYWQ7XG4gICAgICAgICAgICBzaGFkb3dMYXllci5yZXNpemUoc2hhZG93Q29tcG9uZW50LndpZHRoICsgMiAqIGVmZmVjdFZhbHVlLnNwcmVhZCwgc2hhZG93Q29tcG9uZW50LmhlaWdodCArIDIgKiBlZmZlY3RWYWx1ZS5zcHJlYWQpO1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgYnJhbmRWYXJpYW50VGVtcGxhdGUgZnJvbSBcIi4vdXRpbHMvYnJhbmQtdmFyaWFudC10ZW1wbGF0ZS5qc29uXCI7XG5pbXBvcnQgeyBnZXRDb2xsZWN0aW9uQW5kUHJlcGFyZVRva2VucywgaW1wb3J0VmFyaWFibGVzIH0gZnJvbSBcIi4vaW1wb3J0LXRva2Vuc1wiO1xuaW1wb3J0IHsgY29udmVydEZpZ21hQ29sb3JUb1JnYiB9IGZyb20gXCIuL3V0aWxzL2ZpZ21hLWNvbG9yc1wiO1xuaW1wb3J0IHsgY29udmVydEZpZ21hRWZmZWN0U3R5bGVUb1Rva2VuLCBpbXBvcnRFZmZlY3RTdHlsZXMgfSBmcm9tIFwiLi91dGlscy9maWdtYS1lZmZlY3Qtc3R5bGVzXCI7XG5pbXBvcnQgeyBjb252ZXJ0RmlnbWFUZXh0U3R5bGVUb1Rva2VuLCBpbXBvcnRUZXh0U3R5bGVzIH0gZnJvbSBcIi4vdXRpbHMvZmlnbWEtdGV4dC1zdHlsZXNcIjtcbmltcG9ydCB7IGZsYXR0ZW5PYmplY3QgfSBmcm9tIFwiLi91dGlscy9mbGF0dGVuLW9iamVjdFwiO1xuaW1wb3J0IHsgZmlnbWFBbGlhc1RvRGVzaWduVG9rZW5zLCBnZXRBbGlhc05hbWUsIHZhcmlhYmxlTmFtZVRvT2JqZWN0IH0gZnJvbSBcIi4vdXRpbHMvZmlnbWEtdmFyaWFibGVzXCI7XG5pbXBvcnQgeyBkZWxheUFzeW5jIH0gZnJvbSBcIi4vdXRpbHMvZGVsYXktYXN5bmNcIjtcbmltcG9ydCB7IGFkZFRvR2xvYmFsVG9rZW5zRGljdGlvbmFyeSwgZmluZFRva2VuUmVmZXJlbmNlcywgZ2V0UmVmZXJlbmNlTmFtZSB9IGZyb20gXCIuL3V0aWxzL3Rva2VuLXJlZmVyZW5jZXNcIjtcbmltcG9ydCB7IF9jbG9uZSB9IGZyb20gXCIuL3V0aWxzL2Nsb25lXCI7XG5pbXBvcnQgeyBjb2xsZWN0aW9uTmFtZXMgfSBmcm9tIFwiLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgdG9DYW1lbENhc2UgfSBmcm9tIFwiLi91dGlscy90ZXh0LXRvLXRpdGxlLWNhc2VcIjtcbmltcG9ydCB7IGdldEFscGhhTnVtVG9rZW5zU29ydEZuLCBnZXRDb2xvclRva2Vuc1NvcnRGbiwgZ2V0U2l6ZVRva2Vuc1NvcnRGbiB9IGZyb20gXCIuL3V0aWxzL3NvcnQtdG9rZW5zXCI7XG5mdW5jdGlvbiBtYWtlQnJhbmRWYXJpYW50UmVjb3JkKG5hbWUpIHtcbiAgICBjb25zdCBicmFuZFZhcmlhbnRSZWNvcmQgPSBfY2xvbmUoYnJhbmRWYXJpYW50VGVtcGxhdGUpO1xuICAgIGJyYW5kVmFyaWFudFJlY29yZC5jb2xsZWN0aW9uID0gXCJCcmFuZCBWYXJpYW50XCI7XG4gICAgYnJhbmRWYXJpYW50UmVjb3JkLm1vZGUgPSB0b0NhbWVsQ2FzZShuYW1lKTtcbiAgICBicmFuZFZhcmlhbnRSZWNvcmQudG9rZW5zID0ge1xuICAgICAgICB0aGVtZToge30sXG4gICAgICAgIGJyYW5kOiB7fSxcbiAgICAgICAgY29tcG9uZW50OiB7fSxcbiAgICB9O1xuICAgIHJldHVybiBicmFuZFZhcmlhbnRSZWNvcmQ7XG59XG5mdW5jdGlvbiBleHBvcnRCcmFuZFRoZW1lVG9rZW5zKGtleSwgYnJhbmRWYXJpYW50UmVjb3JkLCBleHBvcnRlZERhdGEpIHtcbiAgICBsZXQgYnJhbmRUb2tlbnMgPSBicmFuZFZhcmlhbnRSZWNvcmQudG9rZW5zW2tleV07XG4gICAgZXhwb3J0ZWREYXRhLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgICAgY29uc3QgbW9kZU5hbWUgPSB0b0NhbWVsQ2FzZShyZWNvcmQubW9kZSk7XG4gICAgICAgIGNvbnN0IHRva2VucyA9IHJlY29yZC50b2tlbnM7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXModG9rZW5zKS5mb3JFYWNoKChbdG9rZW5OYW1lLCB0b2tlbkRhdGFdKSA9PiB7XG4gICAgICAgICAgICBsZXQgdG9rZW4gPSB2YXJpYWJsZU5hbWVUb09iamVjdCh7IG5hbWU6IHRva2VuTmFtZSwgdGFyZ2V0T2JqZWN0OiBkYXRhIH0pO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0b2tlbkRhdGEuJHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBsZXQgcmVmZXJlbmNlcyA9IGZpbmRUb2tlblJlZmVyZW5jZXModmFsdWUpIHx8IFtdO1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSByZWZlcmVuY2VzLm1hcChhbGlhcyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGB7JHtrZXl9LiR7bW9kZU5hbWV9LiR7Z2V0UmVmZXJlbmNlTmFtZShhbGlhcyl9fWA7XG4gICAgICAgICAgICB9KS5qb2luKCcgJyk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRva2VuLCB0b2tlbkRhdGEsIHtcbiAgICAgICAgICAgICAgICAkdmFsdWU6IG5ld1ZhbHVlIHx8IHZhbHVlLFxuICAgICAgICAgICAgICAgIHNjb3BlczogW10sIC8vIGkgd2FudCB0aGVzZSB0byBzdGF5IHByaXZhdGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgYnJhbmRUb2tlbnNbbW9kZU5hbWVdID0gZGF0YTtcbiAgICB9KTtcbiAgICByZXR1cm4gYnJhbmRWYXJpYW50UmVjb3JkO1xufVxuZnVuY3Rpb24gcmVtYXBQcmltYXJ5VmFyaWFibGVzKGV4cG9ydGVkRGF0YSwgZ2V0UGF0aCkge1xuICAgIGNvbnN0IGV4cG9ydERhdGEgPSBleHBvcnRlZERhdGEubWFwKHJlY29yZCA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGVOYW1lID0gcmVjb3JkLm1vZGU7XG4gICAgICAgIGNvbnN0IHRva2VucyA9IHJlY29yZC50b2tlbnM7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXModG9rZW5zKS5mb3JFYWNoKChbdG9rZW5OYW1lLCB0b2tlbkRhdGFdKSA9PiB7XG4gICAgICAgICAgICBsZXQgdG9rZW4gPSB2YXJpYWJsZU5hbWVUb09iamVjdCh7IG5hbWU6IHRva2VuTmFtZSwgdGFyZ2V0T2JqZWN0OiBkYXRhIH0pO1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGZpZ21hQWxpYXNUb0Rlc2lnblRva2VucyhnZXRSZWZlcmVuY2VOYW1lKHRva2VuTmFtZSkpO1xuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGdldFBhdGgobW9kZU5hbWUpO1xuICAgICAgICAgICAgdG9rZW4gPSBPYmplY3QuYXNzaWduKHRva2VuLCB0b2tlbkRhdGEsIHtcbiAgICAgICAgICAgICAgICAkdmFsdWU6IGB7JHtwYXRofS4ke25hbWV9fWBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVjb3JkLnRva2VucyA9IGRhdGE7XG4gICAgICAgIHJldHVybiByZWNvcmQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIGV4cG9ydERhdGE7XG59XG5leHBvcnQgZnVuY3Rpb24gZXhwb3J0VG9KU09OKGV4cG9ydFBhcmFtcywgZm9ybURhdGEpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9ucyA9IHlpZWxkIGZpZ21hLnZhcmlhYmxlcy5nZXRMb2NhbFZhcmlhYmxlQ29sbGVjdGlvbnNBc3luYygpO1xuICAgICAgICBjb25zdCBmaWxlcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGNvbGxlY3Rpb24gb2YgY29sbGVjdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cG9ydGVkRGF0YSA9IHlpZWxkIGV4cG9ydEZpZ21hVmFyaWFibGVDb2xsZWN0aW9uKGNvbGxlY3Rpb24sIGV4cG9ydFBhcmFtcy5qc29uQ29sb3JGb3JtYXQpO1xuICAgICAgICAgICAgZXhwb3J0ZWREYXRhLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbnMgPSByZWNvcmQudG9rZW5zO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBleHBhbmRUb2tlbk5hbWVUb09iamVjdCh0b2tlbnMpO1xuICAgICAgICAgICAgICAgIHJlY29yZC50b2tlbnMgPSBkYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmaWxlcy5wdXNoKC4uLmV4cG9ydGVkRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGV4dFN0eWxlcyA9IHlpZWxkIGZpZ21hLmdldExvY2FsVGV4dFN0eWxlc0FzeW5jKCk7XG4gICAgICAgIGNvbnN0IGVmZmVjdFN0eWxlcyA9IHlpZWxkIGZpZ21hLmdldExvY2FsRWZmZWN0U3R5bGVzQXN5bmMoKTtcbiAgICAgICAgY29uc3QgZXhwb3J0ZWRUZXh0U3R5bGVzID0geWllbGQgZXhwb3J0VGV4dFN0eWxlcyh0ZXh0U3R5bGVzKTtcbiAgICAgICAgY29uc3QgZXhwb3J0ZWRFZmZlY3RTdHlsZXMgPSB5aWVsZCBleHBvcnRFZmZlY3RTdHlsZXMoZWZmZWN0U3R5bGVzLCBleHBvcnRQYXJhbXMuanNvbkNvbG9yRm9ybWF0KTtcbiAgICAgICAgZXhwb3J0ZWRUZXh0U3R5bGVzICYmIGZpbGVzLnB1c2goZXhwb3J0ZWRUZXh0U3R5bGVzKTtcbiAgICAgICAgZXhwb3J0ZWRFZmZlY3RTdHlsZXMgJiYgZmlsZXMucHVzaChleHBvcnRlZEVmZmVjdFN0eWxlcyk7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJFWFBPUlRfUkVTVUxUX0pTT05cIiwgZmlsZXMgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZXhwb3J0QnJhbmRWYXJpYW50VG9KU09OKHBhcmFtcywgZm9ybURhdGEpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9ucyA9IHlpZWxkIGZpZ21hLnZhcmlhYmxlcy5nZXRMb2NhbFZhcmlhYmxlQ29sbGVjdGlvbnNBc3luYygpO1xuICAgICAgICBjb25zdCBicmFuZE1vZGVOYW1lID0gZm9ybURhdGEucHJpbWFyeTtcbiAgICAgICAgbGV0IGJyYW5kVmFyaWFudENvbGxlY3Rpb24gPSBtYWtlQnJhbmRWYXJpYW50UmVjb3JkKGJyYW5kTW9kZU5hbWUpO1xuICAgICAgICBjb25zdCBmaWxlcyA9IFticmFuZFZhcmlhbnRDb2xsZWN0aW9uXTtcbiAgICAgICAgZm9yIChjb25zdCBjb2xsZWN0aW9uIG9mIGNvbGxlY3Rpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBleHBvcnRlZENvbGxlY3Rpb25EYXRhID0geWllbGQgZXhwb3J0RmlnbWFWYXJpYWJsZUNvbGxlY3Rpb24oY29sbGVjdGlvbiwgcGFyYW1zLmJyYW5kQ29sb3JGb3JtYXQpO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5jcmVhdGVDb2xvclRva2VucyAmJiBjb2xsZWN0aW9uLm5hbWUgPT0gY29sbGVjdGlvbk5hbWVzLmdldChcInRoZW1lQ29sb3JzXCIpKSB7XG4gICAgICAgICAgICAgICAgYnJhbmRWYXJpYW50Q29sbGVjdGlvbiA9IGV4cG9ydEJyYW5kVGhlbWVUb2tlbnMoXCJ0aGVtZVwiLCBicmFuZFZhcmlhbnRDb2xsZWN0aW9uLCBleHBvcnRlZENvbGxlY3Rpb25EYXRhKTtcbiAgICAgICAgICAgICAgICBicmFuZFZhcmlhbnRDb2xsZWN0aW9uLnRva2Vucy50aGVtZVtcImNvbG9yXCJdID0ge1xuICAgICAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic2NvcGVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQUxMX1NDT1BFU1wiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IHRvQ2FtZWxDYXNlKGJyYW5kTW9kZU5hbWUpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmaWxlcy5wdXNoKC4uLnJlbWFwUHJpbWFyeVZhcmlhYmxlcyhleHBvcnRlZENvbGxlY3Rpb25EYXRhLCAobW9kZU5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGB0aGVtZS4ke3RvQ2FtZWxDYXNlKG1vZGVOYW1lKX1gO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJhbXMuY3JlYXRlQ29tcG9uZW50VG9rZW5zICYmIGNvbGxlY3Rpb24ubmFtZSA9PSBjb2xsZWN0aW9uTmFtZXMuZ2V0KFwiY29tcG9uZW50Q29sb3JzXCIpKSB7XG4gICAgICAgICAgICAgICAgaW1wb3J0QnJhbmRTcGVjaWZpY1Rva2Vucyhjb2xsZWN0aW9uLCAnY29tcG9uZW50JywgZXhwb3J0ZWRDb2xsZWN0aW9uRGF0YSwgZmlsZXMsIGJyYW5kVmFyaWFudENvbGxlY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaXNCcmFuZFNwZWNpZmljQ29sbGVjdGlvbiA9IChjb2xsZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24ubmFtZSA9PSBjb2xsZWN0aW9uTmFtZXMuZ2V0KFwidHlwZUZhY2VcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbi5uYW1lID09IGNvbGxlY3Rpb25OYW1lcy5nZXQoXCJ0eXBlU2NhbGVcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbi5uYW1lID09IGNvbGxlY3Rpb25OYW1lcy5nZXQoXCJyYWRpaVwiKSB8fFxuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLm5hbWUgPT0gY29sbGVjdGlvbk5hbWVzLmdldChcInNwYWNpbmdcIik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5jcmVhdGVUeXBvZ3JhcGh5VG9rZW5zICYmIGlzQnJhbmRTcGVjaWZpY0NvbGxlY3Rpb24oY29sbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICBpbXBvcnRCcmFuZFNwZWNpZmljVG9rZW5zKGNvbGxlY3Rpb24sICdicmFuZCcsIGV4cG9ydGVkQ29sbGVjdGlvbkRhdGEsIGZpbGVzLCBicmFuZFZhcmlhbnRDb2xsZWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwiRVhQT1JUX1JFU1VMVF9CUkFORFwiLCBmaWxlcyB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGV4cGFuZFRva2VuTmFtZVRvT2JqZWN0KHRva2Vucykge1xuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICBPYmplY3QuZW50cmllcyh0b2tlbnMpLmZvckVhY2goKFt0b2tlbk5hbWUsIHRva2VuRGF0YV0pID0+IHtcbiAgICAgICAgbGV0IHRva2VuID0gdmFyaWFibGVOYW1lVG9PYmplY3QoeyBuYW1lOiB0b2tlbk5hbWUsIHRhcmdldE9iamVjdDogZGF0YSB9KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0b2tlbiwgdG9rZW5EYXRhKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbn1cbmZ1bmN0aW9uIGltcG9ydEJyYW5kU3BlY2lmaWNUb2tlbnMoY29sbGVjdGlvbiwgdGFyZ2V0S2V5LCBleHBvcnRlZENvbGxlY3Rpb25EYXRhLCBmaWxlcywgYnJhbmRWYXJpYW50Q29sbGVjdGlvbikge1xuICAgIGNvbnN0IGRlZmF1bHRNb2RlSWQgPSBjb2xsZWN0aW9uLmRlZmF1bHRNb2RlSWQ7XG4gICAgY29uc3QgZGVmYXVsdHRNb2RlID0gY29sbGVjdGlvbi5tb2Rlcy5maW5kKG1vZGUgPT4gbW9kZS5tb2RlSWQgPT09IGRlZmF1bHRNb2RlSWQpO1xuICAgIGNvbnN0IGV4cG9ydERhdGEgPSBleHBvcnRlZENvbGxlY3Rpb25EYXRhLmZpbmQocmVjb3JkID0+IHJlY29yZC5tb2RlID09PSBkZWZhdWx0dE1vZGUubmFtZSk7XG4gICAgY29uc3QgZGF0YSA9IGV4cGFuZFRva2VuTmFtZVRvT2JqZWN0KGV4cG9ydERhdGEudG9rZW5zKTtcbiAgICBicmFuZFZhcmlhbnRDb2xsZWN0aW9uLnRva2Vuc1t0YXJnZXRLZXldID0gT2JqZWN0LmFzc2lnbihicmFuZFZhcmlhbnRDb2xsZWN0aW9uLnRva2Vuc1t0YXJnZXRLZXldLCBkYXRhKTtcbiAgICBmaWxlcy5wdXNoKC4uLnJlbWFwUHJpbWFyeVZhcmlhYmxlcyhbZXhwb3J0RGF0YV0sIChtb2RlTmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gYCR7dGFyZ2V0S2V5fWA7XG4gICAgfSkpO1xuICAgIHJldHVybiBicmFuZFZhcmlhbnRDb2xsZWN0aW9uO1xufVxuZnVuY3Rpb24gZ2V0VG9rZW5WYWx1ZUZyb21WYXJpYWJsZSh2YWx1ZSwgdmFyaWFibGUsIGNvbG9yRm9ybWF0KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IHZhbHVlWyd0eXBlJ107XG4gICAgICAgIGlmICh0eXBlID09PSBcIlZBUklBQkxFX0FMSUFTXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGFsaWFzID0geWllbGQgZ2V0QWxpYXNOYW1lKHZhbHVlWydpZCddKTtcbiAgICAgICAgICAgIHJldHVybiBhbGlhcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFyaWFibGUucmVzb2x2ZWRUeXBlID09IFwiQ09MT1JcIikge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnZlcnRGaWdtYUNvbG9yVG9SZ2IodmFsdWUsIGNvbG9yRm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7dmFsdWV9YDtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGV4cG9ydEZpZ21hVmFyaWFibGVDb2xsZWN0aW9uKGNvbGxlY3Rpb24sIGNvbG9yRm9ybWF0ID0gXCJoc2xcIikge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25zID0gW107XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlUmVmZXJlbmNlcyA9IGNvbGxlY3Rpb24udmFyaWFibGVJZHMuc29ydCgpO1xuICAgICAgICBjb25zdCB0eXBlTmFtZXMgPSBuZXcgTWFwKFtcbiAgICAgICAgICAgIFtcIkNPTE9SXCIsIFwiY29sb3JcIl0sXG4gICAgICAgICAgICBbXCJCT09MRUFOXCIsIFwiYm9vbGVhblwiXSxcbiAgICAgICAgICAgIFtcIkZMT0FUXCIsIFwibnVtYmVyXCJdLFxuICAgICAgICAgICAgW1wiU1RSSU5HXCIsIFwic3RyaW5nXCJdXG4gICAgICAgIF0pO1xuICAgICAgICBmb3IgKGNvbnN0IG1vZGUgb2YgY29sbGVjdGlvbi5tb2Rlcykge1xuICAgICAgICAgICAgY29uc3QgY29sbGVjdGlvblJlY29yZCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInZhcmlhYmxlc1wiLFxuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24ubmFtZSxcbiAgICAgICAgICAgICAgICBtb2RlOiBtb2RlLm5hbWUsXG4gICAgICAgICAgICAgICAgdG9rZW5zOiB7fVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdmFyaWFibGVJZCBvZiB2YXJpYWJsZVJlZmVyZW5jZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWdtYVZhcmlhYmxlID0geWllbGQgZmlnbWEudmFyaWFibGVzLmdldFZhcmlhYmxlQnlJZEFzeW5jKHZhcmlhYmxlSWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgcmVzb2x2ZWRUeXBlLCBzY29wZXMsIHZhbHVlc0J5TW9kZSB9ID0gZmlnbWFWYXJpYWJsZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuYW1lKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc0J5TW9kZVttb2RlLm1vZGVJZF07XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgdmFsdWVPYmplY3QgPSB2YXJpYWJsZU5hbWVUb09iamVjdChuYW1lLCBjb2xsZWN0aW9uUmVjb3JkLnRva2Vucyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB7XG4gICAgICAgICAgICAgICAgICAgICR0eXBlOiB0eXBlTmFtZXMuZ2V0KHJlc29sdmVkVHlwZSksXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZTogeWllbGQgZ2V0VG9rZW5WYWx1ZUZyb21WYXJpYWJsZSh2YWx1ZSwgZmlnbWFWYXJpYWJsZSwgY29sb3JGb3JtYXQpLFxuICAgICAgICAgICAgICAgICAgICBzY29wZXM6IHNjb3BlcyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGZpZ21hVmFyaWFibGUuZGVzY3JpcHRpb24gfHwgXCJcIlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvblJlY29yZC50b2tlbnNbbmFtZV0gPSB0b2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25zLnB1c2goY29sbGVjdGlvblJlY29yZCk7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbnM7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBleHBvcnRUZXh0U3R5bGVzKHN0eWxlcykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChzdHlsZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSB7XG4gICAgICAgICAgICB0eXBlOiBcInRleHRTdHlsZXNcIixcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IFwiVGV4dCBTdHlsZXNcIixcbiAgICAgICAgICAgIG1vZGU6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgdG9rZW5zOiB7fVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKGNvbnN0IHN0eWxlIG9mIHN0eWxlcykge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHN0eWxlLm5hbWU7XG4gICAgICAgICAgICBsZXQgdG9rZW4gPSB2YXJpYWJsZU5hbWVUb09iamVjdCh7IG5hbWUsIHRhcmdldE9iamVjdDogY29sbGVjdGlvbi50b2tlbnMgfSk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRva2VuLCB7XG4gICAgICAgICAgICAgICAgJHZhbHVlOiB5aWVsZCBjb252ZXJ0RmlnbWFUZXh0U3R5bGVUb1Rva2VuKHN0eWxlKSxcbiAgICAgICAgICAgICAgICAkdHlwZTogXCJ0eXBvZ3JhcGh5XCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGV4cG9ydEVmZmVjdFN0eWxlcyhzdHlsZXMsIGNvbG9yRm9ybWF0KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKHN0eWxlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IHtcbiAgICAgICAgICAgIHR5cGU6IFwiZWZmZWN0U3R5bGVzXCIsXG4gICAgICAgICAgICBjb2xsZWN0aW9uOiBcIkVmZmVjdCBTdHlsZXNcIixcbiAgICAgICAgICAgIG1vZGU6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgdG9rZW5zOiB7fVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKGNvbnN0IHN0eWxlIG9mIHN0eWxlcykge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHN0eWxlLm5hbWU7XG4gICAgICAgICAgICBsZXQgdG9rZW4gPSB2YXJpYWJsZU5hbWVUb09iamVjdCh7IG5hbWUsIHRhcmdldE9iamVjdDogY29sbGVjdGlvbi50b2tlbnMgfSk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRva2VuLCB7XG4gICAgICAgICAgICAgICAgJHZhbHVlOiB5aWVsZCBjb252ZXJ0RmlnbWFFZmZlY3RTdHlsZVRvVG9rZW4oc3R5bGUsIGNvbG9yRm9ybWF0KSxcbiAgICAgICAgICAgICAgICAkdHlwZTogXCJlZmZlY3RcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogc3R5bGUuZGVzY3JpcHRpb24gfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaW1wb3J0RnJvbUpTT04oZGF0YSwgcGFyYW1zKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbnMgPSBbXTsgLy8gdW5pcXVlIHNldCBvZiBjb2xsZWN0aW9ucyB0byBpbXBvcnRcbiAgICAgICAgY29uc3QgdW5pcXVlQ29sbGVjdGlvbnMgPSBkYXRhLmZpbHRlcihyZWNvcmQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29sbGVjdGlvbk5hbWUgPSByZWNvcmQuY29sbGVjdGlvbjtcbiAgICAgICAgICAgIC8vIGdldCB1bmlxdWUgY29sbGVjdGlvbiBsaXN0XG4gICAgICAgICAgICBpZiAoY29sbGVjdGlvbnMuaW5kZXhPZihjb2xsZWN0aW9uTmFtZSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbnMucHVzaChjb2xsZWN0aW9uTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgdG9rZW5zRGljdGlvbmFyeSA9IHt9O1xuICAgICAgICAvLyBpdGVyYXRlIGVhY2ggY29sbGVjdGlvbiwgaWdub3JlIGFkZGl0aW9uYWwgbW9kZXMgYW5kIG1ha2UgYSBkaWN0aW9uYXJ5XG4gICAgICAgIHVuaXF1ZUNvbGxlY3Rpb25zLmZvckVhY2goY29sbGVjdGlvblJlY29yZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBmbGF0VG9rZW5zID0gZmxhdHRlbk9iamVjdChjb2xsZWN0aW9uUmVjb3JkLnRva2Vucyk7XG4gICAgICAgICAgICB0b2tlbnNEaWN0aW9uYXJ5ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0b2tlbnNEaWN0aW9uYXJ5KSwgZmxhdFRva2Vucyk7XG4gICAgICAgIH0pO1xuICAgICAgICBhZGRUb0dsb2JhbFRva2Vuc0RpY3Rpb25hcnkodG9rZW5zRGljdGlvbmFyeSk7XG4gICAgICAgIHdoaWxlICh1bmlxdWVDb2xsZWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3Rpb25SZWNvcmQgPSB1bmlxdWVDb2xsZWN0aW9ucy5zaGlmdCgpO1xuICAgICAgICAgICAgaWYgKGNvbGxlY3Rpb25SZWNvcmQudHlwZSA9PSBcInZhcmlhYmxlc1wiKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgZ2V0Q29sbGVjdGlvbkFuZFByZXBhcmVUb2tlbnMoe1xuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvblJlY29yZC5jb2xsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBtb2RlTmFtZTogY29sbGVjdGlvblJlY29yZC5tb2RlLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBmbGF0dGVuT2JqZWN0KGNvbGxlY3Rpb25SZWNvcmQudG9rZW5zKSxcbiAgICAgICAgICAgICAgICAgICAgc29ydEZuOiBnZXRTb3J0Rm5CeUNvbGxlY3Rpb25OYW1lKGNvbGxlY3Rpb25SZWNvcmQuY29sbGVjdGlvbilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB5aWVsZCBkZWxheUFzeW5jKDUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0b2tlbnMgY291bnRcbiAgICAgICAgbGV0IHRva2Vuc0NvdW50VG90YWwgPSAwO1xuICAgICAgICBsZXQgdG9rZW5zSW1wb3J0ZWRDb3VudCA9IDA7XG4gICAgICAgIGRhdGEuZm9yRWFjaChjb2xsZWN0aW9uUmVjb3JkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZsYXRUb2tlbnMgPSBmbGF0dGVuT2JqZWN0KGNvbGxlY3Rpb25SZWNvcmQudG9rZW5zKTtcbiAgICAgICAgICAgIHRva2Vuc0NvdW50VG90YWwgKz0gT2JqZWN0LmtleXMoZmxhdFRva2VucykubGVuZ3RoO1xuICAgICAgICB9KTtcbiAgICAgICAgd2hpbGUgKGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBjb2xsZWN0aW9uUmVjb3JkID0gZGF0YS5zaGlmdCgpO1xuICAgICAgICAgICAgY29uc3QgZmxhdFRva2VucyA9IGZsYXR0ZW5PYmplY3QoY29sbGVjdGlvblJlY29yZC50b2tlbnMpO1xuICAgICAgICAgICAgaWYgKGNvbGxlY3Rpb25SZWNvcmQudHlwZSA9PSBcInZhcmlhYmxlc1wiKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgaW1wb3J0VmFyaWFibGVzKHtcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25SZWNvcmQuY29sbGVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbW9kZU5hbWU6IGNvbGxlY3Rpb25SZWNvcmQubW9kZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZmxhdFRva2Vuc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHlpZWxkIGRlbGF5QXN5bmMoNSk7XG4gICAgICAgICAgICAgICAgdG9rZW5zSW1wb3J0ZWRDb3VudCArPSBPYmplY3Qua2V5cyhmbGF0VG9rZW5zKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEltcG9ydGVkICR7dG9rZW5zSW1wb3J0ZWRDb3VudH0gb3V0IG9mICR7dG9rZW5zQ291bnRUb3RhbH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2xsZWN0aW9uUmVjb3JkLnR5cGUgPT0gXCJ0ZXh0U3R5bGVzXCIpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBpbXBvcnRUZXh0U3R5bGVzKHRva2Vuc0RpY3Rpb25hcnkpO1xuICAgICAgICAgICAgICAgIHlpZWxkIGRlbGF5QXN5bmMoNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29sbGVjdGlvblJlY29yZC50eXBlID09IFwiZWZmZWN0U3R5bGVzXCIpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBpbXBvcnRFZmZlY3RTdHlsZXMoZmxhdFRva2VucywgdG9rZW5zRGljdGlvbmFyeSk7XG4gICAgICAgICAgICAgICAgeWllbGQgZGVsYXlBc3luYyg1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0U29ydEZuQnlDb2xsZWN0aW9uTmFtZShuYW1lKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlcyA9IHtcbiAgICAgICAgXCJDb2xvciBUaGVtZVwiOiBnZXRDb2xvclRva2Vuc1NvcnRGbigpLFxuICAgICAgICBcIkJyYW5kIFZhcmlhbnRcIjogZ2V0Q29sb3JUb2tlbnNTb3J0Rm4oKSxcbiAgICAgICAgXCJDb21wb25lbnQgQ29sb3JzXCI6IGdldENvbG9yVG9rZW5zU29ydEZuKCksXG4gICAgICAgIFwiT3BhY2l0eVwiOiBnZXRBbHBoYU51bVRva2Vuc1NvcnRGbigpLFxuICAgICAgICBcIlNwYWNpbmdcIjogZ2V0U2l6ZVRva2Vuc1NvcnRGbigpLFxuICAgICAgICBcIlJhZGlpXCI6IGdldFNpemVUb2tlbnNTb3J0Rm4oKSxcbiAgICAgICAgXCJHbG9iYWwgU2l6aW5nXCI6IGdldEFscGhhTnVtVG9rZW5zU29ydEZuKCksXG4gICAgfTtcbiAgICByZXR1cm4gcmVmZXJlbmNlc1tuYW1lXTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZ2V0Q29sb3JUb2tlblZhbHVlLCBnZXRDb21wb25lbnRDb2xvcnMsIGdldEdsb2JhbE5ldXRyYWxzLCBnZXRTaGFkb3dDb2xvclRva2VucywgZ2V0VGhlbWVDb2xvcnMgfSBmcm9tICcuL2NvbG9yLXRva2Vucyc7XG5pbXBvcnQgeyBnZXRGaWdtYUNvbGxlY3Rpb24sIHJlc29sdmVWYXJpYWJsZVR5cGUsIHNldEZpZ21hVmFyaWFibGUgfSBmcm9tIFwiLi91dGlscy9maWdtYS12YXJpYWJsZXNcIjtcbmltcG9ydCBjaHJvbWEgZnJvbSAnY2hyb21hLWpzJztcbmltcG9ydCAqIGFzIHNwYWNpbmdUb2tlbnMgZnJvbSAnLi9zcGFjaW5nLXRva2Vucyc7XG5pbXBvcnQgKiBhcyByYWRpaVRva2VucyBmcm9tICcuL3JhZGlpLXRva2Vucyc7XG5pbXBvcnQgKiBhcyB0eXBvZ3JhcGh5VG9rZW5zIGZyb20gJy4vdHlwb2dyYXBoeS10b2tlbnMnO1xuaW1wb3J0ICogYXMgc2l6aW5nVG9rZW5zIGZyb20gJy4vc2l6aW5nLXRva2Vucyc7XG5pbXBvcnQgKiBhcyBlZmZlY3RzVG9rZW5zIGZyb20gJy4vZWZmZWN0LXRva2Vucyc7XG5pbXBvcnQgKiBhcyBvcGFjaXR5VG9rZW5zIGZyb20gJy4vb3BhY2l0eS10b2tlbnMnO1xuaW1wb3J0IHsgY29sb3JUaGVtZXMsIGNvbG9yVGhlbWVOYW1lcywgY29sbGVjdGlvbk5hbWVzIH0gZnJvbSAnLi9kZWZhdWx0cyc7XG5pbXBvcnQgeyBnZXRTaXplVG9rZW5zU29ydEZuLCBnZXRDb2xvclRva2Vuc1NvcnRGbiwgZ2V0QWxwaGFOdW1Ub2tlbnNTb3J0Rm4gfSBmcm9tICcuL3V0aWxzL3NvcnQtdG9rZW5zJztcbmltcG9ydCB7IGltcG9ydFRleHRTdHlsZXMgfSBmcm9tICcuL3V0aWxzL2ZpZ21hLXRleHQtc3R5bGVzJztcbmltcG9ydCB7IGdldEdsb2JhbEFjY2VudFJhbXAgfSBmcm9tICcuL2NvbG9yLWdlbmVyYXRvcnMvYWNjZW50LXBhbGV0dGUtZ2VuZXJhdG9yJztcbmltcG9ydCB7IHJlc29sdmVBbGlhc09yVmFsdWUsIGFkZFRvR2xvYmFsVG9rZW5zRGljdGlvbmFyeSwgZ2V0R2xvYmFsVG9rZW5zRGljdGlvbmFyeSB9IGZyb20gJy4vdXRpbHMvdG9rZW4tcmVmZXJlbmNlcyc7XG5pbXBvcnQgeyB0b1RpdGxlQ2FzZSB9IGZyb20gJy4vdXRpbHMvdGV4dC10by10aXRsZS1jYXNlJztcbmltcG9ydCB7IHJhZGlpU2l6ZU5hbWUsIHNwYWNpbmdTaXplTmFtZSwgdHlwb2dyYXBoeVNpemVOYW1lIH0gZnJvbSAnLi9kZWZhdWx0cyc7XG5pbXBvcnQgeyBpbXBvcnRFZmZlY3RTdHlsZXMgfSBmcm9tICcuL3V0aWxzL2ZpZ21hLWVmZmVjdC1zdHlsZXMnO1xuaW1wb3J0IHsgZmxhdHRlbk9iamVjdCB9IGZyb20gJy4vdXRpbHMvZmxhdHRlbi1vYmplY3QnO1xuaW1wb3J0IHsgcm91bmRUd29EaWdpdHMgfSBmcm9tICcuL3V0aWxzL3JvdW5kLWRlY2ltYWxzJztcbmltcG9ydCB7IF9jbG9uZSB9IGZyb20gJy4vdXRpbHMvY2xvbmUnO1xuaW1wb3J0ICogYXMgdGhlbWVTdG9yZSBmcm9tICcuL3V0aWxzL3RoZW1lcy1zdG9yZSc7XG5jb25zb2xlLmNsZWFyKCk7XG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhdGVJbXBvcnQoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gdGhlbWVTdG9yZS5nZXRUaGVtZSgnbGlnaHQnKTtcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgICAgIHBhcmFtcy5jcmVhdGVDb21wb25lbnRUb2tlbnMgJiYgKHlpZWxkIGdldENvbGxlY3Rpb25BbmRQcmVwYXJlVG9rZW5zKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZXMuZ2V0KCdjb21wb25lbnRDb2xvcnMnKSxcbiAgICAgICAgICAgIG1vZGVOYW1lOiBcIkRlZmF1bHRcIixcbiAgICAgICAgICAgIGRhdGE6IGdldENvbXBvbmVudENvbG9ycygpLFxuICAgICAgICAgICAgc29ydEZuOiBnZXRDb2xvclRva2Vuc1NvcnRGbigpXG4gICAgICAgIH0pKTtcbiAgICAgICAgcGFyYW1zLmNyZWF0ZUNvbG9yVG9rZW5zICYmICh5aWVsZCBnZXRDb2xsZWN0aW9uQW5kUHJlcGFyZVRva2Vucyh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgndGhlbWVDb2xvcnMnKSxcbiAgICAgICAgICAgIG1vZGVOYW1lOiBcIkxpZ2h0IEJhc2VcIixcbiAgICAgICAgICAgIGRhdGE6IGdldFRoZW1lQ29sb3JzKCdsaWdodEJhc2UnLCBwYXJhbXMpLFxuICAgICAgICAgICAgc29ydEZuOiBnZXRDb2xvclRva2Vuc1NvcnRGbigpXG4gICAgICAgIH0pKTtcbiAgICAgICAgcGFyYW1zLmNyZWF0ZVNwYWNpbmdUb2tlbnMgJiYgKHlpZWxkIGdldENvbGxlY3Rpb25BbmRQcmVwYXJlVG9rZW5zKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZXMuZ2V0KCdzcGFjaW5nJyksXG4gICAgICAgICAgICBtb2RlTmFtZTogdG9UaXRsZUNhc2UocGFyYW1zLnNwYWNpbmcpLFxuICAgICAgICAgICAgZGF0YTogc3BhY2luZ1Rva2Vuc1twYXJhbXMuc3BhY2luZ10sXG4gICAgICAgICAgICBzb3J0Rm46IGdldFNpemVUb2tlbnNTb3J0Rm4oKSxcbiAgICAgICAgfSkpO1xuICAgICAgICBwYXJhbXMuY3JlYXRlUmFkaWlUb2tlbnMgJiYgKHlpZWxkIGdldENvbGxlY3Rpb25BbmRQcmVwYXJlVG9rZW5zKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZXMuZ2V0KCdyYWRpaScpLFxuICAgICAgICAgICAgbW9kZU5hbWU6IHRvVGl0bGVDYXNlKHBhcmFtcy5yYWRpaSksXG4gICAgICAgICAgICBkYXRhOiByYWRpaVRva2Vuc1twYXJhbXMucmFkaWldLFxuICAgICAgICAgICAgc29ydEZuOiBnZXRTaXplVG9rZW5zU29ydEZuKCksXG4gICAgICAgIH0pKTtcbiAgICAgICAgcGFyYW1zLmNyZWF0ZVR5cG9ncmFwaHlUb2tlbnMgJiYgKHlpZWxkIGdldENvbGxlY3Rpb25BbmRQcmVwYXJlVG9rZW5zKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBcIlR5cGUgU2NhbGVcIixcbiAgICAgICAgICAgIG1vZGVOYW1lOiB0b1RpdGxlQ2FzZShwYXJhbXMuYmFzZUZvbnRTaXplKSxcbiAgICAgICAgICAgIGRhdGE6IHR5cG9ncmFwaHlUb2tlbnNbcGFyYW1zLmJhc2VGb250U2l6ZV0sXG4gICAgICAgICAgICBzb3J0Rm46IGdldFNpemVUb2tlbnNTb3J0Rm4oKSxcbiAgICAgICAgfSkpO1xuICAgICAgICBwYXJhbXMuY3JlYXRlT3BhY2l0eVRva2VucyAmJiAoeWllbGQgZ2V0Q29sbGVjdGlvbkFuZFByZXBhcmVUb2tlbnMoe1xuICAgICAgICAgICAgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lcy5nZXQoJ29wYWNpdHknKSxcbiAgICAgICAgICAgIG1vZGVOYW1lOiB0b1RpdGxlQ2FzZShcImRlZmF1bHRcIiksXG4gICAgICAgICAgICBkYXRhOiBvcGFjaXR5VG9rZW5zLm9wYWNpdHksXG4gICAgICAgICAgICBzb3J0Rm46IGdldEFscGhhTnVtVG9rZW5zU29ydEZuKCksXG4gICAgICAgIH0pKTtcbiAgICAgICAgcGFyYW1zLmNyZWF0ZUdsb2JhbFNpemVUb2tlbnMgJiYgKHlpZWxkIGdldENvbGxlY3Rpb25BbmRQcmVwYXJlVG9rZW5zKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZXMuZ2V0KCdnbG9iYWxTaXppbmcnKSxcbiAgICAgICAgICAgIG1vZGVOYW1lOiB0b1RpdGxlQ2FzZShcImRlZmF1bHRcIiksXG4gICAgICAgICAgICBkYXRhOiBzaXppbmdUb2tlbnMuZ2xvYmFsLFxuICAgICAgICAgICAgc29ydEZuOiBnZXRBbHBoYU51bVRva2Vuc1NvcnRGbigpLFxuICAgICAgICB9KSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZVZhcmlhYmxlc0ZvclBsYXlncm91bmQoZGF0YSwgaXNQbGF5Z3JvdW5kID0gZmFsc2UpIHtcbiAgICBpZiAoaXNQbGF5Z3JvdW5kID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIDtcbiAgICBjb25zdCBjb250cmFzdFJhdGlvcyA9IHt9O1xuICAgIGNvbnN0IHByaW1hcnlDb2xvckhVRSA9IGRhdGEucHJpbWFyeTtcbiAgICBjb25zdCBzaGFkZXMgPSBnZXRHbG9iYWxBY2NlbnRSYW1wKGRhdGFbcHJpbWFyeUNvbG9ySFVFXSwgZGF0YS5hY2NlbnRTYXR1cmF0aW9uLCBkYXRhLmFjY2VudE1pbkx1bWluYW5jZSwgZGF0YS5hY2NlbnRNaWRMdW1pbmFuY2UsIGRhdGEuYWNjZW50TWF4THVtaW5hbmNlKTtcbiAgICBPYmplY3QuZW50cmllcyhzaGFkZXMpLmZvckVhY2goKFtuYW1lLCB0b2tlbl0pID0+IHtcbiAgICAgICAgdG9rZW4uc2NvcGVzID0gW107XG4gICAgICAgIGxldCBjaHJvbWFDb2xvciA9IGNocm9tYSh0b2tlbi4kdmFsdWUpO1xuICAgICAgICBjb25zdCBjb250cmFzdDEgPSByb3VuZFR3b0RpZ2l0cyhjaHJvbWEuY29udHJhc3QoY2hyb21hLmhzbCgwLCAwLCAxKSwgY2hyb21hQ29sb3IpKTtcbiAgICAgICAgY29uc3QgY29udHJhc3QyID0gcm91bmRUd29EaWdpdHMoY2hyb21hLmNvbnRyYXN0KGNocm9tYS5oc2woMCwgMCwgMC4yMiksIGNocm9tYUNvbG9yKSk7XG4gICAgICAgIGNvbnRyYXN0UmF0aW9zW2BfYWNjZW50XyR7bmFtZX1fdnNfbGlnaHRgXSA9IHtcbiAgICAgICAgICAgIFwiJHZhbHVlXCI6IGNvbnRyYXN0MS50b1N0cmluZygpLFxuICAgICAgICAgICAgXCIkdHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgXCJzY29wZXNcIjogW11cbiAgICAgICAgfTtcbiAgICAgICAgY29udHJhc3RSYXRpb3NbYF9hY2NlbnRfJHtuYW1lfV92c19kYXJrYF0gPSB7XG4gICAgICAgICAgICBcIiR2YWx1ZVwiOiBjb250cmFzdDIudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIFwiJHR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIFwic2NvcGVzXCI6IFtdXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgaW1wb3J0VmFyaWFibGVzKHtcbiAgICAgICAgY29sbGVjdGlvbk5hbWU6IFwiX1BsYXlncm91bmRcIixcbiAgICAgICAgbW9kZU5hbWU6IFwiRGVmYXVsdFwiLFxuICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZmxhdHRlbk9iamVjdCh7ICdfZ2xvYmFsLWFjY2VudCc6IHNoYWRlcyB9KSksIGNvbnRyYXN0UmF0aW9zKSwgeyAnX3ByaW1hcnktY29sb3ItaHVlJzoge1xuICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IGRhdGFbZGF0YS5wcmltYXJ5XS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInNjb3Blc1wiOiBbXVxuICAgICAgICAgICAgfSwgJ19wcmltYXJ5LWNvbG9yJzoge1xuICAgICAgICAgICAgICAgIFwiJHZhbHVlXCI6IGRhdGEucHJpbWFyeSxcbiAgICAgICAgICAgICAgICBcIiR0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJzY29wZXNcIjogW11cbiAgICAgICAgICAgIH0sICdfc3VjY2Vzcy1jb2xvcic6IHtcbiAgICAgICAgICAgICAgICBcIiR2YWx1ZVwiOiBkYXRhLnN1Y2Nlc3MsXG4gICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwic2NvcGVzXCI6IFtdXG4gICAgICAgICAgICB9LCAnX3dhcm5pbmctY29sb3InOiB7XG4gICAgICAgICAgICAgICAgXCIkdmFsdWVcIjogZGF0YS53YXJuaW5nLFxuICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInNjb3Blc1wiOiBbXVxuICAgICAgICAgICAgfSwgJ19kYW5nZXItY29sb3InOiB7XG4gICAgICAgICAgICAgICAgXCIkdmFsdWVcIjogZGF0YS5kYW5nZXIsXG4gICAgICAgICAgICAgICAgXCIkdHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIFwic2NvcGVzXCI6IFtdXG4gICAgICAgICAgICB9LCAnX2luZm8tY29sb3InOiB7XG4gICAgICAgICAgICAgICAgXCIkdmFsdWVcIjogZGF0YS5pbmZvLFxuICAgICAgICAgICAgICAgIFwiJHR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcInNjb3Blc1wiOiBbXVxuICAgICAgICAgICAgfSB9KVxuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGltcG9ydEFsbFRva2VucygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0aGVtZVN0b3JlLnNhdmUoKTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gdGhlbWVTdG9yZS5nZXRUaGVtZSgnbGlnaHQnKTtcbiAgICAgICAgY29uc3QgaXNQbGF5Z3JvdW5kID0gZmlnbWEucm9vdC5nZXRQbHVnaW5EYXRhKCdTRFNQbGF5Z3JvdW5kJykgIT09ICcnO1xuICAgICAgICBnZW5lcmF0ZVZhcmlhYmxlc0ZvclBsYXlncm91bmQocGFyYW1zLCBpc1BsYXlncm91bmQpO1xuICAgICAgICBwYXJhbXMuY3JlYXRlQ29sb3JUb2tlbnMgJiYgKHlpZWxkIGltcG9ydENvbG9yVGhlbWUoKSk7XG4gICAgICAgIHBhcmFtcy5jcmVhdGVDb21wb25lbnRUb2tlbnMgJiYgKHlpZWxkIGltcG9ydFZhcmlhYmxlcyh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgnY29tcG9uZW50Q29sb3JzJyksXG4gICAgICAgICAgICBtb2RlTmFtZTogXCJEZWZhdWx0XCIsXG4gICAgICAgICAgICBkYXRhOiBnZXRDb21wb25lbnRDb2xvcnMoKVxuICAgICAgICB9KSk7XG4gICAgICAgIHBhcmFtcy5jcmVhdGVTcGFjaW5nVG9rZW5zICYmICh5aWVsZCBpbXBvcnRTaXplVG9rZW5zKHtcbiAgICAgICAgICAgIHR5cGU6ICdzcGFjaW5nJyxcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZXMuZ2V0KCdzcGFjaW5nJyksXG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICAgIGRlZmF1bHRNb2RlOiBwYXJhbXMuc3BhY2luZyxcbiAgICAgICAgICAgIGRlZmF1bHRPcmRlcjogc3BhY2luZ1NpemVOYW1lLFxuICAgICAgICAgICAgdG9rZW5zOiBzcGFjaW5nVG9rZW5zLmdldFNwYWNpbmdUb2tlbnMocGFyYW1zLnZlcnRpY2FsU3BhY2luZylcbiAgICAgICAgfSkpO1xuICAgICAgICBwYXJhbXMuY3JlYXRlUmFkaWlUb2tlbnMgJiYgKHlpZWxkIGltcG9ydFNpemVUb2tlbnMoe1xuICAgICAgICAgICAgdHlwZTogJ3JhZGlpJyxcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZXMuZ2V0KCdyYWRpaScpLFxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgICBkZWZhdWx0TW9kZTogcGFyYW1zLnJhZGlpLFxuICAgICAgICAgICAgZGVmYXVsdE9yZGVyOiByYWRpaVNpemVOYW1lLFxuICAgICAgICAgICAgdG9rZW5zOiByYWRpaVRva2Vuc1xuICAgICAgICB9KSk7XG4gICAgICAgIHBhcmFtcy5jcmVhdGVUeXBvZ3JhcGh5VG9rZW5zICYmICh5aWVsZCBpbXBvcnRUeXBvZ3JhcGh5VG9rZW5zKHBhcmFtcykpO1xuICAgICAgICBwYXJhbXMuY3JlYXRlT3BhY2l0eVRva2VucyAmJiAoeWllbGQgaW1wb3J0VmFyaWFibGVzKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZXMuZ2V0KCdvcGFjaXR5JyksXG4gICAgICAgICAgICBtb2RlTmFtZTogXCJEZWZhdWx0XCIsXG4gICAgICAgICAgICBkYXRhOiBvcGFjaXR5VG9rZW5zLm9wYWNpdHlcbiAgICAgICAgfSkpO1xuICAgICAgICBwYXJhbXMuY3JlYXRlR2xvYmFsU2l6ZVRva2VucyAmJiAoeWllbGQgaW1wb3J0VmFyaWFibGVzKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZXMuZ2V0KCdnbG9iYWxTaXppbmcnKSxcbiAgICAgICAgICAgIG1vZGVOYW1lOiBcIkRlZmF1bHRcIixcbiAgICAgICAgICAgIGRhdGE6IHNpemluZ1Rva2Vucy5nbG9iYWxcbiAgICAgICAgfSkpO1xuICAgICAgICBwYXJhbXMuY3JlYXRlRWxldmF0aW9uVG9rZW5zICYmICh5aWVsZCBpbXBvcnRFZmZlY3RUb2tlbnMocGFyYW1zKSk7XG4gICAgICAgIGZpZ21hLm5vdGlmeShcIkZpZ21hIHZhcmlhYmxlcyBoYXMgYmVlbiBpbXBvcnRlZFwiKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoXCJJTVBPUlRfQ09NUExFVEVEXCIpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0VGhlbWVQYXJhbXModGhlbWUpIHtcbiAgICBpZiAodGhlbWUuc3RhcnRzV2l0aCgnbGlnaHQnKSkge1xuICAgICAgICByZXR1cm4gdGhlbWVTdG9yZS5nZXRUaGVtZSgnbGlnaHQnKTtcbiAgICB9XG4gICAgaWYgKHRoZW1lLnN0YXJ0c1dpdGgoJ2RhcmsnKSkge1xuICAgICAgICByZXR1cm4gdGhlbWVTdG9yZS5nZXRUaGVtZSgnZGFyaycpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVudXN1YWwgdGhlbWUgbmFtZSAke3RoZW1lfWApO1xufVxuZnVuY3Rpb24gaW1wb3J0Q29sb3JUaGVtZSgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBkZWZhdWx0VGhlbWVzID0gX2Nsb25lKGNvbG9yVGhlbWVzKTtcbiAgICAgICAgYWRkVG9HbG9iYWxUb2tlbnNEaWN0aW9uYXJ5KE9iamVjdC5hc3NpZ24oe30sIGdldENvbXBvbmVudENvbG9ycygpKSk7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIHdoaWxlIChkZWZhdWx0VGhlbWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgdGhlbWVOYW1lID0gZGVmYXVsdFRoZW1lcy5zaGlmdCgpO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gZ2V0VGhlbWVQYXJhbXModGhlbWVOYW1lKTtcbiAgICAgICAgICAgIGxldCB0aGVtZUNvbG9ycyA9IGdldFRoZW1lQ29sb3JzKHRoZW1lTmFtZSwgcGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IGdsb2JhbE5ldXRyYWxzID0gZ2V0R2xvYmFsTmV1dHJhbHMocGFyYW1zKTtcbiAgICAgICAgICAgIGFkZFRvR2xvYmFsVG9rZW5zRGljdGlvbmFyeShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGdsb2JhbE5ldXRyYWxzKSwgdGhlbWVDb2xvcnMpKTtcbiAgICAgICAgICAgIHlpZWxkIGltcG9ydFZhcmlhYmxlcyh7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lcy5nZXQoJ3RoZW1lQ29sb3JzJyksXG4gICAgICAgICAgICAgICAgbW9kZU5hbWU6IGNvbG9yVGhlbWVOYW1lc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgZGF0YTogdGhlbWVDb2xvcnNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBkZWJ1Z2dlcjtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGltcG9ydFNpemVUb2tlbnMoZGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHRva2VucyA9IGRhdGEudG9rZW5zO1xuICAgICAgICBjb25zdCBpc1NpbmdsZU1vZGUgPSBkYXRhLmlzU2luZ2xlTW9kZSB8fCBmYWxzZTtcbiAgICAgICAgY29uc3Qgc2luZ2xlQ29sbGVjdGlvbiA9IGRhdGEucGFyYW1zLnNpbmdsZUNvbGxlY3Rpb247XG4gICAgICAgIGNvbnN0IGRlZmF1bHRNb2RlID0gZGF0YS5kZWZhdWx0TW9kZTtcbiAgICAgICAgY29uc3QgZGVmYXVsdE9yZGVyID0gZGF0YS5kZWZhdWx0T3JkZXIuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPSBkZWZhdWx0TW9kZSk7XG4gICAgICAgIGRlZmF1bHRPcmRlci5zcGxpY2UoMCwgMCwgZGVmYXVsdE1vZGUpO1xuICAgICAgICBkZWZhdWx0T3JkZXIubGVuZ3RoID0gaXNTaW5nbGVNb2RlID8gMSA6IGRlZmF1bHRPcmRlci5sZW5ndGg7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgbW9kZU5hbWUgb2YgZGVmYXVsdE9yZGVyKSB7XG4gICAgICAgICAgICB5aWVsZCBpbXBvcnRWYXJpYWJsZXMoe1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBzaW5nbGVDb2xsZWN0aW9uID8gXCJVSSBTY2FsZVwiIDogZGF0YS5jb2xsZWN0aW9uTmFtZSxcbiAgICAgICAgICAgICAgICBtb2RlTmFtZTogdG9UaXRsZUNhc2UobW9kZU5hbWUpLFxuICAgICAgICAgICAgICAgIG1vZGVJbmRleDogaW5kZXgrKyxcbiAgICAgICAgICAgICAgICBkYXRhOiB0b2tlbnNbbW9kZU5hbWVdLFxuICAgICAgICAgICAgICAgIGlzU2luZ2xlTW9kZTogaXNTaW5nbGVNb2RlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbGxlY3Rpb25BbmRQcmVwYXJlVG9rZW5zKHsgY29sbGVjdGlvbk5hbWUsIG1vZGVOYW1lLCBtb2RlSW5kZXggPSAtMSwgZGF0YSwgc29ydEZuID0gbnVsbCwgaXNTaW5nbGVNb2RlID0gZmFsc2UgfSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCBtb2RlSWQ7XG4gICAgICAgIGNvbnN0IHsgY29sbGVjdGlvbiwgaXNOZXcgfSA9IHlpZWxkIGdldEZpZ21hQ29sbGVjdGlvbihjb2xsZWN0aW9uTmFtZSk7XG4gICAgICAgIGlmIChpc05ldyB8fCBpc1NpbmdsZU1vZGUpIHtcbiAgICAgICAgICAgIG1vZGVJZCA9IGNvbGxlY3Rpb24ubW9kZXNbMF0ubW9kZUlkO1xuICAgICAgICAgICAgY29sbGVjdGlvbi5yZW5hbWVNb2RlKG1vZGVJZCwgbW9kZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbW9kZSA9IG1vZGVJbmRleCA8IDAgPyBjb2xsZWN0aW9uLm1vZGVzLmZpbmQobW9kZSA9PiBtb2RlLm5hbWUgPT09IG1vZGVOYW1lKSA6IGNvbGxlY3Rpb24ubW9kZXNbbW9kZUluZGV4XTtcbiAgICAgICAgICAgIGlmICghbW9kZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGVJZCA9IGNvbGxlY3Rpb24uYWRkTW9kZShtb2RlTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZ21hLm5vdGlmeShcIkNhbm5vdCBjcmVhdGUgbW9yZSB0aGFuIG9uZSBtb2RlLiBJcyB5b3VyIGZpbGUgdW5kZXIgUHJvIHRlYW0gb3Igb3JnIHBsYW4/XCIsIHsgZXJyb3I6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW5ub3QgY3JlYXRlIG1vcmUgdGhhbiBvbmUgbW9kZS4gSXMgeW91ciBmaWxlIHVuZGVyIFBybyB0ZWFtIG9yIG9yZyBwbGFuP1wiLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vZGVJZCA9IG1vZGUubW9kZUlkO1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24ucmVuYW1lTW9kZShtb2RlSWQsIG1vZGVOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgdHJhbnNmb3JtZWRUb2tlbnMgPSBPYmplY3QuZW50cmllcyhkYXRhKS5tYXAoKFtrZXksIG9iamVjdF0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgbmFtZToga2V5IH0sIG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc29ydEZuICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybWVkVG9rZW5zLnNvcnQoc29ydEZuKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRyYW5zZm9ybWVkVG9rZW5zLm1hcCh0b2tlbiA9PiB0b2tlbi5uYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTmV3KSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgdmFyaWFibGVzIHN0cmFpZ2h0IGF3YXkgc28gdGhlcmUgaXMgYSB3YXkgdG8gbWFrZSBcbiAgICAgICAgICAgIC8vIHJlZmVyZW5jZXMgLyBhbGlhc2VzIHdpdGhvdXQgYWRkaXRpb25hbCBwYXNzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRva2VuIG9mIHRyYW5zZm9ybWVkVG9rZW5zKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IHJlc29sdmVWYXJpYWJsZVR5cGUodG9rZW5bXCIkdHlwZVwiXSk7XG4gICAgICAgICAgICAgICAgeWllbGQgc2V0RmlnbWFWYXJpYWJsZShjb2xsZWN0aW9uLCBtb2RlSWQsIHR5cGUsIHRva2VuLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b2tlbnM6IHRyYW5zZm9ybWVkVG9rZW5zLFxuICAgICAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgICAgIG1vZGVJZCxcbiAgICAgICAgICAgIHR5cGU6IGRhdGEuJHR5cGVcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbXBvcnRWYXJpYWJsZXMoeyBjb2xsZWN0aW9uTmFtZSwgbW9kZU5hbWUsIG1vZGVJbmRleCA9IC0xLCBkYXRhLCBzb3J0Rm4gPSBudWxsLCBpc1NpbmdsZU1vZGUgPSBmYWxzZSwgb3ZlcnJpZGVWYWx1ZXMgPSB0cnVlIH0pIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCB7IHRva2VucywgY29sbGVjdGlvbiwgbW9kZUlkLCB0eXBlIH0gPSB5aWVsZCBnZXRDb2xsZWN0aW9uQW5kUHJlcGFyZVRva2Vucyh7IGNvbGxlY3Rpb25OYW1lLCBtb2RlTmFtZSwgbW9kZUluZGV4LCBkYXRhLCBzb3J0Rm4sIGlzU2luZ2xlTW9kZSB9KTtcbiAgICAgICAgZm9yIChjb25zdCB0b2tlbiBvZiB0b2tlbnMpIHtcbiAgICAgICAgICAgIGxldCB0eXBlID0gJyR0eXBlJyBpbiB0b2tlbiA/IHRva2VuLiR0eXBlIDogJ3N0cmluZyc7XG4gICAgICAgICAgICB5aWVsZCBwcm9jZXNzVG9rZW4oe1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgICAgICAgICAgbW9kZUlkLFxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVOYW1lOiB0b2tlbi5uYW1lLFxuICAgICAgICAgICAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgICAgICAgICAgICBvdmVycmlkZVZhbHVlc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGltcG9ydFNoYWRvd1ZhcmlhYmxlcyhwYXJhbXMpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHBhcmFtcy5zaGFkb3dzU3R5bGU7XG4gICAgICAgIGFkZFRvR2xvYmFsVG9rZW5zRGljdGlvbmFyeShPYmplY3QuYXNzaWduKHt9LCBnZXRHbG9iYWxOZXV0cmFscyhwYXJhbXMpKSk7XG4gICAgICAgIHlpZWxkIGltcG9ydFZhcmlhYmxlcyh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgndGhlbWVDb2xvcnMnKSxcbiAgICAgICAgICAgIG1vZGVOYW1lOiAnTGlnaHQgQmFzZScsXG4gICAgICAgICAgICBkYXRhOiBnZXRTaGFkb3dDb2xvclRva2VucygnbGlnaHQnLCBwYXJhbXMpXG4gICAgICAgIH0pO1xuICAgICAgICB5aWVsZCBpbXBvcnRWYXJpYWJsZXMoe1xuICAgICAgICAgICAgY29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb25OYW1lcy5nZXQoJ3RoZW1lQ29sb3JzJyksXG4gICAgICAgICAgICBtb2RlTmFtZTogJ0RhcmsgQmFzZScsXG4gICAgICAgICAgICBkYXRhOiBnZXRTaGFkb3dDb2xvclRva2VucygnZGFyaycsIHBhcmFtcylcbiAgICAgICAgfSk7XG4gICAgICAgIHlpZWxkIGltcG9ydFZhcmlhYmxlcyh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbk5hbWVzLmdldCgndGhlbWVDb2xvcnMnKSxcbiAgICAgICAgICAgIG1vZGVOYW1lOiAnRGFyayBFbGV2YXRlZCcsXG4gICAgICAgICAgICBkYXRhOiBnZXRTaGFkb3dDb2xvclRva2VucygnZGFyaycsIHBhcmFtcylcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpbXBvcnRFZmZlY3RUb2tlbnMocGFyYW1zKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgdG9rZW5zID0gZWZmZWN0c1Rva2Vucy5nZXRFbGV2YXRpb25Ub2tlbnMocGFyYW1zKTtcbiAgICAgICAgeWllbGQgaW1wb3J0U2hhZG93VmFyaWFibGVzKHBhcmFtcyk7XG4gICAgICAgIHlpZWxkIGltcG9ydEVmZmVjdFN0eWxlcyh0b2tlbnMpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaW1wb3J0VHlwb2dyYXBoeVRva2VucyhwYXJhbXMpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCB0b2tlbnMgPSB0eXBvZ3JhcGh5VG9rZW5zLmdldFR5cG9ncmFwaHlUb2tlbnMocGFyYW1zLmJhc2VGb250U2l6ZSwgcGFyYW1zLnR5cGVTY2FsZSk7XG4gICAgICAgIGNvbnN0IHR5cGVTY2FsZVRva2VucyA9IHR5cG9ncmFwaHlUb2tlbnMuZ2V0VHlwU2NhbGVUb2tlbnMocGFyYW1zLnR5cGVTY2FsZSk7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25OYW1lID0gJ1R5cGUgRmFjZSc7XG4gICAgICAgIC8vIGNvbnN0IGNvbGxlY3Rpb24gPSBhd2FpdCBmaW5kRmlnbWFWYXJpYWJsZUNvbGxlY3Rpb25CeU5hbWUoY29sbGVjdGlvbk5hbWUpO1xuICAgICAgICBhZGRUb0dsb2JhbFRva2Vuc0RpY3Rpb25hcnkodG9rZW5zKTtcbiAgICAgICAgeWllbGQgaW1wb3J0VmFyaWFibGVzKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1vZGVOYW1lOiB0eXBvZ3JhcGh5VG9rZW5zLnR5cGVGYWNlW1wiZm9udC1mYW1pbHlcIl0uJHZhbHVlIHx8IFwiRGVmYXVsdFwiLFxuICAgICAgICAgICAgZGF0YTogdHlwb2dyYXBoeVRva2Vucy50eXBlRmFjZVxuICAgICAgICB9KTtcbiAgICAgICAgeWllbGQgaW1wb3J0U2l6ZVRva2Vucyh7XG4gICAgICAgICAgICB0eXBlOiAndHlwZVNjYWxlJyxcbiAgICAgICAgICAgIGNvbGxlY3Rpb25OYW1lOiBcIlR5cGUgU2NhbGVcIixcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgICAgZGVmYXVsdE1vZGU6IHBhcmFtcy5iYXNlRm9udFNpemUsXG4gICAgICAgICAgICBkZWZhdWx0T3JkZXI6IHR5cG9ncmFwaHlTaXplTmFtZSxcbiAgICAgICAgICAgIHRva2VuczogdHlwZVNjYWxlVG9rZW5zXG4gICAgICAgIH0pO1xuICAgICAgICB5aWVsZCBpbXBvcnRUZXh0U3R5bGVzKHRva2Vucyk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBwcm9jZXNzVG9rZW4oeyBjb2xsZWN0aW9uLCBtb2RlSWQsIHR5cGUsIHZhcmlhYmxlTmFtZSwgdG9rZW4sIG92ZXJyaWRlVmFsdWVzIH0pIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0eXBlID0gdHlwZSB8fCB0b2tlbi4kdHlwZTtcbiAgICAgICAgLy8gaWYga2V5IGlzIGEgbWV0YSBmaWVsZCwgbW92ZSBvblxuICAgICAgICBpZiAodmFyaWFibGVOYW1lLmNoYXJBdCgwKSA9PT0gXCIkXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdmFsdWVTdHJpbmcgPSBgJHt0b2tlbi4kdmFsdWV9YDtcbiAgICAgICAgaWYgKHRva2VuLiR2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJjb2xvclwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIHNldEZpZ21hVmFyaWFibGUoY29sbGVjdGlvbiwgbW9kZUlkLCBcIkNPTE9SXCIsIHZhcmlhYmxlTmFtZSwgeWllbGQgZ2V0Q29sb3JUb2tlblZhbHVlKHRva2VuLCBtb2RlSWQpLCB0b2tlbi5zY29wZXMgfHwgWydBTExfU0NPUEVTJ10sIHRva2VuLmRlc2NyaXB0aW9uIHx8IG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzb2x2ZWRWYWx1ZSA9IHlpZWxkIHJlc29sdmVBbGlhc09yVmFsdWUodmFsdWVTdHJpbmcsIGdldEdsb2JhbFRva2Vuc0RpY3Rpb25hcnkoKSk7XG4gICAgICAgICAgICAgICAgbGV0IG51bVZhbHVlID0gdHlwZW9mIHJlc29sdmVkVmFsdWUgPT0gJ3N0cmluZycgPyBwYXJzZUZsb2F0KHJlc29sdmVkVmFsdWUpIDogcmVzb2x2ZWRWYWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgc2V0RmlnbWFWYXJpYWJsZShjb2xsZWN0aW9uLCBtb2RlSWQsIFwiRkxPQVRcIiwgdmFyaWFibGVOYW1lLCBudW1WYWx1ZSwgdG9rZW4uc2NvcGVzLCB0b2tlbi5kZXNjcmlwdGlvbiB8fCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIHNldEZpZ21hVmFyaWFibGUoY29sbGVjdGlvbiwgbW9kZUlkLCBcIlNUUklOR1wiLCB2YXJpYWJsZU5hbWUsIHlpZWxkIHJlc29sdmVBbGlhc09yVmFsdWUodmFsdWVTdHJpbmcsIGdldEdsb2JhbFRva2Vuc0RpY3Rpb25hcnkoKSksIHRva2VuLnNjb3BlcywgdG9rZW4uZGVzY3JpcHRpb24gfHwgbnVsbCkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7IC8vIHNvbWUgY29kaW5nIGVycm9yIGluIGhhbmRsaW5nIGhhcHBlbmVkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwidW5zdXBwb3J0ZWQgdHlwZVwiLCB0eXBlLCB0b2tlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ3JlY3Vyc2lvbiBpbiAnLCB0b2tlbik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBvcGFjaXR5VG9rZW5zIGZyb20gXCIuL3Rva2Vucy9vcGFjaXR5L29wYWNpdHkudG9rZW5zLmpzb25cIjtcbmltcG9ydCB7IGZsYXR0ZW5PYmplY3QgfSBmcm9tIFwiLi91dGlscy9mbGF0dGVuLW9iamVjdFwiO1xuZXhwb3J0IGNvbnN0IG9wYWNpdHkgPSBmbGF0dGVuT2JqZWN0KG9wYWNpdHlUb2tlbnMpO1xuIiwiaW1wb3J0IGJhc2VSYWRpaVRva2VucyBmcm9tIFwiLi90b2tlbnMvcmFkaWkvYmFzZS50b2tlbnMuanNvblwiO1xuaW1wb3J0IGNvbXBhY3RSYWRpaVRva2VucyBmcm9tIFwiLi90b2tlbnMvcmFkaWkvY29tcGFjdC50b2tlbnMuanNvblwiO1xuaW1wb3J0IGxhcmdlUmFkaWlUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3JhZGlpL2xhcmdlLnRva2Vucy5qc29uXCI7XG5pbXBvcnQgeyBmbGF0dGVuT2JqZWN0IH0gZnJvbSBcIi4vdXRpbHMvZmxhdHRlbi1vYmplY3RcIjtcbmV4cG9ydCBjb25zdCBiYXNlID0gZmxhdHRlbk9iamVjdChiYXNlUmFkaWlUb2tlbnMpO1xuZXhwb3J0IGNvbnN0IGNvbXBhY3QgPSBmbGF0dGVuT2JqZWN0KGNvbXBhY3RSYWRpaVRva2Vucyk7XG5leHBvcnQgY29uc3QgbGFyZ2UgPSBmbGF0dGVuT2JqZWN0KGxhcmdlUmFkaWlUb2tlbnMpO1xuIiwiaW1wb3J0IGdsb2JhbFNpemluZ1Rva2VucyBmcm9tIFwiLi90b2tlbnMvc2l6aW5nL2dsb2JhbC50b2tlbnMuanNvblwiO1xuaW1wb3J0IGJhc2VTaXppbmdUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3NpemluZy9iYXNlLnRva2Vucy5qc29uXCI7XG5pbXBvcnQgdG91Y2hTaXppbmdUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3NpemluZy90b3VjaC50b2tlbnMuanNvblwiO1xuaW1wb3J0IHsgZmxhdHRlbk9iamVjdCB9IGZyb20gXCIuL3V0aWxzL2ZsYXR0ZW4tb2JqZWN0XCI7XG5leHBvcnQgY29uc3QgYmFzZSA9IGZsYXR0ZW5PYmplY3QoYmFzZVNpemluZ1Rva2Vucyk7XG5leHBvcnQgY29uc3QgdG91Y2ggPSBmbGF0dGVuT2JqZWN0KHRvdWNoU2l6aW5nVG9rZW5zKTtcbmV4cG9ydCBjb25zdCBnbG9iYWwgPSBmbGF0dGVuT2JqZWN0KGdsb2JhbFNpemluZ1Rva2Vucyk7XG4iLCJpbXBvcnQgYmFzZVNwYWNpbmdUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3NwYWNpbmcvYmFzZS5qc29uXCI7XG5pbXBvcnQgY29tcGFjdFNwYWNpbmdUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3NwYWNpbmcvY29tcGFjdC5qc29uXCI7XG5pbXBvcnQgbGFyZ2VTcGFjaW5nVG9rZW5zIGZyb20gXCIuL3Rva2Vucy9zcGFjaW5nL2xhcmdlLmpzb25cIjtcbmltcG9ydCB0b3VjaFNwYWNpbmdUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3NwYWNpbmcvdG91Y2guanNvblwiO1xuaW1wb3J0IHsgX2Nsb25lIH0gZnJvbSBcIi4vdXRpbHMvY2xvbmVcIjtcbmltcG9ydCB7IGZsYXR0ZW5PYmplY3QgfSBmcm9tIFwiLi91dGlscy9mbGF0dGVuLW9iamVjdFwiO1xuY29uc3QgdG9rZW5zID0ge1xuICAgIGJhc2U6IGJhc2VTcGFjaW5nVG9rZW5zLFxuICAgIGNvbXBhY3Q6IGNvbXBhY3RTcGFjaW5nVG9rZW5zLFxuICAgIGxhcmdlOiBsYXJnZVNwYWNpbmdUb2tlbnMsXG4gICAgdG91Y2g6IHRvdWNoU3BhY2luZ1Rva2Vuc1xufTtcbmV4cG9ydCBjb25zdCBiYXNlID0gZ2V0U3BhY2luZ1Rva2VucyhcInVuZXZlblwiLCBcImJhc2VcIik7XG5leHBvcnQgY29uc3QgY29tcGFjdCA9IGdldFNwYWNpbmdUb2tlbnMoXCJ1bmV2ZW5cIiwgXCJjb21wYWN0XCIpO1xuZXhwb3J0IGNvbnN0IGxhcmdlID0gZ2V0U3BhY2luZ1Rva2VucyhcInVuZXZlblwiLCBcImxhcmdlXCIpO1xuZXhwb3J0IGNvbnN0IHRvdWNoID0gZ2V0U3BhY2luZ1Rva2VucyhcInVuZXZlblwiLCBcInRvdWNoXCIpO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNwYWNpbmdUb2tlbnModmVydGljYWxTcGFjaW5nLCBzcGFjaW5nU2NhbGUpIHtcbiAgICBsZXQgb3V0cHV0ID0ge307XG4gICAgZm9yIChjb25zdCBzcGFjaW5nU2NhbGUgaW4gdG9rZW5zKSB7XG4gICAgICAgIG91dHB1dFtzcGFjaW5nU2NhbGVdID0gbm9ybWFsaXplU3BhY2luZ1Rva2VucyhzcGFjaW5nU2NhbGUsIHZlcnRpY2FsU3BhY2luZyA9PT0gXCJldmVuXCIpO1xuICAgIH1cbiAgICBpZiAoc3BhY2luZ1NjYWxlKSB7XG4gICAgICAgIHJldHVybiBvdXRwdXRbc3BhY2luZ1NjYWxlXTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNwYWNpbmdUb2tlbnMoc3BhY2luZ1NjYWxlLCBpc0V2ZW4pIHtcbiAgICBpZiAoIWlzRXZlbikge1xuICAgICAgICByZXR1cm4gZmxhdHRlbk9iamVjdCh0b2tlbnNbc3BhY2luZ1NjYWxlXSk7XG4gICAgfVxuICAgIGNvbnN0IHNjYWxlID0gX2Nsb25lKHRva2Vuc1tzcGFjaW5nU2NhbGVdKTtcbiAgICBjb25zdCBtYWpvciA9IHNjYWxlW1wic3BhY2luZ1wiXTtcbiAgICBjb25zdCBtaW5vciA9IHNjYWxlW1wic3BhY2luZ1wiXS5taW5vcjtcbiAgICBmb3IgKGNvbnN0IHRva2VuTmFtZSBpbiBtaW5vcikge1xuICAgICAgICBtaW5vclt0b2tlbk5hbWVdID0gbWFqb3JbdG9rZW5OYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIGZsYXR0ZW5PYmplY3Qoc2NhbGUpO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgdGV4dFN0eWxlVG9rZW5zIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L3N0eWxlcy5qc29uXCI7XG5pbXBvcnQgdHlwZUZhY2VUb2tlbnMgZnJvbSBcIi4vdG9rZW5zL3R5cG9ncmFwaHkvdHlwZWZhY2UuanNvblwiO1xuaW1wb3J0IGJhc2VNYWpvclRoaXJkIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L21ham9yLXRoaXJkL3R5cGVzY2FsZS1iYXNlLmpzb25cIjtcbmltcG9ydCBjb21wYWN0TWFqb3JUaGlyZCBmcm9tIFwiLi90b2tlbnMvdHlwb2dyYXBoeS9tYWpvci10aGlyZC90eXBlc2NhbGUtY29tcGFjdC5qc29uXCI7XG5pbXBvcnQgbGFyZ2VNYWpvclRoaXJkIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L21ham9yLXRoaXJkL3R5cGVzY2FsZS1sYXJnZS5qc29uXCI7XG5pbXBvcnQgYmFzZU1pbm9yVGhpcmQgZnJvbSBcIi4vdG9rZW5zL3R5cG9ncmFwaHkvbWlub3ItdGhpcmQvdHlwZXNjYWxlLWJhc2UuanNvblwiO1xuaW1wb3J0IGNvbXBhY3RNaW5vclRoaXJkIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L21pbm9yLXRoaXJkL3R5cGVzY2FsZS1jb21wYWN0Lmpzb25cIjtcbmltcG9ydCBsYXJnZU1pbm9yVGhpcmQgZnJvbSBcIi4vdG9rZW5zL3R5cG9ncmFwaHkvbWlub3ItdGhpcmQvdHlwZXNjYWxlLWxhcmdlLmpzb25cIjtcbmltcG9ydCBiYXNlTWFqb3JTZWNvbmQgZnJvbSBcIi4vdG9rZW5zL3R5cG9ncmFwaHkvbWFqb3Itc2Vjb25kL3R5cGVzY2FsZS1iYXNlLmpzb25cIjtcbmltcG9ydCBjb21wYWN0TWFqb3JTZWNvbmQgZnJvbSBcIi4vdG9rZW5zL3R5cG9ncmFwaHkvbWFqb3Itc2Vjb25kL3R5cGVzY2FsZS1jb21wYWN0Lmpzb25cIjtcbmltcG9ydCBsYXJnZU1ham9yU2Vjb25kIGZyb20gXCIuL3Rva2Vucy90eXBvZ3JhcGh5L21ham9yLXNlY29uZC90eXBlc2NhbGUtbGFyZ2UuanNvblwiO1xuaW1wb3J0IHsgZmxhdHRlbk9iamVjdCB9IGZyb20gXCIuL3V0aWxzL2ZsYXR0ZW4tb2JqZWN0XCI7XG5pbXBvcnQgeyBmaW5kRmlnbWFWYXJpYWJsZUNvbGxlY3Rpb25CeU5hbWUgfSBmcm9tIFwiLi91dGlscy9maWdtYS12YXJpYWJsZXNcIjtcbmV4cG9ydCBjb25zdCBiYXNlID0gZmxhdHRlbk9iamVjdChiYXNlTWlub3JUaGlyZCk7XG5leHBvcnQgY29uc3QgY29tcGFjdCA9IGZsYXR0ZW5PYmplY3QoY29tcGFjdE1pbm9yVGhpcmQpO1xuZXhwb3J0IGNvbnN0IGxhcmdlID0gZmxhdHRlbk9iamVjdChsYXJnZU1pbm9yVGhpcmQpO1xuZXhwb3J0IGNvbnN0IHR5cGVGYWNlID0gZmxhdHRlbk9iamVjdCh0eXBlRmFjZVRva2Vucyk7XG5jb25zdCBzdHlsZXMgPSBmbGF0dGVuT2JqZWN0KHRleHRTdHlsZVRva2Vucyk7XG5jb25zdCB0b2tlbnMgPSB7XG4gICAgbWFqb3JUaGlyZDoge1xuICAgICAgICBiYXNlOiBmbGF0dGVuT2JqZWN0KGJhc2VNYWpvclRoaXJkKSxcbiAgICAgICAgY29tcGFjdDogZmxhdHRlbk9iamVjdChjb21wYWN0TWFqb3JUaGlyZCksXG4gICAgICAgIGxhcmdlOiBmbGF0dGVuT2JqZWN0KGxhcmdlTWFqb3JUaGlyZCksXG4gICAgfSxcbiAgICBtaW5vclRoaXJkOiB7XG4gICAgICAgIGJhc2U6IGZsYXR0ZW5PYmplY3QoYmFzZU1pbm9yVGhpcmQpLFxuICAgICAgICBjb21wYWN0OiBmbGF0dGVuT2JqZWN0KGNvbXBhY3RNaW5vclRoaXJkKSxcbiAgICAgICAgbGFyZ2U6IGZsYXR0ZW5PYmplY3QobGFyZ2VNaW5vclRoaXJkKSxcbiAgICB9LFxuICAgIG1ham9yU2Vjb25kOiB7XG4gICAgICAgIGJhc2U6IGZsYXR0ZW5PYmplY3QoYmFzZU1ham9yU2Vjb25kKSxcbiAgICAgICAgY29tcGFjdDogZmxhdHRlbk9iamVjdChjb21wYWN0TWFqb3JTZWNvbmQpLFxuICAgICAgICBsYXJnZTogZmxhdHRlbk9iamVjdChsYXJnZU1ham9yU2Vjb25kKSxcbiAgICB9LFxufTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBvZ3JhcGh5VG9rZW5zKHNpemUsIHNjYWxlID0gXCJtaW5vclRoaXJkXCIpIHtcbiAgICBsZXQgc2NhbGVUb2tlbnMgPSB0b2tlbnNbc2NhbGVdW3NpemVdO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdHlwZUZhY2UpLCBzY2FsZVRva2VucyksIHN0eWxlcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwU2NhbGVUb2tlbnMoc2NhbGUgPSBcIm1pbm9yVGhpcmRcIikge1xuICAgIGxldCBzY2FsZVRva2VucyA9IHRva2Vuc1tzY2FsZV07XG4gICAgcmV0dXJuIHNjYWxlVG9rZW5zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvbnREZXRhaWxzKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHJldHVybiB5aWVsZCBnZXRGb250RGV0YWlsc1Rva2VucygpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Rm9udERldGFpbHNUb2tlbnMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbk5hbWUgPSAnVHlwZSBGYWNlJztcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IHlpZWxkIGZpbmRGaWdtYVZhcmlhYmxlQ29sbGVjdGlvbkJ5TmFtZShjb2xsZWN0aW9uTmFtZSk7XG4gICAgICAgIGxldCBuYW1lcyA9IFtdO1xuICAgICAgICBpZiAoY29sbGVjdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbnMgPSB0eXBlRmFjZVRva2VucztcbiAgICAgICAgICAgIGNvbnN0IGZhbWlseSA9IHR5cGVGYWNlVG9rZW5zW1wiZm9udC1mYW1pbHlcIl0uJHZhbHVlO1xuICAgICAgICAgICAgZm9yIChsZXQgW25hbWUsIHRleHRTdHlsZV0gb2YgT2JqZWN0LmVudHJpZXModHlwZUZhY2VUb2tlbnNbXCJ0ZXh0LXN0eWxlXCJdKSkge1xuICAgICAgICAgICAgICAgIG5hbWVzLnB1c2goeyBmYW1pbHksIHN0eWxlOiB0ZXh0U3R5bGUuJHZhbHVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZhbWlseSwgc3R5bGVzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZhcmlhYmxlSWQgb2YgY29sbGVjdGlvbi52YXJpYWJsZUlkcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpZ21hVmFyID0geWllbGQgZmlnbWEudmFyaWFibGVzLmdldFZhcmlhYmxlQnlJZEFzeW5jKHZhcmlhYmxlSWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBmaWdtYVZhci5uYW1lO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpZ21hVmFyVmFsdWUgPSBPYmplY3QudmFsdWVzKGZpZ21hVmFyLnZhbHVlc0J5TW9kZSlbMF07XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUuc3RhcnRzV2l0aCgnZm9udC1mYW1pbHknKSkge1xuICAgICAgICAgICAgICAgICAgICBmYW1pbHkgPSBmaWdtYVZhclZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lLnN0YXJ0c1dpdGgoJ3RleHQtc3R5bGUnKSkge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXMucHVzaChmaWdtYVZhclZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN0eWxlIG9mIHN0eWxlcykge1xuICAgICAgICAgICAgICAgIG5hbWVzLnB1c2goeyBmYW1pbHksIHN0eWxlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuYW1lcztcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldEZvbnREZXRhaWxzTG9jYWwoc3R5bGVzKSB7XG4gICAgY29uc3QgZm9udEZhbWlsaWVzID0gW107XG4gICAgY29uc3QgZm9udFN0eWxlcyA9IFtdO1xuICAgIGZvciAoY29uc3Qgc3R5bGUgb2Ygc3R5bGVzKSB7XG4gICAgICAgIGNvbnN0IGZvbnRGYW1pbHkgPSBzdHlsZS5mb250TmFtZS5mYW1pbHk7XG4gICAgICAgIGNvbnN0IGZvbnRTdHlsZSA9IHN0eWxlLmZvbnROYW1lLnN0eWxlO1xuICAgICAgICBpZiAoZm9udEZhbWlsaWVzLmluY2x1ZGVzKGZvbnRGYW1pbHkpID09IGZhbHNlKSB7XG4gICAgICAgICAgICBmb250RmFtaWxpZXMucHVzaChmb250RmFtaWx5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9udFN0eWxlcy5pbmNsdWRlcyhmb250U3R5bGUpID09IGZhbHNlKSB7XG4gICAgICAgICAgICBmb250U3R5bGVzLnB1c2goZm9udFN0eWxlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgbmFtZXMgPSBbXTtcbiAgICBmb250RmFtaWxpZXMuZm9yRWFjaChmYW1pbHkgPT4ge1xuICAgICAgICBmb250U3R5bGVzLmZvckVhY2goc3R5bGUgPT4ge1xuICAgICAgICAgICAgbmFtZXMucHVzaCh7IGZhbWlseSwgc3R5bGUgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBuYW1lcztcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBfY2xvbmUodmFsKSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWw7XG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbC5tYXAoeCA9PiBfY2xvbmUoeCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSh2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IG8gPSB7fTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbCkge1xuICAgICAgICAgICAgICAgIG9ba2V5XSA9IF9jbG9uZSh2YWxba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyAndW5rbm93bic7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGVsYXlBc3luYyh0aW1lKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKTtcbn1cbiIsImltcG9ydCBjaHJvbWEgZnJvbSAnY2hyb21hLWpzJztcbmNvbnN0IGhleENvbG9yUmVnZXggPSAvXiMoWzAtOWEtZl17M318WzAtOWEtZl17Nn0pJC9pO1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRGaWdtYUNvbG9yVG9SZ2IoaW5wdXQsIGZvcm1hdCkge1xuICAgIGNvbnN0IHsgciwgZywgYiwgYSB9ID0gaW5wdXQ7XG4gICAgLy9maWdtYSB1c2VzIGZsb2F0IDAuLi4xIHZzIHN0YW5kYXJkIDAuLi4yNTVcbiAgICBjb25zdCBmaWdtYUNvbG9yVHJhbnNmb3JtZWQgPSB7XG4gICAgICAgIHI6IGlucHV0LnIgKiAyNTUsXG4gICAgICAgIGc6IGlucHV0LmcgKiAyNTUsXG4gICAgICAgIGI6IGlucHV0LmIgKiAyNTUsXG4gICAgICAgIGE6IGlucHV0LmFcbiAgICB9O1xuICAgIGxldCBjb2xvciA9IGNocm9tYS5nbChyLCBnLCBiLCBhKTtcbiAgICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgICAgICBjYXNlICdoZXgnOiB7XG4gICAgICAgICAgICByZXR1cm4gY29sb3IuaGV4KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnaHNsJzoge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmNzcygnaHNsJyk7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLmNzcygpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29sb3JWYWx1ZShpbnB1dCwgYWRqdXN0bWVudHMpIHtcbiAgICBsZXQgY29sb3I7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKGlucHV0LnN0YXJ0c1dpdGgoJ3JnYicpKSB7XG4gICAgICAgICAgICBjb25zdCByZ2JWYWx1ZXMgPSBpbnB1dC5yZXBsYWNlKC9ecmdiYT9cXCh8XFxzK3xcXCkkL2csICcnKS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgaWYgKGhleENvbG9yUmVnZXgudGVzdChyZ2JWYWx1ZXNbMF0pKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBjaHJvbWEocmdiVmFsdWVzWzBdKTsgLy8gaGV4VG9GaWdtYVJHQihyZ2JWYWx1ZXNbMF0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFscGhhID0gcGFyc2VGbG9hdChyZ2JWYWx1ZXNbMV0pO1xuICAgICAgICAgICAgICAgIGNvbG9yID0gY29sb3IuYWxwaGEoYWxwaGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBjaHJvbWEoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29sb3IgPSBjaHJvbWEoaW5wdXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGFkanVzdG1lbnRzKSB7XG4gICAgICAgIGlmIChhZGp1c3RtZW50cy5oKSB7XG4gICAgICAgICAgICBjb2xvciA9IGNvbG9yLnNldCgnaHNsLmgnLCBgJHthZGp1c3RtZW50cy5ofWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhZGp1c3RtZW50cy5zKSB7XG4gICAgICAgICAgICBjb2xvciA9IGNvbG9yLnNldCgnaHNsLnMnLCBgJHthZGp1c3RtZW50cy5zfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhZGp1c3RtZW50cy5sKSB7XG4gICAgICAgICAgICBjb2xvciA9IGNvbG9yLnNldCgnaHNsLmwnLCBgJHthZGp1c3RtZW50cy5sfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhZGp1c3RtZW50cy5hKSB7XG4gICAgICAgICAgICBjb2xvciA9IGNvbG9yLnNldCgnaHNsLmEnLCBgJHthZGp1c3RtZW50cy5hfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFtyLCBnLCBiLCBhXSA9IGNvbG9yLmdsKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2w6IHsgciwgZywgYiwgYSB9LFxuICAgICAgICByZ2I6IGNvbG9yLmNzcygpLFxuICAgICAgICBoc2w6IGNvbG9yLmNzcygnaHNsJyksXG4gICAgICAgIGhleDogY29sb3IuaGV4KClcbiAgICB9O1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBfY2xvbmUgfSBmcm9tIFwiLi9jbG9uZVwiO1xuaW1wb3J0IHsgY29udmVydEZpZ21hQ29sb3JUb1JnYiwgcGFyc2VDb2xvclZhbHVlIH0gZnJvbSBcIi4vZmlnbWEtY29sb3JzXCI7XG5pbXBvcnQgeyBnZXRBbGlhc05hbWUsIGdldERlZmF1bHRWYXJpYWJsZVZhbHVlIH0gZnJvbSBcIi4vZmlnbWEtdmFyaWFibGVzXCI7XG5pbXBvcnQgeyByZXNvbHZlR2xvYmFsVG9rZW5WYWx1ZSwgZmluZFZhcmlhYmxlQnlSZWZlcmVuY2VzLCBnZXRHbG9iYWxUb2tlbnNEaWN0aW9uYXJ5IH0gZnJvbSBcIi4vdG9rZW4tcmVmZXJlbmNlc1wiO1xubGV0IGdsb2JhbERpY3Rpb25hcnk7XG4vKlxuICAgIFRoaXMgbWV0aG9kIHJlYWRzIHNoYWRvdyBjb2xvciB2YWx1ZXMgZGlyZWN0bHkgZnJvbSBGaWdtYSBWYXJpYWJsZXNcbiovXG5leHBvcnQgZnVuY3Rpb24gaW1wb3J0RWZmZWN0U3R5bGVzKHRva2VucywgZGljdGlvbmFyeSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChkaWN0aW9uYXJ5KSB7XG4gICAgICAgICAgICBnbG9iYWxEaWN0aW9uYXJ5ID0gZGljdGlvbmFyeTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IFtuYW1lLCB0b2tlbkRhdGFdIG9mIE9iamVjdC5lbnRyaWVzKHRva2VucykpIHtcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IHRva2VuRGF0YTtcbiAgICAgICAgICAgIGlmICh0b2tlbi4kdHlwZSA9PSAnZWZmZWN0Jykge1xuICAgICAgICAgICAgICAgIGxldCBmaWdtYVN0eWxlID0geWllbGQgZ2V0U3R5bGVCeU5hbWUobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFmaWdtYVN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZ21hU3R5bGUgPSBmaWdtYS5jcmVhdGVFZmZlY3RTdHlsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0b2tlbi4kdmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgZWZmZWN0cyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZWZmZWN0VmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVmZmVjdCA9IHlpZWxkIGNvbnZlcnRFZmZlY3RTdHlsZVRvRmlnbWEoZWZmZWN0VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBlZmZlY3RzLnB1c2goZWZmZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmlnbWFTdHlsZS5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgICAgICBmaWdtYVN0eWxlLmVmZmVjdHMgPSBlZmZlY3RzO1xuICAgICAgICAgICAgICAgIGZpZ21hU3R5bGUuZGVzY3JpcHRpb24gPSB0b2tlbi5kZXNjcmlwdGlvbiB8fCBmaWdtYVN0eWxlLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjb252ZXJ0RWZmZWN0U3R5bGVUb0ZpZ21hKHZhbHVlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgeyBlZmZlY3RUb2tlblZhbHVlLCBib3VuZFByb3BzIH0gPSB5aWVsZCByZXNvbHZlQm91bmRWYWx1ZXModmFsdWUpO1xuICAgICAgICBsZXQgZWZmZWN0ID0ge1xuICAgICAgICAgICAgdHlwZTogZWZmZWN0VG9rZW5WYWx1ZS50eXBlLFxuICAgICAgICAgICAgcmFkaXVzOiBlZmZlY3RUb2tlblZhbHVlLnJhZGl1cyxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGVmZmVjdFRva2VuVmFsdWUudHlwZSA9PSAnSU5ORVJfU0hBRE9XJyB8fCBlZmZlY3RUb2tlblZhbHVlLnR5cGUgPT0gJ0RST1BfU0hBRE9XJykge1xuICAgICAgICAgICAgZWZmZWN0ID0gT2JqZWN0LmFzc2lnbihlZmZlY3QsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZmlnbWEudXRpbC5yZ2JhKGVmZmVjdFRva2VuVmFsdWUuY29sb3IpLFxuICAgICAgICAgICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgICAgICAgICB4OiBlZmZlY3RUb2tlblZhbHVlLm9mZnNldFgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGVmZmVjdFRva2VuVmFsdWUub2Zmc2V0WVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3ByZWFkOiBlZmZlY3RUb2tlblZhbHVlLnNwcmVhZCxcbiAgICAgICAgICAgICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlZmZlY3RUb2tlblZhbHVlLnR5cGUgPT0gJ0RST1BfU0hBRE9XJykge1xuICAgICAgICAgICAgZWZmZWN0ID0gT2JqZWN0LmFzc2lnbihlZmZlY3QsIHtcbiAgICAgICAgICAgICAgICBzaG93U2hhZG93QmVoaW5kTm9kZTogcGFyc2VCb29sZWFuKGVmZmVjdFRva2VuVmFsdWUuc2hvd1NoYWRvd0JlaGluZE5vZGUpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBib3VuZFByb3BzLmZvckVhY2goYm91bmREYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVmZmVjdENvcHkgPSBmaWdtYS52YXJpYWJsZXMuc2V0Qm91bmRWYXJpYWJsZUZvckVmZmVjdChlZmZlY3QsIGJvdW5kRGF0YS5wcm9wTmFtZSwgYm91bmREYXRhLnZhcmlhYmxlKTtcbiAgICAgICAgICAgIGlmIChlZmZlY3QudHlwZSA9PSBcIkRST1BfU0hBRE9XXCIgfHwgZWZmZWN0LnR5cGUgPT0gJ0lOTkVSX1NIQURPVycpIHtcbiAgICAgICAgICAgICAgICBlZmZlY3RDb3B5LnNwcmVhZCA9IGVmZmVjdFRva2VuVmFsdWUuc3ByZWFkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWZmZWN0ID0gZWZmZWN0Q29weTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlZmZlY3Q7XG4gICAgfSk7XG59XG5mdW5jdGlvbiByZXNvbHZlQm91bmRWYWx1ZXMoZWZmZWN0VmFsdWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgY29weSA9IF9jbG9uZShlZmZlY3RWYWx1ZSk7XG4gICAgICAgIGxldCBib3VuZFByb3BzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBjb3B5KSB7XG4gICAgICAgICAgICBjb25zdCBmaWdtYVZhcmlhYmxlID0geWllbGQgZmluZFZhcmlhYmxlQnlSZWZlcmVuY2VzKGNvcHlbcHJvcF0pO1xuICAgICAgICAgICAgaWYgKGZpZ21hVmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgICBib3VuZFByb3BzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBwcm9wTmFtZTogcHJvcCxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGU6IGZpZ21hVmFyaWFibGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSB5aWVsZCBnZXREZWZhdWx0VmFyaWFibGVWYWx1ZShmaWdtYVZhcmlhYmxlKTtcbiAgICAgICAgICAgICAgICBjb3B5W3Byb3BdID0gZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbCA9IHJlc29sdmVHbG9iYWxUb2tlblZhbHVlKGNvcHlbcHJvcF0sIGdsb2JhbERpY3Rpb25hcnkgfHwgZ2V0R2xvYmFsVG9rZW5zRGljdGlvbmFyeSgpKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvcCA9PSAnY29sb3InKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IHBhcnNlQ29sb3JWYWx1ZSh2YWwpLnJnYjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29weVtwcm9wXSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBlZmZlY3RUb2tlblZhbHVlOiBjb3B5LCBib3VuZFByb3BzIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRMb2NhbFN0eWxlcygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICByZXR1cm4geWllbGQgZmlnbWEuZ2V0TG9jYWxFZmZlY3RTdHlsZXNBc3luYygpO1xuICAgIH0pO1xufVxuO1xuZnVuY3Rpb24gZ2V0U3R5bGVCeU5hbWUobmFtZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlc0J5VHlwZSA9IHlpZWxkIGdldExvY2FsU3R5bGVzKCk7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gc3R5bGVzQnlUeXBlLmZpbmQoKHN0eWxlKSA9PiBzdHlsZS5uYW1lID09PSBuYW1lKTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuO1xuZnVuY3Rpb24gcGFyc2VCb29sZWFuKHZhbCkge1xuICAgIGlmICh0eXBlb2YgdmFsID09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gdmFsICE9PSBcImZhbHNlXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gY29udmVydEZpZ21hRWZmZWN0U3R5bGVUb1Rva2VuKHN0eWxlLCBjb2xvckZvcm1hdCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGVmZmVjdHMgPSBzdHlsZS5lZmZlY3RzO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgZWZmZWN0IG9mIGVmZmVjdHMpIHtcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHlpZWxkIGNvbnZlcnRGaWdtYVNoYWRvd0VmZmVjdFRvVG9rZW4oZWZmZWN0LCBjb2xvckZvcm1hdCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjb252ZXJ0RmlnbWFTaGFkb3dFZmZlY3RUb1Rva2VuKGVmZmVjdCwgY29sb3JGb3JtYXQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgZWZmZWN0VG9rZW5WYWx1ZSA9IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBlZmZlY3QudHlwZSxcbiAgICAgICAgICAgIFwicmFkaXVzXCI6IGVmZmVjdC5yYWRpdXMsXG4gICAgICAgIH07XG4gICAgICAgIGlmIChlZmZlY3QudHlwZSA9PSBcIkRST1BfU0hBRE9XXCIgfHwgZWZmZWN0LnR5cGUgPT0gXCJJTk5FUl9TSEFET1dcIikge1xuICAgICAgICAgICAgZWZmZWN0VG9rZW5WYWx1ZSA9IE9iamVjdC5hc3NpZ24oZWZmZWN0VG9rZW5WYWx1ZSwge1xuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogY29udmVydEZpZ21hQ29sb3JUb1JnYihlZmZlY3QuY29sb3IsIGNvbG9yRm9ybWF0KSxcbiAgICAgICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBlZmZlY3QuYmxlbmRNb2RlLFxuICAgICAgICAgICAgICAgIFwib2Zmc2V0WFwiOiBlZmZlY3Qub2Zmc2V0LngsXG4gICAgICAgICAgICAgICAgXCJvZmZzZXRZXCI6IGVmZmVjdC5vZmZzZXQueSxcbiAgICAgICAgICAgICAgICBcInNwcmVhZFwiOiBlZmZlY3Quc3ByZWFkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVmZmVjdC50eXBlID09IFwiRFJPUF9TSEFET1dcIikge1xuICAgICAgICAgICAgZWZmZWN0VG9rZW5WYWx1ZSA9IE9iamVjdC5hc3NpZ24oZWZmZWN0VG9rZW5WYWx1ZSwge1xuICAgICAgICAgICAgICAgIFwic2hvd1NoYWRvd0JlaGluZE5vZGVcIjogYCR7ZWZmZWN0LnNob3dTaGFkb3dCZWhpbmROb2RlIHx8IGZhbHNlfWBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBlZmZlY3QuYm91bmRWYXJpYWJsZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGJvdW5kVmFyaWFibGUgPSBlZmZlY3QuYm91bmRWYXJpYWJsZXNbcHJvcF07XG4gICAgICAgICAgICBlZmZlY3RUb2tlblZhbHVlW3Byb3BdID0geWllbGQgZ2V0QWxpYXNOYW1lKGJvdW5kVmFyaWFibGUuaWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlZmZlY3RUb2tlblZhbHVlO1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jb25zdCBzdG9yZSA9IG5ldyBNYXAoKTtcbmxldCBzZWxlY3RlZExpYnJhcnlOYW1lO1xuZXhwb3J0IGNvbnN0IExPQ0FMX0xJQl9OQU1FID0gXCJMb2NhbCB2YXJpYWJsZXNcIjtcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdG9yZURhdGEocmVmcmVzaCA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKHJlZnJlc2ggPT09IHRydWUpIHtcbiAgICAgICAgICAgIHN0b3JlLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbG9jYWxMaWJyYXJ5VmFyaWFibGVzID0geWllbGQgY29sbGVjdExvY2FsVmFyaWFibGVzKCk7XG4gICAgICAgIGlmIChsb2NhbExpYnJhcnlWYXJpYWJsZXMpIHtcbiAgICAgICAgICAgIHN0b3JlLnNldChsb2NhbExpYnJhcnlWYXJpYWJsZXMubmFtZSwgbG9jYWxMaWJyYXJ5VmFyaWFibGVzLmxpYnJhcnlWYXJpYWJsZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdG9yZS5zaXplID4gMSkgeyAvLyB3aGljaCBtZWFuc1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlYWQgXG4gICAgICAgIGNvbnN0IGxpYnJhcnlDb2xsZWN0aW9ucyA9IHlpZWxkIGZpZ21hLnRlYW1MaWJyYXJ5LmdldEF2YWlsYWJsZUxpYnJhcnlWYXJpYWJsZUNvbGxlY3Rpb25zQXN5bmMoKS5jYXRjaChlID0+IHtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH0pO1xuICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChsaWJyYXJ5Q29sbGVjdGlvbnMubWFwKChjb2xsZWN0aW9uKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4geWllbGQgZmlnbWEudGVhbUxpYnJhcnkuZ2V0VmFyaWFibGVzSW5MaWJyYXJ5Q29sbGVjdGlvbkFzeW5jKGNvbGxlY3Rpb24ua2V5KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHZhcmlhYmxlcyA9IHN0b3JlLmdldChjb2xsZWN0aW9uLmxpYnJhcnlOYW1lKSB8fCBbXTtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMuY29uY2F0KGRhdGEpO1xuICAgICAgICAgICAgICAgIHN0b3JlLnNldChjb2xsZWN0aW9uLmxpYnJhcnlOYW1lLCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKSk7XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNvbGxlY3RMb2NhbFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCB2YXJpYWJsZXMgPSB5aWVsZCBmaWdtYS52YXJpYWJsZXMuZ2V0TG9jYWxWYXJpYWJsZXNBc3luYygpLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICB0aHJvdyAoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh2YXJpYWJsZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBMT0NBTF9MSUJfTkFNRSxcbiAgICAgICAgICAgIGxpYnJhcnlWYXJpYWJsZXM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIC8vIGNvbnN0IGxpYnJhcnlWYXJpYWJsZXM6IExpYnJhcnlWYXJpYWJsZVtdID0gdmFyaWFibGVzLm1hcCh2YXJpYWJsZSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zdCB7XG4gICAgICAgIC8vICAgICAgICAga2V5LCByZXNvbHZlZFR5cGUsIG5hbWVcbiAgICAgICAgLy8gICAgIH0gPSB2YXJpYWJsZTtcbiAgICAgICAgLy8gICAgIHJldHVybiB7IG5hbWUsIGtleSwgcmVzb2x2ZWRUeXBlIH07XG4gICAgICAgIC8vIH0pXG4gICAgICAgIC8vIGlmKGxpYnJhcnlWYXJpYWJsZXMubGVuZ3RoKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4ge25hbWU6IExPQ0FMX0xJQl9OQU1FLCBsaWJyYXJ5VmFyaWFibGVzfVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAvLyAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIC8vIH1cbiAgICB9KTtcbn1cbmxldCBpbXBvcnRlZFZhcmlhYmxlc0xpYnJhcnkgPSBbXTtcbmZ1bmN0aW9uIGltcG9ydExpYnJhcnlWYXJpYWJsZXMobGlicmFyeU5hbWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gc3RvcmUuZ2V0KGxpYnJhcnlOYW1lKSB8fCBbXTtcbiAgICAgICAgaWYgKGltcG9ydGVkVmFyaWFibGVzTGlicmFyeS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgeWllbGQgUHJvbWlzZS5hbGwoZGF0YS5tYXAoKHJlY29yZCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBmaWdtYS52YXJpYWJsZXMuaW1wb3J0VmFyaWFibGVCeUtleUFzeW5jKHJlY29yZC5rZXkpLnRoZW4odmFyaWFibGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpbXBvcnRlZFZhcmlhYmxlc0xpYnJhcnkucHVzaCh2YXJpYWJsZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbXBvcnRlZFZhcmlhYmxlc0xpYnJhcnk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplKCkge1xuICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICBzdG9yZS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RlZExpYnJhcnkoKSB7XG4gICAgcmV0dXJuIHNlbGVjdGVkTGlicmFyeU5hbWUgfHwgTE9DQUxfTElCX05BTUU7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0ZWRMaWJyYXJ5KG5hbWUpIHtcbiAgICBzZWxlY3RlZExpYnJhcnlOYW1lID0gbmFtZTtcbiAgICByZXR1cm4gc2VsZWN0ZWRMaWJyYXJ5TmFtZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVmFyaWFibGVCeU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgbGlicmFyeU5hbWUgPSBnZXRTZWxlY3RlZExpYnJhcnkoKTtcbiAgICAgICAgaWYgKGxpYnJhcnlOYW1lID09IExPQ0FMX0xJQl9OQU1FKSB7XG4gICAgICAgICAgICBjb25zdCBmaWdtYVZhcmlhYmxlcyA9IHlpZWxkIGZpZ21hLnZhcmlhYmxlcy5nZXRMb2NhbFZhcmlhYmxlc0FzeW5jKCk7XG4gICAgICAgICAgICByZXR1cm4gZmlnbWFWYXJpYWJsZXMuZmluZCh2YXJpYWJsZSA9PiB2YXJpYWJsZS5uYW1lID09PSB2YXJpYWJsZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0b3JlID0geWllbGQgZ2V0U3RvcmVEYXRhKCk7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IHlpZWxkIGltcG9ydExpYnJhcnlWYXJpYWJsZXMobGlicmFyeU5hbWUpO1xuICAgICAgICByZXR1cm4gdmFyaWFibGVzLmZpbmQodmFyaWFibGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlLm5hbWUgPT0gdmFyaWFibGVOYW1lO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHNldChuYW1lLCBkYXRhKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgc3RvcmUuc2V0KG5hbWUsIGRhdGEpO1xuICAgICAgICByZXR1cm4gc3RvcmU7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXQobmFtZSkge1xuICAgIHJldHVybiBzdG9yZS5nZXQobmFtZSk7XG59XG5mdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHN0b3JlLmRlbGV0ZShuYW1lKTtcbiAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY2xlYXJTdG9yZSgpIHtcbiAgICBzdG9yZS5jbGVhcigpO1xuICAgIHJldHVybiBzdG9yZTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgX2Nsb25lIH0gZnJvbSBcIi4vY2xvbmVcIjtcbmltcG9ydCB7IGdldEFsaWFzTmFtZSwgZ2V0RGVmYXVsdFZhcmlhYmxlVmFsdWUgfSBmcm9tIFwiLi9maWdtYS12YXJpYWJsZXNcIjtcbmltcG9ydCB7IGZpbmRWYXJpYWJsZUJ5UmVmZXJlbmNlcywgZ2V0R2xvYmFsVG9rZW5zRGljdGlvbmFyeSwgcmVzb2x2ZUdsb2JhbFRva2VuVmFsdWUgfSBmcm9tIFwiLi90b2tlbi1yZWZlcmVuY2VzXCI7XG5sZXQgZm9udExvYWRTdGF0dXMgPSBbXTtcbmZ1bmN0aW9uIHByZUxvYWRGb250KGZvbnROYW1lKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgZm9udE5hbWVBbmRTdHlsZSA9IGAke2ZvbnROYW1lLmZhbWlseX0gJHtmb250TmFtZS5zdHlsZX1gO1xuICAgICAgICBpZiAoZm9udExvYWRTdGF0dXMuaW5kZXhPZihmb250TmFtZUFuZFN0eWxlKSA9PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYGxvYWRpbmcgJHtmb250TmFtZUFuZFN0eWxlfWApO1xuICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhmb250TmFtZSkuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb250TG9hZFN0YXR1cy5wdXNoKGZvbnROYW1lQW5kU3R5bGUpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYGFscmVhZHkgZG9uZSB3aXRoICR7Zm9udE5hbWVBbmRTdHlsZX1gKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGltcG9ydFRleHRTdHlsZXModG9rZW5zKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgZm9udExvYWRTdGF0dXMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBbbmFtZSwgdG9rZW5dIG9mIE9iamVjdC5lbnRyaWVzKHRva2VucykpIHtcbiAgICAgICAgICAgIGlmICh0b2tlbi4kdHlwZSAhPSAndHlwb2dyYXBoeScpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc29sdmVkID0geWllbGQgcGFyc2VWYWx1ZXModG9rZW4uJHZhbHVlLCB0b2tlbnMpO1xuICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IGNvbnZlcnRUZXh0U3R5bGVUb0ZpZ21hKG5hbWUsIHJlc29sdmVkKTtcbiAgICAgICAgICAgIGxldCBmb250TmFtZSA9IG5vcm1hbGl6ZWQuZm9udE5hbWU7XG4gICAgICAgICAgICB5aWVsZCBwcmVMb2FkRm9udChmb250TmFtZSk7XG4gICAgICAgICAgICBsZXQgdGV4dFN0eWxlID0geWllbGQgZ2V0U3R5bGVCeU5hbWUobmFtZSk7XG4gICAgICAgICAgICBsZXQgbmV3U3R5bGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICghdGV4dFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgdGV4dFN0eWxlID0gZmlnbWEuY3JlYXRlVGV4dFN0eWxlKCk7XG4gICAgICAgICAgICAgICAgbmV3U3R5bGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmVzZXRcbiAgICAgICAgICAgIHRleHRTdHlsZS5zZXRCb3VuZFZhcmlhYmxlKCdmb250U3R5bGUnLCBudWxsKTtcbiAgICAgICAgICAgIHRleHRTdHlsZS5zZXRCb3VuZFZhcmlhYmxlKCdsaW5lSGVpZ2h0JywgbnVsbCk7XG4gICAgICAgICAgICB0ZXh0U3R5bGUuc2V0Qm91bmRWYXJpYWJsZSgnZm9udFNpemUnLCBudWxsKTtcbiAgICAgICAgICAgIHRleHRTdHlsZS5zZXRCb3VuZFZhcmlhYmxlKCdwYXJhZ3JhcGhTcGFjaW5nJywgbnVsbCk7XG4gICAgICAgICAgICB0ZXh0U3R5bGUuc2V0Qm91bmRWYXJpYWJsZSgnZm9udEZhbWlseScsIG51bGwpO1xuICAgICAgICAgICAgdGV4dFN0eWxlLnNldEJvdW5kVmFyaWFibGUoJ2ZvbnRTdHlsZScsIG51bGwpO1xuICAgICAgICAgICAgaWYgKCFuZXdTdHlsZSkge1xuICAgICAgICAgICAgICAgIGZvbnROYW1lID0gX2Nsb25lKHRleHRTdHlsZS5mb250TmFtZSk7XG4gICAgICAgICAgICAgICAgeWllbGQgcHJlTG9hZEZvbnQoZm9udE5hbWUpO1xuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWQuZm9udE5hbWUgPSBmb250TmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobm9ybWFsaXplZCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGVba2V5XSA9IG5vcm1hbGl6ZWRba2V5XTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lSGVpZ2h0VmFsdWUgPSB0b2tlbi4kdmFsdWUubGluZUhlaWdodDtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lSGVpZ2h0VmFyaWFibGUgPSB0eXBlb2YgbGluZUhlaWdodFZhbHVlID09ICdzdHJpbmcnID8geWllbGQgZmluZFZhcmlhYmxlQnlSZWZlcmVuY2VzKGxpbmVIZWlnaHRWYWx1ZSkgOiBudWxsO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvbnRTaXplVmFsdWUgPSB0b2tlbi4kdmFsdWUuZm9udFNpemU7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9udFNpemVWYXJpYWJsZSA9IHR5cGVvZiBmb250U2l6ZVZhbHVlID09ICdzdHJpbmcnID8geWllbGQgZmluZFZhcmlhYmxlQnlSZWZlcmVuY2VzKGZvbnRTaXplVmFsdWUpIDogbnVsbDtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhZ3JhcGhTcGFjaW5nVmFsdWUgPSB0b2tlbi4kdmFsdWUucGFyYWdyYXBoU3BhY2luZztcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhZ3JhcGhTcGFjaW5nVmFyaWFibGUgPSB0eXBlb2YgcGFyYWdyYXBoU3BhY2luZ1ZhbHVlID09ICdzdHJpbmcnID8geWllbGQgZmluZFZhcmlhYmxlQnlSZWZlcmVuY2VzKHBhcmFncmFwaFNwYWNpbmdWYWx1ZSkgOiBudWxsO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvbnRGYW1pbHlWYWx1ZSA9IHRva2VuLiR2YWx1ZS5mb250RmFtaWx5O1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvbnRGYW1pbHlWYXJpYWJsZSA9IHR5cGVvZiBmb250RmFtaWx5VmFsdWUgPT0gJ3N0cmluZycgPyB5aWVsZCBmaW5kVmFyaWFibGVCeVJlZmVyZW5jZXMoZm9udEZhbWlseVZhbHVlKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9udFN0eWxlVmFsdWUgPSB0b2tlbi4kdmFsdWUuZm9udFN0eWxlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvbnRTdHlsZVZhcmlhYmxlID0gdHlwZW9mIGZvbnRTdHlsZVZhbHVlID09ICdzdHJpbmcnID8geWllbGQgZmluZFZhcmlhYmxlQnlSZWZlcmVuY2VzKGZvbnRTdHlsZVZhbHVlKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgbGluZUhlaWdodFZhcmlhYmxlICYmIHRleHRTdHlsZS5zZXRCb3VuZFZhcmlhYmxlKCdsaW5lSGVpZ2h0JywgbGluZUhlaWdodFZhcmlhYmxlKTtcbiAgICAgICAgICAgICAgICBmb250U2l6ZVZhcmlhYmxlICYmIHRleHRTdHlsZS5zZXRCb3VuZFZhcmlhYmxlKCdmb250U2l6ZScsIGZvbnRTaXplVmFyaWFibGUpO1xuICAgICAgICAgICAgICAgIHBhcmFncmFwaFNwYWNpbmdWYXJpYWJsZSAmJiB0ZXh0U3R5bGUuc2V0Qm91bmRWYXJpYWJsZSgncGFyYWdyYXBoU3BhY2luZycsIHBhcmFncmFwaFNwYWNpbmdWYXJpYWJsZSk7XG4gICAgICAgICAgICAgICAgZm9udEZhbWlseVZhcmlhYmxlICYmIHRleHRTdHlsZS5zZXRCb3VuZFZhcmlhYmxlKCdmb250RmFtaWx5JywgZm9udEZhbWlseVZhcmlhYmxlKTtcbiAgICAgICAgICAgICAgICBmb250U3R5bGVWYXJpYWJsZSAmJiB0ZXh0U3R5bGUuc2V0Qm91bmRWYXJpYWJsZSgnZm9udFN0eWxlJywgZm9udFN0eWxlVmFyaWFibGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gcGFyc2VWYWx1ZXModmFsdWUsIGRpY3Rpb25hcnkpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgb3V0cHV0ID0ge307XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdG9rZW5SZWZlcmVuY2VdIG9mIE9iamVjdC5lbnRyaWVzKHZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRWYXJpYWJsZSA9IHlpZWxkIGZpbmRWYXJpYWJsZUJ5UmVmZXJlbmNlcyh0b2tlblJlZmVyZW5jZSk7XG4gICAgICAgICAgICBpZiAocmVzb2x2ZWRWYXJpYWJsZSkge1xuICAgICAgICAgICAgICAgIG91dHB1dFtrZXldID0geWllbGQgZ2V0RGVmYXVsdFZhcmlhYmxlVmFsdWUocmVzb2x2ZWRWYXJpYWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvbHZlZFZhbHVlID0gcmVzb2x2ZUdsb2JhbFRva2VuVmFsdWUodG9rZW5SZWZlcmVuY2UsIGRpY3Rpb25hcnkgfHwgZ2V0R2xvYmFsVG9rZW5zRGljdGlvbmFyeSgpKTtcbiAgICAgICAgICAgICAgICBvdXRwdXRba2V5XSA9IHJlc29sdmVkVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldExvY2FsU3R5bGVzKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHJldHVybiB5aWVsZCBmaWdtYS5nZXRMb2NhbFRleHRTdHlsZXNBc3luYygpO1xuICAgIH0pO1xufVxuO1xuZnVuY3Rpb24gZ2V0U3R5bGVCeU5hbWUobmFtZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlc0J5VHlwZSA9IHlpZWxkIGdldExvY2FsU3R5bGVzKCk7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gc3R5bGVzQnlUeXBlLmZpbmQoKHN0eWxlKSA9PiBzdHlsZS5uYW1lID09PSBuYW1lKTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuO1xuZnVuY3Rpb24gY29udmVydFRleHRDYXNlVG9GaWdtYSh2YWx1ZSkge1xuICAgIHN3aXRjaCAodmFsdWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjYXNlICd1cHBlcmNhc2UnOlxuICAgICAgICBjYXNlICd1cHBlcic6XG4gICAgICAgICAgICByZXR1cm4gJ1VQUEVSJztcbiAgICAgICAgY2FzZSAnbG93ZXJjYXNlJzpcbiAgICAgICAgY2FzZSAnbG93ZXInOlxuICAgICAgICAgICAgcmV0dXJuICdMT1dFUic7XG4gICAgICAgIGNhc2UgJ2NhcGl0YWxpemUnOlxuICAgICAgICBjYXNlICd0aXRsZSc6XG4gICAgICAgICAgICByZXR1cm4gJ1RJVExFJztcbiAgICAgICAgY2FzZSAnc21hbGwtY2Fwcyc6XG4gICAgICAgIGNhc2UgJ3NtYWxsX2NhcHMnOlxuICAgICAgICAgICAgcmV0dXJuICdTTUFMTF9DQVBTJztcbiAgICAgICAgY2FzZSAnYWxsLXNtYWxsLWNhcHMnOlxuICAgICAgICBjYXNlICdzbWFsbF9jYXBzX2ZvcmNlZCc6XG4gICAgICAgICAgICByZXR1cm4gJ1NNQUxMX0NBUFNfRk9SQ0VEJztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnT1JJR0lOQUwnO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNvbnZlcnRUZXh0RGVjb3JhdGlvblRvRmlnbWEodmFsdWUpIHtcbiAgICBzd2l0Y2ggKHZhbHVlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgY2FzZSAndW5kZXJsaW5lJzpcbiAgICAgICAgICAgIHJldHVybiAnVU5ERVJMSU5FJztcbiAgICAgICAgY2FzZSAnbGluZS10aHJvdWdoJzpcbiAgICAgICAgY2FzZSAnc3RyaWtldGhyb3VnaCc6XG4gICAgICAgICAgICByZXR1cm4gJ1NUUklLRVRIUk9VR0gnO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICdOT05FJztcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRMZXR0ZXJTcGFjaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIGdldFZhbHVlVW5pdCh2YWx1ZSk7XG59XG5mdW5jdGlvbiBnZXRWYWx1ZVVuaXQodmFsdWUpIHtcbiAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IGAke3ZhbHVlfWA7XG4gICAgaWYgKHZhbHVlID09PSAnQVVUTycpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVuaXQ6IFwiQVVUT1wiXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChzdHJpbmdWYWx1ZS5pbmNsdWRlcygnJScpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bml0OiBcIlBFUkNFTlRcIixcbiAgICAgICAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHN0cmluZ1ZhbHVlKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVuaXQ6IFwiUElYRUxTXCIsXG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdChzdHJpbmdWYWx1ZSlcbiAgICAgICAgfTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRleHRTdHlsZVRvRmlnbWEobmFtZSwgdmFsdWVzKSB7XG4gICAgbGV0IHRleHRTdHlsZSA9IHtcbiAgICAgICAgJ25hbWUnOiBuYW1lLFxuICAgICAgICAnZm9udFNpemUnOiBwYXJzZUZsb2F0KGAke3ZhbHVlcy5mb250U2l6ZX1gKSxcbiAgICAgICAgJ3RleHREZWNvcmF0aW9uJzogY29udmVydFRleHREZWNvcmF0aW9uVG9GaWdtYSh2YWx1ZXMudGV4dERlY29yYXRpb24pLFxuICAgICAgICAnZm9udE5hbWUnOiB7XG4gICAgICAgICAgICBmYW1pbHk6IHZhbHVlcy5mb250RmFtaWx5LFxuICAgICAgICAgICAgc3R5bGU6IHZhbHVlcy5mb250U3R5bGVcbiAgICAgICAgfSxcbiAgICAgICAgJ2xldHRlclNwYWNpbmcnOiBnZXRMZXR0ZXJTcGFjaW5nKHZhbHVlcy5sZXR0ZXJTcGFjaW5nKSxcbiAgICAgICAgJ2xpbmVIZWlnaHQnOiBnZXRWYWx1ZVVuaXQodmFsdWVzLmxpbmVIZWlnaHQpLFxuICAgICAgICAnbGVhZGluZ1RyaW0nOiBcIk5PTkVcIixcbiAgICAgICAgJ3BhcmFncmFwaEluZGVudCc6IDAsXG4gICAgICAgICdwYXJhZ3JhcGhTcGFjaW5nJzogcGFyc2VJbnQoYCR7dmFsdWVzLnBhcmFncmFwaFNwYWNpbmd9YCkgfHwgMCxcbiAgICAgICAgJ2xpc3RTcGFjaW5nJzogcGFyc2VGbG9hdChgJHt2YWx1ZXMubGlzdFNwYWNpbmd9YCkgfHwgMCxcbiAgICAgICAgJ2hhbmdpbmdQdW5jdHVhdGlvbic6IGZhbHNlLFxuICAgICAgICAnaGFuZ2luZ0xpc3QnOiBmYWxzZSxcbiAgICAgICAgJ3RleHRDYXNlJzogY29udmVydFRleHRDYXNlVG9GaWdtYSh2YWx1ZXMudGV4dENhc2UpXG4gICAgfTtcbiAgICByZXR1cm4gdGV4dFN0eWxlO1xufVxuZnVuY3Rpb24gZ2V0VW5pdFZhbHVlKHVuaXRWYWx1ZSkge1xuICAgIGlmICh1bml0VmFsdWUudW5pdCA9PSBcIkFVVE9cIikge1xuICAgICAgICByZXR1cm4gXCJBVVRPXCI7XG4gICAgfVxuICAgIGlmICh1bml0VmFsdWUudW5pdCA9PSBcIlBFUkNFTlRcIikge1xuICAgICAgICByZXR1cm4gYCR7dW5pdFZhbHVlLnZhbHVlfSVgO1xuICAgIH1cbiAgICByZXR1cm4gdW5pdFZhbHVlLnZhbHVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRGaWdtYVRleHRTdHlsZVRvVG9rZW4oc3R5bGUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgdHlwb2dyYXBoeVRva2VuVmFsdWUgPSB7XG4gICAgICAgICAgICBcImZvbnRGYW1pbHlcIjogc3R5bGUuZm9udE5hbWUuZmFtaWx5LFxuICAgICAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IGdldFVuaXRWYWx1ZShzdHlsZS5saW5lSGVpZ2h0KSxcbiAgICAgICAgICAgIFwiZm9udFNpemVcIjogc3R5bGUuZm9udFNpemUsXG4gICAgICAgICAgICBcImxldHRlclNwYWNpbmdcIjogZ2V0VW5pdFZhbHVlKHN0eWxlLmxldHRlclNwYWNpbmcpLFxuICAgICAgICAgICAgXCJsaXN0U3BhY2luZ1wiOiBzdHlsZS5saXN0U3BhY2luZyxcbiAgICAgICAgICAgIFwicGFyYWdyYXBoU3BhY2luZ1wiOiBzdHlsZS5wYXJhZ3JhcGhTcGFjaW5nLFxuICAgICAgICAgICAgXCJmb250U3R5bGVcIjogc3R5bGUuZm9udE5hbWUuc3R5bGUsXG4gICAgICAgICAgICBcInRleHRDYXNlXCI6IHN0eWxlLnRleHRDYXNlLFxuICAgICAgICAgICAgXCJ0ZXh0RGVjb3JhdGlvblwiOiBzdHlsZS50ZXh0RGVjb3JhdGlvbixcbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHN0eWxlLmJvdW5kVmFyaWFibGVzKSB7XG4gICAgICAgICAgICBjb25zdCBib3VuZFZhcmlhYmxlID0gc3R5bGUuYm91bmRWYXJpYWJsZXNbcHJvcF07XG4gICAgICAgICAgICB0eXBvZ3JhcGh5VG9rZW5WYWx1ZVtwcm9wXSA9IHlpZWxkIGdldEFsaWFzTmFtZShib3VuZFZhcmlhYmxlLmlkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHlwb2dyYXBoeVRva2VuVmFsdWU7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCAqIGFzIGZpZ2xpYiBmcm9tICcuL2ZpZ21hLWxpYnJhcnktdmFyaWFibGVzJztcbmV4cG9ydCBmdW5jdGlvbiBmaWdtYUFsaWFzVG9EZXNpZ25Ub2tlbnMoYWxpYXMpIHtcbiAgICByZXR1cm4gYWxpYXMucmVwbGFjZSgvXFwvL2csIFwiLlwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZXNpZ25Ub2tlbkFsaWFzVG9GaWdtYShhbGlhcykge1xuICAgIHJldHVybiBhbGlhcy5yZXBsYWNlKC9cXC4vZywgXCIvXCIpO1xufVxuZnVuY3Rpb24gZmluZFZhcmlhYmxlSW5Db2xsZWN0aW9uKHZhcmlhYmxlTmFtZSwgY29sbGVjdGlvbk5hbWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBmaWdtYUNvbGxlY3Rpb25zID0geWllbGQgZmlnbWEudmFyaWFibGVzLmdldExvY2FsVmFyaWFibGVDb2xsZWN0aW9uc0FzeW5jKCk7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBmaWdtYUNvbGxlY3Rpb25zLmZpbmQoY29sbGVjdGlvbiA9PiBjb2xsZWN0aW9uLm5hbWUgPT09IGNvbGxlY3Rpb25OYW1lKTtcbiAgICAgICAgbGV0IGZpZ21hVmlyYWJsZTtcbiAgICAgICAgaWYgKGNvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWQgb2YgY29sbGVjdGlvbi52YXJpYWJsZUlkcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpZ21hVmFyaWFibGVJbkNvbGxlY2l0b24gPSB5aWVsZCBmaWdtYS52YXJpYWJsZXMuZ2V0VmFyaWFibGVCeUlkQXN5bmMoaWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gKGZpZ21hVmFyaWFibGVJbkNvbGxlY2l0b24gPT09IG51bGwgfHwgZmlnbWFWYXJpYWJsZUluQ29sbGVjaXRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZmlnbWFWYXJpYWJsZUluQ29sbGVjaXRvbi5uYW1lKSA9PT0gdmFyaWFibGVOYW1lO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBmaWdtYVZpcmFibGUgPSBmaWdtYVZhcmlhYmxlSW5Db2xsZWNpdG9uO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpZ21hVmlyYWJsZTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRmlnbWFWYXJpYWJsZUJ5TmFtZSh2YXJpYWJsZU5hbWUsIGNvbGxlY3Rpb25OYW1lKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKGNvbGxlY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4geWllbGQgZmluZFZhcmlhYmxlSW5Db2xsZWN0aW9uKHZhcmlhYmxlTmFtZSwgY29sbGVjdGlvbk5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWdsaWIuZmluZFZhcmlhYmxlQnlOYW1lKHZhcmlhYmxlTmFtZSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmluZEZpZ21hVmFyaWFibGVDb2xsZWN0aW9uQnlOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBmaWdtYUNvbGxlY3Rpb25zID0geWllbGQgZmlnbWEudmFyaWFibGVzLmdldExvY2FsVmFyaWFibGVDb2xsZWN0aW9uc0FzeW5jKCk7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBmaWdtYUNvbGxlY3Rpb25zLmZpbmQoY29sbGVjdGlvbiA9PiBjb2xsZWN0aW9uLm5hbWUgPT09IG5hbWUpO1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbiB8fCBudWxsO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpZ21hQ29sbGVjdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IGlzTmV3ID0gZmFsc2U7XG4gICAgICAgIGxldCBjb2xsZWN0aW9uID0geWllbGQgZmluZEZpZ21hVmFyaWFibGVDb2xsZWN0aW9uQnlOYW1lKG5hbWUpO1xuICAgICAgICBpZiAoIWNvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgIGlzTmV3ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24gPSBmaWdtYS52YXJpYWJsZXMuY3JlYXRlVmFyaWFibGVDb2xsZWN0aW9uKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNvbGxlY3Rpb24sIGlzTmV3IH07XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVZhcmlhYmxlVHlwZSh0eXBlTmFtZSkge1xuICAgIHN3aXRjaCAodHlwZU5hbWUpIHtcbiAgICAgICAgY2FzZSAnY29sb3InOiByZXR1cm4gJ0NPTE9SJztcbiAgICAgICAgY2FzZSAnYm9vbGVhbic6IHJldHVybiAnQk9PTEVBTic7XG4gICAgICAgIGNhc2UgJ251bWJlcic6IHJldHVybiAnRkxPQVQnO1xuICAgICAgICBkZWZhdWx0OiByZXR1cm4gJ1NUUklORyc7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNldEZpZ21hVmFyaWFibGUoY29sbGVjdGlvbiwgbW9kZUlkLCB0eXBlLCB2YXJpYWJsZU5hbWUsIHZhbHVlID0gbnVsbCwgc2NvcGVzID0gWydBTExfU0NPUEVTJ10sIGRlc2NyaXB0aW9uID0gbnVsbCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCBmaWdtYVZhcmlhYmxlID0geWllbGQgZmluZEZpZ21hVmFyaWFibGVCeU5hbWUodmFyaWFibGVOYW1lLCBjb2xsZWN0aW9uLm5hbWUpO1xuICAgICAgICBpZiAoIWZpZ21hVmFyaWFibGUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZmlnbWFWYXJpYWJsZSA9IGZpZ21hLnZhcmlhYmxlcy5jcmVhdGVWYXJpYWJsZSh2YXJpYWJsZU5hbWUsIGNvbGxlY3Rpb24sIHR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZmlnbWFWYXJpYWJsZS5zZXRWYWx1ZUZvck1vZGUobW9kZUlkLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZpZ21hVmFyaWFibGUuc2NvcGVzID0gc2NvcGVzO1xuICAgICAgICBpZiAoZGVzY3JpcHRpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgZmlnbWFWYXJpYWJsZS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWdtYVZhcmlhYmxlO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsaWFzTmFtZShpZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0geWllbGQgZmlnbWEudmFyaWFibGVzLmdldFZhcmlhYmxlQnlJZEFzeW5jKGlkKTtcbiAgICAgICAgcmV0dXJuIGB7JHtmaWdtYUFsaWFzVG9EZXNpZ25Ub2tlbnModmFyaWFibGUubmFtZSl9fWA7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVOYW1lVG9PYmplY3QoeyBuYW1lLCB0YXJnZXRPYmplY3QgfSkge1xuICAgIGxldCBvYmogPSB0YXJnZXRPYmplY3Q7XG4gICAgbmFtZS5zcGxpdChcIi9cIikuZm9yRWFjaCgoZ3JvdXBOYW1lKSA9PiB7XG4gICAgICAgIG9ialtncm91cE5hbWVdID0gb2JqW2dyb3VwTmFtZV0gfHwge307XG4gICAgICAgIG9iaiA9IG9ialtncm91cE5hbWVdO1xuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdFZhcmlhYmxlVmFsdWUoZmlnbWFWYXJpYWJsZSwgbW9kZUlkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbklEID0gZmlnbWFWYXJpYWJsZS52YXJpYWJsZUNvbGxlY3Rpb25JZDtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IHlpZWxkIGZpZ21hLnZhcmlhYmxlcy5nZXRWYXJpYWJsZUNvbGxlY3Rpb25CeUlkQXN5bmMoY29sbGVjdGlvbklEKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gZmlnbWFWYXJpYWJsZS52YWx1ZXNCeU1vZGVbbW9kZUlkIHx8IGNvbGxlY3Rpb24uZGVmYXVsdE1vZGVJZF07XG4gICAgICAgIGlmIChkZWZhdWx0VmFsdWVbJ3R5cGUnXSA9PSBcIlZBUklBQkxFX0FMSUFTXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlID0geWllbGQgZmlnbWEudmFyaWFibGVzLmdldFZhcmlhYmxlQnlJZEFzeW5jKGRlZmF1bHRWYWx1ZVsnaWQnXSk7XG4gICAgICAgICAgICByZXR1cm4geWllbGQgZ2V0RGVmYXVsdFZhcmlhYmxlVmFsdWUodmFyaWFibGUsIG1vZGVJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZmxhdHRlbk9iamVjdChkYXRhKSB7XG4gICAgY29uc3QgdG9rZW5zID0ge307XG4gICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoW2tleSwgb2JqZWN0XSkgPT4ge1xuICAgICAgICB0cmF2ZXJzZVRva2VuKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIG9iamVjdCxcbiAgICAgICAgICAgIHRva2VucyxcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbmZ1bmN0aW9uIHRyYXZlcnNlVG9rZW4oeyBrZXksIG9iamVjdCwgdG9rZW5zLCB9KSB7XG4gICAgaWYgKCFvYmplY3QpXG4gICAgICAgIGRlYnVnZ2VyO1xuICAgIC8vIGlmIGtleSBpcyBhIG1ldGEgZmllbGQsIG1vdmUgb25cbiAgICBpZiAoa2V5LmNoYXJBdCgwKSA9PT0gXCIkXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LiR2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRva2Vuc1trZXldID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqZWN0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKG9iamVjdCkuZm9yRWFjaCgoW2tleTIsIG9iamVjdDJdKSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5Mi5jaGFyQXQoMCkgIT09IFwiJFwiKSB7XG4gICAgICAgICAgICAgICAgdHJhdmVyc2VUb2tlbih7XG4gICAgICAgICAgICAgICAgICAgIGtleTogYCR7a2V5fS8ke2tleTJ9YCxcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiBvYmplY3QyLFxuICAgICAgICAgICAgICAgICAgICB0b2tlbnNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBTaW1wbGUgb2JqZWN0IGNoZWNrLlxuICogQHBhcmFtIGl0ZW1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc09iamVjdChpdGVtKSB7XG4gICAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSk7XG59XG4vKipcbiAqIERlZXAgbWVyZ2UgdHdvIG9iamVjdHMuXG4gKiBAcGFyYW0gdGFyZ2V0XG4gKiBAcGFyYW0gLi4uc291cmNlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gX21lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpIHtcbiAgICBpZiAoIXNvdXJjZXMubGVuZ3RoKVxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcbiAgICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0W2tleV0pXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiB7fSB9KTtcbiAgICAgICAgICAgICAgICBfbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgeyBba2V5XTogc291cmNlW2tleV0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIF9tZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiByb3VuZFR3b0RpZ2l0cyhudW0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgobnVtICsgTnVtYmVyLkVQU0lMT04pICogMTAwKSAvIDEwMDtcbn1cbmV4cG9ydCBmdW5jdGlvbiByb3VuZE9uZURpZ2l0KG51bSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKChudW0gKyBOdW1iZXIuRVBTSUxPTikgKiAxMCkgLyAxMDtcbn1cbiIsImNvbnN0IHNpemVWYWx1ZXNPcmRlciA9IFtcbiAgICAnbm9uZScsXG4gICAgJ3hzNScsXG4gICAgJ3hzNScsXG4gICAgJ3hzMycsXG4gICAgJ3hzMicsXG4gICAgJ3hzJyxcbiAgICAnc20nLFxuICAgICdiYXNlJyxcbiAgICAnbWQnLFxuICAgICdsZycsXG4gICAgJ3hsJyxcbiAgICAneGwyJyxcbiAgICAneGwzJyxcbiAgICAneGw0JyxcbiAgICAneGw1JyxcbiAgICAneGw2JyxcbiAgICAneGw3JyxcbiAgICAncm91bmQnXG5dO1xuY29uc3Qgb3BhY2l0eVZhbHVlc09yZGVyID0gW1xuICAgIFwib3BhY2l0eS0wXCIsXG4gICAgXCJvcGFjaXR5LTVcIixcbiAgICBcIm9wYWNpdHktMTBcIixcbiAgICBcIm9wYWNpdHktMTVcIixcbiAgICBcIm9wYWNpdHktMjBcIixcbiAgICBcIm9wYWNpdHktMjVcIixcbiAgICBcIm9wYWNpdHktMzBcIixcbiAgICBcIm9wYWNpdHktMzVcIixcbiAgICBcIm9wYWNpdHktNDBcIixcbiAgICBcIm9wYWNpdHktNDVcIixcbiAgICBcIm9wYWNpdHktNTBcIixcbiAgICBcIm9wYWNpdHktNTVcIixcbiAgICBcIm9wYWNpdHktNjBcIixcbiAgICBcIm9wYWNpdHktNjVcIixcbiAgICBcIm9wYWNpdHktNzBcIixcbiAgICBcIm9wYWNpdHktNzVcIixcbiAgICBcIm9wYWNpdHktODBcIixcbiAgICBcIm9wYWNpdHktODVcIixcbiAgICBcIm9wYWNpdHktOTBcIixcbiAgICBcIm9wYWNpdHktOTVcIixcbiAgICBcIm9wYWNpdHktMTAwXCIsXG5dO1xuY29uc3QgY29sb3JOYW1lc09yZGVyID0gW1xuICAgICdfdGVzdCcsXG4gICAgJ3ByaW1hcnknLFxuICAgICdicmFuZCcsXG4gICAgJ2ZpbGwvYmFzZScsXG4gICAgJ2ZpbGwvY29udHJhc3QnLFxuICAgICd0ZXh0L2JsYWNrJyxcbiAgICAndGV4dC93aGl0ZScsXG4gICAgJ3RleHQvYmFzZS82MDAnLFxuICAgICd0ZXh0L2Jhc2UvNTAwJyxcbiAgICAndGV4dC9iYXNlLzQwMCcsXG4gICAgJ3RleHQvYmFzZS9hY3Rpb24nLFxuICAgICd0ZXh0L2Jhc2UvcHJpbWFyeScsXG4gICAgJ3RleHQvYmFzZS9pbmZvJyxcbiAgICAndGV4dC9iYXNlL3N1Y2Nlc3MnLFxuICAgICd0ZXh0L2Jhc2Uvd2FybmluZycsXG4gICAgJ3RleHQvYmFzZS9kYW5nZXInLFxuICAgICd0ZXh0L2FjY2VudC82MDAnLFxuICAgICd0ZXh0L2FjY2VudC81MDAnLFxuICAgICd0ZXh0L2FjY2VudC80MDAnLFxuICAgICd0ZXh0L2NvbnRyYXN0LzYwMCcsXG4gICAgJ3RleHQvY29udHJhc3QvNTAwJyxcbiAgICAndGV4dC9jb250cmFzdC80MDAnLFxuICAgICd0ZXh0L2NvbnRyYXN0L2FjdGlvbicsXG4gICAgJ3RleHQvY29udHJhc3QvcHJpbWFyeScsXG4gICAgJ3RleHQvY29udHJhc3QvaW5mbycsXG4gICAgJ3RleHQvY29udHJhc3Qvc3VjY2VzcycsXG4gICAgJ3RleHQvY29udHJhc3Qvd2FybmluZycsXG4gICAgJ3RleHQvY29udHJhc3QvZGFuZ2VyJyxcbiAgICAnc3Ryb2tlL2Jhc2UnLFxuICAgICdzdHJva2UvY29udHJhc3QnLFxuICAgICdpbmZvJyxcbiAgICAnc3VjY2VzcycsXG4gICAgJ3dhcm5pbmcnLFxuICAgICdkYW5nZXInLFxuICAgICdhbHQvYmFzZScsXG4gICAgJ2FsdC9jb250cmFzdCcsXG4gICAgJ3V0aWxpdHknLFxuICAgICdhY2NlbnQvcmVkJyxcbiAgICAnYWNjZW50L2FtYmVyJyxcbiAgICAnYWNjZW50L2Jyb3duJyxcbiAgICAnYWNjZW50L2dyZWVuJyxcbiAgICAnYWNjZW50L3RlYWwnLFxuICAgICdhY2NlbnQvY3lhbicsXG4gICAgJ2FjY2VudC9ibHVlJyxcbiAgICAnYWNjZW50L2luZGlnbycsXG4gICAgJ2FjY2VudC92aW9sZXQnLFxuICAgICdhY2NlbnQvcHVycGxlJyxcbiAgICAnYWNjZW50L3BpbmsnLFxuICAgICd1aS1lbGVtZW50L2JnL3Jlc3QnLFxuICAgICd1aS1lbGVtZW50L2JnL2hvdmVyJyxcbiAgICAndWktZWxlbWVudC9iZy9hY3RpdmUnLFxuICAgICd1aS1lbGVtZW50L2JnL3NlbGVjdGVkJyxcbiAgICAndWktZWxlbWVudC9iZy9kaXNhYmxlZCcsXG4gICAgJ3VpLWVsZW1lbnQvYm9yZGVyL3Jlc3QnLFxuICAgICd1aS1lbGVtZW50L2JvcmRlci9ob3ZlcicsXG4gICAgJ3VpLWVsZW1lbnQvYm9yZGVyL2FjdGl2ZScsXG4gICAgJ3VpLWVsZW1lbnQvYm9yZGVyL3NlbGVjdGVkJyxcbiAgICAndWktZWxlbWVudC9ib3JkZXIvZGlzYWJsZWQnLFxuICAgICd1aS1lbGVtZW50L3RleHQnLFxuICAgICdidXR0b24vYmcvcmVzdCcsXG4gICAgJ2J1dHRvbi9iZy9ob3ZlcicsXG4gICAgJ2J1dHRvbi9iZy9hY3RpdmUnLFxuICAgICdidXR0b24vcHJpbWFyeScsXG4gICAgJ2J1dHRvbi9zdWNjZXNzJyxcbiAgICAnYnV0dG9uL2RhbmdlcicsXG4gICAgJ2J1dHRvbi9ib3JkZXIvcmVzdCcsXG4gICAgJ2J1dHRvbi9ib3JkZXIvaG92ZXInLFxuICAgICdidXR0b24vYm9yZGVyL2FjdGl2ZScsXG4gICAgJ2Zvcm0tZWxlbWVudC9iZy9yZXN0JyxcbiAgICAnZm9ybS1lbGVtZW50L2JnL3JlYWRvbmx5JyxcbiAgICAnZm9ybS1lbGVtZW50L2JnL2hvdmVyJyxcbiAgICAnZm9ybS1lbGVtZW50L2JvcmRlci9yZXN0JyxcbiAgICAnZm9ybS1lbGVtZW50L2JvcmRlci9yZWFkb25seScsXG4gICAgJ2Zvcm0tZWxlbWVudC9ib3JkZXIvaG92ZXInLFxuICAgICdjYXJkL2JnL3ByaW1hcnknLFxuICAgICdjYXJkL2JnL3NlY29uZGFyeScsXG4gICAgJ2NhcmQvYm9yZGVyL2lubmVyJyxcbiAgICAnY2FyZC9ib3JkZXIvb3V0ZXInLFxuICAgICdvdmVybGF5L2JnJyxcbiAgICAnb3ZlcmxheS9ib3JkZXInLFxuXTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb2xvclRva2Vuc1NvcnRGbigpIHtcbiAgICByZXR1cm4gZ2V0U29ydEZuKGNvbG9yTmFtZXNPcmRlciwgJ2luY2x1ZGVzJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2l6ZVRva2Vuc1NvcnRGbigpIHtcbiAgICByZXR1cm4gZ2V0U29ydEZuKHNpemVWYWx1ZXNPcmRlciwgJ2VuZHNXaXRoJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxwaGFOdW1Ub2tlbnNTb3J0Rm4oKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSwgJ2VuJywgeyBudW1lcmljOiB0cnVlIH0pO1xuICAgIH07XG4gICAgLy8gdmFyIGNvbGxhdG9yID0gbmV3IEludGwuQ29sbGF0b3IodW5kZWZpbmVkLCB7bnVtZXJpYzogdHJ1ZSwgc2Vuc2l0aXZpdHk6ICdiYXNlJ30pO1xuICAgIC8vIHJldHVybiBjb2xsYXRvci5jb21wYXJlO1xufVxuZnVuY3Rpb24gZ2V0U29ydEZuKGRhdGFTZXQsIGZuID0gJ3N0YXJ0c1dpdGgnKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChmaXJzdEVsLCBzZWNvbmRFbCkge1xuICAgICAgICB2YXIgcmVzdWx0Rmlyc3QgPSBkYXRhU2V0LmZpbmRJbmRleChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmaXJzdEVsLm5hbWVbZm5dKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHJlc3VsdFNlY29uZCA9IGRhdGFTZXQuZmluZEluZGV4KGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHNlY29uZEVsLm5hbWVbZm5dKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3VsdEZpcnN0IDwgcmVzdWx0U2Vjb25kKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7IC8vIGZpcnN0RWwgZ29lcyBmaXJzdFxuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHRGaXJzdCA+IHJlc3VsdFNlY29uZCkge1xuICAgICAgICAgICAgcmV0dXJuIDE7IC8vIHNlY29uZEVsIGdvZXMgZmlyc3RcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0Rmlyc3QgPT09IHJlc3VsdFNlY29uZCkge1xuICAgICAgICAgICAgbGV0IG5hbWUxID0gZmlyc3RFbC5uYW1lO1xuICAgICAgICAgICAgbGV0IG5hbWUyID0gc2Vjb25kRWwubmFtZTtcbiAgICAgICAgICAgIGlmIChuYW1lMSA8IG5hbWUyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xOyAvLyBmaXJzdEVsIGdvZXMgZmlyc3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuYW1lMSA+IG5hbWUyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7IC8vIHNlY29uZEVsIGdvZXMgZmlyc3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwOyAvLyBrZWVwIG9yaWdpbmFsIG9yZGVyICAgIFxuICAgIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdG9UaXRsZUNhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHdcXFMqL2csIGZ1bmN0aW9uICh0eHQpIHtcbiAgICAgICAgcmV0dXJuIHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYW1lbFRvVGl0bGUoY2FtZWxDYXNlKSB7XG4gICAgLy8gbm8gc2lkZS1lZmZlY3RzXG4gICAgcmV0dXJuIGNhbWVsQ2FzZVxuICAgICAgICAvLyBpbmplY3Qgc3BhY2UgYmVmb3JlIHRoZSB1cHBlciBjYXNlIGxldHRlcnNcbiAgICAgICAgLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBcIiBcIiArIG1hdGNoO1xuICAgIH0pXG4gICAgICAgIC8vIHJlcGxhY2UgZmlyc3QgY2hhciB3aXRoIHVwcGVyIGNhc2VcbiAgICAgICAgLnJlcGxhY2UoL14uLywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBtYXRjaC50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvQ2FtZWxDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKD86Xlxcd3xbQS1aXXxcXGJcXHcpL2csIGZ1bmN0aW9uICh3b3JkLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gaW5kZXggPT09IDAgPyB3b3JkLnRvTG93ZXJDYXNlKCkgOiB3b3JkLnRvVXBwZXJDYXNlKCk7XG4gICAgfSkucmVwbGFjZSgvXFxzKy9nLCAnJyk7XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0U2V0dGluZ3MgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcbmxldCBhY3RpdmVUaGVtZSA9ICdsaWdodCc7XG5sZXQgX2lzQ3VzdG9tRGFya01vZGUgPSBmYWxzZTtcbmNvbnN0IHN0b3JlID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gc3luY1ZhbHVlcyhkYXRhKSB7XG4gICAgY29uc3Qgc2hhcmVkUHJvcHMgPSBbXG4gICAgICAgICdodWUnLFxuICAgICAgICAncHJpbWFyeScsXG4gICAgICAgICdpbmZvJyxcbiAgICAgICAgJ3N1Y2Nlc3MnLFxuICAgICAgICAnd2FybmluZycsXG4gICAgICAgICdkYW5nZXInLFxuICAgICAgICAncmVkJyxcbiAgICAgICAgJ2FtYmVyJyxcbiAgICAgICAgJ2Jyb3duJyxcbiAgICAgICAgJ2dyZWVuJyxcbiAgICAgICAgJ3RlYWwnLFxuICAgICAgICAnYmx1ZScsXG4gICAgICAgICdpbmRpZ28nLFxuICAgICAgICAndmlvbGV0JyxcbiAgICAgICAgJ3B1cnBsZScsXG4gICAgICAgICdwaW5rJyxcbiAgICAgICAgJ2Jhc2VGb250U2l6ZScsXG4gICAgICAgICd0eXBlU2NhbGUnLFxuICAgICAgICAnY3JlYXRlU3R5bGVzJyxcbiAgICAgICAgJ3JhZGlpJyxcbiAgICAgICAgJ3NwYWNpbmcnLFxuICAgICAgICAndmVydGljYWxTcGFjaW5nJyxcbiAgICAgICAgJ3NpbmdsZUNvbGxlY3Rpb24nLFxuICAgICAgICAnY3JlYXRlQ29sb3JUb2tlbnMnLFxuICAgICAgICAnY3JlYXRlQ29tcG9uZW50VG9rZW5zJyxcbiAgICAgICAgJ2NyZWF0ZVR5cG9ncmFwaHlUb2tlbnMnLFxuICAgICAgICAnY3JlYXRlU3BhY2luZ1Rva2VucycsXG4gICAgICAgICdjcmVhdGVFbGV2YXRpb25Ub2tlbnMnLFxuICAgICAgICAnY3JlYXRlUmFkaWlUb2tlbnMnLFxuICAgICAgICAnY3JlYXRlR2xvYmFsU2l6ZVRva2VucycsXG4gICAgICAgICdjcmVhdGVPcGFjaXR5VG9rZW5zJyxcbiAgICAgICAgJ3NoYWRvd3NTdHlsZScsXG4gICAgICAgICdzaGFkb3dzU3ByZWFkJyxcbiAgICAgICAgJ3RleHRCbGFja0JyaWdodG5lc3MnXG4gICAgXTtcbiAgICBzdG9yZS5mb3JFYWNoKChwYXJhbXMsIHRoZW1lS2V5KSA9PiB7XG4gICAgICAgIHNoYXJlZFByb3BzLmZvckVhY2gocHJvcE5hbWUgPT4ge1xuICAgICAgICAgICAgcGFyYW1zW3Byb3BOYW1lXSA9IGRhdGFbcHJvcE5hbWVdO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRUaGVtZShkYXRhKSB7XG4gICAgY29uc3QgdGhlbWUgPSBfaXNDdXN0b21EYXJrTW9kZSA/IGRhdGEudGhlbWUgOiAnbGlnaHQnO1xuICAgIGFjdGl2ZVRoZW1lID0gdGhlbWU7XG4gICAgaWYgKF9pc0N1c3RvbURhcmtNb2RlID09PSB0cnVlICYmIHRoZW1lID09PSAnZGFyaycpIHtcbiAgICAgICAgZGF0YS50aGVtZSA9ICdkYXJrJztcbiAgICAgICAgc3RvcmUuc2V0KHRoZW1lLCBkYXRhKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRhdGEudGhlbWUgPSAnbGlnaHQnO1xuICAgICAgICBzdG9yZS5zZXQoJ2xpZ2h0JywgZGF0YSk7XG4gICAgfVxuICAgIHN5bmNWYWx1ZXMoZGF0YSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VGhlbWUodGhlbWUpIHtcbiAgICBpZiAoX2lzQ3VzdG9tRGFya01vZGUgPT09IHRydWUgJiYgdGhlbWUgPT09ICdkYXJrJykge1xuICAgICAgICByZXR1cm4gc3RvcmUuZ2V0KCdkYXJrJyk7XG4gICAgfVxuICAgIHJldHVybiBzdG9yZS5nZXQoJ2xpZ2h0Jyk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplKCkge1xuICAgIGxldCByZXN1bHQgPSBbc3RvcmUuZ2V0KCdsaWdodCcpXTtcbiAgICBpZiAoX2lzQ3VzdG9tRGFya01vZGUgPT09IHRydWUpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goc3RvcmUuZ2V0KCdkYXJrJykpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNhdmUoKSB7XG4gICAgZmlnbWEucm9vdC5zZXRQbHVnaW5EYXRhKCdTRFMnLCBKU09OLnN0cmluZ2lmeShzZXJpYWxpemUoKSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgY29uc3QgcGx1Z2luRGF0YVRleHQgPSBmaWdtYS5yb290LmdldFBsdWdpbkRhdGEoJ1NEUycpO1xuICAgIGxldCBkYXRhO1xuICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKHBsdWdpbkRhdGFUZXh0KTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgZGF0YSA9IFtkZWZhdWx0U2V0dGluZ3NdO1xuICAgICAgICBjb25zb2xlLmluZm8oJ05vIHBsdWdpbiBkYXRhIGZvdW5kLCBsb2FkaW5nIGRlZmF1bHQnKTtcbiAgICB9XG4gICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoZGF0YSk7XG4gICAgbGV0IGZvcm1EYXRhO1xuICAgIGFjdGl2ZVRoZW1lID0gJ2xpZ2h0JztcbiAgICBpZiAoaXNBcnJheSkge1xuICAgICAgICBmb3JtRGF0YSA9IFsuLi5kYXRhXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvcm1EYXRhID0gW2RhdGFdO1xuICAgIH1cbiAgICBfaXNDdXN0b21EYXJrTW9kZSA9IGZvcm1EYXRhLmxlbmd0aCA+IDE7XG4gICAgZm9ybURhdGEuZm9yRWFjaChwYXJhbXMgPT4ge1xuICAgICAgICBzdG9yZS5zZXQocGFyYW1zLnRoZW1lLCBwYXJhbXMpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3JlKCkge1xuICAgIHJldHVybiBzdG9yZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaXplKCkge1xuICAgIHJldHVybiBzdG9yZS5zaXplO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0RGVmYXVsdHMoKSB7XG4gICAgYWN0aXZlVGhlbWUgPSAnbGlnaHQnO1xuICAgIF9pc0N1c3RvbURhcmtNb2RlID0gZmFsc2U7XG4gICAgc3RvcmUuY2xlYXIoKTtcbiAgICBzdG9yZS5zZXQoJ2xpZ2h0JywgZGVmYXVsdFNldHRpbmdzKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVDdXN0b21EYXJrTW9kZSgpIHtcbiAgICBfaXNDdXN0b21EYXJrTW9kZSA9IHRydWU7XG59XG5leHBvcnQgZnVuY3Rpb24gZGlzYWJsZUN1c3RvbURhcmtNb2RlKCkge1xuICAgIF9pc0N1c3RvbURhcmtNb2RlID0gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNDdXN0b21EYXJrTW9kZSgpIHtcbiAgICByZXR1cm4gX2lzQ3VzdG9tRGFya01vZGU7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGRlc2lnblRva2VuQWxpYXNUb0ZpZ21hLCBmaW5kRmlnbWFWYXJpYWJsZUJ5TmFtZSB9IGZyb20gXCIuL2ZpZ21hLXZhcmlhYmxlc1wiO1xubGV0IGdsb2JhbFRva2VucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldEdsb2JhbFRva2Vuc0RpY3Rpb25hcnkoKSB7XG4gICAgcmV0dXJuIGdsb2JhbFRva2Vucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb0dsb2JhbFRva2Vuc0RpY3Rpb25hcnkoZGF0YSkge1xuICAgIGdsb2JhbFRva2VucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZ2xvYmFsVG9rZW5zKSwgZGF0YSk7XG59XG5jb25zdCBhbGlhc1JlZ2V4ID0gL1xceyguKz8pKC4rPylcXH0vZztcbmV4cG9ydCBmdW5jdGlvbiBmaW5kVG9rZW5SZWZlcmVuY2VzKHRva2VuQWxpYXMpIHtcbiAgICByZXR1cm4gdG9rZW5BbGlhcyA9PT0gbnVsbCB8fCB0b2tlbkFsaWFzID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b2tlbkFsaWFzLnRvU3RyaW5nKCkubWF0Y2goYWxpYXNSZWdleCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlTmFtZShyZWZlcmVuY2UpIHtcbiAgICBsZXQgbmFtZSA9IHJlZmVyZW5jZS5yZXBsYWNlKC97L2csIFwiXCIpO1xuICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL30vZywgXCJcIik7XG4gICAgcmV0dXJuIG5hbWU7XG59XG5leHBvcnQgZnVuY3Rpb24gZmluZFZhcmlhYmxlQnlSZWZlcmVuY2VzKGFsaWFzKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IHJlZmVyZW5jZXMgPSBmaW5kVG9rZW5SZWZlcmVuY2VzKGFsaWFzKTtcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCByZWZlcmVuY2Ugb2YgcmVmZXJlbmNlcyB8fCBbXSkge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBnZXRSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZSk7XG4gICAgICAgICAgICBuYW1lID0gZGVzaWduVG9rZW5BbGlhc1RvRmlnbWEobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBmaWdtYVZhcmlhYmxlID0geWllbGQgZmluZEZpZ21hVmFyaWFibGVCeU5hbWUobmFtZSk7XG4gICAgICAgICAgICBpZiAoZmlnbWFWYXJpYWJsZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChmaWdtYVZhcmlhYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgZmluZFZhcmlhYmxlQnlSZWZlcmVuY2VzKCR7YWxpYXN9KSBjYWxsIGZhaWxlZCAtPiBjYW5ub3QgZmluZCB2YWx1ZSBmb3IgJHtyZWZlcmVuY2V9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHNbMF07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmaW5kR2xvYmFsVG9rZW5CeU5hbWUobmFtZSwgZGljdGlvbmFyeSkge1xuICAgIG5hbWUgPSBkZXNpZ25Ub2tlbkFsaWFzVG9GaWdtYShuYW1lKTtcbiAgICBjb25zdCB0b2tlbiA9IGRpY3Rpb25hcnlbbmFtZV07XG4gICAgaWYgKG5hbWUgPT0gJ2dyZXktdW5kZWZpbmVkJylcbiAgICAgICAgZGVidWdnZXI7XG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgICBjb25zdCBtc2cgPSBgQ2Fubm90IGZpbmQgdG9rZW4gJHtuYW1lfSBpbiBnbG9iYWwgZGlzY3Rpb25hcnk6YDtcbiAgICAgICAgY29uc29sZS53YXJuKG1zZywgZGljdGlvbmFyeSk7XG4gICAgICAgIC8vIGZpZ21hLm5vdGlmeShtc2csIHtlcnJvcjogdHJ1ZX0pO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgO1xuICAgIHJldHVybiB0b2tlbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlR2xvYmFsVG9rZW5WYWx1ZShhbGlhcywgZGljdGlvbmFyeSkge1xuICAgIGxldCByZWZlcmVuY2VzID0gZmluZFRva2VuUmVmZXJlbmNlcyhhbGlhcyk7XG4gICAgbGV0IHJlc3VsdCA9IGFsaWFzO1xuICAgIHJlZmVyZW5jZXMgPT09IG51bGwgfHwgcmVmZXJlbmNlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmZXJlbmNlcy5mb3JFYWNoKHJlZmVyZW5jZSA9PiB7XG4gICAgICAgIGxldCBuYW1lID0gZ2V0UmVmZXJlbmNlTmFtZShyZWZlcmVuY2UpO1xuICAgICAgICBjb25zdCBnbG9iYWxUb2tlbiA9IGZpbmRHbG9iYWxUb2tlbkJ5TmFtZShuYW1lLCBkaWN0aW9uYXJ5KTtcbiAgICAgICAgaWYgKGdsb2JhbFRva2VuKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShyZWZlcmVuY2UsIGdsb2JhbFRva2VuLiR2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY2hlY2sgPSBmaW5kVG9rZW5SZWZlcmVuY2VzKHJlc3VsdCk7XG4gICAgaWYgKGNoZWNrICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVHbG9iYWxUb2tlblZhbHVlKHJlc3VsdCwgZGljdGlvbmFyeSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVmFyaWFibGVBbGlhcyhuYW1lKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IHJlZmVyZW5jZVZhciA9IHlpZWxkIGZpbmRWYXJpYWJsZUJ5UmVmZXJlbmNlcyhuYW1lLnRyaW0oKSk7XG4gICAgICAgIGlmIChyZWZlcmVuY2VWYXIpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJWQVJJQUJMRV9BTElBU1wiLFxuICAgICAgICAgICAgICAgIGlkOiByZWZlcmVuY2VWYXIuaWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQWxpYXNPclZhbHVlKHZhbHVlLCBkaWN0aW9uYXJ5KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IHZhcmlhYmxlQWxpYXMgPSB5aWVsZCBmaW5kVmFyaWFibGVBbGlhcyh2YWx1ZS50cmltKCkpO1xuICAgICAgICBpZiAodmFyaWFibGVBbGlhcykge1xuICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlQWxpYXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmVHbG9iYWxUb2tlblZhbHVlKHZhbHVlLCBkaWN0aW9uYXJ5KTtcbiAgICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBnZXRHbG9iYWxOZXV0cmFscywgdXBncmFkZVRleHRQYWxldHRlIH0gZnJvbSAnLi9jb2xvci10b2tlbnMnO1xuaW1wb3J0ICogYXMgdHlwb2dyYXBoeVRva2VucyBmcm9tICcuL3R5cG9ncmFwaHktdG9rZW5zJztcbmltcG9ydCAqIGFzIGZpZ2xpYiBmcm9tICcuL3V0aWxzL2ZpZ21hLWxpYnJhcnktdmFyaWFibGVzJztcbmltcG9ydCAqIGFzIHRoZW1lU3RvcmUgZnJvbSAnLi91dGlscy90aGVtZXMtc3RvcmUnO1xuaW1wb3J0IHsgcmVuZGVyQWNjZW50cyB9IGZyb20gXCIuL2NvbG9yLWdlbmVyYXRvcnMvcmVuZGVyLWFjY2VudHNcIjtcbmltcG9ydCB7IGdlbmVyYXRlTmV1dHJhbHMsIHJlbmRlck5ldXRyYWxzIH0gZnJvbSAnLi9jb2xvci1nZW5lcmF0b3JzL25ldXRyYWxzLXBhbGV0dGUtZ2VuZXJhdG9yJztcbmltcG9ydCB7IGFkZFRvR2xvYmFsVG9rZW5zRGljdGlvbmFyeSB9IGZyb20gJy4vdXRpbHMvdG9rZW4tcmVmZXJlbmNlcyc7XG5pbXBvcnQgeyBleHBvcnRCcmFuZFZhcmlhbnRUb0pTT04sIGV4cG9ydFRvSlNPTiwgaW1wb3J0RnJvbUpTT04gfSBmcm9tICcuL2ltcG9ydC1leHBvcnQtanNvbic7XG5pbXBvcnQgeyBpbXBvcnRBbGxUb2tlbnMsIGluaXRpYXRlSW1wb3J0IH0gZnJvbSAnLi9pbXBvcnQtdG9rZW5zJztcbmltcG9ydCB7IGNyZWF0ZVVwZGF0ZUVsZXZhdGlvbkNvbXBvbmVudHMgfSBmcm9tICcuL2VmZmVjdC10b2tlbnMnO1xuY29uc29sZS5jbGVhcigpO1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7XG4gICAgd2lkdGg6IDU2MCxcbiAgICBoZWlnaHQ6IDcyMCxcbiAgICB0aGVtZUNvbG9yczogdHJ1ZSxcbn0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKGV2ZW50RGF0YSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJjb2RlIHJlY2VpdmVkIG1lc3NhZ2VcIiwgZXZlbnREYXRhKTtcbiAgICBjb25zdCBwYXJhbXMgPSBldmVudERhdGEucGFyYW1zO1xuICAgIGlmIChldmVudERhdGEudHlwZSA9PT0gXCJJTVBPUlRcIikge1xuICAgICAgICB0aGVtZVN0b3JlLnNldFRoZW1lKHBhcmFtcyk7XG4gICAgICAgIHlpZWxkIGluaXRpYXRlSW1wb3J0KCk7XG4gICAgICAgIHlpZWxkIGltcG9ydEFsbFRva2VucygpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudERhdGEudHlwZSA9PT0gXCJFWFBPUlRcIikge1xuICAgICAgICB5aWVsZCBleHBvcnRUb0pTT04oZXZlbnREYXRhLmV4cG9ydEpTT05QYXJhbXMsIHBhcmFtcyk7XG4gICAgICAgIHlpZWxkIGV4cG9ydEJyYW5kVmFyaWFudFRvSlNPTihldmVudERhdGEuZXhwb3J0QnJhbmRQYXJhbXMsIHBhcmFtcyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50RGF0YS50eXBlID09PSBcIklNUE9SVF9KU09OXCIpIHtcbiAgICAgICAgYWRkVG9HbG9iYWxUb2tlbnNEaWN0aW9uYXJ5KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZ2V0R2xvYmFsTmV1dHJhbHMocGFyYW1zKSksIHR5cG9ncmFwaHlUb2tlbnMuZ2V0VHlwb2dyYXBoeVRva2VucyhwYXJhbXMuYmFzZUZvbnRTaXplLCBwYXJhbXMudHlwZVNjYWxlKSkpO1xuICAgICAgICBmaWdsaWIuc2V0U2VsZWN0ZWRMaWJyYXJ5KGV2ZW50RGF0YS5pbXBvcnRKU09OUGFyYW1zLnRva2VuTGlicmFyeU5hbWUpO1xuICAgICAgICB5aWVsZCBpbXBvcnRGcm9tSlNPTihldmVudERhdGEuZGF0YSwgcGFyYW1zKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoXCJJTVBPUlRfQ09NUExFVEVEXCIpO1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KGVycm9yLm1lc3NhZ2UsIHsgZXJyb3I6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBmaWdtYS5ub3RpZnkoYEZpZ21hIHZhcmlhYmxlcyBoYXMgYmVlbiBpbXBvcnRlZGApO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShcIklNUE9SVF9DT01QTEVURURcIik7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50RGF0YS50eXBlID09PSBcIkFMRVJUXCIpIHtcbiAgICAgICAgZmlnbWEubm90aWZ5KGAke2V2ZW50RGF0YS5kYXRhfWAsIGV2ZW50RGF0YS5hbGVydFBhcmFtcyB8fCB7fSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50RGF0YS50eXBlID09PSBcIlJFTkRFUl9BQ0NFTlRTXCIpIHtcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgICAgIGNvbnN0IGZyYW1lTGlnaHRQYWxldHRlID0gcmVuZGVyQWNjZW50cygnbGlnaHQnLCBwYXJhbXMsICdMaWdodCBNb2RlIEFjY2VudHMnKTtcbiAgICAgICAgY29uc3QgZnJhbWVEYXJrUGFsZXR0ZSA9IHJlbmRlckFjY2VudHMoJ2RhcmsnLCBwYXJhbXMsICdEYXJrIE1vZGUgQWNjZW50cycpO1xuICAgICAgICBmcmFtZURhcmtQYWxldHRlLnkgPSBmcmFtZUxpZ2h0UGFsZXR0ZS5oZWlnaHQgKyA2NDtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnREYXRhLnR5cGUgPT09IFwiUkVOREVSX05FVVRSQUxTXCIpIHtcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgICAgIGNvbnN0IG5ldXRyYWxUb2tlbnMgPSBnZW5lcmF0ZU5ldXRyYWxzKHBhcmFtcyk7XG4gICAgICAgIHJlbmRlck5ldXRyYWxzKG5ldXRyYWxUb2tlbnMsIGBHbG9iYWwgTmV1dHJhbHNgKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnREYXRhLnR5cGUgPT09IFwiVVBHUkFERV9URVhUX0NPTE9SU1wiKSB7XG4gICAgICAgIHlpZWxkIHVwZ3JhZGVUZXh0UGFsZXR0ZShwYXJhbXMpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudERhdGEudHlwZSA9PT0gXCJTVEFSVF9FTEVWQVRJT05fQ09NUE9ORU5UU1wiKSB7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6IFwiU1RBUlRfRUxFVkFUSU9OX0NPTVBPTkVOVFNcIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBwYWdlczogZmlnbWEucm9vdC5jaGlsZHJlbi5tYXAobm9kZSA9PiBub2RlLm5hbWUpLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBmaWdtYS5jdXJyZW50UGFnZS5uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudERhdGEudHlwZSA9PT0gXCJDUkVBVEVfRUxFVkFUSU9OX0NPTVBPTkVOVFNcIikge1xuICAgICAgICBjb25zdCBwYWdlID0gZXZlbnREYXRhLm9wdGlvbnNbJ2NvbXBvbmVudFBhZ2UnXTtcbiAgICAgICAgeWllbGQgY3JlYXRlVXBkYXRlRWxldmF0aW9uQ29tcG9uZW50cyhwYXJhbXMsIHBhZ2UpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KGVycm9yLm1lc3NhZ2UsIHsgZXJyb3I6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudERhdGEudHlwZSA9PSAnQ0VOVEVSX1dJTkRPVycpIHtcbiAgICAgICAgbGV0IHBsdWdpbldpZHRoID0gNTAwLCBwbHVnaW5IZWlnaHQgPSA4MDAsIHpvb20gPSBmaWdtYS52aWV3cG9ydC56b29tLCBjZW50ZXJYID0gTWF0aC5yb3VuZChmaWdtYS52aWV3cG9ydC5jZW50ZXIueCAtICh6b29tIC8gMikpIC0gcGx1Z2luV2lkdGggLyAyLCBjZW50ZXJZID0gTWF0aC5yb3VuZChmaWdtYS52aWV3cG9ydC5jZW50ZXIueSAtICh6b29tIC8gMikpIC0gcGx1Z2luSGVpZ2h0IC8gMjtcbiAgICAgICAgZmlnbWEudWkucmVwb3NpdGlvbihjZW50ZXJYLCBjZW50ZXJZKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnREYXRhLnR5cGUgPT09IFwiVUlfUkVBRFlcIikge1xuICAgICAgICBjb25zdCBjb2xvclN5c3RlbVZlcnNpb24gPSAxOyAvL2F3YWl0IGdldENvbG9yU3lzdGVtVmVyc2lvbigpO1xuICAgICAgICB5aWVsZCBmaWdsaWIuZ2V0U3RvcmVEYXRhKCk7XG4gICAgICAgIHRoZW1lU3RvcmUubG9hZCgpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBcIlJFRlJFU0hfVUlcIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBjb2xvclN5c3RlbVZlcnNpb24sXG4gICAgICAgICAgICAgICAgcHJlc2V0OiB0aGVtZVN0b3JlLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgICAgIGN1c3RvbURhcmtNb2RlOiB0aGVtZVN0b3JlLmlzQ3VzdG9tRGFya01vZGUoKSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHRoZW1lU3RvcmUuZ2V0VGhlbWUoJ2xpZ2h0JyksXG4gICAgICAgICAgICAgICAgdG9rZW5MaWJyYXJpZXM6IGZpZ2xpYi5zZXJpYWxpemUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnREYXRhLnR5cGUgPT0gJ1VQREFURScpIHtcbiAgICAgICAgdGhlbWVTdG9yZS5zZXRUaGVtZShwYXJhbXMpO1xuICAgICAgICBzd2l0Y2ggKHBhcmFtcy5iYXNlRm9udFNpemUpIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5yZXNpemUoNTAwLCA4MDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnbGFyZ2UnOiB7XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucmVzaXplKDU2MCwgODAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudERhdGEudHlwZSA9PSAnUkVTRVQnKSB7XG4gICAgICAgIHRoZW1lU3RvcmUucmVzZXREZWZhdWx0cygpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBcIlJFRlJFU0hfVUlcIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBjb2xvclN5c3RlbVZlcnNpb246IDEsXG4gICAgICAgICAgICAgICAgcHJlc2V0OiB0aGVtZVN0b3JlLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgICAgIGN1c3RvbURhcmtNb2RlOiB0aGVtZVN0b3JlLmlzQ3VzdG9tRGFya01vZGUoKSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHRoZW1lU3RvcmUuZ2V0VGhlbWUoXCJsaWdodFwiKSxcbiAgICAgICAgICAgICAgICB0b2tlbkxpYnJhcmllczogZmlnbGliLnNlcmlhbGl6ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudERhdGEudHlwZSA9PSAnVVBEQVRFX0FDVElWRV9USEVNRScpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRUaGVtZURhdGEgPSB0aGVtZVN0b3JlLmdldFRoZW1lKHBhcmFtcy50aGVtZSk7XG4gICAgICAgIHNlbGVjdGVkVGhlbWVEYXRhLnRoZW1lID0gcGFyYW1zLnRoZW1lO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBcIlJFRlJFU0hfVUlcIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBjb2xvclN5c3RlbVZlcnNpb246IDEsXG4gICAgICAgICAgICAgICAgcHJlc2V0OiB0aGVtZVN0b3JlLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgICAgIHBhcmFtczogc2VsZWN0ZWRUaGVtZURhdGEsXG4gICAgICAgICAgICAgICAgY3VzdG9tRGFya01vZGU6IHRoZW1lU3RvcmUuaXNDdXN0b21EYXJrTW9kZSgpLFxuICAgICAgICAgICAgICAgIHRva2VuTGlicmFyaWVzOiBmaWdsaWIuc2VyaWFsaXplKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50RGF0YS50eXBlID09ICdFTkFCTEVfQ1VTVE9NX0RBUktfTU9ERScpIHtcbiAgICAgICAgdGhlbWVTdG9yZS5lbmFibGVDdXN0b21EYXJrTW9kZSgpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBcIlJFRlJFU0hfVUlcIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBjb2xvclN5c3RlbVZlcnNpb246IDEsXG4gICAgICAgICAgICAgICAgcHJlc2V0OiB0aGVtZVN0b3JlLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgICAgICAgIGN1c3RvbURhcmtNb2RlOiB0aGVtZVN0b3JlLmlzQ3VzdG9tRGFya01vZGUoKSxcbiAgICAgICAgICAgICAgICB0b2tlbkxpYnJhcmllczogZmlnbGliLnNlcmlhbGl6ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudERhdGEudHlwZSA9PSAnRElTQUJMRV9DVVNUT01fREFSS19NT0RFJykge1xuICAgICAgICB0aGVtZVN0b3JlLmRpc2FibGVDdXN0b21EYXJrTW9kZSgpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBcIlJFRlJFU0hfVUlcIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBjb2xvclN5c3RlbVZlcnNpb246IDEsXG4gICAgICAgICAgICAgICAgcHJlc2V0OiB0aGVtZVN0b3JlLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgICAgIHBhcmFtczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGVtZVN0b3JlLmdldFRoZW1lKCdsaWdodCcpKSwgeyB0aGVtZTogcGFyYW1zLnRoZW1lIH0pLFxuICAgICAgICAgICAgICAgIGN1c3RvbURhcmtNb2RlOiB0aGVtZVN0b3JlLmlzQ3VzdG9tRGFya01vZGUoKSxcbiAgICAgICAgICAgICAgICB0b2tlbkxpYnJhcmllczogZmlnbGliLnNlcmlhbGl6ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9