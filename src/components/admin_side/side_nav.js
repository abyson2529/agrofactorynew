import React from "react";

import Header from "../header";
import "./side_nav.css";
import {Card} from 'react-bootstrap';

const side_nav = () => {
  return (
    <div>
        <header className="header" role="banner">
          <h1 className="logo">
            <a href="/admin_pannel">
              Admin <span>Panel</span>
            </a>
          </h1>
          <div className="nav-wrap">
            <nav className="main-nav" role="navigation"  >
              <ul className="unstyled list-hover-slide" >
                <li>
                  <a href="/manage_far">Manage Farmers</a>
                </li>
                <li>
                  <a href="/manage_cust">Manage Customers</a>
                </li>
                <li>
                  <a href="/manage_ferti">Manage Fertilizer</a>
                </li>
                <li>
                  <a href="/manage_mach">Manage Machinerys</a>
                </li>
                <li>
                  <a href="/manage_seeds">Manage Seeds</a>
                </li>
                <li>
                  <a href="/manage_news">Manage News</a>
                </li>
                <li>
                  <a href="/manage_agri">Manage Classes</a>
                </li>
                <li>
                  <a href="/manage_fruits">Manage Fruits</a>
                </li>
                <li>
                  <a href="/manage_grains">Manage Grains</a>
                </li>
                <li>
                  <a href="/manage_vege">Manage Vegetables</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
 
  );
};

export default side_nav;
