import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "../src/pages/Search"
import Saved from "../src/pages/Saved"

// Calling all components and using router to render pages
function App() {
  return (
    <Router>
      <div>

        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
  )

}

export default App;