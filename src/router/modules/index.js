const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout'),
    children:[
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '主页',
        },
      },
      {
        path: 'trade',
        name: 'trade',
        component: () => import('@/views/trade/index.vue'),
        meta: {
          title: '场外交易',
        },
      },
      {
        path: '/assets',
        name: 'assets',
        redirect: '/assets/myAssets',
        component: () => import('@/views/assets/index.vue'),
        meta: { title: '资产' },
        children:[
          {
            path: 'myAssets',
            name: 'myAssets',
            component: () => import('@/views/assets/myAssets/index.vue'),
            meta: { title: '我的资产' },
          },
          {
            path: 'changeRecords',
            name: 'changeRecords',
            component: () => import('@/views/assets/changeRecords/index.vue'),
            meta: { title: '资产变动记录' },
          },
          {
            path: 'tradeRecords',
            name: 'tradeRecords',
            component: () => import('@/views/assets/tradeRecords/index.vue'),
            meta: { title: '场外交易记录' },
          },
          {
            path: 'auth',
            name: 'auth',
            component: () => import('@/views/assets/auth/index.vue'),
            meta: { title: '身份认证' },
          },
          {
            path: 'deposit',
            name: 'deposit',
            component: () => import('@/views/assets/deposit-withdraw/Deposit.vue'),
            meta: { title: '充币' },
          },
          {
            path: 'withdraw',
            name: 'withdraw',
            component: () => import('@/views/assets/deposit-withdraw/Withdraw.vue'),
            meta: { title: '提币' },
          }
        ]
      },
      {
        path: 'quickBuy',
        name: 'quickBuy',
        component: () => import('@/views/trade/quick-buy-popup/index.vue'),
        meta: {
          title: '一键购买',
        }
      },
      {
        path: 'quickBuyDetail',
        name: 'quickBuyDetail',
        component: () => import('@/views/trade/quick-buy-detail/index.vue'),
        meta: {
          title: '购买详情',
        }
      },
      {
        path: 'quickSell',
        name: 'quickSell',
        component: () => import('@/views/trade/quick-sell-popup/index.vue'),
        meta: {
          title: '一键出售',
        }
      },
      {
        path: 'quickSellDetail',
        name: 'quickSellDetail',
        component: () => import('@/views/trade/quick-sell-detail/index.vue'),
        meta: {
          title: '出售详情',
        }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/About.vue')
      },
    ]
  }
]

export default routes
