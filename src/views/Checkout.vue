<template>
  <div class="checkout">

    <!-- Success State -->
    <div v-if="orderPlaced" class="success">
      <div class="success-icon">✓</div>
      <h2>ORDER CONFIRMED</h2>
      <p>Thanks, {{ form.firstName }}! We'll send updates to {{ form.email }}.</p>
      <p class="order-num">{{ orderNumber }}</p>
      <router-link to="/" class="home-btn">CONTINUE SHOPPING</router-link>
    </div>

    <!-- Checkout Flow -->
    <div v-else class="layout">

      <!-- Left: Steps -->
      <div class="steps-wrap">

        <!-- Step Indicator -->
        <div class="step-indicator">
          <div class="step" :class="{ active: step === 1, done: step > 1 }" @click="step > 1 && (step = 1)">
            <span class="step-num">{{ step > 1 ? '✓' : '1' }}</span>
            <span>Delivery</span>
          </div>
          <div class="step-line"></div>
          <div class="step" :class="{ active: step === 2 }">
            <span class="step-num">2</span>
            <span>Payment</span>
          </div>
        </div>

        <!-- Step 1: Delivery -->
        <form v-if="step === 1" class="form" @submit.prevent="step = 2">
          <div class="row-2">
            <div class="field">
              <label>First Name</label>
              <input v-model="form.firstName" required placeholder="John" />
            </div>
            <div class="field">
              <label>Last Name</label>
              <input v-model="form.lastName" required placeholder="Doe" />
            </div>
          </div>
          <div class="field">
            <label>Email</label>
            <input v-model="form.email" type="email" required placeholder="you@email.com" />
          </div>
          <div class="row-2">
            <div class="field">
              <label>City</label>
              <input v-model="form.city" required placeholder="Manila" />
            </div>
            <div class="field">
              <label>Postal Code</label>
              <input v-model="form.postal" required placeholder="1000" />
            </div>
          </div>
          <div class="field">
            <label>Street Address</label>
            <input v-model="form.address" required placeholder="123 Street, Barangay" />
          </div>
          <button type="submit" class="next-btn">CONTINUE TO PAYMENT →</button>
        </form>

        <!-- Step 2: Payment -->
        <form v-if="step === 2" class="form" @submit.prevent="placeOrder">
          <div class="demo-notice">🔒 Demo only — no real payment is processed.</div>
          <div class="field">
            <label>Card Number</label>
            <input placeholder="1234 5678 9012 3456" maxlength="19" />
          </div>
          <div class="row-2">
            <div class="field">
              <label>Expiry</label>
              <input placeholder="MM / YY" maxlength="7" />
            </div>
            <div class="field">
              <label>CVV</label>
              <input placeholder="•••" maxlength="3" type="password" />
            </div>
          </div>
          <div class="field">
            <label>Name on Card</label>
            <input :placeholder="`${form.firstName} ${form.lastName}`" />
          </div>
          <div class="pay-methods">
            <span v-for="m in ['VISA', 'MC', 'AMEX', 'GCash']" :key="m" class="pay-badge">{{ m }}</span>
          </div>
          <button type="submit" class="next-btn">
            PLACE ORDER · ₱{{ cart.totalPrice.toLocaleString('en-PH', { minimumFractionDigits: 2 }) }}
          </button>
        </form>

      </div>

      <!-- Right: Order Summary -->
      <div class="summary">
        <h2 class="summary-title">YOUR ORDER</h2>
        <div v-for="item in cart.items" :key="`${item.id}-${item.size}`" class="summary-item">
          <div class="img-wrap">
            <img :src="item.image" :alt="item.name" />
            <span class="qty-badge">{{ item.qty }}</span>
          </div>
          <div class="item-info">
            <p class="s-name">{{ item.name }}</p>
            <p class="s-meta">Size: {{ item.size }}</p>
          </div>
          <p class="s-price">₱{{ (item.price * item.qty).toLocaleString('en-PH', { minimumFractionDigits: 2 }) }}</p>
        </div>
        <div class="divider"></div>
        <div class="total-row">
          <span>TOTAL</span>
          <span class="total-val">₱{{ cart.totalPrice.toLocaleString('en-PH', { minimumFractionDigits: 2 }) }}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useCartStore } from '../stores/cart.js'

const cart = useCartStore()
const step = ref(1)
const orderPlaced = ref(false)
const orderNumber = ref('')

const form = reactive({
  firstName: '', lastName: '', email: '',
  address: '', city: '', postal: ''
})

