<template>
  <div class="app-container">
    <HeaderComponent />

    <main class="container">
      <!-- 加载状态 -->
      <div v-if="loading" class="loading-container">
        <div class="loading-spinner"></div>
        <p>Loading game info...</p>
      </div>

      <!-- 未找到 -->
      <div v-else-if="!game" class="not-found-container">
        <h1>Game Not Found</h1>
        <p>The game you're looking for doesn't exist.</p>
        <a href="/games" class="back-button">Back to Games</a>
      </div>

      <!-- 信息页 -->
      <div v-else class="game-info">
        <!-- 面包屑 -->
        <nav class="breadcrumb">
          <a href="/">Home</a>
          <span class="separator">></span>
          <a href="/games">Games</a>
          <span class="separator">></span>
          <span class="current">{{ game.title }}</span>
        </nav>

        <h1 class="page-title title-h1">{{ game.title }}</h1>

        <div class="game-info-layout">
          <div class="game-media">
            <img :src="game.imageUrl" :alt="game.imageAlt" class="cover-image" />
            <div v-if="Array.isArray(game.badges) && game.badges.length" class="image-badges">
              <span v-if="game.badges.includes('updated')" class="badge badge-updated"
                >Updated</span
              >
              <span v-if="game.badges.includes('hot')" class="badge badge-hot">Hot</span>
              <span v-if="game.badges.includes('new')" class="badge badge-new">New</span>
            </div>
          </div>

          <div class="game-meta">
            <!-- 推荐星级（1-5） -->
            <div v-if="starCount > 0" class="rating">
              <span class="rating-title">Recommended</span>
              <div class="stars">
                <span
                  v-for="(filled, idx) in starList"
                  :key="idx"
                  class="star"
                  :class="{ filled }"
                  >{{ filled ? '★' : '☆' }}</span
                >
                <span class="star-count">{{ starCount }}/5</span>
              </div>
            </div>

            <!-- 右侧信息块：Categories / Tags -->
            <div
              v-if="Array.isArray(game.categories) && game.categories.length"
              class="meta-card meta-categories"
            >
              <h3 class="meta-title">Categories</h3>
              <div class="meta-chips">
                <span v-for="cat in game.categories" :key="cat" class="category-chip">
                  {{ getCategoryName(cat) }}
                </span>
              </div>
            </div>

            <div v-if="Array.isArray(game.tags) && game.tags.length" class="meta-card meta-tags">
              <h3 class="meta-title">Tags</h3>
              <div class="meta-chips">
                <span
                  v-for="t in game.tags"
                  :key="t"
                  :class="[
                    'tag-chip',
                    { 'is-updated': t === 'updated', 'is-hot': t === 'hot', 'is-new': t === 'new' },
                  ]"
                >
                  {{ t }}
                </span>
              </div>
            </div>

            <div class="actions">
              <button class="play-button" @click="goPlay">Play Now</button>
              <!-- <router-link to="/games" class="back-link">← Back to Games</router-link> -->
            </div>
          </div>
        </div>

        <!-- 详情内容 -->
        <div class="details-section">
          <h2 class="details-title title-h2">About This Game</h2>
          <div v-html="game.detailsHtml" class="details-html"></div>
        </div>
      </div>
    </main>

    <FooterComponent />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { games, gameCategories } from '@/data/games.js'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const route = useRoute()
const router = useRouter()
const loading = ref(true)

const game = computed(() => {
  return games.find((g) => g.addressBar === route.params.addressBar)
})

const hasTag = (tag) => Array.isArray(game.value?.badges) && game.value.badges.includes(tag)

const getCategoryName = (categoryId) => {
  const category = gameCategories.find((c) => c.id === categoryId)
  return category ? category.name : categoryId
}

// 推荐星级（1-5）
const starCount = computed(() => {
  const n = Number(game.value?.stars)
  if (!Number.isFinite(n)) return 0
  return Math.max(0, Math.min(5, Math.floor(n)))
})
const starList = computed(() => Array.from({ length: 5 }, (_, i) => i < starCount.value))

const goPlay = () => {
  if (!game.value) return
  router.push({ name: 'game-detail', params: { addressBar: game.value.addressBar } })
}

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 300)
})
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  color: #ffffff;
}

