import { NavLink, useLocation } from 'react-router-dom';
import HeroCard from '../../components/HeroCard/HeroCard';
import css from './HeroList.module.css'

const HeroList = ({heros}) => {
    return (
          <ul className={css.heroList}>
            {heros.map(hero => {
              return (
                 <NavLink
                 key={hero.id}
                 to={`/${hero.id}`}
                 className={css.heroItem}
                 >
                    <HeroCard img={hero.images[0]} nickname={hero.nickname}></HeroCard>
                 </NavLink>
              );
            })}
          </ul>
       
      );
};
export default HeroList;