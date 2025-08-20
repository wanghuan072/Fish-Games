<template>
  <div class="app-container">
    <HeaderComponent />

    <main class="container">
      <section class="all-games-section">
        <h1 class="page-title title-h1">{{ pageTitle }}</h1>
        <p class="page-description">
          {{ pageDescription }}
        </p>

        <!-- Tabs -->
        <nav class="tabs">
          <router-link
            :to="{ name: 'games' }"
            class="tab-link"
            :class="{ active: !activeCategoryId }"
            >All Games</router-link
          >
          <router-link
            v-for="cat in categories"
            :key="cat.id"
            :to="{ name: 'games-category', params: { categoryId: cat.id } }"
            class="tab-link"
            :class="{ active: activeCategoryId === cat.id }"
            >{{ cat.name }}</router-link
          >
        </nav>

        <GameGrid :category="activeCategoryId || null" />
      </section>
    </main>

    <FooterComponent />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import GameGrid from '@/components/GameGrid.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { gameCategories } from '@/data/games.js'

const route = useRoute()
const categories = gameCategories

const activeCategoryId = computed(() =>
  route.name === 'games-category' ? route.params.categoryId : null
)

const pageTitle = computed(() => {
  if (!activeCategoryId.value) return 'All Games'
  const c = categories.find((x) => x.id === activeCategoryId.value)
  return c ? c.name : 'All Games'
})

const pageDescription = computed(() => {
  if (!activeCategoryId.value) {
    return 'Browse the complete collection of fish games. Click any card to view details and start your underwater adventure.'
  }
  const c = categories.find((x) => x.id === activeCategoryId.value)
  return c?.description || ''
})
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  color: #ffffff;
}

.all-games-section {
  margin-bottom: 4rem;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0 0 1.25rem;
}

.tab-link {
  color: #e5e5e5;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(139, 92, 246, 0.3);
  background: rgba(139, 92, 246, 0.15);
  transition: all 0.2s ease;
  font-size: 0.95rem;
}

.tab-link:hover {
  background: rgba(139, 92, 246, 0.3);
}

.tab-link.active {
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(139, 92, 246, 0.3));
  border-color: rgba(0, 212, 255, 0.5);
  color: #fff;
}

.page-title {
  background: linear-gradient(45deg, #00d4ff, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0;
}

.page-description {
  text-align: center;
  font-size: 1rem;
  color: #e5e5e5;
  opacity: 0.85;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .tabs {
    gap: 0.4rem;
  }
  .tab-link {
    padding: 0.45rem 0.9rem;
    font-size: 0.9rem;
  }
  .page-description {
    font-size: 0.8rem;
  }
}
</style>


