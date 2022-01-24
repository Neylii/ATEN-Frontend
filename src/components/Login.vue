<template>
  <div
    class="login-main-container"
    v-if="$store.state.showLogin"
    @click.self="handleClick()"
  >
    .
    <div class="outer-container">
      <div class="login-form-container">
        <div class="login-top-container">
          <h3>Login</h3>
        </div>

        <form @submit.prevent="handleSubmit">
          <div>
            <div class="username-container">
              <label for="username">Username:</label><br />
              <input
                type="text"
                placeholder=" Type username"
                name="username"
                v-model="formData.username"
                autocomplete="username"
              />
            </div>

            <div>
              <label for="password">Password:</label><br />
              <input
                type="password"
                placeholder=" Type password"
                name="password"
                v-model="formData.password"
                autocomplete="current-password"
              />
            </div>
          </div>
          <div class="button-container">
            <div class="remember-me-container">
              <label for="autoLogin">Remember me</label>
              <input type="checkbox" v-model="formData.autoLogin" />
            </div>
            <button class="btn" @click="handleCreateAccountClick">
              Create Account
            </button>
            <button type="submit" class="btn" @click="handleLogin()">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import * as jsFile from "../assets/1.js";
import * as consts from "../assets/const.js";

//--------------------------------------------------------------------------
export default {
  name: "Login",
  components: {},
  props: {},
  data() {
    return {
      formData: {
        username: "",
        password: "",
        autoLogin: false,
        email: "",
      },
    };
  },
  methods: {
    //--------------------------------------------------------------------------
    handleClick() {
      this.$store.commit("changeLoginScreen", false);
    },
    handleCreateAccountClick() {
      this.$store.commit("changeLoginScreen", false);
      this.$router.push({ name: "CreateAccount" });
    },
    //--------------------------------------------------------------------------
    handleSubmit() {
      this.$store.commit("changeLoginScreen", false);
    },
    async handleLogin() {
      let json = await this.$store.dispatch(
        "apiCall",
        `loginRequest/${this.formData.username}&${this.getmd5Password()}`
      );

      if (json) {
        let user = {
          username: json.username,
        };

        this.$store.commit("updateUserInfo", user);
        this.$store.commit("changeLoginStatus", true);
        if (this.formData.autoLogin) {
          this.$store.commit("setUsernameToCookie", user.username);
        }
      }
    },
    getmd5Password() {
      return jsFile.createMd5(this.formData.password + consts.keys.key);
    },
  },
  //--------------------------------------------------------------------------
  mounted() {},
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
}

.login-main-container {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 100;
  opacity: 1;
}

.login-form-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 10em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: lightblue 2px solid;
  border-radius: 1em 1em 1em 1em;
  padding: 2em 3em 3em 3em;
  text-align: start;
  box-sizing: border-box;
  background-color: #fff;
  z-index: 1001;
}

.login-top-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin-bottom: 1em;
  box-sizing: border-box;
}

input[type="text"],
input[type="password"] {
  font-size: 16px;
  padding: 20px 0px;
  height: 2em;
  width: 100%;
  border: none;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  border-left: solid 1px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  transition: all 0.3s linear;
  font-weight: 400;
  -webkit-appearance: none;
  margin-bottom: 2em;
  margin-top: 0.5em;
  &:focus {
    border-bottom: solid 1px var(--primaryColor);
    border-left: solid 1px var(--primaryColor);
    outline: 0;
    box-shadow: 0 2px 6px -8px rgba(var(--primaryColor), 0.45);
  }
}

.remember-me-container {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row: 1;
}

input[type="checkbox"] {
  transform: scale(2);
  margin-left: 1em;
}

.button-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
}

.btn {
  background-color: rgb(136, 195, 255);
}

.btn:hover {
  background-color: #39f;
}
</style>
