/**
 * 结构化数据工具 - 生成JSON-LD格式的Schema.org数据
 */

// 网站基础信息
const siteInfo = {
  name: 'Fish Games',
  url: 'https://fishinggames.co',
  logo: '/favicon.ico',
  description: 'Premium collection of fish and aquatic games online. Discover immersive underwater adventures, fishing simulations, and marine life experiences.',
  sameAs: [
    'https://twitter.com/fishgames',
    'https://facebook.com/fishgames'
  ]
}

/**
 * 生成网站组织信息结构化数据
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteInfo.name,
    url: siteInfo.url,
    logo: siteInfo.logo,
    description: siteInfo.description,
    sameAs: siteInfo.sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: `${siteInfo.url}/contact-us`
    }
  }
}

/**
 * 生成网站结构化数据
 */
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteInfo.name,
    url: siteInfo.url,
    description: siteInfo.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteInfo.url}/games?search={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }
}

/**
 * 生成面包屑导航结构化数据
 * @param {Array} breadcrumbs - 面包屑数组，格式：[{name: 'Home', url: '/'}, {name: 'Games', url: '/games'}]
 */
export function generateBreadcrumbSchema(breadcrumbs) {
  const itemListElement = breadcrumbs.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${siteInfo.url}${item.url}`
  }))

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement
  }
}

/**
 * 生成游戏结构化数据 (SoftwareApplication)
 * @param {Object} game - 游戏对象
 */
export function generateGameSchema(game) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: game.title,
    description: game.seo?.description || game.title,
    image: game.imageUrl,
    applicationCategory: 'Game',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    author: {
      '@type': 'Organization',
      name: siteInfo.name
    },
    publisher: {
      '@type': 'Organization',
      name: siteInfo.name,
      logo: {
        '@type': 'ImageObject',
        url: siteInfo.logo
      }
    },
    datePublished: game.publishDate || new Date().toISOString(),
    dateModified: game.publishDate || new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteInfo.url}/games/${game.addressBar}`
    },
    genre: game.categories?.join(', ') || 'Fish Game',
    platform: 'Web Browser',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      ratingCount: '1000'
    }
  }
}

/**
 * 生成博客文章结构化数据 (Article)
 * @param {Object} blog - 博客对象
 */
export function generateArticleSchema(blog) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: blog.description,
    image: blog.imageUrl,
    author: {
      '@type': 'Organization',
      name: siteInfo.name
    },
    publisher: {
      '@type': 'Organization',
      name: siteInfo.name,
      logo: {
        '@type': 'ImageObject',
        url: siteInfo.logo
      }
    },
    datePublished: blog.publishDate,
    dateModified: blog.publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteInfo.url}/blog/${blog.addressBar}`
    },
    articleSection: 'Fish Care & Gaming'
  }
}

/**
 * 生成游戏列表结构化数据 (ItemList)
 * @param {Array} games - 游戏数组
 * @param {string} listName - 列表名称
 */
export function generateGameListSchema(games, listName = 'Fish Games Collection') {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    numberOfItems: games.length,
    itemListElement: games.map((game, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: game.title,
      url: `${siteInfo.url}/games/${game.addressBar}`
    }))
  }
}

/**
 * 生成FAQ结构化数据
 * @param {Array} faqs - FAQ数组，格式：[{question: 'Q', answer: 'A'}]
 */
export function generateFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

/**
 * 在页面中插入结构化数据
 * @param {Object} schema - 结构化数据对象
 */
export function insertStructuredData(schema) {
  // 移除已存在的结构化数据
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"]')
  existingScripts.forEach(script => script.remove())

  // 创建新的结构化数据脚本
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(schema, null, 2)
  document.head.appendChild(script)
}

/**
 * 插入多个结构化数据
 * @param {Array} schemas - 结构化数据数组
 */
export function insertMultipleStructuredData(schemas) {
  // 清除已存在的结构化数据
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"]')
  existingScripts.forEach(script => script.remove())

  // 插入新的结构化数据
  schemas.forEach(schema => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema, null, 2)
    document.head.appendChild(script)
  })
}
