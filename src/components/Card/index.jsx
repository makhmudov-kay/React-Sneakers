import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";
import { AppContext } from "../../App";

const Card = ({
  id,
  imageUrl,
  title,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) => {
  const {isAddedItems} = React.useContext(AppContext)
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = { id, parentId: id, title, price, imageUrl }

  const onClickPlus = () => {
    onPlus(obj);
  };

  const onChangeFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };
  

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={220}
          height={233}
          viewBox="0 0 220 233"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="158" height="120" />
          <rect x="0" y="144" rx="10" ry="10" width="158" height="34" />
          <rect x="0" y="188" rx="10" ry="10" width="80" height="32" />
          <rect x="125" y="188" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && <div className={styles.favorite} onClick={onChangeFavorite}>
            <img src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="Unliked"/>
          </div>}          
          <img width="100%" height={135} src={imageUrl} alt="sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price}</b>
            </div>
            {onPlus && <img
              className={styles.plus}
              onClick={onClickPlus}
              src={isAddedItems(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
              alt="Plus"
            />}
            
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
