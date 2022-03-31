import React, { Component } from 'react';
import MenuComponent from './components/MenuComponent';
import BurgerComponent from './components/BurgerComponent';
import AppetizersComponent from './components/AppetizersComponent';
import EntreesComponent from './components/EntreesComponent';
import BeerComponent from './components/BeerComponent';
import CocktailsComponent from './components/CocktailsComponent';
import EventsComponent from './components/EventsComponent';
import AboutUsComponent from './components/AboutUsComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<MenuComponent />} />
          <Route exact path="/burgers" element={<BurgerComponent />} />
          <Route exact path="/appetizers" element={<AppetizersComponent />} />
          <Route exact path="/entrees" element={<EntreesComponent />} />
          <Route exact path="/beer" element={<BeerComponent />} />
          <Route exact path="/cocktails" element={<CocktailsComponent />} />
          <Route exact path="/events" element={<EventsComponent />} />
          <Route exact path="/aboutus" element={<AboutUsComponent />} />
        </Routes>
      
      </BrowserRouter>
    )
  }
}