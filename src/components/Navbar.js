import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    const navStyleheading=({isActive})=>{
        return{
            fontWeight:isActive?'bold':'normal',
            textDecoration:isActive?'none':'underline'
        }
    }
    return (
        <nav classNmae='primary'>
            <NavLink to='/' style={navStyleheading}>Home</NavLink>
            <NavLink to='/about' style={navStyleheading} >About</NavLink>
            <NavLink to='/Product' style={navStyleheading}>Products</NavLink>
            <NavLink to='/users' style={navStyleheading}>Users</NavLink>
            <NavLink to='/profile' style={navStyleheading}>Profile</NavLink>
        </nav>
    )
}

//NavLink Knows whether or not it is the active link.we can use it to style 
//active link. Special about NavLink is by default it receives active class when the link 
//is the current route
//NavLink component will set a property called isActive which can be 
//destructured from the function parameter.
//NavLink component is specifically meant for building components like navBar,
//BreadCrumbs,or set of tabs where you would like to highlight the
//current selected item and provide useful context with screen readers
//if you want to navigate to routes from other parts of the app
//Link should be the component to use as you wouldnt want the active class
//applied when it is not needed
