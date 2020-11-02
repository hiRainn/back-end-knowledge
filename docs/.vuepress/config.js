module.exports = {
  title: 'back-end-knowledge', //右上角标题
  description: 'Just playing around', //项目描述
  base: '/back-end-knowledge/',  //如果你的文档并不是放在根目录，那么需要加上路径
  markdown: {
    lineNumbers: true  //markdown代码加上行号
  },
  extendMarkdown: md => {
    md.use(require('markdown-it-sup'))  //扩展markdown-it语法
  },
  themeConfig:{
    repo: 'hirainn/back-end-knowledge',  //右上角增加github地址
    docsDir: 'docs',  //上文创建的路径
    editLinks: false,  //是否允许提示他人编辑
    editLinkText: '在 Github 上帮助我们编辑此页',  //提示文字
    lastUpdated: '上次更新:',
    smoothScroll: true,  //开启滑动效果
    sidebar:[  //菜单
      {
        title: '简介',
        collapsable: false,
        children: [
          {title:'简介',path:'/project/reason'},
          {title:'目标',path:'/project/goal'},
        ]
      },
      {
        title: '开始',
        collapsable: false,
        children: [
          {title:'开始',path:'/start/start'},
          {title:'使用',path:'/start/use'},   
        ]
      },
      {
      title: '个人版',
      collapsable: false,
      children: [
				 
        ]
      },
      {
        title: '协作版',
        collapsable: false,
        children: [
				 
        ]
      },
    ]
  }
}