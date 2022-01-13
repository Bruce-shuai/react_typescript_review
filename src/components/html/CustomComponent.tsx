import React from 'react'
import { Greet } from '../Greet'

// 此时我已经具备了其他组件的props类型
export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      {props.name}
    </div>
  )
}
