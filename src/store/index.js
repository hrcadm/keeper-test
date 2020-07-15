import Vue from 'vue'
import Vuex from 'vuex'
import CardData from '../../resources/user_roles.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roleSearch: '',
    roleFilter: '',
    cardData: CardData
  },
  getters: {
    filteredCardData: state => {
      if (state.roleFilter === 'active') {
        return state.cardData.filter(data => data.name.slice(0, state.roleSearch.length).toLowerCase() === state.roleSearch.toLowerCase() && data.active === true)
      } else if (state.roleFilter === 'inactive') {
        return state.cardData.filter(data => data.name.slice(0, state.roleSearch.length).toLowerCase() === state.roleSearch.toLowerCase() && data.active === false)
      } else {
        return state.cardData.filter(data => data.name.slice(0, state.roleSearch.length).toLowerCase() === state.roleSearch.toLowerCase())
      }
    },
    returnRoleCardById: (state) => (id) => {
      return state.cardData.filter(data => data.id === id)
    }
  },
  mutations: {
    setRoleSearch (state, value) {
      state.roleSearch = value
    },
    setRoleFilter (state, value) {
      state.roleFilter = value
    }
  },
  actions: {
    setRoleSearch (context, value) {
      context.commit('setRoleSearch', value)
    },
    setRoleFilter (context, value) {
      context.commit('setRoleFilter', value)
    }
  }
})
