/* const state = () => ({
    user:{}
});
const mutations = {
    SET_AUTH: (state, data) => {
        state.user = data;
    }
};
 
 const actions = {
    async nuxtServerInit ({ commit }, { req }) {
      let auth = null
      if (req.headers.cookie) {
          console.log(req.headers)
        // cookie found
        try {
          // check data user login with cookie
          const { data } = await this.$axios.$get('/auth/user')
          console.log(data,"data")
          // server return the data is cookie valid loggedIn is true
          auth = data // set the data auth
        } catch (err) {
            // console.log(this.$axios.headers,"data")
          // No valid cookie found
          auth = null
        }
      }
      commit('SET_AUTH', auth) // set state auth
    },
  }
  export default {
      state,
      mutations,
      actions
  } */