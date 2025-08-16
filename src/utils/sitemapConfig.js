import { games, gameCategories } from '../data/games.js'
import { blogs } from '../data/blogs.js'

// 获取所有路由列表（用于vite插件配置）
export function getAllRoutes() {
  const staticRoutes = [
    '/',
    '/games',
    ...gameCategories.map(cat => `/games/category/${cat.id}`),
    '/hot',
    '/new',
    '/updated',
    '/blog',
    '/privacy-policy',
    '/terms-of-use',
    '/copyright',
    '/about-us',
    '/contact-us'
  ]

  // 生成游戏详情页路由
  const gameRoutes = games.map(game => `/games/${game.addressBar}`)
  // 生成游戏信息页路由
  const gameInfoRoutes = games.map(game => `/games/info/${game.addressBar}`)

  // 生成博客详情页路由
  const blogRoutes = blogs.map(blog => `/blog/${blog.addressBar}`)

  return [...staticRoutes, ...gameRoutes, ...gameInfoRoutes, ...blogRoutes]
}
