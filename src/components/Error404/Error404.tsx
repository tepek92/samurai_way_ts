import error404 from './404.svg'
import s from './Error404.module.css'

export const Error404 = () => {

  return (
    <div className={s.mainContainer}>
      <div className={s.textContainer}>
        <h2 className={s.title}>Ooops!</h2>
        <span className={s.text}>Sorry! Page not found!</span>
      </div>
      <img src={error404} alt="404" />
    </div>
  )
}
