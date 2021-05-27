import React, { createContext, useReducer, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import ErrorPage from './components/Errorpage';
import Logout from './components/Logout';
import Services from './components/Services';
import AddHostel from './components/AddHostel';
import Cards from './components/Cards';
import { initialState, reducer } from '../src/reducer/UseReducer';
import DisplayHostels from './components/DisplayHostels';
import AddOwner from './components/AddOwner';
import ApplicationForm from './components/ApplicationForm';

//Context API
export const UserContext = createContext();


const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
        <Cards />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>
      <Route path="/services">
        <Services />
      </Route>
      <Route path="/addhostel">
        <AddHostel />
      </Route>
      <Route path="/cards">
        <Cards />
      </Route>
      <Route path="/displayhostels">
        <DisplayHostels />
      </Route>
      <Route path="/addowner">
        <AddOwner />
      </Route>
      <Route path="/applicationform/:hname">
        <ApplicationForm />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  )
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routing />
      </UserContext.Provider>
    </>
  )
}

export default App