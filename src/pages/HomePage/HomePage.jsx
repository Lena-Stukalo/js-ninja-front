import { useState} from 'react';
import HeroList from '../../components/HeroList/HeroList';
import Button from '../../components/Button/Button';
import css from './HomePage.module.css'
import {useGetAllHerosQuery,useCreateHeroMutation} from '../../redux/heroAPI'
import Modal from '../../components/Modal/Modal';
import Form from '../../components/Form/Form';

const Home = () => {
    const [showModal, setShowModal]=useState(false)
    const [page ,setPage]=useState(0)
    const limit=5
    const { data, isFetching } = useGetAllHerosQuery({page, limit});
    const [createHero] = useCreateHeroMutation();
    const toggleModal=()=>{
        setShowModal((prevState) => !prevState)
    }
    const handleLoadmore=()=>{
        setPage((prev)=>prev+1)
    }
    const handleLoadPrev=()=>{
        setPage((prev)=>prev-1)
    }
    let heros= [];
    let countitems;
    if (!isFetching) {
        heros = data.result;
        countitems=((limit*(page+1))<data.total)
      }
    return (
        data&&<section className={css.container}>
          <h1 className={css.title}>Our Stars</h1>
          <Button text={'Add Hero'} todo={toggleModal} type={'button'}/>
          <HeroList heros={heros}/>
        <div className={css.buttonwraper}>
         {page!==0 &&<Button text={'Back'} todo={handleLoadPrev} type={'button'}/>}
         {countitems &&<Button text={'Next'} todo={handleLoadmore} type={'button'}/>}
        </div>
        
        {showModal&&<Modal toggleModal={toggleModal}><Form operation={createHero} closeModal={toggleModal}/></Modal>}
        </section>
      );
};
export default Home;