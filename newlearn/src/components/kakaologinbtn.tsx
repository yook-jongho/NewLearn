import React from 'react';

const KakaoLoginButton: React.FC = () => {
  const K_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const K_REDIRECT_URI = import.meta.env.VITE_REDIRECT_URL;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    console.log(kakaoURL);
    window.location.href = kakaoURL;
  };

  return (
    <img onClick={handleLogin} src="/public/kakao_login_medium_narrow.png" />
  );
};

export default KakaoLoginButton;
