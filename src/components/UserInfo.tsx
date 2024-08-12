import React from 'react';

import { LOGIN_PATHNAME } from '../router/constant'
import { Link } from 'react-router-dom';
import './UserInfo.module.scss'
const UserInfo: React.FC = () => {
  const Login = <Link to={LOGIN_PATHNAME}>登录</Link>
  return (
    <div>
      <div>
        {Login}
      </div>
    </div>
  );
};

export default UserInfo;