import { useState } from 'react';

type AuthUser = {
  name: string,
  email: string
}

export const User = () => {
  // 这里使用类型断言，相当于告诉编译器，我比你更懂类型会是怎样的
  // 这里相当于对象只能是 AuthUser类型的
  const [user, setUser] = useState<AuthUser>({} as AuthUser);  
  const handleLogin = () => {
    setUser({
      name: 'Bruce',
      email: '284970670@qq.com'
    })
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* 避免总是要先假定user可能是null这种情况 */}
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  )
}