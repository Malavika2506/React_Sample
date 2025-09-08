import React from "react";
import { useState } from "react";


// function Table() {
//   const [Users, setUsers] = useState([
//     { id: 1, name: "manu", course: "mern" },
//     { id: 2, name: "anu", course: "python" },
//     { id: 3, name: "appu", course: "datascience" },
//   ]);
//   return (
//     <div>
//       Table
//       <table class="table table-dark table-striped">
//         <thead>
//           <tr>
//             <th scope="col">id</th>
//             <th scope="col">Name</th>
//             <th scope="col">Course</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Users.map((User) => (
//             <tr key={User.id}>
//               <td>{User.id}</td>
//               <td>{User.name}</td>
//               <td>{User.course}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// function Table() {
//     const [Users, setUsers] = useState(["Ali","Sara","John"]);

//     return(
//         <ul>
//             {Users.map ((user, index) => (
//                 <li>{user}</li>

//             ))}

//         </ul>
//     );

// }

// 2. Simple Table of Books

function Table() {
//   const [Books, setUsers] = useState([
//     { id: 1, title: "1984", author: "George" },
//     { id: 2, title: "1958", author: "Asiq" },
//     { id: 3, title: "1955", author: "Kailax" },
//   ]);
//   return (
//     <div>
//       Table
//       <table class="table table-dark table-striped">
//         <thead>
//           <tr>
//             <th scope="col">Title</th>
//             <th scope="col">Author</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Books.map((Book) => (
//             <tr key={Book.id}>
//               <td>{Book.title}</td>
//               <td>{Book.author}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

const [users, setUsers] = useState([
  { id: 1, name: "Malavika", role: "Student" },
  { id: 2, name: "Aarav", role: "Developer" }
]);

return (
  <div>
    {users.map((user) => (
      <p key={user.id}>
        {user.name} - {user.role}
      </p>
    ))}
  </div>
);
}
export default Table;
