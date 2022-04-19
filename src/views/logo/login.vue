<!-- 用户登录界面 -->
<template>
  <div id="login">
    <div class="bg"></div>
    <el-row class="main-container">
      <el-col :lg="8" :xs="16" :md="10" :span="10">
        <div class="bottom">
          <div class="container">
            <p class="title">房屋出租信息系统</p>
            <el-form
              :label-position="labelPosition"
              label-width="80px"
              :model="parameter"
            >
              <el-form-item label="用户名" id="userstyle">
                <el-input
                  v-model.number="parameter.username"
                  placeholder="请输入用户名"
                ></el-input>
              </el-form-item>
              <el-form-item label="密码" id="pwsstyle">
                <el-input
                  v-model="parameter.password"
                  placeholder="请输入密码"
                  type="password"
                ></el-input>
              </el-form-item>
              <div class="submit">
                <el-button type="primary" class="row-login" @click="login()"
                  >登录</el-button
                >
              </div>
              <div class="options">
                <p class="find"><a href="javascript:;"></a></p>
                <div class="register">
                  <!-- <span>没有账号?</span>
                  <span
                    ><a href="javascript:;" @click="goRegistered()"
                      >去注册</a
                    ></span
                  > -->
                </div>
              </div>
            </el-form>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mixins } from "@/mixins";
import { getAction, postAction } from "@/api/methods.js";
export default {
  name: "login",
  // mixins: [mixins],
  data() {
    return {
      url: "/login",
      parameter: {
        username: "admin",
        password: "admin123"
      },
      labelPosition: "left"
    };
  },

  methods: {
    //用户登录请求后台处理
    login() {
      console.log("登录操作执行-------");
      postAction(this.url, this.parameter).then((res) => {
        if (res.msg == "登陆成功") {
          this.$message({
            message: "登陆成功",
            type: "success"
          });
          this.$router.push("/dashboard");
        } else if (res.msg == "密码错误") {
          this.$message.error(res.msg);
        } else {
          this.$message(res.msg);
        }
      });
    }

    // goRegistered() {
    //   console.log("去注册");
    // }
  }
};
</script>

<style lang="scss" scoped>
.remind {
  border-radius: 4px;
  padding: 10px 20px;
  display: flex;
  position: fixed;
  left: 20px;
  bottom: 2%;
  flex-direction: column;
  color: #606266;
  background-color: #fff;
  border-left: 4px solid #409eff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.container {
  margin-bottom: 32px;
}
.container .el-radio-group {
  margin: 30px 0px;
}
a:link {
  color: #ff962a;
  text-decoration: none;
}
#login {
  font-size: 14px;
  color: #000;
  background-color: #fff;
}
#login .bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  overflow-y: auto;
  height: 100%;
  background: url("../../assets/img/login-background.jpg") center top / cover
    no-repeat;
  background-color: #b6bccdd1 !important;
}
#login .main-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
#login .main-container .top {
  margin-top: 100px;
  margin-bottom: 20px;
  font-size: 30px;
  color: #ff962a;
  display: flex;
  justify-content: center;
}
#login .top .icon-kaoshi {
  font-size: 80px;
}
#login .top .title {
  margin-top: 20px;
}
#login .bottom {
  margin-top: 30%;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.7);
}
#login .bottom .title {
  text-align: center;
  font-size: 30px;
}
.bottom .container .title {
  margin: 30px 0px;
}
.bottom .submit .row-login {
  width: 100%;
  margin: 20px 0px 10px 0px;
  padding: 15px 20px;
}
.bottom .submit {
  display: flex;
  justify-content: center;
}
.bottom .options {
  margin-bottom: 40px;
  color: #ff962a;
  display: flex;
  justify-content: space-between;
}
.bottom .options > a {
  color: #ff962a;
}
.bottom .options .register span:nth-child(1) {
  color: #fff;
}
.top .iconfont {
  font-size: 60px;
}
</style>
