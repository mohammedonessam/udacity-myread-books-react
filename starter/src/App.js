import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Search from "./component/Search";
import Home from "./component/Home";

function App () {
  return (
      <div className="app">
        <BrowserRouter>
        <Routes>
          <Route path="/" exact element={ <Home/>}/>
          <Route path="/search" element={ <Search />}/>
          <Route>Not found</Route>
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
