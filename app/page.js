import Image from "next/image";
import styles from "./page.module.css";
import FrontPage from "./FrontPage/frontPage";

export default function Home() {
  return (
    <div>
      <FrontPage/>
    </div>
  );
}
// 'use client'
// import React, { useState } from 'react';

// function App() {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
 
//   const [tours, setTours] = useState([]);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/products', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, price }),
//       });

//       if (response.ok) {
//         setName('');
//         setPrice('');
//         alert('Product added successfully');
//       } else {
//         throw new Error('Failed to add product');
//       }
//     } catch (error) {
//       console.error('Error adding product:', error);
//       alert('Failed to add product');
//     }
//   };
//   const fetchTours = async () => {
//     try {
//         const response = await fetch('http://localhost:5000/zData', {
//             method: 'GET' // Specify the method as GET
//         });
//         if (!response.ok) {
//             throw new Error('Failed to fetch tours');
//         }
//         const data = await response.json();
//         setTours(data.zData);
       
//         setError(null);
//     } catch (error) {
//         console.error('Error fetching tours:', error);
//         setError('Failed to fetch tours. Please try again later.');
//     }
// };

//   return (
//     <div className="App">
//       <h1>Add Product</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         /><br/><br/>
//         <label htmlFor="price">Price:</label>
//         <input
//           type="number"
//           id="price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           required
//         /><br/><br/>
//         <button type="submit">Submit</button>
//       </form>
//       <div>
//             <h1>List of Tours</h1>
//             <button onClick={fetchTours}>Show Tours</button>
//             {error && <p>{error}</p>}
//             <ul>
//                 {Array.isArray(tours) &&  tours.map(tour => (
//                     <li key={tour._id}>
//                         {tour.name} - Price: {tour.price}, Rating: {tour.rating}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     </div>
//   );
// } 

  

// export default App;
