import { useState } from 'react'
import  React from 'react'
import './App.css'

function App(){
  //Event Handler (Update state on input change)
  const[value , setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  }
  return(
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <h3>{value}</h3>
      <button>Click Me</button>
    </div>
  )

  //const[morning , setMorning] = useState("Morning");
  
  // const Toggle = () => {
  //   if(morning){
  //     setMorning("Evening");
  //   }else{
  //     setMorning("Morning");
  //   }
  // }
  // return(
  //   <div>
  //     <h1>Good {morning}</h1>
  //     <button onClick={Toggle}>chhoti</button>
  //   </div>
  // )


//   const[userLogin , setUserLogin ] = useState(false);

//   const Toggle = () => {
//       if(userLogin){
//         setUserLogin(false);
//       }else{
//         setUserLogin(true);
//       }
//   }
//   return(
//     <div>
//        <h2>{userLogin ? "Logged In" : "Logged Out"}</h2>
//       <button onClick={Toggle}>toggleButton</button>
//     </div>
//   )
 }
//function App({Products}) {
// const[category , setCategory] = useState("");

// const getFilteredProducts = () => {
//   if (!Products) return []; 
//   if(category === "") return Products;

//   return Products.filter((p) => p.category === category)
// }

// return(
//   <div>
//     <select 
//     value={category} 
//     onChange={(e) => setCategory(e.target.value)}>

//       <option value=""> All</option>
//       <option value="Electronics">Electronics</option>
//       <option value="Clothing">Cloth</option>

//     </select>

//     <button onClick={() => setCategory("")}>Reset</button>

//     {getFilteredProducts().map((p , i) => (
//       <p key={i}>{p.name}</p>
//     ))}
//   </div>
// )
// };
  
 // Timer

//  const[time , setTime] = useState(0);

//  useEffect(() => {
//   const interval = setInterval(() => {
//     setTime((prev) => prev + 1);
//   } , 1000);

//   return() => clearInterval(interval);
//  },[]);

//  return(
//   <div>
//     <h1>Time:{time}</h1>
//     <button onClick={() => setTime(0)}>Start</button>
//   </div>
//  )


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


export default App
