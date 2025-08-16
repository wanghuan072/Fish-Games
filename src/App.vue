<template>
  <ParticleEffect />
  <router-view />
</template>

<script setup>
import ParticleEffect from '@/components/ParticleEffect.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px; /* 基础字体大小 */
  scroll-behavior: smooth;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #ffffff;
  background: #1a1a1a;
  overflow-x: hidden; /* 防止水平滚动条 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  position: relative;
  min-height: 100vh;
  width: 100%;
}

/* 通用容器样式 */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (max-width: 1024px) {
  .container {
    padding: 0 1.5rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
}

/* 响应式显示/隐藏工具类 */
@media (max-width: 1024px) {
  .hide-tablet {
    display: none !important;
  }
}

@media (max-width: 768px) {
  .hide-mobile {
    display: none !important;
  }
}

@media (min-width: 769px) {
  .show-mobile-only {
    display: none !important;
  }
}

@media (min-width: 1025px) {
  .show-tablet-only {
    display: none !important;
  }
}

/* 文本对齐工具类 */
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}

@media (max-width: 768px) {
  .text-center-mobile {
    text-align: center;
  }
  .text-left-mobile {
    text-align: left;
  }
}

/* 滚动条美化 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(139, 92, 246, 0.6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(139, 92, 246, 0.8);
}

/* 选择文本样式 */
::selection {
  background: rgba(0, 212, 255, 0.3);
  color: #ffffff;
}
</style>
