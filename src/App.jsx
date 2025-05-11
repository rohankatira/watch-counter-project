import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductCard() {
  const price = 16500;
  const delivery = 0;

  const getInitialCount = () => {
    const storedCount = localStorage.getItem('productCount');
    return storedCount ? parseInt(storedCount, 10) : 0;
  };

  const [count, setCount] = useState(getInitialCount);
  const subtotal = count * price;
  const total = subtotal + delivery;

  const handleReset = () => setCount(0);

  useEffect(() => {
    localStorage.setItem('productCount', count);
  }, [count]);

  return (
    <div className="container my-4">
      <div className="card p-4 shadow">
        <div className="product-header mb-3">
          <h2>Tommy Hilfiger Quartz Multifunction</h2>
          <p>White Dial Silicone Strap Watch for Men</p>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img
              src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw26e1a418/images/Helios/Catalog/TH1791778_1.jpg?sw=600&sh=600"
              alt="Watch"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h4>Product Price</h4>
            <div className="price-tag mb-3">MRP: ₹{price}</div>

            <div
              className="d-flex align-items-center mb-3 flex-wrap"
              style={{ gap: '10px' }}
            >
              <Button variant="outline-dark" onClick={() => setCount(prev => Math.max(prev - 1, 0))}>−</Button>
              <span style={{ minWidth: '30px', textAlign: 'center', fontSize: '1.25rem' }}>{count}</span>
              <Button variant="outline-dark" onClick={() => setCount(prev => prev + 1)}>+</Button>
              <Button variant="danger" onClick={handleReset}>Reset</Button>
            </div>

            <div className="summary-box">
              <div className="summary-item d-flex justify-content-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="summary-item d-flex justify-content-between">
                <span>Delivery & Handling</span>
                <span>₹{delivery}</span>
              </div>
              <div className="summary-item d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <Button className="mt-4 w-100" variant="success">Buy Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return <ProductCard />;
}

export default App;
