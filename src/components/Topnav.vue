<template>
  <div class="header">
    <a href="/" class="logo"
      ><img :src="logo" alt="" />
      <div>
        <h1>{{ webname }}</h1>
        <h3>{{ webname2 }}</h3>
      </div></a
    >
    <div class="NavMenu">
      <div
        class="NavMenuItem"
        :class="index == activeItem ? 'active' : ''"
        v-for="(item, index) in list"
        :key="index"
        @click="changed(index)"
      >
        <a style="cursor: pointer"> {{ item.name }}</a>
      </div>
    </div>
    <div class="login">登录 / 注册</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      webname: "橙子星选",
      webname2: "ORANGEWEBSITE",
      activeItem: null,
      logo: require("@/assets/images/logo.png"),
      list: [
        { name: "首页", page: "Home" },
        { name: "产品", page: "System" },
        { name: "产品优势", page: "Home" },
        { name: "关于我们", page: "About" },
        { name: "帮助中心", page: "Help" },
      ],
    };
  },
  mounted() {
    let path = window.location.pathname;
    let hash = window.location.hash;
    if (path == "/") {
      if (hash == "#advantage") {
        this.activeItem = 2;
      } else {
        this.activeItem = 0;
      }
    } else if (path == "/about") {
      this.activeItem = 3;
    } else if (path == "/system") {
      this.activeItem = 1;
    } else if (path == "/help") {
      this.activeItem = 4;
    }
  },
  methods: {
    changed(index) {
      this.activeItem = index;
      if (index == 2) {
        window.location.href = "/#advantage";
      } else {
        this.$router.push({ name: this.list[index].page });
      }
    },
  },
};
</script>

<style lang="less" scoped>
p,
div {
  word-wrap: break-word;
  word-break: break-all;
}

img {
  max-width: 100%;
  display: inline-block;
  border: 0;
}

img {
  display: inline-block;
  border: none;
  vertical-align: middle;
}
a {
  color: #6c6c6c;
  text-decoration: none;
}
a,
b,
i,
em,
span {
  display: inline-block;
}

a {
  color: #333;
  text-decoration: none;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 1200px;
  z-index: 999;
  background: white;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.06);
  //   background: orange;
  height: 45px;
  overflow: hidden;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-content: center;
  .login {
    cursor: pointer;
  }
  .NavMenu {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 200px;
    font-size: 14px;
    .NavMenuItem {
      padding: 0 24px;
      a {
        display: inline-block;
        line-height: 45px;
      }
      a:hover {
        color: #2f69ea;
      }
    }
    .active > a {
      color: #2f69ea;
      border-bottom: 2px #2f69ea solid;
    }
    .active > a::after {
      content: "";
      display: flex;
      position: relative;
      background: #2f69ea;
      // width: 40px;
      // height: 2px;
    }
  }
  .login {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .logo {
    color: #ff9b1f;
    display: flex;
    align-items: center;
    h1 {
      font-weight: 900;
      font-style: normal;
      font-size: 25px;
      margin: 0;
      line-height: 1;
    }
    h3 {
      font-weight: 650;
      font-style: normal;
      font-size: 13px;
      margin: 0;
    }
    a {
      font-size: 14px;
      color: #333333;
      text-decoration: unset;
    }
    img {
      width: auto;
      height: 39px;
      margin-right: 10px;
    }
    div {
      margin-top: 5px;
    }
  }
}
</style>
