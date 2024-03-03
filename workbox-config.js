module.exports = {
  globDirectory: "build/",
  globPatterns: ["**/*.{ico,ttf,png,svg,json,txt,mp4,gif,jpg,html,js,css}"],
  swDest: "build/sw.js",
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  maximumFileSizeToCacheInBytes: 100 * 1024 * 1024,
};
