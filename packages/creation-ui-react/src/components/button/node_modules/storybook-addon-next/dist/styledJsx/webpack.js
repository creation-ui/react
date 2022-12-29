"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureStyledJsx = void 0;
const tslib_1 = require("tslib");
const semver_1 = tslib_1.__importDefault(require("semver"));
const utils_1 = require("../utils");
const configureStyledJsx = (baseConfig) => {
    const version = (0, utils_1.getNextjsVersion)();
    if (semver_1.default.gte(version, '12.0.0')) {
        (0, utils_1.addScopedAlias)(baseConfig, 'styled-jsx');
    }
    else {
        (0, utils_1.addScopedAlias)(baseConfig, 'styled-jsx/babel');
        (0, utils_1.addScopedAlias)(baseConfig, 'styled-jsx/css');
        (0, utils_1.addScopedAlias)(baseConfig, 'styled-jsx/macro');
        (0, utils_1.addScopedAlias)(baseConfig, 'styled-jsx/server');
        (0, utils_1.addScopedAlias)(baseConfig, 'styled-jsx/style');
        (0, utils_1.addScopedAlias)(baseConfig, 'styled-jsx/webpack');
    }
};
exports.configureStyledJsx = configureStyledJsx;
