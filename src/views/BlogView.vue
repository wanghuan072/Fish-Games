<template>
  <div class="app-container">
    <HeaderComponent />

    <main class="main-content">
      <div class="blog-header">
        <h1>Fish Games Blog</h1>
        <p>Discover expert tips, guides, and insights about aquatic life and fishkeeping</p>
      </div>

      <div class="blog-grid">
        <article
          v-for="blog in blogs"
          :key="blog.id"
          class="blog-card"
          @click="navigateToBlog(blog)"
        >
          <div class="blog-image">
            <img :src="blog.imageUrl" :alt="blog.imageAlt" />
          </div>

          <div class="blog-content">
            <div class="blog-meta">
              <span class="blog-date">{{ formatDate(blog.publishDate) }}</span>
            </div>

            <h2 class="blog-title">{{ blog.title }}</h2>
            <p class="blog-description">{{ blog.description }}</p>

            <div class="blog-footer">
              <span class="read-more">Read More →</span>
            </div>
          </div>
        </article>
      </div>
    </main>

    <FooterComponent />
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'
import { blogs } from '@/data/blogs.js'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const route = useRoute()
const router = useRouter()

// 设置SEO数据
useHead({
  title: route.meta.seo?.title || 'Blog - Fish Games',
  meta: [
    {
      name: 'description',
      content:
        route.meta.seo?.description || 'Read expert articles about fishkeeping and aquatic life',
    },
    {
      name: 'keywords',
      content: route.meta.seo?.keywords || 'fish blog, aquarium tips, fishkeeping articles',
    },
    { property: 'og:title', content: route.meta.seo?.title || 'Blog - Fish Games' },
    {
      property: 'og:description',
      content:
        route.meta.seo?.description || 'Read expert articles about fishkeeping and aquatic life',
    },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: route.meta.seo?.title || 'Blog - Fish Games' },
    {
      name: 'twitter:description',
      content:
        route.meta.seo?.description || 'Read expert articles about fishkeeping and aquatic life',
    },
  ],
})

// 格式化日期
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// 导航到博客详情
const navigateToBlog = (blog) => {
  router.push(`/blog/${blog.addressBar}`)
}
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

/* 博客头部 */
.blog-header {
  text-align: center;
  margin-bottom: 4rem;
}

.blog-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ffd700, #ffb347);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.blog-header p {
  font-size: 1.2rem;
  color: #e5e5e5;
  opacity: 0.8;
}

/* 博客网格 */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* 博客卡片 */
.blog-card {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  border: 1px solid rgba(139, 92, 246, 0.2);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 212, 255, 0.2);
  border-color: rgba(0, 212, 255, 0.4);
}

.blog-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-image img {
  transform: scale(1.05);
}

.blog-content {
  padding: 1.5rem;
}

.blog-meta {
  margin-bottom: 1rem;
}

.blog-date {
  color: #8b5cf6;
  font-size: 0.9rem;
  font-weight: 500;
}

.blog-title {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #ffffff;
  line-height: 1.4;
}

.blog-description {
  color: #e5e5e5;
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.blog-footer {
  display: flex;
  justify-content: flex-end;
}

.read-more {
  color: #00d4ff;
  font-weight: 500;
  font-size: 0.9rem;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .main-content {
    padding: 1.5rem;
  }

  .blog-header {
    margin-bottom: 3rem;
  }

  .blog-header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.8rem;
  }

  .blog-header p {
    font-size: 1.1rem;
  }

  .blog-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.8rem;
  }

  .blog-content {
    padding: 1.3rem;
  }

  .blog-title {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }

  .blog-description {
    font-size: 0.95rem;
    margin-bottom: 1.2rem;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 1rem;
  }

  .blog-header {
    margin-bottom: 2.5rem;
  }

  .blog-header h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .blog-header p {
    font-size: 1rem;
  }

  .blog-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .blog-card {
    border-radius: 12px;
  }

  .blog-image {
    height: 180px;
  }

  .blog-content {
    padding: 1.2rem;
  }

  .blog-title {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }

  .blog-description {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .blog-date {
    font-size: 0.85rem;
  }

  .read-more {
    font-size: 0.85rem;
  }
}
</style>
