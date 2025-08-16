<template>
  <div class="app-container">
    <HeaderComponent />

    <main class="container">
      <!-- 动态渲染所有分类 -->
      <section class="categories-section">
        <h1>Featured Fish Games</h1>

        <template v-for="category in displayCategories" :key="category.id">
          <GameGrid
            :category="category.id"
            show-title
            :title="category.name"
            :description="category.description"
            :max-items="13"
            :more-to="{ name: 'games-category', params: { categoryId: category.id } }"
          />
        </template>
      </section>

      <section class="about-section">
        <h2>About Fish Games</h2>
        <div class="about-content">
          <p>
            Welcome to Fish Games, your ultimate destination for aquatic gaming adventures! Dive
            into our carefully curated collection of fish-themed games that will take you on an
            underwater journey like no other.
          </p>
          <p>
            From peaceful fishing simulations to exciting underwater adventures, our platform offers
            games for every type of ocean enthusiast. Whether you're looking to relax with a casual
            fishing experience or challenge yourself with action-packed aquatic battles, Fish Games
            has something special waiting for you.
          </p>
          <p>
            Join millions of players worldwide who have discovered the magic of underwater gaming.
            Start your aquatic adventure today!
          </p>
        </div>
      </section>

      <section class="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-content">
          <div class="faq-item">
            <h3>What types of fish games do you offer?</h3>
            <p>
              We offer a wide variety of fish-themed games including fishing simulators, underwater
              adventures, aquarium management games, and marine ecosystem builders.
            </p>
          </div>
          <div class="faq-item">
            <h3>Are the games free to play?</h3>
            <p>
              Most of our games are free to play with optional premium features. Each game clearly
              displays its pricing model before you start playing.
            </p>
          </div>
          <div class="faq-item">
            <h3>Do I need to create an account?</h3>
            <p>
              While you can play many games without an account, creating one allows you to save your
              progress, unlock achievements, and access exclusive content.
            </p>
          </div>
          <div class="faq-item">
            <h3>Can I play these games on mobile devices?</h3>
            <p>
              Yes! All our games are optimized for both desktop and mobile devices, ensuring a
              smooth gaming experience wherever you are.
            </p>
          </div>
          <div class="faq-item">
            <h3>How often do you add new games?</h3>
            <p>
              We regularly update our collection with new games every month. Follow us on social
              media to stay updated on the latest additions!
            </p>
          </div>
        </div>
      </section>
    </main>

    <FooterComponent />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import GameGrid from '@/components/GameGrid.vue'
import { games, gameCategories } from '@/data/games.js'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

// 只显示有游戏的分类
const displayCategories = computed(() => {
  return gameCategories.filter((category) =>
    games.some((game) => game.categories && game.categories.includes(category.id))
  )
})

// SEO 由全局路由守卫统一处理
</script>

<style scoped>
/* 全局样式 */
.app-container {
  min-height: 100vh;
  background: transparent; /* 移除背景，让粒子效果可见 */
  color: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
}

/* 分类区域样式 */
.categories-section {
  margin-bottom: 4rem;
}

.categories-section h1 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ffd700, #ffb347);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  text-align: center;
  font-size: 1.2rem;
  color: #e5e5e5;
  opacity: 0.9;
  margin-bottom: 3rem;
}

.category-more {
  display: flex;
  justify-content: center;
  margin: 1rem 0 3rem;
}

.more-link {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  color: #ffffff;
  text-decoration: none;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(139, 92, 246, 0.3));
  border: 1px solid rgba(0, 212, 255, 0.5);
  transition: all 0.2s ease;
}

.more-link:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(0, 212, 255, 0.25);
}

/* About区域样式 */
.about-section {
  margin-bottom: 4rem;
  background: rgba(0, 0, 0, 0.3);
  padding: 3rem;
  border-radius: 16px;
  border: 1px solid rgba(139, 92, 246, 0.2);
}

.about-section h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #00d4ff;
}

.about-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #e5e5e5;
}

/* FAQ区域样式 */
.faq-section {
  background: rgba(0, 0, 0, 0.3);
  padding: 3rem;
  border-radius: 16px;
  border: 1px solid rgba(0, 212, 255, 0.2);
}

.faq-section h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #ffd700;
}

.faq-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(45, 45, 45, 0.5);
  border-radius: 8px;
  border-left: 4px solid #8b5cf6;
}

.faq-item h3 {
  color: #00d4ff;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.faq-item p {
  color: #e5e5e5;
  line-height: 1.6;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .main-content {
    padding: 1.5rem;
  }

  .categories-section h1 {
    font-size: 2.5rem;
    margin-bottom: 0.8rem;
  }

  .section-description {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }

  .about-section,
  .faq-section {
    padding: 2.5rem;
    margin-bottom: 3rem;
  }

  .about-section h2,
  .faq-section h2 {
    font-size: 2.2rem;
    margin-bottom: 1.8rem;
  }

  .about-content p {
    font-size: 1.05rem;
  }

  .faq-item {
    padding: 1.3rem;
    margin-bottom: 1.8rem;
  }

  .faq-item h3 {
    font-size: 1.15rem;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 1rem;
  }

  .categories-section {
    margin-bottom: 3rem;
  }

  .categories-section h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .section-description {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .about-section,
  .faq-section {
    padding: 2rem;
    margin-bottom: 2.5rem;
    border-radius: 12px;
  }

  .about-section h2,
  .faq-section h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  .about-content p {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 1.2rem;
  }

  .faq-item {
    padding: 1.2rem;
    margin-bottom: 1.5rem;
    border-radius: 6px;
  }

  .faq-item h3 {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }

  .faq-item p {
    font-size: 0.95rem;
    line-height: 1.5;
  }
}
</style>