export const state = () => ({
    sidebar: true,
    authenticated: false,
    token: "",
    user: null
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
    mutateToken: function (state) {
        state.token = JSON.parse(window.localStorage.getItem("token"));
    },
    mutateUser: function (state) {
        state.user = JSON.parse(window.localStorage.getItem("user"))
    },
}
