<template>
  <v-container file-height style="max-width:450px;">
    <v-layout row wrap>
      <v-flex xs12>
        <v-alert class="mb-3" :value="isLoginError" type="error">아이디와 비밀번호를 확인하세요</v-alert>
        <v-alert :value="isLogin" type="success">로그인 확인</v-alert>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>로그인</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field v-model="email" label="이메일을 입력하세요"></v-text-field>
            <v-text-field v-model="password" type="password" label="패스워드를 입력하세요"></v-text-field>
            <v-btn color="primary" depressed large block @click="login({email,password})">로그인</v-btn>
            <!-- <v-btn @click="test">테스트</v-btn>
            <v-btn @click="posttest">post테스트</v-btn>-->
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  computed: {
    ...mapState(["isLogin", "isLoginError"])
  },
  methods: {
    ...mapActions(["login"])
    // test() {
    //   axios
    //     .get("https://reqres.in/api/user?page=2")
    //     .then(res => {
    //       // handle success
    //       console.log(res);
    //     })
    //     .catch(err => {
    //       // handle error
    //       console.log(error);
    //     })
    //     .then(() => {
    //       console.log("test");
    //       // always executed
    //     });
    // },
    // posttest() {}
  }
};
</script>