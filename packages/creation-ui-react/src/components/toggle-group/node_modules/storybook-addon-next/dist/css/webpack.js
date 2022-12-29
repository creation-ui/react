"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureCss = void 0;
const tslib_1 = require("tslib");
const getCssModuleLocalIdent_1 = require("next/dist/build/webpack/config/blocks/css/loaders/getCssModuleLocalIdent");
const file_resolve_1 = require("next/dist/build/webpack/config/blocks/css/loaders/file-resolve");
const semver_1 = tslib_1.__importDefault(require("semver"));
const utils_1 = require("../utils");
const configureCss = (baseConfig, nextConfig) => {
    var _a, _b, _c;
    const rules = (_a = baseConfig.module) === null || _a === void 0 ? void 0 : _a.rules;
    rules === null || rules === void 0 ? void 0 : rules.forEach((rule, i) => {
        if (typeof rule !== 'string' &&
            rule.test instanceof RegExp &&
            rule.test.test('test.css')) {
            rules[i] = {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: Object.assign(Object.assign({ importLoaders: 1 }, getImportAndUrlCssLoaderOptions(nextConfig)), { modules: {
                                auto: true,
                                getLocalIdent: getCssModuleLocalIdent_1.getCssModuleLocalIdent
                            } })
                    },
                    'postcss-loader'
                ]
            };
        }
    });
    rules === null || rules === void 0 ? void 0 : rules.push({
        test: /\.(scss|sass)$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: Object.assign(Object.assign({ importLoaders: 3 }, getImportAndUrlCssLoaderOptions(nextConfig)), { modules: { auto: true, getLocalIdent: getCssModuleLocalIdent_1.getCssModuleLocalIdent } })
            },
            'postcss-loader',
            'resolve-url-loader',
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true,
                    sassOptions: nextConfig.sassOptions,
                    additionalData: ((_b = nextConfig.sassOptions) === null || _b === void 0 ? void 0 : _b.prependData) ||
                        ((_c = nextConfig.sassOptions) === null || _c === void 0 ? void 0 : _c.additionalData)
                }
            }
        ]
    });
};
exports.configureCss = configureCss;
/**
 * webpack v4-v6 api
 * https://webpack.js.org/loaders/css-loader/#url
 * https://webpack.js.org/loaders/css-loader/#import
 *
 * webpack v3 api
 * https://webpack-3.cdn.bcebos.com/loaders/css-loader/#url
 * https://webpack-3.cdn.bcebos.com/loaders/css-loader/#import
 */
const getImportAndUrlCssLoaderOptions = (nextConfig) => isCssLoaderV6()
    ? {
        url: {
            filter: getUrlResolver(nextConfig)
        },
        import: {
            filter: getImportResolver(nextConfig)
        }
    }
    : {
        url: getUrlResolver(nextConfig),
        import: getImportResolver(nextConfig)
    };
const getUrlResolver = (nextConfig) => (url, resourcePath) => { var _a; return (0, file_resolve_1.cssFileResolve)(url, resourcePath, (_a = nextConfig.experimental) === null || _a === void 0 ? void 0 : _a.urlImports); };
const getImportResolver = (nextConfig) => (url, _, resourcePath) => {
    var _a;
    return (0, file_resolve_1.cssFileResolve)(typeof url === 'string' ? url : url.url, resourcePath, (_a = nextConfig.experimental) === null || _a === void 0 ? void 0 : _a.urlImports);
};
const isCssLoaderV6 = () => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const cssLoaderVersion = require((0, utils_1.scopedResolve)('css-loader/package.json')).version;
        return semver_1.default.gte(cssLoaderVersion, '6.0.0');
    }
    catch (_a) {
        /**
         *  css-loader isn't a resolvable dependency
         *  thus storybook webpack 5 manager will
         *  resolve to use its version which is v5
         */
        return false;
    }
};
