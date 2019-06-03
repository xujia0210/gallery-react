import React from 'react'
//引入路由
import {Route, Switch} from 'react-router-dom'
import Home from '../../routes/home/home';
import Login from '../../routes/login/index';
import Nav from '../../routes/nav/index';
class ContentMain extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/nav' component={Nav}/>
                    <Route exact path='/page/TableDemo' component={global.Table}/>
                    <Route exact path='/page/HttpDemo' component={global.HttpDemo}/>
                    <Route exact path='/page/TreeDemo' component={global.TreeDemo}/>
                </Switch>
            </div>
        )
    }
}

export default ContentMain