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
  margin: 2rem auto;
  padding: 0 1rem;
}

@media (max-width: 1024px) {
  .container {
    padding: 0 1rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 0.5rem;
    margin: 1rem auto;
  }
}

.title-h1 {
  font-size: 2.6rem;
  margin-bottom: 1rem;
  text-align: center;
}

.title-h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

@media (max-width: 1024px) {
  .title-h1 {
    font-size: 2rem;
  }
  .title-h2 {
    font-size: 1.8rem;
  }
}

@media (max-width: 768px) {
  .title-h1 {
    font-size: 1.6rem;
    line-height: 1;
  }
  .title-h2 {
    font-size: 1.2rem;
    line-height: 1;
  }
}

/*  */
.details-html h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.details-html p {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.details-html ul {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
}
.details-html img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .details-html h3 {
    font-size: 1rem;
  }
  .details-html p {
    font-size: 0.8rem;
  }
  .details-html ul {
    font-size: 0.8rem;
    padding-left: 0.5rem;
  }
  .hidden-xs {
    display: none !important;
  }
}
</style>
