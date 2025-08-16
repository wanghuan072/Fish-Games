<template>
  <div class="app-container">
    <HeaderComponent />

    <main class="main-content">
      <div class="legal-header">
        <h1>Privacy Policy</h1>
        <p class="update-date">Last Updated: January 29, 2025</p>
      </div>

      <div class="legal-content">
        <section class="legal-section">
          <h2>1. Information We Collect</h2>
          <p>
            Fish Games collects information you provide directly to us, such as when you create an
            account, contact us, or use our interactive features. This may include your name, email
            address, and gameplay preferences.
          </p>
        </section>

        <section class="legal-section">
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our games and services</li>
            <li>Send you technical notices and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Analyze usage patterns to enhance user experience</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties
            without your consent, except as described in this policy. We may share information in
            response to legal requests or to protect our rights.
          </p>
        </section>

        <section class="legal-section">
          <h2>4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against
            unauthorized access, alteration, disclosure, or destruction. However, no method of
            transmission over the internet is 100% secure.
          </p>
        </section>

        <section class="legal-section">
          <h2>5. Cookies and Tracking</h2>
          <p>
            Our website uses cookies to enhance your browsing experience. You can choose to disable
            cookies through your browser settings, though some features may not function properly.
          </p>
        </section>

        <section class="legal-section">
          <h2>6. Children's Privacy</h2>
          <p>
            Our services are not intended for children under 13. We do not knowingly collect
            personal information from children under 13. If you become aware that a child has
            provided us with personal information, please contact us.
          </p>
        </section>

        <section class="legal-section">
          <h2>7. Changes to Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes
            by posting the new policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        <section class="legal-section">
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
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
  title: 'Privacy Policy - Fish Games',
  meta: [
    {
      name: 'description',
      content:
        'Privacy Policy for Fish Games. Learn how we collect, use, and protect your personal information.',
    },
    { name: 'keywords', content: 'privacy policy, data protection, fish games, user privacy' },
    { property: 'og:title', content: 'Privacy Policy - Fish Games' },
    {
      property: 'og:description',
      content:
        'Privacy Policy for Fish Games. Learn how we collect, use, and protect your personal information.',
    },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Privacy Policy - Fish Games' },
    {
      name: 'twitter:description',
      content:
        'Privacy Policy for Fish Games. Learn how we collect, use, and protect your personal information.',
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
