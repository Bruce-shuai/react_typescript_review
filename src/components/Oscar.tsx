type OscarProps = {
  children: React.ReactNode  // 这个是针对children有组件的情况
}

export const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>
}