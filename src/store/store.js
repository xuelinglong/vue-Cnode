import Vue from 'vue'
import Vuex from 'vuex'

import common from './common'
import topics from './topics'
import user from './user'
import login from './login'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
    topics,
    user,
    login
  }
})
