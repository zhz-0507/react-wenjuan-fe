import { FC } from "react";
import { Button } from 'antd';
const Login: FC = () => {

  const handleLogin = () => {
    localStorage.setItem('token', '123456')
    window.location.href = '/'
  }
  return (
    <div>
      <h1>Login</h1>
      <Button type="primary">Button</Button>
    </div>
  );
};

export default Login;