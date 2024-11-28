import { createStore } from 'vuex';

const store = createStore({
    state: {
        selectedLink: 'login', // Default selected link
        user: { isAuthenticated: false }
    },
    mutations: {
        setSelectedLink(state, link) {
            state.selectedLink = link;
        },
        setUser(state, user) {
            state.user = user;
        },
    },
    actions: {
        updateSelectedLink({ commit }, link) {
            commit('setSelectedLink', link);
        },
        loginUser({ commit }, user) {
            user.isAuthenticated = true;
            commit('setUser', user);
        },
        logoutUser({ commit }) {
            const user = { 
                isAuthenticated: false
            };
            commit('setUser', user);
        },
    },
    getters: {
        selectedLink: (state) => state.selectedLink,
        isAuthenticated: (state) => state.user.isAuthenticated,
        user: (state) => state.user,
    },
});

export default store;