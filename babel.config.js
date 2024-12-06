// babel.config.js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current", // Ensures compatibility with your Node.js version
        },
      },
    ],
  ],
};
