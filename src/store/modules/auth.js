// import axios from 'axios';
import api from '@/services/api';
import router from '../../router/index';

const session = JSON.parse(localStorage.getItem('auth-session') || '{}');

const state = { session };

const getters = {
  company: (state) => state.session.company,
  isAuthenticated: (state) => !!state.session.token,
  token: (state) => state.session.token,
  user: (state) => state.session.user,
};

const mutations = {
  updateSession(state, session) {
    state.session = session;
    api.defaults.headers.common['Authorization'] = `Bearer ${session.token}`;

    localStorage.setItem('auth-session', JSON.stringify(session));
  },
};

const actions = {
  async signup({ commit }, data) {
    let response = await api.post(`/users`, data);

    commit('updateSession', response.data);

    return response;
  },

  async login({ commit }, credentials) {
    console.log(credentials);
    let response = await api.post(`/sessions`, credentials);
    console.log(response);

    commit('updateSession', response.data);

    return response;
  },

  logout({ commit }) {
    commit('updateSession', {});
    router.push('/signin');
  },

  restoreSession({ commit }) {
    commit('updateSession', session);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
