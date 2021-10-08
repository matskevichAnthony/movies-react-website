import React from 'react';

//Global style
import GlobalStyle from './components/GlobalStyle';

//pages
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';

//router

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
      </Switch>
      <GlobalStyle />
    </div>
  );
}

export default App;
