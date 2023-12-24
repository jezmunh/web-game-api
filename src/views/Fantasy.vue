<script setup>
import GameCard from "../components/GameCard.vue"
</script>

<template>
    <div>
        <section>
            <h1 class="title">Fantasy</h1>
            <div class="block">
                <GameCard v-for="(item, index) in 3" :key="index" />
            </div>
        </section>
    </div>
</template>

<style scoped>
.title {
    font-size: 40px;
    text-align: center;
    margin: 20px 0;
    color: white;
}
.block {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin: 0 50px;
}
</style>