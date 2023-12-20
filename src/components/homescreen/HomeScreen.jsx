import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LIttle from '../../assest/LIttle.png';
import './HomeScreen.css';

const HomeScreen = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const history = useHistory();

  
  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    history.push('/login');
  };

  const handleCart = () => {
    // Navigate to CartScreen when the "Cart" link is clicked
    history.push('/cartscreen');
  };

  const fetchMenuItems = async () => {
    try {
      const response = await fetch('https://troubled-shorts-fox.cyclic.cloud/menu_items');
      if (response.ok) {
        const data = await response.json();
        setMenuItems(data);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const filteredMenuItems = menuItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={LIttle} alt="Little" />
        </div>
        <div className={`menu ${open ? 'open' : ''}`}>
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`bar ${open ? 'open' : ''}`}></div>
            <div className={`bar ${open ? 'open' : ''}`}></div>
            <div className={`bar ${open ? 'open' : ''}`}></div>
          </div>
          <ul>
            <li onClick={toggleMenu}>Home</li>
            <li onClick={handleCart}>Cart </li>
            <li onClick={toggleMenu}>Contact</li>
            <li onClick={toggleMenu}>Help</li>
            <li onClick={handleLogout}>Logout</li>
          </ul>
        </div>
      </nav>
      <section className="menu-items">
        <div>Menu Items</div>
        <input
          type="text"
          placeholder="Search by name or category"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {filteredMenuItems.map((item) => (
          <div key={item.serial_number} className="menu-item">
            <span>Name Item: {item.name}</span>
            <br />
            <span>Category: {item.category}</span>
            <br />
            <span>Price: {item.price_inr} INR</span>
            <br />
            <span>Description: {item.description}</span>
            <br />
            
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomeScreen;