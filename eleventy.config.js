module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("README.md");
    eleventyConfig.addPassthroughCopy({
        "style.out.css": "style.css",
    });
    eleventyConfig.setUseGitIgnore(false);
};