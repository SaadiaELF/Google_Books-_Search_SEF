import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "../src/pages/Search"


// Calling all components and using router to render pages
function App() {
  return (
    <Router>
      <div>

        {/* <Route exact path="/" component={AboutMe} /> */}
        <Route exact path="/search" component={Search} />
      </div>
    </Router>
  )

}

export default App;