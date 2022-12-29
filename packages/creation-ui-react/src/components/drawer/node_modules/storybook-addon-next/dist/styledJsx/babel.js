"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureStyledJsxTransforms = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@babel/core");
const configureStyledJsxTransforms = (config) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    var _a;
    return (yield hasCustomBabelFile())
        ? // the babel loader will pick up the custom
            // config file
            config
        : Object.assign(Object.assign({}, config), { plugins: [...((_a = config.plugins) !== null && _a !== void 0 ? _a : []), 'styled-jsx/babel'] });
});
exports.configureStyledJsxTransforms = configureStyledJsxTransforms;
const hasCustomBabelFile = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const config = yield (0, core_1.loadPartialConfigAsync)({
        // in order to load babel config, we need to give babel a file
        // we just choose the project's package.json cuz we know it has
        // to be present
        // filename is resolved relative to the root (defaulted to process.cwd())
        // https://babeljs.io/docs/en/options#filename
        filename: './package.json'
    });
    return (config === null || config === void 0 ? void 0 : config.babelrc) || (config === null || config === void 0 ? void 0 : config.config);
});
