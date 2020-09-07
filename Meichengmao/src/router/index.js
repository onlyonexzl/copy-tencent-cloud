import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: (resolve) =>
        require(['@/view/home/home.vue'], resolve),
      redirect: '/homePage',
      children: [{
        path: '/homePage',
        name: 'homePage',
        component: (resolve) =>
          require(['@/view/homePage/homePage'], resolve),
      }, {
        path: '/shop',
        name: 'shop',
        component: (resolve) =>
          require(['@/view/shop/shop'], resolve),
        children: [{
          path: '/shop/shopContent',
          name: 'shop',
          component: (resolve) =>
            require(['@/view/shop/shopContent'], resolve),
        }, {
          path: '/shop/shopDetail',
          name: 'shopDetail',
          component: (resolve) =>
            require(['@/view/shop/shopDetail'], resolve),
        }]
      }, {
        path: '/question',
        name: 'question',
        component: (resolve) =>
          require(['@/view/question/question'], resolve),
      }, {
        path: '/shop/shopDetailPage',
        name: 'shopDetailPage',
        component: (resolve) =>
          require(['@/view/shop/shopDetailPage'], resolve),
      }, {
        path: '/share',
        name: 'share',
        component: (resolve) =>
          require(['@/view/share/share'], resolve),
      }, {
        path: '/share/shareDetails',
        name: 'shareDetails',
        component: (resolve) =>
          require(['@/view/share/shareDetails'], resolve),
      }, {
        path: '/specialOffer',
        name: 'specialOffer',
        component: (resolve) =>
          require(['@/view/specialOffer/specialOffer'], resolve),
      }, {
        path: '/auction',
        name: 'auction',
        component: (resolve) =>
          require(['@/view/auction/auction'], resolve),
      }, {
        path: '/market',
        name: 'market',
        component: (resolve) =>
          require(['@/view/market/market'], resolve),
      }, {
        path: '/groupBuying',
        name: 'groupBuying',
        component: (resolve) =>
          require(['@/view/groupBuying/groupBuying'], resolve),
      }, {
        path: '/service',
        name: 'service',
        component: (resolve) =>
          require(['@/view/service/service'], resolve),
      }, {
        path: '/friends',
        name: 'friends',
        component: (resolve) =>
          require(['@/view/friends/friends'], resolve),
      }, {
        path: '/video',
        name: 'video',
        component: (resolve) =>
          require(['@/view/video/video'], resolve),
      }, {
        path: '/community',
        name: 'community',
        component: (resolve) =>
          require(['@/view/community/community'], resolve),
      }, {
        path: '/login',
        name: 'login',
        component: (resolve) =>
          require(['@/view/login/login'], resolve),
      }, {
        path: '/password',
        name: 'password',
        component: (resolve) =>
          require(['@/view/login/password'], resolve),
      }, {
        path: '/registered',
        name: 'registered',
        component: (resolve) =>
          require(['@/view/login/registered'], resolve),
      }, {
        path: '/management',
        name: 'management',
        component: (resolve) =>
          require(['@/view/management/management'], resolve),
        children: [{
          path: '/errorMessage',
          name: 'errorMessage',
          component: (resolve) =>
            require(['@/view/management/errorMessage'], resolve),
          // meta: ['我的购物', '我的购物', '我的订单']
        }, {
          path: '/myShopping/myOrder',
          name: 'myOrder',
          component: (resolve) =>
            require(['@/view/management/myShopping/myOrder'], resolve),
          meta: ['我的购物', '我的购物', '我的订单']
        }, {
          path: '/myShopping/knowledgeOrder',
          name: 'knowledgeOrder',
          component: (resolve) =>
            require(['@/view/management/myShopping/knowledgeOrder'], resolve),
          meta: ['我的购物', '我的购物', '我的知识订单']
        }, {
          path: '/myShopping/doubleOrder',
          name: 'doubleOrder',
          component: (resolve) =>
            require(['@/view/management/myShopping/doubleOrder'], resolve),
          meta: ['我的购物', '我的购物', '我的拼团订单']
        }, {
          path: '/myShopping/returnChannel',
          name: 'returnChannel',
          component: (resolve) =>
            require(['@/view/management/myShopping/returnChannel'], resolve),
          meta: ['我的购物', '我的购物', '退货通道']
        }, {
          path: '/myShopping/myAuction',
          name: 'myAuction',
          component: (resolve) =>
            require(['@/view/management/myShopping/myAuction'], resolve),
          meta: ['我的购物', '我的购物', '我的竞拍']
        }, {
          path: '/myShopping/luckyDraw',
          name: 'luckyDraw',
          component: (resolve) =>
            require(['@/view/management/myShopping/luckyDraw'], resolve),
          meta: ['我的购物', '我的购物', '我的幸运抽奖']
        }, {
          path: '/myShopping/coupon',
          name: 'coupon',
          component: (resolve) =>
            require(['@/view/management/myShopping/coupon'], resolve),
          meta: ['我的购物', '我的购物', '我的优惠卷']
        }, {
          path: '/myShopping/credit',
          name: 'credit',
          component: (resolve) =>
            require(['@/view/management/myShopping/credit'], resolve),
          meta: ['我的购物', '我的购物', '信用管理']
        }, {
          path: '/myShopping/evaluate',
          name: 'evaluate',
          component: (resolve) =>
            require(['@/view/management/myShopping/evaluate'], resolve),
          meta: ['我的购物', '我的购物', '评价商家']
        }, {
          path: '/bellesLettres/article',
          name: 'article',
          component: (resolve) =>
            require(['@/view/management/myContent/bellesLettres/article'], resolve),
          meta: ['我的内容', '美文管理', '文章管理']
        }, {
          path: '/bellesLettres/addArticle',
          name: 'addArticle',
          component: (resolve) =>
            require(['@/view/management/myContent/bellesLettres/addArticle'], resolve),
          meta: ['我的内容', '美文管理', '发布文章']
        }, {
          path: '/bellesLettres/release',
          name: 'release',
          component: (resolve) =>
            require(['@/view/management/myContent/bellesLettres/release'], resolve),
          meta: ['我的内容', '美文管理', '发布文章']
        }, {
          path: '/President/community',
          name: 'community',
          component: (resolve) =>
            require(['@/view/management/myContent/community/President/community'], resolve),
          meta: ['我的内容', '社区管理', '我是社长', '我的社区']
        }, {
          path: '/President/addCommunity',
          name: 'addCommunity',
          component: (resolve) =>
            require(['@/view/management/myContent/community/President/addCommunity'], resolve),
          // meta: ['我的内容', '社区管理', '我是社长', '我的社区']
        }, {
          path: '/participateIn/joinTheCommunity',
          name: 'joinTheCommunity',
          component: (resolve) =>
            require(['@/view/management/myContent/community/participateIn/joinTheCommunity'], resolve),
          meta: ['我的内容', '社区管理', '我的参与', '我加入的社区']
        }, {
          path: '/participateIn/myFriend',
          name: 'myFriend',
          component: (resolve) =>
            require(['@/view/management/myContent/community/participateIn/myFriend'], resolve),
          meta: ['我的内容', '社区管理', '我的参与', '我的好友']
        }, {
          path: '/participateIn/conversation',
          name: 'conversation',
          component: (resolve) =>
            require(['@/view/management/myContent/community/participateIn/conversation'], resolve),
          meta: ['我的内容', '社区管理', '我的参与', '我发表的话题']
        }, {
          path: '/participateIn/myComment',
          name: 'myComment',
          component: (resolve) =>
            require(['@/view/management/myContent/community/participateIn/myComment'], resolve),
          meta: ['我的内容', '社区管理', '我的参与', '我发表的评论']
        }, {
          path: '/participateIn/share',
          name: 'share',
          component: (resolve) =>
            require(['@/view/management/myContent/community/participateIn/share'], resolve),
          meta: ['我的内容', '社区管理', '我的参与', '时光管理']
        }, {
          path: '/ask/askList',
          name: 'askList',
          component: (resolve) =>
            require(['@/view/management/myContent/community/ask/askList'], resolve),
          meta: ['我的内容', '社区管理', '问答管理', '问答列表']
        }, {
          path: '/ask/commentList',
          name: 'commentList',
          component: (resolve) =>
            require(['@/view/management/myContent/community/ask/commentList'], resolve),
          meta: ['我的内容', '社区管理', '问答管理', '评论列表']
        }, {
          path: '/follow/followList',
          name: 'followList',
          component: (resolve) =>
            require(['@/view/management/myContent/community/follow/followList'], resolve),
          meta: ['我的内容', '社区管理', '关注管理', '关注列表']
        }, {
          path: '/mySocialLife/information',
          name: 'information',
          component: (resolve) =>
            require(['@/view/management/mySocialLife/information'], resolve),
          meta: ['我的社交', '我的社交', '供应信息']
        }, {
          path: '/mySocialLife/editInformation',
          name: 'editInformation',
          component: (resolve) =>
            require(['@/view/management/mySocialLife/editInformation'], resolve),
          // meta: ['我的社交', '我的社交', '供应信息']
        }, {
          path: '/mySocialLife/wantToBuy',
          name: 'wantToBuy',
          component: (resolve) =>
            require(['@/view/management/mySocialLife/wantToBuy'], resolve),
          meta: ['我的社交', '我的社交', '求购信息']
        }, {
          path: '/mySocialLife/informationVIP',
          name: 'informationVIP',
          component: (resolve) =>
            require(['@/view/management/mySocialLife/informationVIP'], resolve),
          meta: ['我的社交', '我的社交', '供应信息VIP']
        }, {
          path: '/mySocialLife/wantToBuyVIP',
          name: 'wantToBuyVIP',
          component: (resolve) =>
            require(['@/view/management/mySocialLife/wantToBuyVIP'], resolve),
          meta: ['我的社交', '我的社交', '求购信息VIP']
        }, {
          path: '/mySocialLife/leaveAmessage',
          name: 'leaveAmessage',
          component: (resolve) =>
            require(['@/view/management/mySocialLife/leaveAmessage'], resolve),
          meta: ['我的社交', '我的社交', '我给别人的留言']
        }, {
          path: '/mySocialLife/myMessage',
          name: 'myMessage',
          component: (resolve) =>
            require(['@/view/management/mySocialLife/myMessage'], resolve),
          meta: ['我的社交', '我的社交', '别人给我的留言']

        }, { // -----------------
          path: '/myZhiyun/information',
          name: 'information',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengMarketing/information'], resolve),
          meta: ['我的智云', '我的美城营销', '供应信息']
        }, {
          path: '/myZhiyun/editInformation',
          name: 'editInformation',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengMarketing/editInformation'], resolve),
        }, {
          path: '/myZhiyun/wantToBuy',
          name: 'wantToBuy',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengMarketing/wantToBuy'], resolve),
          meta: ['我的智云', '我的美城营销', '求购信息']
        }, {
          path: '/myZhiyun/informationVIP',
          name: 'informationVIP',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengMarketing/informationVIP'], resolve),
          meta: ['我的智云', '我的美城营销', '供应信息VIP']
        }, {
          path: '/myZhiyun/wantToBuyVIP',
          name: 'wantToBuyVIP',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengMarketing/wantToBuyVIP'], resolve),
          meta: ['我的智云', '我的美城营销', '求购信息VIP']
        }, {
          path: '/myZhiyun/leaveAmessage',
          name: 'leaveAmessage',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengMarketing/leaveAmessage'], resolve),
          meta: ['我的智云', '我的美城营销', '我给别人的留言']
        }, {
          path: '/myZhiyun/myMessage',
          name: 'myMessage',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengMarketing/myMessage'], resolve),
          meta: ['我的智云', '我的美城营销', '别人给我的留言']
        }, {
          path: '/myZhiyun/orderList',
          name: 'orderList',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengMarketing/orderList'], resolve),
          meta: ['我的智云', '我的美城营销', '供应信息订单列表']
        }, {
          path: '/myZhiyun/returnChannel',
          name: 'returnChannel',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengMarketing/returnChannel'], resolve),
          meta: ['我的智云', '我的美城营销', '退货通道']
        }, { // -------------------------------------------------------------------------------------------
          path: '/manufacturing/information',
          name: 'information',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/manufacturing/information'], resolve),
          meta: ['我的智云', '我的美城智造', '供应信息']
        }, {
          path: '/manufacturing/editInformation',
          name: 'editInformation',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/manufacturing/editInformation'], resolve),
        }, {
          path: '/manufacturing/wantToBuy',
          name: 'wantToBuy',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/manufacturing/wantToBuy'], resolve),
          meta: ['我的智云', '我的美城智造', '求购信息']
        }, {
          path: '/manufacturing/informationVIP',
          name: 'informationVIP',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/manufacturing/informationVIP'], resolve),
          meta: ['我的智云', '我的美城智造', '供应信息VIP']
        }, {
          path: '/manufacturing/wantToBuyVIP',
          name: 'wantToBuyVIP',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/manufacturing/wantToBuyVIP'], resolve),
          meta: ['我的智云', '我的美城智造', '求购信息VIP']
        }, {
          path: '/manufacturing/leaveAmessage',
          name: 'leaveAmessage',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/manufacturing/leaveAmessage'], resolve),
          meta: ['我的智云', '我的美城智造', '我给别人的留言']
        }, {
          path: '/manufacturing/myMessage',
          name: 'myMessage',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/manufacturing/myMessage'], resolve),
          meta: ['我的智云', '我的美城智造', '别人给我的留言']
        }, {
          path: '/manufacturing/orderList',
          name: 'orderList',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/manufacturing/orderList'], resolve),
          meta: ['我的智云', '我的美城智造', '供应信息订单列表']
        }, {
          path: '/manufacturing/returnChannel',
          name: 'returnChannel',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/manufacturing/returnChannel'], resolve),
          meta: ['我的智云', '我的美城智造', '退货通道']
        }, { // -------------------------------------------------------------------------------------------
          path: '/meichengManagement/information',
          name: 'information',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengManagement/information'], resolve),
          meta: ['我的智云', '我的美城管理', '供应信息']
        }, {
          path: '/meichengManagement/editInformation',
          name: 'editInformation',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengManagement/editInformation'], resolve),
        }, {
          path: '/meichengManagement/wantToBuy',
          name: 'wantToBuy',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengManagement/wantToBuy'], resolve),
          meta: ['我的智云', '我的美城管理', '求购信息']
        }, {
          path: '/meichengManagement/informationVIP',
          name: 'informationVIP',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengManagement/informationVIP'], resolve),
          meta: ['我的智云', '我的美城管理', '供应信息VIP']
        }, {
          path: '/meichengManagement/wantToBuyVIP',
          name: 'wantToBuyVIP',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengManagement/wantToBuyVIP'], resolve),
          meta: ['我的智云', '我的美城管理', '求购信息VIP']
        }, {
          path: '/meichengManagement/leaveAmessage',
          name: 'leaveAmessage',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengManagement/leaveAmessage'], resolve),
          meta: ['我的智云', '我的美城管理', '我给别人的留言']
        }, {
          path: '/meichengManagement/myMessage',
          name: 'myMessage',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengManagement/myMessage'], resolve),
          meta: ['我的智云', '我的美城管理', '别人给我的留言']
        }, {
          path: '/meichengManagement/orderList',
          name: 'orderList',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengManagement/orderList'], resolve),
          meta: ['我的智云', '我的美城管理', '供应信息订单列表']
        }, {
          path: '/meichengManagement/returnChannel',
          name: 'returnChannel',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengManagement/returnChannel'], resolve),
          meta: ['我的智云', '我的美城管理', '退货通道']
        }, { // -------------------------------------------------------------------------------------------
          path: '/consulting/information',
          name: 'information',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/consulting/information'], resolve),
          meta: ['我的智云', '我的美城咨询', '供应信息']
        }, {
          path: '/consulting/editInformation',
          name: 'editInformation',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/consulting/editInformation'], resolve),
        }, {
          path: '/consulting/wantToBuy',
          name: 'wantToBuy',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/consulting/wantToBuy'], resolve),
          meta: ['我的智云', '我的美城咨询', '求购信息']
        }, {
          path: '/consulting/informationVIP',
          name: 'informationVIP',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/consulting/informationVIP'], resolve),
          meta: ['我的智云', '我的美城咨询', '供应信息VIP']
        }, {
          path: '/consulting/wantToBuyVIP',
          name: 'wantToBuyVIP',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/consulting/wantToBuyVIP'], resolve),
          meta: ['我的智云', '我的美城咨询', '求购信息VIP']
        }, {
          path: '/consulting/leaveAmessage',
          name: 'leaveAmessage',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/consulting/leaveAmessage'], resolve),
          meta: ['我的智云', '我的美城咨询', '我给别人的留言']
        }, {
          path: '/consulting/myMessage',
          name: 'myMessage',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/consulting/myMessage'], resolve),
          meta: ['我的智云', '我的美城咨询', '别人给我的留言']
        }, {
          path: '/consulting/orderList',
          name: 'orderList',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/consulting/orderList'], resolve),
          meta: ['我的智云', '我的美城咨询', '供应信息订单列表']
        }, {
          path: '/consulting/returnChannel',
          name: 'returnChannel',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/consulting/returnChannel'], resolve),
          meta: ['我的智云', '我的美城咨询', '退货通道']
        }, { // -------------------------------------------------------------------------------------------
          path: '/innovation/information',
          name: 'information',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/innovation/information'], resolve),
          meta: ['我的智云', '我的美城创新', '供应信息']
        }, {
          path: '/innovation/editInformation',
          name: 'editInformation',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/innovation/editInformation'], resolve),
        }, {
          path: '/innovation/wantToBuy',
          name: 'wantToBuy',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/innovation/wantToBuy'], resolve),
          meta: ['我的智云', '我的美城创新', '求购信息']
        }, {
          path: '/innovation/informationVIP',
          name: 'informationVIP',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/innovation/informationVIP'], resolve),
          meta: ['我的智云', '我的美城创新', '供应信息VIP']
        }, {
          path: '/innovation/wantToBuyVIP',
          name: 'wantToBuyVIP',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/innovation/wantToBuyVIP'], resolve),
          meta: ['我的智云', '我的美城创新', '求购信息VIP']
        }, {
          path: '/innovation/leaveAmessage',
          name: 'leaveAmessage',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/innovation/leaveAmessage'], resolve),
          meta: ['我的智云', '我的美城创新', '我给别人的留言']
        }, {
          path: '/innovation/myMessage',
          name: 'myMessage',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/innovation/myMessage'], resolve),
          meta: ['我的智云', '我的美城创新', '别人给我的留言']
        }, {
          path: '/innovation/orderList',
          name: 'orderList',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/innovation/orderList'], resolve),
          meta: ['我的智云', '我的美城创新', '供应信息订单列表']
        }, {
          path: '/innovation/returnChannel',
          name: 'returnChannel',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/innovation/returnChannel'], resolve),
          meta: ['我的智云', '我的美城创新', '退货通道']
        }, { // -------------------------------------------------------------------------------------------
          path: '/meichengService/information',
          name: 'information',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengService/information'], resolve),
          meta: ['我的智云', '我的美城服务', '供应信息']
        }, {
          path: '/meichengService/editInformation',
          name: 'editInformation',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengService/editInformation'], resolve),
        }, {
          path: '/meichengService/wantToBuy',
          name: 'wantToBuy',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengService/wantToBuy'], resolve),
          meta: ['我的智云', '我的美城服务', '求购信息']
        }, {
          path: '/meichengService/informationVIP',
          name: 'informationVIP',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengService/informationVIP'], resolve),
          meta: ['我的智云', '我的美城服务', '供应信息VIP']
        }, {
          path: '/meichengService/wantToBuyVIP',
          name: 'wantToBuyVIP',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengService/wantToBuyVIP'], resolve),
          meta: ['我的智云', '我的美城服务', '求购信息VIP']
        }, {
          path: '/meichengService/leaveAmessage',
          name: 'leaveAmessage',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengService/leaveAmessage'], resolve),
          meta: ['我的智云', '我的美城服务', '我给别人的留言']
        }, {
          path: '/meichengService/myMessage',
          name: 'myMessage',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengService/myMessage'], resolve),
          meta: ['我的智云', '我的美城服务', '别人给我的留言']
        }, {
          path: '/meichengService/orderList',
          name: 'orderList',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengService/orderList'], resolve),
          meta: ['我的智云', '我的美城服务', '供应信息订单列表']
        }, {
          path: '/meichengService/returnChannel',
          name: 'returnChannel',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/meichengService/returnChannel'], resolve),
          meta: ['我的智云', '我的美城服务', '退货通道']
        }, { // -------------------------------------------------------------------------------------------
          path: '/ventureCapital/information',
          name: 'information',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/ventureCapital/information'], resolve),
          meta: ['我的智云', '我的美城创投', '供应信息']
        }, {
          path: '/ventureCapital/editInformation',
          name: 'editInformation',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/ventureCapital/editInformation'], resolve),
        }, {
          path: '/ventureCapital/wantToBuy',
          name: 'wantToBuy',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/ventureCapital/wantToBuy'], resolve),
          meta: ['我的智云', '我的美城创投', '求购信息']
        }, {
          path: '/ventureCapital/informationVIP',
          name: 'informationVIP',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/ventureCapital/informationVIP'], resolve),
          meta: ['我的智云', '我的美城创投', '供应信息VIP']
        }, {
          path: '/ventureCapital/wantToBuyVIP',
          name: 'wantToBuyVIP',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/ventureCapital/wantToBuyVIP'], resolve),
          meta: ['我的智云', '我的美城创投', '求购信息VIP']
        }, {
          path: '/ventureCapital/leaveAmessage',
          name: 'leaveAmessage',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/ventureCapital/leaveAmessage'], resolve),
          meta: ['我的智云', '我的美城创投', '我给别人的留言']
        }, {
          path: '/ventureCapital/myMessage',
          name: 'myMessage',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/ventureCapital/myMessage'], resolve),
          meta: ['我的智云', '我的美城创投', '别人给我的留言']
        }, {
          path: '/ventureCapital/orderList',
          name: 'orderList',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/ventureCapital/orderList'], resolve),
          meta: ['我的智云', '我的美城创投', '供应信息订单列表']
        }, {
          path: '/ventureCapital/returnChannel',
          name: 'returnChannel',
          component: (resolve) =>
            require(['@/view/management/myZhiyun/ventureCapital/returnChannel'], resolve),
          meta: ['我的智云', '我的美城创投', '退货通道']
        }, {
          path: '/myCollection',
          name: 'myCollection',
          component: (resolve) =>
            require(['@/view/management/myCollection/myCollection'], resolve),
          meta: ['我的收藏', '我的收藏']
        }, {
          path: '/myMoney/browse',
          name: 'browse',
          component: (resolve) =>
            require(['@/view/management/myMoney/browse'], resolve),
          meta: ['我的资金', '我的资金', '账户浏览']
        }, {
          path: '/myMoney/creditDetails',
          name: 'creditDetails',
          component: (resolve) =>
            require(['@/view/management/myMoney/creditDetails'], resolve),
          meta: ['我的资金', '我的资金', '积分明细']
        }, {
          path: '/myMoney/capitalDetails',
          name: 'capitalDetails',
          component: (resolve) =>
            require(['@/view/management/myMoney/capitalDetails'], resolve),
          meta: ['我的资金', '我的资金', '资金明细']
        }, {
          path: '/myMoney/editadvertisingManagement',
          name: 'editadvertisingManagement',
          component: (resolve) =>
            require(['@/view/management/myMoney/editadvertisingManagement'], resolve),
          meta: ['我的资金', '我的资金', '帮助中心']
        }, {
          path: '/myAccount/address',
          name: 'address',
          component: (resolve) =>
            require(['@/view/management/myAccount/address'], resolve),
          meta: ['我的账号', '我的账号', '收货地址']
        }, {
          path: '/myAccount/addAddress',
          name: 'addAddress',
          component: (resolve) =>
            require(['@/view/management/myAccount/addAddress'], resolve),
        }, {
          path: '/myAccount/modifyData',
          name: 'modifyData',
          component: (resolve) =>
            require(['@/view/management/myAccount/modifyData'], resolve),
          meta: ['我的账号', '我的账号', '修改资料']
        }, {
          path: '/myPromotion/iWantTo',
          name: 'iWantTo',
          component: (resolve) =>
            require(['@/view/management/myPromotion/iWantTo'], resolve),
          meta: ['我的推广', '我的推广', '我要推广']
        }, {
          path: '/myPromotion/promotionMembers',
          name: 'promotionMembers',
          component: (resolve) =>
            require(['@/view/management/myPromotion/promotionMembers'], resolve),
          meta: ['我的推广', '我的推广', '我要推广会员']
        }, {
          path: '/myPromotion/promotionDetails',
          name: 'promotionDetails',
          component: (resolve) =>
            require(['@/view/management/myPromotion/promotionDetails'], resolve),
          meta: ['我的推广', '我的推广', '我要推广明细']
        }, {
          path: '/myPromotion/ofCommodities',
          name: 'ofCommodities',
          component: (resolve) =>
            require(['@/view/management/myPromotion/ofCommodities'], resolve),
          meta: ['我的推广', '我的推广', '我要推广商品']
        }, {
          path: '/myPromotion/promotionList',
          name: 'promotionList',
          component: (resolve) =>
            require(['@/view/management/myPromotion/promotionList'], resolve),
          meta: ['我的推广', '我的推广', '我要推广列表']
        }, {
          path: '/myPass/myPass',
          name: 'myPass',
          component: (resolve) =>
            require(['@/view/management/myPass/myPass'], resolve),
          meta: ['我的推广', '我的通证', '我要通证']
        }, {
          path: '/myPass/passOrder',
          name: 'passOrder',
          component: (resolve) =>
            require(['@/view/management/myPass/passOrder'], resolve),
          meta: ['我的推广', '我的通证', '通证订单']
        }]
      }]
    }
  ]
})
