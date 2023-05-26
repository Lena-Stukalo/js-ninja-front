import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import HeroList from '../../components/HeroList/HeroList';
import Button from '../../components/Button/Button';
import css from './HomePage.module.css'

const Home = () => {
    const heros=[
        {
            "id": "6470863621423613d6611485",
            "nickname": "Spiderwoman",
            "real_name": "Gven Stasy",
            "origin_description": "She is a spiderwoman",
            "superpowers": "net",
            "catch_phrase": "it's Spiderwoman!",
            "images": [
                "uploads\\1685097219444-542784529.jpg"
            ]
        },
        {
            "id": "64708741a74n8417952c7f47",
            "nickname": "Spiderwoman2",
            "real_name": "Gven Stasy",
            "origin_description": "She is a spiderwoman",
            "superpowers": "net",
            "catch_phrase": "it's Spiderwoman!",
            "images": [
                "uploads\\1685097219445-53658427.jpg"
            ]
        },{
            "id": "6470863621423613d6611495",
            "nickname": "Spiderwoman",
            "real_name": "Gven Stasy",
            "origin_description": "She is a spiderwoman",
            "superpowers": "net",
            "catch_phrase": "it's Spiderwoman!",
            "images": [
                "uploads\\1685097219444-542784529.jpg"
            ]
        },{
            "id": "6470863621823613d6611495",
            "nickname": "Spiderwoman",
            "real_name": "Gven Stasy",
            "origin_description": "She is a spiderwoman",
            "superpowers": "net",
            "catch_phrase": "it's Spiderwoman!",
            "images": [
                "uploads\\1685097219444-542784529.jpg"
            ]
        }]
    return (
        <section className={css.container}>
          <h1 className={css.title}>Our Stars</h1>
          <HeroList heros={heros}/>

        <Button text={'Load more'} todo={()=>{}}/>
        </section>
      );
};
export default Home;