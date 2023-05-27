import css from './HeroPage.module.css'
import Gallery from '../../components/Gallery/Gallery';
import Button from '../../components/Button/Button';
import Info from '../../components/Info/Info';
import { useParams} from 'react-router-dom';
import {useGetHeroByIdQuery} from '../../redux/heroAPI'
const Hero = () => {
    const {heroId}=useParams()
    const { data, isFetching } = useGetHeroByIdQuery(heroId);
    let hero= {
        images:[]
    };
    if (!isFetching) {
        hero = data;
      }
    return (
        <section className={css.container}>
            <h2 className={css.title}>{hero.nickname}</h2>
            <Info realName={hero.real_name} description={hero.origin_description} superpowers={hero.superpowers}/>
            <p className={css.phrase}>{hero.catch_phrase}</p>
          <Gallery images={hero.images} nickname={hero.nickname}/>
          <div className={css.buttonContainer}>
          <Button text={'Update Hero'} todo={()=>{}} type={'button'}/>
          <Button text={'Delete Hero'} todo={()=>{}} denger={true} type={'button'}/>
          </div>

        </section>
      );
};
export default Hero;