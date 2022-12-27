<template>
    <header class="header">
        <div class="container">
            <nav class="header__nav">
                <router-link to="/" class="header__nav-logo">
                    <img src="@/assets/images/logo.png" alt="logo" class="logo">
                    <div class="logo-info">
                        <h1 class="logo-info-title"><span>VUE</span> <span>PIZZA</span></h1>
                        <p class="logo-info-text">самая вкусная пицца во вселенной</p>
                    </div>
                </router-link>
                <div class="header__nav-custom" v-if="route.path == '/'">
                    <div class="custom-left">
                        <span class="custom-left-n">{{ store.USER_MONEY }}</span>
                        <span class="custom-left-val">₽</span>
                    </div>
                    <router-link to="/my-cart" class="custom-right">
                        <img src="@/assets/images/icons/cart.svg" alt="cart-icon" class="custom-right-img">
                        <div class="custom-right-n">{{ store.USER_CART_N }}</div>
                    </router-link>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { useStore } from '@/stores/store'
import { useRoute } from 'vue-router'

const store = useStore()
const route = useRoute()
</script>