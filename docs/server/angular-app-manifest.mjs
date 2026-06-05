
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio-my/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio-my"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-my/skills"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-my/projects"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-my/experience"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-my/contact"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-my/certifications"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-my/footer"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-my/navbar"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-my/scroll-to-top"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-my/theme-toggle"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2280, hash: 'a9bdd00ea67c258742bd8c2b6841ac528ba3d6b8e0678400806ad367cf4f23cc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 986, hash: '0d9137ee9956b19dc00671cbcaeec23d9e034e2cd4af2de0c5b17257bcb2a6d0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 59740, hash: '44edb09adb55463d61271c1cf054ee50901915a3a5edaa3d9243e0d16dbf8f70', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'certifications/index.html': {size: 59740, hash: '44edb09adb55463d61271c1cf054ee50901915a3a5edaa3d9243e0d16dbf8f70', text: () => import('./assets-chunks/certifications_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 59740, hash: '44edb09adb55463d61271c1cf054ee50901915a3a5edaa3d9243e0d16dbf8f70', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'footer/index.html': {size: 59740, hash: '44edb09adb55463d61271c1cf054ee50901915a3a5edaa3d9243e0d16dbf8f70', text: () => import('./assets-chunks/footer_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 59740, hash: '44edb09adb55463d61271c1cf054ee50901915a3a5edaa3d9243e0d16dbf8f70', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 59740, hash: '44edb09adb55463d61271c1cf054ee50901915a3a5edaa3d9243e0d16dbf8f70', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'scroll-to-top/index.html': {size: 59740, hash: '44edb09adb55463d61271c1cf054ee50901915a3a5edaa3d9243e0d16dbf8f70', text: () => import('./assets-chunks/scroll-to-top_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 59740, hash: '44edb09adb55463d61271c1cf054ee50901915a3a5edaa3d9243e0d16dbf8f70', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'theme-toggle/index.html': {size: 59740, hash: '44edb09adb55463d61271c1cf054ee50901915a3a5edaa3d9243e0d16dbf8f70', text: () => import('./assets-chunks/theme-toggle_index_html.mjs').then(m => m.default)},
    'navbar/index.html': {size: 59740, hash: '44edb09adb55463d61271c1cf054ee50901915a3a5edaa3d9243e0d16dbf8f70', text: () => import('./assets-chunks/navbar_index_html.mjs').then(m => m.default)},
    'styles-RK7VYNPH.css': {size: 5694, hash: 'tn/KomN+Q38', text: () => import('./assets-chunks/styles-RK7VYNPH_css.mjs').then(m => m.default)}
  },
};
