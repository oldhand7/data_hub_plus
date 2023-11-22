// import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import logo from './assets/images/logo.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navList">
        <img className="logo" src={logo} height="64px" width="64px"></img>
        <li>
          <h3>Courses</h3>
        </li>
        <li>
          <h3>Tutorials</h3>
        </li>
        <li>
          <h3>Examples</h3>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
