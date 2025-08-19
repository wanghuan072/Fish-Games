<template>
  <div class="app-container">
    <HeaderComponent />

    <main class="main-content">
      <div class="legal-header">
        <h1>About Fishing Games</h1>
        <p class="update-date">Last Updated: January 29, 2025</p>
      </div>

      <div class="legal-content">
        <section class="legal-section">
          <h2>Our Mission</h2>
          <p>
            Fishing Games is dedicated to providing immersive aquatic gaming experiences that
            challenge your strategic thinking and create unforgettable underwater adventures. We
            believe in the power of games to educate, entertain, and inspire players of all ages.
          </p>
        </section>

        <section class="legal-section">
          <h2>What We Do</h2>
          <p>
            We curate and develop a diverse collection of fish-themed and aquatic games that range
            from educational simulations to thrilling adventures. Our platform offers:
          </p>
          <ul>
            <li>Educational games about marine life and ocean conservation</li>
            <li>Strategic aquarium management simulations</li>
            <li>Adventure games set in underwater worlds</li>
            <li>Puzzle games featuring aquatic themes</li>
            <li>Interactive experiences that promote ocean awareness</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>Our Values</h2>
          <p>
            <strong>Education:</strong> We believe gaming can be a powerful educational tool,
            helping players learn about marine ecosystems and ocean conservation.
          </p>
          <p>
            <strong>Innovation:</strong> We continuously explore new technologies and gaming
            mechanics to create unique aquatic experiences.
          </p>
          <p>
            <strong>Accessibility:</strong> Our games are designed to be enjoyable for players of
            all skill levels and backgrounds.
          </p>
          <p>
            <strong>Community:</strong> We foster a community of ocean enthusiasts and gamers who
            share a passion for aquatic life.
          </p>
        </section>

        <section class="legal-section">
          <h2>Platform Features</h2>
          <p>
            Fishing Games offers a comprehensive gaming platform with advanced features designed to
            enhance your gaming experience. Our platform supports various game formats and provides
            seamless gameplay across different devices.
          </p>
        </section>

        <section class="legal-section">
          <h2>Quality Assurance</h2>
          <p>
            We maintain high standards for all games featured on our platform. Each game undergoes
            careful review to ensure quality, performance, and user satisfaction. We regularly
            update our content to provide the best possible gaming experience.
          </p>
        </section>

        <section class="legal-section">
          <h2>Contact Us</h2>
          <p>
            Have questions, suggestions, or want to learn more about Fishing Games? We'd love to
            hear from you:
            <a href="mailto:kadiyamobi89@gmail.com" class="contact-link">kadiyamobi89@gmail.com</a>
          </p>
        </section>
      </div>
    </main>

    <FooterComponent />
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

// 设置SEO数据
useHead({
  title: 'About Us - Fishing Games',
  meta: [
    {
      name: 'description',
      content:
        'Learn about Fishing Games - our mission, values, and commitment to creating immersive aquatic gaming experiences.',
    },
    {
      name: 'keywords',
      content:
        'about Fishing Games, aquatic games, ocean conservation, marine education, game development',
    },
    { property: 'og:title', content: 'About Us - Fishing Games' },
    {
      property: 'og:description',
      content:
        'Learn about Fishing Games - our mission, values, and commitment to creating immersive aquatic gaming experiences.',
    },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'About Us - Fishing Games' },
    {
      name: 'twitter:description',
      content:
        'Learn about Fishing Games - our mission, values, and commitment to creating immersive aquatic gaming experiences.',
    },
  ],
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
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

/* 法律页面头部 */
.legal-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid rgba(139, 92, 246, 0.3);
}

.legal-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ffd700, #ffb347);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.update-date {
  color: #8b5cf6;
  font-size: 1rem;
  font-weight: 500;
}

/* 法律内容 */
.legal-content {
  background: rgba(0, 0, 0, 0.3);
  padding: 3rem;
  border-radius: 16px;
  border: 1px solid rgba(139, 92, 246, 0.2);
}

.legal-section {
  margin-bottom: 2.5rem;
}

.legal-section:last-child {
  margin-bottom: 0;
}

.legal-section h2 {
  color: #00d4ff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.legal-section p {
  color: #e5e5e5;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.legal-section ul {
  color: #e5e5e5;
  line-height: 1.8;
  margin-left: 2rem;
  margin-bottom: 1rem;
}

.legal-section li {
  margin-bottom: 0.5rem;
}

.legal-section strong {
  color: #ffd700;
  font-weight: 600;
}

.contact-link {
  color: #8b5cf6;
  text-decoration: none;
  font-weight: 500;
}

.contact-link:hover {
  color: #00d4ff;
  text-decoration: underline;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .main-content {
    padding: 1.5rem;
  }

  .legal-header {
    margin-bottom: 2.5rem;
    padding-bottom: 1.5rem;
  }

  .legal-header h1 {
    font-size: 2.2rem;
    margin-bottom: 0.8rem;
  }

  .update-date {
    font-size: 0.95rem;
  }

  .legal-content {
    padding: 2.5rem;
  }

  .legal-section {
    margin-bottom: 2rem;
  }

  .legal-section h2 {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
  }

  .legal-section p {
    font-size: 0.95rem;
    margin-bottom: 0.8rem;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 1rem;
  }

  .legal-header {
    margin-bottom: 2rem;
    padding-bottom: 1.2rem;
  }

  .legal-header h1 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  .update-date {
    font-size: 0.9rem;
  }

  .legal-content {
    padding: 2rem;
    border-radius: 12px;
  }

  .legal-section {
    margin-bottom: 1.8rem;
  }

  .legal-section h2 {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }

  .legal-section p {
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
    line-height: 1.6;
  }

  .legal-section ul {
    margin-left: 1.5rem;
    margin-bottom: 0.8rem;
  }

  .legal-section li {
    margin-bottom: 0.4rem;
  }

  .contact-link {
    font-size: 0.9rem;
  }
}
</style>
