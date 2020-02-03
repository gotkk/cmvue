const axios = require('axios');

const state = {
    user: ""
}

const getters = {
    user: state => state.user
}

const actions = {
    getUser({commit}) {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                commit('setUser',res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const mutations = {
    setUser(state, user) {
        state.user = user
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}

