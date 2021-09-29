import React from "react";
import Card from "../components/Card";

const Home = ({ searchValue, setSearchValue, onChangeSearch, items, onAddToCart, onAddToFavorites, cartItems, isLoading}) => {

  const renderItems = () => {
    const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    return (isLoading ? [...Array(10)] : filteredItems)
      .map((item, index) => (
        <Card
          key={index}
          onPlus={(obj) => onAddToCart(obj)}
          onFavorite={(obj) => onAddToFavorites(obj)}
          loading={isLoading}
          {...item}
        />
      ));
  };

  return (
    <div className="content p-40">
      <div className="mb-40 d-flex align-center justify-between">
        <h1>
          {searchValue ? `Поиск по запросу "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="cu-p search-clear"
              src="/img/btn-remove.svg"
              alt="Clear"
            />
          )}
          <input
            onChange={onChangeSearch}
            placeholder="Поиск..."
            value={searchValue}
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
};

export default Home;
