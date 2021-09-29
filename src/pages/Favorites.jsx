import React from "react";
import Card from "../components/Card";
import {AppContext} from '../App'


const Favorites = ({ onAddToCart, onAddToFavorites}) => {
  const {favorites} = React.useContext(AppContext)
  return (
    <div className="content p-40">
      <div className="mb-40 d-flex align-center justify-between">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favorites
          .map((obj) => (
            <Card
              key={obj.id}              
              onPlus={(obj) => onAddToCart(obj)}
              onFavorite={(obj) => onAddToFavorites(obj)}
              favorited={true}
              {...obj}
            />
          ))}
      </div>
    </div>
  );
};

export default Favorites;
