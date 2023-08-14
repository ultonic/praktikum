const state = {
    isAuthenticated: false,
    user: null,
  };
  
  const mutations = {
    setAuthentication(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    setUser(state, user) {
      state.user = user;
    },
  };
  
  const actions = {
    login({ commit }) {
      commit('setAuthentication', true);
    },
    logout({ commit }) {
      commit('setAuthentication', false);
    },
  };
  
  const getters = {
    isAuthenticated: state => state.isAuthenticated,
    user: state => state.user,
  };
  
  export default {
    state,
    mutations,
    actions,
    getters,
  };
  