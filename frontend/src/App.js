import React from 'react';
import { Container } from "react-bootstrap"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import './App.css';
import HomeScreens from './screens/HomeScreens';
import ProductScreen from './screens/ProductScreen';

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
            </Routes >
          </Container>
          <Footer />
        </main>
      </Router>
    </div>

  );
}

export default App;
