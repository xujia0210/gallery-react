import React from 'react';
import './index.scss'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        alertStatus: false, //弹框状态
        alertTip: '', //提示弹框文字
        phoneNo: ''
    }
    handleInput(type, event) {
        let value = event.target.value
        console.log(value)
        this.phoneNo = value
        console.log(this.phoneNo)
    }
    submit() {
        const phoneNo = this.state.phoneNo
        if(!phoneNo) {
            console.log('dianhuaweikong')
        }
    }
    render() {
        return (
            // <div>
            //     <a href='#/'>回到home</a>
            //     <button onClick={() => this.props.history.push({
            //             pathname: '/detail',
            //             state: {
            //                 id: 3
            //             }
            //     })}>通过函数跳转</button>
            // </div>
            <div className='home'>
                <div className='login'>
                    <div className='login-title'>登录</div>
                    <div className='login-info'>
                        <div className='phone'>
                            <input type='text' placeholder='请输入手机号' maxLength='11' />
                        </div>
                        <div className='code'>
                            <input type='text' placeholder='请输入验证码' maxLength='6' />
                            <span>获取验证码</span>
                        </div>
                    </div>
                    <div className='login-btn'>登录</div>
                </div>
            </div>
        )
    }
}
