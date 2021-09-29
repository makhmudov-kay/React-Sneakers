import React from "react";
import axios from "axios";
import { AppContext } from "../App";
import Info from "./Info";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const Drawer = ({ onClose, onRemove, items = [] }) => {
  const {cartItems, setCartItems } = React.useContext(AppContext);
  const [orderId, setOrderId] = React.useState(null)
  const [isOrderCompleted, setIsOrederCompleted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false)

  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      const {data} = await axios.post("https://6146238d5accc70017dae4bf.mockapi.io/orders", {
        items: cartItems
      });      
      setOrderId(data.id)
      setIsOrederCompleted(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete("https://6146238d5accc70017dae4bf.mockapi.io/cart/" + item.id)
        await delay(1000)
      }
    } catch (error) {
      alert("Не удалось оформить заказ")
    } finally {
      setIsLoading(false)
    }    
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            onClick={onClose}
            className="cu-p"
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex cart">
            <div className="items">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                    className="cartItemImg "
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{item.title}</p>
                    <b>{item.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(item.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderCompleted ? "Заказ оформлен!" : "Корзина пустая"}
            description={isOrderCompleted ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
            image={isOrderCompleted ? "./img/complete.jpg" :"/img/empty.png"}
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
