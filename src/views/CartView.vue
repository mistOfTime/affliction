<template>
  <div class="cart-page">
    <h1 class="page-title">YOUR CART</h1>

    <div v-if="cart.items.length === 0" class="empty">
      <p>Your cart is empty.</p>
      <router-link to="/collections/" class="shop-btn">CONTINUE SHOPPING</router-link>
    </div>

    <div v-else class="layout">
      <!-- Items -->
      <div class="items">
        <div v-for="item in cart.items" :key="`${item.id}-${item.size}`" class="item">
          <img :src="item.image" :alt="item.name" class="item-img" />
          <div class="item-info">
            <p class="item-name">{{ item.name }}</p>
            <p class="item-meta">Size: {{ item.size }}</p>
            <p class="item-price">₱{{ item.price.toLocaleString('en-PH', { minimumFractionDigits: 2 }) }}</p>
            <div class="qty-ctrl">
              <button @click="cart.updateQty(item.id, item.size, Math.max(1, item.qty - 1))">−</button>
              <span>{{ item.qty }}</span>
              <button @click="cart.updateQty(item.id, item.size, item.qty + 1)">+</button>
            </div>
          </div>
          <div class="item-right">
            <p class="item-total">₱{{ (item.price * item.qty).toLocaleString('en-PH', { minimumFractionDigits: 2 }) }}</p>
            <button class="remove-btn" @click="cart.removeItem(item.id, item.size)">✕</button>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div class="summary">
        <h2 class="summary-title">ORDER SUMMARY</h2>
        <div class="summary-row">
          <span>Subtotal</span>
          <span>₱{{ cart.totalPrice.toLocaleString('en-PH', { minimumFractionDigits: 2 }) }}</span>
        </div>
        <div class="summary-row">
          <span>Shipping</span>
          <span>FREE</span>
        </div>
        <div class="summary-row total">
          <span>TOTAL</span>
          <span>₱{{ cart.totalPrice.toLocaleString('en-PH', { minimumFractionDigits: 2 }) }}</span>
        </div>
        <router-link to="/checkout" class="checkout-btn">PROCEED TO CHECKOUT</router-link>
        <router-link to="/collections/" class="continue-link">← Continue Shopping</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart.js'
const cart = useCartStore()
</script>

<style scoped>
.cart-page { padding: 32px 24px 60px; }

.page-title {
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  letter-spacing: 4px;
  color: #fff;
  margin-bottom: 32px;
  border-left: 3px solid #cc2200;
  padding-left: 12px;
}

.empty {
  text-align: center;
  padding: 80px 0;
  color: #555;
}

.empty p {
  font-family: 'Oswald', sans-serif;
  font-size: 18px;
  letter-spacing: 2px;
  margin-bottom: 24px;
}

.shop-btn {
  display: inline-block;
  border: 1px solid #cc2200;
  color: #cc2200;
  padding: 12px 28px;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 2px;
  font-size: 13px;
  transition: all 0.2s;
}

.shop-btn:hover { background: #cc2200; color: #fff; }

.layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 40px;
  align-items: start;
}

.item {
  display: flex;
  gap: 16px;
  padding: 20px 0;
  border-bottom: 1px solid #1e1e1e;
}

.item-img {
  width: 100px;
  aspect-ratio: 3/4;
  object-fit: cover;
}

.item-info { flex: 1; }

.item-name {
  font-family: 'Oswald', sans-serif;
  font-size: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #eee;
  margin-bottom: 4px;
}

.item-meta { font-size: 12px; color: #666; margin-bottom: 6px; }

.item-price { font-size: 14px; color: #aaa; margin-bottom: 12px; }

.qty-ctrl {
  display: flex;
  align-items: center;
  border: 1px solid #333;
  width: fit-content;
}

.qty-ctrl button {
  background: #1a1a1a;
  border: none;
  color: #eee;
  width: 32px;
  height: 32px;
  font-size: 16px;
  transition: background 0.2s;
}

.qty-ctrl button:hover { background: #cc2200; }

.qty-ctrl span {
  width: 40px;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  font-size: 14px;
}

.item-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
}

.item-total {
  font-family: 'Oswald', sans-serif;
  font-size: 16px;
  color: #fff;
}

.remove-btn {
  background: none;
  border: none;
  color: #555;
  font-size: 16px;
  transition: color 0.2s;
}

.remove-btn:hover { color: #cc2200; }

.summary {
  background: #141414;
  border: 1px solid #222;
  padding: 24px;
  position: sticky;
  top: 100px;
}

.summary-title {
  font-family: 'Oswald', sans-serif;
  font-size: 16px;
  letter-spacing: 3px;
  color: #fff;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #222;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #888;
  margin-bottom: 12px;
}

.summary-row.total {
  font-family: 'Oswald', sans-serif;
  font-size: 18px;
  color: #fff;
  border-top: 1px solid #222;
  padding-top: 16px;
  margin-top: 8px;
}

.checkout-btn {
  display: block;
  background: #cc2200;
  color: #fff;
  text-align: center;
  padding: 14px;
  font-family: 'Oswald', sans-serif;
  font-size: 14px;
  letter-spacing: 3px;
  margin-top: 20px;
  transition: background 0.2s;
}

.checkout-btn:hover { background: #aa1a00; }

.continue-link {
  display: block;
  text-align: center;
  margin-top: 12px;
  font-size: 12px;
  color: #666;
  letter-spacing: 1px;
  transition: color 0.2s;
}

.continue-link:hover { color: #cc2200; }

@media (max-width: 768px) {
  .layout { grid-template-columns: 1fr; }
}
</style>
