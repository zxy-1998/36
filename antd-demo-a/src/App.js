import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Button from 'antd/es/button';
import { Button } from 'antd';
import { Menu, Icon } from 'antd';
import CommonHeader from './components/CommonHeader'
import Nav from './components/Nav'
import {BrowserRouter as Router ,Route,Link} from "react-router-dom";
import Home from "./components/page/Home";
import TeacherAdd from "./components/page/TeacherAdd"
const { SubMenu } = Menu;

function App() {
  return (
    <div className="App">
        <div className="app-left">
            <Nav></Nav>
        </div>
        <div className="app-right">
            <CommonHeader></CommonHeader>
            <Route path="/home" component="Home"></Route>
            <Route path="/teacher/add" component="TeacherAdd"></Route>
        </div>
    </div>
  );
}

export default App;
