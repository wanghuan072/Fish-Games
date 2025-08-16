<template>
  <footer class="site-footer">
    <div class="footer-content">
      <!-- 左侧品牌区域 -->
      <div class="footer-brand">
        <div class="brand-logo">
          <img class="logo-icon" src="/images/logo.png" alt="Fish Games" />
          <span class="brand-name">Fishing Games</span>
        </div>
        <p class="brand-description">
          Immersive aquatic gaming experience that challenges your strategic thinking and creates
          your own legend in infinite underwater possibilities.
        </p>
        <div class="social-links">
          <a href="#" class="social-link" aria-label="Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="Twitter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
              />
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="X">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- 快速链接 -->
      <div class="footer-section">
        <h3 class="section-title">Quick Links</h3>
        <ul class="footer-links">
          <li><router-link to="/" class="footer-link">Home</router-link></li>
          <li><router-link to="/games" class="footer-link">Games</router-link></li>
          <li><router-link to="/blog" class="footer-link">Blog</router-link></li>
        </ul>
      </div>

      <!-- 游戏分类 -->
      <div class="footer-section">
        <h3 class="section-title">Game Categories</h3>
        <ul class="footer-links">
          <li>
            <router-link to="/games/great-fishing" class="footer-link">Great Fishing</router-link>
          </li>
          <li>
            <router-link to="/games/growing-fish" class="footer-link">Growing Fish</router-link>
          </li>
          <li>
            <router-link to="/games/save-the-fish" class="footer-link">Save the Fish</router-link>
          </li>
          <li>
            <router-link to="/games/fishing-with-friends" class="footer-link"
              >Fishing with Friends</router-link
            >
          </li>
        </ul>
      </div>

      <!-- 法律信息 -->
      <div class="footer-section">
        <h3 class="section-title">Legal</h3>
        <ul class="footer-links">
          <li>
            <router-link to="/privacy-policy" class="footer-link">Privacy Policy</router-link>
          </li>
          <li><router-link to="/terms-of-use" class="footer-link">Terms of Use</router-link></li>
          <li><router-link to="/copyright" class="footer-link">Copyright</router-link></li>
          <li><router-link to="/about-us" class="footer-link">About Us</router-link></li>
          <li><router-link to="/contact-us" class="footer-link">Contact Us</router-link></li>
        </ul>
      </div>
    </div>

    <!-- 底部版权 -->
    <div class="footer-bottom">
      <p>&copy; 2025 Fish Games. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
/* 底部样式 */
.site-footer {
  background: rgba(0, 0, 0, 0.9);
  border-top: 2px solid #8b5cf6;
  color: #e5e5e5;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
}

/* 品牌区域 */
.footer-brand {
  max-width: 350px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.logo-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #00d4ff, #8b5cf6);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  color: white;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #00d4ff, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-description {
  color: #a1a1aa;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

/* 社交媒体链接 */
.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e5e5e5;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  background: rgba(0, 212, 255, 0.2);
  color: #00d4ff;
  transform: translateY(-2px);
}

/* 页脚区块 */
.footer-section {
  min-width: 0;
}

.section-title {
  color: #8b5cf6;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-link {
  color: #a1a1aa;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  display: block;
}

.footer-link:hover {
  color: #00d4ff;
}

/* 底部版权 */
.footer-bottom {
  border-top: 1px solid rgba(139, 92, 246, 0.2);
  padding: 1.5rem 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
}

.footer-bottom p {
  margin: 0;
  color: #71717a;
  font-size: 0.9rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    padding: 2.5rem 1.5rem 1.5rem;
  }

  .footer-brand {
    grid-column: 1 / -1;
    max-width: none;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .brand-logo {
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }

  .section-title {
    font-size: 1rem;
  }

  .footer-link {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 1rem 1rem;
    text-align: center;
  }

  .footer-brand {
    margin-bottom: 0;
  }

  .brand-name {
    font-size: 1.3rem;
  }

  .brand-description {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .footer-section {
    text-align: center;
  }

  .section-title {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }

  .footer-links li {
    margin-bottom: 0.5rem;
  }

  .footer-link {
    font-size: 0.85rem;
  }

  .social-links {
    justify-content: center;
    gap: 0.8rem;
  }

  .social-link {
    width: 36px;
    height: 36px;
  }

  .footer-bottom {
    padding: 1.25rem 0;
  }

  .footer-bottom p {
    font-size: 0.85rem;
    padding: 0 1rem;
  }
}
</style>
