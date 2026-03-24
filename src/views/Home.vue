<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
        <p class="hero-sub">NEW ARRIVALS</p>
        <h1 class="hero-title">Born From<br/>Darkness</h1>
        <router-link to="/collections/" class="hero-btn">SHOP NOW</router-link>
      </div>
    </section>

    <!-- Featured -->
    <section class="section">
      <h2 class="section-title">NEW ARRIVALS</h2>
      <div class="grid">
        <ProductCard v-for="p in featured" :key="p.id" :product="p" />
      </div>
      <div class="center">
        <router-link to="/collections/" class="view-all">VIEW ALL PRODUCTS</router-link>
      </div>
    </section>

    <!-- Categories -->
    <section class="section cat-section">
      <h2 class="section-title">SHOP BY CATEGORY</h2>
      <div class="cat-grid">
        <router-link v-for="cat in shopCats" :key="cat.name" :to="`/collections/${cat.name}`" class="cat-card">
          <div class="cat-img">
            <img :src="cat.img" :alt="cat.name" />
            <div class="cat-overlay">
              <span class="cat-label">{{ cat.name }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue'
import { products } from '../data/products.js'

const featured = products.filter(p => p.tags.includes('new')).slice(0, 4)

const CDN = 'https://cdn.shopify.com/s/files/1/1268/8989/files'
const shopCats = [
  { name: 'T-Shirts', img: `${CDN}/Hm_Slaughter_-_Affliction_Clothing-6523169.jpg?v=1762391548` },
  { name: 'Hoodies',  img: `${CDN}/Harold_-_Affliction_Clothing-6523146.jpg?v=1762391544` },
  { name: 'Jackets',  img: `${CDN}/Fast_And_Loud_Jacket_-_Affliction_Clothing-5603801.jpg?v=1762389705` },
  { name: 'Bottoms',  img: `${CDN}/Ace_Ivan_-_Affliction_Clothing-1544115.jpg?v=1762389241` },
  { name: 'Hats',     img: `${CDN}/Crows_Hat_-_Affliction_Clothing-5117431.jpg?v=1762390362` },
]
</script>

<style scoped>
.hero {
  min-height: 520px;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 50%, #0a0a0a 100%);
  display: flex;
  align-items: center;
  padding: 60px 40px;
  border-bottom: 1px solid #2a2a2a;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, rgba(204,34,0,0.15) 0%, transparent 70%);
}

.hero-content { position: relative; z-index: 1; }

.hero-sub {
  font-family: 'Oswald', sans-serif;
  font-size: 13px;
  letter-spacing: 4px;
  color: #cc2200;
  margin-bottom: 16px;
}

.hero-title {
  font-family: 'Times New Roman', serif;
  font-size: clamp(48px, 8vw, 96px);
  font-weight: bold;
  line-height: 1.1;
  color: #fff;
  text-shadow: 0 0 40px rgba(204,34,0,0.4);
  margin-bottom: 32px;
}

.hero-btn {
  display: inline-block;
  background: #cc2200;
  color: #fff;
  padding: 14px 36px;
  font-family: 'Oswald', sans-serif;
  font-size: 14px;
  letter-spacing: 3px;
  transition: background 0.2s;
}

.hero-btn:hover { background: #aa1a00; }

.section { padding: 48px 24px; }

.section-title {
  font-family: 'Oswald', sans-serif;
  font-size: 22px;
  letter-spacing: 3px;
  color: #fff;
  margin-bottom: 24px;
  border-left: 3px solid #cc2200;
  padding-left: 12px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
}

.center { text-align: center; margin-top: 32px; }

.view-all {
  display: inline-block;
  border: 1px solid #cc2200;
  color: #cc2200;
  padding: 12px 32px;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 2px;
  font-size: 13px;
  transition: all 0.2s;
}

.view-all:hover { background: #cc2200; color: #fff; }

.cat-section { background: #0d0d0d; }

.cat-grid {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.cat-card {
  flex: 1;
  min-width: 140px;
  text-align: center;
  color: #bbb;
  font-family: 'Oswald', sans-serif;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: color 0.2s;
}

.cat-card:hover { color: #cc2200; }

.cat-img {
  aspect-ratio: 3/4;
  position: relative;
  overflow: hidden;
  margin-bottom: 0;
  border: 1px solid #1e1e1e;
  transition: border-color 0.3s;
}

.cat-card:hover .cat-img { border-color: #cc2200; }

.cat-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(20%) brightness(0.75);
  transition: transform 0.4s, filter 0.3s;
}

.cat-card:hover .cat-img img {
  transform: scale(1.06);
  filter: grayscale(0%) brightness(0.85);
}

.cat-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 16px;
}

.cat-label {
  font-family: 'Oswald', sans-serif;
  font-size: 13px;
  letter-spacing: 3px;
  color: #fff;
  transition: color 0.2s;
}

.cat-card:hover .cat-label { color: #cc2200; }

@media (max-width: 900px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
