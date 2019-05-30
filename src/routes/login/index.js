import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import 'antd/dist/antd.css';
import './index.scss'
import {
  Form, Icon, Input, Button, Checkbox, Divider,message
} from 'antd';

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      let history = this.props.history
      if (!err) {
        console.log('Received values of form: ', values);
        console.log(history)
        history.push('/home')
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    // const validator1 =  ((errors, values, callback) => {
    //   console.log(values)
    //   if(values === undefined || values === '') {
    //     message.error('用户名不能为空');
    //   } else if(values.length < 6) {
    //     message.error('用户名长度最小6位');
    //   } else {
    //     callback()
    //   }
    // })
    return (
      <div className="login-wrapper">
        <div className="login">登录</div>
        <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
      </div>
    );
  }
}
const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);
// ReactDOM.render(<Login />, mountNode);
// class Login extends Component {
//   state = {

//   };
//   render() {
//     return (
//       <div>
//         <input placeholder="请输入用户名"/>
//         <input placeholder="请输入密码"/>
//         <button>登录</button>
//       </div>
//     )
//   }
// }

export default Login;