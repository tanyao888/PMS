const menuList = {
  nameSpaced: true,
  state: {
    menuList: [
      {
        parentId: '1',
        parentIcon: 'el-icon-location',
        parentTitle: '系统首页'
      },
      {
        parentId: '2',
        parentIcon: 'el-icon-location',
        parentTitle: '日常管理',
        children: [
          {
            childrenId: '2-1',
            childrenIcon: 'el-icon-menu',
            childrenTitle: '保修处理'
          },
          {
            childrenId: '2-2',
            childrenIcon: 'el-icon-menu',
            childrenTitle: '住户查询'
          }
        ]
      },
      {
        parentId: '1',
        parentIcon: 'el-icon-location',
        parentTitle: '系统首页'
      },
      {
        parentId: '2',
        parentIcon: 'el-icon-location',
        parentTitle: '日常管理',
        children: [
          {
            childrenId: '2-1',
            childrenIcon: 'el-icon-menu',
            childrenTitle: '保修处理'
          },
          {
            childrenId: '2-2',
            childrenIcon: 'el-icon-menu',
            childrenTitle: '住户查询'
          }
        ]
      },
      {
        parentId: '1',
        parentIcon: 'el-icon-location',
        parentTitle: '系统首页'
      },
      {
        parentId: '2',
        parentIcon: 'el-icon-location',
        parentTitle: '日常管理',
        children: [
          {
            childrenId: '2-1',
            childrenIcon: 'el-icon-menu',
            childrenTitle: '保修处理'
          },
          {
            childrenId: '2-2',
            childrenIcon: 'el-icon-menu',
            childrenTitle: '住户查询'
          }
        ]
      },
      {
        parentId: '1',
        parentIcon: 'el-icon-location',
        parentTitle: '系统首页'
      },
      {
        parentId: '2',
        parentIcon: 'el-icon-location',
        parentTitle: '日常管理',
        children: [
          {
            childrenId: '2-1',
            childrenIcon: 'el-icon-menu',
            childrenTitle: '保修处理'
          },
          {
            childrenId: '2-2',
            childrenIcon: 'el-icon-menu',
            childrenTitle: '住户查询'
          }
        ]
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
