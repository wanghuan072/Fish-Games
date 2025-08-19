<template>
  <div class="app-container">
    <HeaderComponent />

    <main class="main-content">
      <div class="legal-header">
        <h1>Contact Us</h1>
        <p class="update-date">Get in Touch - We'd Love to Hear From You</p>
      </div>

      <div class="legal-content">
        <section class="legal-section">
          <h2>General Information</h2>
          <p>
            Have questions about Fishing Games? Need technical support? Want to suggest new features
            or report a bug? We're here to help! Feel free to reach out to us using the contact
            information below.
          </p>
        </section>

        <section class="legal-section">
          <h2>Email Contact</h2>
          <p>
            For all inquiries, please email us at:
            <a href="mailto:kadiyamobi89@gmail.com" class="contact-link">kadiyamobi89@gmail.com</a>
          </p>
          <p>
            We typically respond to emails within 24-48 hours during business days. Please be as
            specific as possible in your message to help us assist you better.
          </p>
        </section>

        <section class="legal-section">
          <h2>Types of Inquiries</h2>
          <p>We welcome the following types of contact:</p>
          <ul>
            <li>
              <strong>Technical Support:</strong> Issues with games, bugs, or technical problems
            </li>
            <li><strong>General Questions:</strong> Questions about our games or platform</li>
            <li><strong>Feature Requests:</strong> Suggestions for new games or features</li>
            <li>
              <strong>Business Inquiries:</strong> Partnership opportunities or collaborations
            </li>
            <li><strong>Media Requests:</strong> Press inquiries or interview requests</li>
            <li><strong>Legal Matters:</strong> Copyright, privacy, or legal concerns</li>
            <li><strong>Feedback:</strong> General feedback about your experience</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>Contact Guidelines</h2>
          <p>
            To help us provide efficient assistance, please provide clear and detailed information
            about your inquiry. Include relevant details such as your device, browser, or specific
            game if applicable.
          </p>
        </section>

        <section class="legal-section">
          <h2>Response Policy</h2>
          <p>
            We strive to respond to all inquiries in a timely manner. Response times may vary
            depending on the nature and complexity of your request. We appreciate your patience and
            will address your inquiry as soon as possible.
          </p>
        </section>

        <section class="legal-section">
          <h2>Communication Policy</h2>
          <p>
            All communications are handled in accordance with our Privacy Policy. We maintain
            confidentiality and will not share your information with third parties without your
            explicit consent.
          </p>
        </section>

        <section class="legal-section contact-cta">
          <h2>Ready to Get in Touch?</h2>
          <p>
            We're excited to hear from you! Whether you have a question, suggestion, or just want to
            say hello, don't hesitate to reach out.
          </p>
          <p>
            <strong>Email us at:</strong>
            <a href="mailto:kadiyamobi89@gmail.com" class="contact-link-large"
              >kadiyamobi89@gmail.com</a
            >
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
  title: 'Contact Us - Fishing Games',
  meta: [
    {
      name: 'description',
      content:
        "Contact Fishing Games for support, questions, or feedback. We're here to help with all your aquatic gaming needs.",
    },
    {
      name: 'keywords',
      content: 'contact Fishing Games, customer support, help, feedback, questions',
    },
    { property: 'og:title', content: 'Contact Us - Fishing Games' },
    {
      property: 'og:description',
      content:
        "Contact Fishing Games for support, questions, or feedback. We're here to help with all your aquatic gaming needs.",
    },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Contact Us - Fishing Games' },
    {
      name: 'twitter:description',
      content:
        "Contact Fishing Games for support, questions, or feedback. We're here to help with all your aquatic gaming needs.",
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

/* 特殊联系方式样式 */
.contact-cta {
  background: rgba(139, 92, 246, 0.1);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(139, 92, 246, 0.3);
  text-align: center;
}

.contact-link-large {
  color: #00d4ff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(0, 212, 255, 0.1);
  border-radius: 8px;
  margin-top: 0.5rem;
  transition: all 0.3s ease;
}

.contact-link-large:hover {
  background: rgba(0, 212, 255, 0.2);
  transform: translateY(-2px);
  text-decoration: none;
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

  .contact-cta {
    padding: 1.8rem;
  }

  .contact-link-large {
    font-size: 1.05rem;
    padding: 0.45rem 0.9rem;
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

  .contact-cta {
    padding: 1.5rem;
  }

  .contact-link-large {
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>
