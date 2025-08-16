<template>
  <div class="app-container">
    <HeaderComponent />

    <main class="container">
      <!-- 加载状态 -->
      <div v-if="loading" class="loading-container">
        <div class="loading-spinner"></div>
        <p>Loading game...</p>
      </div>

      <!-- 游戏未找到 -->
      <div v-else-if="!game" class="not-found-container">
        <h1>Game Not Found</h1>
        <p>The game you're looking for doesn't exist.</p>
        <router-link to="/games" class="back-button">Back to Games</router-link>
      </div>

      <!-- 游戏详情 -->
      <div v-else class="game-detail">
        <!-- 面包屑导航 -->
        <nav class="breadcrumb">
          <router-link to="/">Home</router-link>
          <span class="separator">></span>
          <router-link to="/games">Games</router-link>
          <span class="separator">></span>
          <span class="current">{{ game.title }}</span>
        </nav>

        <!-- 游戏标题 -->
        <h1 class="game-title">{{ game.title }}</h1>

        <!-- 游戏详情布局容器 -->
        <div class="game-detail-layout">
          <!-- 主要内容区域 -->
          <div class="game-detail-main">
            <!-- 游戏播放区域 -->
            <div class="game-player-section" :class="{ 'page-fullscreen': isPageFullscreen }">
              <div class="game-main-container">
                <!-- 游戏预览/iframe -->
                <div v-if="!showGameplay" class="game-preview" @click="toggleGameplay">
                  <div
                    class="game-preview-bg"
                    :style="{ backgroundImage: `url(${game.imageUrl})` }"
                  >
                    <div class="game-overlay">
                      <div class="game-icon-container">
                        <img :src="game.imageUrl" :alt="game.imageAlt" class="game-icon" />
                      </div>
                      <button class="play-button">
                        <span class="play-icon">▶</span>
                        PLAY
                      </button>
                    </div>
                  </div>
                </div>

                <!-- 游戏iframe -->
                <div v-else class="game-iframe-container">
                  <iframe
                    ref="gameIframe"
                    :src="game.iframeUrl"
                    class="game-iframe"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>

              <!-- 游戏操作栏 -->
              <div class="game-controls">
                <span class="game-title-controls">{{ game.title }}</span>
                <div class="control-buttons">
                  <button
                    @click="togglePageFullscreen"
                    :disabled="!showGameplay"
                    class="control-button"
                    :class="{ disabled: !showGameplay }"
                    title="网页全屏"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                      ></path>
                    </svg>
                  </button>
                  <button
                    @click="toggleFullscreen"
                    :disabled="!showGameplay"
                    class="control-button"
                    :class="{ disabled: !showGameplay }"
                    title="全屏"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <polyline points="9 21 3 21 3 15"></polyline>
                      <line x1="21" y1="3" x2="14" y2="10"></line>
                      <line x1="3" y1="21" x2="10" y2="14"></line>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- 游戏标签 -->
              <div v-if="!isPageFullscreen" class="game-meta">
                <div class="game-categories">
                  <span v-for="category in game.categories" :key="category" class="category-tag">
                    {{ getCategoryName(category) }}
                  </span>
                </div>
              </div>
            </div>

            <!-- 相关游戏侧边栏 -->
            <div v-if="!isPageFullscreen" class="related-games-sidebar">
              <div class="detail-games-grid">
                <div
                  v-for="detailGame in sidebarDetailGames"
                  :key="detailGame.id"
                  class="detail-game-card"
                  @click="navigateToGame(detailGame)"
                >
                  <img
                    :src="detailGame.imageUrl"
                    :alt="detailGame.imageAlt"
                    class="detail-game-image"
                  />
                  <h4 class="detail-game-title">{{ detailGame.title }}</h4>
                </div>
              </div>
            </div>
          </div>

          <!-- 更多详情游戏区域 -->
          <div v-if="!isPageFullscreen && bottomDetailGames.length > 0" class="more-detail-games">
            <div class="detail-games-horizontal">
              <div
                v-for="detailGame in bottomDetailGames"
                :key="detailGame.id"
                class="detail-game-card"
                @click="navigateToGame(detailGame)"
              >
                <img
                  :src="detailGame.imageUrl"
                  :alt="detailGame.imageAlt"
                  class="detail-game-image"
                />
                <h4 class="detail-game-title">{{ detailGame.title }}</h4>
              </div>
            </div>
          </div>
        </div>

        <!-- About 区域 -->
        <div class="game-about-section">
          <h2 class="about-title">About This Game</h2>
          <div v-html="game.detailsHtml" class="about-content"></div>
        </div>

        <!-- 返回按钮 -->
        <div class="navigation-actions">
          <router-link to="/games" class="back-button">← Back to Games</router-link>
        </div>
      </div>
    </main>

    <FooterComponent />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { games, gameCategories } from '@/data/games.js'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const route = useRoute()
