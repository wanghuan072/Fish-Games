<template>
  <div class="app-container">
    <HeaderComponent />

    <main class="main-content">
      <div class="legal-header">
        <h1>Copyright Information</h1>
        <p class="update-date">Last Updated: January 29, 2025</p>
      </div>

      <div class="legal-content">
        <section class="legal-section">
          <h2>1. Copyright Notice</h2>
          <p>
            All content included on Fish Games website, such as text, graphics, logos, images, audio
            clips, digital downloads, data compilations, and software, is the property of Fish Games
            or its content suppliers and protected by international copyright laws.
          </p>
        </section>

        <section class="legal-section">
          <h2>2. Trademark Information</h2>
          <p>
            Fish Games and the Fish Games logo are trademarks of Fish Games. All other trademarks,
            service marks, and trade names used in this site are the property of their respective
            owners.
          </p>
        </section>

        <section class="legal-section">
          <h2>3. Game Content</h2>
          <p>
            All games featured on Fish Games are either original creations or used with proper
            licensing agreements. Game developers and publishers retain their respective copyrights
            and intellectual property rights to their games.
          </p>
        </section>

        <section class="legal-section">
          <h2>4. User-Generated Content</h2>
          <p>
            Any content you submit to Fish Games, including but not limited to reviews, comments,
            suggestions, and feedback, becomes the property of Fish Games and may be used, copied,
            sublicensed, adapted, transmitted, distributed, publicly performed, published, displayed
            or deleted as we see fit.
          </p>
        </section>

        <section class="legal-section">
          <h2>5. Copyright Infringement Claims</h2>
          <p>
            Fish Games respects the intellectual property rights of others. If you believe that your
            copyrighted work has been copied in a way that constitutes copyright infringement and is
            accessible on this site, please notify us immediately.
          </p>
          <p>
            To file a copyright infringement notification, please provide the following information:
          </p>
          <ul>
            <li>A description of the copyrighted work that you claim has been infringed</li>
            <li>A description of where the material is located on the site</li>
            <li>Your address, telephone number, and email address</li>
            <li>A statement that you have a good faith belief that the use is not authorized</li>
            <li>A statement that the information in your notification is accurate</li>
            <li>Your physical or electronic signature</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>6. Fair Use</h2>
          <p>
            We support fair use of copyrighted material for purposes such as criticism, comment,
            news reporting, teaching, scholarship, and research. Any use of copyrighted material on
            our site falls within these fair use guidelines.
          </p>
        </section>

        <section class="legal-section">
          <h2>7. Third-Party Content</h2>
          <p>
            Some content on Fish Games may be provided by third parties. We do not control
            third-party content and are not responsible for any copyright infringement by such third
            parties. Users should respect all applicable copyright laws.
          </p>
        </section>

        <section class="legal-section">
          <h2>8. License to Use</h2>
          <p>
            Subject to these terms, Fish Games grants you a limited, non-exclusive, non-transferable
            license to access and use the website for personal, non-commercial purposes only.
          </p>
        </section>

        <section class="legal-section">
          <h2>9. Contact for Copyright Issues</h2>
          <p>
            For all copyright-related inquiries or to report copyright infringement, please contact
            us at:
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
  title: 'Copyright Information - Fish Games',
  meta: [
    {
      name: 'description',
      content:
        'Copyright information for Fish Games. Learn about intellectual property rights and usage guidelines.',
    },
    {
      name: 'keywords',
      content: 'copyright, intellectual property, fish games, trademark, fair use',
    },
    { property: 'og:title', content: 'Copyright Information - Fish Games' },
    {
      property: 'og:description',
      content:
        'Copyright information for Fish Games. Learn about intellectual property rights and usage guidelines.',
    },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Copyright Information - Fish Games' },
    {
      name: 'twitter:description',
      content:
        'Copyright information for Fish Games. Learn about intellectual property rights and usage guidelines.',
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
