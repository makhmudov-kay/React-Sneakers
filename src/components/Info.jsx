import React from "react";
import { AppContext } from "../App";

const Info = ({title, image,  description}) => {
    const {setCartOpened} = React.useContext(AppContext)

  return (
    <div className="cart-empty">
      <img className="box" src={image} alt="Empty" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        Вернуться назад <img src="img/left-arrow.svg" alt="Arrow" />
      </button>
    </div>
  );
};

export default Info;
