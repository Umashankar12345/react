// Write React code to perform GET, POST, PUT, DELETE operations using Fetch or Axios.
import { useEffect, useState } from "react";

function CrudApp() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  // 🔹 GET – Fetch users
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  // 🔹 POST – Add user
  const addUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email })
    })
      .then(res => res.json())
      .then(data => {
        setUsers([...users, data]);
        setName("");
        setEmail("");
      });
  };

  // 🔹 PUT – Update user
  const updateUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email })
    })
      .then(res => res.json())
      .then(updated => {
        setUsers(users.map(u => (u.id === editId ? updated : u)));
        setEditId(null);
        setName("");
        setEmail("");
      });
  };

  // 🔹 DELETE – Remove user
  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE"
    }).then(() => {
      setUsers(users.filter(u => u.id !== id));
    });
  };

  return (
    <div>
      <h2>CRUD Operations</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      {editId ? (
        <button onClick={updateUser}>Update</button>
      ) : (
        <button onClick={addUser}>Add</button>
      )}

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => {
              setEditId(user.id);
              setName(user.name);
              setEmail(user.email);
            }}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudApp;
