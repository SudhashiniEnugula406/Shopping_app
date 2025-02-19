import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CartPage } from './CartPage';
import { HomePage } from './HomePage';
import ProductDetailsPage from './ProductDetailsPage';  // Import the new page

const App = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0); // Count total items

  return (
    <Router>
      <div style={{ padding: 30 }}>
        <h1>Shopping Cart</h1>

        <nav style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', padding: '10px', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
          <Link to="/" style={{ textDecoration: 'none', fontSize: '18px' }}>Home</Link>
          <Link to="/cart" style={{ textDecoration: 'none', fontSize: '18px' }}>
            Cart ({cartCount}) 
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />  {/* New route for product details */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

