<template>
  <div class="wrap-container">
    <div class="left-wrap">
      <img src="../../assets/loginPage/login-form-icon.png" alt="">
      <span>智慧云物业管理系统</span>
    </div>
    <div class="right-wrap">
      <div class="left-content" @click="switchMenu">
        <i class="el-icon-s-unfold"></i>
      </div>
      <div class="right-content">
        <i class="el-icon-chat-dot-round"></i><span>消息</span>
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="userInf"><img src="../../assets/userInf/userVia.jpeg" alt=""><span>{{ updateUserInfo.userName }}</span></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in userOptions" :key="item.optionKey" :command="item.optionKey">{{ item.optionLabel }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      userOptions: [
        {
          optionKey: '1',
          optionLabel: '个人信息'
        },
        {
          optionKey: '2',
          optionLabel: '修改密码'
        },
        {
          optionKey: '3',
          optionLabel: '退出账户'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['updateUserInfo'])
  },
  methods: {
    handleCommand (val) {
      switch (val) {
        case '1':
          console.log('查看个人信息')
          break
        case '2':
          console.log('修改密码')
          break
        case '3':
          sessionStorage.clear()
          this.$router.push({ name: 'login' })
          window.location.reload()
          break
        default:
          break
      }
    },
    switchMenu () {
      this.$parent.isCollapse = !this.$parent.isCollapse
    }
  }
}
</script>

<style lang='less' scoped>
.openFliex {
  display: flex;
  align-items: center;
}
.wrap-container {
  padding: 0 20px 0 20px;
  .openFliex();
  justify-content: space-between;
  border-bottom: 1px solid #eeeeee;
  height: 60px;
  .left-wrap {
    width: 200px;
    .openFliex();
    img {
      height: 30px;
      width: 30px;
      display: inline-block;
      margin-right: 10px;
    }
    span {
      font-weight: 700;
    }
  }
  .right-wrap {
    .openFliex();
    flex: 1;
    justify-content: space-between;
    .left-content {
      i {
        font-size: 30px;
        color: #99e8d7;
        cursor: pointer;
      }
    }
    .right-content {
      .openFliex();
      i {
        display: inline-block;
        margin-right: 5px;
      }
      span {
        font-size: 12px;
      }
      img {
        height: 30px;
        width: 30px;
        border-radius: 50%;
      }
      .userInf {
        .openFliex();
        cursor: pointer;
        span {
          color: #1abc9c;
          font-size: 12px;
          display: inline-block;
          margin-left: 10px;
        }
        img {
          display: inline-block;
          margin-left: 20px;
        }
      }
    }
  }
}
</style>
