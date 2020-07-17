const mainRoutes = [
  { tr: '/hakkimizda', en: '/about-us' },
  {
    tr: '/tr/kariyer/lc-waikikide-kariyer',
    en: '/en/career/career-at-lc-waikiki',
  },
];

export const getComponentFromRoute = (path) => {
  let lang;
  mainRoutes.forEach((route) => {
    if (route.tr === path) {
      lang = 'tr';
    } else if (route.en === path) {
      lang = 'en';
    }
  });
  return { lang };
};
