<template>
    <article>
        <h1>{{mountain.title}}</h1>
        <section>
        <img :src="mountain.image" alt="">
        <p>{{mountain.description}}</p>
        </section>
        <button @click="goBack">Go Back</button>
    </article>
</template>
<script>
export default {
    async asyncData({$http,params}) {
        const mountain=await $http.$get(`https://api.nuxtjs.dev/mountains/${params.slug}`);
        return {
            mountain
            }
    },
    methods:{
        goBack() {
            return this.$router.go(-1);
        }
    }
}
</script>