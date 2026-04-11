import { useState } from 'react'
import  React from 'react'
import './App.css'

function App() {

//   const[Morning, setMorning] = useState("Morning")

// const toggleGreeting = () => {
//   if(Morning === "Morning"){
//     setMorning("Evening")
//   }else{
//     setMorning("Morning");
//   }
// };
// return(
//   <div>
//   <h1>Good {Morning}</h1>
//   <button onClick={toggleGreeting}>Toogle</button>
//   </div>
// )
 const [name, setName] = useState("");

  return (
    <div>
      <input onChange={(e)=>setName(e.target.value)} />
      <h3>{name}</h3>
      <button onClick={()=>setName("")}>Reset</button>
    </div>
  );
  // const[cart , setCart] = useState([]);
  // const items = [
  //   {id: 1 , name: "Apple" , price: 1.5},
  //   {id: 2 , name: "Banana" , price: 0.8},
  //   {id: 3 , name: "orange" , price: 4.8},
  //   {id: 4 , name: "grapes" , price: 7.9},
  // ];

  // const addToCart = (product) => {
  //   setCart([...cart , product]);
  // };

  // const removeFromCart = (product) => {
  //   setCart(cart.filter((_ , index)  => index != indexToRemove));
  // };
  // return(
  //   <div style={{padding: '30px'}}>
  //       <h1>My Shopping Cart</h1>
  //       {items.map((item)=> (
  //         <button key= {item.id} onClick={() => addToCart(item)}>Add{item.name} (${item.price})</button>
  //       ))}

  //       <h2>Your cart({cart.length})</h2>
  //       <ul>
  //         {cart.map((item, index) => (
  //           <li key={index}>
  //             {item.name} - ${item.price}
  //             <button onClick={()=> removeFromCart(index)}>Remove </button>
  //           </li>
  //         ))}
  //       </ul>

  //       <h3>Total price: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</h3>
  //   </div>
  // )

  //const IPL = ['CSk' , 'mumabi' , 'RCB' , 'punjab']
    // const Name = ['uma' , 'shankar' , 'dhiraj' , 'kumar']

    
    //   const result = Name.map((Name)=> <h1>{Name} </h1>)
    //   return(
    //   <div className='app'>
    //     <h1>{result}</h1>
    //      </div>
    // )
    // const girls = ['chhoti' , 'moti' , 'gudiya' , 'kajal' , 'Arti']
    // const map = girls.map((girls) => <h1>{girls}</h1>)
    // return(
    //   <div className='app'> 
    //     <h1>{map}</h1>
    //   </div>
    // )

    // const phone = ['iphone' , 'apple' , 'realme' , 'samsung' , 'poco' ]

    // const map = phone.map((phone) => <h1>{phone}</h1>)

    // return(
    //   <div className='app'>
    //     <h1>{map}</h1>
    //   </div>
    // )
//     const fruits = ['Apple','mango','pineapple','orange','guava' , 'grapes']
//     return(
//       <div>
//         <h2>fruit List</h2>
//         <ul>
//           {fruits.map((fruit)=> (<li>{fruit}</li>))}
//         </ul>
//       </div>
//     )
//     const phonea = ['iphone','mango','pineapple','orange','guava','grapes']
// return(
//   <div>
//     <h2>contactlist</h2>
//     <ul>
//       {phonea.map((phonea)=>(<li>{phonea}</li>))}
//     </ul>
//   </div>
//)
//just to show how to use map function in react
  //return (
  //  <div className='app'>
  //    {IPL[0]} <br />
  //   {IPL[1]} <br />
  //   {IPL[2]} <br />
  //   {IPL[3]} <br />
  //   {IPL[4]} <br /> 
//      const result = IPL.map((ipl)=> <h1>{ipl}</h1>)
//      return(
//       <div className='app'>
//        <h1>{result}</h1>
//       </div>
//      )
//  </div>

//   )
}

export default App
