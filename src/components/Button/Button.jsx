import css from './Button.module.css'
const Button = ({text, todo}) => {
  return (
    <button type='button' onClick={todo} className={css.button}>{text}</button>
  )
};
export default Button;