import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import A from './components/A'
import B from './components/B'
import Home from './components/Home'
import E from './components/E'
import Jump from './components/Jump'
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        
          
            <Link to="/">首页</Link>
            <Link to="/a">A页面</Link>
            <Link to="/b">B页面</Link>
            <hr></hr>
            <Jump to="/e">Jump到e</Jump>|
            <Jump to="/f">Jump到f</Jump>|
            <Jump to="/g">Jump到g
            <button onClick={()=>{
               this.props.match.path = '/'
            }}>回到首页</button>
            </Jump>
            
            
             
              <Route exact path="/a" component={A}></Route>
              <Route exact path="/b" component={B}></Route>
              <Route exact path='/' component={Home}></Route>
              <Route exact path ='/e' component={E}>e页面</Route>
            
          </Router>
        <hr></hr>
        <Footer></Footer>
    </div>
  );
}

export default App;
