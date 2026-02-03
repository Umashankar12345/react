// // import { useState, useEffect } from "react";

// // function Fetch() {
// //   const [posts, setPosts] = useState([]);

// //   useEffect(() => {
// //     fetch("https://jsonplaceholder.typicode.com/posts")
// //       .then(res => res.json())
// //       .then(data => setPosts(data));
// //   }, []);

// //   return (
// //     <div>
// //       <h2>Posts List</h2>
// //       {posts.map(post => (
// //         <p key={post.id}>{post.title}</p>
// //       ))}
// //     </div>
// //   );
// // }

// // export default Fetch;
// import React, { useState, useEffect } from 'react';

// function Fetch() {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Perform GET request to fetch posts
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(jsonData => {
//                 setData(jsonData);
//                 setLoading(false);
//             })
//             .catch(err => {
//                 setError(err.message);
//                 setLoading(false);
//             });
//     }, []); // Empty dependency array means this runs once after mounting

//     if (loading) return <p>Loading data...</p>;
//     if (error) return <p>Error: {error}</p>;

//     return (
//         <div>
//             <h2>Fetched Posts</h2>
//             <ul>
//                 {data.map(post => (
//                     <li key={post.id}>
//                         <strong>{post.title}</strong><br />
//                         {post.body}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Fetch;