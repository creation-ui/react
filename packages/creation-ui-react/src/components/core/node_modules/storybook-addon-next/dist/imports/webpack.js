"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureImports = void 0;
const tslib_1 = require("tslib");
const tsconfig_paths_webpack_plugin_1 = tslib_1.__importDefault(require("tsconfig-paths-webpack-plugin"));
const tsconfig_paths_1 = require("tsconfig-paths");
const configureImports = (baseConfig) => {
    var _a, _b;
    var _c;
    const configLoadResult = (0, tsconfig_paths_1.loadConfig)();
    if (configLoadResult.resultType === 'failed' ||
        // in development, the call to loadConfig() will load this addon's tsconfig lol
        configLoadResult.absoluteBaseUrl.endsWith('storybook-addon-next')) {
        return;
    }
    (_a = baseConfig.resolve) !== null && _a !== void 0 ? _a : (baseConfig.resolve = {});
    (_b = (_c = baseConfig.resolve).plugins) !== null && _b !== void 0 ? _b : (_c.plugins = []);
    baseConfig.resolve.plugins.push(new tsconfig_paths_webpack_plugin_1.default({
        configFile: configLoadResult.configFileAbsolutePath,
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }));
};
exports.configureImports = configureImports;
