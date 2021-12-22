import { useState } from 'react';

export const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
  }
  const handleLogout = () => {
    setIsLogin(false);
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLogin ? 'login' : 'logout'}</div>
    </div>
  )
}