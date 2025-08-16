/**
 * SEO工具类 - 管理页面的Title, Description, Keywords
 */

// 默认TDK设置
const defaultSEO = {
  title: 'Fish Games - Premium Aquatic Gaming Experience Online',
  description: 'Dive into the best collection of fish games online. From deep sea adventures to aquarium building, discover immersive aquatic gaming experiences for all ages.',
  keywords: 'fish games, aquatic games, underwater games, ocean games, fishing games, marine games, sea adventure, online fish games'
}

// 默认社交媒体设置
const defaultSocial = {
  siteName: 'Fish Games',
  type: 'website',
  image: '/favicon.ico',
  imageAlt: 'Fish Games - Premium Aquatic Gaming Experience',
  twitterCard: 'summary_large_image',
  twitterSite: '@fishgames',
  twitterCreator: '@fishgames'
}

/**
 * 设置页面TDK和社交媒体标签
 * @param {Object} seo - SEO对象，包含title, description, keywords
 * @param {string} canonicalUrl - 规范URL（可选）
 */
export function setPageSEO(seo = {}, canonicalUrl = null) {
  const { title, description, keywords } = { ...defaultSEO, ...seo }
  
  // 设置页面标题
  document.title = title
  
  // 设置meta description
  setMetaTag('description', description)
  
  // 设置meta keywords
  setMetaTag('keywords', keywords)
  
  // 设置canonical URL
  if (canonicalUrl) {
    setCanonicalUrl(canonicalUrl)
  }
  
  // 统一设置社交媒体标签
  setSocialTags(title, description, seo.image)
}

/**
 * 设置社交媒体标签
 * @param {string} title - 页面标题
 * @param {string} description - 页面描述
 * @param {string} image - 页面图片（可选）
 * @param {string} type - 内容类型，默认为website
 */
export function setSocialTags(title, description, image = null, type = 'website') {
  // Open Graph标签
  setMetaTag('og:title', title)
  setMetaTag('og:description', description)
  setMetaTag('og:type', type)
  setMetaTag('og:url', window.location.href)
  setMetaTag('og:image', image || defaultSocial.image)
  setMetaTag('og:image:alt', defaultSocial.imageAlt)
  setMetaTag('og:site_name', defaultSocial.siteName)
  setMetaTag('og:locale', 'en_US')
  
  // Twitter Card标签
  setMetaTag('twitter:card', defaultSocial.twitterCard)
  setMetaTag('twitter:site', defaultSocial.twitterSite)
  setMetaTag('twitter:creator', defaultSocial.twitterCreator)
  setMetaTag('twitter:title', title)
  setMetaTag('twitter:description', description)
  setMetaTag('twitter:image', image || defaultSocial.image)
  setMetaTag('twitter:image:alt', defaultSocial.imageAlt)
}

/**
 * 设置meta标签
 * @param {string} name - meta标签的name或property属性
 * @param {string} content - meta标签的content属性
 */
function setMetaTag(name, content) {
  // 先查找已存在的标签
  let metaTag = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`)
  
  if (!metaTag) {
    // 如果不存在，创建新标签
    metaTag = document.createElement('meta')
    // 判断是property还是name属性
    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      metaTag.setAttribute('property', name)
    } else {
      metaTag.setAttribute('name', name)
    }
    document.head.appendChild(metaTag)
  }
  
  // 更新content属性
  metaTag.setAttribute('content', content)
}

/**
 * 设置canonical URL
 * @param {string} url - 规范URL
 */
export function setCanonicalUrl(url) {
  let canonicalLink = document.querySelector('link[rel="canonical"]')
  
  if (!canonicalLink) {
    // 如果不存在，创建新标签
    canonicalLink = document.createElement('link')
    canonicalLink.setAttribute('rel', 'canonical')
    document.head.appendChild(canonicalLink)
  }
  
  // 更新href属性
  canonicalLink.setAttribute('href', url)
}

/**
 * 重置为默认SEO设置
 */
export function resetToDefaultSEO() {
  setPageSEO(defaultSEO)
}
