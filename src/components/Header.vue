<template>
    <header>
        <router-link to="/">Home</router-link>
        <router-link to="/fantasy">Fantasy</router-link>
        <router-link to="/royal">Royal</router-link>
        <router-link to="/rpg">RPG</router-link>
        <router-link to="/shooter">Shooter</router-link>
        <router-link to="/strategy">Strategy</router-link>
    </header>
</template>
<style scoped>
header {
    display: flex;
    justify-content: space-evenly;
    padding: 15px;
    color: #aaa;
    font-size: 24px;
    background: #32383e;
}
a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s;
}
a:hover {
    color: white;
}
.router-link-active {
    color: white;
}
</style>