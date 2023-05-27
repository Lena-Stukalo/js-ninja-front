import css from './Form.module.css'
import Button from '../Button/Button';
import { useState, useEffect } from 'react';

const Form=({hero, operation, closeModal,params})=>{
    const [formData, setFormData]=useState({
        nickname:'',
        real_name:'',
        origin_description:'',
        superpowers:'',
        catch_phrase:'',
        images:[]
    })
    useEffect(()=>{
        if(hero){
            setFormData({
                nickname:hero.nickname,
        real_name:hero.real_name,
        origin_description:hero.origin_description,
        superpowers:hero.superpowers,
        catch_phrase:hero.catch_phrase,
        images:[]
            })
        }
    },[])
    const onSubmitForm = event => {
        event.preventDefault();
        if(hero){
            const data=new FormData(event.target)
            operation({heroID:params,data})
        }else{
            operation(new FormData(event.target))
        }
      closeModal()
      };
      const onInputChange = event => {
        const { name } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: event.target.value,
          }))
        }
        const handleFileChange = (e) => {
         
            const filesArr = Array.prototype.slice.call(e.target.files);
        
            setFormData((prevState) => ({
                ...prevState,
                images: [...filesArr],
              }))
          };

    return(
        <form onSubmit={onSubmitForm} className={css.form}>
                <label htmlFor="nickname" className={css.label}>Nickname</label>
                <div className={css.modalWrapper}>
                <input type="text"value={formData.nickname} className={css.modalInput} name="nickname" id="nickname" required onChange={onInputChange}></input>
                </div>
                <label htmlFor="real_name" className={css.label}>Real Name</label>
                <div className={css.modalWrapper}>
                <input type="text" required value={formData.real_name} onChange={onInputChange}className={css.modalInput} name="real_name" id="real_name"></input>
                </div>
                <label htmlFor="catch_phrase" className={css.label}>Catch phrase</label>
                <div className={css.modalWrapper}>
                <input required value={formData.catch_phrase} onChange={onInputChange} type="text" className={css.modalInput} name="catch_phrase" id="catch_phrase"></input>
                </div>
                <label htmlFor="origin_description" className={css.label}>Original Description</label>
                <div className={css.modalWrapper}>
                <textarea required value={formData.origin_description} onChange={onInputChange} name="origin_description" id="origin_description" className={css.modalTextarea} 
                placeholder="Type desctiption"></textarea>
                </div>
                <label htmlFor="superpowers" className={css.label}>Superpowers</label>
                <div className={css.modalWrapper}>
                <textarea required value={formData.superpowers} onChange={onInputChange} name="superpowers" id="superpowers" className={css.modalTextarea} 
                placeholder="Type desctiption"></textarea>
                </div>
                <label htmlFor="images" className={css.label}>Images</label>
                <div className={css.modalWrapper}>
                <input type="file" onChange={handleFileChange}  className={css.modalInput} name="images" id="images" multiple></input>
                </div>
                <Button type={"submit"} text={'Send'} />
            </form>
    )
}
export default Form;