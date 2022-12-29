"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureRouting = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("../utils");
const semver_1 = tslib_1.__importDefault(require("semver"));
const configureRouting = (baseConfig) => {
    // here we resolve the router context path with the installed version of Next.js
    const routerContextPath = getRouterContextPath();
    (0, utils_1.addScopedAlias)(baseConfig, routerContextPath);
    (0, utils_1.addScopedAlias)(baseConfig, require.resolve('./resolved-router-context'), routerContextPath);
};
exports.configureRouting = configureRouting;
const getRouterContextPath = () => {
    const version = (0, utils_1.getNextjsVersion)();
    if (semver_1.default.gte(version, '11.1.0')) {
        return 'next/dist/shared/lib/router-context';
    }
    else {
        return 'next/dist/next-server/lib/router-context';
    }
};
