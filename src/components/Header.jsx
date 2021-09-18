import React from 'react'

const Header = (props) => {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img className="mr-15" width={40} height={40} src="/img/logo.png" alt="Logo" />
                <div>
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кросовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li onClick={props.onClickCart} className="mr-30 d-flex align-center cu-p">
                    <img width={20} className="mr-10" height={20} src="/img/cart.svg" alt="cart" />
                    <span>1205 руб.</span>
                </li>
                <li className="d-flex align-center">
                    <img width={20} height={20} src="/img/user.svg" alt="user" />
                </li>
            </ul>
        </header>
    )
}

export default Header
