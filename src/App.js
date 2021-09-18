import React, {useState, useEffect} from 'react'

import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";


function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false)

  useEffect(() => {
    fetch("https://6146238d5accc70017dae4bf.mockapi.io/items").then(res => {
      return res.json()
    }).then(json => {
      setItems(json)
    })
  }, [])

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }
  console.log(cartItems);

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)}/>
      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((obj) => (
            <Card 
              title={obj.title} 
              price={obj.price} 
              imageUrl={obj.imageUrl} 
              onPlus={onAddToCart} 
              onFavorite={() => console.log("Добавили в закладки")}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
