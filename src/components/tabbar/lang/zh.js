// 注意：一定是 exports，不是 export，否则会报错，报错信息是下列的中的内容不是 string
module.exports = {
  tabbarDes: [
    {
      'txt': '主页',
      'page': '',
      'normalImg': require('./img/home.png'),
      'activeImg': require('./img/home1.png')
    },
    {
      'txt': '通讯录',
      'page': 'contact',
      'normalImg': require('./img/contact.png'),
      'activeImg': require('./img/contact1.png')
    },
    {
      'txt': '通讯录',
      'page': 'contact',
      'normalImg': require('./img/contact.png'),
      'activeImg': require('./img/contact1.png')
    },
    {
      'txt': '设置',
      'page': 'setup',
      'normalImg': require('./img/set.png'),
      'activeImg': require('./img/set1.png')
    }
  ]
}
