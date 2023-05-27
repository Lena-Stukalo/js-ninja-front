import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HeroList from '../../components/HeroList/HeroList';
import Button from '../../components/Button/Button';
import css from './HomePage.module.css'
import {useGetAllHerosQuery} from '../../redux/heroAPI'

const Home = () => {
    const { data, isFetching } = useGetAllHerosQuery();
    let heros= [];
    if (!isFetching) {
        heros = data.result;
      }
    return (
        <section className={css.container}>
          <h1 className={css.title}>Our Stars</h1>
          <HeroList heros={heros}/>

        <Button text={'Load more'} todo={()=>{}} type={'button'}/>
        </section>
      );
};
export default Home;