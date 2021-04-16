<template>
    <div class="container">
        <form @submit.prevent="registerUser">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="email" id="email" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="password" id="password" class="form-control" required>
            </div>
            <div class="alert alert-danger" v-if="error">
                <p>User Already Exists</p>
            </div>
            <button type="submit" class="btn btn-success">Register</button>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            email:'',
            password:'',
            error:false
        }
    },
    methods:{
        registerUser() {
            console.log(this.$auth.strategy.token.get())
            this.$axios.$post('/auth/register',{
                email:this.email,
                password:this.password
            }).then(resp=>{
                console.log(resp)
                if (resp.hasOwnProperty('error')) {
                    this.error=true;
                }
                else {
                    this.$router.push('login')

                }
                // this.$auth.strategy.token.set('local','Bearer '+resp.accessToken);
                // this.$auth.strategy.token.set('local',resp.refreshToken);
                // this.$axios.setHeader('Authorization','Bearer '+resp.accessToken)
            })
            
        }
    }
}
</script>