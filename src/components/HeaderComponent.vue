<template>
  <header class="site-header">
    <div class="header-content">
      <div class="logo">
        <img class="logo-icon" src="/images/logo.png" alt="Fish Games" />
        <span class="brand-name">Fishing Games</span>
      </div>

      <!-- 汉堡菜单按钮 -->
      <button
        class="hamburger-btn"
        @click="toggleMenu"
        :class="{ active: isMenuOpen }"
        aria-label="Toggle navigation menu"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <!-- 桌面端导航 -->
      <nav class="main-nav desktop-nav">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/games" class="nav-link">Games</router-link>
        <router-link to="/hot" class="nav-link">Hot Games</router-link>
        <router-link to="/new" class="nav-link">New Games</router-link>
        <router-link to="/updated" class="nav-link">Updated Games</router-link>
        <router-link to="/blog" class="nav-link">Blog</router-link>
      </nav>
    </div>

    <!-- 移动端导航菜单 -->
    <nav class="mobile-nav" :class="{ open: isMenuOpen }">
      <router-link to="/" class="mobile-nav-link" @click="closeMenu">Home</router-link>
      <router-link to="/games" class="mobile-nav-link" @click="closeMenu">Games</router-link>
      <router-link to="/hot" class="mobile-nav-link" @click="closeMenu">Hot Games</router-link>
      <router-link to="/new" class="mobile-nav-link" @click="closeMenu">New Games</router-link>
      <router-link to="/updated" class="mobile-nav-link" @click="closeMenu"
        >Updated Games</router-link
      >
      <router-link to="/blog" class="mobile-nav-link" @click="closeMenu">Blog</router-link>
    </nav>

    <!-- 遮罩层 -->
    <div v-if="isMenuOpen" class="mobile-overlay" @click="closeMenu"></div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
/* 头部样式 */
.site-header {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid #8b5cf6;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #00d4ff, #8b5cf6);
  border-radius: 12px;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #00d4ff, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 汉堡菜单按钮 */
.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;
}

.hamburger-line {
  width: 100%;
  height: 3px;
  background: linear-gradient(45deg, #00d4ff, #8b5cf6);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger-btn.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger-btn.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger-btn.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* 桌面端导航 */
.desktop-nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #e5e5e5;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  position: relative;
  font-weight: 500;
  overflow: hidden;
  border: 1px solid transparent;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(139, 92, 246, 0.2));
  transition: left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: -1;
}

.nav-link:hover {
  color: #ffffff;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 212, 255, 0.4);
  box-shadow: 0 8px 32px rgba(0, 212, 255, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1);
}

.nav-link:hover::before {
  left: 0;
}

.nav-link.router-link-active {
  color: #ffffff;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(139, 92, 246, 0.3));
  border: 1px solid rgba(0, 212, 255, 0.5);
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* 移动端导航 */
.mobile-nav {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 100;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.mobile-nav.open {
  transform: translateX(0);
}

.mobile-nav-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(139, 92, 246, 0.2));
  border: 2px solid transparent;
  transition: all 0.3s ease;
  text-align: center;
  min-width: 200px;
}

.mobile-nav-link:hover {
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(139, 92, 246, 0.3));
  border-color: rgba(0, 212, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
}

/* 遮罩层 */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .header-content {
    padding: 1rem 1.5rem;
  }

  .logo {
    font-size: 1.8rem;
  }

  .desktop-nav {
    gap: 1.5rem;
  }

  .nav-link {
    padding: 0.6rem 1.2rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 768px) {
  .header-content {
    padding: 1rem;
  }

  .logo {
    font-size: 1.6rem;
  }

  /* 隐藏桌面端导航，显示汉堡菜单 */
  .desktop-nav {
    display: none;
  }

  .hamburger-btn {
    display: flex;
  }

  /* 显示移动端导航 */
  .mobile-nav {
    display: flex;
  }
}

@media (max-width: 480px) {
  .header-content {
    padding: 0.8rem;
  }

  .logo {
    font-size: 1.4rem;
  }

  .hamburger-btn {
    width: 26px;
    height: 20px;
  }

  .mobile-nav-link {
    font-size: 1.3rem;
    padding: 0.8rem 1.5rem;
    min-width: 180px;
  }
}
</style>
