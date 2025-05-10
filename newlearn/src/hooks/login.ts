import { useEffect } from 'react';

const useKakaoInit = () => {
  useEffect(() => {
    const kakaoJsKey = import.meta.env.VITE_KAKAO_JS_KEY;
    if (!kakaoJsKey) {
      console.error('Kakao JavaScript Key is missing.');
      return;
    }

    if (!window.Kakao) {
      console.error('Kakao SDK not loaded.');
      return;
    }

    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(kakaoJsKey);
      console.log('Kakao SDK initialized');
    }
  }, []);
};

export default useKakaoInit;
