import React from "react"
import AllItems from "./Allitems"
import MostPopular from "./Popular/MostPopular"
import DestinationHome from "../destina/destinationHome"

const Destination =()=>{


    return (

        <>
             <MostPopular />
             <DestinationHome/>
             <AllItems />
        </>
    )
}
export default Destination