function placeOrder() {
  orderNumber.value = '#AFF-' + Math.random().toString(36).substring(2, 8).toUpperCase()
  orderPlaced.value = true
  cart.clearCart()
}
</script>

<style scoped>
.checkout {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 24px 80px;
}

.layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 48px;
  align-items: start;
}

/* Step indicator */
.step-indicator {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 32px;
}

.step {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Oswald', sans-serif;
  font-size: 13px;
  letter-spacing: 2px;
  color: #555;
  cursor: default;
  transition: color 0.2s;
}

.step.active { color: #fff; }
.step.done { color: #cc2200; cursor: pointer; }

.step-num {
  width: 26px;
  height: 26px;
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  border-radius: 50%;
}

.step.active .step-num { background: #cc2200; border-color: #cc2200; color: #fff; }
.step.done .step-num { background: #cc2200; border-color: #cc2200; color: #fff; }

.step-line {
  flex: 1;
  height: 1px;
  background: #2a2a2a;
  margin: 0 16px;
}

/* Form */
.form { display: flex; flex-direction: column; gap: 0; }

.field { margin-bottom: 18px; }

.field label {
  display: block;
  font-size: 11px;
  letter-spacing: 1px;
  color: #666;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.field input {
  width: 100%;
  background: #111;
  border: 1px solid #252525;
  border-bottom-color: #333;
  color: #eee;
  padding: 11px 14px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
}

.field input:focus { border-color: #cc2200; }

.row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

.demo-notice {
  font-size: 12px;
  color: #555;
  background: #111;
  border-left: 2px solid #cc2200;
  padding: 10px 14px;
  margin-bottom: 20px;
}

.pay-methods {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.pay-badge {
  font-size: 10px;
  letter-spacing: 1px;
  font-family: 'Oswald', sans-serif;
  border: 1px solid #2a2a2a;
  padding: 4px 10px;
  color: #555;
}

.next-btn {
  width: 100%;
  background: #cc2200;
  color: #fff;
  border: none;
  padding: 15px;
  font-family: 'Oswald', sans-serif;
  font-size: 14px;
  letter-spacing: 3px;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 4px;
}

.next-btn:hover { background: #aa1a00; }

/* Summary */
.summary {
  background: #0e0e0e;
  border: 1px solid #1e1e1e;
  padding: 24px;
  position: sticky;
  top: 90px;
}

.summary-title {
  font-family: 'Oswald', sans-serif;
  font-size: 13px;
  letter-spacing: 3px;
  color: #666;
  margin-bottom: 20px;
}

.summary-item {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 16px;
}

.img-wrap {
  position: relative;
  flex-shrink: 0;
}

.img-wrap img {
  width: 56px;
  aspect-ratio: 3/4;
  object-fit: cover;
  display: block;
}

.qty-badge {
  position: absolute;
  top: -6px;
  right: -6px;
  background: #cc2200;
  color: #fff;
  font-size: 10px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Oswald', sans-serif;
}

.item-info { flex: 1; min-width: 0; }

.s-name {
  font-family: 'Oswald', sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ccc;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.s-meta { font-size: 11px; color: #555; margin-top: 2px; }

.s-price { font-size: 13px; color: #888; white-space: nowrap; }

.divider { border-top: 1px solid #1e1e1e; margin: 16px 0; }

.total-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Oswald', sans-serif;
  font-size: 14px;
  letter-spacing: 2px;
  color: #666;
}

.total-val { font-size: 20px; color: #fff; }

/* Success */
.success {
  text-align: center;
  padding: 100px 24px;
}

.success-icon {
  width: 72px;
  height: 72px;
  background: #cc2200;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #fff;
  margin: 0 auto 24px;
}

.success h2 {
  font-family: 'Oswald', sans-serif;
  font-size: 26px;
  letter-spacing: 5px;
  color: #fff;
  margin-bottom: 12px;
}

.success p { color: #666; font-size: 14px; margin-bottom: 6px; }

.order-num {
  font-family: 'Oswald', sans-serif;
  font-size: 20px;
  color: #cc2200;
  letter-spacing: 3px;
  margin: 20px 0 36px;
}

.home-btn {
  display: inline-block;
  background: #cc2200;
  color: #fff;
  padding: 14px 40px;
  font-family: 'Oswald', sans-serif;
  font-size: 13px;
  letter-spacing: 3px;
  text-decoration: none;
  transition: background 0.2s;
}

.home-btn:hover { background: #aa1a00; }

@media (max-width: 768px) {
  .layout { grid-template-columns: 1fr; }
  .summary { position: static; }
}
</style>
