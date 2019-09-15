<template>
  <div>
    <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">User name</label>
      <input class="mdui-textfield-input" type="text" required />
      <div class="mdui-textfield-error">用户名不能为空</div>
    </div>

    <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">Email</label>
      <input class="mdui-textfield-input" type="email" required />
      <div class="mdui-textfield-error">邮箱格式错误</div>
    </div>

    <div class="mdui-textfield mdui-textfield-floating-label">
      <label class="mdui-textfield-label">Password</label>
      <input
        class="mdui-textfield-input"
        type="text"
        pattern="^.*(?=.{6,})(?=.*[a-z])(?=.*[A-Z]).*$"
        required
      />
      <div class="mdui-textfield-error">密码至少 6 位，且包含大小写字母</div>
      <div class="mdui-textfield-helper">请输入至少 6 位，且包含大小写字母的密码</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserLogin"
};
</script>