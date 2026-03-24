<template>
  <AppHeader />
  <router-view />
  <footer class="footer">
    <p class="footer-logo">Affliction</p>
    <p class="footer-copy">© 2026 Affliction Clothing. Template only — not a real store.</p>
  </footer>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
</script>

<style scoped>
.footer {
  background: #0a0a0a;
  border-top: 1px solid #1e1e1e;
  text-align: center;
  padding: 40px 24px;
}

.footer-logo {
  font-family: 'Times New Roman', serif;
  font-size: 22px;
  letter-spacing: 4px;
  color: #fff;
  margin-bottom: 8px;
}

.footer-copy {
  font-size: 12px;
  color: #444;
  letter-spacing: 1px;
}
</style>
