module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  "transform": {
    "^.+\\.svg$": "<rootDir>/svgTransform.js"
 },
 transformIgnorePatterns: ['<rootDir>/node_modules/(?!(axios)/)']
};