import KakaoLoginButton from '../../components/kakaologinbtn';

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-fit flex flex-col gap-10 items-center mx-auto">
        <img src="/public/icons/apple-touch-icon-72x72.png" />
        <KakaoLoginButton />
      </div>
    </div>
  );
};

export default LoginPage;
