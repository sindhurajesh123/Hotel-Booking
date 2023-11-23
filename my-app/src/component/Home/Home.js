import React from"react"
import video from'../../ass/Resort1.mp4'
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import"./Home.css"
const Home=()=>{
    return(
        <>
     
    <div className="wave">
            <video autoPlay loop muted id="video">
                <source src={video} type="video/mp4"/>
            </video>
           
            <div className="overlay"></div>
            </div>

            <section className="slide-form">
        <div className="container">
            <h2 >Enjoy Your Holiday</h2>
            <span>Search and Book Hotel</span>
            <form action="">
                <input type="text" placeholder="Search City"name='' id=''/>
                <div className="flex_space">
                    <input type="date" placeholder="check In"/>
                    <input type="date" placeholder="check Out"/>

                </div>
                <div className="flex_space">
                <input type="number" placeholder="Adult(s)(+18)"/>
                    <input type="number" placeholder="Children(0-17)"/>

                </div>
                <div className="flex_space">
                <input type="number" placeholder="Rooms"/>
            </div>
                <div  className="submit">
                <Link to='/Destination'>Submit</Link>
              </div>      
       
            </form>
        </div>
</section>
            
        </>
    )
}
export default Home