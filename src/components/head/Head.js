import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './Head.css';
import { NavLink } from 'react-router-dom';

const Head = () => (
  <>
    <div className="panel-bg">
      <div className="head">
        <div className="navBar">
          <div className="logo">BookStore CMS</div>
          <div className="nav">
            <div className="navItem">
              <ul>
                <NavLink className="li" to="/">
                  BOOKS
                </NavLink>
                <NavLink className="li" to="/category">
                  CATEGORIES
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
        <div className="user-account-icon">
          <FaUserCircle size="30px" />
        </div>
      </div>
    </div>
  </>
);

export default Head;
