import './tic.css'

const Tic = (props) => {
  const cls = ['Tic']
  return (
    <div className={cls.join(' ')}>
      <p>{props.count}</p>
      <small>{props.name}</small>
    </div>
  )
}

export default Tic
