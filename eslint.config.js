import reactPlugin from 'eslint-plugin-react'

export default [
  {
    files: ['**/*.js', '**/*.jsx'], // 적용 파일 패턴
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    ignores: ['src/assets/**'],
    rules: {
      'react/react-in-jsx-scope': 'off', // import React from 'react' 필요 여부 옵션
      'react/jsx-uses-vars': 'warn', // 사용하지 않는 변수나 함수 경고
      'no-console': 'warn', // console.log() 경고
    },
  },
]
