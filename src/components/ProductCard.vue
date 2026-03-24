<template>
  <div class="card" @click="$router.push(`/product/${product.id}`)">
    <div class="img-wrap">
      <img :src="product.image" :alt="product.name" loading="lazy" />
      <span v-if="product.tags.includes('new')" class="tag new">NEW</span>
      <span v-if="product.tags.includes('sale')" class="tag sale">SALE</span>
      <button class="quick-add" @click.stop="quickAdd">QUICK ADD</button>
    </div>
    <div class="info">
      <p class="name">{{ product.name }}</p>
      <p class="price">₱{{ product.price.toLocaleString('en-PH', { minimumFractionDigits: 2 }) }}</p>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart.js'

const props = defineProps({ product: Object })
const cart = useCartStore()

function quickAdd() {
  const size = props.product.sizes[0]
  cart.addItem(props.product, size)
}
</script>

<style scoped>
.card {
  cursor: pointer;
  background: #141414;
  transition: transform 0.2s;
}

.card:hover { transform: translateY(-2px); }

.img-wrap {
  position: relative;
  overflow: hidden;
}

.img-wrap img {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}

.card:hover .img-wrap img { transform: scale(1.04); }

.tag {
  position: absolute;
  top: 10px;
  left: 10px;
  font-family: 'Oswald', sans-serif;
  font-size: 11px;
  letter-spacing: 1px;
  padding: 3px 8px;
}

.tag.new { background: #cc2200; color: #fff; }
.tag.sale { background: #fff; color: #111; }

.quick-add {
  position: absolute;
  bottom: -40px;
  left: 0; right: 0;
  background: rgba(204, 34, 0, 0.92);
  color: #fff;
  border: none;
  padding: 10px;
  font-family: 'Oswald', sans-serif;
  font-size: 13px;
  letter-spacing: 2px;
  transition: bottom 0.25s;
}

.card:hover .quick-add { bottom: 0; }

.info { padding: 10px 8px 14px; }

.name {
  font-family: 'Oswald', sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #eee;
  margin-bottom: 4px;
}

.price {
  font-size: 13px;
  color: #aaa;
}
</style>
