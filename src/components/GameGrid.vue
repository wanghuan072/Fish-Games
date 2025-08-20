<template>
  <div class="game-grid-container">
    <div v-if="showTitle" class="category-header">
      <div class="category-header-left">
        <h2 class="category-title title-h2">{{ title }}</h2>
        <p v-if="description" class="category-description">{{ description }}</p>
      </div>
      <router-link v-if="moreTo" :to="moreTo" class="more-link">More →</router-link>
    </div>

    <div class="games-grid">
      <div
        v-for="game in filteredGames"
        :key="game.id"
        :class="['game-card', game.size === 'large' ? 'game-card-large' : 'game-card-small']"
        @click="navigateToGame(game)"
      >
        <div class="badges">
          <span
            v-if="Array.isArray(game.badges) && game.badges.includes('updated')"
            class="badge badge-updated"
            >Updated</span
          >
          <span
            v-if="Array.isArray(game.badges) && game.badges.includes('hot')"
            class="badge badge-hot"
            >Hot</span
          >
          <span
            v-if="Array.isArray(game.badges) && game.badges.includes('new')"
            class="badge badge-new"
            >New</span
          >
        </div>
        <img :src="game.imageUrl" :alt="game.imageAlt" class="game-image" />
        <h3 class="game-title">{{ game.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { games as gameData } from '@/data/games.js'

const router = useRouter()

const props = defineProps({
  category: {
    type: String,
    default: null, // null表示显示所有游戏
  },
  showTitle: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  moreTo: {
    type: [String, Object],
    default: null,
  },
  maxItems: {
    type: Number,
    default: null, // 限制显示数量
  },
  filterType: {
    type: String,
    default: null, // 'updated', 'hot', 'new', 'detail' 等过滤类型
  },
})

const games = ref(gameData)

// 过滤游戏的计算属性
const filteredGames = computed(() => {
  let filtered = games.value

  // 根据过滤类型进行过滤
  if (props.filterType) {
    switch (props.filterType) {
      case 'updated':
        filtered = filtered.filter(
          (game) => Array.isArray(game.badges) && game.badges.includes('updated')
        )
        break
      case 'hot':
        filtered = filtered.filter(
          (game) => Array.isArray(game.badges) && game.badges.includes('hot')
        )
        break
      case 'new':
        filtered = filtered.filter(
          (game) => Array.isArray(game.badges) && game.badges.includes('new')
        )
        break
      case 'detail':
        filtered = filtered.filter((game) => game.isDetail)
        break
    }
  }

  // 根据分类进行过滤
  if (props.category) {
    filtered = filtered.filter(
      (game) => game.categories && game.categories.includes(props.category)
    )
  }

  // 限制显示数量
  if (props.maxItems) {
    filtered = filtered.slice(0, props.maxItems)
  }

  return filtered
})

// 导航到游戏信息页
const navigateToGame = (game) => {
  router.push({ name: 'game-info', params: { addressBar: game.addressBar } })
}
</script>

<style scoped>
.game-grid-container {
  margin-bottom: 4rem;
}

.category-header {
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
}

.category-header-left {
  display: flex;
  flex-direction: column;
}

.category-title {
  color: #00d4ff;
  background: linear-gradient(45deg, #00d4ff, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0;
}

.category-description {
  color: #e5e5e5;
  font-size: 1.1rem;
  opacity: 0.8;
}

.more-link {
  color: #ffffff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(139, 92, 246, 0.3));
  border: 1px solid rgba(0, 212, 255, 0.5);
  transition: all 0.2s ease;
  white-space: nowrap;
}

.more-link:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(0, 212, 255, 0.25);
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 1rem;
}

.game-card {
  background: rgba(45, 45, 45, 0.8);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  cursor: pointer;
}

.badges {
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  gap: 6px;
  z-index: 20;
  pointer-events: none;
}

.badge {
  font-size: 0.7rem;
  line-height: 1;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  text-transform: uppercase;
  letter-spacing: 0.3px;
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

.game-card:hover {
  transform: translateY(-8px);
  border-color: #8b5cf6;
  box-shadow: 0 15px 40px rgba(139, 92, 246, 0.4);
}

/* 小卡片样式 */
.game-card-small {
  grid-column: span 1;
  grid-row: span 1;
}

/* 大卡片样式 */
.game-card-large {
  grid-column: span 2;
  grid-row: span 2;
}

.game-card-large .game-image {
  aspect-ratio: 1/1;
}

.game-card-large:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 50px rgba(0, 212, 255, 0.5);
  border-color: #00d4ff;
}

.game-image {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  transition: transform 0.3s ease;
  display: block;
}

.game-card:hover .game-image {
  transform: scale(1.05);
}

.game-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.8rem;
  font-size: 0.85rem;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.7) 50%,
    transparent 100%
  );
  backdrop-filter: blur(3px);
  z-index: 10;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  line-height: 1.2;
}

.game-card-large .game-title {
  font-size: 1.1rem;
  padding: 1.2rem;
  font-weight: 700;
}

/* 响应式设计 */
@media (max-width: 1400px) {
  .games-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media (max-width: 1200px) {
  .games-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (max-width: 1024px) {
  .games-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 0.9rem;
  }

  .category-description {
    font-size: 1rem;
  }

  .game-title {
    font-size: 0.8rem;
    padding: 0.7rem;
  }

  .game-card-large .game-title {
    font-size: 1rem;
    padding: 1rem;
  }
  .game-grid-container {
    margin-bottom: 3rem;
  }
}

@media (max-width: 768px) {
  .games-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }

  .category-description {
    display: none;
  }

  .game-grid-container {
    margin-bottom: 1rem;
  }

  .game-card-large {
    grid-column: span 1;
    grid-row: span 1;
  }

  .game-title {
    font-size: 0.75rem;
    padding: 0.6rem;
  }

  .game-card-large .game-title {
    font-size: 0.85rem;
    padding: 0.8rem;
  }

  .game-card:hover {
    transform: translateY(-4px);
  }

  .game-card-large:hover {
    transform: translateY(-4px);
  }
}
</style>
