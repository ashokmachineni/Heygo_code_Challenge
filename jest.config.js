module.exports = {
  preset: 'react-native',
  setupFiles: ['./jest/setup.js'],
  notify: true,
  notifyMode: 'failure',
  moduleFileExtensions: ['js', 'jsx', 'json'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['<rootDir>/src/components'],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 90,
      lines: 94,
    },
  },
  coverageDirectory: '<rootDir>/coverage',
  testURL: 'http://localhost',
  verbose: true,
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|react-navigation-stack|@react-native-community|react-native-gesture-handler|react-navigation|@react-navigation/.*)',
  ],
};
