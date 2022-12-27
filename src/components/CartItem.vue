<template>
    <section class="cart">
        <div class="special-container" v-if="store.CART_ITEMS != 0">
            <div class="cart__content">
                <div class="cart__content-head">
                    <div class="cart__content-head-l">
                        <img src="@/assets/images/icons/cart-2.svg" alt="">
                        <h2 class="l-title">Корзина</h2>
                    </div>
                    <div class="cart__content-head-r">
                        <img src="@/assets/images/icons/trash.svg" alt="">
                        <p @click="ResetCart()" class="r-text">Очистить корзину</p>
                    </div>
                </div>
            </div>
            <PizzaOrder />
            <PizzaOrderNavigation />
        </div>
        <EmptyCart v-else />
    </section>
</template>

<script setup>
import PizzaOrder from './PizzaOrder.vue'
import PizzaOrderNavigation from './PizzaOrderNavigation.vue'
import EmptyCart from './EmptyCart.vue'
import { useStore } from '@/stores/store'

const store = useStore()

const ResetCart = () => {
    store.USER_CART_N = store.ALL_AMOUNT = store.ALL_PRICES = store.CART_ITEMS.length = 0
    store.CART_N_ITEMS = [0, 0, 0, 0]
}


</script>