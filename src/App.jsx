import { useEffect, useState } from "react";
import Users from "./components/users/Users";
import MyBtn from "./components/_UI/myBtn/MyBtn";
import MyInput from "./components/_UI/myInput/MyInput";
import { FiSearch, FiRefreshCcw } from "react-icons/fi";
import axios from "axios";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    setIsLoaded(false);
    axios
      .get("https://randomuser.me/api/?results=10")
      .then(({ data }) => {
        const formattedUsers = data.results.map((user, index) => ({
          id: index,
          name: `${user.name.first} ${user.name.last}`,
          picture: user.picture.medium,
        }));
        setUsers(formattedUsers);
        setIsLoaded(true)
      })
      .catch(error => {
        console.log("Error fetching users:", error);
      });

    window.scrollTo(0, 0);
  };

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  const handleSort = () => {
    if (sorted) {
      setUsers([...users].reverse());
    } else {
      setUsers([...users].sort((a, b) => a.name.localeCompare(b.name)));
    }
    setSorted(!sorted);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app min-h-screen bg-indigo-400 p-4">
      <div className="py-8 min-h-screen max-w-md mx-auto flex flex-col gap-6 bg-slate-100 rounded-lg">
        <div className="flex flex-col items-center gap-4">
          <label className="relative">
            <MyInput
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={handleSearch}
            />
            <FiSearch className="absolute top-1/2 right-[15px] -translate-y-1/2 cursor-pointer" />
          </label>
          <MyBtn
            classNames={" bg-slate-500 text-white hover:bg-slate-600"}
            onClick={handleSort}
          >
            {sorted ? "Sort user by ASC" : "Sort user by DESC"}
          </MyBtn>
          <MyBtn
            classNames={
              "fixed left-1/2 bottom-[30px] -translate-y-1/2 bg-indigo-500 text-white hover:bg-indigo-600"
            }
            onClick={fetchUsers}
          >
            <FiRefreshCcw />
          </MyBtn>
        </div>
        <div className="flex flex-col items-center gap-3">
          <h1 className="font-bold text-xl">
            {isLoaded ? "Users" : "Loading"}
          </h1>
          <Users isLoaded={isLoaded} users={filteredUsers} />
        </div>
      </div>
    </div>
  );
}

export default App;
