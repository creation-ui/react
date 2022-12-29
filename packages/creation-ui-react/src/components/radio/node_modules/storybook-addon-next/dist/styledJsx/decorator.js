"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledJsxDecorator = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-var-requires */
const react_1 = require("react");
let StyleRegistry;
try {
    // next >= v12
    StyleRegistry = require('styled-jsx').StyleRegistry;
}
catch (_a) {
    // next < v12
    StyleRegistry = react_1.Fragment;
}
const StyledJsxDecorator = (Story) => ((0, jsx_runtime_1.jsx)(StyleRegistry, { children: (0, jsx_runtime_1.jsx)(Story, {}) }));
exports.StyledJsxDecorator = StyledJsxDecorator;
