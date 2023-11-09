import React, { useState } from "react";
import TEXT2 from"../../ass/TEXT2.png";
import"../Navbar.css"
import { Link } from "react-router-dom";
const Navbar=()=> {
   

 const[click,setClick] = useState(false)

 const haldleClick = () => setClick(!click)
 const closeMobileMenu= () => setClick(false)
    return(

        <>
        <nav className="navbar">
                        
 
 
            <div className="container flex_space">
                      
<img style={{width:"70px",left:"0",marginLeft:"15px"}} src={TEXT2}></img>        
              
                           
<div className="menu-icon" onClick={haldleClick}>

<i className={click ? "fas fa-times" : "fas fa-bars"}></i>

</div>
    

<ul className={click ? "nav-menu active":"nav-menu"}>

           

  <li><Link to='/'onClick={closeMobileMenu}>Home</Link></li>
   <li><Link to='/About'onClick={closeMobileMenu}>About</Link></li>
   <li><Link to='/Gallery'onClick={closeMobileMenu}>Gallery</Link></li>
   <li><Link to='/Destination'onClick={closeMobileMenu}>Destination</Link></li> 
   <li><Link to='/Book'onClick={closeMobileMenu}>Book</Link></li>
   <li><Link to='/Contact'onClick={closeMobileMenu}>Contact</Link></li>
   
   

    
</ul>


<div className="login-area flex">
    <li>
        <Link to='/sign in'>
            <i className=" far fa chevron-right">Sign In</i>
        </Link>
    </li>
    <li>
        <Link to='/register'>
            <i className=" far fa chevron-right">Register</i>
        </Link>
    </li>
   
</div>

            </div>
        </nav>


       
        <header>
           
            <div className="contact flex_space">
                
                    <div className="box flex_space">
                        <div className="icons">
                        <i className="far fa-clock"></i>
                        </div>
                        <div className="text">
                            <h5>Working Hours </h5>
                            <Link to='/contact'>9am to 6pm</Link>
                        </div>
                        
                    </div>
                    <div className="box flex_space">
                    <div className="icons">
                    <i className="fas fa-phone-volume"></i>
                    </div>
                   
                    <div className="text">
                        <h5>Call us</h5>
                        <Link to='/contact'>+916558233</Link>
                    </div>
                    </div>
                    <div className="box flex_space">
                        <div className="icons">
                        <i className="far fa-envelope"></i>
                        </div>
                        <div className="text">
                        <h5>Mail us </h5>
                        <Link to='/contact'>info@example.com</Link>
                       
                    </div>
                    </div>
                </div>
            
                </header>

        </>
    )
}
export default Navbar