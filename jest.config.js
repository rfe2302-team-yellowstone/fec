module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  "transform": {
    "^.+\\.svg$": "<rootDir>/svgTransform.js",
    "^.+\\.(js|jsx)$": "babel-jest"
 },
 transformIgnorePatterns: ['<rootDir>/node_modules/(?!(axios)/)']
};