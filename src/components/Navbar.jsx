import React from 'react';
import heart from './icons/heart.png'
import bag from './icons/bag.png'
import search from './icons/search.png'
import menu from './icons/menu.png'
import user from './icons/user.png'
import logo from './icons/logo.png'
import './navbar.css';


const Navbar = () => {
 
  const currentPath = window.location.pathname;

  return (
    <nav >
      <div className='alert'> Lorem ipsum dolor</div>
      <div className='navbar'>

        <div>
          <img src={menu} id='menu-btn' alt="Menu Icon" style={{ width: '20px' }} />
          <img src={logo} alt="logo Icon" style={{ width: '20px' }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}><h2>LOGO</h2></div>

        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <img src={search} alt="search Icon" style={{ width: '20px' }} />
          <img src={heart} alt="like Icon" style={{ width: '20px' }} />
          <img src={bag} alt="bag Icon" style={{ width: '20px' }} />
          <img src={user} className='hidden' alt="user Icon" style={{ width: '20px', color: 'gray' }} />
          <span className='hidden' id='language'><b style={{ padding: '0 0.1rem 0 0.2rem ' }}> ENG</b>v</span>
        </div>
    

      </div>

      <div id="navbar2">
        <a href="/" style={{
            fontWeight: currentPath === '/' ? 'bold' : 'normal',
            color: '#000',
            textDecoration: 'none',
          }}>
          HOME
        </a>
        <span> | </span>
        <a href="/" style={{
            fontWeight: currentPath === '/shop' ? 'bold' : 'normal',
            color: '#000',
            textDecoration: 'none',
          }}>
          SHOP
        </a>
      </div>
      <div className='nav3'>
      <div><a href="/" style={{
            fontWeight: currentPath === '/' ? 'bold' : 'normal',
            color: '#000',
            textDecoration: 'none',
          }}>>SHOP</a></div>
      <div><a href="/" style={{
            fontWeight: currentPath === '/' ? 'bold' : 'normal',
            color: '#000',
            textDecoration: 'none',
          }}>>SKILLS</a></div>
      <div><a href="/" style={{
            fontWeight: currentPath === '/' ? 'bold' : 'normal',
            color: '#000',
            textDecoration: 'none',
          }}>>STORIES</a></div>
     <div> <a href="/" style={{
            fontWeight: currentPath === '/' ? 'bold' : 'normal',
            color: '#000',
            textDecoration: 'none',
          }}>>ABOUT</a></div>
      <div><a href="/" style={{
            fontWeight: currentPath === '/' ? 'bold' : 'normal',
            color: '#000',
            textDecoration: 'none',
          }}>>CONTACT US</a></div>
      </div>


          <div className='heading'>
            <h1>DISCOVER OUR PRODUCTS</h1>
            <p>Lorem ipsum dolor sit amet  omnis omnis similique? Nulla aliquid,trhen  sed earum provident quidem magni vitae necessitatibus.</p>
          </div>
    </nav>

  );
};

export default Navbar;
