import { defineStore } from 'pinia'
import { useToast } from "vue-toastification"
import  imgUrlOne  from '../assets/images/pizza-1.jpg'
import  imgUrlTwo  from '../assets/images/pizza-2.jpg'
import  imgUrlThree  from '../assets/images/pizza-3.jpg'
import  imgUrlFour  from '../assets/images/pizza-4.jpg'

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    USER_MONEY: 50000,
    USER_CART_N: 0,
    BTN_ACTIVE: 0,
    CURRENT_PIZZA: 'Все пиццы',
    SORT_MENU_ACTIVE: false,
    SORT_MENU_DEFAULT_TEXT: 'популярности',
    NAV_BTNS: [
      { content: 'Все', subcontent: 'Все пиццы' },
      { content: 'Мясные', subcontent: 'Мясные пиццы' },
      { content: 'Вегетарианская', subcontent: 'Вегетарианские пиццы' },
      { content: 'Гриль', subcontent: 'Гриль пиццы' },
      { content: 'Острые', subcontent: 'Острые пиццы' },
    ],
    SORT_NAMES: [
      { name: 'популярности' },
      { name: 'цене' },
      { name: 'алфавиту' }
    ],
    db: [
      {
        id: 0, name: 'Чизбургер-пицца',
        price: 395, img: imgUrlOne,
      },
      {
        id: 1, name: 'Сырная',
        price: 450, img: imgUrlTwo,
      },
      {
        id: 2, name: 'Креветки по-азиатски',
        price: 290, img: imgUrlThree,
      },
      {
        id: 3, name: 'Сырный цыпленок',
        price: 385, img: imgUrlFour,
      }
    ],
    PIZZA_TYPES_IDXS: [0, 1, 2, 3],
    PIZZA_SIZES_IDXS: [0, 1, 2, 3],
    CART_N_ITEMS: [0, 0, 0, 0], // каждый элемент определяет кол-во пицц каждой карточки пиццы
    CART_ITEMS: [], // корзина
    PIZZA_CURRENT_TYPE: 0,
    PIZZA_CURRENT_SIZE: 26,
    ALL_AMOUNT: 0,
    ALL_PRICES: 0,
    DISABLE_PAY_BTN: false
  }),
  actions: {
    sortPizza() {
      this.db = [
        {
          id: 0, name: 'Чизбургер-пицца',
          price: 395, img: imgUrlOne,
        },
        {
          id: 1, name: 'Сырная',
          price: 450, img: imgUrlTwo,
        },
        {
          id: 2, name: 'Креветки по-азиатски',
          price: 290, img: imgUrlThree,
        },
        {
          id: 3, name: 'Сырный цыпленок',
          price: 385, img: imgUrlFour,
        }
      ]
      if (this.CURRENT_PIZZA == 'Мясные пиццы') {
        return this.db = this.db.filter((el) => el.id == 0)
      } else if (this.CURRENT_PIZZA == 'Вегетарианские пиццы') {
        return this.db = this.db.filter((el) => el.id == 1)
      } else if (this.CURRENT_PIZZA == 'Гриль пиццы') {
        return this.db = this.db.filter((el) => el.id == 3)
      } else if (this.CURRENT_PIZZA == 'Острые пиццы') {
        return this.db = this.db.filter((el) => el.id == 2)
      }
    },
    sortPizzaPrices() {
      if (this.SORT_MENU_DEFAULT_TEXT == 'цене') {
        this.db = [
          {
            id: 2, name: 'Креветки по-азиатски',
            price: 290, img: imgUrlThree,
          },
          {
            id: 3, name: 'Сырный цыпленок',
            price: 385, img: imgUrlFour,
          },
          {
            id: 0, name: 'Чизбургер-пицца',
            price: 395, img: imgUrlOne,
          },
          {
            id: 1, name: 'Сырная',
            price: 450, img: imgUrlTwo,
          }
        ]
      } else if (this.SORT_MENU_DEFAULT_TEXT == 'алфавиту') {
        this.db = [
          {
            id: 2, name: 'Креветки по-азиатски',
            price: 290, img: imgUrlThree,
          },
          {
            id: 1, name: 'Сырная',
            price: 450, img: imgUrlTwo,
          },
          {
            id: 3, name: 'Сырный цыпленок',
            price: 385, img: imgUrlFour,
          },
          {
            id: 0, name: 'Чизбургер-пицца',
            price: 395, img: imgUrlOne,
          }
        ]
      } else {
        this.db = [
          {
            id: 0, name: 'Чизбургер-пицца',
            price: 395, img: imgUrlOne,
          },
          {
            id: 1, name: 'Сырная',
            price: 450, img: imgUrlTwo,
          },
          {
            id: 2, name: 'Креветки по-азиатски',
            price: 290, img: imgUrlThree,
          },
          {
            id: 3, name: 'Сырный цыпленок',
            price: 385, img: imgUrlFour,
          }
        ]
      }
    },
    pay() {
      const toast = useToast()

      this.USER_MONEY < 0 ? this.USER_MONEY = 0 : this.USER_MONEY

      this.DISABLE_PAY_BTN = true

      setTimeout(() => {
        this.DISABLE_PAY_BTN = false
      }, 5000)

      if (this.USER_MONEY < this.ALL_PRICES) {
        toast.error("Недостаточно средств!", {
          position: "top-center",
          timeout: 5000,
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
      } else {
        this.USER_MONEY -= this.ALL_PRICES
        this.ALL_AMOUNT = this.ALL_PRICES = this.USER_CART_N = this.CART_ITEMS.length = 0
        this.CART_N_ITEMS = [0, 0, 0, 0]
        this.PIZZA_TYPES_IDXS = this.PIZZA_SIZES_IDXS = [0, 1, 2, 3]

        toast.warning("Покупка совершена успешно!", {
          position: "top-center",
          timeout: 5000,
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
      }

    },
  },
  getters: {
  }
})
