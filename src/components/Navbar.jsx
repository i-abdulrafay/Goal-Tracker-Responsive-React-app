import React from 'react'
import './Navbar.css'

const Navbar = ({ goals }) => {
  const total = goals.length
  const achieved = goals.filter(goal => goal.completed).length
  const remaining = total - achieved
  const progress = total > 0 ? (achieved / total) * 100 : 0

  return (
    <div className="navbar">
      <div className="navbar-header">
        <h1>🎯 My Goals</h1>
        <div className="progress-container">
          <div className="progress-bar">
            <div className="fill" style={{ width: `${progress}%` }}></div>
          </div>
          <p>{achieved} of {total} goals achieved</p>
        </div>
      </div>

      <div className="stats">
        <div className="stat-card">
          <h3>Total</h3>
          <p>{total}</p>
        </div>
        <div className="stat-card">
          <h3>Achieved</h3>
          <p>{achieved}</p>
        </div>
        <div className="stat-card">
          <h3>Remaining</h3>
          <p>{remaining}</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
