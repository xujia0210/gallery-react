import Home from '../routes/home/index'
const menuList = [
  {
    title: '首页',
    key: '/home',
    components: Home
  }, {
    title: '导航',
    key: '/login',
    components: Home,
    children: [
      {
        components: Home,
        title: '开启',
        key: '/nav'
      }
    ]
  }
]

export default menuList;