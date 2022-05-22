import React from 'react';
import { Container } from "react-bootstrap"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import './App.css';
import HomeScreens from './screens/HomeScreens.js';
import ProductScreen from './screens/ProductScreen.js';
import CartScreen from "./screens/CartScreen.js"

const App = () => {
  return (
    <div className="body">
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreens />} exact />
              <Route exact path='/product/:id' element={<ProductScreen />} />
              <Route path="/cart/:id" element={<CartScreen />} />
              <Route path="/cart" element={<CartScreen />} />
            </Routes >
          </Container>
          <Footer />
        </main>
      </Router>
    </div>

  );
}

export default App;
