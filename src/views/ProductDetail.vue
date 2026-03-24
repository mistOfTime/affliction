<template>
  <div v-if="product" class="detail">
    <nav class="breadcrumb">
      <router-link to="/">HOME</router-link> &bull;
      <router-link :to="`/collections/${product.category}`">{{ product.category.toUpperCase() }}</router-link> &bull;
      <span class="active">{{ product.name.toUpperCase() }}</span>
    </nav>

    <div class="layout">
      <!-- Image -->
      <div class="img-side">
        <img :src="product.image" :alt="product.name" class="main-img" />
      </div>

      <!-- Info -->
      <div class="info-side">
        <span class="category">{{ product.category }}</span>
        <h1 class="name">{{ product.name }}</h1>
        <p class="price">₱{{ product.price.toLocaleString('en-PH', { minimumFractionDigits: 2 }) }}</p>

        <p class="desc">{{ product.description }}</p>

        <!-- Size selector -->
        <div class="size-section">
          <p class="label">SIZE: <strong>{{ selectedSize }}</strong></p>
          <div class="sizes">
            <button
              v-for="size in product.sizes"
              :key="size"
              :class="['size-btn', { active: selectedSize === size }]"
              @click="selectedSize = size"
            >{{ size }}</button>
          </div>
        </div>

        <!-- Qty -->
        <div class="qty-section">
          <p class="label">QUANTITY</p>
          <div class="qty-ctrl">
            <button @click="qty = Math.max(1, qty - 1)">−</button>
            <span>{{ qty }}</span>
            <button @click="qty++">+</button>
          </div>
        </div>

        <button class="add-btn" @click="addToCart">ADD TO CART</button>
        <div v-if="added" class="added-msg">✓ Added to cart</div>

        <div class="meta">
          <p>Category: <span>{{ product.category }}</span></p>
          <p>Tags: <span v-for="t in product.tags" :key="t" class="tag-pill">{{ t }}</span></p>
        </div>
      </div>
    </div>

    <!-- Related -->
    <section class="related">
      <h2 class="section-title">YOU MAY ALSO LIKE</h2>
      <div class="grid">
        <ProductCard v-for="p in related" :key="p.id" :product="p" />
      </div>
    </section>
  </div>

  <div v-else class="not-found">Product not found.</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '../data/products.js'
import { useCartStore } from '../stores/cart.js'
import ProductCard from '../components/ProductCard.vue'

const route = useRoute()
const cart = useCartStore()

const product = computed(() => products.find(p => p.id === Number(route.params.id)))
const selectedSize = ref('')
const qty = ref(1)
const added = ref(false)

const related = computed(() =>
  products.filter(p => p.category === product.value?.category && p.id !== product.value?.id).slice(0, 4)
)

function addToCart() {
  if (!selectedSize.value) {
    selectedSize.value = product.value.sizes[0]
  }
  for (let i = 0; i < qty.value; i++) {
    cart.addItem(product.value, selectedSize.value)
  }
  added.value = true
  setTimeout(() => added.value = false, 2000)
}
</script>

<style scoped>
.detail { padding: 0 24px 60px; }

.breadcrumb {
  padding: 14px 0;
  font-size: 11px;
  color: #666;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.breadcrumb a { color: #666; }
.breadcrumb a:hover { color: #cc2200; }
.breadcrumb .active { color: #eee; }

.layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin-top: 8px;
}

.img-side .main-img {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  object-position: top;
  display: block;
  background: #111;
}

.category {
  font-family: 'Oswald', sans-serif;
  font-size: 12px;
  letter-spacing: 2px;
  color: #cc2200;
  text-transform: uppercase;
}

.name {
  font-family: 'Oswald', sans-serif;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;
  margin: 8px 0;
}

.price {
  font-size: 22px;
  color: #eee;
  margin-bottom: 16px;
}

.desc {
  color: #888;
  font-size: 14px;
  line-height: 1.7;
  margin-bottom: 24px;
  border-top: 1px solid #222;
  padding-top: 16px;
}

.label {
  font-family: 'Oswald', sans-serif;
  font-size: 12px;
  letter-spacing: 2px;
  color: #888;
  margin-bottom: 10px;
}

.label strong { color: #eee; }

.sizes { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px; }

.size-btn {
  background: none;
  border: 1px solid #333;
  color: #aaa;
  width: 48px;
  height: 48px;
  font-family: 'Oswald', sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
  transition: all 0.2s;
}

.size-btn:hover, .size-btn.active {
  border-color: #cc2200;
  color: #fff;
  background: #cc2200;
}

.qty-ctrl {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 24px;
  width: fit-content;
  border: 1px solid #333;
}

.qty-ctrl button {
  background: #1a1a1a;
  border: none;
  color: #eee;
  width: 40px;
  height: 40px;
  font-size: 18px;
  transition: background 0.2s;
}

.qty-ctrl button:hover { background: #cc2200; }

.qty-ctrl span {
  width: 48px;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  font-size: 16px;
}

.add-btn {
  width: 100%;
  background: #cc2200;
  color: #fff;
  border: none;
  padding: 16px;
  font-family: 'Oswald', sans-serif;
  font-size: 15px;
  letter-spacing: 3px;
  text-transform: uppercase;
  transition: background 0.2s;
  margin-bottom: 12px;
}

.add-btn:hover { background: #aa1a00; }

.added-msg {
  color: #4caf50;
  font-family: 'Oswald', sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
  margin-bottom: 12px;
}

.meta {
  border-top: 1px solid #222;
  padding-top: 16px;
  font-size: 13px;
  color: #666;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.meta span { color: #aaa; }

.tag-pill {
  background: #1a1a1a;
  border: 1px solid #333;
  padding: 2px 8px;
  font-size: 11px;
  margin-right: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.related { margin-top: 60px; }

.section-title {
  font-family: 'Oswald', sans-serif;
  font-size: 20px;
  letter-spacing: 3px;
  color: #fff;
  margin-bottom: 20px;
  border-left: 3px solid #cc2200;
  padding-left: 12px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
}

.not-found {
  text-align: center;
  padding: 80px;
  color: #555;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 2px;
}

@media (max-width: 768px) {
  .detail { padding: 0 0 60px; }
  .breadcrumb { padding: 12px 16px; }
  .layout {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .img-side .main-img {
    aspect-ratio: 1/1;
    object-position: top center;
  }
  .info-side {
    padding: 20px 16px;
  }
  .name { font-size: 22px; }
  .grid { grid-template-columns: repeat(2, 1fr); }
  .related { padding: 0 16px; }
}
</style>
