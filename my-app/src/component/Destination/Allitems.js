import React, { useState } from "react"
import Dcard from "./Dcard"
import Sdata from "./Sdata"
const AllItems = ()=> {
const[items,setItems]=useState(Sdata)
    return(
<>
<section className="gallery desi mtop">
<div className="heading">
            <h1>Most Popular Destination</h1>
            <div className="line"></div>
        </div>
    <div className="container">
        <div className="content grid">
        
            {
                items.map((item)=>{

                    return<Dcard key={item.id}item={item}/>
                })
            }
        </div>
    </div>

</section>

</>

    )
}
export default AllItems