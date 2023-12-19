import {defineStore} from "pinia";
import {ref} from "vue";
import {Drink} from "@/stores/models/drink.model";

export const useDrinksStore = defineStore(
  'drinks',
  () => {
    const drinks = ref<Array<Drink>>([])
    const getDrinks = () => {

    }
  }
)