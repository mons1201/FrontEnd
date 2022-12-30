import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Create } from "./create";
import { Menu } from "./menu";
import { Login } from "./login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Edit } from "./edit";
import { Traverse } from "./traverse";
import { Filter } from "./filter";


const App=()=>
{
  return(
    
    <>
     {
      (sessionStorage.getItem("person"))
      ?
      <>
        <BrowserRouter>
          <Menu/> 
          <Routes>
            {/* <Route path="/" exact element={()=><Traverse/>} />
            <Route path="" exact element={<h1>HI</h1>} /> */}
            <Route path="show" exact element={<Traverse/>} />
            <Route path="new" element={<Create/>} />
            <Route path="modify/:ComName" exact element={<Edit/>} />
            <Route path="filter" exact element={<Filter/>} />

          </Routes>
        </BrowserRouter>        
      </>
      :
      <>
        <Login/>
      </>
    }
    </>
  )
}
export default App;

/*

<BrowserRouter>
        <Menu/> 
        <Routes>
          <Route path="/" exact element={()=><Traverse/>} />
          <Route path="" exact element={<h1>HI</h1>} />
          <Route path="show" exact element={<Traverse/>} />
          <Route path="new" element={<Create/>} />
          <Route path="modify/:CompanyName" exact element={<Edit/>} />
          <Route path="filter" exact element={<Filter/>} />

        </Routes>
      </BrowserRouter>
*/