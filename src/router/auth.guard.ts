import firebase from 'firebase/app';
import { NavigationGuardNext, Route } from 'vue-router';

export default (to: Route, from: Route, next: NavigationGuardNext) =>
  !firebase.auth().currentUser && to.matched.some(e => e.meta.auth) ? next('/login') : next();
