import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React, { Component } from 'react';
import {Router, Route} from 'react-router'
import 'antd/dist/antd.css';
import './index.css'
import menuConfig from '../../components/menuConfig'
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
class Nav extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    handleMenuChange = (item, key, keyPath) => {             
        console.log(123,item, key, keyPath)    
        this.props.history.push(item.key)
    }
    handleMenuItemChange = (item, key, keyPath) => {
        console.log(234,item, key, keyPath)   
        if(item && item.key == '/home') {
            this.props.history.push(item.key)
        }
    }
    componentWillMount() {
        const menuList = this.renderMenu(menuConfig);
        console.log(menuList)
        this.setState({
            menuList
        })
    }
    //使用递归
    renderMenu = (data) => {
        console.log(1,data)
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu key={item.key} title={item.title} onClick={this.handleMenuChange}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            } else {
                return (
                    <MenuItem key={item.key} title={item.title} onClick={this.handleMenuItemChange}>
                        {item.title}
                    </MenuItem>
                )
            }
        })
    };
    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" >统一身份认证平台</div>
                    <Menu style={{width: 150}}
                        theme='dark'
                        mode='inline'>
                        {this.state.menuList}
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#000', padding: 0 }}>
                        <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                                style={{cursor: 'pointer'}}
                            />
                        </span>
                        <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>Information Management System</span>



                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '12px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>

                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Nav;