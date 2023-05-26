import css from './Footer.module.css'
const Footer = ({images, nickname}) => {
  return (
    <footer className={css.footer}>
        <p className={css.text}>Copyright © 2022 - HeroIndustries</p>
    </footer>
  )
};
export default Footer;