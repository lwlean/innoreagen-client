<template>
  <el-container class="home-container">
    <el-header>
      <span>{{ headerInfo }}</span>
      <div class="home-user-info">
        <div class="user-profile">
          <i class="el-icon-user"></i>{{ userInfo.username }}
        </div>
        <a class="user-quit" @click="quit">退出</a>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background: #2c3e50">
        <el-menu
          router
          defaut-active=""
          text-color="#fff"
          active-text-color="#f39c12"
          background-color="#2c3e50"
        >
          <el-menu-item
            v-for="(item, i) in navList"
            :key="i"
            :index="item.link"
          >
            <i :class="item.icon"></i>
            <span solt="title">{{ item.title }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
    <el-footer height="30px"
      ><span>{{ footerInfo }}</span></el-footer
    >
  </el-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      userInfo: {
        username: "llw",
      },
      headerInfo: "新研创能数据后台管理",
      footerInfo:
        "Copyright © 2020 新研创能源科技有限公司 All rights reserved. 保留一切权利",
      navList: [
        {
          index: "0",
          icon: "el-icon-s-home",
          title: "首页展示",
          link: "/show",
        },
        {
          index: "1",
          icon: "el-icon-s-platform",
          title: "页面监控",
          link: "/monitor",
        },
        {
          index: "2",
          icon: "el-icon-s-data",
          title: "数据查询",
          link: "/data",
        },
        {
          index: "3",
          icon: "el-icon-user",
          title: "用户管理",
          link: "/user",
        },
        {
          index: "4",
          icon: "el-icon-setting",
          title: "系统设置",
          link: "/settings",
        },
      ],
    };
  },
  methods: {
    quit() {
      this.$router.push("/login");
    },
  },
  mounted() {
    let username = this.$store.getters.getUsername;
    console.log(`monitor username: ${username}`);
    this.userInfo.username = username;
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.home-container {
  width: 100vw;
  height: 100vh;
}

.el-header {
  background-color: rgba(23, 34, 59, 1);
  line-height: 60px;
  color: whitesmoke;
  display: flex;
  flex-direction: row;
}
.el-header > span {
  font-size: 1.5em;
  color: #3498db;
  left: 10px;
  flex: 9;
}
.el-header .home-user-info {
  top: 20px;
  flex: 1;
  display: flex;
}

.el-header .home-user-info .user-profile {
  margin-right: 10px;
  flex: 1;
}

.el-header .home-user-info .user-quit {
  flex: 1;
  cursor: pointer;
  user-select: none;
}

.user-quit:hover {
  color: deepskyblue;
}

.el-footer {
  padding: 10px;
  background-color: rgba(23, 34, 59, 1);
  text-align: center;
  color: whitesmoke;
  font-size: 1em;
}

.el-aside {
  background-color: #d3dcf9;
  text-align: center;
  line-height: 180px;
}
.el-menu-item {
  width: 200px;
  text-align: center;
  background: rgba(23, 31, 40, 1);
}
.el-menu {
  background-color: #545c64;
}
.el-main {
  background-color: #e9eef3;
  text-align: center;
  line-height: 160px;
}
</style>
