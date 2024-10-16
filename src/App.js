import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Greeting from './buoi2/components/Greeting';
import GreetingWithProps from './buoi2/props/GreetingWithProps';
import Counter from './buoi2/state/Counter';
import Timer from './buoi2/hooks/Timer';
import { ThemeProvider, ThemeToggler, useTheme } from './buoi2/components/context/ThemeContext';
import RoutingExample from './buoi2/routing/RoutingExample';

const AppContent = () => {
  const { theme } = useTheme();

  React.useEffect(() => {
    document.body.className = theme; 
  }, [theme]);

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/greeting">Greeting</Link>
          </li>
          <li>
            <Link to="/props">Props Example</Link>
          </li>
          <li>
            <Link to="/state">State Example</Link>
          </li>
          <li>
            <Link to="/hooks">Hooks Example</Link>
          </li>
          <li>
            <Link to="/context">Context Example</Link>
          </li>
          <li>
            <Link to="/routing">Routing Example</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/props" element={<GreetingWithProps name="Long" />} />
        <Route path="/state" element={<Counter />} />
        <Route path="/hooks" element={<Timer />} />
        <Route path="/context" element={<ThemeToggler />} />
        <Route path="/routing" element={<RoutingExample />} />
        <Route path="/" element={<h1>Welcome to React Practice</h1>} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}









