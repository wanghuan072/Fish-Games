<template>
  <canvas ref="canvasRef" class="particle-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let animationFrameId = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  let width = (canvas.width = window.innerWidth)
  let height = (canvas.height = window.innerHeight)

  // 设置画布背景
  const drawBackground = () => {
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, '#1a1a1a')
    gradient.addColorStop(1, '#2d2d2d')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
  }

  // Fish Games主题颜色数组 - 海洋和游戏主题
  const colors = [
    'rgba(0, 212, 255, 0.6)', // 霓虹蓝 - 主要品牌色
    'rgba(139, 92, 246, 0.6)', // 霓虹紫 - 主要品牌色
    'rgba(255, 215, 0, 0.6)', // 金色 - 按钮色
    'rgba(255, 179, 71, 0.6)', // 金橙色 - 按钮色
    'rgba(0, 150, 255, 0.5)', // 深海蓝
    'rgba(64, 224, 208, 0.5)', // 青绿色 - 海水色
    'rgba(102, 255, 204, 0.4)', // 浅绿色 - 海藻色
    'rgba(135, 206, 250, 0.5)', // 天蓝色
    'rgba(72, 209, 204, 0.5)', // 中等青绿色
    'rgba(173, 216, 230, 0.4)', // 浅蓝色
  ]

  // 设置线条宽度
  ctx.lineWidth = 1

  window.addEventListener('resize', resize, { passive: true })
  function resize() {
    width = canvas.width = window.innerWidth
    height = canvas.height = window.innerHeight
    ctx.lineWidth = 1 // Re-apply line width after resize

    // 响应式调整粒子数量
    const newParticleCount = getParticleCount()
    if (newParticleCount > stars.length) {
      // 添加粒子
      for (let i = stars.length; i < newParticleCount; i++) {
        stars.push(new Star(Math.random() * width, Math.random() * height, 1))
      }
    } else if (newParticleCount < stars.length) {
      // 移除粒子
      stars.splice(newParticleCount)
    }
    particleCount = newParticleCount

    // 更新鼠标连线透明度
    const mouseLineOpacity = width > 1024 ? 0.25 : width > 768 ? 0.3 : 0.35
    mouseStar.lineColor = `rgba(0, 212, 255, ${mouseLineOpacity})`

    // 更新所有现有粒子的连线透明度
    const lineOpacity = width > 1024 ? '0.12)' : width > 768 ? '0.15)' : '0.18)'
    stars.forEach((star) => {
      star.lineColor = star.color.replace(/0\.\d+\)/, lineOpacity)
    })
  }

  class Star {
    constructor(x, y, r) {
      this.x = x
      this.y = y
      this.r = r || Math.random() * 1.5 + 0.5 // 随机大小 0.5-2
      this.x_speed = ((Math.random() * 2 + 0.5) * (Math.random() > 0.5 ? 1 : -1)) / 6
      this.y_speed = ((Math.random() * 2 + 0.5) * (Math.random() > 0.5 ? 1 : -1)) / 6
      this.color = colors[Math.floor(Math.random() * colors.length)] // 随机分配颜色
      // 响应式连线透明度
      const lineOpacity = width > 1024 ? '0.12)' : width > 768 ? '0.15)' : '0.18)'
      this.lineColor = this.color.replace(/0\.\d+\)/, lineOpacity) // 连线颜色为粒子颜色的半透明版本
    }

    move() {
      this.x -= this.x_speed
      this.y -= this.y_speed
    }

    render() {
      ctx.fillStyle = this.color // 使用粒子自己的颜色
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
      ctx.closePath()
      ctx.fill()
    }

    changeX() {
      this.x_speed = -this.x_speed
    }

    changeY() {
      this.y_speed = -this.y_speed
    }
  }

  // 响应式粒子数量
  const getParticleCount = () => {
    if (width <= 768) return 60 // 手机：减少粒子数量
    if (width <= 1024) return 80 // 平板：中等粒子数量
    return 100 // 桌面：完整粒子数量
  }

  // 响应式连线距离
  const getConnectionDistance = () => {
    if (width <= 768) return 35 // 手机：较短连线距离
    if (width <= 1024) return 42 // 平板：中等连线距离
    return 50 // 桌面：完整连线距离
  }

  // 响应式鼠标连线距离
  const getMouseConnectionDistance = () => {
    if (width <= 768) return 80 // 手机：较短鼠标连线距离
    if (width <= 1024) return 100 // 平板：中等鼠标连线距离
    return 120 // 桌面：完整鼠标连线距离
  }

  const stars = []
  let particleCount = getParticleCount()
  for (let i = 0; i < particleCount; i++) {
    stars.push(new Star(Math.random() * width, Math.random() * height, 1))
  }

  const mouseStar = new Star(0, 0, 2)
  mouseStar.color = 'rgba(0, 212, 255, 0.9)' // 鼠标粒子使用品牌霓虹蓝
  // 鼠标连线也使用响应式透明度
  const mouseLineOpacity = width > 1024 ? 0.25 : width > 768 ? 0.3 : 0.35
  mouseStar.lineColor = `rgba(0, 212, 255, ${mouseLineOpacity})` // 鼠标连线使用霓虹蓝半透明

  function onMouseMove(e) {
    mouseStar.x = e.clientX
    mouseStar.y = e.clientY
  }
  // 使用document监听，因为canvas使用了pointer-events: none
  document.addEventListener('mousemove', onMouseMove, { passive: true })

  function line(p1, p2) {
    // 使用Fish Games主题的渐变连线颜色，PC端透明度更低
    const opacity = width > 1024 ? 0.12 : width > 768 ? 0.15 : 0.18 // PC端更暗，移动端稍亮
    const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)
    gradient.addColorStop(
      0,
      p1.lineColor?.replace(/0\.\d+/, opacity) || `rgba(0, 212, 255, ${opacity})`
    )
    gradient.addColorStop(
      1,
      p2.lineColor?.replace(/0\.\d+/, opacity) || `rgba(139, 92, 246, ${opacity})`
    )
    ctx.strokeStyle = gradient
    ctx.beginPath()
    ctx.moveTo(p1.x, p1.y)
    ctx.lineTo(p2.x, p2.y)
    ctx.closePath()
    ctx.stroke()
  }

  function onClick(e) {
    for (let i = 0; i < 3; i++) {
      const newStar = new Star(e.clientX, e.clientY, Math.random() * 1.5 + 0.5)
      newStar.color = colors[Math.floor(Math.random() * colors.length)] // 点击产生的粒子也有随机颜色
      // 点击产生的粒子也使用响应式透明度
      const clickLineOpacity = width > 1024 ? '0.12)' : width > 768 ? '0.15)' : '0.18)'
      newStar.lineColor = newStar.color.replace(/0\.\d+\)/, clickLineOpacity)
      stars.push(newStar)
      stars.shift()
    }
  }
  // 使用document监听，因为canvas使用了pointer-events: none
  document.addEventListener('click', onClick, { passive: true })

  function animate() {
    // 绘制背景
    drawBackground()

    mouseStar.render()

    stars.forEach((star) => {
      star.move()
      if (star.x < 0 || star.x > width) star.changeX()
      if (star.y < 0 || star.y > height) star.changeY()
      star.render()
    })

    const connectionDistance = getConnectionDistance()
    const mouseConnectionDistance = getMouseConnectionDistance()

    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        if (
          Math.abs(stars[i].x - stars[j].x) < connectionDistance &&
          Math.abs(stars[i].y - stars[j].y) < connectionDistance
        ) {
          line(stars[i], stars[j])
        }
      }
      if (
        Math.abs(stars[i].x - mouseStar.x) < mouseConnectionDistance &&
        Math.abs(stars[i].y - mouseStar.y) < mouseConnectionDistance
      ) {
        line(stars[i], mouseStar)
      }
    }

    animationFrameId = requestAnimationFrame(animate)
  }

  animate()

  // Cleanup on component unmount
  onUnmounted(() => {
    cancelAnimationFrame(animationFrameId)
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('click', onClick)
    window.removeEventListener('resize', resize)
  })
})
</script>

<style scoped>
.particle-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  /* 修复右键菜单问题 */
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  /* 确保不影响页面的右键菜单 */
  -webkit-user-drag: none;
  -moz-user-drag: none;
}
</style> 