export default {
    setResponse({ commit }, data) {
        commit('SET_RESPONSE', data)
    },
    setUser({ commit }, data) {
        commit('SET_USER', data)
    },
    setToken({ commit }, data) {
        commit('SET_TOKEN', data)
    }
}
