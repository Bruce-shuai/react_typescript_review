type StatusProps = {
  status: 'loading' | 'success' | 'error',  // 这里不是设置为string。而是设置为具体的字符串。这样就可以避免字符串写错误的情况
}

export const Status = (props: StatusProps) => {
  let message;
  if (props.status === 'loading') {
    message = 'Loading...'
  } else if (props.status === 'success') {
    message = 'Data fetched successfully'
  } else if (props.status === 'error') {
    message = 'Error fetching data'
  }

  return (
    <div>
      <h2>Status - {message}</h2> 
    </div>
  )
}