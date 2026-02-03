// import { useState } from 'react';

// import './App.css';
// import axios from 'axios';

// function App() {
  

//   const getData = async() => {
//     const response =  await axios.get("https://picsum.photos/200/300")
//     console.log(response)
//   }

//   return (
//     <div className='p-10'>
//       {/* <button onClick={getData}> </button> */}
//         <button onClick={getData} className='bg-teal-700  text-white font-semibold text-2xl px-6 py-3 rounded  active:scale-90' >Get Data</button>
//         <div className='p-5 mt-5 bg-gray-950'>Hello

//         </div>
//     </div>
//   )
// }
// export default App

//             in q1  Create a React component that:

// Fetches a list of users from an API using Fetch API

// Displays the users using map()

// Shows Loading while data is being fetched

// Shows Error message if request fails
// Use useEffect.

// import getdata from './getdata';
import PostData from "./postdata";
function App() {
  return(
    <div>
      <h2>user List</h2>
      {/* <getdata/> */}
      <PostData/>
    </div>
  );
}
export default App;