import css from './HeroPage.module.css'
import Gallery from '../../components/Gallery/Gallery';
import Button from '../../components/Button/Button';
const Hero = () => {
  
    const hero=
        {
            "id": "6470863621423613d6611495",
            "nickname": "Spiderwoman",
            "real_name": "Gven Stasy",
            "origin_description": "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
             "superpowers": "solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...",
            "catch_phrase": "it's Spiderwoman!",
            "images": [
                "uploads\\1685097219444-542784529.jpg",
                "uploads\\1685097219444-542784529.jpg",
"uploads\\1685097219445-53658427.jpg",
"uploads\\1685098101889-574045146.png",
"uploads\\1685098114348-410231091.png",
"uploads\\1685098117788-2346514.png",

            ]
        }
    return (
        <section className={css.container}>
            <h2 className={css.title}>{hero.nickname}</h2>
            <div className={css.info}>
            <h3 className={css.infoTitle}>Info</h3>
                    <p className={css.name}><span className={css.field}>Real name:</span> {hero.real_name}</p>
                    <p className={css.description}><span className={css.field}> Description:</span> {hero.origin_description}</p>
                    <p className={css.powers}><span className={css.field} >Superpowers:</span> {hero.superpowers}</p>
            </div>
            <p className={css.phrase}>{hero.catch_phrase}</p>
          <Gallery images={hero.images} nickname={hero.nickname}/>
<Button text={'Update Hero'} todo={()=>{}}/>
        </section>
      );
};
export default Hero;