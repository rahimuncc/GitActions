import React, { useState, useEffect } from 'react';
import "./Accessories.css";
import axios from "axios";
import { accessories } from "../../data";

// const Accessories = (props) => {

//   const [sub, setSub] = useState(null);
//   const categoryId = props.categoriesID; // Replace with the actual pramsId value

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/api/v1/navigator/${categoryId}`);
      
//       console.log(response.data);
//       setSub(response.data); // Use response.data instead of response.json()
  
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div className="partsContainer">
//       {sub && sub.subCategoriesInfo.map((data) => (
//         <div className="cardContainer" key={data.id}>
//           <div className="card">
//             <img src={data.image} alt="" />
//           </div>
//           <div className="name">{data.name}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Accessories;

const Accessories = () => {
  return (
    <div className="partsContainer">
      {accessories.map((data) => (
        <div className="cardContainer" key={data.id}>
          <div className="card">
            <img src={data.img} alt="" />
          </div>
          <div className="name">{data.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Accessories;
