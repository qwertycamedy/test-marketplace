import React from "react";

const User = ({ picture, name }) => {
  return (
    <div className="user flex items-center gap-4">
      <img
        className="min-w-[75px] w-[75px] h-[75px] rounded-full"
        src={picture}
        alt={name}
      />
      <p>{name}</p>
    </div>
  );
};

export default User;
