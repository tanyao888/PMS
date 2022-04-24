<template>
  <div class="login-container">
    <div class="top-wrap">
      <img src="../../assets/loginPage/bgc.png" alt="" v-for="(item,index) in 4" :key="index" :class="`img${index}`">
    </div>
    <div class="center-wrap"></div>
    <div class="login-form">
      <img src="../../assets/loginPage/login-form-icon.png" alt="">
      <h3>智慧云物业管理系统</h3>
      <el-row>
        <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
          <el-col>
            <el-form-item prop="userName">
              <el-input v-model="loginForm.userName" prefix-icon="el-icon-s-custom"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item prop="passWord">
              <el-input v-model="loginForm.passWord" prefix-icon="el-icon-lock" type="passWord">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item>
              <el-button class="loginButton" @click="login">登 录</el-button>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item>
              <el-button class="registerButton" @click="register">还没注册？</el-button>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      loginForm: {
        userName: '',
        passWord: ''
      },
      loginRules: {
        userName: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        passWord: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(['setUserInfo']),
    login () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          const data = { ...this.$refs.loginForm.model, token: 'sdfjlsjdflj' }
          this.setUserInfo(data)
          this.$router.push({ name: 'layout' })
        }
      })
    },
    register () {
      console.log('调到注册页')
    }
  }
}
</script>

<style lang='less' scoped>
.login-container {
  height: 100vh;
  position: relative;
  .top-wrap {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    transform: translateY(80px);
    img {
      height: 235px;
    }
    .img1 {
      transform: translateX(-115px);
    }
    .img2 {
      transform: translateX(115px);
    }
  }
  .center-wrap {
    height: 235px;
    width: 100%;
    background-color: #1abc9c;
  }
  .login-form {
    left: 50%;
    top: 50%;
    border-top: 8px solid #1abc9c;
    transform: translate(545px, -300px);
    height: 426px;
    width: 355px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20px 20px 20px 20px;
    img {
      height: 60px;
      width: 60px;
    }
    h3 {
      color: #1abc9c;
    }
    ::v-deep.el-button {
      width: 100%;
    }
    ::v-deep.loginButton {
      color: white;
      background-color: #48bd80;
    }
    ::v-deep.registerButton {
      color: #48bd80;
      background-color: #fff3cf;
    }
  }
}
</style>
