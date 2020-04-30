<template>
  <div>
    <hi>{{UserInfo.name}}님 환영</hi>
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