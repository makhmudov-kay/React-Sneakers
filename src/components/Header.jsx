import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

const Header = (props) => {
    const {totalPrice} = useCart()
    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
                <div className="d-flex align-center">
                    <img className="mr-15" width={40} height={40} src="img/logo.png" alt="Logo" />
                    <div>
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p className="opacity-5">Магазин лучших кросовок</p>
                    </div>
                </div>
            </Link>
            
            <ul className="d-flex">
                <li onClick={props.onClickCart} className="mr-30 d-flex align-center cu-p">
                    <img width={20} className="mr-10" height={20} src="img/cart.svg" alt="cart" />
                    <span>{totalPrice} руб.</span>
                </li>
                <li className="mr-10 d-flex align-center cu-p">
                    <Link className="d-flex align-center justify-center" to="favorite">
                        <img width={20} className="mr-10" height={20} src="img/favorites.svg" alt="favorites" />
                    </Link>                    
                </li>
                <li className="d-flex align-center">
                    <Link className="d-flex align-center justify-center" to="orders">
                        <img width={20} height={20} src="img/user.svg" alt="user" />
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
