<template>
  <div
    style="display: flex; justify-content: center"
    class="animate__animated animate__fadeIn"
  >
    <MTSLogo></MTSLogo>
    <div class="homepage-container">
      <h1>
        Добро пожаловать в ваш
        <span
          style="
            text-decoration: underline;
            text-decoration-style: dashed;
            color: #e30611;
          "
        >
          умный</span
        >
        офис
      </h1>
      <HrRed />
      <h2>Для начала, стоит войти в аккаунт:</h2>
      <div class="login-buttons-container">
        <n-button size="xl" block color="#e30611" @click="goToLoginPage">
          Войти
        </n-button>
        <n-button
          size="large"
          block
          color="#e30611"
          flat
          style="margin-top: 1rem"
          @click="goToRegisterPage"
        >
          У меня еще нет аккаунта
        </n-button>
        <n-button
          size="large"
          block
          icon
          color="#e30611"
          flat
          style="margin-top: 1rem"
          @click="goToHelpPage"
        >
          <i class="bx bx-help-circle" style="margin-right: 0.5rem"></i>
          Мне нужна помощь
        </n-button>
      </div>
      <p style="bottom: 0">© 2023 ПАО «МТС» Все права защищены</p>
    </div>
  </div>
</template>

<script>
import HrRed from "@/components/HrRed.vue";
import MTSLogo from "@/components/MTSLogo.vue";
import {NButton} from "naive-ui"
export default {
  name: "App",
  components: { HrRed, MTSLogo, NButton },
  methods: {
    goToLoginPage() {
      this.$router.push({ name: "Login" });
    },
    goToRegisterPage() {
      this.$router.push({ name: "Registration" });
    },
  },
};
</script>

<style>
@import "../assets/fonts.css";

.login-buttons-container {
  margin: 0 auto;
  width: 30vw;
}

.homepage-container {
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60vw;
  height: 100vh;
}
</style>
