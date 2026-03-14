import { useState } from 'react'
import  React from 'react'
import './App.css'

function App() {
  // const IPL = ['CSk' , 'mumabi' , 'RCB' , 'punjab']
    // const Name = ['uma' , 'shankar' , 'dhiraj' , 'kumar']

    
    //   const result = Name.map((Name)=> <h1>{Name} </h1>)
    //   return(
    //   <div className='app'>
    //     <h1>{result}</h1>
    //      </div>
    // )

    // const phone = ['iphone' , 'apple' , 'realme' , 'samsung' , 'poco' ]

    // const map = phone.map((phone) => <h1>{phone}</h1>)

    // return(
    //   <div className='app'>
    //     <h1>{map}</h1>
    //   </div>
    // )
    // const fruits = ['Apple','mango','pineapple','orange','guava' , 'grapes']
    // return(
    //   <div>
    //     <h2>fruit List</h2>
    //     <ul>
    //       {fruits.map((fruit)=> (<li>{fruit}</li>))}
    //     </ul>
    //   </div>
    // )
    const phone = ['iphone','mango','pineapple','orange','guava','grapes']
return(
  <div>
    <h2>contactlist</h2>
    <ul>
      {phone.map((phone)=>(<ul>{phone}</ul>))}
    </ul>
  </div>
)

  //return (
   //<div className='app'>
    {/* {IPL[0]} <br />
    {IPL[1]} <br />
    {IPL[2]} <br />
    {IPL[3]} <br />
    {IPL[4]} <br /> */}
    // const result = IPL.map((ipl)=> <h1>{ipl}</h1>)
    // return(
    //   <div className='app'>
    //     <h1>{result}</h1>
    //   </div>
    // )
  //</div>

  //)
}

export default App
