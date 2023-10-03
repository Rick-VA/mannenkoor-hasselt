import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createRouter} from "vue-router";

const app = createApp(App)

app.use(router)

app.mount('#app')


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n =>
 n.addEventListener("click", () => {
     hamburger.classList.remove("active");
     navMenu.classList.remove("active");
 }));
