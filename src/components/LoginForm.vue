<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const router = useRouter();
const loginBody = reactive({
  email: "",
  password: "",
});

async function loginUser() {
  const userStore = useUserStore();
  try {
    const response = await userStore.sendLoginForm(loginBody);
    console.log(response);
    localStorage.setItem("access_token", response.data.token);
    router.push({ name: "dashboard" });
  } catch (e) {
    console.log(e);
  }
}
</script>

<template>
  <div class="form__container">
    <form class="decor" @submit.prevent="loginUser">
      <div class="form-left-decoration" />
      <div class="form-right-decoration" />
      <div class="circle" />
      <div class="form-inner">
        <h1>Login</h1>
        <div>
          <input
            v-model.trim="loginBody.email"
            type="email"
            placeholder="Email"
          />
          <input
            v-model.trim="loginBody.password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div class="controls">
          <button type="submit">Login</button>
          <router-link to="/signup">
            <p class="sign-up">Sign up</p>
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.sign-up {
  text-align: center;
  margin: 10px;
  padding: 1px;
  color: rgb(255, 255, 255);
  background-color: rgba(48, 94, 26, 0.425);
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: rgba(82, 165, 44, 0.425);
  }
}

.form__container {
  display: flex;
  justify-content: center;
  align-items: center;
}

* {
  box-sizing: border-box;
}

html,
body {
  min-height: 100vh;
  padding: 0;
  margin: 0;
  font-family: Roboto, Arial, sans-serif;
  font-size: 14px;
  color: #666;
}

input,
textarea {
  outline: none;
}

h1 {
  margin-top: 0;
  font-weight: 500;
}

form {
  position: relative;
  min-height: 500px;
  width: 20%;
  margin-top: 60px;
  border-radius: 30px;
  background: #fff;
}

.form-left-decoration,
.form-right-decoration {
  content: "";
  position: absolute;
  width: 50px;
  height: 20px;
  border-radius: 20px;
  background: #46d352;
}

.form-left-decoration {
  bottom: 60px;
  left: -30px;
}

.form-right-decoration {
  top: 60px;
  right: -30px;
}

.form-left-decoration:before,
.form-left-decoration:after,
.form-right-decoration:before,
.form-right-decoration:after {
  content: "";
  position: absolute;
  width: 50px;
  height: 20px;
  border-radius: 30px;
  background: #fff;
}

.form-left-decoration:before {
  top: -20px;
}

.form-left-decoration:after {
  top: 20px;
  left: 10px;
}

.form-right-decoration:before {
  top: -20px;
  right: 0;
}

.form-right-decoration:after {
  top: 20px;
  right: 10px;
}

.circle {
  position: absolute;
  bottom: 80px;
  left: -55px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
}

.form-inner {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 40px;
  padding: 40px;
}

.form-inner input,
.form-inner textarea {
  display: block;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  border: none;
  border-radius: 20px;
  background: #d0dfe8;
}

.form-inner textarea {
  resize: none;
}

button {
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border-radius: 20px;
  border: none;
  border-bottom: 4px solid #3e4f24;
  background: #5a7233;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
}

button:hover {
  align-self: flex-end;
  background: #3e4f24;
}
</style>
