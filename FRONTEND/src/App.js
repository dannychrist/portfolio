import React from 'react';

// Components
import Header from './shared/components/Navigation/Header';
import Home from './pages/components/Home';
import MyServices from './pages/components/MyServices';
import AboutMe from './pages/components/AboutMe';
import MyWork from './pages/components/MyWork';
import Footer from './shared/components/Navigation/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <MyServices />
      <AboutMe />
      <MyWork />
      <Footer />
    </>
  );
};

export default App;
