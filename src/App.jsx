import { useState } from "react";
import Users from "./components/users/Users";
import MyBtn from "./components/_UI/myBtn/MyBtn";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="app">
      <div className="controls">
        <input type="text" placeholder="Search by name" />
        <select>
          <option>name by ASC</option>
          <option>name by DESC</option>
        </select>
      </div>
      <h1>User List</h1>
      <Users users={users} />
      <MyBtn>Refresh</MyBtn>
    </div>
  );
}

export default App;
