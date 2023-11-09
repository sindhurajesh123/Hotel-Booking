import React, { useState } from'react'
import"./Book.css"

const Book = () => {
    const [fname,setFname] = useState ("")
    const [email,setEmail] = useState ("")
   const [inDate,setInDate] = useState ()
   const [OutDate,setOutDate] = useState ()
   const[daySelect,setDaySelect] = useState ()
 const[select,setSelect]=useState()

 const [allValue, setAllValue] = useState([])
        const formSubmit = (e) => {
          e.preventDefault()
      
          const newValue = { fname, email,  inDate, OutDate, daySelect,select}
          setAllValue([...allValue, newValue])
      
          setFname("")
          setEmail("")
          setInDate()
          setOutDate()
          setDaySelect()
          setSelect("")
        }
        const handleBookRoom = () => {
          window.alert('Room booked successfully! Thank you for choosing our hotel.');
  };
    return (

<>

<div className='right'>

            <div className='promo'>
                <h4 className='save'>GET AN ADDITIONAL 12% OFF</h4>
                <p className='timer'>12 HOURS LEFT </p>
                <p className='offers'>VIEW ALL CURRENT OFFERS </p>
       
          
            
            <div  className='label'>
               Name :
               <input  className='box'style={{ marginLeft: "120px", width:"40%"}}  type='placeholder' name='fname' value={fname} onChange={(e) => setFname(e.target.value)} required />   
               </div> <br></br>
              <div  className='label'>
                     Email :
                  
                  <input className='box'style={{ marginLeft: "120px", width: "40%"}} type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div> <br></br>
                  
      
        <div  className='label'>
        Check-In :
        <input  className='box2'style={{marginLeft: "95px"}} type="date" onChange={e=>setInDate(e.target.value)}/>
  </div> <br></br>
        
        <div  className='label'>Check-Out :
        <input  className='box2' style={{marginLeft:"85px"}} type="date" onChange={e=>setOutDate(e.target.value)}/>
        
        </div> <br></br>
        
<div  className='label'>Number of days :
<select   className='box1' style={{marginLeft:"53px"}}value={select}onChange={e=>setDaySelect(e.target.value)}>


    <option>1</option>
    <option> 2</option>
     <option> 3</option>
     <option >4</option>
     <option >5</option>
     <option >6</option>
     <option >7</option>
     <option >8</option>
     <option >9</option>
     <option >10</option>
</select>
</div> <br></br>


<div  className='label'> Payment Gateway :
<select  className='box1'   style={{marginLeft: "40px"}}value={select}onChange={e=>setSelect(e.target.value)}>
<option >none</option>
    <option >Credit card</option>
    <option> Debit card</option>
     <option > UPI Payments</option>
       <option >Gpay</option>
     <option>PhonePay</option>
     <option > Paytm</option>
    </select>
    </div> <br></br>
<button  style={{width:"150px", height:"30px", backgroundColor:"blue",color:"yellow"}}onClick={handleBookRoom}>Book Room</button>

</div>
</div>
          
            
            
           
        <section className='show-data'>

        {allValue.map((cureentValue) => {
          const { fname, email, inDate, outDate, day,select } = cureentValue
          return (
            <>
            
              <div className='sign-box'>
                <h1>Send Successfully</h1>
                <h3>
                  First Name : <p>{fname}</p>
                </h3>
                <h3>
                Email : <p>{email}</p>
                </h3>
                <h3>
                 Check-In : <p>{inDate}</p>
                </h3>
                <h3>
                  Check-Out: <p>{outDate}</p>
                </h3>
                <h3>
                  Number of days: <p>{daySelect}</p>
                </h3>
                <h3>
                  Payment Gateway: <p>{select}</p>
                </h3>
               
              </div>
             
            </>
          )
        })}
        
      </section>
      
    
</>


    )
    }
       
       
       
      export default Book