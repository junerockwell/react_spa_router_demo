import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderBar.css';

export default function HeaderBar() {
    return (
        <nav role="main">
            <NavLink to='/'>Page1</NavLink>
            <NavLink to='/page2'>Page2</NavLink>
        </nav>
    );
};