import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useSearchParams } from 'react-router';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // 인증 상태
  //   const [userData, setUserData] = useState<any>(null); // 백엔드에서 받은 사용자 데이터

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code'); // URL에서 카카오 인증 코드 가져오기
    if (code) {
      localStorage.setItem('authToken', code); // 로컬 스토리지에 'code' 저장
      console.log('Code saved to localStorage:', code);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    // const fetchAuthToken = async () => {
    //   if (code) {
    //     try {
    //       // 인증 코드를 백엔드로 보내기
    //       const response = await fetch('http://localhost:3000/auth/kakao', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ code }),
    //       });

    //       if (response.ok) {
    //         const data = await response.json();
    //         localStorage.setItem('authToken', data.token); // 받은 토큰 저장
    //         setUserData(data.user); // 사용자 데이터 저장
    //         setIsAuthenticated(true); // 인증 상태 업데이트
    //       } else {
    //         console.error('Failed to authenticate');
    //         setIsAuthenticated(false);
    //       }
    //     } catch (error) {
    //       console.error('Error during authentication:', error);
    //       setIsAuthenticated(false);
    //     }
    //   } else {
    //     // 인증 코드가 없으면 로그인 페이지로 이동
    //     setIsAuthenticated(false);
    //   }
    // };

    // fetchAuthToken();
  }, [location.search]);

  if (isAuthenticated === null) {
    return <p>Loading...</p>; // 인증 상태 확인 중
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />; // 인증되지 않았으면 로그인 페이지로 이동
  }

  // 인증이 완료되었으면 자식 컴포넌트 렌더링 (userData를 Context로 전달 가능)
  return <>{children}</>;
};

export default ProtectedRoute;
