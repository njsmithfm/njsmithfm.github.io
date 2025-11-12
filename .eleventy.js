module.exports = function (eleventyConfig) {
    const assets = [
      "src/CSS",
      "src/posts/**/img/*",
      "src/posts/**/thumb",
      "src/icons",
    ];
    assets.forEach((path) => {
      eleventyConfig.addPassthroughCopy(path);
      eleventyConfig.addWatchTarget(path);
    });
  
    eleventyConfig.addWatchTarget("./src/posts/**/*.md");
  
    // Filters
    eleventyConfig.addFilter("readableDate", (date) =>
      new Date(date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    );
  
    // Collections
    eleventyConfig.addCollection("posts", (collectionAPI) =>
      collectionAPI
        .getFilteredByGlob("src/posts/**/*.md")
        .sort((a, b) => b.date - a.date)
    );
  
    // Global data for drafts
    eleventyConfig.addGlobalData(
      "eleventyComputed.eleventyExcludeFromCollections",
      () => (data) => data.draft ? true : data.eleventyExcludeFromCollections
    );
  
    return {
      dir: {
        input: "src",
        output: "public",
        data: "_data",
      },
    };
  };