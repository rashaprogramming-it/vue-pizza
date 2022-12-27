<template>
    <section class="section__nav">
        <ul class="section__nav-list1">
            <li class="list1-btn" 
                v-for="(btn, idx) in store.NAV_BTNS" 
                :key="idx"
                @click="store.BTN_ACTIVE = idx; store.CURRENT_PIZZA = btn.subcontent, sortPizzaTypes()"
                :class="{ active : store.BTN_ACTIVE == idx }">
                {{ btn.content }}
            </li>
        </ul>
        <ul class="section__nav-list2" v-if="store.CURRENT_PIZZA == 'Все пиццы' ? true : false">
            <div class="section__nav-list2-sort">
                Сортировка по: 
                <div class="list2-sort-btn"
                     @click="store.SORT_MENU_ACTIVE = !store.SORT_MENU_ACTIVE">
                     {{ store.SORT_MENU_DEFAULT_TEXT }}
                </div>
            </div>
            <Transition name="bounce">
                <div class="dropdown" v-if="store.SORT_MENU_ACTIVE">
                    <ul class="dropdown__menu">
                        <li class="dropdown__menu-link" 
                            v-for="(sort_name, idx) in store.SORT_NAMES"
                            :key="idx"
                            :class="{ active: sort_name.name == store.SORT_MENU_DEFAULT_TEXT }"
                            @click="store.SORT_MENU_DEFAULT_TEXT = sort_name.name; store.SORT_MENU_ACTIVE = false; sortPizzaPrice()">
                            {{ sort_name.name }}
                        </li>
                    </ul>
                </div>
            </Transition>
        </ul>
    </section>
    <h2 class="current-pizza">
        {{ store.CURRENT_PIZZA }}
    </h2>
</template>

<script setup>
import { useStore } from '@/stores/store'

const store = useStore()

const sortPizzaTypes = () => store.sortPizza()
const sortPizzaPrice = () => store.sortPizzaPrices()
</script>