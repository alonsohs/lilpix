import React from 'react'
import NavBar from "./components/shared/NavBar";
import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from "./views/Home/home";
import MonToFri from "./views/MonToFri";

function App() {
  return (
      <>
          <Router>
              <NavBar/>
              <main>
                  <Switch>
                      <Route exact path="/mon-to-fri">
                          <MonToFri/>
                      </Route>
                      <Route exact path="/">
                          <Home />
                      </Route>
                  </Switch>
              </main>
          </Router>
      </>
  )
}

export default App
