import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const isOpen = ref(false)

  const totalItems = computed(() => items.value.reduce((sum, i) => sum + i.qty, 0))
  const totalPrice = computed(() => items.value.reduce((sum, i) => sum + i.price * i.qty, 0))

  function addItem(product, size) {
    const existing = items.value.find(i => i.id === product.id && i.size === size)
    if (existing) {
      existing.qty++
    } else {
      items.value.push({ ...product, size, qty: 1 })
    }
    isOpen.value = true
  }

  function removeItem(id, size) {
    items.value = items.value.filter(i => !(i.id === id && i.size === size))
  }

  function updateQty(id, size, qty) {
    const item = items.value.find(i => i.id === id && i.size === size)
    if (item) item.qty = qty
  }

  function clearCart() {
    items.value = []
  }

  return { items, isOpen, totalItems, totalPrice, addItem, removeItem, updateQty, clearCart }
})
