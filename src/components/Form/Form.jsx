import css from './Form.module.css'
import Button from '../Button/Button';

const Form=()=>{
    const name =''
    return(
        <form onSubmit={()=>{}} className={css.form}>
                <label htmlFor="username" className={css.label}>Nickname</label>
                <div className={css.modalWrapper}>
                <input type="text" className={css.modalInput} name="nickname" id="nickname" required value={name} onChange={()=>{}}></input>
                </div>
                <label htmlFor="username" className={css.label}>Real Name</label>
                <div className={css.modalWrapper}>
                <input type="text" required value={name} onChange={()=>{}}className={css.modalInput} name="realName" id="realName"></input>
                </div>
                <label htmlFor="phrase" className={css.label}>Catch phrase</label>
                <div className={css.modalWrapper}>
                <input required value={name} onChange={()=>{}} type="text" className={css.modalInput} name="phrase" id="phrase"></input>
                </div>
                <label htmlFor="description" className={css.label}>Original Description</label>
                <div className={css.modalWrapper}>
                <textarea required value={name} onChange={()=>{}} name="description" id="description" className={css.modalTextarea} 
                placeholder="Type desctiption"></textarea>
                </div>
                <label htmlFor="superpowers" className={css.label}>Superpowers</label>
                <div className={css.modalWrapper}>
                <textarea required value={name} onChange={()=>{}} name="superpowers" id="superpowers" className={css.modalTextarea} 
                placeholder="Type desctiption"></textarea>
                </div>
                <label htmlFor="images" className={css.label}>Images</label>
                <div className={css.modalWrapper}>
                <input type="file" required onChange={()=>{}} className={css.modalInput} name="images" id="images" multiple></input>
                </div>
                <Button type={"submit"} text={'Send'} />
            </form>
    )
}
export default Form;