module.exports = {
  root: true,
  extends: '@react-native-community',
  endOfLine: 'auto',
  rules: {
    'indent': ['warn','tab', 2],
    'object-curly-newline': ['error', {
      'ImportDeclaration': 'never', // Disallow line breaks between imports
      'ExportDeclaration': 'never', // Disallow line breaks between exports
    }],
    'max-len': ['error', {
      'code': 80, // Maximum line length
      'ignorePattern': '^import\\s.+\\sfrom\\s.+;$', // Ignore import statements
      'ignoreComments': true, // Ignore lines with comments
    }],
  }
};
