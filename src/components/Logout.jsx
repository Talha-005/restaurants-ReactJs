import React from 'react'
import { Redirect } from 'react-router-dom'
import NavBar from './NavBar';
export default function Logout() {
    localStorage.clear();
    return (
        <div>
              <NavBar />
            <Redirect to='/login' />
        </div>
    )
}
