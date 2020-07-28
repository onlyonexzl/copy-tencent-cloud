let LARouter = [
  {
    path: '/homePage',
    name: 'homepage',
    component: (resolve) => require(['@/view/BackgroundManagement/homePage/homePage.vue'], resolve),
    // meta: ['心理管理', '心理健康指导', '详情']
  },
  {
    path: '/homePage1',
    name: 'homepage',
    component: (resolve) => require(['@/view/BackgroundManagement/homePage/homePage.vue'], resolve),
    // meta: ['心理管理', '心理健康指导', '详情']
  }
]

export default LARouter