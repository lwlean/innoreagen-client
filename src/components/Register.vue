<template>
  <el-continer direction="vertical">
      <el-header class="register-header">
          <a class="register-a" target="_self" href="/login">已有账户转到登录</a>
      </el-header>
      <el-main>
          <div class="register-wrapper">
              <div class="register-title">
                  <h1>欢迎注册新研创能</h1>
              </div>
              <input type="username" id="register-username" class="register-input" placeholder="输入用户名">
              <div class="register-tip-username">6～18个字符，可使用字母、数字、下划线，需要以字母开头</div>
              <input type="password" id="register-password" class="register-input" placeholder="输入用户密码">
              <div class="register-tip-password">6～16个字符，区分大小写</div>
              <input type="repassword" id="register-repassword" class="register-input" placeholder="确认用户密码">
              <el-button type="info">登录</el-button>
          </div>
      </el-main>
  </el-continer>
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {

        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
body {
    height: 100%;

}
.register-header {
    background: #2d3436;
    color: #ffffff;
}
.register-a {
    position: absolute;
    display: inline-block;
    right: 30px;
    padding-left: 20px;
    text-decoration: none;
    color: snow;
}

.register-a::before {
    content: '';
    border-left: 1px solid snow;
    margin-right: 10px;
}

.el-main {
    /* position: relative; */
    /* height: 90vh; */
    background: #dcdde1;
    padding: 0;
}

.register-wrapper {
    width: 470px;
    margin: auto;
    margin-top: 200px;
    margin-bottom: 200px;
    border-radius: 2px;
    overflow: hidden;
    border: 1px solid grey;
    height: 470px;
    padding: 20px;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);
}

.register-title {
    text-align: center;
    /* margin-bottom: 10px; */
}

.register-wrapper .register-input {
    display: block;
    width: 400px;
    margin: auto;
    line-height: 30px;
    margin-top: 30px;
    color:snow;
    border-style: none;
    font-size: 18px;
    outline: none;
    border-bottom: 1px solid skyblue;
    background: transparent;
}

.register-input::placeholder {
    color: slategray;
}

.register-tip {
    display: none;
    line-height: 16px;
    margin-top: 5px;
    margin-left: 36px;
    text-align: left;
}

.register-tip .register-tip-username {
    display: none;
    line-height: 16px;
    margin-top: 5px;
    margin-left: 36px;
    text-align: left;
}

#register-username:focus ~ .register-tip-username {
    display: block;
}





</style>