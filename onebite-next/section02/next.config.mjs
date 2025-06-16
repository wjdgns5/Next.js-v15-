/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

export default nextConfig;

/*
reactStrictMode 를 true -> false 하는 이유
이유 : StrictMode가 켜져있으면 React App에 잠재적인 문제를 검사하기 위해서 개발모드를 실행했을 시
컴포넌트를 2번이나 실행되기 때문에 콘솔사용할때 디버깅이 불편하다.
 */