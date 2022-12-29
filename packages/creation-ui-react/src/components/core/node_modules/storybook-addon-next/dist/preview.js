"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorators = void 0;
require("./config/preview");
const decorator_1 = require("./routing/decorator");
const decorator_2 = require("./styledJsx/decorator");
require("./images/next-image-stub");
exports.decorators = [decorator_2.StyledJsxDecorator, decorator_1.RouterDecorator];
