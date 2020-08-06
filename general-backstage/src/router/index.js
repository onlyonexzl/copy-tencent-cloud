import Vue from 'vue'
import Router from 'vue-router'
import LARouter from './LARouter.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: (resolve) =>
        require(['@/view/home/home.vue'], resolve),
      redirect: '/home/product',
      children: [{
        path: '/home/product',
        name: 'product',
        component: (resolve) =>
          require(['@/view/product/product.vue'], resolve),
      }, {
        path: '/product',
        name: 'product',
        component: (resolve) =>
          require(['@/view/productPage/productPage.vue'], resolve),
      }, {
        path: '/solution',
        name: 'solution',
        component: (resolve) =>
          require(['@/view/solution/solution.vue'], resolve),
      }, {
        path: '/price',
        name: 'price',
        component: (resolve) => require(['@/view/price/price.vue'], resolve)
      }, {
        // 注册页面
        path: '/registered',
        name: 'registered',
        component: (resolve) => require(['@/view/login/registered.vue'], resolve)
      }, {
        // 注册页面
        path: '/registeredQ',
        name: 'registeredQ',
        component: (resolve) => require(['@/view/login/registeredQ.vue'], resolve)
      }, {
        // 注册页面
        path: '/registeredF',
        name: 'registeredF',
        component: (resolve) => require(['@/view/login/registeredF.vue'], resolve)
      }, {
        // 注册页面
        path: '/registeredW',
        name: 'registeredW',
        component: (resolve) => require(['@/view/login/registeredW.vue'], resolve)
      }, {
        path: '/login',
        name: 'login',
        component: (resolve) => require(['@/view/login/login.vue'], resolve)
      }]
    },
    {
      path: '/marketHome',
      name: 'marketHome',
      component: (resolve) => require(['@/view/market/marketHome.vue'], resolve),
      children: [{
        path: '/marketHome/viewPage',
        name: 'viewPath',
        component: (resolve) => require(['@/view/market/viewPage.vue'], resolve)
      }, {
        path: '/marketHome/products',
        name: 'products',
        component: (resolve) => require(['@/view/market/products/products.vue'], resolve)
      }, {
        path: '/marketHome/details',
        name: 'details',
        component: (resolve) => require(['@/view/market/products/details.vue'], resolve)
      }]
    },
    // 后台管理 测试
    {
      path: '/pageHome',
      name: 'pageHome',
      component: (resolve) => require(['@/view/BackgroundManagement/pageHome.vue'], resolve),
      children: [
        ...LARouter,
        {
          path: '/homePage',
          name: 'homePage',
          component: (resolve) => require(['@/view/BackgroundManagement/homePage/homePage.vue'], resolve),
          meta: ['首页', '数据备份', '数据备份']
        },
        // 数据备份
        {
          path: '/DataBackup/dataBackup',
          name: 'dataBackup',
          component: (resolve) => require(['@/view/BackgroundManagement/homePage/DataBackup/dataBackup.vue'], resolve),
          meta: ['首页', '数据备份', '数据备份']
        },
        {
          path: '/DataBackup/recoverData',
          name: 'recoverData',
          component: (resolve) => require(['@/view/BackgroundManagement/homePage/DataBackup/recoverData.vue'], resolve),
          meta: ['首页', '数据备份', '恢复数据']
        },
        {
          path: '/DataBackup/optimizationAndRepair',
          name: 'optimizationAndRepair',
          component: (resolve) => require(['@/view/BackgroundManagement/homePage/DataBackup/optimizationAndRepair.vue'], resolve),
          meta: ['首页', '数据备份', '数据表优化和修复']
        },
        {
          path: '/DataBackup/executeSQL',
          name: 'executeSQL',
          component: (resolve) => require(['@/view/BackgroundManagement/homePage/DataBackup/executeSQL.vue'], resolve),
          meta: ['首页', '数据备份', '执行SQL']
        },
        {
          path: '/topicManagement/topicManagement',
          name: 'topicManagement',
          component: (resolve) => require(['@/view/BackgroundManagement/magazineManagement/topicManagement/topicManagement.vue'], resolve),
          meta: ['杂志管理', '动态管理', '动态话题管理']
        },
        {
          path: '/topicManagement/categoryDeletion',
          name: 'categoryDeletion',
          component: (resolve) => require(['@/view/BackgroundManagement/magazineManagement/topicManagement/categoryDeletion.vue'], resolve),
          meta: ['杂志管理', '动态管理', '动态类目删除']
        },
        {
          path: '/videoManagement/videoManagement',
          name: 'videoManagement',
          component: (resolve) => require(['@/view/BackgroundManagement/magazineManagement/videoManagement/videoManagement.vue'], resolve),
          meta: ['杂志管理', '视频管理', '短视频管理']
        },
        {
          path: '/focusOnManagement/followList',
          name: 'followList',
          component: (resolve) => require(['@/view/BackgroundManagement/magazineManagement/focusOnManagement/followList.vue'], resolve),
          meta: ['杂志管理', '关注管理', '关注管理']
        },
        {
          path: '/Amanagement/Alist',
          name: 'Alist',
          component: (resolve) => require(['@/view/BackgroundManagement/magazineManagement/Amanagement/Alist.vue'], resolve),
          meta: ['杂志管理', '问答管理', '问答列表']
        },
        {
          path: '/Amanagement/commentList',
          name: 'commentList',
          component: (resolve) => require(['@/view/BackgroundManagement/magazineManagement/Amanagement/commentList.vue'], resolve),
          meta: ['杂志管理', '问答管理', '评论列表']
        },
        {
          path: '/magazineManagement/magazineManagement',
          name: 'magazineManagement',
          component: (resolve) => require(['@/view/BackgroundManagement/magazineManagement/magazineManagement/magazineManagement.vue'], resolve),
          meta: ['杂志管理', '杂志管理', '资讯一级分类']
        },
        {
          path: '/magazineManagement/editMagazineManagement',
          name: 'editMagazineManagement',
          component: (resolve) => require(['@/view/BackgroundManagement/magazineManagement/magazineManagement/editMagazineManagement.vue'], resolve),
          // meta: ['杂志管理', '杂志管理', '资讯一级分类']
        },
        {
          path: '/magazineManagement/addMagazineManagement',
          name: 'addMagazineManagement',
          component: (resolve) => require(['@/view/BackgroundManagement/magazineManagement/magazineManagement/addMagazineManagement.vue'], resolve),
          // meta: ['杂志管理', '杂志管理', '资讯一级分类']
        },
        {
          path: '/commodityInformation/generalMerchandise',
          name: 'generalMerchandise',
          component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodityInformation/generalMerchandise.vue'], resolve),
          meta: ['商品管理', '商品信息', '常规商品管理']
        },
        {
          path: '/commodityInformation/editGeneralMerchandise',
          name: 'editGeneralMerchandise',
          component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodityInformation/editGeneralMerchandise.vue'], resolve),
          // meta: ['商品管理', '商品信息', '常规商品管理']
        },
        {
          path: '/commodityInformation/releaseGeneralMerchandise',
          name: 'releaseGeneralMerchandise',
          component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodityInformation/releaseGeneralMerchandise.vue'], resolve),
          // meta: ['商品管理', '商品信息', '常规商品管理']
        },
        {
          path: '/commodityInformation/knowledgeCommodity',
          name: 'knowledgeCommodity',
          component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodityInformation/knowledgeCommodity.vue'], resolve),
          meta: ['商品管理', '商品信息', '知识商品管理']
        }, {
          path: '/commodityInformation/editknowledgeCommodity',
          name: 'editknowledgeCommodity',
          component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodityInformation/editknowledgeCommodity.vue'], resolve),
          // meta: ['商品管理', '商品信息', '常规商品管理']
        },
        {
          path: '/commodityInformation/releaseknowledgeCommodity',
          name: 'releaseknowledgeCommodity',
          component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodityInformation/releaseknowledgeCommodity.vue'], resolve),
          // meta: ['商品管理', '商品信息', '常规商品管理']
        },
        {
          path: '/commodityInformation/groupGoods',
          name: 'groupGoods',
          component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodityInformation/groupGoods.vue'], resolve),
          meta: ['商品管理', '商品信息', '评团商品列表']
        }, {
          path: '/commodityInformation/editgroupGoods',
          name: 'editgroupGoods',
          component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodityInformation/editgroupGoods.vue'], resolve),
          // meta: ['商品管理', '商品信息', '常规商品管理']
        },
        {
          path: '/commodityInformation/rebateGoods',
          name: 'rebateGoods',
          component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodityInformation/rebateGoods.vue'], resolve),
          meta: ['商品管理', '商品信息', '返利商品列表']
        },

        {
          path: '/commodityInformation/releasegroupGoods',
          name: 'releasegroupGoods',
          component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodityInformation/releasegroupGoods.vue'], resolve),
          // meta: ['商品管理', '商品信息', '常规商品管理']
        },
        {
          path: '/commodityInformation/secondKill',
          name: 'secondKill',
          component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodityInformation/secondKill.vue'], resolve),
          meta: ['商品管理', '商品信息', '秒杀商品列表']
        },
        {
          path: '/commodityInformation/editsecondKil',
          name: 'editsecondKil',
          component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodityInformation/editsecondKil.vue'], resolve),
          // meta: ['商品管理', '商品信息', '秒杀商品列表']
        },
        {
          path: '/commodityInformation/displayProducts',
          name: 'displayProducts',
          component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodityInformation/displayProducts.vue'], resolve),
          meta: ['商品管理', '商品信息', '展示商品列表']
        },
        {
          path: '/commodityInformation/editdisplayProducts',
          name: 'editdisplayProducts',
          component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodityInformation/editdisplayProducts.vue'], resolve),
          // meta: ['商品管理', '商品信息', '秒杀商品列表']
        },
        {
          path: '/commodityInformation/groupBuying',
          name: 'groupBuying',
          component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodityInformation/groupBuying.vue'], resolve),
          meta: ['商品管理', '商品信息', '团购商品列表']
        },
        {
          path: '/commodityInformation/auctionGoods',
          name: 'auctionGoods',
          component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodityInformation/auctionGoods.vue'], resolve),
          meta: ['商品管理', '商品信息', '拍卖商品列表']
        },
        {
          path: '/commodityInformation/editauctionGoods',
          name: 'editauctionGoods',
          component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodityInformation/editauctionGoods.vue'], resolve),
          // meta: ['商品管理', '商品信息', '拍卖商品列表']
        },
        {
          path: '/commodityInformation/wholesaleGoods',
          name: 'wholesaleGoods',
          component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodityInformation/wholesaleGoods.vue'], resolve),
          meta: ['商品管理', '商品信息', '批发商品列表']
        },
        {
          path: '/commodityInformation/editwholesaleGoods',
          name: 'editwholesaleGoods',
          component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodityInformation/editwholesaleGoods.vue'], resolve),
          // meta: ['商品管理', '商品信息', '批发商品列表']
        },
        {
          path: '/commodityInformation/releasewholesaleGoods',
          name: 'releasewholesaleGoods',
          component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodityInformation/releasewholesaleGoods.vue'], resolve),
          // meta: ['商品管理', '商品信息', '批发商品列表']
        },
        {
          path: '/commodityInformation/consignmentGoods',
          name: 'consignmentGoods',
          component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodityInformation/consignmentGoods.vue'], resolve),
          meta: ['商品管理', '商品信息', '代销商品列表']
        },
        {
          path: '/commodityInformation/notOn',
          name: 'notOn',
          component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodityInformation/notOn.vue'], resolve),
          meta: ['商品管理', '商品信息', '未上架商品列表']
        },
        {
          path: '/commodityInformation/editNotOn',
          name: 'editNotOn',
          component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodityInformation/editNotOn.vue'], resolve),
          // meta: ['商品管理', '商品信息', '未上架商品列表']
        },
        {
          path: '/shopOrder/customerOrder',
          name: 'customerOrder',
          component: (resolve) => require(['@/view/BackgroundManagement/transactionManagement/shopOrder/customerOrder.vue'], resolve),
          meta: ['交易管理', '商铺订单', '客户订单']
        },
        {
          path: '/shopOrder/orderDetails',
          name: 'orderDetails',
          component: (resolve) => require(['@/view/BackgroundManagement/transactionManagement/orderDetails.vue'], resolve),
          meta: ['交易管理', '订单详情',]
        },
        {
          path: '/shopOrder/knowledgeOrder',
          name: 'knowledgeOrder',
          component: (resolve) => require(['@/view/BackgroundManagement/transactionManagement/shopOrder/knowledgeOrder.vue'], resolve),
          meta: ['交易管理', '商铺订单', '知识订单']
        },
        {
          path: '/shopOrder/returnChannel',
          name: 'returnChannel',
          component: (resolve) => require(['@/view/BackgroundManagement/transactionManagement/shopOrder/returnChannel.vue'], resolve),
          meta: ['交易管理', '商铺订单', '退货通道']
        },
        {
          path: '/shopOrder/withdrawalApplication',
          name: 'withdrawalApplication',
          component: (resolve) => require(['@/view/BackgroundManagement/transactionManagement/shopOrder/withdrawalApplication.vue'], resolve),
          meta: ['交易管理', '商铺订单', '提现申请']
        },
        {
          path: '/commodityConsultation/sellingGoods',
          name: 'sellingGoods',
          component: (resolve) => require(['@/view/BackgroundManagement/transactionManagement/commodityConsultation/sellingGoods.vue'], resolve),
          meta: ['交易管理', '商铺订单', '销售商品咨询']
        },
        {
          path: '/commodityConsultation/displayProducts',
          name: 'displayProducts',
          component: (resolve) => require(['@/view/BackgroundManagement/transactionManagement/commodityConsultation/displayProducts.vue'], resolve),
          meta: ['交易管理', '商品咨询管理', '展示商品咨询']
        },
        {
          path: '/paymentMethod/collectionSettings',
          name: 'collectionSettings',
          component: (resolve) => require(['@/view/BackgroundManagement/transactionManagement/paymentMethod/collectionSettings.vue'], resolve),
          meta: ['交易管理', '商品咨询管理', '收款设置']
        },
        {
          path: '/transactionDetails/creditDetails',
          name: 'creditDetails',
          component: (resolve) => require(['@/view/BackgroundManagement/transactionManagement/transactionDetails/creditDetails.vue'], resolve),
          meta: ['交易管理', '交易明细', '积分明细']
        },
        {
          path: '/transactionDetails/capitalDetails',
          name: 'capitalDetails',
          component: (resolve) => require(['@/view/BackgroundManagement/transactionManagement/transactionDetails/capitalDetails.vue'], resolve),
          meta: ['交易管理', '交易明细', '资金明细']
        },
        {
          path: '/transactionDetails/protectionDetails',
          name: 'protectionDetails',
          component: (resolve) => require(['@/view/BackgroundManagement/transactionManagement/transactionDetails/protectionDetails.vue'], resolve),
          meta: ['交易管理', '交易明细', '消保明细']
        },
        {
          path: '/userProfile/userList',
          name: 'userList',
          component: (resolve) => require(['@/view/BackgroundManagement/userManagement/userProfile/userList.vue'], resolve),
          meta: ['用户管理', '用户资料', '用户列表']
        },
        {
          path: '/userProfile/recommendedSettings',
          name: 'recommendedSettings',
          component: (resolve) => require(['@/view/BackgroundManagement/userManagement/userProfile/recommendedSettings.vue'], resolve),
          meta: ['用户管理', '分销设置', '推荐设置']
        },
        {
          path: '/userProfile/rankList',
          name: 'rankList',
          component: (resolve) => require(['@/view/BackgroundManagement/userManagement/userProfile/rankList.vue'], resolve),
          meta: ['用户管理', '分销设置', '等级列表']
        },
        {
          path: '/dynamicManagement/dynamicTopics',
          name: 'dynamicTopics',
          component: (resolve) => require(['@/view/BackgroundManagement/communityManagement/dynamicManagement/dynamicTopics.vue'], resolve),
          meta: ['社区管理', '动态管理', '动态话题管理']
        },
        {
          path: '/dynamicManagement/dynamicCategory',
          name: 'dynamicCategory',
          component: (resolve) => require(['@/view/BackgroundManagement/communityManagement/dynamicManagement/dynamicCategory.vue'], resolve),
          meta: ['社区管理', '动态管理', '动态类目删除']
        },
        {
          path: '/shortVideoMa/shortVideo',
          name: 'shortVideo',
          component: (resolve) => require(['@/view/BackgroundManagement/communityManagement/shortVideoMa/shortVideo.vue'], resolve),
          meta: ['社区管理', '视频管理', '短视频管理']
        },
        {
          path: '/circleManagement/memberManagement',
          name: 'memberManagement',
          component: (resolve) => require(['@/view/BackgroundManagement/communityManagement/circleManagement/memberManagement.vue'], resolve),
          meta: ['社区管理', '圈子管理', '成员管理']
        },
        {
          path: '/circleManagement/postManagement',
          name: 'postManagement',
          component: (resolve) => require(['@/view/BackgroundManagement/communityManagement/circleManagement/postManagement.vue'], resolve),
          meta: ['社区管理', '圈子管理', '帖子管理']
        },
        {
          path: '/circleManagement/editpostManagement',
          name: 'editpostManagement',
          component: (resolve) => require(['@/view/BackgroundManagement/communityManagement/circleManagement/editpostManagement.vue'], resolve),
          // meta: ['社区管理', '视频管理', '帖子管理']
        },
        {
          path: '/circleManagement/comment',
          name: 'comment',
          component: (resolve) => require(['@/view/BackgroundManagement/communityManagement/circleManagement/comment.vue'], resolve),
          meta: ['社区管理', '圈子管理', '评论管理']
        },
        {
          path: '/circleManagement/circleManagement',
          name: 'circleManagement',
          component: (resolve) => require(['@/view/BackgroundManagement/communityManagement/circleManagement/circleManagement.vue'], resolve),
          meta: ['社区管理', '圈子管理', '圈子管理']
        },
        {
          path: '/circleManagement/editCircleManagement',
          name: 'circleManagement',
          component: (resolve) => require(['@/view/BackgroundManagement/communityManagement/circleManagement/editCircleManagement.vue'], resolve),
          // meta: ['社区管理', '圈子管理', '圈子管理']
        },
        {
          path: '/cloudsAndWarehouses/gatheringCommodities',
          name: 'gatheringCommodities',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/cloudsAndWarehouses/gatheringCommodities.vue'], resolve),
          meta: ['营销管理', '云集云仓', '云集商品']
        },
        {
          path: '/cloudsAndWarehouses/warehouseGoods',
          name: 'warehouseGoods',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/cloudsAndWarehouses/warehouseGoods.vue'], resolve),
          meta: ['营销管理', '云集云仓', '云仓商品']
        },
        {
          path: '/luckyDraw/lotteryResults',
          name: 'lotteryResults',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/luckyDraw/lotteryResults.vue'], resolve),
          meta: ['营销管理', '幸运抽奖', '抽奖结果']
        }, {
          path: '/luckyDraw/luckyDraw',
          name: 'luckyDraw',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/luckyDraw/luckyDraw.vue'], resolve),
          meta: ['营销管理', '幸运抽奖', '抽奖活动']
        }, {
          path: '/luckyDraw/editluckyDraw',
          name: 'editluckyDraw',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/luckyDraw/editluckyDraw.vue'], resolve),
          meta: ['营销管理', '幸运抽奖', '抽奖活动']
        },

        {
          path: '/preferentialManagement/couponManagement',
          name: 'couponManagement',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/preferentialManagement/couponManagement.vue'], resolve),
          meta: ['营销管理', '优惠管理', '优惠券管理']
        },
        {
          path: '/preferentialManagement/editcouponManagement',
          name: 'editcouponManagement',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/preferentialManagement/editcouponManagement.vue'], resolve),
          // meta: ['营销管理', '优惠管理', '优惠券管理']
        },
        {
          path: '/preferentialManagement/pointsCollectionZone',
          name: 'pointsCollectionZone',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/preferentialManagement/pointsCollectionZone.vue'], resolve),
          meta: ['营销管理', '优惠管理', '积分汇专区']
        },
        {
          path: '/preferentialManagement/editpointsCollectionZone',
          name: 'editpointsCollectionZone',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/preferentialManagement/editpointsCollectionZone.vue'], resolve),
          // meta: ['营销管理', '优惠管理', '积分汇专区']
        },
        {
          path: '/advertisingManagement/advertisingManagement',
          name: 'advertisingManagement',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/advertisingManagement/advertisingManagement.vue'], resolve),
          meta: ['营销管理', '广告管理', '广告管理']
        },
        {
          path: '/advertisingManagement/editadvertisingManagement',
          name: 'editadvertisingManagement',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/advertisingManagement/editadvertisingManagement.vue'], resolve),
          // meta: ['营销管理', '广告管理', '广告管理']
        },
        {
          path: '/advertisingManagement/displayed',
          name: 'displayed',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/advertisingManagement/displayed.vue'], resolve),
          meta: ['营销管理', '广告管理', '已展示']
        },
        {
          path: '/advertisingManagement/editdisplayed',
          name: 'editdisplayed',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/advertisingManagement/editdisplayed.vue'], resolve),
        },
        {
          path: '/advertisingManagement/pendingApplication',
          name: 'pendingApplication',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/advertisingManagement/pendingApplication.vue'], resolve),
          meta: ['营销管理', '广告管理', '待申请']
        },
        {
          path: '/advertisingManagement/editpendingApplication',
          name: 'editpendingApplication',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/advertisingManagement/editpendingApplication.vue'], resolve),
        },
        {
          path: '/advertisingManagement/willExpire',
          name: 'willExpire',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/advertisingManagement/willExpire.vue'], resolve),
          meta: ['营销管理', '广告管理', '将到期']
        },
        {
          path: '/advertisingManagement/editwillExpire',
          name: 'editwillExpire',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/advertisingManagement/editwillExpire.vue'], resolve),
        },
        {
          path: '/advertisingManagement/toBeReviewed',
          name: 'toBeReviewed',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/advertisingManagement/toBeReviewed.vue'], resolve),
          meta: ['营销管理', '广告管理', '待审核']
        },
        {
          path: '/advertisingManagement/edittoBeReviewed',
          name: 'edittoBeReviewed',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/advertisingManagement/edittoBeReviewed.vue'], resolve),
        },
        {
          path: '/advertisingManagement/toBeShown',
          name: 'toBeShown',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/advertisingManagement/toBeShown.vue'], resolve),
          meta: ['营销管理', '广告管理', '待展示']
        },
        {
          path: '/advertisingManagement/customArea',
          name: 'customArea',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/advertisingManagement/customArea.vue'], resolve),
          meta: ['营销管理', '广告管理', '自定义区域']
        },
        {
          path: '/floorMarketing/specialPage',
          name: 'specialPage',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/floorMarketing/specialPage.vue'], resolve),
          meta: ['营销管理', '楼层营销', '专题页面']
        },
        {
          path: '/floorMarketing/homeFloor',
          name: 'homeFloor',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/floorMarketing/homeFloor.vue'], resolve),
          meta: ['营销管理', '楼层营销', '首页楼层']
        },
        {
          path: '/brandInformation/brandManagement',
          name: 'brandManagement',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/brandInformation/brandManagement.vue'], resolve),
          meta: ['营销管理', '品牌信息', '品牌管理']
        },
        {
          path: '/brandInformation/editbrandManagement',
          name: 'editbrandManagement',
          component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/brandInformation/editbrandManagement.vue'], resolve),
          // meta: ['营销管理', '品牌信息', '品牌管理']
        }
      ]
    }
  ]
})
