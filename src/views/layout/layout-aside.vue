<template>
  <div class="wrap-container" :style="isCollapse ? 'width:60px': 'width: 220px'">
    <el-menu default-active="1" :collapse="isCollapse" class="menu" text-color="#6c6c6c" active-text-color="#1abc9c" v-for="item in menuList" :key="item.parentId">
      <el-menu-item :index="item.parentId" v-if="!item.children">
        <i :class="item.parentIcon"></i>
        <span slot="title">{{ item.parentTitle }}</span>
      </el-menu-item>
      <el-submenu :index="item.parentId" v-else class="submenu">
        <template slot="title">
          <i :class="item.parentIcon"></i>
          <span>{{ item.parentTitle }}</span>
        </template>
        <el-menu-item-group v-for="item in item.children" :key="item.childrenId" class="menu-item-group">
          <el-menu-item :index="item.childrenId">{{ item.childrenTitle }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
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
    }
  }
}
</script>

<style lang='less' scoped>
.wrap-container {
  height: calc(100vh - 61px);
  border-right: 1px solid #eeeeee;
  overflow-y: auto;
  overflow-x: hidden;
  ::v-deep.el-menu {
    border-right: none;
  }
}
</style>
