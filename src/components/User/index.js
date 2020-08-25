import React from 'react'
import './index.scss'

const User = ({ name, score, inc, dec }) => {
  return (
    <div className="user">
      <span className="user-name">{name}</span>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <span className="user-score">{score} points</span>
    </div>
  )
}

export default User