const router = useRouter()
const loading = ref(true)
const showGameplay = ref(false)
const gameIframe = ref(null)
const isPageFullscreen = ref(false)

// 根据addressBar找到对应的游戏
const game = computed(() => {
  return games.find((g) => g.addressBar === route.params.addressBar)
})

// 详情游戏过滤逻辑
const detailGames = computed(() => {
  return games.filter((g) => g.isDetail && g.id !== game.value?.id) // 排除当前游戏
})

// 侧边栏详情游戏（前10个）
const sidebarDetailGames = computed(() => {
  return detailGames.value.slice(0, 10)
})

// 底部详情游戏（超过10个的部分）
const bottomDetailGames = computed(() => {
  return detailGames.value.slice(10)
})

// 导航到游戏详情页
const navigateToGame = (targetGame) => {
  if (targetGame.addressBar !== route.params.addressBar) {
    router.push(`/games/${targetGame.addressBar}`)
  }
}

// 格式化日期
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// 获取分类名称
const getCategoryName = (categoryId) => {
  const category = gameCategories.find((cat) => cat.id === categoryId)
  return category ? category.name : categoryId
}

// 切换游戏显示
const toggleGameplay = () => {
  showGameplay.value = !showGameplay.value
  if (!showGameplay.value && isPageFullscreen.value) {
    exitPageFullscreen()
  }
}

// 浏览器全屏功能
const toggleFullscreen = () => {
  if (!gameIframe.value) return

  if (!document.fullscreenElement) {
    gameIframe.value.requestFullscreen().catch((err) => {
      console.error('Error attempting to enable fullscreen:', err)
    })
  } else {
    document.exitFullscreen()
  }
}

// 网页全屏功能
const togglePageFullscreen = () => {
  if (isPageFullscreen.value) {
    exitPageFullscreen()
  } else {
    enterPageFullscreen()
  }
}

const enterPageFullscreen = async () => {
  isPageFullscreen.value = true
  document.body.style.overflow = 'hidden'

  // 等待DOM更新完成后刷新iframe
  await nextTick()
  setTimeout(() => {
    if (gameIframe.value) {
      const currentSrc = gameIframe.value.src
      gameIframe.value.src = ''
      gameIframe.value.src = currentSrc
    }
  }, 150)
}

const exitPageFullscreen = async () => {
  isPageFullscreen.value = false
  document.body.style.overflow = 'auto'

  // 等待DOM更新完成后刷新iframe
  await nextTick()
  setTimeout(() => {
    if (gameIframe.value) {
      const currentSrc = gameIframe.value.src
      gameIframe.value.src = ''
      gameIframe.value.src = currentSrc
    }
  }, 150)
}

// 模拟加载
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 500)
})

// SEO 由全局路由守卫统一处理

// 清理状态
onUnmounted(() => {
  if (isPageFullscreen.value) {
    exitPageFullscreen()
  }
})
</script>

<style scoped>
/* 全局样式 */
.app-container {
  min-height: 100vh;
  background: transparent;
  color: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
}

/* 加载和错误状态 */
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

