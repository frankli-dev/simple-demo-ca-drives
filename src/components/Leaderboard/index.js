import React, { useState, useEffect } from 'react'
import User from '../User'
import './index.scss'

const sortFn = (ua, ub) => {
  if (ua.score > ub.score) return -1
  if (ua.score < ub.score) return 1

  return ua.name > ub.name ? 1 : -1
}

const initial = [
  { id: 0, name: 'Emma', score: 0 },
  { id: 1, name: 'Noah', score: 0 },
  { id: 2, name: 'James', score: 0 },
  { id: 3, name: 'William', score: 0 },
  { id: 4, name: 'Olivia', score: 0 },
]

function Leaderboard() {
  const [users, setUsers] = useState(initial.sort(sortFn))

  const updateScore = (id, newScore) => {
    const index = users.findIndex((user) => user.id === id)

    if (index >= 0) {
      setUsers(
        [
          ...users.slice(0, index),
          { ...users[index], score: newScore },
          ...users.slice(index + 1),
        ].sort(sortFn)
      )
    }
  }

  return (
    <div className="leaderboard">
      {users.map((user) => (
        <User
          key={user.id}
          name={user.name}
          score={user.score}
          inc={() => updateScore(user.id, user.score + 1)}
          dec={() => updateScore(user.id, user.score - 1)}
        />
      ))}
    </div>
  )
}

export default Leaderboard
