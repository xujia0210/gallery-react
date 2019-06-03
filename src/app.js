import React, {Component} from 'react';
//全局文件
import './main';
//路由
import {BrowserRouter} from 'react-router-dom';
//布局组件
import CustomMenu from "./components/Menu/index";//导航
import ContentMain from './components/ContentMain'//主题

//UI-antd-按需引入
import 'antd/dist/antd.css';
import {Layout } from 'antd';

const { Header, Content, Footer, Sider } = Layout;


let screenHeight= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    }
    console.log(this.props)

  }
    render() {
        return (
            <div className="App" >
                <BrowserRouter>
                    <Layout>
                        <Sider className="App-customMenu" style={{height:screenHeight}}>
                            <CustomMenu/>
                        </Sider>
                        <Layout>

                            <Header style={{color: 'white'}}>Header</Header>
                            <Content className="App-contentMain" style={{height:screenHeight}}>
                                <ContentMain/>
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>Footer</Footer>
                        </Layout>
                    </Layout>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;