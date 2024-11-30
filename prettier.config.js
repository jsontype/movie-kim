export default {
  semi: false, // 세미콜론 사용 여부
  singleQuote: true, // 싱글 쿼트 사용 여부
  tabWidth: 2, // 탭 너비
  printWidth: 100, // 코드의 최대 길이
  arrowParens: 'avoid', // 화살표 함수의 매개변수 괄호 처리 방식
  bracketSpacing: true, // 객체 리터럴에서 괄호 사이의 공백
  jsxBracketSameLine: true, // JSX에서 닫는 괄호를 같은 줄에 배치
  trailingComma: 'all', // 후행 쉼표 추가 여부
  ignoreFiles: [
    '.next/**', // Next.js의 빌드 출력 폴더 무시
    'node_modules/**', // node_modules 폴더 무시
    '.gitignore', // .gitignore 파일 무시
    'src/assets/**', // src/assets 폴더 무시
  ],
}
