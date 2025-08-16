import { createRouter, createWebHistory } from 'vue-router'
import { setPageSEO, resetToDefaultSEO, setCanonicalUrl } from '../utils/seo.js'
import {
  insertMultipleStructuredData,
  insertStructuredData,
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateBreadcrumbSchema,
  generateGameSchema,
  generateArticleSchema,
  generateGameListSchema
} from '../utils/structuredData.js'
import { games, gameCategories } from '../data/games.js'
import { blogs } from '../data/blogs.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的位置（浏览器前进/后退），则恢复到该位置
    if (savedPosition) {
      return savedPosition
    }
    // 否则滚动到顶部
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        seo: {
          title: 'Fish Games - Premium Aquatic Gaming Experience Online',
          description: 'Dive into the best collection of fish games online. From deep sea adventures to aquarium building, discover immersive aquatic gaming experiences for all ages.',
          keywords: 'fish games, aquatic games, underwater games, ocean games, fishing games, marine games, sea adventure, online fish games'
        }
      }
    },

    {
      path: '/games',
      name: 'games',
      component: () => import('../views/GamesView.vue'),
      meta: {
        seo: {
          title: 'All Games - Complete Fish Games Collection',
          description: 'Browse all fish games in one place. Discover classics and new titles across categories, with quick access to details.',
          keywords: 'fish games, all games, game collection, browse games, aquarium games'
        }
      }
    },
    {
      path: '/games/category/:categoryId',
      name: 'games-category',
      component: () => import('../views/GamesView.vue'),
    },
    {
      path: '/games/:addressBar',
      name: 'game-detail',
      component: () => import('../views/GameDetail.vue'),
    },
    {
      path: '/hot',
      name: 'hot-games',
      component: () => import('../views/HotGamesView.vue'),
      meta: {
        seo: {
          title: 'Hot Games - Most Popular Fish Games',
          description: 'Browse the hottest fish games trending now. Discover the most played titles and jump right in.',
          keywords: 'hot fish games, popular fish games, trending games'
        }
      }
    },
    {
      path: '/new',
      name: 'new-games',
      component: () => import('../views/NewGamesView.vue'),
      meta: {
        seo: {
          title: 'New Games - Latest Fish Games Added',
          description: 'Discover the latest fish games added to our collection. Fresh titles to explore and enjoy.',
          keywords: 'new fish games, latest games, newly added'
        }
      }
    },
    {
      path: '/updated',
      name: 'updated-games',
      component: () => import('../views/UpdatedGamesView.vue'),
      meta: {
        seo: {
          title: 'Updated Games - Recently Updated Fish Games',
          description: 'Explore fish games that have been recently updated with new features and improvements.',
          keywords: 'updated fish games, recently updated games, new features'
        }
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
      meta: {
        seo: {
          title: 'Fish Care Blog - Expert Tips & Guides | Fish Games',
          description: 'Discover expert fishkeeping tips, aquarium care guides, and marine life insights. Learn from professionals to create thriving aquatic environments.',
          keywords: 'fish care blog, aquarium tips, fishkeeping guide, marine aquarium, tropical fish care, aquatic life, fish tank maintenance'
        }
      }
    },
    {
      path: '/blog/:addressBar',
      name: 'blog-detail',
      component: () => import('../views/BlogDetailView.vue'),
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/PrivacyPolicyView.vue'),
      meta: {
        seo: {
          title: 'Privacy Policy - Fish Games',
          description: 'Privacy Policy for Fish Games. Learn how we collect, use, and protect your personal information.',
          keywords: 'privacy policy, data protection, fish games, user privacy'
        }
      }
    },
    {
      path: '/terms-of-use',
      name: 'terms-of-use',
      component: () => import('../views/TermsOfUseView.vue'),
      meta: {
        seo: {
          title: 'Terms of Use - Fish Games',
          description: 'Terms of Use for Fish Games. Learn about the rules and guidelines for using our gaming platform.',
          keywords: 'terms of use, terms of service, fish games, user agreement'
        }
      }
    },
    {
      path: '/copyright',
      name: 'copyright',
      component: () => import('../views/CopyrightView.vue'),
      meta: {
        seo: {
          title: 'Copyright Information - Fish Games',
          description: 'Copyright information for Fish Games. Learn about intellectual property rights and usage guidelines.',
          keywords: 'copyright, intellectual property, fish games, trademark, fair use'
        }
      }
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('../views/AboutUsView.vue'),
      meta: {
        seo: {
          title: 'About Us - Fish Games',
          description: 'Learn about Fish Games - our mission, values, and commitment to creating immersive aquatic gaming experiences.',
          keywords: 'about fish games, aquatic games, ocean conservation, marine education, game development'
        }
      }
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('../views/ContactUsView.vue'),
      meta: {
        seo: {
          title: 'Contact Us - Fish Games',
          description: 'Contact Fish Games for support, questions, or feedback. We\'re here to help with all your aquatic gaming needs.',
          keywords: 'contact fish games, customer support, help, feedback, questions'
        }
      }
    },
  ],
})

