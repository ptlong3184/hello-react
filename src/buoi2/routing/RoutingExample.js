import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import ExampleComponent from './ExampleComponent'; // Đảm bảo import đúng

function RoutingExample() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/example">Example</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/example" element={<ExampleComponent />} />
      </Routes>
    </div>
  );
}

export default RoutingExample;
