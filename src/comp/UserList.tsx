// import React, { useEffect, useState } from 'react';

// export default function UserList() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('http://194.44.93.225:5001/api/User/GetAllUsers?isAll=true')
//       .then(response => response.json())
//       .then(data => {
//         setUsers(data.payload);
//       })
//       .catch(error => {
//         console.error('Error fetching user data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>
//        {users.map((user) => (
//   <tr key={user.id}>
//     <td>{user.id}</td>
//     <td>{user.name}</td>
//     <td>{user.surname}</td>
//     <td>{user.email}</td>
//     <td>{user.phoneNumber}</td>
//     <td>{user.emailConfirmed ? 'Yes' : 'No'}</td>
//     <td>{user.role}</td>
//   </tr>
// ))}
//       </ul>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://194.44.93.225:5001/api/User/GetAllUsers?isAll=true')
      .then(response => response.json())
      .then(data => {
        setUsers(data.payload);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Email Confirmed</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.emailConfirmed ? 'Yes' : 'No'}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
