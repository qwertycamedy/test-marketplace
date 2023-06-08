import React from 'react'
import User from './user/User'

const Users = ({users}) => {
    
  return (
    <div className="user-list">
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  )
}

export default Users