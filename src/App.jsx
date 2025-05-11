import React from 'react';
// import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductCard() {
  const [count, setCount] = useState(0);
  const price =  16500;
  const delivery = 0;
  const subtotal = count * price;
  const total = subtotal + delivery;

  return (
    <div className="product-container">
      <div className="product-header">
        <h2>Tommy Hilfiger Quartz Multifunction</h2>
        <p>White Dial Silicone Strap Watch for Men</p>
      </div>
      <div className="product-body">
        <div className="product-image">
          <img
            src= "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw26e1a418/images/Helios/Catalog/TH1791778_1.jpg?sw=600&sh=600"
            alt="Nike Vaporfly"
          />
        </div>
        <div className="product-details">
          <h4>Product Price</h4>
          <div className="price-tag">MRP: ₹{price}</div>
          <div className="counter">
            <Button variant="outline-dark" onClick={() => setCount(prev => Math.max(prev - 1, 0))}>−</Button>
            <span>{count}</span>
            <Button variant="outline-dark" onClick={() => setCount(prev => prev + 1)}>+</Button>
          </div>
          <div className="summary-box">
            <div className="summary-item">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="summary-item">
              <span>Delivery & Handling</span>
              <span>₹{delivery}</span>
            </div>
            <div className="summary-item total">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            <Button className="buy-now">Buy Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <ProductCard/>
    </>
  );
}

export default App;