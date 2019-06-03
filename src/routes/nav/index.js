import { Layout, Modal, Button, Breadcrumb, Icon } from 'antd';
import React, { Component } from 'react';
import {Router, Route} from 'react-router'
import 'antd/dist/antd.css';
import './index.css'
const { Header, Content, Footer, Sider } = Layout;
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    showModal = () => {
        this.setState({
            visible: true
        })
    }
    handleOk = (e) => {
        console.log(e)
        this.setState({
            visible: false
        })
    }
    handleCancel = (e) => {
        this.setState({
            visible: false
        })
    }
    render() {
        return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>
                    <Button type="primary" onClick={this.showModal}>打开确认弹窗</Button>
                    <Modal
                        title="Basic Modal"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                </div>

            </Content>
        );
    }
}

export default Nav;