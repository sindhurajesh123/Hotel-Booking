import React from "react"
import Resort1 from'../../ass/Resort1.jpg'
import Resort2 from'../../ass/Resort2.jpg'
import Resort3 from'../../ass/Resort3.jpg'
import Resort4 from'../../ass/Resort4.jpg'
import Resort5 from'../../ass/Resort5.jpg'

import"./About.css"


const About=()=>{


    return (
<>


<div className='about'>
            <div className="container">
                <h1>All-Inclusive Resorts</h1>
                <p>On the Goa's Best Beaches</p>
                <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE </h2>
                    <p>105 kms of Konkan coast stretches across the state of Goa providing a wide range of choice in beaches to suit everybody’s needs. There are unspoilt pristine stretches of sand for the solitude seeker and there are those ones jammed with people in every square feet of sand.
                  There are beaches far from human habitation with very basic or sometimes no facility for accommodation. Then there are some with ultra modern comforts like internet cafes, massage centers, gyms, swimming pools, night clubs, etc. With such an enormous choice, one might feel confused about which one to take.
          But on the contrary, it’s quite easy to plan an itinerary for getting suntan allover the body. Taking the capital Panaji and the next major city Margao as base points, all the beaches can be visited in a stretch. North from Panaji lies the most famous beach of Calangute.From here onwards to the northern tip of the state, swaying palms and shimmering sands stretch giving an enchanting sight.The further north, the emptier the beaches become.</p>
          <div className='search-col-2'></div>
                <div className="img-container">
                 <img  className='span-3 image-grid-row-2'src={Resort1}alt="/"/>
                 <img src={Resort2}alt="/"/>
                 <img src={Resort3}alt="/"/>
                 <img src={Resort4}alt="/"/>
                 <img src={Resort5}alt="/"/>
                </div>
            </div>
            </div>
           

</>

    )

}
export default About