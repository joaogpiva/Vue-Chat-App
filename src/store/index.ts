import { createStore } from 'vuex'
import router from '@/router'
import { auth } from '@/firebase'
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    user: null
  },
  getters: {
  },
  mutations: {
    SET_USER(state, user){
      state.user = user;
    },
    CLEAR_USER(state){
      state.user = null;
      sessionStorage.clear();
    }
  },
  actions: {
    async login({ commit }, details){
      try {
        await signInWithEmailAndPassword(auth, details.email, details.password);
      } catch(e) {
        console.log(e);
      }

      commit('SET_USER', auth.currentUser);
      router.replace('/');
    },
    async register({ commit }, details){
      try {
        await createUserWithEmailAndPassword(auth, details.email, details.password);
        await updateProfile(auth.currentUser!, {
          displayName: details.name
        });
      } catch(e) {
        console.log(e);
      }

      commit('SET_USER', auth.currentUser);
      router.replace('/');
    },
    async logout({ commit }){
      await signOut(auth);
      commit('CLEAR_USER');
      router.replace('/');
    },
    async fetchUser({ commit }){
      auth.onAuthStateChanged((user) => {
        if (user) {
          commit('SET_USER', user);
          router.push('/home');
        }else{
          commit('CLEAR_USER');
          router.push('/login');
        }
      })
    }
  },
  modules: {
  }
})
