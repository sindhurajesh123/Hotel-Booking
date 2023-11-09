import React from "react"
import Card from "./card"
import GalleryData from "./GalleryData"
import"./Gallery.css"

const Gallery=()=>{



    return(


        <>
      <section className="gallery  top">
<div className="container grid">
    

       {GalleryData.map((value) => {
            return<Card Images={value.img} title={value.title} />
        })}
    
    
</div>
      </section>
        
        </>
    )
}
export default Gallery