const postcss = require("rollup-plugin-postcss");
const svgr = require("@svgr/rollup").default;

module.exports = {
    rollup(config, options) {
        config.plugins.push(postcss());
        config.plugins.push(svgr());
        return config;
    },
};
