<template>
    <div class="cart__nav">
        <div class="cart__nav-top">
            <p class="cart__nav-top-text">Всего пицц: <span>{{ store.ALL_AMOUNT }}</span> шт.</p>
            <p class="cart__nav-top-sum">Сумма заказа: <span>{{ store.ALL_PRICES }} ₽</span></p>
        </div>
        <div class="cart__nav-bottom">
            <router-link to="/" class="cart__nav-bottom-btn" id="exit">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
                <span>Вернуться назад</span>
            </router-link>
            <button @click="store.pay()" :disabled="store.DISABLE_PAY_BTN" class="cart__nav-bottom-btn" id="paid">
                Оплатить сейчас
            </button>
        </div>
    </div>  
</template>

<script setup>
import { useStore } from '@/stores/store'

const store = useStore()

</script>