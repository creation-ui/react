"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const semver_1 = tslib_1.__importDefault(require("semver"));
// next v9 (doesn't have next/image)
if (semver_1.default.gt(process.env.__NEXT_VERSION, '9.0.0')) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const NextImage = require('next/image');
    const OriginalNextImage = NextImage.default;
    Object.defineProperty(NextImage, 'default', {
        configurable: true,
        value: (props) => typeof props.src === 'string' ? ((0, jsx_runtime_1.jsx)(OriginalNextImage, Object.assign({}, props, { unoptimized: true, blurDataURL: props.src }))) : ((0, jsx_runtime_1.jsx)(OriginalNextImage, Object.assign({}, props, { unoptimized: true })))
    });
    // https://github.com/vercel/next.js/issues/36417#issuecomment-1117360509
    if (semver_1.default.gte(process.env.__NEXT_VERSION, '12.1.5') &&
        semver_1.default.lt(process.env.__NEXT_VERSION, '12.2.0')) {
        Object.defineProperty(NextImage, '__esModule', {
            configurable: true,
            value: true
        });
    }
}
