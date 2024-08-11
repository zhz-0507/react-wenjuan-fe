import { FC } from "react";

const Login: FC = () => {

  const handleLogin = () => {
    localStorage.setItem('token', '123456')
    window.location.href = '/'
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>登录</button>
    </div>
  );
};

export default Login;