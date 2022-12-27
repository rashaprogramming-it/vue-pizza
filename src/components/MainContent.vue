<template>
    <section class="main__content">
        <div class="main__content-block" v-for="pizza in store.db" :key="pizza.id">
            <img :src=pizza.img alt="" class="main__content-block-img">
            <h2 class="main__content-block-title">{{ pizza.name }}</h2>
            <div class="main__content-block-nav">
                <div class="block-nav-top">
                    <button :disabled="store.CART_N_ITEMS[pizza.id] != 0" class="block-nav-top-text"
                        @click="store.PIZZA_TYPES_IDXS[pizza.id] = pizza.id, store.PIZZA_CURRENT_TYPE = 0"
                        :class="{ active: store.PIZZA_TYPES_IDXS[pizza.id] == pizza.id }">тонкое</button>

                    <button :disabled="store.CART_N_ITEMS[pizza.id] != 0" class="block-nav-top-text"
                        @click="store.PIZZA_TYPES_IDXS[pizza.id] = pizza.id + 1, store.PIZZA_CURRENT_TYPE = 1"
                        :class="{ active: store.PIZZA_TYPES_IDXS[pizza.id] == pizza.id + 1 }">традиционное</button>
                </div>
                <div class="block-nav-bottom">
                    <button :disabled="store.CART_N_ITEMS[pizza.id] != 0" class="block-nav-bottom-btn"
                        @click="store.PIZZA_SIZES_IDXS[pizza.id] = pizza.id, store.PIZZA_CURRENT_SIZE = 26"
                        :class="{ active: store.PIZZA_SIZES_IDXS[pizza.id] == pizza.id }">26
                    </button>
                    <button :disabled="store.CART_N_ITEMS[pizza.id] != 0" class="block-nav-bottom-btn"
                        @click="store.PIZZA_SIZES_IDXS[pizza.id] = pizza.id + 1, store.PIZZA_CURRENT_SIZE = 30"
                        :class="{ active: store.PIZZA_SIZES_IDXS[pizza.id] == pizza.id + 1 }">30
                    </button>
                    <button :disabled="store.CART_N_ITEMS[pizza.id] != 0" class="block-nav-bottom-btn"
                        @click="store.PIZZA_SIZES_IDXS[pizza.id] = pizza.id + 2, store.PIZZA_CURRENT_SIZE = 40"
                        :class="{ active: store.PIZZA_SIZES_IDXS[pizza.id] == pizza.id + 2 }">40
                    </button>
                </div>
            </div>
            <div class="main__content-block-add">
                <div class="price">от {{ pizza.price }} ₽</div>
                <button class="add" :class="{ active: store.CART_N_ITEMS[pizza.id] != 0 }" @click="addCart(pizza)"
                    :disabled="store.CART_N_ITEMS[pizza.id] != 0">
                    <svg v-if="!store.CART_N_ITEMS[pizza.id] != 0" width="12" height="12" viewBox="0 0 12 12"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            class="add-svg" fill="#EB5A1E" />
                    </svg>
                    <p class="add-text">{{ store.CART_N_ITEMS[pizza.id] != 0 ? 'Добавлено' : 'Добавить' }}</p>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useStore } from '@/stores/store'
import { useToast } from "vue-toastification"

const store = useStore()

const addCart = (pizza) => {
    const toast = useToast()
    const pizzaID = pizza.id // получаем ID иццы 
    const pizzaNAME = pizza.name // получаем имя пиццы
    const pizzaTYPE = store.PIZZA_CURRENT_TYPE == 0 ? 'тонкое' : 'традиционное' // получаем и определяем выбранный тип
    const pizzaSIZE = store.PIZZA_CURRENT_SIZE // получаем и определяем выбранный размер
    store.PIZZA_CURRENT_TYPE = 0 // обнуляем тип до исходного значения
    store.PIZZA_CURRENT_SIZE = 26 // обнуляем размер до исходного значения
    const pizzaPRICE = pizza.price // получаем цену пиццы 
    const pizzaIMG = pizza.img // получаем картинку пиццы

    store.USER_CART_N++ // прибавляем значение рядом с иконкой корзины
    store.CART_N_ITEMS[pizzaID]++ // прибавляем значение кол-ва самой пиццы

    store.CART_ITEMS.push({
        pizza_id: pizzaID,
        name: pizzaNAME,
        type: pizzaTYPE,
        size: pizzaSIZE,
        price: pizzaPRICE,
        img: pizzaIMG,
        amount: store.CART_N_ITEMS[pizza.id],
    })

    toast.success("Добавлено в корзину!", {
        position: "top-center",
        timeout: 2000,
        closeOnClick: false,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        draggable: false,
        draggablePercent: 0,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: false,
        icon: true,
        rtl: false
    });

    store.ALL_PRICES += pizzaPRICE
}

</script>