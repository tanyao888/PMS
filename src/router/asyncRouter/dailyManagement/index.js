const dailyManagement = [
  {
    path: '/repairProcess',
    name: 'repairProcess',
    component: () =>
      import('@/views/dailyManagement/repairManagement/repairProcess.vue')
  },
  {
    path: '/addFfman',
    name: 'addFfman',
    component: () => import('@/views/dailyManagement/repairManagement/addFfman.vue')
  }
]

export default dailyManagement
