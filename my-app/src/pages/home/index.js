import React from 'react';
import { Input, message, Button } from 'antd';

import './index.scss'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNo: '',
            code: '',
            id: 3
        };

        this.handleInputNo = this.handleInputNo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputCode = this.handleInputCode.bind(this);
    }
    handleInputNo(event) {
        this.setState({
            phoneNo: event.target.value
        })
    }
    handleInputCode(event) {
        this.setState({
            code: event.target.value
        })
    }
    handleSubmit(event) {
        let phoneNo = this.state.phoneNo,
            code = this.state.code,
            phoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
            codeReg = /^\d{6}$/
        if(!phoneNo) {
            message.info('电话号码不能为空')
            return
        }
        if(!phoneReg.test(phoneNo)) {
            message.info('请输入正确格式的电话号码')
            return
        }
        if(!code) {
            message.info('验证码不能为空')
            return
        }
        if(!codeReg.test(code)) {
            message.info('请输入正确的验证码')
            return
        }
        alert('登录成功')
        this.props.history.push({
            pathname: '/detail/' + this.state.id,
        })
        event.preventDefault();
    }
     info (){
        message.info('电话号码不能为空');
      };
    render() {
        return (
            <div className='home'>
                <div className='login'>
                    <div className='login-title'>登录</div>
                    <div className='login-info'>
                        <div className='phone'>
                         <Input placeholder='请输入手机号' maxLength='11' value={this.state.phoneNo} onChange={this.handleInputNo} />
                        </div>
                        <div className='code'>
                          <Input placeholder='请输入验证码' maxLength='6' value={this.state.code} onChange={this.handleInputCode} />
                          <span>获取验证码</span>
                        </div> 
                    </div>
                    <Button className='login-btn' type="primary" block onClick={this.handleSubmit}>登录</Button>
                </div>
            </div>
        )
    }
}
