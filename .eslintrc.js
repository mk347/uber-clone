module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    extends: ['expo', '@react-native-community', 'plugin:@typescript-eslint/recommended'],
    rules: {
        'prettier/prettier': 'error',
    },
};
