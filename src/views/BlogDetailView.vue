<template>
  <div class="app-container">
    <HeaderComponent />

    <main class="main-content">
      <!-- 加载状态 -->
      <div v-if="loading" class="loading-container">
        <div class="loading-spinner"></div>
        <p>Loading article...</p>
      </div>

      <!-- 博客未找到 -->
      <div v-else-if="!blog" class="not-found-container">
        <h1>Article Not Found</h1>
        <p>The article you're looking for doesn't exist.</p>
        <router-link to="/blog" class="back-button">Back to Blog</router-link>
      </div>

      <!-- 博客详情 -->
      <div v-else class="blog-detail">
        <!-- 面包屑导航 -->
        <nav class="breadcrumb">
          <router-link to="/">Home</router-link>
          <span class="separator">></span>
          <router-link to="/blog">Blog</router-link>
          <span class="separator">></span>
          <span class="current">{{ blog.title }}</span>
        </nav>

        <!-- 文章头部带背景图片 -->
        <div class="hero-section">
          <img :src="blog.imageUrl" :alt="blog.imageAlt" class="hero-background" />
          <div class="hero-overlay">
            <div class="hero-content">
              <div class="article-meta">
                <span class="article-date">{{ formatDate(blog.publishDate) }}</span>
              </div>

              <h1 class="article-title">{{ blog.title }}</h1>
              <p class="article-description">{{ blog.description }}</p>
            </div>
          </div>
        </div>

        <!-- 文章内容 -->
        <div class="article-content">
          <div class="content-main">
            <div v-html="blog.detailsHtml" class="article-body"></div>
          </div>
        </div>

        <!-- 返回按钮 -->
        <div class="navigation-actions">
          <router-link to="/blog" class="back-button">← Back to Blog</router-link>
        </div>
      </div>
    </main>

    <FooterComponent />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { blogs } from '@/data/blogs.js'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const route = useRoute()
const loading = ref(true)

// 根据addressBar找到对应的博客
const blog = computed(() => {
  return blogs.find((b) => b.addressBar === route.params.addressBar)
})

// 格式化日期
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// 设置SEO数据
useHead(
  computed(() => {
    if (!blog.value || !blog.value.seo) {
      return {
        title: 'Article | Fish Games Blog',
        meta: [
          {
            name: 'description',
            content: 'Read expert articles about fishkeeping and aquatic life',
          },
          { name: 'keywords', content: 'fish blog, aquarium tips' },
        ],
      }
    }

    return {
      title: blog.value.seo.title,
      meta: [
        { name: 'description', content: blog.value.seo.description },
        { name: 'keywords', content: blog.value.seo.keywords },
        { property: 'og:title', content: blog.value.seo.title },
        { property: 'og:description', content: blog.value.seo.description },
        { property: 'og:image', content: blog.value.imageUrl },
        { property: 'og:type', content: 'article' },
        { property: 'article:published_time', content: blog.value.publishDate },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: blog.value.seo.title },
        { name: 'twitter:description', content: blog.value.seo.description },
        { name: 'twitter:image', content: blog.value.imageUrl },
      ],
    }
  })
)

// 模拟加载
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 500)
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

/* 主要内容样式 */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
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

/* Hero 区域样式 */
.hero-section {
  position: relative;
  height: 500px;
  margin-bottom: 3rem;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.hero-background {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  display: flex;
  align-items: flex-end;
  padding: 3rem;
}

.hero-content {
  color: white;
  max-width: 800px;
}

.article-meta {
  margin-bottom: 1.5rem;
}

.article-date {
  color: #ffffff;
  opacity: 0.9;
  font-size: 0.9rem;
  background: rgba(0, 0, 0, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.article-title {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #ffffff;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.article-description {
  font-size: 1.2rem;
  color: #ffffff;
  opacity: 0.9;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* 文章内容 */
.article-content {
  margin-bottom: 3rem;
}

.content-main {
  background: rgba(0, 0, 0, 0.3);
  padding: 3rem;
  border-radius: 16px;
  border: 1px solid rgba(139, 92, 246, 0.2);
  max-width: 800px;
  margin: 0 auto;
}

.article-body {
  color: #e5e5e5;
  line-height: 1.8;
  font-size: 1.1rem;
}

.article-body h2 {
  color: #00d4ff;
  margin: 2rem 0 1rem;
  font-size: 1.8rem;
}

.article-body h3 {
  color: #8b5cf6;
  margin: 1.5rem 0 1rem;
  font-size: 1.4rem;
}

.article-body p {
  margin-bottom: 1.5rem;
}

.article-body ul,
.article-body ol {
  margin: 1rem 0 1.5rem 2rem;
}

.article-body li {
  margin-bottom: 0.5rem;
}

.article-body strong {
  color: #ffffff;
  font-weight: 600;
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
  .main-content {
    padding: 1.5rem;
  }

  .hero-section {
    height: 450px;
  }

  .hero-overlay {
    padding: 2.5rem;
  }

  .article-meta {
    margin-bottom: 1.2rem;
  }

  .article-date {
    font-size: 0.9rem;
  }

  .article-title {
    font-size: 2.5rem;
    margin-bottom: 1.2rem;
  }

  .article-description {
    font-size: 1.1rem;
  }

  .content-main {
    padding: 2.5rem;
    margin-bottom: 2.5rem;
  }

  .article-body {
    font-size: 1.05rem;
  }

  .article-body h2 {
    font-size: 1.7rem;
    margin: 1.8rem 0 0.8rem;
  }

  .article-body h3 {
    font-size: 1.3rem;
    margin: 1.3rem 0 0.8rem;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 1rem;
  }

  .hero-section {
    height: 350px;
  }

  .hero-overlay {
    padding: 2rem;
  }

  .article-meta {
    margin-bottom: 1rem;
  }

  .article-date {
    font-size: 0.85rem;
  }

  .article-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .article-description {
    font-size: 1rem;
  }

  .content-main {
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 12px;
  }

  .article-body {
    font-size: 1rem;
  }

  .article-body h2 {
    font-size: 1.5rem;
    margin: 1.5rem 0 0.8rem;
  }

  .article-body h3 {
    font-size: 1.2rem;
    margin: 1.2rem 0 0.8rem;
  }

  .article-body p {
    margin-bottom: 1.2rem;
  }

  .article-body ul,
  .article-body ol {
    margin: 0.8rem 0 1.2rem 1.5rem;
  }

  .back-button {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>
