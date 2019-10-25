<template>
  <div>
    <div class="mdui-dialog" id="dialog">
      <div class="mdui-dialog-title">正在加载:</div>
      <div class="mdui-dialog-content">
        {{content}}
        <div class="mdui-progress">
          <div class="mdui-progress-indeterminate"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "Loading",
  props: {
    content: {
      type: String,
      default: "这可能需要一点时间..."
    }
  },
  mounted:{
    
  }
};
</script>