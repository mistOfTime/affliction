<template>
  <header class="header">
    <div class="header-inner">

      <!-- Hamburger (mobile only) -->
      <button class="hamburger" @click="menuOpen = !menuOpen" :class="{ open: menuOpen }" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <router-link to="/" class="logo">Affliction</router-link>

      <div class="header-right">
        <button class="icon-btn" @click="searchOpen = !searchOpen" aria-label="Search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.8"/>
            <line x1="16.5" y1="16.5" x2="22" y2="22" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
        </button>
        <router-link to="/cart" class="icon-btn cart-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
            <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="1.8"/>
            <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" stroke-width="1.8"/>
          </svg>
          <span v-if="cart.totalItems > 0" class="badge">{{ cart.totalItems }}</span>
        </router-link>
      </div>
    </div>

    <!-- Search bar -->
    <div class="search-bar" :class="{ visible: searchOpen }">
      <input v-model="searchQuery" placeholder="Search products..." @keyup.enter="doSearch" />
      <button @click="doSearch">GO</button>
    </div>

    <!-- Desktop nav -->
    <nav class="desktop-nav">
      <router-link
        v-for="cat in categories" :key="cat"
        :to="`/collections/${cat === 'All' ? '' : cat}`"
      >{{ cat }}</router-link>
    </nav>

    <!-- Mobile nav overlay -->
    <transition name="slide">
      <nav v-show="menuOpen" class="mobile-nav">
        <router-link
          v-for="cat in categories" :key="cat"
          :to="`/collections/${cat === 'All' ? '' : cat}`"
          @click="menuOpen = false"
        >{{ cat }}</router-link>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useCartStore } from '../stores/cart.js'
import { categories } from '../data/products.js'

const cart = useCartStore()
const router = useRouter()
const route = useRoute()
const menuOpen = ref(false)
const searchOpen = ref(false)
const searchQuery = ref('')

// close menu on route change
watch(() => route.path, () => { menuOpen.value = false })

function doSearch() {
  if (searchQuery.value.trim()) {
    router.push({ path: '/collections/', query: { q: searchQuery.value.trim() } })
    searchOpen.value = false
    searchQuery.value = ''
  }
}
</script>

<style scoped>
.header {
  background: #0a0a0a;
  border-bottom: 1px solid #1e1e1e;
  position: sticky;
  top: 0;
  z-index: 200;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
  position: relative;
}

/* Logo */
.logo {
  font-family: 'Times New Roman', serif;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #fff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}

/* Right icons */
.header-right {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-left: auto;
}

.icon-btn {
  background: none;
  border: none;
  color: #ccc;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  transition: color 0.2s;
}

.icon-btn:hover { color: #fff; }

.badge {
  position: absolute;
  top: -6px;
  right: -8px;
  background: #cc2200;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Oswald', sans-serif;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 10;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: #ccc;
  transition: all 0.25s;
  transform-origin: center;
}

.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Desktop nav */
.desktop-nav {
  display: flex;
  gap: 28px;
  padding: 10px 24px;
  border-top: 1px solid #161616;
}

.desktop-nav a {
  font-family: 'Oswald', sans-serif;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #888;
  transition: color 0.2s;
}

.desktop-nav a:hover,
.desktop-nav a.router-link-active { color: #fff; }

/* Mobile nav */
.mobile-nav {
  display: flex;
  flex-direction: column;
  background: #0a0a0a;
  border-top: 1px solid #1e1e1e;
  padding: 8px 0 16px;
}

.mobile-nav a {
  font-family: 'Oswald', sans-serif;
  font-size: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #888;
  padding: 13px 24px;
  border-bottom: 1px solid #111;
  transition: color 0.2s, background 0.2s;
}

.mobile-nav a:hover,
.mobile-nav a.router-link-active {
  color: #fff;
  background: #111;
}

/* Slide transition */
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.3s ease, opacity 0.25s ease;
  overflow: hidden;
  max-height: 500px;
}
.slide-enter-from,
.slide-leave-to {
  max-height: 0 !important;
  opacity: 0;
}

/* Search bar */
.search-bar {
  display: flex;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.25s ease;
  border-top: 1px solid transparent;
}

.search-bar.visible {
  max-height: 60px;
  border-top-color: #1e1e1e;
}

.search-bar input {
  flex: 1;
  background: #111;
  border: none;
  border-right: 1px solid #1e1e1e;
  color: #eee;
  padding: 12px 16px;
  font-size: 14px;
  outline: none;
}

.search-bar button {
  background: #cc2200;
  color: #fff;
  border: none;
  padding: 12px 20px;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 2px;
  font-size: 12px;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 768px) {
  .hamburger { display: flex; }
  .desktop-nav { display: none; }

  .header-inner {
    position: relative;
    justify-content: space-between;
  }

  .logo {
    font-size: 18px;
    letter-spacing: 3px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
