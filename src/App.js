import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {increment,decrease} from './actions'
// 导入连接器
import {connect} from 'react-redux'

class App extends Component {
  render() {
    // this.props中已经注入dispatch，可以放心使用
    const {dispatch}=this.props;
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.counter}</h1>
        <p className="text-center">
          <button className="btn btn-primary mr-2" onClick={()=>{dispatch(increment())}}>Increase</button>
          <button className="btn btn-danger mr-2"  onClick={()=>{dispatch(decrease())}}>Decrease</button>
        </p>
      </div>
    );
  }
}
// 把state变为props传入
const mapStateToPorps=(state)=>{
  console.log(state)
  return {
    counter:state.counter
  }
}
// 数据类型验证
App.propTypes={
  counter:PropTypes.number.isRequired
}

export default connect(mapStateToPorps)(App);
