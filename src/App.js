import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const itemsResp = await axios.get(
          "https://6146238d5accc70017dae4bf.mockapi.io/items"
        );
        const cartResp = await axios.get(
          "https://6146238d5accc70017dae4bf.mockapi.io/cart"
        );
        const favoritesResp = await axios.get(
          "https://6146238d5accc70017dae4bf.mockapi.io/favorites"
        );
  
        setIsLoading(false);
        setCartItems(cartResp.data);
        setFavorites(favoritesResp.data);
        setItems(itemsResp.data);
      } catch (error) {
        alert("Ошибка при запросе данных!")
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
        `https://6146238d5accc70017dae4bf.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const {data} = await axios.post("https://6146238d5accc70017dae4bf.mockapi.io/cart", obj);
        setCartItems((prev) => prev.map(item => {
          if (item.id === data.parentId) {
            return {
              ...item,
              id: data.id
            }
          }
          return item
        }));
      }
    } catch (error) {
      alert("Не удалось добавить в корзину");
      console.error(error);
    }
  };

  const onRemoveItem = async (id) => {
    try {
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
      await axios.delete(`https://6146238d5accc70017dae4bf.mockapi.io/cart/${id}`);
    } catch (error) {
      alert("Не удалось удалить товар!")
      console.error(error);
    }
  };

  const onChangeSearch = (event) => {
    let value = event.target.value;
    setSearchValue(value);
  };

  const onAddToFavorites = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
        await axios.delete(
          `https://6146238d5accc70017dae4bf.mockapi.io/favorites/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://6146238d5accc70017dae4bf.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалсь добавить в закладки");
      console.log(error);
    }
  };

  const isAddedItems = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };  

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isAddedItems, setCartOpened, setCartItems, onAddToCart, onAddToFavorites }}>
      <div className="wrapper clear">
        <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveItem}
            opened={cartOpened}
          />
        <Header onClickCart={() => setCartOpened(true)} />

        <Route exact path="/">
          <Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearch={onChangeSearch}
            onAddToCart={onAddToCart}
            onAddToFavorites={onAddToFavorites}
            isLoading={isLoading}
          />
        </Route>
        <Route path="/favorite">
          <Favorites />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
