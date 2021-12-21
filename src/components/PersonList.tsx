type PersonListProps = {
  names: {   // 这里是针对的数组操作
    first: string,
    last: string
  }[]
}

export const PersonList = (props:PersonListProps) => {
  return <div>
    {
      props.names.map(name => {
        return <h2 key={name.first}>{name.first} {name.last}</h2>
      })
    }
  </div>
}