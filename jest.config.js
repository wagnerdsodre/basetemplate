module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,tsx,jsx}', '!**/node_modules/**'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js']
}
