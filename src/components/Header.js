import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div style={{width: '100%', height: 50, backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{width: '50%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                <Link to="/view" style={{textDecoration: 'none', color: 'white'}}><h3>View</h3></Link>
                <Link to="/create"  style={{textDecoration: 'none', color: 'white'}}><h3>Create</h3></Link>
                <Link to="/edit"  style={{textDecoration: 'none', color: 'white'}}><h3>Edit</h3></Link>
            </div>
        </div>
    )
}

export default Header
