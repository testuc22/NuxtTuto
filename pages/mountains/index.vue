<template>
    <div>
    <ul>
      <li variant="primary" v-for="mountain in mountains" :key="mountain.title">
         <!-- <Nuxt-link :to="{name:'mountains-slug',params:{slug:mountain.slug}}">  -->
             {{mountain.title}}
         <!-- </Nuxt-link>     -->
      </li>
      </ul>
      <button @click="testApi">Test Api</button>
    </div>
</template>
<script>
export default {
    middleware: 'auth',
    head(){
        return {
            title:'Mountains',
            meta:[
                {
                    hid:'description',
                    name:'description',
                    content:'mounatins meta'
                }
            ]
        }
    },
    async asyncData({$http,$axios}) {
        // const mountains= await $http.$get('https://api.nuxtjs.dev/mountains');
        const mountains= await $axios.$get('/posts');
        return {mountains}
    },
    methods:{
        async testApi(){
            const res=await this.$axios.$get('/posts');
            console.log(res)
        }
    }
}
</script>