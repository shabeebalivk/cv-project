import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {

    const location = useLocation()
    console.log(location.pathname)
    return (
        <div style={{width: '100%', height: 50, backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{width: '80%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                <Link to="/create"  style={{color: location.pathname === '/create' ? 'white' : 'gray', textDecoration: 'none',  }}><h5>Create</h5></Link>
                <Link to="/view" style={{color: location.pathname === '/view' ? 'white' : 'gray',textDecoration: 'none',}}><h5>View</h5></Link>

             </div>
        </div>
    )
}

export default Header
