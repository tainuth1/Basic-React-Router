import React from 'react'
import "./dashboard.css"
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='parent'>
      <div className="sidebar">
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/dashboard/settings"}>Settings</Link>
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard
