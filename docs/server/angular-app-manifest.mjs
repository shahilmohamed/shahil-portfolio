
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/experience"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/contact"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/certifications"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/footer"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/navbar"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/scroll-to-top"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/theme-toggle"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2253, hash: '54c8596bab4f2bae9839e919e89f5ad68f1e8c894a1dcd851fe20fc6fe014d0c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 959, hash: 'c2a3ce5791265345823b5acb841d27d458e67115512ed95c783e2d732d1481c8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 58319, hash: '96bc039e17adc48b107764c16cfaac51922bafbda8b4fde8c625fe60507a882c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 58319, hash: '96bc039e17adc48b107764c16cfaac51922bafbda8b4fde8c625fe60507a882c', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'footer/index.html': {size: 58319, hash: '96bc039e17adc48b107764c16cfaac51922bafbda8b4fde8c625fe60507a882c', text: () => import('./assets-chunks/footer_index_html.mjs').then(m => m.default)},
    'certifications/index.html': {size: 58319, hash: '96bc039e17adc48b107764c16cfaac51922bafbda8b4fde8c625fe60507a882c', text: () => import('./assets-chunks/certifications_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 58319, hash: '96bc039e17adc48b107764c16cfaac51922bafbda8b4fde8c625fe60507a882c', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 58319, hash: '96bc039e17adc48b107764c16cfaac51922bafbda8b4fde8c625fe60507a882c', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 58319, hash: '96bc039e17adc48b107764c16cfaac51922bafbda8b4fde8c625fe60507a882c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'scroll-to-top/index.html': {size: 58319, hash: '96bc039e17adc48b107764c16cfaac51922bafbda8b4fde8c625fe60507a882c', text: () => import('./assets-chunks/scroll-to-top_index_html.mjs').then(m => m.default)},
    'theme-toggle/index.html': {size: 58319, hash: '96bc039e17adc48b107764c16cfaac51922bafbda8b4fde8c625fe60507a882c', text: () => import('./assets-chunks/theme-toggle_index_html.mjs').then(m => m.default)},
    'navbar/index.html': {size: 58319, hash: '96bc039e17adc48b107764c16cfaac51922bafbda8b4fde8c625fe60507a882c', text: () => import('./assets-chunks/navbar_index_html.mjs').then(m => m.default)},
    'styles-RK7VYNPH.css': {size: 5694, hash: 'tn/KomN+Q38', text: () => import('./assets-chunks/styles-RK7VYNPH_css.mjs').then(m => m.default)}
  },
};
