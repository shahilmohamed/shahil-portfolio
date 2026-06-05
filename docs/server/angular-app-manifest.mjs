
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/shahil-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/shahil-portfolio"
  },
  {
    "renderMode": 2,
    "route": "/shahil-portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/shahil-portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/shahil-portfolio/experience"
  },
  {
    "renderMode": 2,
    "route": "/shahil-portfolio/contact"
  },
  {
    "renderMode": 2,
    "route": "/shahil-portfolio/certifications"
  },
  {
    "renderMode": 2,
    "route": "/shahil-portfolio/footer"
  },
  {
    "renderMode": 2,
    "route": "/shahil-portfolio/navbar"
  },
  {
    "renderMode": 2,
    "route": "/shahil-portfolio/scroll-to-top"
  },
  {
    "renderMode": 2,
    "route": "/shahil-portfolio/theme-toggle"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2284, hash: '9cfe86a75099ffd7193ccf4a0975ef2cc67d4e2a33b840209a4116f9cc9f1095', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 990, hash: '90c41c855e28b9eb21fdc9ce6356a81ef734b6c2edd1d3e02cc50d7fd63b666c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'certifications/index.html': {size: 59744, hash: '360c91814dfa6dabb218dcc402fbe0b725a473f58247568498eb58b904fc368f', text: () => import('./assets-chunks/certifications_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 59744, hash: '360c91814dfa6dabb218dcc402fbe0b725a473f58247568498eb58b904fc368f', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'index.html': {size: 59744, hash: '360c91814dfa6dabb218dcc402fbe0b725a473f58247568498eb58b904fc368f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'footer/index.html': {size: 59744, hash: '360c91814dfa6dabb218dcc402fbe0b725a473f58247568498eb58b904fc368f', text: () => import('./assets-chunks/footer_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 59744, hash: '360c91814dfa6dabb218dcc402fbe0b725a473f58247568498eb58b904fc368f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 59744, hash: '360c91814dfa6dabb218dcc402fbe0b725a473f58247568498eb58b904fc368f', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'scroll-to-top/index.html': {size: 59744, hash: '360c91814dfa6dabb218dcc402fbe0b725a473f58247568498eb58b904fc368f', text: () => import('./assets-chunks/scroll-to-top_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 59744, hash: '360c91814dfa6dabb218dcc402fbe0b725a473f58247568498eb58b904fc368f', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'theme-toggle/index.html': {size: 59744, hash: '360c91814dfa6dabb218dcc402fbe0b725a473f58247568498eb58b904fc368f', text: () => import('./assets-chunks/theme-toggle_index_html.mjs').then(m => m.default)},
    'navbar/index.html': {size: 59744, hash: '360c91814dfa6dabb218dcc402fbe0b725a473f58247568498eb58b904fc368f', text: () => import('./assets-chunks/navbar_index_html.mjs').then(m => m.default)},
    'styles-RK7VYNPH.css': {size: 5694, hash: 'tn/KomN+Q38', text: () => import('./assets-chunks/styles-RK7VYNPH_css.mjs').then(m => m.default)}
  },
};
