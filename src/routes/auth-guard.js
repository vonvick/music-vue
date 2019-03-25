
import store from '../store/index';

export default (to, from, next) => {
  const accessToken = store.getters['user/getUserDetailsData']('accessToken');
  const expiryTime = store.getters['user/getUserDetailsData']('expiry');
  const currentTime = Math.floor(parseFloat(Date.now() / 1000));
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!accessToken && expiryTime < currentTime) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.authPage)) {
    if (accessToken && expiryTime > currentTime) {
      next({
        path: '/',
      });
    } else {
      next();
    }
  } else {
    next();
  }
};
