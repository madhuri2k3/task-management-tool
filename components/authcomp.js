// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AuthenticatedComponent = () => {
//   const [data, setData] = useState(null);
//   const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

//   useEffect(() => {
//     if (token) {
//       axios.get('https://osbaseleaf-api.andolasoft.co.in/v1/some-protected-route', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then(response => setData(response.data))
//       .catch(error => console.error('Error fetching protected data:', error));
//     }
//   }, [token]);

//   if (!token) {
//     return <p>Please login to access this data.</p>;
//   }

//   return (
//     <div>
//       {data ? (
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default AuthenticatedComponent;
