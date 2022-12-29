"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterDecorator = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
// this will be aliased by webpack at runtime (this is just for typing)
const resolved_router_context_1 = require("./resolved-router-context");
const router_1 = tslib_1.__importDefault(require("next/router"));
const addon_actions_1 = require("@storybook/addon-actions");
const defaultRouter = {
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
    push(...args) {
        (0, addon_actions_1.action)('nextRouter.push')(...args);
        return Promise.resolve(true);
    },
    replace(...args) {
        (0, addon_actions_1.action)('nextRouter.replace')(...args);
        return Promise.resolve(true);
    },
    reload(...args) {
        (0, addon_actions_1.action)('nextRouter.reload')(...args);
    },
    back(...args) {
        (0, addon_actions_1.action)('nextRouter.back')(...args);
    },
    prefetch(...args) {
        (0, addon_actions_1.action)('nextRouter.prefetch')(...args);
        return Promise.resolve();
    },
    beforePopState(...args) {
        (0, addon_actions_1.action)('nextRouter.beforePopState')(...args);
    },
    events: {
        on(...args) {
            (0, addon_actions_1.action)('nextRouter.events.on')(...args);
        },
        off(...args) {
            (0, addon_actions_1.action)('nextRouter.events.off')(...args);
        },
        emit(...args) {
            (0, addon_actions_1.action)('nextRouter.events.emit')(...args);
        }
    },
    isFallback: false
};
const RouterDecorator = (Story, context) => {
    var _a, _b;
    const nextRouterParams = (_a = context.parameters.nextRouter) !== null && _a !== void 0 ? _a : {};
    router_1.default.router = Object.assign(Object.assign(Object.assign({}, defaultRouter), { locale: (_b = context === null || context === void 0 ? void 0 : context.globals) === null || _b === void 0 ? void 0 : _b.locale }), nextRouterParams);
    return ((0, jsx_runtime_1.jsx)(resolved_router_context_1.RouterContext.Provider, Object.assign({ value: router_1.default.router }, { children: (0, jsx_runtime_1.jsx)(Story, {}) })));
};
exports.RouterDecorator = RouterDecorator;
