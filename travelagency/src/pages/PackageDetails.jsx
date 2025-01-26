// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { FaHeart } from 'react-icons/fa';
// // import { MdLocationOn, MdPerson, MdAccessTime } from 'react-icons/md';

// const PackageDetails = () => {



//   const { id } = useParams();
//   const packageData = {
//     // assume this is the data for the package with the given id
//     id: 1,
//     image: '../assets/images/tempImg.jpg',
//     DistrictName: 'District Name',
//     MainLocationName: 'Main Location Name',
//     DurationinDays: 5,
//     StartDate: '2023-02-20',
//     Description: 'This is a package description',
//     Price: 1000,
//   };

//   return (
//     <div className="package-details">
//       <div className="image-container">
//         <img src={packageData.image} alt="Package" />
//         <FaHeart className="heart-icon" />
//       </div>
//       <div className="details">
//         <h2>{packageData.DistrictName}</h2>
//         <p>Location: {packageData.MainLocationName}</p>
//         <p>Duration: {packageData.DurationinDays} Days</p>
//         <p>Start Date: {packageData.StartDate}</p>
//         <p>Description: {packageData.Description}</p>
//         <p>Price: ${packageData.Price}</p>
//         <button>Book Now</button>
//       </div>
//     </div>
//   );
// };

// export default PackageDetails;