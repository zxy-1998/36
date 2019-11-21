import React, { Component } from 'react';
import store from './store';
import {Add,Reduce} from './action';
import {connect} from 'react-redux';
class App extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.num}</h2>
                <button onClick={()=>{
                    store.dispatch(Add(2))
                }}>click</button>
                <button onClick={()=>{
                    store.dispatch(Add(4))
                }}>click</button>
                <button onClick={()=>{
                    store.dispatch(Reduce(4))
                }}>click</button>
            </div>
        );
    }
}
let mapStateToProps = (state)=>({
    num:state.num
})

export default connect(mapStateToProps)(App);