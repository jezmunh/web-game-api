<template>
    <div>
        <img src="https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg" />
        <h1>Game</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Praesent efficitur nisi vitae sodales iaculis. 
        Sed ut velit quam. Donec fringilla erat a erat lobortis aliquet. 
        Proin pellentesque velit efficitur orci vestibulum, ac rhoncus quam tristique. Morbi malesuada ut lacus a vestibulum. 
        Nullam congue ac odio eu ornare. Proin commodo blandit placerat. 
        Sed semper, nibh vitae congue dapibus, tellus leo scelerisque nulla, nec fermentum risus eros nec tellus. Nulla condimentum sapien at faucibus tempus.
        </p>
        <nav>
            <i class="fas fa-desktop"></i>
            <h4>Windows</h4>
        </nav>
        <nav>
            <i class="far fa-clock"></i>
            <h4>date</h4>
        </nav>
        <router-link to="/">More details</router-link>
    </div>
</template>

<style scoped>
div {
    width: 500px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background: #32383e;
    color: #aaa;
    border-radius: 10px;
}
img {
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 10px;
}
h1 {
    font-size: 30px;
    margin-top: 20px;
}
p { 
    font-size: 20px;
    margin-top: 20px;
    line-height: 120%;
}
nav {
    display: flex;
    margin-top: 20px;
}
h4, i {
    font-size: 20px;
    margin-right: 10px;
}
a {
    padding: 10px 20px;
    margin-left: auto;
    font-size: 24px;
    background: #1F658A;
    color: white;
    text-decoration: none;
    
}
</style>