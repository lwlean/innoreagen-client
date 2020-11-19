<template>
    <div class="continer">
        <div class="login-navigator">
            <a target="_blank" href="http://www.innoreagen.com" class="login-alink-home">官方网站</a>
            <a target="_blank" href="">帮助</a>
            <a target="_blank" href="">注册</a>
        </div>
        <picture class="login-pic">
            <img src="../assets/innoreagen.png" alt="">
        </picture>
        <form class="wrapper">
            <div class="login-header">
                <h1>账号登陆</h1>
            </div>
            <input type="text" class="login-input" name="" id="username" v-model="username"  placeholder="账号或手机号或邮箱号" autocomplete="off" />
            <input type="password" class="login-input" name="" id="passwrod" v-model="password" placeholder="密码" />
            <div class="login-submit" @click="login">登录</div>
        </form>
        <div class="login-footer">
            <span>Copyright © 2020 新研创能源科技有限公司 All rights reserved. 保留一切权利 </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            if (this.username === '' || this.username === null || this.username === undefined) {
                this.myError('用户名不能为空');
            }
            console.log('route:', this)
            this.$router.push('/home');
        },
        myError(msg) {
            console.log(msg);
            this.$notify.error({
                title: '错误',
                message: `${msg}`,
            })
        },
    },
}
</script>

<style>
* {
    margin: 0;
}

.continer {
    /* width: 100%; */
    position: relative;
    min-width: 1500px;
    height: 100vh;
    background-color: rgba(23, 34, 59, 1);
    color: deepskyblue;
    font-size: 16px;
}

.login-navigator {
    position: absolute;
    width: 100vw;
    top: 27px;
    right: 40px;
    text-align: right;
    line-height: 17px;
}

.login-navigator>a {
    display: inline-block;
    padding-left: 12px;
    color: snow;
    text-decoration: none;
}

.login-navigator .login-alink-home::after {
    content: "";
    display: inline-block;
    vertical-align: middle;
    margin-top: -2px;
    margin-left: 12px;
    width: 1px;
    height: 12px;
    background-color: #c2c2c2;
    font-size: 0;
}

.login-pic {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10%;
}

.wrapper {
    position: absolute;
    right: 250px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1em;
    text-align: center;
    padding: auto;
    width: 20vw;
    min-width: 384px;
    height: 35vh;
    min-height: 327px;
    /* text-transform: uppercase; */
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 5px 5px 10px black;
}

.wrapper .login-header {
    text-align: center;
    padding-top: 30px;
    font-size: 1em;
    user-select: none;
    background-color: transparent;
}

.wrapper .login-input {
    font-size: 1em;
    color: deepskyblue;
    display: block;
    margin: 30px auto;
    line-height: 30px;
    justify-content: center;
    background: transparent;
    width: 282px;
    outline: none;
    border-style: none;
    border-bottom: 1px solid whitesmoke;
    transition: font-size 0.3s linear;
}

.login-input:focus {
    font-size: 1.25em;
    background-color: transparent;
}

.login-input::placeholder {
    color: gray;
}

.wrapper .login-submit {
    margin: auto;
    margin-top: 50px;
    width: 282px;
    background: rgba(33, 150, 243, 0.3);
    border-radius: 50px;
    padding: 5px;
    cursor: pointer;
    padding: 10px;
    color: turquoise;
    user-select: none;
}

.login-submit:hover {
    box-shadow: 1px 1px 10px deepskyblue;
}

.login-footer {
    position: absolute;
    bottom: 10px;
    left: 50%;
    font-size: 0.5em;
    transform: translateX(-50%);
}
</style>
