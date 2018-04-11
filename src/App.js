import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <main className="web-mail">
        <Header />
        <Content />
        <Footer />
      </main>
    );
  }
}

export default App;
