import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React, { Component } from 'react';
import { Router, Route, Link, BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import 'antd/dist/antd.css';

class Login extends Component {
  state = {

  };
  render() {
    return (
      <div>
        <input placeholder="请输入用户名"/>
        <input placeholder="请输入密码"/>
        <button>登录</button>
      </div>
    )
  }
}

export default Login;