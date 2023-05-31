import css from "./HeroCard.module.css";
const HeroCard = ({ img, nickname }) => {
  return (
    <div className={css.heroLink}>
      <img
        src={`https://js-ninja-back.onrender.com/${img}`}
        alt={nickname}
        className={css.heroImg}
      />
      <p className={css.heroName}>{nickname}</p>
    </div>
  );
};
export default HeroCard;