/* 面包屑导航 */
.breadcrumb {
  margin-bottom: 2rem;
  font-size: 0.9rem;
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

/* 游戏标题 */
.game-title {
  font-size: 3rem;
  margin: 2rem 0;
  text-align: center;
  background: linear-gradient(45deg, #ffd700, #ffb347);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 游戏详情布局容器 */
.game-detail-layout {
  margin-bottom: 3rem;
}

/* 主要内容区域 */
.game-detail-main {
  display: grid;
  grid-template-columns: 1fr 220px;
  gap: 1rem;
  margin-bottom: 1rem;
}

/* 游戏播放区域 */
.game-player-section {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  border: 1px solid rgba(139, 92, 246, 0.2);
  padding: 1rem;
}

/* 相关游戏侧边栏 */
.related-games-sidebar {
  display: flex;
  flex-direction: column;
}

/* 详情游戏网格（侧边栏 - 2列布局） */
.detail-games-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

/* 更多详情游戏区域 */
.more-detail-games {
  margin-top: 1rem;
}

/* 水平详情游戏列表（底部 - 10列布局） */
.detail-games-horizontal {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 1rem;
}

/* 详情游戏卡片样式 */
.detail-game-card {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(139, 92, 246, 0.2);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.detail-game-card:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 212, 255, 0.5);
  box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
}

.detail-game-image {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  display: block;
}

.detail-game-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  margin: 0;
  text-align: center;
  line-height: 1.2;
}

/* 游戏主体容器 */
.game-main-container {
  position: relative;
}

/* 游戏预览 */
.game-preview {
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.game-preview-bg {
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.game-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.game-icon-container {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  font-size: 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.game-icon {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 12px;
}

.play-button {
  background: linear-gradient(45deg, #ff6b9d, #ff8fab);
  color: white;
  border: none;
  padding: 1.2rem 3rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  box-shadow: 0 8px 32px rgba(255, 107, 157, 0.4);
}

.play-icon {
  font-size: 1.1rem;
}

/* 游戏iframe */
.game-iframe-container {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.game-iframe {
  width: 100%;
  height: 500px;
  border: none;
  display: block;
  transition: all 0.3s ease;
}

/* 游戏操作栏 */
.game-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(139, 92, 246, 0.2);
}

.game-title-controls {
  font-size: 1.25rem;
  font-weight: bold;
  color: #ffffff;
}

.control-buttons {
  display: flex;
  gap: 0.5rem;
}

.control-button {
  background: rgba(139, 92, 246, 0.2);
  color: #8b5cf6;
  border: 1px solid rgba(139, 92, 246, 0.3);
  width: 40px;
  height: 40px;
  border-radius: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.control-button:hover:not(.disabled) {
  background: #8b5cf6;
  color: white;
  transform: scale(1.05);
}

.control-button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: rgba(139, 92, 246, 0.1);
  color: rgba(139, 92, 246, 0.5);
  border-color: rgba(139, 92, 246, 0.2);
}

.control-button:disabled {
  pointer-events: none;
}

/* 网页全屏样式 */
.game-player-section.page-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background: #000;
  border-radius: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.game-player-section.page-fullscreen .game-main-container {
  flex-grow: 1;
  margin-bottom: 0;
}

.game-player-section.page-fullscreen .game-iframe-container {
  height: 100%;
}

.game-player-section.page-fullscreen .game-iframe {
  height: 100%;
  border-radius: 0;
}

.game-player-section.page-fullscreen .game-controls {
  flex-shrink: 0;
  background: rgba(0, 0, 0, 0.8);
  border-top: 1px solid rgba(139, 92, 246, 0.4);
}

/* 游戏元数据 */
.game-meta {
  text-align: center;
}

.game-categories {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.category-tag {
  background: rgba(139, 92, 246, 0.2);
  color: #8b5cf6;
  padding: 0.2rem 0.5rem;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid rgba(139, 92, 246, 0.3);
}

/* About区域 */
.game-about-section {
  background: rgba(0, 0, 0, 0.3);
  padding: 3rem;
  border-radius: 16px;
  border: 1px solid rgba(139, 92, 246, 0.2);
  margin-bottom: 3rem;
}

.about-title {
  color: #00d4ff;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.about-content {
  color: #e5e5e5;
  line-height: 1.8;
}

.about-content h3 {
  color: #00d4ff;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.about-content h4 {
  color: #8b5cf6;
  margin: 1.5rem 0 1rem;
}

.about-content ul {
  margin: 1rem 0;
  padding-left: 2rem;
}

.about-content li {
  margin-bottom: 0.5rem;
}

.about-content p {
  margin-bottom: 1.2rem;
}

/* 导航操作 */
.navigation-actions {
  text-align: center;
}

.back-button {
  background: rgba(45, 45, 45, 0.8);
  color: #e5e5e5;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  border: 2px solid rgba(139, 92, 246, 0.3);
  transition: all 0.3s ease;
}

.back-button:hover {
  background: rgba(139, 92, 246, 0.2);
  border-color: #8b5cf6;
  color: #ffffff;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .game-title {
    font-size: 2.5rem;
    margin: 1.5rem 0;
  }

  .breadcrumb {
    margin-bottom: 1.5rem;
    font-size: 0.85rem;
  }

  /* 调整为单列布局 */
  .game-detail-main {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .game-player-section {
    padding: 1.3rem;
  }

  /* 侧边栏改为水平布局 */
  .detail-games-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  /* 底部详情游戏调整为6列 */
  .detail-games-horizontal {
    grid-template-columns: repeat(6, 1fr);
  }

  .game-preview-bg {
    height: 450px;
  }

  .game-icon {
    width: 80px;
    height: 80px;
  }

  .play-button {
    padding: 1.1rem 2.5rem;
    font-size: 1.1rem;
  }

  .game-iframe {
    height: 450px;
  }

  .game-about-section {
    padding: 2.5rem;
    margin-bottom: 2.5rem;
  }

  .about-title {
    font-size: 1.8rem;
    margin-bottom: 1.8rem;
  }

  .control-button {
    width: 38px;
    height: 38px;
  }
}

@media (max-width: 768px) {
  .game-title {
    font-size: 2rem;
    margin: 1rem 0;
  }

  .breadcrumb {
    margin-bottom: 1rem;
    font-size: 0.8rem;
  }

  .separator {
    margin: 0 0.3rem;
  }

  .game-player-section {
    padding: 1rem;
    border-radius: 12px;
  }

  /* 移动端详情游戏布局调整 */
  .detail-games-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  .detail-games-horizontal {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  .detail-game-title {
    font-size: 0.7rem;
    padding: 0.4rem;
  }

  .game-main-container {
    margin-bottom: 1rem;
  }

  .game-preview-bg {
    height: 300px;
  }

  .game-overlay {
    gap: 1.5rem;
  }

  .game-icon {
    width: 60px;
    height: 60px;
  }

  .play-button {
    padding: 0.9rem 2rem;
    font-size: 1rem;
    gap: 0.6rem;
  }

  .game-iframe {
    height: 300px;
  }

  .game-controls {
    padding: 0.4rem;
  }

  .game-title-controls {
    font-size: 1.1rem;
  }

  .control-button {
    width: 36px;
    height: 36px;
  }

  .game-about-section {
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 12px;
  }

  .about-title {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }

  .about-content h3 {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }

  .about-content h4 {
    margin: 1.2rem 0 0.8rem;
  }

  .about-content p {
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }

  .game-categories {
    gap: 0.3rem;
  }

  .category-tag {
    padding: 0.3rem 0.8rem;
    font-size: 0.8rem;
  }

  .back-button {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }

  /* 网页全屏响应式调整 */
  .game-player-section.page-fullscreen {
    padding: 0.5rem;
  }

  .game-player-section.page-fullscreen .game-controls {
    padding: 0.3rem;
  }
}
</style>
