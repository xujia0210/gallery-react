import { Layout, Menu, Breadcrumb, Icon, Table, Button, Popconfirm, Form, Input } from 'antd';
import React, { Component } from 'react';
import { Router, Route, Link, BrowserRouter, Redirect } from 'react-router-dom';

import 'antd/dist/antd.css';
import './index.css'
import Home from './home.js'
import menuConfig from '../../components/menuConfig'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
const FormItem = Form.Item;
const EditableContext = React.createContext();
const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
    );
const EditableFormRow = Form.create()(EditableRow);
const columns = [{
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Age',
    dataIndex: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
  }, {
    title: 'Action', dataIndex: '', key: 'x', render: () => <a href="javascript:;">Delete</a>,
  },];
  const data = [];
    for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
    }
class SiderDemo extends Component {
    constructor(props) {
        super(props)
        console.log('super--', props)
    }
    state = {
        collapsed: false,
        mode: 'inline',
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
    };
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
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
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

    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
          this.setState({
            selectedRowKeys: [],
            loading: false,
          });
        }, 1000);
      }
      
      onSelectChange = (selectedRowKeys) => {
          
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
      }
    render() {
        
        
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
        selectedRowKeys,
        onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
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
                        {/* home 页面 */}
                        <Home></Home>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default SiderDemo;
