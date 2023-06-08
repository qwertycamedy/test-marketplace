import React from "react";
import User from "./user/User";
import Sceleton from "./user/Sceleton";

const Users = ({ isLoaded, users }) => {
  return (
    <div className="flex flex-col gap-4">
      {isLoaded
        ? users.map(user => (
            <User isLoaded={isLoaded} key={user.id} {...user} />
          ))
        : [...new Array(10)].map((_, i) => <Sceleton key={i} />)}
    </div>
  );
};

export default Users;
