<template>
  <div>
    <UserInfo/>
  </div>
</template>

<script>
import UserInfo from "../components/UserInfo";
import UserLogin from "../components/UserLogin"
import {setCookie,getCookie} from "../staticfun";

export default {
  name: "home",
  data() {
    return {
    };
  },
  mounted() {
    console.log(this.$app.data)
  },
  components: {
    UserInfo,
    UserLogin
  }
};
</script>

