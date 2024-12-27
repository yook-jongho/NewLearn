module.exports = {
    content: [
        "./index.html", // Vite의 루트 HTML 파일
        "./src/**/*.{js,ts,jsx,tsx}", // 모든 React 컴포넌트 파일
    ],
    theme: {
        extend: {}, // 커스텀 테마 추가 시 사용
    },
    plugins: [], // 필요한 Tailwind 플러그인 추가 가능
};
