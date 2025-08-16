<template>
  <div class="app-container">
    <HeaderComponent />

    <main class="main-content">
      <div class="legal-header">
        <h1>Terms of Use</h1>
        <p class="update-date">Last Updated: January 29, 2025</p>
      </div>

      <div class="legal-content">
        <section class="legal-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Fish Games, you accept and agree to be bound by the terms and
            provision of this agreement. If you do not agree to abide by the above, please do not
            use this service.
          </p>
        </section>

        <section class="legal-section">
          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of Fish Games materials for
            personal, non-commercial transitory viewing only. This is the grant of a license, not a
            transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>modify or copy the materials</li>
            <li>use the materials for any commercial purpose or for any public display</li>
            <li>attempt to reverse engineer any software contained on Fish Games website</li>
            <li>remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>3. Disclaimer</h2>
          <p>
            The materials on Fish Games website are provided on an 'as is' basis. Fish Games makes
            no warranties, expressed or implied, and hereby disclaims and negates all other
            warranties including without limitation, implied warranties or conditions of
            merchantability, fitness for a particular purpose, or non-infringement of intellectual
            property or other violation of rights.
          </p>
        </section>

        <section class="legal-section">
          <h2>4. Limitations</h2>
          <p>
            In no event shall Fish Games or its suppliers be liable for any damages (including,
            without limitation, damages for loss of data or profit, or due to business interruption)
            arising out of the use or inability to use the materials on Fish Games website, even if
            Fish Games or an authorized representative has been notified orally or in writing of the
            possibility of such damage.
          </p>
        </section>

        <section class="legal-section">
          <h2>5. Accuracy of Materials</h2>
          <p>
            The materials appearing on Fish Games website could include technical, typographical, or
            photographic errors. Fish Games does not warrant that any of the materials on its
            website are accurate, complete, or current.
          </p>
        </section>

        <section class="legal-section">
          <h2>6. User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the service for any unlawful purpose or to solicit others to unlawful acts</li>
            <li>
              Violate any international, federal, provincial, or state regulations, rules, laws, or
              local ordinances
            </li>
            <li>
              Infringe upon or violate our intellectual property rights or the intellectual property
              rights of others
            </li>
            <li>
              Harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate
            </li>
            <li>Submit false or misleading information</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>7. Modifications</h2>
          <p>
            Fish Games may revise these terms of service for its website at any time without notice.
            By using this website, you are agreeing to be bound by the then current version of these
            terms of service.
          </p>
        </section>

        <section class="legal-section">
          <h2>8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws and
            you irrevocably submit to the exclusive jurisdiction of the courts in that state or
            location.
          </p>
        </section>

        <section class="legal-section">
          <h2>9. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Use, please contact us at:
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
  title: 'Terms of Use - Fish Games',
  meta: [
    {
      name: 'description',
      content:
        'Terms of Use for Fish Games. Learn about the rules and guidelines for using our gaming platform.',
    },
    { name: 'keywords', content: 'terms of use, terms of service, fish games, user agreement' },
    { property: 'og:title', content: 'Terms of Use - Fish Games' },
    {
      property: 'og:description',
      content:
        'Terms of Use for Fish Games. Learn about the rules and guidelines for using our gaming platform.',
    },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Terms of Use - Fish Games' },
    {
      name: 'twitter:description',
      content:
        'Terms of Use for Fish Games. Learn about the rules and guidelines for using our gaming platform.',
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
