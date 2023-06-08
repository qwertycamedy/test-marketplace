import React from "react";

const User = ({ picture, name }) => {
  return (
    <div className="user flex min-w-[290px] items-center gap-4 bg-slate-200 rounded-lg p-4">
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
