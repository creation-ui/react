"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureImages = void 0;
const tslib_1 = require("tslib");
const semver_1 = tslib_1.__importDefault(require("semver"));
const utils_1 = require("../utils");
const configureImages = (baseConfig) => {
    configureStaticImageImport(baseConfig);
    (0, utils_1.addScopedAlias)(baseConfig, 'next/image');
};
exports.configureImages = configureImages;
const fallbackFilename = 'static/media/[path][name][ext]';
const configureStaticImageImport = (baseConfig) => {
    var _a, _b, _c, _d, _e;
    const version = (0, utils_1.getNextjsVersion)();
    if (semver_1.default.lt(version, '11.0.0'))
        return;
    const rules = (_a = baseConfig.module) === null || _a === void 0 ? void 0 : _a.rules;
    const assetRule = rules === null || rules === void 0 ? void 0 : rules.find(rule => typeof rule !== 'string' &&
        rule.test instanceof RegExp &&
        rule.test.test('test.jpg'));
    assetRule.test = /\.(apng|eot|otf|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/;
    rules === null || rules === void 0 ? void 0 : rules.push({
        test: /\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i,
        issuer: { not: /\.(css|scss|sass)$/ },
        use: [
            {
                loader: require.resolve('./next-image-loader-stub'),
                options: {
                    filename: (_c = (_b = assetRule.generator) === null || _b === void 0 ? void 0 : _b.filename) !== null && _c !== void 0 ? _c : fallbackFilename
                }
            }
        ]
    });
    rules === null || rules === void 0 ? void 0 : rules.push({
        test: /\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i,
        issuer: /\.(css|scss|sass)$/,
        type: 'asset/resource',
        generator: {
            filename: (_e = (_d = assetRule.generator) === null || _d === void 0 ? void 0 : _d.filename) !== null && _e !== void 0 ? _e : fallbackFilename
        }
    });
};
