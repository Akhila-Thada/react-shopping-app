import React, { useEffect, useState } from 'react';
import './ShopPage.css';
import heart from './icons/heart.png'




const ShopPage = ({ onOpenAuth }) => {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetchProducts();
  }, []);

 

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);

  };

  


    

  return (
    <div className="shop-container">

      {
        
        products.map((values) => {
          return (
            <>
              <div key={values.id} className="product">
                <img className='image' src={values.image} alt="product img" />

                <div className="details">

                  <div>
                    <h6>{values.title}</h6>
                  </div>

                  <img src={heart} id='heart' alt="like Icon" style={{ width: '14px', height: '14px' }} />
                </div>
                <p>
                      <a href="">Sign in </a>
                      or Create an account to see pricing
                    </p>
                  
              </div>
            </>
          )
        })
      }
      <button onClick={onOpenAuth} style={{ padding: '0.3rem', border: '2px solid  rgb(219, 215, 215)', backgroundColor: 'white', borderRadius: '0.2rem', marginBottom: '2rem'}}>Signup / Login</button>
    </div>
  );
};

export default ShopPage;
