export const state = () => ({
    sidebar: true,
})

export const mutations = {
    toggleSidenav(state) {
        state.sidebar = !state.sidebar
    },
}