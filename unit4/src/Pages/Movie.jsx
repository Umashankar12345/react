// import { use } from "react";
// import {useEffect , useState} from "react";

// export const Movie = () => {
//     const [data , setData] = useState([])

//     const API = "https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1";

//     //   const  res = await axios.get(API)

//         const getMovieData =  () => {
//             try {
//                 const  res  = await axios.get(API);
//                 console.log("movie data" , res.data.Search);
//                 setData(res.data.Search);

//             } catch(error){
//                 console.log("error" , error);
//             }
//         }
//       useEffect(() => {
//         getMovieData();
//       },[])

//     return <h1>Movie Page</h1>
// };