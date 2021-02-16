import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
          <img className="home__image" src="https://www.orchardtaunton.co.uk/app/uploads/2020/03/OSC-Spring-Generic-2020-Website-Shopping-Banner-01.jpg" alt="" />
        
        {/* Product */}
       
        <div className="home__row">
<Product
          id="122223"
          title="Samsung Galaxy A71 (Prism Crush Black, 8GB RAM, 128GB Storage) with No Cost EMI/Additional"
          price={22.32}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71Wh8ZPcGBL._SL1500_.jpg"
          />

<Product
          id="122224"
          title="Fanmis Unisex Elegant Plane Style Digital Display Waterproof Outdoor Sports Silicone Strap LED Wrist Watch"
          price={20.92}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51wNW%2By3TFL._UL1000_.jpg"
          />

<Product
          id="122225"
          title="iShake Roadies Protein Shaker Bottle"
          price={18.2}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81amsqLCLZL._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
<Product
          id="122221"
          title="Dettol Original Germ Protection Handwash Liquid Soap Refill, 1500ml"
          price={12}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61KhcBJFnIL._SL1000_.jpg"
          />

<Product
          id="122222"
          title="Inklenzo Men's Fashion Sneakers White 7"
          price={14.54}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61dCnZCt-VL._UL1500_.jpg"
          />
        </div>
        <div className="home__row">
<Product
          id="122226"
          title="EYEBOGLER Men's Striped Regular fit T-Shirt"
          price={19.23}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/618COfjhmZL._UL1200_.jpg"
          />


        </div>
        </div>
    )
}

export default Home