// 全局路由守卫 - 处理基础SEO
router.beforeEach((to, from, next) => {
  // 设置canonical URL
  const canonicalUrl = `https://fishinggames.co${to.path}`
  setCanonicalUrl(canonicalUrl)

  // 先准备要应用的 SEO（只在最后统一 setPageSEO 一次）
  let seoToApply = null

  // 生成基础结构化数据
  const schemas = [generateOrganizationSchema(), generateWebsiteSchema()]

  // 分类页（/games/category/:categoryId） - 设置分类 TDK
  if (to.name === 'games-category' && to.params?.categoryId) {
    const category = gameCategories.find(c => c.id === to.params.categoryId)
    if (category) {
      const categorySeo = category.seo && (category.seo.title || category.seo.description || category.seo.keywords)
        ? category.seo
        : {
          title: `${category.name} | Fish Games`,
          description: category.description,
          keywords: `fish games, ${category.id}, ${category.name}`
        }
      seoToApply = categorySeo

      // 可选：分类面包屑与列表结构化数据
      schemas.push(
        generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Games', url: '/games' },
          { name: category.name, url: `/games/category/${category.id}` }
        ]),
        generateGameListSchema(
          games.filter(g => Array.isArray(g.categories) && g.categories.includes(category.id)),
          `${category.name}`
        )
      )
    }
  }

  // 针对详情页生成面包屑与实体 Schema
  if (to.name === 'game-detail' && to.params?.addressBar) {
    const game = games.find(g => g.addressBar === to.params.addressBar)
    if (game) {
      schemas.push(
        generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Games', url: '/games' },
          { name: game.title, url: `/games/${game.addressBar}` }
        ]),
        generateGameSchema(game)
      )
      // 使用游戏自身 SEO 覆盖（若存在）
      if (game.seo) {
        seoToApply = game.seo
      }
    }
  }

  if (to.name === 'blog-detail' && to.params?.addressBar) {
    const blog = blogs.find(b => b.addressBar === to.params.addressBar)
    if (blog) {
      schemas.push(
        generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: blog.title, url: `/blog/${blog.addressBar}` }
        ]),
        generateArticleSchema(blog)
      )
      if (blog.seo) {
        seoToApply = blog.seo
      }
    }
  }

  // 兜底：若以上未设置，则使用路由 meta.seo 或默认
  if (!seoToApply) {
    if (to.meta?.seo) {
      seoToApply = to.meta.seo
    } else {
      // 使用默认 SEO
      seoToApply = null
    }
  }

  if (seoToApply) {
    setPageSEO(seoToApply, canonicalUrl)
  } else {
    resetToDefaultSEO()
    setCanonicalUrl(canonicalUrl)
  }

  // 插入结构化数据（会清空既有 JSON-LD 后再插入）
  insertMultipleStructuredData(schemas)

  next()
})

export default router
