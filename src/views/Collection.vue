<template>
  <div class="collection">
    <!-- Breadcrumb -->
    <nav class="breadcrumb">
      <router-link to="/">HOME</router-link> &bull;
      <router-link to="/collections/">COLLECTIONS</router-link>
      <span v-if="activeCategory"> &bull; <span class="active">{{ activeCategory.toUpperCase() }}</span></span>
    </nav>

    <!-- Toolbar -->
    <div class="toolbar">
      <div class="filters">
        <button
          v-for="cat in categories"
          :key="cat"
          :class="['filter-btn', { active: activeCategory === (cat === 'All' ? '' : cat) }]"
          @click="setCategory(cat)"
        >{{ cat }}</button>
      </div>
      <div class="right">
        <span class="count">{{ filtered.length }} PRODUCTS</span>
        <select v-model="sortBy" class="sort-select">
          <option value="">SORT BY</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name">Name A-Z</option>
        </select>
      </div>
    </div>

    <!-- Grid -->
    <div class="grid">
      <ProductCard v-for="p in filtered" :key="p.id" :product="p" />
    </div>

    <div v-if="filtered.length === 0" class="empty">No products found.</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProductCard from '../components/ProductCard.vue'
import { products, categories } from '../data/products.js'

const route = useRoute()
const router = useRouter()
const sortBy = ref('')

const activeCategory = computed(() => route.params.category || '')
const searchQuery = computed(() => route.query.q || '')

function setCategory(cat) {
  router.push(`/collections/${cat === 'All' ? '' : cat}`)
}

const filtered = computed(() => {
  let list = [...products]

  if (activeCategory.value) {
    list = list.filter(p => p.category === activeCategory.value)
  }

  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
  }

  if (sortBy.value === 'price-asc') list.sort((a, b) => a.price - b.price)
  else if (sortBy.value === 'price-desc') list.sort((a, b) => b.price - a.price)
  else if (sortBy.value === 'name') list.sort((a, b) => a.name.localeCompare(b.name))

  return list
})
</script>

<style scoped>
.collection { padding: 0 24px 48px; }

.breadcrumb {
  padding: 14px 0;
  font-size: 11px;
  color: #666;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.breadcrumb a { color: #666; }
.breadcrumb a:hover { color: #cc2200; }
.breadcrumb .active { color: #eee; font-weight: bold; }

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0 20px;
  flex-wrap: wrap;
  gap: 12px;
  border-bottom: 1px solid #222;
  margin-bottom: 20px;
}

.filters { display: flex; gap: 8px; flex-wrap: wrap; }

.filter-btn {
  background: none;
  border: 1px solid #333;
  color: #888;
  padding: 6px 14px;
  font-family: 'Oswald', sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.2s;
}

.filter-btn:hover, .filter-btn.active {
  border-color: #cc2200;
  color: #cc2200;
}

.right { display: flex; align-items: center; gap: 16px; }

.count {
  font-family: 'Oswald', sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
  color: #666;
}

.sort-select {
  background: #1a1a1a;
  border: 1px solid #333;
  color: #aaa;
  padding: 6px 12px;
  font-family: 'Oswald', sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
  outline: none;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
}

.empty {
  text-align: center;
  padding: 60px;
  color: #555;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 2px;
}

@media (max-width: 900px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
