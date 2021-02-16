import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import Logo from './logo.png'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <nav className="header">
            {/* Logo  */}
    <Link to="/">
      <img className="header__logo" src={Logo} alt={"logo"} />
    </Link>
     

            {/* Search Box */}

        <div className="header__search">

        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
        </div>

            {/* 3 Links */}

        <div className="header__nav">
         {/* 1st link */}
        <Link to="/login" className="header__link">
        <div className="header__option">
        <span className="header__optionLineOne">Hello</span>
        <span className="header__optionLineTwo">Sign in </span>
        </div>
       
        </Link>

         {/* 2nd link */}
         <Link to="/login" className="header__link">
        <div className="header__option">
        <span className="header__optionLineOne">Returns</span>
        <span className="header__optionLineTwo">& Orders</span>
        </div>
       
        </Link>
         {/* 3rd link */}
        
         {/* 4th link */}
          {/* Basket Icons */}
         <Link to="/checkout" className="header__link">
         <div className="header__optionBasket">
        {/* Shopping item Baskte */}
       <span className="header__optionLineTwo header__basketCount">Checkout</span>
        <ShoppingBasketIcon />
        {/* Number iten Counter */}
        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>

         </div>
         </Link>
        </div>
           

        </nav>
        );
    
}

export default Header
