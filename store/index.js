export const state = () => ({
    sidebar: true,
    authenticated: false,
    token: null,
    user: []
})

export const mutations = {
    toggleSidenav(state) {
        state.sidebar = !state.sidebar
    },
    userLoggedIn(state) {
        state.authenticated = true
    },
    userLoggedOut(state) {
        state.authenticated = false
    },
    mutateToken: function (state, payload) {
        state.token = payload
    },
    mutateUser: function (state, payload) {
        state.user = payload
    },
}

export const actions = {
    // updateToken({ commit, state }, payload) {
    //     let data = JSON.parse(window.localStorage.getItem("data"));
    //     let token = data.token;
    //     state.token = token
    //     commit('mutateToken', payload)
    // },
    // updateUser({ commit, state }, payload) {
    //     let data = JSON.parse(window.localStorage.getItem("data"));
    //     let user = data.user;
    //     state.user = user
    //     commit('mutateUser', payload)
    //     console.log(state.user)
    // },
}