import { Login } from './Login'
import { ProfileProps } from './Profile';
type PrivateProps = {
  isLoggedIn: boolean,
  // 这里是传一个组件
  Component: React.ComponentType<ProfileProps>  // 注意这里和ReactNode 的区别
}
export const Private = ({isLoggedIn, Component}:PrivateProps) => {
  if (isLoggedIn) {
    return <Component name='Vishwas' />
  } else {
    return <Login />
  }
}