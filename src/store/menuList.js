const menuList = {
  nameSpaced: true,
  state: {
    menuList: [
      {
        parentId: '/home',
        parentIcon: 'el-icon-menu',
        parentTitle: '系统首页'
      },
      {
        parentId: '/dailyManagement',
        parentIcon: 'el-icon-menu',
        parentTitle: '日常管理',
        children: [
          {
            childrenId: '/repairProcess',
            childrenTitle: '报修处理'
          }
        ]
      },
      {
        parentId: '/basicInformation',
        parentIcon: 'el-icon-menu',
        parentTitle: '基础资料'
      },
      {
        parentId: '4',
        parentIcon: 'el-icon-menu',
        parentTitle: '车位管理',
        children: [
        ]
      },
      {
        parentId: '5',
        parentIcon: 'el-icon-menu',
        parentTitle: '抄表管理'
      },
      {
        parentId: '6',
        parentIcon: 'el-icon-menu',
        parentTitle: '收费管理',
        children: [
        ]
      },
      {
        parentId: '7',
        parentIcon: 'el-icon-menu',
        parentTitle: '微信业务'
      },
      {
        parentId: '8',
        parentIcon: 'el-icon-menu',
        parentTitle: '统计查询',
        children: [
        ]
      },
      {
        parentId: '9',
        parentIcon: 'el-icon-menu',
        parentTitle: '租赁管理'
      },
      {
        parentId: '10',
        parentIcon: 'el-icon-menu',
        parentTitle: '短信管理'
      },
      {
        parentId: '11',
        parentIcon: 'el-icon-menu',
        parentTitle: '系统设置'
      }
    ]
  },
  mutations: {
    setMenuList (state, menuList) {
      state.menuList = menuList
      sessionStorage.setItem('setMenuList', JSON.stringify(menuList))
    }
  },
  actions: {},
  getters: {
    updateMenuList (state) {
      if (state.menuList) {
        return state.menuList
      }
    }
  }
}

export default menuList
