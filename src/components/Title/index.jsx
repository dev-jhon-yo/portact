import "./styles.scss"

export function Title({ background, title }) {
  return (
    <div className='title-container'>
      <h1>{background}</h1>
      <span>{title}</span>
    </div>
  )
}