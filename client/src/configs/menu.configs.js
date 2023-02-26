const main = [
  {
    display: 'home',
    path: '/',
    state: 'home',
  },
  {
    display: 'movies',
    path: '/movie',
    state: 'movie',
  },
  {
    display: 'tv series',
    path: '/tv',
    state: 'tv',
  },
  {
    display: 'search',
    path: '/search',
    state: 'search',
  },
];

const user = [
  {
    display: 'favorites',
    path: '/favorites',
    state: 'favorite',
  },
  {
    display: 'reviews',
    path: '/reviews',
    state: 'reviews',
  },
  {
    display: 'password update',
    path: '/password-update',
    state: 'password.update',
  },
];

const menuConfigs = { main, user };

export default menuConfigs;
