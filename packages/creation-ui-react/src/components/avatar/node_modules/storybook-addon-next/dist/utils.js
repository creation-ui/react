"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scopedResolve = exports.addScopedAlias = exports.getNextjsVersion = exports.configureRuntimeNextjsVersionResolution = void 0;
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const webpack_1 = require("webpack");
const configureRuntimeNextjsVersionResolution = (baseConfig) => {
    var _a;
    return void ((_a = baseConfig.plugins) === null || _a === void 0 ? void 0 : _a.push(new webpack_1.DefinePlugin({
        'process.env.__NEXT_VERSION': JSON.stringify((0, exports.getNextjsVersion)())
    })));
};
exports.configureRuntimeNextjsVersionResolution = configureRuntimeNextjsVersionResolution;
const getNextjsVersion = () => 
// eslint-disable-next-line @typescript-eslint/no-var-requires
require((0, exports.scopedResolve)('next/package.json')).version;
exports.getNextjsVersion = getNextjsVersion;
// This is to help the addon in development
// Without it, webpack resolves packages in its node_modules instead of the example's node_modules
const addScopedAlias = (baseConfig, name, alias) => {
    if (!baseConfig.resolve)
        baseConfig.resolve = {};
    if (!baseConfig.resolve.alias)
        baseConfig.resolve.alias = {};
    const aliasConfig = baseConfig.resolve.alias;
    const scopedAlias = (0, exports.scopedResolve)(`${alias !== null && alias !== void 0 ? alias : name}`);
    if (Array.isArray(aliasConfig)) {
        aliasConfig.push({
            name,
            alias: scopedAlias
        });
    }
    else {
        aliasConfig[name] = scopedAlias;
    }
};
exports.addScopedAlias = addScopedAlias;
/**
 *
 * @param id the module id
 * @returns a path to the module id scoped to the project folder without the main script path at the end
 * @summary
 * This is to help the addon in development.
 * Without it, the addon resolves packages in its node_modules instead of the example's node_modules.
 * Because require.resolve will also include the main script as part of the path, this function strips
 * that to just include the path to the module folder
 * @example
 * // before main script path truncation
 * require.resolve('styled-jsx') === '/some/path/node_modules/styled-jsx/index.js
 * // after main script path truncation
 * scopedResolve('styled-jsx') === '/some/path/node_modules/styled-jsx'
 */
const scopedResolve = (id) => {
    const scopedModulePath = require.resolve(id, { paths: [path_1.default.resolve()] });
    const moduleFolderStrPosition = scopedModulePath.lastIndexOf(id.replace(/\//g /* all '/' occurances */, path_1.default.sep));
    const beginningOfMainScriptPath = moduleFolderStrPosition + id.length;
    return scopedModulePath.substring(0, beginningOfMainScriptPath);
};
exports.scopedResolve = scopedResolve;
