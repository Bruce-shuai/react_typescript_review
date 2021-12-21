// 对于使用interface 还是types。 建议在写应用的时候用type，写库的使用用interface(但其实都差不多)

type GreetProps = {
  name: string,
  messageCount?: number,  // 表示这个属性是可选的
  isLogin: boolean,
}

export const Greet = (props:GreetProps) => {
  return (
    <div>
      {/* 有了ts，给了我两个优势：
        优势一：对象属性提示(例如，当我输入props.的时候，就提示我可以选择的属性有哪些)
        优势二：类型约束，当我传的属性限定为string类型的时候，我传其他类型就会报错
      */}
      {
        props.isLogin ? <h2>欢迎：{props.name}，你当前有{props.messageCount}条信息没有看到</h2> : '请登录'
      }
    </div>
  )
}
