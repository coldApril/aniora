import React from 'react'
import s from './nav.module.css'
import {NavLink} from "react-router-dom";

const NavComponent = () => {
    return (
        <div>
            <NavLink to='#'>Главная</NavLink>
        </div>
    )
}

export default NavComponent