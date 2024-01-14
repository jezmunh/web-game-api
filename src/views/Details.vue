<script setup>
import {useRoute} from "vue-router";
import * as api from "../api/api.js";
import {onMounted, ref} from "vue";

const route = useRoute();
const detail = ref();

onMounted(async()=> {
    detail.value = await api.DetailGame(route.params.id);
    console.log(router);
})


</script>
<template>
    <div>
        <section v-if="detail">
            <div>
            <nav>
                <img :src="screen.image" v-for="(screen, index) in detail.screenshots" :key="index" />
            </nav>            
            <p> {{detail.description}} </p>
            </div>
        </section>
    </div>
</template>
<style scoped>
div {
    padding: 20px;
}
nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    grid-gap: 50px;
}
img {
    width: 40%;
    aspect-ratio: 16/9;
}
p {
    font-size: 24px;
    margin-top: 20px;
    color: #aaa;
    text-align: center;
}
</style>