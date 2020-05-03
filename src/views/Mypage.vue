<template>
  <div>
    <h1>{{UserInfo.name}}님 환영</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["UserInfo"])
  }
};
</script>