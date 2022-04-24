const userInfo = {
  nameSpaced: true,
  state: {
    userInfo: JSON.stringify(sessionStorage.getItem('setUserInfo'))
  },
  mutations: {
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
      sessionStorage.setItem('setUserInfo', JSON.stringify(userInfo))
    }
  },
  actions: {},
  getters: {
    updateUserInfo (state) {
      if (state.userInfo) {
        return state.userInfo
      }
    }
  }
}

export default userInfo
