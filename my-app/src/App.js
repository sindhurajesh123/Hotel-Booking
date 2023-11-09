import React from "react";
import "./App.css"
import Navbar from "./component/Navbar/Navbar";
import{BrowserRouter as Router,Route,Switch}from"react-router-dom"
import Home from"./component/Home/Home";
import About from "./component/About/About";
import Gallery from "./component/Gallery/Gallery";
import Destination from "./component/Destination/Home";
import SinglePage from "./SinglePage/SinglePage";
import Contact from "./component/Contact/Contact";
import Login from "./component/Login/Login";
import Register from "./component/Login/Register";
import Book from "./component/Book/Book";











function  App(){
  return(

    <>
   <Router>
   <Navbar />
     
   <Switch>
     
      <Route path='/' exact component={Home}></Route>
      <Route path='/hotel-booking' exact component={Home}></Route>
      <Route path='/About' exact component={About}></Route>
      <Route path='/Gallery' exact component={Gallery}></Route>
      <Route path='/Destination' exact component={Destination}></Route>
      <Route path='/SinglePage/:id'exact component={SinglePage}></Route>
      <Route path='/Book' exact component={Book}></Route>
      <Route path='/Contact' exact component={Contact}></Route>
      <Route path='/sign in' exact component={Login}></Route>
      <Route path='/register' exact component={Register}></Route>
     
     
     
      </Switch>
            
       
    
   
      </Router>
    </>


    
  )
}


         

export default App;
