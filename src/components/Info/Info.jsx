import css from './Info.module.css'
const Info =({realName,description,superpowers})=>{
    return(
        <div className={css.info}>
        <h3 className={css.infoTitle}>Info</h3>
                <p className={css.name}><span className={css.field}>Real name:</span> {realName}</p>
                <p className={css.description}><span className={css.field}> Description:</span> {description}</p>
                <p className={css.powers}><span className={css.field} >Superpowers:</span> {superpowers}</p>
        </div>
    )
}
export default Info