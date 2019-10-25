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
  },
  components: {
    UserInfo,
    UserLogin
  }
};
</script>

