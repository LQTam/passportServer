import Home from './pages/Home.vue';
import App from './pages/App.vue';
import About from './pages/About.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import Logout from './components/auth/Logout.vue';

export default [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/app',
    component: App,
    name: 'app',
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    component: About,
    name: 'about'
  },

  {
    path: '/login',
    component: Login,
    name: 'login',
    meta: {
      requiresVisitor: true,
    }
  },

  {
    path: '/register',
    component: Register,
    name: 'register',
    meta: {
      requiresVisitor: true,
    }
  },

  {
    path: '/logout',
    component: Logout,
    name: 'logout',
  }
]
