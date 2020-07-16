module.exports = {
  locales: ['tr', 'en'],
  defaultLocale: 'tr',
  defaultSuffix: '',
  extRoots: ['.js'],
  schemas: [
    {
      root: '*',
      metaData: { title: 'Next Roots', background: 'grey' },
    },
    {
      root: 'home',
      pages: [{ locale: '*', path: 'index', alias: '/', suffix: '' }],
    },
    {
      root: 'about-us',
      pages: [
        { locale: 'tr', path: 'hakkimizda' },
        { locale: 'en', path: 'about-us' },
      ],
      params: { token: 'p1' },
    },
  ],
};
