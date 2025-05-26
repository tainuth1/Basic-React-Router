import React from 'react'
import "./dashboard.css"
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='parent'>
      <div className="sidebar">
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard
