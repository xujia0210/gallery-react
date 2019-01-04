import { Form, Icon, Input, Button, Checkbox, } from 'antd';
import React, { Component } from 'react';
import { Router, Route, Link, BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import 'antd/dist/antd.css';
import './index.scss';

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let data = {}
        data.username = values.userName
        data.password = values.password
        data.remember = values.remember
        console.log('data--', data)
        this.props.history.push('/home')
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <div className="login-title">登录</div>
        <Form.Item className="input-box">
        <span>用户名：</span>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
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
            登 录
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

const Login = Form.create()(NormalLoginForm);

export default Login;