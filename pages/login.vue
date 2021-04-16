<template>
    <div class="container">
        <form @submit.prevent="loginUser">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="email" id="email" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="password" id="password" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-success">Login</button>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            email:'',
            password:''
        }
    },
    methods:{
        loginUser() {
            // this.$axios.$post('/auth/login',{
            //     email:this.email,
            //     password:this.password
            // }).then(resp=>{
                // console.log(resp)
                // this.$auth.strategy.token.set('local','Bearer '+resp.accessToken);
                // this.$auth.strategy.token.set('local',resp.refreshToken);
                this.$auth.loginWith('local',{data:{
                    email:this.email,
                    password:this.password
                }}).then(resp=>{
                    this.$axios.setHeader('Authorization','Bearer '+resp.data.accessToken)
                    this.$auth.setUser(resp.data.userData)
                    // this.$auth.fetchUser()
                this.$router.push('mountains')
                })
            // })
            
        }
    }
}
</script>