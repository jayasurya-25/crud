import React from "react";
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Create from "./crud/component/Create";
import Read from "./crud/component/Read";
import Update from "./crud/component/Update";
import Delete from "./crud/component/Delete";
import Operation from "./crud/component/Operation";

const App = () =>{
  return(
    <main>
      <h1>CRUD OPERATION</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={Operation}/>
        <Route path="/Create" Component={Create}/>
        <Route path="/Read" Component={Read}/>
        <Route path="/Update" Component={Update}/>
        <Route path="/Delete" Component={Delete}/>
      </Routes>
      </BrowserRouter>
    </main>
  )

}

export default App;