"use strict";
const tslib_1 = require("tslib");
const loader_utils_1 = require("loader-utils");
const image_size_1 = tslib_1.__importDefault(require("image-size"));
const nextImageLoaderStub = function (content) {
    const { filename } = this.getOptions();
    const outputPath = (0, loader_utils_1.interpolateName)(this, filename.replace('[ext]', '.[ext]'), {
        context: this.rootContext,
        content
    });
    this.emitFile(outputPath, content);
    const { width, height } = (0, image_size_1.default)(content);
    return `export default ${JSON.stringify({
        src: outputPath,
        height,
        width,
        blurDataURL: outputPath
    })};`;
};
nextImageLoaderStub.raw = true;
module.exports = nextImageLoaderStub;
