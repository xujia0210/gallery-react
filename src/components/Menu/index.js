
import React from 'react'
import {Link} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

global.menus = [
  {
      title: '登录',
      icon: 'page',
      key: '/login'
  },   {
      title: '首页',
      icon: 'bulb',
      key: '/home',
   },
   {
    title: 'react基本操作',
    icon: 'bulb',
    key: '/basic',
    subs: [
        {key: '/nav', title: '基本操作', icon: ''},
    ]
 },
]
const menus =global.menus;
//此组件的意义就是将数据抽离出来，通过传递数据去渲染
class CustomMenu extends React.Component {
    constructor(props) {
        super(props);
        // getDefaultProps：接收初始props
        // getInitialState：初始化state
    }
    state = {
        isLogin: false
    }
    static getDerivedStateFromProps(props, state) {
        // 组件每次被rerender的时候，包括在组件构建之后(虚拟dom之后，实际dom挂载之前)，每次获取新的props或state之后；;
        // 每次接收新的props之后都会返回一个对象作为新的state，返回null则说明不需要更新state
        return state
    }
    componentDidCatch(error, info) {
        // 获取到javascript错误
        console.log(error, info)
    }
    renderSubMenu = ({key, icon, title, subs}) => {
        console.log(key, title)
        return (
            <Menu.SubMenu key={key} title={<span>{icon && <Icon type={icon}/>}<span>{title}</span></span>}>
                {
                    subs && subs.map(item => {
                        return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                    })
                }
            </Menu.SubMenu>
        )
    }
    renderMenuItem = ({key, icon, title,}) => {
        return (
          
            <Menu.Item key={key}>
                <Link to={key}>
                    {icon && <Icon type={icon}/>}
                    <span>{title}</span>
                </Link>
            </Menu.Item>
        )
    }
    render() {
        const isLogin = this.state.isLogin
        console.log(isLogin)
        return (
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                {
                    menus.map(item => {
                        return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                    })
                }
            </Menu>
                
        )
    }
    componentDidMount() {
        // 挂载后
    }
    shouldComponentUpdate(nextProps, nextState) {
        // 组件props或者state改变时触发，true:更新，false: 不更新
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // 组件更新前触发
    }
    componentDidUpdate() {
        // 组件更新后触发
    }
    componentWillUnmount() {
        // 组件卸载是触发
    }
}
export default CustomMenu