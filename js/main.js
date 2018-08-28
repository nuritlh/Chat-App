import homePage from './pages/home-page-cmps.js';
import myRoutes from './routes.js';

Vue.use(VueRouter);
const myRouter = new VueRouter({ routes: myRoutes });

new Vue({
  router: myRouter,
  el: '#app',
  components: {
    homePage
  },
  data() {
    return {};
  },
  mounted() { }
});
