import css from './Gallery.module.css'
const Gallery = ({images, nickname}) => {
  return (
    <ul className={css.galleryList}>
            {images.map(img => {
              return (
                <li className={css.galleryItem}>
                    <img src={`https://js-ninja-back.onrender.com/${img}`} alt={nickname} className={css.galleryImg}/>
                    
                </li>
        
              );
            })}
          </ul>
  )
};
export default Gallery;