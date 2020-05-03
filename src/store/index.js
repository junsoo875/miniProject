import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    UserInfo: null,
    allUsers: [
      { id: 1, name: "junsoo", email: "11@naver.com", password: "123456" },
      { id: 2, name: "abc", email: "22@naver.com", password: "123456" },
    ],
    isLogin: false,
    isLoginError: false,
  },
  mutations: {
    loginSuccess(state, payload) {
      state.isLogin = true;
      state.isLoginError = false;
      state.UserInfo = payload;
    },
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
    },
    logout(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.UserInfo = null;
    },
  },
  actions: {
    login({ dispatch }, loginObj) {
      // 로그인 -> 토큰 반환
      axios
        .post("https://reqres.in/api/login", loginObj)
        .then((res) => {
          //성공시 토큰받으면 토큰을 헤더에 포함시켜서 다시 요청
          let token = res.data.token;
          localStorage.setItem("access_token", token);
          dispatch("getMemberInfo");
          //토큰을 로컬스토리지에 저장
        })
        .catch(() => {
          alert("이메일과 비밀번호를 확인하세요");
        });
    },
    logout({ commit }) {
      commit("logout");
      router.push({ name: "home" });
    },
    getMemberInfo({ commit }) {
      //저장된 토큰을 불러온다

      let token = localStorage.getItem("access_token");
      let config = {
        headers: {
          "access-token": token,
        },
      };

      axios
        .get("https://reqres.in/api/user/2", config)
        .then((response) => {
          let userInfo = {
            name: response.data.data.name,
            id: response.data.data.id,
          };
          commit("loginSuccess", userInfo);
        })
        .catch(() => {
          alert("이메일과 비밀번호를 확인하세요");
        });
    },
  },
  modules: {},
});
