<template>
    <div>
        <Exam/>
        <Loading/>
    </div>
</template>
<script>
import Exam from "../components/Exam.vue";
import Loading from "../components/Loading.vue";
export default {
  name: "OnlineTk",
  data() {
    return {
    };
  },
  components: {
    Exam,
    Loading
  }
};
</script>