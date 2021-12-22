import { useState } from 'react';

type AuthUser = {
  name: string,
  email: string
}

export const User = () => {
  // 兼容多种情况的类型，用泛型
  const [user, setUser] = useState<AuthUser | null>();
  const handleLogin = () => {
    setUser({
      name: 'Bruce',
      email: '284970670@qq.com'
    })
  }
  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {/* 因为user的类型可以是null，所以这里使用?.的操作 */}
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  )
}