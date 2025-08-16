<template>
  <div class="app-container">
    <HeaderComponent />

    <main class="container">
      <section class="all-games-section">
        <h1 class="page-title">Hot Games</h1>
        <p class="page-description">
          Check out the most popular fish games right now. Click any card to view details and start
          playing.
        </p>

        <GameGrid :filter-type="'hot'" />
      </section>
    </main>

    <FooterComponent />
  </div>
</template>

<script setup>
import GameGrid from '@/components/GameGrid.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  color: #ffffff;
}

.all-games-section {
  margin-bottom: 4rem;
}

.page-title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 0.75rem;
  background: linear-gradient(45deg, #ff6b9d, #ff8fab);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-description {
  text-align: center;
  font-size: 1.1rem;
  color: #e5e5e5;
  opacity: 0.85;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.2rem;
  }
  .page-description {
    font-size: 1rem;
  }
}
</style>


