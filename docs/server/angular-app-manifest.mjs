
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
    'index.csr.html': {size: 2280, hash: '2cd08cb46970ba32303b5f8c86796b159c8bcff846df615eaf82cbd9816777c8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 986, hash: '031f12b4eb744d9b09c47eb02f5435260d2cfaab62fbe6e62be76bf868655df1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 58346, hash: '4df3abd38484861b1a9f1f932f2866721408e4fd082cfd5e8044fc8cae324482', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'footer/index.html': {size: 58346, hash: '4df3abd38484861b1a9f1f932f2866721408e4fd082cfd5e8044fc8cae324482', text: () => import('./assets-chunks/footer_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 58346, hash: '4df3abd38484861b1a9f1f932f2866721408e4fd082cfd5e8044fc8cae324482', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'certifications/index.html': {size: 58346, hash: '4df3abd38484861b1a9f1f932f2866721408e4fd082cfd5e8044fc8cae324482', text: () => import('./assets-chunks/certifications_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 58346, hash: '4df3abd38484861b1a9f1f932f2866721408e4fd082cfd5e8044fc8cae324482', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 58346, hash: '4df3abd38484861b1a9f1f932f2866721408e4fd082cfd5e8044fc8cae324482', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 58346, hash: '4df3abd38484861b1a9f1f932f2866721408e4fd082cfd5e8044fc8cae324482', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'scroll-to-top/index.html': {size: 58346, hash: '4df3abd38484861b1a9f1f932f2866721408e4fd082cfd5e8044fc8cae324482', text: () => import('./assets-chunks/scroll-to-top_index_html.mjs').then(m => m.default)},
    'theme-toggle/index.html': {size: 58346, hash: '4df3abd38484861b1a9f1f932f2866721408e4fd082cfd5e8044fc8cae324482', text: () => import('./assets-chunks/theme-toggle_index_html.mjs').then(m => m.default)},
    'navbar/index.html': {size: 58346, hash: '4df3abd38484861b1a9f1f932f2866721408e4fd082cfd5e8044fc8cae324482', text: () => import('./assets-chunks/navbar_index_html.mjs').then(m => m.default)},
    'styles-RK7VYNPH.css': {size: 5694, hash: 'tn/KomN+Q38', text: () => import('./assets-chunks/styles-RK7VYNPH_css.mjs').then(m => m.default)}
  },
};
