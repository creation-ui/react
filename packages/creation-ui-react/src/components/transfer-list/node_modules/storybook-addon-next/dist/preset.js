"use strict";
// https://storybook.js.org/docs/react/addons/writing-presets
Object.defineProperty(exports, "__esModule", { value: true });
exports.webpackFinal = exports.babel = exports.managerEntries = exports.config = void 0;
const tslib_1 = require("tslib");
const webpack_1 = require("./config/webpack");
const webpack_2 = require("./css/webpack");
const webpack_3 = require("./imports/webpack");
const webpack_4 = require("./routing/webpack");
const webpack_5 = require("./styledJsx/webpack");
const babel_1 = require("./styledJsx/babel");
const webpack_6 = require("./images/webpack");
const utils_1 = require("./utils");
const config = (entry = []) => [
    ...entry,
    require.resolve('./preview')
];
exports.config = config;
const managerEntries = (entry = []) => [
    ...entry,
    require.resolve('./register')
];
exports.managerEntries = managerEntries;
const babel = (config) => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return yield (0, babel_1.configureStyledJsxTransforms)(config); });
exports.babel = babel;
const webpackFinal = (baseConfig, options) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const { nextConfigPath } = options;
    const nextConfig = yield (0, webpack_1.configureConfig)(baseConfig, nextConfigPath);
    (0, utils_1.configureRuntimeNextjsVersionResolution)(baseConfig);
    (0, webpack_3.configureImports)(baseConfig);
    (0, webpack_2.configureCss)(baseConfig, nextConfig);
    (0, webpack_6.configureImages)(baseConfig);
    (0, webpack_4.configureRouting)(baseConfig);
    (0, webpack_5.configureStyledJsx)(baseConfig);
    return baseConfig;
});
exports.webpackFinal = webpackFinal;
