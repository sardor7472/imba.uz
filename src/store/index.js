import Vue from "vue";
import Vuex from "vuex";
import ads from "./ads";
import lang from "./lang";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentLang: 'uz',
    localLanguage: [
      {
        id: 'uz',
        name: 'uz'
      },
      {
        id: 'ru',
        name: 'ru'
      },
      {
        id: 'en',
        name: 'en'
      }
    ],
    lang: lang['uz']
  },
  actions: {
    changeLang({state}, payload) {
      let language = payload === undefined ? 'ru' : payload;
      state.currentLang = language;
      state.lang = lang[language];
      localStorage.lang = language;
    }
  },
  modules:{
    ads,
  }
});
