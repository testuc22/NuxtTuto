<template>
  <div>
    <!-- <Logo /> -->
    <b-list-group>
      <b-list-group-item>
    <Nuxt-link to="/">Home</Nuxt-link>        
      </b-list-group-item>
      <div v-if="!$auth.loggedIn">
        <b-list-group-item>
      <Nuxt-link to="/login">Login</Nuxt-link>    
        </b-list-group-item>
        <b-list-group-item>
      <Nuxt-link to="/register">Register</Nuxt-link>    
        </b-list-group-item>
      </div>
      <div v-else>
        <b-list-group-item>
    <b-button variant="outline-success" @click="logOutUser">Logout</b-button>   
      </b-list-group-item>
      </div>
      <b-list-group-item>
    <Nuxt-link to="/about-us">About us</Nuxt-link>    
      </b-list-group-item>
      <b-list-group-item>
    <Nuxt-link to="/mountains">Mountains</Nuxt-link>    
      </b-list-group-item>
    </b-list-group>
    <Nuxt />
  </div>
</template>
<script>
export default {
  methods:{
    async logOutUser() {
      await this.$auth.logout()
    }
  }
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #397c6d;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
a.nuxt-link-exact-active {
  color: #00c58e;
}
</style>
