import Vue from 'vue'
import Router from 'vue-router'
import AccountAchievements from './views/AccountAchievements.vue'
import AccountCreation from './views/AccountCreation.vue'
import AccountLogin from './views/AccountLogin.vue'
import AccountPasswordReset from './views/AccountPasswordReset.vue'
import AccountSettings from './views/AccountSettings.vue'
import Codex from './views/Codex.vue'
import Game from './views/Game.vue'
import GameActiveGames from './views/GameActiveGames.vue'
import GameCreation from './views/GameCreation.vue'
import GameDetail from './views/GameDetail.vue'
import GameList from './views/GameList.vue'
import Home from './views/Home.vue'
import MainMenu from './views/MainMenu.vue'
import PremiumStore from './views/PremiumStore.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/account/achievements',
      name: 'account-achievements',
      component: AccountAchievements
    },
    {
      path: '/account/create',
      name: 'account-creation',
      component: AccountCreation
    },
    {
      path: '/account/login',
      name: 'account-login',
      component: AccountLogin
    },
    {
      path: '/account/password-reset',
      name: 'account-password-reset',
      component: AccountPasswordReset
    },
    {
      path: '/account/settings',
      name: 'account-settings',
      component: AccountSettings
    },
    {
      path: '/codex',
      name: 'codex',
      component: Codex
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/game/active-games',
      name: 'game-active-games',
      component: GameActiveGames
    },
    {
      path: '/game/create',
      name: 'game-creation',
      component: GameCreation
    },
    {
      path: '/game/detail',
      name: 'game-detail',
      component: GameDetail
    },
    {
      path: '/game/list',
      name: 'game-list',
      component: GameList
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/main-menu',
      name: 'main-menu',
      component: MainMenu
    },
    {
      path: '/premium-store',
      name: 'premium-store',
      component: PremiumStore
    }
  ]
})