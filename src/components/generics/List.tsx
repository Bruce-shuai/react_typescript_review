type ListProps<T> = {
  items: T[],
  onClick: (value: T) => void
}
// 其实这里的T extends {} 我没怎么搞懂是什么意思  {} 应该是支持所有类型的意思
// export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
//   return (
//     <div>
//       <h2>List of items</h2>
//       {
//         items.map((item, index) => {
//           return (
//             <div key={index} onClick={() => onClick(item)}>
//               {item}
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }


// 如果想限制T的类型 把{} 换成其他具体类型，比如 只能是字符串或者数字类型或者对象类型
// export const List = <T extends number | string | object>({ items, onClick }: ListProps<T>) => {
//   return (
//     <div>
//       <h2>List of items</h2>
//       {
//         items.map((item, index) => {
//           return (
//             <div key={index} onClick={() => onClick(item)}>
//               {item}
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// 这里是限制 对象类型里必须包含id属性
export const List = <T extends {id: number}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {
        items.map((item, index) => {
          return (
            <div key={index} onClick={() => onClick(item)}>
              {item}
            </div>
          )
        })
      }
    </div>
  )
}