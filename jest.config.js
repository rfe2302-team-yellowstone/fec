module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "^.+\\.svg$": "<rootDir>/fileTransformer.js",
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(react)/)']
};