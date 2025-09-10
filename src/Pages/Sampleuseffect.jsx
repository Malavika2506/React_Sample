import React, { useEffect, useState } from "react";

//Multiple UseEffect
function Sampleuseffect() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Name changed:", name);
  }, [name]);

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

// function Sampleuseffect() {
//   const [Users, setUsers] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data));
//   }, []);

//   return (
//     <div>
//       <h1>List of Users</h1>
//       <div>
//         Table
//         <table class="table table-dark table-striped">
//           <thead>
//             <tr>
//               <th scope="col">id</th>
//               <th scope="col">Name</th>
//               <th scope="col">Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Users.map((User) => (
//               <tr key={User.id}>
//                 <td>{User.id}</td>
//                 <td>{User.name}</td>
//                 <td>{User.email}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* <ul>
//         {Users.map((user) => (
//           <li key={user.id}>
//             {user.name} - {user.email}
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// }

export default Sampleuseffect;