.loading-container,
.not-found-container {
  text-align: center;
  padding: 4rem 2rem;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid rgba(0, 212, 255, 0.3);
  border-top: 3px solid #00d4ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.breadcrumb {
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: #e5e5e5;
}
.breadcrumb a {
  color: #00d4ff;
  text-decoration: none;
}
.breadcrumb a:hover {
  text-decoration: underline;
}
.separator {
  margin: 0 0.5rem;
  opacity: 0.6;
}
.current {
  opacity: 0.8;
}

.page-title {
  text-align: left;
  background: linear-gradient(45deg, #ffd700, #ffb347);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.game-info-layout {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  margin-bottom: 1rem;
}

.game-media .cover-image {
  width: 100%;
  border-radius: 16px;
  border: 1px solid rgba(139, 92, 246, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.image-badges {
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  gap: 8px;
}

.badges {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}
.badge {
  font-size: 0.75rem;
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.25);
}
.badge-updated {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.6), rgba(0, 212, 255, 0.5));
}
.badge-hot {
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.7), rgba(255, 179, 71, 0.7));
}
.badge-new {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.7), rgba(16, 185, 129, 0.7));
}

.categories {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
.category-tag {
  background: rgba(139, 92, 246, 0.2);
  color: #8b5cf6;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  border: 1px solid rgba(139, 92, 246, 0.3);
  font-size: 0.85rem;
}

.actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
}
.play-button {
  background: linear-gradient(45deg, #ff6b9d, #ff8fab);
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 800;
  font-size: 1.15rem;
  box-shadow: 0 8px 24px rgba(255, 107, 157, 0.35), 0 2px 6px rgba(0, 0, 0, 0.2);
  transform: translateZ(0);
  transition: transform 200ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 200ms ease,
    filter 200ms ease;
  animation: playPulse 2.4s ease-in-out infinite;
}
.play-button:hover {
  filter: brightness(1.06);
  transform: translateY(-2px) scale(1.04);
  box-shadow: 0 14px 36px rgba(255, 107, 157, 0.45), 0 4px 10px rgba(0, 0, 0, 0.25);
}
.play-button:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 0 8px 20px rgba(255, 107, 157, 0.35), 0 2px 6px rgba(0, 0, 0, 0.2);
}
@keyframes playPulse {
  0%,
  100% {
    transform: translateZ(0) scale(1);
  }
  50% {
    transform: translateZ(0) scale(1.025);
  }
}
.back-link {
  color: #e5e5e5;
  text-decoration: none;
}
.back-link:hover {
  color: #fff;
  text-decoration: underline;
}

.details-section {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
}
.details-title {
  color: #00d4ff;
  text-align: center;
}
.details-html {
  color: #e5e5e5;
  line-height: 1.8;
}

/* 元信息块样式 */
.meta-sections {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin: 1rem 0 2rem;
}

.meta-card {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(139, 92, 246, 0.2);
}

.meta-title {
  font-size: 1.1rem;
  color: #00d4ff;
  margin: 0 0 0.8rem;
}

.meta-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.6rem;
}

.category-chip {
  background: rgba(139, 92, 246, 0.12);
  color: #c4b5fd;
  border: 1px solid rgba(139, 92, 246, 0.4);
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 500;
}

.tag-chip {
  color: #ffffff;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.tag-chip.is-updated {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.6), rgba(0, 212, 255, 0.45));
}
.tag-chip.is-hot {
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.75), rgba(255, 179, 71, 0.75));
}
.tag-chip.is-new {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.75), rgba(16, 185, 129, 0.75));
}

/* 星级样式 */
.rating {
  margin-bottom: 1rem;
}
.rating-title {
  display: inline-block;
  margin-right: 0.5rem;
  color: #e5e7eb;
  font-weight: 600;
}
.stars {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.star {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.3);
}
.star.filled {
  color: #ffd700;
  text-shadow: 0 0 8px rgba(255, 215, 0, 0.6);
}
.star-count {
  margin-left: 6px;
  font-size: 0.9rem;
  color: #cbd5e1;
}

@media (max-width: 1024px) {
  .game-info-layout {
    gap: 1rem;
  }
  .meta-card {
    display: none;
  }
}

@media (max-width: 768px) {
  .game-info-layout {
    grid-template-columns: 1fr 2fr;
  }
  .play-button {
    padding: 0.8rem 1.5rem;
  }
  .details-section {
    padding: 1rem;
  }
}
</style>

