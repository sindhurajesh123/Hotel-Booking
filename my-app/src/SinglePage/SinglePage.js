import React, { useEffect, useState } from 'react'
import"./SinglePage.css"
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import AllItems from '../component/Destination/Allitems'
import Sdata from '../component/Destination/Sdata'
import EmptyFile from '../component/EmptyFile/EmptyFile'

const SinglePage = ()=> {
    const {id} = useParams() 
    const[item,setItem] =useState(null)

    useEffect(() => {
let item = Sdata.find((item)=> item.id==parseInt(id))
if(item) {
    setItem(item)
}
    },[id])
    return(
     <>
     {item ?(

     
    
     <section className='single-page top'>
      <div className='continer'>
      <Link to='/Destination' className=' back'>
       <i className='fas fa-long-arrow-alt-left'></i>Go back
       </Link>
       
       <article className='content flex'>
        <div className='main-content'>
            <img src={item.image} alt=''  />
            <p>{item.desc}</p>
            <p>{item.desc}</p>
            <div className='para flex_space'>
                <p>{item.sidepara}</p>
                <p>{item.sidepara}</p>
            </div>
            <h1>What is the {item.title} city?</h1>
            <p>{item.desc}</p>
           
            <div className='image grid1 '>
                  <img src={item.image} alt='' />
                  <img src={item.image} alt='' />
                </div>
                <p>{item.desc}</p>
        </div>


        <div className='side-content'>
                <div className='box'>
                  <h2>How can we help you?</h2>
                  <p>{item.sidepara}</p>
                  <button className='outline-btn'>
                    <i className='fa fa-phone-alt'></i> Contact Us
                  </button>
                </div>
                <div className='box2'>
                  <p>{item.sidepara}</p>
                </div>
              </div>

       </article>
      </div>



     </section>
 ) : (
    <EmptyFile />
  )}
     
     </>

    
    )
}
export default SinglePage